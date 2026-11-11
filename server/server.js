import express from "express";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { initDb } from "./db.js";
import { actionHandlers } from "./actions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distPath = path.resolve(rootDir, "dist");

const isDevMode = process.argv.includes("--dev");
const PRIMARY_PORT = process.env.PORT || 3333;
const SECONDARY_PORT = 3000;

async function startServer() {
  // 1. Initialize SQLite Database & seed sample data if needed
  initDb();

  const app = express();
  app.use(express.json({ limit: "10mb" }));

  // Serve logo & icons
  app.get("/logo.png", (_req, res) => {
    res.sendFile(path.resolve(rootDir, "logo.png"));
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "Thẻ Trả Lời", time: new Date().toISOString() });
  });

  // 2. Action RPC API endpoint
  app.post("/api/actions", async (req, res) => {
    const { action, args } = req.body;
    if (!action) {
      return res.status(400).json({ error: "Thiếu tên action" });
    }

    const handler = actionHandlers[action];
    if (!handler) {
      return res.status(404).json({ error: `Không tìm thấy action: ${action}` });
    }

    try {
      const result = await handler(args || {});
      res.json(result);
    } catch (err) {
      console.error(`[API Error] ${action}:`, err);
      res.status(500).json({ error: err.message || "Lỗi xử lý hệ thống" });
    }
  });

  // 3. Frontend serving
  if (isDevMode) {
    console.log("⚡ Chế độ phát triển Vite HMR đang bật...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
      root: rootDir,
    });
    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      if (url.startsWith("/api")) return next();
      try {
        const indexPath = path.resolve(rootDir, "index.html");
        let template = fs.readFileSync(indexPath, "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    console.log("🚀 Phục vụ giao diện tối ưu từ thư mục dist...");

    // Static assets inside dist
    app.use(express.static(distPath, { maxAge: "1d", index: false }));

    // Send index.html with no-cache headers for instant updates on browser refresh
    app.use("*", (req, res, next) => {
      if (req.originalUrl.startsWith("/api")) return next();
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  // Listen on PRIMARY_PORT (3333 - completely clean port, no Service Worker conflict)
  app.listen(PRIMARY_PORT, () => {
    console.log(`\n==================================================`);
    console.log(`🎉 Ứng dụng "Thẻ Trả Lời" đang chạy tại:`);
    console.log(`👉 http://localhost:${PRIMARY_PORT} (Khuyên dùng - Cổng riêng biệt không bị đụng cache)`);
    console.log(`==================================================`);
  });

  // Also listen on SECONDARY_PORT (3000) if not occupied by another instance
  try {
    const server3000 = app.listen(SECONDARY_PORT, () => {
      console.log(`👉 http://localhost:${SECONDARY_PORT} (Đã sẵn sàng)`);
      console.log(`==================================================\n`);
    });
    server3000.on("error", (e) => {
      if (e.code === "EADDRINUSE") {
        console.log(`ℹ️ Cổng ${SECONDARY_PORT} đang bận, dùng cổng chính ${PRIMARY_PORT}.`);
      }
    });
  } catch {
    // Ignore if 3000 cannot be bound
  }
}

startServer().catch((err) => {
  console.error("Lỗi khởi động máy chủ:", err);
  process.exit(1);
});

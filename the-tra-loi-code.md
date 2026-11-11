# Thẻ Trả Lời — Mã nguồn

Đây là toàn bộ mã nguồn gốc của web/app **Thẻ Trả Lời** (kiểu Plickers): học sinh chỉ dùng thẻ giấy A4 in đen trắng, xoay cạnh đáp án A / B / C / D lên trên rồi giơ cao; giáo viên tạo lớp, in thẻ, soạn ngân hàng câu hỏi, mở buổi học trình chiếu, quét lớp và xem kết quả đúng/sai tức thì kèm bảng điểm.

Mã nguồn được xuất nguyên văn từ thư mục dự án `ts-spaces/the-tra-loi/` — không sửa đổi nội dung từng file. Các file đã biên dịch (`dist/`, `.space-build/`), `node_modules/`, `bun.lock`, file cơ sở dữ liệu `app.db` và hồ sơ audit không nằm trong bản xuất này.

## Công nghệ

- Giao diện: React 19 + TypeScript, đóng gói bằng Bun (`client/build.mjs`), biểu đồ Recharts, Tailwind CSS 4.
- Máy chủ: Bun + bộ công cụ Hatch Space SDK, cơ sở dữ liệu SQLite qua Drizzle ORM (`server/src/schema.ts`, `server/src/actions.ts`, thư mục `drizzle/`).
- Lệnh kiểm tra và đóng gói (trong `package.json`): `bun run typecheck`, `bun run build`.

## Cấu trúc thư mục

```
the-tra-loi/
├── package.json
├── tsconfig.base.json
├── client/
│   ├── index.html
│   ├── build.mjs
│   ├── tsconfig.json
│   └── src/
│       ├── main.tsx
│       ├── api.ts
│       ├── theme.css
│       ├── globals.d.ts
│       └── App.tsx        ← toàn bộ giao diện: Lớp học / In thẻ / Ngân hàng câu hỏi / Buổi học / Quét lớp / Kết quả
├── server/
│   ├── tsconfig.json
│   └── src/
│       ├── schema.ts      ← lược đồ bảng dữ liệu
│       └── actions.ts     ← các hành động máy chủ (API)
└── drizzle/
    ├── 0001_initial.sql
    └── 0002_the_tra_loi_tables.sql
```


## File: `package.json`

```json
{
  "name": "hatch-ts-space-the-tra-loi",
  "private": true,
  "type": "module",
  "packageManager": "bun@1.3.10",
  "scripts": {
    "typecheck": "bun x tsc --noEmit -p client/tsconfig.json && bun x tsc --noEmit -p server/tsconfig.json",
    "build": "bun run build:server && bun run build:client",
    "build:server": "cd server && bun build ./src/actions.ts --target=bun --outfile=./dist/actions.js",
    "build:client": "bun ./client/build.mjs"
  },
  "dependencies": {
    "@hatch/space-sdk": "file:/opt/hatch/skills/spaces/ts-runtime/dist/space-sdk.tgz",
    "@tanstack/react-query": "5.100.10",
    "drizzle-orm": "0.45.2",
    "react": "19.2.5",
    "react-dom": "19.2.5",
    "recharts": "2.15.3",
    "zod": "4.4.3"
  },
  "devDependencies": {
    "@types/bun": "1.4.2",
    "@types/react": "19.2.14",
    "@types/react-dom": "19.2.3",
    "tailwindcss": "4.1.13",
    "tailwindcss-safe-area": "1.3.0",
    "typescript": "5.6.3"
  }
}
```

## File: `tsconfig.base.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Preserve",
    "moduleDetection": "force",
    "moduleResolution": "bundler",
    "allowJs": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo"
  }
}
```

## File: `client/index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
    <meta name="color-scheme" content="light dark" />
    <!-- Empty inline icon: stops the browser fetching /favicon.ico, which
         lives outside the space's routes and fails auth. -->
    <link rel="icon" href="data:," />
    <title>Thẻ Trả Lời</title>
    <script src="./src/main.tsx" type="module"></script>
  </head>
  <body>
    <div
      data-generated-space-root=""
      data-generated-space-slug="the-tra-loi"
    ></div>
  </body>
</html>
```

## File: `client/build.mjs`

```javascript
// Client bundle for the space.
//
// Bundling is owned by the SDK so every space produces an identical
// production-mode React bundle. See @hatch/space-sdk/build for the
// canonical Bun.build() configuration (entrypoint, outdir, NODE_ENV
// define, asset naming, tailwind plugin).

import { buildClient } from "@hatch/space-sdk/build";

await buildClient();
```

## File: `client/tsconfig.json`

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["ES2022", "DOM"],
    "jsx": "react-jsx",
    "types": ["bun-types", "react", "react-dom"],
    "rootDir": "..",
    "tsBuildInfoFile": "./.tsbuildinfo.client",
    "paths": {
      "@space/server/*": ["../server/src/*"],
      "@space/privileged": ["../server/.generated/privileged.contract"]
    }
  },
  "include": ["src/**/*", "../server/src/**/*"]
}
```

## File: `client/src/main.tsx`

```tsx
import { spaceQueryClient } from "@hatch/space-sdk/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./theme.css";

const rootEl = document.querySelector<HTMLElement>("[data-generated-space-root]");
if (!rootEl) {
  throw new Error("missing generated space root element");
}

// If you edit this file: keep `<QueryClientProvider client={spaceQueryClient}>`
// wrapping the app (every space shares the SDK's QueryClient), and keep
// BOTH the `hatch-space-root` class AND the `data-hatch-space-root`
// attribute on the outer div. The SDK styles select on
// `.hatch-space-root[data-hatch-space-root]` to apply mobile safe-area
// insets (notches, gesture bars, etc.), correct viewport sizing, and the
// hosting header/chrome offsets — dropping either breaks layout silently.
createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={spaceQueryClient}>
      <div className="hatch-space-root" data-hatch-space-root>
        <App />
      </div>
    </QueryClientProvider>
  </StrictMode>,
);
```

## File: `client/src/api.ts`

```ts
// Typed RPC client. Types come straight from `server/src/actions.ts` — no
// codegen. `createActionClient` returns a proxy that POSTs `{action, args}`
// to `./actions` and returns the typed response.
//
// `import type { Actions }` is type-only by design: the client bundle never
// pulls in any server runtime (bun:sqlite, file APIs, etc.). With
// `verbatimModuleSyntax: true`, dropping `type` is a compile error.

import type { Actions } from "../../server/src/actions";
import { createActionClient } from "@hatch/space-sdk/client";

export const api = createActionClient<typeof Actions>();

// Re-exported for convenience so client code can do
//
//     import { api, type ApiResponse } from "./api";
//     type Article = ApiResponse<typeof api, "listArticles">["articles"][number];
//
// They are also available directly from "@hatch/space-sdk/client".
export type { ApiRequest, ApiResponse } from "@hatch/space-sdk/client";
```

## File: `client/src/theme.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap');
@import "tailwindcss";
@import "tailwindcss-safe-area";

@theme {
  --text-xs: 12px;
  --text-xs--line-height: 16px;
  --text-sm: 14px;
  --text-sm--line-height: 20px;
  --text-base: 16px;
  --text-base--line-height: 24px;
  --text-lg: 18px;
  --text-lg--line-height: 28px;
  --text-xl: 20px;
  --text-xl--line-height: 28px;
  --text-2xl: 24px;
  --text-2xl--line-height: 32px;
  --text-3xl: 30px;
  --text-3xl--line-height: 36px;
  --text-4xl: 36px;
  --text-4xl--line-height: 40px;
  --font-sans: "Be Vietnam Pro", system-ui, sans-serif;
}

:root {
  color-scheme: light;
  --bg: #fff6e5;
  --surface: #fffdf7;
  --text: #1f2430;
  --dim: #6d7285;
  --border: #eadfc6;
  --accent: #f97316;
  --navy: #232a6b;
  --navy-deep: #171c48;
  --radius: 14px;
  --space-surface: var(--surface);
  --space-surface-alt: var(--surface);
  --space-muted: var(--dim);
  --space-border: var(--border);
  --space-accent: var(--accent);
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text);
}

@layer base {
  button, [role="button"], select, summary, input:not([type="checkbox"], [type="radio"]) {
    min-height: 2.25rem;
  }
}

/* ---------- Print: only the card sheets ---------- */
@media print {
  body * { visibility: hidden; }
  .print-area, .print-area * { visibility: visible; }
  .print-area {
    position: absolute !important;
    inset: 0 auto auto 0 !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    background: #fff !important;
    overflow: visible !important;
  }
  .print-sheet {
    box-shadow: none !important;
    margin: 0 auto !important;
    page-break-after: always;
    break-after: page;
  }
  .print-sheet:last-child { page-break-after: auto; break-after: auto; }
  @page { size: A4; margin: 8mm; }
}

@keyframes scanline {
  0% { top: 4%; }
  50% { top: 92%; }
  100% { top: 4%; }
}
@keyframes popin {
  from { transform: scale(0.6); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.pop-in { animation: popin 0.25s ease-out both; }
.scan-line { animation: scanline 2.2s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .scan-line, .pop-in { animation: none; }
}
```

## File: `client/src/globals.d.ts`

```ts
declare module "*.css";
```

## File: `client/src/App.tsx`

```tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SafeAreaTopScrim } from "@hatch/space-sdk/client";
import { api, type ApiResponse } from "./api";

// ---------- Types ----------
type Overview = ApiResponse<typeof api, "getOverview">;
type ClassRow = Overview["classes"][number];
type BankRow = Overview["banks"][number];
type SessionRow = Overview["sessions"][number];
type Student = ApiResponse<typeof api, "listStudents">["students"][number];
type BankQuestion = ApiResponse<typeof api, "listBankQuestions">["questions"][number];
type SessionDetail = ApiResponse<typeof api, "getSession">;
type SQuestion = SessionDetail["questions"][number];

type Answer = "A" | "B" | "C" | "D";
const ANSWERS: Answer[] = ["A", "B", "C", "D"];
const ANSWER_COLORS: Record<Answer, string> = {
  A: "#EF476F",
  B: "#118AB2",
  C: "#FFB703",
  D: "#06D6A0",
};

type View =
  | { kind: "home" }
  | { kind: "classes" }
  | { kind: "print" }
  | { kind: "banks" }
  | { kind: "sessions" }
  | { kind: "room"; sessionId: number };

// ---------- Marker (mã đen trắng duy nhất theo số thẻ) ----------
function markerBit(stt: number, seed: number, i: number): boolean {
  let h = (stt + 1) * 374761393 + i * 668265263 + seed * 974634 + 1442695041;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h >>> 16) & 1) === 1;
}

export function MarkerSVG({ stt, seed, size = 120 }: { stt: number; seed: number; size?: number }) {
  const cells: React.ReactNode[] = [];
  const n = 5;
  const cell = 100 / n;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const i = r * n + c;
      // Góc cố định giúp phân biệt hướng xoay của thẻ
      let black = markerBit(stt, seed, i);
      if (i === 0) black = true;
      if (i === n * n - 1) black = false;
      if (i === n - 1) black = true;
      if (black) {
        cells.push(
          <rect key={i} x={c * cell} y={r * cell} width={cell + 0.5} height={cell + 0.5} fill="#111" />,
        );
      }
    }
  }
  return (
    <svg width={size} height={size} viewBox="-8 -8 116 116" aria-label={`Mã thẻ số ${stt}`} role="img">
      <rect x={-8} y={-8} width={116} height={116} fill="#111" />
      <rect x={-3} y={-3} width={106} height={106} fill="#fff" />
      {cells}
    </svg>
  );
}

// Mini decorative code (góc thẻ, giống ô QR nhỏ trong video)
function MiniCode({ stt, seed }: { stt: number; seed: number }) {
  const bits: React.ReactNode[] = [];
  const n = 6;
  const cell = 100 / n;
  for (let i = 0; i < n * n; i++) {
    if (markerBit(stt + 40, seed + 7, i)) {
      bits.push(
        <rect key={i} x={(i % n) * cell} y={Math.floor(i / n) * cell} width={cell + 0.5} height={cell + 0.5} fill="#111" />,
      );
    }
  }
  return (
    <svg width={26} height={26} viewBox="0 0 100 100" aria-hidden="true">
      <rect width={100} height={100} fill="#fff" stroke="#111" strokeWidth={5} />
      {bits}
    </svg>
  );
}

// ---------- Thẻ trả lời (1 học sinh) ----------
export function AnswerCard({
  student,
  className,
  seed,
  large = false,
}: {
  student: Student;
  className: string;
  seed: number;
  large?: boolean;
}) {
  const sttLabel = String(student.stt).padStart(2, "0");
  return (
    <div
      className="relative bg-white text-black select-none"
      style={{
        border: "2px solid #d8d8d8",
        borderRadius: 10,
        aspectRatio: large ? "1.30" : "1.42",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <span style={{ position: "absolute", top: "4.5%", left: "50%", transform: "translateX(-50%)", fontWeight: 800, fontSize: large ? 30 : 20 }}>A</span>
      <span style={{ position: "absolute", bottom: "4%", left: "50%", transform: "translateX(-50%)", fontWeight: 800, fontSize: large ? 30 : 20 }}>C</span>
      <span style={{ position: "absolute", left: "4.5%", top: "50%", transform: "translateY(-50%)", fontWeight: 800, fontSize: large ? 30 : 20 }}>D</span>
      <span style={{ position: "absolute", right: "4.5%", top: "50%", transform: "translateY(-50%)", fontWeight: 800, fontSize: large ? 30 : 20 }}>B</span>
      <span style={{ position: "absolute", top: "5%", right: "6%", fontWeight: 800, fontSize: large ? 26 : 17 }}>{sttLabel}</span>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <MarkerSVG stt={student.stt} seed={seed} size={large ? 190 : 118} />
      </div>
      <div style={{ position: "absolute", left: "6%", bottom: "5.5%", fontSize: large ? 15 : 11.5, lineHeight: 1.35, maxWidth: "62%" }}>
        <div style={{ fontWeight: 700 }}>{student.name}</div>
        <div style={{ color: "#555" }}>{className} · Thẻ số {student.stt}</div>
      </div>
      <div style={{ position: "absolute", right: "6%", bottom: "5%" }}>
        <MiniCode stt={student.stt} seed={seed} />
      </div>
    </div>
  );
}

// ---------- Small UI helpers ----------
function Btn({
  children,
  onClick,
  color = "#232a6b",
  textColor = "#fff",
  disabled,
  ariaLabel,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  textColor?: string;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm font-bold transition active:scale-[0.97] disabled:opacity-40 ${className}`}
      style={{ background: color, color: textColor, minHeight: 40 }}
    >
      {children}
    </button>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-3 mt-7 first:mt-0">
      <h2 className="text-xl font-extrabold" style={{ color: "#232a6b" }}>{children}</h2>
      {sub ? <p className="mt-0.5 text-sm" style={{ color: "var(--dim)" }}>{sub}</p> : null}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border bg-white px-3 py-2 text-base outline-none focus:ring-2";
const inputStyle = { borderColor: "var(--border)", ["--tw-ring-color" as string]: "#f97316" } as React.CSSProperties;

// ---------- Question form (dùng cho ngân hàng + gõ nhanh) ----------
type QDraft = { content: string; option_a: string; option_b: string; option_c: string; option_d: string; correct: Answer };

export function emptyQ(): QDraft {
  return { content: "", option_a: "", option_b: "", option_c: "", option_d: "", correct: "A" };
}

export function QuestionForm({
  value,
  onChange,
  compact = false,
}: {
  value: QDraft;
  onChange: (q: QDraft) => void;
  compact?: boolean;
}) {
  const set = (patch: Partial<QDraft>) => onChange({ ...value, ...patch });
  return (
    <div className="space-y-2">
      <textarea
        aria-label="Nội dung câu hỏi"
        placeholder="Nội dung câu hỏi…"
        value={value.content}
        onChange={(e) => set({ content: e.target.value })}
        rows={compact ? 2 : 3}
        className={inputCls}
        style={inputStyle}
      />
      {ANSWERS.map((L) => (
        <div key={L} className="flex items-center gap-2">
          <label className="flex items-center gap-1.5" title={`Đáp án đúng là ${L}`}>
            <input
              type="radio"
              aria-label={`Đánh dấu đáp án đúng là ${L}`}
              checked={value.correct === L}
              onChange={() => set({ correct: L })}
              className="h-5 w-5 accent-emerald-600"
            />
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white"
              style={{ background: ANSWER_COLORS[L] }}
            >
              {L}
            </span>
          </label>
          <input
            aria-label={`Phương án ${L}`}
            placeholder={`Phương án ${L}…`}
            value={value[`option_${L.toLowerCase()}` as keyof QDraft] as string}
            onChange={(e) => set({ [`option_${L.toLowerCase()}`]: e.target.value } as Partial<QDraft>)}
            className={inputCls}
            style={inputStyle}
          />
        </div>
      ))}
      <p className="text-xs" style={{ color: "var(--dim)" }}>Chạm nút tròn bên trái để chọn đáp án đúng.</p>
    </div>
  );
}

// ---------- App shell ----------
export function App() {
  const [view, setView] = useState<View>({ kind: "home" });
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
  const [selectedBankId, setSelectedBankId] = useState<number | null>(null);

  const overview = useQuery({ queryKey: ["overview"], queryFn: () => api.getOverview({}) });
  const classes = overview.data?.classes ?? [];
  const banks = overview.data?.banks ?? [];
  const sessions = overview.data?.sessions ?? [];

  useEffect(() => {
    if (selectedClassId == null && classes.length > 0) setSelectedClassId(classes[0]?.id ?? null);
  }, [classes, selectedClassId]);
  useEffect(() => {
    if (selectedBankId == null && banks.length > 0) setSelectedBankId(banks[0]?.id ?? null);
  }, [banks, selectedBankId]);

  const selectedClass = classes.find((c) => c.id === selectedClassId) ?? null;

  const tabs: { kind: View["kind"]; label: string }[] = [
    { kind: "home", label: "Trang chủ" },
    { kind: "classes", label: "Lớp học" },
    { kind: "print", label: "In thẻ" },
    { kind: "banks", label: "Câu hỏi" },
    { kind: "sessions", label: "Buổi học" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <SafeAreaTopScrim backgroundColor="var(--bg)" />
      <header className="sticky top-0 z-30 pt-safe" style={{ background: "var(--navy)", boxShadow: "0 2px 14px rgba(23,28,72,.35)" }}>
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5">
          <button
            type="button"
            aria-label="Về trang chủ Thẻ Trả Lời"
            onClick={() => setView({ kind: "home" })}
            className="flex items-center gap-2 text-left"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
              <MarkerSVG stt={7} seed={3} size={24} />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-black text-white">Thẻ Trả Lời</span>
              <span className="block text-[11px] font-medium" style={{ color: "#FFC53D" }}>Không cần điện thoại · Không cần máy bấm</span>
            </span>
          </button>
          <nav aria-label="Điều hướng chính" className="ml-auto flex gap-1 overflow-x-auto">
            {tabs.map((t) => {
              const active = view.kind === t.kind || (view.kind === "room" && t.kind === "sessions");
              return (
                <button
                  key={t.kind}
                  type="button"
                  aria-label={`Mở mục ${t.label}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setView({ kind: t.kind } as View)}
                  className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-bold"
                  style={{
                    background: active ? "#FFC53D" : "rgba(255,255,255,.12)",
                    color: active ? "#232a6b" : "#fff",
                    minHeight: 36,
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-3 pb-16">
        {overview.isPending ? (
          <p className="py-16 text-center text-sm" style={{ color: "var(--dim)" }}>Đang tải dữ liệu…</p>
        ) : overview.error ? (
          <div className="py-16 text-center">
            <p className="text-sm font-semibold text-red-700">Không tải được dữ liệu. Thầy cô thử tải lại trang nhé.</p>
            <Btn onClick={() => overview.refetch()}>Tải lại</Btn>
          </div>
        ) : view.kind === "room" ? (
          <RoomView sessionId={view.sessionId} onExit={() => setView({ kind: "sessions" })} />
        ) : view.kind === "classes" ? (
          <ClassesView
            classes={classes}
            selectedClassId={selectedClassId}
            onSelect={setSelectedClassId}
            onGoPrint={() => setView({ kind: "print" })}
          />
        ) : view.kind === "print" ? (
          <PrintView classes={classes} selectedClass={selectedClass} onSelectClass={setSelectedClassId} onGoClasses={() => setView({ kind: "classes" })} />
        ) : view.kind === "banks" ? (
          <BanksView banks={banks} selectedBankId={selectedBankId} onSelect={setSelectedBankId} />
        ) : view.kind === "sessions" ? (
          <SessionsView
            classes={classes}
            banks={banks}
            sessions={sessions}
            onOpenRoom={(id) => setView({ kind: "room", sessionId: id })}
            onGoClasses={() => setView({ kind: "classes" })}
            onGoBanks={() => setView({ kind: "banks" })}
          />
        ) : (
          <HomeView
            classes={classes}
            banks={banks}
            sessions={sessions}
            onNavigate={(k) => setView({ kind: k } as View)}
            onOpenRoom={(id) => setView({ kind: "room", sessionId: id })}
            onSelectClass={setSelectedClassId}
          />
        )}
      </main>
    </div>
  );
}

// ---------- Home ----------
function HomeView({
  classes,
  banks,
  sessions,
  onNavigate,
  onOpenRoom,
  onSelectClass,
}: {
  classes: ClassRow[];
  banks: BankRow[];
  sessions: SessionRow[];
  onNavigate: (k: "classes" | "print" | "banks" | "sessions") => void;
  onOpenRoom: (id: number) => void;
  onSelectClass: (id: number) => void;
}) {
  const queryClient = useQueryClient();
  const [newClassName, setNewClassName] = useState("");
  const createClass = useMutation({
    mutationFn: async (name: string) => await api.createClass({ name }),
    onSuccess: (r) => {
      queryClient.invalidateQueries({ queryKey: ["overview"] });
      onSelectClass(r.id);
      setNewClassName("");
    },
  });

  const steps = [
    {
      n: 1,
      title: "In thẻ — chỉ làm một lần",
      desc: "Mỗi em một thẻ giấy: mã đen trắng riêng, 4 cạnh A · B · C · D, in sẵn tên và số thứ tự. In một lần, dùng cho mọi buổi học cả năm.",
      cta: "Tới bước In thẻ",
      go: () => onNavigate("print"),
      bg: "#FFF3D6",
    },
    {
      n: 2,
      title: "Mở buổi học",
      desc: "Chọn lớp, lấy câu từ đề có sẵn hoặc tự gõ vài câu nhanh, bấm Tạo buổi học. Máy chiếu hiện câu hỏi với 4 ô đáp án màu.",
      cta: "Tạo buổi học",
      go: () => onNavigate("sessions"),
      bg: "#E3F6EF",
    },
    {
      n: 3,
      title: "Quét thẻ & xem kết quả",
      desc: "Học sinh chọn đáp án nào thì xoay cạnh đó lên trên. Thầy cô quét một lượt cả lớp — kết quả hiện ngay: câu nào nhiều em sai, giảng lại tại chỗ.",
      cta: "Xem các buổi học",
      go: () => onNavigate("sessions"),
      bg: "#E7E9FF",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="relative mt-4 overflow-hidden rounded-3xl px-5 py-8 sm:px-8"
        style={{ background: "linear-gradient(135deg,#171c48,#232a6b 55%,#2f3a9e)" }}
      >
        <div className="relative z-10 max-w-xl">
          <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#FFC53D" }}>Dạy học trên lớp · Thẻ trả lời</p>
          <h1 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">
            Cả lớp trả lời cùng lúc,<br />chỉ bằng một tấm thẻ giấy
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
            Không em nào cần điện thoại. Không cần máy bấm trả lời ABCD đắt tiền — mỗi em một máy bấm… là chuyện cũ.
            Giờ mỗi em chỉ cần một thẻ giấy in sẵn: chọn đáp án nào, xoay cạnh đó lên trên.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Btn color="#F97316" onClick={() => onNavigate("sessions")} ariaLabel="Mở buổi học mới">▶ Mở buổi học</Btn>
            <Btn color="#FFC53D" textColor="#232a6b" onClick={() => onNavigate("print")} ariaLabel="Đi tới phần in thẻ">🖨 In thẻ cho lớp</Btn>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-4 top-6 hidden w-56 rotate-6 sm:block" aria-hidden="true">
          <AnswerCard student={{ id: -1, stt: 7, name: "Đỗ Thu Hiền" }} className="12A1" seed={12} />
        </div>
        <div className="pointer-events-none absolute -right-16 bottom-2 hidden w-44 -rotate-12 opacity-70 sm:block" aria-hidden="true">
          <AnswerCard student={{ id: -2, stt: 23, name: "Trần Văn An" }} className="12A1" seed={12} />
        </div>
      </section>

      {/* Steps */}
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {steps.map((s) => (
          <article key={s.n} className="rounded-3xl p-5" style={{ background: s.bg, border: "1px solid var(--border)" }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-black text-white" style={{ background: "#232a6b" }}>{s.n}</div>
            <h3 className="mt-3 text-lg font-extrabold" style={{ color: "#232a6b" }}>{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#3c4152" }}>{s.desc}</p>
            <button
              type="button"
              onClick={s.go}
              aria-label={s.cta}
              className="mt-4 rounded-full px-4 py-2 text-sm font-bold text-white"
              style={{ background: "#F97316", minHeight: 38 }}
            >
              {s.cta} →
            </button>
          </article>
        ))}
      </div>

      {/* Cách dùng thẻ */}
      <section className="mt-5 rounded-3xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <h3 className="text-lg font-extrabold" style={{ color: "#232a6b" }}>Học sinh dùng thẻ thế nào?</h3>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          <p className="text-sm leading-relaxed"><b>1. Nghe câu hỏi</b> trên máy chiếu, suy nghĩ chọn A, B, C hay D.</p>
          <p className="text-sm leading-relaxed"><b>2. Xoay thẻ</b> cho cạnh mang chữ đáp án mình chọn nằm ở <b>trên cùng</b> — chọn đáp án nào, xoay cạnh đó lên trên.</p>
          <p className="text-sm leading-relaxed"><b>3. Giơ thẻ lên cao</b>, cầm ở phần giấy trắng, <span style={{ background: "#FFC53D", padding: "0 4px", borderRadius: 4, fontWeight: 700 }}>đừng che ô đen</span> ở giữa — đó là phần máy quét đọc đáp án.</p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Classes quick */}
        <section>
          <SectionTitle sub="Số thẻ của mỗi em chính là số thứ tự (STT) trong danh sách lớp này.">Lớp học của thầy cô</SectionTitle>
          {classes.length === 0 ? (
            <div className="rounded-3xl p-5" style={{ background: "var(--surface)", border: "1px dashed var(--border)" }}>
              <p className="text-sm">Chưa có lớp nào. Tạo lớp đầu tiên để bắt đầu in thẻ:</p>
              <div className="mt-3 flex gap-2">
                <input aria-label="Tên lớp mới" placeholder="Ví dụ: 9A1" value={newClassName} onChange={(e) => setNewClassName(e.target.value)} className={inputCls} style={inputStyle} />
                <Btn color="#F97316" disabled={!newClassName.trim() || createClass.isPending} onClick={() => createClass.mutate(newClassName.trim())} ariaLabel="Tạo lớp mới">Tạo lớp</Btn>
              </div>
            </div>
          ) : (
            <ul className="space-y-2">
              {classes.map((c) => (
                <li key={c.id} className="flex items-center gap-3 rounded-2xl px-4 py-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <span className="text-base font-extrabold" style={{ color: "#232a6b" }}>{c.name}</span>
                  <span className="text-sm" style={{ color: "var(--dim)" }}>{c.student_count} học sinh</span>
                  <span className="ml-auto flex gap-2">
                    <button type="button" aria-label={`In thẻ cho lớp ${c.name}`} onClick={() => { onSelectClass(c.id); onNavigate("print"); }} className="rounded-full px-3 py-1.5 text-sm font-bold text-white" style={{ background: "#232a6b", minHeight: 36 }}>In thẻ</button>
                    <button type="button" aria-label={`Xem danh sách lớp ${c.name}`} onClick={() => { onSelectClass(c.id); onNavigate("classes"); }} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: "#FFF3D6", color: "#232a6b", minHeight: 36 }}>Danh sách</button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Recent sessions */}
        <section>
          <SectionTitle sub="Buổi học gần đây — bấm để vào phòng trình chiếu & quét thẻ.">Buổi học gần đây</SectionTitle>
          {sessions.length === 0 ? (
            <p className="rounded-3xl p-5 text-sm" style={{ background: "var(--surface)", border: "1px dashed var(--border)", color: "var(--dim)" }}>
              Chưa có buổi học nào. Vào mục <b>Buổi học</b> để tạo buổi đầu tiên từ đề có sẵn hoặc vài câu gõ nhanh.
            </p>
          ) : (
            <ul className="space-y-2">
              {sessions.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    aria-label={`Vào buổi học ${s.title}`}
                    onClick={() => onOpenRoom(s.id)}
                    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", minHeight: 52 }}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-base font-bold">{s.title}</span>
                      <span className="block text-xs" style={{ color: "var(--dim)" }}>Lớp {s.class_name} · {s.question_count} câu · {new Date(s.created_at).toLocaleDateString("vi-VN")}</span>
                    </span>
                    <span className="ml-auto shrink-0 rounded-full px-2.5 py-1 text-xs font-bold" style={{ background: s.status === "finished" ? "#E5E7EB" : "#DCFCE7", color: s.status === "finished" ? "#555" : "#166534" }}>
                      {s.status === "finished" ? "Đã kết thúc" : "Đang mở"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {banks.length > 0 ? (
            <p className="mt-3 text-sm" style={{ color: "var(--dim)" }}>Ngân hàng câu hỏi: {banks.map((b) => `${b.title} (${b.question_count} câu)`).join(" · ")}</p>
          ) : null}
        </section>
      </div>
    </div>
  );
}

// ---------- Classes ----------
function ClassesView({
  classes,
  selectedClassId,
  onSelect,
  onGoPrint,
}: {
  classes: ClassRow[];
  selectedClassId: number | null;
  onSelect: (id: number) => void;
  onGoPrint: () => void;
}) {
  const queryClient = useQueryClient();
  const [newClassName, setNewClassName] = useState("");
  const [bulk, setBulk] = useState("");
  const [editing, setEditing] = useState<Student | null>(null);
  const [editName, setEditName] = useState("");
  const [editStt, setEditStt] = useState(1);

  const studentsQ = useQuery({
    queryKey: ["students", selectedClassId],
    queryFn: () => api.listStudents({ class_id: selectedClassId ?? 0 }),
    enabled: selectedClassId != null,
  });
  const students = studentsQ.data?.students ?? [];
  const selectedClass = classes.find((c) => c.id === selectedClassId) ?? null;

  const createClass = useMutation({
    mutationFn: async (name: string) => await api.createClass({ name }),
    onSuccess: (r) => { queryClient.invalidateQueries({ queryKey: ["overview"] }); onSelect(r.id); setNewClassName(""); },
  });
  const deleteClass = useMutation({
    mutationFn: async (id: number) => await api.deleteClass({ class_id: id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["overview"] }),
  });
  const addBulk = useMutation({
    mutationFn: async (names: string[]) => await api.addStudentsBulk({ class_id: selectedClassId ?? 0, names }),
    onSuccess: () => { queryClient.invalidateQueries(); setBulk(""); },
  });
  const updateStudent = useMutation({
    mutationFn: async () => await api.updateStudent({ student_id: editing?.id ?? 0, name: editName, stt: editStt }),
    onSuccess: () => { queryClient.invalidateQueries(); setEditing(null); },
  });
  const deleteStudent = useMutation({
    mutationFn: async (id: number) => await api.deleteStudent({ student_id: id }),
    onSuccess: () => queryClient.invalidateQueries(),
  });
  const [confirmDeleteStudent, setConfirmDeleteStudent] = useState<Student | null>(null);
  const [confirmDeleteClass, setConfirmDeleteClass] = useState(false);

  const bulkNames = bulk.split("\n").map((s) => s.trim()).filter(Boolean);

  return (
    <div>
      <SectionTitle sub="Mỗi lớp một danh sách. Số thứ tự (STT) trong danh sách chính là số in trên thẻ của em đó — thẻ phát đúng theo STT này.">
        Lớp học & danh sách học sinh
      </SectionTitle>

      <div className="flex flex-wrap items-center gap-2">
        {classes.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-label={`Chọn lớp ${c.name}`}
            onClick={() => onSelect(c.id)}
            className="rounded-full px-4 py-2 text-sm font-bold"
            style={{ background: c.id === selectedClassId ? "#232a6b" : "#fff", color: c.id === selectedClassId ? "#fff" : "#232a6b", border: "1px solid var(--border)", minHeight: 40 }}
          >
            {c.name} · {c.student_count} em
          </button>
        ))}
        <span className="flex gap-2">
          <input aria-label="Tên lớp mới" placeholder="Tên lớp mới, vd: 7A2" value={newClassName} onChange={(e) => setNewClassName(e.target.value)} className={inputCls} style={{ ...inputStyle, width: 180 }} />
          <Btn color="#F97316" disabled={!newClassName.trim()} onClick={() => createClass.mutate(newClassName.trim())} ariaLabel="Thêm lớp mới">+ Thêm lớp</Btn>
        </span>
      </div>

      {selectedClass ? (
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-3xl p-4 sm:p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold" style={{ color: "#232a6b" }}>Danh sách lớp {selectedClass.name}</h3>
              <span className="text-sm" style={{ color: "var(--dim)" }}>{students.length} học sinh</span>
              <span className="ml-auto flex gap-2">
                <Btn color="#232a6b" onClick={onGoPrint} ariaLabel="In thẻ cho lớp đang chọn">🖨 In thẻ lớp này</Btn>
                {!confirmDeleteClass ? (
                  <Btn color="#fff" textColor="#b91c1c" onClick={() => setConfirmDeleteClass(true)} ariaLabel="Xoá lớp đang chọn">Xoá lớp</Btn>
                ) : (
                  <Btn color="#b91c1c" onClick={() => { deleteClass.mutate(selectedClass.id); setConfirmDeleteClass(false); }} ariaLabel="Xác nhận xoá lớp">Chắc chắn xoá?</Btn>
                )}
              </span>
            </div>
            {studentsQ.isPending ? <p className="py-6 text-sm" style={{ color: "var(--dim)" }}>Đang tải…</p> : students.length === 0 ? (
              <p className="py-6 text-sm" style={{ color: "var(--dim)" }}>Lớp chưa có học sinh nào. Dán danh sách ở khung bên cạnh — mỗi dòng một em, theo đúng thứ tự trong sổ lớp.</p>
            ) : (
              <ul className="mt-3 divide-y" style={{ borderColor: "var(--border)" }}>
                {students.map((s) => (
                  <li key={s.id} className="flex items-center gap-3 py-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white" style={{ background: "#232a6b" }}>{s.stt}</span>
                    {editing?.id === s.id ? (
                      <span className="flex flex-1 flex-wrap items-center gap-2">
                        <input aria-label="Sửa họ tên học sinh" value={editName} onChange={(e) => setEditName(e.target.value)} className={inputCls} style={{ ...inputStyle, maxWidth: 260 }} />
                        <input aria-label="Sửa số thứ tự" type="number" min={1} max={999} value={editStt} onChange={(e) => setEditStt(Number(e.target.value))} className={inputCls} style={{ ...inputStyle, width: 90 }} />
                        <Btn color="#059669" disabled={!editName.trim()} onClick={() => updateStudent.mutate()} ariaLabel="Lưu sửa học sinh">Lưu</Btn>
                        <Btn color="#e5e7eb" textColor="#333" onClick={() => setEditing(null)} ariaLabel="Huỷ sửa">Huỷ</Btn>
                      </span>
                    ) : (
                      <>
                        <span className="flex-1 text-base font-medium">{s.name}</span>
                        <span className="hidden text-xs sm:block" style={{ color: "var(--dim)" }}>Thẻ số {s.stt}</span>
                        <button type="button" aria-label={`Sửa thông tin ${s.name}`} onClick={() => { setEditing(s); setEditName(s.name); setEditStt(s.stt); }} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: "#FFF3D6", minHeight: 36 }}>Sửa</button>
                        {confirmDeleteStudent?.id === s.id ? (
                          <button type="button" aria-label={`Xác nhận xoá ${s.name}`} onClick={() => { deleteStudent.mutate(s.id); setConfirmDeleteStudent(null); }} className="rounded-full px-3 py-1.5 text-sm font-bold text-white" style={{ background: "#b91c1c", minHeight: 36 }}>Xoá hẳn?</button>
                        ) : (
                          <button type="button" aria-label={`Xoá ${s.name} khỏi lớp`} onClick={() => setConfirmDeleteStudent(s)} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: "#FEE2E2", color: "#b91c1c", minHeight: 36 }}>Xoá</button>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside className="h-fit rounded-3xl p-5" style={{ background: "#FFF3D6", border: "1px solid var(--border)" }}>
            <h3 className="text-base font-extrabold" style={{ color: "#232a6b" }}>Thêm học sinh vào lớp {selectedClass.name}</h3>
            <p className="mt-1 text-sm leading-relaxed">Dán danh sách từ sổ lớp / file Excel — <b>mỗi dòng một em</b>, đúng thứ tự. STT sẽ tự đánh tiếp: em đầu tiên dán vào nhận số {students.length + 1}.</p>
            <textarea
              aria-label="Dán danh sách học sinh, mỗi dòng một em"
              placeholder={"Nguyễn Văn An\nTrần Thị Bình\nLê Văn Cường\n…"}
              value={bulk}
              onChange={(e) => setBulk(e.target.value)}
              rows={9}
              className={`${inputCls} mt-3`}
              style={inputStyle}
            />
            <Btn color="#F97316" className="mt-3 w-full" disabled={bulkNames.length === 0 || addBulk.isPending} onClick={() => addBulk.mutate(bulkNames)} ariaLabel="Thêm danh sách học sinh vào lớp">
              Thêm {bulkNames.length > 0 ? `${bulkNames.length} học sinh` : "học sinh"}
            </Btn>
            <p className="mt-3 rounded-xl bg-white/70 p-3 text-xs leading-relaxed">
              ⚠️ <b>Số thẻ = Số thứ tự (STT)</b> của em trong danh sách dưới đây. Nếu sau này sửa thứ tự, nhớ phát lại thẻ đúng số cho từng em — máy quét nhận diện học sinh bằng số thẻ.
            </p>
          </aside>
        </div>
      ) : (
        <p className="mt-4 text-sm" style={{ color: "var(--dim)" }}>Hãy tạo lớp đầu tiên bằng ô “Tên lớp mới” ở trên.</p>
      )}
    </div>
  );
}

// ---------- Print cards ----------
function PrintView({
  classes,
  selectedClass,
  onSelectClass,
  onGoClasses,
}: {
  classes: ClassRow[];
  selectedClass: ClassRow | null;
  onSelectClass: (id: number) => void;
  onGoClasses: () => void;
}) {
  const [layout, setLayout] = useState<"2" | "1">("2");
  const studentsQ = useQuery({
    queryKey: ["students", selectedClass?.id],
    queryFn: () => api.listStudents({ class_id: selectedClass?.id ?? 0 }),
    enabled: selectedClass != null,
  });
  const students = studentsQ.data?.students ?? [];
  const perSheet = layout === "2" ? 2 : 1;
  const sheets: Student[][] = [];
  for (let i = 0; i < students.length; i += perSheet) sheets.push(students.slice(i, i + perSheet));
  const seed = selectedClass?.id ?? 1;

  return (
    <div>
      <SectionTitle sub="48 thẻ in sẵn tên và số thứ tự của từng em — lớp 48 em, hai thẻ một tờ thì chỉ hết 24 tờ giấy. In một lần, dùng cho mọi buổi học cả năm.">
        In thẻ — chỉ làm một lần
      </SectionTitle>

      <div className="flex flex-wrap items-end gap-3">
        <label className="block">
          <span className="mb-1 block text-sm font-bold">Chọn lớp</span>
          <select
            aria-label="Chọn lớp để in thẻ"
            value={selectedClass?.id ?? ""}
            onChange={(e) => onSelectClass(Number(e.target.value))}
            className="rounded-xl border bg-white px-3 py-2 text-base font-semibold"
            style={{ borderColor: "var(--border)", minHeight: 44 }}
          >
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.name} ({c.student_count} em)</option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend className="mb-1 text-sm font-bold">Kiểu in</legend>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="In 2 thẻ trên một tờ A4"
              aria-pressed={layout === "2"}
              onClick={() => setLayout("2")}
              className="rounded-xl px-4 py-2 text-sm font-bold"
              style={{ background: layout === "2" ? "#232a6b" : "#fff", color: layout === "2" ? "#fff" : "#232a6b", border: "1px solid var(--border)", minHeight: 44 }}
            >
              2 thẻ / tờ A4 — lớp học bình thường
            </button>
            <button
              type="button"
              aria-label="In 1 thẻ trên một tờ A4 khổ to"
              aria-pressed={layout === "1"}
              onClick={() => setLayout("1")}
              className="rounded-xl px-4 py-2 text-sm font-bold"
              style={{ background: layout === "1" ? "#232a6b" : "#fff", color: layout === "1" ? "#fff" : "#232a6b", border: "1px solid var(--border)", minHeight: 44 }}
            >
              1 thẻ / tờ — mã to, quét xa
            </button>
          </div>
        </fieldset>
        <Btn color="#F97316" onClick={() => window.print()} ariaLabel="In thẻ hoặc lưu thành PDF" className="ml-auto">
          🖨 Tải / In thẻ ngay
        </Btn>
      </div>

      <p className="mt-3 rounded-2xl p-3 text-sm leading-relaxed" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
        {layout === "1" ? (
          <>Phòng rộng, cần quét xa: chọn <b>1 thẻ một tờ, mã to</b> — quét được từ cuối lớp.</>
        ) : (
          <>Lớp học bình thường: <b>2 thẻ / tờ A4</b> là đủ rõ để quét. Kéo xuống để xem trước bản in — mỗi thẻ in sẵn tên và số thứ tự của từng em.</>
        )}{" "}
        Khi in thật: chọn khổ <b>A4</b>, tỉ lệ <b>100%</b>, không ép trang. Giấy A4 trắng, có thể ép plastic để dùng bền cả năm.
      </p>

      {!selectedClass ? (
        <p className="mt-4 text-sm" style={{ color: "var(--dim)" }}>Chưa có lớp nào — hãy tạo lớp và thêm danh sách học sinh trước.</p>
      ) : studentsQ.isPending ? (
        <p className="mt-4 text-sm" style={{ color: "var(--dim)" }}>Đang tải danh sách…</p>
      ) : students.length === 0 ? (
        <div className="mt-4 rounded-3xl p-5" style={{ background: "var(--surface)", border: "1px dashed var(--border)" }}>
          <p className="text-sm">Lớp {selectedClass.name} chưa có học sinh nào nên chưa in thẻ được.</p>
          <Btn color="#232a6b" className="mt-3" onClick={onGoClasses} ariaLabel="Đi tới trang lớp học để thêm học sinh">Thêm danh sách học sinh →</Btn>
        </div>
      ) : (
        <>
          <p className="mt-4 text-sm font-semibold" style={{ color: "var(--dim)" }}>
            Xem trước bản in: lớp {selectedClass.name} · {students.length} thẻ · {sheets.length} tờ A4
          </p>
          <div className="print-area mt-3 space-y-6">
            {sheets.map((sheetStudents, si) => (
              <div
                key={si}
                className="print-sheet mx-auto bg-white p-4 sm:p-6"
                style={{ maxWidth: 820, boxShadow: "0 4px 24px rgba(31,36,48,.12)", borderRadius: 6 }}
              >
                <div className={layout === "2" ? "grid gap-5" : "grid"}>
                  {sheetStudents.map((s) => (
                    <div key={s.id}>
                      <AnswerCard student={s} className={selectedClass.name} seed={seed} large={layout === "1"} />
                      {layout === "2" ? (
                        <div aria-hidden="true" style={{ borderTop: "1px dashed #bbb", marginTop: 10 }} />
                      ) : null}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center text-[11px]" style={{ color: "#888" }}>
                  Thẻ trả lời · Lớp {selectedClass.name} · Tờ {si + 1}/{sheets.length} — cắt theo đường đứt nét, phát đúng số thẻ cho từng em
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ---------- Banks ----------
function BanksView({
  banks,
  selectedBankId,
  onSelect,
}: {
  banks: BankRow[];
  selectedBankId: number | null;
  onSelect: (id: number) => void;
}) {
  const queryClient = useQueryClient();
  const [newTitle, setNewTitle] = useState("");
  const [draft, setDraft] = useState<QDraft>(emptyQ());
  const [editing, setEditing] = useState<BankQuestion | null>(null);
  const [editDraft, setEditDraft] = useState<QDraft>(emptyQ());
  const [confirmDeleteBank, setConfirmDeleteBank] = useState(false);

  const questionsQ = useQuery({
    queryKey: ["bankQuestions", selectedBankId],
    queryFn: () => api.listBankQuestions({ bank_id: selectedBankId ?? 0 }),
    enabled: selectedBankId != null,
  });
  const questions = questionsQ.data?.questions ?? [];
  const selectedBank = banks.find((b) => b.id === selectedBankId) ?? null;

  const createBank = useMutation({
    mutationFn: async (title: string) => await api.createBank({ title }),
    onSuccess: (r) => { queryClient.invalidateQueries({ queryKey: ["overview"] }); onSelect(r.id); setNewTitle(""); },
  });
  const deleteBank = useMutation({
    mutationFn: async (id: number) => await api.deleteBank({ bank_id: id }),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["overview"] }); setConfirmDeleteBank(false); },
  });
  const addQ = useMutation({
    mutationFn: async (q: QDraft) => await api.addBankQuestion({ bank_id: selectedBankId ?? 0, question: q }),
    onSuccess: () => { queryClient.invalidateQueries(); setDraft(emptyQ()); },
  });
  const updateQ = useMutation({
    mutationFn: async () => await api.updateBankQuestion({ question_id: editing?.id ?? 0, question: editDraft }),
    onSuccess: () => { queryClient.invalidateQueries(); setEditing(null); },
  });
  const deleteQ = useMutation({
    mutationFn: async (id: number) => await api.deleteBankQuestion({ question_id: id }),
    onSuccess: () => queryClient.invalidateQueries(),
  });

  const qValid = (q: QDraft) => q.content.trim() && q.option_a.trim() && q.option_b.trim() && q.option_c.trim() && q.option_d.trim();

  return (
    <div>
      <SectionTitle sub="Soạn sẵn các bộ câu hỏi trắc nghiệm 4 phương án. Khi mở buổi học, thầy cô lấy câu từ đề có sẵn ở đây — hoặc gõ nhanh vài câu ngay trong buổi học.">
        Ngân hàng câu hỏi
      </SectionTitle>
      <div className="flex flex-wrap gap-2">
        {banks.map((b) => (
          <button
            key={b.id}
            type="button"
            aria-label={`Chọn đề ${b.title}`}
            onClick={() => onSelect(b.id)}
            className="rounded-full px-4 py-2 text-sm font-bold"
            style={{ background: b.id === selectedBankId ? "#232a6b" : "#fff", color: b.id === selectedBankId ? "#fff" : "#232a6b", border: "1px solid var(--border)", minHeight: 40 }}
          >
            {b.title} · {b.question_count} câu
          </button>
        ))}
        <span className="flex gap-2">
          <input aria-label="Tên đề mới" placeholder="Tên đề mới, vd: Kiểm tra học kì II — Sinh học 12" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className={inputCls} style={{ ...inputStyle, width: 300, maxWidth: "62vw" }} />
          <Btn color="#F97316" disabled={!newTitle.trim()} onClick={() => createBank.mutate(newTitle.trim())} ariaLabel="Tạo đề mới">+ Tạo đề</Btn>
        </span>
      </div>

      {selectedBank ? (
        <div className="mt-5 grid items-start gap-6 lg:grid-cols-[1fr_380px]">
          <section className="rounded-3xl p-4 sm:p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold" style={{ color: "#232a6b" }}>{selectedBank.title}</h3>
              <span className="text-sm" style={{ color: "var(--dim)" }}>{questions.length} câu</span>
              {!confirmDeleteBank ? (
                <Btn color="#fff" textColor="#b91c1c" className="ml-auto" onClick={() => setConfirmDeleteBank(true)} ariaLabel="Xoá đề đang chọn">Xoá đề</Btn>
              ) : (
                <Btn color="#b91c1c" className="ml-auto" onClick={() => deleteBank.mutate(selectedBank.id)} ariaLabel="Xác nhận xoá đề">Chắc chắn xoá đề?</Btn>
              )}
            </div>
            {questionsQ.isPending ? <p className="py-6 text-sm" style={{ color: "var(--dim)" }}>Đang tải…</p> : questions.length === 0 ? (
              <p className="py-6 text-sm" style={{ color: "var(--dim)" }}>Đề chưa có câu hỏi nào. Soạn câu đầu tiên ở khung bên cạnh.</p>
            ) : (
              <ol className="mt-3 space-y-3">
                {questions.map((q, i) => (
                  <li key={q.id} className="rounded-2xl p-4" style={{ background: "#FFF9EC", border: "1px solid var(--border)" }}>
                    {editing?.id === q.id ? (
                      <div>
                        <QuestionForm value={editDraft} onChange={setEditDraft} compact />
                        <div className="mt-3 flex gap-2">
                          <Btn color="#059669" disabled={!qValid(editDraft)} onClick={() => updateQ.mutate()} ariaLabel="Lưu câu hỏi đã sửa">Lưu</Btn>
                          <Btn color="#e5e7eb" textColor="#333" onClick={() => setEditing(null)} ariaLabel="Huỷ sửa câu hỏi">Huỷ</Btn>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="font-bold">Câu {i + 1}. {q.content}</p>
                        <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                          {ANSWERS.map((L) => (
                            <p key={L} className="flex items-start gap-2 text-sm">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ background: ANSWER_COLORS[L] }}>{L}</span>
                              <span>{q[`option_${L.toLowerCase()}` as "option_a" | "option_b" | "option_c" | "option_d"]}{q.correct === L ? <b className="text-emerald-700"> ✓ đáp án</b> : null}</span>
                            </p>
                          ))}
                        </div>
                        <div className="mt-3 flex gap-2">
                          <button type="button" aria-label={`Sửa câu ${i + 1}`} onClick={() => { setEditing(q); setEditDraft({ content: q.content, option_a: q.option_a, option_b: q.option_b, option_c: q.option_c, option_d: q.option_d, correct: q.correct as Answer }); }} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: "#FFF3D6", minHeight: 36 }}>Sửa</button>
                          <button type="button" aria-label={`Xoá câu ${i + 1}`} onClick={() => deleteQ.mutate(q.id)} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: "#FEE2E2", color: "#b91c1c", minHeight: 36 }}>Xoá</button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </section>

          <aside className="rounded-3xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h3 className="text-base font-extrabold" style={{ color: "#232a6b" }}>Thêm câu hỏi vào “{selectedBank.title}”</h3>
            <div className="mt-3">
              <QuestionForm value={draft} onChange={setDraft} />
            </div>
            <Btn color="#F97316" className="mt-3 w-full" disabled={!qValid(draft) || addQ.isPending} onClick={() => addQ.mutate(draft)} ariaLabel="Thêm câu hỏi vào đề">
              + Thêm câu hỏi
            </Btn>
          </aside>
        </div>
      ) : (
        <p className="mt-4 text-sm" style={{ color: "var(--dim)" }}>Hãy tạo đề đầu tiên bằng ô “Tên đề mới” ở trên.</p>
      )}
    </div>
  );
}

// ---------- Sessions: list + create ----------
function SessionsView({
  classes,
  banks,
  sessions,
  onOpenRoom,
  onGoClasses,
  onGoBanks,
}: {
  classes: ClassRow[];
  banks: BankRow[];
  sessions: SessionRow[];
  onOpenRoom: (id: number) => void;
  onGoClasses: () => void;
  onGoBanks: () => void;
}) {
  const queryClient = useQueryClient();
  const [classId, setClassId] = useState<number | "">("");
  const [bankId, setBankId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [quick, setQuick] = useState<QDraft[]>([]);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const create = useMutation({
    mutationFn: async () =>
      await api.createSession({
        class_id: Number(classId),
        title: title.trim(),
        bank_id: bankId,
        quick_questions: quick.filter((q) => q.content.trim()).map((q) => ({ ...q })),
      }),
    onSuccess: (r) => { queryClient.invalidateQueries({ queryKey: ["overview"] }); onOpenRoom(r.id); },
    onError: (e) => setError(e instanceof Error ? e.message : "Không tạo được buổi học"),
  });
  const del = useMutation({
    mutationFn: async (id: number) => await api.deleteSession({ session_id: id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["overview"] }),
  });

  const selectedClassObj = classes.find((c) => c.id === Number(classId));
  const selectedBank = banks.find((b) => b.id === bankId);
  const quickValid = quick.filter((q) => q.content.trim() && q.option_a.trim() && q.option_b.trim() && q.option_c.trim() && q.option_d.trim());
  const totalQuestions = (selectedBank?.question_count ?? 0) + quickValid.length;
  const canCreate = classId !== "" && title.trim().length > 0 && totalQuestions > 0;

  return (
    <div>
      <SectionTitle sub="Giống trong video: chọn lớp, lấy câu từ đề có sẵn hoặc tự gõ vài câu nhanh — rồi bấm Tạo buổi học.">
        Mở buổi học
      </SectionTitle>

      <div className="grid items-start gap-6 lg:grid-cols-[400px_1fr]">
        <section className="rounded-3xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <h3 className="text-base font-extrabold" style={{ color: "#232a6b" }}>Hôm nay lớp nào học gì?</h3>

          <label className="mt-4 block text-sm font-bold" htmlFor="sess-title">Tên buổi học</label>
          <input
            id="sess-title"
            aria-label="Tên buổi học"
            placeholder="Ví dụ: Kiểm tra học kì II — Sinh học 12"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${inputCls} mt-1`}
            style={inputStyle}
          />

          <label className="mt-4 block text-sm font-bold" htmlFor="sess-class">1 · Chọn lớp</label>
          {classes.length === 0 ? (
            <p className="mt-1 text-sm" style={{ color: "var(--dim)" }}>Chưa có lớp nào. <button type="button" className="font-bold underline" onClick={onGoClasses} aria-label="Đi tạo lớp học">Tạo lớp & danh sách học sinh →</button></p>
          ) : (
            <select id="sess-class" aria-label="Chọn lớp cho buổi học" value={classId} onChange={(e) => setClassId(e.target.value === "" ? "" : Number(e.target.value))} className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-base font-semibold" style={{ borderColor: "var(--border)", minHeight: 44 }}>
              <option value="">— Chọn lớp —</option>
              {classes.map((c) => <option key={c.id} value={c.id}>{c.name} ({c.student_count} em)</option>)}
            </select>
          )}
          {selectedClassObj && selectedClassObj.student_count === 0 ? (
            <p className="mt-1 text-xs font-semibold text-amber-700">Lớp {selectedClassObj.name} chưa có học sinh — thêm danh sách ở mục Lớp học để quét thẻ được.</p>
          ) : null}

          <label className="mt-4 block text-sm font-bold" htmlFor="sess-bank">2 · Lấy câu từ đề có sẵn (tuỳ chọn)</label>
          {banks.length === 0 ? (
            <p className="mt-1 text-sm" style={{ color: "var(--dim)" }}>Chưa có đề nào. <button type="button" className="font-bold underline" onClick={onGoBanks} aria-label="Đi soạn ngân hàng câu hỏi">Soạn ngân hàng câu hỏi →</button> hoặc gõ nhanh bên dưới.</p>
          ) : (
            <select id="sess-bank" aria-label="Chọn đề có sẵn để lấy câu hỏi" value={bankId ?? ""} onChange={(e) => setBankId(e.target.value === "" ? null : Number(e.target.value))} className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-base font-semibold" style={{ borderColor: "var(--border)", minHeight: 44 }}>
              <option value="">— Không dùng đề có sẵn —</option>
              {banks.map((b) => <option key={b.id} value={b.id}>{b.title} ({b.question_count} câu)</option>)}
            </select>
          )}

          <div className="mt-4">
            <p className="text-sm font-bold">…hoặc tự gõ vài câu nhanh</p>
            <p className="text-xs" style={{ color: "var(--dim)" }}>Câu hỏi bất chợt giữa tiết? Gõ nhanh tại đây, khỏi cần soạn đề trước.</p>
            <div className="mt-2 space-y-4">
              {quick.map((q, i) => (
                <div key={i} className="rounded-2xl p-3" style={{ background: "#FFF9EC", border: "1px solid var(--border)" }}>
                  <div className="mb-2 flex items-center">
                    <span className="text-sm font-extrabold" style={{ color: "#232a6b" }}>Câu gõ nhanh {i + 1}</span>
                    <button type="button" aria-label={`Bỏ câu gõ nhanh ${i + 1}`} onClick={() => setQuick(quick.filter((_, j) => j !== i))} className="ml-auto rounded-full px-3 py-1 text-xs font-bold" style={{ background: "#FEE2E2", color: "#b91c1c", minHeight: 32 }}>Bỏ câu này</button>
                  </div>
                  <QuestionForm value={q} onChange={(nq) => setQuick(quick.map((old, j) => (j === i ? nq : old)))} compact />
                </div>
              ))}
            </div>
            <Btn color="#fff" textColor="#232a6b" className="mt-2" onClick={() => setQuick([...quick, emptyQ()])} ariaLabel="Thêm một câu gõ nhanh">+ Gõ thêm câu</Btn>
          </div>

          {error ? <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p> : null}
          <Btn
            color="#232a6b"
            className="mt-4 w-full text-base"
            disabled={!canCreate || create.isPending}
            onClick={() => create.mutate()}
            ariaLabel="Tạo buổi học và vào phòng trình chiếu"
          >
            ▶ Tạo buổi học{totalQuestions > 0 ? ` · ${totalQuestions} câu` : ""}
          </Btn>
          {!canCreate ? <p className="mt-2 text-center text-xs" style={{ color: "var(--dim)" }}>Cần: tên buổi học + chọn lớp + ít nhất 1 câu hỏi (từ đề hoặc gõ nhanh, điền đủ 4 phương án).</p> : null}
        </section>

        <section>
          <h3 className="text-base font-extrabold" style={{ color: "#232a6b" }}>Các buổi học đã tạo</h3>
          {sessions.length === 0 ? (
            <p className="mt-2 rounded-3xl p-5 text-sm" style={{ background: "var(--surface)", border: "1px dashed var(--border)", color: "var(--dim)" }}>Chưa có buổi học nào. Tạo buổi đầu tiên ở khung bên trái.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {sessions.map((s) => (
                <li key={s.id} className="flex items-center gap-3 rounded-2xl px-4 py-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <button type="button" aria-label={`Vào phòng buổi học ${s.title}`} onClick={() => onOpenRoom(s.id)} className="min-w-0 flex-1 text-left" style={{ minHeight: 44 }}>
                    <span className="block truncate text-base font-bold">{s.title}</span>
                    <span className="block text-xs" style={{ color: "var(--dim)" }}>Lớp {s.class_name} · {s.question_count} câu · {new Date(s.created_at).toLocaleString("vi-VN", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</span>
                  </button>
                  <span className="shrink-0 rounded-full px-2.5 py-1 text-xs font-bold" style={{ background: s.status === "finished" ? "#E5E7EB" : "#DCFCE7", color: s.status === "finished" ? "#555" : "#166534" }}>{s.status === "finished" ? "Đã kết thúc" : "Đang mở"}</span>
                  {confirmDelete === s.id ? (
                    <button type="button" aria-label={`Xác nhận xoá buổi học ${s.title}`} onClick={() => { del.mutate(s.id); setConfirmDelete(null); }} className="shrink-0 rounded-full px-3 py-1.5 text-sm font-bold text-white" style={{ background: "#b91c1c", minHeight: 36 }}>Xoá hẳn?</button>
                  ) : (
                    <button type="button" aria-label={`Xoá buổi học ${s.title}`} onClick={() => setConfirmDelete(s.id)} className="shrink-0 rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: "#FEE2E2", color: "#b91c1c", minHeight: 36 }}>Xoá</button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

// ---------- Room: present / scan / manual / results ----------
type RoomMode = "present" | "scan" | "manual" | "results";

function simulatedAnswer(sessionId: number, questionId: number, student: Student, correct: Answer): Answer {
  let h = sessionId * 1315423911 + questionId * 2654435761 + student.stt * 374761393;
  h = Math.imul(h ^ (h >>> 13), 1103515245);
  const r = ((h >>> 9) % 100) / 100;
  if (r < 0.62) return correct;
  const wrong = ANSWERS.filter((a) => a !== correct);
  return wrong[Math.abs(h) % wrong.length] ?? correct;
}

function RoomView({ sessionId, onExit }: { sessionId: number; onExit: () => void }) {
  const queryClient = useQueryClient();
  const detailQ = useQuery({ queryKey: ["session", sessionId], queryFn: () => api.getSession({ session_id: sessionId }) });
  const data = detailQ.data;
  const [mode, setMode] = useState<RoomMode>("present");
  const [qIndex, setQIndex] = useState<number | null>(null);
  const [reveal, setReveal] = useState(false);
  const [resultQ, setResultQ] = useState<number | null>(null);

  const questions = data?.questions ?? [];
  const students = data?.students ?? [];
  const idx = qIndex ?? data?.session.current_index ?? 0;
  const clampedIdx = Math.min(idx, Math.max(0, questions.length - 1));
  const currentQ: SQuestion | undefined = questions[clampedIdx];

  // responses[questionId][studentId] = answer
  const respMap = useMemo(() => {
    const m = new Map<number, Map<number, Answer>>();
    for (const r of data?.responses ?? []) {
      let inner = m.get(r.question_id);
      if (!inner) { inner = new Map(); m.set(r.question_id, inner); }
      inner.set(r.student_id, r.answer as Answer);
    }
    return m;
  }, [data]);

  const setCurrentMut = useMutation({
    mutationFn: async (i: number) => await api.setCurrentQuestion({ session_id: sessionId, index: i }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["session", sessionId] }),
  });
  const goto = (i: number) => {
    const n = Math.max(0, Math.min(questions.length - 1, i));
    setQIndex(n);
    setReveal(false);
    setCurrentMut.mutate(n);
  };

  const finishMut = useMutation({
    mutationFn: async (finished: boolean) => await api.finishSession({ session_id: sessionId, finished }),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["session", sessionId] }); queryClient.invalidateQueries({ queryKey: ["overview"] }); },
  });

  if (detailQ.isPending) return <p className="py-16 text-center text-sm" style={{ color: "var(--dim)" }}>Đang tải buổi học…</p>;
  if (detailQ.error || !data) return <p className="py-16 text-center text-sm font-semibold text-red-700">Không tải được buổi học này.</p>;
  if (!currentQ) return <p className="py-16 text-center text-sm" style={{ color: "var(--dim)" }}>Buổi học chưa có câu hỏi nào.</p>;

  const sess = data.session;
  const answeredCount = respMap.get(currentQ.id)?.size ?? 0;

  const modeTabs: { m: RoomMode; label: string }[] = [
    { m: "present", label: "📺 Trình chiếu" },
    { m: "scan", label: "📷 Quét thẻ" },
    { m: "manual", label: "✋ Nhập tay" },
    { m: "results", label: "📊 Kết quả" },
  ];

  return (
    <div className="pt-4">
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={onExit} aria-label="Quay lại danh sách buổi học" className="rounded-full px-3 py-2 text-sm font-bold" style={{ background: "#fff", border: "1px solid var(--border)", minHeight: 40 }}>← Buổi học</button>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-black" style={{ color: "#232a6b" }}>{sess.title}</h2>
          <p className="text-xs" style={{ color: "var(--dim)" }}>Lớp {sess.class_name} · {questions.length} câu · {students.length} học sinh · {sess.status === "finished" ? "Đã kết thúc" : "Đang mở"}</p>
        </div>
        <span className="ml-auto flex gap-2">
          {sess.status === "finished" ? (
            <Btn color="#e5e7eb" textColor="#333" onClick={() => finishMut.mutate(false)} ariaLabel="Mở lại buổi học">Mở lại buổi học</Btn>
          ) : (
            <Btn color="#059669" onClick={() => finishMut.mutate(true)} ariaLabel="Kết thúc buổi học">✔ Kết thúc buổi học</Btn>
          )}
        </span>
      </div>

      {/* Question selector + mode tabs */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5" role="group" aria-label="Chọn câu hỏi">
          <button type="button" aria-label="Câu trước" disabled={clampedIdx === 0} onClick={() => goto(clampedIdx - 1)} className="rounded-full px-3 py-2 font-black disabled:opacity-30" style={{ background: "#232a6b", color: "#fff", minHeight: 40 }}>‹</button>
          <span className="rounded-full px-4 py-2 text-sm font-black text-white" style={{ background: "#232a6b" }}>Câu {clampedIdx + 1} / {questions.length}</span>
          <button type="button" aria-label="Câu tiếp theo" disabled={clampedIdx >= questions.length - 1} onClick={() => goto(clampedIdx + 1)} className="rounded-full px-3 py-2 font-black disabled:opacity-30" style={{ background: "#232a6b", color: "#fff", minHeight: 40 }}>›</button>
        </div>
        <span className="text-sm font-semibold" style={{ color: "var(--dim)" }}>Đã ghi nhận {answeredCount}/{students.length} em ở câu này</span>
        <nav className="ml-auto flex gap-1.5 overflow-x-auto" aria-label="Chế độ trong phòng học">
          {modeTabs.map((t) => (
            <button
              key={t.m}
              type="button"
              aria-label={`Chuyển sang chế độ ${t.label}`}
              aria-pressed={mode === t.m}
              onClick={() => setMode(t.m)}
              className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-bold"
              style={{ background: mode === t.m ? "#F97316" : "#fff", color: mode === t.m ? "#fff" : "#232a6b", border: "1px solid var(--border)", minHeight: 40 }}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      {mode === "present" ? (
        <PresentPanel q={currentQ} index={clampedIdx} total={questions.length} reveal={reveal} onReveal={() => setReveal(true)} answered={answeredCount} totalStudents={students.length} onScan={() => setMode("scan")} onNext={() => goto(clampedIdx + 1)} isLast={clampedIdx >= questions.length - 1} />
      ) : mode === "scan" ? (
        <ScanPanel key={currentQ.id} sessionId={sessionId} q={currentQ} students={students} existing={respMap.get(currentQ.id)} onDone={() => setMode("results")} onShowQuestionResults={() => { setResultQ(currentQ.id); setMode("results"); }} />
      ) : mode === "manual" ? (
        <ManualPanel key={currentQ.id} sessionId={sessionId} q={currentQ} students={students} existing={respMap.get(currentQ.id)} />
      ) : (
        <ResultsPanel data={data} respMap={respMap} focusQuestionId={resultQ} onFocus={setResultQ} onPresentQuestion={(qid) => { const i = questions.findIndex((q) => q.id === qid); if (i >= 0) { goto(i); setMode("present"); } }} />
      )}
    </div>
  );
}

// ---------- Present ----------
function PresentPanel({
  q, index, total, reveal, onReveal, answered, totalStudents, onScan, onNext, isLast,
}: {
  q: SQuestion; index: number; total: number; reveal: boolean; onReveal: () => void;
  answered: number; totalStudents: number; onScan: () => void; onNext: () => void; isLast: boolean;
}) {
  return (
    <section className="mt-4 overflow-hidden rounded-3xl" style={{ background: "linear-gradient(150deg,#171c48,#232a6b 60%,#2c3690)" }}>
      <div className="flex items-center gap-2 px-5 pt-4">
        <span className="rounded-full px-3 py-1 text-xs font-black" style={{ background: "#FFC53D", color: "#232a6b" }}>Câu {index + 1} / {total}</span>
        <span className="text-xs font-semibold text-white/70">Học sinh giơ thẻ: chọn đáp án nào, xoay cạnh đó lên trên</span>
        <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">Đã trả lời {answered}/{totalStudents}</span>
      </div>
      <h3 className="px-5 pt-4 text-2xl font-extrabold leading-snug text-white sm:px-8 sm:text-3xl">{q.content}</h3>
      <div className="grid gap-3 px-5 py-6 sm:grid-cols-2 sm:px-8">
        {ANSWERS.map((L) => {
          const isCorrect = reveal && q.correct === L;
          const dimmed = reveal && q.correct !== L;
          return (
            <div
              key={L}
              className="flex items-start gap-3 rounded-2xl p-4 transition"
              style={{ background: ANSWER_COLORS[L], opacity: dimmed ? 0.45 : 1, outline: isCorrect ? "4px solid #fff" : "none" }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black" style={{ color: ANSWER_COLORS[L] }}>{L}</span>
              <span className="pt-1.5 text-base font-bold leading-relaxed text-white sm:text-lg">{q[`option_${L.toLowerCase()}` as "option_a" | "option_b" | "option_c" | "option_d"]}</span>
              {isCorrect ? <span className="ml-auto shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-black text-emerald-700">✓ Đáp án đúng</span> : null}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 px-5 pb-6 sm:px-8">
        {!reveal ? (
          <Btn color="#FFC53D" textColor="#232a6b" onClick={onReveal} ariaLabel="Hiện đáp án đúng của câu này">Hiện đáp án đúng</Btn>
        ) : null}
        <Btn color="#F97316" onClick={onScan} ariaLabel="Đi quét thẻ cho câu này">📷 Quét thẻ câu này</Btn>
        {!isLast ? <Btn color="rgba(255,255,255,.15)" onClick={onNext} ariaLabel="Sang câu tiếp theo">Câu tiếp theo →</Btn> : null}
      </div>
    </section>
  );
}

// ---------- Scan (simulated, camera-assisted) ----------
function ScanPanel({
  sessionId, q, students, existing, onDone, onShowQuestionResults,
}: {
  sessionId: number; q: SQuestion; students: Student[];
  existing: Map<number, Answer> | undefined;
  onDone: () => void; onShowQuestionResults: () => void;
}) {
  const queryClient = useQueryClient();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [camOn, setCamOn] = useState(false);
  const [camError, setCamError] = useState("");
  const [scanning, setScanning] = useState(false);
  const [detected, setDetected] = useState<Map<number, Answer>>(new Map());
  const [saved, setSaved] = useState(false);

  const planned = useMemo(() => {
    const m = new Map<number, Answer>();
    for (const s of students) m.set(s.id, simulatedAnswer(sessionId, q.id, s, q.correct as Answer));
    return m;
  }, [sessionId, q, students]);

  const order = useMemo(() => {
    const arr = [...students];
    arr.sort((a, b) => ((a.stt * 7919 + sessionId) % 97) - ((b.stt * 7919 + sessionId) % 97));
    return arr;
  }, [students, sessionId]);

  const recordMut = useMutation({
    mutationFn: async (answers: { student_id: number; answer: Answer }[]) =>
      await api.recordResponses({ session_id: sessionId, question_id: q.id, source: "scan", answers }),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["session", sessionId] }); setSaved(true); },
  });
  const clearMut = useMutation({
    mutationFn: async () => await api.clearQuestionResponses({ session_id: sessionId, question_id: q.id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["session", sessionId] }),
  });

  const stopCam = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCamOn(false);
  };
  useEffect(() => () => { stopCam(); if (timerRef.current) clearInterval(timerRef.current); }, []);

  const startCam = async () => {
    setCamError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCamOn(true);
    } catch {
      setCamError("Không mở được camera (thiếu quyền hoặc thiết bị không có camera). Thầy cô vẫn quét mô phỏng được bình thường, hoặc nhập tay đáp án.");
    }
  };

  const startScan = () => {
    if (scanning) return;
    setSaved(false);
    setDetected(new Map());
    setScanning(true);
    let i = 0;
    timerRef.current = setInterval(() => {
      const batch = order.slice(i, i + 4);
      if (batch.length === 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        setScanning(false);
        return;
      }
      i += batch.length;
      setDetected((prev) => {
        const next = new Map(prev);
        for (const s of batch) {
          const a = planned.get(s.id);
          if (a) next.set(s.id, a);
        }
        return next;
      });
      if (i >= order.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        setScanning(false);
      }
    }, 160);
  };

  const saveScan = () => {
    recordMut.mutate([...detected.entries()].map(([student_id, answer]) => ({ student_id, answer })));
  };

  const existingCount = existing?.size ?? 0;

  return (
    <section className="mt-4 grid items-start gap-4 lg:grid-cols-[1fr_380px]">
      <div className="overflow-hidden rounded-3xl" style={{ background: "#171c48" }}>
        <div className="relative" style={{ minHeight: 300 }}>
          {camOn ? (
            <video ref={videoRef} autoPlay playsInline muted aria-label="Hình camera lớp học" className="h-full w-full object-cover" style={{ minHeight: 300, maxHeight: 460 }} />
          ) : (
            <div className="flex flex-col items-center justify-center px-6 py-14 text-center" style={{ minHeight: 300 }}>
              <p className="text-4xl" aria-hidden="true">🏫</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                Mở camera để canh khung cả lớp như trong video, rồi bấm <b>Bắt đầu quét</b> — thẻ nào được nhận diện sẽ hiện khung xanh ngay trên danh sách bên cạnh.
              </p>
              {camError ? <p className="mt-3 max-w-md rounded-xl bg-red-500/20 p-3 text-xs font-semibold text-red-100">{camError}</p> : null}
              <Btn color="#FFC53D" textColor="#232a6b" className="mt-4" onClick={startCam} ariaLabel="Mở camera để canh khung lớp học">📷 Mở camera lớp học</Btn>
            </div>
          )}
          {scanning ? <div className="scan-line pointer-events-none absolute left-0 h-1 w-full" style={{ background: "#06D6A0", boxShadow: "0 0 18px #06D6A0" }} aria-hidden="true" /> : null}
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white">
            Câu {q.position} · Đã nhận {detected.size > 0 ? detected.size : existingCount}/{students.length} thẻ
          </span>
          {camOn ? (
            <button type="button" onClick={stopCam} aria-label="Tắt camera" className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1.5 text-xs font-bold text-white" style={{ minHeight: 32 }}>Tắt camera</button>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2 px-4 py-4">
          {!scanning ? (
            <Btn color="#06D6A0" textColor="#06382b" onClick={startScan} disabled={students.length === 0} ariaLabel="Bắt đầu quét thẻ cả lớp">▶ Bắt đầu quét</Btn>
          ) : (
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">Đang quét cả lớp…</span>
          )}
          {detected.size > 0 && !saved ? (
            <Btn color="#F97316" onClick={saveScan} disabled={recordMut.isPending} ariaLabel="Lưu kết quả quét của câu này">Lưu kết quả quét ({detected.size} em)</Btn>
          ) : null}
          {saved ? (
            <>
              <span className="rounded-full bg-emerald-500/25 px-3 py-2 text-sm font-bold text-emerald-100">✓ Đã lưu — đủ cả lớp, kết quả tự hiện</span>
              <Btn color="#FFC53D" textColor="#232a6b" onClick={onShowQuestionResults} ariaLabel="Xem kết quả câu vừa quét">Xem kết quả câu này →</Btn>
            </>
          ) : null}
          {existingCount > 0 ? (
            <button type="button" onClick={() => clearMut.mutate()} aria-label="Xoá đáp án đã ghi của câu này để quét lại" className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white" style={{ minHeight: 36 }}>Quét lại từ đầu (xoá {existingCount} đáp án)</button>
          ) : null}
        </div>
        <p className="px-4 pb-4 text-xs leading-relaxed text-white/60">
          Bản dựng lại theo video chạy trong trình duyệt nên phần nhận diện thẻ là <b>quét mô phỏng</b>: đáp án hiện ở đây là dữ liệu luyện tập để thầy cô làm quen quy trình và kiểm tra phần kết quả — đáp án thật của học sinh hãy ghi bằng thẻ giấy + mục <b>Nhập tay</b>, hoặc sửa từng ô sau khi lưu. Mẹo khi dùng thẻ thật: cầm ở phần giấy trắng, đừng che ô đen.
        </p>
      </div>

      <div className="rounded-3xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <h3 className="text-sm font-extrabold" style={{ color: "#232a6b" }}>Thẻ đã nhận diện — khung xanh = đã ghi nhận</h3>
        {students.length === 0 ? (
          <p className="mt-2 text-sm" style={{ color: "var(--dim)" }}>Lớp chưa có học sinh nào.</p>
        ) : (
          <ul className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {students.map((s) => {
              const a = detected.get(s.id) ?? existing?.get(s.id);
              const seen = detected.size > 0 ? detected.has(s.id) : (existing?.has(s.id) ?? false);
              return (
                <li
                  key={s.id}
                  className={seen ? "pop-in" : ""}
                  style={{
                    border: `2px solid ${seen ? "#06D6A0" : "#e5e7eb"}`,
                    background: seen ? "#ECFDF5" : "#fafafa",
                    borderRadius: 10,
                    padding: "6px 8px",
                    opacity: seen ? 1 : 0.55,
                  }}
                >
                  <span className="block truncate text-xs font-bold">#{s.stt} {s.name}</span>
                  <span className="text-[11px] font-semibold" style={{ color: seen ? "#047857" : "#9ca3af" }}>
                    {seen && a ? `Đáp án ${a}` : "Chưa thấy thẻ…"}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
        <Btn color="#232a6b" className="mt-4 w-full" onClick={onDone} ariaLabel="Đi tới màn hình kết quả tổng hợp">📊 Tới kết quả tổng hợp</Btn>
      </div>
    </section>
  );
}

// ---------- Manual entry ----------
function ManualPanel({
  sessionId, q, students, existing,
}: {
  sessionId: number; q: SQuestion; students: Student[]; existing: Map<number, Answer> | undefined;
}) {
  const queryClient = useQueryClient();
  const [brush, setBrush] = useState<Answer>("A");
  const recordMut = useMutation({
    mutationFn: async (args: { student_id: number; answer: Answer }) =>
      await api.recordResponses({ session_id: sessionId, question_id: q.id, source: "manual", answers: [args] }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["session", sessionId] }),
  });
  const clearMut = useMutation({
    mutationFn: async () => await api.clearQuestionResponses({ session_id: sessionId, question_id: q.id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["session", sessionId] }),
  });
  const answered = existing?.size ?? 0;

  return (
    <section className="mt-4 rounded-3xl p-4 sm:p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
      <h3 className="text-base font-extrabold" style={{ color: "#232a6b" }}>Nhập tay đáp án — Câu {q.position}</h3>
      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--dim)" }}>
        Chọn đáp án ở hàng “cọ” bên dưới rồi chạm vào từng học sinh (đọc theo thẻ các em giơ), hoặc chạm trực tiếp các nút A B C D trong ô của từng em. Đã ghi {answered}/{students.length} em.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2" role="group" aria-label="Chọn đáp án cọ">
        <span className="text-sm font-bold">Cọ đáp án:</span>
        {ANSWERS.map((L) => (
          <button
            key={L}
            type="button"
            aria-label={`Chọn cọ đáp án ${L}`}
            aria-pressed={brush === L}
            onClick={() => setBrush(L)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-base font-black text-white"
            style={{ background: ANSWER_COLORS[L], outline: brush === L ? "3px solid #232a6b" : "none", outlineOffset: 2 }}
          >
            {L}
          </button>
        ))}
        {answered > 0 ? (
          <button type="button" onClick={() => clearMut.mutate()} aria-label="Xoá toàn bộ đáp án đã nhập của câu này" className="ml-auto rounded-full px-3 py-2 text-sm font-bold" style={{ background: "#FEE2E2", color: "#b91c1c", minHeight: 40 }}>Xoá đáp án câu này</button>
        ) : null}
      </div>
      {students.length === 0 ? (
        <p className="mt-4 text-sm" style={{ color: "var(--dim)" }}>Lớp chưa có học sinh nào — thêm danh sách ở mục Lớp học trước.</p>
      ) : (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((s) => {
            const cur = existing?.get(s.id);
            const correct = cur != null && cur === q.correct;
            return (
              <li key={s.id} className="rounded-2xl p-3" style={{ background: cur ? (correct ? "#ECFDF5" : "#FEF2F2") : "#FFF9EC", border: "1px solid var(--border)" }}>
                <button
                  type="button"
                  aria-label={`Gán đáp án ${brush} cho ${s.name}`}
                  onClick={() => recordMut.mutate({ student_id: s.id, answer: brush })}
                  className="w-full text-left"
                  style={{ minHeight: 32 }}
                >
                  <span className="block truncate text-sm font-bold">#{s.stt} {s.name}</span>
                  <span className="text-xs" style={{ color: "var(--dim)" }}>{cur ? `Đang chọn ${cur}${correct ? " · đúng ✓" : " · chưa đúng"}` : "Chạm để gán đáp án cọ"}</span>
                </button>
                <span className="mt-2 flex gap-1.5" role="group" aria-label={`Chọn đáp án cho ${s.name}`}>
                  {ANSWERS.map((L) => (
                    <button
                      key={L}
                      type="button"
                      aria-label={`Đặt đáp án ${L} cho ${s.name}`}
                      aria-pressed={cur === L}
                      onClick={() => recordMut.mutate({ student_id: s.id, answer: L })}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white"
                      style={{ background: ANSWER_COLORS[L], opacity: cur === L ? 1 : 0.35, outline: cur === L ? "2px solid #232a6b" : "none" }}
                    >
                      {L}
                    </button>
                  ))}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

// ---------- Results ----------
function ResultsPanel({
  data, respMap, focusQuestionId, onFocus, onPresentQuestion,
}: {
  data: SessionDetail;
  respMap: Map<number, Map<number, Answer>>;
  focusQuestionId: number | null;
  onFocus: (id: number | null) => void;
  onPresentQuestion: (qid: number) => void;
}) {
  const { questions, students } = data;
  const focusQ = questions.find((q) => q.id === focusQuestionId) ?? questions[0];

  const perQuestion = questions.map((q) => {
    const m = respMap.get(q.id);
    const counts: Record<Answer, number> = { A: 0, B: 0, C: 0, D: 0 };
    let answered = 0;
    let correct = 0;
    if (m) {
      for (const a of m.values()) {
        counts[a] += 1;
        answered += 1;
        if (a === q.correct) correct += 1;
      }
    }
    return { q, counts, answered, correct, pct: answered > 0 ? Math.round((correct / answered) * 100) : null };
  });

  const perStudent = students
    .map((s) => {
      let answered = 0;
      let correct = 0;
      const marks: { qid: number; pos: number; ans: Answer | null; ok: boolean }[] = questions.map((q) => {
        const a = respMap.get(q.id)?.get(s.id) ?? null;
        if (a) {
          answered += 1;
          if (a === q.correct) correct += 1;
        }
        return { qid: q.id, pos: q.position, ans: a, ok: a != null && a === q.correct };
      });
      return { s, answered, correct, marks };
    })
    .sort((x, y) => y.correct - x.correct || x.s.stt - y.s.stt);

  const totalAnsweredPairs = perQuestion.reduce((n, p) => n + p.answered, 0);
  const totalCorrectPairs = perQuestion.reduce((n, p) => n + p.correct, 0);
  const overallPct = totalAnsweredPairs > 0 ? Math.round((totalCorrectPairs / totalAnsweredPairs) * 100) : null;
  const hardest = [...perQuestion].filter((p) => p.pct != null).sort((a, b) => (a.pct ?? 100) - (b.pct ?? 100))[0];

  const exportCsv = () => {
    const esc = (v: string) => `"${v.replaceAll('"', '""')}"`;
    const lines: string[] = [];
    lines.push(["STT", "Học sinh", ...questions.map((q) => `Câu ${q.position}`), "Số câu đúng", "Tổng số câu"].map(esc).join(","));
    for (const ps of perStudent) {
      lines.push([
        String(ps.s.stt),
        ps.s.name,
        ...ps.marks.map((mk) => mk.ans ?? ""),
        String(ps.correct),
        String(questions.length),
      ].map(esc).join(","));
    }
    const blob = new Blob(["\uFEFF" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ket-qua-${data.session.class_name}-${data.session.id}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="mt-4 space-y-6">
      {/* Summary strip */}
      <div className="grid gap-3 sm:grid-cols-4">
        {[
          { label: "Số câu hỏi", value: String(questions.length) },
          { label: "Lượt trả lời đã ghi", value: `${totalAnsweredPairs}/${students.length * questions.length}` },
          { label: "Tỉ lệ đúng chung", value: overallPct == null ? "—" : `${overallPct}%` },
          { label: "Câu cần giảng lại", value: hardest && hardest.pct != null && hardest.pct < 100 ? `Câu ${hardest.q.position} (${hardest.pct}% đúng)` : "—" },
        ].map((c) => (
          <div key={c.label} className="rounded-3xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--dim)" }}>{c.label}</p>
            <p className="mt-1 text-xl font-black" style={{ color: "#232a6b" }}>{c.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Btn color="#232a6b" onClick={exportCsv} ariaLabel="Tải kết quả buổi học dạng CSV">⬇ Tải bảng kết quả (CSV)</Btn>
        <span className="self-center text-sm" style={{ color: "var(--dim)" }}>Câu nào nhiều em sai, giảng lại ngay chỗ đó — xem chi tiết từng câu bên dưới.</span>
      </div>

      {/* Per-question bars */}
      <div>
        <h3 className="text-lg font-extrabold" style={{ color: "#232a6b" }}>Kết quả từng câu</h3>
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          {perQuestion.map(({ q, counts, answered, correct, pct }) => {
            const max = Math.max(1, ...ANSWERS.map((L) => counts[L]));
            return (
              <article key={q.id} className="rounded-3xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-start gap-2">
                  <p className="min-w-0 flex-1 text-sm font-bold leading-snug">Câu {q.position}. {q.content}</p>
                  <span className="shrink-0 rounded-full px-2.5 py-1 text-xs font-black" style={{ background: pct == null ? "#E5E7EB" : pct >= 70 ? "#DCFCE7" : pct >= 40 ? "#FEF9C3" : "#FEE2E2", color: pct == null ? "#555" : pct >= 70 ? "#166534" : pct >= 40 ? "#854D0E" : "#991B1B" }}>
                    {pct == null ? "Chưa có đáp án" : `${correct}/${answered} đúng · ${pct}%`}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5">
                  {ANSWERS.map((L) => (
                    <div key={L} className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ background: ANSWER_COLORS[L] }}>{L}</span>
                      <div className="h-4 flex-1 overflow-hidden rounded-full" style={{ background: "#F1EFE9" }}>
                        <div style={{ width: `${(counts[L] / max) * 100}%`, background: ANSWER_COLORS[L], height: "100%", borderRadius: 999 }} />
                      </div>
                      <span className="w-14 shrink-0 text-right text-xs font-bold">{counts[L]} em{L === q.correct ? " ✓" : ""}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <button type="button" aria-label={`Xem lưới học sinh câu ${q.position}`} onClick={() => onFocus(q.id)} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: focusQ?.id === q.id ? "#232a6b" : "#FFF3D6", color: focusQ?.id === q.id ? "#fff" : "#232a6b", minHeight: 36 }}>Xem ai đúng / sai</button>
                  <button type="button" aria-label={`Trình chiếu lại câu ${q.position} để giảng lại`} onClick={() => onPresentQuestion(q.id)} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: "#E7E9FF", color: "#232a6b", minHeight: 36 }}>Chiếu lại để giảng</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Student grid for focused question */}
      {focusQ ? (
        <div>
          <h3 className="text-lg font-extrabold" style={{ color: "#232a6b" }}>
            Lưới học sinh — Câu {focusQ.position} <span className="text-sm font-semibold" style={{ color: "var(--dim)" }}>(đáp án đúng: {focusQ.correct})</span>
          </h3>
          {students.length === 0 ? (
            <p className="mt-2 text-sm" style={{ color: "var(--dim)" }}>Lớp chưa có học sinh nào.</p>
          ) : (
            <ul className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {students.map((s) => {
                const a = respMap.get(focusQ.id)?.get(s.id) ?? null;
                const ok = a != null && a === focusQ.correct;
                return (
                  <li
                    key={s.id}
                    style={{
                      borderRadius: 12,
                      padding: "8px 10px",
                      border: `2px solid ${a == null ? "#e5e7eb" : ok ? "#22C55E" : "#EF4444"}`,
                      background: a == null ? "#fafafa" : ok ? "#F0FDF4" : "#FEF2F2",
                    }}
                  >
                    <span className="block truncate text-sm font-bold">#{s.stt} {s.name}</span>
                    <span className="text-xs font-semibold" style={{ color: a == null ? "#9ca3af" : ok ? "#15803d" : "#b91c1c" }}>
                      {a == null ? "Chưa trả lời" : ok ? `Chọn ${a} · Đúng ✓` : `Chọn ${a} · Sai ✗`}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : null}

      {/* Scoreboard */}
      <div>
        <h3 className="text-lg font-extrabold" style={{ color: "#232a6b" }}>Bảng điểm cả buổi học</h3>
        <div className="mt-3 overflow-hidden rounded-3xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          {perStudent.length === 0 ? (
            <p className="p-5 text-sm" style={{ color: "var(--dim)" }}>Chưa có học sinh nào trong lớp.</p>
          ) : (
            <ul className="divide-y" style={{ borderColor: "var(--border)" }}>
              {perStudent.map((ps, rank) => (
                <li key={ps.s.id} className="flex items-center gap-3 px-4 py-2.5">
                  <span className="w-7 shrink-0 text-center text-sm font-black" style={{ color: rank < 3 ? "#F97316" : "#9ca3af" }}>{rank + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold">#{ps.s.stt} {ps.s.name}</span>
                    <span className="flex flex-wrap gap-1 pt-0.5" aria-hidden="true">
                      {ps.marks.map((mk) => (
                        <span key={mk.qid} title={`Câu ${mk.pos}: ${mk.ans ?? "chưa trả lời"}`} className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-black text-white" style={{ background: mk.ans == null ? "#D1D5DB" : mk.ok ? "#22C55E" : "#EF4444" }}>
                          {mk.ans ?? "–"}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-black" style={{ color: "#232a6b" }}>{ps.correct}/{questions.length} đúng</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
```

## File: `server/tsconfig.json`

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["ES2022"],
    "types": ["bun-types"],
    "outDir": "./dist",
    "rootDir": ".",
    "tsBuildInfoFile": "./.tsbuildinfo.server",
    "paths": {
      "@space/privileged": ["./.generated/privileged.contract"]
    }
  },
  "include": ["src/**/*", ".generated/**/*"]
}
```

## File: `server/src/schema.ts`

```ts
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const classes = sqliteTable("classes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdAt: integer("created_at").notNull(),
});

export const students = sqliteTable("students", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  classId: integer("class_id").notNull(),
  stt: integer("stt").notNull(),
  name: text("name").notNull(),
});

export const banks = sqliteTable("banks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  createdAt: integer("created_at").notNull(),
});

export const bankQuestions = sqliteTable("bank_questions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  bankId: integer("bank_id").notNull(),
  position: integer("position").notNull(),
  content: text("content").notNull(),
  optionA: text("option_a").notNull(),
  optionB: text("option_b").notNull(),
  optionC: text("option_c").notNull(),
  optionD: text("option_d").notNull(),
  correct: text("correct").notNull(),
});

export const sessions = sqliteTable("sessions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  classId: integer("class_id").notNull(),
  title: text("title").notNull(),
  status: text("status").notNull().default("active"),
  currentIndex: integer("current_index").notNull().default(0),
  createdAt: integer("created_at").notNull(),
});

export const sessionQuestions = sqliteTable("session_questions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  sessionId: integer("session_id").notNull(),
  position: integer("position").notNull(),
  content: text("content").notNull(),
  optionA: text("option_a").notNull(),
  optionB: text("option_b").notNull(),
  optionC: text("option_c").notNull(),
  optionD: text("option_d").notNull(),
  correct: text("correct").notNull(),
});

export const responses = sqliteTable("responses", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  sessionId: integer("session_id").notNull(),
  questionId: integer("question_id").notNull(),
  studentId: integer("student_id").notNull(),
  answer: text("answer").notNull(),
  source: text("source").notNull().default("manual"),
  updatedAt: integer("updated_at").notNull(),
});
```

## File: `server/src/actions.ts`

```ts
import { defineAction, z, type ActionsModule } from "@hatch/space-sdk";
import { and, asc, desc, eq } from "drizzle-orm";
import type { BatchItem } from "drizzle-orm/batch";
import * as schema from "./schema";

const answerEnum = z.enum(["A", "B", "C", "D"]);

const questionShape = z.object({
  id: z.number(),
  position: z.number(),
  content: z.string(),
  option_a: z.string(),
  option_b: z.string(),
  option_c: z.string(),
  option_d: z.string(),
  correct: z.string(),
});

const questionInput = z.object({
  content: z.string().min(1),
  option_a: z.string().min(1),
  option_b: z.string().min(1),
  option_c: z.string().min(1),
  option_d: z.string().min(1),
  correct: answerEnum,
});

function qOut(r: {
  id: number;
  position: number;
  content: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: string;
}) {
  return {
    id: r.id,
    position: r.position,
    content: r.content,
    option_a: r.optionA,
    option_b: r.optionB,
    option_c: r.optionC,
    option_d: r.optionD,
    correct: r.correct,
  };
}

const okResponse = z.object({ ok: z.literal(true) });

export const Actions = {
  // ---------- Overview ----------
  getOverview: defineAction({
    description: "Returns classes with student counts, question banks with question counts, and recent sessions for the home screen.",
    request: z.object({}),
    response: z.object({
      classes: z.array(
        z.object({ id: z.number(), name: z.string(), student_count: z.number() }),
      ),
      banks: z.array(
        z.object({ id: z.number(), title: z.string(), question_count: z.number() }),
      ),
      sessions: z.array(
        z.object({
          id: z.number(),
          title: z.string(),
          class_id: z.number(),
          class_name: z.string(),
          status: z.string(),
          question_count: z.number(),
          created_at: z.number(),
        }),
      ),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const classRows = await db.select().from(schema.classes).orderBy(asc(schema.classes.id));
      const studentRows = await db.select().from(schema.students);
      const bankRows = await db.select().from(schema.banks).orderBy(desc(schema.banks.id));
      const bqRows = await db.select().from(schema.bankQuestions);
      const sessionRows = await db
        .select()
        .from(schema.sessions)
        .orderBy(desc(schema.sessions.id))
        .limit(20);
      const sqRows = await db.select().from(schema.sessionQuestions);
      const className = new Map(classRows.map((c) => [c.id, c.name]));
      return {
        classes: classRows.map((c) => ({
          id: c.id,
          name: c.name,
          student_count: studentRows.filter((s) => s.classId === c.id).length,
        })),
        banks: bankRows.map((b) => ({
          id: b.id,
          title: b.title,
          question_count: bqRows.filter((q) => q.bankId === b.id).length,
        })),
        sessions: sessionRows.map((s) => ({
          id: s.id,
          title: s.title,
          class_id: s.classId,
          class_name: className.get(s.classId) ?? "—",
          status: s.status,
          question_count: sqRows.filter((q) => q.sessionId === s.id).length,
          created_at: s.createdAt,
        })),
      };
    },
  }),

  // ---------- Classes & students ----------
  createClass: defineAction({
    description: "Creates a new class with the given name.",
    request: z.object({ name: z.string().min(1).max(60) }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const [row] = await db
        .insert(schema.classes)
        .values({ name: args.name.trim(), createdAt: Date.now() })
        .returning({ id: schema.classes.id });
      if (!row) throw new Error("createClass failed");
      ctx.invalidateQueries();
      return { id: row.id };
    },
  }),

  deleteClass: defineAction({
    description: "Deletes a class together with its students and sessions.",
    request: z.object({ class_id: z.number() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      const sess = await db
        .select()
        .from(schema.sessions)
        .where(eq(schema.sessions.classId, args.class_id));
      const stmts: BatchItem<"sqlite">[] = [
        db.delete(schema.students).where(eq(schema.students.classId, args.class_id)),
        db.delete(schema.classes).where(eq(schema.classes.id, args.class_id)),
      ];
      for (const s of sess) {
        stmts.push(db.delete(schema.responses).where(eq(schema.responses.sessionId, s.id)));
        stmts.push(db.delete(schema.sessionQuestions).where(eq(schema.sessionQuestions.sessionId, s.id)));
        stmts.push(db.delete(schema.sessions).where(eq(schema.sessions.id, s.id)));
      }
      const [first, ...rest] = stmts;
      if (first) await db.batch([first, ...rest]);
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  listStudents: defineAction({
    description: "Lists students of a class ordered by STT (card number).",
    request: z.object({ class_id: z.number() }),
    response: z.object({
      students: z.array(z.object({ id: z.number(), stt: z.number(), name: z.string() })),
    }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.students)
        .where(eq(schema.students.classId, args.class_id))
        .orderBy(asc(schema.students.stt));
      return { students: rows.map((r) => ({ id: r.id, stt: r.stt, name: r.name })) };
    },
  }),

  addStudentsBulk: defineAction({
    description: "Adds many students to a class from pasted names (one per line); STT continues from the current maximum.",
    request: z.object({ class_id: z.number(), names: z.array(z.string().min(1)).min(1).max(200) }),
    response: z.object({ added: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const existing = await db
        .select()
        .from(schema.students)
        .where(eq(schema.students.classId, args.class_id));
      let next = existing.reduce((m, s) => Math.max(m, s.stt), 0) + 1;
      const stmts: BatchItem<"sqlite">[] = args.names.map((name) =>
        db.insert(schema.students).values({ classId: args.class_id, stt: next++, name: name.trim() }),
      );
      const [first, ...rest] = stmts;
      if (first) await db.batch([first, ...rest]);
      ctx.invalidateQueries();
      return { added: args.names.length };
    },
  }),

  updateStudent: defineAction({
    description: "Renames a student or changes their STT (card number).",
    request: z.object({ student_id: z.number(), name: z.string().min(1), stt: z.number().int().min(1).max(999) }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.students)
        .set({ name: args.name.trim(), stt: args.stt })
        .where(eq(schema.students.id, args.student_id));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  deleteStudent: defineAction({
    description: "Removes one student from a class.",
    request: z.object({ student_id: z.number() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db.delete(schema.students).where(eq(schema.students.id, args.student_id));
      await db.delete(schema.responses).where(eq(schema.responses.studentId, args.student_id));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  // ---------- Question banks ----------
  createBank: defineAction({
    description: "Creates an empty question bank (đề) with the given title.",
    request: z.object({ title: z.string().min(1).max(120) }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const [row] = await db
        .insert(schema.banks)
        .values({ title: args.title.trim(), createdAt: Date.now() })
        .returning({ id: schema.banks.id });
      if (!row) throw new Error("createBank failed");
      ctx.invalidateQueries();
      return { id: row.id };
    },
  }),

  deleteBank: defineAction({
    description: "Deletes a question bank and all its questions.",
    request: z.object({ bank_id: z.number() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db.batch([
        db.delete(schema.bankQuestions).where(eq(schema.bankQuestions.bankId, args.bank_id)),
        db.delete(schema.banks).where(eq(schema.banks.id, args.bank_id)),
      ]);
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  listBankQuestions: defineAction({
    description: "Lists questions of a bank in order.",
    request: z.object({ bank_id: z.number() }),
    response: z.object({ questions: z.array(questionShape) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const rows = await db
        .select()
        .from(schema.bankQuestions)
        .where(eq(schema.bankQuestions.bankId, args.bank_id))
        .orderBy(asc(schema.bankQuestions.position));
      return { questions: rows.map(qOut) };
    },
  }),

  addBankQuestion: defineAction({
    description: "Adds one multiple-choice question (4 options, one correct) to a bank.",
    request: z.object({ bank_id: z.number(), question: questionInput }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const existing = await db
        .select()
        .from(schema.bankQuestions)
        .where(eq(schema.bankQuestions.bankId, args.bank_id));
      const pos = existing.reduce((m, q) => Math.max(m, q.position), 0) + 1;
      const q = args.question;
      const [row] = await db
        .insert(schema.bankQuestions)
        .values({
          bankId: args.bank_id,
          position: pos,
          content: q.content.trim(),
          optionA: q.option_a.trim(),
          optionB: q.option_b.trim(),
          optionC: q.option_c.trim(),
          optionD: q.option_d.trim(),
          correct: q.correct,
        })
        .returning({ id: schema.bankQuestions.id });
      if (!row) throw new Error("addBankQuestion failed");
      ctx.invalidateQueries();
      return { id: row.id };
    },
  }),

  updateBankQuestion: defineAction({
    description: "Edits one question in a bank.",
    request: z.object({ question_id: z.number(), question: questionInput }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      const q = args.question;
      await db
        .update(schema.bankQuestions)
        .set({
          content: q.content.trim(),
          optionA: q.option_a.trim(),
          optionB: q.option_b.trim(),
          optionC: q.option_c.trim(),
          optionD: q.option_d.trim(),
          correct: q.correct,
        })
        .where(eq(schema.bankQuestions.id, args.question_id));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  deleteBankQuestion: defineAction({
    description: "Removes one question from a bank.",
    request: z.object({ question_id: z.number() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db.delete(schema.bankQuestions).where(eq(schema.bankQuestions.id, args.question_id));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  // ---------- Sessions ----------
  createSession: defineAction({
    description: "Creates a lesson session for a class, copying questions from a bank and/or quick-typed questions.",
    request: z.object({
      class_id: z.number(),
      title: z.string().min(1).max(120),
      bank_id: z.number().nullable(),
      quick_questions: z.array(questionInput).max(60),
    }),
    response: z.object({ id: z.number(), question_count: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      let qs: z.infer<typeof questionInput>[] = [...args.quick_questions];
      if (args.bank_id != null) {
        const rows = await db
          .select()
          .from(schema.bankQuestions)
          .where(eq(schema.bankQuestions.bankId, args.bank_id))
          .orderBy(asc(schema.bankQuestions.position));
        qs = [
          ...rows.map((r) => ({
            content: r.content,
            option_a: r.optionA,
            option_b: r.optionB,
            option_c: r.optionC,
            option_d: r.optionD,
            correct: r.correct as "A" | "B" | "C" | "D",
          })),
          ...qs,
        ];
      }
      if (qs.length === 0) throw new Error("Buổi học cần ít nhất 1 câu hỏi");
      const [sess] = await db
        .insert(schema.sessions)
        .values({ classId: args.class_id, title: args.title.trim(), status: "active", currentIndex: 0, createdAt: Date.now() })
        .returning({ id: schema.sessions.id });
      if (!sess) throw new Error("createSession failed");
      const stmts: BatchItem<"sqlite">[] = qs.map((q, i) =>
        db.insert(schema.sessionQuestions).values({
          sessionId: sess.id,
          position: i + 1,
          content: q.content.trim(),
          optionA: q.option_a.trim(),
          optionB: q.option_b.trim(),
          optionC: q.option_c.trim(),
          optionD: q.option_d.trim(),
          correct: q.correct,
        }),
      );
      const [first, ...rest] = stmts;
      if (first) await db.batch([first, ...rest]);
      ctx.invalidateQueries();
      return { id: sess.id, question_count: qs.length };
    },
  }),

  getSession: defineAction({
    description: "Returns full session detail: questions, class students, and all recorded answers.",
    request: z.object({ session_id: z.number() }),
    response: z.object({
      session: z.object({
        id: z.number(),
        title: z.string(),
        class_id: z.number(),
        class_name: z.string(),
        status: z.string(),
        current_index: z.number(),
        created_at: z.number(),
      }),
      questions: z.array(questionShape),
      students: z.array(z.object({ id: z.number(), stt: z.number(), name: z.string() })),
      responses: z.array(
        z.object({ question_id: z.number(), student_id: z.number(), answer: z.string(), source: z.string() }),
      ),
    }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const [sess] = await db.select().from(schema.sessions).where(eq(schema.sessions.id, args.session_id));
      if (!sess) throw new Error("Không tìm thấy buổi học");
      const [cls] = await db.select().from(schema.classes).where(eq(schema.classes.id, sess.classId));
      const questions = await db
        .select()
        .from(schema.sessionQuestions)
        .where(eq(schema.sessionQuestions.sessionId, sess.id))
        .orderBy(asc(schema.sessionQuestions.position));
      const students = await db
        .select()
        .from(schema.students)
        .where(eq(schema.students.classId, sess.classId))
        .orderBy(asc(schema.students.stt));
      const resps = await db.select().from(schema.responses).where(eq(schema.responses.sessionId, sess.id));
      return {
        session: {
          id: sess.id,
          title: sess.title,
          class_id: sess.classId,
          class_name: cls?.name ?? "—",
          status: sess.status,
          current_index: sess.currentIndex,
          created_at: sess.createdAt,
        },
        questions: questions.map(qOut),
        students: students.map((s) => ({ id: s.id, stt: s.stt, name: s.name })),
        responses: resps.map((r) => ({
          question_id: r.questionId,
          student_id: r.studentId,
          answer: r.answer,
          source: r.source,
        })),
      };
    },
  }),

  setCurrentQuestion: defineAction({
    description: "Moves the projector to the given question index in a session.",
    request: z.object({ session_id: z.number(), index: z.number().int().min(0) }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.sessions)
        .set({ currentIndex: args.index })
        .where(eq(schema.sessions.id, args.session_id));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  recordResponses: defineAction({
    description: "Records (upserts) answers for one question of a session — from simulated scan or manual entry.",
    request: z.object({
      session_id: z.number(),
      question_id: z.number(),
      source: z.enum(["scan", "manual"]),
      answers: z.array(z.object({ student_id: z.number(), answer: answerEnum })).max(300),
    }),
    response: z.object({ saved: z.number() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const existing = await db
        .select()
        .from(schema.responses)
        .where(and(eq(schema.responses.sessionId, args.session_id), eq(schema.responses.questionId, args.question_id)));
      const byStudent = new Map(existing.map((r) => [r.studentId, r]));
      const stmts: BatchItem<"sqlite">[] = [];
      for (const a of args.answers) {
        const old = byStudent.get(a.student_id);
        if (old) {
          stmts.push(
            db
              .update(schema.responses)
              .set({ answer: a.answer, source: args.source, updatedAt: Date.now() })
              .where(eq(schema.responses.id, old.id)),
          );
        } else {
          stmts.push(
            db.insert(schema.responses).values({
              sessionId: args.session_id,
              questionId: args.question_id,
              studentId: a.student_id,
              answer: a.answer,
              source: args.source,
              updatedAt: Date.now(),
            }),
          );
        }
      }
      const [first, ...rest] = stmts;
      if (first) await db.batch([first, ...rest]);
      ctx.invalidateQueries();
      return { saved: args.answers.length };
    },
  }),

  clearQuestionResponses: defineAction({
    description: "Clears all recorded answers for one question so it can be scanned again.",
    request: z.object({ session_id: z.number(), question_id: z.number() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db
        .delete(schema.responses)
        .where(and(eq(schema.responses.sessionId, args.session_id), eq(schema.responses.questionId, args.question_id)));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  finishSession: defineAction({
    description: "Marks a session as finished (or reopens it).",
    request: z.object({ session_id: z.number(), finished: z.boolean() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db
        .update(schema.sessions)
        .set({ status: args.finished ? "finished" : "active" })
        .where(eq(schema.sessions.id, args.session_id));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  deleteSession: defineAction({
    description: "Deletes a session with its questions and answers.",
    request: z.object({ session_id: z.number() }),
    response: okResponse,
    async handler(ctx, args): Promise<z.infer<typeof okResponse>> {
      const db = ctx.db<typeof schema>();
      await db.batch([
        db.delete(schema.responses).where(eq(schema.responses.sessionId, args.session_id)),
        db.delete(schema.sessionQuestions).where(eq(schema.sessionQuestions.sessionId, args.session_id)),
        db.delete(schema.sessions).where(eq(schema.sessions.id, args.session_id)),
      ]);
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),
} satisfies ActionsModule;
```

## File: `drizzle/0001_initial.sql`

```sql
CREATE TABLE entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
```

## File: `drizzle/0002_the_tra_loi_tables.sql`

```sql
DROP TABLE IF EXISTS entries;
--> statement-breakpoint
CREATE TABLE classes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  class_id INTEGER NOT NULL,
  stt INTEGER NOT NULL,
  name TEXT NOT NULL
);
--> statement-breakpoint
CREATE TABLE banks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE bank_questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bank_id INTEGER NOT NULL,
  position INTEGER NOT NULL,
  content TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct TEXT NOT NULL
);
--> statement-breakpoint
CREATE TABLE sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  class_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  current_index INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE session_questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id INTEGER NOT NULL,
  position INTEGER NOT NULL,
  content TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct TEXT NOT NULL
);
--> statement-breakpoint
CREATE TABLE responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  student_id INTEGER NOT NULL,
  answer TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'manual',
  updated_at INTEGER NOT NULL
);
```

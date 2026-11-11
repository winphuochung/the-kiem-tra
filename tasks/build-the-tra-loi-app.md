# 🚀 Kế hoạch Triển khai Ứng dụng "Thẻ Trả Lời" (Plickers Style)

## 📌 Tổng quan Dự án
Triển khai hệ thống Web/App **Thẻ Trả Lời** phục vụ kiểm tra, đánh giá lớp học tức thì không cần học sinh dùng điện thoại hay máy bấm. Học sinh sử dụng thẻ giấy A4 in đen trắng (xoay hướng A/B/C/D), giáo viên dùng camera điện thoại/laptop để quét cả lớp và nhận kết quả tức thì.

## 🛠️ Ngăn xếp Công nghệ (Tech Stack)
- **Runtime:** Node.js v24.19 (hỗ trợ sẵn `node:sqlite` không cần biên dịch C++ native)
- **Backend API:** Express.js + Zod validation + RPC Actions endpoint (`/api/actions`)
- **Database:** SQLite file-based (`data/the-tra-loi.db`) với đầy đủ bảng `classes`, `students`, `banks`, `bank_questions`, `sessions`, `session_questions`, `responses`
- **Frontend:** Vite + React 19 + TypeScript + Tailwind CSS
- **Visualization & State:** Recharts + @tanstack/react-query
- **Chế độ quét:** Camera trực tiếp (WebRTC/Canvas) + Quét mô phỏng nhanh + Nhập tay

## 📋 Các bước thực hiện
1. **Khởi tạo cấu trúc dự án & `package.json`**:
   - Thiết lập cấu hình quản lý dependencies và scripts (`dev`, `build`, `start`, `seed`).
2. **Xây dựng Backend Server (`server/`)**:
   - `server/db.js`: Khởi tạo SQLite bằng `node:sqlite`, tự động chạy DDL schema, tạo bảng.
   - `server/seed.js`: Nạp dữ liệu mẫu ban đầu (Lớp 10A1, 35 học sinh, Đề kiểm tra 10 câu, Buổi học mẫu).
   - `server/actions.js`: Triển khai đầy đủ 20 hành động RPC logic.
   - `server/index.js`: Express server tích hợp Vite middleware hoặc API router.
3. **Thiết lập Frontend (`client/`)**:
   - `client/index.html`: Cấu trúc HTML, viewport, meta tags.
   - `client/src/theme.css`: Định dạng giao diện, hiệu ứng scan-line, cấu hình in A4 thẻ giấy.
   - `client/src/api.ts`: Typed RPC client gọi `/api/actions`.
   - `client/src/App.tsx`: Trọn vẹn giao diện 5 phân hệ (Trang chủ, Lớp học, In thẻ A4, Ngân hàng câu hỏi, Buổi học & Trình chiếu quét thẻ, Thống kê kết quả).
4. **Cài đặt thư viện & Kiểm tra (Build & Test)**:
   - Cài đặt `npm install`.
   - Kiểm tra API, build frontend, xác minh giao diện.
5. **Hướng dẫn khởi chạy & bàn giao cho người dùng**.

# 📚 Thẻ Trả Lời — Web/App Kiểm Tra Trắc Nghiệm Bằng Thẻ Giấy (Plickers Style)

Ứng dụng web dành cho giáo viên và trường học: **Kiểm tra, đánh giá học sinh nhanh chóng trong lớp học bằng thẻ giấy in đen trắng A4**, học sinh không cần dùng điện thoại hay bất kỳ máy bấm trắc nghiệm đắt tiền nào.

---

## 🌟 Tính Năng Nổi Bật

1. **Quản lý Lớp học & Học sinh:**
   - Tạo lớp học, nhập danh sách học sinh hàng loạt (copy - paste tên học sinh).
   - Tự động gán số thứ tự (STT) tương ứng với mã số thẻ định danh duy nhất cho từng em.
2. **In Thẻ Trắc Nghiệm Chuẩn A4:**
   - Tự động sinh mã ma trận nhận diện 4 hướng: **A (trên), B (phải), C (dưới), D (trái)**.
   - Định dạng in trang A4 chuẩn (4 thẻ/trang hoặc 1 thẻ lớn/trang), có vạch cắt rõ ràng và tên từng học sinh.
3. **Ngân Hàng Câu Hỏi:**
   - Soạn và lưu trữ đề kiểm tra trắc nghiệm 4 lựa chọn (A, B, C, D).
   - Chọn đáp án đúng trực quan chỉ bằng một lần chạm.
4. **Buổi Học & Trình Chiếu Phòng Học:**
   - Trình chiếu câu hỏi kích thước lớn, rõ nét cho toàn bộ học sinh trong lớp theo dõi.
   - Chế độ giấu/hiện đáp án đúng.
5. **Quét Thẻ Bằng Camera & Nhận Diện Tức Thì:**
   - Hỗ trợ **mở Camera trực tiếp** (Webcam laptop hoặc Camera điện thoại) để quét cả lớp.
   - Hỗ trợ **Quét mô phỏng nhanh** để giáo viên làm quen quy trình và chạy thử.
   - Hỗ trợ **Nhập tay đáp án** linh hoạt trong mọi tình huống.
6. **Thống Kê & Bảng Điểm Tức Thì:**
   - Biểu đồ phân bố tỉ lệ chọn các đáp án A, B, C, D qua biểu đồ trực quan (Recharts).
   - Danh sách chi tiết em nào trả lời đúng, em nào trả lời sai ngay tại thời điểm kiểm tra.

---

## 🚀 Hướng Dẫn Khởi Chạy

### 1. Khởi động ứng dụng
Trong thư mục dự án `d:\APP-HOC-TAP\the-kiem-tra`, mở terminal (PowerShell hoặc CMD) và chạy:

```bash
npm run dev
```

Server sẽ tự động khởi động tại:
👉 **http://localhost:3000**

### 2. Dữ liệu mẫu nạp sẵn
Hệ thống đã tự động tạo sẵn:
- **Lớp học:** Lớp 10A1 (35 học sinh đầy đủ họ tên và số thẻ từ #1 đến #35).
- **Ngân hàng đề thi:** 10 câu trắc nghiệm Khoa học tự nhiên & Kỹ năng số.
- **Buổi học thử nghiệm:** Đã sẵn sàng để bấm vào "Vào phòng học" và trải nghiệm ngay quy trình Trình chiếu -> Quét thẻ -> Xem kết quả!

---

## 🛠️ Công Nghệ Phát Triển
- **Frontend:** React 19, TypeScript, Tailwind CSS, Recharts, @tanstack/react-query.
- **Backend & Database:** Node.js 24, Express, `node:sqlite` (SQLite cục bộ lưu trữ trong thư mục `data/the-tra-loi.db`).
- **Build tool:** Vite 6.

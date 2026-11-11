import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";

const dataDir = path.resolve(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbFile = path.join(dataDir, "the-tra-loi.db");
export const db = new DatabaseSync(dbFile);

// Enable WAL mode & foreign keys for performance and reliability
db.exec("PRAGMA journal_mode = WAL;");
db.exec("PRAGMA foreign_keys = ON;");

// Initialize tables according to the schema
export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER NOT NULL,
      stt INTEGER NOT NULL,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS banks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS bank_questions (
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

    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'active',
      current_index INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS session_questions (
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

    CREATE TABLE IF NOT EXISTS responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id INTEGER NOT NULL,
      question_id INTEGER NOT NULL,
      student_id INTEGER NOT NULL,
      answer TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT 'manual',
      updated_at INTEGER NOT NULL
    );
  `);

  // Check if we need to seed initial sample data
  const countStmt = db.prepare("SELECT COUNT(*) as count FROM classes");
  const { count } = countStmt.get();

  if (count === 0) {
    seedInitialData();
  }
}

function seedInitialData() {
  console.log("🌱 Khởi tạo dữ liệu mẫu cho Thẻ Trả Lời...");

  const now = Date.now();

  // 1. Tạo Lớp 10A1 mẫu
  const insertClass = db.prepare("INSERT INTO classes (name, created_at) VALUES (?, ?)");
  const classResult = insertClass.run("Lớp 10A1 (Mẫu)", now);
  const classId = Number(classResult.lastInsertRowid);

  // 2. Danh sách 35 học sinh
  const sampleStudents = [
    "Nguyễn An Bình", "Trần Bảo Châu", "Lê Đăng Dũng", "Phạm Gia Hân", "Hoàng Nhật Minh",
    "Vũ Thuỳ Linh", "Đặng Quang Khải", "Bùi Ngọc Lan", "Đỗ Minh Quân", "Ngô Phương Thảo",
    "Dương Tiến Đạt", "Lý Hải Yến", "Mai Hoàng Long", "Đoàn Quốc Anh", "Phan Cẩm Tú",
    "Trịnh Đức Trọng", "Lưu Khánh Huyền", "Lâm Thanh Sơn", "Hà Trúc Quỳnh", "Cao Văn Nam",
    "Vương Mỹ Duyên", "Tạ Tuấn Kiệt", "Chu Ngọc Ánh", "Đinh Hoàng Bách", "Lương Diệu Linh",
    "Tô Quang Huy", "Trương Bảo Ngọc", "Huỳnh Tấn Phát", "Quách Hoài Thương", "Hồ Minh Trí",
    "Tăng Phúc Lộc", "Doãn Kim Oanh", "Tạ Duy Hưng", "Diệp Trọng Nhân", "Vi Thu Giang"
  ];

  const insertStudent = db.prepare("INSERT INTO students (class_id, stt, name) VALUES (?, ?, ?)");
  sampleStudents.forEach((name, idx) => {
    insertStudent.run(classId, idx + 1, name);
  });

  // 3. Tạo Ngân hàng câu hỏi
  const insertBank = db.prepare("INSERT INTO banks (title, created_at) VALUES (?, ?)");
  const bankResult = insertBank.run("Đề kiểm tra 15 phút: Khoa học tự nhiên & Kỹ năng số (10 câu)", now);
  const bankId = Number(bankResult.lastInsertRowid);

  const sampleQuestions = [
    {
      content: "Hành tinh nào trong Hệ Mặt Trời được mệnh danh là 'Hành tinh Đỏ'?",
      a: "Sao Kim",
      b: "Sao Hoả",
      c: "Sao Mộc",
      d: "Sao Thổ",
      correct: "B"
    },
    {
      content: "Công thức hoá học của nước là gì?",
      a: "CO2",
      b: "NaCl",
      c: "H2O",
      d: "O2",
      correct: "C"
    },
    {
      content: "Đơn vị cơ bản đo cường độ dòng điện trong hệ SI là gì?",
      a: "Ampe (A)",
      b: "Vôn (V)",
      c: "Ohm (Ω)",
      d: "Oát (W)",
      correct: "A"
    },
    {
      content: "Bộ phận nào của cây xanh chịu trách nhiệm chính trong quá trình quang hợp?",
      a: "Rễ",
      b: "Thân",
      c: "Lá",
      d: "Hoa",
      correct: "C"
    },
    {
      content: "Trong máy tính, 1 Byte tương đương với bao nhiêu Bit?",
      a: "4 Bit",
      b: "8 Bit",
      c: "16 Bit",
      d: "32 Bit",
      correct: "B"
    },
    {
      content: "Chất khí nào chiếm thể tích lớn nhất trong không khí quyển của Trái Đất?",
      a: "Oxy (O2)",
      b: "Cacbonic (CO2)",
      c: "Hydro (H2)",
      d: "Nitơ (N2)",
      correct: "D"
    },
    {
      content: "Hiện tượng nhật thực xảy ra khi nào?",
      a: "Trái Đất nằm giữa Mặt Trời và Mặt Trăng",
      b: "Mặt Trăng nằm giữa Mặt Trời và Trái Đất",
      c: "Mặt Trời nằm giữa Trái Đất và Mặt Trăng",
      d: "Khi Mặt Trăng đi vào vùng tối của Trái Đất",
      correct: "B"
    },
    {
      content: "Số Pi (π) xấp xỉ bằng bao nhiêu trong toán học?",
      a: "3.14",
      b: "2.71",
      c: "1.41",
      d: "1.73",
      correct: "A"
    },
    {
      content: "Đâu là một ví dụ về nguồn năng lượng tái tạo?",
      a: "Than đá",
      b: "Dầu mỏ",
      c: "Năng lượng gió",
      d: "Khí tự nhiên",
      correct: "C"
    },
    {
      content: "Phím tắt chuẩn để sao chép (Copy) trên hệ điều hành Windows là gì?",
      a: "Ctrl + V",
      b: "Ctrl + X",
      c: "Ctrl + Z",
      d: "Ctrl + C",
      correct: "D"
    }
  ];

  const insertBankQ = db.prepare(`
    INSERT INTO bank_questions (bank_id, position, content, option_a, option_b, option_c, option_d, correct)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  sampleQuestions.forEach((q, idx) => {
    insertBankQ.run(bankId, idx + 1, q.content, q.a, q.b, q.c, q.d, q.correct);
  });

  // 4. Tạo Buổi học mẫu
  const insertSession = db.prepare("INSERT INTO sessions (class_id, title, status, current_index, created_at) VALUES (?, ?, ?, ?, ?)");
  const sessionResult = insertSession.run(classId, "Buổi kiểm tra thử: Khoa học tự nhiên (Tuần 10)", "active", 0, now);
  const sessionId = Number(sessionResult.lastInsertRowid);

  const insertSessionQ = db.prepare(`
    INSERT INTO session_questions (session_id, position, content, option_a, option_b, option_c, option_d, correct)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  sampleQuestions.forEach((q, idx) => {
    insertSessionQ.run(sessionId, idx + 1, q.content, q.a, q.b, q.c, q.d, q.correct);
  });

  console.log("✅ Đã tạo dữ liệu mẫu thành công: Lớp 10A1, 35 học sinh, 10 câu hỏi, 1 buổi học.");
}

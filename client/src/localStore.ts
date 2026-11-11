// Client-side LocalStorage Database Adapter for "Thẻ Trả Lời"
// Đảm bảo ứng dụng chạy mượt mà 100% trên Vercel, Netlify, hoặc chế độ Offline
import type { Answer, QuestionInput, QuestionShape } from "./api";

const STORAGE_KEY = "the_tra_loi_db_v1";

interface LocalDb {
  classes: { id: number; name: string; createdAt: number }[];
  students: { id: number; classId: number; stt: number; name: string }[];
  banks: { id: number; title: string; createdAt: number }[];
  bankQuestions: (QuestionShape & { bankId: number })[];
  sessions: {
    id: number;
    classId: number;
    title: string;
    status: string;
    currentIndex: number;
    createdAt: number;
  }[];
  sessionQuestions: (QuestionShape & { sessionId: number })[];
  responses: {
    id: number;
    sessionId: number;
    questionId: number;
    studentId: number;
    answer: Answer;
    source: string;
    updatedAt: number;
  }[];
}

const sampleStudents = [
  "Nguyễn An Bình", "Trần Bảo Châu", "Lê Đăng Dũng", "Phạm Gia Hân", "Hoàng Nhật Minh",
  "Vũ Thuỳ Linh", "Đặng Quang Khải", "Bùi Ngọc Lan", "Đỗ Minh Quân", "Ngô Phương Thảo",
  "Dương Tiến Đạt", "Lý Hải Yến", "Mai Hoàng Long", "Đoàn Quốc Anh", "Phan Cẩm Tú",
  "Trịnh Đức Trọng", "Lưu Khánh Huyền", "Lâm Thanh Sơn", "Hà Trúc Quỳnh", "Cao Văn Nam",
  "Vương Mỹ Duyên", "Tạ Tuấn Kiệt", "Chu Ngọc Ánh", "Đinh Hoàng Bách", "Lương Diệu Linh",
  "Tô Quang Huy", "Trương Bảo Ngọc", "Huỳnh Tấn Phát", "Quách Hoài Thương", "Hồ Minh Trí",
  "Tăng Phúc Lộc", "Doãn Kim Oanh", "Tạ Duy Hưng", "Diệp Trọng Nhân", "Vi Thu Giang"
];

const sampleQuestions: { content: string; a: string; b: string; c: string; d: string; correct: Answer }[] = [
  {
    content: "Hành tinh nào trong Hệ Mặt Trời được mệnh danh là 'Hành tinh Đỏ'?",
    a: "Sao Kim", b: "Sao Hoả", c: "Sao Mộc", d: "Sao Thổ", correct: "B"
  },
  {
    content: "Công thức hoá học của nước là gì?",
    a: "CO2", b: "NaCl", c: "H2O", d: "O2", correct: "C"
  },
  {
    content: "Đơn vị cơ bản đo cường độ dòng điện trong hệ SI là gì?",
    a: "Ampe (A)", b: "Vôn (V)", c: "Ohm (Ω)", d: "Oát (W)", correct: "A"
  },
  {
    content: "Bộ phận nào của cây xanh chịu trách nhiệm chính trong quá trình quang hợp?",
    a: "Rễ", b: "Thân", c: "Lá", d: "Hoa", correct: "C"
  },
  {
    content: "Trong máy tính, 1 Byte tương đương với bao nhiêu Bit?",
    a: "4 Bit", b: "8 Bit", c: "16 Bit", d: "32 Bit", correct: "B"
  },
  {
    content: "Chất khí nào chiếm thể tích lớn nhất trong không khí quyển của Trái Đất?",
    a: "Oxy (O2)", b: "Cacbonic (CO2)", c: "Hydro (H2)", d: "Nitơ (N2)", correct: "D"
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
    a: "3.14", b: "2.71", c: "1.41", d: "1.73", correct: "A"
  },
  {
    content: "Đâu là một ví dụ về nguồn năng lượng tái tạo?",
    a: "Than đá", b: "Dầu mỏ", c: "Năng lượng gió", d: "Khí tự nhiên", correct: "C"
  },
  {
    content: "Phím tắt chuẩn để sao chép (Copy) trên hệ điều hành Windows là gì?",
    a: "Ctrl + V", b: "Ctrl + X", c: "Ctrl + Z", d: "Ctrl + C", correct: "D"
  }
];

function getInitialDb(): LocalDb {
  const now = Date.now();
  const classId = 1;
  const bankId = 1;
  const sessionId = 1;

  const students = sampleStudents.map((name, i) => ({
    id: i + 1,
    classId,
    stt: i + 1,
    name,
  }));

  const bankQuestions = sampleQuestions.map((q, i) => ({
    id: i + 1,
    bankId,
    position: i + 1,
    content: q.content,
    option_a: q.a,
    option_b: q.b,
    option_c: q.c,
    option_d: q.d,
    correct: q.correct,
  }));

  const sessionQuestions = sampleQuestions.map((q, i) => ({
    id: i + 1,
    sessionId,
    position: i + 1,
    content: q.content,
    option_a: q.a,
    option_b: q.b,
    option_c: q.c,
    option_d: q.d,
    correct: q.correct,
  }));

  return {
    classes: [{ id: classId, name: "Lớp 10A1 (Mẫu)", createdAt: now }],
    students,
    banks: [{ id: bankId, title: "Đề kiểm tra 15 phút: Khoa học tự nhiên & Kỹ năng số (10 câu)", createdAt: now }],
    bankQuestions,
    sessions: [{ id: sessionId, classId, title: "Buổi kiểm tra thử: Khoa học tự nhiên (Tuần 10)", status: "active", currentIndex: 0, createdAt: now }],
    sessionQuestions,
    responses: [],
  };
}

let memoryDb: LocalDb | null = null;

function loadDb(): LocalDb {
  if (typeof window === "undefined" || !window.localStorage) {
    if (!memoryDb) memoryDb = getInitialDb();
    return memoryDb;
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const init = getInitialDb();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
    return init;
  }
  try {
    return JSON.parse(raw) as LocalDb;
  } catch {
    const init = getInitialDb();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
    return init;
  }
}

function saveDb(db: LocalDb) {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } else {
    memoryDb = db;
  }
}

export const localStoreActions = {
  getOverview: async () => {
    const db = loadDb();
    const classNameMap = new Map(db.classes.map((c) => [c.id, c.name]));
    return {
      classes: db.classes.map((c) => ({
        id: c.id,
        name: c.name,
        student_count: db.students.filter((s) => s.classId === c.id).length,
      })),
      banks: db.banks.map((b) => ({
        id: b.id,
        title: b.title,
        question_count: db.bankQuestions.filter((q) => q.bankId === b.id).length,
      })),
      sessions: db.sessions.map((s) => ({
        id: s.id,
        title: s.title,
        class_id: s.classId,
        class_name: classNameMap.get(s.classId) || "—",
        status: s.status,
        question_count: db.sessionQuestions.filter((q) => q.sessionId === s.id).length,
        created_at: s.createdAt,
      })),
    };
  },

  createClass: async (args: { name: string }) => {
    const db = loadDb();
    const nextId = db.classes.reduce((m, c) => Math.max(m, c.id), 0) + 1;
    db.classes.push({ id: nextId, name: args.name.trim(), createdAt: Date.now() });
    saveDb(db);
    return { id: nextId };
  },

  deleteClass: async (args: { class_id: number }) => {
    const db = loadDb();
    const classId = Number(args.class_id);
    const sessionIds = new Set(db.sessions.filter((s) => s.classId === classId).map((s) => s.id));

    db.classes = db.classes.filter((c) => c.id !== classId);
    db.students = db.students.filter((s) => s.classId !== classId);
    db.sessions = db.sessions.filter((s) => !sessionIds.has(s.id));
    db.sessionQuestions = db.sessionQuestions.filter((q) => !sessionIds.has(q.sessionId));
    db.responses = db.responses.filter((r) => !sessionIds.has(r.sessionId));
    saveDb(db);
    return { ok: true as const };
  },

  listStudents: async (args: { class_id: number }) => {
    const db = loadDb();
    const classId = Number(args.class_id);
    const students = db.students
      .filter((s) => s.classId === classId)
      .sort((a, b) => a.stt - b.stt)
      .map((s) => ({ id: s.id, stt: s.stt, name: s.name }));
    return { students };
  },

  addStudentsBulk: async (args: { class_id: number; names: string[] }) => {
    const db = loadDb();
    const classId = Number(args.class_id);
    const currentMaxStt = db.students
      .filter((s) => s.classId === classId)
      .reduce((m, s) => Math.max(m, s.stt), 0);
    let nextStt = currentMaxStt + 1;
    let nextId = db.students.reduce((m, s) => Math.max(m, s.id), 0) + 1;

    for (const name of args.names) {
      const clean = name.trim();
      if (clean) {
        db.students.push({
          id: nextId++,
          classId,
          stt: nextStt++,
          name: clean,
        });
      }
    }
    saveDb(db);
    return { added: args.names.length };
  },

  updateStudent: async (args: { student_id: number; name: string; stt: number }) => {
    const db = loadDb();
    const target = db.students.find((s) => s.id === Number(args.student_id));
    if (target) {
      target.name = args.name.trim();
      target.stt = Number(args.stt);
      saveDb(db);
    }
    return { ok: true as const };
  },

  deleteStudent: async (args: { student_id: number }) => {
    const db = loadDb();
    const studentId = Number(args.student_id);
    db.students = db.students.filter((s) => s.id !== studentId);
    db.responses = db.responses.filter((r) => r.studentId !== studentId);
    saveDb(db);
    return { ok: true as const };
  },

  createBank: async (args: { title: string }) => {
    const db = loadDb();
    const nextId = db.banks.reduce((m, b) => Math.max(m, b.id), 0) + 1;
    db.banks.push({ id: nextId, title: args.title.trim(), createdAt: Date.now() });
    saveDb(db);
    return { id: nextId };
  },

  deleteBank: async (args: { bank_id: number }) => {
    const db = loadDb();
    const bankId = Number(args.bank_id);
    db.banks = db.banks.filter((b) => b.id !== bankId);
    db.bankQuestions = db.bankQuestions.filter((q) => q.bankId !== bankId);
    saveDb(db);
    return { ok: true as const };
  },

  listBankQuestions: async (args: { bank_id: number }) => {
    const db = loadDb();
    const bankId = Number(args.bank_id);
    const questions = db.bankQuestions
      .filter((q) => q.bankId === bankId)
      .sort((a, b) => a.position - b.position);
    return { questions };
  },

  addBankQuestion: async (args: { bank_id: number; question: QuestionInput }) => {
    const db = loadDb();
    const bankId = Number(args.bank_id);
    const nextId = db.bankQuestions.reduce((m, q) => Math.max(m, q.id), 0) + 1;
    const maxPos = db.bankQuestions
      .filter((q) => q.bankId === bankId)
      .reduce((m, q) => Math.max(m, q.position), 0);

    db.bankQuestions.push({
      id: nextId,
      bankId,
      position: maxPos + 1,
      content: args.question.content.trim(),
      option_a: args.question.option_a.trim(),
      option_b: args.question.option_b.trim(),
      option_c: args.question.option_c.trim(),
      option_d: args.question.option_d.trim(),
      correct: args.question.correct,
    });
    saveDb(db);
    return { id: nextId };
  },

  addBankQuestionsBulk: async (args: { bank_id: number; questions: QuestionInput[] }) => {
    const db = loadDb();
    const bankId = Number(args.bank_id);
    let nextId = db.bankQuestions.reduce((m, q) => Math.max(m, q.id), 0);
    let maxPos = db.bankQuestions
      .filter((q) => q.bankId === bankId)
      .reduce((m, q) => Math.max(m, q.position), 0);

    for (const q of args.questions) {
      nextId += 1;
      maxPos += 1;
      db.bankQuestions.push({
        id: nextId,
        bankId,
        position: maxPos,
        content: q.content.trim(),
        option_a: q.option_a.trim(),
        option_b: q.option_b.trim(),
        option_c: q.option_c.trim(),
        option_d: q.option_d.trim(),
        correct: q.correct,
      });
    }
    saveDb(db);
    return { added: args.questions.length };
  },

  updateBankQuestion: async (args: { question_id: number; question: QuestionInput }) => {
    const db = loadDb();
    const target = db.bankQuestions.find((q) => q.id === Number(args.question_id));
    if (target) {
      target.content = args.question.content.trim();
      target.option_a = args.question.option_a.trim();
      target.option_b = args.question.option_b.trim();
      target.option_c = args.question.option_c.trim();
      target.option_d = args.question.option_d.trim();
      target.correct = args.question.correct;
      saveDb(db);
    }
    return { ok: true as const };
  },

  deleteBankQuestion: async (args: { question_id: number }) => {
    const db = loadDb();
    db.bankQuestions = db.bankQuestions.filter((q) => q.id !== Number(args.question_id));
    saveDb(db);
    return { ok: true as const };
  },

  createSession: async (args: {
    class_id: number;
    title: string;
    bank_id: number | null;
    quick_questions: QuestionInput[];
  }) => {
    const db = loadDb();
    const nextSessId = db.sessions.reduce((m, s) => Math.max(m, s.id), 0) + 1;

    let qs: { content: string; option_a: string; option_b: string; option_c: string; option_d: string; correct: Answer }[] = [
      ...args.quick_questions,
    ];

    if (args.bank_id != null) {
      const bqs = db.bankQuestions
        .filter((q) => q.bankId === Number(args.bank_id))
        .sort((a, b) => a.position - b.position)
        .map((q) => ({
          content: q.content,
          option_a: q.option_a,
          option_b: q.option_b,
          option_c: q.option_c,
          option_d: q.option_d,
          correct: q.correct as Answer,
        }));
      qs = [...bqs, ...qs];
    }

    if (qs.length === 0) {
      throw new Error("Buổi học cần ít nhất 1 câu hỏi");
    }

    db.sessions.push({
      id: nextSessId,
      classId: Number(args.class_id),
      title: args.title.trim(),
      status: "active",
      currentIndex: 0,
      createdAt: Date.now(),
    });

    let nextQId = db.sessionQuestions.reduce((m, q) => Math.max(m, q.id), 0) + 1;
    qs.forEach((q, idx) => {
      db.sessionQuestions.push({
        id: nextQId++,
        sessionId: nextSessId,
        position: idx + 1,
        content: q.content.trim(),
        option_a: q.option_a.trim(),
        option_b: q.option_b.trim(),
        option_c: q.option_c.trim(),
        option_d: q.option_d.trim(),
        correct: q.correct,
      });
    });

    saveDb(db);
    return { id: nextSessId, question_count: qs.length };
  },

  getSession: async (args: { session_id: number }) => {
    const db = loadDb();
    const sessionId = Number(args.session_id);
    const sess = db.sessions.find((s) => s.id === sessionId);
    if (!sess) throw new Error("Không tìm thấy buổi học");

    const cls = db.classes.find((c) => c.id === sess.classId);
    const questions = db.sessionQuestions
      .filter((q) => q.sessionId === sessionId)
      .sort((a, b) => a.position - b.position);

    const students = db.students
      .filter((s) => s.classId === sess.classId)
      .sort((a, b) => a.stt - b.stt)
      .map((s) => ({ id: s.id, stt: s.stt, name: s.name }));

    const responses = db.responses
      .filter((r) => r.sessionId === sessionId)
      .map((r) => ({
        question_id: r.questionId,
        student_id: r.studentId,
        answer: r.answer,
        source: r.source,
      }));

    return {
      session: {
        id: sess.id,
        title: sess.title,
        class_id: sess.classId,
        class_name: cls ? cls.name : "—",
        status: sess.status,
        current_index: sess.currentIndex,
        created_at: sess.createdAt,
      },
      questions,
      students,
      responses,
    };
  },

  setCurrentQuestion: async (args: { session_id: number; index: number }) => {
    const db = loadDb();
    const sess = db.sessions.find((s) => s.id === Number(args.session_id));
    if (sess) {
      sess.currentIndex = Number(args.index);
      saveDb(db);
    }
    return { ok: true as const };
  },

  recordResponses: async (args: {
    session_id: number;
    question_id: number;
    source: "scan" | "manual";
    answers: { student_id: number; answer: Answer }[];
  }) => {
    const db = loadDb();
    const sessionId = Number(args.session_id);
    const questionId = Number(args.question_id);
    const now = Date.now();

    for (const a of args.answers) {
      const sId = Number(a.student_id);
      const existing = db.responses.find(
        (r) => r.sessionId === sessionId && r.questionId === questionId && r.studentId === sId
      );
      if (existing) {
        existing.answer = a.answer;
        existing.source = args.source;
        existing.updatedAt = now;
      } else {
        const nextId = db.responses.reduce((m, r) => Math.max(m, r.id), 0) + 1;
        db.responses.push({
          id: nextId,
          sessionId,
          questionId,
          studentId: sId,
          answer: a.answer,
          source: args.source,
          updatedAt: now,
        });
      }
    }
    saveDb(db);
    return { saved: args.answers.length };
  },

  clearQuestionResponses: async (args: { session_id: number; question_id: number }) => {
    const db = loadDb();
    const sessionId = Number(args.session_id);
    const questionId = Number(args.question_id);
    db.responses = db.responses.filter(
      (r) => !(r.sessionId === sessionId && r.questionId === questionId)
    );
    saveDb(db);
    return { ok: true as const };
  },

  finishSession: async (args: { session_id: number; finished: boolean }) => {
    const db = loadDb();
    const sess = db.sessions.find((s) => s.id === Number(args.session_id));
    if (sess) {
      sess.status = args.finished ? "finished" : "active";
      saveDb(db);
    }
    return { ok: true as const };
  },

  deleteSession: async (args: { session_id: number }) => {
    const db = loadDb();
    const sessionId = Number(args.session_id);
    db.sessions = db.sessions.filter((s) => s.id !== sessionId);
    db.sessionQuestions = db.sessionQuestions.filter((q) => q.sessionId !== sessionId);
    db.responses = db.responses.filter((r) => r.sessionId !== sessionId);
    saveDb(db);
    return { ok: true as const };
  },
};

import { db } from "./db.js";

function qOut(r) {
  return {
    id: Number(r.id),
    position: Number(r.position),
    content: r.content,
    option_a: r.option_a,
    option_b: r.option_b,
    option_c: r.option_c,
    option_d: r.option_d,
    correct: r.correct,
  };
}

export const actionHandlers = {
  // 1. getOverview
  getOverview: async () => {
    const classes = db
      .prepare(`
        SELECT c.id, c.name, COUNT(s.id) as student_count
        FROM classes c
        LEFT JOIN students s ON s.class_id = c.id
        GROUP BY c.id
        ORDER BY c.id ASC
      `)
      .all()
      .map((r) => ({
        id: Number(r.id),
        name: r.name,
        student_count: Number(r.student_count),
      }));

    const banks = db
      .prepare(`
        SELECT b.id, b.title, COUNT(bq.id) as question_count
        FROM banks b
        LEFT JOIN bank_questions bq ON bq.bank_id = b.id
        GROUP BY b.id
        ORDER BY b.id DESC
      `)
      .all()
      .map((r) => ({
        id: Number(r.id),
        title: r.title,
        question_count: Number(r.question_count),
      }));

    const sessions = db
      .prepare(`
        SELECT s.id, s.title, s.class_id, COALESCE(c.name, '—') as class_name,
               s.status, COUNT(sq.id) as question_count, s.created_at
        FROM sessions s
        LEFT JOIN classes c ON c.id = s.class_id
        LEFT JOIN session_questions sq ON sq.session_id = s.id
        GROUP BY s.id
        ORDER BY s.id DESC
        LIMIT 20
      `)
      .all()
      .map((r) => ({
        id: Number(r.id),
        title: r.title,
        class_id: Number(r.class_id),
        class_name: r.class_name,
        status: r.status,
        question_count: Number(r.question_count),
        created_at: Number(r.created_at),
      }));

    return { classes, banks, sessions };
  },

  // 2. createClass
  createClass: async (args) => {
    const name = (args.name || "").trim();
    if (!name) throw new Error("Tên lớp học không được để trống");
    const stmt = db.prepare("INSERT INTO classes (name, created_at) VALUES (?, ?)");
    const result = stmt.run(name, Date.now());
    return { id: Number(result.lastInsertRowid) };
  },

  // 3. deleteClass
  deleteClass: async (args) => {
    const classId = Number(args.class_id);
    const sessionRows = db.prepare("SELECT id FROM sessions WHERE class_id = ?").all(classId);

    const delResponses = db.prepare("DELETE FROM responses WHERE session_id = ?");
    const delSessionQ = db.prepare("DELETE FROM session_questions WHERE session_id = ?");
    const delSessions = db.prepare("DELETE FROM sessions WHERE id = ?");

    for (const s of sessionRows) {
      delResponses.run(s.id);
      delSessionQ.run(s.id);
      delSessions.run(s.id);
    }

    db.prepare("DELETE FROM students WHERE class_id = ?").run(classId);
    db.prepare("DELETE FROM classes WHERE id = ?").run(classId);

    return { ok: true };
  },

  // 4. listStudents
  listStudents: async (args) => {
    const classId = Number(args.class_id);
    const students = db
      .prepare("SELECT id, stt, name FROM students WHERE class_id = ? ORDER BY stt ASC")
      .all(classId)
      .map((r) => ({
        id: Number(r.id),
        stt: Number(r.stt),
        name: r.name,
      }));
    return { students };
  },

  // 5. addStudentsBulk
  addStudentsBulk: async (args) => {
    const classId = Number(args.class_id);
    const names = args.names || [];
    if (!names.length) return { added: 0 };

    const maxRow = db
      .prepare("SELECT COALESCE(MAX(stt), 0) as max_stt FROM students WHERE class_id = ?")
      .get(classId);
    let nextStt = Number(maxRow.max_stt) + 1;

    const stmt = db.prepare("INSERT INTO students (class_id, stt, name) VALUES (?, ?, ?)");
    for (const name of names) {
      const clean = name.trim();
      if (clean) {
        stmt.run(classId, nextStt++, clean);
      }
    }
    return { added: names.length };
  },

  // 6. updateStudent
  updateStudent: async (args) => {
    const studentId = Number(args.student_id);
    const name = (args.name || "").trim();
    const stt = Number(args.stt);
    db.prepare("UPDATE students SET name = ?, stt = ? WHERE id = ?").run(name, stt, studentId);
    return { ok: true };
  },

  // 7. deleteStudent
  deleteStudent: async (args) => {
    const studentId = Number(args.student_id);
    db.prepare("DELETE FROM responses WHERE student_id = ?").run(studentId);
    db.prepare("DELETE FROM students WHERE id = ?").run(studentId);
    return { ok: true };
  },

  // 8. createBank
  createBank: async (args) => {
    const title = (args.title || "").trim();
    if (!title) throw new Error("Tiêu đề ngân hàng câu hỏi không được để trống");
    const stmt = db.prepare("INSERT INTO banks (title, created_at) VALUES (?, ?)");
    const result = stmt.run(title, Date.now());
    return { id: Number(result.lastInsertRowid) };
  },

  // 9. deleteBank
  deleteBank: async (args) => {
    const bankId = Number(args.bank_id);
    db.prepare("DELETE FROM bank_questions WHERE bank_id = ?").run(bankId);
    db.prepare("DELETE FROM banks WHERE id = ?").run(bankId);
    return { ok: true };
  },

  // 10. listBankQuestions
  listBankQuestions: async (args) => {
    const bankId = Number(args.bank_id);
    const rows = db
      .prepare(
        "SELECT id, position, content, option_a, option_b, option_c, option_d, correct FROM bank_questions WHERE bank_id = ? ORDER BY position ASC"
      )
      .all(bankId);
    return { questions: rows.map(qOut) };
  },

  // 11. addBankQuestion
  addBankQuestion: async (args) => {
    const bankId = Number(args.bank_id);
    const q = args.question;
    const maxRow = db
      .prepare("SELECT COALESCE(MAX(position), 0) as max_pos FROM bank_questions WHERE bank_id = ?")
      .get(bankId);
    const pos = Number(maxRow.max_pos) + 1;

    const stmt = db.prepare(`
      INSERT INTO bank_questions (bank_id, position, content, option_a, option_b, option_c, option_d, correct)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      bankId,
      pos,
      q.content.trim(),
      q.option_a.trim(),
      q.option_b.trim(),
      q.option_c.trim(),
      q.option_d.trim(),
      q.correct
    );
    return { id: Number(result.lastInsertRowid) };
  },

  // 11b. addBankQuestionsBulk
  addBankQuestionsBulk: async (args) => {
    const bankId = Number(args.bank_id);
    const questions = args.questions || [];
    const maxRow = db
      .prepare("SELECT COALESCE(MAX(position), 0) as max_pos FROM bank_questions WHERE bank_id = ?")
      .get(bankId);
    let pos = Number(maxRow.max_pos);

    const stmt = db.prepare(`
      INSERT INTO bank_questions (bank_id, position, content, option_a, option_b, option_c, option_d, correct)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertMany = db.transaction((items) => {
      for (const q of items) {
        pos += 1;
        stmt.run(
          bankId,
          pos,
          q.content.trim(),
          q.option_a.trim(),
          q.option_b.trim(),
          q.option_c.trim(),
          q.option_d.trim(),
          q.correct
        );
      }
    });

    insertMany(questions);
    return { added: questions.length };
  },

  // 12. updateBankQuestion
  updateBankQuestion: async (args) => {
    const qId = Number(args.question_id);
    const q = args.question;
    db.prepare(`
      UPDATE bank_questions
      SET content = ?, option_a = ?, option_b = ?, option_c = ?, option_d = ?, correct = ?
      WHERE id = ?
    `).run(
      q.content.trim(),
      q.option_a.trim(),
      q.option_b.trim(),
      q.option_c.trim(),
      q.option_d.trim(),
      q.correct,
      qId
    );
    return { ok: true };
  },

  // 13. deleteBankQuestion
  deleteBankQuestion: async (args) => {
    const qId = Number(args.question_id);
    db.prepare("DELETE FROM bank_questions WHERE id = ?").run(qId);
    return { ok: true };
  },

  // 14. createSession
  createSession: async (args) => {
    const classId = Number(args.class_id);
    const title = (args.title || "").trim();
    if (!title) throw new Error("Tiêu đề buổi học không được để trống");

    let qs = [...(args.quick_questions || [])];
    if (args.bank_id != null) {
      const bankQs = db
        .prepare(
          "SELECT content, option_a, option_b, option_c, option_d, correct FROM bank_questions WHERE bank_id = ? ORDER BY position ASC"
        )
        .all(Number(args.bank_id));
      qs = [...bankQs, ...qs];
    }

    if (qs.length === 0) {
      throw new Error("Buổi học cần ít nhất 1 câu hỏi");
    }

    const sessStmt = db.prepare(
      "INSERT INTO sessions (class_id, title, status, current_index, created_at) VALUES (?, ?, 'active', 0, ?)"
    );
    const sessResult = sessStmt.run(classId, title, Date.now());
    const sessionId = Number(sessResult.lastInsertRowid);

    const qStmt = db.prepare(`
      INSERT INTO session_questions (session_id, position, content, option_a, option_b, option_c, option_d, correct)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    qs.forEach((q, idx) => {
      qStmt.run(
        sessionId,
        idx + 1,
        q.content.trim(),
        q.option_a.trim(),
        q.option_b.trim(),
        q.option_c.trim(),
        q.option_d.trim(),
        q.correct
      );
    });

    return { id: sessionId, question_count: qs.length };
  },

  // 15. getSession
  getSession: async (args) => {
    const sessionId = Number(args.session_id);
    const sess = db.prepare("SELECT * FROM sessions WHERE id = ?").get(sessionId);
    if (!sess) throw new Error("Không tìm thấy buổi học");

    const cls = db.prepare("SELECT name FROM classes WHERE id = ?").get(sess.class_id);

    const questions = db
      .prepare(
        "SELECT id, position, content, option_a, option_b, option_c, option_d, correct FROM session_questions WHERE session_id = ? ORDER BY position ASC"
      )
      .all(sessionId)
      .map(qOut);

    const students = db
      .prepare("SELECT id, stt, name FROM students WHERE class_id = ? ORDER BY stt ASC")
      .all(sess.class_id)
      .map((s) => ({
        id: Number(s.id),
        stt: Number(s.stt),
        name: s.name,
      }));

    const responses = db
      .prepare("SELECT question_id, student_id, answer, source FROM responses WHERE session_id = ?")
      .all(sessionId)
      .map((r) => ({
        question_id: Number(r.question_id),
        student_id: Number(r.student_id),
        answer: r.answer,
        source: r.source,
      }));

    return {
      session: {
        id: Number(sess.id),
        title: sess.title,
        class_id: Number(sess.class_id),
        class_name: cls ? cls.name : "—",
        status: sess.status,
        current_index: Number(sess.current_index),
        created_at: Number(sess.created_at),
      },
      questions,
      students,
      responses,
    };
  },

  // 16. setCurrentQuestion
  setCurrentQuestion: async (args) => {
    const sessionId = Number(args.session_id);
    const index = Number(args.index);
    db.prepare("UPDATE sessions SET current_index = ? WHERE id = ?").run(index, sessionId);
    return { ok: true };
  },

  // 17. recordResponses
  recordResponses: async (args) => {
    const sessionId = Number(args.session_id);
    const questionId = Number(args.question_id);
    const source = args.source || "manual";
    const answers = args.answers || [];

    const existingRows = db
      .prepare("SELECT id, student_id FROM responses WHERE session_id = ? AND question_id = ?")
      .all(sessionId, questionId);
    const map = new Map(existingRows.map((r) => [Number(r.student_id), Number(r.id)]));

    const updateStmt = db.prepare(
      "UPDATE responses SET answer = ?, source = ?, updated_at = ? WHERE id = ?"
    );
    const insertStmt = db.prepare(`
      INSERT INTO responses (session_id, question_id, student_id, answer, source, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const now = Date.now();
    for (const a of answers) {
      const sId = Number(a.student_id);
      const existingId = map.get(sId);
      if (existingId) {
        updateStmt.run(a.answer, source, now, existingId);
      } else {
        insertStmt.run(sessionId, questionId, sId, a.answer, source, now);
      }
    }

    return { saved: answers.length };
  },

  // 18. clearQuestionResponses
  clearQuestionResponses: async (args) => {
    const sessionId = Number(args.session_id);
    const questionId = Number(args.question_id);
    db.prepare("DELETE FROM responses WHERE session_id = ? AND question_id = ?").run(
      sessionId,
      questionId
    );
    return { ok: true };
  },

  // 19. finishSession
  finishSession: async (args) => {
    const sessionId = Number(args.session_id);
    const finished = Boolean(args.finished);
    db.prepare("UPDATE sessions SET status = ? WHERE id = ?").run(
      finished ? "finished" : "active",
      sessionId
    );
    return { ok: true };
  },

  // 20. deleteSession
  deleteSession: async (args) => {
    const sessionId = Number(args.session_id);
    db.prepare("DELETE FROM responses WHERE session_id = ?").run(sessionId);
    db.prepare("DELETE FROM session_questions WHERE session_id = ?").run(sessionId);
    db.prepare("DELETE FROM sessions WHERE id = ?").run(sessionId);
    return { ok: true };
  },
};

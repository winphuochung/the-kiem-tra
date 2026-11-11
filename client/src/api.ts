// Typed RPC client for "Thẻ Trả Lời"
// Giao tiếp qua endpoint /api/actions bằng HTTP POST

export type Answer = "A" | "B" | "C" | "D";

export type QuestionShape = {
  id: number;
  position: number;
  content: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct: string;
};

export type QuestionInput = {
  content: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct: Answer;
};

export type ApiActions = {
  getOverview: (args: Record<string, never>) => Promise<{
    classes: { id: number; name: string; student_count: number }[];
    banks: { id: number; title: string; question_count: number }[];
    sessions: {
      id: number;
      title: string;
      class_id: number;
      class_name: string;
      status: string;
      question_count: number;
      created_at: number;
    }[];
  }>;

  createClass: (args: { name: string }) => Promise<{ id: number }>;
  deleteClass: (args: { class_id: number }) => Promise<{ ok: true }>;
  listStudents: (args: { class_id: number }) => Promise<{
    students: { id: number; stt: number; name: string }[];
  }>;
  addStudentsBulk: (args: { class_id: number; names: string[] }) => Promise<{ added: number }>;
  updateStudent: (args: { student_id: number; name: string; stt: number }) => Promise<{ ok: true }>;
  deleteStudent: (args: { student_id: number }) => Promise<{ ok: true }>;

  createBank: (args: { title: string }) => Promise<{ id: number }>;
  deleteBank: (args: { bank_id: number }) => Promise<{ ok: true }>;
  listBankQuestions: (args: { bank_id: number }) => Promise<{ questions: QuestionShape[] }>;
  addBankQuestion: (args: { bank_id: number; question: QuestionInput }) => Promise<{ id: number }>;
  updateBankQuestion: (args: { question_id: number; question: QuestionInput }) => Promise<{ ok: true }>;
  deleteBankQuestion: (args: { question_id: number }) => Promise<{ ok: true }>;

  createSession: (args: {
    class_id: number;
    title: string;
    bank_id: number | null;
    quick_questions: QuestionInput[];
  }) => Promise<{ id: number; question_count: number }>;

  getSession: (args: { session_id: number }) => Promise<{
    session: {
      id: number;
      title: string;
      class_id: number;
      class_name: string;
      status: string;
      current_index: number;
      created_at: number;
    };
    questions: QuestionShape[];
    students: { id: number; stt: number; name: string }[];
    responses: {
      question_id: number;
      student_id: number;
      answer: string;
      source: string;
    }[];
  }>;

  setCurrentQuestion: (args: { session_id: number; index: number }) => Promise<{ ok: true }>;
  recordResponses: (args: {
    session_id: number;
    question_id: number;
    source: "scan" | "manual";
    answers: { student_id: number; answer: Answer }[];
  }) => Promise<{ saved: number }>;
  clearQuestionResponses: (args: { session_id: number; question_id: number }) => Promise<{ ok: true }>;
  finishSession: (args: { session_id: number; finished: boolean }) => Promise<{ ok: true }>;
  deleteSession: (args: { session_id: number }) => Promise<{ ok: true }>;
};

export type ApiResponse<T, K extends keyof ApiActions> = Awaited<ReturnType<ApiActions[K]>>;

export const api: ApiActions = new Proxy({} as any, {
  get: (_target, action: string) => {
    return async (args: any) => {
      const res = await fetch("/api/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, args: args ?? {} }),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Lỗi máy chủ (${res.status})`);
      }
      return await res.json();
    };
  },
});

import type { Answer, QuestionInput } from "./api";
import type { LessonItem } from "./curriculumData";

export type AiModelId = "gemini-2.5-pro" | "gemini-2.5-flash" | "gemini-2.0-flash";

export type DifficultyMode =
  | "balanced"
  | "basic"
  | "understand"
  | "apply";

export interface GeneratedQuestionWithNote extends QuestionInput {
  explanation?: string;
}

export interface AiGenerateExamResult {
  title: string;
  questions: GeneratedQuestionWithNote[];
  modelUsed: string;
  source: "gemini-ai" | "offline-bank";
  notice?: string;
}

export const AI_MODELS: { id: AiModelId; label: string; badge: string; desc: string }[] = [
  {
    id: "gemini-2.5-pro",
    label: "Gemini 2.5 Pro",
    badge: "Cao cấp nhất",
    desc: "Suy luận sâu, độ chính xác kiến thức & sư phạm cao nhất (Toán, Lí, Hóa, Sinh, Sử, Địa, Văn, Anh)",
  },
  {
    id: "gemini-2.5-flash",
    label: "Gemini 2.5 Flash",
    badge: "Nhanh & Thông minh",
    desc: "Tốc độ phản hồi cực nhanh, hỗ trợ tư duy logic chuẩn GDPT 2018",
  },
];

export const DIFFICULTY_OPTIONS: { id: DifficultyMode; label: string; desc: string }[] = [
  {
    id: "balanced",
    label: "Ma trận chuẩn GDPT 2018",
    desc: "40% Nhận biết · 30% Thông hiểu · 20% Vận dụng · 10% Vận dụng cao",
  },
  {
    id: "basic",
    label: "Nhận biết (Cơ bản)",
    desc: "Kiểm tra khái niệm, định nghĩa, ghi nhớ kiến thức trọng tâm",
  },
  {
    id: "understand",
    label: "Thông hiểu",
    desc: "Giải thích bản chất, so sánh, phân biệt và hiểu ý nghĩa kiến thức",
  },
  {
    id: "apply",
    label: "Vận dụng & Nâng cao",
    desc: "Bài tập tính toán, giải quyết tình huống thực tiễn, phân tích sâu",
  },
];

const GEMINI_KEY_STORAGE = "gemini_api_key";
const AI_MODEL_STORAGE = "quiz_ai_model";

export function getSavedGeminiKey(): string {
  try {
    return (localStorage.getItem(GEMINI_KEY_STORAGE) || "").trim();
  } catch {
    return "";
  }
}

export function saveGeminiKey(key: string): void {
  try {
    const clean = key.trim();
    if (clean) localStorage.setItem(GEMINI_KEY_STORAGE, clean);
    else localStorage.removeItem(GEMINI_KEY_STORAGE);
  } catch {
    // ignore
  }
}

export function getSavedAiModel(): AiModelId {
  try {
    const val = localStorage.getItem(AI_MODEL_STORAGE);
    if (val === "gemini-2.5-pro" || val === "gemini-2.5-flash" || val === "gemini-2.0-flash") {
      return val;
    }
  } catch {
    // ignore
  }
  return "gemini-2.5-pro";
}

export function saveAiModel(model: AiModelId): void {
  try {
    localStorage.setItem(AI_MODEL_STORAGE, model);
  } catch {
    // ignore
  }
}

function cleanOptionText(text: string): string {
  return String(text || "")
    .trim()
    .replace(/^[A-Da-d][\.\)\:\-]\s+/, "")
    .trim();
}

function normalizeQuestion(raw: any): GeneratedQuestionWithNote | null {
  if (!raw || typeof raw !== "object") return null;
  const content = String(raw.content || "").trim();
  const option_a = cleanOptionText(raw.option_a);
  const option_b = cleanOptionText(raw.option_b);
  const option_c = cleanOptionText(raw.option_c);
  const option_d = cleanOptionText(raw.option_d);
  let correct = String(raw.correct || "A").trim().toUpperCase();
  if (!["A", "B", "C", "D"].includes(correct)) {
    correct = "A";
  }
  if (!content || !option_a || !option_b || !option_c || !option_d) return null;
  return {
    content,
    option_a,
    option_b,
    option_c,
    option_d,
    correct: correct as Answer,
    explanation: raw.explanation ? String(raw.explanation).trim() : undefined,
  };
}

function buildCurriculumPrompt(params: {
  grade: number;
  subjectName: string;
  lessons: LessonItem[];
  questionCount: number;
  difficulty: DifficultyMode;
  customPrompt?: string;
}): string {
  const { grade, subjectName, lessons, questionCount, difficulty, customPrompt } = params;

  const difficultyInstruction =
    difficulty === "basic"
      ? "Mức độ: 100% Nhận biết (nhẹ nhàng, đúng trọng tâm khái niệm/kiến thức cơ bản của bài học)."
      : difficulty === "understand"
      ? "Mức độ: Chủ yếu Thông hiểu (yêu cầu học sinh hiểu bản chất, phân biệt, giải thích được kiến thức)."
      : difficulty === "apply"
      ? "Mức độ: Vận dụng và Vận dụng cao (bài tập tính toán, tình huống thực tiễn, suy luận logic)."
      : "Phân bổ theo Ma trận chuẩn GDPT 2018: khoảng 40% Nhận biết, 30% Thông hiểu, 20% Vận dụng, 10% Vận dụng cao.";

  const lessonListText = lessons
    .map((l, idx) => {
      const summaryPart = l.summary ? `\n   - Kiến thức trọng tâm: ${l.summary}` : "";
      return `${idx + 1}. [${l.chapter}] ${l.title}${summaryPart}`;
    })
    .join("\n");

  const extraNote = customPrompt?.trim() ? `\nYêu cầu bổ sung của giáo viên: ${customPrompt.trim()}` : "";

  return `Bạn là chuyên gia sư phạm và biên soạn đề thi chuẩn Chương trình Giáo dục Phổ thông 2018 (Bộ sách giáo khoa "Kết nối tri thức với cuộc sống" - NXB Giáo dục Việt Nam, nguồn taphuan.nxbgd.vn).

Hãy soạn chính xác ${questionCount} câu hỏi trắc nghiệm 4 lựa chọn (A, B, C, D) cho:
- Khối lớp: Lớp ${grade}
- Môn học: ${subjectName}
- Các bài học được chọn:
${lessonListText}

${difficultyInstruction}${extraNote}

QUY TẮC BẮT BUỘC (VI PHẠM SẼ BỊ LOẠI):
1. MỖI CÂU HỎI PHẢI KIỂM TRA KIẾN THỨC THỰC TẾ, CỤ THỂ của đúng các bài học nêu trên (định nghĩa, công thức, phép tính, tính chất, hiện tượng tự nhiên, sự kiện lịch sử, địa danh, tác phẩm/biện pháp tu từ, ngữ pháp/từ vựng Tiếng Anh...).
2. TUYỆT ĐỐI KHÔNG ra câu hỏi sáo rỗng, chung chung kiểu "Nội dung cốt lõi của bài X là gì?", "Phương pháp tiếp cận đúng đắn là gì?", hay đáp án sai kiểu "Chỉ học vẹt câu chữ...".
3. Phân bổ đều câu hỏi qua các bài học đã chọn.
4. Ngôn ngữ chuẩn mực, phù hợp trình độ nhận thức của học sinh Lớp ${grade}. Nếu là môn Tiếng Anh, câu hỏi và đáp án dùng Tiếng Anh chuẩn (kèm ngữ cảnh rõ ràng). Nếu là Toán/Lí/Hóa cần tính toán, hãy đưa số liệu cụ thể và tính toán chính xác tuyệt đối 100%.
5. Bốn phương án A, B, C, D phải ngắn gọn, rõ ràng, có tính nhiễu hợp lý; KHÔNG ghi sẵn chữ "A. ", "B. " ở đầu nội dung phương án.
6. Đáp án đúng ("correct") phải được phân bổ ngẫu nhiên và đồng đều giữa A, B, C, D (TUYỆT ĐỐI không để tất cả đều là A).
7. Kèm theo trường "explanation" giải thích ngắn gọn (1-2 câu) vì sao đáp án đó đúng.

Trả về DUY NHẤT một đối tượng JSON hợp lệ theo đúng cấu trúc sau:
{
  "title": "Tên đề kiểm tra ngắn gọn, chuẩn xác",
  "questions": [
    {
      "content": "Nội dung câu hỏi...",
      "option_a": "Nội dung phương án A",
      "option_b": "Nội dung phương án B",
      "option_c": "Nội dung phương án C",
      "option_d": "Nội dung phương án D",
      "correct": "B",
      "explanation": "Giải thích ngắn gọn..."
    }
  ]
}`;
}

async function callGeminiModel(
  apiKey: string,
  model: AiModelId,
  prompt: string
): Promise<{ title: string; questions: GeneratedQuestionWithNote[] }> {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(
    apiKey
  )}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.35,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    let errMsg = `HTTP ${res.status}`;
    try {
      const parsedErr = JSON.parse(errText);
      errMsg = parsedErr?.error?.message || errMsg;
    } catch {
      if (errText) errMsg = errText.slice(0, 200);
    }
    throw new Error(errMsg);
  }

  const json = await res.json();
  const rawText = json?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  if (!rawText) {
    throw new Error("AI không trả về nội dung câu hỏi.");
  }

  // Strip optional markdown code fences if any
  const cleaned = rawText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  const parsed = JSON.parse(cleaned);
  const rawQuestions = Array.isArray(parsed) ? parsed : parsed.questions || [];
  const validQuestions = rawQuestions
    .map(normalizeQuestion)
    .filter((q: GeneratedQuestionWithNote | null): q is GeneratedQuestionWithNote => q !== null);

  if (validQuestions.length === 0) {
    throw new Error("Dữ liệu câu hỏi AI trả về không đúng định dạng.");
  }

  return {
    title: typeof parsed?.title === "string" && parsed.title.trim() ? parsed.title.trim() : "",
    questions: validQuestions,
  };
}

export async function generateSmartAiExam(params: {
  grade: number;
  subjectName: string;
  lessons: LessonItem[];
  questionCount: number;
  preferredModel: AiModelId;
  difficulty: DifficultyMode;
  customPrompt?: string;
  apiKey?: string;
}): Promise<AiGenerateExamResult> {
  const { grade, subjectName, lessons, questionCount, preferredModel, difficulty, customPrompt } = params;
  const apiKey = (params.apiKey ?? getSavedGeminiKey()).trim();

  const lessonSummaryLabel =
    lessons.length <= 2
      ? lessons.map((l) => l.title).join(" & ")
      : `${lessons.length} bài (${lessons
          .slice(0, 3)
          .map((l) => `Bài ${l.number}`)
          .join(", ")}${lessons.length > 3 ? "..." : ""})`;
  const defaultTitle = `Đề kiểm tra ${subjectName} ${grade} · ${lessonSummaryLabel} (${questionCount} câu)`;

  const prompt = buildCurriculumPrompt({
    grade,
    subjectName,
    lessons,
    questionCount,
    difficulty,
    customPrompt,
  });

  // 1. Thử gọi qua Backend server (nếu server local có cấu hình GEMINI_API_KEY trong môi trường)
  if (!apiKey) {
    try {
      const serverRes = await fetch("/api/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generateAiExam",
          args: {
            grade,
            subjectName,
            lessons: lessons.map((l) => ({ number: l.number, title: l.title, chapter: l.chapter, summary: l.summary })),
            questionCount,
            preferredModel,
            difficulty,
            customPrompt,
          },
        }),
      });
      if (serverRes.ok) {
        const data = await serverRes.json();
        if (data?.questions?.length > 0) {
          return {
            title: data.title || defaultTitle,
            questions: data.questions,
            modelUsed: data.modelUsed || preferredModel,
            source: "gemini-ai",
          };
        }
      }
    } catch {
      // Static Vercel deployment hoặc server chưa cấu hình key -> bỏ qua
    }
  }

  if (!apiKey) {
    throw new Error(
      "Chưa có Gemini API Key. Vui lòng nhập Gemini API Key miễn phí để AI (Gemini 2.5 Pro) tự biên soạn câu hỏi chuẩn theo nội dung bài học."
    );
  }

  // 2. Gọi trực tiếp Google Gemini API theo chuỗi ưu tiên model thông minh nhất
  const fallbackChain: AiModelId[] =
    preferredModel === "gemini-2.5-pro"
      ? ["gemini-2.5-pro", "gemini-2.5-flash", "gemini-2.0-flash"]
      : preferredModel === "gemini-2.5-flash"
      ? ["gemini-2.5-flash", "gemini-2.0-flash"]
      : ["gemini-2.0-flash"];

  let lastError: Error | null = null;
  for (let i = 0; i < fallbackChain.length; i++) {
    const modelId = fallbackChain[i];
    try {
      const result = await callGeminiModel(apiKey, modelId, prompt);
      return {
        title: result.title || defaultTitle,
        questions: result.questions.slice(0, questionCount),
        modelUsed: modelId,
        source: "gemini-ai",
        notice:
          i > 0
            ? `Model ${preferredModel} đang bận hoặc chưa khả dụng trên key này, hệ thống đã tự động chuyển sang ${modelId}.`
            : undefined,
      };
    } catch (err: any) {
      lastError = err instanceof Error ? err : new Error(String(err));
      // Nếu lỗi API Key không hợp lệ thì dừng ngay không cần thử model khác
      if (lastError.message.toLowerCase().includes("api key not valid")) {
        throw new Error("Gemini API Key không hợp lệ. Vui lòng kiểm tra lại key của bạn.");
      }
    }
  }

  throw lastError || new Error("Không thể kết nối tới mô hình AI. Vui lòng thử lại.");
}

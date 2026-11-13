import { useState, useMemo, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { api, type QuestionInput } from "./api";
import { GRADES_DATA, generateQuestionsForLessons } from "./curriculumData";
import {
  generateSmartAiExam,
  AI_MODELS,
  DIFFICULTY_OPTIONS,
  getSavedGeminiKey,
  saveGeminiKey,
  getSavedAiModel,
  saveAiModel,
  type AiModelId,
  type DifficultyMode,
  type AiGenerateExamResult,
} from "./aiExamGenerator";

export function AutoExamModal({
  isOpen,
  onClose,
  onCreated,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (bankId: number) => void;
}) {
  const queryClient = useQueryClient();
  const [selectedGrade, setSelectedGrade] = useState<number>(7);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("khtn-7");
  const [selectedLessonIds, setSelectedLessonIds] = useState<string[]>(["khtn-7-b1", "khtn-7-b2"]);
  const [lessonSearch, setLessonSearch] = useState<string>("");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [customTitle, setCustomTitle] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Cấu hình AI thông minh (Gemini 2.5 Pro / Flash)
  const [aiModel, setAiModel] = useState<AiModelId>(() => getSavedAiModel());
  const [difficulty, setDifficulty] = useState<DifficultyMode>("balanced");
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [apiKeyInput, setApiKeyInput] = useState<string>(() => getSavedGeminiKey());
  const [showApiKeyBox, setShowApiKeyBox] = useState<boolean>(false);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiGeneratedResult, setAiGeneratedResult] = useState<AiGenerateExamResult | null>(null);

  // Lấy dữ liệu khối lớp hiện tại
  const gradeObj = useMemo(() => GRADES_DATA.find((g) => g.grade === selectedGrade) || GRADES_DATA[6], [selectedGrade]);
  const subjects = gradeObj.subjects;
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId) || subjects[0];

  // Khi chuyển lớp, tự động chọn môn học đầu tiên
  useEffect(() => {
    if (subjects.length > 0 && !subjects.some((s) => s.id === selectedSubjectId)) {
      setSelectedSubjectId(subjects[0].id);
    }
  }, [selectedGrade, subjects, selectedSubjectId]);

  // Khi chuyển môn, tự động chọn bài học đầu tiên
  useEffect(() => {
    if (currentSubject?.lessons?.length) {
      setSelectedLessonIds([currentSubject.lessons[0].id]);
    } else {
      setSelectedLessonIds([]);
    }
  }, [selectedSubjectId, currentSubject]);

  // Chọn / bỏ chọn bài học
  const toggleLesson = (id: string) => {
    setSelectedLessonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAllLessons = () => {
    if (currentSubject) {
      setSelectedLessonIds(currentSubject.lessons.map((l) => l.id));
    }
  };

  const clearLessons = () => {
    setSelectedLessonIds([]);
  };

  // Lọc bài học theo tìm kiếm
  const filteredLessons = useMemo(() => {
    if (!currentSubject) return [];
    if (!lessonSearch.trim()) return currentSubject.lessons;
    const q = lessonSearch.toLowerCase().trim();
    return currentSubject.lessons.filter(
      (l) => l.title.toLowerCase().includes(q) || l.chapter.toLowerCase().includes(q)
    );
  }, [currentSubject, lessonSearch]);

  // Xóa kết quả AI cũ khi đổi lớp, môn hoặc bài học
  useEffect(() => {
    setAiGeneratedResult(null);
    setAiError(null);
  }, [selectedGrade, selectedSubjectId, selectedLessonIds]);

  // Sinh trước dữ liệu câu hỏi dự phòng (offline)
  const previewData = useMemo(() => {
    return generateQuestionsForLessons(selectedGrade, selectedSubjectId, selectedLessonIds, questionCount);
  }, [selectedGrade, selectedSubjectId, selectedLessonIds, questionCount]);

  const activeTitle = aiGeneratedResult?.title || previewData.title;
  const activeQuestions = aiGeneratedResult?.questions || previewData.questions;

  // Gọi AI Gemini 2.5 Pro / Flash tạo câu hỏi bám sát nội dung bài học
  const handleGenerateWithAi = async () => {
    if (selectedLessonIds.length === 0) {
      setAiError("Vui lòng chọn ít nhất 1 bài học trước khi tạo đề bằng AI.");
      return;
    }
    const chosenLessons = currentSubject.lessons.filter((l) => selectedLessonIds.includes(l.id));
    setIsAiLoading(true);
    setAiError(null);
    try {
      const result = await generateSmartAiExam({
        grade: selectedGrade,
        subjectName: currentSubject.name,
        lessons: chosenLessons,
        questionCount,
        preferredModel: aiModel,
        difficulty,
        customPrompt: customPrompt.trim(),
        apiKey: apiKeyInput.trim(),
      });
      setAiGeneratedResult(result);
      setShowPreview(true);
    } catch (err: any) {
      const msg = err?.message || "Không thể kết nối AI Gemini.";
      setAiError(msg);
      if (msg.toLowerCase().includes("api key")) {
        setShowApiKeyBox(true);
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  // Xử lý tạo đề
  const handleCreate = async () => {
    if (selectedLessonIds.length === 0) {
      alert("Vui lòng chọn ít nhất 1 bài học để tạo câu hỏi!");
      return;
    }
    if (activeQuestions.length === 0) {
      alert("Chưa có câu hỏi nào. Vui lòng bấm Tạo đề bằng AI hoặc chọn thêm bài học!");
      return;
    }
    setIsGenerating(true);
    try {
      const title = customTitle.trim() || activeTitle;
      const cleanQuestions: QuestionInput[] = activeQuestions.map((q) => ({
        content: q.content,
        option_a: q.option_a,
        option_b: q.option_b,
        option_c: q.option_c,
        option_d: q.option_d,
        correct: q.correct,
      }));
      const bankRes = await api.createBank({ title });
      if (bankRes && bankRes.id) {
        await api.addBankQuestionsBulk({
          bank_id: bankRes.id,
          questions: cleanQuestions,
        });
        queryClient.invalidateQueries({ queryKey: ["overview"] });
        onCreated(bankRes.id);
        onClose();
      }
    } catch (e: any) {
      console.error("Lỗi tạo đề tự động:", e);
      alert("Lỗi khi tạo đề: " + (e.message || "Vui lòng thử lại"));
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isOpen) return null;

  const currentLevel = selectedGrade <= 5 ? "Tiểu học" : selectedGrade <= 9 ? "THCS" : "THPT";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-5 overflow-y-auto">
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl overflow-hidden my-auto border border-slate-200 flex flex-col max-h-[92vh]">
        {/* Header với thông tin & Link SGK chính thức */}
        <div
          className="p-5 sm:p-6 text-white relative flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#1E1B4B 0%,#312E81 60%,#4338CA 100%)" }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white font-black transition"
            aria-label="Đóng"
          >
            ✕
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider">
              ✨ Tính Năng Mới
            </span>
            <a
              href={`https://taphuan.nxbgd.vn/tap-huan?grade=${selectedGrade}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-amber-300 font-bold text-xs transition border border-white/20"
              title="Mở thư viện sách giáo khoa chuẩn của Nhà xuất bản Giáo dục Việt Nam"
            >
              <span>📖 Sách Giáo Khoa Lớp {selectedGrade}: taphuan.nxbgd.vn</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Tạo Đề Kiểm Tra Tự Động Theo Sách Giáo Khoa
          </h3>
          <p className="text-xs sm:text-sm text-indigo-200 mt-1">
            Áp dụng chuẩn từ Lớp 1 đến Lớp 12. Chọn 1 hoặc nhiều bài học để tự động sinh câu hỏi trắc nghiệm A-B-C-D.
          </p>
        </div>

        {/* Nội dung các bước chọn đề */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* BƯỚC 1: CHỌN KHỐI LỚP (1 - 12) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <span className="flex h-5 w-5 rounded-full bg-indigo-600 text-white items-center justify-center text-[10px]">1</span>
                <span>Chọn Khối Lớp (Lớp 1 đến Lớp 12):</span>
              </label>
              <span className="text-xs font-bold text-indigo-700">Đang chọn: {gradeObj.label} ({currentLevel})</span>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
              {GRADES_DATA.map((g) => {
                const isSelected = g.grade === selectedGrade;
                return (
                  <button
                    key={g.grade}
                    type="button"
                    onClick={() => setSelectedGrade(g.grade)}
                    className={`py-2 px-1 rounded-xl text-xs font-black transition active:scale-95 text-center ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-md ring-2 ring-indigo-400"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Lớp {g.grade}
                  </button>
                );
              })}
            </div>
          </div>

          {/* BƯỚC 2: CHỌN MÔN HỌC */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5 mb-2">
              <span className="flex h-5 w-5 rounded-full bg-indigo-600 text-white items-center justify-center text-[10px]">2</span>
              <span>Chọn Môn Học ({gradeObj.label}):</span>
            </label>

            <div className="flex flex-wrap gap-2">
              {subjects.map((sub) => {
                const isSelected = sub.id === selectedSubjectId;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSelectedSubjectId(sub.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition active:scale-95 border ${
                      isSelected
                        ? "bg-indigo-600 text-white border-indigo-700 shadow-md ring-2 ring-indigo-400"
                        : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm"
                    }`}
                  >
                    <span className="text-base">{sub.icon}</span>
                    <span>{sub.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/10">
                      {sub.lessons.length} bài
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* BƯỚC 3: CHỌN BÀI HỌC (CHO PHÉP CHỌN 1 BÀI HOẶC NHIỀU BÀI) */}
          <div className="rounded-2xl p-4 bg-slate-50 border border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <span className="flex h-5 w-5 rounded-full bg-indigo-600 text-white items-center justify-center text-[10px]">3</span>
                <span>Chọn Bài Học Trong SGK (Có thể chọn 1 hoặc nhiều bài):</span>
                <span className="text-emerald-700 font-extrabold">({selectedLessonIds.length} bài đã chọn)</span>
              </label>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={selectAllLessons}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-200"
                >
                  Chọn tất cả ({currentSubject?.lessons.length || 0})
                </button>
                <button
                  type="button"
                  onClick={clearLessons}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                >
                  Bỏ chọn
                </button>
              </div>
            </div>

            {/* Thanh tìm kiếm nhanh bài học */}
            <div className="mb-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs">
                  🔍
                </span>
                <input
                  type="text"
                  value={lessonSearch}
                  onChange={(e) => setLessonSearch(e.target.value)}
                  placeholder={`Tìm nhanh bài học trong môn ${currentSubject?.name || ""}... (ví dụ: Bài 1, Đạo hàm, Oxi, Thơ...)`}
                  className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                />
                {lessonSearch && (
                  <button
                    type="button"
                    onClick={() => setLessonSearch("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {(!currentSubject || currentSubject.lessons.length === 0) ? (
              <p className="text-xs text-slate-500 py-4 text-center">Chưa có bài học cho môn này.</p>
            ) : filteredLessons.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">Không tìm thấy bài học phù hợp với từ khóa "{lessonSearch}".</p>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2 max-h-56 overflow-y-auto pr-1">
                {filteredLessons.map((lesson) => {
                  const isChecked = selectedLessonIds.includes(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => toggleLesson(lesson.id)}
                      className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition select-none ${
                        isChecked
                          ? "bg-indigo-50/80 border-indigo-300 shadow-sm"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 pointer-events-none"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-black text-slate-900 leading-tight">
                          {lesson.title}
                        </span>
                        <span className="block text-[10px] text-slate-500 mt-0.5 truncate">
                          {lesson.chapter} · {lesson.questions.length} câu mẫu
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* BƯỚC 4: SỐ LƯỢNG CÂU HỎI & TÊN ĐỀ */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5 mb-2">
                <span className="flex h-5 w-5 rounded-full bg-indigo-600 text-white items-center justify-center text-[10px]">4</span>
                <span>Số lượng câu hỏi cần tạo:</span>
              </label>
              <div className="flex gap-1.5">
                {[5, 10, 15, 20].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setQuestionCount(cnt)}
                    className={`flex-1 py-2 rounded-xl text-xs font-black transition active:scale-95 ${
                      questionCount === cnt
                        ? "bg-indigo-600 text-white shadow ring-2 ring-indigo-400"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cnt} câu
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5 mb-2">
                <span className="flex h-5 w-5 rounded-full bg-indigo-600 text-white items-center justify-center text-[10px]">5</span>
                <span>Tên đề kiểm tra (Tuỳ chỉnh):</span>
              </label>
              <input
                type="text"
                placeholder={activeTitle}
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* BƯỚC 6: CẤU HÌNH AI THÔNG MINH (GEMINI 2.5 PRO / FLASH) */}
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/80 p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white items-center justify-center text-xs shadow-sm">
                  ✨
                </span>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-indigo-950">
                    Ra đề thông minh bằng AI (Bám sát nội dung bài đã chọn)
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    Dùng Gemini thế hệ mới để soạn câu hỏi đúng kiến thức SGK Kết nối tri thức
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowApiKeyBox((v) => !v)}
                className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition"
              >
                {apiKeyInput.trim() ? "🔑 Đã có API Key" : "🔑 Nhập Gemini API Key"}
              </button>
            </div>

            {showApiKeyBox && (
              <div className="p-3 rounded-xl bg-white border border-indigo-200 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <label className="text-[11px] font-bold text-slate-700">
                    Google Gemini API Key (lưu an toàn trên trình duyệt của thầy/cô):
                  </label>
                  <a
                    href="https://aistudio.google.com/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-indigo-600 underline hover:text-indigo-800"
                  >
                    Lấy key miễn phí tại Google AI Studio ↗
                  </a>
                </div>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={apiKeyInput}
                    onChange={(e) => {
                      setApiKeyInput(e.target.value);
                      saveGeminiKey(e.target.value);
                    }}
                    placeholder="Dán API Key (AIza...) vào đây..."
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowApiKeyBox(false)}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700"
                  >
                    Xong
                  </button>
                </div>
              </div>
            )}

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-extrabold text-slate-600 mb-1">
                  Mô hình AI:
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {AI_MODELS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setAiModel(m.id);
                        saveAiModel(m.id);
                      }}
                      className={`text-left px-3 py-2 rounded-xl border transition text-xs ${
                        aiModel === m.id
                          ? "border-indigo-500 bg-indigo-600 text-white shadow-sm"
                          : "border-slate-200 bg-white hover:border-indigo-300 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-black">{m.label}</span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                            aiModel === m.id ? "bg-white/20 text-white" : "bg-indigo-50 text-indigo-700"
                          }`}
                        >
                          {m.badge}
                        </span>
                      </div>
                      <p className={`text-[10px] mt-0.5 ${aiModel === m.id ? "text-indigo-100" : "text-slate-500"}`}>
                        {m.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <div>
                  <label className="block text-[11px] font-extrabold text-slate-600 mb-1">
                    Ma trận độ khó:
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as DifficultyMode)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {DIFFICULTY_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label} — {opt.desc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-slate-600 mb-1">
                    Yêu cầu thêm cho AI (tuỳ chọn):
                  </label>
                  <input
                    type="text"
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="VD: Tập trung câu hỏi tính toán thực tế, có bài tập vận dụng..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="button"
                  disabled={isAiLoading || selectedLessonIds.length === 0}
                  onClick={handleGenerateWithAi}
                  className="w-full py-2.5 px-4 rounded-xl text-white font-black text-xs shadow-md transition active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg,#6D28D9 0%,#4F46E5 100%)" }}
                >
                  <span>{isAiLoading ? "⏳ AI đang phân tích bài học và soạn đề..." : "✨ Tạo Câu Hỏi Bằng AI Ngay"}</span>
                </button>
              </div>
            </div>

            {aiError && (
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                ⚠️ {aiError}
              </div>
            )}

            {aiGeneratedResult && (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between gap-2">
                <span>
                  ✅ Đã tạo {aiGeneratedResult.questions.length} câu hỏi chuẩn kiến thức bằng{" "}
                  <span className="underline">{aiGeneratedResult.modelUsed}</span>!
                </span>
                <button
                  type="button"
                  onClick={() => setAiGeneratedResult(null)}
                  className="text-[11px] font-bold text-slate-600 hover:text-slate-900 underline"
                >
                  Dùng bộ mẫu offline
                </button>
              </div>
            )}
          </div>

          {/* XEM TRƯỚC DANH SÁCH CÂU HỎI */}
          <div className="border-t border-slate-200 pt-3">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="text-xs font-black text-indigo-700 hover:text-indigo-800 flex items-center gap-1"
            >
              <span>
                {showPreview
                  ? "▼ Thu gọn xem trước"
                  : `▶ Xem trước danh sách câu hỏi (${activeQuestions.length} câu${
                      aiGeneratedResult ? " · Từ AI " + aiGeneratedResult.modelUsed : " · Dự phòng SGK"
                    })`}
              </span>
            </button>

            {showPreview && (
              <div className="mt-3 space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {activeQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <p className="font-extrabold text-slate-900">
                      Câu {idx + 1}: {q.content}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-slate-700">
                      <span className={q.correct === "A" ? "font-bold text-emerald-700" : ""}>A. {q.option_a}</span>
                      <span className={q.correct === "B" ? "font-bold text-emerald-700" : ""}>B. {q.option_b}</span>
                      <span className={q.correct === "C" ? "font-bold text-emerald-700" : ""}>C. {q.option_c}</span>
                      <span className={q.correct === "D" ? "font-bold text-emerald-700" : ""}>D. {q.option_d}</span>
                    </div>
                    {"explanation" in q && typeof q.explanation === "string" && q.explanation && (
                      <p className="mt-1.5 text-[11px] text-indigo-700 bg-indigo-50/70 px-2 py-1 rounded-lg">
                        💡 Giải thích: {q.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer thao tác */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-100 transition"
          >
            Đóng
          </button>

          <button
            type="button"
            disabled={isGenerating || selectedLessonIds.length === 0 || activeQuestions.length === 0}
            onClick={handleCreate}
            className="px-6 py-2.5 rounded-xl text-white font-black text-xs shadow-lg transition active:scale-95 disabled:opacity-40 flex items-center gap-2"
            style={{ background: "linear-gradient(135deg,#7C3AED 0%,#4F46E5 100%)" }}
          >
            <span>{isGenerating ? "Đang lưu bộ đề..." : "🚀 Lưu & Tạo Bộ Đề Ngay"}</span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[11px]">
              {activeQuestions.length} câu
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

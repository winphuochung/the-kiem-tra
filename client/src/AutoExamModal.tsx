import { useState, useMemo, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { api, type QuestionInput } from "./api";
import { GRADES_DATA, generateQuestionsForLessons } from "./curriculumData";

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
  const [selectedLessonIds, setSelectedLessonIds] = useState<string[]>(["khtn7-b1", "khtn7-b2"]);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [customTitle, setCustomTitle] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

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

  // Sinh trước dữ liệu câu hỏi
  const previewData = useMemo(() => {
    return generateQuestionsForLessons(selectedGrade, selectedSubjectId, selectedLessonIds, questionCount);
  }, [selectedGrade, selectedSubjectId, selectedLessonIds, questionCount]);

  // Xử lý tạo đề
  const handleCreate = async () => {
    if (selectedLessonIds.length === 0) {
      alert("Vui lòng chọn ít nhất 1 bài học để tạo câu hỏi!");
      return;
    }
    setIsGenerating(true);
    try {
      const title = customTitle.trim() || previewData.title;
      const bankRes = await api.createBank({ title });
      if (bankRes && bankRes.id) {
        await api.addBankQuestionsBulk({
          bank_id: bankRes.id,
          questions: previewData.questions,
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
                  Chọn tất cả
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

            {(!currentSubject || currentSubject.lessons.length === 0) ? (
              <p className="text-xs text-slate-500 py-4 text-center">Chưa có bài học cho môn này.</p>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2 max-h-56 overflow-y-auto pr-1">
                {currentSubject.lessons.map((lesson) => {
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
                placeholder={previewData.title}
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="w-full px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* XEM TRƯỚC DANH SÁCH CÂU HỎI */}
          <div className="border-t border-slate-200 pt-3">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="text-xs font-black text-indigo-700 hover:text-indigo-800 flex items-center gap-1"
            >
              <span>{showPreview ? "▼ Thu gọn xem trước" : "▶ Xem trước danh sách câu hỏi (" + previewData.questions.length + " câu)"}</span>
            </button>

            {showPreview && (
              <div className="mt-3 space-y-2.5 max-h-52 overflow-y-auto pr-1">
                {previewData.questions.map((q, idx) => (
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
            disabled={isGenerating || selectedLessonIds.length === 0}
            onClick={handleCreate}
            className="px-6 py-2.5 rounded-xl text-white font-black text-xs shadow-lg transition active:scale-95 disabled:opacity-40 flex items-center gap-2"
            style={{ background: "linear-gradient(135deg,#7C3AED 0%,#4F46E5 100%)" }}
          >
            <span>{isGenerating ? "Đang tạo đề..." : "🚀 Tạo Đề Tự Động Ngay"}</span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[11px]">
              {previewData.questions.length} câu
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QRCodeSVG } from "qrcode.react";
import { createHostSession, type HostConnection } from "./peerSync";
import { RemoteScannerView } from "./RemoteScannerView";
import { exportCardsToWord, exportCardsToPDF, exportQuestionsToWord, exportResultsToWord } from "./exportUtils";
import { AutoExamModal } from "./AutoExamModal";
// Local SafeAreaTopScrim component
function SafeAreaTopScrim({ backgroundColor = "var(--bg)" }: { backgroundColor?: string }) {
  return <div style={{ height: "env(safe-area-inset-top, 0px)", backgroundColor }} />;
}
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
  seed: _seed,
  large = false,
}: {
  student: Student;
  className: string;
  seed: number;
  large?: boolean;
}) {
  const sttLabel = String(student.stt).padStart(2, "0");
  const qrValue = `https://the-kiem-tra.vercel.app/?student_stt=${student.stt}&class=${encodeURIComponent(className)}`;
  return (
    <div
      className="relative bg-white text-black select-none"
      style={{
        border: large ? "3.5px solid #111" : "2.5px solid #111",
        borderRadius: 8,
        aspectRatio: large ? "1.28" : "1.48",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <span style={{ position: "absolute", top: "3%", left: "50%", transform: "translateX(-50%)", fontWeight: 800, fontSize: large ? 46 : 28, fontFamily: "Arial, sans-serif" }}>A</span>
      <span style={{ position: "absolute", bottom: "2.5%", left: "50%", transform: "translateX(-50%)", fontWeight: 800, fontSize: large ? 46 : 28, fontFamily: "Arial, sans-serif" }}>C</span>
      <span style={{ position: "absolute", left: "3.5%", top: "50%", transform: "translateY(-50%)", fontWeight: 800, fontSize: large ? 46 : 28, fontFamily: "Arial, sans-serif" }}>D</span>
      <span style={{ position: "absolute", right: "3.5%", top: "50%", transform: "translateY(-50%)", fontWeight: 800, fontSize: large ? 46 : 28, fontFamily: "Arial, sans-serif" }}>B</span>
      <span style={{ position: "absolute", top: "3.5%", right: "5%", fontWeight: 800, fontSize: large ? 40 : 24, fontFamily: "Arial, sans-serif" }}>{sttLabel}</span>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <QRCodeSVG
          value={qrValue}
          size={large ? 330 : 205}
          level="M"
          marginSize={1}
        />
      </div>
      <div style={{ position: "absolute", left: "5%", bottom: "3.5%", fontSize: large ? 16 : 12, lineHeight: 1.3, maxWidth: "55%" }}>
        <div style={{ fontWeight: 700, fontFamily: "Arial, sans-serif" }}>{student.name}</div>
        <div style={{ color: "#555", fontFamily: "Arial, sans-serif" }}>{className} · Thẻ số {student.stt}</div>
      </div>
      <div style={{ position: "absolute", right: "5%", bottom: "3.5%", textAlign: "right" }}>
        <span style={{ color: "#888", fontSize: large ? 13 : 10, fontFamily: "Arial, sans-serif" }}>Mã QR Chuẩn</span>
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

// ---------- Student Card Web View (khi quét bằng camera thường/Zalo) ----------
function StudentCardPortal({ stt, classNameParam }: { stt: number; classNameParam: string }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 text-center">
        <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          Thẻ Trả Lời Điện Tử
        </div>
        <h1 className="text-3xl font-black text-indigo-950">
          Thẻ Số {String(stt).padStart(2, "0")}
        </h1>
        {classNameParam ? (
          <p className="text-sm font-bold text-slate-500 mt-1">Lớp: {classNameParam}</p>
        ) : null}

        <div className="my-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">
            Hướng dẫn xoay thẻ khi trả lời trắc nghiệm:
          </p>
          <div className="grid grid-cols-2 gap-2 text-left text-xs font-semibold text-slate-700">
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-emerald-600 font-bold">Cạnh A:</span> Xoay lên trên
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-indigo-600 font-bold">Cạnh B:</span> Xoay lên trên
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-amber-600 font-bold">Cạnh C:</span> Xoay lên trên
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-rose-600 font-bold">Cạnh D:</span> Xoay lên trên
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          💡 <b>Ghi chú dành cho thầy cô:</b> Để quét thẻ chấm điểm cả lớp, thầy cô hãy mở <b>Buổi học</b> trên máy tính và bấm <b>"Ghép nối điện thoại"</b>, sau đó quét trực tiếp từ giao diện điều khiển!
        </p>

        <a
          href="/"
          className="inline-block w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-md active:scale-98 text-sm"
        >
          Vào trang chủ Thẻ Trả Lời →
        </a>
      </div>
    </div>
  );
}

// ---------- App shell ----------
export function App() {
  const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const remotePeer = urlParams?.get("remoteScan");
  const remoteSessionId = urlParams?.get("sessionId");

  if (remotePeer && remoteSessionId) {
    return <RemoteScannerView hostPeerId={remotePeer} sessionId={Number(remoteSessionId)} />;
  }

  const studentStt = urlParams?.get("student_stt");
  const studentClass = urlParams?.get("class");
  if (studentStt) {
    return <StudentCardPortal stt={Number(studentStt)} classNameParam={studentClass || ""} />;
  }

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
        <div className="mx-auto flex max-w-[1720px] 2xl:max-w-[1900px] w-full items-center gap-2 px-3 sm:px-6 py-2.5">
          <button
            type="button"
            aria-label="Về trang chủ Thẻ Trả Lời"
            onClick={() => setView({ kind: "home" })}
            className="flex items-center gap-2.5 sm:gap-3 text-left group"
          >
            <img
              src="/logo.png"
              alt="Logo Cá Nhân - Giáo Viên Hoá Học Lê Văn Thắng"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain filter drop-shadow-md transition group-hover:scale-105 shrink-0"
            />
            <span className="leading-tight">
              <span className="block text-base sm:text-lg font-black text-white tracking-wide">Thẻ Trả Lời</span>
              <span className="block text-[11px] font-bold" style={{ color: "#FFC53D" }}>Không cần điện thoại · Không cần máy bấm</span>
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

      <main className="mx-auto max-w-[1720px] 2xl:max-w-[1900px] w-full px-3 sm:px-6 pb-16">
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
          <div className="flex items-center gap-4 mb-3.5">
            <img
              src="/logo.png"
              alt="Logo Cá Nhân - Giáo Viên Hoá Học Lê Văn Thắng"
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain filter drop-shadow-xl transition hover:scale-105 shrink-0"
            />
            <div>
              <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#FFC53D" }}>Dạy học trên lớp · Thẻ trả lời</p>
              <span className="text-xs font-extrabold text-amber-200">Giáo Viên Hoá Học · Thầy Lê Văn Thắng</span>
            </div>
          </div>
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
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => exportCardsToWord(selectedClass?.name || "Lop_Hoc", students, seed, layout)}
            className="rounded-xl px-4 py-2 text-sm font-black shadow-md transition active:scale-95 flex items-center gap-1.5"
            style={{ background: "#2563EB", color: "#fff", minHeight: 44 }}
            title="Tải bộ thẻ ra file Microsoft Word (.doc) để xem và chỉnh sửa"
          >
            <span>📝</span>
            <span>Tải file Word (.doc)</span>
          </button>
          <button
            type="button"
            onClick={() => exportCardsToPDF()}
            className="rounded-xl px-4 py-2 text-sm font-black shadow-md transition active:scale-95 flex items-center gap-1.5"
            style={{ background: "#DC2626", color: "#fff", minHeight: 44 }}
            title="Lưu hoặc tải bộ thẻ dưới dạng file PDF chuẩn A4"
          >
            <span>📄</span>
            <span>Tải file PDF</span>
          </button>
          <Btn color="#F97316" onClick={() => window.print()} ariaLabel="In thẻ ra máy in">
            🖨 In thẻ ngay
          </Btn>
        </div>
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
  const [showAutoModal, setShowAutoModal] = useState(false);

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
      <div className="flex flex-wrap items-center gap-2">
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
        <span className="flex flex-wrap items-center gap-2">
          <input aria-label="Tên đề mới" placeholder="Tên đề mới, vd: Kiểm tra KHTN 7" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className={inputCls} style={{ ...inputStyle, width: 260, maxWidth: "60vw" }} />
          <Btn color="#F97316" disabled={!newTitle.trim()} onClick={() => createBank.mutate(newTitle.trim())} ariaLabel="Tạo đề mới">+ Tạo đề</Btn>
          <button
            type="button"
            onClick={() => setShowAutoModal(true)}
            className="rounded-full px-4 py-2 text-sm font-black text-white shadow-md transition active:scale-95 flex items-center gap-1.5"
            style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", minHeight: 40 }}
            title="Tự động tạo câu hỏi trắc nghiệm theo bài học SGK từ lớp 1 đến lớp 12"
          >
            <span>✨</span>
            <span>Tạo đề tự động (SGK Lớp 1 - 12)</span>
          </button>
        </span>
      </div>

      {selectedBank ? (
        <div className="mt-5 grid items-start gap-6 lg:grid-cols-[1fr_380px]">
          <section className="rounded-3xl p-4 sm:p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-extrabold" style={{ color: "#232a6b" }}>{selectedBank.title}</h3>
              <span className="text-sm" style={{ color: "var(--dim)" }}>{questions.length} câu</span>
              <button
                type="button"
                onClick={() => exportQuestionsToWord(selectedBank.title, questions)}
                disabled={questions.length === 0}
                className="ml-auto rounded-xl px-3 py-1.5 text-xs font-bold text-white flex items-center gap-1 shadow-sm transition active:scale-95 disabled:opacity-40"
                style={{ background: "#2563EB", minHeight: 36 }}
                title="Tải bộ đề thi trắc nghiệm ra file Word (.doc)"
              >
                <span>📝</span> Tải đề ra Word (.doc)
              </button>
              {!confirmDeleteBank ? (
                <Btn color="#fff" textColor="#b91c1c" onClick={() => setConfirmDeleteBank(true)} ariaLabel="Xoá đề đang chọn">Xoá đề</Btn>
              ) : (
                <Btn color="#b91c1c" onClick={() => deleteBank.mutate(selectedBank.id)} ariaLabel="Xác nhận xoá đề">Chắc chắn xoá đề?</Btn>
              )}
            </div>
            {questionsQ.isPending ? (
              <p className="py-6 text-sm" style={{ color: "var(--dim)" }}>Đang tải…</p>
            ) : questions.length === 0 ? (
              <div className="py-6">
                <p className="text-sm" style={{ color: "var(--dim)" }}>
                  Đề chưa có câu hỏi nào. Soạn câu đầu tiên ở khung bên cạnh hoặc bấm nút dưới để tạo tự động theo SGK.
                </p>
                <div className="mt-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-extrabold text-sm text-indigo-950 flex items-center gap-1.5">
                      <span>⚡ Tạo câu hỏi nhanh theo Sách giáo khoa</span>
                      <a
                        href="https://taphuan.nxbgd.vn/tap-huan?grade="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-indigo-600 underline font-normal"
                      >
                        (taphuan.nxbgd.vn)
                      </a>
                    </p>
                    <p className="text-xs text-indigo-700 mt-0.5">
                      Tự động chọn 1 bài hoặc nhiều bài từ Lớp 1 đến Lớp 12 theo chuẩn NXB Giáo dục Việt Nam.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAutoModal(true)}
                    className="px-4 py-2 rounded-xl text-xs font-black text-white shadow transition active:scale-95 flex items-center gap-1.5"
                    style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)" }}
                  >
                    <span>✨</span>
                    <span>Tạo đề tự động ngay</span>
                  </button>
                </div>
              </div>
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
        <div className="mt-4 p-8 rounded-3xl bg-white border border-slate-200 text-center">
          <p className="text-base font-bold text-slate-800">Chưa chọn đề nào hoặc chưa có đề kiểm tra.</p>
          <p className="text-xs text-slate-500 mt-1">Thầy cô có thể tạo đề mới thủ công bằng ô nhập ở trên hoặc bấm nút dưới để tạo tự động theo SGK Lớp 1 - 12.</p>
          <button
            type="button"
            onClick={() => setShowAutoModal(true)}
            className="mt-4 px-6 py-3 rounded-2xl text-sm font-black text-white shadow-lg transition active:scale-95 inline-flex items-center gap-2"
            style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)" }}
          >
            <span>✨</span>
            <span>Tạo đề tự động từ Sách Giáo Khoa (Lớp 1 - 12)</span>
          </button>
        </div>
      )}

      {/* Modal Tạo đề tự động chuẩn Sách giáo khoa */}
      <AutoExamModal
        isOpen={showAutoModal}
        onClose={() => setShowAutoModal(false)}
        onCreated={(id) => onSelect(id)}
      />
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

interface RemoteScanNotification {
  studentName: string;
  studentStt: number;
  answer: Answer;
  isCorrect: boolean;
  timestamp: number;
}

function RoomView({ sessionId, onExit }: { sessionId: number; onExit: () => void }) {
  const queryClient = useQueryClient();
  const detailQ = useQuery({
    queryKey: ["session", sessionId],
    queryFn: () => api.getSession({ session_id: sessionId }),
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });
  const data = detailQ.data;
  const [mode, setMode] = useState<RoomMode>("present");
  const [qIndex, setQIndex] = useState<number | null>(null);
  const [reveal, setReveal] = useState(false);
  const [resultQ, setResultQ] = useState<number | null>(null);

  // Ghép nối điện thoại quét thẻ không dây
  const [showPairModal, setShowPairModal] = useState(false);
  const [hostConn, setHostConn] = useState<HostConnection | null>(null);
  const [phoneCount, setPhoneCount] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [recentScan, setRecentScan] = useState<RemoteScanNotification | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

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

  const prevResponsesCountRef = useRef<number>(0);

  // Tự động kích hoạt banner thông báo khi có phản hồi mới từ DB
  useEffect(() => {
    const resps = data?.responses ?? [];
    if (resps.length > prevResponsesCountRef.current && currentQ) {
      const currentQResps = resps.filter((r) => r.question_id === currentQ.id);
      if (currentQResps.length > 0) {
        const latest = currentQResps[currentQResps.length - 1];
        const student = students.find((s) => s.id === latest.student_id);
        const isCorrect = latest.answer === currentQ.correct;
        setRecentScan({
          studentName: student?.name || `Học sinh #${latest.student_id}`,
          studentStt: student?.stt || latest.student_id,
          answer: latest.answer as Answer,
          isCorrect,
          timestamp: Date.now(),
        });
      }
    }
    prevResponsesCountRef.current = resps.length;
  }, [data?.responses, currentQ, students]);

  // Tự động ẩn banner sau 4 giây
  useEffect(() => {
    if (!recentScan) return;
    const timer = setTimeout(() => {
      setRecentScan(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [recentScan]);

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

  const dataRef = useRef(data);
  dataRef.current = data;
  const clampedIdxRef = useRef(clampedIdx);
  clampedIdxRef.current = clampedIdx;

  // Khởi tạo phòng ghép nối PeerJS chạy SUỐT TOÀN BỘ BUỔI HỌC (Không bao giờ bị ngắt khi đóng modal)
  useEffect(() => {
    let active = true;
    let currentConnInstance: HostConnection | null = null;

    createHostSession(
      sessionId,
      async (msg, conn) => {
        if (!active) return;
        if (msg.type === "SUBMIT_ANSWER") {
          // 1. CẬP NHẬT TỨC THÌ VÀO REACT QUERY CACHE TRÊN MÁY TÍNH (0ms, hiển thị ngay lập tức)
          queryClient.setQueryData(["session", sessionId], (old: any) => {
            if (!old) return old;
            const responses = [...(old.responses || [])];
            const existingIdx = responses.findIndex(
              (r: any) => r.question_id === msg.question_id && r.student_id === msg.student_id
            );
            if (existingIdx >= 0) {
              responses[existingIdx] = {
                ...responses[existingIdx],
                answer: msg.answer,
                source: "scan",
              };
            } else {
              responses.push({
                question_id: msg.question_id,
                student_id: msg.student_id,
                answer: msg.answer,
                source: "scan",
              });
            }
            return { ...old, responses };
          });

          // 2. Ghi song song vào Backend / LocalStorage
          api.recordResponses({
            session_id: sessionId,
            question_id: msg.question_id,
            source: "scan",
            answers: [{ student_id: msg.student_id, answer: msg.answer }],
          }).catch(console.error);

          const student = students.find((s) => s.id === msg.student_id);
          const targetQ = questions.find((item) => item.id === msg.question_id) || currentQ;
          const isCorrect = targetQ ? msg.answer === targetQ.correct : false;

          setRecentScan({
            studentName: student?.name || `Học sinh #${msg.student_id}`,
            studentStt: student?.stt || msg.student_id,
            answer: msg.answer,
            isCorrect,
            timestamp: Date.now(),
          });
        } else if (msg.type === "GOTO_QUESTION") {
          goto(msg.index);
        } else if (msg.type === "PING") {
          if (dataRef.current) {
            try {
              conn.send({
                type: "INIT_STATE",
                session: dataRef.current.session,
                questions: dataRef.current.questions,
                students: dataRef.current.students,
                currentIndex: clampedIdxRef.current,
                responses: dataRef.current.responses,
              });
            } catch (e) {
              console.error("Lỗi gửi INIT_STATE:", e);
            }
          }
        }
      },
      (_status, count) => {
        if (active) setPhoneCount(count);
      }
    ).then((conn) => {
      if (active) {
        currentConnInstance = conn;
        setHostConn(conn);
        if (dataRef.current) {
          conn.broadcast({
            type: "INIT_STATE",
            session: dataRef.current.session,
            questions: dataRef.current.questions,
            students: dataRef.current.students,
            currentIndex: clampedIdxRef.current,
            responses: dataRef.current.responses,
          });
        }
      } else {
        conn.close();
      }
    }).catch((e) => {
      console.error("Lỗi tạo phòng ghép nối:", e);
    });

    return () => {
      active = false;
      currentConnInstance?.close();
    };
  }, [sessionId]);

  // Đồng bộ trạng thái mới sang điện thoại khi câu hỏi hoặc đáp án thay đổi
  useEffect(() => {
    if (hostConn && data) {
      hostConn.broadcast({
        type: "STATE_UPDATE",
        currentIndex: clampedIdx,
        responses: data.responses,
      });
    }
  }, [data, clampedIdx, hostConn]);

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
      <div className="flex flex-wrap items-center gap-2.5">
        <button type="button" onClick={onExit} aria-label="Quay lại danh sách buổi học" className="rounded-full px-3 py-2 text-sm font-bold shadow-sm" style={{ background: "#fff", border: "1px solid var(--border)", minHeight: 40 }}>← Buổi học</button>
        <img
          src="/logo.png"
          alt="Logo Cá Nhân - Thầy Lê Văn Thắng"
          className="h-12 w-12 sm:h-14 sm:w-14 object-contain filter drop-shadow-md shrink-0"
        />
        <div className="min-w-0">
          <h2 className="truncate text-lg font-black" style={{ color: "#232a6b" }}>{sess.title}</h2>
          <p className="text-xs" style={{ color: "var(--dim)" }}>Lớp {sess.class_name} · {questions.length} câu · {students.length} học sinh · {sess.status === "finished" ? "Đã kết thúc" : "Đang mở"}</p>
        </div>
        <span className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="rounded-full px-3 py-2 text-xs font-black shadow-sm transition active:scale-95 flex items-center gap-1.5 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50"
            style={{ minHeight: 40 }}
            title="Bật/Tắt chế độ toàn màn hình trình chiếu"
          >
            <span className="text-sm">{isFullscreen ? "🗗" : "⛶"}</span>
            <span>{isFullscreen ? "Thu nhỏ" : "Toàn màn hình"}</span>
          </button>
          <button
            type="button"
            onClick={() => setShowPairModal(true)}
            className="rounded-full px-3.5 py-2 text-xs font-black shadow-md transition active:scale-95 flex items-center gap-1.5"
            style={{
              background: phoneCount > 0 ? "#059669" : "#F97316",
              color: "#fff",
              minHeight: 40,
            }}
          >
            <span className="text-base">📱</span>
            {phoneCount > 0 ? `Điện thoại đã kết nối (${phoneCount})` : "Kết nối điện thoại quét thẻ"}
          </button>
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
        <PresentPanel
          q={currentQ}
          index={clampedIdx}
          total={questions.length}
          reveal={reveal}
          onReveal={() => setReveal(true)}
          answered={answeredCount}
          totalStudents={students.length}
          students={students}
          responses={respMap.get(currentQ.id)}
          onScan={() => setMode("scan")}
          onNext={() => goto(clampedIdx + 1)}
          isLast={clampedIdx >= questions.length - 1}
        />
      ) : mode === "scan" ? (
        <ScanPanel key={currentQ.id} sessionId={sessionId} q={currentQ} students={students} existing={respMap.get(currentQ.id)} onDone={() => setMode("results")} onShowQuestionResults={() => { setResultQ(currentQ.id); setMode("results"); }} />
      ) : mode === "manual" ? (
        <ManualPanel key={currentQ.id} sessionId={sessionId} q={currentQ} students={students} existing={respMap.get(currentQ.id)} />
      ) : (
        <ResultsPanel data={data} respMap={respMap} focusQuestionId={resultQ} onFocus={setResultQ} onPresentQuestion={(qid) => { const i = questions.findIndex((q) => q.id === qid); if (i >= 0) { goto(i); setMode("present"); } }} />
      )}

      {/* Thông báo Real-time khi điện thoại vừa quét: XANH = ĐÚNG, ĐỎ = SAI */}
      {recentScan && (
        <div className="fixed top-20 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
          <div
            className={`flex items-center gap-3.5 px-6 py-4 rounded-3xl shadow-2xl border-2 text-white animate-bounce transition-all ${
              recentScan.isCorrect
                ? "bg-emerald-600 border-emerald-300 shadow-emerald-950/60"
                : "bg-rose-600 border-rose-300 shadow-rose-950/60"
            }`}
            style={{ maxWidth: 650 }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-black shadow">
              {recentScan.isCorrect ? (
                <span className="text-emerald-600">✓</span>
              ) : (
                <span className="text-rose-600">✗</span>
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-black tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  {recentScan.isCorrect ? "ĐÁP ÁN ĐÚNG" : "ĐÁP ÁN CHƯA ĐÚNG"}
                </span>
                <span className="text-xs text-white/80 font-bold">Thẻ số {recentScan.studentStt}</span>
              </div>
              <p className="mt-0.5 text-lg font-black truncate leading-tight">
                Em <span className="underline decoration-white/40">{recentScan.studentName}</span> đã chọn:{" "}
                <span className="inline-block px-2.5 py-0.5 rounded-lg bg-black/25 text-xl font-black">
                  {recentScan.answer}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal ghép nối QR Điện thoại & Máy tính */}
      {showPairModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl relative text-center">
            <button
              type="button"
              onClick={() => setShowPairModal(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-100 text-slate-700 font-black hover:bg-slate-200 transition"
            >
              ✕
            </button>

            <span className="text-3xl">📱</span>
            <h3 className="mt-2 text-lg font-black" style={{ color: "#232a6b" }}>
              Ghép nối Điện thoại làm Máy quét
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Không cần cài app! Dùng <b>Camera điện thoại</b> hoặc <b>Zalo</b> quét mã QR dưới đây để mở máy quét cầm tay:
            </p>

            <div className="my-4 flex flex-col items-center">
              <div className="p-3 bg-white rounded-2xl shadow-md border-2 border-slate-100">
                {hostConn ? (
                  <QRCodeSVG value={hostConn.qrUrl} size={200} level="M" />
                ) : (
                  <div className="w-48 h-48 flex items-center justify-center text-xs text-slate-400">
                    Đang tạo mã QR kết nối...
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    phoneCount > 0 ? "bg-emerald-500 animate-pulse" : "bg-amber-400 animate-ping"
                  }`}
                />
                <span className="text-xs font-bold text-slate-700">
                  {phoneCount > 0
                    ? `✓ Đã kết nối với ${phoneCount} điện thoại!`
                    : "Đang chờ điện thoại quét mã..."}
                </span>
              </div>
            </div>

            {hostConn && (
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(hostConn.qrUrl);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-xs text-indigo-600 hover:underline font-bold"
                >
                  {copied ? "✓ Đã sao chép link!" : "📋 Sao chép link kết nối điện thoại"}
                </button>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowPairModal(false)}
                className="w-full py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Âm thanh đếm ngược Web Audio (100% offline, không phụ thuộc file mạng)
function playTimerBeep(freq = 850, duration = 0.08, type: OscillatorType = "sine") {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Bỏ qua lỗi audio autoplay của trình duyệt
  }
}

function playTimeUpChime() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    const now = ctx.currentTime;
    const notes = [
      { freq: 523.25, start: 0, dur: 0.15 }, // Đô 5 (C5)
      { freq: 659.25, start: 0.12, dur: 0.15 }, // Mi 5 (E5)
      { freq: 783.99, start: 0.24, dur: 0.35 }, // Sol 5 (G5)
    ];
    notes.forEach(({ freq, start, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + start);
      gain.gain.setValueAtTime(0.18, now + start);
      gain.gain.exponentialRampToValueAtTime(0.001, now + start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + start);
      osc.stop(now + start + dur);
    });
  } catch (e) {
    // Bỏ qua lỗi audio
  }
}

// ---------- Present ----------
function PresentPanel({
  q,
  index,
  total,
  reveal,
  onReveal,
  answered,
  totalStudents,
  students,
  responses,
  onScan,
  onNext,
  isLast,
}: {
  q: SQuestion;
  index: number;
  total: number;
  reveal: boolean;
  onReveal: () => void;
  answered: number;
  totalStudents: number;
  students: Student[];
  responses: Map<number, Answer> | undefined;
  onScan: () => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const [activeTab, setActiveTab] = useState<"question" | "chart">(reveal ? "chart" : "question");
  const [selectedAnswerFilter, setSelectedAnswerFilter] = useState<Answer | "none" | null>(null);
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);

  // Đồng hồ đếm ngược thời gian làm bài (Mặc định 10 giây mỗi câu theo yêu cầu)
  const [timerDuration, setTimerDuration] = useState<number>(() => {
    const saved = localStorage.getItem("quiz_timer_sec");
    return saved !== null ? Number(saved) : 10;
  });
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const saved = localStorage.getItem("quiz_timer_sec");
    return saved !== null ? Number(saved) : 10;
  });
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem("quiz_timer_sound");
    return saved !== null ? saved === "true" : true;
  });
  const [showTimerSettings, setShowTimerSettings] = useState<boolean>(false);

  // Tự động đặt lại 10 giây và bắt đầu đếm khi chuyển sang câu hỏi mới
  useEffect(() => {
    setTimeLeft(timerDuration);
    setIsTimerRunning(timerDuration > 0);
  }, [q.id, timerDuration]);

  // Bộ đếm lùi thời gian
  useEffect(() => {
    if (!isTimerRunning || timerDuration === 0) return;
    if (timeLeft <= 0) {
      setIsTimerRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          if (soundEnabled) {
            playTimeUpChime();
          }
          return 0;
        }
        if (soundEnabled && next <= 3) {
          playTimerBeep(900, 0.06);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, timerDuration, soundEnabled]);

  // Thống kê phân tích số học sinh chọn A, B, C, D và Chưa giơ
  const counts: Record<Answer, number> = { A: 0, B: 0, C: 0, D: 0 };
  const studentsByAnswer: Record<Answer, Student[]> = { A: [], B: [], C: [], D: [] };
  const unansweredStudents: Student[] = [];

  students.forEach((s) => {
    const ans = responses?.get(s.id);
    if (ans && ["A", "B", "C", "D"].includes(ans)) {
      counts[ans]++;
      studentsByAnswer[ans].push(s);
    } else {
      unansweredStudents.push(s);
    }
  });

  const correctCount = counts[q.correct] || 0;
  const wrongCount = answered - correctCount;
  const unansweredCount = students.length - answered;
  const maxBarCount = Math.max(1, counts.A, counts.B, counts.C, counts.D, unansweredCount);

  // Tự động chuyển sang xem biểu đồ khi giáo viên công bố đáp án và dừng đồng hồ
  const handleReveal = () => {
    setIsTimerRunning(false);
    onReveal();
    setActiveTab("chart");
  };

  return (
    <section className="mt-4 grid gap-5 lg:grid-cols-2 items-start">
      {/* CỘT BÊN TRÁI: CÂU HỎI VÀ BIỂU ĐỒ CỘT PHÂN TÍCH A - B - C - D */}
      <div
        className="overflow-hidden rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl"
        style={{ background: "linear-gradient(150deg,#171c48,#232a6b 60%,#2c3690)", minHeight: 560 }}
      >
        <div>
          {/* Top Bar câu hỏi kèm Đồng hồ 10 giây, Logo cá nhân */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="rounded-full px-3 py-1.5 text-xs font-black shadow" style={{ background: "#FFC53D", color: "#232a6b" }}>
                Câu {index + 1} / {total}
              </span>

              {/* Huy hiệu đồng hồ 10 giây siêu to rõ ngay cạnh Câu X / Total */}
              <div
                className={`flex items-center gap-1.5 font-black text-xs sm:text-sm px-3 py-1 rounded-full shadow-lg transition-all duration-300 ${
                  timerDuration === 0
                    ? "bg-white/20 text-white"
                    : timeLeft === 0
                    ? "bg-rose-600 text-white animate-pulse ring-2 ring-white"
                    : timeLeft <= 3
                    ? "bg-rose-500 text-white animate-pulse scale-105"
                    : timeLeft <= 5
                    ? "bg-amber-400 text-slate-950 font-black"
                    : "bg-emerald-400 text-slate-950 font-black"
                }`}
              >
                <span className="text-sm sm:text-base">{timerDuration === 0 ? "⏱️" : timeLeft === 0 ? "⏰" : "⏱️"}</span>
                <span className="tracking-wider">
                  {timerDuration === 0 ? "Vô hạn" : timeLeft === 0 ? "HẾT GIỜ (0s)" : `${timeLeft}s`}
                </span>
              </div>

              <span className="text-xs font-semibold text-white/70 hidden lg:inline ml-1">
                Học sinh giơ thẻ: xoay cạnh đáp án lên trên
              </span>
            </div>

            {/* CÁC NÚT ĐIỀU KHIỂN ĐỒNG HỒ & LOGO */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-black/40 border border-white/20 px-2 py-1 rounded-2xl backdrop-blur-sm shadow-md">
                {/* Nút Play / Pause */}
                {timerDuration > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (timeLeft === 0) {
                        setTimeLeft(timerDuration);
                        setIsTimerRunning(true);
                      } else {
                        setIsTimerRunning(!isTimerRunning);
                      }
                    }}
                    className="h-7 w-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition"
                    title={isTimerRunning ? "Tạm dừng đồng hồ" : "Tiếp tục đếm ngược"}
                    aria-label={isTimerRunning ? "Tạm dừng" : "Tiếp tục"}
                  >
                    {isTimerRunning ? "⏸" : "▶"}
                  </button>
                )}

                {/* Nút Đặt lại 10s */}
                {timerDuration > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setTimeLeft(timerDuration);
                      setIsTimerRunning(true);
                    }}
                    className="h-7 w-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition font-black"
                    title={`Đặt lại ${timerDuration} giây`}
                    aria-label="Đặt lại thời gian"
                  >
                    ↺
                  </button>
                )}

                {/* Nút +5s nhanh */}
                {timerDuration > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setTimeLeft((t) => t + 5);
                      setIsTimerRunning(true);
                    }}
                    className="px-2 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[11px] shadow hover:bg-amber-300 transition"
                    title="Cộng thêm 5 giây làm bài"
                  >
                    +5s
                  </button>
                )}

                {/* Bật/Tắt âm thanh chuông */}
                <button
                  type="button"
                  onClick={() => {
                    const next = !soundEnabled;
                    setSoundEnabled(next);
                    localStorage.setItem("quiz_timer_sound", String(next));
                  }}
                  className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs transition ${
                    soundEnabled ? "bg-amber-400/20 text-amber-300 border border-amber-400/40" : "bg-white/5 text-white/40"
                  }`}
                  title={soundEnabled ? "Đang bật âm thanh (Nhấp để tắt)" : "Đã tắt âm thanh (Nhấp để bật)"}
                >
                  {soundEnabled ? "🔊" : "🔇"}
                </button>

                {/* Nút cài đặt thời gian */}
                <button
                  type="button"
                  onClick={() => setShowTimerSettings(!showTimerSettings)}
                  className={`h-7 px-2 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                    showTimerSettings ? "bg-amber-400 text-slate-900" : "bg-white/10 hover:bg-white/20 text-white/80"
                  }`}
                  title="Tuỳ chỉnh thời gian làm bài"
                >
                  <span>⚙️</span>
                  <span className="text-[10px] hidden sm:inline">{timerDuration > 0 ? `${timerDuration}s` : "Vô hạn"}</span>
                </button>
              </div>

              {/* Logo cá nhân trong thẻ câu hỏi */}
              <img
                src="/logo.png"
                alt="Logo Cá Nhân"
                className="h-9 w-9 sm:h-11 sm:w-11 object-contain filter drop-shadow shrink-0 ml-1"
              />
            </div>
          </div>

          {/* Thanh tiến trình đếm ngược thời gian làm bài */}
          {timerDuration > 0 && (
            <div className="mt-3 relative w-full">
              <div className="w-full bg-black/40 rounded-full h-2.5 overflow-hidden border border-white/10 p-[1px]">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                    timeLeft === 0
                      ? "bg-rose-600 animate-pulse w-full"
                      : timeLeft <= 3
                      ? "bg-gradient-to-r from-rose-500 to-red-600 animate-pulse"
                      : timeLeft <= 5
                      ? "bg-gradient-to-r from-amber-400 to-orange-500"
                      : "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                  }`}
                  style={{
                    width: timeLeft === 0 ? "100%" : `${Math.min(100, Math.max(0, (timeLeft / timerDuration) * 100))}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Hộp điều chỉnh nhanh thời gian nếu cần */}
          {showTimerSettings && (
            <div className="mt-2.5 p-3 rounded-2xl bg-black/85 border border-white/20 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 shadow-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black text-amber-300">⏱️ Thời gian mỗi câu:</span>
                <div className="flex flex-wrap gap-1">
                  {[10, 15, 20, 30, 45, 60].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => {
                        setTimerDuration(sec);
                        setTimeLeft(sec);
                        setIsTimerRunning(true);
                        localStorage.setItem("quiz_timer_sec", String(sec));
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black transition ${
                        timerDuration === sec
                          ? "bg-amber-400 text-slate-950 shadow"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {sec}s {sec === 10 ? "(Chuẩn)" : ""}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setTimerDuration(0);
                      setTimeLeft(0);
                      setIsTimerRunning(false);
                      localStorage.setItem("quiz_timer_sec", "0");
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-black transition ${
                      timerDuration === 0
                        ? "bg-amber-400 text-slate-950 shadow"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    Không giới hạn
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowTimerSettings(false)}
                className="text-xs text-white/60 hover:text-white px-2 py-1"
              >
                ✕ Đóng
              </button>
            </div>
          )}

          {/* Thông báo nổi bật khi HẾT GIỜ 10 GIÂY */}
          {timeLeft === 0 && timerDuration > 0 && !reveal && (
            <div className="mt-3.5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-rose-600/90 via-red-600/95 to-amber-600/90 border-2 border-amber-300 text-white flex flex-wrap items-center justify-between gap-3 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow text-rose-600 font-black">
                  ⏰
                </span>
                <div>
                  <h4 className="font-black text-sm sm:text-base uppercase tracking-wider text-amber-200">
                    Hết {timerDuration} giây làm bài!
                  </h4>
                  <p className="text-xs font-semibold text-white/90">
                    Học sinh giữ nguyên thẻ đáp án giơ lên để thầy cô bắt đầu quét.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onScan}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs hover:bg-amber-300 transition shadow-lg flex items-center gap-1.5 active:scale-95"
                >
                  <span>📷</span>
                  <span>Quét thẻ ngay</span>
                </button>
                <button
                  type="button"
                  onClick={handleReveal}
                  className="px-3 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-white/90 transition shadow active:scale-95"
                >
                  ✓ Hiện đáp án
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTimeLeft(timerDuration);
                    setIsTimerRunning(true);
                  }}
                  className="px-3 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-white font-bold text-xs transition border border-white/20 active:scale-95"
                >
                  ↺ Thêm {timerDuration}s
                </button>
              </div>
            </div>
          )}

          {/* Thanh chuyển chế độ: Câu hỏi & 4 Đáp án <-> Biểu đồ cột phân tích */}
          <div className="flex items-center gap-2 mt-3 p-1 rounded-2xl bg-black/25 border border-white/10 w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("question")}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                activeTab === "question"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>❓ 4 Ô Đáp Án</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("chart")}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                activeTab === "chart"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>📊 Biểu Đồ Cột ABCD</span>
              {answered > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black text-amber-300">
                  {answered} em
                </span>
              )}
            </button>
          </div>

          <h3 className="mt-4 text-xl sm:text-2xl font-extrabold leading-snug text-white">
            {q.content}
          </h3>

          {/* CHẾ ĐỘ 1: HIỂN THỊ 4 Ô ĐÁP ÁN A, B, C, D */}
          {activeTab === "question" ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {ANSWERS.map((L) => {
                const isCorrect = reveal && q.correct === L;
                const dimmed = reveal && q.correct !== L;
                const countThis = counts[L];
                return (
                  <div
                    key={L}
                    className="flex items-start gap-3 rounded-2xl p-4 transition shadow-md relative overflow-hidden"
                    style={{
                      background: ANSWER_COLORS[L],
                      opacity: dimmed ? 0.45 : 1,
                      outline: isCorrect ? "4px solid #fff" : "none",
                    }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black shadow"
                      style={{ color: ANSWER_COLORS[L] }}
                    >
                      {L}
                    </span>
                    <div className="pt-0.5 flex-1 min-w-0">
                      <p className="text-base font-bold leading-relaxed text-white">
                        {q[`option_${L.toLowerCase()}` as "option_a" | "option_b" | "option_c" | "option_d"]}
                      </p>
                      {answered > 0 && (
                        <p className="text-[11px] font-extrabold text-white/90 mt-1">
                          Đã có: {countThis} em chọn ({students.length > 0 ? Math.round((countThis / students.length) * 100) : 0}%)
                        </p>
                      )}
                    </div>
                    {isCorrect && (
                      <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-black text-emerald-700 shadow self-start">
                        ✓ Đúng
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* CHẾ ĐỘ 2: BIỂU ĐỒ CỘT PHÂN TÍCH TRẢ LỜI CỦA HỌC SINH (A, B, C, D) */
            <div className="mt-5 rounded-2xl p-4 sm:p-5 bg-black/35 border border-white/15 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div>
                  <h4 className="text-base font-black text-amber-300 flex items-center gap-1.5">
                    <span>📊 Biểu Đồ Phân Tích Lựa Chọn (A · B · C · D)</span>
                  </h4>
                  <p className="text-xs text-white/70 mt-0.5">
                    Đã nhận: <span className="text-white font-extrabold">{answered}/{students.length} em</span> ({students.length > 0 ? Math.round((answered / students.length) * 100) : 0}%)
                    {reveal && (
                      <span className="ml-2 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-black border border-emerald-500/40">
                        Đáp án đúng: {q.correct}
                      </span>
                    )}
                  </p>
                </div>
                <div className="text-xs font-bold text-white/60">
                  Nhấp vào cột để xem danh sách học sinh
                </div>
              </div>

              {/* 4 CỘT CHÍNH (A, B, C, D) + CỘT CHƯA GIƠ */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3 items-end pt-6 pb-2 min-h-[220px]">
                {ANSWERS.map((L) => {
                  const cnt = counts[L];
                  const pct = students.length > 0 ? Math.round((cnt / students.length) * 100) : 0;
                  const isCorrect = reveal && q.correct === L;
                  const heightPct = Math.max(12, Math.round((cnt / maxBarCount) * 100));
                  const isSelected = selectedAnswerFilter === L;

                  return (
                    <div
                      key={L}
                      onClick={() => setSelectedAnswerFilter(isSelected ? null : L)}
                      className="flex flex-col items-center h-full justify-end cursor-pointer group"
                    >
                      {/* Số lượng & % trên đầu cột */}
                      <div className="text-center mb-1.5 transition group-hover:scale-110">
                        <span className="block text-xs sm:text-sm font-black text-white leading-none">
                          {cnt}
                        </span>
                        <span className="block text-[10px] text-white/70 font-bold">
                          {pct}%
                        </span>
                      </div>

                      {/* Thanh cột đứng */}
                      <div className="w-full max-w-[56px] h-36 bg-white/10 rounded-2xl p-1 flex flex-col justify-end relative overflow-hidden border border-white/10">
                        <div
                          className="w-full rounded-xl transition-all duration-500 relative flex items-center justify-center shadow-lg"
                          style={{
                            height: `${heightPct}%`,
                            background: ANSWER_COLORS[L],
                            boxShadow: isCorrect ? "0 0 16px rgba(16,185,129,0.7)" : undefined,
                            border: isCorrect ? "2px solid #ffffff" : isSelected ? "2px solid #FDE047" : "none",
                          }}
                        >
                          {isCorrect && (
                            <span className="absolute -top-3 px-1.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black text-[9px] shadow uppercase tracking-wider whitespace-nowrap">
                              ✓ ĐÚNG
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Nhãn chữ cái bên dưới cột */}
                      <div className="mt-2 text-center">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full font-black text-sm transition mx-auto shadow ${
                            isSelected ? "ring-2 ring-yellow-400 scale-110" : ""
                          }`}
                          style={{
                            background: ANSWER_COLORS[L],
                            color: "#ffffff",
                          }}
                        >
                          {L}
                        </span>
                        <span className="block text-[10px] font-bold text-white/70 mt-1 truncate max-w-[64px]" title={q[`option_${L.toLowerCase()}` as "option_a" | "option_b" | "option_c" | "option_d"]}>
                          {q[`option_${L.toLowerCase()}` as "option_a" | "option_b" | "option_c" | "option_d"]}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Cột thứ 5: Chưa giơ thẻ */}
                <div
                  onClick={() => setSelectedAnswerFilter(selectedAnswerFilter === "none" ? null : "none")}
                  className="flex flex-col items-center h-full justify-end cursor-pointer group"
                >
                  <div className="text-center mb-1.5 transition group-hover:scale-110">
                    <span className="block text-xs sm:text-sm font-black text-amber-300 leading-none">
                      {unansweredCount}
                    </span>
                    <span className="block text-[10px] text-amber-200/70 font-bold">
                      {students.length > 0 ? Math.round((unansweredCount / students.length) * 100) : 0}%
                    </span>
                  </div>

                  <div className="w-full max-w-[56px] h-36 bg-white/10 rounded-2xl p-1 flex flex-col justify-end relative overflow-hidden border border-white/10">
                    <div
                      className="w-full rounded-xl transition-all duration-500 bg-neutral-900 border-2 border-amber-400/80 shadow-md"
                      style={{
                        height: `${Math.max(12, Math.round((unansweredCount / maxBarCount) * 100))}%`,
                      }}
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-amber-400/80 font-black text-xs text-amber-400 mx-auto shadow">
                      —
                    </span>
                    <span className="block text-[10px] font-bold text-amber-300 mt-1 truncate max-w-[64px]">
                      Chưa giơ
                    </span>
                  </div>
                </div>
              </div>

              {/* Danh sách học sinh theo đáp án đã chọn (Interactive Breakdown) */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-black text-white">
                    {selectedAnswerFilter === "none"
                      ? `Danh sách chưa giơ thẻ (${unansweredCount} em):`
                      : selectedAnswerFilter
                      ? `Danh sách học sinh chọn đáp án ${selectedAnswerFilter} (${counts[selectedAnswerFilter]} em):`
                      : "Chi tiết học sinh theo từng đáp án (bấm cột ở trên để lọc):"}
                  </span>
                  {selectedAnswerFilter && (
                    <button
                      type="button"
                      onClick={() => setSelectedAnswerFilter(null)}
                      className="text-[11px] text-amber-300 hover:underline font-bold"
                    >
                      Xem tất cả
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                  {(selectedAnswerFilter === "none"
                    ? unansweredStudents
                    : selectedAnswerFilter
                    ? studentsByAnswer[selectedAnswerFilter]
                    : students
                  ).map((s) => {
                    const ans = responses?.get(s.id);
                    const stt = String(s.stt).padStart(2, "0");
                    const ok = ans === q.correct;
                    return (
                      <span
                        key={s.id}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black shadow-sm ${
                          !ans
                            ? "bg-black text-amber-300 border border-amber-400"
                            : ok
                            ? "bg-emerald-600 text-white border border-emerald-400"
                            : "bg-rose-600 text-white border border-rose-400"
                        }`}
                      >
                        <span className="opacity-80 font-mono text-[10px]">#{stt}</span>
                        <span>{s.name}</span>
                        {ans && <span className="px-1 rounded bg-black/25 text-[11px] font-black">{ans}</span>}
                      </span>
                    );
                  })}
                  {((selectedAnswerFilter === "none" && unansweredStudents.length === 0) ||
                    (selectedAnswerFilter && selectedAnswerFilter !== "none" && studentsByAnswer[selectedAnswerFilter].length === 0)) && (
                    <span className="text-xs text-white/50 italic py-1">Không có học sinh nào.</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons phía dưới */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/15">
          {!reveal ? (
            <Btn color="#FFC53D" textColor="#232a6b" onClick={handleReveal} ariaLabel="Hiện đáp án đúng của câu này">
              ✓ Hiện đáp án đúng & Biểu đồ
            </Btn>
          ) : (
            <Btn
              color="#3B82F6"
              onClick={() => setActiveTab(activeTab === "chart" ? "question" : "chart")}
              ariaLabel="Bật tắt biểu đồ"
            >
              {activeTab === "chart" ? "❓ Xem lại 4 phương án" : "📊 Xem biểu đồ cột ABCD"}
            </Btn>
          )}

          <Btn color="#F97316" onClick={onScan} ariaLabel="Đi quét thẻ cho câu này">
            📷 Quét thẻ câu này
          </Btn>

          {!isLast ? (
            <Btn color="rgba(255,255,255,.15)" onClick={onNext} ariaLabel="Sang câu tiếp theo">
              Câu tiếp theo →
            </Btn>
          ) : null}
        </div>
      </div>

      {/* CỘT BÊN PHẢI: SƠ ĐỒ LỚP / DANH SÁCH HỌC SINH THẤY RÕ HỌ VÀ TÊN 100% */}
      <div
        className="rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between"
        style={{
          background: "linear-gradient(160deg,#12163b,#1a2055 70%,#1f2766)",
          border: "1.5px solid rgba(255,255,255,0.12)",
          minHeight: 560,
        }}
      >
        <div>
          {/* Header Sơ đồ lớp kèm bộ chuyển số cột (2 cột / 3 cột / 4 cột) để tên rõ ràng */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <h4 className="text-xl font-black text-white flex items-center gap-2">
                <span>📋 Sơ đồ lớp</span>
              </h4>
              <p className="text-xs text-amber-300 font-extrabold mt-0.5">
                {answered} / {students.length} em đã giơ thẻ
              </p>
            </div>

            {/* Điều khiển bố cục số cột để thấy rõ họ và tên */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-white/70">Hiển thị:</span>
              <div className="flex rounded-xl bg-black/40 p-0.5 border border-white/10">
                {([2, 3, 4] as const).map((cols) => (
                  <button
                    key={cols}
                    type="button"
                    onClick={() => setGridCols(cols)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-black transition ${
                      gridCols === cols
                        ? "bg-amber-400 text-slate-950 shadow"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {cols} Cột
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dải thống kê số em Đúng / Sai / Chưa giơ */}
          <div className="flex flex-wrap items-center gap-1.5 py-2.5 border-b border-white/5 text-xs font-black">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300 border border-emerald-500/30">
              ✓ Đúng: {correctCount} em
            </span>
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-rose-300 border border-rose-500/30">
              ✗ Sai: {wrongCount} em
            </span>
            <span className="rounded-full bg-black px-3 py-1 text-amber-300 border border-amber-400 shadow">
              ● Chưa giơ: {unansweredCount} em
            </span>
          </div>

          {/* Dải quy ước màu sắc */}
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-white/5">
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="text-white/60 font-semibold">Qui ước:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-black">Xanh: Đúng</span>
              <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-black">Đỏ: Sai</span>
              <span className="px-2 py-0.5 rounded bg-black text-amber-300 border border-amber-400 font-black">Đen: Chưa giơ</span>
            </div>
            <span className="text-[10px] font-black text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-500/30">
              ⚡ Tên học sinh hiển thị đầy đủ họ và tên
            </span>
          </div>

          {/* Lưới học sinh: KHÔNG CẮT BỚT TÊN - HIỂN THỊ ĐẦY ĐỦ HỌ VÀ TÊN RÕ RÀNG */}
          {students.length === 0 ? (
            <p className="text-sm text-white/60 py-8 text-center">Lớp chưa có học sinh.</p>
          ) : (
            <div
              className={`grid gap-2.5 mt-3 max-h-[520px] overflow-y-auto pr-1 ${
                gridCols === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : gridCols === 3
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {students.map((s) => {
                const ans = responses?.get(s.id);
                const hasAnswered = ans != null;
                const isCorrect = hasAnswered && ans === q.correct;
                const sttFormatted = String(s.stt).padStart(2, "0");

                return (
                  <div
                    key={s.id}
                    title={`STT ${sttFormatted}: ${s.name} ${
                      !hasAnswered ? "(Chưa giơ thẻ)" : isCorrect ? `(Chọn ${ans} - ĐÚNG)` : `(Chọn ${ans} - SAI)`
                    }`}
                    className={`flex items-center justify-between p-2.5 rounded-2xl transition-all shadow-md ${
                      !hasAnswered
                        ? "bg-black border-2 border-amber-400 text-amber-200"
                        : isCorrect
                        ? "bg-emerald-600 border-2 border-emerald-300 text-white shadow-emerald-950/40"
                        : "bg-rose-600 border-2 border-rose-300 text-white shadow-rose-950/40"
                    }`}
                    style={{ minHeight: 52 }}
                  >
                    {/* Phần Tên: Hiển thị ĐẦY ĐỦ Họ và Tên rõ ràng, không dùng truncate */}
                    <div className="flex items-center gap-2 min-w-0 flex-1 pr-1.5">
                      <span
                        className="shrink-0 flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-black shadow-inner"
                        style={{
                          background: !hasAnswered ? "rgba(251,191,36,0.25)" : "rgba(255,255,255,0.22)",
                          color: !hasAnswered ? "#FBBF24" : "#ffffff",
                        }}
                      >
                        {sttFormatted}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs sm:text-[13px] font-black leading-snug text-white break-words">
                          {s.name}
                        </span>
                        <span
                          className={`block text-[10px] font-bold mt-0.5 ${
                            !hasAnswered ? "text-amber-300 font-black" : "text-white/85"
                          }`}
                        >
                          {!hasAnswered ? "● Chưa giơ" : isCorrect ? "✓ Đúng" : "✗ Sai"}
                        </span>
                      </div>
                    </div>

                    {/* Badge đáp án giơ thẻ */}
                    {hasAnswered ? (
                      <span
                        className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-white font-black text-sm shadow-md"
                        style={{ color: isCorrect ? "#059669" : "#dc2626" }}
                      >
                        {ans}
                      </span>
                    ) : (
                      <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 border border-amber-400 font-black text-xs text-amber-400">
                        —
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
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
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold" style={{ color: "#232a6b" }}>Thẻ đã nhận diện</h3>
          <div className="flex items-center gap-1.5 text-[11px] font-bold">
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Xanh: Đúng</span>
            <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800">Đỏ: Sai</span>
            <span className="px-1.5 py-0.5 rounded bg-black text-white">Đen: Chưa trả lời</span>
          </div>
        </div>
        {students.length === 0 ? (
          <p className="mt-2 text-sm" style={{ color: "var(--dim)" }}>Lớp chưa có học sinh nào.</p>
        ) : (
          <ul className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {students.map((s) => {
              const a = detected.get(s.id) ?? existing?.get(s.id);
              const seen = detected.size > 0 ? detected.has(s.id) : (existing?.has(s.id) ?? false);
              const isCorrect = seen && a ? a === q.correct : false;
              return (
                <li
                  key={s.id}
                  className={seen ? "pop-in" : ""}
                  style={{
                    border: `2px solid ${!seen ? "#000000" : isCorrect ? "#059669" : "#dc2626"}`,
                    background: !seen ? "#0a0a0a" : isCorrect ? "#ECFDF5" : "#FEF2F2",
                    borderRadius: 10,
                    padding: "6px 8px",
                  }}
                >
                  <span className="block truncate text-xs font-bold" style={{ color: !seen ? "#ffffff" : "#111827" }}>
                    #{s.stt} {s.name}
                  </span>
                  <span className="text-[11px] font-extrabold" style={{ color: !seen ? "#a1a1aa" : isCorrect ? "#059669" : "#dc2626" }}>
                    {seen && a ? (isCorrect ? `✓ ${a} (Đúng)` : `✗ ${a} (Sai)`) : "● Chưa trả lời (Màu đen)"}
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
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => exportResultsToWord(data.session.title, data.session.class_name, questions, students, respMap)}
          className="rounded-xl px-4 py-2 text-sm font-bold text-white flex items-center gap-1.5 shadow transition active:scale-95"
          style={{ background: "#2563EB", minHeight: 40 }}
          title="Tải bảng điểm học sinh dạng file Word (.doc)"
        >
          <span>📝</span>
          <span>Tải bảng điểm Word (.doc)</span>
        </button>
        <Btn color="#059669" onClick={exportCsv} ariaLabel="Tải kết quả buổi học dạng CSV/Excel">
          📊 Tải Excel (CSV)
        </Btn>
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
                const hasAnswered = a != null;
                return (
                  <li
                    key={s.id}
                    style={{
                      borderRadius: 12,
                      padding: "8px 10px",
                      border: `2px solid ${!hasAnswered ? "#000000" : ok ? "#22C55E" : "#EF4444"}`,
                      background: !hasAnswered ? "#0a0a0a" : ok ? "#F0FDF4" : "#FEF2F2",
                    }}
                  >
                    <span className="block truncate text-sm font-bold" style={{ color: !hasAnswered ? "#ffffff" : "#111827" }}>
                      #{s.stt} {s.name}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: !hasAnswered ? "#a1a1aa" : ok ? "#15803d" : "#b91c1c" }}>
                      {!hasAnswered ? "● Chưa trả lời (Màu đen)" : ok ? `Chọn ${a} · Đúng ✓` : `Chọn ${a} · Sai ✗`}
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
                        <span key={mk.qid} title={`Câu ${mk.pos}: ${mk.ans ?? "chưa trả lời"}`} className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-black text-white" style={{ background: mk.ans == null ? "#000000" : mk.ok ? "#22C55E" : "#EF4444" }}>
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

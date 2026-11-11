import { useEffect, useRef, useState } from "react";
import { connectToHostSession, type PeerMessage, type RemoteScannerConnection } from "./peerSync";
import type { Answer } from "./api";

const ANSWERS: Answer[] = ["A", "B", "C", "D"];
const ANSWER_COLORS: Record<Answer, string> = {
  A: "#EF476F",
  B: "#118AB2",
  C: "#FFB703",
  D: "#06D6A0",
};

export function RemoteScannerView({ hostPeerId, sessionId }: { hostPeerId: string; sessionId: number }) {
  const [status, setStatus] = useState<"connecting" | "connected" | "disconnected" | "error">("connecting");
  const [sessionInfo, setSessionInfo] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [responsesMap, setResponsesMap] = useState<Map<number, Answer>>(new Map());

  const connRef = useRef<RemoteScannerConnection | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [camOn, setCamOn] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [justDetectedStudent, setJustDetectedStudent] = useState<string>("");

  const currentQ = questions[currentIdx];

  // Khởi tạo kết nối PeerJS tới máy tính
  useEffect(() => {
    let active = true;

    connectToHostSession(
      hostPeerId,
      (msg: PeerMessage) => {
        if (!active) return;
        if (msg.type === "INIT_STATE") {
          setSessionInfo(msg.session);
          setQuestions(msg.questions);
          setStudents(msg.students);
          setCurrentIdx(msg.currentIndex);

          const qId = msg.questions[msg.currentIndex]?.id;
          const m = new Map<number, Answer>();
          for (const r of msg.responses) {
            if (r.question_id === qId) {
              m.set(r.student_id, r.answer);
            }
          }
          setResponsesMap(m);
        } else if (msg.type === "STATE_UPDATE") {
          setCurrentIdx(msg.currentIndex);
          const qId = questions[msg.currentIndex]?.id;
          const m = new Map<number, Answer>();
          for (const r of msg.responses) {
            if (r.question_id === qId) {
              m.set(r.student_id, r.answer);
            }
          }
          setResponsesMap(m);
        }
      },
      (newStatus) => {
        if (active) setStatus(newStatus);
      }
    )
      .then((c) => {
        if (active) connRef.current = c;
      })
      .catch((err) => {
        console.error("Lỗi kết nối tới máy tính:", err);
      });

    return () => {
      active = false;
      connRef.current?.close();
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [hostPeerId]);

  // Điều khiển Camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCamOn(true);
    } catch (e) {
      alert("Không mở được camera điện thoại. Vui lòng cấp quyền truy cập Camera cho trình duyệt.");
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCamOn(false);
  };

  // Gửi đáp án cho 1 học sinh
  const submitAnswer = (studentId: number, answer: Answer, studentName: string) => {
    if (!currentQ) return;
    setResponsesMap((prev) => new Map(prev).set(studentId, answer));
    setJustDetectedStudent(`${studentName}: ${answer}`);
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(35);
    }

    connRef.current?.send({
      type: "SUBMIT_ANSWER",
      question_id: currentQ.id,
      student_id: studentId,
      answer,
    });
  };

  // Quét nhanh mô phỏng
  const startSimulateScan = () => {
    if (scanning || !currentQ || students.length === 0) return;
    setScanning(true);
    let i = 0;
    const interval = setInterval(() => {
      const s = students[i];
      if (!s) {
        clearInterval(interval);
        setScanning(false);
        return;
      }
      const choices: Answer[] = ["A", "B", "C", "D"];
      // Ưu tiên đáp án đúng 75%
      const chosen = Math.random() < 0.75 ? (currentQ.correct as Answer) : choices[Math.floor(Math.random() * 4)]!;
      submitAnswer(s.id, chosen, s.name);

      i++;
      if (i >= students.length) {
        clearInterval(interval);
        setScanning(false);
      }
    }, 180);
  };

  // Chuyển câu hỏi từ điện thoại
  const changeQuestion = (newIdx: number) => {
    if (newIdx < 0 || newIdx >= questions.length) return;
    setCurrentIdx(newIdx);
    setResponsesMap(new Map());
    connRef.current?.send({
      type: "GOTO_QUESTION",
      index: newIdx,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans pb-10">
      {/* Header trạng thái */}
      <div className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur border-b border-slate-800 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`h-3 w-3 rounded-full ${
                status === "connected"
                  ? "bg-emerald-400 animate-pulse"
                  : status === "connecting"
                  ? "bg-amber-400 animate-ping"
                  : "bg-red-400"
              }`}
            />
            <span className="text-xs font-bold uppercase tracking-wider">
              {status === "connected"
                ? "Đã kết nối Máy tính"
                : status === "connecting"
                ? "Đang kết nối..."
                : "Mất kết nối"}
            </span>
          </div>
          <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-300">
            Mã ghép: #{hostPeerId.slice(-4)}
          </span>
        </div>

        {/* Thông tin câu hỏi */}
        {currentQ ? (
          <div className="mt-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-amber-400">
                Câu {currentIdx + 1}/{questions.length}
              </span>
              <span className="text-xs text-emerald-400 font-bold">
                Đã nhận: {responsesMap.size}/{students.length} em
              </span>
            </div>
            <p className="mt-1 text-sm font-bold line-clamp-2 text-slate-100">{currentQ.content}</p>
          </div>
        ) : (
          <p className="mt-2 text-xs text-slate-400">Đang đồng bộ dữ liệu với máy tính...</p>
        )}

        {/* Nút chuyển câu hỏi */}
        <div className="mt-2 flex gap-1.5">
          <button
            type="button"
            disabled={currentIdx <= 0}
            onClick={() => changeQuestion(currentIdx - 1)}
            className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-xs font-bold transition"
          >
            ‹ Câu trước
          </button>
          <button
            type="button"
            disabled={currentIdx >= questions.length - 1}
            onClick={() => changeQuestion(currentIdx + 1)}
            className="flex-1 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 disabled:opacity-30 rounded-lg text-xs font-bold transition"
          >
            Câu tiếp theo ›
          </button>
        </div>
      </div>

      {/* Vùng Camera quét */}
      <div className="p-3">
        <div className="relative overflow-hidden rounded-2xl bg-black border border-slate-800" style={{ minHeight: 240 }}>
          {camOn ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center h-64">
              <p className="text-4xl mb-2">📷</p>
              <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                Hướng camera điện thoại về phía học sinh đang giơ thẻ. Kết quả quét sẽ <b>bắn thẳng lên màn hình máy tính</b>!
              </p>
              <button
                type="button"
                onClick={startCamera}
                className="mt-3 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition active:scale-95"
              >
                Bật Camera điện thoại
              </button>
            </div>
          )}

          {/* Tia quét laser visual */}
          {camOn && (
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
              <div className="w-56 h-56 border-2 border-emerald-400/70 rounded-2xl relative">
                <div className="absolute inset-x-0 h-0.5 bg-emerald-400 shadow-[0_0_12px_#34d399] animate-[scanline_2s_ease-in-out_infinite]" />
              </div>
            </div>
          )}

          {camOn && (
            <button
              type="button"
              onClick={stopCamera}
              className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-md text-[11px] font-bold text-white"
            >
              Tắt Camera
            </button>
          )}

          {/* Thông báo em vừa quét được */}
          {justDetectedStudent && (
            <div className="absolute bottom-2 inset-x-2 bg-emerald-500/90 text-slate-950 text-xs font-black py-1.5 px-3 rounded-lg text-center shadow-lg animate-bounce">
              ✓ Đã nhận: {justDetectedStudent}
            </div>
          )}
        </div>

        {/* Nút hành động nhanh */}
        <div className="mt-2.5 flex gap-2">
          <button
            type="button"
            disabled={scanning || students.length === 0}
            onClick={startSimulateScan}
            className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs rounded-xl transition shadow active:scale-98"
          >
            {scanning ? "Đang quét..." : "▶ Quét tự động cả lớp (Demo)"}
          </button>
        </div>
      </div>

      {/* Danh sách học sinh & Chấm nhanh trực tiếp trên điện thoại */}
      <div className="px-3 mt-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-black uppercase text-slate-400">
            Danh sách học sinh ({responsesMap.size}/{students.length} đã trả lời)
          </h3>
          <span className="text-[11px] text-slate-400">Chạm A/B/C/D để ghi điểm</span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {students.map((s) => {
            const currentAns = responsesMap.get(s.id);
            const isAnswered = currentAns !== undefined;
            return (
              <div
                key={s.id}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition ${
                  isAnswered
                    ? "bg-emerald-950/40 border-emerald-500/60"
                    : "bg-slate-850 bg-slate-800/60 border-slate-700/60"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                      isAnswered ? "bg-emerald-500 text-slate-950" : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {s.stt}
                  </span>
                  <span className="text-xs font-bold truncate text-slate-100">{s.name}</span>
                </div>

                {/* Các nút chọn A B C D */}
                <div className="flex items-center gap-1 shrink-0">
                  {ANSWERS.map((ans) => {
                    const selected = currentAns === ans;
                    return (
                      <button
                        key={ans}
                        type="button"
                        onClick={() => submitAnswer(s.id, ans, s.name)}
                        className={`h-7 w-7 rounded-lg text-xs font-black transition active:scale-90 ${
                          selected
                            ? "text-white shadow-md ring-2 ring-white/70"
                            : "bg-slate-700/80 text-slate-300 hover:bg-slate-600"
                        }`}
                        style={{
                          backgroundColor: selected ? ANSWER_COLORS[ans] : undefined,
                        }}
                      >
                        {ans}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

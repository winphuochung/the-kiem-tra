import { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { connectToHostSession, type PeerMessage, type RemoteScannerConnection } from "./peerSync";
import { api, type Answer } from "./api";

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
  const [justDetected, setJustDetected] = useState<{
    text: string;
    isCorrect: boolean;
  } | null>(null);
  const lastScanTimeRef = useRef<Map<number, number>>(new Map());

  const currentQ = questions[currentIdx];

  // 1. Tải dữ liệu ban đầu tức thì qua API để không bị kẹt ở "Đang đồng bộ..."
  useEffect(() => {
    if (sessionId) {
      api.getSession({ session_id: sessionId })
        .then((res) => {
          if (res) {
            setSessionInfo(res.session);
            setQuestions(res.questions);
            setStudents(res.students);
            const initIdx = res.session?.current_index || 0;
            setCurrentIdx(initIdx);
            const qId = res.questions[initIdx]?.id;
            const m = new Map<number, Answer>();
            for (const r of res.responses) {
              if (r.question_id === qId) {
                m.set(r.student_id, r.answer);
              }
            }
            setResponsesMap(m);
          }
        })
        .catch((err) => {
          console.error("Lỗi tải thông tin phòng học:", err);
        });
    }
  }, [sessionId]);

  // 2. Khởi tạo kết nối PeerJS tới máy tính để nhận và gửi realtime
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
          setQuestions((prevQuestions) => {
            const qId = prevQuestions[msg.currentIndex]?.id;
            const m = new Map<number, Answer>();
            for (const r of msg.responses) {
              if (r.question_id === qId) {
                m.set(r.student_id, r.answer);
              }
            }
            setResponsesMap(m);
            return prevQuestions;
          });
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

  // 3. Điều khiển Camera thật của điện thoại
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });
      streamRef.current = stream;
      setCamOn(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", "true");
        await videoRef.current.play();
      }
    } catch (e) {
      console.error("Lỗi mở camera:", e);
      alert("Không mở được camera điện thoại. Vui lòng cấp quyền truy cập Camera cho trình duyệt hoặc thử lại!");
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCamOn(false);
  };

  // Đảm bảo stream được gán chính xác khi video element sẵn sàng
  useEffect(() => {
    if (camOn && streamRef.current && videoRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.setAttribute("playsinline", "true");
      videoRef.current.play().catch(console.error);
    }
  }, [camOn]);

  // Âm thanh báo "Tít" khi quét được đáp án
  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
  };

  // Tự động tắt thông báo vừa quét sau 3.5 giây
  useEffect(() => {
    if (!justDetected) return;
    const t = setTimeout(() => setJustDetected(null), 3500);
    return () => clearTimeout(t);
  }, [justDetected]);

  // 4. Gửi đáp án cho 1 học sinh lên máy tính (qua PeerJS và lưu thẳng vào API)
  const submitAnswer = async (studentId: number, answer: Answer, studentName: string) => {
    if (!currentQ) return;
    const isCorrect = answer === currentQ.correct;
    setResponsesMap((prev) => new Map(prev).set(studentId, answer));
    setJustDetected({
      text: `${studentName} đã chọn ${answer}`,
      isCorrect,
    });
    playBeep();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate([40]);
    }

    // 1. Gửi qua PeerJS DataChannel tới máy tính PC
    try {
      connRef.current?.send({
        type: "SUBMIT_ANSWER",
        question_id: currentQ.id,
        student_id: studentId,
        answer,
      });
    } catch (e) {
      console.warn("Lỗi gửi PeerJS:", e);
    }

    // 2. GỌI TRỰC TIẾP API ĐỂ LƯU VÀO DATABASE (Đồng bộ tức thì kể cả khi mạng P2P chậm)
    try {
      await api.recordResponses({
        session_id: sessionId,
        question_id: currentQ.id,
        source: "scan",
        answers: [{ student_id: studentId, answer }],
      });
    } catch (e) {
      console.error("Lỗi lưu đáp án qua API:", e);
    }
  };

  // 5. Vòng lặp quét nhận diện MÃ QR SIÊU TỐC TỪ CAMERA (60 FPS)
  useEffect(() => {
    if (!camOn || !currentQ || students.length === 0) return;

    let animId: number;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const scan = () => {
      const video = videoRef.current;
      if (video && video.readyState === video.HAVE_ENOUGH_DATA && ctx) {
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        if (vw > 0 && vh > 0) {
          // TỐI ƯU HÓA TỐC ĐỘ: Thu nhỏ khung hình về tối đa 600px để quét tức thì chỉ 5-10ms
          const maxDim = 600;
          const scale = Math.min(1, maxDim / Math.max(vw, vh));
          const sw = Math.round(vw * scale);
          const sh = Math.round(vh * scale);

          if (canvas.width !== sw || canvas.height !== sh) {
            canvas.width = sw;
            canvas.height = sh;
          }
          ctx.drawImage(video, 0, 0, sw, sh);

          const imageData = ctx.getImageData(0, 0, sw, sh);
          const code = jsQR(imageData.data, sw, sh, {
            inversionAttempts: "dontInvert",
          });

          if (code && code.data) {
            const raw = code.data;
            // Phân tích mã QR: Tìm số thứ tự STT
            let foundStt: number | null = null;
            const match1 = raw.match(/student_stt=(\d+)/i);
            const match2 = raw.match(/STT[=:](\d+)/i);
            const match3 = raw.match(/TTL[:=](\d+)/i);
            if (match1) foundStt = parseInt(match1[1], 10);
            else if (match2) foundStt = parseInt(match2[1], 10);
            else if (match3) foundStt = parseInt(match3[1], 10);
            else {
              const num = parseInt(raw, 10);
              if (!isNaN(num) && num > 0) foundStt = num;
            }

            if (foundStt != null) {
              const student = students.find((s) => s.stt === foundStt);
              if (student && code.location) {
                const loc = code.location;
                // XÁC ĐỊNH ĐÁP ÁN A, B, C, D DỰA TRÊN CẠNH Ở TRÊN CÙNG CỦA MÀN HÌNH (Y NHỎ NHẤT)
                const edgeMidpoints: { name: Answer; y: number }[] = [
                  { name: "A", y: (loc.topLeftCorner.y + loc.topRightCorner.y) / 2 },
                  { name: "B", y: (loc.topRightCorner.y + loc.bottomRightCorner.y) / 2 },
                  { name: "C", y: (loc.bottomRightCorner.y + loc.bottomLeftCorner.y) / 2 },
                  { name: "D", y: (loc.bottomLeftCorner.y + loc.topLeftCorner.y) / 2 },
                ];

                edgeMidpoints.sort((p, q) => p.y - q.y);
                const chosenAnswer: Answer = edgeMidpoints[0]!.name;

                // GIẢM ĐỘ TRỄ XUỐNG 350ms ĐỂ QUÉT LƯỚT CẢ LỚP SIÊU NHANH
                const now = Date.now();
                const lastTime = lastScanTimeRef.current.get(student.id) || 0;
                const currentRecorded = responsesMap.get(student.id);

                if (now - lastTime > 350 || currentRecorded !== chosenAnswer) {
                  lastScanTimeRef.current.set(student.id, now);
                  submitAnswer(student.id, chosenAnswer, student.name);
                }
              }
            }
          }
        }
      }
      animId = requestAnimationFrame(scan);
    };

    animId = requestAnimationFrame(scan);
    return () => cancelAnimationFrame(animId);
  }, [camOn, currentQ, students, responsesMap]);

  // Quét nhanh mô phỏng Demo
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
          {/* Thẻ video luôn hiện diện trong DOM để nhận stream camera */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-64 object-cover ${camOn ? "block" : "hidden"}`}
          />

          {!camOn && (
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
              className="absolute top-2 right-2 bg-black/70 px-2.5 py-1 rounded-md text-xs font-bold text-white shadow"
            >
              Tắt Camera
            </button>
          )}

          {/* Thông báo em vừa quét được: XANH = ĐÚNG, ĐỎ = SAI */}
          {justDetected && (
            <div
              className={`absolute bottom-2 inset-x-2 text-xs font-black py-2.5 px-3 rounded-xl text-center shadow-2xl border flex items-center justify-center gap-2 animate-bounce ${
                justDetected.isCorrect
                  ? "bg-emerald-600 border-emerald-300 text-white shadow-emerald-950/80"
                  : "bg-rose-600 border-rose-300 text-white shadow-rose-950/80"
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-black" style={{ color: justDetected.isCorrect ? "#059669" : "#dc2626" }}>
                {justDetected.isCorrect ? "✓" : "✗"}
              </span>
              <span>
                {justDetected.isCorrect ? "ĐÁP ÁN ĐÚNG" : "ĐÁP ÁN SAI"}: {justDetected.text}
              </span>
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

      {/* Danh sách học sinh & chấm điểm nhanh thủ công */}
      <div className="px-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Danh sách học sinh ({responsesMap.size}/{students.length} đã trả lời)
          </span>
          <div className="flex items-center gap-1.5 text-[10px] font-bold">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Xanh: Đúng</span>
            <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">Đỏ: Sai</span>
            <span className="px-1.5 py-0.5 rounded bg-black text-white border border-neutral-700">Đen: Chưa trả lời</span>
          </div>
        </div>

        {students.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-6">Đang tải danh sách học sinh...</p>
        ) : (
          <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
            {students.map((student) => {
              const currentAns = responsesMap.get(student.id);
              const hasAnswered = currentAns != null;
              const isCorrect = hasAnswered && currentQ ? currentAns === currentQ.correct : false;

              return (
                <div
                  key={student.id}
                  className={`flex items-center justify-between p-2 rounded-xl border transition ${
                    !hasAnswered
                      ? "bg-black border-2 border-neutral-800 text-neutral-300 shadow-md shadow-black"
                      : isCorrect
                      ? "bg-emerald-950/40 border-emerald-500/60 shadow-sm shadow-emerald-950"
                      : "bg-rose-950/40 border-rose-500/60 shadow-sm shadow-rose-950"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-neutral-900 text-[11px] font-bold text-slate-300 shrink-0 border border-neutral-800">
                      {student.stt}
                    </span>
                    <div className="min-w-0">
                      <span className="block truncate text-xs font-bold text-slate-200">{student.name}</span>
                      <span className="text-[10px] font-black" style={{ color: !hasAnswered ? "#a1a1aa" : isCorrect ? "#34d399" : "#fb7185" }}>
                        {!hasAnswered ? "● Chưa trả lời (Màu đen)" : isCorrect ? "Đúng ✓" : "Sai ✗"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {ANSWERS.map((ans) => {
                      const isSelected = currentAns === ans;
                      const isBtnCorrect = ans === currentQ?.correct;
                      return (
                        <button
                          key={ans}
                          type="button"
                          onClick={() => submitAnswer(student.id, ans, student.name)}
                          className={`h-7 w-7 rounded-lg text-xs font-black transition active:scale-95 ${
                            isSelected
                              ? "text-white shadow-md ring-2 ring-white/60"
                              : "bg-slate-800/80 text-slate-400 hover:bg-slate-700"
                          }`}
                          style={{
                            background: isSelected
                              ? isBtnCorrect
                                ? "#059669"
                                : "#dc2626"
                              : undefined,
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
        )}
      </div>
    </div>
  );
}

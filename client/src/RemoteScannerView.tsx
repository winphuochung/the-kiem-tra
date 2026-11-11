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
  const [timerState, setTimerState] = useState<{
    isRunning: boolean;
    timeLeft: number;
    hasStarted: boolean;
  }>({
    isRunning: false,
    timeLeft: 10,
    hasStarted: false,
  });

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
        } else if (msg.type === "TIMER_STATE") {
          setTimerState({
            isRunning: msg.isRunning,
            timeLeft: msg.timeLeft,
            hasStarted: msg.hasStarted,
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
          width: { ideal: 1920, min: 1280 },
          height: { ideal: 1080, min: 720 },
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

  // 4. Gửi đáp án cho 1 hoặc nhiều học sinh lên máy tính (qua PeerJS và lưu thẳng vào API)
  const submitAnswer = async (studentId: number, answer: Answer, studentName: string) => {
    submitBatchAnswers([{ studentId, answer, studentName }]);
  };

  const submitBatchAnswers = async (
    items: { studentId: number; answer: Answer; studentName: string }[]
  ) => {
    if (!currentQ || items.length === 0) return;

    // 1. Cập nhật state local ngay tức khắc
    setResponsesMap((prev) => {
      const next = new Map(prev);
      for (const it of items) {
        next.set(it.studentId, it.answer);
      }
      return next;
    });

    // 2. Thông báo trực quan trên điện thoại
    if (items.length === 1) {
      const isCorrect = items[0].answer === currentQ.correct;
      setJustDetected({
        text: `${items[0].studentName} đã chọn ${items[0].answer}`,
        isCorrect,
      });
    } else {
      const correctCount = items.filter((it) => it.answer === currentQ.correct).length;
      const sttList = items
        .map((it) => {
          const s = students.find((st) => st.id === it.studentId);
          return `#${s?.stt || it.studentId}:${it.answer}`;
        })
        .join(", ");
      setJustDetected({
        text: `Đã nhận ${items.length} em cùng lúc: ${sttList}`,
        isCorrect: correctCount > 0,
      });
    }

    playBeep();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate([40]);
    }

    // 3. Gửi đồng thời qua PeerJS tới máy tính (cả dạng BATCH và dạng từng em để 100% tương thích)
    try {
      connRef.current?.send({
        type: "SUBMIT_BATCH",
        question_id: currentQ.id,
        answers: items.map((it) => ({ student_id: it.studentId, answer: it.answer })),
      });
      for (const it of items) {
        connRef.current?.send({
          type: "SUBMIT_ANSWER",
          question_id: currentQ.id,
          student_id: it.studentId,
          answer: it.answer,
        });
      }
    } catch (e) {
      console.warn("Lỗi gửi PeerJS:", e);
    }

    // 4. Lưu trực tiếp vào Database qua API
    try {
      await api.recordResponses({
        session_id: sessionId,
        question_id: currentQ.id,
        source: "scan",
        answers: items.map((it) => ({ student_id: it.studentId, answer: it.answer })),
      });
    } catch (e) {
      console.error("Lỗi lưu đáp án qua API:", e);
    }
  };

  // 5. VÒNG LẶP QUÉT ĐỒNG THỜI TẤT CẢ HỌC SINH (DUAL ENGINE MULTI-QR SCANNER)
  useEffect(() => {
    if (!camOn || !currentQ || students.length === 0) return;

    let animId: number;
    let isProcessing = false;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    // Khởi tạo BarcodeDetector nếu trình duyệt hỗ trợ (Chrome Android, iOS 17 Safari, Edge)
    let barcodeDetector: any = null;
    if (typeof window !== "undefined" && "BarcodeDetector" in window) {
      try {
        barcodeDetector = new (window as any).BarcodeDetector({ formats: ["qr_code"] });
      } catch (e) {
        console.warn("Không thể tạo BarcodeDetector:", e);
      }
    }

    // Hàm trích xuất thông tin học sinh từ chuỗi mã QR
    const extractStudent = (raw: string) => {
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
      if (foundStt == null) return null;
      return students.find((s) => s.stt === foundStt) || null;
    };

    const scan = async () => {
      const video = videoRef.current;
      if (!isProcessing && video && video.readyState >= video.HAVE_CURRENT_DATA && ctx) {
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        if (vw > 0 && vh > 0) {
          isProcessing = true;
          const detectedBatch: { studentId: number; answer: Answer; studentName: string }[] = [];
          const processedIds = new Set<number>();

          // === ĐỘNG CƠ 1: NATIVE BARCODE DETECTOR (Quét cực nhanh tất cả mã QR trong 1 lần gọi) ===
          if (barcodeDetector) {
            try {
              const barcodes = await barcodeDetector.detect(video);
              if (barcodes && barcodes.length > 0) {
                for (const bc of barcodes) {
                  if (bc.rawValue && bc.cornerPoints && bc.cornerPoints.length >= 4) {
                    const student = extractStudent(bc.rawValue);
                    if (student && !processedIds.has(student.id)) {
                      processedIds.add(student.id);
                      const pts = bc.cornerPoints;
                      const edgeMidpoints: { name: Answer; y: number }[] = [
                        { name: "A", y: (pts[0].y + pts[1].y) / 2 },
                        { name: "B", y: (pts[1].y + pts[2].y) / 2 },
                        { name: "C", y: (pts[2].y + pts[3].y) / 2 },
                        { name: "D", y: (pts[3].y + pts[0].y) / 2 },
                      ];
                      edgeMidpoints.sort((p, q) => p.y - q.y);
                      detectedBatch.push({
                        studentId: student.id,
                        answer: edgeMidpoints[0].name,
                        studentName: student.name,
                      });
                    }
                  }
                }
              }
            } catch (err) {
              // Fallback qua jsQR nếu BarcodeDetector lỗi
            }
          }

          // === ĐỘNG CƠ 2: MULTI-PASS MASKED JSQR (Quét lặp xóa mặt nạ tìm tất cả học sinh) ===
          // Chạy khi BarcodeDetector không có hoặc tìm được ít hơn
          if (detectedBatch.length === 0) {
            // Quét ở độ phân giải 1000px để bắt nét cả học sinh ngồi xa
            const maxDim = 1000;
            const scale = Math.min(1, maxDim / Math.max(vw, vh));
            const sw = Math.round(vw * scale);
            const sh = Math.round(vh * scale);

            if (canvas.width !== sw || canvas.height !== sh) {
              canvas.width = sw;
              canvas.height = sh;
            }
            ctx.drawImage(video, 0, 0, sw, sh);

            // Quét tối đa 20 lượt: Mỗi lượt tìm được 1 mã QR, phủ trắng vùng đó rồi quét tiếp lượt sau!
            const MAX_PASSES = 20;
            for (let pass = 0; pass < MAX_PASSES; pass++) {
              const imageData = ctx.getImageData(0, 0, sw, sh);
              const code = jsQR(imageData.data, sw, sh, {
                inversionAttempts: "dontInvert",
              });

              if (!code || !code.data) break; // Không còn mã QR nào nữa

              const student = extractStudent(code.data);
              if (student && code.location && !processedIds.has(student.id)) {
                processedIds.add(student.id);
                const loc = code.location;
                const edgeMidpoints: { name: Answer; y: number }[] = [
                  { name: "A", y: (loc.topLeftCorner.y + loc.topRightCorner.y) / 2 },
                  { name: "B", y: (loc.topRightCorner.y + loc.bottomRightCorner.y) / 2 },
                  { name: "C", y: (loc.bottomRightCorner.y + loc.bottomLeftCorner.y) / 2 },
                  { name: "D", y: (loc.bottomLeftCorner.y + loc.topLeftCorner.y) / 2 },
                ];
                edgeMidpoints.sort((p, q) => p.y - q.y);
                detectedBatch.push({
                  studentId: student.id,
                  answer: edgeMidpoints[0].name,
                  studentName: student.name,
                });
              }

              // PHỦ TRẮNG VÙNG MÃ QR VỪA TÌM ĐƯỢC ĐỂ TÌM TIẾP CÁC HỌC SINH KHÁC TRONG ẢNH
              if (code.location) {
                const loc = code.location;
                const pad = 14;
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.moveTo(loc.topLeftCorner.x - pad, loc.topLeftCorner.y - pad);
                ctx.lineTo(loc.topRightCorner.x + pad, loc.topRightCorner.y - pad);
                ctx.lineTo(loc.bottomRightCorner.x + pad, loc.bottomRightCorner.y + pad);
                ctx.lineTo(loc.bottomLeftCorner.x - pad, loc.bottomLeftCorner.y + pad);
                ctx.closePath();
                ctx.fill();
              } else {
                break;
              }
            }
          }

          // XỬ LÝ TOÀN BỘ DANH SÁCH HỌC SINH QUÉT ĐƯỢC
          if (detectedBatch.length > 0) {
            const now = Date.now();
            const toSubmit: { studentId: number; answer: Answer; studentName: string }[] = [];

            for (const item of detectedBatch) {
              const lastTime = lastScanTimeRef.current.get(item.studentId) || 0;
              const currentRecorded = responsesMap.get(item.studentId);
              // Cập nhật nếu chưa có hoặc quá 350ms hoặc học sinh vừa đổi đáp án xoay thẻ
              if (now - lastTime > 350 || currentRecorded !== item.answer) {
                lastScanTimeRef.current.set(item.studentId, now);
                toSubmit.push(item);
              }
            }

            if (toSubmit.length > 0) {
              submitBatchAnswers(toSubmit);
            }
          }

          isProcessing = false;
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
    setTimerState({ isRunning: false, timeLeft: 10, hasStarted: false });
    connRef.current?.send({
      type: "GOTO_QUESTION",
      index: newIdx,
    });
  };

  // Điều khiển đồng hồ từ xa từ điện thoại
  const handleRemoteStartTimer = () => {
    setTimerState((prev) => ({ ...prev, hasStarted: true, isRunning: true, timeLeft: prev.timeLeft <= 0 ? 10 : prev.timeLeft }));
    connRef.current?.send({ type: "START_TIMER" });
  };

  const handleRemoteResetTimer = () => {
    setTimerState({ isRunning: false, timeLeft: 10, hasStarted: false });
    connRef.current?.send({ type: "RESET_TIMER" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans pb-10">
      {/* Header trạng thái */}
      <div className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur border-b border-slate-800 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo Cá Nhân"
              className="h-9 w-9 object-contain filter drop-shadow shrink-0"
            />
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

        {/* Nút điều khiển Đồng hồ tính giờ từ xa */}
        <div className="mt-2 p-1.5 bg-slate-900 border border-slate-700/60 rounded-xl flex items-center justify-between gap-2 shadow-inner">
          {!timerState.hasStarted ? (
            <button
              type="button"
              onClick={handleRemoteStartTimer}
              className="flex-1 py-2 px-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-lg text-xs shadow flex items-center justify-center gap-1.5 active:scale-95 transition"
            >
              <span className="text-sm">▶</span>
              <span>BẮT ĐẦU TÍNH GIỜ (10s)</span>
            </button>
          ) : timerState.timeLeft === 0 ? (
            <div className="flex-1 flex items-center justify-between gap-2 px-1">
              <span className="text-xs font-black text-rose-400 flex items-center gap-1 animate-pulse">
                <span>⏰</span> HẾT GIỜ (0s)
              </span>
              <button
                type="button"
                onClick={handleRemoteResetTimer}
                className="py-1 px-3 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-lg text-xs border border-amber-400/40 active:scale-95"
              >
                ↺ Đặt lại 10s
              </button>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm animate-pulse">⏱️</span>
                <span className="text-xs font-black text-emerald-400">
                  Đang làm bài: {timerState.timeLeft}s
                </span>
              </div>
              <button
                type="button"
                onClick={handleRemoteResetTimer}
                className="py-1 px-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg text-xs active:scale-95"
              >
                ↺ Đặt lại
              </button>
            </div>
          )}
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

          {/* Khung ngắm quét toàn diện cả lớp học (Quét đồng thời nhiều em) */}
          {camOn && (
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-between p-2.5">
              <div className="w-full flex items-center justify-between gap-1.5 z-10">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-black/75 px-2.5 py-1 rounded-full border border-emerald-500/40 shadow">
                  📷 Quét toàn bộ lớp học
                </span>
                <span className="text-[10px] font-black text-amber-300 bg-black/75 px-2.5 py-1 rounded-full border border-amber-500/40 shadow">
                  Đã nhận: {responsesMap.size}/{students.length} em
                </span>
              </div>

              {/* Tia quét laser chạy ngang toàn bộ khung hình */}
              <div className="w-full relative h-1 bg-emerald-400 shadow-[0_0_16px_#34d399] animate-[scanline_2.2s_ease-in-out_infinite]" />

              <div className="text-center z-10 mb-1">
                <span className="text-[10px] font-bold text-white/90 bg-black/75 px-3 py-1 rounded-full border border-white/20 shadow">
                  ✨ Quét đồng thời tất cả học sinh đang giơ thẻ
                </span>
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

// Helper tiện ích xuất file Word (.doc) và PDF cho ứng dụng "Thẻ Trả Lời"
import QRCode from "qrcode";
import type { Answer, QuestionShape } from "./api";

// 1. Xuất bộ thẻ in ra file Microsoft Word (.doc) chuẩn A4 với MÃ QR CHÍNH XÁC 100%
// Đảm bảo TUYỆT ĐỐI: Đúng 2 thẻ / tờ A4 hoặc 1 thẻ / tờ A4, mã QR chuẩn ISO/IEC sắc nét quét xa
export async function exportCardsToWord(
  className: string,
  students: { id: number; stt: number; name: string }[],
  _seed = 12,
  layout: "1" | "2" = "2"
) {
  if (students.length === 0) {
    alert("Lớp chưa có học sinh để xuất file Word.");
    return;
  }

  const isOneCard = layout === "1";
  const cardsPerPage = isOneCard ? 1 : 2;

  // Kích thước chuẩn A4 (595pt x 842pt), trừ lề 24pt trên dưới, 28pt trái phải
  // Layout 2 thẻ/trang: Mỗi thẻ cao 352pt (~12.4cm), rộng 535pt (~18.8cm).
  //    Mã QR bung to cực đại 275pt (~9.7cm, tăng gần gấp đôi) chiếm trọn chiều cao giữa A và C!
  // Layout 1 thẻ/trang: Mỗi thẻ cao 770pt (~27cm), rộng 535pt (~18.8cm).
  //    Mã QR to khổng lồ 480pt (~17cm) chiếm trọn vẹn toàn bộ tờ A4, quét xa từ cuối lớp!
  const cardHeightPt = isOneCard ? 770 : 352;
  const topRowHeightPt = isOneCard ? 55 : 34;
  const midRowHeightPt = isOneCard ? 660 : 284;
  const botRowHeightPt = isOneCard ? 55 : 34;

  const qrSizePt = isOneCard ? 480 : 275;
  const qrPixelSize = isOneCard ? 1000 : 700;

  const letterFontSize = isOneCard ? 58 : 36;
  const sttFontSize = isOneCard ? 52 : 32;
  const infoFontSize = isOneCard ? 18 : 13;
  const infoSubFontSize = isOneCard ? 13 : 9.5;

  // Sinh mã QR hình ảnh PNG (Base64) chuẩn xác cho từng học sinh
  // Nội dung mã QR là đường link thông minh dẫn trực tiếp đến thông tin thẻ học sinh
  const qrImagesMap = new Map<number, { dataUrl: string; base64: string }>();
  for (const student of students) {
    const qrValue = `https://the-kiem-tra.vercel.app/?student_stt=${student.stt}&class=${encodeURIComponent(className)}`;
    const dataUrl = await QRCode.toDataURL(qrValue, {
      width: qrPixelSize,
      margin: 1,
      errorCorrectionLevel: "M",
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    });
    const base64 = dataUrl.split(",")[1];
    qrImagesMap.set(student.stt, { dataUrl, base64 });
  }

  const pagesArray: string[] = [];

  for (let i = 0; i < students.length; i += cardsPerPage) {
    const pageStudents = students.slice(i, i + cardsPerPage);
    let cardsInPageHtml = "";

    pageStudents.forEach((student, idx) => {
      const sttFormatted = String(student.stt).padStart(2, "0");
      const qrFileName = `qr_${student.stt}.png`;

      cardsInPageHtml += `
        <!-- Thẻ học sinh #${student.stt} -->
        <table width="100%" cellpadding="0" cellspacing="0" style="width:100%; height:${cardHeightPt}pt; border: ${isOneCard ? "3.5pt" : "2.5pt"} solid #111111; border-radius: 8pt; table-layout: fixed; background-color: #ffffff; margin-bottom: 2pt;">
          <!-- Hàng 1: A ở giữa, STT ở góc phải -->
          <tr style="height: ${topRowHeightPt}pt; mso-height-rule: exactly;">
            <td width="35%" style="vertical-align: top; padding-top: 6pt; padding-left: 14pt;">
              <span style="font-size: ${infoSubFontSize}pt; color: #888; font-weight: normal; font-family: Arial, sans-serif;">Thẻ Trả Lời Trắc Nghiệm</span>
            </td>
            <td width="30%" align="center" style="font-size: ${letterFontSize}pt; font-family: Arial, sans-serif; font-weight: bold; color: #111; vertical-align: top; padding-top: 4pt;">
              A
            </td>
            <td width="35%" align="right" style="padding-right: 14pt; font-size: ${sttFontSize}pt; font-family: Arial, sans-serif; font-weight: bold; color: #111; vertical-align: top; padding-top: 4pt;">
              ${sttFormatted}
            </td>
          </tr>

          <!-- Hàng 2: D bên trái, MÃ QR CHUẨN SIÊU TO ở giữa, B bên phải -->
          <tr style="height: ${midRowHeightPt}pt; mso-height-rule: exactly;">
            <td width="${isOneCard ? "9%" : "12%"}" align="center" style="font-size: ${letterFontSize}pt; font-family: Arial, sans-serif; font-weight: bold; color: #111; vertical-align: middle;">
              D
            </td>
            <td width="${isOneCard ? "82%" : "76%"}" align="center" style="vertical-align: middle; padding: 0;">
              <img src="${qrFileName}" width="${qrSizePt}" height="${qrSizePt}" alt="Mã QR Thẻ ${student.stt}" style="width: ${qrSizePt}pt; height: ${qrSizePt}pt; display: block; margin: auto; border: 0;" />
            </td>
            <td width="${isOneCard ? "9%" : "12%"}" align="center" style="font-size: ${letterFontSize}pt; font-family: Arial, sans-serif; font-weight: bold; color: #111; vertical-align: middle;">
              B
            </td>
          </tr>

          <!-- Hàng 3: Tên học sinh bên trái, C ở giữa thẳng hàng A, chú thích bên phải -->
          <tr style="height: ${botRowHeightPt}pt; mso-height-rule: exactly;">
            <td width="35%" align="left" style="padding-left: 14pt; padding-bottom: 6pt; vertical-align: bottom;">
              <span style="font-size: ${infoFontSize}pt; font-weight: bold; color: #111; font-family: Arial, sans-serif;">${student.name}</span><br/>
              <span style="font-size: ${infoSubFontSize}pt; color: #555; font-family: Arial, sans-serif;">${className} · Thẻ số ${student.stt}</span>
            </td>
            <td width="30%" align="center" style="padding-bottom: 4pt; font-size: ${letterFontSize}pt; font-family: Arial, sans-serif; font-weight: bold; color: #111; vertical-align: bottom;">
              C
            </td>
            <td width="35%" align="right" style="padding-right: 14pt; padding-bottom: 6pt; vertical-align: bottom; font-size: ${infoSubFontSize}pt; color: #888; font-family: Arial, sans-serif;">
              Mã QR Chuẩn Quốc Tế
            </td>
          </tr>
        </table>
      `;

      // Vạch đứt nét cắt giữa 2 thẻ trên cùng 1 trang A4
      if (idx === 0 && !isOneCard && pageStudents.length > 1) {
        cardsInPageHtml += `
          <div style="height: 16pt; line-height: 16pt; text-align: center; color: #555555; font-size: 8pt; font-family: monospace; margin: 2pt 0;">
            ✂ - - - - - - - - - - - - - - - CẮT THEO ĐƯỜNG NÀY ĐỂ TÁCH 2 THẺ - - - - - - - - - - - - - - - ✂
          </div>
        `;
      }
    });

    const pageHeader = `
      <p style="text-align: right; font-size: 8pt; color: #888; margin: 0 0 4pt 0; font-family: Arial, sans-serif;">
        Thẻ Trả Lời · Lớp ${className} · Trang ${Math.floor(i / cardsPerPage) + 1}/${Math.ceil(students.length / cardsPerPage)} (${isOneCard ? "1 thẻ / tờ A4" : "2 thẻ / tờ A4"})
      </p>
    `;

    pagesArray.push(`
      <div class="page-container" style="width: 100%;">
        ${pageHeader}
        ${cardsInPageHtml}
      </div>
    `);
  }

  // Nối các trang bằng dấu ngắt trang chuẩn của Microsoft Word (page-break-before: always)
  const fullDocumentHtml = pagesArray.join(`
    <br clear="all" style="page-break-before: always; mso-break-type: section-break;" />
  `);

  const boundary = "----=_NextPart_DOC_THETRALOI_2026";

  // Tạo phần đính kèm ảnh PNG base64 cho từng mã QR
  let imageParts = "";
  students.forEach((student) => {
    const item = qrImagesMap.get(student.stt);
    if (!item) return;
    imageParts += [
      `--${boundary}`,
      "Content-Type: image/png",
      "Content-Transfer-Encoding: base64",
      `Content-Location: qr_${student.stt}.png`,
      "",
      item.base64,
      "",
    ].join("\r\n");
  });

  const wordHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Thẻ Trả Lời - Lớp ${className}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page Section1 {
            size: 595.3pt 841.9pt; /* Chuẩn A4 Portrait */
            margin: 24pt 28pt 24pt 28pt;
            mso-header-margin: 12pt;
            mso-footer-margin: 12pt;
          }
          div.Section1 { page: Section1; }
          body { font-family: Arial, 'Segoe UI', Tahoma, sans-serif; margin: 0; padding: 0; }
          table { border-collapse: collapse; }
        </style>
      </head>
      <body>
        <div class="Section1">
          ${fullDocumentHtml}
        </div>
      </body>
    </html>
  `;

  // Đóng gói định dạng MHTML chuẩn của Microsoft Word
  const mhtmlContent = [
    "MIME-Version: 1.0",
    `Content-Type: multipart/related; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=\"utf-8\"",
    "Content-Transfer-Encoding: 7bit",
    "",
    wordHtml,
    "",
    imageParts,
    `--${boundary}--`,
    "",
  ].join("\r\n");

  const blob = new Blob([mhtmlContent], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `The_Tra_Loi_${className.replace(/\s+/g, "_")}_${isOneCard ? "1the_A4" : "2the_A4"}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 2. Xuất file PDF (Kích hoạt chuẩn in A4)
export function exportCardsToPDF() {
  window.print();
}

// 3. Xuất Đề kiểm tra trắc nghiệm ra file Word (.doc)
export function exportQuestionsToWord(bankTitle: string, questions: QuestionShape[]) {
  if (questions.length === 0) {
    alert("Bộ đề chưa có câu hỏi nào để xuất file Word.");
    return;
  }

  let questionsHtml = "";
  questions.forEach((q, idx) => {
    questionsHtml += `
      <div style="margin-bottom: 14pt;">
        <p style="font-weight: bold; font-size: 11pt; margin-bottom: 4pt; color: #171c48;">
          Câu ${idx + 1}: ${q.content}
        </p>
        <table width="100%" cellpadding="4" cellspacing="0" style="font-size: 10.5pt;">
          <tr>
            <td width="50%" style="${q.correct === "A" ? "font-weight: bold; color: #047857;" : ""}"><b>A.</b> ${q.option_a}</td>
            <td width="50%" style="${q.correct === "B" ? "font-weight: bold; color: #047857;" : ""}"><b>B.</b> ${q.option_b}</td>
          </tr>
          <tr>
            <td width="50%" style="${q.correct === "C" ? "font-weight: bold; color: #047857;" : ""}"><b>C.</b> ${q.option_c}</td>
            <td width="50%" style="${q.correct === "D" ? "font-weight: bold; color: #047857;" : ""}"><b>D.</b> ${q.option_d}</td>
          </tr>
        </table>
        <p style="font-size: 9pt; color: #059669; margin-top: 2pt;"><i>→ Đáp án đúng: <b>${q.correct}</b></i></p>
      </div>
    `;
  });

  const wordContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${bankTitle}</title>
        <style>
          @page Section1 { size: 595.3pt 841.9pt; margin: 40pt; }
          div.Section1 { page: Section1; }
          body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.4; }
        </style>
      </head>
      <body>
        <div class="Section1">
          <h2 style="text-align: center; color: #171c48; margin-bottom: 4pt;">${bankTitle}</h2>
          <p style="text-align: center; font-size: 10pt; color: #666; margin-bottom: 18pt;">Bộ đề trắc nghiệm chuẩn kiểm tra lớp học · Thẻ Trả Lời</p>
          <hr style="border: 0; border-top: 1pt solid #ccc; margin-bottom: 16pt;" />
          ${questionsHtml}
        </div>
      </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", wordContent], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `De_Trac_Nghiem_${bankTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, "_").slice(0, 30)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 4. Xuất Bảng điểm & Kết quả buổi học ra file Word (.doc)
export function exportResultsToWord(
  sessionTitle: string,
  className: string,
  questions: any[],
  students: any[],
  respMap: Map<number, Map<number, Answer>>
) {
  let tableRows = "";
  let totalCorrectSum = 0;

  students.forEach((s) => {
    let studentCorrectCount = 0;
    let answersCells = "";

    questions.forEach((q) => {
      const ans = respMap.get(q.id)?.get(s.id);
      const isRight = ans === q.correct;
      if (isRight) studentCorrectCount++;

      answersCells += `
        <td align="center" style="padding: 4pt; font-size: 9.5pt; border: 1px solid #ccc; background-color: ${
          isRight ? "#d1fae5" : ans ? "#fee2e2" : "#f3f4f6"
        };">
          <b>${ans || "—"}</b>
        </td>
      `;
    });

    totalCorrectSum += studentCorrectCount;
    const score10 = questions.length > 0 ? ((studentCorrectCount / questions.length) * 10).toFixed(1) : "0.0";

    tableRows += `
      <tr>
        <td align="center" style="padding: 4pt; border: 1px solid #ccc;">${s.stt}</td>
        <td style="padding: 4pt 6pt; border: 1px solid #ccc;"><b>${s.name}</b></td>
        ${answersCells}
        <td align="center" style="padding: 4pt; border: 1px solid #ccc; font-weight: bold;">${studentCorrectCount}/${questions.length}</td>
        <td align="center" style="padding: 4pt; border: 1px solid #ccc; font-weight: bold; color: #1e3a8a;">${score10}</td>
      </tr>
    `;
  });

  let questionHeaders = "";
  questions.forEach((_q, idx) => {
    questionHeaders += `<th style="padding: 4pt; border: 1px solid #ccc; background-color: #f1f5f9; font-size: 9pt;">C${idx + 1}</th>`;
  });

  const wordContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Bảng điểm - ${sessionTitle}</title>
        <style>
          @page Section1 { size: 841.9pt 595.3pt; /* A4 Landscape */ margin: 30pt; }
          div.Section1 { page: Section1; }
          body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10pt; }
          table { border-collapse: collapse; width: 100%; }
        </style>
      </head>
      <body>
        <div class="Section1">
          <h2 style="text-align: center; color: #171c48; margin-bottom: 2pt;">BẢNG ĐIỂM KIỂM TRA TRẮC NGHIỆM</h2>
          <p style="text-align: center; margin-bottom: 12pt; color: #555;">
            Buổi học: <b>${sessionTitle}</b> · Lớp: <b>${className}</b> · Tổng số: <b>${students.length} học sinh</b>
          </p>
          <table border="1" cellpadding="0" cellspacing="0">
            <thead>
              <tr style="background-color: #e2e8f0;">
                <th width="35" style="padding: 5pt; border: 1px solid #ccc;">STT</th>
                <th style="padding: 5pt; border: 1px solid #ccc; text-align: left;">Họ và Tên</th>
                ${questionHeaders}
                <th width="50" style="padding: 5pt; border: 1px solid #ccc;">Số câu đúng</th>
                <th width="45" style="padding: 5pt; border: 1px solid #ccc;">Điểm (10)</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
      </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", wordContent], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Bang_Diem_${className}_${sessionTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, "_").slice(0, 25)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Dữ liệu Sách Giáo Khoa chuẩn Chương trình GDPT 2018 — Bộ Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam) & Tiếng Anh Global Success
// Nguồn chính thức: https://taphuan.nxbgd.vn/tap-huan?grade=1..12
import type { QuestionInput } from "./api";

export interface LessonItem {
  id: string;
  number: number;
  title: string;
  chapter: string;
  summary?: string;
  questions: QuestionInput[];
}

export interface SubjectItem {
  id: string;
  name: string;
  icon: string;
  lessons: LessonItem[];
}

export interface GradeItem {
  grade: number;
  label: string;
  level: "Tiểu học" | "THCS" | "THPT";
  sgkUrl: string;
  subjects: SubjectItem[];
}

export const GRADES_DATA: GradeItem[] = [
  {
    "grade": 1,
    "label": "Lớp 1",
    "level": "Tiểu học",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=1",
    "subjects": [
      {
        "id": "toan-1",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-1-b1",
            "number": 1,
            "title": "Bài 1: Các số 0, 1, 2, 3, 4, 5",
            "chapter": "Chủ đề 1: Các số từ 0 đến 10",
            "summary": "Nhận biết, đọc, viết và đếm các số từ 0 đến 5.",
            "questions": [
              {
                "content": "Số nào đứng ngay sau số 3 trong dãy số 0, 1, 2, 3, 4, 5?",
                "option_a": "2",
                "option_b": "4",
                "option_c": "5",
                "option_d": "1",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-1-b2",
            "number": 2,
            "title": "Bài 2: Các số 6, 7, 8, 9, 10",
            "chapter": "Chủ đề 1: Các số từ 0 đến 10",
            "summary": "Nhận biết, đọc, viết và đếm các số từ 6 đến 10.",
            "questions": [
              {
                "content": "Bàn tay trái có 5 ngón, thêm 3 ngón ở bàn tay phải là tất cả mấy ngón tay?",
                "option_a": "7 ngón",
                "option_b": "8 ngón",
                "option_c": "9 ngón",
                "option_d": "6 ngón",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-1-b3",
            "number": 3,
            "title": "Bài 3: Nhiều hơn, ít hơn, bằng nhau",
            "chapter": "Chủ đề 1: Các số từ 0 đến 10",
            "summary": "So sánh số lượng hai nhóm đồ vật bằng cách ghép đôi.",
            "questions": []
          },
          {
            "id": "toan-1-b4",
            "number": 4,
            "title": "Bài 4: So sánh số",
            "chapter": "Chủ đề 1: Các số từ 0 đến 10",
            "summary": "Sử dụng dấu >, <, = để so sánh hai số trong phạm vi 10.",
            "questions": [
              {
                "content": "Dấu thích hợp điền vào chỗ chấm 7 ... 9 là:",
                "option_a": ">",
                "option_b": "=",
                "option_c": "<",
                "option_d": "+",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-1-b5",
            "number": 5,
            "title": "Bài 5: Mấy và mấy",
            "chapter": "Chủ đề 1: Các số từ 0 đến 10",
            "summary": "Tách, gộp các số trong phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b6",
            "number": 6,
            "title": "Bài 6: Luyện tập chung",
            "chapter": "Chủ đề 1: Các số từ 0 đến 10",
            "summary": "Củng cố đếm, đọc, viết, so sánh và tách gộp số đến 10.",
            "questions": []
          },
          {
            "id": "toan-1-b7",
            "number": 7,
            "title": "Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật",
            "chapter": "Chủ đề 2: Làm quen với một số hình phẳng",
            "summary": "Nhận dạng 4 hình phẳng cơ bản trong thực tế.",
            "questions": [
              {
                "content": "Hình nào có 3 cạnh và 3 góc?",
                "option_a": "Hình vuông",
                "option_b": "Hình tròn",
                "option_c": "Hình tam giác",
                "option_d": "Hình chữ nhật",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-1-b8",
            "number": 8,
            "title": "Bài 8: Thực hành lắp ghép, xếp hình",
            "chapter": "Chủ đề 2: Làm quen với một số hình phẳng",
            "summary": "Ghép các hình phẳng đơn giản thành hình mới.",
            "questions": []
          },
          {
            "id": "toan-1-b9",
            "number": 9,
            "title": "Bài 9: Luyện tập chung",
            "chapter": "Chủ đề 2: Làm quen với một số hình phẳng",
            "summary": "Ôn tập nhận diện và xếp ghép hình phẳng.",
            "questions": []
          },
          {
            "id": "toan-1-b10",
            "number": 10,
            "title": "Bài 10: Phép cộng trong phạm vi 10",
            "chapter": "Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10",
            "summary": "Ý nghĩa phép cộng, thực hiện cộng hai số có tổng không quá 10.",
            "questions": [
              {
                "content": "Kết quả của phép tính 4 + 5 là:",
                "option_a": "8",
                "option_b": "9",
                "option_c": "10",
                "option_d": "7",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-1-b11",
            "number": 11,
            "title": "Bài 11: Phép trừ trong phạm vi 10",
            "chapter": "Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10",
            "summary": "Ý nghĩa phép trừ, thực hiện trừ trong phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b12",
            "number": 12,
            "title": "Bài 12: Bảng cộng, bảng trừ trong phạm vi 10",
            "chapter": "Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10",
            "summary": "Ghi nhớ bảng cộng, bảng trừ trong phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b13",
            "number": 13,
            "title": "Bài 13: Luyện tập chung",
            "chapter": "Chủ đề 3: Phép cộng, phép trừ trong phạm vi 10",
            "summary": "Thực hành cộng, trừ và giải toán bằng một phép tính trong phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b14",
            "number": 14,
            "title": "Bài 14: Khối lập phương, khối hộp chữ nhật",
            "chapter": "Chủ đề 4: Làm quen với một số hình khối",
            "summary": "Nhận biết khối lập phương và khối hộp chữ nhật.",
            "questions": []
          },
          {
            "id": "toan-1-b15",
            "number": 15,
            "title": "Bài 15: Vị trí, định hướng trong không gian",
            "chapter": "Chủ đề 4: Làm quen với một số hình khối",
            "summary": "Xác định trên - dưới, trước - sau, trái - phải, ở giữa.",
            "questions": []
          },
          {
            "id": "toan-1-b16",
            "number": 16,
            "title": "Bài 16: Luyện tập chung",
            "chapter": "Chủ đề 4: Làm quen với một số hình khối",
            "summary": "Củng cố hình khối và định hướng không gian.",
            "questions": []
          },
          {
            "id": "toan-1-b17",
            "number": 17,
            "title": "Bài 17: Ôn tập các số trong phạm vi 10",
            "chapter": "Chủ đề 5: Ôn tập học kì 1",
            "summary": "Ôn tập đếm, so sánh số từ 0 đến 10.",
            "questions": []
          },
          {
            "id": "toan-1-b18",
            "number": 18,
            "title": "Bài 18: Ôn tập phép cộng, phép trừ trong phạm vi 10",
            "chapter": "Chủ đề 5: Ôn tập học kì 1",
            "summary": "Ôn tập tính nhẩm cộng trừ trong phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b19",
            "number": 19,
            "title": "Bài 19: Ôn tập hình học",
            "chapter": "Chủ đề 5: Ôn tập học kì 1",
            "summary": "Ôn tập hình phẳng và hình khối.",
            "questions": []
          },
          {
            "id": "toan-1-b20",
            "number": 20,
            "title": "Bài 20: Ôn tập chung",
            "chapter": "Chủ đề 5: Ôn tập học kì 1",
            "summary": "Tổng ôn kiến thức Toán học kì 1.",
            "questions": []
          },
          {
            "id": "toan-1-b21",
            "number": 21,
            "title": "Bài 21: Số có hai chữ số",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "Đọc, viết, cấu tạo hàng chục và hàng đơn vị các số đến 99.",
            "questions": []
          },
          {
            "id": "toan-1-b22",
            "number": 22,
            "title": "Bài 22: So sánh số có hai chữ số",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "So sánh chữ số hàng chục trước, rồi đến hàng đơn vị.",
            "questions": []
          },
          {
            "id": "toan-1-b23",
            "number": 23,
            "title": "Bài 23: Bảng các số từ 1 đến 100",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "Nhận biết quy luật bảng số 1 đến 100, số tròn chục và số 100.",
            "questions": []
          },
          {
            "id": "toan-1-b24",
            "number": 24,
            "title": "Bài 24: Luyện tập chung",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "Củng cố đọc, viết, so sánh các số đến 100.",
            "questions": []
          },
          {
            "id": "toan-1-b25",
            "number": 25,
            "title": "Bài 25: Dài hơn, ngắn hơn",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "So sánh độ dài hai vật trực tiếp hoặc gián tiếp.",
            "questions": []
          },
          {
            "id": "toan-1-b26",
            "number": 26,
            "title": "Bài 26: Đơn vị đo độ dài",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "Làm quen với đơn vị xăng-ti-mét (cm) và dùng thước kẻ đo độ dài.",
            "questions": []
          },
          {
            "id": "toan-1-b27",
            "number": 27,
            "title": "Bài 27: Thực hành ước lượng và đo độ dài",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "Ước lượng độ dài bằng gang tay, sải tay, bước chân.",
            "questions": []
          },
          {
            "id": "toan-1-b28",
            "number": 28,
            "title": "Bài 28: Luyện tập chung",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "Ôn tập đo độ dài và tính toán với cm.",
            "questions": []
          },
          {
            "id": "toan-1-b29",
            "number": 29,
            "title": "Bài 29: Phép cộng số có hai chữ số với số có một chữ số",
            "chapter": "Chủ đề 8: Phép cộng, phép trừ (không nhớ) trong phạm vi 100",
            "summary": "Đặt tính rồi tính cộng không nhớ.",
            "questions": []
          },
          {
            "id": "toan-1-b30",
            "number": 30,
            "title": "Bài 30: Phép cộng số có hai chữ số với số có hai chữ số",
            "chapter": "Chủ đề 8: Phép cộng, phép trừ (không nhớ) trong phạm vi 100",
            "summary": "Cộng hàng đơn vị với đơn vị, chục với chục (không nhớ).",
            "questions": []
          },
          {
            "id": "toan-1-b31",
            "number": 31,
            "title": "Bài 31: Phép trừ số có hai chữ số cho số có một chữ số",
            "chapter": "Chủ đề 8: Phép cộng, phép trừ (không nhớ) trong phạm vi 100",
            "summary": "Đặt tính rồi tính trừ không nhớ.",
            "questions": []
          },
          {
            "id": "toan-1-b32",
            "number": 32,
            "title": "Bài 32: Phép trừ số có hai chữ số cho số có hai chữ số",
            "chapter": "Chủ đề 8: Phép cộng, phép trừ (không nhớ) trong phạm vi 100",
            "summary": "Trừ số có hai chữ số cho số có hai chữ số không nhớ.",
            "questions": []
          },
          {
            "id": "toan-1-b33",
            "number": 33,
            "title": "Bài 33: Luyện tập chung",
            "chapter": "Chủ đề 8: Phép cộng, phép trừ (không nhớ) trong phạm vi 100",
            "summary": "Củng cố phép cộng, trừ không nhớ trong phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-1-b34",
            "number": 34,
            "title": "Bài 34: Xem giờ đúng trên đồng hồ",
            "chapter": "Chủ đề 9: Thời gian, giờ và lịch",
            "summary": "Đọc giờ đúng (kim phút chỉ số 12).",
            "questions": []
          },
          {
            "id": "toan-1-b35",
            "number": 35,
            "title": "Bài 35: Các ngày trong tuần",
            "chapter": "Chủ đề 9: Thời gian, giờ và lịch",
            "summary": "7 ngày trong tuần từ Thứ Hai đến Chủ nhật và xem tờ lịch.",
            "questions": []
          },
          {
            "id": "toan-1-b36",
            "number": 36,
            "title": "Bài 36: Thực hành xem lịch và giờ",
            "chapter": "Chủ đề 9: Thời gian, giờ và lịch",
            "summary": "Vận dụng xem đồng hồ và lịch vào sinh hoạt hằng ngày.",
            "questions": []
          },
          {
            "id": "toan-1-b37",
            "number": 37,
            "title": "Bài 37: Ôn tập các số trong phạm vi 100",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Ôn tập cấu tạo và so sánh số đến 100.",
            "questions": []
          },
          {
            "id": "toan-1-b38",
            "number": 38,
            "title": "Bài 38: Ôn tập phép cộng, phép trừ trong phạm vi 10",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Ôn tập cộng trừ phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b39",
            "number": 39,
            "title": "Bài 39: Ôn tập phép cộng, phép trừ trong phạm vi 100",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Ôn tập đặt tính cộng trừ không nhớ phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-1-b40",
            "number": 40,
            "title": "Bài 40: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Ôn tập hình phẳng, hình khối, cm và xem giờ.",
            "questions": []
          },
          {
            "id": "toan-1-b41",
            "number": 41,
            "title": "Bài 41: Ôn tập chung",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Tổng hợp kiến thức Toán lớp 1.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-1",
        "name": "Tiếng Việt",
        "icon": "📚",
        "lessons": [
          {
            "id": "tiengviet-1-b1",
            "number": 1,
            "title": "Tuần 1: Làm quen chữ a, b, c, d, đ, e, ê và dấu thanh",
            "chapter": "Tập 1 - Âm và chữ cái",
            "summary": "Nhận biết âm chữ a, b, c, d, đ, e, ê và các thanh sắc, huyền, hỏi, ngã, nặng.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b2",
            "number": 2,
            "title": "Tuần 2: Âm g, h, i, k, l, m, n",
            "chapter": "Tập 1 - Âm và chữ cái",
            "summary": "Đánh vần, đọc trơn tiếng chứa âm g, h, i, k, l, m, n.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b3",
            "number": 3,
            "title": "Tuần 3: Âm o, ô, ơ, p, q, r, s, t",
            "chapter": "Tập 1 - Âm và chữ cái",
            "summary": "Ghép vần và viết đúng các chữ o, ô, ơ, p, q, r, s, t.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b4",
            "number": 4,
            "title": "Tuần 4: Âm u, ư, v, x, y và phụ âm ghép ch, gh, gi, kh",
            "chapter": "Tập 1 - Âm và chữ cái",
            "summary": "Nhận biết quy tắc chính tả gh, ngh và đọc từ ứng dụng.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b5",
            "number": 5,
            "title": "Tuần 5: Phụ âm ghép ng, ngh, nh, ph, qu, th, tr",
            "chapter": "Tập 1 - Âm và chữ cái",
            "summary": "Đọc câu ngắn chứa phụ âm ghép.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b6",
            "number": 6,
            "title": "Tuần 6: Vần có âm cuối m, n (am, ăm, âm, an, ăn, ân, em, êm, en, ên)",
            "chapter": "Tập 1 - Vần",
            "summary": "Đánh vần và viết vần kết thúc bằng m, n.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b7",
            "number": 7,
            "title": "Tuần 7: Vần in, un, ôm, ơm, ôn, ơn, um, ươm, uôn",
            "chapter": "Tập 1 - Vần",
            "summary": "Đọc bài ứng dụng ngắn với vần có âm cuối m, n.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b8",
            "number": 8,
            "title": "Tuần 8: Vần có âm cuối p, t (ap, ăp, âp, at, ăt, ât, ep, êp, et, êt)",
            "chapter": "Tập 1 - Vần",
            "summary": "Phân biệt thanh sắc và thanh nặng trong vần có âm cuối p, t.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b9",
            "number": 9,
            "title": "Tuần 9: Ôn tập giữa học kì 1",
            "chapter": "Tập 1 - Vần",
            "summary": "Ôn tập toàn bộ âm chữ cái và vần đã học.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b10",
            "number": 10,
            "title": "Tuần 10: Vần có âm cuối c, ch, ng, nh (ac, ăc, âc, ach, ang, ăng, âng, anh)",
            "chapter": "Tập 1 - Vần",
            "summary": "Đọc và viết đúng vần có âm cuối c, ch, ng, nh.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b11",
            "number": 11,
            "title": "Tuần 11: Vần oc, ôc, uc, ưc, ung, ưng, ich, ênh, inh",
            "chapter": "Tập 1 - Vần",
            "summary": "Phân biệt vần kết thúc bằng nh/ch và n/t.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b12",
            "number": 12,
            "title": "Tuần 12: Vần có âm cuối i, y (ai, ay, ây, oi, ôi, ơi, ui, ưi)",
            "chapter": "Tập 1 - Vần",
            "summary": "Đọc trơn đoạn văn ngắn chứa vần ai, ay, ây, oi, ôi, ơi.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b13",
            "number": 13,
            "title": "Tuần 13: Vần có âm cuối o, u (ao, eo, au, âu, êu, iu, ưu)",
            "chapter": "Tập 1 - Vần",
            "summary": "Đọc hiểu câu chuyện ngắn về thiên nhiên, loài vật.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b14",
            "number": 14,
            "title": "Tuần 14: Vần có nguyên âm đôi ia, iê, yê, ua, uô, ưa, ươ",
            "chapter": "Tập 1 - Vần",
            "summary": "Quy tắc viết iê/yê và uô/ưa/ươ.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b15",
            "number": 15,
            "title": "Tuần 15: Vần iêm, iên, iêp, iêt, iêu, uôm, uôn, uôt, ươm, ươn, ươp, ươt",
            "chapter": "Tập 1 - Vần",
            "summary": "Đọc đoạn văn ngắn và trả lời câu hỏi.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b16",
            "number": 16,
            "title": "Tuần 16: Vần có âm đệm o, u (oa, oe, uê, uy, oai, oay, uya)",
            "chapter": "Tập 1 - Vần",
            "summary": "Đánh vần vần tròn môi oa, oe, uê, uy.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b17",
            "number": 17,
            "title": "Tuần 17: Vần oan, oăn, oat, oăt, oang, oăng, uân, uât, uyên, uyêt",
            "chapter": "Tập 1 - Vần",
            "summary": "Đọc và viết các vần phức hợp.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b18",
            "number": 18,
            "title": "Tuần 18: Ôn tập cuối học kì 1",
            "chapter": "Tập 1 - Vần",
            "summary": "Tổng kết kĩ năng đọc, viết chữ và vần Tiếng Việt 1 Tập 1.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b19",
            "number": 19,
            "title": "Bài 1: Tôi là học sinh lớp 1. Đọc: Ngôi nhà, Bạn của em",
            "chapter": "Tập 2 - Chủ điểm: Tôi và các bạn",
            "summary": "Đọc hiểu văn bản ngắn về bạn bè, trường lớp.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b20",
            "number": 20,
            "title": "Bài 2: Đôi tai xấu xí. Đọc: Chuyện của mây",
            "chapter": "Tập 2 - Chủ điểm: Tôi và các bạn",
            "summary": "Đọc hiểu và rút ra bài học về tự tin, yêu thương bạn bè.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b21",
            "number": 21,
            "title": "Bài 3: Giải thưởng. Đọc: Đôi bạn",
            "chapter": "Tập 2 - Chủ điểm: Tôi và các bạn",
            "summary": "Luyện đọc trơn, trả lời câu hỏi về tình bạn.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b22",
            "number": 22,
            "title": "Bài 4: Mẹ của em. Đọc: Bàn tay mẹ, Quà của bố",
            "chapter": "Tập 2 - Chủ điểm: Mái ấm gia đình",
            "summary": "Cảm nhận tình cảm yêu thương trong gia đình.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b23",
            "number": 23,
            "title": "Bài 5: Nụ hôn trên bàn tay. Đọc: Làm anh",
            "chapter": "Tập 2 - Chủ điểm: Mái ấm gia đình",
            "summary": "Kể chuyện gia đình và tập viết câu ngắn.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b24",
            "number": 24,
            "title": "Bài 6: Ngôi nhà của ông bà. Đọc: Cây bàng và lớp học",
            "chapter": "Tập 2 - Chủ điểm: Mái ấm gia đình",
            "summary": "Luyện đọc, chính tả phân biệt c/k, g/gh, ng/ngh.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b25",
            "number": 25,
            "title": "Bài 7: Trường em. Đọc: Giờ ra chơi",
            "chapter": "Tập 2 - Chủ điểm: Mái trường mến yêu",
            "summary": "Đọc hiểu về hoạt động ở trường tiểu học.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b26",
            "number": 26,
            "title": "Bài 8: Thầy giáo của em. Đọc: Lớp học trên đường",
            "chapter": "Tập 2 - Chủ điểm: Mái trường mến yêu",
            "summary": "Luyện đọc diễn cảm thơ và văn xuôi ngắn.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b27",
            "number": 27,
            "title": "Bài 9: Mùa xuân đến. Đọc: Hoa đào, hoa mai",
            "chapter": "Tập 2 - Chủ điểm: Thiên nhiên tươi đẹp",
            "summary": "Nhận biết dấu hiệu mùa xuân và từ ngữ miêu tả.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b28",
            "number": 28,
            "title": "Bài 10: Bầu trời và mặt đất. Đọc: Mưa, Cầu vồng",
            "chapter": "Tập 2 - Chủ điểm: Thiên nhiên tươi đẹp",
            "summary": "Tìm hiểu hiện tượng thiên nhiên qua bài đọc.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b29",
            "number": 29,
            "title": "Bài 11: Thế giới loài vật. Đọc: Chú chim sâu, Voi con",
            "chapter": "Tập 2 - Chủ điểm: Thiên nhiên tươi đẹp",
            "summary": "Đọc hiểu đặc điểm các loài vật quen thuộc.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b30",
            "number": 30,
            "title": "Bài 12: Quê hương em. Đọc: Cánh đồng lúa, Biển quê hương",
            "chapter": "Tập 2 - Chủ điểm: Đất nước và con người",
            "summary": "Tình yêu quê hương đất nước.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b31",
            "number": 31,
            "title": "Bài 13: Bác Hồ kính yêu. Đọc: Đêm nay Bác không ngủ (lược)",
            "chapter": "Tập 2 - Chủ điểm: Đất nước và con người",
            "summary": "Kính yêu Bác Hồ và thiếu nhi.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b32",
            "number": 32,
            "title": "Bài 14: Ôn tập và đánh giá cuối năm học lớp 1",
            "chapter": "Tập 2 - Ôn tập cuối năm",
            "summary": "Đọc thành tiếng, đọc hiểu và viết chính tả tổng hợp.",
            "questions": []
          }
        ]
      },
      {
        "id": "tnxh-1",
        "name": "Tự nhiên và Xã hội",
        "icon": "🌿",
        "lessons": [
          {
            "id": "tnxh-1-b1",
            "number": 1,
            "title": "Bài 1: Gia đình của em",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Các thành viên trong gia đình và tình cảm yêu thương gắn bó.",
            "questions": []
          },
          {
            "id": "tnxh-1-b2",
            "number": 2,
            "title": "Bài 2: Ngôi nhà của em",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Các phòng trong nhà, đồ dùng thiết yếu và giữ nhà gọn gàng.",
            "questions": []
          },
          {
            "id": "tnxh-1-b3",
            "number": 3,
            "title": "Bài 3: An toàn khi ở nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Phòng tránh bỏng, điện giật, vật sắc nhọn khi ở nhà.",
            "questions": []
          },
          {
            "id": "tnxh-1-b4",
            "number": 4,
            "title": "Bài 4: Ôn tập chủ đề Gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Tổng kết kiến thức về gia đình và an toàn ở nhà.",
            "questions": []
          },
          {
            "id": "tnxh-1-b5",
            "number": 5,
            "title": "Bài 5: Lớp học của em",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Đồ dùng học tập, giữ gìn vệ sinh lớp học.",
            "questions": []
          },
          {
            "id": "tnxh-1-b6",
            "number": 6,
            "title": "Bài 6: Trường học của em",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Các khu vực trong trường và người làm việc ở trường.",
            "questions": []
          },
          {
            "id": "tnxh-1-b7",
            "number": 7,
            "title": "Bài 7: Hoạt động ở trường",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Học tập, vui chơi và an toàn khi ở trường.",
            "questions": []
          },
          {
            "id": "tnxh-1-b8",
            "number": 8,
            "title": "Bài 8: Ôn tập chủ đề Trường học",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Ôn tập về trường lớp và thầy cô, bạn bè.",
            "questions": []
          },
          {
            "id": "tnxh-1-b9",
            "number": 9,
            "title": "Bài 9: Cuộc sống xung quanh em",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Cảnh quan và nghề nghiệp phổ biến ở địa phương.",
            "questions": []
          },
          {
            "id": "tnxh-1-b10",
            "number": 10,
            "title": "Bài 10: An toàn trên đường đi học",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Đi bộ trên vỉa hè, nhận biết đèn tín hiệu giao thông.",
            "questions": []
          },
          {
            "id": "tnxh-1-b11",
            "number": 11,
            "title": "Bài 11: Ôn tập chủ đề Cộng đồng địa phương",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Củng cố quy tắc an toàn giao thông và gắn bó cộng đồng.",
            "questions": []
          },
          {
            "id": "tnxh-1-b12",
            "number": 12,
            "title": "Bài 12: Cây xanh quanh em",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Các bộ phận bên ngoài của cây: rễ, thân, lá, hoa, quả.",
            "questions": []
          },
          {
            "id": "tnxh-1-b13",
            "number": 13,
            "title": "Bài 13: Chăm sóc và bảo vệ cây trồng",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Tưới nước, bón phân, không ngắt hoa bẻ cành.",
            "questions": []
          },
          {
            "id": "tnxh-1-b14",
            "number": 14,
            "title": "Bài 14: Con vật quanh em",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Đặc điểm bên ngoài của một số con vật quen thuộc.",
            "questions": []
          },
          {
            "id": "tnxh-1-b15",
            "number": 15,
            "title": "Bài 15: Chăm sóc và bảo vệ vật nuôi",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Cho vật nuôi ăn uống sạch sẽ, tiêm phòng.",
            "questions": []
          },
          {
            "id": "tnxh-1-b16",
            "number": 16,
            "title": "Bài 16: Ôn tập chủ đề Thực vật và động vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Tổng kết kiến thức về cây cối và con vật.",
            "questions": []
          },
          {
            "id": "tnxh-1-b17",
            "number": 17,
            "title": "Bài 17: Cơ thể của em",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Các bộ phận bên ngoài cơ thể người.",
            "questions": []
          },
          {
            "id": "tnxh-1-b18",
            "number": 18,
            "title": "Bài 18: Các giác quan của cơ thể",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "5 giác quan: thị giác, thính giác, khứu giác, vị giác, xúc giác.",
            "questions": []
          },
          {
            "id": "tnxh-1-b19",
            "number": 19,
            "title": "Bài 19: Chăm sóc và bảo vệ các giác quan",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ngồi học đúng tư thế, bảo vệ mắt, tai, mũi, lưỡi, da.",
            "questions": []
          },
          {
            "id": "tnxh-1-b20",
            "number": 20,
            "title": "Bài 20: Ăn uống hằng ngày",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ăn đủ chất, uống đủ nước để cơ thể khỏe mạnh.",
            "questions": []
          },
          {
            "id": "tnxh-1-b21",
            "number": 21,
            "title": "Bài 21: Vận động và nghỉ ngơi",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tập thể dục, ngủ đủ giấc, giữ vệ sinh cá nhân.",
            "questions": []
          },
          {
            "id": "tnxh-1-b22",
            "number": 22,
            "title": "Bài 22: Tự bảo vệ bản thân",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Nhận biết vùng riêng tư và phòng tránh xâm hại.",
            "questions": []
          },
          {
            "id": "tnxh-1-b23",
            "number": 23,
            "title": "Bài 23: Ôn tập chủ đề Con người và sức khỏe",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tổng kết giữ gìn sức khỏe.",
            "questions": []
          },
          {
            "id": "tnxh-1-b24",
            "number": 24,
            "title": "Bài 24: Bầu trời ban ngày, ban đêm",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Quan sát Mặt Trời, mây ban ngày; Mặt Trăng, ngôi sao ban đêm.",
            "questions": []
          },
          {
            "id": "tnxh-1-b25",
            "number": 25,
            "title": "Bài 25: Thời tiết",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Các hiện tượng nắng, mưa, nóng, lạnh, gió.",
            "questions": []
          },
          {
            "id": "tnxh-1-b26",
            "number": 26,
            "title": "Bài 26: Ứng phó với thời tiết",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Mặc trang phục phù hợp theo thời tiết nắng, mưa, rét.",
            "questions": []
          },
          {
            "id": "tnxh-1-b27",
            "number": 27,
            "title": "Bài 27: Ôn tập chủ đề Trái Đất và bầu trời",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Củng cố kiến thức bầu trời và thời tiết.",
            "questions": []
          }
        ]
      },
      {
        "id": "daoduc-1",
        "name": "Đạo đức",
        "icon": "💖",
        "lessons": [
          {
            "id": "daoduc-1-b1",
            "number": 1,
            "title": "Bài 1: Mái ấm gia đình",
            "chapter": "Chủ đề: Yêu thương gia đình",
            "summary": "Yêu thương, lễ phép với ông bà, cha mẹ, anh chị em.",
            "questions": []
          },
          {
            "id": "daoduc-1-b2",
            "number": 2,
            "title": "Bài 2: Quan tâm, chăm sóc người thân",
            "chapter": "Chủ đề: Yêu thương gia đình",
            "summary": "Giúp đỡ việc nhà vừa sức và hỏi thăm người thân.",
            "questions": []
          },
          {
            "id": "daoduc-1-b3",
            "number": 3,
            "title": "Bài 3: Tự giác làm việc của mình",
            "chapter": "Chủ đề: Tự giác",
            "summary": "Tự xếp sách vở, đánh răng rửa mặt, làm bài tập.",
            "questions": []
          },
          {
            "id": "daoduc-1-b4",
            "number": 4,
            "title": "Bài 4: Thật thà",
            "chapter": "Chủ đề: Thật thà",
            "summary": "Nói thật, không lấy đồ của người khác, nhận lỗi khi sai.",
            "questions": []
          },
          {
            "id": "daoduc-1-b5",
            "number": 5,
            "title": "Bài 5: Sinh hoạt đúng giờ",
            "chapter": "Chủ đề: Sinh hoạt nền nếp",
            "summary": "Đi học đúng giờ, ngủ đúng giờ, sắp xếp thời gian hợp lí.",
            "questions": []
          },
          {
            "id": "daoduc-1-b6",
            "number": 6,
            "title": "Bài 6: Thực hiện nội quy trường, lớp",
            "chapter": "Chủ đề: Thực hiện nội quy",
            "summary": "Chấp hành nội quy lớp học, giữ trật tự và vệ sinh.",
            "questions": []
          },
          {
            "id": "daoduc-1-b7",
            "number": 7,
            "title": "Bài 7: Phòng, tránh tai nạn thương tích",
            "chapter": "Chủ đề: Phòng tránh tai nạn",
            "summary": "Không nghịch vật sắc nhọn, ổ điện, ao hồ.",
            "questions": []
          },
          {
            "id": "daoduc-1-b8",
            "number": 8,
            "title": "Bài 8: Thực hành kĩ năng tự bảo vệ",
            "chapter": "Chủ đề: Phòng tránh tai nạn",
            "summary": "Nhận biết tình huống nguy hiểm và tìm sự giúp đỡ.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-1",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-1-b1",
            "number": 1,
            "title": "Unit 1: In the school playground",
            "chapter": "Unit 1: In the school playground",
            "summary": "Âm /b/ (ball, bike, book); chào hỏi 'Hi, I'm...'.",
            "questions": []
          },
          {
            "id": "tienganh-1-b2",
            "number": 2,
            "title": "Unit 2: In the dining room",
            "chapter": "Unit 2: In the dining room",
            "summary": "Âm /k/ (cake, car, cat, cup).",
            "questions": []
          },
          {
            "id": "tienganh-1-b3",
            "number": 3,
            "title": "Unit 3: At the street market",
            "chapter": "Unit 3: At the street market",
            "summary": "Âm /æ/ (apple, bag, can, hat).",
            "questions": []
          },
          {
            "id": "tienganh-1-b4",
            "number": 4,
            "title": "Unit 4: In the bedroom",
            "chapter": "Unit 4: In the bedroom",
            "summary": "Âm /d/ (desk, dog, door, duck).",
            "questions": []
          },
          {
            "id": "tienganh-1-b5",
            "number": 5,
            "title": "Unit 5: At the fish and chip shop",
            "chapter": "Unit 5: At the fish and chip shop",
            "summary": "Âm /ɪ/ (chicken, chips, fish, milk).",
            "questions": []
          },
          {
            "id": "tienganh-1-b6",
            "number": 6,
            "title": "Unit 6: In the classroom",
            "chapter": "Unit 6: In the classroom",
            "summary": "Âm /e/ (bell, pen, pencil, red).",
            "questions": []
          },
          {
            "id": "tienganh-1-b7",
            "number": 7,
            "title": "Unit 7: In the garden",
            "chapter": "Unit 7: In the garden",
            "summary": "Âm /g/ (garden, gate, girl, goat).",
            "questions": []
          },
          {
            "id": "tienganh-1-b8",
            "number": 8,
            "title": "Unit 8: In the park",
            "chapter": "Unit 8: In the park",
            "summary": "Âm /h/ (hair, hand, hat, head).",
            "questions": []
          },
          {
            "id": "tienganh-1-b9",
            "number": 9,
            "title": "Unit 9: In the shop",
            "chapter": "Unit 9: In the shop",
            "summary": "Âm /ɒ/ (clocks, locks, mops, pots).",
            "questions": []
          },
          {
            "id": "tienganh-1-b10",
            "number": 10,
            "title": "Unit 10: At the zoo",
            "chapter": "Unit 10: At the zoo",
            "summary": "Âm /m/ (mango, monkey, mother, mouse).",
            "questions": []
          },
          {
            "id": "tienganh-1-b11",
            "number": 11,
            "title": "Unit 11: At the bus stop",
            "chapter": "Unit 11: At the bus stop",
            "summary": "Âm /ʌ/ (bus, running, sun, truck).",
            "questions": []
          },
          {
            "id": "tienganh-1-b12",
            "number": 12,
            "title": "Unit 12: At the lake",
            "chapter": "Unit 12: At the lake",
            "summary": "Âm /l/ (lake, leaf, lemons, Lucy).",
            "questions": []
          },
          {
            "id": "tienganh-1-b13",
            "number": 13,
            "title": "Unit 13: In the school canteen",
            "chapter": "Unit 13: In the school canteen",
            "summary": "Âm /n/ (Nick, noodles, nuts).",
            "questions": []
          },
          {
            "id": "tienganh-1-b14",
            "number": 14,
            "title": "Unit 14: In the toy shop",
            "chapter": "Unit 14: In the toy shop",
            "summary": "Âm /t/ (teddy bear, tiger, top, turtle).",
            "questions": []
          },
          {
            "id": "tienganh-1-b15",
            "number": 15,
            "title": "Unit 15: At the football match",
            "chapter": "Unit 15: At the football match",
            "summary": "Âm /f/ (face, father, foot, football).",
            "questions": []
          },
          {
            "id": "tienganh-1-b16",
            "number": 16,
            "title": "Unit 16: At home",
            "chapter": "Unit 16: At home",
            "summary": "Âm /w/ (washing, water, window).",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-1",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-1-b1",
            "number": 1,
            "title": "Chủ đề 1: Âm thanh kì diệu",
            "chapter": "Chủ đề 1: Âm thanh kì diệu",
            "summary": "Nhận biết âm thanh tự nhiên và âm nhạc; hát bài Tiếng trống trường em; đọc nhạc mi-son.",
            "questions": []
          },
          {
            "id": "amnhac-1-b2",
            "number": 2,
            "title": "Chủ đề 2: Việt Nam yêu thương",
            "chapter": "Chủ đề 2: Việt Nam yêu thương",
            "summary": "Hát Quốc ca (nghe), Lý cây xanh; làm quen nhịp điệu dân ca Việt Nam.",
            "questions": []
          },
          {
            "id": "amnhac-1-b3",
            "number": 3,
            "title": "Chủ đề 3: Mái trường thân yêu",
            "chapter": "Chủ đề 3: Mái trường thân yêu",
            "summary": "Hát Mái trường em, Cô giáo như mẹ hiền; thực hành gõ đệm theo phách.",
            "questions": []
          },
          {
            "id": "amnhac-1-b4",
            "number": 4,
            "title": "Chủ đề 4: Vòng tay bè bạn",
            "chapter": "Chủ đề 4: Vòng tay bè bạn",
            "summary": "Hát Múa vui, Bạn ơi lắng nghe; thực hành đọc nhạc 3 nốt Đô-Rê-Mi.",
            "questions": []
          },
          {
            "id": "amnhac-1-b5",
            "number": 5,
            "title": "Chủ đề 5: Nhịp điệu mùa xuân",
            "chapter": "Chủ đề 5: Nhịp điệu mùa xuân",
            "summary": "Hát Sắp đến Tết rồi; cảm nhận nhịp điệu vui tươi ngày xuân.",
            "questions": []
          },
          {
            "id": "amnhac-1-b6",
            "number": 6,
            "title": "Chủ đề 6: Về miền dân ca",
            "chapter": "Chủ đề 6: Về miền dân ca",
            "summary": "Nghe và vận động theo dân ca Bắc Bộ, Trung Bộ, Nam Bộ; hát Xòe hoa.",
            "questions": []
          },
          {
            "id": "amnhac-1-b7",
            "number": 7,
            "title": "Chủ đề 7: Gia đình",
            "chapter": "Chủ đề 7: Gia đình",
            "summary": "Hát Ba ngọn nến lung linh, Mẹ đi vắng; gõ đệm bằng thanh phách.",
            "questions": []
          },
          {
            "id": "amnhac-1-b8",
            "number": 8,
            "title": "Chủ đề 8: Vui đón hè",
            "chapter": "Chủ đề 8: Vui đón hè",
            "summary": "Hát Chim chích bông, Hè về vui sao; ôn tập và biểu diễn cuối năm.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-1",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-1-b1",
            "number": 1,
            "title": "Chủ đề 1: Mĩ thuật trong nhà trường",
            "chapter": "Chủ đề 1: Mĩ thuật trong nhà trường",
            "summary": "Làm quen dụng cụ vẽ, đất nặn, giấy màu; nhận biết tranh vẽ trong trường học.",
            "questions": []
          },
          {
            "id": "mithuat-1-b2",
            "number": 2,
            "title": "Chủ đề 2: Sáng tạo từ những chấm màu",
            "chapter": "Chủ đề 2: Sáng tạo từ những chấm màu",
            "summary": "Sử dụng chấm màu tạo hình bông hoa, con vật, bức tranh đơn giản.",
            "questions": []
          },
          {
            "id": "mithuat-1-b3",
            "number": 3,
            "title": "Chủ đề 3: Nét vẽ của em",
            "chapter": "Chủ đề 3: Nét vẽ của em",
            "summary": "Nhận biết nét thẳng, nét cong, nét gấp khúc, nét xoắn ốc trong tạo hình.",
            "questions": []
          },
          {
            "id": "mithuat-1-b4",
            "number": 4,
            "title": "Chủ đề 4: Sáng tạo từ những hình cơ bản",
            "chapter": "Chủ đề 4: Sáng tạo từ những hình cơ bản",
            "summary": "Ghép hình tròn, vuông, tam giác, chữ nhật tạo ngôi nhà, đồ vật.",
            "questions": []
          },
          {
            "id": "mithuat-1-b5",
            "number": 5,
            "title": "Chủ đề 5: Màu cơ bản trong mĩ thuật",
            "chapter": "Chủ đề 5: Màu cơ bản trong mĩ thuật",
            "summary": "Nhận biết 3 màu cơ bản: đỏ, vàng, lam và cách phối màu đơn giản.",
            "questions": []
          },
          {
            "id": "mithuat-1-b6",
            "number": 6,
            "title": "Chủ đề 6: Sáng tạo từ những khối cơ bản",
            "chapter": "Chủ đề 6: Sáng tạo từ những khối cơ bản",
            "summary": "Nặn và tạo hình từ khối cầu, khối trụ, khối lập phương.",
            "questions": []
          },
          {
            "id": "mithuat-1-b7",
            "number": 7,
            "title": "Chủ đề 7: Hoa, quả",
            "chapter": "Chủ đề 7: Hoa, quả",
            "summary": "Quan sát, vẽ và nặn một số loại hoa, quả quen thuộc.",
            "questions": []
          },
          {
            "id": "mithuat-1-b8",
            "number": 8,
            "title": "Chủ đề 8: Người thân của em",
            "chapter": "Chủ đề 8: Người thân của em",
            "summary": "Vẽ chân dung hoặc hoạt động của người thân trong gia đình.",
            "questions": []
          },
          {
            "id": "mithuat-1-b9",
            "number": 9,
            "title": "Chủ đề 9: Em là học sinh lớp 1",
            "chapter": "Chủ đề 9: Em là học sinh lớp 1",
            "summary": "Sáng tạo sản phẩm mĩ thuật về hoạt động học tập, vui chơi lớp 1.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-1",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-1-b1",
            "number": 1,
            "title": "Vệ sinh cá nhân và an toàn khi tập luyện",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Trang phục gọn gàng, khởi động trước khi tập và vệ sinh sau vận động.",
            "questions": []
          },
          {
            "id": "gdtc-1-b2",
            "number": 2,
            "title": "Chủ đề 1: Đội hình đội ngũ",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Tư thế đứng nghiêm, đứng nghỉ; tập hợp hàng dọc, hàng ngang, quay các hướng.",
            "questions": []
          },
          {
            "id": "gdtc-1-b3",
            "number": 3,
            "title": "Chủ đề 2: Bài tập thể dục",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Động tác vươn thở, tay, chân, vặn mình, bụng, phối hợp, điều hòa.",
            "questions": []
          },
          {
            "id": "gdtc-1-b4",
            "number": 4,
            "title": "Chủ đề 3: Tư thế và kĩ năng vận động cơ bản",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Vận động đầu, cổ, tay, chân, đi thường, chạy nhẹ nhàng.",
            "questions": []
          },
          {
            "id": "gdtc-1-b5",
            "number": 5,
            "title": "Chủ đề 1: Môn Bóng rổ (Làm quen)",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Làm quen bóng, di chuyển không bóng, dẫn bóng, ném rổ hai tay trước ngực.",
            "questions": []
          },
          {
            "id": "gdtc-1-b6",
            "number": 6,
            "title": "Chủ đề 2: Môn Bơi (Làm quen nước)",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Làm quen với nước, nín thở, tập thở trong nước và giữ thăng bằng.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-1",
        "name": "Hoạt động trải nghiệm",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-1-b1",
            "number": 1,
            "title": "Chủ đề 1: Em và mái trường mến yêu",
            "chapter": "Chủ đề 1: Em và mái trường mến yêu",
            "summary": "Làm quen thầy cô, bạn bè, nội quy lớp học và khuôn viên trường tiểu học.",
            "questions": []
          },
          {
            "id": "hdtn-1-b2",
            "number": 2,
            "title": "Chủ đề 2: Em là học sinh lớp 1",
            "chapter": "Chủ đề 2: Em là học sinh lớp 1",
            "summary": "Giới thiệu bản thân, rèn nếp sống ngăn nắp và thói quen học tập tốt.",
            "questions": []
          },
          {
            "id": "hdtn-1-b3",
            "number": 3,
            "title": "Chủ đề 3: Thầy cô của em",
            "chapter": "Chủ đề 3: Thầy cô của em",
            "summary": "Thể hiện lòng biết ơn, lễ phép với thầy cô giáo và cán bộ nhà trường.",
            "questions": []
          },
          {
            "id": "hdtn-1-b4",
            "number": 4,
            "title": "Chủ đề 4: Tự chăm sóc bản thân",
            "chapter": "Chủ đề 4: Tự chăm sóc bản thân",
            "summary": "Thực hành vệ sinh răng miệng, rửa tay, mặc trang phục phù hợp thời tiết.",
            "questions": []
          },
          {
            "id": "hdtn-1-b5",
            "number": 5,
            "title": "Chủ đề 5: Gia đình yêu thương",
            "chapter": "Chủ đề 5: Gia đình yêu thương",
            "summary": "Quan tâm, giúp đỡ ông bà, cha mẹ những việc vừa sức ở nhà.",
            "questions": []
          },
          {
            "id": "hdtn-1-b6",
            "number": 6,
            "title": "Chủ đề 6: Quê hương của em",
            "chapter": "Chủ đề 6: Quê hương của em",
            "summary": "Tìm hiểu cảnh đẹp, truyền thống quê hương và giữ gìn vệ sinh nơi công cộng.",
            "questions": []
          },
          {
            "id": "hdtn-1-b7",
            "number": 7,
            "title": "Chủ đề 7: An toàn trong cuộc sống",
            "chapter": "Chủ đề 7: An toàn trong cuộc sống",
            "summary": "Nhận biết tình huống nguy hiểm ở nhà, trường học và cách phòng tránh.",
            "questions": []
          },
          {
            "id": "hdtn-1-b8",
            "number": 8,
            "title": "Chủ đề 8: Thiên nhiên quanh em",
            "chapter": "Chủ đề 8: Thiên nhiên quanh em",
            "summary": "Chăm sóc cây xanh, bảo vệ vật nuôi và giữ gìn môi trường xanh sạch.",
            "questions": []
          },
          {
            "id": "hdtn-1-b9",
            "number": 9,
            "title": "Chủ đề 9: Chào mùa hè vui",
            "chapter": "Chủ đề 9: Chào mùa hè vui",
            "summary": "Tổng kết năm học, lập kế hoạch nghỉ hè an toàn, bổ ích.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 2,
    "label": "Lớp 2",
    "level": "Tiểu học",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=2",
    "subjects": [
      {
        "id": "toan-2",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-2-b1",
            "number": 1,
            "title": "Bài 1: Ôn tập các số đến 100",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đọc, viết, phân tích chục - đơn vị và so sánh các số đến 100.",
            "questions": []
          },
          {
            "id": "toan-2-b2",
            "number": 2,
            "title": "Bài 2: Tia số. Số liền trước, số liền sau",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Nhận biết tia số, tìm số liền trước (bớt 1) và số liền sau (thêm 1).",
            "questions": []
          },
          {
            "id": "toan-2-b3",
            "number": 3,
            "title": "Bài 3: Các thành phần của phép cộng, phép trừ",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Số hạng - Tổng; Số bị trừ - Số trừ - Hiệu.",
            "questions": []
          },
          {
            "id": "toan-2-b4",
            "number": 4,
            "title": "Bài 4: Hơn, kém nhau bao nhiêu",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Giải bài toán tìm phần hơn hoặc kém nhau giữa hai số.",
            "questions": []
          },
          {
            "id": "toan-2-b5",
            "number": 5,
            "title": "Bài 5: Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đặt tính rồi tính cộng, trừ không nhớ.",
            "questions": []
          },
          {
            "id": "toan-2-b6",
            "number": 6,
            "title": "Bài 6: Luyện tập chung",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Củng cố kiến thức Chủ đề 1.",
            "questions": []
          },
          {
            "id": "toan-2-b7",
            "number": 7,
            "title": "Bài 7: Phép cộng (qua 10) trong phạm vi 20",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Tách số để gộp đủ 10 rồi cộng tiếp (ví dụ 9 + 4 = 13).",
            "questions": []
          },
          {
            "id": "toan-2-b8",
            "number": 8,
            "title": "Bài 8: Bảng cộng (qua 10)",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Thuộc bảng cộng qua 10.",
            "questions": []
          },
          {
            "id": "toan-2-b9",
            "number": 9,
            "title": "Bài 9: Bài toán về thêm, bớt một số đơn vị",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Giải bài toán có lời văn về thêm/bớt.",
            "questions": []
          },
          {
            "id": "toan-2-b10",
            "number": 10,
            "title": "Bài 10: Luyện tập chung",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Luyện tập cộng qua 10.",
            "questions": []
          },
          {
            "id": "toan-2-b11",
            "number": 11,
            "title": "Bài 11: Phép trừ (qua 10) trong phạm vi 20",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Thực hiện phép trừ qua 10 (ví dụ 13 - 5 = 8).",
            "questions": []
          },
          {
            "id": "toan-2-b12",
            "number": 12,
            "title": "Bài 12: Bảng trừ (qua 10)",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Thuộc bảng trừ qua 10.",
            "questions": []
          },
          {
            "id": "toan-2-b13",
            "number": 13,
            "title": "Bài 13: Bài toán về nhiều hơn, ít hơn một số đơn vị",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Bài toán nhiều hơn (cộng), ít hơn (trừ).",
            "questions": []
          },
          {
            "id": "toan-2-b14",
            "number": 14,
            "title": "Bài 14: Luyện tập chung",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Củng cố cộng trừ qua 10 trong phạm vi 20.",
            "questions": []
          },
          {
            "id": "toan-2-b15",
            "number": 15,
            "title": "Bài 15: Ki-lô-gam",
            "chapter": "Chủ đề 3: Làm quen với khối lượng, dung tích",
            "summary": "Đơn vị đo khối lượng kg và cách cân.",
            "questions": []
          },
          {
            "id": "toan-2-b16",
            "number": 16,
            "title": "Bài 16: Lít",
            "chapter": "Chủ đề 3: Làm quen với khối lượng, dung tích",
            "summary": "Đơn vị đo dung tích lít (l) và đong nước.",
            "questions": []
          },
          {
            "id": "toan-2-b17",
            "number": 17,
            "title": "Bài 17: Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít",
            "chapter": "Chủ đề 3: Làm quen với khối lượng, dung tích",
            "summary": "Thực hành cân và đong với kg, l.",
            "questions": []
          },
          {
            "id": "toan-2-b18",
            "number": 18,
            "title": "Bài 18: Luyện tập chung",
            "chapter": "Chủ đề 3: Làm quen với khối lượng, dung tích",
            "summary": "Ôn tập tính toán với kg và lít.",
            "questions": []
          },
          {
            "id": "toan-2-b19",
            "number": 19,
            "title": "Bài 19: Phép cộng (có nhớ) số có hai chữ số với số có một chữ số",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Cộng có nhớ sang hàng chục.",
            "questions": []
          },
          {
            "id": "toan-2-b20",
            "number": 20,
            "title": "Bài 20: Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Đặt tính cộng có nhớ trong phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-2-b21",
            "number": 21,
            "title": "Bài 21: Luyện tập chung",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Củng cố phép cộng có nhớ.",
            "questions": []
          },
          {
            "id": "toan-2-b22",
            "number": 22,
            "title": "Bài 22: Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Trừ có nhớ (mượn 1 chục).",
            "questions": []
          },
          {
            "id": "toan-2-b23",
            "number": 23,
            "title": "Bài 23: Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Đặt tính trừ có nhớ trong phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-2-b24",
            "number": 24,
            "title": "Bài 24: Luyện tập chung",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Củng cố cộng trừ có nhớ trong phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-2-b25",
            "number": 25,
            "title": "Bài 25: Điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng",
            "chapter": "Chủ đề 5: Làm quen với hình phẳng",
            "summary": "Nhận biết điểm, đoạn thẳng, đường thẳng, đường cong, 3 điểm thẳng hàng.",
            "questions": []
          },
          {
            "id": "toan-2-b26",
            "number": 26,
            "title": "Bài 26: Đường gấp khúc. Hình tứ giác",
            "chapter": "Chủ đề 5: Làm quen với hình phẳng",
            "summary": "Tính độ dài đường gấp khúc và nhận dạng hình tứ giác.",
            "questions": []
          },
          {
            "id": "toan-2-b27",
            "number": 27,
            "title": "Bài 27: Thực hành gấp, cắt, ghép, xếp hình. Vẽ đoạn thẳng",
            "chapter": "Chủ đề 5: Làm quen với hình phẳng",
            "summary": "Vẽ đoạn thẳng bằng thước có vạch cm.",
            "questions": []
          },
          {
            "id": "toan-2-b28",
            "number": 28,
            "title": "Bài 28: Luyện tập chung",
            "chapter": "Chủ đề 5: Làm quen với hình phẳng",
            "summary": "Củng cố hình phẳng.",
            "questions": []
          },
          {
            "id": "toan-2-b29",
            "number": 29,
            "title": "Bài 29: Ngày – giờ, giờ – phút",
            "chapter": "Chủ đề 6: Ngày – giờ, giờ – phút, ngày – tháng",
            "summary": "1 ngày = 24 giờ, xem đồng hồ giờ hơn/giờ rưỡi.",
            "questions": []
          },
          {
            "id": "toan-2-b30",
            "number": 30,
            "title": "Bài 30: Ngày – tháng",
            "chapter": "Chủ đề 6: Ngày – giờ, giờ – phút, ngày – tháng",
            "summary": "Xem lịch tháng, số ngày trong các tháng.",
            "questions": []
          },
          {
            "id": "toan-2-b31",
            "number": 31,
            "title": "Bài 31: Thực hành và trải nghiệm xem đồng hồ, xem lịch",
            "chapter": "Chủ đề 6: Ngày – giờ, giờ – phút, ngày – tháng",
            "summary": "Ứng dụng xem giờ và lịch.",
            "questions": []
          },
          {
            "id": "toan-2-b32",
            "number": 32,
            "title": "Bài 32: Luyện tập chung",
            "chapter": "Chủ đề 6: Ngày – giờ, giờ – phút, ngày – tháng",
            "summary": "Củng cố đơn vị thời gian.",
            "questions": []
          },
          {
            "id": "toan-2-b33",
            "number": 33,
            "title": "Bài 33: Ôn tập phép cộng, phép trừ trong phạm vi 20, 100",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập cộng trừ HK1.",
            "questions": []
          },
          {
            "id": "toan-2-b34",
            "number": 34,
            "title": "Bài 34: Ôn tập hình phẳng",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập hình phẳng HK1.",
            "questions": []
          },
          {
            "id": "toan-2-b35",
            "number": 35,
            "title": "Bài 35: Ôn tập đo lường",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập kg, lít, cm, giờ, lịch.",
            "questions": []
          },
          {
            "id": "toan-2-b36",
            "number": 36,
            "title": "Bài 36: Ôn tập chung",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Tổng ôn HK1 Toán 2.",
            "questions": []
          },
          {
            "id": "toan-2-b37",
            "number": 37,
            "title": "Bài 37: Phép nhân",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Ý nghĩa phép nhân là tổng các số hạng bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-2-b38",
            "number": 38,
            "title": "Bài 38: Thừa số, tích",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Tên gọi thành phần trong phép nhân.",
            "questions": []
          },
          {
            "id": "toan-2-b39",
            "number": 39,
            "title": "Bài 39: Bảng nhân 2",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Thuộc và vận dụng bảng nhân 2.",
            "questions": []
          },
          {
            "id": "toan-2-b40",
            "number": 40,
            "title": "Bài 40: Bảng nhân 5",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Thuộc và vận dụng bảng nhân 5.",
            "questions": []
          },
          {
            "id": "toan-2-b41",
            "number": 41,
            "title": "Bài 41: Phép chia",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Ý nghĩa phép chia đều thành các phần bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-2-b42",
            "number": 42,
            "title": "Bài 42: Số bị chia, số chia, thương",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Tên gọi thành phần trong phép chia.",
            "questions": []
          },
          {
            "id": "toan-2-b43",
            "number": 43,
            "title": "Bài 43: Bảng chia 2",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Thuộc và vận dụng bảng chia 2.",
            "questions": []
          },
          {
            "id": "toan-2-b44",
            "number": 44,
            "title": "Bài 44: Bảng chia 5",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Thuộc và vận dụng bảng chia 5.",
            "questions": []
          },
          {
            "id": "toan-2-b45",
            "number": 45,
            "title": "Bài 45: Luyện tập chung",
            "chapter": "Chủ đề 8: Phép nhân, phép chia",
            "summary": "Củng cố bảng nhân, chia 2 và 5.",
            "questions": []
          },
          {
            "id": "toan-2-b46",
            "number": 46,
            "title": "Bài 46: Khối trụ, khối cầu",
            "chapter": "Chủ đề 9: Làm quen với hình khối",
            "summary": "Nhận dạng khối trụ, khối cầu trong thực tế.",
            "questions": []
          },
          {
            "id": "toan-2-b47",
            "number": 47,
            "title": "Bài 47: Luyện tập chung",
            "chapter": "Chủ đề 9: Làm quen với hình khối",
            "summary": "Củng cố nhận diện hình khối.",
            "questions": []
          },
          {
            "id": "toan-2-b48",
            "number": 48,
            "title": "Bài 48: Đơn vị, chục, trăm, nghìn",
            "chapter": "Chủ đề 10: Các số trong phạm vi 1 000",
            "summary": "10 trăm = 1 nghìn (1000).",
            "questions": []
          },
          {
            "id": "toan-2-b49",
            "number": 49,
            "title": "Bài 49: Các số tròn trăm, tròn chục",
            "chapter": "Chủ đề 10: Các số trong phạm vi 1 000",
            "summary": "Đọc, viết các số tròn trăm, tròn chục đến 1000.",
            "questions": []
          },
          {
            "id": "toan-2-b50",
            "number": 50,
            "title": "Bài 50: So sánh các số tròn trăm, tròn chục",
            "chapter": "Chủ đề 10: Các số trong phạm vi 1 000",
            "summary": "So sánh các số tròn trăm, tròn chục.",
            "questions": []
          },
          {
            "id": "toan-2-b51",
            "number": 51,
            "title": "Bài 51: Số có ba chữ số",
            "chapter": "Chủ đề 10: Các số trong phạm vi 1 000",
            "summary": "Đọc, viết số có 3 chữ số gồm trăm, chục, đơn vị.",
            "questions": []
          },
          {
            "id": "toan-2-b52",
            "number": 52,
            "title": "Bài 52: Viết số thành tổng các trăm, chục, đơn vị",
            "chapter": "Chủ đề 10: Các số trong phạm vi 1 000",
            "summary": "Phân tích cấu tạo thập phân số có 3 chữ số.",
            "questions": []
          },
          {
            "id": "toan-2-b53",
            "number": 53,
            "title": "Bài 53: So sánh các số có ba chữ số",
            "chapter": "Chủ đề 10: Các số trong phạm vi 1 000",
            "summary": "So sánh hàng trăm -> hàng chục -> hàng đơn vị.",
            "questions": []
          },
          {
            "id": "toan-2-b54",
            "number": 54,
            "title": "Bài 54: Luyện tập chung",
            "chapter": "Chủ đề 10: Các số trong phạm vi 1 000",
            "summary": "Củng cố số trong phạm vi 1000.",
            "questions": []
          },
          {
            "id": "toan-2-b55",
            "number": 55,
            "title": "Bài 55: Đề-xi-mét. Mét. Ki-lô-mét",
            "chapter": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
            "summary": "1m = 10dm = 100cm; 1km = 1000m.",
            "questions": []
          },
          {
            "id": "toan-2-b56",
            "number": 56,
            "title": "Bài 56: Giới thiệu tiền Việt Nam",
            "chapter": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
            "summary": "Nhận biết mệnh giá tiền Việt Nam thông dụng.",
            "questions": []
          },
          {
            "id": "toan-2-b57",
            "number": 57,
            "title": "Bài 57: Thực hành và trải nghiệm đo độ dài",
            "chapter": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
            "summary": "Ước lượng và đo với dm, m.",
            "questions": []
          },
          {
            "id": "toan-2-b58",
            "number": 58,
            "title": "Bài 58: Luyện tập chung",
            "chapter": "Chủ đề 11: Độ dài và đơn vị đo độ dài. Tiền Việt Nam",
            "summary": "Ôn tập đơn vị đo độ dài và tiền tệ.",
            "questions": []
          },
          {
            "id": "toan-2-b59",
            "number": 59,
            "title": "Bài 59: Phép cộng (không nhớ) trong phạm vi 1 000",
            "chapter": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
            "summary": "Đặt tính cộng không nhớ số có 3 chữ số.",
            "questions": []
          },
          {
            "id": "toan-2-b60",
            "number": 60,
            "title": "Bài 60: Phép cộng (có nhớ) trong phạm vi 1 000",
            "chapter": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
            "summary": "Đặt tính cộng có nhớ 1 lần.",
            "questions": []
          },
          {
            "id": "toan-2-b61",
            "number": 61,
            "title": "Bài 61: Phép trừ (không nhớ) trong phạm vi 1 000",
            "chapter": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
            "summary": "Đặt tính trừ không nhớ số có 3 chữ số.",
            "questions": []
          },
          {
            "id": "toan-2-b62",
            "number": 62,
            "title": "Bài 62: Phép trừ (có nhớ) trong phạm vi 1 000",
            "chapter": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
            "summary": "Đặt tính trừ có nhớ 1 lần.",
            "questions": []
          },
          {
            "id": "toan-2-b63",
            "number": 63,
            "title": "Bài 63: Luyện tập chung",
            "chapter": "Chủ đề 12: Phép cộng, phép trừ trong phạm vi 1 000",
            "summary": "Củng cố cộng trừ phạm vi 1000.",
            "questions": []
          },
          {
            "id": "toan-2-b64",
            "number": 64,
            "title": "Bài 64: Thu thập, phân loại, kiểm đếm số liệu",
            "chapter": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Phân loại và kiểm đếm đối tượng.",
            "questions": []
          },
          {
            "id": "toan-2-b65",
            "number": 65,
            "title": "Bài 65: Biểu đồ tranh",
            "chapter": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Đọc và nhận xét biểu đồ tranh.",
            "questions": []
          },
          {
            "id": "toan-2-b66",
            "number": 66,
            "title": "Bài 66: Chắc chắn, có thể, không thể",
            "chapter": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Mô tả khả năng xảy ra của sự kiện.",
            "questions": []
          },
          {
            "id": "toan-2-b67",
            "number": 67,
            "title": "Bài 67: Thực hành và trải nghiệm thu thập, phân loại, kiểm đếm số liệu",
            "chapter": "Chủ đề 13: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Thực hành thống kê.",
            "questions": []
          },
          {
            "id": "toan-2-b68",
            "number": 68,
            "title": "Bài 68: Ôn tập các số trong phạm vi 1 000",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Ôn tập số có 3 chữ số.",
            "questions": []
          },
          {
            "id": "toan-2-b69",
            "number": 69,
            "title": "Bài 69: Ôn tập phép cộng, phép trừ trong phạm vi 100",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Ôn tập cộng trừ phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-2-b70",
            "number": 70,
            "title": "Bài 70: Ôn tập phép cộng, phép trừ trong phạm vi 1 000",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Ôn tập cộng trừ phạm vi 1000.",
            "questions": []
          },
          {
            "id": "toan-2-b71",
            "number": 71,
            "title": "Bài 71: Ôn tập phép nhân, phép chia",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Ôn tập nhân chia bảng 2 và 5.",
            "questions": []
          },
          {
            "id": "toan-2-b72",
            "number": 72,
            "title": "Bài 72: Ôn tập hình học",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Ôn tập hình phẳng và hình khối.",
            "questions": []
          },
          {
            "id": "toan-2-b73",
            "number": 73,
            "title": "Bài 73: Ôn tập đo lường",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Ôn tập đơn vị đo và tiền tệ.",
            "questions": []
          },
          {
            "id": "toan-2-b74",
            "number": 74,
            "title": "Bài 74: Ôn tập kiểm đếm số liệu và lựa chọn khả năng",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Ôn tập thống kê xác suất.",
            "questions": []
          },
          {
            "id": "toan-2-b75",
            "number": 75,
            "title": "Bài 75: Ôn tập chung",
            "chapter": "Chủ đề 14: Ôn tập cuối năm",
            "summary": "Tổng ôn Toán lớp 2.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-2",
        "name": "Tiếng Việt",
        "icon": "📚",
        "lessons": [
          {
            "id": "tiengviet-2-b1",
            "number": 1,
            "title": "Bài 1: Tôi là học sinh lớp 2",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Tâm trạng háo hức, tự hào ngày đầu lên lớp 2.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b2",
            "number": 2,
            "title": "Bài 2: Ngày hôm qua đâu rồi?",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Quý trọng thời gian qua những việc làm có ích mỗi ngày.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b3",
            "number": 3,
            "title": "Bài 3: Niềm vui của Bi và Bống",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Tình cảm anh em chia sẻ niềm vui tuổi thơ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b4",
            "number": 4,
            "title": "Bài 4: Làm việc thật là vui",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Mọi người, mọi vật xung quanh đều làm việc chăm chỉ mang lại niềm vui.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b5",
            "number": 5,
            "title": "Bài 5: Em có xinh không?",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Vẻ đẹp tâm hồn quan trọng hơn vẻ bề ngoài.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b6",
            "number": 6,
            "title": "Bài 6: Một giờ học",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Sự tự tin và khích lệ của thầy cô giúp học sinh tiến bộ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b7",
            "number": 7,
            "title": "Bài 7: Cây xấu hổ",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Quan sát thiên nhiên và cảm xúc của cây xấu hổ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b8",
            "number": 8,
            "title": "Bài 8: Cầu thủ dự bị",
            "chapter": "Tập 1 - Em lớn lên từng ngày",
            "summary": "Tinh thần cố gắng luyện tập và đoàn kết đồng đội.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b9",
            "number": 9,
            "title": "Bài 9: Cô giáo lớp em",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Tình cảm yêu thương, tận tụy của cô giáo.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b10",
            "number": 10,
            "title": "Bài 10: Thời khóa biểu",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Cách đọc thời khóa biểu và sắp xếp giờ học.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b11",
            "number": 11,
            "title": "Bài 11: Cái trống trường em",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Sự gắn bó của cái trống trường với học sinh.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b12",
            "number": 12,
            "title": "Bài 12: Danh sách học sinh",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Tìm hiểu cách lập và đọc danh sách tổ/lớp.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b13",
            "number": 13,
            "title": "Bài 13: Yêu lắm trường ơi!",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Vẻ đẹp bình dị của ngôi trường thân yêu.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b14",
            "number": 14,
            "title": "Bài 14: Em học vẽ",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Niềm vui sáng tạo qua nét vẽ tuổi thơ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b15",
            "number": 15,
            "title": "Bài 15: Cuốn sách của em",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Cấu tạo cuốn sách (bìa, mục lục, trang sách) và giữ gìn sách.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b16",
            "number": 16,
            "title": "Bài 16: Khi trang sách mở ra",
            "chapter": "Tập 1 - Đi học vui sao",
            "summary": "Lợi ích của việc đọc sách mở mang tri thức.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b17",
            "number": 17,
            "title": "Bài 17: Gọi bạn",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Tình bạn gắn bó, thủy chung của Dê Trắng và Bê Vàng.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b18",
            "number": 18,
            "title": "Bài 18: Tớ nhớ cậu",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Tình bạn đẹp dù ở xa nhau vẫn nhớ về nhau.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b19",
            "number": 19,
            "title": "Bài 19: Chữ A và những người bạn",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Sự đoàn kết tạo nên ý nghĩa của tập thể.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b20",
            "number": 20,
            "title": "Bài 20: Nhím nâu kết bạn",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Mạnh dạn mở lòng sẽ tìm được bạn tốt.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b21",
            "number": 21,
            "title": "Bài 21: Thả diều",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Trò chơi dân gian thả diều trên cánh đồng quê hương.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b22",
            "number": 22,
            "title": "Bài 22: Tớ là lê-gô",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Đồ chơi xếp hình phát triển trí tưởng tượng.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b23",
            "number": 23,
            "title": "Bài 23: Rồng rắn lên mây",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Trò chơi dân gian rèn luyện sự nhanh nhẹn, đoàn kết.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b24",
            "number": 24,
            "title": "Bài 24: Nặn đồ chơi",
            "chapter": "Tập 1 - Niềm vui tuổi thơ",
            "summary": "Khéo tay sáng tạo đồ chơi từ đất nặn.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b25",
            "number": 25,
            "title": "Bài 25: Sự tích hoa tỉ muội",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Tình cảm chị em gắn bó, nhường nhịn nhau.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b26",
            "number": 26,
            "title": "Bài 26: Em mang về yêu thương",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Niềm vui đón em nhỏ chào đời trong gia đình.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b27",
            "number": 27,
            "title": "Bài 27: Mẹ",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Sự hi sinh thầm lặng và tình yêu của mẹ dành cho con.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b28",
            "number": 28,
            "title": "Bài 28: Trò chơi của bố",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Kỉ niệm ấm áp bên bố qua trò chơi tuổi thơ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b29",
            "number": 29,
            "title": "Bài 29: Cánh cửa nhớ bà",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Tình cảm kính yêu, nhớ thương bà.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b30",
            "number": 30,
            "title": "Bài 30: Thương ông",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Lòng hiếu thảo, quan tâm chăm sóc ông.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b31",
            "number": 31,
            "title": "Bài 31: Ánh sáng của yêu thương",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Sáng kiến thông minh và tình yêu thương mẹ của Ê-đi-xơn.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b32",
            "number": 32,
            "title": "Bài 32: Chơi chong chóng",
            "chapter": "Tập 1 - Mái ấm gia đình",
            "summary": "Niềm vui gia đình cùng làm và chơi chong chóng.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b33",
            "number": 33,
            "title": "Bài 1 (T2): Chuyện bốn mùa",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Đặc trưng bốn mùa Xuân, Hạ, Thu, Đông.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b34",
            "number": 34,
            "title": "Bài 2 (T2): Mùa nước nổi",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Vẻ đẹp thiên nhiên và sinh hoạt miền Tây mùa nước nổi.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b35",
            "number": 35,
            "title": "Bài 3 (T2): Họa mi hót",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Tiếng hót trong trẻo của chim họa mi báo hiệu mùa xuân.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b36",
            "number": 36,
            "title": "Bài 4 (T2): Tết đến rồi",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Phong tục đón Tết cổ truyền ở các vùng miền Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b37",
            "number": 37,
            "title": "Bài 5 (T2): Giọt nước và biển lớn",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Ý nghĩa của sự đoàn kết và không tự cao.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b38",
            "number": 38,
            "title": "Bài 6 (T2): Mùa vàng",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Cảnh đồng lúa chín vàng trĩu hạt ngày mùa.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b39",
            "number": 39,
            "title": "Bài 7 (T2): Hạt thóc",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Quá trình làm ra hạt gạo và lòng biết ơn người nông dân.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b40",
            "number": 40,
            "title": "Bài 8 (T2): Lũy tre",
            "chapter": "Tập 2 - Vẻ đẹp quanh em",
            "summary": "Hình ảnh lũy tre gắn bó với làng quê Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b41",
            "number": 41,
            "title": "Bài 9 (T2): Vè chim",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Đặc điểm các loài chim qua bài vè dân gian.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b42",
            "number": 42,
            "title": "Bài 10 (T2): Khủng long",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Tìm hiểu loài động vật tiền sử khủng long.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b43",
            "number": 43,
            "title": "Bài 11 (T2): Sự tích cây thì là",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Truyện giải thích tên gọi cây thì là.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b44",
            "number": 44,
            "title": "Bài 12 (T2): Bờ tre đón khách",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Sự sống nhộn nhịp của các loài chim, cò bên bờ tre.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b45",
            "number": 45,
            "title": "Bài 13 (T2): Tiếng chổi tre",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Biết ơn cô lao công giữ gìn đường phố sạch đẹp.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b46",
            "number": 46,
            "title": "Bài 14 (T2): Cỏ non cười rồi",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Bảo vệ thảm cỏ, cây xanh nơi công cộng.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b47",
            "number": 47,
            "title": "Bài 15 (T2): Những con sao biển",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Hành động nhỏ bé góp phần cứu sống sinh vật biển.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b48",
            "number": 48,
            "title": "Bài 16 (T2): Tạm biệt cánh cam",
            "chapter": "Tập 2 - Hành tinh xanh của em",
            "summary": "Tình yêu thiên nhiên và các loài côn trùng có ích.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b49",
            "number": 49,
            "title": "Bài 17 (T2): Những cách chào độc đáo",
            "chapter": "Tập 2 - Giao tiếp và kết nối",
            "summary": "Văn hóa chào hỏi của các nước trên thế giới.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b50",
            "number": 50,
            "title": "Bài 18 (T2): Thư viện biết đi",
            "chapter": "Tập 2 - Giao tiếp và kết nối",
            "summary": "Mô hình thư viện lưu động mang sách đến vùng xa.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b51",
            "number": 51,
            "title": "Bài 19 (T2): Cảm ơn anh hà mã",
            "chapter": "Tập 2 - Giao tiếp và kết nối",
            "summary": "Lòng biết ơn và lời cảm ơn chân thành.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b52",
            "number": 52,
            "title": "Bài 20 (T2): Từ chú bồ câu đến in-tơ-nét",
            "chapter": "Tập 2 - Giao tiếp và kết nối",
            "summary": "Lịch sử phát triển phương tiện liên lạc của con người.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b53",
            "number": 53,
            "title": "Bài 21 (T2): Mai An Tiêm",
            "chapter": "Tập 2 - Con người Việt Nam",
            "summary": "Tinh thần tự lực, vượt khó của Mai An Tiêm.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b54",
            "number": 54,
            "title": "Bài 22 (T2): Thư gửi bố ngoài đảo",
            "chapter": "Tập 2 - Con người Việt Nam",
            "summary": "Tình cảm gia đình hướng về người lính biển đảo.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b55",
            "number": 55,
            "title": "Bài 23 (T2): Bóp nát quả cam",
            "chapter": "Tập 2 - Con người Việt Nam",
            "summary": "Lòng yêu nước, căm thù giặc của Trần Quốc Toản.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b56",
            "number": 56,
            "title": "Bài 24 (T2): Chiếc rễ đa tròn",
            "chapter": "Tập 2 - Con người Việt Nam",
            "summary": "Tình yêu thiên nhiên và tấm lòng nhân hậu của Bác Hồ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b57",
            "number": 57,
            "title": "Bài 25 (T2): Đất nước chúng mình",
            "chapter": "Tập 2 - Việt Nam quê hương em",
            "summary": "Vẻ đẹp non sông gấm vóc Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b58",
            "number": 58,
            "title": "Bài 26 (T2): Trên các miền đất nước",
            "chapter": "Tập 2 - Việt Nam quê hương em",
            "summary": "Đặc sản, danh lam thắng cảnh ba miền Bắc - Trung - Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b59",
            "number": 59,
            "title": "Bài 27 (T2): Chuyện quả bầu",
            "chapter": "Tập 2 - Việt Nam quê hương em",
            "summary": "Truyền thuyết nguồn gốc chung của các dân tộc Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b60",
            "number": 60,
            "title": "Bài 28 (T2): Khám phá đáy biển ở Trường Sa",
            "chapter": "Tập 2 - Việt Nam quê hương em",
            "summary": "Vẻ đẹp rạn san hô và sinh vật biển Trường Sa.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b61",
            "number": 61,
            "title": "Bài 29 (T2): Hồ Gươm",
            "chapter": "Tập 2 - Việt Nam quê hương em",
            "summary": "Vẻ đẹp cổ kính, thơ mộng của Hồ Gươm, Hà Nội.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b62",
            "number": 62,
            "title": "Bài 30 (T2): Cánh đồng quê em",
            "chapter": "Tập 2 - Việt Nam quê hương em",
            "summary": "Vẻ đẹp bình yên của cánh đồng quê hương.",
            "questions": []
          }
        ]
      },
      {
        "id": "tnxh-2",
        "name": "Tự nhiên và Xã hội",
        "icon": "🌿",
        "lessons": [
          {
            "id": "tnxh-2-b1",
            "number": 1,
            "title": "Bài 1: Các thế hệ trong gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Gia đình 2 thế hệ, 3 thế hệ và sự gắn kết.",
            "questions": []
          },
          {
            "id": "tnxh-2-b2",
            "number": 2,
            "title": "Bài 2: Nghề nghiệp của người lớn trong gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Tôn trọng nghề nghiệp của người thân.",
            "questions": []
          },
          {
            "id": "tnxh-2-b3",
            "number": 3,
            "title": "Bài 3: Phòng tránh ngộ độc khi ở nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Không ăn uống đồ ôi thiu, thuốc hay hóa chất không rõ.",
            "questions": []
          },
          {
            "id": "tnxh-2-b4",
            "number": 4,
            "title": "Bài 4: Giữ sạch nhà ở",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Quét dọn, sắp xếp đồ đạc gọn gàng.",
            "questions": []
          },
          {
            "id": "tnxh-2-b5",
            "number": 5,
            "title": "Bài 5: Ôn tập chủ đề Gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Củng cố kiến thức Gia đình.",
            "questions": []
          },
          {
            "id": "tnxh-2-b6",
            "number": 6,
            "title": "Bài 6: Chào đón ngày khai giảng",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Các sự kiện lớn tại trường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b7",
            "number": 7,
            "title": "Bài 7: Ngày hội đọc sách của chúng em",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Tham gia sự kiện văn hóa đọc ở trường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b8",
            "number": 8,
            "title": "Bài 8: An toàn khi ở trường",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Phòng tránh ngã, xô đẩy khi vui chơi ở trường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b9",
            "number": 9,
            "title": "Bài 9: Giữ vệ sinh trường học",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Bỏ rác đúng nơi quy định, trồng cây xanh.",
            "questions": []
          },
          {
            "id": "tnxh-2-b10",
            "number": 10,
            "title": "Bài 10: Ôn tập chủ đề Trường học",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Ôn tập chủ đề Trường học.",
            "questions": []
          },
          {
            "id": "tnxh-2-b11",
            "number": 11,
            "title": "Bài 11: Hoạt động mua bán hàng hóa",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Nơi mua bán và lựa chọn hàng hóa an toàn.",
            "questions": []
          },
          {
            "id": "tnxh-2-b12",
            "number": 12,
            "title": "Bài 12: Các phương tiện và đường giao thông",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Đường bộ, đường sắt, đường thủy, đường hàng không.",
            "questions": []
          },
          {
            "id": "tnxh-2-b13",
            "number": 13,
            "title": "Bài 13: Tham gia giao thông an toàn",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Biển báo giao thông cơ bản.",
            "questions": []
          },
          {
            "id": "tnxh-2-b14",
            "number": 14,
            "title": "Bài 14: Ôn tập chủ đề Cộng đồng địa phương",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Ôn tập giao thông và mua bán.",
            "questions": []
          },
          {
            "id": "tnxh-2-b15",
            "number": 15,
            "title": "Bài 15: Thực vật sống ở đâu?",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Môi trường sống trên cạn và dưới nước của thực vật.",
            "questions": []
          },
          {
            "id": "tnxh-2-b16",
            "number": 16,
            "title": "Bài 16: Động vật sống ở đâu?",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Môi trường sống của động vật.",
            "questions": []
          },
          {
            "id": "tnxh-2-b17",
            "number": 17,
            "title": "Bài 17: Bảo vệ môi trường sống của thực vật và động vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Không xả rác, bảo vệ rừng và nguồn nước.",
            "questions": []
          },
          {
            "id": "tnxh-2-b18",
            "number": 18,
            "title": "Bài 18: Ôn tập chủ đề Thực vật và động vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Ôn tập môi trường sống.",
            "questions": []
          },
          {
            "id": "tnxh-2-b19",
            "number": 19,
            "title": "Bài 19: Cơ quan vận động",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Hệ cơ và bộ xương giúp cơ thể cử động.",
            "questions": []
          },
          {
            "id": "tnxh-2-b20",
            "number": 20,
            "title": "Bài 20: Chăm sóc, bảo vệ cơ quan vận động",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ngồi học đúng tư thế phòng cong vẹo cột sống.",
            "questions": []
          },
          {
            "id": "tnxh-2-b21",
            "number": 21,
            "title": "Bài 21: Cơ quan hô hấp",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Mũi, khí quản, phế quản, hai lá phổi.",
            "questions": []
          },
          {
            "id": "tnxh-2-b22",
            "number": 22,
            "title": "Bài 22: Chăm sóc, bảo vệ cơ quan hô hấp",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Giữ ấm cổ ngực, tránh khói bụi.",
            "questions": []
          },
          {
            "id": "tnxh-2-b23",
            "number": 23,
            "title": "Bài 23: Cơ quan bài tiết nước tiểu",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Thận, ống dẫn nước tiểu, bóng đái; uống đủ nước.",
            "questions": []
          },
          {
            "id": "tnxh-2-b24",
            "number": 24,
            "title": "Bài 24: Ôn tập chủ đề Con người và sức khỏe",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ôn tập các cơ quan trong cơ thể.",
            "questions": []
          },
          {
            "id": "tnxh-2-b25",
            "number": 25,
            "title": "Bài 25: Các mùa trong năm",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Đặc điểm 4 mùa Xuân, Hạ, Thu, Đông.",
            "questions": []
          },
          {
            "id": "tnxh-2-b26",
            "number": 26,
            "title": "Bài 26: Một số thiên tai thường gặp",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Bão, lũ lụt, hạn hán và cách phòng tránh.",
            "questions": []
          },
          {
            "id": "tnxh-2-b27",
            "number": 27,
            "title": "Bài 27: Ôn tập chủ đề Trái Đất và bầu trời",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Ôn tập mùa và thiên tai.",
            "questions": []
          }
        ]
      },
      {
        "id": "daoduc-2",
        "name": "Đạo đức",
        "icon": "💖",
        "lessons": [
          {
            "id": "daoduc-2-b1",
            "number": 1,
            "title": "Bài 1: Vẻ đẹp quê hương em",
            "chapter": "Chủ đề 1: Quê hương em",
            "summary": "Tự hào về cảnh đẹp và truyền thống quê hương.",
            "questions": []
          },
          {
            "id": "daoduc-2-b2",
            "number": 2,
            "title": "Bài 2: Em yêu quê hương",
            "chapter": "Chủ đề 1: Quê hương em",
            "summary": "Bảo vệ cảnh quan, giữ vệ sinh quê hương.",
            "questions": []
          },
          {
            "id": "daoduc-2-b3",
            "number": 3,
            "title": "Bài 3: Kính trọng thầy giáo, cô giáo",
            "chapter": "Chủ đề 2: Kính trọng thầy giáo, cô giáo và yêu quý bạn bè",
            "summary": "Lễ phép, vâng lời và biết ơn thầy cô.",
            "questions": []
          },
          {
            "id": "daoduc-2-b4",
            "number": 4,
            "title": "Bài 4: Yêu quý bạn bè",
            "chapter": "Chủ đề 2: Kính trọng thầy giáo, cô giáo và yêu quý bạn bè",
            "summary": "Đoàn kết, giúp đỡ bạn bè cùng tiến bộ.",
            "questions": []
          },
          {
            "id": "daoduc-2-b5",
            "number": 5,
            "title": "Bài 5: Quý trọng thời gian",
            "chapter": "Chủ đề 3: Quý trọng thời gian",
            "summary": "Lập thời gian biểu và không lãng phí thời gian.",
            "questions": []
          },
          {
            "id": "daoduc-2-b6",
            "number": 6,
            "title": "Bài 6: Nhận lỗi và sửa lỗi",
            "chapter": "Chủ đề 4: Nhận lỗi và sửa lỗi",
            "summary": "Dũng cảm nhận lỗi và khắc phục sai sót.",
            "questions": []
          },
          {
            "id": "daoduc-2-b7",
            "number": 7,
            "title": "Bài 7: Bảo quản đồ dùng cá nhân",
            "chapter": "Chủ đề 5: Bảo quản đồ dùng cá nhân và gia đình",
            "summary": "Giữ gìn sách vở, quần áo, đồ chơi.",
            "questions": []
          },
          {
            "id": "daoduc-2-b8",
            "number": 8,
            "title": "Bài 8: Bảo quản đồ dùng gia đình",
            "chapter": "Chủ đề 5: Bảo quản đồ dùng cá nhân và gia đình",
            "summary": "Sử dụng cẩn thận, tiết kiệm đồ dùng trong nhà.",
            "questions": []
          },
          {
            "id": "daoduc-2-b9",
            "number": 9,
            "title": "Bài 9: Kiềm chế cảm xúc tiêu cực",
            "chapter": "Chủ đề 6: Thể hiện cảm xúc bản thân",
            "summary": "Nhận biết cảm xúc và giữ bình tĩnh khi tức giận.",
            "questions": []
          },
          {
            "id": "daoduc-2-b10",
            "number": 10,
            "title": "Bài 10: Tìm kiếm sự hỗ trợ khi ở nhà, ở trường",
            "chapter": "Chủ đề 7: Tìm kiếm sự hỗ trợ",
            "summary": "Biết nhờ người lớn tin cậy giúp đỡ khi gặp khó khăn.",
            "questions": []
          },
          {
            "id": "daoduc-2-b11",
            "number": 11,
            "title": "Bài 11: Tuân thủ quy định nơi công cộng",
            "chapter": "Chủ đề 8: Tuân thủ quy định nơi công cộng",
            "summary": "Xếp hàng, giữ trật tự và vệ sinh nơi công cộng.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-2",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-2-b1",
            "number": 1,
            "title": "Unit 1: At my birthday party",
            "chapter": "Unit 1: At my birthday party",
            "summary": "Âm /p/ (pasta, pizza, popcorn).",
            "questions": []
          },
          {
            "id": "tienganh-2-b2",
            "number": 2,
            "title": "Unit 2: In the backyard",
            "chapter": "Unit 2: In the backyard",
            "summary": "Âm /k/ (kite, bike, kitten).",
            "questions": []
          },
          {
            "id": "tienganh-2-b3",
            "number": 3,
            "title": "Unit 3: At the seaside",
            "chapter": "Unit 3: At the seaside",
            "summary": "Âm /s/ (sail, sand, sea).",
            "questions": []
          },
          {
            "id": "tienganh-2-b4",
            "number": 4,
            "title": "Unit 4: In the countryside",
            "chapter": "Unit 4: In the countryside",
            "summary": "Âm /r/ (rainbow, river, road).",
            "questions": []
          },
          {
            "id": "tienganh-2-b5",
            "number": 5,
            "title": "Unit 5: In the classroom",
            "chapter": "Unit 5: In the classroom",
            "summary": "Âm /kw/ (question, square, quiz).",
            "questions": []
          },
          {
            "id": "tienganh-2-b6",
            "number": 6,
            "title": "Unit 6: On the farm",
            "chapter": "Unit 6: On the farm",
            "summary": "Âm /ks/ (box, fox, ox).",
            "questions": []
          },
          {
            "id": "tienganh-2-b7",
            "number": 7,
            "title": "Unit 7: In the kitchen",
            "chapter": "Unit 7: In the kitchen",
            "summary": "Âm /dʒ/ (jam, jelly, juice).",
            "questions": []
          },
          {
            "id": "tienganh-2-b8",
            "number": 8,
            "title": "Unit 8: In the village",
            "chapter": "Unit 8: In the village",
            "summary": "Âm /v/ (van, village, volleyball).",
            "questions": []
          },
          {
            "id": "tienganh-2-b9",
            "number": 9,
            "title": "Unit 9: In the grocery store",
            "chapter": "Unit 9: In the grocery store",
            "summary": "Âm /j/ (yogurt, yo-yo, yams).",
            "questions": []
          },
          {
            "id": "tienganh-2-b10",
            "number": 10,
            "title": "Unit 10: At the zoo",
            "chapter": "Unit 10: At the zoo",
            "summary": "Âm /z/ (zebra, zoo, zebu).",
            "questions": []
          },
          {
            "id": "tienganh-2-b11",
            "number": 11,
            "title": "Unit 11: In the playground",
            "chapter": "Unit 11: In the playground",
            "summary": "Âm /aɪ/ (driving, riding, sliding).",
            "questions": []
          },
          {
            "id": "tienganh-2-b12",
            "number": 12,
            "title": "Unit 12: At the café",
            "chapter": "Unit 12: At the café",
            "summary": "Âm /eɪ/ (cake, grapes, table).",
            "questions": []
          },
          {
            "id": "tienganh-2-b13",
            "number": 13,
            "title": "Unit 13: In the maths class",
            "chapter": "Unit 13: In the maths class",
            "summary": "Đếm số 11–15 (eleven, twelve, thirteen, fourteen, fifteen).",
            "questions": []
          },
          {
            "id": "tienganh-2-b14",
            "number": 14,
            "title": "Unit 14: At home",
            "chapter": "Unit 14: At home",
            "summary": "Đếm số 16–20 (sixteen, seventeen, eighteen, nineteen, twenty).",
            "questions": []
          },
          {
            "id": "tienganh-2-b15",
            "number": 15,
            "title": "Unit 15: In the clothes shop",
            "chapter": "Unit 15: In the clothes shop",
            "summary": "Âm /ʃ/ (shirt, shoes, shorts).",
            "questions": []
          },
          {
            "id": "tienganh-2-b16",
            "number": 16,
            "title": "Unit 16: At the campsite",
            "chapter": "Unit 16: At the campsite",
            "summary": "Âm /t/ (teapot, tent, blanket).",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-2",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-2-b1",
            "number": 1,
            "title": "Chủ đề 1: Sắc màu âm thanh",
            "chapter": "Chủ đề 1: Sắc màu âm thanh",
            "summary": "Nhận biết cao độ, trường độ; hát Ngày mùa vui; thực hành nhạc cụ gõ.",
            "questions": []
          },
          {
            "id": "amnhac-2-b2",
            "number": 2,
            "title": "Chủ đề 2: Vui đến trường",
            "chapter": "Chủ đề 2: Vui đến trường",
            "summary": "Hát Em yêu trường em, Học sinh lớp 2 chăm ngoan; đọc nhạc 4 nốt.",
            "questions": []
          },
          {
            "id": "amnhac-2-b3",
            "number": 3,
            "title": "Chủ đề 3: Nhịp điệu quê hương",
            "chapter": "Chủ đề 3: Nhịp điệu quê hương",
            "summary": "Hát Quê hương tươi đẹp; nghe dân ca và cảm nhận nhịp 2/4.",
            "questions": []
          },
          {
            "id": "amnhac-2-b4",
            "number": 4,
            "title": "Chủ đề 4: Cánh én mùa xuân",
            "chapter": "Chủ đề 4: Cánh én mùa xuân",
            "summary": "Hát Mùa xuân đến rồi, Hoa lá mùa xuân; vận động phụ họa theo nhạc.",
            "questions": []
          },
          {
            "id": "amnhac-2-b5",
            "number": 5,
            "title": "Chủ đề 5: Vui Tết Trung thu",
            "chapter": "Chủ đề 5: Vui Tết Trung thu",
            "summary": "Hát Rước đèn tháng Tám; thực hành gõ đệm nhịp nhàng.",
            "questions": []
          },
          {
            "id": "amnhac-2-b6",
            "number": 6,
            "title": "Chủ đề 6: Chia sẻ yêu thương",
            "chapter": "Chủ đề 6: Chia sẻ yêu thương",
            "summary": "Hát Chúc mừng sinh nhật, Bàn tay mẹ; thể hiện tình cảm gia đình, bạn bè.",
            "questions": []
          },
          {
            "id": "amnhac-2-b7",
            "number": 7,
            "title": "Chủ đề 7: Thiên nhiên tươi đẹp",
            "chapter": "Chủ đề 7: Thiên nhiên tươi đẹp",
            "summary": "Hát Chim sáo, Con chim vành khuyên; đọc nhạc kết hợp vận động.",
            "questions": []
          },
          {
            "id": "amnhac-2-b8",
            "number": 8,
            "title": "Chủ đề 8: Chào mùa hè",
            "chapter": "Chủ đề 8: Chào mùa hè",
            "summary": "Hát Dàn đồng ca mùa hạ; ôn tập các bài hát đã học trong năm.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-2",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-2-b1",
            "number": 1,
            "title": "Chủ đề 1: Thế giới mĩ thuật qua những chấm",
            "chapter": "Chủ đề 1: Thế giới mĩ thuật qua những chấm",
            "summary": "Tạo bức tranh phong cảnh hoặc sinh hoạt bằng chấm màu.",
            "questions": []
          },
          {
            "id": "mithuat-2-b2",
            "number": 2,
            "title": "Chủ đề 2: Những sắc màu âm thanh",
            "chapter": "Chủ đề 2: Những sắc màu âm thanh",
            "summary": "Thể hiện cảm xúc âm nhạc qua đường nét và màu sắc.",
            "questions": []
          },
          {
            "id": "mithuat-2-b3",
            "number": 3,
            "title": "Chủ đề 3: Vẻ đẹp của thiên nhiên",
            "chapter": "Chủ đề 3: Vẻ đẹp của thiên nhiên",
            "summary": "Vẽ, cắt dán cảnh thiên nhiên, cây cối, bầu trời.",
            "questions": []
          },
          {
            "id": "mithuat-2-b4",
            "number": 4,
            "title": "Chủ đề 4: Mái trường thân thiện",
            "chapter": "Chủ đề 4: Mái trường thân thiện",
            "summary": "Vẽ và tạo hình hoạt động vui chơi ở sân trường.",
            "questions": []
          },
          {
            "id": "mithuat-2-b5",
            "number": 5,
            "title": "Chủ đề 5: Ngôi nhà của em",
            "chapter": "Chủ đề 5: Ngôi nhà của em",
            "summary": "Tạo hình ngôi nhà từ vật liệu tái chế hoặc giấy bìa.",
            "questions": []
          },
          {
            "id": "mithuat-2-b6",
            "number": 6,
            "title": "Chủ đề 6: Con vật quen thuộc",
            "chapter": "Chủ đề 6: Con vật quen thuộc",
            "summary": "Nặn và vẽ các con vật nuôi trong gia đình.",
            "questions": []
          },
          {
            "id": "mithuat-2-b7",
            "number": 7,
            "title": "Chủ đề 7: Khu vườn kỳ diệu",
            "chapter": "Chủ đề 7: Khu vườn kỳ diệu",
            "summary": "Phối hợp nhiều chất liệu tạo mô hình khu vườn nhiều màu sắc.",
            "questions": []
          },
          {
            "id": "mithuat-2-b8",
            "number": 8,
            "title": "Chủ đề 8: Quà tặng ý nghĩa",
            "chapter": "Chủ đề 8: Quà tặng ý nghĩa",
            "summary": "Làm bưu thiếp, đồ thủ công tặng người thân, thầy cô.",
            "questions": []
          },
          {
            "id": "mithuat-2-b9",
            "number": 9,
            "title": "Chủ đề 9: Bữa tiệc vui",
            "chapter": "Chủ đề 9: Bữa tiệc vui",
            "summary": "Tạo hình bánh, hoa quả, mâm cỗ bằng đất nặn.",
            "questions": []
          },
          {
            "id": "mithuat-2-b10",
            "number": 10,
            "title": "Chủ đề 10: An toàn giao thông",
            "chapter": "Chủ đề 10: An toàn giao thông",
            "summary": "Vẽ tranh tuyên truyền đi bộ, sang đường an toàn.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-2",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-2-b1",
            "number": 1,
            "title": "Chế độ dinh dưỡng và vệ sinh tập luyện",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Ăn uống đủ chất, uống nước hợp lí và đảm bảo an toàn sân bãi.",
            "questions": []
          },
          {
            "id": "gdtc-2-b2",
            "number": 2,
            "title": "Chủ đề 1: Đội hình đội ngũ",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Chuyển đổi hàng dọc, hàng ngang thành vòng tròn; giậm chân tại chỗ.",
            "questions": []
          },
          {
            "id": "gdtc-2-b3",
            "number": 3,
            "title": "Chủ đề 2: Bài tập thể dục",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Bài thể dục phát triển chung 8 động tác: vươn thở, tay, chân, lườn, bụng, phối hợp, nhảy, điều hòa.",
            "questions": []
          },
          {
            "id": "gdtc-2-b4",
            "number": 4,
            "title": "Chủ đề 3: Tư thế và kĩ năng vận động cơ bản",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Đi theo vạch kẻ, vòng trái/phải, động tác quỳ, ngồi, bật nhảy cơ bản.",
            "questions": []
          },
          {
            "id": "gdtc-2-b5",
            "number": 5,
            "title": "Chủ đề 1: Môn Bóng rổ",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Di chuyển, dẫn bóng tại chỗ và di chuyển, tung bắt bóng hai tay.",
            "questions": []
          },
          {
            "id": "gdtc-2-b6",
            "number": 6,
            "title": "Chủ đề 2: Môn Bơi",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Ôm gối nổi người, duỗi thẳng chân tay, đạp thành bể lướt nước.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-2",
        "name": "Hoạt động trải nghiệm",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-2-b1",
            "number": 1,
            "title": "Chủ đề 1: Khám phá bản thân",
            "chapter": "Chủ đề 1: Khám phá bản thân",
            "summary": "Nhận biết điểm mạnh, sở thích và những việc em có thể tự làm.",
            "questions": []
          },
          {
            "id": "hdtn-2-b2",
            "number": 2,
            "title": "Chủ đề 2: Rèn nếp sống",
            "chapter": "Chủ đề 2: Rèn nếp sống",
            "summary": "Sắp xếp góc học tập, đồ dùng cá nhân gọn gàng, đúng giờ.",
            "questions": []
          },
          {
            "id": "hdtn-2-b3",
            "number": 3,
            "title": "Chủ đề 3: Em yêu trường em",
            "chapter": "Chủ đề 3: Em yêu trường em",
            "summary": "Tham gia giữ gìn trường lớp sạch đẹp, đoàn kết với bạn bè.",
            "questions": []
          },
          {
            "id": "hdtn-2-b4",
            "number": 4,
            "title": "Chủ đề 4: Tự phục vụ bản thân",
            "chapter": "Chủ đề 4: Tự phục vụ bản thân",
            "summary": "Tự chuẩn bị sách vở, quần áo, tự gấp chăn màn.",
            "questions": []
          },
          {
            "id": "hdtn-2-b5",
            "number": 5,
            "title": "Chủ đề 5: Gia đình thân thương",
            "chapter": "Chủ đề 5: Gia đình thân thương",
            "summary": "Lắng nghe, chia sẻ và giúp đỡ công việc nhà cùng bố mẹ.",
            "questions": []
          },
          {
            "id": "hdtn-2-b6",
            "number": 6,
            "title": "Chủ đề 6: Tự chăm sóc và bảo vệ bản thân",
            "chapter": "Chủ đề 6: Tự chăm sóc và bảo vệ bản thân",
            "summary": "Phòng tránh ngã, bỏng, điện giật và không đi theo người lạ.",
            "questions": []
          },
          {
            "id": "hdtn-2-b7",
            "number": 7,
            "title": "Chủ đề 7: Chia sẻ cộng đồng",
            "chapter": "Chủ đề 7: Chia sẻ cộng đồng",
            "summary": "Tham gia hoạt động quyên góp, giúp đỡ bạn có hoàn cảnh khó khăn.",
            "questions": []
          },
          {
            "id": "hdtn-2-b8",
            "number": 8,
            "title": "Chủ đề 8: Môi trường quanh em",
            "chapter": "Chủ đề 8: Môi trường quanh em",
            "summary": "Phân loại rác thải, tiết kiệm điện nước trong gia đình và nhà trường.",
            "questions": []
          },
          {
            "id": "hdtn-2-b9",
            "number": 9,
            "title": "Chủ đề 9: Em tìm hiểu nghề nghiệp",
            "chapter": "Chủ đề 9: Em tìm hiểu nghề nghiệp",
            "summary": "Làm quen một số nghề gần gũi quanh em và công cụ lao động của nghề.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 3,
    "label": "Lớp 3",
    "level": "Tiểu học",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=3",
    "subjects": [
      {
        "id": "toan-3",
        "name": "Toán",
        "icon": "📐",
        "lessons": [
          {
            "id": "toan-3-b1",
            "number": 1,
            "title": "Bài 1: Ôn tập các số đến 1 000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đọc, viết, so sánh và phân tích cấu tạo số có ba chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b2",
            "number": 2,
            "title": "Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đặt tính và tính cộng, trừ có nhớ và không nhớ trong phạm vi 1 000.",
            "questions": []
          },
          {
            "id": "toan-3-b3",
            "number": 3,
            "title": "Bài 3: Tìm thành phần trong phép cộng, phép trừ",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Tìm số hạng chưa biết, số bị trừ, số trừ.",
            "questions": []
          },
          {
            "id": "toan-3-b4",
            "number": 4,
            "title": "Bài 4: Ôn tập bảng nhân 2; 5, bảng chia 2; 5",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Vận dụng bảng nhân, chia 2 và 5 vào tính nhẩm và giải toán.",
            "questions": []
          },
          {
            "id": "toan-3-b5",
            "number": 5,
            "title": "Bài 5: Bảng nhân 3, bảng chia 3",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Hình thành và ghi nhớ bảng nhân 3, bảng chia 3.",
            "questions": []
          },
          {
            "id": "toan-3-b6",
            "number": 6,
            "title": "Bài 6: Bảng nhân 4, bảng chia 4",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Hình thành và ghi nhớ bảng nhân 4, bảng chia 4.",
            "questions": []
          },
          {
            "id": "toan-3-b7",
            "number": 7,
            "title": "Bài 7: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đo độ dài, khối lượng, xem đồng hồ và nhận biết hình phẳng, hình khối.",
            "questions": []
          },
          {
            "id": "toan-3-b8",
            "number": 8,
            "title": "Bài 8: Luyện tập chung",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Củng cố kiến thức cộng, trừ, bảng nhân chia 2, 3, 4, 5.",
            "questions": []
          },
          {
            "id": "toan-3-b9",
            "number": 9,
            "title": "Bài 9: Bảng nhân 6, bảng chia 6",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Ghi nhớ bảng nhân 6, bảng chia 6 và vận dụng giải toán.",
            "questions": []
          },
          {
            "id": "toan-3-b10",
            "number": 10,
            "title": "Bài 10: Bảng nhân 7, bảng chia 7",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Ghi nhớ bảng nhân 7, bảng chia 7.",
            "questions": []
          },
          {
            "id": "toan-3-b11",
            "number": 11,
            "title": "Bài 11: Bảng nhân 8, bảng chia 8",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Ghi nhớ bảng nhân 8, bảng chia 8.",
            "questions": []
          },
          {
            "id": "toan-3-b12",
            "number": 12,
            "title": "Bài 12: Bảng nhân 9, bảng chia 9",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Ghi nhớ bảng nhân 9, bảng chia 9.",
            "questions": []
          },
          {
            "id": "toan-3-b13",
            "number": 13,
            "title": "Bài 13: Tìm thành phần trong phép nhân, phép chia",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Tìm thừa số, số bị chia, số chia chưa biết.",
            "questions": []
          },
          {
            "id": "toan-3-b14",
            "number": 14,
            "title": "Bài 14: Một phần mấy",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Nhận biết 1/2, 1/3, ..., 1/9 của một hình hoặc một nhóm đối tượng.",
            "questions": []
          },
          {
            "id": "toan-3-b15",
            "number": 15,
            "title": "Bài 15: Luyện tập chung",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Ôn tập toàn bộ bảng nhân, chia từ 2 đến 9.",
            "questions": []
          },
          {
            "id": "toan-3-b16",
            "number": 16,
            "title": "Bài 16: Điểm ở giữa, trung điểm của đoạn thẳng",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Nhận biết điểm ở giữa và trung điểm chia đoạn thẳng thành 2 phần bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-3-b17",
            "number": 17,
            "title": "Bài 17: Hình tròn. Tâm, bán kính, đường kính của hình tròn",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Đường kính gấp 2 lần bán kính; dùng compa vẽ hình tròn.",
            "questions": []
          },
          {
            "id": "toan-3-b18",
            "number": 18,
            "title": "Bài 18: Góc, góc vuông, góc không vuông",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Dùng ê ke kiểm tra góc vuông và góc không vuông.",
            "questions": []
          },
          {
            "id": "toan-3-b19",
            "number": 19,
            "title": "Bài 19: Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Đặc điểm cạnh và góc vuông của hình chữ nhật, hình vuông.",
            "questions": []
          },
          {
            "id": "toan-3-b20",
            "number": 20,
            "title": "Bài 20: Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Vẽ hình bằng thước thẳng, ê ke, compa.",
            "questions": []
          },
          {
            "id": "toan-3-b21",
            "number": 21,
            "title": "Bài 21: Khối lập phương, khối hộp chữ nhật",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Đếm số đỉnh (8), số cạnh (12), số mặt (6) của khối lập phương, khối hộp chữ nhật.",
            "questions": []
          },
          {
            "id": "toan-3-b22",
            "number": 22,
            "title": "Bài 22: Luyện tập chung",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Ôn tập kiến thức hình học phẳng và hình khối.",
            "questions": []
          },
          {
            "id": "toan-3-b23",
            "number": 23,
            "title": "Bài 23: Nhân số có hai chữ số với số có một chữ số",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Đặt tính và tính nhân số có 2 chữ số với số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b24",
            "number": 24,
            "title": "Bài 24: Gấp một số lên một số lần",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Muốn gấp một số lên một số lần, ta lấy số đó nhân với số lần.",
            "questions": []
          },
          {
            "id": "toan-3-b25",
            "number": 25,
            "title": "Bài 25: Phép chia hết, phép chia có dư",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Số dư luôn bé hơn số chia.",
            "questions": []
          },
          {
            "id": "toan-3-b26",
            "number": 26,
            "title": "Bài 26: Chia số có hai chữ số cho số có một chữ số",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Thực hiện chia từng lượt từ trái sang phải.",
            "questions": []
          },
          {
            "id": "toan-3-b27",
            "number": 27,
            "title": "Bài 27: Giảm một số đi một số lần",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Muốn giảm một số đi một số lần, ta chia số đó cho số lần.",
            "questions": []
          },
          {
            "id": "toan-3-b28",
            "number": 28,
            "title": "Bài 28: Bài toán giải bằng hai bước tính",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Phân tích và trình bày bài toán có hai phép tính.",
            "questions": []
          },
          {
            "id": "toan-3-b29",
            "number": 29,
            "title": "Bài 29: Luyện tập chung",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Củng cố nhân chia trong phạm vi 100 và giải toán.",
            "questions": []
          },
          {
            "id": "toan-3-b30",
            "number": 30,
            "title": "Bài 30: Mi-li-mét",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "1 cm = 10 mm; 1 m = 1 000 mm.",
            "questions": []
          },
          {
            "id": "toan-3-b31",
            "number": 31,
            "title": "Bài 31: Gam",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "1 kg = 1 000 g; cân và đổi đơn vị khối lượng.",
            "questions": []
          },
          {
            "id": "toan-3-b32",
            "number": 32,
            "title": "Bài 32: Mi-li-lít",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "1 lít = 1 000 ml; đọc vạch chia dung tích.",
            "questions": []
          },
          {
            "id": "toan-3-b33",
            "number": 33,
            "title": "Bài 33: Nhiệt độ. Đơn vị đo nhiệt độ",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "Đọc nhiệt kế theo độ C (°C).",
            "questions": []
          },
          {
            "id": "toan-3-b34",
            "number": 34,
            "title": "Bài 34: Thực hành và trải nghiệm với các đơn vị mm, g, ml, độ C",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "Đo thực tế độ dài, khối lượng, dung tích, nhiệt độ.",
            "questions": []
          },
          {
            "id": "toan-3-b35",
            "number": 35,
            "title": "Bài 35: Luyện tập chung",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "Đổi và tính toán với các đơn vị đo đại lượng.",
            "questions": []
          },
          {
            "id": "toan-3-b36",
            "number": 36,
            "title": "Bài 36: Nhân số có ba chữ số với số có một chữ số",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Đặt tính nhân số có 3 chữ số với số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b37",
            "number": 37,
            "title": "Bài 37: Chia số có ba chữ số cho số có một chữ số",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Đặt tính chia số có 3 chữ số cho số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b38",
            "number": 38,
            "title": "Bài 38: Biểu thức số. Tính giá trị của biểu thức số",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Quy tắc cộng trừ từ trái sang phải, nhân chia trước cộng trừ sau, trong ngoặc trước.",
            "questions": []
          },
          {
            "id": "toan-3-b39",
            "number": 39,
            "title": "Bài 39: So sánh số lớn gấp mấy lần số bé",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Lấy số lớn chia cho số bé.",
            "questions": []
          },
          {
            "id": "toan-3-b40",
            "number": 40,
            "title": "Bài 40: Luyện tập chung",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Củng cố tính giá trị biểu thức và nhân chia.",
            "questions": []
          },
          {
            "id": "toan-3-b41",
            "number": 41,
            "title": "Bài 41: Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập nhân chia phạm vi 1 000.",
            "questions": []
          },
          {
            "id": "toan-3-b42",
            "number": 42,
            "title": "Bài 42: Ôn tập biểu thức số",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Tính giá trị biểu thức có dấu ngoặc và không dấu ngoặc.",
            "questions": []
          },
          {
            "id": "toan-3-b43",
            "number": 43,
            "title": "Bài 43: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Góc vuông, hình chữ nhật, hình vuông, mm, g, ml.",
            "questions": []
          },
          {
            "id": "toan-3-b44",
            "number": 44,
            "title": "Bài 44: Ôn tập chung",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Tổng kết kiến thức Toán học kì 1 lớp 3.",
            "questions": []
          },
          {
            "id": "toan-3-b45",
            "number": 45,
            "title": "Bài 45: Các số có bốn chữ số. Số 10 000",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "Đọc, viết cấu tạo hàng nghìn, trăm, chục, đơn vị.",
            "questions": []
          },
          {
            "id": "toan-3-b46",
            "number": 46,
            "title": "Bài 46: So sánh các số trong phạm vi 10 000",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "So sánh từng hàng từ trái sang phải.",
            "questions": []
          },
          {
            "id": "toan-3-b47",
            "number": 47,
            "title": "Bài 47: Làm quen với chữ số La Mã",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "Đọc và viết các số La Mã từ I đến XX.",
            "questions": []
          },
          {
            "id": "toan-3-b48",
            "number": 48,
            "title": "Bài 48: Làm tròn số đến hàng chục, hàng trăm",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "Quy tắc làm tròn số đến hàng chục, hàng trăm.",
            "questions": []
          },
          {
            "id": "toan-3-b49",
            "number": 49,
            "title": "Bài 49: Luyện tập chung",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "Củng cố số có 4 chữ số, số La Mã và làm tròn số.",
            "questions": []
          },
          {
            "id": "toan-3-b50",
            "number": 50,
            "title": "Bài 50: Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông",
            "chapter": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
            "summary": "Chu vi hình chữ nhật = (dài + rộng) x 2; chu vi hình vuông = cạnh x 4.",
            "questions": []
          },
          {
            "id": "toan-3-b51",
            "number": 51,
            "title": "Bài 51: Diện tích của một hình. Xăng-ti-mét vuông",
            "chapter": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
            "summary": "Đơn vị cm² và cách đếm ô vuông đo diện tích.",
            "questions": []
          },
          {
            "id": "toan-3-b52",
            "number": 52,
            "title": "Bài 52: Diện tích hình chữ nhật, diện tích hình vuông",
            "chapter": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
            "summary": "Diện tích HCN = dài x rộng; Diện tích HV = cạnh x cạnh.",
            "questions": []
          },
          {
            "id": "toan-3-b53",
            "number": 53,
            "title": "Bài 53: Luyện tập chung",
            "chapter": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
            "summary": "Tính chu vi và diện tích các hình phẳng.",
            "questions": []
          },
          {
            "id": "toan-3-b54",
            "number": 54,
            "title": "Bài 54: Phép cộng trong phạm vi 10 000",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Đặt tính cộng các số có 4 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b55",
            "number": 55,
            "title": "Bài 55: Phép trừ trong phạm vi 10 000",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Đặt tính trừ các số có 4 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b56",
            "number": 56,
            "title": "Bài 56: Nhân số có bốn chữ số với số có một chữ số",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Nhân số có 4 chữ số với số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b57",
            "number": 57,
            "title": "Bài 57: Chia số có bốn chữ số cho số có một chữ số",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Chia hết và chia có dư số có 4 chữ số cho số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b58",
            "number": 58,
            "title": "Bài 58: Luyện tập chung",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Vận dụng bốn phép tính trong phạm vi 10 000.",
            "questions": []
          },
          {
            "id": "toan-3-b59",
            "number": 59,
            "title": "Bài 59: Các số có năm chữ số. Số 100 000",
            "chapter": "Chủ đề 11: Các số đến 100 000",
            "summary": "Đọc, viết số có hàng chục nghìn đến 100 000.",
            "questions": []
          },
          {
            "id": "toan-3-b60",
            "number": 60,
            "title": "Bài 60: So sánh các số trong phạm vi 100 000",
            "chapter": "Chủ đề 11: Các số đến 100 000",
            "summary": "So sánh các số có đến 5 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b61",
            "number": 61,
            "title": "Bài 61: Làm tròn số đến hàng nghìn, hàng chục nghìn",
            "chapter": "Chủ đề 11: Các số đến 100 000",
            "summary": "Quy tắc làm tròn số đến hàng nghìn, hàng chục nghìn.",
            "questions": []
          },
          {
            "id": "toan-3-b62",
            "number": 62,
            "title": "Bài 62: Luyện tập chung",
            "chapter": "Chủ đề 11: Các số đến 100 000",
            "summary": "Ôn tập các số đến 100 000.",
            "questions": []
          },
          {
            "id": "toan-3-b63",
            "number": 63,
            "title": "Bài 63: Phép cộng trong phạm vi 100 000",
            "chapter": "Chủ đề 12: Cộng, trừ trong phạm vi 100 000",
            "summary": "Đặt tính cộng các số có 5 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b64",
            "number": 64,
            "title": "Bài 64: Phép trừ trong phạm vi 100 000",
            "chapter": "Chủ đề 12: Cộng, trừ trong phạm vi 100 000",
            "summary": "Đặt tính trừ các số có 5 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b65",
            "number": 65,
            "title": "Bài 65: Luyện tập chung",
            "chapter": "Chủ đề 12: Cộng, trừ trong phạm vi 100 000",
            "summary": "Giải toán cộng trừ trong phạm vi 100 000.",
            "questions": []
          },
          {
            "id": "toan-3-b66",
            "number": 66,
            "title": "Bài 66: Xem đồng hồ. Tháng – năm",
            "chapter": "Chủ đề 13: Xem đồng hồ. Tháng - năm. Tiền Việt Nam",
            "summary": "Xem đồng hồ chính xác đến từng phút; số ngày trong tháng.",
            "questions": []
          },
          {
            "id": "toan-3-b67",
            "number": 67,
            "title": "Bài 67: Thực hành xem đồng hồ, xem lịch",
            "chapter": "Chủ đề 13: Xem đồng hồ. Tháng - năm. Tiền Việt Nam",
            "summary": "Tính khoảng thời gian và xem lịch năm.",
            "questions": []
          },
          {
            "id": "toan-3-b68",
            "number": 68,
            "title": "Bài 68: Tiền Việt Nam",
            "chapter": "Chủ đề 13: Xem đồng hồ. Tháng - năm. Tiền Việt Nam",
            "summary": "Nhận biết mệnh giá tiền 100 000 đồng trở xuống và tính tiền.",
            "questions": []
          },
          {
            "id": "toan-3-b69",
            "number": 69,
            "title": "Bài 69: Luyện tập chung",
            "chapter": "Chủ đề 13: Xem đồng hồ. Tháng - năm. Tiền Việt Nam",
            "summary": "Giải toán về thời gian và tiền Việt Nam.",
            "questions": []
          },
          {
            "id": "toan-3-b70",
            "number": 70,
            "title": "Bài 70: Nhân số có năm chữ số với số có một chữ số",
            "chapter": "Chủ đề 14: Nhân, chia trong phạm vi 100 000",
            "summary": "Thực hiện phép nhân số có 5 chữ số với số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b71",
            "number": 71,
            "title": "Bài 71: Chia số có năm chữ số cho số có một chữ số",
            "chapter": "Chủ đề 14: Nhân, chia trong phạm vi 100 000",
            "summary": "Thực hiện phép chia số có 5 chữ số cho số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b72",
            "number": 72,
            "title": "Bài 72: Luyện tập chung",
            "chapter": "Chủ đề 14: Nhân, chia trong phạm vi 100 000",
            "summary": "Bài toán rút về đơn vị và nhân chia trong phạm vi 100 000.",
            "questions": []
          },
          {
            "id": "toan-3-b73",
            "number": 73,
            "title": "Bài 73: Thu thập, phân loại, ghi chép số liệu. Bảng số liệu",
            "chapter": "Chủ đề 15: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Đọc và phân tích bảng số liệu thống kê đơn giản.",
            "questions": []
          },
          {
            "id": "toan-3-b74",
            "number": 74,
            "title": "Bài 74: Khả năng xảy ra của một sự kiện",
            "chapter": "Chủ đề 15: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Phân biệt sự kiện chắc chắn, có thể, không thể xảy ra.",
            "questions": []
          },
          {
            "id": "toan-3-b75",
            "number": 75,
            "title": "Bài 75: Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu",
            "chapter": "Chủ đề 15: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Thực hành thống kê số liệu thực tế.",
            "questions": []
          },
          {
            "id": "toan-3-b76",
            "number": 76,
            "title": "Bài 76: Ôn tập các số trong phạm vi 10 000, 100 000",
            "chapter": "Chủ đề 16: Ôn tập cuối năm",
            "summary": "Ôn tập đọc, viết, so sánh số đến 100 000.",
            "questions": []
          },
          {
            "id": "toan-3-b77",
            "number": 77,
            "title": "Bài 77: Ôn tập phép cộng, phép trừ trong phạm vi 100 000",
            "chapter": "Chủ đề 16: Ôn tập cuối năm",
            "summary": "Ôn tập cộng, trừ có nhớ.",
            "questions": []
          },
          {
            "id": "toan-3-b78",
            "number": 78,
            "title": "Bài 78: Ôn tập phép nhân, phép chia trong phạm vi 100 000",
            "chapter": "Chủ đề 16: Ôn tập cuối năm",
            "summary": "Ôn tập nhân, chia trong phạm vi 100 000.",
            "questions": []
          },
          {
            "id": "toan-3-b79",
            "number": 79,
            "title": "Bài 79: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 16: Ôn tập cuối năm",
            "summary": "Ôn tập chu vi, diện tích và đơn vị đo.",
            "questions": []
          },
          {
            "id": "toan-3-b80",
            "number": 80,
            "title": "Bài 80: Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện",
            "chapter": "Chủ đề 16: Ôn tập cuối năm",
            "summary": "Ôn tập thống kê, xác suất lớp 3.",
            "questions": []
          },
          {
            "id": "toan-3-b81",
            "number": 81,
            "title": "Bài 81: Ôn tập chung",
            "chapter": "Chủ đề 16: Ôn tập cuối năm",
            "summary": "Tổng hợp kiến thức Toán lớp 3 cả năm.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-3",
        "name": "Tiếng Việt",
        "icon": "📚",
        "lessons": [
          {
            "id": "tiengviet-3-b1",
            "number": 1,
            "title": "Bài 1: Ngày gặp lại",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Niềm vui ngày tựu trường và chia sẻ kỉ niệm hè.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b2",
            "number": 2,
            "title": "Bài 2: Về thăm quê",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Tình cảm gắn bó với quê hương và người thân.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b3",
            "number": 3,
            "title": "Bài 3: Cánh rừng trong nắng",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Vẻ đẹp yên bình của khu rừng buổi sáng.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b4",
            "number": 4,
            "title": "Bài 4: Lần đầu ra biển",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Cảm xúc ngỡ ngàng, thích thú trước vẻ đẹp của biển.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b5",
            "number": 5,
            "title": "Bài 5: Nhật kí tập bơi",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Kiên trì luyện tập vượt qua nỗi sợ để biết bơi.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b6",
            "number": 6,
            "title": "Bài 6: Tập nấu ăn",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Học cách phụ giúp gia đình và tự lập.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b7",
            "number": 7,
            "title": "Bài 7: Mùa hè lấp lánh",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Những hoạt động bổ ích, rực rỡ sắc màu mùa hè.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b8",
            "number": 8,
            "title": "Bài 8: Tạm biệt mùa hè",
            "chapter": "Tập 1 - Những trải nghiệm thú vị",
            "summary": "Chuẩn bị tâm thế bước vào năm học mới.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b9",
            "number": 9,
            "title": "Bài 9: Đi học vui sao",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Niềm vui đến trường và gặp gỡ bạn bè.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b10",
            "number": 10,
            "title": "Bài 10: Con đường đến trường",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Cảnh sắc thân quen trên đường đi học.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b11",
            "number": 11,
            "title": "Bài 11: Lời giải toán đặc biệt",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Sự sáng tạo trong học tập của nhà toán học trẻ.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b12",
            "number": 12,
            "title": "Bài 12: Bài tập làm văn",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Tính trung thực khi viết văn từ thực tế cuộc sống.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b13",
            "number": 13,
            "title": "Bài 13: Bàn tay cô giáo",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Sự khéo léo, tận tâm của cô giáo với học trò.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b14",
            "number": 14,
            "title": "Bài 14: Cuộc họp của chữ viết",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Tầm quan trọng của dấu chấm và quy tắc viết câu.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b15",
            "number": 15,
            "title": "Bài 15: Thư viện",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Nội quy thư viện và thói quen đọc sách.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b16",
            "number": 16,
            "title": "Bài 16: Ngày em vào Đội",
            "chapter": "Tập 1 - Cổng trường rộng mở",
            "summary": "Niềm vinh dự khi được đeo khăn quàng đỏ.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b17",
            "number": 17,
            "title": "Bài 17: Ngưỡng cửa",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Hình ảnh ngưỡng cửa gắn liền với bước trưởng thành.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b18",
            "number": 18,
            "title": "Bài 18: Món quà đặc biệt",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Giá trị tinh thần của món quà tự tay làm tặng mẹ.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b19",
            "number": 19,
            "title": "Bài 19: Khi cả nhà bé tí",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Kỉ niệm ấm áp thời thơ ấu của bố mẹ.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b20",
            "number": 20,
            "title": "Bài 20: Trò chuyện cùng mẹ",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Sự sẻ chia, thấu hiểu giữa mẹ và con.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b21",
            "number": 21,
            "title": "Bài 21: Tia nắng bé nhỏ",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Tình yêu thương bà và sự hiếu thảo của cháu.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b22",
            "number": 22,
            "title": "Bài 22: Để cháu nắm tay ông",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Chăm sóc, yêu thương ông khi tuổi cao.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b23",
            "number": 23,
            "title": "Bài 23: Tôi yêu em tôi",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Tình cảm anh chị em ruột thịt.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b24",
            "number": 24,
            "title": "Bài 24: Bạn nhỏ trong nhà",
            "chapter": "Tập 1 - Mái nhà yêu thương",
            "summary": "Chăm sóc vật nuôi thân thiết trong gia đình.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b25",
            "number": 25,
            "title": "Bài 25: Những bậc đá chạm mây",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Tinh thần vượt khó mở đường của người dân vùng cao.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b26",
            "number": 26,
            "title": "Bài 26: Đi tìm mặt trời",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Truyện cổ tích về sự đoàn kết tìm ánh sáng.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b27",
            "number": 27,
            "title": "Bài 27: Những chiếc áo ấm",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Lòng nhân ái, sẻ chia với người gặp khó khăn.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b28",
            "number": 28,
            "title": "Bài 28: Con đường của bé",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Ước mơ và đóng góp của mọi nghề nghiệp.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b29",
            "number": 29,
            "title": "Bài 29: Ngôi nhà trong cỏ",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Tình cảm xóm giềng và thiên nhiên quanh ta.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b30",
            "number": 30,
            "title": "Bài 30: Những ngọn hải đăng",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Vai trò của ngọn hải đăng và người gác đèn biển.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b31",
            "number": 31,
            "title": "Bài 31: Người làm đồ chơi",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Giữ gìn nghề nặn tò he truyền thống.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b32",
            "number": 32,
            "title": "Bài 32: Cây bút thần",
            "chapter": "Tập 1 - Cộng đồng gắn bó",
            "summary": "Chuyện cổ tích Mã Lương dùng tài năng giúp dân nghèo.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b33",
            "number": 33,
            "title": "Bài 1 (T2): Bầu trời",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Vẻ đẹp biến đổi kì diệu của bầu trời.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b34",
            "number": 34,
            "title": "Bài 2 (T2): Mưa",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Âm thanh, hình ảnh cơn mưa mang lại sự sống.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b35",
            "number": 35,
            "title": "Bài 3 (T2): Cóc kiện Trời",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Truyện cổ tích giải thích tiếng cóc nghiến răng gọi mưa.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b36",
            "number": 36,
            "title": "Bài 4 (T2): Những cái tên đáng yêu",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Sự phong phú của thế giới thực vật, động vật.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b37",
            "number": 37,
            "title": "Bài 5 (T2): Ngày hội rừng xanh",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Bức tranh sinh động của muông thú trong rừng.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b38",
            "number": 38,
            "title": "Bài 6 (T2): Cây gạo",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Vẻ đẹp cây gạo qua các mùa ở làng quê.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b39",
            "number": 39,
            "title": "Bài 7 (T2): Mặt trời xanh của tôi",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Hình ảnh lá cọ như mặt trời xanh vùng trung du.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b40",
            "number": 40,
            "title": "Bài 8 (T2): Bầy voi rừng Trường Sơn",
            "chapter": "Tập 2 - Những sắc màu thiên nhiên",
            "summary": "Đặc điểm và bảo vệ loài voi rừng quý hiếm.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b41",
            "number": 41,
            "title": "Bài 9 (T2): Lời kêu gọi toàn dân tập thể dục",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Ý nghĩa rèn luyện sức khỏe theo lời Bác Hồ.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b42",
            "number": 42,
            "title": "Bài 10 (T2): Quả hồng của thỏ con",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Bài học về lòng tốt và sự sẻ chia.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b43",
            "number": 43,
            "title": "Bài 11 (T2): Chuyện bên cửa sổ",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Quan sát và suy ngẫm từ cuộc sống quanh ta.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b44",
            "number": 44,
            "title": "Bài 12 (T2): Tay trái và tay phải",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Mỗi bộ phận, mỗi thành viên đều có vai trò quan trọng.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b45",
            "number": 45,
            "title": "Bài 13 (T2): Mèo đi câu cá",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Bài học về sự tập trung làm việc đến nơi đến chốn.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b46",
            "number": 46,
            "title": "Bài 14 (T2): Học nghề",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Sự kiên trì rèn luyện để thành thạo nghề nghiệp.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b47",
            "number": 47,
            "title": "Bài 15 (T2): Ngày như thế nào là đẹp?",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Ngày đẹp là ngày con người làm được việc có ích.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b48",
            "number": 48,
            "title": "Bài 16 (T2): A lô, tớ đây",
            "chapter": "Tập 2 - Bài học từ cuộc sống",
            "summary": "Kĩ năng giao tiếp lịch sự qua điện thoại.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b49",
            "number": 49,
            "title": "Bài 17 (T2): Đất nước là gì?",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Cảm nhận giản dị, sâu sắc về đất nước.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b50",
            "number": 50,
            "title": "Bài 18 (T2): Núi quê tôi",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Vẻ đẹp hùng vĩ của núi non quê hương.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b51",
            "number": 51,
            "title": "Bài 19 (T2): Sông Hương",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Vẻ đẹp thơ mộng, đổi sắc theo thời gian của sông Hương.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b52",
            "number": 52,
            "title": "Bài 20 (T2): Tiếng nước mình",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Tự hào và giữ gìn sự giàu đẹp của tiếng Việt.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b53",
            "number": 53,
            "title": "Bài 21 (T2): Nhà rông",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Nét kiến trúc và sinh hoạt văn hóa Tây Nguyên.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b54",
            "number": 54,
            "title": "Bài 22 (T2): Sự tích ông Đùng, bà Đùng",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Truyền thuyết ca ngợi sức mạnh khai phá thiên nhiên.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b55",
            "number": 55,
            "title": "Bài 23 (T2): Hai Bà Trưng",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Truyền thống yêu nước chống giặc ngoại xâm.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b56",
            "number": 56,
            "title": "Bài 24 (T2): Cùng Bác qua suối",
            "chapter": "Tập 2 - Đất nước ngàn năm",
            "summary": "Tình cảm quan tâm giản dị của Bác Hồ với chiến sĩ.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b57",
            "number": 57,
            "title": "Bài 25 (T2): Ngọn lửa Ô-lim-pích",
            "chapter": "Tập 2 - Trái đất của chúng mình",
            "summary": "Tinh thần thể thao hòa bình, cao thượng.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b58",
            "number": 58,
            "title": "Bài 26 (T2): Rô-bốt ở quanh ta",
            "chapter": "Tập 2 - Trái đất của chúng mình",
            "summary": "Ứng dụng của robot trong đời sống hiện đại.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b59",
            "number": 59,
            "title": "Bài 27 (T2): Thư của ông Trái Đất gửi các bạn nhỏ",
            "chapter": "Tập 2 - Trái đất của chúng mình",
            "summary": "Thông điệp bảo vệ hành tinh xanh.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b60",
            "number": 60,
            "title": "Bài 28 (T2): Những điều nhỏ tớ làm cho Trái Đất",
            "chapter": "Tập 2 - Trái đất của chúng mình",
            "summary": "Hành động thiết thực bảo vệ môi trường.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b61",
            "number": 61,
            "title": "Bài 29 (T2): Bác sĩ Y-éc-xanh",
            "chapter": "Tập 2 - Trái đất của chúng mình",
            "summary": "Tấm lòng nhân hậu và cống hiến y học của bác sĩ Yersin.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b62",
            "number": 62,
            "title": "Bài 30 (T2): Một mái nhà chung",
            "chapter": "Tập 2 - Trái đất của chúng mình",
            "summary": "Tình đoàn kết giữa con người và thiên nhiên.",
            "questions": []
          }
        ]
      },
      {
        "id": "tnxh-3",
        "name": "Tự nhiên và Xã hội",
        "icon": "🌿",
        "lessons": [
          {
            "id": "tnxh-3-b1",
            "number": 1,
            "title": "Bài 1: Họ nội, họ ngoại",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Mối quan hệ họ hàng bên nội, bên ngoại.",
            "questions": []
          },
          {
            "id": "tnxh-3-b2",
            "number": 2,
            "title": "Bài 2: Ngày kỉ niệm đáng nhớ của gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Các ngày lễ, giỗ, sinh nhật của gia đình.",
            "questions": []
          },
          {
            "id": "tnxh-3-b3",
            "number": 3,
            "title": "Bài 3: Phòng tránh hỏa hoạn khi ở nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Nguyên nhân gây cháy và kĩ năng thoát hiểm.",
            "questions": []
          },
          {
            "id": "tnxh-3-b4",
            "number": 4,
            "title": "Bài 4: Giữ vệ sinh xung quanh nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Dọn dẹp sân vườn, phòng tránh dịch bệnh.",
            "questions": []
          },
          {
            "id": "tnxh-3-b5",
            "number": 5,
            "title": "Bài 5: Hoạt động kết nối với cộng đồng",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Hoạt động thiện nguyện, bảo vệ môi trường ở trường.",
            "questions": []
          },
          {
            "id": "tnxh-3-b6",
            "number": 6,
            "title": "Bài 6: Truyền thống trường em",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Lịch sử và thành tích đáng tự hào của nhà trường.",
            "questions": []
          },
          {
            "id": "tnxh-3-b7",
            "number": 7,
            "title": "Bài 7: Giữ an toàn và vệ sinh ở trường",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "An toàn phòng thí nghiệm, sân chơi.",
            "questions": []
          },
          {
            "id": "tnxh-3-b8",
            "number": 8,
            "title": "Bài 8: Hoạt động sản xuất nông nghiệp",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Trồng trọt, chăn nuôi, đánh bắt thủy sản.",
            "questions": []
          },
          {
            "id": "tnxh-3-b9",
            "number": 9,
            "title": "Bài 9: Hoạt động sản xuất công nghiệp và thủ công",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Sản xuất hàng hóa ở nhà máy, làng nghề.",
            "questions": []
          },
          {
            "id": "tnxh-3-b10",
            "number": 10,
            "title": "Bài 10: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Giữ gìn di tích và cảnh đẹp địa phương.",
            "questions": []
          },
          {
            "id": "tnxh-3-b11",
            "number": 11,
            "title": "Bài 11: Các bộ phận của thực vật và chức năng của chúng",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Chức năng của rễ, thân, lá, hoa, quả.",
            "questions": []
          },
          {
            "id": "tnxh-3-b12",
            "number": 12,
            "title": "Bài 12: Các bộ phận của động vật và chức năng của chúng",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Cơ quan di chuyển và lớp bao phủ của động vật.",
            "questions": []
          },
          {
            "id": "tnxh-3-b13",
            "number": 13,
            "title": "Bài 13: Sử dụng hợp lí thực vật và động vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Bảo vệ đa dạng sinh học.",
            "questions": []
          },
          {
            "id": "tnxh-3-b14",
            "number": 14,
            "title": "Bài 14: Cơ quan tiêu hóa",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Miệng, thực quản, dạ dày, ruột non, ruột già.",
            "questions": []
          },
          {
            "id": "tnxh-3-b15",
            "number": 15,
            "title": "Bài 15: Chăm sóc và bảo vệ cơ quan tiêu hóa",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ăn chín uống sôi, ăn đúng giờ.",
            "questions": []
          },
          {
            "id": "tnxh-3-b16",
            "number": 16,
            "title": "Bài 16: Cơ quan tuần hoàn",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tim và các mạch máu đưa máu đi khắp cơ thể.",
            "questions": []
          },
          {
            "id": "tnxh-3-b17",
            "number": 17,
            "title": "Bài 17: Chăm sóc và bảo vệ cơ quan tuần hoàn",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tập thể dục điều độ, giữ tinh thần vui vẻ.",
            "questions": []
          },
          {
            "id": "tnxh-3-b18",
            "number": 18,
            "title": "Bài 18: Cơ quan thần kinh",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Não, tủy sống và các dây thần kinh.",
            "questions": []
          },
          {
            "id": "tnxh-3-b19",
            "number": 19,
            "title": "Bài 19: Chăm sóc và bảo vệ cơ quan thần kinh",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ngủ đủ giấc, tránh căng thẳng.",
            "questions": []
          },
          {
            "id": "tnxh-3-b20",
            "number": 20,
            "title": "Bài 20: Phương hướng",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "4 phương chính: Đông, Tây, Nam, Bắc; sử dụng la bàn.",
            "questions": []
          },
          {
            "id": "tnxh-3-b21",
            "number": 21,
            "title": "Bài 21: Trái Đất và các đới khí hậu",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Bề mặt Trái Đất, đới nóng, đới ôn hòa, đới lạnh.",
            "questions": []
          },
          {
            "id": "tnxh-3-b22",
            "number": 22,
            "title": "Bài 22: Hệ Mặt Trời",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Mặt Trời, Trái Đất và Mặt Trăng trong Hệ Mặt Trời.",
            "questions": []
          }
        ]
      },
      {
        "id": "daoduc-3",
        "name": "Đạo đức",
        "icon": "💖",
        "lessons": [
          {
            "id": "daoduc-3-b1",
            "number": 1,
            "title": "Bài 1: Chào cờ và hát Quốc ca",
            "chapter": "Chủ đề 1: Em yêu Tổ quốc Việt Nam",
            "summary": "Tư thế nghiêm trang khi chào cờ và hát Quốc ca.",
            "questions": []
          },
          {
            "id": "daoduc-3-b2",
            "number": 2,
            "title": "Bài 2: Tự hào Tổ quốc Việt Nam",
            "chapter": "Chủ đề 1: Em yêu Tổ quốc Việt Nam",
            "summary": "Giới thiệu cảnh đẹp, truyền thống Việt Nam.",
            "questions": []
          },
          {
            "id": "daoduc-3-b3",
            "number": 3,
            "title": "Bài 3: Quan tâm hàng xóm láng giềng",
            "chapter": "Chủ đề 2: Quan tâm hàng xóm láng giềng",
            "summary": "Lễ phép, giúp đỡ hàng xóm láng giềng.",
            "questions": []
          },
          {
            "id": "daoduc-3-b4",
            "number": 4,
            "title": "Bài 4: Ham học hỏi",
            "chapter": "Chủ đề 3: Ham học hỏi",
            "summary": "Chủ động đặt câu hỏi, đọc sách, tìm hiểu điều mới.",
            "questions": []
          },
          {
            "id": "daoduc-3-b5",
            "number": 5,
            "title": "Bài 5: Giữ lời hứa",
            "chapter": "Chủ đề 4: Giữ lời hứa",
            "summary": "Thực hiện đúng điều đã hứa với người khác.",
            "questions": []
          },
          {
            "id": "daoduc-3-b6",
            "number": 6,
            "title": "Bài 6: Tích cực hoàn thành nhiệm vụ",
            "chapter": "Chủ đề 5: Tích cực hoàn thành nhiệm vụ",
            "summary": "Hoàn thành nhiệm vụ học tập và trực nhật.",
            "questions": []
          },
          {
            "id": "daoduc-3-b7",
            "number": 7,
            "title": "Bài 7: Khám phá bản thân",
            "chapter": "Chủ đề 6: Khám phá bản thân",
            "summary": "Nhận biết điểm mạnh, điểm yếu của bản thân.",
            "questions": []
          },
          {
            "id": "daoduc-3-b8",
            "number": 8,
            "title": "Bài 8: Xử lí bất hòa với bạn bè",
            "chapter": "Chủ đề 7: Xử lí bất hòa với bạn bè",
            "summary": "Bình tĩnh lắng nghe, nhường nhịn khi bất hòa.",
            "questions": []
          },
          {
            "id": "daoduc-3-b9",
            "number": 9,
            "title": "Bài 9: Đi bộ an toàn",
            "chapter": "Chủ đề 8: Tuân thủ quy tắc an toàn giao thông",
            "summary": "Đi trên vỉa hè, qua đường đúng vạch kẻ.",
            "questions": []
          },
          {
            "id": "daoduc-3-b10",
            "number": 10,
            "title": "Bài 10: An toàn khi tham gia các phương tiện giao thông",
            "chapter": "Chủ đề 8: Tuân thủ quy tắc an toàn giao thông",
            "summary": "Đội mũ bảo hiểm, thắt dây an toàn.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-3",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-3-b1",
            "number": 1,
            "title": "Bài 1: Thông tin và quyết định",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Ba dạng thông tin: chữ, âm thanh, hình ảnh; ra quyết định từ thông tin.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b2",
            "number": 2,
            "title": "Bài 2: Xử lí thông tin",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Tiếp nhận, xử lí và lưu trữ thông tin.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b3",
            "number": 3,
            "title": "Bài 3: Máy tính - người bạn mới",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "4 bộ phận cơ bản: màn hình, thân máy, bàn phím, chuột.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b4",
            "number": 4,
            "title": "Bài 4: Làm việc với máy tính",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Ngồi đúng tư thế, thao tác chuột và tắt máy đúng cách.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b5",
            "number": 5,
            "title": "Bài 5: Sử dụng bàn phím",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Hàng phím cơ sở, đặt tay đúng quy tắc 10 ngón.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b6",
            "number": 6,
            "title": "Bài 6: Khám phá thông tin trên Internet",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Xem tin tức, hình ảnh lành mạnh trên web.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b7",
            "number": 7,
            "title": "Bài 7: Sắp xếp để dễ tìm",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Phân loại đồ vật, thông tin hợp lí.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b8",
            "number": 8,
            "title": "Bài 8: Sơ đồ hình cây. Tổ chức thông tin trong máy tính",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Tạo, đổi tên, xóa thư mục và tệp.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b9",
            "number": 9,
            "title": "Bài 9: Bảo vệ thông tin cá nhân",
            "chapter": "Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Không chia sẻ thông tin cá nhân cho người lạ trên mạng.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b10",
            "number": 10,
            "title": "Bài 10-12: Làm quen với bài trình chiếu PowerPoint",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tạo trang chiếu, gõ chữ, chèn ảnh và trình chiếu.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b11",
            "number": 11,
            "title": "Bài 13-16: Chia việc lớn thành việc nhỏ và thực hiện theo từng bước",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Tư duy từng bước (tuần tự) giải quyết vấn đề.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-3",
        "name": "Công nghệ",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-3-b1",
            "number": 1,
            "title": "Bài 1: Tự nhiên và công nghệ",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Phân biệt đối tượng tự nhiên và sản phẩm công nghệ.",
            "questions": []
          },
          {
            "id": "congnghe-3-b2",
            "number": 2,
            "title": "Bài 2: Sử dụng đèn học",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Các bộ phận đèn học và bật tắt an toàn, bảo vệ mắt.",
            "questions": []
          },
          {
            "id": "congnghe-3-b3",
            "number": 3,
            "title": "Bài 3: Sử dụng quạt điện",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Tác dụng, điều chỉnh tốc độ và an toàn khi dùng quạt.",
            "questions": []
          },
          {
            "id": "congnghe-3-b4",
            "number": 4,
            "title": "Bài 4: Sử dụng máy thu thanh",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Chức năng thu thanh (radio) và điều chỉnh âm lượng.",
            "questions": []
          },
          {
            "id": "congnghe-3-b5",
            "number": 5,
            "title": "Bài 5: Sử dụng máy thu hình",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Sử dụng ti vi an toàn, chọn kênh phù hợp lứa tuổi.",
            "questions": []
          },
          {
            "id": "congnghe-3-b6",
            "number": 6,
            "title": "Bài 6: An toàn với môi trường công nghệ trong gia đình",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Phòng tránh tai nạn điện, nhiệt trong nhà.",
            "questions": []
          },
          {
            "id": "congnghe-3-b7",
            "number": 7,
            "title": "Bài 7: Dụng cụ và vật liệu làm thủ công",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Sử dụng kéo, thước, bút chì, giấy thủ công an toàn.",
            "questions": []
          },
          {
            "id": "congnghe-3-b8",
            "number": 8,
            "title": "Bài 8: Làm đồ dùng học tập",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Thực hành làm thước kẻ hoặc hộp đựng bút.",
            "questions": []
          },
          {
            "id": "congnghe-3-b9",
            "number": 9,
            "title": "Bài 9: Làm biển báo giao thông",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Làm mô hình biển báo cấm, biển báo nguy hiểm.",
            "questions": []
          },
          {
            "id": "congnghe-3-b10",
            "number": 10,
            "title": "Bài 10: Làm đồ chơi",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Làm chong chóng hoặc máy bay giấy.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-3",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-3-b1",
            "number": 1,
            "title": "Unit 1: Hello",
            "chapter": "Unit 1: Hello",
            "summary": "Chào hỏi và tự giới thiệu tên: Hello, I'm... / How are you?",
            "questions": []
          },
          {
            "id": "tienganh-3-b2",
            "number": 2,
            "title": "Unit 2: Our names",
            "chapter": "Unit 2: Our names",
            "summary": "Hỏi tên và tuổi: What's your name? / How old are you?",
            "questions": []
          },
          {
            "id": "tienganh-3-b3",
            "number": 3,
            "title": "Unit 3: Our friends",
            "chapter": "Unit 3: Our friends",
            "summary": "Giới thiệu bạn bè: This is... / That is...",
            "questions": []
          },
          {
            "id": "tienganh-3-b4",
            "number": 4,
            "title": "Unit 4: Our bodies",
            "chapter": "Unit 4: Our bodies",
            "summary": "Các bộ phận cơ thể: ear, eye, face, hand, nose, mouth.",
            "questions": []
          },
          {
            "id": "tienganh-3-b5",
            "number": 5,
            "title": "Unit 5: My hobbies",
            "chapter": "Unit 5: My hobbies",
            "summary": "Sở thích: cooking, dancing, drawing, painting, singing, swimming.",
            "questions": []
          },
          {
            "id": "tienganh-3-b6",
            "number": 6,
            "title": "Unit 6: Our school",
            "chapter": "Unit 6: Our school",
            "summary": "Phòng học ở trường: art room, classroom, gym, library, playground.",
            "questions": []
          },
          {
            "id": "tienganh-3-b7",
            "number": 7,
            "title": "Unit 7: Classroom instructions",
            "chapter": "Unit 7: Classroom instructions",
            "summary": "Mệnh lệnh lớp học: Open your book, Stand up, Sit down.",
            "questions": []
          },
          {
            "id": "tienganh-3-b8",
            "number": 8,
            "title": "Unit 8: My school things",
            "chapter": "Unit 8: My school things",
            "summary": "Đồ dùng học tập: book, notebook, pen, pencil, ruler.",
            "questions": []
          },
          {
            "id": "tienganh-3-b9",
            "number": 9,
            "title": "Unit 9: Colours",
            "chapter": "Unit 9: Colours",
            "summary": "Màu sắc: blue, brown, green, orange, red, yellow.",
            "questions": []
          },
          {
            "id": "tienganh-3-b10",
            "number": 10,
            "title": "Unit 10: Break time activities",
            "chapter": "Unit 10: Break time activities",
            "summary": "Hoạt động giờ ra chơi: chess, badminton, football, skipping.",
            "questions": []
          },
          {
            "id": "tienganh-3-b11",
            "number": 11,
            "title": "Unit 11: My family",
            "chapter": "Unit 11: My family",
            "summary": "Thành viên gia đình và hỏi tuổi.",
            "questions": []
          },
          {
            "id": "tienganh-3-b12",
            "number": 12,
            "title": "Unit 12: Jobs",
            "chapter": "Unit 12: Jobs",
            "summary": "Nghề nghiệp: cook, doctor, driver, farmer, nurse, teacher.",
            "questions": []
          },
          {
            "id": "tienganh-3-b13",
            "number": 13,
            "title": "Unit 13: My house",
            "chapter": "Unit 13: My house",
            "summary": "Các phòng trong nhà: bathroom, bedroom, kitchen, living room.",
            "questions": []
          },
          {
            "id": "tienganh-3-b14",
            "number": 14,
            "title": "Unit 14: My bedroom",
            "chapter": "Unit 14: My bedroom",
            "summary": "Đồ đạc trong phòng ngủ: bed, desk, door, lamp, window.",
            "questions": []
          },
          {
            "id": "tienganh-3-b15",
            "number": 15,
            "title": "Unit 15: At the dining table",
            "chapter": "Unit 15: At the dining table",
            "summary": "Đồ ăn thức uống: beans, bread, chicken, fish, juice, milk.",
            "questions": []
          },
          {
            "id": "tienganh-3-b16",
            "number": 16,
            "title": "Unit 16: My pets",
            "chapter": "Unit 16: My pets",
            "summary": "Thú cưng: bird, cat, dog, goldfish, parrot, rabbit.",
            "questions": []
          },
          {
            "id": "tienganh-3-b17",
            "number": 17,
            "title": "Unit 17: Our toys",
            "chapter": "Unit 17: Our toys",
            "summary": "Đồ chơi: car, kite, plane, ship, teddy bear, train.",
            "questions": []
          },
          {
            "id": "tienganh-3-b18",
            "number": 18,
            "title": "Unit 18: Playing and doing",
            "chapter": "Unit 18: Playing and doing",
            "summary": "Thì Hiện tại tiếp diễn: What are you doing?",
            "questions": []
          },
          {
            "id": "tienganh-3-b19",
            "number": 19,
            "title": "Unit 19: Outdoor activities",
            "chapter": "Unit 19: Outdoor activities",
            "summary": "Hoạt động ngoài trời: cycling, flying a kite, skating.",
            "questions": []
          },
          {
            "id": "tienganh-3-b20",
            "number": 20,
            "title": "Unit 20: At the zoo",
            "chapter": "Unit 20: At the zoo",
            "summary": "Động vật sở thú: elephant, monkey, peacock, tiger.",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-3",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-3-b1",
            "number": 1,
            "title": "Chủ đề 1: Vui đón khai trường",
            "chapter": "Chủ đề 1: Vui đón khai trường",
            "summary": "Hát Khai trường, Em yêu giờ học hát; thực hành nhạc cụ gõ và sáo recorder.",
            "questions": []
          },
          {
            "id": "amnhac-3-b2",
            "number": 2,
            "title": "Chủ đề 2: Âm thanh ngày mới",
            "chapter": "Chủ đề 2: Âm thanh ngày mới",
            "summary": "Hát Tiếng hát bạn bè mình; đọc nhạc Đô-Rê-Mi-Pha-Son.",
            "questions": []
          },
          {
            "id": "amnhac-3-b3",
            "number": 3,
            "title": "Chủ đề 3: Giai điệu quê hương",
            "chapter": "Chủ đề 3: Giai điệu quê hương",
            "summary": "Nghe dân ca các vùng miền; hát Cây trúc xinh.",
            "questions": []
          },
          {
            "id": "amnhac-3-b4",
            "number": 4,
            "title": "Chủ đề 4: Nhịp điệu bạn bè",
            "chapter": "Chủ đề 4: Nhịp điệu bạn bè",
            "summary": "Hát Cùng múa hát dưới trăng; gõ đệm theo tiết tấu.",
            "questions": []
          },
          {
            "id": "amnhac-3-b5",
            "number": 5,
            "title": "Chủ đề 5: Mùa xuân và tuổi thơ",
            "chapter": "Chủ đề 5: Mùa xuân và tuổi thơ",
            "summary": "Hát Mùa xuân ơi, Bông hoa mừng cô; cảm nhận sắc thái âm nhạc.",
            "questions": []
          },
          {
            "id": "amnhac-3-b6",
            "number": 6,
            "title": "Chủ đề 6: Em yêu Tổ quốc",
            "chapter": "Chủ đề 6: Em yêu Tổ quốc",
            "summary": "Hát Tổ quốc ta; nghe nhạc cụ dân tộc (đàn bầu, đàn tranh).",
            "questions": []
          },
          {
            "id": "amnhac-3-b7",
            "number": 7,
            "title": "Chủ đề 7: Chắp cánh ước mơ",
            "chapter": "Chủ đề 7: Chắp cánh ước mơ",
            "summary": "Hát Ước mơ hồng; thực hành đọc nhạc kết hợp vận động.",
            "questions": []
          },
          {
            "id": "amnhac-3-b8",
            "number": 8,
            "title": "Chủ đề 8: Vui bước đến tương lai",
            "chapter": "Chủ đề 8: Vui bước đến tương lai",
            "summary": "Hát Tạm biệt lớp 3; ôn tập biểu diễn tổng kết năm học.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-3",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-3-b1",
            "number": 1,
            "title": "Chủ đề 1: Thế giới chấm và nét",
            "chapter": "Chủ đề 1: Thế giới chấm và nét",
            "summary": "Kết hợp chấm và nét tạo nhịp điệu trong tranh.",
            "questions": []
          },
          {
            "id": "mithuat-3-b2",
            "number": 2,
            "title": "Chủ đề 2: Sắc màu thiên nhiên",
            "chapter": "Chủ đề 2: Sắc màu thiên nhiên",
            "summary": "Phân biệt màu nóng, màu lạnh và ứng dụng vẽ thiên nhiên.",
            "questions": []
          },
          {
            "id": "mithuat-3-b3",
            "number": 3,
            "title": "Chủ đề 3: Hình khối trong đời sống",
            "chapter": "Chủ đề 3: Hình khối trong đời sống",
            "summary": "Quan sát và tạo hình đồ vật từ hình khối cơ bản.",
            "questions": []
          },
          {
            "id": "mithuat-3-b4",
            "number": 4,
            "title": "Chủ đề 4: Cổng trường rộn ràng",
            "chapter": "Chủ đề 4: Cổng trường rộn ràng",
            "summary": "Vẽ tranh đề tài ngày khai trường, giờ ra chơi.",
            "questions": []
          },
          {
            "id": "mithuat-3-b5",
            "number": 5,
            "title": "Chủ đề 5: Ngôi nhà yêu thương",
            "chapter": "Chủ đề 5: Ngôi nhà yêu thương",
            "summary": "Tạo hình kiến trúc ngôi nhà và cảnh quan xung quanh.",
            "questions": []
          },
          {
            "id": "mithuat-3-b6",
            "number": 6,
            "title": "Chủ đề 6: Thiên nhiên và cuộc sống",
            "chapter": "Chủ đề 6: Thiên nhiên và cuộc sống",
            "summary": "Vẽ tranh bảo vệ thiên nhiên, trồng cây xanh.",
            "questions": []
          },
          {
            "id": "mithuat-3-b7",
            "number": 7,
            "title": "Chủ đề 7: Nét đẹp truyền thống",
            "chapter": "Chủ đề 7: Nét đẹp truyền thống",
            "summary": "Tìm hiểu họa tiết dân gian và trang trí đồ vật.",
            "questions": []
          },
          {
            "id": "mithuat-3-b8",
            "number": 8,
            "title": "Chủ đề 8: Vui hội làng",
            "chapter": "Chủ đề 8: Vui hội làng",
            "summary": "Vẽ hoặc xé dán tranh về lễ hội truyền thống quê hương.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-3",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-3-b1",
            "number": 1,
            "title": "Vệ sinh sân bãi, dụng cụ và an toàn tập luyện",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Kiểm tra an toàn trước khi vận động và sơ cứu chấn thương nhẹ.",
            "questions": []
          },
          {
            "id": "gdtc-3-b2",
            "number": 2,
            "title": "Chủ đề 1: Đội hình đội ngũ",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Biến đổi đội hình 1 hàng thành 2-3 hàng, dóng hàng, điểm số.",
            "questions": []
          },
          {
            "id": "gdtc-3-b3",
            "number": 3,
            "title": "Chủ đề 2: Bài tập thể dục",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Bài thể dục phát triển chung với cờ hoặc không dụng cụ.",
            "questions": []
          },
          {
            "id": "gdtc-3-b4",
            "number": 4,
            "title": "Chủ đề 3: Tư thế và kĩ năng vận động cơ bản",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Đi nhanh chuyển sang chạy, bật xa tại chỗ, tung và bắt bóng.",
            "questions": []
          },
          {
            "id": "gdtc-3-b5",
            "number": 5,
            "title": "Chủ đề 1: Môn Bóng rổ / Cầu lông",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Dẫn bóng đổi hướng, truyền bóng hoặc làm quen vợt cầu lông.",
            "questions": []
          },
          {
            "id": "gdtc-3-b6",
            "number": 6,
            "title": "Chủ đề 2: Môn Bơi / Đá cầu",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Kĩ thuật đạp chân ếch hoặc tâng cầu bằng mu bàn chân.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-3",
        "name": "Hoạt động trải nghiệm",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-3-b1",
            "number": 1,
            "title": "Chủ đề 1: Em và mái trường thân yêu",
            "chapter": "Chủ đề 1: Em và mái trường thân yêu",
            "summary": "Tìm hiểu truyền thống nhà trường, xây dựng nội quy lớp học.",
            "questions": []
          },
          {
            "id": "hdtn-3-b2",
            "number": 2,
            "title": "Chủ đề 2: Khám phá bản thân",
            "chapter": "Chủ đề 2: Khám phá bản thân",
            "summary": "Nhận biết cảm xúc cá nhân và cách kiểm soát cảm xúc tích cực.",
            "questions": []
          },
          {
            "id": "hdtn-3-b3",
            "number": 3,
            "title": "Chủ đề 3: Rèn luyện thói quen tốt",
            "chapter": "Chủ đề 3: Rèn luyện thói quen tốt",
            "summary": "Lập thời gian biểu học tập, vui chơi hợp lí mỗi ngày.",
            "questions": []
          },
          {
            "id": "hdtn-3-b4",
            "number": 4,
            "title": "Chủ đề 4: An toàn khi ở nhà và ở trường",
            "chapter": "Chủ đề 4: An toàn khi ở nhà và ở trường",
            "summary": "Nhận diện nguy cơ hỏa hoạn, tai nạn giao thông và kĩ năng thoát hiểm.",
            "questions": []
          },
          {
            "id": "hdtn-3-b5",
            "number": 5,
            "title": "Chủ đề 5: Gia đình yêu thương",
            "chapter": "Chủ đề 5: Gia đình yêu thương",
            "summary": "Thực hành tiết kiệm chi tiêu trong gia đình và chăm sóc người thân.",
            "questions": []
          },
          {
            "id": "hdtn-3-b6",
            "number": 6,
            "title": "Chủ đề 6: Cộng đồng quanh em",
            "chapter": "Chủ đề 6: Cộng đồng quanh em",
            "summary": "Ứng xử văn minh nơi công cộng và tham gia hoạt động thiện nguyện.",
            "questions": []
          },
          {
            "id": "hdtn-3-b7",
            "number": 7,
            "title": "Chủ đề 7: Trái đất và ngôi nhà chung",
            "chapter": "Chủ đề 7: Trái đất và ngôi nhà chung",
            "summary": "Bảo vệ nguồn nước, giữ gìn cảnh quan thiên nhiên địa phương.",
            "questions": []
          },
          {
            "id": "hdtn-3-b8",
            "number": 8,
            "title": "Chủ đề 8: Nghề nghiệp trong đời sống",
            "chapter": "Chủ đề 8: Nghề nghiệp trong đời sống",
            "summary": "Khám phá lợi ích và yêu cầu an toàn của một số nghề phổ biến.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 4,
    "label": "Lớp 4",
    "level": "Tiểu học",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=4",
    "subjects": [
      {
        "id": "toan-4",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-4-b1",
            "number": 1,
            "title": "Bài 1: Ôn tập các số đến 100 000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đọc, viết, cấu tạo và so sánh số đến 100 000.",
            "questions": []
          },
          {
            "id": "toan-4-b2",
            "number": 2,
            "title": "Bài 2: Ôn tập các phép tính trong phạm vi 100 000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Cộng, trừ, nhân, chia trong phạm vi 100 000.",
            "questions": []
          },
          {
            "id": "toan-4-b3",
            "number": 3,
            "title": "Bài 3: Số chẵn, số lẻ",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Số chẵn tận cùng 0, 2, 4, 6, 8; số lẻ tận cùng 1, 3, 5, 7, 9.",
            "questions": []
          },
          {
            "id": "toan-4-b4",
            "number": 4,
            "title": "Bài 4: Biểu thức chứa chữ",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Tính giá trị biểu thức chứa 1, 2, 3 chữ.",
            "questions": []
          },
          {
            "id": "toan-4-b5",
            "number": 5,
            "title": "Bài 5: Giải bài toán có ba bước tính",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Phân tích và giải bài toán có lời văn 3 bước tính.",
            "questions": []
          },
          {
            "id": "toan-4-b6",
            "number": 6,
            "title": "Bài 6: Luyện tập chung",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Củng cố Chủ đề 1.",
            "questions": []
          },
          {
            "id": "toan-4-b7",
            "number": 7,
            "title": "Bài 7: Đo góc, đơn vị đo góc",
            "chapter": "Chủ đề 2: Góc và đơn vị đo góc",
            "summary": "Dùng thước đo góc, đơn vị độ (°).",
            "questions": []
          },
          {
            "id": "toan-4-b8",
            "number": 8,
            "title": "Bài 8: Góc nhọn, góc tù, góc bẹt",
            "chapter": "Chủ đề 2: Góc và đơn vị đo góc",
            "summary": "Nhận biết góc nhọn (<90°), vuông (90°), tù (>90°), bẹt (180°).",
            "questions": []
          },
          {
            "id": "toan-4-b9",
            "number": 9,
            "title": "Bài 9: Luyện tập chung",
            "chapter": "Chủ đề 2: Góc và đơn vị đo góc",
            "summary": "Củng cố đo và phân loại góc.",
            "questions": []
          },
          {
            "id": "toan-4-b10",
            "number": 10,
            "title": "Bài 10: Số có sáu chữ số. Số 1 000 000",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "Hàng trăm nghìn và số một triệu.",
            "questions": []
          },
          {
            "id": "toan-4-b11",
            "number": 11,
            "title": "Bài 11: Hàng và lớp",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "Lớp đơn vị, lớp nghìn, lớp triệu.",
            "questions": []
          },
          {
            "id": "toan-4-b12",
            "number": 12,
            "title": "Bài 12: Các số trong phạm vi lớp triệu",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "Đọc, viết số đến hàng trăm triệu.",
            "questions": []
          },
          {
            "id": "toan-4-b13",
            "number": 13,
            "title": "Bài 13: Làm tròn số đến hàng trăm nghìn",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "Quy tắc làm tròn số đến hàng trăm nghìn.",
            "questions": []
          },
          {
            "id": "toan-4-b14",
            "number": 14,
            "title": "Bài 14: So sánh các số có nhiều chữ số",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "So sánh số chữ số rồi đến giá trị từng hàng.",
            "questions": []
          },
          {
            "id": "toan-4-b15",
            "number": 15,
            "title": "Bài 15: Làm quen với dãy số tự nhiên",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "Dãy số tự nhiên 0, 1, 2, 3... vô hạn.",
            "questions": []
          },
          {
            "id": "toan-4-b16",
            "number": 16,
            "title": "Bài 16: Luyện tập chung",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "Củng cố số có nhiều chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b17",
            "number": 17,
            "title": "Bài 17: Yến, tạ, tấn",
            "chapter": "Chủ đề 4: Một số đơn vị đo đại lượng",
            "summary": "1 yến = 10 kg; 1 tạ = 100 kg; 1 tấn = 1 000 kg.",
            "questions": []
          },
          {
            "id": "toan-4-b18",
            "number": 18,
            "title": "Bài 18: Đề-xi-mét vuông, mét vuông, mi-li-mét vuông",
            "chapter": "Chủ đề 4: Một số đơn vị đo đại lượng",
            "summary": "1 m² = 100 dm²; 1 dm² = 100 cm²; 1 cm² = 100 mm².",
            "questions": []
          },
          {
            "id": "toan-4-b19",
            "number": 19,
            "title": "Bài 19: Giây, thế kỉ",
            "chapter": "Chủ đề 4: Một số đơn vị đo đại lượng",
            "summary": "1 phút = 60 giây; 1 thế kỉ = 100 năm.",
            "questions": []
          },
          {
            "id": "toan-4-b20",
            "number": 20,
            "title": "Bài 20: Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng",
            "chapter": "Chủ đề 4: Một số đơn vị đo đại lượng",
            "summary": "Ước lượng và đổi đơn vị đo thực tế.",
            "questions": []
          },
          {
            "id": "toan-4-b21",
            "number": 21,
            "title": "Bài 21: Luyện tập chung",
            "chapter": "Chủ đề 4: Một số đơn vị đo đại lượng",
            "summary": "Củng cố đơn vị đo.",
            "questions": []
          },
          {
            "id": "toan-4-b22",
            "number": 22,
            "title": "Bài 22: Phép cộng các số có nhiều chữ số",
            "chapter": "Chủ đề 5: Phép cộng và phép trừ",
            "summary": "Đặt tính cộng số có nhiều chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b23",
            "number": 23,
            "title": "Bài 23: Phép trừ các số có nhiều chữ số",
            "chapter": "Chủ đề 5: Phép cộng và phép trừ",
            "summary": "Đặt tính trừ số có nhiều chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b24",
            "number": 24,
            "title": "Bài 24: Tính chất giao hoán và tính chất kết hợp của phép cộng",
            "chapter": "Chủ đề 5: Phép cộng và phép trừ",
            "summary": "Vận dụng tính nhanh tổng.",
            "questions": []
          },
          {
            "id": "toan-4-b25",
            "number": 25,
            "title": "Bài 25: Tìm hai số biết tổng và hiệu của hai số đó",
            "chapter": "Chủ đề 5: Phép cộng và phép trừ",
            "summary": "Số lớn = (Tổng + Hiệu)/2; Số bé = (Tổng - Hiệu)/2.",
            "questions": [
              {
                "content": "Tổng của hai số là 50, hiệu của hai số là 10. Số lớn là bao nhiêu?",
                "option_a": "20",
                "option_b": "30",
                "option_c": "40",
                "option_d": "25",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-4-b26",
            "number": 26,
            "title": "Bài 26: Luyện tập chung",
            "chapter": "Chủ đề 5: Phép cộng và phép trừ",
            "summary": "Củng cố phép cộng, trừ và bài toán tổng - hiệu.",
            "questions": []
          },
          {
            "id": "toan-4-b27",
            "number": 27,
            "title": "Bài 27: Hai đường thẳng vuông góc",
            "chapter": "Chủ đề 6: Đường thẳng vuông góc. Đường thẳng song song",
            "summary": "Nhận biết và kiểm tra bằng ê ke.",
            "questions": []
          },
          {
            "id": "toan-4-b28",
            "number": 28,
            "title": "Bài 28: Thực hành và trải nghiệm vẽ hai đường thẳng vuông góc",
            "chapter": "Chủ đề 6: Đường thẳng vuông góc. Đường thẳng song song",
            "summary": "Vẽ hai đường thẳng vuông góc bằng ê ke.",
            "questions": []
          },
          {
            "id": "toan-4-b29",
            "number": 29,
            "title": "Bài 29: Hai đường thẳng song song",
            "chapter": "Chủ đề 6: Đường thẳng vuông góc. Đường thẳng song song",
            "summary": "Hai đường thẳng song song không bao giờ cắt nhau.",
            "questions": []
          },
          {
            "id": "toan-4-b30",
            "number": 30,
            "title": "Bài 30: Thực hành và trải nghiệm vẽ hai đường thẳng song song",
            "chapter": "Chủ đề 6: Đường thẳng vuông góc. Đường thẳng song song",
            "summary": "Vẽ hai đường thẳng song song.",
            "questions": []
          },
          {
            "id": "toan-4-b31",
            "number": 31,
            "title": "Bài 31: Hình bình hành, hình thoi",
            "chapter": "Chủ đề 6: Đường thẳng vuông góc. Đường thẳng song song",
            "summary": "Đặc điểm cạnh đối, đường chéo của hình bình hành và hình thoi.",
            "questions": []
          },
          {
            "id": "toan-4-b32",
            "number": 32,
            "title": "Bài 32: Luyện tập chung",
            "chapter": "Chủ đề 6: Đường thẳng vuông góc. Đường thẳng song song",
            "summary": "Củng cố hình học.",
            "questions": []
          },
          {
            "id": "toan-4-b33",
            "number": 33,
            "title": "Bài 33: Ôn tập các số đến lớp triệu",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập số có nhiều chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b34",
            "number": 34,
            "title": "Bài 34: Ôn tập phép cộng, phép trừ",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập cộng trừ HK1.",
            "questions": []
          },
          {
            "id": "toan-4-b35",
            "number": 35,
            "title": "Bài 35: Ôn tập hình học",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập góc, vuông góc, song song, hình bình hành, hình thoi.",
            "questions": []
          },
          {
            "id": "toan-4-b36",
            "number": 36,
            "title": "Bài 36: Ôn tập đo lường",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Ôn tập đơn vị khối lượng, diện tích, thời gian.",
            "questions": []
          },
          {
            "id": "toan-4-b37",
            "number": 37,
            "title": "Bài 37: Ôn tập chung",
            "chapter": "Chủ đề 7: Ôn tập học kì 1",
            "summary": "Tổng ôn HK1.",
            "questions": []
          },
          {
            "id": "toan-4-b38",
            "number": 38,
            "title": "Bài 38: Nhân với số có một chữ số",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Đặt tính nhân với số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b39",
            "number": 39,
            "title": "Bài 39: Chia cho số có một chữ số",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Chia số có nhiều chữ số cho số có 1 chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b40",
            "number": 40,
            "title": "Bài 40: Tính chất giao hoán và kết hợp của phép nhân",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "a x b = b x a; (a x b) x c = a x (b x c).",
            "questions": []
          },
          {
            "id": "toan-4-b41",
            "number": 41,
            "title": "Bài 41: Nhân, chia với 10, 100, 1 000, ...",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Thêm/bớt chữ số 0 ở tận cùng.",
            "questions": []
          },
          {
            "id": "toan-4-b42",
            "number": 42,
            "title": "Bài 42: Tính chất phân phối của phép nhân đối với phép cộng",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "a x (b + c) = a x b + a x c.",
            "questions": []
          },
          {
            "id": "toan-4-b43",
            "number": 43,
            "title": "Bài 43: Nhân với số có hai chữ số",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Đặt tính nhân với số có hai chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b44",
            "number": 44,
            "title": "Bài 44: Chia cho số có hai chữ số",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Ước lượng thương khi chia cho số có hai chữ số.",
            "questions": []
          },
          {
            "id": "toan-4-b45",
            "number": 45,
            "title": "Bài 45: Thực hành và trải nghiệm ước lượng trong tính toán",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Ước lượng kết quả phép tính.",
            "questions": []
          },
          {
            "id": "toan-4-b46",
            "number": 46,
            "title": "Bài 46: Tìm số trung bình cộng",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Trung bình cộng = Tổng các số : Số các số hạng.",
            "questions": [
              {
                "content": "Số trung bình cộng của ba số 12, 18 và 24 là:",
                "option_a": "16",
                "option_b": "18",
                "option_c": "20",
                "option_d": "54",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-4-b47",
            "number": 47,
            "title": "Bài 47: Bài toán liên quan đến rút về đơn vị",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Tìm giá trị 1 phần rồi tính nhiều phần.",
            "questions": []
          },
          {
            "id": "toan-4-b48",
            "number": 48,
            "title": "Bài 48: Luyện tập chung",
            "chapter": "Chủ đề 8: Phép nhân và phép chia",
            "summary": "Củng cố nhân chia.",
            "questions": []
          },
          {
            "id": "toan-4-b49",
            "number": 49,
            "title": "Bài 49: Dãy số liệu",
            "chapter": "Chủ đề 9: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Đọc, sắp xếp dãy số liệu thống kê.",
            "questions": []
          },
          {
            "id": "toan-4-b50",
            "number": 50,
            "title": "Bài 50: Biểu đồ cột",
            "chapter": "Chủ đề 9: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Đọc và phân tích biểu đồ cột.",
            "questions": []
          },
          {
            "id": "toan-4-b51",
            "number": 51,
            "title": "Bài 51: Số lần xuất hiện của một sự kiện",
            "chapter": "Chủ đề 9: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Kiểm đếm số lần xảy ra sự kiện.",
            "questions": []
          },
          {
            "id": "toan-4-b52",
            "number": 52,
            "title": "Bài 52: Luyện tập chung",
            "chapter": "Chủ đề 9: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Củng cố thống kê xác suất.",
            "questions": []
          },
          {
            "id": "toan-4-b53",
            "number": 53,
            "title": "Bài 53: Khái niệm phân số",
            "chapter": "Chủ đề 10: Phân số",
            "summary": "Tử số và mẫu số (khác 0) của phân số.",
            "questions": []
          },
          {
            "id": "toan-4-b54",
            "number": 54,
            "title": "Bài 54: Phân số và phép chia số tự nhiên",
            "chapter": "Chủ đề 10: Phân số",
            "summary": "Thương của phép chia a : b viết thành a/b.",
            "questions": []
          },
          {
            "id": "toan-4-b55",
            "number": 55,
            "title": "Bài 55: Tính chất cơ bản của phân số",
            "chapter": "Chủ đề 10: Phân số",
            "summary": "Nhân hoặc chia cả tử và mẫu cho cùng một số tự nhiên khác 0.",
            "questions": []
          },
          {
            "id": "toan-4-b56",
            "number": 56,
            "title": "Bài 56: Rút gọn phân số",
            "chapter": "Chủ đề 10: Phân số",
            "summary": "Rút gọn về phân số tối giản.",
            "questions": []
          },
          {
            "id": "toan-4-b57",
            "number": 57,
            "title": "Bài 57: Quy đồng mẫu số các phân số",
            "chapter": "Chủ đề 10: Phân số",
            "summary": "Quy đồng mẫu số chung.",
            "questions": []
          },
          {
            "id": "toan-4-b58",
            "number": 58,
            "title": "Bài 58: So sánh phân số",
            "chapter": "Chủ đề 10: Phân số",
            "summary": "So sánh cùng mẫu và khác mẫu.",
            "questions": []
          },
          {
            "id": "toan-4-b59",
            "number": 59,
            "title": "Bài 59: Luyện tập chung",
            "chapter": "Chủ đề 10: Phân số",
            "summary": "Củng cố khái niệm và so sánh phân số.",
            "questions": []
          },
          {
            "id": "toan-4-b60",
            "number": 60,
            "title": "Bài 60: Phép cộng phân số",
            "chapter": "Chủ đề 11: Phép cộng, phép trừ phân số",
            "summary": "Cộng phân số cùng mẫu và khác mẫu.",
            "questions": []
          },
          {
            "id": "toan-4-b61",
            "number": 61,
            "title": "Bài 61: Phép trừ phân số",
            "chapter": "Chủ đề 11: Phép cộng, phép trừ phân số",
            "summary": "Trừ phân số cùng mẫu và khác mẫu.",
            "questions": []
          },
          {
            "id": "toan-4-b62",
            "number": 62,
            "title": "Bài 62: Luyện tập chung",
            "chapter": "Chủ đề 11: Phép cộng, phép trừ phân số",
            "summary": "Củng cố cộng trừ phân số.",
            "questions": []
          },
          {
            "id": "toan-4-b63",
            "number": 63,
            "title": "Bài 63: Phép nhân phân số",
            "chapter": "Chủ đề 12: Phép nhân, phép chia phân số",
            "summary": "Tử nhân tử, mẫu nhân mẫu.",
            "questions": []
          },
          {
            "id": "toan-4-b64",
            "number": 64,
            "title": "Bài 64: Phép chia phân số",
            "chapter": "Chủ đề 12: Phép nhân, phép chia phân số",
            "summary": "Nhân với phân số đảo ngược.",
            "questions": []
          },
          {
            "id": "toan-4-b65",
            "number": 65,
            "title": "Bài 65: Tìm phân số của một số",
            "chapter": "Chủ đề 12: Phép nhân, phép chia phân số",
            "summary": "Lấy số đó nhân với phân số.",
            "questions": []
          },
          {
            "id": "toan-4-b66",
            "number": 66,
            "title": "Bài 66: Luyện tập chung",
            "chapter": "Chủ đề 12: Phép nhân, phép chia phân số",
            "summary": "Củng cố nhân chia phân số.",
            "questions": []
          },
          {
            "id": "toan-4-b67",
            "number": 67,
            "title": "Bài 67: Ôn tập số tự nhiên",
            "chapter": "Chủ đề 13: Ôn tập cuối năm",
            "summary": "Ôn tập số tự nhiên.",
            "questions": []
          },
          {
            "id": "toan-4-b68",
            "number": 68,
            "title": "Bài 68: Ôn tập phép tính với số tự nhiên",
            "chapter": "Chủ đề 13: Ôn tập cuối năm",
            "summary": "Ôn tập 4 phép tính số tự nhiên.",
            "questions": []
          },
          {
            "id": "toan-4-b69",
            "number": 69,
            "title": "Bài 69: Ôn tập phân số",
            "chapter": "Chủ đề 13: Ôn tập cuối năm",
            "summary": "Ôn tập rút gọn, quy đồng, so sánh phân số.",
            "questions": []
          },
          {
            "id": "toan-4-b70",
            "number": 70,
            "title": "Bài 70: Ôn tập phép tính với phân số",
            "chapter": "Chủ đề 13: Ôn tập cuối năm",
            "summary": "Ôn tập cộng, trừ, nhân, chia phân số.",
            "questions": []
          },
          {
            "id": "toan-4-b71",
            "number": 71,
            "title": "Bài 71: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 13: Ôn tập cuối năm",
            "summary": "Ôn tập hình học và đơn vị đo.",
            "questions": []
          },
          {
            "id": "toan-4-b72",
            "number": 72,
            "title": "Bài 72: Ôn tập một số yếu tố thống kê và xác suất",
            "chapter": "Chủ đề 13: Ôn tập cuối năm",
            "summary": "Ôn tập thống kê xác suất.",
            "questions": []
          },
          {
            "id": "toan-4-b73",
            "number": 73,
            "title": "Bài 73: Ôn tập chung",
            "chapter": "Chủ đề 13: Ôn tập cuối năm",
            "summary": "Tổng ôn Toán lớp 4.",
            "questions": []
          }
        ]
      },
      {
        "id": "khoahoc-4",
        "name": "Khoa học",
        "icon": "🔬",
        "lessons": [
          {
            "id": "khoahoc-4-b1",
            "number": 1,
            "title": "Bài 1: Tính chất của nước và nước với cuộc sống",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Nước trong suốt, không màu, không mùi, không vị, không có hình dạng nhất định, chảy từ cao xuống thấp.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b2",
            "number": 2,
            "title": "Bài 2: Sự chuyển thể của nước và vòng tuần hoàn của nước trong tự nhiên",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Rắn - lỏng - khí; bay hơi, ngưng tụ, đóng băng, nóng chảy.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b3",
            "number": 3,
            "title": "Bài 3: Sự ô nhiễm và bảo vệ nguồn nước. Một số cách làm sạch nước",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Lọc, khử trùng, đun sôi và tiết kiệm nước.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b4",
            "number": 4,
            "title": "Bài 4: Không khí có ở đâu? Tính chất và thành phần của không khí",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Không khí gồm Nitrogen, Oxygen, CO2 và hơi nước; có thể bị nén lại.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b5",
            "number": 5,
            "title": "Bài 5: Vai trò của không khí và bảo vệ bầu không khí trong lành",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Oxygen duy trì sự sống và sự cháy.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b6",
            "number": 6,
            "title": "Bài 6: Gió, bão và phòng chống bão",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Gió sinh ra do không khí chuyển động từ nơi lạnh sang nơi nóng.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b7",
            "number": 7,
            "title": "Bài 7: Ôn tập chủ đề Chất",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Củng cố kiến thức về nước và không khí.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b8",
            "number": 8,
            "title": "Bài 8: Ánh sáng và sự truyền ánh sáng",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Vật tự phát sáng, vật được chiếu sáng; ánh sáng truyền thẳng; vật cho/không cho ánh sáng truyền qua.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b9",
            "number": 9,
            "title": "Bài 9: Vai trò của ánh sáng",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Ánh sáng giúp nhìn thấy vật, cây quang hợp và sưởi ấm; bảo vệ mắt.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b10",
            "number": 10,
            "title": "Bài 10: Âm thanh và sự truyền âm thanh",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Âm thanh phát ra khi vật rung động; truyền qua rắn, lỏng, khí.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b11",
            "number": 11,
            "title": "Bài 11: Âm thanh trong cuộc sống",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Vai trò âm thanh và phòng chống tiếng ồn.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b12",
            "number": 12,
            "title": "Bài 12: Nhiệt độ và sự truyền nhiệt",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Nhiệt truyền từ vật nóng hơn sang vật lạnh hơn.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b13",
            "number": 13,
            "title": "Bài 13: Vật dẫn nhiệt tốt, vật dẫn nhiệt kém",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Kim loại dẫn nhiệt tốt; gỗ, nhựa, len dẫn nhiệt kém.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b14",
            "number": 14,
            "title": "Bài 14: Ôn tập chủ đề Năng lượng",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Củng cố ánh sáng, âm thanh, nhiệt.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b15",
            "number": 15,
            "title": "Bài 15: Thực vật cần gì để sống?",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Thực vật cần ánh sáng, không khí, nước, chất khoáng và nhiệt độ thích hợp.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b16",
            "number": 16,
            "title": "Bài 16: Động vật cần gì để sống?",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Động vật cần thức ăn, nước uống, không khí, ánh sáng và nhiệt độ.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b17",
            "number": 17,
            "title": "Bài 17: Chăm sóc cây trồng, vật nuôi",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Tưới nước, bón phân, tiêm phòng cho vật nuôi.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b18",
            "number": 18,
            "title": "Bài 18: Ôn tập chủ đề Thực vật và động vật",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Củng cố nhu cầu sống của sinh vật.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b19",
            "number": 19,
            "title": "Bài 19: Đặc điểm chung của nấm",
            "chapter": "Chủ đề 4: Nấm",
            "summary": "Hình dạng, kích thước, nơi sống ẩm ướt của nấm.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b20",
            "number": 20,
            "title": "Bài 20: Nấm ăn và nấm trong chế biến thực phẩm",
            "chapter": "Chủ đề 4: Nấm",
            "summary": "Nấm rơm, mộc nhĩ, nấm men làm bánh mì.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b21",
            "number": 21,
            "title": "Bài 21: Nấm gây hỏng thực phẩm và nấm độc",
            "chapter": "Chủ đề 4: Nấm",
            "summary": "Cách bảo quản thực phẩm tránh mốc và phòng tránh ngộ độc nấm.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b22",
            "number": 22,
            "title": "Bài 22: Ôn tập chủ đề Nấm",
            "chapter": "Chủ đề 4: Nấm",
            "summary": "Củng cố kiến thức về nấm.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b23",
            "number": 23,
            "title": "Bài 23: Vai trò của chất dinh dưỡng đối với cơ thể",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "4 nhóm chất dinh dưỡng: bột đường, đạm, béo, vitamin và khoáng chất.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b24",
            "number": 24,
            "title": "Bài 24: Chế độ ăn uống cân bằng",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tháp dinh dưỡng, ăn đủ chất, uống đủ nước.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b25",
            "number": 25,
            "title": "Bài 25: Một số bệnh liên quan đến dinh dưỡng",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Béo phì, suy dinh dưỡng, thiếu máu, bướu cổ.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b26",
            "number": 26,
            "title": "Bài 26: Thực phẩm an toàn",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Chọn thực phẩm tươi sạch, bảo quản đúng cách.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b27",
            "number": 27,
            "title": "Bài 27: Phòng tránh đuối nước",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Không tắm ao hồ sâu một mình, mặc áo phao khi đi thuyền.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b28",
            "number": 28,
            "title": "Bài 28: Ôn tập chủ đề Con người và sức khỏe",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Củng cố dinh dưỡng và an toàn.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b29",
            "number": 29,
            "title": "Bài 29: Chuỗi thức ăn trong tự nhiên",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Mối liên hệ thức ăn từ thực vật -> động vật ăn thực vật -> động vật ăn thịt.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b30",
            "number": 30,
            "title": "Bài 30: Vai trò của thực vật trong chuỗi thức ăn",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Thực vật tự tạo chất hữu cơ và duy trì cân bằng tự nhiên.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b31",
            "number": 31,
            "title": "Bài 31: Ôn tập chủ đề Sinh vật và môi trường",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Củng cố chuỗi thức ăn.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-diali-4",
        "name": "Lịch sử và Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "lichsu-diali-4-b1",
            "number": 1,
            "title": "Bài 1: Làm quen với phương tiện học tập môn Lịch sử và Địa lí",
            "chapter": "Mở đầu",
            "summary": "Sử dụng bản đồ, lược đồ, trục thời gian, hiện vật.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b2",
            "number": 2,
            "title": "Bài 2: Thiên nhiên và con người địa phương em",
            "chapter": "Chủ đề 1: Địa phương em",
            "summary": "Vị trí địa lí, địa hình, khí hậu, sông ngòi địa phương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b3",
            "number": 3,
            "title": "Bài 3: Lịch sử và văn hóa truyền thống địa phương em",
            "chapter": "Chủ đề 1: Địa phương em",
            "summary": "Di tích lịch sử, danh nhân và lễ hội quê hương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b4",
            "number": 4,
            "title": "Bài 4: Thiên nhiên vùng Trung du và miền núi Bắc Bộ",
            "chapter": "Chủ đề 2: Trung du và miền núi Bắc Bộ",
            "summary": "Dãy Hoàng Liên Sơn, đỉnh Phan-xi-păng, khí hậu có mùa đông lạnh.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b5",
            "number": 5,
            "title": "Bài 5: Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi Bắc Bộ",
            "chapter": "Chủ đề 2: Trung du và miền núi Bắc Bộ",
            "summary": "Ruộng bậc thang, thủy điện Sơn La/Hòa Bình, khai thác khoáng sản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b6",
            "number": 6,
            "title": "Bài 6: Một số nét văn hóa ở vùng Trung du và miền núi Bắc Bộ",
            "chapter": "Chủ đề 2: Trung du và miền núi Bắc Bộ",
            "summary": "Chợ phiên, nhà sàn, múa xòe Thái, hát Then.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b7",
            "number": 7,
            "title": "Bài 7: Đền Hùng và lễ giỗ Tổ Hùng Vương",
            "chapter": "Chủ đề 2: Trung du và miền núi Bắc Bộ",
            "summary": "Truyền thống uống nước nhớ nguồn, ngày Giỗ Tổ 10/3 âm lịch.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b8",
            "number": 8,
            "title": "Bài 8: Thiên nhiên vùng Đồng bằng Bắc Bộ",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Đồng bằng châu thổ do sông Hồng và sông Thái Bình bồi đắp.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b9",
            "number": 9,
            "title": "Bài 9: Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Vựa lúa lớn thứ 2 cả nước, nhiều làng nghề truyền thống.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b10",
            "number": 10,
            "title": "Bài 10: Một số nét văn hóa ở vùng Đồng bằng Bắc Bộ",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Dân ca Quan họ Bắc Ninh, múa rối nước, lễ hội Chùa Hương/Lim.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b11",
            "number": 11,
            "title": "Bài 11: Sông Hồng và văn minh sông Hồng",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Vai trò sông Hồng với lịch sử và văn minh lúa nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b12",
            "number": 12,
            "title": "Bài 12: Thăng Long – Hà Nội",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Chiếu dời đô 1010, lịch sử nghìn năm văn hiến của Thủ đô.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b13",
            "number": 13,
            "title": "Bài 13: Văn Miếu – Quốc Tử Giám",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Trường đại học đầu tiên của Việt Nam thời Lý (1076).",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b14",
            "number": 14,
            "title": "Bài 14: Ôn tập",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Ôn tập vùng Trung du miền núi Bắc Bộ và Đồng bằng Bắc Bộ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b15",
            "number": 15,
            "title": "Bài 15: Thiên nhiên vùng Duyên hải miền Trung",
            "chapter": "Chủ đề 4: Duyên hải miền Trung",
            "summary": "Đồng bằng nhỏ hẹp ven biển, dãy Bạch Mã, thiên tai bão lụt.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b16",
            "number": 16,
            "title": "Bài 16: Dân cư và hoạt động sản xuất ở vùng Duyên hải miền Trung",
            "chapter": "Chủ đề 4: Duyên hải miền Trung",
            "summary": "Đánh bắt nuôi trồng hải sản, làm muối, du lịch biển.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b17",
            "number": 17,
            "title": "Bài 17: Một số nét văn hóa ở vùng Duyên hải miền Trung",
            "chapter": "Chủ đề 4: Duyên hải miền Trung",
            "summary": "Nhã nhạc cung đình Huế, lễ hội Cầu Ngư.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b18",
            "number": 18,
            "title": "Bài 18: Cố đô Huế",
            "chapter": "Chủ đề 4: Duyên hải miền Trung",
            "summary": "Quần thể di tích Cố đô Huế - Di sản văn hóa thế giới.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b19",
            "number": 19,
            "title": "Bài 19: Phố cổ Hội An",
            "chapter": "Chủ đề 4: Duyên hải miền Trung",
            "summary": "Thương cảng cổ sầm uất và kiến trúc Chùa Cầu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b20",
            "number": 20,
            "title": "Bài 20: Thiên nhiên vùng Tây Nguyên",
            "chapter": "Chủ đề 5: Tây Nguyên",
            "summary": "Các cao nguyên xếp tầng, đất đỏ bazan màu mỡ, khí hậu hai mùa mưa - khô.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b21",
            "number": 21,
            "title": "Bài 21: Dân cư và hoạt động sản xuất ở vùng Tây Nguyên",
            "chapter": "Chủ đề 5: Tây Nguyên",
            "summary": "Cây công nghiệp cà phê, cao su, hồ tiêu và thủy điện.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b22",
            "number": 22,
            "title": "Bài 22: Một số nét văn hóa và truyền thống yêu nước, cách mạng của đồng bào Tây Nguyên",
            "chapter": "Chủ đề 5: Tây Nguyên",
            "summary": "Nhà rông, nhà dài, anh hùng Núp.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b23",
            "number": 23,
            "title": "Bài 23: Lễ hội Cồng chiêng Tây Nguyên",
            "chapter": "Chủ đề 5: Tây Nguyên",
            "summary": "Không gian văn hóa Cồng chiêng Tây Nguyên.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b24",
            "number": 24,
            "title": "Bài 24: Thiên nhiên vùng Nam Bộ",
            "chapter": "Chủ đề 6: Nam Bộ",
            "summary": "Đồng bằng sông Cửu Long lớn nhất cả nước, hệ thống sông Mê Kông và Đồng Nai.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b25",
            "number": 25,
            "title": "Bài 25: Dân cư và hoạt động sản xuất ở vùng Nam Bộ",
            "chapter": "Chủ đề 6: Nam Bộ",
            "summary": "Vựa lúa, vựa trái cây và thủy sản lớn nhất cả nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b26",
            "number": 26,
            "title": "Bài 26: Một số nét văn hóa và truyền thống yêu nước, cách mạng của đồng bào Nam Bộ",
            "chapter": "Chủ đề 6: Nam Bộ",
            "summary": "Chợ nổi, Đờn ca tài tử Nam Bộ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b27",
            "number": 27,
            "title": "Bài 27: Thành phố Hồ Chí Minh",
            "chapter": "Chủ đề 6: Nam Bộ",
            "summary": "Trung tâm kinh tế, văn hóa, giáo dục lớn nhất cả nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b28",
            "number": 28,
            "title": "Bài 28: Địa đạo Củ Chi",
            "chapter": "Chủ đề 6: Nam Bộ",
            "summary": "Công trình quân sự độc đáo thời kháng chiến chống Mỹ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-4-b29",
            "number": 29,
            "title": "Bài 29: Ôn tập",
            "chapter": "Chủ đề 6: Nam Bộ",
            "summary": "Tổng ôn các vùng miền Việt Nam.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-4",
        "name": "Tiếng Việt",
        "icon": "📚",
        "lessons": [
          {
            "id": "tiengviet-4-b1",
            "number": 1,
            "title": "Bài 1: Điều kì diệu",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Mỗi người đều có nét riêng đáng quý tạo nên sự đa dạng.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b2",
            "number": 2,
            "title": "Bài 2: Thi nhạc",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Phát huy năng khiếu riêng của từng bạn nhỏ.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b3",
            "number": 3,
            "title": "Bài 3: Anh em sinh đôi",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Khám phá nét riêng dù ngoại hình giống nhau.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b4",
            "number": 4,
            "title": "Bài 4: Công chúa và người dẫn chuyện",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Sự tự tin tỏa sáng trên sân khấu theo cách riêng.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b5",
            "number": 5,
            "title": "Bài 5: Thằn lằn xanh và tắc kè",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Tôn trọng đặc điểm và lối sống khác biệt của bạn.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b6",
            "number": 6,
            "title": "Bài 6: Nghệ sĩ trống",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Đam mê và quyết tâm theo đuổi nghệ thuật.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b7",
            "number": 7,
            "title": "Bài 7: Những bức chân dung",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Nhìn nhận điểm đáng yêu của bạn bè qua hội họa.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b8",
            "number": 8,
            "title": "Bài 8: Đò ngang",
            "chapter": "Tập 1 - Mỗi người một vẻ",
            "summary": "Bài học về tinh thần hợp tác và khiêm tốn.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b9",
            "number": 9,
            "title": "Bài 9: Bầu trời trong quả trứng",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Sự tò mò khám phá thế giới rộng lớn.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b10",
            "number": 10,
            "title": "Bài 10: Tiếng nói của cỏ cây",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Lắng nghe và yêu quý thiên nhiên.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b11",
            "number": 11,
            "title": "Bài 11: Tập làm văn",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Trải nghiệm thực tế giúp bài văn chân thật, sinh động.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b12",
            "number": 12,
            "title": "Bài 12: Nhà phát minh 6 tuổi",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Óc quan sát và tư duy sáng tạo khoa học.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b13",
            "number": 13,
            "title": "Bài 13: Con vẹt xanh",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Tìm hiểu đặc điểm loài chim thông minh.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b14",
            "number": 14,
            "title": "Bài 14: Chân trời cuối phố",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Khát vọng khám phá thế giới bên ngoài.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b15",
            "number": 15,
            "title": "Bài 15: Gặt chữ trên non",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Nghị lực vượt khó đến trường của học sinh vùng cao.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b16",
            "number": 16,
            "title": "Bài 16: Trước ngày xa quê",
            "chapter": "Tập 1 - Trải nghiệm và khám phá",
            "summary": "Tình cảm lưu luyến với quê hương thân thuộc.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b17",
            "number": 17,
            "title": "Bài 17: Vẽ màu",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Trí tưởng tượng phong phú qua thế giới sắc màu.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b18",
            "number": 18,
            "title": "Bài 18: Đồng cỏ nở hoa",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Tài năng hội họa và tình yêu thiên nhiên.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b19",
            "number": 19,
            "title": "Bài 19: Thanh âm của núi",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Âm thanh trong trẻo của tiếng sáo vùng cao.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b20",
            "number": 20,
            "title": "Bài 20: Bầu trời mùa thu",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Quan sát và cảm nhận vẻ đẹp mùa thu.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b21",
            "number": 21,
            "title": "Bài 21: Làm thỏ con bằng giấy",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Đọc hiểu văn bản hướng dẫn làm đồ thủ công.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b22",
            "number": 22,
            "title": "Bài 22: Bức tường có nhiều phép lạ",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Sức sáng tạo biến điều bình thường thành kì diệu.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b23",
            "number": 23,
            "title": "Bài 23: Bét-tô-ven và bản xô-nát Ánh trăng",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Câu chuyện cảm động về thiên tài âm nhạc Beethoven.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b24",
            "number": 24,
            "title": "Bài 24: Người tìm đường lên các vì sao",
            "chapter": "Tập 1 - Niềm vui sáng tạo",
            "summary": "Ước mơ chinh phục vũ trụ của nhà khoa học Xi-ôn-cốp-xki.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b25",
            "number": 25,
            "title": "Bài 25: Bay cùng ước mơ",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Khát vọng vươn cao, chinh phục tương lai.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b26",
            "number": 26,
            "title": "Bài 26: Con trai người làm vườn",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Nối nghiệp và sáng tạo trong nghề làm vườn.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b27",
            "number": 27,
            "title": "Bài 27: Nếu em có một khu vườn",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Ước mơ tạo không gian xanh tươi đẹp.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b28",
            "number": 28,
            "title": "Bài 28: Bốn mùa mơ ước",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Mơ ước giản dị gắn với thiên nhiên bốn mùa.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b29",
            "number": 29,
            "title": "Bài 29: Ở Vương quốc Tương Lai",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Trích đoạn kịch về phát minh tương lai của trẻ thơ.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b30",
            "number": 30,
            "title": "Bài 30: Cánh chim nhỏ",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Nghị lực vươn lên theo đuổi ước mơ.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b31",
            "number": 31,
            "title": "Bài 31: Nếu chúng mình có phép lạ",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Ước mơ thế giới hòa bình, không thiên tai.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b32",
            "number": 32,
            "title": "Bài 32: Anh Ba",
            "chapter": "Tập 1 - Chắp cánh ước mơ",
            "summary": "Ý chí ra đi tìm đường cứu nước của người thanh niên Nguyễn Tất Thành.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b33",
            "number": 33,
            "title": "Bài 1 (T2): Hải Thượng Lãn Ông",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Y đức cao đẹp của danh y Lê Hữu Trác.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b34",
            "number": 34,
            "title": "Bài 2 (T2): Vệt phấn trên mặt bàn",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Sự bao dung và tình bạn đẹp.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b35",
            "number": 35,
            "title": "Bài 3 (T2): Ông Bụt đã đến",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Lòng tốt thầm lặng giúp đỡ người khác.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b36",
            "number": 36,
            "title": "Bài 4 (T2): Quả ngọt cuối mùa",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Tình yêu thương, chăm chút của bà dành cho con cháu.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b37",
            "number": 37,
            "title": "Bài 5 (T2): Tờ báo tường của tôi",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Kỉ niệm làm báo tường gắn kết tập thể lớp.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b38",
            "number": 38,
            "title": "Bài 6 (T2): Tiếng ru",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Ý nghĩa của sự sẻ chia, sống vì mọi người.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b39",
            "number": 39,
            "title": "Bài 7 (T2): Con muốn làm một cái cây",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Kỉ niệm gia đình và tình yêu cây xanh.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b40",
            "number": 40,
            "title": "Bài 8 (T2): Trên khóm tre đầu ngõ",
            "chapter": "Tập 2 - Sống để yêu thương",
            "summary": "Tình cảm gắn bó với thiên nhiên làng quê.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b41",
            "number": 41,
            "title": "Bài 9 (T2): Sự tích con Rồng cháu Tiên",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Cội nguồn thiêng liêng và tinh thần đoàn kết dân tộc.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b42",
            "number": 42,
            "title": "Bài 10 (T2): Cảm xúc Trường Sa",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Tình yêu biển đảo và người lính Trường Sa.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b43",
            "number": 43,
            "title": "Bài 11 (T2): Sáng tháng Năm",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Tình cảm kính yêu Bác Hồ của nhân dân Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b44",
            "number": 44,
            "title": "Bài 12 (T2): Chàng trai làng Phù Ủng",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Tấm gương anh hùng Phạm Ngũ Lão thời Trần.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b45",
            "number": 45,
            "title": "Bài 13 (T2): Vườn của ông tôi",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Giữ gìn kỉ vật và công lao của thế hệ đi trước.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b46",
            "number": 46,
            "title": "Bài 14 (T2): Trong lời mẹ hát",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Âm vang lời ru nuôi dưỡng tâm hồn tuổi thơ.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b47",
            "number": 47,
            "title": "Bài 15 (T2): Người thầy đầu tiên của bố tôi",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Truyền thống tôn sư trọng đạo.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b48",
            "number": 48,
            "title": "Bài 16 (T2): Ngựa biên phòng",
            "chapter": "Tập 2 - Uống nước nhớ nguồn",
            "summary": "Hình ảnh người chiến sĩ biên phòng bảo vệ biên cương.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b49",
            "number": 49,
            "title": "Bài 17 (T2): Cây đa quê hương",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Vẻ đẹp cổ thụ thân thương của làng quê Việt.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b50",
            "number": 50,
            "title": "Bài 18 (T2): Bước mùa xuân",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Khung cảnh rộn ràng sắc xuân trên quê hương.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b51",
            "number": 51,
            "title": "Bài 19 (T2): Đi hội chùa Hương",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Nét đẹp lễ hội truyền thống mùa xuân.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b52",
            "number": 52,
            "title": "Bài 20 (T2): Chiều ngoại ô",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Cảnh sắc bình yên vùng ngoại ô buổi chiều.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b53",
            "number": 53,
            "title": "Bài 21 (T2): Những cánh buồm",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Ước mơ khám phá chân trời mới của cha và con.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b54",
            "number": 54,
            "title": "Bài 22 (T2): Cái cầu",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Niềm tự hào về công trình của người cha kĩ sư.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b55",
            "number": 55,
            "title": "Bài 23 (T2): Đường đi Sa Pa",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Vẻ đẹp kì vĩ, nên thơ của núi rừng Tây Bắc.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b56",
            "number": 56,
            "title": "Bài 24 (T2): Quê ngoại",
            "chapter": "Tập 2 - Quê hương trong tôi",
            "summary": "Kỉ niệm êm đềm về miền quê ngoại.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b57",
            "number": 57,
            "title": "Bài 25 (T2): Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô",
            "chapter": "Tập 2 - Vì một thế giới bình yên",
            "summary": "Bảo vệ động vật hoang dã trên thế giới.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b58",
            "number": 58,
            "title": "Bài 26 (T2): Ngôi nhà của yêu thương",
            "chapter": "Tập 2 - Vì một thế giới bình yên",
            "summary": "Tình nhân ái vượt qua ranh giới địa lí.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b59",
            "number": 59,
            "title": "Bài 27 (T2): Băng tan",
            "chapter": "Tập 2 - Vì một thế giới bình yên",
            "summary": "Cảnh báo biến đổi khí hậu và bảo vệ Trái Đất.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b60",
            "number": 60,
            "title": "Bài 28 (T2): Chuyến du lịch thú vị",
            "chapter": "Tập 2 - Vì một thế giới bình yên",
            "summary": "Khám phá văn hóa các quốc gia.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b61",
            "number": 61,
            "title": "Bài 29 (T2): Lễ hội ở Nhật Bản",
            "chapter": "Tập 2 - Vì một thế giới bình yên",
            "summary": "Tìm hiểu nét đẹp văn hóa lễ hội thế giới.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b62",
            "number": 62,
            "title": "Bài 30 (T2): Ngày hội",
            "chapter": "Tập 2 - Vì một thế giới bình yên",
            "summary": "Tinh thần giao lưu, hữu nghị quốc tế.",
            "questions": []
          }
        ]
      },
      {
        "id": "daoduc-4",
        "name": "Đạo đức",
        "icon": "💖",
        "lessons": [
          {
            "id": "daoduc-4-b1",
            "number": 1,
            "title": "Bài 1: Biết ơn người lao động",
            "chapter": "Chủ đề 1: Biết ơn người lao động",
            "summary": "Trân trọng công sức của mọi người lao động.",
            "questions": []
          },
          {
            "id": "daoduc-4-b2",
            "number": 2,
            "title": "Bài 2: Cảm thông, giúp đỡ người gặp khó khăn",
            "chapter": "Chủ đề 2: Cảm thông, giúp đỡ người gặp khó khăn",
            "summary": "Chia sẻ, động viên người có hoàn cảnh khó khăn.",
            "questions": []
          },
          {
            "id": "daoduc-4-b3",
            "number": 3,
            "title": "Bài 3: Yêu lao động",
            "chapter": "Chủ đề 3: Yêu lao động",
            "summary": "Tích cực tham gia lao động ở nhà và ở trường.",
            "questions": []
          },
          {
            "id": "daoduc-4-b4",
            "number": 4,
            "title": "Bài 4: Tôn trọng tài sản của người khác",
            "chapter": "Chủ đề 4: Tôn trọng tài sản của người khác",
            "summary": "Hỏi mượn trước khi dùng và giữ gìn đồ người khác.",
            "questions": []
          },
          {
            "id": "daoduc-4-b5",
            "number": 5,
            "title": "Bài 5: Bảo vệ của công",
            "chapter": "Chủ đề 5: Bảo vệ của công",
            "summary": "Giữ gìn bàn ghế, cây xanh, công trình công cộng.",
            "questions": []
          },
          {
            "id": "daoduc-4-b6",
            "number": 6,
            "title": "Bài 6: Thiết lập quan hệ bạn bè",
            "chapter": "Chủ đề 6: Thiết lập và duy trì quan hệ bạn bè",
            "summary": "Cởi mở, chân thành kết bạn.",
            "questions": []
          },
          {
            "id": "daoduc-4-b7",
            "number": 7,
            "title": "Bài 7: Duy trì quan hệ bạn bè",
            "chapter": "Chủ đề 6: Thiết lập và duy trì quan hệ bạn bè",
            "summary": "Lắng nghe, tin tưởng, giúp đỡ để giữ tình bạn đẹp.",
            "questions": []
          },
          {
            "id": "daoduc-4-b8",
            "number": 8,
            "title": "Bài 8: Quý trọng đồng tiền",
            "chapter": "Chủ đề 7: Quý trọng đồng tiền",
            "summary": "Tiết kiệm tiền và chi tiêu hợp lí.",
            "questions": []
          },
          {
            "id": "daoduc-4-b9",
            "number": 9,
            "title": "Bài 9: Quyền và bổn phận của trẻ em",
            "chapter": "Chủ đề 8: Quyền và bổn phận của trẻ em",
            "summary": "Thực hiện quyền được học tập, vui chơi và bổn phận với gia đình, nhà trường.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-4",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-4-b1",
            "number": 1,
            "title": "Bài 1: Phần cứng và phần mềm máy tính",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Phân biệt phần cứng (thiết bị) và phần mềm (chương trình).",
            "questions": []
          },
          {
            "id": "tinhoc-4-b2",
            "number": 2,
            "title": "Bài 2: Gõ bàn phím đúng cách",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Luyện gõ 10 ngón nhanh và chính xác.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b3",
            "number": 3,
            "title": "Bài 3: Thông tin trên trang web",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Các thành phần văn bản, hình ảnh, âm thanh, siêu liên kết trên web.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b4",
            "number": 4,
            "title": "Bài 4: Tìm kiếm thông tin trên Internet",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Sử dụng từ khóa chính xác với máy tìm kiếm.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b5",
            "number": 5,
            "title": "Bài 5: Thao tác với tệp và thư mục",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Sao chép, di chuyển, xóa, khôi phục tệp và thư mục.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b6",
            "number": 6,
            "title": "Bài 6: Sử dụng phần mềm khi được phép",
            "chapter": "Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Bản quyền phần mềm miễn phí và có phí.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b7",
            "number": 7,
            "title": "Bài 7: Tạo bài trình chiếu",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Chọn bố cục và định dạng văn bản trang chiếu.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b8",
            "number": 8,
            "title": "Bài 8: Định dạng văn bản trên trang chiếu",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Phông chữ, cỡ chữ, màu sắc hài hòa.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b9",
            "number": 9,
            "title": "Bài 9: Hiệu ứng chuyển trang",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tạo hiệu ứng chuyển tiếp giữa các slide.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b10",
            "number": 10,
            "title": "Bài 10-11: Thực hành soạn thảo văn bản Word",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Gõ văn bản tiếng Việt có dấu, căn lề, chèn ảnh.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b11",
            "number": 11,
            "title": "Bài 12-16: Làm quen với lập trình trực quan Scratch",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Khối lệnh di chuyển, xoay, lặp và tạo kịch bản hoạt hình đơn giản.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-4",
        "name": "Công nghệ",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-4-b1",
            "number": 1,
            "title": "Bài 1: Lợi ích của hoa, cây cảnh đối với đời sống",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Làm đẹp cảnh quan, lọc không khí.",
            "questions": []
          },
          {
            "id": "congnghe-4-b2",
            "number": 2,
            "title": "Bài 2: Một số loại hoa, cây cảnh phổ biến",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Hoa hồng, hoa mai, hoa đào, cây lưỡi hổ, cây kim tiền.",
            "questions": []
          },
          {
            "id": "congnghe-4-b3",
            "number": 3,
            "title": "Bài 3: Vật liệu và dụng cụ trồng hoa, cây cảnh trong chậu",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Chậu, giá thể, xẻng nhỏ, bình tưới.",
            "questions": []
          },
          {
            "id": "congnghe-4-b4",
            "number": 4,
            "title": "Bài 4: Gieo hạt hoa, cây cảnh trong chậu",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Các bước chuẩn bị giá thể và gieo hạt.",
            "questions": []
          },
          {
            "id": "congnghe-4-b5",
            "number": 5,
            "title": "Bài 5: Trồng hoa, cây cảnh trong chậu",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Đặt cây vào chậu, lấp đất và tưới ẩm.",
            "questions": []
          },
          {
            "id": "congnghe-4-b6",
            "number": 6,
            "title": "Bài 6: Chăm sóc hoa, cây cảnh trong chậu",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Tưới nước, bón phân, bắt sâu, tỉa cành.",
            "questions": []
          },
          {
            "id": "congnghe-4-b7",
            "number": 7,
            "title": "Bài 7: Giới thiệu bộ lắp ghép mô hình kĩ thuật",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Thanh thẳng, tấm, ốc vít, cờ lê, tua vít.",
            "questions": []
          },
          {
            "id": "congnghe-4-b8",
            "number": 8,
            "title": "Bài 8: Lắp ghép mô hình bập bênh",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Lắp ráp và kiểm tra hoạt động mô hình bập bênh.",
            "questions": []
          },
          {
            "id": "congnghe-4-b9",
            "number": 9,
            "title": "Bài 9: Lắp ghép mô hình robot",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Lắp ghép mô hình robot từ các chi tiết kĩ thuật.",
            "questions": []
          },
          {
            "id": "congnghe-4-b10",
            "number": 10,
            "title": "Bài 10: Đồ chơi đơn giản",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Làm đồ chơi từ vật liệu tái chế.",
            "questions": []
          },
          {
            "id": "congnghe-4-b11",
            "number": 11,
            "title": "Bài 11: Làm đèn lồng",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Thiết kế và làm đèn lồng giấy an toàn.",
            "questions": []
          },
          {
            "id": "congnghe-4-b12",
            "number": 12,
            "title": "Bài 12: Làm chuồn chuồn thăng bằng",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Ứng dụng nguyên lí thăng bằng làm đồ chơi.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-4",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-4-b1",
            "number": 1,
            "title": "Unit 1: My friends",
            "chapter": "Unit 1: My friends",
            "summary": "Quốc tịch và hỏi bạn đến từ đâu: Where are you from?",
            "questions": []
          },
          {
            "id": "tienganh-4-b2",
            "number": 2,
            "title": "Unit 2: Time and daily routines",
            "chapter": "Unit 2: Time and daily routines",
            "summary": "Hỏi giờ và hoạt động hằng ngày: What time is it?",
            "questions": []
          },
          {
            "id": "tienganh-4-b3",
            "number": 3,
            "title": "Unit 3: My week",
            "chapter": "Unit 3: My week",
            "summary": "Các thứ trong tuần: Monday to Sunday.",
            "questions": []
          },
          {
            "id": "tienganh-4-b4",
            "number": 4,
            "title": "Unit 4: My birthday party",
            "chapter": "Unit 4: My birthday party",
            "summary": "Tháng trong năm và hỏi ngày sinh nhật: When's your birthday?",
            "questions": []
          },
          {
            "id": "tienganh-4-b5",
            "number": 5,
            "title": "Unit 5: Things we can do",
            "chapter": "Unit 5: Things we can do",
            "summary": "Khả năng với can / can't: Can you swim?",
            "questions": []
          },
          {
            "id": "tienganh-4-b6",
            "number": 6,
            "title": "Unit 6: Our school facilities",
            "chapter": "Unit 6: Our school facilities",
            "summary": "Cơ sở vật chất trường học: Where's your school?",
            "questions": []
          },
          {
            "id": "tienganh-4-b7",
            "number": 7,
            "title": "Unit 7: Our timetables",
            "chapter": "Unit 7: Our timetables",
            "summary": "Môn học và thời khóa biểu: What subjects do you have today?",
            "questions": []
          },
          {
            "id": "tienganh-4-b8",
            "number": 8,
            "title": "Unit 8: My favourite subjects",
            "chapter": "Unit 8: My favourite subjects",
            "summary": "Môn học yêu thích và lí do: Why do you like English?",
            "questions": []
          },
          {
            "id": "tienganh-4-b9",
            "number": 9,
            "title": "Unit 9: Our sports day",
            "chapter": "Unit 9: Our sports day",
            "summary": "Ngày hội thể thao: Is your sports day in May?",
            "questions": []
          },
          {
            "id": "tienganh-4-b10",
            "number": 10,
            "title": "Unit 10: Our summer holidays",
            "chapter": "Unit 10: Our summer holidays",
            "summary": "Kì nghỉ hè: Where were you last summer?",
            "questions": []
          },
          {
            "id": "tienganh-4-b11",
            "number": 11,
            "title": "Unit 11: My home",
            "chapter": "Unit 11: My home",
            "summary": "Địa chỉ nhà và nơi sống: Where do you live?",
            "questions": []
          },
          {
            "id": "tienganh-4-b12",
            "number": 12,
            "title": "Unit 12: Jobs",
            "chapter": "Unit 12: Jobs",
            "summary": "Nghề nghiệp và nơi làm việc: What does your father do?",
            "questions": []
          },
          {
            "id": "tienganh-4-b13",
            "number": 13,
            "title": "Unit 13: Appearance",
            "chapter": "Unit 13: Appearance",
            "summary": "Miêu tả ngoại hình: What does he/she look like?",
            "questions": []
          },
          {
            "id": "tienganh-4-b14",
            "number": 14,
            "title": "Unit 14: Daily activities",
            "chapter": "Unit 14: Daily activities",
            "summary": "Hoạt động thường ngày ở nhà: When do you watch TV?",
            "questions": []
          },
          {
            "id": "tienganh-4-b15",
            "number": 15,
            "title": "Unit 15: My family's weekends",
            "chapter": "Unit 15: My family's weekends",
            "summary": "Hoạt động cuối tuần của gia đình.",
            "questions": []
          },
          {
            "id": "tienganh-4-b16",
            "number": 16,
            "title": "Unit 16: Weather",
            "chapter": "Unit 16: Weather",
            "summary": "Thời tiết: What's the weather like today?",
            "questions": []
          },
          {
            "id": "tienganh-4-b17",
            "number": 17,
            "title": "Unit 17: In the city",
            "chapter": "Unit 17: In the city",
            "summary": "Hỏi đường trong thành phố: How can I get to the bakery?",
            "questions": []
          },
          {
            "id": "tienganh-4-b18",
            "number": 18,
            "title": "Unit 18: At the shopping centre",
            "chapter": "Unit 18: At the shopping centre",
            "summary": "Hỏi giá tiền: How much is the T-shirt?",
            "questions": []
          },
          {
            "id": "tienganh-4-b19",
            "number": 19,
            "title": "Unit 19: The animal world",
            "chapter": "Unit 19: The animal world",
            "summary": "Động vật và miêu tả chúng: What are these animals?",
            "questions": []
          },
          {
            "id": "tienganh-4-b20",
            "number": 20,
            "title": "Unit 20: At summer camp",
            "chapter": "Unit 20: At summer camp",
            "summary": "Hoạt động trại hè với thì Hiện tại tiếp diễn.",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-4",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-4-b1",
            "number": 1,
            "title": "Chủ đề 1: Vui bước đến trường",
            "chapter": "Chủ đề 1: Vui bước đến trường",
            "summary": "Hát Em yêu giờ học hát; làm quen khuôn nhạc và khóa Son.",
            "questions": []
          },
          {
            "id": "amnhac-4-b2",
            "number": 2,
            "title": "Chủ đề 2: Trải nghiệm âm nhạc qua các hoạt động",
            "chapter": "Chủ đề 2: Trải nghiệm âm nhạc",
            "summary": "Đọc nhạc gam Đô trưởng cơ bản và gõ đệm bằng nhạc cụ.",
            "questions": []
          },
          {
            "id": "amnhac-4-b3",
            "number": 3,
            "title": "Chủ đề 3: Âm vang núi rừng",
            "chapter": "Chủ đề 3: Âm vang núi rừng",
            "summary": "Hát Đi học; nghe và tìm hiểu nhạc cụ dân tộc miền núi.",
            "questions": []
          },
          {
            "id": "amnhac-4-b4",
            "number": 4,
            "title": "Chủ đề 4: Nhớ ơn thầy cô",
            "chapter": "Chủ đề 4: Nhớ ơn thầy cô",
            "summary": "Hát Bụi phấn / Nhớ ơn thầy cô; thực hành hát kết hợp vận động.",
            "questions": []
          },
          {
            "id": "amnhac-4-b5",
            "number": 5,
            "title": "Chủ đề 5: Mùa xuân yêu thương",
            "chapter": "Chủ đề 5: Mùa xuân yêu thương",
            "summary": "Hát Khúc ca bốn mùa; đọc nhạc nhịp 2/4 và 3/4.",
            "questions": []
          },
          {
            "id": "amnhac-4-b6",
            "number": 6,
            "title": "Chủ đề 6: Giai điệu bạn bè",
            "chapter": "Chủ đề 6: Giai điệu bạn bè",
            "summary": "Hát Thiếu nhi thế giới liên hoan; biểu diễn nhóm.",
            "questions": []
          },
          {
            "id": "amnhac-4-b7",
            "number": 7,
            "title": "Chủ đề 7: Âm nhạc và cuộc sống",
            "chapter": "Chủ đề 7: Âm nhạc và cuộc sống",
            "summary": "Tìm hiểu một số nhạc sĩ Việt Nam tiêu biểu và tác phẩm thiếu nhi.",
            "questions": []
          },
          {
            "id": "amnhac-4-b8",
            "number": 8,
            "title": "Chủ đề 8: Hè về vui sao",
            "chapter": "Chủ đề 8: Hè về vui sao",
            "summary": "Hát Cánh diều tuổi thơ; ôn tập tổng kết năm học.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-4",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-4-b1",
            "number": 1,
            "title": "Chủ đề 1: Vẻ đẹp trong điêu khắc đình làng Việt Nam",
            "chapter": "Chủ đề 1: Điêu khắc đình làng",
            "summary": "Tìm hiểu chạm khắc đình làng và tạo hình phù điêu đơn giản.",
            "questions": []
          },
          {
            "id": "mithuat-4-b2",
            "number": 2,
            "title": "Chủ đề 2: Một số dạng không gian trong tranh dân gian Việt Nam",
            "chapter": "Chủ đề 2: Tranh dân gian Việt Nam",
            "summary": "Nhận biết bố cục tranh Đông Hồ, Hàng Trống.",
            "questions": []
          },
          {
            "id": "mithuat-4-b3",
            "number": 3,
            "title": "Chủ đề 3: Cảnh đẹp quê hương",
            "chapter": "Chủ đề 3: Cảnh đẹp quê hương",
            "summary": "Vẽ tranh phong cảnh thể hiện không gian xa - gần.",
            "questions": []
          },
          {
            "id": "mithuat-4-b4",
            "number": 4,
            "title": "Chủ đề 4: Vẻ đẹp trong cuộc sống",
            "chapter": "Chủ đề 4: Vẻ đẹp trong cuộc sống",
            "summary": "Vẽ tĩnh vật lọ hoa và quả bằng màu sáp/màu nước.",
            "questions": []
          },
          {
            "id": "mithuat-4-b5",
            "number": 5,
            "title": "Chủ đề 5: Những kỉ niệm đẹp",
            "chapter": "Chủ đề 5: Những kỉ niệm đẹp",
            "summary": "Vẽ tranh sinh hoạt gia đình, bạn bè.",
            "questions": []
          },
          {
            "id": "mithuat-4-b6",
            "number": 6,
            "title": "Chủ đề 6: Mái trường yêu dấu",
            "chapter": "Chủ đề 6: Mái trường yêu dấu",
            "summary": "Tạo mô hình hoặc vẽ tranh hoạt động tập thể ở trường.",
            "questions": []
          },
          {
            "id": "mithuat-4-b7",
            "number": 7,
            "title": "Chủ đề 7: Môi trường xanh – sạch – đẹp",
            "chapter": "Chủ đề 7: Môi trường xanh - sạch - đẹp",
            "summary": "Thiết kế áp phích tuyên truyền bảo vệ môi trường.",
            "questions": []
          },
          {
            "id": "mithuat-4-b8",
            "number": 8,
            "title": "Chủ đề 8: Quê hương thanh bình",
            "chapter": "Chủ đề 8: Quê hương thanh bình",
            "summary": "Tổng hợp kĩ năng tạo hình sản phẩm trưng bày cuối năm.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-4",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-4-b1",
            "number": 1,
            "title": "Chế độ dinh dưỡng trong tập luyện thể dục thể thao",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Vai trò của nước, vitamin và năng lượng đối với vận động.",
            "questions": []
          },
          {
            "id": "gdtc-4-b2",
            "number": 2,
            "title": "Chủ đề 1: Đội hình đội ngũ",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Đội hình vòng tròn, đi đều, đổi chân khi đi sai nhịp.",
            "questions": []
          },
          {
            "id": "gdtc-4-b3",
            "number": 3,
            "title": "Chủ đề 2: Bài tập thể dục",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Bài thể dục phát triển chung lớp 4 kết hợp nhịp điệu.",
            "questions": []
          },
          {
            "id": "gdtc-4-b4",
            "number": 4,
            "title": "Chủ đề 3: Tư thế và kĩ năng vận động cơ bản",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Chạy cự li ngắn, bật cao, ném bóng trúng đích.",
            "questions": []
          },
          {
            "id": "gdtc-4-b5",
            "number": 5,
            "title": "Chủ đề 1: Môn Bóng đá / Bóng rổ",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Đá bóng bằng lòng bàn chân hoặc dẫn bóng, chuyền bóng.",
            "questions": []
          },
          {
            "id": "gdtc-4-b6",
            "number": 6,
            "title": "Chủ đề 2: Môn Bơi / Cầu lông",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Kĩ thuật bơi ếch cơ bản hoặc di chuyển đánh cầu thuận tay.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-4",
        "name": "Hoạt động trải nghiệm",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-4-b1",
            "number": 1,
            "title": "Chủ đề 1: Nhận diện bản thân",
            "chapter": "Chủ đề 1: Nhận diện bản thân",
            "summary": "Khám phá điểm mạnh, hạn chế và lập kế hoạch phát triển bản thân.",
            "questions": []
          },
          {
            "id": "hdtn-4-b2",
            "number": 2,
            "title": "Chủ đề 2: Nếp sống và tư duy khoa học",
            "chapter": "Chủ đề 2: Nếp sống và tư duy khoa học",
            "summary": "Rèn luyện thói quen ngăn nắp, ghi chép khoa học.",
            "questions": []
          },
          {
            "id": "hdtn-4-b3",
            "number": 3,
            "title": "Chủ đề 3: Yêu trường, mến lớp",
            "chapter": "Chủ đề 3: Yêu trường, mến lớp",
            "summary": "Xây dựng tình bạn đẹp, phòng tránh xung đột trong lớp.",
            "questions": []
          },
          {
            "id": "hdtn-4-b4",
            "number": 4,
            "title": "Chủ đề 4: Tự lực thực hiện nhiệm vụ",
            "chapter": "Chủ đề 4: Tự lực thực hiện nhiệm vụ",
            "summary": "Chủ động giải quyết nhiệm vụ học tập và lao động vừa sức.",
            "questions": []
          },
          {
            "id": "hdtn-4-b5",
            "number": 5,
            "title": "Chủ đề 5: Mái ấm gia đình",
            "chapter": "Chủ đề 5: Mái ấm gia đình",
            "summary": "Gắn kết các thành viên, lập kế hoạch chi tiêu tiết kiệm.",
            "questions": []
          },
          {
            "id": "hdtn-4-b6",
            "number": 6,
            "title": "Chủ đề 6: Phòng tránh bị xâm hại",
            "chapter": "Chủ đề 6: Phòng tránh bị xâm hại",
            "summary": "Nhận biết hành vi không an toàn và kĩ năng tìm kiếm sự trợ giúp.",
            "questions": []
          },
          {
            "id": "hdtn-4-b7",
            "number": 7,
            "title": "Chủ đề 7: Kết nối cộng đồng",
            "chapter": "Chủ đề 7: Kết nối cộng đồng",
            "summary": "Tham gia hoạt động đền ơn đáp nghĩa, bảo vệ di tích địa phương.",
            "questions": []
          },
          {
            "id": "hdtn-4-b8",
            "number": 8,
            "title": "Chủ đề 8: Quê hương em tươi đẹp",
            "chapter": "Chủ đề 8: Quê hương em tươi đẹp",
            "summary": "Khảo sát thực trạng môi trường và đề xuất giải pháp xanh.",
            "questions": []
          },
          {
            "id": "hdtn-4-b9",
            "number": 9,
            "title": "Chủ đề 9: Trải nghiệm nghề truyền thống",
            "chapter": "Chủ đề 9: Trải nghiệm nghề truyền thống",
            "summary": "Tìm hiểu nghề truyền thống địa phương và giá trị sản phẩm.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 5,
    "label": "Lớp 5",
    "level": "Tiểu học",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=5",
    "subjects": [
      {
        "id": "toan-5",
        "name": "Toán",
        "icon": "📐",
        "lessons": [
          {
            "id": "toan-5-b1",
            "number": 1,
            "title": "Bài 1: Ôn tập số tự nhiên",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đọc, viết, so sánh và làm tròn số tự nhiên.",
            "questions": []
          },
          {
            "id": "toan-5-b2",
            "number": 2,
            "title": "Bài 2: Ôn tập các phép tính với số tự nhiên",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Cộng, trừ, nhân, chia và tính chất giao hoán, kết hợp, phân phối.",
            "questions": []
          },
          {
            "id": "toan-5-b3",
            "number": 3,
            "title": "Bài 3: Ôn tập phân số",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Rút gọn, quy đồng, so sánh phân số.",
            "questions": []
          },
          {
            "id": "toan-5-b4",
            "number": 4,
            "title": "Bài 4: Phân số thập phân",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Phân số có mẫu số là 10, 100, 1000,...",
            "questions": []
          },
          {
            "id": "toan-5-b5",
            "number": 5,
            "title": "Bài 5: Ôn tập các phép tính với phân số",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Cộng, trừ, nhân, chia phân số.",
            "questions": []
          },
          {
            "id": "toan-5-b6",
            "number": 6,
            "title": "Bài 6: Cộng, trừ hai phân số khác mẫu số",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Quy đồng rồi cộng, trừ hai phân số khác mẫu.",
            "questions": []
          },
          {
            "id": "toan-5-b7",
            "number": 7,
            "title": "Bài 7: Hỗn số",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Cấu tạo hỗn số (phần nguyên + phần phân số) và chuyển đổi.",
            "questions": []
          },
          {
            "id": "toan-5-b8",
            "number": 8,
            "title": "Bài 8: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Ôn tập chu vi, diện tích, góc và đơn vị đo.",
            "questions": []
          },
          {
            "id": "toan-5-b9",
            "number": 9,
            "title": "Bài 9: Luyện tập chung",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Tổng hợp ôn tập phân số, hỗn số.",
            "questions": []
          },
          {
            "id": "toan-5-b10",
            "number": 10,
            "title": "Bài 10: Khái niệm số thập phân",
            "chapter": "Chủ đề 2: Số thập phân",
            "summary": "Phần nguyên, dấu phẩy, phần thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b11",
            "number": 11,
            "title": "Bài 11: So sánh các số thập phân",
            "chapter": "Chủ đề 2: Số thập phân",
            "summary": "So sánh phần nguyên trước, rồi từng hàng phần thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b12",
            "number": 12,
            "title": "Bài 12: Viết số đo đại lượng dưới dạng số thập phân",
            "chapter": "Chủ đề 2: Số thập phân",
            "summary": "Đổi đơn vị độ dài, khối lượng, diện tích sang số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b13",
            "number": 13,
            "title": "Bài 13: Làm tròn số thập phân",
            "chapter": "Chủ đề 2: Số thập phân",
            "summary": "Làm tròn số thập phân đến số tự nhiên gần nhất, hàng phần mười, phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b14",
            "number": 14,
            "title": "Bài 14: Luyện tập chung",
            "chapter": "Chủ đề 2: Số thập phân",
            "summary": "Củng cố khái niệm và so sánh số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b15",
            "number": 15,
            "title": "Bài 15: Ki-lô-mét vuông. Héc-ta",
            "chapter": "Chủ đề 3: Một số đơn vị đo diện tích",
            "summary": "1 km² = 100 ha; 1 ha = 10 000 m².",
            "questions": []
          },
          {
            "id": "toan-5-b16",
            "number": 16,
            "title": "Bài 16: Các đơn vị đo diện tích",
            "chapter": "Chủ đề 3: Một số đơn vị đo diện tích",
            "summary": "Bảng đơn vị đo diện tích và quy đổi.",
            "questions": []
          },
          {
            "id": "toan-5-b17",
            "number": 17,
            "title": "Bài 17: Thực hành và trải nghiệm với một số đơn vị đo đại lượng",
            "chapter": "Chủ đề 3: Một số đơn vị đo diện tích",
            "summary": "Ước lượng và đo diện tích thực tế.",
            "questions": []
          },
          {
            "id": "toan-5-b18",
            "number": 18,
            "title": "Bài 18: Luyện tập chung",
            "chapter": "Chủ đề 3: Một số đơn vị đo diện tích",
            "summary": "Giải toán liên quan đơn vị đo diện tích.",
            "questions": []
          },
          {
            "id": "toan-5-b19",
            "number": 19,
            "title": "Bài 19: Phép cộng số thập phân",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Đặt tính thẳng dấu phẩy và cộng số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b20",
            "number": 20,
            "title": "Bài 20: Phép trừ số thập phân",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Đặt tính thẳng dấu phẩy và trừ số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b21",
            "number": 21,
            "title": "Bài 21: Phép nhân số thập phân",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Nhân như số tự nhiên rồi đếm chữ số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b22",
            "number": 22,
            "title": "Bài 22: Phép chia số thập phân",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Chia số thập phân cho số tự nhiên và cho số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b23",
            "number": 23,
            "title": "Bài 23: Nhân, chia số thập phân với 10; 100; 1000;... hoặc với 0,1; 0,01; 0,001;...",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Quy tắc dịch chuyển dấu phẩy sang phải hoặc trái.",
            "questions": []
          },
          {
            "id": "toan-5-b24",
            "number": 24,
            "title": "Bài 24: Luyện tập chung",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Tính giá trị biểu thức số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b25",
            "number": 25,
            "title": "Bài 25: Hình tam giác. Diện tích hình tam giác",
            "chapter": "Chủ đề 5: Một số hình phẳng, chu vi và diện tích",
            "summary": "S = (a x h) / 2.",
            "questions": []
          },
          {
            "id": "toan-5-b26",
            "number": 26,
            "title": "Bài 26: Hình thang. Diện tích hình thang",
            "chapter": "Chủ đề 5: Một số hình phẳng, chu vi và diện tích",
            "summary": "S = ((a + b) x h) / 2.",
            "questions": []
          },
          {
            "id": "toan-5-b27",
            "number": 27,
            "title": "Bài 27: Đường tròn. Chu vi và diện tích hình tròn",
            "chapter": "Chủ đề 5: Một số hình phẳng, chu vi và diện tích",
            "summary": "C = d x 3,14 = r x 2 x 3,14; S = r x r x 3,14.",
            "questions": []
          },
          {
            "id": "toan-5-b28",
            "number": 28,
            "title": "Bài 28: Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình",
            "chapter": "Chủ đề 5: Một số hình phẳng, chu vi và diện tích",
            "summary": "Đo vẽ hình tam giác, hình thang, hình tròn.",
            "questions": []
          },
          {
            "id": "toan-5-b29",
            "number": 29,
            "title": "Bài 29: Luyện tập chung",
            "chapter": "Chủ đề 5: Một số hình phẳng, chu vi và diện tích",
            "summary": "Tính diện tích hình ghép.",
            "questions": []
          },
          {
            "id": "toan-5-b30",
            "number": 30,
            "title": "Bài 30: Ôn tập số thập phân",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập đọc, viết, so sánh, làm tròn số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b31",
            "number": 31,
            "title": "Bài 31: Ôn tập các phép tính với số thập phân",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập bốn phép tính số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b32",
            "number": 32,
            "title": "Bài 32: Ôn tập một số hình phẳng",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập đặc điểm tam giác, hình thang, hình tròn.",
            "questions": []
          },
          {
            "id": "toan-5-b33",
            "number": 33,
            "title": "Bài 33: Ôn tập diện tích, chu vi một số hình phẳng",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập công thức chu vi, diện tích.",
            "questions": []
          },
          {
            "id": "toan-5-b34",
            "number": 34,
            "title": "Bài 34: Ôn tập đo lường",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập đơn vị đo độ dài, khối lượng, diện tích.",
            "questions": []
          },
          {
            "id": "toan-5-b35",
            "number": 35,
            "title": "Bài 35: Ôn tập chung",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Đề tổng hợp học kì 1 Toán 5.",
            "questions": []
          },
          {
            "id": "toan-5-b36",
            "number": 36,
            "title": "Bài 36: Tỉ số. Tỉ số phần trăm",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Viết tỉ số và đổi sang tỉ số phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b37",
            "number": 37,
            "title": "Bài 37: Tỉ lệ bản đồ và ứng dụng",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Tính độ dài thật và độ dài trên bản đồ theo tỉ lệ.",
            "questions": []
          },
          {
            "id": "toan-5-b38",
            "number": 38,
            "title": "Bài 38: Tìm hai số khi biết tổng và tỉ số của hai số đó",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Tìm tổng số phần bằng nhau rồi tìm mỗi số.",
            "questions": []
          },
          {
            "id": "toan-5-b39",
            "number": 39,
            "title": "Bài 39: Tìm hai số khi biết hiệu và tỉ số của hai số đó",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Tìm hiệu số phần bằng nhau rồi tìm mỗi số.",
            "questions": []
          },
          {
            "id": "toan-5-b40",
            "number": 40,
            "title": "Bài 40: Tìm tỉ số phần trăm của hai số",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Lấy số thứ nhất chia số thứ hai rồi nhân 100%.",
            "questions": []
          },
          {
            "id": "toan-5-b41",
            "number": 41,
            "title": "Bài 41: Tìm giá trị phần trăm của một số",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Lấy số đó chia 100 rồi nhân với số phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b42",
            "number": 42,
            "title": "Bài 42: Máy tính cầm tay",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Sử dụng máy tính cầm tay thực hiện phép tính.",
            "questions": []
          },
          {
            "id": "toan-5-b43",
            "number": 43,
            "title": "Bài 43: Thực hành và trải nghiệm sử dụng máy tính cầm tay",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Ứng dụng máy tính cầm tay tính tỉ số phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b44",
            "number": 44,
            "title": "Bài 44: Luyện tập chung",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Giải bài toán tỉ số phần trăm, tổng-tỉ, hiệu-tỉ.",
            "questions": []
          },
          {
            "id": "toan-5-b45",
            "number": 45,
            "title": "Bài 45: Thể tích của một hình",
            "chapter": "Chủ đề 8: Thể tích, đơn vị đo thể tích",
            "summary": "So sánh thể tích hai hình khối.",
            "questions": []
          },
          {
            "id": "toan-5-b46",
            "number": 46,
            "title": "Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối",
            "chapter": "Chủ đề 8: Thể tích, đơn vị đo thể tích",
            "summary": "1 dm³ = 1 000 cm³; 1 dm³ = 1 lít.",
            "questions": []
          },
          {
            "id": "toan-5-b47",
            "number": 47,
            "title": "Bài 47: Mét khối",
            "chapter": "Chủ đề 8: Thể tích, đơn vị đo thể tích",
            "summary": "1 m³ = 1 000 dm³ = 1 000 000 cm³.",
            "questions": []
          },
          {
            "id": "toan-5-b48",
            "number": 48,
            "title": "Bài 48: Luyện tập chung",
            "chapter": "Chủ đề 8: Thể tích, đơn vị đo thể tích",
            "summary": "Quy đổi đơn vị đo thể tích.",
            "questions": []
          },
          {
            "id": "toan-5-b49",
            "number": 49,
            "title": "Bài 49: Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "Nhận biết hình khai triển của hình khối.",
            "questions": []
          },
          {
            "id": "toan-5-b50",
            "number": 50,
            "title": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "Sxq = 2 x (a + b) x c; Stp = Sxq + 2 x a x b.",
            "questions": []
          },
          {
            "id": "toan-5-b51",
            "number": 51,
            "title": "Bài 51: Diện tích xung quanh và diện tích toàn phần của hình lập phương",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "Sxq = a x a x 4; Stp = a x a x 6.",
            "questions": []
          },
          {
            "id": "toan-5-b52",
            "number": 52,
            "title": "Bài 52: Thể tích của hình hộp chữ nhật",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "V = a x b x c.",
            "questions": []
          },
          {
            "id": "toan-5-b53",
            "number": 53,
            "title": "Bài 53: Thể tích của hình lập phương",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "V = a x a x a.",
            "questions": []
          },
          {
            "id": "toan-5-b54",
            "number": 54,
            "title": "Bài 54: Thực hành tính toán và ước lượng thể tích một số hình khối",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "Tính thể tích bể nước, hộp thực tế.",
            "questions": []
          },
          {
            "id": "toan-5-b55",
            "number": 55,
            "title": "Bài 55: Luyện tập chung",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "Tổng hợp diện tích và thể tích hình khối.",
            "questions": []
          },
          {
            "id": "toan-5-b56",
            "number": 56,
            "title": "Bài 56: Các đơn vị đo thời gian",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Chuyển động đều",
            "summary": "Thế kỉ, năm, tháng, ngày, giờ, phút, giây.",
            "questions": []
          },
          {
            "id": "toan-5-b57",
            "number": 57,
            "title": "Bài 57: Cộng, trừ số đo thời gian",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Chuyển động đều",
            "summary": "Cộng, trừ các đơn vị thời gian có nhớ/mượn.",
            "questions": []
          },
          {
            "id": "toan-5-b58",
            "number": 58,
            "title": "Bài 58: Nhân, chia số đo thời gian với một số",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Chuyển động đều",
            "summary": "Nhân, chia số đo thời gian cho một số tự nhiên.",
            "questions": []
          },
          {
            "id": "toan-5-b59",
            "number": 59,
            "title": "Bài 59: Vận tốc của một chuyển động đều",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Chuyển động đều",
            "summary": "v = s / t.",
            "questions": []
          },
          {
            "id": "toan-5-b60",
            "number": 60,
            "title": "Bài 60: Quãng đường, thời gian của một chuyển động đều",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Chuyển động đều",
            "summary": "s = v x t; t = s / v.",
            "questions": []
          },
          {
            "id": "toan-5-b61",
            "number": 61,
            "title": "Bài 61: Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Chuyển động đều",
            "summary": "Giải toán chuyển động cùng chiều, ngược chiều.",
            "questions": []
          },
          {
            "id": "toan-5-b62",
            "number": 62,
            "title": "Bài 62: Luyện tập chung",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Chuyển động đều",
            "summary": "Tổng hợp bài toán chuyển động đều.",
            "questions": []
          },
          {
            "id": "toan-5-b63",
            "number": 63,
            "title": "Bài 63: Thu thập, phân loại, sắp xếp các số liệu",
            "chapter": "Chủ đề 11: Một số yếu tố thống kê và xác suất",
            "summary": "Lập bảng số liệu thống kê.",
            "questions": []
          },
          {
            "id": "toan-5-b64",
            "number": 64,
            "title": "Bài 64: Biểu đồ hình quạt tròn",
            "chapter": "Chủ đề 11: Một số yếu tố thống kê và xác suất",
            "summary": "Đọc và phân tích số liệu tỉ lệ phần trăm trên biểu đồ hình quạt tròn.",
            "questions": []
          },
          {
            "id": "toan-5-b65",
            "number": 65,
            "title": "Bài 65: Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện",
            "chapter": "Chủ đề 11: Một số yếu tố thống kê và xác suất",
            "summary": "Tính tỉ số thực nghiệm trong xác suất.",
            "questions": []
          },
          {
            "id": "toan-5-b66",
            "number": 66,
            "title": "Bài 66: Thực hành và trải nghiệm thu thập, phân tích, biểu diễn số liệu",
            "chapter": "Chủ đề 11: Một số yếu tố thống kê và xác suất",
            "summary": "Thực hành vẽ và đọc biểu đồ.",
            "questions": []
          },
          {
            "id": "toan-5-b67",
            "number": 67,
            "title": "Bài 67: Luyện tập chung",
            "chapter": "Chủ đề 11: Một số yếu tố thống kê và xác suất",
            "summary": "Ôn tập thống kê và xác suất.",
            "questions": []
          },
          {
            "id": "toan-5-b68",
            "number": 68,
            "title": "Bài 68: Ôn tập số tự nhiên, phân số, số thập phân",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập hệ thống số.",
            "questions": []
          },
          {
            "id": "toan-5-b69",
            "number": 69,
            "title": "Bài 69: Ôn tập các phép tính với số tự nhiên, phân số, số thập phân",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập bốn phép tính.",
            "questions": []
          },
          {
            "id": "toan-5-b70",
            "number": 70,
            "title": "Bài 70: Ôn tập tỉ số, tỉ số phần trăm",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập tỉ số và phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b71",
            "number": 71,
            "title": "Bài 71: Ôn tập hình học",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập chu vi, diện tích, thể tích.",
            "questions": []
          },
          {
            "id": "toan-5-b72",
            "number": 72,
            "title": "Bài 72: Ôn tập đo lường",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập đơn vị đo đại lượng.",
            "questions": []
          },
          {
            "id": "toan-5-b73",
            "number": 73,
            "title": "Bài 73: Ôn tập toán chuyển động đều",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập v, s, t.",
            "questions": []
          },
          {
            "id": "toan-5-b74",
            "number": 74,
            "title": "Bài 74: Ôn tập một số yếu tố thống kê và xác suất",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập biểu đồ quạt tròn và xác suất.",
            "questions": []
          },
          {
            "id": "toan-5-b75",
            "number": 75,
            "title": "Bài 75: Ôn tập chung",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Đề tổng hợp ôn thi cuối cấp Tiểu học.",
            "questions": []
          }
        ]
      },
      {
        "id": "khoahoc-5",
        "name": "Khoa học",
        "icon": "🔬",
        "lessons": [
          {
            "id": "khoahoc-5-b1",
            "number": 1,
            "title": "Bài 1: Thành phần và vai trò của đất đối với cây trồng",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Chất khoáng, mùn, không khí, nước trong đất.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b2",
            "number": 2,
            "title": "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Trồng cây gây rừng, làm ruộng bậc thang chống xói mòn.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b3",
            "number": 3,
            "title": "Bài 3: Hỗn hợp và dung dịch",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Phân biệt hỗn hợp và dung dịch; tách chất.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b4",
            "number": 4,
            "title": "Bài 4: Đặc điểm của chất ở trạng thái rắn, lỏng, khí. Sự biến đổi trạng thái của chất",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Chuyển thể thuận nghịch.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b5",
            "number": 5,
            "title": "Bài 5: Sự biến đổi hóa học của chất",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Chất này biến đổi thành chất khác (gỉ sét, cháy, lên men).",
            "questions": []
          },
          {
            "id": "khoahoc-5-b6",
            "number": 6,
            "title": "Bài 6: Ôn tập chủ đề Chất",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Củng cố Chủ đề Chất.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b7",
            "number": 7,
            "title": "Bài 7: Vai trò của năng lượng",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Mọi hoạt động đều cần năng lượng.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b8",
            "number": 8,
            "title": "Bài 8: Sử dụng năng lượng điện",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Nguồn điện và sử dụng điện an toàn, tiết kiệm.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b9",
            "number": 9,
            "title": "Bài 9: Mạch điện đơn giản. Vật dẫn điện và vật cách điện",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Pin, bóng đèn, công tắc, dây dẫn; kim loại dẫn điện, nhựa/cao su cách điện.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b10",
            "number": 10,
            "title": "Bài 10: Năng lượng chất đốt",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Than, dầu, khí đốt; phòng tránh cháy nổ, ngộ độc khí.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b11",
            "number": 11,
            "title": "Bài 11: Sử dụng năng lượng mặt trời, năng lượng gió, năng lượng nước chảy",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Năng lượng tái tạo sạch.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b12",
            "number": 12,
            "title": "Bài 12: Ôn tập chủ đề Năng lượng",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Củng cố Chủ đề Năng lượng.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b13",
            "number": 13,
            "title": "Bài 13: Sinh sản của thực vật có hoa",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Nhị, nhụy, thụ phấn, thụ tinh, kết hạt và tạo quả.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b14",
            "number": 14,
            "title": "Bài 14: Sự phát triển của cây con",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Cây con mọc lên từ hạt và từ bộ phận thân, lá, rễ.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b15",
            "number": 15,
            "title": "Bài 15: Sinh sản của động vật",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Động vật đẻ trứng và động vật đẻ con.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b16",
            "number": 16,
            "title": "Bài 16: Vòng đời và sự phát triển của động vật",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Vòng đời bướm, ếch, gà...",
            "questions": []
          },
          {
            "id": "khoahoc-5-b17",
            "number": 17,
            "title": "Bài 17: Ôn tập chủ đề Thực vật và động vật",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Củng cố sinh sản thực vật, động vật.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b18",
            "number": 18,
            "title": "Bài 18: Vi khuẩn có ích trong tự nhiên",
            "chapter": "Chủ đề 4: Vi khuẩn",
            "summary": "Vi khuẩn phân giải xác sinh vật, cố định đạm.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b19",
            "number": 19,
            "title": "Bài 19: Vi khuẩn có ích trong chế biến thực phẩm",
            "chapter": "Chủ đề 4: Vi khuẩn",
            "summary": "Làm sữa chua, muối dưa, làm giấm.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b20",
            "number": 20,
            "title": "Bài 20: Vi khuẩn gây bệnh ở người và cách phòng tránh",
            "chapter": "Chủ đề 4: Vi khuẩn",
            "summary": "Bệnh tả, sâu răng; giữ vệ sinh cá nhân và ăn uống.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b21",
            "number": 21,
            "title": "Bài 21: Ôn tập chủ đề Vi khuẩn",
            "chapter": "Chủ đề 4: Vi khuẩn",
            "summary": "Củng cố kiến thức vi khuẩn.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b22",
            "number": 22,
            "title": "Bài 22: Nam và nữ",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Đặc điểm sinh học và vai trò bình đẳng nam - nữ.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b23",
            "number": 23,
            "title": "Bài 23: Chăm sóc sức khỏe tuổi dậy thì",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Thay đổi cơ thể, tâm sinh lí và vệ sinh tuổi dậy thì.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b24",
            "number": 24,
            "title": "Bài 24: Phòng tránh bị xâm hại",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Kĩ năng từ chối, tìm kiếm sự giúp đỡ.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b25",
            "number": 25,
            "title": "Bài 25: Phòng tránh HIV/AIDS",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Con đường lây truyền và không kì thị người nhiễm.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b26",
            "number": 26,
            "title": "Bài 26: Ôn tập chủ đề Con người và sức khỏe",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Củng cố sức khỏe vị thành niên.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b27",
            "number": 27,
            "title": "Bài 27: Hệ sinh thái",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Quần xã sinh vật và môi trường sống.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b28",
            "number": 28,
            "title": "Bài 28: Tác động của con người đến hệ sinh thái",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Tác động tích cực và tiêu cực của con người.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b29",
            "number": 29,
            "title": "Bài 29: Bảo vệ môi trường",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Bảo vệ rừng, biển và đa dạng sinh học.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b30",
            "number": 30,
            "title": "Bài 30: Ôn tập chủ đề Sinh vật và môi trường",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Tổng kết Chủ đề 6.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-diali-5",
        "name": "Lịch sử và Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "lichsu-diali-5-b1",
            "number": 1,
            "title": "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca",
            "chapter": "Chủ đề 1: Đất nước và con người Việt Nam",
            "summary": "Lãnh thổ đất liền, vùng biển, hải đảo và biểu tượng quốc gia.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b2",
            "number": 2,
            "title": "Bài 2: Thiên nhiên Việt Nam",
            "chapter": "Chủ đề 1: Đất nước và con người Việt Nam",
            "summary": "Địa hình, khí hậu, sông ngòi, đất và rừng Việt Nam.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b3",
            "number": 3,
            "title": "Bài 3: Biển, đảo Việt Nam",
            "chapter": "Chủ đề 1: Đất nước và con người Việt Nam",
            "summary": "Biển Đông, quần đảo Hoàng Sa và Trường Sa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b4",
            "number": 4,
            "title": "Bài 4: Dân cư và dân tộc ở Việt Nam",
            "chapter": "Chủ đề 1: Đất nước và con người Việt Nam",
            "summary": "54 dân tộc anh em đoàn kết xây dựng Tổ quốc.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b5",
            "number": 5,
            "title": "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc",
            "chapter": "Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam",
            "summary": "Thời Hùng Vương và An Dương Vương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b6",
            "number": 6,
            "title": "Bài 6: Vương quốc Phù Nam",
            "chapter": "Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam",
            "summary": "Vương quốc cổ ở Nam Bộ và văn hóa Óc Eo.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b7",
            "number": 7,
            "title": "Bài 7: Vương quốc Chăm-pa",
            "chapter": "Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam",
            "summary": "Vương quốc cổ ở miền Trung và tháp Chăm.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b8",
            "number": 8,
            "title": "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Khởi nghĩa Hai Bà Trưng, Bà Triệu, Lý Bí, Ngô Quyền (938).",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b9",
            "number": 9,
            "title": "Bài 9: Triều Lý và việc định đô ở Thăng Long",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Lý Thái Tổ dời đô năm 1010.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b10",
            "number": 10,
            "title": "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông - Nguyên xâm lược",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Hội nghị Diên Hồng, Trần Hưng Đạo, Bạch Đằng 1288.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b11",
            "number": 11,
            "title": "Bài 11: Ôn tập",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Ôn tập lịch sử từ Văn Lang đến nhà Trần.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b12",
            "number": 12,
            "title": "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Lê Lợi, Nguyễn Trãi và thời kì phát triển rực rỡ Đại Việt.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b13",
            "number": 13,
            "title": "Bài 13: Triều Nguyễn",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Kinh thành Huế, công cuộc khai khẩn và giữ chủ quyền biển đảo.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b14",
            "number": 14,
            "title": "Bài 14: Cách mạng tháng Tám năm 1945",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Ngày 2/9/1945 Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b15",
            "number": 15,
            "title": "Bài 15: Chiến dịch Điện Biên Phủ năm 1954",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Chiến thắng lừng lẫy năm châu 7/5/1954.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b16",
            "number": 16,
            "title": "Bài 16: Chiến dịch Hồ Chí Minh năm 1975",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Giải phóng miền Nam, thống nhất đất nước 30/4/1975.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b17",
            "number": 17,
            "title": "Bài 17: Đất nước Đổi mới",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước Việt Nam",
            "summary": "Công cuộc Đổi mới từ 1986 và thành tựu phát triển.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b18",
            "number": 18,
            "title": "Bài 18: Nước Cộng hòa Nhân dân Trung Hoa",
            "chapter": "Chủ đề 4: Các nước láng giềng",
            "summary": "Vị trí, thiên nhiên, Vạn Lý Trường Thành.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b19",
            "number": 19,
            "title": "Bài 19: Nước Cộng hòa Dân chủ Nhân dân Lào",
            "chapter": "Chủ đề 4: Các nước láng giềng",
            "summary": "Quan hệ hữu nghị Việt - Lào.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b20",
            "number": 20,
            "title": "Bài 20: Vương quốc Cam-pu-chia",
            "chapter": "Chủ đề 4: Các nước láng giềng",
            "summary": "Chùa Tháp Ăng-co Vát.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b21",
            "number": 21,
            "title": "Bài 21: Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
            "chapter": "Chủ đề 4: Các nước láng giềng",
            "summary": "Vai trò Việt Nam trong ASEAN.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b22",
            "number": 22,
            "title": "Bài 22: Các châu lục và đại dương trên thế giới",
            "chapter": "Chủ đề 5: Tìm hiểu thế giới",
            "summary": "6 châu lục và 4 đại dương lớn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b23",
            "number": 23,
            "title": "Bài 23: Dân số và các chủng tộc chính trên thế giới",
            "chapter": "Chủ đề 5: Tìm hiểu thế giới",
            "summary": "Các chủng tộc và sự bình đẳng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b24",
            "number": 24,
            "title": "Bài 24: Văn minh Ai Cập",
            "chapter": "Chủ đề 5: Tìm hiểu thế giới",
            "summary": "Sông Nin, Kim tự tháp và chữ tượng hình.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b25",
            "number": 25,
            "title": "Bài 25: Văn minh Hy Lạp",
            "chapter": "Chủ đề 5: Tìm hiểu thế giới",
            "summary": "Đền Pác-tê-nông, Thế vận hội Ô-lim-pích.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b26",
            "number": 26,
            "title": "Bài 26: Xây dựng thế giới xanh - sạch - đẹp",
            "chapter": "Chủ đề 6: Chung tay xây dựng thế giới",
            "summary": "Bảo vệ môi trường toàn cầu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b27",
            "number": 27,
            "title": "Bài 27: Xây dựng thế giới hòa bình",
            "chapter": "Chủ đề 6: Chung tay xây dựng thế giới",
            "summary": "Tinh thần yêu chuộng hòa bình.",
            "questions": []
          },
          {
            "id": "lichsu-diali-5-b28",
            "number": 28,
            "title": "Bài 28: Ôn tập",
            "chapter": "Chủ đề 6: Chung tay xây dựng thế giới",
            "summary": "Tổng ôn Lịch sử và Địa lí lớp 5.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-5",
        "name": "Tiếng Việt",
        "icon": "📚",
        "lessons": [
          {
            "id": "tiengviet-5-b1",
            "number": 1,
            "title": "Bài 1: Thanh âm của gió",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Cảm nhận vẻ đẹp âm thanh thiên nhiên tuổi thơ.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b2",
            "number": 2,
            "title": "Bài 2: Cánh đồng hoa",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Tình bạn và nỗ lực biến vùng đất khô cằn thành vườn hoa.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b3",
            "number": 3,
            "title": "Bài 3: Tuổi Ngựa",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Khát vọng bay nhảy, khám phá miền đất mới.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b4",
            "number": 4,
            "title": "Bài 4: Bến sông tuổi thơ",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Kỉ niệm êm đềm bên dòng sông quê hương.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b5",
            "number": 5,
            "title": "Bài 5: Tiếng hạt nảy mầm",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Cô giáo dạy trẻ khiếm thính bằng tình yêu thương.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b6",
            "number": 6,
            "title": "Bài 6: Ngôi sao sân cỏ",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Tinh thần đồng đội và niềm đam mê bóng đá.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b7",
            "number": 7,
            "title": "Bài 7: Bộ sưu tập độc đáo",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Sáng tạo và trân trọng giá trị tri thức.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b8",
            "number": 8,
            "title": "Bài 8: Hành tinh kì lạ",
            "chapter": "Tập 1 - Thế giới tuổi thơ",
            "summary": "Trí tưởng tượng phong phú về vũ trụ.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b9",
            "number": 9,
            "title": "Bài 9: Trước cổng trời",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Vẻ đẹp hùng vĩ, thơ mộng của vùng núi cao.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b10",
            "number": 10,
            "title": "Bài 10: Kì diệu rừng xanh",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Sự đa dạng, kì thú của hệ sinh thái rừng.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b11",
            "number": 11,
            "title": "Bài 11: Hang Sơn Đoòng – những điều kì thú",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Kì quan hang động lớn nhất thế giới tại Quảng Bình.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b12",
            "number": 12,
            "title": "Bài 12: Những hòn đảo trên vịnh Hạ Long",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Di sản thiên nhiên thế giới vịnh Hạ Long.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b13",
            "number": 13,
            "title": "Bài 13: Mầm non",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Sự trỗi dậy kì diệu của mầm non đón mùa xuân.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b14",
            "number": 14,
            "title": "Bài 14: Những ngọn núi nóng rẫy",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Tìm hiểu hiện tượng núi lửa trên Trái Đất.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b15",
            "number": 15,
            "title": "Bài 15: Bài ca về mặt trời",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Vai trò nguồn sáng, năng lượng Mặt Trời với sự sống.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b16",
            "number": 16,
            "title": "Bài 16: Xin chào, Xa-ha-ra",
            "chapter": "Tập 1 - Thiên nhiên kì thú",
            "summary": "Khám phá thiên nhiên khắc nghiệt ở hoang mạc Sahara.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b17",
            "number": 17,
            "title": "Bài 17: Thư gửi các học sinh",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Lời căn dặn sâu sắc của Bác Hồ nhân ngày khai trường đầu tiên 1945.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b18",
            "number": 18,
            "title": "Bài 18: Tấm gương tự học",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Tinh thần tự học bền bỉ làm nên thành công.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b19",
            "number": 19,
            "title": "Bài 19: Trải nghiệm để sáng tạo",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Thực hành giúp hiểu sâu kiến thức.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b20",
            "number": 20,
            "title": "Bài 20: Khổ luyện thành tài",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Nghị lực rèn luyện vượt qua khiếm khuyết, khó khăn.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b21",
            "number": 21,
            "title": "Bài 21: Thế giới trong trang sách",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Đọc sách mở ra chân trời tri thức mới.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b22",
            "number": 22,
            "title": "Bài 22: Từ những câu chuyện ấu thơ",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Ảnh hưởng của truyện đọc tuổi thơ đến tâm hồn.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b23",
            "number": 23,
            "title": "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Tác phẩm văn học thiếu nhi kinh điển của Tô Hoài.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b24",
            "number": 24,
            "title": "Bài 24: Tinh thần học tập của nhà Phi-lít",
            "chapter": "Tập 1 - Trên con đường học tập",
            "summary": "Tấm gương hiếu học vươn lên trong cuộc sống.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b25",
            "number": 25,
            "title": "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Vẻ đẹp lãng mạn của công trình thủy điện Hòa Bình.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b26",
            "number": 26,
            "title": "Bài 26: Trí tưởng tượng phong phú",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Cội nguồn của sáng tạo nghệ thuật.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b27",
            "number": 27,
            "title": "Bài 27: Tranh làng Hồ",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Tôn vinh nghệ thuật tranh dân gian Đông Hồ.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b28",
            "number": 28,
            "title": "Bài 28: Tập hát quan họ",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Di sản dân ca Quan họ Bắc Ninh.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b29",
            "number": 29,
            "title": "Bài 29: Phim hoạt hình Chú ốc sên bay",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Tìm hiểu nghệ thuật làm phim hoạt hình.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b30",
            "number": 30,
            "title": "Bài 30: Nghệ thuật múa ba lê",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Vẻ đẹp tinh tế của nghệ thuật múa ba lê.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b31",
            "number": 31,
            "title": "Bài 31: Một ngôi chùa độc đáo",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Kiến trúc độc đáo của chùa Một Cột.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b32",
            "number": 32,
            "title": "Bài 32: Sự tích chú Tễu",
            "chapter": "Tập 1 - Nghệ thuật muôn màu",
            "summary": "Nghệ thuật múa rối nước truyền thống Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b33",
            "number": 33,
            "title": "Bài 1 (T2): Tiếng hát của người đá",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Tình yêu lao động và nghệ thuật dân gian.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b34",
            "number": 34,
            "title": "Bài 2 (T2): Khúc hát ru những em bé lớn trên lưng mẹ",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Tình yêu con gắn liền tình yêu đất nước của người mẹ Tà Ôi.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b35",
            "number": 35,
            "title": "Bài 3 (T2): Hạt gạo làng ta",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Giá trị lao động kết tinh trong từng hạt gạo.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b36",
            "number": 36,
            "title": "Bài 4 (T2): Hộp quà màu thiên thanh",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Sẻ chia niềm vui và lòng tốt trong cuộc sống.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b37",
            "number": 37,
            "title": "Bài 5 (T2): Giỏ hoa tháng Năm",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Tấm lòng tri ân, yêu thương thầy cô, bạn bè.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b38",
            "number": 38,
            "title": "Bài 6 (T2): Thư của bố",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Tình cảm gia đình ấm áp qua những bức thư.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b39",
            "number": 39,
            "title": "Bài 7 (T2): Đoàn thuyền đánh cá",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Khí thế hăng say lao động làm giàu từ biển cả.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b40",
            "number": 40,
            "title": "Bài 8 (T2): Khu rừng của Mát",
            "chapter": "Tập 2 - Vẻ đẹp cuộc sống",
            "summary": "Trách nhiệm giữ gìn và bảo vệ rừng xanh.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b41",
            "number": 41,
            "title": "Bài 9 (T2): Hội thổi cơm thi ở Đồng Văn",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Nét sinh hoạt văn hóa dân gian độc đáo.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b42",
            "number": 42,
            "title": "Bài 10 (T2): Những búp chè trên cây cổ thụ",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Vùng chè cổ thụ Suối Giàng vùng Tây Bắc.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b43",
            "number": 43,
            "title": "Bài 11 (T2): Hương cốm mùa thu",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Đặc sản cốm làng Vòng mang hương sắc thu Hà Nội.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b44",
            "number": 44,
            "title": "Bài 12 (T2): Vũ điệu trên nền thổ cẩm",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Sắc màu văn hóa các dân tộc thiểu số.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b45",
            "number": 45,
            "title": "Bài 13 (T2): Đàn t'rưng – tiếng ca đại ngàn",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Nhạc cụ truyền thống độc đáo của Tây Nguyên.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b46",
            "number": 46,
            "title": "Bài 14 (T2): Đường quê Đồng Tháp Mười",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Vẻ đẹp trù phú của vùng Đồng Tháp Mười.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b47",
            "number": 47,
            "title": "Bài 15 (T2): Xuồng ba lá quê tôi",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Phương tiện gắn bó với đời sống sông nước Nam Bộ.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b48",
            "number": 48,
            "title": "Bài 16 (T2): Về thăm Đất Mũi",
            "chapter": "Tập 2 - Hương sắc trăm miền",
            "summary": "Vẻ đẹp cực Nam thiêng liêng của Tổ quốc.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b49",
            "number": 49,
            "title": "Bài 17 (T2): Nghìn năm văn hiến",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Truyền thống hiếu học ngàn năm qua Văn Miếu - Quốc Tử Giám.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b50",
            "number": 50,
            "title": "Bài 18 (T2): Người thầy của muôn đời",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Tấm gương đạo đức, trí tuệ của thầy giáo Chu Văn An.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b51",
            "number": 51,
            "title": "Bài 19 (T2): Danh y Tuệ Tĩnh",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Người đặt nền móng cho nền y học cổ truyền dân tộc.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b52",
            "number": 52,
            "title": "Bài 20 (T2): Cụ Đồ Chiểu",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Tấm gương yêu nước, bất khuất của nhà thơ Nguyễn Đình Chiểu.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b53",
            "number": 53,
            "title": "Bài 21 (T2): Anh hùng Lao động Trần Đại Nghĩa",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Nhà khoa học cống hiến xuất sắc cho kháng chiến và đất nước.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b54",
            "number": 54,
            "title": "Bài 22 (T2): Bộ đội về làng",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Tình quân dân thắm thiết trong kháng chiến.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b55",
            "number": 55,
            "title": "Bài 23 (T2): Về ngôi nhà đang xây",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Công cuộc kiến thiết, đổi mới đất nước.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b56",
            "number": 56,
            "title": "Bài 24 (T2): Việt Nam quê hương ta",
            "chapter": "Tập 2 - Tiếp bước cha ông",
            "summary": "Ca ngợi vẻ đẹp con người và đất nước Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b57",
            "number": 57,
            "title": "Bài 25 (T2): Bài ca trái đất",
            "chapter": "Tập 2 - Thế giới của chúng ta",
            "summary": "Khát vọng hòa bình, đoàn kết của trẻ em toàn thế giới.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b58",
            "number": 58,
            "title": "Bài 26 (T2): Những con hạc giấy",
            "chapter": "Tập 2 - Thế giới của chúng ta",
            "summary": "Câu chuyện Xa-da-cô và ước nguyện hòa bình.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b59",
            "number": 59,
            "title": "Bài 27 (T2): Một người hùng thầm lặng",
            "chapter": "Tập 2 - Thế giới của chúng ta",
            "summary": "Ca ngợi lòng dũng cảm cứu người.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b60",
            "number": 60,
            "title": "Bài 28 (T2): Giờ Trái Đất",
            "chapter": "Tập 2 - Thế giới của chúng ta",
            "summary": "Chiến dịch tiết kiệm năng lượng bảo vệ Trái Đất.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b61",
            "number": 61,
            "title": "Bài 29 (T2): Điện thoại di động",
            "chapter": "Tập 2 - Thế giới của chúng ta",
            "summary": "Lợi ích và cách sử dụng điện thoại thông minh hợp lí.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b62",
            "number": 62,
            "title": "Bài 30 (T2): Thành phố thông minh Mát-xđa",
            "chapter": "Tập 2 - Thế giới của chúng ta",
            "summary": "Mô hình đô thị xanh sử dụng năng lượng sạch.",
            "questions": []
          }
        ]
      },
      {
        "id": "daoduc-5",
        "name": "Đạo đức",
        "icon": "💖",
        "lessons": [
          {
            "id": "daoduc-5-b1",
            "number": 1,
            "title": "Bài 1: Biết ơn những người có công với quê hương, đất nước",
            "chapter": "Chủ đề 1: Biết ơn những người có công với quê hương, đất nước",
            "summary": "Ghi nhớ công lao anh hùng liệt sĩ, người có công.",
            "questions": []
          },
          {
            "id": "daoduc-5-b2",
            "number": 2,
            "title": "Bài 2: Tôn trọng sự khác biệt của người khác",
            "chapter": "Chủ đề 2: Tôn trọng sự khác biệt của người khác",
            "summary": "Không kì thị, tôn trọng sở thích, hoàn cảnh người khác.",
            "questions": []
          },
          {
            "id": "daoduc-5-b3",
            "number": 3,
            "title": "Bài 3: Vượt qua khó khăn",
            "chapter": "Chủ đề 3: Vượt qua khó khăn",
            "summary": "Kiên trì, lạc quan tìm giải pháp vượt khó.",
            "questions": []
          },
          {
            "id": "daoduc-5-b4",
            "number": 4,
            "title": "Bài 4: Bảo vệ cái đúng, cái tốt",
            "chapter": "Chủ đề 4: Bảo vệ cái đúng, cái tốt",
            "summary": "Dũng cảm ủng hộ việc tốt, góp ý cái sai.",
            "questions": []
          },
          {
            "id": "daoduc-5-b5",
            "number": 5,
            "title": "Bài 5: Bảo vệ môi trường sống",
            "chapter": "Chủ đề 5: Bảo vệ môi trường sống",
            "summary": "Phân loại rác, tiết kiệm điện nước, trồng cây.",
            "questions": []
          },
          {
            "id": "daoduc-5-b6",
            "number": 6,
            "title": "Bài 6: Lập kế hoạch cá nhân",
            "chapter": "Chủ đề 6: Lập kế hoạch cá nhân",
            "summary": "Xác định mục tiêu và phân bổ thời gian.",
            "questions": []
          },
          {
            "id": "daoduc-5-b7",
            "number": 7,
            "title": "Bài 7: Phòng, tránh xâm hại",
            "chapter": "Chủ đề 7: Phòng, tránh xâm hại",
            "summary": "Nhận diện nguy cơ và bảo vệ bản thân.",
            "questions": []
          },
          {
            "id": "daoduc-5-b8",
            "number": 8,
            "title": "Bài 8: Sử dụng tiền hợp lí",
            "chapter": "Chủ đề 8: Sử dụng tiền hợp lí",
            "summary": "Phân biệt nhu cầu thiết yếu và mong muốn.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-5",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-5-b1",
            "number": 1,
            "title": "Bài 1: Em có thể làm gì với máy tính?",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Ứng dụng máy tính trong học tập, giải trí, tìm kiếm và liên lạc.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b2",
            "number": 2,
            "title": "Bài 2: Tìm kiếm thông tin trên website",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Sử dụng từ khóa và công cụ tìm kiếm tìm thông tin an toàn.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b3",
            "number": 3,
            "title": "Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ và trao đổi thông tin",
            "summary": "Chọn lọc và sử dụng thông tin tìm được.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b4",
            "number": 4,
            "title": "Bài 4: Cây thư mục",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ và trao đổi thông tin",
            "summary": "Cấu trúc cây thư mục và tổ chức lưu trữ tệp khoa học.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b5",
            "number": 5,
            "title": "Bài 5: Bản quyền nội dung thông tin",
            "chapter": "Chủ đề 4: Đạo đức, pháp luật và văn hóa số",
            "summary": "Tôn trọng bản quyền tác giả khi sử dụng văn bản, hình ảnh.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b6",
            "number": 6,
            "title": "Bài 6: Định dạng kí tự và bố trí hình ảnh trong văn bản",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Đổi phông chữ, cỡ chữ, màu chữ và chèn, căn chỉnh ảnh.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b7",
            "number": 7,
            "title": "Bài 7: Thực hành soạn thảo văn bản",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tạo bài viết hoàn chỉnh có tiêu đề và hình ảnh minh họa.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b8",
            "number": 8,
            "title": "Bài 8A: Làm quen với phần mềm đồ họa",
            "chapter": "Chủ đề 5: Ứng dụng tin học (Lựa chọn A)",
            "summary": "Công cụ vẽ hình cơ bản trong phần mềm đồ họa Paint/Inkscape.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b9",
            "number": 9,
            "title": "Bài 9A: Sử dụng phần mềm đồ họa tạo sản phẩm số",
            "chapter": "Chủ đề 5: Ứng dụng tin học (Lựa chọn A)",
            "summary": "Thiết kế thiệp chúc mừng hoặc áp phích.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b10",
            "number": 10,
            "title": "Bài 8B: Làm sản phẩm thủ công theo video hướng dẫn",
            "chapter": "Chủ đề 5: Ứng dụng tin học (Lựa chọn B)",
            "summary": "Xem, tua, tạm dừng video học làm sản phẩm.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b11",
            "number": 11,
            "title": "Bài 9B: Thực hành tạo đồ dùng gia đình theo video hướng dẫn",
            "chapter": "Chủ đề 5: Ứng dụng tin học (Lựa chọn B)",
            "summary": "Thực hành làm đồ dùng theo hướng dẫn số.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b12",
            "number": 12,
            "title": "Bài 10: Cấu trúc tuần tự",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với Scratch",
            "summary": "Các lệnh thực hiện nối tiếp theo thứ tự trong Scratch.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b13",
            "number": 13,
            "title": "Bài 11: Cấu trúc lặp",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với Scratch",
            "summary": "Khối lệnh lặp với số lần biết trước (repeat) và lặp liên tục (forever).",
            "questions": []
          },
          {
            "id": "tinhoc-5-b14",
            "number": 14,
            "title": "Bài 12: Thực hành sử dụng lệnh lặp",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với Scratch",
            "summary": "Vẽ hình đa giác đều hoặc tạo chuyển động lặp trong Scratch.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b15",
            "number": 15,
            "title": "Bài 13: Cấu trúc rẽ nhánh",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với Scratch",
            "summary": "Khối lệnh điều kiện nếu... thì... (if... then... / if... then... else).",
            "questions": []
          },
          {
            "id": "tinhoc-5-b16",
            "number": 16,
            "title": "Bài 14: Sử dụng biến trong chương trình",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với Scratch",
            "summary": "Tạo biến (Variable), gán giá trị và thay đổi giá trị biến.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b17",
            "number": 17,
            "title": "Bài 15: Sử dụng biểu thức trong chương trình",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với Scratch",
            "summary": "Biểu thức số học, so sánh và logic trong Scratch.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b18",
            "number": 18,
            "title": "Bài 16: Từ kịch bản đến chương trình",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với Scratch",
            "summary": "Xây dựng chương trình trò chơi/hoạt hình hoàn chỉnh từ kịch bản.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-5",
        "name": "Công nghệ",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-5-b1",
            "number": 1,
            "title": "Bài 1: Vai trò của công nghệ",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Ảnh hưởng của công nghệ trong đời sống.",
            "questions": []
          },
          {
            "id": "congnghe-5-b2",
            "number": 2,
            "title": "Bài 2: Nhà sáng chế",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Tìm hiểu các nhà sáng chế tiêu biểu (Bóng đèn, Điện thoại...).",
            "questions": []
          },
          {
            "id": "congnghe-5-b3",
            "number": 3,
            "title": "Bài 3: Tìm hiểu thiết kế",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Các bước thiết kế sản phẩm công nghệ.",
            "questions": []
          },
          {
            "id": "congnghe-5-b4",
            "number": 4,
            "title": "Bài 4: Thiết kế sản phẩm",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Vẽ phác thảo và làm sản phẩm mẫu.",
            "questions": []
          },
          {
            "id": "congnghe-5-b5",
            "number": 5,
            "title": "Bài 5: Sử dụng điện thoại",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Gọi điện, lưu danh bạ và sử dụng điện thoại an toàn, lịch sự.",
            "questions": []
          },
          {
            "id": "congnghe-5-b6",
            "number": 6,
            "title": "Bài 6: Sử dụng tủ lạnh",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Sắp xếp thực phẩm trong ngăn mát/ngăn đông hợp lí.",
            "questions": []
          },
          {
            "id": "congnghe-5-b7",
            "number": 7,
            "title": "Bài 7: Lắp ráp mô hình xe điện chạy bằng pin",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Lắp mạch điện và động cơ cho mô hình xe điện.",
            "questions": []
          },
          {
            "id": "congnghe-5-b8",
            "number": 8,
            "title": "Bài 8: Mô hình máy phát điện gió",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Cấu tạo tuabin gió tạo điện.",
            "questions": []
          },
          {
            "id": "congnghe-5-b9",
            "number": 9,
            "title": "Bài 9: Mô hình điện mặt trời",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Tấm pin mặt trời chuyển quang năng thành điện năng.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-5",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-5-b1",
            "number": 1,
            "title": "Unit 1: All about me!",
            "chapter": "Unit 1: All about me!",
            "summary": "Giới thiệu bản thân, sở thích, màu sắc và môn học yêu thích.",
            "questions": []
          },
          {
            "id": "tienganh-5-b2",
            "number": 2,
            "title": "Unit 2: Our homes",
            "chapter": "Unit 2: Our homes",
            "summary": "Nơi ở và địa chỉ nhà: Do you live in this house?",
            "questions": []
          },
          {
            "id": "tienganh-5-b3",
            "number": 3,
            "title": "Unit 3: My foreign friends",
            "chapter": "Unit 3: My foreign friends",
            "summary": "Quốc tịch và tính cách bạn bè nước ngoài.",
            "questions": []
          },
          {
            "id": "tienganh-5-b4",
            "number": 4,
            "title": "Unit 4: Our free-time activities",
            "chapter": "Unit 4: Our free-time activities",
            "summary": "Hoạt động thời gian rảnh: What do you like doing in your free time?",
            "questions": []
          },
          {
            "id": "tienganh-5-b5",
            "number": 5,
            "title": "Unit 5: My future job",
            "chapter": "Unit 5: My future job",
            "summary": "Nghề nghiệp tương lai: What would you like to be in the future?",
            "questions": []
          },
          {
            "id": "tienganh-5-b6",
            "number": 6,
            "title": "Unit 6: Our school rooms",
            "chapter": "Unit 6: Our school rooms",
            "summary": "Chỉ đường tới các phòng trong trường.",
            "questions": []
          },
          {
            "id": "tienganh-5-b7",
            "number": 7,
            "title": "Unit 7: Our favourite school activities",
            "chapter": "Unit 7: Our favourite school activities",
            "summary": "Hoạt động học tập yêu thích ở trường.",
            "questions": []
          },
          {
            "id": "tienganh-5-b8",
            "number": 8,
            "title": "Unit 8: In our classroom",
            "chapter": "Unit 8: In our classroom",
            "summary": "Vị trí đồ dùng học tập và sở hữu: Whose pen is this?",
            "questions": []
          },
          {
            "id": "tienganh-5-b9",
            "number": 9,
            "title": "Unit 9: Our outdoor activities",
            "chapter": "Unit 9: Our outdoor activities",
            "summary": "Thì Quá khứ đơn: Were you at the theatre yesterday?",
            "questions": []
          },
          {
            "id": "tienganh-5-b10",
            "number": 10,
            "title": "Unit 10: Our school trip",
            "chapter": "Unit 10: Our school trip",
            "summary": "Chuyến tham quan: Did you go to Ba Na Hills?",
            "questions": []
          },
          {
            "id": "tienganh-5-b11",
            "number": 11,
            "title": "Unit 11: Family time",
            "chapter": "Unit 11: Family time",
            "summary": "Hoạt động gia đình trong quá khứ: What did your family do?",
            "questions": []
          },
          {
            "id": "tienganh-5-b12",
            "number": 12,
            "title": "Unit 12: Our Tet holiday",
            "chapter": "Unit 12: Our Tet holiday",
            "summary": "Dự định ngày Tết với will / going to.",
            "questions": []
          },
          {
            "id": "tienganh-5-b13",
            "number": 13,
            "title": "Unit 13: Our special days",
            "chapter": "Unit 13: Our special days",
            "summary": "Các ngày lễ đặc biệt: Teachers' Day, Children's Day.",
            "questions": []
          },
          {
            "id": "tienganh-5-b14",
            "number": 14,
            "title": "Unit 14: Staying healthy",
            "chapter": "Unit 14: Staying healthy",
            "summary": "Thói quen sống khỏe và tần suất: How often do you do morning exercise?",
            "questions": []
          },
          {
            "id": "tienganh-5-b15",
            "number": 15,
            "title": "Unit 15: Our health",
            "chapter": "Unit 15: Our health",
            "summary": "Bệnh thường gặp và lời khuyên should / shouldn't.",
            "questions": []
          },
          {
            "id": "tienganh-5-b16",
            "number": 16,
            "title": "Unit 16: Seasons and the weather",
            "chapter": "Unit 16: Seasons and the weather",
            "summary": "Bốn mùa và thời tiết đặc trưng.",
            "questions": []
          },
          {
            "id": "tienganh-5-b17",
            "number": 17,
            "title": "Unit 17: Stories for children",
            "chapter": "Unit 17: Stories for children",
            "summary": "Kể chuyện cổ tích với thì Quá khứ đơn.",
            "questions": []
          },
          {
            "id": "tienganh-5-b18",
            "number": 18,
            "title": "Unit 18: Means of transport",
            "chapter": "Unit 18: Means of transport",
            "summary": "Phương tiện giao thông và cách đi lại.",
            "questions": []
          },
          {
            "id": "tienganh-5-b19",
            "number": 19,
            "title": "Unit 19: Places of interest",
            "chapter": "Unit 19: Places of interest",
            "summary": "Danh lam thắng cảnh Việt Nam và thế giới.",
            "questions": []
          },
          {
            "id": "tienganh-5-b20",
            "number": 20,
            "title": "Unit 20: Our summer holidays",
            "chapter": "Unit 20: Our summer holidays",
            "summary": "Dự định kì nghỉ hè: Where are you going to visit this summer?",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-5",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-5-b1",
            "number": 1,
            "title": "Chủ đề 1: Tự hào truyền thống trường em",
            "chapter": "Chủ đề 1: Tự hào truyền thống trường em",
            "summary": "Hát Reo vang bình minh; ôn tập đọc nhạc và nhịp 2/4, 3/4.",
            "questions": []
          },
          {
            "id": "amnhac-5-b2",
            "number": 2,
            "title": "Chủ đề 2: Âm nhạc vang lên",
            "chapter": "Chủ đề 2: Âm nhạc vang lên",
            "summary": "Thực hành hát bè đơn giản và đệm bằng nhạc cụ gõ.",
            "questions": []
          },
          {
            "id": "amnhac-5-b3",
            "number": 3,
            "title": "Chủ đề 3: Vui hội mùa thu",
            "chapter": "Chủ đề 3: Vui hội mùa thu",
            "summary": "Hát Đêm Trung thu; nghe và cảm nhận âm nhạc dân gian.",
            "questions": []
          },
          {
            "id": "amnhac-5-b4",
            "number": 4,
            "title": "Chủ đề 4: Lời ca dâng thầy cô",
            "chapter": "Chủ đề 4: Lời ca dâng thầy cô",
            "summary": "Hát Những bông hoa những bài ca; thể hiện tình cảm tri ân.",
            "questions": []
          },
          {
            "id": "amnhac-5-b5",
            "number": 5,
            "title": "Chủ đề 5: Khúc ca mùa xuân",
            "chapter": "Chủ đề 5: Khúc ca mùa xuân",
            "summary": "Hát Ngày Tết quê em; đọc nhạc kết hợp gõ phách.",
            "questions": []
          },
          {
            "id": "amnhac-5-b6",
            "number": 6,
            "title": "Chủ đề 6: Quê hương tươi đẹp",
            "chapter": "Chủ đề 6: Quê hương tươi đẹp",
            "summary": "Hát Em đi giữa biển vàng; tìm hiểu nhạc sĩ Hoàng Vân.",
            "questions": []
          },
          {
            "id": "amnhac-5-b7",
            "number": 7,
            "title": "Chủ đề 7: Giai điệu bạn bè",
            "chapter": "Chủ đề 7: Giai điệu bạn bè",
            "summary": "Hát Thiếu nhi thế giới; tìm hiểu một số nhạc cụ phương Tây.",
            "questions": []
          },
          {
            "id": "amnhac-5-b8",
            "number": 8,
            "title": "Chủ đề 8: Trái đất xanh",
            "chapter": "Chủ đề 8: Trái đất xanh",
            "summary": "Hát Trái đất này là của chúng mình; biểu diễn tổng kết bậc Tiểu học.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-5",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-5-b1",
            "number": 1,
            "title": "Chủ đề 1: Yếu tố tạo hình trong thực hành, sáng tạo theo chủ đề",
            "chapter": "Chủ đề 1: Yếu tố tạo hình",
            "summary": "Vận dụng đường nét, hình khối, màu sắc, đậm nhạt trong sáng tạo.",
            "questions": []
          },
          {
            "id": "mithuat-5-b2",
            "number": 2,
            "title": "Chủ đề 2: Hình tượng anh hùng dân tộc trong mĩ thuật tạo hình Việt Nam",
            "chapter": "Chủ đề 2: Hình tượng anh hùng dân tộc",
            "summary": "Tìm hiểu tượng đài, tranh lịch sử về các anh hùng dân tộc.",
            "questions": []
          },
          {
            "id": "mithuat-5-b3",
            "number": 3,
            "title": "Chủ đề 3: Gia đình",
            "chapter": "Chủ đề 3: Gia đình",
            "summary": "Vẽ và tạo hình chủ đề sum họp, yêu thương gia đình.",
            "questions": []
          },
          {
            "id": "mithuat-5-b4",
            "number": 4,
            "title": "Chủ đề 4: Những hoạt động yêu thích ở trường em",
            "chapter": "Chủ đề 4: Hoạt động yêu thích ở trường",
            "summary": "Sáng tạo tranh cổ động, tranh sinh hoạt học đường.",
            "questions": []
          },
          {
            "id": "mithuat-5-b5",
            "number": 5,
            "title": "Chủ đề 5: Những việc làm bình dị mà cao quý trong cuộc sống",
            "chapter": "Chủ đề 5: Việc làm cao quý",
            "summary": "Vẽ tranh về gương người tốt việc tốt, nghề nghiệp phục vụ cộng đồng.",
            "questions": []
          },
          {
            "id": "mithuat-5-b6",
            "number": 6,
            "title": "Chủ đề 6: Cảnh sắc quê hương",
            "chapter": "Chủ đề 6: Cảnh sắc quê hương",
            "summary": "Vẽ phong cảnh quê hương bằng chất liệu tự chọn.",
            "questions": []
          },
          {
            "id": "mithuat-5-b7",
            "number": 7,
            "title": "Chủ đề 7: Việt Nam đất nước, con người",
            "chapter": "Chủ đề 7: Việt Nam đất nước, con người",
            "summary": "Giới thiệu bản sắc văn hóa các vùng miền qua mĩ thuật.",
            "questions": []
          },
          {
            "id": "mithuat-5-b8",
            "number": 8,
            "title": "Chủ đề 8: Vì một thế giới hoà bình",
            "chapter": "Chủ đề 8: Vì một thế giới hòa bình",
            "summary": "Vẽ tranh chủ đề hòa bình, tình hữu nghị quốc tế.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-5",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-5-b1",
            "number": 1,
            "title": "Phòng tránh chấn thương và dinh dưỡng thể thao",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Khởi động chuyên biệt, hồi tĩnh sau tập và chế độ ăn hợp lí.",
            "questions": []
          },
          {
            "id": "gdtc-5-b2",
            "number": 2,
            "title": "Chủ đề 1: Đội hình đội ngũ",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Đi đều vòng trái/phải, giậm chân tại chỗ chuyển sang đi đều.",
            "questions": []
          },
          {
            "id": "gdtc-5-b3",
            "number": 3,
            "title": "Chủ đề 2: Bài tập thể dục",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Bài thể dục phát triển chung lớp 5 nhịp nhàng theo nhạc.",
            "questions": []
          },
          {
            "id": "gdtc-5-b4",
            "number": 4,
            "title": "Chủ đề 3: Tư thế và kĩ năng vận động cơ bản",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Chạy bền trên địa hình tự nhiên, nhảy dây bền, bật xa.",
            "questions": []
          },
          {
            "id": "gdtc-5-b5",
            "number": 5,
            "title": "Chủ đề 1: Môn Bóng đá / Bóng rổ",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Dẫn bóng vượt chướng ngại vật và phối hợp chuyền bóng.",
            "questions": []
          },
          {
            "id": "gdtc-5-b6",
            "number": 6,
            "title": "Chủ đề 2: Môn Bơi / Cầu lông",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Hoàn thiện kĩ thuật bơi ếch hoặc phát cầu thấp tay.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-5",
        "name": "Hoạt động trải nghiệm",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-5-b1",
            "number": 1,
            "title": "Chủ đề 1: Em và sự trưởng thành của bản thân",
            "chapter": "Chủ đề 1: Em lớn khôn",
            "summary": "Nhận biết sự thay đổi của bản thân và rèn luyện tính tự chủ.",
            "questions": []
          },
          {
            "id": "hdtn-5-b2",
            "number": 2,
            "title": "Chủ đề 2: Kiểm soát cảm xúc và giải quyết vấn đề",
            "chapter": "Chủ đề 2: Quản lí cảm xúc và tự kiểm soát",
            "summary": "Cách xử lí bất đồng với bạn bè và kiểm soát nóng giận.",
            "questions": []
          },
          {
            "id": "hdtn-5-b3",
            "number": 3,
            "title": "Chủ đề 3: Xây dựng trường học thân thiện, an toàn",
            "chapter": "Chủ đề 3: Trường học thân thiện",
            "summary": "Hợp tác nhóm và tổ chức sự kiện tri ân thầy cô cuối cấp.",
            "questions": []
          },
          {
            "id": "hdtn-5-b4",
            "number": 4,
            "title": "Chủ đề 4: Trách nhiệm và gắn kết gia đình",
            "chapter": "Chủ đề 4: Trách nhiệm với gia đình",
            "summary": "Lập kế hoạch kinh doanh nhỏ/tiết kiệm và chăm sóc gia đình.",
            "questions": []
          },
          {
            "id": "hdtn-5-b5",
            "number": 5,
            "title": "Chủ đề 5: An toàn trên không gian mạng và đời sống",
            "chapter": "Chủ đề 5: Phòng tránh xâm hại và an toàn mạng",
            "summary": "Nhận biết rủi ro trên Internet và kĩ năng tự bảo vệ.",
            "questions": []
          },
          {
            "id": "hdtn-5-b6",
            "number": 6,
            "title": "Chủ đề 6: Hoạt động vì cộng đồng",
            "chapter": "Chủ đề 6: Cộng đồng văn minh",
            "summary": "Lập kế hoạch và thực hiện dự án thiện nguyện nhỏ.",
            "questions": []
          },
          {
            "id": "hdtn-5-b7",
            "number": 7,
            "title": "Chủ đề 7: Hành động vì môi trường xanh",
            "chapter": "Chủ đề 7: Bảo vệ thiên nhiên",
            "summary": "Tuyên truyền bảo vệ đa dạng sinh học và giảm thiểu rác thải nhựa.",
            "questions": []
          },
          {
            "id": "hdtn-5-b8",
            "number": 8,
            "title": "Chủ đề 8: Khám phá sở thích nghề nghiệp tương lai",
            "chapter": "Chủ đề 8: Định hướng nghề nghiệp",
            "summary": "Tìm hiểu các nhóm nghề và chuẩn bị tâm thế lên lớp 6.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 6,
    "label": "Lớp 6",
    "level": "THCS",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=6",
    "subjects": [
      {
        "id": "toan-6",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-6-b1",
            "number": 1,
            "title": "Bài 1: Tập hợp",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Khái niệm tập hợp, phần tử thuộc (∈) hoặc không thuộc (∉), hai cách mô tả tập hợp.",
            "questions": [
              {
                "content": "Cho tập hợp A = {1; 3; 5; 7}. Khẳng định nào sau đây đúng?",
                "option_a": "2 ∈ A",
                "option_b": "3 ∈ A",
                "option_c": "5 ∉ A",
                "option_d": "7 ∉ A",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-6-b2",
            "number": 2,
            "title": "Bài 2: Cách ghi số tự nhiên",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Tập hợp N và N*, hệ thập phân, số La Mã từ 1 đến 30.",
            "questions": [
              {
                "content": "Số La Mã XIV biểu diễn số tự nhiên nào trong hệ thập phân?",
                "option_a": "16",
                "option_b": "14",
                "option_c": "24",
                "option_d": "15",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-6-b3",
            "number": 3,
            "title": "Bài 3: Thứ tự trong tập hợp các số tự nhiên",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "So sánh hai số tự nhiên, biểu diễn trên tia số.",
            "questions": []
          },
          {
            "id": "toan-6-b4",
            "number": 4,
            "title": "Bài 4: Phép cộng và phép trừ số tự nhiên",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Tính chất giao hoán, kết hợp của phép cộng và phép trừ.",
            "questions": []
          },
          {
            "id": "toan-6-b5",
            "number": 5,
            "title": "Bài 5: Phép nhân và phép chia số tự nhiên",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Phép nhân, phép chia hết và phép chia có dư.",
            "questions": [
              {
                "content": "Trong phép chia có dư với số chia là 7, số dư lớn nhất có thể là bao nhiêu?",
                "option_a": "7",
                "option_b": "5",
                "option_c": "6",
                "option_d": "8",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-6-b6",
            "number": 6,
            "title": "Bài 6: Lũy thừa với số mũ tự nhiên",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Định nghĩa lũy thừa a^n, nhân và chia hai lũy thừa cùng cơ số.",
            "questions": []
          },
          {
            "id": "toan-6-b7",
            "number": 7,
            "title": "Bài 7: Thứ tự thực hiện các phép tính",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Thứ tự thực hiện biểu thức có và không có dấu ngoặc.",
            "questions": []
          },
          {
            "id": "toan-6-b8",
            "number": 8,
            "title": "Bài 8: Quan hệ chia hết và tính chất",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Ước và bội, tính chất chia hết của một tổng.",
            "questions": []
          },
          {
            "id": "toan-6-b9",
            "number": 9,
            "title": "Bài 9: Dấu hiệu chia hết",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Dấu hiệu chia hết cho 2, 5, 9 và 3.",
            "questions": []
          },
          {
            "id": "toan-6-b10",
            "number": 10,
            "title": "Bài 10: Số nguyên tố",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Số nguyên tố, hợp số và phân tích thừa số nguyên tố.",
            "questions": []
          },
          {
            "id": "toan-6-b11",
            "number": 11,
            "title": "Bài 11: Ước chung. Ước chung lớn nhất",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Tìm ƯCLN và rút gọn phân số.",
            "questions": []
          },
          {
            "id": "toan-6-b12",
            "number": 12,
            "title": "Bài 12: Bội chung. Bội chung nhỏ nhất",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Tìm BCNN và quy đồng mẫu số.",
            "questions": []
          },
          {
            "id": "toan-6-b13",
            "number": 13,
            "title": "Bài 13: Tập hợp các số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Số nguyên âm, tập hợp Z, số đối.",
            "questions": []
          },
          {
            "id": "toan-6-b14",
            "number": 14,
            "title": "Bài 14: Phép cộng và phép trừ số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Cộng, trừ hai số nguyên cùng dấu và khác dấu.",
            "questions": []
          },
          {
            "id": "toan-6-b15",
            "number": 15,
            "title": "Bài 15: Quy tắc dấu ngoặc",
            "chapter": "Chương III: Số nguyên",
            "summary": "Bỏ dấu ngoặc khi đằng trước có dấu + hoặc -.",
            "questions": []
          },
          {
            "id": "toan-6-b16",
            "number": 16,
            "title": "Bài 16: Phép nhân số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Nhân hai số nguyên và tính chất.",
            "questions": []
          },
          {
            "id": "toan-6-b17",
            "number": 17,
            "title": "Bài 17: Phép chia hết. Ước và bội của một số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Phép chia hết, ước và bội trong Z.",
            "questions": []
          },
          {
            "id": "toan-6-b18",
            "number": 18,
            "title": "Bài 18: Hình tam giác đều. Hình vuông. Hình lục giác đều",
            "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
            "summary": "Đặc điểm cạnh, góc và đường chéo.",
            "questions": []
          },
          {
            "id": "toan-6-b19",
            "number": 19,
            "title": "Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân",
            "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
            "summary": "Tính chất các tứ giác đặc biệt.",
            "questions": []
          },
          {
            "id": "toan-6-b20",
            "number": 20,
            "title": "Bài 20: Chu vi và diện tích của một số tứ giác đã học",
            "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
            "summary": "Công thức chu vi, diện tích hình bình hành, hình thoi, hình thang.",
            "questions": []
          },
          {
            "id": "toan-6-b21",
            "number": 21,
            "title": "Bài 21: Hình có trục đối xứng",
            "chapter": "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
            "summary": "Nhận biết trục đối xứng của hình phẳng.",
            "questions": []
          },
          {
            "id": "toan-6-b22",
            "number": 22,
            "title": "Bài 22: Hình có tâm đối xứng",
            "chapter": "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
            "summary": "Nhận biết tâm đối xứng của hình phẳng.",
            "questions": []
          },
          {
            "id": "toan-6-b23",
            "number": 23,
            "title": "Bài 23: Mở rộng phân số. Phân số bằng nhau",
            "chapter": "Chương VI: Phân số",
            "summary": "Phân số có tử và mẫu là số nguyên.",
            "questions": []
          },
          {
            "id": "toan-6-b24",
            "number": 24,
            "title": "Bài 24: So sánh phân số. Hỗn số dương",
            "chapter": "Chương VI: Phân số",
            "summary": "So sánh phân số và đổi hỗn số dương.",
            "questions": []
          },
          {
            "id": "toan-6-b25",
            "number": 25,
            "title": "Bài 25: Phép cộng và phép trừ phân số",
            "chapter": "Chương VI: Phân số",
            "summary": "Cộng, trừ hai phân số.",
            "questions": []
          },
          {
            "id": "toan-6-b26",
            "number": 26,
            "title": "Bài 26: Phép nhân và phép chia phân số",
            "chapter": "Chương VI: Phân số",
            "summary": "Nhân, chia phân số và số nghịch đảo.",
            "questions": []
          },
          {
            "id": "toan-6-b27",
            "number": 27,
            "title": "Bài 27: Hai bài toán về phân số",
            "chapter": "Chương VI: Phân số",
            "summary": "Tìm giá trị phân số của một số và tìm số biết giá trị phân số.",
            "questions": []
          },
          {
            "id": "toan-6-b28",
            "number": 28,
            "title": "Bài 28: Số thập phân",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Số thập phân âm, số đối, so sánh số thập phân.",
            "questions": []
          },
          {
            "id": "toan-6-b29",
            "number": 29,
            "title": "Bài 29: Tính toán với số thập phân",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Cộng, trừ, nhân, chia số thập phân.",
            "questions": []
          },
          {
            "id": "toan-6-b30",
            "number": 30,
            "title": "Bài 30: Làm tròn và ước lượng",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Làm tròn số thập phân.",
            "questions": []
          },
          {
            "id": "toan-6-b31",
            "number": 31,
            "title": "Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Tỉ số phần trăm, giảm giá, lãi suất.",
            "questions": []
          },
          {
            "id": "toan-6-b32",
            "number": 32,
            "title": "Bài 32: Điểm và đường thẳng",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Điểm thuộc đường thẳng, ba điểm thẳng hàng.",
            "questions": []
          },
          {
            "id": "toan-6-b33",
            "number": 33,
            "title": "Bài 33: Điểm nằm giữa hai điểm. Tia",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Khái niệm tia và hai tia đối nhau.",
            "questions": []
          },
          {
            "id": "toan-6-b34",
            "number": 34,
            "title": "Bài 34: Đoạn thẳng. Độ dài đoạn thẳng",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Đo và cộng độ dài đoạn thẳng.",
            "questions": []
          },
          {
            "id": "toan-6-b35",
            "number": 35,
            "title": "Bài 35: Trung điểm của đoạn thẳng",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Định nghĩa và tính chất trung điểm.",
            "questions": []
          },
          {
            "id": "toan-6-b36",
            "number": 36,
            "title": "Bài 36: Góc",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Đỉnh, cạnh, điểm trong góc.",
            "questions": []
          },
          {
            "id": "toan-6-b37",
            "number": 37,
            "title": "Bài 37: Số đo góc",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Góc nhọn, góc vuông, góc tù, góc bẹt.",
            "questions": []
          },
          {
            "id": "toan-6-b38",
            "number": 38,
            "title": "Bài 38: Dữ liệu và thu thập dữ liệu",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Dữ liệu số và dữ liệu không phải là số.",
            "questions": []
          },
          {
            "id": "toan-6-b39",
            "number": 39,
            "title": "Bài 39: Bảng thống kê và biểu đồ tranh",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Đọc bảng thống kê và biểu đồ tranh.",
            "questions": []
          },
          {
            "id": "toan-6-b40",
            "number": 40,
            "title": "Bài 40: Biểu đồ cột",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Đọc và vẽ biểu đồ cột.",
            "questions": []
          },
          {
            "id": "toan-6-b41",
            "number": 41,
            "title": "Bài 41: Biểu đồ cột kép",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "So sánh hai bộ dữ liệu trên biểu đồ cột kép.",
            "questions": []
          },
          {
            "id": "toan-6-b42",
            "number": 42,
            "title": "Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Sự kiện chắc chắn, không thể, có thể.",
            "questions": []
          },
          {
            "id": "toan-6-b43",
            "number": 43,
            "title": "Bài 43: Xác suất thực nghiệm",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Tính xác suất thực nghiệm qua n lần thử.",
            "questions": []
          }
        ]
      },
      {
        "id": "khtn-6",
        "name": "Khoa học tự nhiên",
        "icon": "🔬",
        "lessons": [
          {
            "id": "khtn-6-b1",
            "number": 1,
            "title": "Bài 1: Giới thiệu về Khoa học tự nhiên",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Đối tượng nghiên cứu và vai trò của KHTN.",
            "questions": []
          },
          {
            "id": "khtn-6-b2",
            "number": 2,
            "title": "Bài 2: An toàn trong phòng thực hành",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Nội quy phòng thực hành và kí hiệu cảnh báo.",
            "questions": []
          },
          {
            "id": "khtn-6-b3",
            "number": 3,
            "title": "Bài 3: Sử dụng kính lúp",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Cấu tạo và cách dùng kính lúp.",
            "questions": []
          },
          {
            "id": "khtn-6-b4",
            "number": 4,
            "title": "Bài 4: Sử dụng kính hiển vi quang học",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Quan sát vật nhỏ bằng kính hiển vi.",
            "questions": []
          },
          {
            "id": "khtn-6-b5",
            "number": 5,
            "title": "Bài 5: Đo chiều dài",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Đơn vị mét, GHĐ và ĐCNN của thước.",
            "questions": []
          },
          {
            "id": "khtn-6-b6",
            "number": 6,
            "title": "Bài 6: Đo khối lượng",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Đơn vị kg và cách dùng cân.",
            "questions": []
          },
          {
            "id": "khtn-6-b7",
            "number": 7,
            "title": "Bài 7: Đo thời gian",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Đơn vị giây và đồng hồ bấm giây.",
            "questions": []
          },
          {
            "id": "khtn-6-b8",
            "number": 8,
            "title": "Bài 8: Đo nhiệt độ",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Thang nhiệt độ Celsius và nhiệt kế.",
            "questions": []
          },
          {
            "id": "khtn-6-b9",
            "number": 9,
            "title": "Bài 9: Sự đa dạng của chất",
            "chapter": "Chương II: Chất quanh ta",
            "summary": "Vật thể tự nhiên/nhân tạo, vật sống/không sống.",
            "questions": []
          },
          {
            "id": "khtn-6-b10",
            "number": 10,
            "title": "Bài 10: Các thể của chất và sự chuyển thể",
            "chapter": "Chương II: Chất quanh ta",
            "summary": "Rắn, lỏng, khí; nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi.",
            "questions": []
          },
          {
            "id": "khtn-6-b11",
            "number": 11,
            "title": "Bài 11: Oxygen. Không khí",
            "chapter": "Chương II: Chất quanh ta",
            "summary": "Tính chất Oxygen, thành phần không khí (78% N2, 21% O2, 1% khí khác).",
            "questions": []
          },
          {
            "id": "khtn-6-b12",
            "number": 12,
            "title": "Bài 12: Một số vật liệu",
            "chapter": "Chương III: Vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm",
            "summary": "Kim loại, nhựa, gỗ, thủy tinh, gốm, cao su.",
            "questions": []
          },
          {
            "id": "khtn-6-b13",
            "number": 13,
            "title": "Bài 13: Một số nguyên liệu",
            "chapter": "Chương III: Vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm",
            "summary": "Quặng, đá vôi, cát và sử dụng hợp lí.",
            "questions": []
          },
          {
            "id": "khtn-6-b14",
            "number": 14,
            "title": "Bài 14: Một số nhiên liệu",
            "chapter": "Chương III: Vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm",
            "summary": "Nhiên liệu rắn, lỏng, khí và an toàn cháy nổ.",
            "questions": []
          },
          {
            "id": "khtn-6-b15",
            "number": 15,
            "title": "Bài 15: Một số lương thực - thực phẩm",
            "chapter": "Chương III: Vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm",
            "summary": "Tinh bột, protein, chất béo, vitamin.",
            "questions": []
          },
          {
            "id": "khtn-6-b16",
            "number": 16,
            "title": "Bài 16: Hỗn hợp các chất",
            "chapter": "Chương IV: Hỗn hợp. Tách chất ra khỏi hỗn hợp",
            "summary": "Chất tinh khiết, dung dịch, huyền phù, nhũ tương.",
            "questions": []
          },
          {
            "id": "khtn-6-b17",
            "number": 17,
            "title": "Bài 17: Tách chất khỏi hỗn hợp",
            "chapter": "Chương IV: Hỗn hợp. Tách chất ra khỏi hỗn hợp",
            "summary": "Phương pháp lọc, cô cạn, chiết.",
            "questions": []
          },
          {
            "id": "khtn-6-b18",
            "number": 18,
            "title": "Bài 18: Tế bào - Đơn vị cơ bản của sự sống",
            "chapter": "Chương V: Tế bào",
            "summary": "Màng tế bào, chất tế bào, nhân/vùng nhân.",
            "questions": []
          },
          {
            "id": "khtn-6-b19",
            "number": 19,
            "title": "Bài 19: Cấu tạo và chức năng các thành phần của tế bào",
            "chapter": "Chương V: Tế bào",
            "summary": "Tế bào nhân sơ và nhân thực; tế bào thực vật và động vật.",
            "questions": []
          },
          {
            "id": "khtn-6-b20",
            "number": 20,
            "title": "Bài 20: Sự lớn lên và sinh sản của tế bào",
            "chapter": "Chương V: Tế bào",
            "summary": "Phân chia tế bào giúp cơ thể lớn lên.",
            "questions": []
          },
          {
            "id": "khtn-6-b21",
            "number": 21,
            "title": "Bài 21: Thực hành quan sát và phân biệt một số loại tế bào",
            "chapter": "Chương V: Tế bào",
            "summary": "Quan sát tế bào biểu bì hành tây, tế bào niêm mạc miệng.",
            "questions": []
          },
          {
            "id": "khtn-6-b22",
            "number": 22,
            "title": "Bài 22: Cơ thể sinh vật",
            "chapter": "Chương VI: Từ tế bào đến cơ thể",
            "summary": "Cơ thể đơn bào và cơ thể đa bào.",
            "questions": []
          },
          {
            "id": "khtn-6-b23",
            "number": 23,
            "title": "Bài 23: Tổ chức cơ thể đa bào",
            "chapter": "Chương VI: Từ tế bào đến cơ thể",
            "summary": "Tế bào -> Mô -> Cơ quan -> Hệ cơ quan -> Cơ thể.",
            "questions": []
          },
          {
            "id": "khtn-6-b24",
            "number": 24,
            "title": "Bài 24: Thực hành quan sát và mô tả cơ thể đơn bào, cơ thể đa bào",
            "chapter": "Chương VI: Từ tế bào đến cơ thể",
            "summary": "Quan sát trùng roi, cây xanh.",
            "questions": []
          },
          {
            "id": "khtn-6-b25",
            "number": 25,
            "title": "Bài 25: Hệ thống phân loại sinh vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "5 giới sinh vật và khóa lưỡng phân.",
            "questions": []
          },
          {
            "id": "khtn-6-b26",
            "number": 26,
            "title": "Bài 26: Khóa lưỡng phân",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Xây dựng khóa lưỡng phân phân loại sinh vật.",
            "questions": []
          },
          {
            "id": "khtn-6-b27",
            "number": 27,
            "title": "Bài 27: Vi khuẩn",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Cấu tạo vi khuẩn, vai trò và phòng bệnh.",
            "questions": []
          },
          {
            "id": "khtn-6-b28",
            "number": 28,
            "title": "Bài 28: Thực hành làm sữa chua và quan sát vi khuẩn",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Ứng dụng vi khuẩn lactic.",
            "questions": []
          },
          {
            "id": "khtn-6-b29",
            "number": 29,
            "title": "Bài 29: Virus",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Cấu tạo virus và phòng bệnh do virus.",
            "questions": []
          },
          {
            "id": "khtn-6-b30",
            "number": 30,
            "title": "Bài 30: Nguyên sinh vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Trùng biến hình, trùng roi, tảo, bệnh sốt rét.",
            "questions": []
          },
          {
            "id": "khtn-6-b31",
            "number": 31,
            "title": "Bài 31: Thực hành quan sát nguyên sinh vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Quan sát trùng giày, tảo dưới kính hiển vi.",
            "questions": []
          },
          {
            "id": "khtn-6-b32",
            "number": 32,
            "title": "Bài 32: Nấm",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Nấm men, nấm mốc, nấm đảm và phòng ngộ độc.",
            "questions": []
          },
          {
            "id": "khtn-6-b33",
            "number": 33,
            "title": "Bài 33: Thực hành quan sát các loại nấm",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Quan sát mốc trắng, nấm rơm.",
            "questions": []
          },
          {
            "id": "khtn-6-b34",
            "number": 34,
            "title": "Bài 34: Thực vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Rêu, Dương xỉ, Hạt trần, Hạt kín.",
            "questions": []
          },
          {
            "id": "khtn-6-b35",
            "number": 35,
            "title": "Bài 35: Thực hành quan sát và phân biệt một số nhóm thực vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Phân biệt các ngành thực vật.",
            "questions": []
          },
          {
            "id": "khtn-6-b36",
            "number": 36,
            "title": "Bài 36: Động vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Động vật không xương sống và có xương sống.",
            "questions": []
          },
          {
            "id": "khtn-6-b37",
            "number": 37,
            "title": "Bài 37: Thực hành quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Quan sát động vật thực tế.",
            "questions": []
          },
          {
            "id": "khtn-6-b38",
            "number": 38,
            "title": "Bài 38: Đa dạng sinh học",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Vai trò và bảo vệ đa dạng sinh học.",
            "questions": []
          },
          {
            "id": "khtn-6-b39",
            "number": 39,
            "title": "Bài 39: Tìm hiểu sinh vật ngoài thiên nhiên",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Thực địa điều tra sinh vật.",
            "questions": []
          },
          {
            "id": "khtn-6-b40",
            "number": 40,
            "title": "Bài 40: Lực là gì?",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Tác dụng đẩy, kéo; biến đổi chuyển động, biến dạng.",
            "questions": []
          },
          {
            "id": "khtn-6-b41",
            "number": 41,
            "title": "Bài 41: Biểu diễn lực",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Điểm đặt, phương, chiều, độ lớn lực.",
            "questions": []
          },
          {
            "id": "khtn-6-b42",
            "number": 42,
            "title": "Bài 42: Biến dạng của lò xo",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Độ dãn tỉ lệ với khối lượng vật treo.",
            "questions": []
          },
          {
            "id": "khtn-6-b43",
            "number": 43,
            "title": "Bài 43: Trọng lượng, lực hấp dẫn",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "P = 10·m (N).",
            "questions": []
          },
          {
            "id": "khtn-6-b44",
            "number": 44,
            "title": "Bài 44: Lực ma sát",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Ma sát trượt, ma sát nghỉ.",
            "questions": []
          },
          {
            "id": "khtn-6-b45",
            "number": 45,
            "title": "Bài 45: Lực cản của nước",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Hình dạng khí động học giảm lực cản.",
            "questions": []
          },
          {
            "id": "khtn-6-b46",
            "number": 46,
            "title": "Bài 46: Năng lượng và sự truyền năng lượng",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Các dạng năng lượng và sự truyền.",
            "questions": []
          },
          {
            "id": "khtn-6-b47",
            "number": 47,
            "title": "Bài 47: Một số dạng năng lượng",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Cơ năng, nhiệt năng, điện năng, quang năng, hóa năng.",
            "questions": []
          },
          {
            "id": "khtn-6-b48",
            "number": 48,
            "title": "Bài 48: Sự chuyển hóa năng lượng",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Định luật bảo toàn năng lượng.",
            "questions": []
          },
          {
            "id": "khtn-6-b49",
            "number": 49,
            "title": "Bài 49: Năng lượng hao phí",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Năng lượng có ích và năng lượng hao phí.",
            "questions": []
          },
          {
            "id": "khtn-6-b50",
            "number": 50,
            "title": "Bài 50: Năng lượng tái tạo",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Mặt Trời, gió, thủy triều, sinh khối.",
            "questions": []
          },
          {
            "id": "khtn-6-b51",
            "number": 51,
            "title": "Bài 51: Tiết kiệm năng lượng",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Biện pháp sử dụng năng lượng hiệu quả.",
            "questions": []
          },
          {
            "id": "khtn-6-b52",
            "number": 52,
            "title": "Bài 52: Chuyển động nhìn thấy của Mặt Trời. Thiên thể",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "Trái Đất tự quay quanh trục; sao, hành tinh.",
            "questions": []
          },
          {
            "id": "khtn-6-b53",
            "number": 53,
            "title": "Bài 53: Mặt Trăng",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "Các pha của Mặt Trăng.",
            "questions": []
          },
          {
            "id": "khtn-6-b54",
            "number": 54,
            "title": "Bài 54: Hệ Mặt Trời",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "8 hành tinh quay quanh Mặt Trời.",
            "questions": []
          },
          {
            "id": "khtn-6-b55",
            "number": 55,
            "title": "Bài 55: Ngân Hà",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "Thiên hà Ngân Hà chứa Hệ Mặt Trời.",
            "questions": []
          }
        ]
      },
      {
        "id": "nguvan-6",
        "name": "Ngữ văn",
        "icon": "📖",
        "lessons": [
          {
            "id": "nguvan-6-b1",
            "number": 1,
            "title": "Bài học đường đời đầu tiên (Tô Hoài)",
            "chapter": "Bài 1: Tôi và các bạn",
            "summary": "Truyện đồng thoại, bài học về sự kiêu căng.",
            "questions": []
          },
          {
            "id": "nguvan-6-b2",
            "number": 2,
            "title": "Nếu cậu muốn có một người bạn... (trích Hoàng tử bé)",
            "chapter": "Bài 1: Tôi và các bạn",
            "summary": "Ý nghĩa của tình bạn và sự cảm hóa.",
            "questions": []
          },
          {
            "id": "nguvan-6-b3",
            "number": 3,
            "title": "Chuyện cổ tích về loài người (Xuân Quỳnh)",
            "chapter": "Bài 2: Gõ cửa trái tim",
            "summary": "Thơ năm chữ về tình yêu thương dành cho trẻ em.",
            "questions": []
          },
          {
            "id": "nguvan-6-b4",
            "number": 4,
            "title": "Mây và sóng (Ta-go)",
            "chapter": "Bài 2: Gõ cửa trái tim",
            "summary": "Tình mẫu tử thiêng liêng.",
            "questions": []
          },
          {
            "id": "nguvan-6-b5",
            "number": 5,
            "title": "Cô bé bán diêm (An-đéc-xen)",
            "chapter": "Bài 3: Yêu thương và chia sẻ",
            "summary": "Thông điệp về lòng nhân ái.",
            "questions": []
          },
          {
            "id": "nguvan-6-b6",
            "number": 6,
            "title": "Gió lạnh đầu mùa (Thạch Lam)",
            "chapter": "Bài 3: Yêu thương và chia sẻ",
            "summary": "Sự sẻ chia ấm áp giữa chị em Sơn, Lan với bé Hiên.",
            "questions": []
          },
          {
            "id": "nguvan-6-b7",
            "number": 7,
            "title": "Chùm ca dao về quê hương đất nước",
            "chapter": "Bài 4: Quê hương yêu dấu",
            "summary": "Thể thơ lục bát và tình yêu quê hương.",
            "questions": []
          },
          {
            "id": "nguvan-6-b8",
            "number": 8,
            "title": "Cô Tô (Nguyễn Tuân)",
            "chapter": "Bài 5: Những nẻo đường xứ sở",
            "summary": "Vẻ đẹp thiên nhiên và lao động trên đảo Cô Tô.",
            "questions": []
          },
          {
            "id": "nguvan-6-b9",
            "number": 9,
            "title": "Thánh Gióng & Sơn Tinh, Thủy Tinh",
            "chapter": "Bài 6: Chuyện kể về những người anh hùng",
            "summary": "Truyền thuyết về tinh thần chống giặc và chế ngự thiên tai.",
            "questions": []
          },
          {
            "id": "nguvan-6-b10",
            "number": 10,
            "title": "Thạch Sanh & Cây khế",
            "chapter": "Bài 7: Thế giới cổ tích",
            "summary": "Ở hiền gặp lành trong truyện cổ tích.",
            "questions": []
          },
          {
            "id": "nguvan-6-b11",
            "number": 11,
            "title": "Xem người ta kìa! & Hai loại khác biệt",
            "chapter": "Bài 8: Khác biệt và gần gũi",
            "summary": "Nghị luận về tôn trọng sự khác biệt.",
            "questions": []
          },
          {
            "id": "nguvan-6-b12",
            "number": 12,
            "title": "Trái Đất - cái nôi của sự sống",
            "chapter": "Bài 9: Trái Đất - ngôi nhà chung",
            "summary": "Văn bản thông tin về bảo vệ hành tinh xanh.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-diali-6",
        "name": "Lịch sử và Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "lichsu-diali-6-b1",
            "number": 1,
            "title": "Bài 1: Lịch sử và cuộc sống",
            "chapter": "Lịch sử - Chương 1: Vì sao phải học lịch sử?",
            "summary": "Khái niệm lịch sử và ý nghĩa của việc học tập lịch sử.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b2",
            "number": 2,
            "title": "Bài 2: Dựa vào đâu để biết và phục dựng lại lịch sử?",
            "chapter": "Lịch sử - Chương 1: Vì sao phải học lịch sử?",
            "summary": "Tư liệu truyền miệng, tư liệu hiện vật và tư liệu chữ viết.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b3",
            "number": 3,
            "title": "Bài 3: Thời gian trong lịch sử",
            "chapter": "Lịch sử - Chương 1: Vì sao phải học lịch sử?",
            "summary": "Âm lịch, dương lịch, Công lịch; cách tính thế kỉ, thiên niên kỉ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b4",
            "number": 4,
            "title": "Bài 4: Nguồn gốc loài người",
            "chapter": "Lịch sử - Chương 2: Xã hội nguyên thuỷ",
            "summary": "Quá trình tiến hóa từ vượn người thành người tinh khôn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b5",
            "number": 5,
            "title": "Bài 5: Xã hội nguyên thuỷ",
            "chapter": "Lịch sử - Chương 2: Xã hội nguyên thuỷ",
            "summary": "Đời sống vật chất và tinh thần của người nguyên thủy (bầy người, công xã thị tộc).",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b6",
            "number": 6,
            "title": "Bài 6: Sự chuyển biến và phân hoá của xã hội nguyên thuỷ",
            "chapter": "Lịch sử - Chương 2: Xã hội nguyên thuỷ",
            "summary": "Sự xuất hiện kim loại dẫn đến tư hữu và phân hóa giai cấp.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b7",
            "number": 7,
            "title": "Bài 7: Ai Cập và Lưỡng Hà cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Văn minh sông Nin, sông Ơ-phơ-rát và Ti-gơ-rơ; kim tự tháp, chữ tượng hình.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b8",
            "number": 8,
            "title": "Bài 8: Ấn Độ cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Văn minh sông Ấn - sông Hằng, chế độ đẳng cấp và Phật giáo, Ấn Độ giáo.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b9",
            "number": 9,
            "title": "Bài 9: Trung Quốc từ thời cổ đại đến thế kỉ VII",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Tần Thủy Hoàng thống nhất Trung Quốc, con đường tơ lụa và phát minh văn hóa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b10",
            "number": 10,
            "title": "Bài 10: Hy Lạp và La Mã cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Thể chế dân chủ cổ đại, toán học, kiến trúc và chữ viết La-tinh.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b11",
            "number": 11,
            "title": "Bài 11: Các quốc gia sơ kì ở Đông Nam Á",
            "chapter": "Lịch sử - Chương 4: Đông Nam Á đến thế kỉ X",
            "summary": "Vị trí cầu nối và các vương quốc cổ ở Đông Nam Á.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b12",
            "number": 12,
            "title": "Bài 12: Các vương quốc phong kiến Đông Nam Á (thế kỉ VII–X)",
            "chapter": "Lịch sử - Chương 4: Đông Nam Á đến thế kỉ X",
            "summary": "Sự phát triển của Ăng-co, Pa-gan, Sri Vi-giay-a.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b13",
            "number": 13,
            "title": "Bài 13: Giao lưu văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X",
            "chapter": "Lịch sử - Chương 4: Đông Nam Á đến thế kỉ X",
            "summary": "Ảnh hưởng của văn hóa Ấn Độ, Trung Quốc và bản sắc bản địa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b14",
            "number": 14,
            "title": "Bài 14: Nhà nước Văn Lang – Âu Lạc",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ TK VII TCN đến đầu TK X",
            "summary": "Kinh đô Phong Châu, Cổ Loa và văn hóa Đông Sơn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b15",
            "number": 15,
            "title": "Bài 15: Chính sách cai trị của phong kiến phương Bắc và chuyển biến Âu Lạc",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ TK VII TCN đến đầu TK X",
            "summary": "Chính sách đồng hóa, bóc lột và sự chuyển biến kinh tế-xã hội.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b16",
            "number": 16,
            "title": "Bài 16: Các cuộc khởi nghĩa tiêu biểu giành độc lập trước thế kỉ X",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ TK VII TCN đến đầu TK X",
            "summary": "Khởi nghĩa Hai Bà Trưng, Bà Triệu, Lý Bí, Mai Thúc Loan, Phùng Hưng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b17",
            "number": 17,
            "title": "Bài 17: Cuộc đấu tranh bảo tồn và phát triển văn hoá dân tộc",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ TK VII TCN đến đầu TK X",
            "summary": "Giữ gìn tiếng Việt, phong tục tập quán trong thời Bắc thuộc.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b18",
            "number": 18,
            "title": "Bài 18: Bước ngoặt lịch sử đầu thế kỉ X",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ TK VII TCN đến đầu TK X",
            "summary": "Khúc Thừa Dụ dựng quyền tự chủ và chiến thắng Bạch Đằng 938 của Ngô Quyền.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b19",
            "number": 19,
            "title": "Bài 19: Vương quốc Chăm-pa từ thế kỉ II đến thế kỉ X",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ TK VII TCN đến đầu TK X",
            "summary": "Lâm Ấp, Chăm-pa, thánh địa Mỹ Sơn và văn hóa Chăm.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b20",
            "number": 20,
            "title": "Bài 20: Vương quốc Phù Nam",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ TK VII TCN đến đầu TK X",
            "summary": "Vương quốc Phù Nam và văn hóa Óc Eo ở Nam Bộ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b21",
            "number": 21,
            "title": "Bài mở đầu (Địa lí 6)",
            "chapter": "Địa lí - Mở đầu",
            "summary": "Giới thiệu môn Địa lí và cách học bản đồ, thế giới tự nhiên.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b22",
            "number": 22,
            "title": "Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí",
            "chapter": "Địa lí - Chương 1: Bản đồ",
            "summary": "Kinh tuyến, vĩ tuyến, kinh độ, vĩ độ và tọa độ một điểm.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b23",
            "number": 23,
            "title": "Bài 2: Bản đồ. Một số lưới kinh, vĩ tuyến. Phương hướng trên bản đồ",
            "chapter": "Địa lí - Chương 1: Bản đồ",
            "summary": "8 hướng chính và cách xác định phương hướng trên bản đồ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b24",
            "number": 24,
            "title": "Bài 3: Tỉ lệ bản đồ. Tính khoảng cách thực tế dựa vào tỉ lệ bản đồ",
            "chapter": "Địa lí - Chương 1: Bản đồ",
            "summary": "Tỉ lệ số, tỉ lệ thước và công thức tính khoảng cách thực địa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b25",
            "number": 25,
            "title": "Bài 4: Kí hiệu và bảng chú giải bản đồ. Tìm đường đi trên bản đồ",
            "chapter": "Địa lí - Chương 1: Bản đồ",
            "summary": "Kí hiệu điểm, đường, diện tích và tìm đường đi.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b26",
            "number": 26,
            "title": "Bài 5: Lược đồ trí nhớ",
            "chapter": "Địa lí - Chương 1: Bản đồ",
            "summary": "Vẽ lược đồ trí nhớ khu vực quen thuộc.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b27",
            "number": 27,
            "title": "Bài 6: Trái Đất trong hệ Mặt Trời",
            "chapter": "Địa lí - Chương 2: Trái Đất - Hành tinh của hệ Mặt Trời",
            "summary": "Vị trí thứ 3 tính từ Mặt Trời; hình dạng và kích thước Trái Đất.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b28",
            "number": 28,
            "title": "Bài 7: Chuyển động tự quay quanh trục của Trái Đất và hệ quả",
            "chapter": "Địa lí - Chương 2: Trái Đất - Hành tinh của hệ Mặt Trời",
            "summary": "Luân phiên ngày đêm, giờ trên Trái Đất (24 múi giờ), lực Cô-ri-ô-lít.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b29",
            "number": 29,
            "title": "Bài 8: Chuyển động của Trái Đất quanh Mặt Trời và hệ quả",
            "chapter": "Địa lí - Chương 2: Trái Đất - Hành tinh của hệ Mặt Trời",
            "summary": "Hiện tượng các mùa và ngày đêm dài ngắn theo mùa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b30",
            "number": 30,
            "title": "Bài 9: Cấu tạo của Trái Đất. Các mảng kiến tạo",
            "chapter": "Địa lí - Chương 3: Cấu tạo của Trái Đất",
            "summary": "Vỏ Trái Đất, man-ti, nhân; sự dịch chuyển các mảng kiến tạo.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b31",
            "number": 31,
            "title": "Bài 10: Quá trình nội sinh và quá trình ngoại sinh. Hiện tượng tạo núi",
            "chapter": "Địa lí - Chương 3: Cấu tạo của Trái Đất",
            "summary": "Nội sinh làm gồ ghề, ngoại sinh bào mòn bồi tụ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b32",
            "number": 32,
            "title": "Bài 11: Núi lửa và động đất",
            "chapter": "Địa lí - Chương 3: Cấu tạo của Trái Đất",
            "summary": "Nguyên nhân và cách phòng tránh động đất, núi lửa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b33",
            "number": 33,
            "title": "Bài 12: Các dạng địa hình chính trên Trái Đất. Khoáng sản",
            "chapter": "Địa lí - Chương 3: Cấu tạo của Trái Đất",
            "summary": "Núi, đồi, cao nguyên, đồng bằng và khoáng sản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b34",
            "number": 34,
            "title": "Bài 13: Thực hành: Đọc lược đồ địa hình tỉ lệ lớn và lát cắt địa hình đơn giản",
            "chapter": "Địa lí - Chương 3: Cấu tạo của Trái Đất",
            "summary": "Đọc đường đồng mức và lát cắt địa hình.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b35",
            "number": 35,
            "title": "Bài 14: Lớp vỏ khí của Trái Đất. Khí áp và gió",
            "chapter": "Địa lí - Chương 4: Khí hậu và biến đổi khí hậu",
            "summary": "Thành phần không khí, các tầng khí quyển, đai khí áp và gió.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b36",
            "number": 36,
            "title": "Bài 15: Nhiệt độ không khí. Mây và mưa",
            "chapter": "Địa lí - Chương 4: Khí hậu và biến đổi khí hậu",
            "summary": "Sự thay đổi nhiệt độ, hơi nước, mây và phân bố lượng mưa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b37",
            "number": 37,
            "title": "Bài 16: Thời tiết và khí hậu. Biến đổi khí hậu",
            "chapter": "Địa lí - Chương 4: Khí hậu và biến đổi khí hậu",
            "summary": "Các đới khí hậu trên Trái Đất và ứng phó biến đổi khí hậu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b38",
            "number": 38,
            "title": "Bài 17: Thực hành: Phân tích biểu đồ nhiệt độ, lượng mưa",
            "chapter": "Địa lí - Chương 4: Khí hậu và biến đổi khí hậu",
            "summary": "Đọc nhiệt độ cao nhất/thấp nhất và mùa mưa trên biểu đồ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b39",
            "number": 39,
            "title": "Bài 18: Thuỷ quyển và vòng tuần hoàn lớn của nước",
            "chapter": "Địa lí - Chương 5: Nước trên Trái Đất",
            "summary": "Nước ngọt, nước mặn và vòng tuần hoàn nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b40",
            "number": 40,
            "title": "Bài 19: Sông và hồ. Nước ngầm và băng hà",
            "chapter": "Địa lí - Chương 5: Nước trên Trái Đất",
            "summary": "Lưu vực sông, thủy chế, vai trò nước ngầm và băng hà.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b41",
            "number": 41,
            "title": "Bài 20: Biển và đại dương",
            "chapter": "Địa lí - Chương 5: Nước trên Trái Đất",
            "summary": "Độ muối, sóng, thủy triều và dòng biển.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b42",
            "number": 42,
            "title": "Bài 21: Lớp đất trên Trái Đất. Các nhân tố hình thành đất",
            "chapter": "Địa lí - Chương 6: Đất và sinh vật trên Trái Đất",
            "summary": "Độ phì của đất và 5 nhân tố hình thành đất.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b43",
            "number": 43,
            "title": "Bài 22: Sinh vật và sự phân bố các đới thiên nhiên. Rừng nhiệt đới",
            "chapter": "Địa lí - Chương 6: Đất và sinh vật trên Trái Đất",
            "summary": "Các đới thiên nhiên và đặc trưng rừng nhiệt đới.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b44",
            "number": 44,
            "title": "Bài 23: Thực hành: Tìm hiểu môi trường tự nhiên qua tài liệu và tham quan địa phương",
            "chapter": "Địa lí - Chương 6: Đất và sinh vật trên Trái Đất",
            "summary": "Khảo sát tự nhiên địa phương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b45",
            "number": 45,
            "title": "Bài 24: Dân số và sự phân bố dân cư trên thế giới",
            "chapter": "Địa lí - Chương 7: Con người và thiên nhiên",
            "summary": "Gia tăng dân số và phân bố dân cư không đều.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b46",
            "number": 46,
            "title": "Bài 25: Con người và thiên nhiên",
            "chapter": "Địa lí - Chương 7: Con người và thiên nhiên",
            "summary": "Tác động qua lại giữa con người và tự nhiên.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b47",
            "number": 47,
            "title": "Bài 26: Thực hành: Tìm hiểu tác động của con người đến thiên nhiên địa phương",
            "chapter": "Địa lí - Chương 7: Con người và thiên nhiên",
            "summary": "Đề xuất bảo vệ môi trường địa phương.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdcd-6",
        "name": "Giáo dục công dân",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "gdcd-6-b1",
            "number": 1,
            "title": "Bài 1: Tự hào về truyền thống gia đình, dòng họ",
            "chapter": "Giáo dục công dân 6",
            "summary": "Giữ gìn và phát huy truyền thống tốt đẹp của gia đình, dòng họ.",
            "questions": []
          },
          {
            "id": "gdcd-6-b2",
            "number": 2,
            "title": "Bài 2: Yêu thương con người",
            "chapter": "Giáo dục công dân 6",
            "summary": "Quan tâm, giúp đỡ, cảm thông với người xung quanh.",
            "questions": []
          },
          {
            "id": "gdcd-6-b3",
            "number": 3,
            "title": "Bài 3: Siêng năng, kiên trì",
            "chapter": "Giáo dục công dân 6",
            "summary": "Chăm chỉ, bền bỉ vượt khó trong học tập và lao động.",
            "questions": []
          },
          {
            "id": "gdcd-6-b4",
            "number": 4,
            "title": "Bài 4: Tôn trọng sự thật",
            "chapter": "Giáo dục công dân 6",
            "summary": "Sống ngay thẳng, trung thực, dám nhận lỗi.",
            "questions": []
          },
          {
            "id": "gdcd-6-b5",
            "number": 5,
            "title": "Bài 5: Tự lập",
            "chapter": "Giáo dục công dân 6",
            "summary": "Tự làm lấy công việc của mình trong học tập và sinh hoạt.",
            "questions": []
          },
          {
            "id": "gdcd-6-b6",
            "number": 6,
            "title": "Bài 6: Tự nhận thức bản thân",
            "chapter": "Giáo dục công dân 6",
            "summary": "Nhận biết điểm mạnh, điểm yếu để rèn luyện bản thân.",
            "questions": []
          },
          {
            "id": "gdcd-6-b7",
            "number": 7,
            "title": "Bài 7: Ứng phó với tình huống nguy hiểm",
            "chapter": "Giáo dục công dân 6",
            "summary": "Kĩ năng xử lí khi gặp thiên tai, cháy nổ, bắt cóc, xâm hại.",
            "questions": []
          },
          {
            "id": "gdcd-6-b8",
            "number": 8,
            "title": "Bài 8: Tiết kiệm",
            "chapter": "Giáo dục công dân 6",
            "summary": "Sử dụng hợp lí tiền bạc, thời gian, điện nước.",
            "questions": []
          },
          {
            "id": "gdcd-6-b9",
            "number": 9,
            "title": "Bài 9: Công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam",
            "chapter": "Giáo dục công dân 6",
            "summary": "Căn cứ xác định công dân Việt Nam (quốc tịch).",
            "questions": []
          },
          {
            "id": "gdcd-6-b10",
            "number": 10,
            "title": "Bài 10: Quyền và nghĩa vụ cơ bản của công dân",
            "chapter": "Giáo dục công dân 6",
            "summary": "Quyền và nghĩa vụ công dân theo Hiến pháp.",
            "questions": []
          },
          {
            "id": "gdcd-6-b11",
            "number": 11,
            "title": "Bài 11: Quyền cơ bản của trẻ em",
            "chapter": "Giáo dục công dân 6",
            "summary": "4 nhóm quyền: sống còn, bảo vệ, phát triển, tham gia.",
            "questions": []
          },
          {
            "id": "gdcd-6-b12",
            "number": 12,
            "title": "Bài 12: Thực hiện quyền trẻ em",
            "chapter": "Giáo dục công dân 6",
            "summary": "Trách nhiệm gia đình, nhà trường và bản thân trẻ em.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-6",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-6-b1",
            "number": 1,
            "title": "Bài 1: Thông tin và dữ liệu",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Phân biệt thông tin và dữ liệu; vật mang tin.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b2",
            "number": 2,
            "title": "Bài 2: Xử lí thông tin",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Thu nhận, lưu trữ, xử lí và truyền thông tin.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b3",
            "number": 3,
            "title": "Bài 3: Thông tin trong máy tính",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Dãy bit (0, 1); Byte, KB, MB, GB, TB.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b4",
            "number": 4,
            "title": "Bài 4: Mạng máy tính",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Thiết bị mạng, mạng có dây và không dây.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b5",
            "number": 5,
            "title": "Bài 5: Internet",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Đặc điểm và lợi ích của Internet.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b6",
            "number": 6,
            "title": "Bài 6: Mạng thông tin toàn cầu",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "WWW, trình duyệt, siêu văn bản.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b7",
            "number": 7,
            "title": "Bài 7: Tìm kiếm thông tin trên Internet",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Sử dụng máy tìm kiếm và từ khóa.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b8",
            "number": 8,
            "title": "Bài 8: Thư điện tử",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Tạo và sử dụng email an toàn.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b9",
            "number": 9,
            "title": "Bài 9: An toàn thông tin trên Internet",
            "chapter": "Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Phòng tránh lừa đảo, bảo vệ mật khẩu.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b10",
            "number": 10,
            "title": "Bài 10: Sơ đồ tư duy",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tổ chức thông tin bằng sơ đồ tư duy.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b11",
            "number": 11,
            "title": "Bài 11: Định dạng văn bản",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Định dạng kí tự, đoạn văn và trang in.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b12",
            "number": 12,
            "title": "Bài 12: Trình bày thông tin ở dạng bảng",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tạo bảng trong văn bản.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b13",
            "number": 13,
            "title": "Bài 13: Thực hành: Tìm kiếm và thay thế",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Công cụ Find & Replace và kiểm tra lỗi.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b14",
            "number": 14,
            "title": "Bài 14: Thực hành tổng hợp: Hoàn thiện sổ lưu niệm",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tổng hợp kĩ năng soạn thảo văn bản.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b15",
            "number": 15,
            "title": "Bài 15: Thuật toán",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Mô tả thuật toán bằng liệt kê và sơ đồ khối.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b16",
            "number": 16,
            "title": "Bài 16: Các cấu trúc điều khiển",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Tuần tự, rẽ nhánh và lặp.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b17",
            "number": 17,
            "title": "Bài 17: Chương trình máy tính",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Viết chương trình đơn giản từ thuật toán.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-6",
        "name": "Công nghệ",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-6-b1",
            "number": 1,
            "title": "Bài 1: Khái quát về nhà ở",
            "chapter": "Chương I: Nhà ở",
            "summary": "Vai trò và đặc điểm chung của nhà ở.",
            "questions": []
          },
          {
            "id": "congnghe-6-b2",
            "number": 2,
            "title": "Bài 2: Xây dựng nhà ở",
            "chapter": "Chương I: Nhà ở",
            "summary": "Vật liệu xây dựng và quy trình xây nhà.",
            "questions": []
          },
          {
            "id": "congnghe-6-b3",
            "number": 3,
            "title": "Bài 3: Ngôi nhà thông minh",
            "chapter": "Chương I: Nhà ở",
            "summary": "Đặc điểm ngôi nhà thông minh và tiết kiệm năng lượng.",
            "questions": []
          },
          {
            "id": "congnghe-6-b4",
            "number": 4,
            "title": "Bài 4: Thực phẩm và dinh dưỡng",
            "chapter": "Chương II: Bảo quản và chế biến thực phẩm",
            "summary": "Các nhóm chất dinh dưỡng và bữa ăn hợp lí.",
            "questions": []
          },
          {
            "id": "congnghe-6-b5",
            "number": 5,
            "title": "Bài 5: Phương pháp bảo quản và chế biến thực phẩm",
            "chapter": "Chương II: Bảo quản và chế biến thực phẩm",
            "summary": "Bảo quản lạnh, phơi khô, chế biến có/không dùng nhiệt.",
            "questions": []
          },
          {
            "id": "congnghe-6-b6",
            "number": 6,
            "title": "Bài 6: Dự án: Bữa ăn kết nối yêu thương",
            "chapter": "Chương II: Bảo quản và chế biến thực phẩm",
            "summary": "Xây dựng thực đơn và tính chi phí bữa ăn.",
            "questions": []
          },
          {
            "id": "congnghe-6-b7",
            "number": 7,
            "title": "Bài 7: Trang phục trong đời sống",
            "chapter": "Chương III: Trang phục và thời trang",
            "summary": "Vai trò và phân loại trang phục theo chất liệu, thời tiết.",
            "questions": []
          },
          {
            "id": "congnghe-6-b8",
            "number": 8,
            "title": "Bài 8: Sử dụng và bảo quản trang phục",
            "chapter": "Chương III: Trang phục và thời trang",
            "summary": "Lựa chọn trang phục và đọc kí hiệu giặt là.",
            "questions": []
          },
          {
            "id": "congnghe-6-b9",
            "number": 9,
            "title": "Bài 9: Thời trang",
            "chapter": "Chương III: Trang phục và thời trang",
            "summary": "Khái niệm thời trang và phong cách ăn mặc.",
            "questions": []
          },
          {
            "id": "congnghe-6-b10",
            "number": 10,
            "title": "Bài 10: Khái quát về đồ dùng điện trong gia đình",
            "chapter": "Chương IV: Đồ dùng điện trong gia đình",
            "summary": "Thông số kĩ thuật định mức (V, W).",
            "questions": []
          },
          {
            "id": "congnghe-6-b11",
            "number": 11,
            "title": "Bài 11: Đèn điện",
            "chapter": "Chương IV: Đồ dùng điện trong gia đình",
            "summary": "Đèn sợi đốt, đèn huỳnh quang, đèn LED.",
            "questions": []
          },
          {
            "id": "congnghe-6-b12",
            "number": 12,
            "title": "Bài 12: Nồi cơm điện",
            "chapter": "Chương IV: Đồ dùng điện trong gia đình",
            "summary": "Cấu tạo, nguyên lí làm việc và sử dụng nồi cơm điện.",
            "questions": []
          },
          {
            "id": "congnghe-6-b13",
            "number": 13,
            "title": "Bài 13: Bếp hồng ngoại",
            "chapter": "Chương IV: Đồ dùng điện trong gia đình",
            "summary": "Nguyên lí truyền nhiệt bức xạ của bếp hồng ngoại.",
            "questions": []
          },
          {
            "id": "congnghe-6-b14",
            "number": 14,
            "title": "Bài 14: Dự án: An toàn và tiết kiệm điện trong gia đình",
            "chapter": "Chương IV: Đồ dùng điện trong gia đình",
            "summary": "Biện pháp sử dụng điện an toàn, tiết kiệm.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-6",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-6-b1",
            "number": 1,
            "title": "Unit 1: My New School",
            "chapter": "Unit 1: My New School",
            "summary": "Present Simple và trạng từ tần suất.",
            "questions": []
          },
          {
            "id": "tienganh-6-b2",
            "number": 2,
            "title": "Unit 2: My House",
            "chapter": "Unit 2: My House",
            "summary": "Sở hữu cách ('s) và giới từ chỉ vị trí.",
            "questions": []
          },
          {
            "id": "tienganh-6-b3",
            "number": 3,
            "title": "Unit 3: My Friends",
            "chapter": "Unit 3: My Friends",
            "summary": "Present Continuous miêu tả hành động đang diễn ra.",
            "questions": []
          },
          {
            "id": "tienganh-6-b4",
            "number": 4,
            "title": "Unit 4: My Neighbourhood",
            "chapter": "Unit 4: My Neighbourhood",
            "summary": "So sánh hơn của tính từ.",
            "questions": []
          },
          {
            "id": "tienganh-6-b5",
            "number": 5,
            "title": "Unit 5: Natural Wonders of Viet Nam",
            "chapter": "Unit 5: Natural Wonders of Viet Nam",
            "summary": "Danh từ đếm được/không đếm được; must / mustn't.",
            "questions": []
          },
          {
            "id": "tienganh-6-b6",
            "number": 6,
            "title": "Unit 6: Our Tet Holiday",
            "chapter": "Unit 6: Our Tet Holiday",
            "summary": "should / shouldn't và some / any.",
            "questions": []
          },
          {
            "id": "tienganh-6-b7",
            "number": 7,
            "title": "Unit 7: Television",
            "chapter": "Unit 7: Television",
            "summary": "Wh-questions và liên từ (and, but, so).",
            "questions": []
          },
          {
            "id": "tienganh-6-b8",
            "number": 8,
            "title": "Unit 8: Sports and Games",
            "chapter": "Unit 8: Sports and Games",
            "summary": "Thì Quá khứ đơn (Past Simple) và Imperatives.",
            "questions": []
          },
          {
            "id": "tienganh-6-b9",
            "number": 9,
            "title": "Unit 9: Cities of the World",
            "chapter": "Unit 9: Cities of the World",
            "summary": "Tính từ sở hữu và đại từ sở hữu.",
            "questions": []
          },
          {
            "id": "tienganh-6-b10",
            "number": 10,
            "title": "Unit 10: Our Houses in the Future",
            "chapter": "Unit 10: Our Houses in the Future",
            "summary": "Thì Tương lai đơn (will) và might.",
            "questions": []
          },
          {
            "id": "tienganh-6-b11",
            "number": 11,
            "title": "Unit 11: Our Greener World",
            "chapter": "Unit 11: Our Greener World",
            "summary": "Câu điều kiện loại 1 (First Conditional).",
            "questions": []
          },
          {
            "id": "tienganh-6-b12",
            "number": 12,
            "title": "Unit 12: Robots",
            "chapter": "Unit 12: Robots",
            "summary": "So sánh nhất của tính từ ngắn.",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-6",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-6-b1",
            "number": 1,
            "title": "Chủ đề 1: Khởi đầu năm học",
            "chapter": "Chủ đề 1: Khởi đầu năm học",
            "summary": "Hát Mùa khai trường; đọc nhạc bài số 1; tìm hiểu kí hiệu ghi nhạc.",
            "questions": []
          },
          {
            "id": "amnhac-6-b2",
            "number": 2,
            "title": "Chủ đề 2: Vẻ đẹp của âm nhạc",
            "chapter": "Chủ đề 2: Vẻ đẹp của âm nhạc",
            "summary": "Hát Em đi trong tươi xanh; nghe nhạc Beethoven; đọc nhạc nhịp 2/4.",
            "questions": []
          },
          {
            "id": "amnhac-6-b3",
            "number": 3,
            "title": "Chủ đề 3: Nhịp điệu mùa thu",
            "chapter": "Chủ đề 3: Nhịp điệu mùa thu",
            "summary": "Hát Tiếng chuông và ngọn cờ; thực hành nhạc cụ giai điệu.",
            "questions": []
          },
          {
            "id": "amnhac-6-b4",
            "number": 4,
            "title": "Chủ đề 4: Giai điệu quê hương",
            "chapter": "Chủ đề 4: Giai điệu quê hương",
            "summary": "Nghe dân ca Quan họ, Ca trù; hát Đi cắt lúa.",
            "questions": []
          },
          {
            "id": "amnhac-6-b5",
            "number": 5,
            "title": "Chủ đề 5: Bài ca hòa bình",
            "chapter": "Chủ đề 5: Bài ca hòa bình",
            "summary": "Hát Niềm vui của em; đọc nhạc gam Đô trưởng.",
            "questions": []
          },
          {
            "id": "amnhac-6-b6",
            "number": 6,
            "title": "Chủ đề 6: Sắc màu dân gian",
            "chapter": "Chủ đề 6: Sắc màu dân gian",
            "summary": "Tìm hiểu một số nhạc cụ dân tộc Việt Nam và hát dân ca.",
            "questions": []
          },
          {
            "id": "amnhac-6-b7",
            "number": 7,
            "title": "Chủ đề 7: Âm nhạc nước ngoài",
            "chapter": "Chủ đề 7: Âm nhạc nước ngoài",
            "summary": "Nghe và hát bài hát thiếu nhi quốc tế; tìm hiểu nhịp 3/4.",
            "questions": []
          },
          {
            "id": "amnhac-6-b8",
            "number": 8,
            "title": "Chủ đề 8: Giai điệu mùa hè",
            "chapter": "Chủ đề 8: Giai điệu mùa hè",
            "summary": "Hát Ngôi nhà của chúng ta; ôn tập kiểm tra cuối năm.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-6",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-6-b1",
            "number": 1,
            "title": "Chủ đề 1: Những sắc màu của tự nhiên",
            "chapter": "Chủ đề 1: Những sắc màu của tự nhiên",
            "summary": "Hòa sắc từ tự nhiên, pha màu cơ bản và màu thứ cấp.",
            "questions": []
          },
          {
            "id": "mithuat-6-b2",
            "number": 2,
            "title": "Chủ đề 2: Nghệ thuật tiền sử thế giới và Việt Nam",
            "chapter": "Chủ đề 2: Nghệ thuật tiền sử",
            "summary": "Tìm hiểu hình vẽ hang động tiền sử và mô phỏng tạo hình.",
            "questions": []
          },
          {
            "id": "mithuat-6-b3",
            "number": 3,
            "title": "Chủ đề 3: Sáng tạo với những vật liệu thông dụng",
            "chapter": "Chủ đề 3: Vật liệu thông dụng",
            "summary": "Thiết kế sản phẩm từ bìa, dây, vật liệu tái chế.",
            "questions": []
          },
          {
            "id": "mithuat-6-b4",
            "number": 4,
            "title": "Chủ đề 4: Nghệ thuật Ai Cập cổ đại",
            "chapter": "Chủ đề 4: Nghệ thuật Ai Cập cổ đại",
            "summary": "Tìm hiểu kim tự tháp, tượng nhân sư và nghệ thuật phù điêu Ai Cập.",
            "questions": []
          },
          {
            "id": "mithuat-6-b5",
            "number": 5,
            "title": "Chủ đề 5: Ngôi nhà của em",
            "chapter": "Chủ đề 5: Ngôi nhà của em",
            "summary": "Thiết kế mô hình nhà ở kết hợp trang trí nội thất.",
            "questions": []
          },
          {
            "id": "mithuat-6-b6",
            "number": 6,
            "title": "Chủ đề 6: Vẻ đẹp của thiên nhiên trong sáng tạo mĩ thuật",
            "chapter": "Chủ đề 6: Vẻ đẹp thiên nhiên",
            "summary": "Vẽ tranh phong cảnh bằng chất liệu màu nước/sáp dầu.",
            "questions": []
          },
          {
            "id": "mithuat-6-b7",
            "number": 7,
            "title": "Chủ đề 7: Hòa sắc của mùa xuân",
            "chapter": "Chủ đề 7: Hòa sắc mùa xuân",
            "summary": "Ứng dụng gam màu tương đồng, tương phản trong tranh.",
            "questions": []
          },
          {
            "id": "mithuat-6-b8",
            "number": 8,
            "title": "Chủ đề 8: Nghệ thuật Hy Lạp cổ đại",
            "chapter": "Chủ đề 8: Nghệ thuật Hy Lạp cổ đại",
            "summary": "Tìm hiểu kiến trúc đền Parthenon, gốm Hy Lạp và tỉ lệ cơ thể.",
            "questions": []
          },
          {
            "id": "mithuat-6-b9",
            "number": 9,
            "title": "Chủ đề 9: Thiết kế thời trang và cuộc sống",
            "chapter": "Chủ đề 9: Thiết kế thời trang",
            "summary": "Thiết kế trang phục từ giấy, vải vụn theo chủ đề.",
            "questions": []
          },
          {
            "id": "mithuat-6-b10",
            "number": 10,
            "title": "Chủ đề 10: Nghệ thuật đại chúng",
            "chapter": "Chủ đề 10: Nghệ thuật đại chúng",
            "summary": "Làm quen nghệ thuật Pop Art và sáng tạo sản phẩm.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-6",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-6-b1",
            "number": 1,
            "title": "Chế độ dinh dưỡng trong luyện tập TDTT",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Cân bằng dinh dưỡng cho lứa tuổi THCS khi vận động thể thao.",
            "questions": []
          },
          {
            "id": "gdtc-6-b2",
            "number": 2,
            "title": "Chủ đề 1: Chạy cự li ngắn (60m)",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Động tác bổ trợ, xuất phát cao và chạy lao sau xuất phát.",
            "questions": []
          },
          {
            "id": "gdtc-6-b3",
            "number": 3,
            "title": "Chủ đề 2: Nhảy xa kiểu ngồi",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Chạy đà, giậm nhảy, bước bộ trên không và rơi xuống cát.",
            "questions": []
          },
          {
            "id": "gdtc-6-b4",
            "number": 4,
            "title": "Chủ đề 3: Bài thể dục nhịp điệu",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Các động tác tay, chân, bật nhảy kết hợp nhịp điệu.",
            "questions": []
          },
          {
            "id": "gdtc-6-b5",
            "number": 5,
            "title": "Chủ đề 1: Bóng đá / Bóng rổ / Cầu lông",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Kĩ thuật cơ bản: dẫn bóng, chuyền bóng hoặc đánh cầu cao tay.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-6",
        "name": "Hoạt động trải nghiệm, hướng nghiệp",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-6-b1",
            "number": 1,
            "title": "Chủ đề 1: Em với nhà trường",
            "chapter": "Chủ đề 1: Em với nhà trường",
            "summary": "Làm quen môi trường THCS, truyền thống trường và cách học mới.",
            "questions": []
          },
          {
            "id": "hdtn-6-b2",
            "number": 2,
            "title": "Chủ đề 2: Khám phá bản thân",
            "chapter": "Chủ đề 2: Khám phá bản thân",
            "summary": "Nhận diện đức tính đặc trưng, sở thích và giá trị bản thân.",
            "questions": []
          },
          {
            "id": "hdtn-6-b3",
            "number": 3,
            "title": "Chủ đề 3: Trách nhiệm với bản thân",
            "chapter": "Chủ đề 3: Trách nhiệm với bản thân",
            "summary": "Tự chăm sóc sức khỏe tuổi dậy thì và ứng phó thiên tai.",
            "questions": []
          },
          {
            "id": "hdtn-6-b4",
            "number": 4,
            "title": "Chủ đề 4: Rèn luyện bản thân",
            "chapter": "Chủ đề 4: Rèn luyện bản thân",
            "summary": "Sắp xếp góc học tập, giao tiếp tích cực và chi tiêu hợp lí.",
            "questions": []
          },
          {
            "id": "hdtn-6-b5",
            "number": 5,
            "title": "Chủ đề 5: Em với gia đình",
            "chapter": "Chủ đề 5: Em với gia đình",
            "summary": "Chăm sóc người thân, chia sẻ và giải quyết vấn đề gia đình.",
            "questions": []
          },
          {
            "id": "hdtn-6-b6",
            "number": 6,
            "title": "Chủ đề 6: Em với cộng đồng",
            "chapter": "Chủ đề 6: Em với cộng đồng",
            "summary": "Thiện nguyện, giữ gìn văn hóa nơi công cộng và truyền thống quê hương.",
            "questions": []
          },
          {
            "id": "hdtn-6-b7",
            "number": 7,
            "title": "Chủ đề 7: Em với thiên nhiên và môi trường",
            "chapter": "Chủ đề 7: Em với thiên nhiên",
            "summary": "Tìm hiểu di tích, cảnh quan thiên nhiên và bảo vệ môi trường.",
            "questions": []
          },
          {
            "id": "hdtn-6-b8",
            "number": 8,
            "title": "Chủ đề 8: Khám phá thế giới nghề nghiệp",
            "chapter": "Chủ đề 8: Khám phá nghề nghiệp",
            "summary": "Tìm hiểu nghề truyền thống, nghề phổ biến và dụng cụ lao động.",
            "questions": []
          },
          {
            "id": "hdtn-6-b9",
            "number": 9,
            "title": "Chủ đề 9: Hiểu bản thân để chọn nghề phù hợp",
            "chapter": "Chủ đề 9: Hiểu bản thân chọn đúng nghề",
            "summary": "Liên hệ sở thích, năng lực cá nhân với nhóm nghề tương lai.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 7,
    "label": "Lớp 7",
    "level": "THCS",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=7",
    "subjects": [
      {
        "id": "toan-7",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-7-b1",
            "number": 1,
            "title": "Bài 1: Tập hợp các số hữu tỉ",
            "chapter": "Chương I: Số hữu tỉ",
            "summary": "Số hữu tỉ a/b (b ≠ 0), tập hợp Q, số đối.",
            "questions": []
          },
          {
            "id": "toan-7-b2",
            "number": 2,
            "title": "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ",
            "chapter": "Chương I: Số hữu tỉ",
            "summary": "Phép tính trên Q.",
            "questions": []
          },
          {
            "id": "toan-7-b3",
            "number": 3,
            "title": "Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ",
            "chapter": "Chương I: Số hữu tỉ",
            "summary": "Lũy thừa của tích, thương, lũy thừa của lũy thừa.",
            "questions": []
          },
          {
            "id": "toan-7-b4",
            "number": 4,
            "title": "Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế",
            "chapter": "Chương I: Số hữu tỉ",
            "summary": "Chuyển vế đổi dấu.",
            "questions": []
          },
          {
            "id": "toan-7-b5",
            "number": 5,
            "title": "Bài 5: Làm quen với số thập phân vô hạn tuần hoàn",
            "chapter": "Chương II: Số thực",
            "summary": "Số thập phân hữu hạn và vô hạn tuần hoàn.",
            "questions": []
          },
          {
            "id": "toan-7-b6",
            "number": 6,
            "title": "Bài 6: Số vô tỉ. Căn bậc hai số học",
            "chapter": "Chương II: Số thực",
            "summary": "Số vô tỉ và √a (a ≥ 0).",
            "questions": []
          },
          {
            "id": "toan-7-b7",
            "number": 7,
            "title": "Bài 7: Tập hợp các số thực",
            "chapter": "Chương II: Số thực",
            "summary": "Tập hợp R và giá trị tuyệt đối.",
            "questions": []
          },
          {
            "id": "toan-7-b8",
            "number": 8,
            "title": "Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "Kề bù, đối đỉnh, tia phân giác.",
            "questions": []
          },
          {
            "id": "toan-7-b9",
            "number": 9,
            "title": "Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "So le trong, đồng vị bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-7-b10",
            "number": 10,
            "title": "Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "Tiên đề Euclid.",
            "questions": []
          },
          {
            "id": "toan-7-b11",
            "number": 11,
            "title": "Bài 11: Định lí và chứng minh định lí",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "Giả thiết và kết luận.",
            "questions": []
          },
          {
            "id": "toan-7-b12",
            "number": 12,
            "title": "Bài 12: Tổng các góc trong một tam giác",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Tổng 3 góc bằng 180°.",
            "questions": []
          },
          {
            "id": "toan-7-b13",
            "number": 13,
            "title": "Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất (c.c.c)",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Cạnh - cạnh - cạnh.",
            "questions": []
          },
          {
            "id": "toan-7-b14",
            "number": 14,
            "title": "Bài 14: Trường hợp bằng nhau thứ hai và thứ ba của tam giác",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "c.g.c và g.c.g.",
            "questions": []
          },
          {
            "id": "toan-7-b15",
            "number": 15,
            "title": "Bài 15: Các trường hợp bằng nhau của tam giác vuông",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Cạnh huyền - góc nhọn; cạnh huyền - cạnh góc vuông.",
            "questions": []
          },
          {
            "id": "toan-7-b16",
            "number": 16,
            "title": "Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Tính chất tam giác cân và đường trung trực.",
            "questions": []
          },
          {
            "id": "toan-7-b17",
            "number": 17,
            "title": "Bài 17: Thu thập và phân loại dữ liệu",
            "chapter": "Chương V: Thu thập và biểu diễn dữ liệu",
            "summary": "Phân loại dữ liệu hợp lí.",
            "questions": []
          },
          {
            "id": "toan-7-b18",
            "number": 18,
            "title": "Bài 18: Biểu đồ hình quạt tròn",
            "chapter": "Chương V: Thu thập và biểu diễn dữ liệu",
            "summary": "Đọc biểu đồ hình quạt tròn.",
            "questions": []
          },
          {
            "id": "toan-7-b19",
            "number": 19,
            "title": "Bài 19: Biểu đồ đoạn thẳng",
            "chapter": "Chương V: Thu thập và biểu diễn dữ liệu",
            "summary": "Đọc biểu đồ đoạn thẳng.",
            "questions": []
          },
          {
            "id": "toan-7-b20",
            "number": 20,
            "title": "Bài 20: Tỉ lệ thức",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "a/b = c/d <=> ad = bc.",
            "questions": []
          },
          {
            "id": "toan-7-b21",
            "number": 21,
            "title": "Bài 21: Tính chất của dãy tỉ số bằng nhau",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "Giải toán chia tỉ lệ.",
            "questions": []
          },
          {
            "id": "toan-7-b22",
            "number": 22,
            "title": "Bài 22: Đại lượng tỉ lệ thuận",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "y = kx.",
            "questions": []
          },
          {
            "id": "toan-7-b23",
            "number": 23,
            "title": "Bài 23: Đại lượng tỉ lệ nghịch",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "y = a/x.",
            "questions": []
          },
          {
            "id": "toan-7-b24",
            "number": 24,
            "title": "Bài 24: Biểu thức đại số",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Tính giá trị biểu thức đại số.",
            "questions": []
          },
          {
            "id": "toan-7-b25",
            "number": 25,
            "title": "Bài 25: Đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Bậc, hệ số cao nhất, nghiệm.",
            "questions": []
          },
          {
            "id": "toan-7-b26",
            "number": 26,
            "title": "Bài 26: Phép cộng và phép trừ đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Cộng, trừ đa thức một biến.",
            "questions": []
          },
          {
            "id": "toan-7-b27",
            "number": 27,
            "title": "Bài 27: Phép nhân đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Nhân đa thức một biến.",
            "questions": []
          },
          {
            "id": "toan-7-b28",
            "number": 28,
            "title": "Bài 28: Phép chia đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Chia đa thức một biến.",
            "questions": []
          },
          {
            "id": "toan-7-b29",
            "number": 29,
            "title": "Bài 29: Làm quen với biến cố",
            "chapter": "Chương VIII: Làm quen với biến cố và xác suất của biến cố",
            "summary": "Biến cố chắc chắn, không thể, ngẫu nhiên.",
            "questions": []
          },
          {
            "id": "toan-7-b30",
            "number": 30,
            "title": "Bài 30: Làm quen với xác suất của biến cố",
            "chapter": "Chương VIII: Làm quen với biến cố và xác suất của biến cố",
            "summary": "Xác suất của biến cố.",
            "questions": []
          },
          {
            "id": "toan-7-b31",
            "number": 31,
            "title": "Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Cạnh lớn hơn đối diện góc lớn hơn.",
            "questions": []
          },
          {
            "id": "toan-7-b32",
            "number": 32,
            "title": "Bài 32: Quan hệ giữa đường vuông góc và đường xiên",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Đường vuông góc ngắn nhất.",
            "questions": []
          },
          {
            "id": "toan-7-b33",
            "number": 33,
            "title": "Bài 33: Quan hệ giữa ba cạnh của một tam giác",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Bất đẳng thức tam giác.",
            "questions": []
          },
          {
            "id": "toan-7-b34",
            "number": 34,
            "title": "Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Trọng tâm và tâm đường tròn nội tiếp.",
            "questions": []
          },
          {
            "id": "toan-7-b35",
            "number": 35,
            "title": "Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Tâm ngoại tiếp và trực tâm.",
            "questions": []
          },
          {
            "id": "toan-7-b36",
            "number": 36,
            "title": "Bài 36: Hình hộp chữ nhật và hình lập phương",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh và thể tích.",
            "questions": []
          },
          {
            "id": "toan-7-b37",
            "number": 37,
            "title": "Bài 37: Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "S_xq = C_đáy · h; V = S_đáy · h.",
            "questions": []
          }
        ]
      },
      {
        "id": "khtn-7",
        "name": "Khoa học tự nhiên",
        "icon": "🔬",
        "lessons": [
          {
            "id": "khtn-7-b1",
            "number": 1,
            "title": "Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
            "chapter": "Chương I: Nguyên tử. Bảng tuần hoàn",
            "summary": "Phương pháp tìm hiểu tự nhiên, tiến trình nghiên cứu.",
            "questions": []
          },
          {
            "id": "khtn-7-b2",
            "number": 2,
            "title": "Bài 2: Nguyên tử",
            "chapter": "Chương I: Nguyên tử. Bảng tuần hoàn",
            "summary": "Hạt nhân (proton, neutron) và vỏ electron.",
            "questions": []
          },
          {
            "id": "khtn-7-b3",
            "number": 3,
            "title": "Bài 3: Nguyên tố hóa học",
            "chapter": "Chương I: Nguyên tử. Bảng tuần hoàn",
            "summary": "Cùng số proton, tên và kí hiệu hóa học IUPAC.",
            "questions": []
          },
          {
            "id": "khtn-7-b4",
            "number": 4,
            "title": "Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
            "chapter": "Chương I: Nguyên tử. Bảng tuần hoàn",
            "summary": "Ô, chu kì, nhóm; kim loại, phi kim, khí hiếm.",
            "questions": []
          },
          {
            "id": "khtn-7-b5",
            "number": 5,
            "title": "Bài 5: Phân tử - Đơn chất - Hợp chất",
            "chapter": "Chương II: Phân tử. Liên kết hóa học",
            "summary": "Khối lượng phân tử (amu), đơn chất, hợp chất.",
            "questions": []
          },
          {
            "id": "khtn-7-b6",
            "number": 6,
            "title": "Bài 6: Giới thiệu về liên kết hóa học",
            "chapter": "Chương II: Phân tử. Liên kết hóa học",
            "summary": "Liên kết ion và liên kết cộng hóa trị.",
            "questions": []
          },
          {
            "id": "khtn-7-b7",
            "number": 7,
            "title": "Bài 7: Hóa trị và công thức hóa học",
            "chapter": "Chương II: Phân tử. Liên kết hóa học",
            "summary": "Quy tắc hóa trị và phần trăm nguyên tố.",
            "questions": []
          },
          {
            "id": "khtn-7-b8",
            "number": 8,
            "title": "Bài 8: Tốc độ chuyển động",
            "chapter": "Chương III: Tốc độ",
            "summary": "v = s/t (m/s, km/h).",
            "questions": []
          },
          {
            "id": "khtn-7-b9",
            "number": 9,
            "title": "Bài 9: Đo tốc độ",
            "chapter": "Chương III: Tốc độ",
            "summary": "Đo tốc độ bằng đồng hồ bấm giây và cổng quang điện.",
            "questions": []
          },
          {
            "id": "khtn-7-b10",
            "number": 10,
            "title": "Bài 10: Đồ thị quãng đường - thời gian",
            "chapter": "Chương III: Tốc độ",
            "summary": "Vẽ và đọc đồ thị s - t.",
            "questions": []
          },
          {
            "id": "khtn-7-b11",
            "number": 11,
            "title": "Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
            "chapter": "Chương III: Tốc độ",
            "summary": "Khoảng cách an toàn khi tham gia giao thông.",
            "questions": []
          },
          {
            "id": "khtn-7-b12",
            "number": 12,
            "title": "Bài 12: Sóng âm",
            "chapter": "Chương IV: Âm thanh",
            "summary": "Nguồn âm, môi trường truyền âm.",
            "questions": []
          },
          {
            "id": "khtn-7-b13",
            "number": 13,
            "title": "Bài 13: Độ to và độ cao của âm",
            "chapter": "Chương IV: Âm thanh",
            "summary": "Tần số (Hz) và biên độ dao động.",
            "questions": []
          },
          {
            "id": "khtn-7-b14",
            "number": 14,
            "title": "Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn",
            "chapter": "Chương IV: Âm thanh",
            "summary": "Tiếng vang, vật liệu cách âm.",
            "questions": []
          },
          {
            "id": "khtn-7-b15",
            "number": 15,
            "title": "Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối",
            "chapter": "Chương V: Ánh sáng",
            "summary": "Chùm sáng, tia sáng, bóng tối.",
            "questions": []
          },
          {
            "id": "khtn-7-b16",
            "number": 16,
            "title": "Bài 16: Sự phản xạ ánh sáng",
            "chapter": "Chương V: Ánh sáng",
            "summary": "Định luật phản xạ ánh sáng.",
            "questions": []
          },
          {
            "id": "khtn-7-b17",
            "number": 17,
            "title": "Bài 17: Ảnh của vật qua gương phẳng",
            "chapter": "Chương V: Ánh sáng",
            "summary": "Ảnh ảo bằng vật, đối xứng qua gương.",
            "questions": []
          },
          {
            "id": "khtn-7-b18",
            "number": 18,
            "title": "Bài 18: Nam châm",
            "chapter": "Chương VI: Từ",
            "summary": "Cực N - S, tương tác từ.",
            "questions": []
          },
          {
            "id": "khtn-7-b19",
            "number": 19,
            "title": "Bài 19: Từ trường",
            "chapter": "Chương VI: Từ",
            "summary": "Đường sức từ và từ trường Trái Đất.",
            "questions": []
          },
          {
            "id": "khtn-7-b20",
            "number": 20,
            "title": "Bài 20: Chế tạo nam châm điện đơn giản",
            "chapter": "Chương VI: Từ",
            "summary": "Nam châm điện và điều chỉnh lực từ.",
            "questions": []
          },
          {
            "id": "khtn-7-b21",
            "number": 21,
            "title": "Bài 21: Khái quát về trao đổi chất và chuyển hóa năng lượng",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Vai trò trao đổi chất ở sinh vật.",
            "questions": []
          },
          {
            "id": "khtn-7-b22",
            "number": 22,
            "title": "Bài 22: Quang hợp ở thực vật",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Phương trình quang hợp ở lục lạp.",
            "questions": []
          },
          {
            "id": "khtn-7-b23",
            "number": 23,
            "title": "Bài 23: Một số yếu tố ảnh hưởng đến quang hợp",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Ánh sáng, nước, CO2, nhiệt độ.",
            "questions": []
          },
          {
            "id": "khtn-7-b24",
            "number": 24,
            "title": "Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Thí nghiệm tinh bột và khí O2.",
            "questions": []
          },
          {
            "id": "khtn-7-b25",
            "number": 25,
            "title": "Bài 25: Hô hấp tế bào",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Tạo năng lượng ATP từ chất hữu cơ.",
            "questions": []
          },
          {
            "id": "khtn-7-b26",
            "number": 26,
            "title": "Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Nhiệt độ, độ ẩm, nồng độ O2.",
            "questions": []
          },
          {
            "id": "khtn-7-b27",
            "number": 27,
            "title": "Bài 28: Trao đổi khí ở sinh vật",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Khí khổng, da, mang, phổi.",
            "questions": []
          },
          {
            "id": "khtn-7-b28",
            "number": 28,
            "title": "Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Mạch gỗ, mạch rây, thoát hơi nước.",
            "questions": []
          },
          {
            "id": "khtn-7-b29",
            "number": 29,
            "title": "Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Tiêu hóa, tuần hoàn, bài tiết.",
            "questions": []
          },
          {
            "id": "khtn-7-b30",
            "number": 30,
            "title": "Bài 32: Cảm ứng ở sinh vật",
            "chapter": "Chương VIII: Cảm ứng ở sinh vật",
            "summary": "Hướng sáng, hướng nước ở thực vật.",
            "questions": []
          },
          {
            "id": "khtn-7-b31",
            "number": 31,
            "title": "Bài 34: Tập tính ở động vật",
            "chapter": "Chương VIII: Cảm ứng ở sinh vật",
            "summary": "Tập tính bẩm sinh và học được.",
            "questions": []
          },
          {
            "id": "khtn-7-b32",
            "number": 32,
            "title": "Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật",
            "chapter": "Chương IX: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Mô phân sinh và vòng đời.",
            "questions": []
          },
          {
            "id": "khtn-7-b33",
            "number": 33,
            "title": "Bài 39: Sinh sản vô tính ở sinh vật",
            "chapter": "Chương X: Sinh sản ở sinh vật",
            "summary": "Giâm, chiết, ghép, nảy chồi.",
            "questions": []
          },
          {
            "id": "khtn-7-b34",
            "number": 34,
            "title": "Bài 40: Sinh sản hữu tính ở sinh vật",
            "chapter": "Chương X: Sinh sản ở sinh vật",
            "summary": "Thụ phấn, thụ tinh tạo hạt và quả.",
            "questions": []
          },
          {
            "id": "khtn-7-b35",
            "number": 35,
            "title": "Bài 42: Cơ thể sinh vật là một thể thống nhất",
            "chapter": "Chương X: Sinh sản ở sinh vật",
            "summary": "Mối liên hệ giữa các hoạt động sống.",
            "questions": []
          }
        ]
      },
      {
        "id": "nguvan-7",
        "name": "Ngữ văn",
        "icon": "📖",
        "lessons": [
          {
            "id": "nguvan-7-b1",
            "number": 1,
            "title": "Bầy chim chìa vôi (Nguyễn Quang Thiều)",
            "chapter": "Bài 1: Bầu trời tuổi thơ",
            "summary": "Tình yêu thiên nhiên và sự ngây thơ của Mên, Mon.",
            "questions": []
          },
          {
            "id": "nguvan-7-b2",
            "number": 2,
            "title": "Đi lấy mật (Đoàn Giỏi)",
            "chapter": "Bài 1: Bầu trời tuổi thơ",
            "summary": "Thiên nhiên rừng U Minh Nam Bộ.",
            "questions": []
          },
          {
            "id": "nguvan-7-b3",
            "number": 3,
            "title": "Đồng dao mùa xuân (Nguyễn Khoa Điềm)",
            "chapter": "Bài 2: Khúc nhạc tâm hồn",
            "summary": "Hình tượng người lính trẻ.",
            "questions": []
          },
          {
            "id": "nguvan-7-b4",
            "number": 4,
            "title": "Gặp lá cơm nếp (Thanh Thảo)",
            "chapter": "Bài 2: Khúc nhạc tâm hồn",
            "summary": "Nỗi nhớ mẹ và quê hương.",
            "questions": []
          },
          {
            "id": "nguvan-7-b5",
            "number": 5,
            "title": "Vừa nhắm mắt vừa mở cửa sổ (Nguyễn Ngọc Thuần)",
            "chapter": "Bài 3: Cội nguồn yêu thương",
            "summary": "Cảm nhận thế giới bằng yêu thương.",
            "questions": []
          },
          {
            "id": "nguvan-7-b6",
            "number": 6,
            "title": "Mùa xuân nho nhỏ (Thanh Hải)",
            "chapter": "Bài 4: Giai điệu đất nước",
            "summary": "Khát vọng cống hiến cho đất nước.",
            "questions": []
          },
          {
            "id": "nguvan-7-b7",
            "number": 7,
            "title": "Tháng Giêng, mơ về trăng non rét ngọt (Vũ Bằng)",
            "chapter": "Bài 5: Màu sắc trăm miền",
            "summary": "Tùy bút về mùa xuân Hà Nội.",
            "questions": []
          },
          {
            "id": "nguvan-7-b8",
            "number": 8,
            "title": "Đẽo cày giữa đường & Ếch ngồi đáy giếng",
            "chapter": "Bài 6: Bài học cuộc sống",
            "summary": "Truyện ngụ ngôn và bài học thực tiễn.",
            "questions": []
          },
          {
            "id": "nguvan-7-b9",
            "number": 9,
            "title": "Cuộc chạm trán trên đại dương (Giuyn Véc-nơ)",
            "chapter": "Bài 7: Thế giới viễn tưởng",
            "summary": "Truyện khoa học viễn tưởng.",
            "questions": []
          },
          {
            "id": "nguvan-7-b10",
            "number": 10,
            "title": "Thủy tiên tháng Một & Lễ rửa làng của người Lô Lô",
            "chapter": "Bài 9: Hòa điệu với tự nhiên",
            "summary": "Văn bản thông tin về môi trường.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-diali-7",
        "name": "Lịch sử và Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "lichsu-diali-7-b1",
            "number": 1,
            "title": "Bài 1: Quá trình hình thành và phát triển chế độ phong kiến ở Tây Âu",
            "chapter": "Lịch sử - Chương 1: Tây Âu (TK V–XVI)",
            "summary": "Lãnh địa phong kiến, thành thị trung đại và Thiên Chúa giáo.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b2",
            "number": 2,
            "title": "Bài 2: Các cuộc phát kiến địa lí và sự hình thành quan hệ sản xuất TBCN ở Tây Âu",
            "chapter": "Lịch sử - Chương 1: Tây Âu (TK V–XVI)",
            "summary": "C. Cô-lôm-bô, V. Ga-ma, F. Ma-gien-lăng và hệ quả phát kiến.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b3",
            "number": 3,
            "title": "Bài 3: Phong trào Văn hoá Phục hưng và Cải cách tôn giáo",
            "chapter": "Lịch sử - Chương 1: Tây Âu (TK V–XVI)",
            "summary": "Thành tựu Phục hưng (Leonardo da Vinci, Shakespeare) và cải cách Lu-thơ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b4",
            "number": 4,
            "title": "Bài 4: Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX",
            "chapter": "Lịch sử - Chương 2: Trung Quốc và Ấn Độ thời trung đại",
            "summary": "Các triều đại Đường, Tống, Nguyên, Minh, Thanh và thành tựu văn hóa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b5",
            "number": 5,
            "title": "Bài 5: Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX",
            "chapter": "Lịch sử - Chương 2: Trung Quốc và Ấn Độ thời trung đại",
            "summary": "Vương triều Gúp-ta, Đê-li, Mô-gôn và thành tựu văn hóa Ấn Độ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b6",
            "number": 6,
            "title": "Bài 6: Các vương quốc phong kiến Đông Nam Á (nửa sau TK X – nửa đầu TK XVI)",
            "chapter": "Lịch sử - Chương 3: Đông Nam Á (TK X–XVI)",
            "summary": "Sự phát triển rực rỡ của các quốc gia phong kiến Đông Nam Á.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b7",
            "number": 7,
            "title": "Bài 7: Vương quốc Lào",
            "chapter": "Lịch sử - Chương 3: Đông Nam Á (TK X–XVI)",
            "summary": "Vương quốc Lan Xang (Triệu Voi) và văn hóa Lào.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b8",
            "number": 8,
            "title": "Bài 8: Vương quốc Cam-pu-chia",
            "chapter": "Lịch sử - Chương 3: Đông Nam Á (TK X–XVI)",
            "summary": "Thời kì Ăng-co, đền Ăng-co Vát và văn hóa Khơ-me.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b9",
            "number": 9,
            "title": "Bài 9: Đất nước buổi đầu độc lập (Ngô – Đinh – Tiền Lê)",
            "chapter": "Lịch sử - Chương 4: Ngô - Đinh - Tiền Lê",
            "summary": "Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, Lê Hoàn kháng chiến chống Tống 981.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b10",
            "number": 10,
            "title": "Bài 10: Nhà Lý thành lập và xây dựng đất nước (thế kỉ XI – XIII)",
            "chapter": "Lịch sử - Chương 5: Đại Việt thời Lý - Trần - Hồ",
            "summary": "Dời đô về Thăng Long (1010), Quốc Tử Giám, bộ luật Hình thư.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b11",
            "number": 11,
            "title": "Bài 11: Cuộc kháng chiến chống quân xâm lược Tống (1075 – 1077)",
            "chapter": "Lịch sử - Chương 5: Đại Việt thời Lý - Trần - Hồ",
            "summary": "Lý Thường Kiệt, chiến tuyến sông Như Nguyệt và bài thơ Nam quốc sơn hà.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b12",
            "number": 12,
            "title": "Bài 12: Đại Việt thời Trần (thế kỉ XIII – XIV)",
            "chapter": "Lịch sử - Chương 5: Đại Việt thời Lý - Trần - Hồ",
            "summary": "Tổ chức nhà nước, kinh tế nông nghiệp, văn hóa thời Trần.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b13",
            "number": 13,
            "title": "Bài 13: Ba lần kháng chiến chống quân xâm lược Mông – Nguyên (thế kỉ XIII)",
            "chapter": "Lịch sử - Chương 5: Đại Việt thời Lý - Trần - Hồ",
            "summary": "Hội nghị Diên Hồng, Hưng Đạo Vương Trần Quốc Tuấn, chiến thắng Bạch Đằng 1288.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b14",
            "number": 14,
            "title": "Bài 14: Nước Đại Việt thời Hồ (đầu thế kỉ XV)",
            "chapter": "Lịch sử - Chương 5: Đại Việt thời Lý - Trần - Hồ",
            "summary": "Cải cách của Hồ Quý Ly và cuộc kháng chiến chống quân Minh thất bại.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b15",
            "number": 15,
            "title": "Bài 15: Khởi nghĩa Lam Sơn (1418 – 1427)",
            "chapter": "Lịch sử - Chương 6: Khởi nghĩa Lam Sơn và Đại Việt thời Lê sơ",
            "summary": "Lê Lợi, Nguyễn Trãi, chiến thắng Chi Lăng - Xương Giang.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b16",
            "number": 16,
            "title": "Bài 16: Đại Việt thời Lê sơ (1428 – 1527)",
            "chapter": "Lịch sử - Chương 6: Khởi nghĩa Lam Sơn và Đại Việt thời Lê sơ",
            "summary": "Bộ luật Hồng Đức, văn hóa giáo dục Nho giáo và bia Tiến sĩ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b17",
            "number": 17,
            "title": "Bài 17: Vị trí địa lí, đặc điểm tự nhiên, dân cư và xã hội châu Âu",
            "chapter": "Địa lí - Chương 1: Châu Âu",
            "summary": "Địa hình, khí hậu ôn đới và vấn đề già hóa dân số châu Âu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b18",
            "number": 18,
            "title": "Bài 18: Phương thức con người khai thác, sử dụng và bảo vệ thiên nhiên châu Âu",
            "chapter": "Địa lí - Chương 1: Châu Âu",
            "summary": "Bảo vệ môi trường không khí, nước và đa dạng sinh học ở châu Âu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b19",
            "number": 19,
            "title": "Bài 19: Liên minh châu Âu (EU)",
            "chapter": "Địa lí - Chương 1: Châu Âu",
            "summary": "Trung tâm kinh tế lớn hàng đầu thế giới.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b20",
            "number": 20,
            "title": "Bài 20: Vị trí địa lí, đặc điểm tự nhiên, dân cư và xã hội châu Á",
            "chapter": "Địa lí - Chương 2: Châu Á",
            "summary": "Châu lục lớn nhất, địa hình núi cao nguyên, khí hậu đa dạng và đông dân nhất.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b21",
            "number": 21,
            "title": "Bài 21: Đặc điểm kinh tế – xã hội các khu vực châu Á",
            "chapter": "Địa lí - Chương 2: Châu Á",
            "summary": "Đông Á, Đông Nam Á, Nam Á, Tây Á, Trung Á.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b22",
            "number": 22,
            "title": "Bài 22: Vị trí địa lí, đặc điểm tự nhiên, dân cư và xã hội châu Phi",
            "chapter": "Địa lí - Chương 3: Châu Phi",
            "summary": "Lục địa nóng, hoang mạc Xa-ha-ra, tỉ suất gia tăng dân số cao.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b23",
            "number": 23,
            "title": "Bài 23: Phương thức con người khai thác, sử dụng và bảo vệ thiên nhiên châu Phi",
            "chapter": "Địa lí - Chương 3: Châu Phi",
            "summary": "Chống sa mạc hóa và bảo vệ động vật hoang dã.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b24",
            "number": 24,
            "title": "Bài 24: Vị trí địa lí, lịch sử khám phá và thiên nhiên châu Mỹ",
            "chapter": "Địa lí - Chương 4: Châu Mỹ",
            "summary": "Bắc Mỹ, Trung và Nam Mỹ; dãy Coóc-đi-e, An-đét, rừng A-ma-dôn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b25",
            "number": 25,
            "title": "Bài 25: Dân cư, xã hội và kinh tế châu Mỹ",
            "chapter": "Địa lí - Chương 4: Châu Mỹ",
            "summary": "Đô thị hóa Bắc Mỹ và khai thác tài nguyên ở Nam Mỹ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b26",
            "number": 26,
            "title": "Bài 26: Châu Đại Dương",
            "chapter": "Địa lí - Chương 5: Châu Đại Dương và Châu Nam Cực",
            "summary": "Lục địa Ô-xtrây-li-a và các đảo Thái Bình Dương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b27",
            "number": 27,
            "title": "Bài 27: Châu Nam Cực",
            "chapter": "Địa lí - Chương 5: Châu Đại Dương và Châu Nam Cực",
            "summary": "Cực lạnh thế giới, lớp băng phủ dày và Hiệp ước Nam Cực.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b28",
            "number": 28,
            "title": "Chủ đề chung 1: Các cuộc đại phát kiến địa lí",
            "chapter": "Chủ đề chung",
            "summary": "Tích hợp Lịch sử và Địa lí về các chuyến hải trình thế kỉ XV–XVI.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b29",
            "number": 29,
            "title": "Chủ đề chung 2: Đô thị: Lịch sử và hiện tại",
            "chapter": "Chủ đề chung",
            "summary": "Sự hình thành và phát triển các đô thị qua các thời kì.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdcd-7",
        "name": "Giáo dục công dân",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "gdcd-7-b1",
            "number": 1,
            "title": "Bài 1: Tự hào về truyền thống quê hương",
            "chapter": "Giáo dục công dân 7",
            "summary": "Giữ gìn truyền thống văn hóa, lịch sử quê hương.",
            "questions": []
          },
          {
            "id": "gdcd-7-b2",
            "number": 2,
            "title": "Bài 2: Quan tâm, cảm thông và chia sẻ",
            "chapter": "Giáo dục công dân 7",
            "summary": "Sẻ chia với người gặp khó khăn.",
            "questions": []
          },
          {
            "id": "gdcd-7-b3",
            "number": 3,
            "title": "Bài 3: Học tập tự giác, tích cực",
            "chapter": "Giáo dục công dân 7",
            "summary": "Chủ động học tập không cần nhắc nhở.",
            "questions": []
          },
          {
            "id": "gdcd-7-b4",
            "number": 4,
            "title": "Bài 4: Giữ chữ tín",
            "chapter": "Giáo dục công dân 7",
            "summary": "Coi trọng lòng tin và thực hiện đúng lời hứa.",
            "questions": []
          },
          {
            "id": "gdcd-7-b5",
            "number": 5,
            "title": "Bài 5: Bảo tồn di sản văn hóa",
            "chapter": "Giáo dục công dân 7",
            "summary": "Di sản vật thể và phi vật thể.",
            "questions": []
          },
          {
            "id": "gdcd-7-b6",
            "number": 6,
            "title": "Bài 6: Ứng phó với tâm lí căng thẳng",
            "chapter": "Giáo dục công dân 7",
            "summary": "Nhận biết nguyên nhân và cách giải tỏa stress.",
            "questions": []
          },
          {
            "id": "gdcd-7-b7",
            "number": 7,
            "title": "Bài 7: Phòng chống bạo lực học đường",
            "chapter": "Giáo dục công dân 7",
            "summary": "Nhận diện và ứng phó bạo lực học đường.",
            "questions": []
          },
          {
            "id": "gdcd-7-b8",
            "number": 8,
            "title": "Bài 8: Quản lí tiền",
            "chapter": "Giáo dục công dân 7",
            "summary": "Lập kế hoạch chi tiêu và tiết kiệm.",
            "questions": []
          },
          {
            "id": "gdcd-7-b9",
            "number": 9,
            "title": "Bài 9: Phòng, chống tệ nạn xã hội",
            "chapter": "Giáo dục công dân 7",
            "summary": "Tác hại của ma túy, cờ bạc, mê tín dị đoan.",
            "questions": []
          },
          {
            "id": "gdcd-7-b10",
            "number": 10,
            "title": "Bài 10: Quyền và nghĩa vụ của công dân trong gia đình",
            "chapter": "Giáo dục công dân 7",
            "summary": "Nghĩa vụ yêu thương, kính trọng, chăm sóc trong gia đình.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-7",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-7-b1",
            "number": 1,
            "title": "Bài 1: Thiết bị vào và thiết bị ra",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Phân loại thiết bị vào (chuột, bàn phím, micro) và ra (màn hình, loa, máy in).",
            "questions": []
          },
          {
            "id": "tinhoc-7-b2",
            "number": 2,
            "title": "Bài 2: Hệ điều hành và phần mềm ứng dụng",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Vai trò hệ điều hành và phần mềm ứng dụng.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b3",
            "number": 3,
            "title": "Bài 3: Thực hành thao tác với tệp và thư mục",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Quản lí tệp, phần mở rộng tệp.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b4",
            "number": 4,
            "title": "Bài 4: Phân loại tệp và bảo vệ dữ liệu trong máy tính",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Sao lưu dữ liệu và phòng chống virus.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b5",
            "number": 5,
            "title": "Bài 5: Mạng xã hội",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Ưu điểm, nhược điểm và sử dụng mạng xã hội an toàn.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b6",
            "number": 6,
            "title": "Bài 6: Văn hóa ứng xử qua phương tiện truyền thông số",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Giao tiếp văn minh, tôn trọng quyền riêng tư.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b7",
            "number": 7,
            "title": "Bài 7: Phần mềm bảng tính",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Ô tính, hàng, cột, nhập dữ liệu bảng tính Excel.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b8",
            "number": 8,
            "title": "Bài 8: Sử dụng địa chỉ ô tính trong công thức",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Công thức bắt đầu bằng dấu = và địa chỉ ô.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b9",
            "number": 9,
            "title": "Bài 9: Định dạng trang tính, chèn thêm và xóa hàng, cột",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Trình bày bảng tính khoa học.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b10",
            "number": 10,
            "title": "Bài 10: Sử dụng hàm để tính toán",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Các hàm SUM, AVERAGE, MAX, MIN, COUNT.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b11",
            "number": 11,
            "title": "Bài 11: Tạo bài trình chiếu",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Tổ chức nội dung trình chiếu theo cấu trúc phân cấp.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b12",
            "number": 12,
            "title": "Bài 12: Sử dụng ảnh minh họa, hiệu ứng động trong bài trình chiếu",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Hiệu ứng animation hợp lí.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b13",
            "number": 13,
            "title": "Bài 13: Thuật toán tìm kiếm",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Tìm kiếm tuần tự và tìm kiếm nhị phân.",
            "questions": []
          },
          {
            "id": "tinhoc-7-b14",
            "number": 14,
            "title": "Bài 14: Thuật toán sắp xếp",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Sắp xếp nổi bọt, sắp xếp chọn.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-7",
        "name": "Công nghệ",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-7-b1",
            "number": 1,
            "title": "Bài 1: Giới thiệu về trồng trọt",
            "chapter": "Phần I: Trồng trọt",
            "summary": "Vai trò và nhóm cây trồng phổ biến.",
            "questions": []
          },
          {
            "id": "congnghe-7-b2",
            "number": 2,
            "title": "Bài 2: Làm đất và chăm sóc cây trồng",
            "chapter": "Phần I: Trồng trọt",
            "summary": "Cày, bừa, bón phân, tưới tiêu, phòng trừ sâu bệnh.",
            "questions": []
          },
          {
            "id": "congnghe-7-b3",
            "number": 3,
            "title": "Bài 3: Nhân giống cây trồng bằng phương pháp giâm cành",
            "chapter": "Phần I: Trồng trọt",
            "summary": "Kĩ thuật giâm cành.",
            "questions": []
          },
          {
            "id": "congnghe-7-b4",
            "number": 4,
            "title": "Bài 4: Trồng và chăm sóc cây cải xanh",
            "chapter": "Phần I: Trồng trọt",
            "summary": "Quy trình trồng rau cải xanh.",
            "questions": []
          },
          {
            "id": "congnghe-7-b5",
            "number": 5,
            "title": "Bài 5: Trồng và chăm sóc cây ăn quả (cây có múi)",
            "chapter": "Phần I: Trồng trọt",
            "summary": "Kĩ thuật trồng cây ăn quả.",
            "questions": []
          },
          {
            "id": "congnghe-7-b6",
            "number": 6,
            "title": "Bài 6: Rừng ở Việt Nam",
            "chapter": "Phần II: Lâm nghiệp",
            "summary": "Rừng phòng hộ, rừng đặc dụng, rừng sản xuất.",
            "questions": []
          },
          {
            "id": "congnghe-7-b7",
            "number": 7,
            "title": "Bài 7: Trồng và chăm sóc rừng",
            "chapter": "Phần II: Lâm nghiệp",
            "summary": "Quy trình trồng rừng mới.",
            "questions": []
          },
          {
            "id": "congnghe-7-b8",
            "number": 8,
            "title": "Bài 8: Bảo vệ và khai thác rừng",
            "chapter": "Phần II: Lâm nghiệp",
            "summary": "Phòng cháy chữa cháy rừng và khai thác bền vững.",
            "questions": []
          },
          {
            "id": "congnghe-7-b9",
            "number": 9,
            "title": "Bài 9: Giới thiệu về chăn nuôi",
            "chapter": "Phần III: Chăn nuôi",
            "summary": "Vai trò và phương thức chăn nuôi.",
            "questions": []
          },
          {
            "id": "congnghe-7-b10",
            "number": 10,
            "title": "Bài 10: Nuôi dưỡng và chăm sóc vật nuôi",
            "chapter": "Phần III: Chăn nuôi",
            "summary": "Thức ăn, chuồng trại, vệ sinh.",
            "questions": []
          },
          {
            "id": "congnghe-7-b11",
            "number": 11,
            "title": "Bài 11: Phòng và trị bệnh cho vật nuôi",
            "chapter": "Phần III: Chăn nuôi",
            "summary": "Tiêm phòng vắc xin và vệ sinh dịch tễ.",
            "questions": []
          },
          {
            "id": "congnghe-7-b12",
            "number": 12,
            "title": "Bài 12: Chăn nuôi gà thịt thả vườn",
            "chapter": "Phần III: Chăn nuôi",
            "summary": "Kĩ thuật nuôi gà thả vườn.",
            "questions": []
          },
          {
            "id": "congnghe-7-b13",
            "number": 13,
            "title": "Bài 13: Chăn nuôi lợn nái",
            "chapter": "Phần III: Chăn nuôi",
            "summary": "Chăm sóc lợn nái sinh sản.",
            "questions": []
          },
          {
            "id": "congnghe-7-b14",
            "number": 14,
            "title": "Bài 14: Giới thiệu về thủy sản",
            "chapter": "Phần IV: Thủy sản",
            "summary": "Vai trò ngành thủy sản.",
            "questions": []
          },
          {
            "id": "congnghe-7-b15",
            "number": 15,
            "title": "Bài 15: Nuôi cá ao",
            "chapter": "Phần IV: Thủy sản",
            "summary": "Chuẩn bị ao nuôi, chọn giống và quản lí nước.",
            "questions": []
          },
          {
            "id": "congnghe-7-b16",
            "number": 16,
            "title": "Bài 16: Bảo vệ nguồn lợi thủy sản",
            "chapter": "Phần IV: Thủy sản",
            "summary": "Không dùng chất nổ, xung điện đánh bắt.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-7",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-7-b1",
            "number": 1,
            "title": "Unit 1: Hobbies",
            "chapter": "Unit 1: Hobbies",
            "summary": "Present Simple; love/like/enjoy/hate + V-ing.",
            "questions": []
          },
          {
            "id": "tienganh-7-b2",
            "number": 2,
            "title": "Unit 2: Healthy Living",
            "chapter": "Unit 2: Healthy Living",
            "summary": "Simple sentences.",
            "questions": []
          },
          {
            "id": "tienganh-7-b3",
            "number": 3,
            "title": "Unit 3: Community Service",
            "chapter": "Unit 3: Community Service",
            "summary": "Past Simple.",
            "questions": []
          },
          {
            "id": "tienganh-7-b4",
            "number": 4,
            "title": "Unit 4: Music and Arts",
            "chapter": "Unit 4: Music and Arts",
            "summary": "Comparisons: like, different from, (not) as...as.",
            "questions": []
          },
          {
            "id": "tienganh-7-b5",
            "number": 5,
            "title": "Unit 5: Food and Drink",
            "chapter": "Unit 5: Food and Drink",
            "summary": "some, a lot of, How many/How much.",
            "questions": []
          },
          {
            "id": "tienganh-7-b6",
            "number": 6,
            "title": "Unit 6: A Visit to a School",
            "chapter": "Unit 6: A Visit to a School",
            "summary": "Prepositions of time and place (in, on, at).",
            "questions": []
          },
          {
            "id": "tienganh-7-b7",
            "number": 7,
            "title": "Unit 7: Traffic",
            "chapter": "Unit 7: Traffic",
            "summary": "It indicating distance; should/shouldn't.",
            "questions": []
          },
          {
            "id": "tienganh-7-b8",
            "number": 8,
            "title": "Unit 8: Films",
            "chapter": "Unit 8: Films",
            "summary": "although/though, however.",
            "questions": []
          },
          {
            "id": "tienganh-7-b9",
            "number": 9,
            "title": "Unit 9: Festivals around the World",
            "chapter": "Unit 9: Festivals around the World",
            "summary": "Yes/No questions.",
            "questions": []
          },
          {
            "id": "tienganh-7-b10",
            "number": 10,
            "title": "Unit 10: Energy Sources",
            "chapter": "Unit 10: Energy Sources",
            "summary": "Present Continuous.",
            "questions": []
          },
          {
            "id": "tienganh-7-b11",
            "number": 11,
            "title": "Unit 11: Travelling in the Future",
            "chapter": "Unit 11: Travelling in the Future",
            "summary": "Future Simple (will) và possessive pronouns.",
            "questions": []
          },
          {
            "id": "tienganh-7-b12",
            "number": 12,
            "title": "Unit 12: English-speaking Countries",
            "chapter": "Unit 12: English-speaking Countries",
            "summary": "Articles a, an, the.",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-7",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-7-b1",
            "number": 1,
            "title": "Chủ đề 1: Âm nhạc và cuộc sống",
            "chapter": "Chủ đề 1: Âm nhạc và cuộc sống",
            "summary": "Hát Khai giảng; ôn tập đọc nhạc và kí hiệu âm nhạc cơ bản.",
            "questions": []
          },
          {
            "id": "amnhac-7-b2",
            "number": 2,
            "title": "Chủ đề 2: Khúc ca tình bạn",
            "chapter": "Chủ đề 2: Khúc ca tình bạn",
            "summary": "Hát Mái trường mến yêu; thực hành hát hai bè đơn giản.",
            "questions": []
          },
          {
            "id": "amnhac-7-b3",
            "number": 3,
            "title": "Chủ đề 3: Giai điệu bốn mùa",
            "chapter": "Chủ đề 3: Giai điệu bốn mùa",
            "summary": "Nghe nhạc Bốn mùa (Vivaldi); đọc nhạc nhịp 3/4.",
            "questions": []
          },
          {
            "id": "amnhac-7-b4",
            "number": 4,
            "title": "Chủ đề 4: Âm nhạc và truyền thống",
            "chapter": "Chủ đề 4: Âm nhạc và truyền thống",
            "summary": "Hát Nhớ ơn thầy cô; tìm hiểu nhạc cổ truyền Việt Nam.",
            "questions": []
          },
          {
            "id": "amnhac-7-b5",
            "number": 5,
            "title": "Chủ đề 5: Giai điệu quê hương",
            "chapter": "Chủ đề 5: Giai điệu quê hương",
            "summary": "Nghe và hát dân ca Trung Bộ, Nam Bộ; thực hành nhạc cụ.",
            "questions": []
          },
          {
            "id": "amnhac-7-b6",
            "number": 6,
            "title": "Chủ đề 6: Âm nhạc nước ngoài",
            "chapter": "Chủ đề 6: Âm nhạc nước ngoài",
            "summary": "Hát bài hát dân ca nước ngoài; phân biệt giọng trưởng, thứ.",
            "questions": []
          },
          {
            "id": "amnhac-7-b7",
            "number": 7,
            "title": "Chủ đề 7: Hướng tới tương lai",
            "chapter": "Chủ đề 7: Hướng tới tương lai",
            "summary": "Hát Tiến bước lên Đoàn; thực hành biểu diễn nhóm.",
            "questions": []
          },
          {
            "id": "amnhac-7-b8",
            "number": 8,
            "title": "Chủ đề 8: Vui bước tới trường",
            "chapter": "Chủ đề 8: Vui bước tới trường",
            "summary": "Ôn tập các bài hát, bài đọc nhạc và nhạc cụ cuối năm.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-7",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-7-b1",
            "number": 1,
            "title": "Chủ đề 1: Sự biểu cảm của sắc màu",
            "chapter": "Chủ đề 1: Sự biểu cảm của sắc màu",
            "summary": "Khai thác hòa sắc trong thể hiện cảm xúc bức tranh.",
            "questions": []
          },
          {
            "id": "mithuat-7-b2",
            "number": 2,
            "title": "Chủ đề 2: Nghệ thuật trung đại thế giới và Việt Nam",
            "chapter": "Chủ đề 2: Nghệ thuật trung đại",
            "summary": "Tìm hiểu kiến trúc, điêu khắc thời Lý - Trần và Phục hưng sơ kì.",
            "questions": []
          },
          {
            "id": "mithuat-7-b3",
            "number": 3,
            "title": "Chủ đề 3: Sáng tạo sản phẩm mĩ thuật từ vật liệu tái chế",
            "chapter": "Chủ đề 3: Vật liệu tái chế",
            "summary": "Thiết kế đồ dùng trang trí từ nhựa, giấy, kim loại phế liệu.",
            "questions": []
          },
          {
            "id": "mithuat-7-b4",
            "number": 4,
            "title": "Chủ đề 4: Âm nhạc và mĩ thuật",
            "chapter": "Chủ đề 4: Âm nhạc và mĩ thuật",
            "summary": "Chuyển hóa nhịp điệu, giai điệu âm nhạc thành bố cục tạo hình.",
            "questions": []
          },
          {
            "id": "mithuat-7-b5",
            "number": 5,
            "title": "Chủ đề 5: Nghệ thuật và thế giới tuổi teen",
            "chapter": "Chủ đề 5: Nghệ thuật vị thành niên",
            "summary": "Vẽ tranh, thiết kế nhân vật, truyện tranh ngắn.",
            "questions": []
          },
          {
            "id": "mithuat-7-b6",
            "number": 6,
            "title": "Chủ đề 6: Nghệ thuật đồ họa (Tranh in)",
            "chapter": "Chủ đề 6: Nghệ thuật đồ họa",
            "summary": "Thực hành kĩ thuật tranh in độc bản, in khắc xốp.",
            "questions": []
          },
          {
            "id": "mithuat-7-b7",
            "number": 7,
            "title": "Chủ đề 7: Thiết kế đồ họa (Biểu trưng, poster)",
            "chapter": "Chủ đề 7: Thiết kế đồ họa",
            "summary": "Thiết kế logo, poster tuyên truyền sự kiện trường học.",
            "questions": []
          },
          {
            "id": "mithuat-7-b8",
            "number": 8,
            "title": "Chủ đề 8: Nghệ thuật truyền thống Việt Nam",
            "chapter": "Chủ đề 8: Nghệ thuật truyền thống Việt Nam",
            "summary": "Nghiên cứu và ứng dụng họa tiết gốm, tranh dân gian.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-7",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-7-b1",
            "number": 1,
            "title": "Sử dụng các yếu tố tự nhiên trong luyện tập TDTT",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Ánh sáng, không khí, nước giúp tăng cường sức khỏe khi tập luyện.",
            "questions": []
          },
          {
            "id": "gdtc-7-b2",
            "number": 2,
            "title": "Chủ đề 1: Chạy cự li ngắn (60m)",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Xuất phát cao, chạy lao và chạy giữa quãng.",
            "questions": []
          },
          {
            "id": "gdtc-7-b3",
            "number": 3,
            "title": "Chủ đề 2: Nhảy xa / Nhảy cao",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Kĩ thuật chạy đà, giậm nhảy, trên không và tiếp đất an toàn.",
            "questions": []
          },
          {
            "id": "gdtc-7-b4",
            "number": 4,
            "title": "Chủ đề 3: Bài thể dục liên hoàn",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Hoàn thiện bài thể dục nhịp điệu phối hợp tay, chân, thân mình.",
            "questions": []
          },
          {
            "id": "gdtc-7-b5",
            "number": 5,
            "title": "Chủ đề 1: Bóng đá / Bóng rổ / Cầu lông",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Nâng cao kĩ thuật chuyền bóng, dẫn bóng hoặc đánh cầu trái tay.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-7",
        "name": "Hoạt động trải nghiệm, hướng nghiệp",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-7-b1",
            "number": 1,
            "title": "Chủ đề 1: Tự hào truyền thống trường em",
            "chapter": "Chủ đề 1: Tự hào truyền thống trường em",
            "summary": "Phát huy truyền thống nhà trường và rèn luyện kĩ năng hợp tác.",
            "questions": []
          },
          {
            "id": "hdtn-7-b2",
            "number": 2,
            "title": "Chủ đề 2: Rèn luyện thói quen và kiểm soát cảm xúc",
            "chapter": "Chủ đề 2: Rèn luyện thói quen tích cực",
            "summary": "Vượt qua khó khăn trong học tập và kiềm chế nóng giận.",
            "questions": []
          },
          {
            "id": "hdtn-7-b3",
            "number": 3,
            "title": "Chủ đề 3: Chăm sóc, bảo vệ cơ thể và an toàn",
            "chapter": "Chủ đề 3: Chăm sóc sức khỏe",
            "summary": "Vệ sinh cá nhân, phòng tránh tai nạn và xâm hại.",
            "questions": []
          },
          {
            "id": "hdtn-7-b4",
            "number": 4,
            "title": "Chủ đề 4: Chi tiêu hợp lí và tiết kiệm",
            "chapter": "Chủ đề 4: Quản lí tài chính cá nhân",
            "summary": "Lập kế hoạch thu chi cá nhân và tiết kiệm tiền tiêu vặt.",
            "questions": []
          },
          {
            "id": "hdtn-7-b5",
            "number": 5,
            "title": "Chủ đề 5: Gắn kết gia đình và tình bạn đẹp",
            "chapter": "Chủ đề 5: Xây dựng tình bạn và gia đình",
            "summary": "Ứng xử khéo léo với bạn bè, chia sẻ việc nhà với người thân.",
            "questions": []
          },
          {
            "id": "hdtn-7-b6",
            "number": 6,
            "title": "Chủ đề 6: Tham gia hoạt động cộng đồng",
            "chapter": "Chủ đề 6: Em với cộng đồng",
            "summary": "Giữ gìn văn hóa giao tiếp và tham gia dự án cộng đồng.",
            "questions": []
          },
          {
            "id": "hdtn-7-b7",
            "number": 7,
            "title": "Chủ đề 7: Giảm thiểu hiệu ứng nhà kính và bảo vệ thiên nhiên",
            "chapter": "Chủ đề 7: Bảo vệ môi trường",
            "summary": "Tuyên truyền bảo vệ nguồn nước, cây xanh địa phương.",
            "questions": []
          },
          {
            "id": "hdtn-7-b8",
            "number": 8,
            "title": "Chủ đề 8: Các nhóm nghề cơ bản ở địa phương",
            "chapter": "Chủ đề 8: Tìm hiểu nghề nghiệp",
            "summary": "Tìm hiểu đặc trưng, yêu cầu an toàn lao động của các nghề.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 8,
    "label": "Lớp 8",
    "level": "THCS",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=8",
    "subjects": [
      {
        "id": "toan-8",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-8-b1",
            "number": 1,
            "title": "Bài 1: Đơn thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Đơn thức thu gọn, bậc của đơn thức, cộng trừ đơn thức đồng dạng.",
            "questions": []
          },
          {
            "id": "toan-8-b2",
            "number": 2,
            "title": "Bài 2: Đa thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Đa thức nhiều biến, thu gọn và tìm bậc đa thức.",
            "questions": []
          },
          {
            "id": "toan-8-b3",
            "number": 3,
            "title": "Bài 3: Phép cộng và phép trừ đa thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Cộng, trừ hai đa thức nhiều biến.",
            "questions": []
          },
          {
            "id": "toan-8-b4",
            "number": 4,
            "title": "Bài 4: Phép nhân đa thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Nhân đơn thức với đa thức và đa thức với đa thức.",
            "questions": []
          },
          {
            "id": "toan-8-b5",
            "number": 5,
            "title": "Bài 5: Phép chia đa thức cho đơn thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Chia đa thức cho đơn thức.",
            "questions": []
          },
          {
            "id": "toan-8-b6",
            "number": 6,
            "title": "Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "a² - b² = (a-b)(a+b), (a±b)² = a² ± 2ab + b².",
            "questions": []
          },
          {
            "id": "toan-8-b7",
            "number": 7,
            "title": "Bài 7: Lập phương của một tổng hay một hiệu",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "(a±b)³ = a³ ± 3a²b + 3ab² ± b³.",
            "questions": []
          },
          {
            "id": "toan-8-b8",
            "number": 8,
            "title": "Bài 8: Tổng và hiệu hai lập phương",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "a³ ± b³ = (a±b)(a² ∓ ab + b²).",
            "questions": []
          },
          {
            "id": "toan-8-b9",
            "number": 9,
            "title": "Bài 9: Phân tích đa thức thành nhân tử",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "Đặt nhân tử chung, hằng đẳng thức, nhóm hạng tử.",
            "questions": []
          },
          {
            "id": "toan-8-b10",
            "number": 10,
            "title": "Bài 10: Tứ giác",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tổng 4 góc tứ giác bằng 360°.",
            "questions": []
          },
          {
            "id": "toan-8-b11",
            "number": 11,
            "title": "Bài 11: Hình thang cân",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tính chất và dấu hiệu nhận biết hình thang cân.",
            "questions": []
          },
          {
            "id": "toan-8-b12",
            "number": 12,
            "title": "Bài 12: Hình bình hành",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tính chất và dấu hiệu nhận biết hình bình hành.",
            "questions": []
          },
          {
            "id": "toan-8-b13",
            "number": 13,
            "title": "Bài 13: Hình chữ nhật",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tính chất đường chéo bằng nhau và dấu hiệu nhận biết.",
            "questions": []
          },
          {
            "id": "toan-8-b14",
            "number": 14,
            "title": "Bài 14: Hình thoi và hình vuông",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tính chất hai đường chéo vuông góc và phân giác.",
            "questions": []
          },
          {
            "id": "toan-8-b15",
            "number": 15,
            "title": "Bài 15: Định lí Thalès trong tam giác",
            "chapter": "Chương IV: Định lí Thalès",
            "summary": "Định lí Thalès thuận và đảo.",
            "questions": []
          },
          {
            "id": "toan-8-b16",
            "number": 16,
            "title": "Bài 16: Đường trung bình của tam giác",
            "chapter": "Chương IV: Định lí Thalès",
            "summary": "Song song và bằng nửa cạnh thứ ba.",
            "questions": []
          },
          {
            "id": "toan-8-b17",
            "number": 17,
            "title": "Bài 17: Tính chất đường phân giác của tam giác",
            "chapter": "Chương IV: Định lí Thalès",
            "summary": "Tỉ số hai đoạn thẳng trên cạnh đối diện.",
            "questions": []
          },
          {
            "id": "toan-8-b18",
            "number": 18,
            "title": "Bài 18: Thu thập và phân loại dữ liệu",
            "chapter": "Chương V: Dữ liệu và biểu đồ",
            "summary": "Dữ liệu định tính, định lượng, tính đại diện.",
            "questions": []
          },
          {
            "id": "toan-8-b19",
            "number": 19,
            "title": "Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ",
            "chapter": "Chương V: Dữ liệu và biểu đồ",
            "summary": "Lựa chọn biểu đồ phù hợp.",
            "questions": []
          },
          {
            "id": "toan-8-b20",
            "number": 20,
            "title": "Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ",
            "chapter": "Chương V: Dữ liệu và biểu đồ",
            "summary": "Nhận xét xu hướng và kết luận.",
            "questions": []
          },
          {
            "id": "toan-8-b21",
            "number": 21,
            "title": "Bài 21: Phân thức đại số",
            "chapter": "Chương VI: Phân thức đại số",
            "summary": "Điều kiện xác định và tính chất cơ bản.",
            "questions": []
          },
          {
            "id": "toan-8-b22",
            "number": 22,
            "title": "Bài 22: Tính chất cơ bản của phân thức đại số",
            "chapter": "Chương VI: Phân thức đại số",
            "summary": "Rút gọn và quy đồng mẫu thức.",
            "questions": []
          },
          {
            "id": "toan-8-b23",
            "number": 23,
            "title": "Bài 23: Phép cộng và phép trừ phân thức đại số",
            "chapter": "Chương VI: Phân thức đại số",
            "summary": "Cộng, trừ phân thức.",
            "questions": []
          },
          {
            "id": "toan-8-b24",
            "number": 24,
            "title": "Bài 24: Phép nhân và phép chia phân thức đại số",
            "chapter": "Chương VI: Phân thức đại số",
            "summary": "Nhân, chia phân thức.",
            "questions": []
          },
          {
            "id": "toan-8-b25",
            "number": 25,
            "title": "Bài 25: Phương trình bậc nhất một ẩn",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "Giải ax + b = 0 (a ≠ 0).",
            "questions": []
          },
          {
            "id": "toan-8-b26",
            "number": 26,
            "title": "Bài 26: Giải bài toán bằng cách lập phương trình",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "Các bước lập phương trình giải toán thực tế.",
            "questions": []
          },
          {
            "id": "toan-8-b27",
            "number": 27,
            "title": "Bài 27: Khái niệm hàm số và đồ thị của hàm số",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "Hệ trục tọa độ Oxy.",
            "questions": []
          },
          {
            "id": "toan-8-b28",
            "number": 28,
            "title": "Bài 28: Hàm số bậc nhất và đồ thị của hàm số bậc nhất",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "y = ax + b (a ≠ 0).",
            "questions": []
          },
          {
            "id": "toan-8-b29",
            "number": 29,
            "title": "Bài 29: Hệ số góc của đường thẳng",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "Hệ số góc a và hai đường thẳng song song/cắt nhau.",
            "questions": []
          },
          {
            "id": "toan-8-b30",
            "number": 30,
            "title": "Bài 30: Kết quả có thể và kết quả thuận lợi",
            "chapter": "Chương VIII: Mở đầu về tính xác suất của biến cố",
            "summary": "Đếm số kết quả thuận lợi.",
            "questions": []
          },
          {
            "id": "toan-8-b31",
            "number": 31,
            "title": "Bài 31: Cách tính xác suất của biến cố bằng tỉ số",
            "chapter": "Chương VIII: Mở đầu về tính xác suất của biến cố",
            "summary": "P(A) = n(A)/n(Ω).",
            "questions": []
          },
          {
            "id": "toan-8-b32",
            "number": 32,
            "title": "Bài 32: Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng",
            "chapter": "Chương VIII: Mở đầu về tính xác suất của biến cố",
            "summary": "Ước lượng xác suất thực tế.",
            "questions": []
          },
          {
            "id": "toan-8-b33",
            "number": 33,
            "title": "Bài 33: Hai tam giác đồng dạng",
            "chapter": "Chương IX: Tam giác đồng dạng",
            "summary": "Khái niệm và tính chất đồng dạng.",
            "questions": []
          },
          {
            "id": "toan-8-b34",
            "number": 34,
            "title": "Bài 34: Ba trường hợp đồng dạng của hai tam giác",
            "chapter": "Chương IX: Tam giác đồng dạng",
            "summary": "c.c.c, c.g.c, g.g.",
            "questions": []
          },
          {
            "id": "toan-8-b35",
            "number": 35,
            "title": "Bài 35: Định lí Pythagore và ứng dụng",
            "chapter": "Chương IX: Tam giác đồng dạng",
            "summary": "a² + b² = c² và định lí đảo.",
            "questions": []
          },
          {
            "id": "toan-8-b36",
            "number": 36,
            "title": "Bài 36: Các trường hợp đồng dạng của hai tam giác vuông",
            "chapter": "Chương IX: Tam giác đồng dạng",
            "summary": "Cạnh huyền - cạnh góc vuông, góc nhọn.",
            "questions": []
          },
          {
            "id": "toan-8-b37",
            "number": 37,
            "title": "Bài 37: Hình đồng dạng",
            "chapter": "Chương IX: Tam giác đồng dạng",
            "summary": "Hình đồng dạng phối cảnh và ứng dụng.",
            "questions": []
          },
          {
            "id": "toan-8-b38",
            "number": 38,
            "title": "Bài 38: Hình chóp tam giác đều",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh và thể tích V = 1/3·S_đáy·h.",
            "questions": []
          },
          {
            "id": "toan-8-b39",
            "number": 39,
            "title": "Bài 39: Hình chóp tứ giác đều",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh và thể tích hình chóp tứ giác đều.",
            "questions": []
          }
        ]
      },
      {
        "id": "khtn-8",
        "name": "Khoa học tự nhiên",
        "icon": "🔬",
        "lessons": [
          {
            "id": "khtn-8-b1",
            "number": 1,
            "title": "Bài 1: Sử dụng một số hóa chất, thiết bị cơ bản trong phòng thí nghiệm",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "An toàn hóa chất và dụng cụ đo lường.",
            "questions": []
          },
          {
            "id": "khtn-8-b2",
            "number": 2,
            "title": "Bài 2: Phản ứng hóa học",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Biến đổi vật lí và biến đổi hóa học.",
            "questions": []
          },
          {
            "id": "khtn-8-b3",
            "number": 3,
            "title": "Bài 3: Mol và tỉ khối chất khí",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Số Avogadro, khối lượng mol, V_khí ở ĐKC (24,79 lít), tỉ khối.",
            "questions": []
          },
          {
            "id": "khtn-8-b4",
            "number": 4,
            "title": "Bài 4: Dung dịch và nồng độ",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Độ tan, C% và C_M.",
            "questions": []
          },
          {
            "id": "khtn-8-b5",
            "number": 5,
            "title": "Bài 5: Định luật bảo toàn khối lượng và phương trình hóa học",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Bảo toàn khối lượng và cân bằng PTHH.",
            "questions": []
          },
          {
            "id": "khtn-8-b6",
            "number": 6,
            "title": "Bài 6: Tính theo phương trình hóa học",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Tính lượng chất và hiệu suất phản ứng.",
            "questions": []
          },
          {
            "id": "khtn-8-b7",
            "number": 7,
            "title": "Bài 7: Tốc độ phản ứng và chất xúc tác",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Nồng độ, nhiệt độ, diện tích bề mặt, xúc tác.",
            "questions": []
          },
          {
            "id": "khtn-8-b8",
            "number": 8,
            "title": "Bài 8: Acid",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Khái niệm acid (H+), tính chất hóa học của acid.",
            "questions": []
          },
          {
            "id": "khtn-8-b9",
            "number": 9,
            "title": "Bài 9: Base. Thang pH",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Base (OH-), kiềm và thang pH.",
            "questions": []
          },
          {
            "id": "khtn-8-b10",
            "number": 10,
            "title": "Bài 10: Oxide",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Phân loại 4 loại oxide và tính chất.",
            "questions": []
          },
          {
            "id": "khtn-8-b11",
            "number": 11,
            "title": "Bài 11: Muối",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Tính chất hóa học của muối và phản ứng trao đổi.",
            "questions": []
          },
          {
            "id": "khtn-8-b12",
            "number": 12,
            "title": "Bài 12: Phân bón hóa học",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Đạm, lân, kali và NPK.",
            "questions": []
          },
          {
            "id": "khtn-8-b13",
            "number": 13,
            "title": "Bài 13: Khối lượng riêng",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "D = m/V.",
            "questions": []
          },
          {
            "id": "khtn-8-b14",
            "number": 14,
            "title": "Bài 14: Thực hành xác định khối lượng riêng",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "Đo khối lượng và thể tích xác định D.",
            "questions": []
          },
          {
            "id": "khtn-8-b15",
            "number": 15,
            "title": "Bài 15: Áp suất trên một bề mặt",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "p = F/S (Pa).",
            "questions": []
          },
          {
            "id": "khtn-8-b16",
            "number": 16,
            "title": "Bài 16: Áp suất chất lỏng. Áp suất khí quyển",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "Áp suất chất lỏng và bình thông nhau.",
            "questions": []
          },
          {
            "id": "khtn-8-b17",
            "number": 17,
            "title": "Bài 17: Lực đẩy Archimedes",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "F_A = d·V.",
            "questions": []
          },
          {
            "id": "khtn-8-b18",
            "number": 18,
            "title": "Bài 18: Tác dụng làm quay của lực. Moment lực",
            "chapter": "Chương IV: Tác dụng làm quay của lực",
            "summary": "Moment lực và cánh tay đòn.",
            "questions": []
          },
          {
            "id": "khtn-8-b19",
            "number": 19,
            "title": "Bài 19: Đòn bẩy và ứng dụng",
            "chapter": "Chương IV: Tác dụng làm quay của lực",
            "summary": "Cấu tạo và phân loại đòn bẩy.",
            "questions": []
          },
          {
            "id": "khtn-8-b20",
            "number": 20,
            "title": "Bài 20: Hiện tượng nhiễm điện do cọ xát",
            "chapter": "Chương V: Điện",
            "summary": "Hai loại điện tích (+, -).",
            "questions": []
          },
          {
            "id": "khtn-8-b21",
            "number": 21,
            "title": "Bài 21: Dòng điện, nguồn điện",
            "chapter": "Chương V: Điện",
            "summary": "Vật dẫn điện và vật cách điện.",
            "questions": []
          },
          {
            "id": "khtn-8-b22",
            "number": 22,
            "title": "Bài 22: Mạch điện đơn giản",
            "chapter": "Chương V: Điện",
            "summary": "Sơ đồ mạch điện và thiết bị an toàn.",
            "questions": []
          },
          {
            "id": "khtn-8-b23",
            "number": 23,
            "title": "Bài 23: Tác dụng của dòng điện",
            "chapter": "Chương V: Điện",
            "summary": "Tác dụng nhiệt, phát sáng, hóa học, sinh lí.",
            "questions": []
          },
          {
            "id": "khtn-8-b24",
            "number": 24,
            "title": "Bài 24: Cường độ dòng điện và hiệu điện thế",
            "chapter": "Chương V: Điện",
            "summary": "Ampe kế và vôn kế.",
            "questions": []
          },
          {
            "id": "khtn-8-b25",
            "number": 25,
            "title": "Bài 25: Thực hành đo cường độ dòng điện và hiệu điện thế",
            "chapter": "Chương V: Điện",
            "summary": "Đo I và U trong mạch.",
            "questions": []
          },
          {
            "id": "khtn-8-b26",
            "number": 26,
            "title": "Bài 26: Năng lượng nhiệt và nội năng",
            "chapter": "Chương VI: Nhiệt",
            "summary": "Chuyển động nhiệt và nội năng.",
            "questions": []
          },
          {
            "id": "khtn-8-b27",
            "number": 27,
            "title": "Bài 27: Thực hành đo năng lượng nhiệt bằng joulemeter",
            "chapter": "Chương VI: Nhiệt",
            "summary": "Đo nhiệt lượng.",
            "questions": []
          },
          {
            "id": "khtn-8-b28",
            "number": 28,
            "title": "Bài 28: Sự truyền nhiệt",
            "chapter": "Chương VI: Nhiệt",
            "summary": "Dẫn nhiệt, đối lưu, bức xạ nhiệt.",
            "questions": []
          },
          {
            "id": "khtn-8-b29",
            "number": 29,
            "title": "Bài 29: Sự nở vì nhiệt",
            "chapter": "Chương VI: Nhiệt",
            "summary": "Nở vì nhiệt của chất rắn, lỏng, khí.",
            "questions": []
          },
          {
            "id": "khtn-8-b30",
            "number": 30,
            "title": "Bài 30: Khái quát về cơ thể người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Các hệ cơ quan trong cơ thể người.",
            "questions": []
          },
          {
            "id": "khtn-8-b31",
            "number": 31,
            "title": "Bài 31: Hệ vận động ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Bộ xương, cơ và phòng cong vẹo cột sống.",
            "questions": []
          },
          {
            "id": "khtn-8-b32",
            "number": 32,
            "title": "Bài 32: Dinh dưỡng và tiêu hóa ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Quá trình tiêu hóa và hấp thụ chất dinh dưỡng.",
            "questions": []
          },
          {
            "id": "khtn-8-b33",
            "number": 33,
            "title": "Bài 33: Máu và hệ tuần hoàn của cơ thể người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Thành phần máu, nhóm máu ABO, vòng tuần hoàn.",
            "questions": []
          },
          {
            "id": "khtn-8-b34",
            "number": 34,
            "title": "Bài 34: Hệ hô hấp ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Đường dẫn khí và trao đổi khí ở phế nang.",
            "questions": []
          },
          {
            "id": "khtn-8-b35",
            "number": 35,
            "title": "Bài 35: Hệ bài tiết ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Thận và lọc máu tạo nước tiểu.",
            "questions": []
          },
          {
            "id": "khtn-8-b36",
            "number": 36,
            "title": "Bài 36: Điều hòa môi trường trong của cơ thể người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Cân bằng nội môi.",
            "questions": []
          },
          {
            "id": "khtn-8-b37",
            "number": 37,
            "title": "Bài 37: Hệ thần kinh và các giác quan ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Não, tủy sống, mắt, tai.",
            "questions": []
          },
          {
            "id": "khtn-8-b38",
            "number": 38,
            "title": "Bài 38: Hệ nội tiết ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Các tuyến nội tiết và hormone.",
            "questions": []
          },
          {
            "id": "khtn-8-b39",
            "number": 39,
            "title": "Bài 39: Da và điều hòa thân nhiệt ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Cấu tạo da và giữ thân nhiệt ổn định.",
            "questions": []
          },
          {
            "id": "khtn-8-b40",
            "number": 40,
            "title": "Bài 40: Sinh sản ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Thụ tinh, mang thai và bảo vệ sức khỏe sinh sản.",
            "questions": []
          },
          {
            "id": "khtn-8-b41",
            "number": 41,
            "title": "Bài 41: Môi trường và các nhân tố sinh thái",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Nhân tố vô sinh và hữu sinh.",
            "questions": []
          },
          {
            "id": "khtn-8-b42",
            "number": 42,
            "title": "Bài 42: Quần thể sinh vật",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Mật độ, tỉ lệ giới tính, nhóm tuổi.",
            "questions": []
          },
          {
            "id": "khtn-8-b43",
            "number": 43,
            "title": "Bài 43: Quần xã sinh vật",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Độ đa dạng và loài ưu thế.",
            "questions": []
          },
          {
            "id": "khtn-8-b44",
            "number": 44,
            "title": "Bài 44: Hệ sinh thái",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Chuỗi thức ăn và lưới thức ăn.",
            "questions": []
          },
          {
            "id": "khtn-8-b45",
            "number": 45,
            "title": "Bài 45: Sinh quyển",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Các khu sinh học trên Trái Đất.",
            "questions": []
          },
          {
            "id": "khtn-8-b46",
            "number": 46,
            "title": "Bài 46: Cân bằng tự nhiên",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Ý nghĩa cân bằng sinh thái.",
            "questions": []
          },
          {
            "id": "khtn-8-b47",
            "number": 47,
            "title": "Bài 47: Bảo vệ môi trường",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Biến đổi khí hậu và bảo vệ thiên nhiên.",
            "questions": []
          }
        ]
      },
      {
        "id": "nguvan-8",
        "name": "Ngữ văn",
        "icon": "📖",
        "lessons": [
          {
            "id": "nguvan-8-b1",
            "number": 1,
            "title": "Bài 1: Câu chuyện của lịch sử (Lá cờ thêu sáu chữ vàng, Quang Trung đại phá quân Thanh)",
            "chapter": "Tập 1 - Bài 1: Câu chuyện của lịch sử",
            "summary": "Đặc trưng truyện lịch sử và thực hành từ Hán Việt.",
            "questions": []
          },
          {
            "id": "nguvan-8-b2",
            "number": 2,
            "title": "Bài 2: Vẻ đẹp cổ điển (Thu điếu, Thiên Trường vãn vọng, Ca Huế trên sông Hương)",
            "chapter": "Tập 1 - Bài 2: Vẻ đẹp cổ điển",
            "summary": "Thơ thất ngôn bát cú và thất ngôn tứ tuyệt Đường luật.",
            "questions": []
          },
          {
            "id": "nguvan-8-b3",
            "number": 3,
            "title": "Bài 3: Lời sông núi (Hịch tướng sĩ, Tinh thần yêu nước của nhân dân ta, Nam quốc sơn hà)",
            "chapter": "Tập 1 - Bài 3: Lời sông núi",
            "summary": "Nghệ thuật lập luận chặt chẽ, hào hùng trong văn nghị luận trung đại và hiện đại.",
            "questions": []
          },
          {
            "id": "nguvan-8-b4",
            "number": 4,
            "title": "Bài 4: Tiếng cười trào phúng trong thơ (Lễ xướng danh khoa Đinh Dậu, Lai Tân)",
            "chapter": "Tập 1 - Bài 4: Tiếng cười trào phúng trong thơ",
            "summary": "Thủ pháp trào phúng của Tú Xương, Hồ Chí Minh và thực hành tiếng Việt.",
            "questions": []
          },
          {
            "id": "nguvan-8-b5",
            "number": 5,
            "title": "Bài 5: Những câu chuyện hài (Trưởng giả học làm sang, Chùm truyện cười dân gian)",
            "chapter": "Tập 1 - Bài 5: Những câu chuyện hài",
            "summary": "Xung đột hài kịch Mô-li-e và nghệ thuật gây cười dân gian.",
            "questions": []
          },
          {
            "id": "nguvan-8-b6",
            "number": 6,
            "title": "Bài 6: Chân dung cuộc sống (Mắt sói, Lặng lẽ Sa Pa, Bếp lửa)",
            "chapter": "Tập 2 - Bài 6: Chân dung cuộc sống",
            "summary": "Vẻ đẹp tâm hồn con người lao động và tình cảm gia đình.",
            "questions": []
          },
          {
            "id": "nguvan-8-b7",
            "number": 7,
            "title": "Bài 7: Tin yêu và ước vọng (Đồng dao mùa xuân, Gió lạnh đầu mùa, Con đường tôi đi)",
            "chapter": "Tập 2 - Bài 7: Tin yêu và ước vọng",
            "summary": "Thơ tự do và truyện ngắn Thạch Lam.",
            "questions": []
          },
          {
            "id": "nguvan-8-b8",
            "number": 8,
            "title": "Bài 8: Nhà văn và trang viết (Nhà thơ của quê hương làng cảnh Việt Nam, Đọc văn - cuộc chơi tìm ý nghĩa)",
            "chapter": "Tập 2 - Bài 8: Nhà văn và trang viết",
            "summary": "Nghị luận văn học phân tích cái hay, cái đẹp của tác phẩm.",
            "questions": []
          },
          {
            "id": "nguvan-8-b9",
            "number": 9,
            "title": "Bài 9: Hôm nay và ngày mai (Miền châu thổ sông Cửu Long cần chuyển đổi từ sống chung sang thích ứng, Choáng ngợp và đau đớn những cảnh báo từ loạt phim Hành tinh của chúng ta)",
            "chapter": "Tập 2 - Bài 9: Hôm nay và ngày mai",
            "summary": "Văn bản thông tin giải thích hiện tượng tự nhiên và bảo vệ môi trường.",
            "questions": []
          },
          {
            "id": "nguvan-8-b10",
            "number": 10,
            "title": "Bài 10: Sách – người bạn đồng hành (Thách thức đọc sách, Giới thiệu cuốn sách yêu thích)",
            "chapter": "Tập 2 - Bài 10: Sách – người bạn đồng hành",
            "summary": "Phương pháp đọc sách hiệu quả và viết bài giới thiệu sách.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-diali-8",
        "name": "Lịch sử và Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "lichsu-diali-8-b1",
            "number": 1,
            "title": "Bài 1: Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ",
            "chapter": "Lịch sử - Chương 1: Châu Âu và Bắc Mỹ (TK XVI–XVIII)",
            "summary": "Nguyên nhân, diễn biến và ý nghĩa cách mạng tư sản Anh 1640 và Mỹ 1776.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b2",
            "number": 2,
            "title": "Bài 2: Cách mạng tư sản Pháp cuối thế kỉ XVIII",
            "chapter": "Lịch sử - Chương 1: Châu Âu và Bắc Mỹ (TK XVI–XVIII)",
            "summary": "Sự kiện 14/7/1789, Tuyên ngôn Nhân quyền và Dân quyền.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b3",
            "number": 3,
            "title": "Bài 3: Cách mạng công nghiệp (nửa sau TK XVIII – giữa TK XIX)",
            "chapter": "Lịch sử - Chương 1: Châu Âu và Bắc Mỹ (TK XVI–XVIII)",
            "summary": "Máy hơi nước Giêm Oát và tác động kinh tế - xã hội.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b4",
            "number": 4,
            "title": "Bài 4: Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX",
            "chapter": "Lịch sử - Chương 2: Đông Nam Á (TK XVI–XIX)",
            "summary": "Quá trình xâm nhập của tư bản phương Tây vào Đông Nam Á.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b5",
            "number": 5,
            "title": "Bài 5: Cuộc xung đột Nam – Bắc triều và Trịnh – Nguyễn",
            "chapter": "Lịch sử - Chương 3: Việt Nam (TK XVI–XVIII)",
            "summary": "Sự chia cắt Đàng Trong - Đàng Ngoài.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b6",
            "number": 6,
            "title": "Bài 6: Công cuộc khai phá vùng đất phía Nam và thực thi chủ quyền Hoàng Sa, Trường Sa",
            "chapter": "Lịch sử - Chương 3: Việt Nam (TK XVI–XVIII)",
            "summary": "Chúa Nguyễn mở cõi Nam Bộ và đội Hoàng Sa, Bắc Hải.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b7",
            "number": 7,
            "title": "Bài 7: Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII",
            "chapter": "Lịch sử - Chương 3: Việt Nam (TK XVI–XVIII)",
            "summary": "Khởi nghĩa Nguyễn Hữu Cầu, Hoàng Công Chất.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b8",
            "number": 8,
            "title": "Bài 8: Phong trào Tây Sơn",
            "chapter": "Lịch sử - Chương 3: Việt Nam (TK XVI–XVIII)",
            "summary": "Quang Trung - Nguyễn Huệ đánh tan quân Xiêm (Rạch Gầm-Xoài Mút) và quân Thanh (Ngọc Hồi-Đống Đa).",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b9",
            "number": 9,
            "title": "Bài 9: Tình hình kinh tế, văn hoá, tôn giáo trong các thế kỉ XVI – XVIII",
            "chapter": "Lịch sử - Chương 3: Việt Nam (TK XVI–XVIII)",
            "summary": "Phố Hiến, Hội An, chữ Quốc ngữ và văn học dân gian.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b10",
            "number": 10,
            "title": "Bài 10: Sự hình thành của chủ nghĩa đế quốc ở các nước Âu – Mỹ",
            "chapter": "Lịch sử - Chương 4: Châu Âu và nước Mỹ (cuối TK XVIII – đầu TK XX)",
            "summary": "Công nghiệp hóa và chuyển sang chủ nghĩa đế quốc.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b11",
            "number": 11,
            "title": "Bài 11: Phong trào công nhân và sự ra đời của chủ nghĩa xã hội khoa học",
            "chapter": "Lịch sử - Chương 4: Châu Âu và nước Mỹ (cuối TK XVIII – đầu TK XX)",
            "summary": "C. Mác, Ph. Ăng-ghen, Công xã Pa-ri 1871.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b12",
            "number": 12,
            "title": "Bài 12: Chiến tranh thế giới thứ nhất (1914 – 1918) và Cách mạng tháng Mười Nga năm 1917",
            "chapter": "Lịch sử - Chương 4: Châu Âu và nước Mỹ (cuối TK XVIII – đầu TK XX)",
            "summary": "Nguyên nhân, kết cục Thế chiến I và thắng lợi Cách mạng tháng Mười Nga.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b13",
            "number": 13,
            "title": "Bài 13: Sự phát triển của khoa học, kĩ thuật, văn học, nghệ thuật trong các thế kỉ XVIII – XIX",
            "chapter": "Lịch sử - Chương 5: Khoa học, kĩ thuật, văn học, nghệ thuật (TK XVIII–XIX)",
            "summary": "Đác-uyn, Men-đê-lê-ép, Bét-tô-ven, Tôn-xtôi.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b14",
            "number": 14,
            "title": "Bài 14: Trung Quốc và Nhật Bản từ nửa sau thế kỉ XIX đến đầu thế kỉ XX",
            "chapter": "Lịch sử - Chương 6: Châu Á (nửa sau TK XIX – đầu TK XX)",
            "summary": "Cách mạng Tân Hợi 1911 và Duy tân Minh Trị 1868.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b15",
            "number": 15,
            "title": "Bài 15: Ấn Độ và Đông Nam Á từ nửa sau thế kỉ XIX đến đầu thế kỉ XX",
            "chapter": "Lịch sử - Chương 6: Châu Á (nửa sau TK XIX – đầu TK XX)",
            "summary": "Phong trào giải phóng dân tộc ở Ấn Độ và Đông Nam Á.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b16",
            "number": 16,
            "title": "Bài 16: Việt Nam dưới thời Nguyễn (nửa đầu thế kỉ XIX)",
            "chapter": "Lịch sử - Chương 7: Việt Nam (TK XIX – đầu TK XX)",
            "summary": "Nhà Nguyễn thành lập (1802), cải cách Minh Mạng và văn hóa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b17",
            "number": 17,
            "title": "Bài 17: Cuộc kháng chiến chống thực dân Pháp xâm lược ở Việt Nam (1858 – 1884)",
            "chapter": "Lịch sử - Chương 7: Việt Nam (TK XIX – đầu TK XX)",
            "summary": "Pháp đánh Đà Nẵng 1858 và các hiệp ước 1862, 1874, 1883, 1884.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b18",
            "number": 18,
            "title": "Bài 18: Phong trào yêu nước chống Pháp ở Việt Nam từ đầu thế kỉ XX đến năm 1914",
            "chapter": "Lịch sử - Chương 7: Việt Nam (TK XIX – đầu TK XX)",
            "summary": "Phong trào Cần Vương, Yên Thế, Phan Bội Châu, Phan Châu Trinh, Nguyễn Tất Thành ra đi tìm đường cứu nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b19",
            "number": 19,
            "title": "Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
            "chapter": "Địa lí - Chương 1: Vị trí, địa hình, khoáng sản Việt Nam",
            "summary": "Tọa độ cực Bắc-Nam-Đông-Tây, diện tích đất liền và vùng biển.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b20",
            "number": 20,
            "title": "Bài 2: Địa hình Việt Nam",
            "chapter": "Địa lí - Chương 1: Vị trí, địa hình, khoáng sản Việt Nam",
            "summary": "Đồi núi chiếm 3/4 diện tích, đồng bằng 1/4; hướng Tây Bắc-Đông Nam và vòng cung.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b21",
            "number": 21,
            "title": "Bài 3: Khoáng sản Việt Nam",
            "chapter": "Địa lí - Chương 1: Vị trí, địa hình, khoáng sản Việt Nam",
            "summary": "Than (Quảng Ninh), dầu khí (thềm lục địa), bô-xít (Tây Nguyên).",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b22",
            "number": 22,
            "title": "Bài 4: Khí hậu Việt Nam",
            "chapter": "Địa lí - Chương 2: Khí hậu và thủy văn Việt Nam",
            "summary": "Nhiệt đới ẩm gió mùa, phân hóa Bắc-Nam, Đông-Tây và theo độ cao.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b23",
            "number": 23,
            "title": "Bài 5: Thực hành: Vẽ và phân tích biểu đồ khí hậu",
            "chapter": "Địa lí - Chương 2: Khí hậu và thủy văn Việt Nam",
            "summary": "Phân tích biểu đồ nhiệt độ và lượng mưa các trạm khí tượng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b24",
            "number": 24,
            "title": "Bài 6: Thuỷ văn Việt Nam",
            "chapter": "Địa lí - Chương 2: Khí hậu và thủy văn Việt Nam",
            "summary": "Mạng lưới sông ngòi dày đặc (hệ thống sông Hồng, Mê Kông) và hồ, nước ngầm.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b25",
            "number": 25,
            "title": "Bài 7: Tác động của biến đổi khí hậu đối với khí hậu và thủy văn Việt Nam",
            "chapter": "Địa lí - Chương 2: Khí hậu và thủy văn Việt Nam",
            "summary": "Nước biển dâng, hạn hán, bão lũ và giải pháp ứng phó.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b26",
            "number": 26,
            "title": "Bài 8: Thổ nhưỡng Việt Nam",
            "chapter": "Địa lí - Chương 3: Thổ nhưỡng và sinh vật Việt Nam",
            "summary": "Đất feralit vùng đồi núi, đất phù sa đồng bằng và đất mặn, phèn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b27",
            "number": 27,
            "title": "Bài 9: Sinh vật Việt Nam",
            "chapter": "Địa lí - Chương 3: Thổ nhưỡng và sinh vật Việt Nam",
            "summary": "Tính đa dạng sinh học cao và biện pháp bảo tồn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b28",
            "number": 28,
            "title": "Bài 10: Biển đảo Việt Nam",
            "chapter": "Địa lí - Chương 4: Biển đảo Việt Nam",
            "summary": "Vị trí Biển Đông, 1 triệu km² vùng biển và hai quần đảo Hoàng Sa, Trường Sa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b29",
            "number": 29,
            "title": "Bài 11: Môi trường và tài nguyên biển đảo Việt Nam",
            "chapter": "Địa lí - Chương 4: Biển đảo Việt Nam",
            "summary": "Khai thác bền vững thủy sản, dầu khí, du lịch và bảo vệ môi trường biển.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b30",
            "number": 30,
            "title": "Chủ đề chung 1: Văn minh châu thổ sông Hồng và sông Cửu Long",
            "chapter": "Chủ đề chung",
            "summary": "Quá trình hình thành và phát triển văn minh lúa nước ở hai đồng bằng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b31",
            "number": 31,
            "title": "Chủ đề chung 2: Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
            "chapter": "Chủ đề chung",
            "summary": "Cơ sở lịch sử và pháp lí (UNCLOS 1982) khẳng định chủ quyền biển đảo.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdcd-8",
        "name": "Giáo dục công dân",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "gdcd-8-b1",
            "number": 1,
            "title": "Bài 1: Tự hào về truyền thống dân tộc Việt Nam",
            "chapter": "Giáo dục công dân 8",
            "summary": "Truyền thống yêu nước, hiếu học, nhân ái.",
            "questions": []
          },
          {
            "id": "gdcd-8-b2",
            "number": 2,
            "title": "Bài 2: Tôn trọng sự đa dạng của các dân tộc",
            "chapter": "Giáo dục công dân 8",
            "summary": "Tôn trọng văn hóa, phong tục các dân tộc.",
            "questions": []
          },
          {
            "id": "gdcd-8-b3",
            "number": 3,
            "title": "Bài 3: Lao động cần cù, sáng tạo",
            "chapter": "Giáo dục công dân 8",
            "summary": "Ý nghĩa của lao động cần cù, sáng tạo.",
            "questions": []
          },
          {
            "id": "gdcd-8-b4",
            "number": 4,
            "title": "Bài 4: Bảo vệ lẽ phải",
            "chapter": "Giáo dục công dân 8",
            "summary": "Tôn trọng và bảo vệ điều đúng đắn.",
            "questions": []
          },
          {
            "id": "gdcd-8-b5",
            "number": 5,
            "title": "Bài 5: Bảo vệ môi trường và tài nguyên thiên nhiên",
            "chapter": "Giáo dục công dân 8",
            "summary": "Trách nhiệm bảo vệ môi trường.",
            "questions": []
          },
          {
            "id": "gdcd-8-b6",
            "number": 6,
            "title": "Bài 6: Xác định mục tiêu cá nhân",
            "chapter": "Giáo dục công dân 8",
            "summary": "Đặt mục tiêu ngắn hạn, dài hạn.",
            "questions": []
          },
          {
            "id": "gdcd-8-b7",
            "number": 7,
            "title": "Bài 7: Phòng, chống bạo lực gia đình",
            "chapter": "Giáo dục công dân 8",
            "summary": "Nhận biết hành vi và cách phòng chống bạo lực gia đình.",
            "questions": []
          },
          {
            "id": "gdcd-8-b8",
            "number": 8,
            "title": "Bài 8: Lập kế hoạch chi tiêu",
            "chapter": "Giáo dục công dân 8",
            "summary": "Cân đối thu chi cá nhân.",
            "questions": []
          },
          {
            "id": "gdcd-8-b9",
            "number": 9,
            "title": "Bài 9: Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại",
            "chapter": "Giáo dục công dân 8",
            "summary": "Quy định an toàn phòng chống cháy nổ, chất độc.",
            "questions": []
          },
          {
            "id": "gdcd-8-b10",
            "number": 10,
            "title": "Bài 10: Quyền và nghĩa vụ lao động của công dân",
            "chapter": "Giáo dục công dân 8",
            "summary": "Quy định pháp luật về lao động chưa thành niên.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-8",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-8-b1",
            "number": 1,
            "title": "Bài 1: Lược sử công cụ tính toán",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Từ bàn tính cổ đến máy tính điện tử hiện đại.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b2",
            "number": 2,
            "title": "Bài 2: Thông tin trong môi trường số",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Đặc điểm thông tin số: đa dạng, dễ sao chép, lan truyền nhanh.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b3",
            "number": 3,
            "title": "Bài 3: Thực hành: Khai thác thông tin số",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Đánh giá độ tin cậy của thông tin số.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b4",
            "number": 4,
            "title": "Bài 4: Đạo đức và văn hóa trong sử dụng công nghệ kĩ thuật số",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Tôn trọng bản quyền và ứng xử văn minh.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b5",
            "number": 5,
            "title": "Bài 5: Sử dụng bảng tính giải quyết bài toán thực tế",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Địa chỉ tương đối và địa chỉ tuyệt đối ($A$1).",
            "questions": []
          },
          {
            "id": "tinhoc-8-b6",
            "number": 6,
            "title": "Bài 6: Sắp xếp và lọc dữ liệu",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Sắp xếp tăng/giảm và lọc dữ liệu bảng tính.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b7",
            "number": 7,
            "title": "Bài 7: Trực quan hóa dữ liệu",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Tạo biểu đồ cột, đường, tròn trong bảng tính.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b8",
            "number": 8,
            "title": "Bài 8a: Làm việc với danh sách dạng liệt kê và hình ảnh trong văn bản",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Bullets, numbering và chèn ảnh.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b9",
            "number": 9,
            "title": "Bài 9a: Tạo đầu trang, chân trang cho văn bản",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Header, Footer và đánh số trang.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b10",
            "number": 10,
            "title": "Bài 10a: Định dạng nâng cao cho trang chiếu",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Chèn đa phương tiện và siêu liên kết.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b11",
            "number": 11,
            "title": "Bài 11a: Sử dụng bản mẫu tạo bài trình chiếu",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Sử dụng template trình chiếu.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b12",
            "number": 12,
            "title": "Bài 12: Từ thuật toán đến chương trình",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Biến, hằng, phép toán trong lập trình.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b13",
            "number": 13,
            "title": "Bài 13: Biểu diễn dữ liệu",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Kiểu dữ liệu số, xâu kí tự, logic.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b14",
            "number": 14,
            "title": "Bài 14: Cấu trúc điều khiển",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Rẽ nhánh và vòng lặp có điều kiện.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b15",
            "number": 15,
            "title": "Bài 15: Gỡ lỗi",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Tìm và sửa lỗi chương trình.",
            "questions": []
          },
          {
            "id": "tinhoc-8-b16",
            "number": 16,
            "title": "Bài 16: Tin học với nghề nghiệp",
            "chapter": "Chủ đề 6: Hướng nghiệp với Tin học",
            "summary": "Ngành nghề ứng dụng tin học.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-8",
        "name": "Công nghệ",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-8-b1",
            "number": 1,
            "title": "Bài 1: Một số tiêu chuẩn trình bày bản vẽ kĩ thuật",
            "chapter": "Chương I: Vẽ kĩ thuật",
            "summary": "Khổ giấy, tỉ lệ, nét vẽ, ghi kích thước.",
            "questions": []
          },
          {
            "id": "congnghe-8-b2",
            "number": 2,
            "title": "Bài 2: Hình chiếu vuông góc",
            "chapter": "Chương I: Vẽ kĩ thuật",
            "summary": "Hình chiếu đứng, bằng, cạnh.",
            "questions": []
          },
          {
            "id": "congnghe-8-b3",
            "number": 3,
            "title": "Bài 3: Bản vẽ chi tiết",
            "chapter": "Chương I: Vẽ kĩ thuật",
            "summary": "Đọc bản vẽ chi tiết đơn giản.",
            "questions": []
          },
          {
            "id": "congnghe-8-b4",
            "number": 4,
            "title": "Bài 4: Bản vẽ lắp",
            "chapter": "Chương I: Vẽ kĩ thuật",
            "summary": "Nội dung bản vẽ lắp.",
            "questions": []
          },
          {
            "id": "congnghe-8-b5",
            "number": 5,
            "title": "Bài 5: Bản vẽ nhà",
            "chapter": "Chương I: Vẽ kĩ thuật",
            "summary": "Mặt bằng, mặt đứng, mặt cắt bản vẽ nhà.",
            "questions": []
          },
          {
            "id": "congnghe-8-b6",
            "number": 6,
            "title": "Bài 6: Vật liệu cơ khí",
            "chapter": "Chương II: Cơ khí",
            "summary": "Kim loại đen, kim loại màu, phi kim loại.",
            "questions": []
          },
          {
            "id": "congnghe-8-b7",
            "number": 7,
            "title": "Bài 7: Gia công cơ khí bằng tay",
            "chapter": "Chương II: Cơ khí",
            "summary": "Đo vạch dấu, cưa, đục, dũa, khoan.",
            "questions": []
          },
          {
            "id": "congnghe-8-b8",
            "number": 8,
            "title": "Bài 8: Dự án: Làm sản phẩm cơ khí bằng tay",
            "chapter": "Chương II: Cơ khí",
            "summary": "Thực hành làm sản phẩm cơ khí.",
            "questions": []
          },
          {
            "id": "congnghe-8-b9",
            "number": 9,
            "title": "Bài 9: Truyền và biến đổi chuyển động",
            "chapter": "Chương II: Cơ khí",
            "summary": "Truyền động đai, xích, bánh răng, tay quay con trượt.",
            "questions": []
          },
          {
            "id": "congnghe-8-b10",
            "number": 10,
            "title": "Bài 10: Ngành nghề trong cơ khí",
            "chapter": "Chương II: Cơ khí",
            "summary": "Kĩ sư cơ khí, thợ cơ khí.",
            "questions": []
          },
          {
            "id": "congnghe-8-b11",
            "number": 11,
            "title": "Bài 11: An toàn điện",
            "chapter": "Chương III: An toàn điện",
            "summary": "Nguyên nhân tai nạn điện và sơ cứu người bị điện giật.",
            "questions": []
          },
          {
            "id": "congnghe-8-b12",
            "number": 12,
            "title": "Bài 12: Mạch điện gia đình",
            "chapter": "Chương IV: Kĩ thuật điện",
            "summary": "Mạch điện điều khiển và mạch điện chiếu sáng.",
            "questions": []
          },
          {
            "id": "congnghe-8-b13",
            "number": 13,
            "title": "Bài 13: Thiết bị bảo vệ của mạch điện gia đình",
            "chapter": "Chương IV: Kĩ thuật điện",
            "summary": "Aptomat, cầu chì, cầu dao.",
            "questions": []
          },
          {
            "id": "congnghe-8-b14",
            "number": 14,
            "title": "Bài 14: Tính toán tiêu thụ điện năng trong gia đình",
            "chapter": "Chương IV: Kĩ thuật điện",
            "summary": "A = P·t (kWh).",
            "questions": []
          },
          {
            "id": "congnghe-8-b15",
            "number": 15,
            "title": "Bài 15: Dự án: Thiết kế mạng điện trong nhà",
            "chapter": "Chương IV: Kĩ thuật điện",
            "summary": "Thiết kế sơ đồ mạng điện.",
            "questions": []
          },
          {
            "id": "congnghe-8-b16",
            "number": 16,
            "title": "Bài 16: Đại cương về thiết kế kĩ thuật",
            "chapter": "Chương V: Thiết kế kĩ thuật",
            "summary": "Vai trò của thiết kế kĩ thuật.",
            "questions": []
          },
          {
            "id": "congnghe-8-b17",
            "number": 17,
            "title": "Bài 17: Các bước thiết kế kĩ thuật",
            "chapter": "Chương V: Thiết kế kĩ thuật",
            "summary": "Quy trình 5 bước thiết kế kĩ thuật.",
            "questions": []
          },
          {
            "id": "congnghe-8-b18",
            "number": 18,
            "title": "Bài 18: Dự án: Thiết kế giá sách cố định",
            "chapter": "Chương V: Thiết kế kĩ thuật",
            "summary": "Thực hành thiết kế sản phẩm.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-8",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-8-b1",
            "number": 1,
            "title": "Unit 1: Leisure Time",
            "chapter": "Unit 1: Leisure Time",
            "summary": "Verbs of liking + V-ing / to-V.",
            "questions": []
          },
          {
            "id": "tienganh-8-b2",
            "number": 2,
            "title": "Unit 2: Life in the Countryside",
            "chapter": "Unit 2: Life in the Countryside",
            "summary": "Comparative forms of adverbs.",
            "questions": []
          },
          {
            "id": "tienganh-8-b3",
            "number": 3,
            "title": "Unit 3: Teenagers",
            "chapter": "Unit 3: Teenagers",
            "summary": "Simple and compound sentences.",
            "questions": []
          },
          {
            "id": "tienganh-8-b4",
            "number": 4,
            "title": "Unit 4: Ethnic Groups of Viet Nam",
            "chapter": "Unit 4: Ethnic Groups of Viet Nam",
            "summary": "Yes/No and Wh-questions; countable/uncountable nouns.",
            "questions": []
          },
          {
            "id": "tienganh-8-b5",
            "number": 5,
            "title": "Unit 5: Our Customs and Traditions",
            "chapter": "Unit 5: Our Customs and Traditions",
            "summary": "Zero article.",
            "questions": []
          },
          {
            "id": "tienganh-8-b6",
            "number": 6,
            "title": "Unit 6: Lifestyles",
            "chapter": "Unit 6: Lifestyles",
            "summary": "Future Simple và First Conditional với unless.",
            "questions": []
          },
          {
            "id": "tienganh-8-b7",
            "number": 7,
            "title": "Unit 7: Environmental Protection",
            "chapter": "Unit 7: Environmental Protection",
            "summary": "Complex sentences with adverb clauses of time.",
            "questions": []
          },
          {
            "id": "tienganh-8-b8",
            "number": 8,
            "title": "Unit 8: Shopping",
            "chapter": "Unit 8: Shopping",
            "summary": "Adverbs of frequency & Present Simple for future events.",
            "questions": []
          },
          {
            "id": "tienganh-8-b9",
            "number": 9,
            "title": "Unit 9: Natural Disasters",
            "chapter": "Unit 9: Natural Disasters",
            "summary": "Past Continuous với when/while.",
            "questions": []
          },
          {
            "id": "tienganh-8-b10",
            "number": 10,
            "title": "Unit 10: Communication in the Future",
            "chapter": "Unit 10: Communication in the Future",
            "summary": "Prepositions of place/time & possessive pronouns.",
            "questions": []
          },
          {
            "id": "tienganh-8-b11",
            "number": 11,
            "title": "Unit 11: Science and Technology",
            "chapter": "Unit 11: Science and Technology",
            "summary": "Reported speech (statements).",
            "questions": []
          },
          {
            "id": "tienganh-8-b12",
            "number": 12,
            "title": "Unit 12: Life on Other Planets",
            "chapter": "Unit 12: Life on Other Planets",
            "summary": "Reported speech (questions).",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-8",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-8-b1",
            "number": 1,
            "title": "Chủ đề 1: Chào năm học mới",
            "chapter": "Chủ đề 1: Chào năm học mới",
            "summary": "Hát Tuổi hồng; ôn tập đọc nhạc và kí hiệu âm nhạc.",
            "questions": []
          },
          {
            "id": "amnhac-8-b2",
            "number": 2,
            "title": "Chủ đề 2: Âm nhạc miền núi phía Bắc",
            "chapter": "Chủ đề 2: Âm nhạc miền núi phía Bắc",
            "summary": "Tìm hiểu đàn tính, hát Then và dân ca các dân tộc miền núi.",
            "questions": []
          },
          {
            "id": "amnhac-8-b3",
            "number": 3,
            "title": "Chủ đề 3: Khúc ca hòa bình",
            "chapter": "Chủ đề 3: Khúc ca hòa bình",
            "summary": "Hát Lá cờ hòa bình; đọc nhạc giọng La thứ.",
            "questions": []
          },
          {
            "id": "amnhac-8-b4",
            "number": 4,
            "title": "Chủ đề 4: Giai điệu quê hương",
            "chapter": "Chủ đề 4: Giai điệu quê hương",
            "summary": "Tìm hiểu nhạc sĩ Văn Cao, Đỗ Nhuận; hát Quê hương.",
            "questions": []
          },
          {
            "id": "amnhac-8-b5",
            "number": 5,
            "title": "Chủ đề 5: Âm nhạc và những sắc màu",
            "chapter": "Chủ đề 5: Âm nhạc và những sắc màu",
            "summary": "Thực hành hòa tấu nhạc cụ gõ và giai điệu.",
            "questions": []
          },
          {
            "id": "amnhac-8-b6",
            "number": 6,
            "title": "Chủ đề 6: Giai điệu tuổi thơ",
            "chapter": "Chủ đề 6: Giai điệu tuổi thơ",
            "summary": "Hát Hò ba lí / Bài ca đi học; cảm nhận nhịp 4/4.",
            "questions": []
          },
          {
            "id": "amnhac-8-b7",
            "number": 7,
            "title": "Chủ đề 7: Âm nhạc cổ điển phương Tây",
            "chapter": "Chủ đề 7: Âm nhạc cổ điển phương Tây",
            "summary": "Tìm hiểu Mozart, Chopin và thể loại giao hưởng, sonata.",
            "questions": []
          },
          {
            "id": "amnhac-8-b8",
            "number": 8,
            "title": "Chủ đề 8: Khúc ca mùa hè",
            "chapter": "Chủ đề 8: Khúc ca mùa hè",
            "summary": "Hát Mùa hè xanh; tổng kết, biểu diễn cuối năm.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-8",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-8-b1",
            "number": 1,
            "title": "Chủ đề 1: Nghệ thuật phương Tây từ thời kì Phục hưng đến cuối thế kỉ XIX",
            "chapter": "Chủ đề 1: Nghệ thuật Phục hưng",
            "summary": "Tìm hiểu Leonardo da Vinci, Michelangelo, Van Gogh và luật phối cảnh.",
            "questions": []
          },
          {
            "id": "mithuat-8-b2",
            "number": 2,
            "title": "Chủ đề 2: Mĩ thuật Việt Nam từ cuối thế kỉ XIX đến năm 1954",
            "chapter": "Chủ đề 2: Mĩ thuật Việt Nam hiện đại",
            "summary": "Tìm hiểu Trường Cao đẳng Mĩ thuật Đông Dương và các danh họa.",
            "questions": []
          },
          {
            "id": "mithuat-8-b3",
            "number": 3,
            "title": "Chủ đề 3: Thiết kế đồ họa và tạo dáng sản phẩm",
            "chapter": "Chủ đề 3: Thiết kế sản phẩm",
            "summary": "Thiết kế bao bì sản phẩm hoặc đồ dùng học tập thân thiện môi trường.",
            "questions": []
          },
          {
            "id": "mithuat-8-b4",
            "number": 4,
            "title": "Chủ đề 4: Không gian đa chiều trong hội họa",
            "chapter": "Chủ đề 4: Không gian đa chiều",
            "summary": "Vận dụng luật xa gần 1 điểm tụ, 2 điểm tụ vào tranh vẽ.",
            "questions": []
          },
          {
            "id": "mithuat-8-b5",
            "number": 5,
            "title": "Chủ đề 5: Nghệ thuật sắp đặt và trình diễn",
            "chapter": "Chủ đề 5: Nghệ thuật sắp đặt",
            "summary": "Sáng tạo tác phẩm sắp đặt không gian từ vật liệu sẵn có.",
            "questions": []
          },
          {
            "id": "mithuat-8-b6",
            "number": 6,
            "title": "Chủ đề 6: Đồ vật với không gian sống",
            "chapter": "Chủ đề 6: Đồ vật và không gian sống",
            "summary": "Thiết kế không gian phòng học, góc sinh hoạt hài hòa.",
            "questions": []
          },
          {
            "id": "mithuat-8-b7",
            "number": 7,
            "title": "Chủ đề 7: Nghệ thuật truyền thống Việt Nam",
            "chapter": "Chủ đề 7: Điêu khắc, kiến trúc truyền thống",
            "summary": "Tìm hiểu điêu khắc Chăm-pa và kiến trúc cổ Việt Nam.",
            "questions": []
          },
          {
            "id": "mithuat-8-b8",
            "number": 8,
            "title": "Chủ đề 8: Hướng nghiệp mĩ thuật",
            "chapter": "Chủ đề 8: Hướng nghiệp mĩ thuật",
            "summary": "Tìm hiểu các ngành nghề liên quan đến mĩ thuật ứng dụng.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-8",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-8-b1",
            "number": 1,
            "title": "Chế độ dinh dưỡng thích hợp với bản thân",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Tính toán nhu cầu năng lượng và dinh dưỡng cho người tập thể thao.",
            "questions": []
          },
          {
            "id": "gdtc-8-b2",
            "number": 2,
            "title": "Chủ đề 1: Chạy cự li ngắn (100m)",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Xuất phát thấp, chạy lao sau xuất phát và về đích.",
            "questions": []
          },
          {
            "id": "gdtc-8-b3",
            "number": 3,
            "title": "Chủ đề 2: Nhảy cao kiểu bước qua",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Chạy đà, giậm nhảy, qua xà và tiếp đất.",
            "questions": []
          },
          {
            "id": "gdtc-8-b4",
            "number": 4,
            "title": "Chủ đề 3: Chạy cự li trung bình",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Phân phối sức và kĩ thuật hô hấp khi chạy bền.",
            "questions": []
          },
          {
            "id": "gdtc-8-b5",
            "number": 5,
            "title": "Chủ đề 4: Bài tập thể dục",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Bài thể dục nhịp điệu nâng cao.",
            "questions": []
          },
          {
            "id": "gdtc-8-b6",
            "number": 6,
            "title": "Chủ đề 1: Cầu lông / Bóng đá / Bóng rổ",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Đập cầu thuận tay, đỡ bóng bằng ngực/đùi hoặc ném rổ một tay.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-8",
        "name": "Hoạt động trải nghiệm, hướng nghiệp",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-8-b1",
            "number": 1,
            "title": "Chủ đề 1: Em với nhà trường và bạn bè",
            "chapter": "Chủ đề 1: Xây dựng trường học văn minh",
            "summary": "Phòng chống bạo lực học đường, xây dựng tình bạn lành mạnh.",
            "questions": []
          },
          {
            "id": "hdtn-8-b2",
            "number": 2,
            "title": "Chủ đề 2: Trách nhiệm và kỉ luật bản thân",
            "chapter": "Chủ đề 2: Khám phá và rèn luyện bản thân",
            "summary": "Tự đánh giá tính cách, lập kế hoạch khắc phục hạn chế.",
            "questions": []
          },
          {
            "id": "hdtn-8-b3",
            "number": 3,
            "title": "Chủ đề 3: Rèn luyện kĩ năng giao tiếp và hợp tác",
            "chapter": "Chủ đề 3: Tư duy phản biện và giải quyết vấn đề",
            "summary": "Từ chối áp lực tiêu cực từ bạn bè và thương lượng hiệu quả.",
            "questions": []
          },
          {
            "id": "hdtn-8-b4",
            "number": 4,
            "title": "Chủ đề 4: Lập kế hoạch chi tiêu và gắn kết gia đình",
            "chapter": "Chủ đề 4: Trách nhiệm với gia đình",
            "summary": "Quản lí ngân sách cá nhân và tổ chức hoạt động gia đình.",
            "questions": []
          },
          {
            "id": "hdtn-8-b5",
            "number": 5,
            "title": "Chủ đề 5: Tham gia hoạt động xã hội và thiện nguyện",
            "chapter": "Chủ đề 5: Xây dựng cộng đồng",
            "summary": "Lập dự án truyền thông văn hóa ứng xử ở địa phương.",
            "questions": []
          },
          {
            "id": "hdtn-8-b6",
            "number": 6,
            "title": "Chủ đề 6: Tìm hiểu và bảo vệ đa dạng sinh học",
            "chapter": "Chủ đề 6: Bảo vệ môi trường tự nhiên",
            "summary": "Đề xuất giải pháp giảm ô nhiễm và bảo vệ danh lam thắng cảnh.",
            "questions": []
          },
          {
            "id": "hdtn-8-b7",
            "number": 7,
            "title": "Chủ đề 7: Tìm hiểu thị trường lao động",
            "chapter": "Chủ đề 7: Thế giới nghề nghiệp hiện đại",
            "summary": "Khám phá nghề phổ biến ở địa phương và xu hướng nghề nghiệp.",
            "questions": []
          },
          {
            "id": "hdtn-8-b8",
            "number": 8,
            "title": "Chủ đề 8: Đánh giá sự phù hợp nghề nghiệp",
            "chapter": "Chủ đề 8: Định hướng học tập",
            "summary": "Xác định sở thích, năng lực cá nhân theo định hướng nghề.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 9,
    "label": "Lớp 9",
    "level": "THCS",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=9",
    "subjects": [
      {
        "id": "toan-9",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-9-b1",
            "number": 1,
            "title": "Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",
            "chapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
            "summary": "Dạng ax + by = c và nghiệm của hệ.",
            "questions": []
          },
          {
            "id": "toan-9-b2",
            "number": 2,
            "title": "Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn",
            "chapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
            "summary": "Phương pháp thế và cộng đại số.",
            "questions": []
          },
          {
            "id": "toan-9-b3",
            "number": 3,
            "title": "Bài 3: Giải bài toán bằng cách lập hệ phương trình",
            "chapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
            "summary": "Lập hệ phương trình giải toán thực tế.",
            "questions": []
          },
          {
            "id": "toan-9-b4",
            "number": 4,
            "title": "Bài 4: Phương trình quy về phương trình bậc nhất một ẩn",
            "chapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
            "summary": "Phương trình tích và phương trình chứa ẩn ở mẫu.",
            "questions": []
          },
          {
            "id": "toan-9-b5",
            "number": 5,
            "title": "Bài 5: Bất đẳng thức và tính chất",
            "chapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
            "summary": "Tính chất bắc cầu, liên hệ thứ tự và phép cộng/nhân.",
            "questions": []
          },
          {
            "id": "toan-9-b6",
            "number": 6,
            "title": "Bài 6: Bất phương trình bậc nhất một ẩn",
            "chapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
            "summary": "Giải bất phương trình ax + b > 0.",
            "questions": []
          },
          {
            "id": "toan-9-b7",
            "number": 7,
            "title": "Bài 7: Căn bậc hai và căn thức bậc hai",
            "chapter": "Chương III: Căn bậc hai và căn bậc ba",
            "summary": "Điều kiện xác định √A (A ≥ 0).",
            "questions": []
          },
          {
            "id": "toan-9-b8",
            "number": 8,
            "title": "Bài 8: Khai căn bậc hai với phép nhân và phép chia",
            "chapter": "Chương III: Căn bậc hai và căn thức bậc hai",
            "summary": "√(AB) = √A·√B và √(A/B) = √A/√B.",
            "questions": []
          },
          {
            "id": "toan-9-b9",
            "number": 9,
            "title": "Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai",
            "chapter": "Chương III: Căn bậc hai và căn thức bậc hai",
            "summary": "Trục căn thức ở mẫu.",
            "questions": []
          },
          {
            "id": "toan-9-b10",
            "number": 10,
            "title": "Bài 10: Căn bậc ba và căn thức bậc ba",
            "chapter": "Chương III: Căn bậc hai và căn thức bậc hai",
            "summary": "Định nghĩa và tính chất ³√a.",
            "questions": []
          },
          {
            "id": "toan-9-b11",
            "number": 11,
            "title": "Bài 11: Tỉ số lượng giác của góc nhọn",
            "chapter": "Chương IV: Hệ thức lượng trong tam giác vuông",
            "summary": "sin, cos, tan, cot và bảng 30°, 45°, 60°.",
            "questions": []
          },
          {
            "id": "toan-9-b12",
            "number": 12,
            "title": "Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng",
            "chapter": "Chương IV: Hệ thức lượng trong tam giác vuông",
            "summary": "Giải tam giác vuông.",
            "questions": []
          },
          {
            "id": "toan-9-b13",
            "number": 13,
            "title": "Bài 13: Mở đầu về đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Tính đối xứng của đường tròn.",
            "questions": []
          },
          {
            "id": "toan-9-b14",
            "number": 14,
            "title": "Bài 14: Cung và dây của một đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Đường kính, dây cung và góc ở tâm.",
            "questions": []
          },
          {
            "id": "toan-9-b15",
            "number": 15,
            "title": "Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên",
            "chapter": "Chương V: Đường tròn",
            "summary": "l = πRn/180; S_q = πR²n/360.",
            "questions": []
          },
          {
            "id": "toan-9-b16",
            "number": 16,
            "title": "Bài 16: Vị trí tương đối của đường thẳng và đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Tiếp tuyến đường tròn.",
            "questions": []
          },
          {
            "id": "toan-9-b17",
            "number": 17,
            "title": "Bài 17: Vị trí tương đối của hai đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Cắt nhau, tiếp xúc, ngoài nhau.",
            "questions": []
          },
          {
            "id": "toan-9-b18",
            "number": 18,
            "title": "Bài 18: Hàm số y = ax² (a ≠ 0)",
            "chapter": "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "summary": "Đồ thị Parabol.",
            "questions": []
          },
          {
            "id": "toan-9-b19",
            "number": 19,
            "title": "Bài 19: Phương trình bậc hai một ẩn",
            "chapter": "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "summary": "Công thức nghiệm Δ = b² - 4ac.",
            "questions": []
          },
          {
            "id": "toan-9-b20",
            "number": 20,
            "title": "Bài 20: Định lí Viète và ứng dụng",
            "chapter": "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "summary": "x₁+x₂ = -b/a, x₁x₂ = c/a.",
            "questions": []
          },
          {
            "id": "toan-9-b21",
            "number": 21,
            "title": "Bài 21: Giải bài toán bằng cách lập phương trình",
            "chapter": "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "summary": "Lập phương trình bậc hai.",
            "questions": []
          },
          {
            "id": "toan-9-b22",
            "number": 22,
            "title": "Bài 22: Bảng tần số và biểu đồ tần số",
            "chapter": "Chương VII: Tần số và tần số tương đối",
            "summary": "Bảng và biểu đồ tần số.",
            "questions": []
          },
          {
            "id": "toan-9-b23",
            "number": 23,
            "title": "Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối",
            "chapter": "Chương VII: Tần số và tần số tương đối",
            "summary": "Tần số tương đối (%).",
            "questions": []
          },
          {
            "id": "toan-9-b24",
            "number": 24,
            "title": "Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ",
            "chapter": "Chương VII: Tần số và tần số tương đối",
            "summary": "Mẫu số liệu ghép nhóm.",
            "questions": []
          },
          {
            "id": "toan-9-b25",
            "number": 25,
            "title": "Bài 25: Phép thử ngẫu nhiên và không gian mẫu",
            "chapter": "Chương VIII: Xác suất của biến cố",
            "summary": "Xác định không gian mẫu Ω.",
            "questions": []
          },
          {
            "id": "toan-9-b26",
            "number": 26,
            "title": "Bài 26: Xác suất của biến cố liên quan tới phép thử",
            "chapter": "Chương VIII: Xác suất của biến cố",
            "summary": "Tính xác suất P(A).",
            "questions": []
          },
          {
            "id": "toan-9-b27",
            "number": 27,
            "title": "Bài 27: Góc nội tiếp",
            "chapter": "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "summary": "Số đo góc nội tiếp.",
            "questions": []
          },
          {
            "id": "toan-9-b28",
            "number": 28,
            "title": "Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác",
            "chapter": "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "summary": "Tâm đường tròn ngoại tiếp và nội tiếp.",
            "questions": []
          },
          {
            "id": "toan-9-b29",
            "number": 29,
            "title": "Bài 29: Tứ giác nội tiếp",
            "chapter": "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "summary": "Tổng hai góc đối bằng 180°.",
            "questions": []
          },
          {
            "id": "toan-9-b30",
            "number": 30,
            "title": "Bài 30: Đa giác đều",
            "chapter": "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "summary": "Phép quay giữ nguyên đa giác đều.",
            "questions": []
          },
          {
            "id": "toan-9-b31",
            "number": 31,
            "title": "Bài 31: Hình trụ và hình nón",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh và thể tích hình trụ, hình nón.",
            "questions": []
          },
          {
            "id": "toan-9-b32",
            "number": 32,
            "title": "Bài 32: Hình cầu",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "S = 4πR², V = (4/3)πR³.",
            "questions": []
          }
        ]
      },
      {
        "id": "khtn-9",
        "name": "Khoa học tự nhiên",
        "icon": "🔬",
        "lessons": [
          {
            "id": "khtn-9-b1",
            "number": 1,
            "title": "Bài 1: Nhận biết một số dụng cụ, hóa chất. Thuyết trình một vấn đề khoa học",
            "chapter": "Chương I: Năng lượng cơ học",
            "summary": "Dụng cụ thực hành KHTN 9.",
            "questions": []
          },
          {
            "id": "khtn-9-b2",
            "number": 2,
            "title": "Bài 2: Động năng. Thế năng",
            "chapter": "Chương I: Năng lượng cơ học",
            "summary": "W_đ = ½mv², W_t = Ph.",
            "questions": []
          },
          {
            "id": "khtn-9-b3",
            "number": 3,
            "title": "Bài 3: Cơ năng",
            "chapter": "Chương I: Năng lượng cơ học",
            "summary": "Bảo toàn cơ năng.",
            "questions": []
          },
          {
            "id": "khtn-9-b4",
            "number": 4,
            "title": "Bài 4: Công và công suất",
            "chapter": "Chương I: Năng lượng cơ học",
            "summary": "A = Fs, P = A/t.",
            "questions": []
          },
          {
            "id": "khtn-9-b5",
            "number": 5,
            "title": "Bài 5: Khúc xạ ánh sáng",
            "chapter": "Chương II: Ánh sáng",
            "summary": "n₁sin(i) = n₂sin(r).",
            "questions": []
          },
          {
            "id": "khtn-9-b6",
            "number": 6,
            "title": "Bài 6: Phản xạ toàn phần",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Điều kiện i ≥ i_gh và cáp quang.",
            "questions": []
          },
          {
            "id": "khtn-9-b7",
            "number": 7,
            "title": "Bài 7: Lăng kính",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Tán sắc ánh sáng trắng qua lăng kính.",
            "questions": []
          },
          {
            "id": "khtn-9-b8",
            "number": 8,
            "title": "Bài 8: Thấu kính",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Thấu kính hội tụ và phân kì.",
            "questions": []
          },
          {
            "id": "khtn-9-b9",
            "number": 9,
            "title": "Bài 9: Thực hành đo tiêu cự của thấu kính hội tụ",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Đo tiêu cự f.",
            "questions": []
          },
          {
            "id": "khtn-9-b10",
            "number": 10,
            "title": "Bài 10: Kính lúp. Bài tập thấu kính",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Độ bội giác G = 25/f.",
            "questions": []
          },
          {
            "id": "khtn-9-b11",
            "number": 11,
            "title": "Bài 11: Điện trở. Định luật Ohm",
            "chapter": "Chương III: Điện",
            "summary": "I = U/R, R = ρl/S.",
            "questions": []
          },
          {
            "id": "khtn-9-b12",
            "number": 12,
            "title": "Bài 12: Đoạn mạch nối tiếp, song song",
            "chapter": "Chương III: Điện",
            "summary": "R_nt và R_ss.",
            "questions": []
          },
          {
            "id": "khtn-9-b13",
            "number": 13,
            "title": "Bài 13: Năng lượng của dòng điện và công suất điện",
            "chapter": "Chương III: Điện",
            "summary": "P = UI, A = UIt.",
            "questions": []
          },
          {
            "id": "khtn-9-b14",
            "number": 14,
            "title": "Bài 14: Cảm ứng điện từ",
            "chapter": "Chương IV: Điện từ",
            "summary": "Hiện tượng cảm ứng điện từ.",
            "questions": []
          },
          {
            "id": "khtn-9-b15",
            "number": 15,
            "title": "Bài 15: Tác dụng của dòng điện xoay chiều",
            "chapter": "Chương IV: Điện từ",
            "summary": "Dòng xoay chiều và máy phát điện.",
            "questions": []
          },
          {
            "id": "khtn-9-b16",
            "number": 16,
            "title": "Bài 16: Vòng năng lượng trên Trái Đất. Năng lượng hóa thạch",
            "chapter": "Chương V: Năng lượng với cuộc sống",
            "summary": "Nhiên liệu hóa thạch.",
            "questions": []
          },
          {
            "id": "khtn-9-b17",
            "number": 17,
            "title": "Bài 17: Một số dạng năng lượng tái tạo",
            "chapter": "Chương V: Năng lượng với cuộc sống",
            "summary": "Điện mặt trời, điện gió.",
            "questions": []
          },
          {
            "id": "khtn-9-b18",
            "number": 18,
            "title": "Bài 18: Tính chất chung của kim loại",
            "chapter": "Chương VI: Kim loại",
            "summary": "Tính chất vật lí và hóa học của kim loại.",
            "questions": []
          },
          {
            "id": "khtn-9-b19",
            "number": 19,
            "title": "Bài 19: Dãy hoạt động hóa học",
            "chapter": "Chương VI: Kim loại",
            "summary": "Ý nghĩa dãy hoạt động hóa học.",
            "questions": []
          },
          {
            "id": "khtn-9-b20",
            "number": 20,
            "title": "Bài 20: Tách kim loại và việc sử dụng hợp kim",
            "chapter": "Chương VI: Kim loại",
            "summary": "Điện phân, nhiệt luyện, gang, thép.",
            "questions": []
          },
          {
            "id": "khtn-9-b21",
            "number": 21,
            "title": "Bài 21: Sự khác nhau cơ bản giữa phi kim và kim loại",
            "chapter": "Chương VI: Kim loại",
            "summary": "So sánh kim loại và phi kim.",
            "questions": []
          },
          {
            "id": "khtn-9-b22",
            "number": 22,
            "title": "Bài 22: Giới thiệu về hợp chất hữu cơ",
            "chapter": "Chương VII: Hydrocarbon",
            "summary": "Hydrocarbon và dẫn xuất.",
            "questions": []
          },
          {
            "id": "khtn-9-b23",
            "number": 23,
            "title": "Bài 23: Alkane",
            "chapter": "Chương VII: Hydrocarbon",
            "summary": "CH₄, phản ứng cháy và thế chlorine.",
            "questions": []
          },
          {
            "id": "khtn-9-b24",
            "number": 24,
            "title": "Bài 24: Alkene",
            "chapter": "Chương VII: Hydrocarbon",
            "summary": "C₂H₄, làm mất màu Br₂ và trùng hợp.",
            "questions": []
          },
          {
            "id": "khtn-9-b25",
            "number": 25,
            "title": "Bài 25: Nguồn nhiên liệu",
            "chapter": "Chương VII: Hydrocarbon",
            "summary": "Dầu mỏ, khí thiên nhiên.",
            "questions": []
          },
          {
            "id": "khtn-9-b26",
            "number": 26,
            "title": "Bài 26: Ethylic alcohol",
            "chapter": "Chương VIII: Ethylic alcohol và Acetic acid",
            "summary": "C₂H₅OH, độ cồn, tác dụng Na.",
            "questions": []
          },
          {
            "id": "khtn-9-b27",
            "number": 27,
            "title": "Bài 27: Acetic acid",
            "chapter": "Chương VIII: Ethylic alcohol và Acetic acid",
            "summary": "CH₃COOH, tính acid và phản ứng ester hóa.",
            "questions": []
          },
          {
            "id": "khtn-9-b28",
            "number": 28,
            "title": "Bài 28: Lipid",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Chất béo và xà phòng hóa.",
            "questions": []
          },
          {
            "id": "khtn-9-b29",
            "number": 29,
            "title": "Bài 29: Carbohydrate. Glucose và Saccharose",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Phản ứng tráng bạc và thủy phân.",
            "questions": []
          },
          {
            "id": "khtn-9-b30",
            "number": 30,
            "title": "Bài 30: Tinh bột và Cellulose",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Phản ứng với iodine và thủy phân.",
            "questions": []
          },
          {
            "id": "khtn-9-b31",
            "number": 31,
            "title": "Bài 31: Protein",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Amino acid, đông tụ, thủy phân.",
            "questions": []
          },
          {
            "id": "khtn-9-b32",
            "number": 32,
            "title": "Bài 32: Polymer",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Chất dẻo, tơ, cao su.",
            "questions": []
          },
          {
            "id": "khtn-9-b33",
            "number": 33,
            "title": "Bài 36: Khái quát về di truyền học",
            "chapter": "Chương XI: Di truyền học Mendel",
            "summary": "Di truyền, biến dị, tính trạng.",
            "questions": []
          },
          {
            "id": "khtn-9-b34",
            "number": 34,
            "title": "Bài 37: Các quy luật di truyền của Mendel",
            "chapter": "Chương XI: Di truyền học Mendel",
            "summary": "Phân li (3:1) và phân li độc lập (9:3:3:1).",
            "questions": []
          },
          {
            "id": "khtn-9-b35",
            "number": 35,
            "title": "Bài 38: Nucleic acid và gene",
            "chapter": "Chương XI: Di truyền học Mendel",
            "summary": "DNA, RNA.",
            "questions": []
          },
          {
            "id": "khtn-9-b36",
            "number": 36,
            "title": "Bài 39: Tái bản DNA và phiên mã tạo RNA",
            "chapter": "Chương XI: Di truyền học Mendel",
            "summary": "Nguyên tắc bổ sung và bán bảo toàn.",
            "questions": []
          },
          {
            "id": "khtn-9-b37",
            "number": 37,
            "title": "Bài 40: Dịch mã và mối quan hệ từ gene đến tính trạng",
            "chapter": "Chương XI: Di truyền học Mendel",
            "summary": "DNA -> mRNA -> Protein -> Tính trạng.",
            "questions": []
          },
          {
            "id": "khtn-9-b38",
            "number": 38,
            "title": "Bài 41: Đột biến gene",
            "chapter": "Chương XI: Di truyền học Mendel",
            "summary": "Khái niệm và ý nghĩa đột biến gene.",
            "questions": []
          },
          {
            "id": "khtn-9-b39",
            "number": 39,
            "title": "Bài 42: Nhiễm sắc thể và bộ nhiễm sắc thể",
            "chapter": "Chương XII: Di truyền nhiễm sắc thể",
            "summary": "2n, n, NST giới tính.",
            "questions": []
          },
          {
            "id": "khtn-9-b40",
            "number": 40,
            "title": "Bài 43: Nguyên phân và giảm phân",
            "chapter": "Chương XII: Di truyền nhiễm sắc thể",
            "summary": "Nguyên phân và giảm phân.",
            "questions": []
          },
          {
            "id": "khtn-9-b41",
            "number": 41,
            "title": "Bài 44: Nhiễm sắc thể giới tính và cơ chế xác định giới tính",
            "chapter": "Chương XII: Di truyền nhiễm sắc thể",
            "summary": "XX, XY.",
            "questions": []
          },
          {
            "id": "khtn-9-b42",
            "number": 42,
            "title": "Bài 45: Di truyền liên kết",
            "chapter": "Chương XII: Di truyền nhiễm sắc thể",
            "summary": "Liên kết gene của Morgan.",
            "questions": []
          },
          {
            "id": "khtn-9-b43",
            "number": 43,
            "title": "Bài 46: Khái niệm về tiến hóa và các hình thức chọn lọc",
            "chapter": "Chương XIII: Tiến hóa",
            "summary": "Chọn lọc tự nhiên và nhân tạo.",
            "questions": []
          },
          {
            "id": "khtn-9-b44",
            "number": 44,
            "title": "Bài 47: Cơ chế tiến hóa",
            "chapter": "Chương XIII: Tiến hóa",
            "summary": "Các nhân tố tiến hóa.",
            "questions": []
          },
          {
            "id": "khtn-9-b45",
            "number": 45,
            "title": "Bài 48: Sự phát sinh và phát triển sự sống trên Trái Đất",
            "chapter": "Chương XIII: Tiến hóa",
            "summary": "Nguồn gốc sự sống.",
            "questions": []
          }
        ]
      },
      {
        "id": "nguvan-9",
        "name": "Ngữ văn",
        "icon": "📖",
        "lessons": [
          {
            "id": "nguvan-9-b1",
            "number": 1,
            "title": "Bài 1: Thế giới kì ảo (Chuyện người con gái Nam Xương, Dế chọi)",
            "chapter": "Tập 1 - Bài 1: Thế giới kì ảo",
            "summary": "Đặc trưng truyện truyền kì trung đại và yếu tố kì ảo.",
            "questions": []
          },
          {
            "id": "nguvan-9-b2",
            "number": 2,
            "title": "Bài 2: Những cung bậc tâm trạng (Nỗi niềm chinh phụ, Tiếng đàn mưa, Một thể thơ độc đáo của người Việt)",
            "chapter": "Tập 1 - Bài 2: Những cung bậc tâm trạng",
            "summary": "Thể thơ song thất lục bát và biểu cảm trong thơ.",
            "questions": []
          },
          {
            "id": "nguvan-9-b3",
            "number": 3,
            "title": "Bài 3: Hồn nước nằm trong tiếng mẹ cha (Kim - Kiều gặp gỡ, Lục Vân Tiên đánh cướp cứu Kiều Nguyệt Nga)",
            "chapter": "Tập 1 - Bài 3: Hồn nước nằm trong tiếng mẹ cha",
            "summary": "Truyện thơ Nôm bác học (Truyện Kiều) và bình dân (Lục Vân Tiên).",
            "questions": []
          },
          {
            "id": "nguvan-9-b4",
            "number": 4,
            "title": "Bài 4: Khám phá vẻ đẹp văn chương (Người con gái Nam Xương - một bi kịch của con người, Từ thằng quỷ nhỏ đến cậu bé thông minh)",
            "chapter": "Tập 1 - Bài 4: Khám phá vẻ đẹp văn chương",
            "summary": "Nghị luận văn học phân tích tác phẩm truyện và thơ.",
            "questions": []
          },
          {
            "id": "nguvan-9-b5",
            "number": 5,
            "title": "Bài 5: Đối diện với nỗi đau (Rô-mê-ô và Giu-li-ét, Lơ Xít, Bí ẩn của làn nước)",
            "chapter": "Tập 1 - Bài 5: Đối diện với nỗi đau",
            "summary": "Bi kịch cổ điển và nỗi đau trong chiến tranh, đời sống.",
            "questions": []
          },
          {
            "id": "nguvan-9-b6",
            "number": 6,
            "title": "Bài 6: Giải mã những bí mật (Ba chàng sinh viên, Bài hát đồng sáu xu, Phạm Xuân Ẩn)",
            "chapter": "Tập 2 - Bài 6: Giải mã những bí mật",
            "summary": "Đặc trưng truyện trinh thám (Arthur Conan Doyle, Agatha Christie).",
            "questions": []
          },
          {
            "id": "nguvan-9-b7",
            "number": 7,
            "title": "Bài 7: Hồn thơ muôn điệu (Tiếng Việt, Mưa xuân)",
            "chapter": "Tập 2 - Bài 7: Hồn thơ muôn điệu",
            "summary": "Thơ tám chữ hiện đại (Lưu Quang Vũ, Nguyễn Bính).",
            "questions": []
          },
          {
            "id": "nguvan-9-b8",
            "number": 8,
            "title": "Bài 8: Tiếng nói của lương tri (Đấu tranh cho một thế giới hòa bình, Biến đổi khí hậu)",
            "chapter": "Tập 2 - Bài 8: Tiếng nói của lương tri",
            "summary": "Nghị luận xã hội về hòa bình và bảo vệ sự sống Trái Đất.",
            "questions": []
          },
          {
            "id": "nguvan-9-b9",
            "number": 9,
            "title": "Bài 9: Đi và suy ngẫm (Yên Tử, núi thiêng; Văn hóa hoa - cây cảnh)",
            "chapter": "Tập 2 - Bài 9: Đi và suy ngẫm",
            "summary": "Văn bản thông tin giới thiệu danh lam thắng cảnh và di tích lịch sử.",
            "questions": []
          },
          {
            "id": "nguvan-9-b10",
            "number": 10,
            "title": "Bài 10: Văn học – lịch sử tâm hồn (Đọc để trưởng thành, Quảng bá giá trị của sách)",
            "chapter": "Tập 2 - Bài 10: Văn học – lịch sử tâm hồn",
            "summary": "Tổng kết văn học Việt Nam và văn hóa đọc.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-diali-9",
        "name": "Lịch sử và Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "lichsu-diali-9-b1",
            "number": 1,
            "title": "Bài 1: Nước Nga và Liên Xô từ năm 1918 đến năm 1945",
            "chapter": "Lịch sử - Chương 1: Thế giới (1918–1945)",
            "summary": "Chính sách kinh tế mới (NEP) và công cuộc xây dựng CNXH ở Liên Xô.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b2",
            "number": 2,
            "title": "Bài 2: Châu Âu và nước Mỹ từ năm 1918 đến năm 1945",
            "chapter": "Lịch sử - Chương 1: Thế giới (1918–1945)",
            "summary": "Đại suy thoái 1929–1933, Chính sách mới ở Mỹ và chủ nghĩa phát xít ở Đức, Ý.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b3",
            "number": 3,
            "title": "Bài 3: Châu Á từ năm 1918 đến năm 1945",
            "chapter": "Lịch sử - Chương 1: Thế giới (1918–1945)",
            "summary": "Phong trào giải phóng dân tộc và chủ nghĩa quân phiệt Nhật Bản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b4",
            "number": 4,
            "title": "Bài 4: Chiến tranh thế giới thứ hai (1939 – 1945)",
            "chapter": "Lịch sử - Chương 1: Thế giới (1918–1945)",
            "summary": "Nguyên nhân, diễn biến chính, vai trò Liên Xô-Đồng minh và hậu quả.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b5",
            "number": 5,
            "title": "Bài 5: Việt Nam từ năm 1918 đến năm 1930",
            "chapter": "Lịch sử - Chương 2: Việt Nam (1918–1945)",
            "summary": "Hoạt động Nguyễn Ái Quốc và sự ra đời Đảng Cộng sản Việt Nam (3/2/1930).",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b6",
            "number": 6,
            "title": "Bài 6: Hoạt động cách mạng từ năm 1930 đến năm 1945",
            "chapter": "Lịch sử - Chương 2: Việt Nam (1918–1945)",
            "summary": "Phong trào 1930–1931, 1936–1939 và Mặt trận Việt Minh 1941.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b7",
            "number": 7,
            "title": "Bài 7: Cách mạng tháng Tám năm 1945",
            "chapter": "Lịch sử - Chương 2: Việt Nam (1918–1945)",
            "summary": "Tổng khởi nghĩa giành chính quyền và Tuyên ngôn Độc lập 2/9/1945.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b8",
            "number": 8,
            "title": "Bài 8: Trật tự thế giới mới và Chiến tranh lạnh (1945 – 1991)",
            "chapter": "Lịch sử - Chương 3: Thế giới (1945–1991)",
            "summary": "Trật tự hai cực I-an-ta, Liên hợp quốc và đối đầu Mỹ-Liên Xô.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b9",
            "number": 9,
            "title": "Bài 9: Liên Xô và các nước Đông Âu (1945 – 1991). Liên bang Nga (1991 – nay)",
            "chapter": "Lịch sử - Chương 3: Thế giới (1945–1991)",
            "summary": "Công cuộc khôi phục sau chiến tranh và sự tan rã năm 1991.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b10",
            "number": 10,
            "title": "Bài 10: Các nước châu Á, châu Phi và Mỹ La-tinh (1945 – 1991)",
            "chapter": "Lịch sử - Chương 3: Thế giới (1945–1991)",
            "summary": "Trung Quốc, Ấn Độ, ASEAN và phong trào giải phóng dân tộc.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b11",
            "number": 11,
            "title": "Bài 11: Nước Mỹ, Tây Âu và Nhật Bản (1945 – 1991)",
            "chapter": "Lịch sử - Chương 3: Thế giới (1945–1991)",
            "summary": "Sự phát triển kinh tế - khoa học kĩ thuật của các nước tư bản chủ nghĩa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b12",
            "number": 12,
            "title": "Bài 12: Việt Nam từ năm 1945 đến năm 1954",
            "chapter": "Lịch sử - Chương 4: Việt Nam (1945–1991)",
            "summary": "Kháng chiến chống thực dân Pháp, chiến thắng Điện Biên Phủ 1954.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b13",
            "number": 13,
            "title": "Bài 13: Việt Nam từ năm 1954 đến năm 1975",
            "chapter": "Lịch sử - Chương 4: Việt Nam (1945–1991)",
            "summary": "Xây dựng CNXH ở miền Bắc và kháng chiến chống Mỹ, Đại thắng mùa Xuân 1975.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b14",
            "number": 14,
            "title": "Bài 14: Việt Nam từ năm 1976 đến năm 1991",
            "chapter": "Lịch sử - Chương 4: Việt Nam (1945–1991)",
            "summary": "Thống nhất đất nước, bảo vệ biên giới và khởi xướng Đổi mới 1986.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b15",
            "number": 15,
            "title": "Bài 15: Thế giới từ năm 1991 đến nay",
            "chapter": "Lịch sử - Chương 5–7: Thế giới và Việt Nam từ 1991 đến nay",
            "summary": "Xu thế đa cực, toàn cầu hóa và cách mạng công nghiệp 4.0.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b16",
            "number": 16,
            "title": "Bài 16: Việt Nam từ năm 1991 đến nay",
            "chapter": "Lịch sử - Chương 5–7: Thế giới và Việt Nam từ 1991 đến nay",
            "summary": "Thành tựu Đổi mới kinh tế, xã hội và hội nhập quốc tế.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b17",
            "number": 17,
            "title": "Bài 17: Cách mạng khoa học – kĩ thuật và xu thế toàn cầu hoá",
            "chapter": "Lịch sử - Chương 5–7: Thế giới và Việt Nam từ 1991 đến nay",
            "summary": "Tác động của khoa học công nghệ đến đời sống nhân loại.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b18",
            "number": 18,
            "title": "Bài 18: Dân số và sự gia tăng dân số ở Việt Nam",
            "chapter": "Địa lí - Chương 1: Địa lí dân cư Việt Nam",
            "summary": "Quy mô, cơ cấu dân số trẻ/già hóa và phân bố dân số.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b19",
            "number": 19,
            "title": "Bài 19: Phân bố dân cư và các loại hình quần cư ở Việt Nam",
            "chapter": "Địa lí - Chương 1: Địa lí dân cư Việt Nam",
            "summary": "Mật độ dân số, quần cư nông thôn và đô thị.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b20",
            "number": 20,
            "title": "Bài 20: Lao động và việc làm. Chất lượng cuộc sống",
            "chapter": "Địa lí - Chương 1: Địa lí dân cư Việt Nam",
            "summary": "Cơ cấu lao động theo ngành và nâng cao chất lượng cuộc sống.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b21",
            "number": 21,
            "title": "Bài 21: Thực hành: Phân tích sự phân bố dân cư và lao động",
            "chapter": "Địa lí - Chương 1: Địa lí dân cư Việt Nam",
            "summary": "Đọc bản đồ mật độ dân số và biểu đồ lao động.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b22",
            "number": 22,
            "title": "Bài 22: Các dân tộc ở Việt Nam",
            "chapter": "Địa lí - Chương 1: Địa lí dân cư Việt Nam",
            "summary": "54 dân tộc anh em, phân bố và bình đẳng đoàn kết.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b23",
            "number": 23,
            "title": "Bài 23: Sự phát triển và phân bố nông nghiệp, lâm nghiệp, thuỷ sản",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Trồng trọt, chăn nuôi, lâm nghiệp và thủy sản Việt Nam.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b24",
            "number": 24,
            "title": "Bài 24: Thực hành: Tìm hiểu sản xuất nông, lâm, thuỷ sản địa phương",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Khảo sát nông nghiệp địa phương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b25",
            "number": 25,
            "title": "Bài 25: Sự phát triển và phân bố công nghiệp ở Việt Nam",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Công nghiệp năng lượng, chế biến, điện tử và các trung tâm công nghiệp.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b26",
            "number": 26,
            "title": "Bài 26: Thực hành: Vẽ biểu đồ và phân tích cơ cấu công nghiệp",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Vẽ biểu đồ cơ cấu và nhận xét.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b27",
            "number": 27,
            "title": "Bài 27: Giao thông vận tải và bưu chính viễn thông",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Các tuyến đường bộ, sắt, biển, hàng không và hạ tầng số.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b28",
            "number": 28,
            "title": "Bài 28: Thương mại và du lịch ở Việt Nam",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Nội thương, ngoại thương xuất nhập khẩu và tài nguyên du lịch.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b29",
            "number": 29,
            "title": "Bài 29: Vùng Trung du và miền núi Bắc Bộ",
            "chapter": "Địa lí - Chương 3: Sự phân hoá lãnh thổ",
            "summary": "Thế mạnh thủy điện, khoáng sản, cây công nghiệp cận nhiệt.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b30",
            "number": 30,
            "title": "Bài 30: Vùng Đồng bằng sông Hồng",
            "chapter": "Địa lí - Chương 3: Sự phân hoá lãnh thổ",
            "summary": "Vùng trọng điểm lương thực, công nghiệp, dịch vụ phía Bắc.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b31",
            "number": 31,
            "title": "Bài 31: Vùng Bắc Trung Bộ và Duyên hải miền Trung",
            "chapter": "Địa lí - Chương 3: Sự phân hoá lãnh thổ",
            "summary": "Kinh tế biển, cảng nước sâu và du lịch di sản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b32",
            "number": 32,
            "title": "Bài 32: Vùng Tây Nguyên",
            "chapter": "Địa lí - Chương 3: Sự phân hoá lãnh thổ",
            "summary": "Đất đỏ bazan, cây công nghiệp lâu năm (cà phê, cao su, hồ tiêu).",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b33",
            "number": 33,
            "title": "Bài 33: Vùng Đông Nam Bộ",
            "chapter": "Địa lí - Chương 3: Sự phân hoá lãnh thổ",
            "summary": "Vùng kinh tế phát triển năng động nhất cả nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b34",
            "number": 34,
            "title": "Bài 34: Vùng Đồng bằng sông Cửu Long",
            "chapter": "Địa lí - Chương 3: Sự phân hoá lãnh thổ",
            "summary": "Vựa lúa, thủy sản và trái cây lớn nhất cả nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b35",
            "number": 35,
            "title": "Bài 35: Phát triển tổng hợp kinh tế và bảo vệ tài nguyên, môi trường biển đảo",
            "chapter": "Địa lí - Chương 3: Sự phân hoá lãnh thổ",
            "summary": "Phát triển kinh tế biển xanh gắn với quốc phòng an ninh.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b36",
            "number": 36,
            "title": "Chủ đề chung 1: Đô thị: Lịch sử và hiện tại",
            "chapter": "Chủ đề chung",
            "summary": "Quá trình đô thị hóa và đô thị thông minh.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b37",
            "number": 37,
            "title": "Chủ đề chung 2: Văn minh châu thổ sông Hồng và sông Cửu Long",
            "chapter": "Chủ đề chung",
            "summary": "Ứng phó biến đổi khí hậu ở hai đồng bằng châu thổ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b38",
            "number": 38,
            "title": "Chủ đề chung 3: Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
            "chapter": "Chủ đề chung",
            "summary": "Phát triển kinh tế biển và bảo vệ chủ quyền toàn vẹn lãnh thổ.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdcd-9",
        "name": "Giáo dục công dân",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "gdcd-9-b1",
            "number": 1,
            "title": "Bài 1: Sống có lí tưởng",
            "chapter": "Giáo dục công dân 9",
            "summary": "Xác định lí tưởng sống cao đẹp của thanh niên.",
            "questions": []
          },
          {
            "id": "gdcd-9-b2",
            "number": 2,
            "title": "Bài 2: Khoan dung",
            "chapter": "Giáo dục công dân 9",
            "summary": "Rộng lòng tha thứ, tôn trọng người khác.",
            "questions": []
          },
          {
            "id": "gdcd-9-b3",
            "number": 3,
            "title": "Bài 3: Tích cực tham gia các hoạt động cộng đồng",
            "chapter": "Giáo dục công dân 9",
            "summary": "Thiện nguyện, bảo vệ môi trường, hoạt động xã hội.",
            "questions": []
          },
          {
            "id": "gdcd-9-b4",
            "number": 4,
            "title": "Bài 4: Khách quan và công bằng",
            "chapter": "Giáo dục công dân 9",
            "summary": "Đánh giá sự việc trung thực, không thiên vị.",
            "questions": []
          },
          {
            "id": "gdcd-9-b5",
            "number": 5,
            "title": "Bài 5: Bảo vệ hòa bình",
            "chapter": "Giáo dục công dân 9",
            "summary": "Phản đối chiến tranh phi nghĩa, giữ gìn hòa bình.",
            "questions": []
          },
          {
            "id": "gdcd-9-b6",
            "number": 6,
            "title": "Bài 6: Quản lí thời gian hiệu quả",
            "chapter": "Giáo dục công dân 9",
            "summary": "Sắp xếp công việc theo mức độ ưu tiên.",
            "questions": []
          },
          {
            "id": "gdcd-9-b7",
            "number": 7,
            "title": "Bài 7: Thích ứng với thay đổi",
            "chapter": "Giáo dục công dân 9",
            "summary": "Chủ động điều chỉnh tâm lí và hành vi khi hoàn cảnh đổi thay.",
            "questions": []
          },
          {
            "id": "gdcd-9-b8",
            "number": 8,
            "title": "Bài 8: Tiêu dùng thông minh",
            "chapter": "Giáo dục công dân 9",
            "summary": "Kiểm tra nguồn gốc, chất lượng, giá cả hàng hóa.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-9",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-9-b1",
            "number": 1,
            "title": "Bài 1: Thế giới kĩ thuật số",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Vai trò bộ vi xử lí và thiết bị thông minh.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b2",
            "number": 2,
            "title": "Bài 2: Thông tin trong giải quyết vấn đề",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Tiêu chí đánh giá chất lượng thông tin.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b3",
            "number": 3,
            "title": "Bài 3: Thực hành: Đánh giá chất lượng thông tin",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Kiểm chứng thông tin trên mạng.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b4",
            "number": 4,
            "title": "Bài 4: Một số vấn đề pháp lí về sử dụng dịch vụ Internet",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Luật An ninh mạng và phòng tránh vi phạm.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b5",
            "number": 5,
            "title": "Bài 5: Tìm hiểu phần mềm mô phỏng",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Lợi ích phần mềm mô phỏng (PhET, Crocodile...).",
            "questions": []
          },
          {
            "id": "tinhoc-9-b6",
            "number": 6,
            "title": "Bài 6: Thực hành: Khai thác phần mềm mô phỏng",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Mô phỏng thí nghiệm khoa học.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b7",
            "number": 7,
            "title": "Bài 7: Trình bày thông tin trong trao đổi và hợp tác",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Sơ đồ tư duy và bài trình chiếu cộng tác.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b8",
            "number": 8,
            "title": "Bài 8: Thực hành: Sử dụng công cụ trực quan trình bày thông tin",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Trình bày báo cáo nhóm.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b9",
            "number": 9,
            "title": "Bài 9a: Sử dụng công cụ xác thực dữ liệu",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Data Validation trong Excel.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b10",
            "number": 10,
            "title": "Bài 10a: Sử dụng hàm COUNTIF",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Đếm theo điều kiện.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b11",
            "number": 11,
            "title": "Bài 11a: Sử dụng hàm SUMIF",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Tính tổng theo điều kiện.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b12",
            "number": 12,
            "title": "Bài 12a: Sử dụng hàm IF",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Hàm điều kiện IF.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b13",
            "number": 13,
            "title": "Bài 13a: Hoàn thiện bảng tính quản lí tài chính gia đình",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Thực hành tổng hợp Excel.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b14",
            "number": 14,
            "title": "Bài 14: Giải quyết vấn đề",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Quy trình phân tích bài toán và thiết kế giải pháp.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b15",
            "number": 15,
            "title": "Bài 15: Bài toán tin học",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Input, Output và thuật toán.",
            "questions": []
          },
          {
            "id": "tinhoc-9-b16",
            "number": 16,
            "title": "Bài 16: Thực hành lập chương trình máy tính & Tin học với định hướng nghề nghiệp",
            "chapter": "Chủ đề 6: Hướng nghiệp với Tin học",
            "summary": "Các nhóm nghề CNTT.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-9",
        "name": "Công nghệ",
        "icon": "⚙️",
        "lessons": [
          {
            "id": "congnghe-9-b1",
            "number": 1,
            "title": "Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật và công nghệ",
            "chapter": "Phần chung: Định hướng nghề nghiệp",
            "summary": "Vai trò, đặc điểm và yêu cầu của các nghề kĩ thuật, công nghệ.",
            "questions": []
          },
          {
            "id": "congnghe-9-b2",
            "number": 2,
            "title": "Bài 2: Cơ cấu hệ thống giáo dục quốc dân",
            "chapter": "Phần chung: Định hướng nghề nghiệp",
            "summary": "Phân luồng học sinh sau THCS vào THPT, trung cấp nghề, cao đẳng.",
            "questions": []
          },
          {
            "id": "congnghe-9-b3",
            "number": 3,
            "title": "Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam",
            "chapter": "Phần chung: Định hướng nghề nghiệp",
            "summary": "Nhu cầu nhân lực, xu hướng việc làm kĩ thuật công nghệ.",
            "questions": []
          },
          {
            "id": "congnghe-9-b4",
            "number": 4,
            "title": "Bài 4: Quy trình lựa chọn nghề nghiệp",
            "chapter": "Phần chung: Định hướng nghề nghiệp",
            "summary": "Các bước đánh giá bản thân, tìm hiểu nghề và ra quyết định.",
            "questions": []
          },
          {
            "id": "congnghe-9-b5",
            "number": 5,
            "title": "Bài 5: Dự án: Tự đánh giá mức độ phù hợp với ngành nghề kĩ thuật, công nghệ",
            "chapter": "Phần chung: Định hướng nghề nghiệp",
            "summary": "Thực hành tự đánh giá năng lực nghề nghiệp.",
            "questions": []
          },
          {
            "id": "congnghe-9-b6",
            "number": 6,
            "title": "Bài 1: Thiết bị đóng cắt và lấy điện trong gia đình",
            "chapter": "Mô-đun 1: Lắp đặt mạng điện trong nhà",
            "summary": "Công tắc, cầu dao, aptomat, ổ cắm và phích cắm điện.",
            "questions": []
          },
          {
            "id": "congnghe-9-b7",
            "number": 7,
            "title": "Bài 2: Dụng cụ đo điện cơ bản",
            "chapter": "Mô-đun 1: Lắp đặt mạng điện trong nhà",
            "summary": "Đồng hồ vạn năng, ampe kìm, công tơ điện.",
            "questions": []
          },
          {
            "id": "congnghe-9-b8",
            "number": 8,
            "title": "Bài 3: Thiết kế mạng điện trong nhà",
            "chapter": "Mô-đun 1: Lắp đặt mạng điện trong nhà",
            "summary": "Sơ đồ nguyên lí và sơ đồ lắp đặt mạch điện chiếu sáng.",
            "questions": []
          },
          {
            "id": "congnghe-9-b9",
            "number": 9,
            "title": "Bài 4: Vật liệu, thiết bị và dụng cụ dùng cho lắp đặt mạng điện trong nhà",
            "chapter": "Mô-đun 1: Lắp đặt mạng điện trong nhà",
            "summary": "Dây dẫn điện, ống luồn dây, kìm, tua vít, bút thử điện.",
            "questions": []
          },
          {
            "id": "congnghe-9-b10",
            "number": 10,
            "title": "Bài 5: Tính toán chi phí mạng điện trong nhà",
            "chapter": "Mô-đun 1: Lắp đặt mạng điện trong nhà",
            "summary": "Dự toán số lượng vật tư và chi phí lắp đặt.",
            "questions": []
          },
          {
            "id": "congnghe-9-b11",
            "number": 11,
            "title": "Bài 6: Thực hành: Lắp đặt mạng điện trong nhà",
            "chapter": "Mô-đun 1: Lắp đặt mạng điện trong nhà",
            "summary": "Lắp mạch bảng điện, mạch đèn cầu thang an toàn.",
            "questions": []
          },
          {
            "id": "congnghe-9-b12",
            "number": 12,
            "title": "Bài 7: Một số ngành nghề liên quan đến lắp đặt mạng điện",
            "chapter": "Mô-đun 1: Lắp đặt mạng điện trong nhà",
            "summary": "Thợ điện dân dụng, kĩ sư điện.",
            "questions": []
          },
          {
            "id": "congnghe-9-b13",
            "number": 13,
            "title": "Bài 1: Giới thiệu chung về cây ăn quả",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Vai trò, đặc điểm thực vật học và yêu cầu ngoại cảnh cây ăn quả.",
            "questions": []
          },
          {
            "id": "congnghe-9-b14",
            "number": 14,
            "title": "Bài 2: Nhân giống vô tính cây ăn quả",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Giâm cành, chiết cành, ghép cành/mắt.",
            "questions": []
          },
          {
            "id": "congnghe-9-b15",
            "number": 15,
            "title": "Bài 3: Kĩ thuật trồng và chăm sóc cây ăn quả có múi",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Trồng và chăm sóc cam, bưởi, chanh, quýt.",
            "questions": []
          },
          {
            "id": "congnghe-9-b16",
            "number": 16,
            "title": "Bài 4: Kĩ thuật trồng và chăm sóc cây nhãn",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Quy trình trồng, cắt tỉa, phòng sâu bệnh cây nhãn.",
            "questions": []
          },
          {
            "id": "congnghe-9-b17",
            "number": 17,
            "title": "Bài 5: Kĩ thuật trồng và chăm sóc cây xoài",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Kĩ thuật trồng, xử lí ra hoa và thu hoạch xoài.",
            "questions": []
          },
          {
            "id": "congnghe-9-b18",
            "number": 18,
            "title": "Bài 6: Kĩ thuật trồng và chăm sóc cây sầu riêng",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Đặc điểm sinh trưởng và chăm sóc sầu riêng.",
            "questions": []
          },
          {
            "id": "congnghe-9-b19",
            "number": 19,
            "title": "Bài 7: Kĩ thuật trồng và chăm sóc cây chuối",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Trồng chuối bằng chồi hoặc nuôi cấy mô.",
            "questions": []
          },
          {
            "id": "congnghe-9-b20",
            "number": 20,
            "title": "Bài 8: Dự án trồng cây ăn quả",
            "chapter": "Mô-đun 2: Trồng cây ăn quả",
            "summary": "Lập kế hoạch trồng và chăm sóc cây ăn quả.",
            "questions": []
          },
          {
            "id": "congnghe-9-b21",
            "number": 21,
            "title": "Bài 1: Thành phần dinh dưỡng trong thực phẩm",
            "chapter": "Mô-đun 3: Chế biến thực phẩm",
            "summary": "Chất đạm, béo, đường bột, vitamin, chất khoáng.",
            "questions": []
          },
          {
            "id": "congnghe-9-b22",
            "number": 22,
            "title": "Bài 2: Lựa chọn và bảo quản thực phẩm",
            "chapter": "Mô-đun 3: Chế biến thực phẩm",
            "summary": "Cách chọn thực phẩm tươi ngon và bảo quản an toàn.",
            "questions": []
          },
          {
            "id": "congnghe-9-b23",
            "number": 23,
            "title": "Bài 3: Một số ngành nghề liên quan đến chế biến thực phẩm",
            "chapter": "Mô-đun 3: Chế biến thực phẩm",
            "summary": "Đầu bếp, kĩ sư công nghệ thực phẩm.",
            "questions": []
          },
          {
            "id": "congnghe-9-b24",
            "number": 24,
            "title": "Bài 4: An toàn lao động và an toàn vệ sinh thực phẩm",
            "chapter": "Mô-đun 3: Chế biến thực phẩm",
            "summary": "Phòng tránh ngộ độc thực phẩm và tai nạn nhà bếp.",
            "questions": []
          },
          {
            "id": "congnghe-9-b25",
            "number": 25,
            "title": "Bài 5: Dự án: Tính toán chi phí bữa ăn theo thực đơn",
            "chapter": "Mô-đun 3: Chế biến thực phẩm",
            "summary": "Xây dựng thực đơn cân bằng dinh dưỡng và tiết kiệm.",
            "questions": []
          },
          {
            "id": "congnghe-9-b26",
            "number": 26,
            "title": "Bài 6: Chế biến thực phẩm có sử dụng nhiệt",
            "chapter": "Mô-đun 3: Chế biến thực phẩm",
            "summary": "Luộc, hấp, rán, xào, nướng, kho.",
            "questions": []
          },
          {
            "id": "congnghe-9-b27",
            "number": 27,
            "title": "Bài 7: Chế biến thực phẩm không sử dụng nhiệt",
            "chapter": "Mô-đun 3: Chế biến thực phẩm",
            "summary": "Trộn dầu giấm, nộm (gỏi), muối chua.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-9",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-9-b1",
            "number": 1,
            "title": "Unit 1: Local Community",
            "chapter": "Unit 1: Local Community",
            "summary": "Question words before to-infinitives & Phrasal verbs.",
            "questions": []
          },
          {
            "id": "tienganh-9-b2",
            "number": 2,
            "title": "Unit 2: City Life",
            "chapter": "Unit 2: City Life",
            "summary": "Double comparatives.",
            "questions": []
          },
          {
            "id": "tienganh-9-b3",
            "number": 3,
            "title": "Unit 3: Healthy Living for Teens",
            "chapter": "Unit 3: Healthy Living for Teens",
            "summary": "Modal verbs in first conditional.",
            "questions": []
          },
          {
            "id": "tienganh-9-b4",
            "number": 4,
            "title": "Unit 4: Remembering the Past",
            "chapter": "Unit 4: Remembering the Past",
            "summary": "Past Continuous & wish + Past Simple.",
            "questions": []
          },
          {
            "id": "tienganh-9-b5",
            "number": 5,
            "title": "Unit 5: Our Experiences",
            "chapter": "Unit 5: Our Experiences",
            "summary": "Present Perfect.",
            "questions": []
          },
          {
            "id": "tienganh-9-b6",
            "number": 6,
            "title": "Unit 6: Vietnamese Lifestyle: Then and Now",
            "chapter": "Unit 6: Vietnamese Lifestyle: Then and Now",
            "summary": "Verbs + to-infinitive / V-ing.",
            "questions": []
          },
          {
            "id": "tienganh-9-b7",
            "number": 7,
            "title": "Unit 7: Natural Wonders of the World",
            "chapter": "Unit 7: Natural Wonders of the World",
            "summary": "Reported speech (Yes/No questions).",
            "questions": []
          },
          {
            "id": "tienganh-9-b8",
            "number": 8,
            "title": "Unit 8: Tourism",
            "chapter": "Unit 8: Tourism",
            "summary": "Relative pronouns.",
            "questions": []
          },
          {
            "id": "tienganh-9-b9",
            "number": 9,
            "title": "Unit 9: World Englishes",
            "chapter": "Unit 9: World Englishes",
            "summary": "Defining relative clauses.",
            "questions": []
          },
          {
            "id": "tienganh-9-b10",
            "number": 10,
            "title": "Unit 10: Planet Earth",
            "chapter": "Unit 10: Planet Earth",
            "summary": "Non-defining relative clauses.",
            "questions": []
          },
          {
            "id": "tienganh-9-b11",
            "number": 11,
            "title": "Unit 11: Electronic Devices",
            "chapter": "Unit 11: Electronic Devices",
            "summary": "suggest / advise / recommend + V-ing / (that) clause.",
            "questions": []
          },
          {
            "id": "tienganh-9-b12",
            "number": 12,
            "title": "Unit 12: Career Choices",
            "chapter": "Unit 12: Career Choices",
            "summary": "Adverbial clauses of concession, result, reason.",
            "questions": []
          }
        ]
      },
      {
        "id": "amnhac-9",
        "name": "Âm nhạc",
        "icon": "🎵",
        "lessons": [
          {
            "id": "amnhac-9-b1",
            "number": 1,
            "title": "Chủ đề 1: Nối vòng tay lớn (Bài 1–2)",
            "chapter": "Chủ đề 1: Nối vòng tay lớn",
            "summary": "Hát Nối vòng tay lớn; ôn tập đọc nhạc và nhạc cụ.",
            "questions": []
          },
          {
            "id": "amnhac-9-b2",
            "number": 2,
            "title": "Chủ đề 2: Khát vọng tuổi trẻ (Bài 3–4)",
            "chapter": "Chủ đề 2: Khát vọng tuổi trẻ",
            "summary": "Hát Khát vọng tuổi trẻ; đọc nhạc nhịp 6/8.",
            "questions": []
          },
          {
            "id": "amnhac-9-b3",
            "number": 3,
            "title": "Chủ đề 3: Kỉ niệm dưới mái trường (Bài 5–6)",
            "chapter": "Chủ đề 3: Kỉ niệm dưới mái trường",
            "summary": "Hát Bụi phấn / Mong ước kỉ niệm xưa; thực hành hát bè.",
            "questions": []
          },
          {
            "id": "amnhac-9-b4",
            "number": 4,
            "title": "Chủ đề 4: Giai điệu quê hương (Bài 7–8)",
            "chapter": "Chủ đề 4: Giai điệu quê hương",
            "summary": "Tìm hiểu Nhã nhạc cung đình Huế, Không gian văn hóa Cồng chiêng Tây Nguyên.",
            "questions": []
          },
          {
            "id": "amnhac-9-b5",
            "number": 5,
            "title": "Chủ đề 5: Trái đất xanh (Bài 9–10)",
            "chapter": "Chủ đề 5: Trái đất xanh",
            "summary": "Hát chủ đề môi trường; đọc nhạc giọng thứ.",
            "questions": []
          },
          {
            "id": "amnhac-9-b6",
            "number": 6,
            "title": "Chủ đề 6: Tiếng hát hòa bình (Bài 11–12)",
            "chapter": "Chủ đề 6: Tiếng hát hòa bình",
            "summary": "Nghe và cảm nhận các ca khúc cách mạng, hòa bình.",
            "questions": []
          },
          {
            "id": "amnhac-9-b7",
            "number": 7,
            "title": "Chủ đề 7: Âm nhạc nước ngoài (Bài 13–14)",
            "chapter": "Chủ đề 7: Âm nhạc nước ngoài",
            "summary": "Tìm hiểu các dòng nhạc đại chúng thế giới (Pop, Rock, Jazz).",
            "questions": []
          },
          {
            "id": "amnhac-9-b8",
            "number": 8,
            "title": "Chủ đề 8: Một thời để nhớ (Bài 15–16)",
            "chapter": "Chủ đề 8: Một thời để nhớ",
            "summary": "Hát Tạm biệt mái trường; biểu diễn tổng kết bậc THCS.",
            "questions": []
          }
        ]
      },
      {
        "id": "mithuat-9",
        "name": "Mĩ thuật",
        "icon": "🎨",
        "lessons": [
          {
            "id": "mithuat-9-b1",
            "number": 1,
            "title": "Chủ đề 1: Cuộc sống muôn màu (Bài 1–2)",
            "chapter": "Chủ đề 1: Cuộc sống muôn màu",
            "summary": "Khai thác chất liệu tổng hợp thể hiện đề tài sinh hoạt.",
            "questions": []
          },
          {
            "id": "mithuat-9-b2",
            "number": 2,
            "title": "Chủ đề 2: Nghệ thuật đương đại thế giới (Bài 3–4)",
            "chapter": "Chủ đề 2: Nghệ thuật đương đại thế giới",
            "summary": "Tìm hiểu các trào lưu nghệ thuật hiện đại và đương đại.",
            "questions": []
          },
          {
            "id": "mithuat-9-b3",
            "number": 3,
            "title": "Chủ đề 3: Thiết kế mĩ thuật sách (Bài 5–6)",
            "chapter": "Chủ đề 3: Thiết kế mĩ thuật sách",
            "summary": "Thiết kế bìa sách, trình bày dàn trang và minh họa.",
            "questions": []
          },
          {
            "id": "mithuat-9-b4",
            "number": 4,
            "title": "Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật (Bài 7–8)",
            "chapter": "Chủ đề 4: Cảm hứng trong sáng tác",
            "summary": "Phát triển ý tưởng sáng tác từ hiện thực và trí tưởng tượng.",
            "questions": []
          },
          {
            "id": "mithuat-9-b5",
            "number": 5,
            "title": "Chủ đề 5: Vẻ đẹp của nguyên mẫu trong thực hành, sáng tạo (Bài 9–10)",
            "chapter": "Chủ đề 5: Vẻ đẹp nguyên mẫu",
            "summary": "Kí họa dáng người, tĩnh vật và cách điệu tạo hình.",
            "questions": []
          },
          {
            "id": "mithuat-9-b6",
            "number": 6,
            "title": "Chủ đề 6: Nghệ thuật múa rối (Bài 11–12)",
            "chapter": "Chủ đề 6: Nghệ thuật múa rối",
            "summary": "Tìm hiểu rối nước, rối cạn và tạo hình con rối.",
            "questions": []
          },
          {
            "id": "mithuat-9-b7",
            "number": 7,
            "title": "Chủ đề 7: Mĩ thuật đương đại Việt Nam (Bài 13–14)",
            "chapter": "Chủ đề 7: Mĩ thuật đương đại Việt Nam",
            "summary": "Tìm hiểu tranh sơn mài, lụa, khắc gỗ hiện đại Việt Nam.",
            "questions": []
          },
          {
            "id": "mithuat-9-b8",
            "number": 8,
            "title": "Chủ đề 8: Hướng nghiệp mĩ thuật (Bài 15–16)",
            "chapter": "Chủ đề 8: Hướng nghiệp",
            "summary": "Định hướng ngành học thiết kế, kiến trúc, hội họa sau THCS.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-9",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-9-b1",
            "number": 1,
            "title": "Sử dụng yếu tố tự nhiên và rèn luyện thể lực",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Phòng chống đuối nước, sốc nhiệt và tự đánh giá thể lực.",
            "questions": []
          },
          {
            "id": "gdtc-9-b2",
            "number": 2,
            "title": "Chủ đề 1: Chạy cự li ngắn (100m)",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Phối hợp hoàn chỉnh 4 giai đoạn chạy ngắn 100m.",
            "questions": []
          },
          {
            "id": "gdtc-9-b3",
            "number": 3,
            "title": "Chủ đề 2: Nhảy cao / Nhảy xa",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Hoàn thiện kĩ thuật giậm nhảy và qua xà.",
            "questions": []
          },
          {
            "id": "gdtc-9-b4",
            "number": 4,
            "title": "Chủ đề 3: Chạy bền",
            "chapter": "Phần 2: Vận động cơ bản",
            "summary": "Chạy cự li trung bình và hồi phục sau chạy.",
            "questions": []
          },
          {
            "id": "gdtc-9-b5",
            "number": 5,
            "title": "Chủ đề 1: Bóng đá / Bóng rổ / Cầu lông / Bóng chuyền",
            "chapter": "Phần 3: Thể thao tự chọn",
            "summary": "Vận dụng kĩ chiến thuật cơ bản trong thi đấu tập.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-9",
        "name": "Hoạt động trải nghiệm, hướng nghiệp",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-9-b1",
            "number": 1,
            "title": "Chủ đề 1: Xây dựng truyền thống nhà trường",
            "chapter": "Chủ đề 1: Em với nhà trường",
            "summary": "Tôn trọng sự khác biệt, phòng chống bạo lực học đường.",
            "questions": []
          },
          {
            "id": "hdtn-9-b2",
            "number": 2,
            "title": "Chủ đề 2: Phát triển phẩm chất, năng lực bản thân",
            "chapter": "Chủ đề 2: Khám phá bản thân",
            "summary": "Đánh giá điểm mạnh, điểm yếu và khả năng thích ứng thay đổi.",
            "questions": []
          },
          {
            "id": "hdtn-9-b3",
            "number": 3,
            "title": "Chủ đề 3: Quản lí cảm xúc và ứng phó áp lực thi cử",
            "chapter": "Chủ đề 3: Trách nhiệm với bản thân",
            "summary": "Kĩ năng kiểm soát căng thẳng trong học tập và thi vào lớp 10.",
            "questions": []
          },
          {
            "id": "hdtn-9-b4",
            "number": 4,
            "title": "Chủ đề 4: Giao tiếp hiệu quả và quản lí tài chính",
            "chapter": "Chủ đề 4: Rèn luyện bản thân",
            "summary": "Lập kế hoạch tiết kiệm và tự chủ chi tiêu.",
            "questions": []
          },
          {
            "id": "hdtn-9-b5",
            "number": 5,
            "title": "Chủ đề 5: Trách nhiệm và chia sẻ trong gia đình",
            "chapter": "Chủ đề 5: Em với gia đình",
            "summary": "Thảo luận định hướng tương lai cùng cha mẹ.",
            "questions": []
          },
          {
            "id": "hdtn-9-b6",
            "number": 6,
            "title": "Chủ đề 6: Hoạt động thiện nguyện và văn hóa cộng đồng",
            "chapter": "Chủ đề 6: Em với cộng đồng",
            "summary": "Tổ chức hoạt động cộng đồng và giữ gìn bản sắc địa phương.",
            "questions": []
          },
          {
            "id": "hdtn-9-b7",
            "number": 7,
            "title": "Chủ đề 7: Bảo vệ cảnh quan và ứng phó biến đổi khí hậu",
            "chapter": "Chủ đề 7: Em với thiên nhiên",
            "summary": "Truyền thông bảo vệ môi trường bền vững.",
            "questions": []
          },
          {
            "id": "hdtn-9-b8",
            "number": 8,
            "title": "Chủ đề 8: Hệ thống giáo dục nghề nghiệp và thị trường lao động",
            "chapter": "Chủ đề 8: Định hướng nghề nghiệp",
            "summary": "Tìm hiểu phân luồng sau THCS: THPT, Trung cấp nghề, GDTX.",
            "questions": []
          },
          {
            "id": "hdtn-9-b9",
            "number": 9,
            "title": "Chủ đề 9: Xây dựng kế hoạch học tập và nghề nghiệp",
            "chapter": "Chủ đề 9: Lựa chọn hướng đi sau THCS",
            "summary": "Tự đánh giá năng lực, sở thích để lựa chọn con đường sau lớp 9.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 10,
    "label": "Lớp 10",
    "level": "THPT",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=10",
    "subjects": [
      {
        "id": "toan-10",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-10-b1",
            "number": 1,
            "title": "Bài 1: Mệnh đề",
            "chapter": "Chương I: Mệnh đề và tập hợp",
            "summary": "Mệnh đề, phủ định, kéo theo, đảo, tương đương, kí hiệu ∀ và ∃.",
            "questions": []
          },
          {
            "id": "toan-10-b2",
            "number": 2,
            "title": "Bài 2: Tập hợp và các phép toán trên tập hợp",
            "chapter": "Chương I: Mệnh đề và tập hợp",
            "summary": "Tập con, giao (∩), hợp (∪), hiệu (\\), phần bù.",
            "questions": []
          },
          {
            "id": "toan-10-b3",
            "number": 3,
            "title": "Bài 3: Bất phương trình bậc nhất hai ẩn",
            "chapter": "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
            "summary": "Miền nghiệm của bất phương trình ax + by ≤ c.",
            "questions": []
          },
          {
            "id": "toan-10-b4",
            "number": 4,
            "title": "Bài 4: Hệ bất phương trình bậc nhất hai ẩn",
            "chapter": "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
            "summary": "Miền nghiệm của hệ và bài toán tối ưu.",
            "questions": []
          },
          {
            "id": "toan-10-b5",
            "number": 5,
            "title": "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°",
            "chapter": "Chương III: Hệ thức lượng trong tam giác",
            "summary": "sin, cos, tan, cot góc tù và hai góc bù nhau.",
            "questions": []
          },
          {
            "id": "toan-10-b6",
            "number": 6,
            "title": "Bài 6: Hệ thức lượng trong tam giác",
            "chapter": "Chương III: Hệ thức lượng trong tam giác",
            "summary": "Định lí côsin, định lí sin và công thức diện tích.",
            "questions": []
          },
          {
            "id": "toan-10-b7",
            "number": 7,
            "title": "Bài 7: Các khái niệm mở đầu",
            "chapter": "Chương IV: Vectơ",
            "summary": "Vectơ, cùng phương, cùng hướng, bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-10-b8",
            "number": 8,
            "title": "Bài 8: Tổng và hiệu của hai vectơ",
            "chapter": "Chương IV: Vectơ",
            "summary": "Quy tắc ba điểm, hình bình hành, hiệu vectơ.",
            "questions": []
          },
          {
            "id": "toan-10-b9",
            "number": 9,
            "title": "Bài 9: Tích của một vectơ với một số",
            "chapter": "Chương IV: Vectơ",
            "summary": "k·a, trung điểm, trọng tâm tam giác.",
            "questions": []
          },
          {
            "id": "toan-10-b10",
            "number": 10,
            "title": "Bài 10: Vectơ trong mặt phẳng tọa độ",
            "chapter": "Chương IV: Vectơ",
            "summary": "Tọa độ điểm, tọa độ vectơ.",
            "questions": []
          },
          {
            "id": "toan-10-b11",
            "number": 11,
            "title": "Bài 11: Tích vô hướng của hai vectơ",
            "chapter": "Chương IV: Vectơ",
            "summary": "a·b = |a||b|cos(a,b) = x₁x₂ + y₁y₂.",
            "questions": []
          },
          {
            "id": "toan-10-b12",
            "number": 12,
            "title": "Bài 12: Số gần đúng và sai số",
            "chapter": "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
            "summary": "Sai số tuyệt đối, tương đối và quy tròn.",
            "questions": []
          },
          {
            "id": "toan-10-b13",
            "number": 13,
            "title": "Bài 13: Các số đặc trưng đo xu thế trung tâm",
            "chapter": "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
            "summary": "Số trung bình, trung vị, tứ phân vị, mốt.",
            "questions": []
          },
          {
            "id": "toan-10-b14",
            "number": 14,
            "title": "Bài 14: Các số đặc trưng đo độ phân tán",
            "chapter": "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
            "summary": "Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn.",
            "questions": []
          },
          {
            "id": "toan-10-b15",
            "number": 15,
            "title": "Bài 15: Hàm số",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Tập xác định, đồng biến, nghịch biến.",
            "questions": []
          },
          {
            "id": "toan-10-b16",
            "number": 16,
            "title": "Bài 16: Hàm số bậc hai",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Parabol y = ax² + bx + c.",
            "questions": []
          },
          {
            "id": "toan-10-b17",
            "number": 17,
            "title": "Bài 17: Dấu của tam thức bậc hai",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Định lí dấu tam thức bậc hai theo Δ.",
            "questions": []
          },
          {
            "id": "toan-10-b18",
            "number": 18,
            "title": "Bài 18: Phương trình quy về phương trình bậc hai",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Phương trình chứa căn thức.",
            "questions": []
          },
          {
            "id": "toan-10-b19",
            "number": 19,
            "title": "Bài 19: Phương trình đường thẳng",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Phương trình tổng quát và tham số.",
            "questions": []
          },
          {
            "id": "toan-10-b20",
            "number": 20,
            "title": "Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Góc và khoảng cách từ điểm đến đường thẳng.",
            "questions": []
          },
          {
            "id": "toan-10-b21",
            "number": 21,
            "title": "Bài 21: Đường tròn trong mặt phẳng tọa độ",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Phương trình đường tròn và tiếp tuyến.",
            "questions": []
          },
          {
            "id": "toan-10-b22",
            "number": 22,
            "title": "Bài 22: Ba đường conic",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Elip, Hypebol, Parabol.",
            "questions": []
          },
          {
            "id": "toan-10-b23",
            "number": 23,
            "title": "Bài 23: Quy tắc đếm",
            "chapter": "Chương VIII: Đại số tổ hợp",
            "summary": "Quy tắc cộng và quy tắc nhân.",
            "questions": []
          },
          {
            "id": "toan-10-b24",
            "number": 24,
            "title": "Bài 24: Hoán vị, chỉnh hợp và tổ hợp",
            "chapter": "Chương VIII: Đại số tổ hợp",
            "summary": "P_n, A_n^k, C_n^k.",
            "questions": []
          },
          {
            "id": "toan-10-b25",
            "number": 25,
            "title": "Bài 25: Nhị thức Newton",
            "chapter": "Chương VIII: Đại số tổ hợp",
            "summary": "Khai triển (a + b)^n với n = 4, 5.",
            "questions": []
          },
          {
            "id": "toan-10-b26",
            "number": 26,
            "title": "Bài 26: Biến cố và định nghĩa cổ điển của xác suất",
            "chapter": "Chương IX: Tính xác suất theo định nghĩa cổ điển",
            "summary": "Không gian mẫu và biến cố.",
            "questions": []
          },
          {
            "id": "toan-10-b27",
            "number": 27,
            "title": "Bài 27: Thực hành tính xác suất theo định nghĩa cổ điển",
            "chapter": "Chương IX: Tính xác suất theo định nghĩa cổ điển",
            "summary": "Tính P(A) bằng tổ hợp.",
            "questions": []
          }
        ]
      },
      {
        "id": "vatli-10",
        "name": "Vật lí",
        "icon": "⚡",
        "lessons": [
          {
            "id": "vatli-10-b1",
            "number": 1,
            "title": "Bài 1: Làm quen với Vật lí",
            "chapter": "Chương I: Mở đầu",
            "summary": "Đối tượng nghiên cứu và phương pháp thực nghiệm.",
            "questions": []
          },
          {
            "id": "vatli-10-b2",
            "number": 2,
            "title": "Bài 2: Các quy tắc an toàn trong phòng thực hành Vật lí",
            "chapter": "Chương I: Mở đầu",
            "summary": "An toàn điện, nhiệt, quang.",
            "questions": []
          },
          {
            "id": "vatli-10-b3",
            "number": 3,
            "title": "Bài 3: Thực hành tính sai số trong phép đo. Ghi kết quả đo",
            "chapter": "Chương I: Mở đầu",
            "summary": "Sai số hệ thống và sai số ngẫu nhiên.",
            "questions": []
          },
          {
            "id": "vatli-10-b4",
            "number": 4,
            "title": "Bài 4: Độ dịch chuyển và quãng đường đi được",
            "chapter": "Chương II: Động học",
            "summary": "Vectơ độ dịch chuyển d và quãng đường s.",
            "questions": []
          },
          {
            "id": "vatli-10-b5",
            "number": 5,
            "title": "Bài 5: Tốc độ và vận tốc",
            "chapter": "Chương II: Động học",
            "summary": "Tốc độ trung bình và vận tốc trung bình.",
            "questions": []
          },
          {
            "id": "vatli-10-b6",
            "number": 6,
            "title": "Bài 6: Thực hành: Đo tốc độ của vật chuyển động",
            "chapter": "Chương II: Động học",
            "summary": "Đo tốc độ bằng cổng quang điện.",
            "questions": []
          },
          {
            "id": "vatli-10-b7",
            "number": 7,
            "title": "Bài 7: Đồ thị độ dịch chuyển - thời gian",
            "chapter": "Chương II: Động học",
            "summary": "Đọc đồ thị d - t.",
            "questions": []
          },
          {
            "id": "vatli-10-b8",
            "number": 8,
            "title": "Bài 8: Chuyển động biến đổi. Gia tốc",
            "chapter": "Chương II: Động học",
            "summary": "a = Δv/Δt (m/s²).",
            "questions": []
          },
          {
            "id": "vatli-10-b9",
            "number": 9,
            "title": "Bài 9: Chuyển động thẳng biến đổi đều",
            "chapter": "Chương II: Động học",
            "summary": "v = v₀ + at, d = v₀t + ½at², v² - v₀² = 2ad.",
            "questions": []
          },
          {
            "id": "vatli-10-b10",
            "number": 10,
            "title": "Bài 10: Sự rơi tự do",
            "chapter": "Chương II: Động học",
            "summary": "Gia tốc rơi tự do g ≈ 9,8 m/s².",
            "questions": []
          },
          {
            "id": "vatli-10-b11",
            "number": 11,
            "title": "Bài 11: Thực hành: Đo gia tốc rơi tự do",
            "chapter": "Chương II: Động học",
            "summary": "Thí nghiệm đo g.",
            "questions": []
          },
          {
            "id": "vatli-10-b12",
            "number": 12,
            "title": "Bài 12: Chuyển động ném",
            "chapter": "Chương II: Động học",
            "summary": "Ném ngang và ném xiên.",
            "questions": []
          },
          {
            "id": "vatli-10-b13",
            "number": 13,
            "title": "Bài 13: Tổng hợp và phân tích lực. Cân bằng lực",
            "chapter": "Chương III: Động lực học",
            "summary": "Quy tắc hình bình hành.",
            "questions": []
          },
          {
            "id": "vatli-10-b14",
            "number": 14,
            "title": "Bài 14: Định luật 1 Newton",
            "chapter": "Chương III: Động lực học",
            "summary": "Quán tính và trạng thái đứng yên/thẳng đều.",
            "questions": []
          },
          {
            "id": "vatli-10-b15",
            "number": 15,
            "title": "Bài 15: Định luật 2 Newton",
            "chapter": "Chương III: Động lực học",
            "summary": "F = m·a.",
            "questions": []
          },
          {
            "id": "vatli-10-b16",
            "number": 16,
            "title": "Bài 16: Định luật 3 Newton",
            "chapter": "Chương III: Động lực học",
            "summary": "Lực và phản lực.",
            "questions": []
          },
          {
            "id": "vatli-10-b17",
            "number": 17,
            "title": "Bài 17: Trọng lực và lực căng",
            "chapter": "Chương III: Động lực học",
            "summary": "P = mg và lực căng dây.",
            "questions": []
          },
          {
            "id": "vatli-10-b18",
            "number": 18,
            "title": "Bài 18: Lực ma sát",
            "chapter": "Chương III: Động lực học",
            "summary": "Ma sát nghỉ và ma sát trượt F_ms = μN.",
            "questions": []
          },
          {
            "id": "vatli-10-b19",
            "number": 19,
            "title": "Bài 19: Lực cản và lực nâng",
            "chapter": "Chương III: Động lực học",
            "summary": "Lực cản chất lưu và lực đẩy Archimedes.",
            "questions": []
          },
          {
            "id": "vatli-10-b20",
            "number": 20,
            "title": "Bài 20: Một số ví dụ về cách giải các bài toán thuộc phần động lực học",
            "chapter": "Chương III: Động lực học",
            "summary": "Phương pháp động lực học.",
            "questions": []
          },
          {
            "id": "vatli-10-b21",
            "number": 21,
            "title": "Bài 21: Moment lực. Cân bằng của vật rắn",
            "chapter": "Chương III: Động lực học",
            "summary": "M = F·d và quy tắc moment lực.",
            "questions": []
          },
          {
            "id": "vatli-10-b22",
            "number": 22,
            "title": "Bài 22: Thực hành: Tổng hợp lực",
            "chapter": "Chương III: Động lực học",
            "summary": "Thí nghiệm tổng hợp hai lực đồng quy và song song.",
            "questions": []
          },
          {
            "id": "vatli-10-b23",
            "number": 23,
            "title": "Bài 23: Năng lượng. Công cơ học",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "A = F·s·cosα.",
            "questions": []
          },
          {
            "id": "vatli-10-b24",
            "number": 24,
            "title": "Bài 24: Công suất",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "P = A/t = F·v.",
            "questions": []
          },
          {
            "id": "vatli-10-b25",
            "number": 25,
            "title": "Bài 25: Động năng, thế năng",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "W_đ = ½mv², W_t = mgh.",
            "questions": []
          },
          {
            "id": "vatli-10-b26",
            "number": 26,
            "title": "Bài 26: Cơ năng và định luật bảo toàn cơ năng",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "W = W_đ + W_t = const.",
            "questions": []
          },
          {
            "id": "vatli-10-b27",
            "number": 27,
            "title": "Bài 27: Hiệu suất",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "H = (A_ci/A_tp)·100%.",
            "questions": []
          },
          {
            "id": "vatli-10-b28",
            "number": 28,
            "title": "Bài 28: Động lượng",
            "chapter": "Chương V: Động lượng",
            "summary": "p = mv và F·Δt = Δp.",
            "questions": []
          },
          {
            "id": "vatli-10-b29",
            "number": 29,
            "title": "Bài 29: Định luật bảo toàn động lượng",
            "chapter": "Chương V: Động lượng",
            "summary": "Bảo toàn động lượng hệ cô lập.",
            "questions": []
          },
          {
            "id": "vatli-10-b30",
            "number": 30,
            "title": "Bài 30: Thực hành: Xác định động lượng của vật trước và sau va chạm",
            "chapter": "Chương V: Động lượng",
            "summary": "Thí nghiệm va chạm.",
            "questions": []
          },
          {
            "id": "vatli-10-b31",
            "number": 31,
            "title": "Bài 31: Động học của chuyển động tròn đều",
            "chapter": "Chương VI: Chuyển động tròn đều",
            "summary": "ω = Δθ/Δt, v = ωr.",
            "questions": []
          },
          {
            "id": "vatli-10-b32",
            "number": 32,
            "title": "Bài 32: Lực hướng tâm và gia tốc hướng tâm",
            "chapter": "Chương VI: Chuyển động tròn đều",
            "summary": "a_ht = v²/r, F_ht = mv²/r.",
            "questions": []
          },
          {
            "id": "vatli-10-b33",
            "number": 33,
            "title": "Bài 33: Biến dạng của vật rắn",
            "chapter": "Chương VII: Biến dạng của vật rắn. Áp suất chất lỏng",
            "summary": "Định luật Hooke F_đh = k|Δl|.",
            "questions": []
          },
          {
            "id": "vatli-10-b34",
            "number": 34,
            "title": "Bài 34: Khối lượng riêng. Áp suất chất lỏng",
            "chapter": "Chương VII: Biến dạng của vật rắn. Áp suất chất lỏng",
            "summary": "p = p₀ + ρgh.",
            "questions": []
          }
        ]
      },
      {
        "id": "hoahoc-10",
        "name": "Hóa học",
        "icon": "🧪",
        "lessons": [
          {
            "id": "hoahoc-10-b1",
            "number": 1,
            "title": "Bài 1: Thành phần của nguyên tử",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Proton, neutron, electron; kích thước và khối lượng nguyên tử.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b2",
            "number": 2,
            "title": "Bài 2: Nguyên tố hóa học",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Số hiệu nguyên tử, số khối, đồng vị và nguyên tử khối trung bình.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b3",
            "number": 3,
            "title": "Bài 3: Cấu trúc lớp vỏ electron nguyên tử",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Orbital nguyên tử (AO), lớp, phân lớp và cấu hình electron.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b4",
            "number": 4,
            "title": "Bài 4: Ôn tập chương 1",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Hệ thống kiến thức cấu tạo nguyên tử và cấu hình electron.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b5",
            "number": 5,
            "title": "Bài 5: Cấu tạo của bảng tuần hoàn các nguyên tố hóa học",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Ô, chu kì, nhóm A, nhóm B và nguyên tắc sắp xếp bảng tuần hoàn.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b6",
            "number": 6,
            "title": "Bài 6: Xu hướng biến đổi một số tính chất của nguyên tử",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Bán kính nguyên tử, độ âm điện, tính kim loại và phi kim.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b7",
            "number": 7,
            "title": "Bài 7: Xu hướng biến đổi thành phần và tính chất hợp chất",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Oxide cao nhất, hydroxide và tính acid-base trong chu kì.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b8",
            "number": 8,
            "title": "Bài 8: Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Sự biến đổi tuần hoàn tính chất và dự đoán tính chất nguyên tố.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b9",
            "number": 9,
            "title": "Bài 9: Ôn tập chương 2",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Bài tập định luật tuần hoàn và vị trí nguyên tố.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b10",
            "number": 10,
            "title": "Bài 10: Quy tắc octet",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Xu hướng đạt cấu hình bền vững khí hiếm của nguyên tử.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b11",
            "number": 11,
            "title": "Bài 11: Liên kết ion",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Sự hình thành ion, lực hút tĩnh điện và tinh thể ion.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b12",
            "number": 12,
            "title": "Bài 12: Liên kết cộng hóa trị",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Cặp electron dùng chung, liên kết phân cực/không phân cực, liên kết sigma và pi.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b13",
            "number": 13,
            "title": "Bài 13: Liên kết hydrogen và tương tác van der Waals",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Ảnh hưởng đến nhiệt độ sôi, nhiệt độ nóng chảy và tính tan.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b14",
            "number": 14,
            "title": "Bài 14: Ôn tập chương 3",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "So sánh các loại liên kết hóa học.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b15",
            "number": 15,
            "title": "Bài 15: Phản ứng oxi hóa – khử",
            "chapter": "Chương 4: Phản ứng oxi hóa - khử",
            "summary": "Số oxi hóa, chất khử, chất oxi hóa và cân bằng theo thăng bằng electron.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b16",
            "number": 16,
            "title": "Bài 16: Ôn tập chương 4",
            "chapter": "Chương 4: Phản ứng oxi hóa - khử",
            "summary": "Cân bằng và tính toán phản ứng oxi hóa - khử.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b17",
            "number": 17,
            "title": "Bài 17: Biến thiên enthalpy trong các phản ứng hóa học",
            "chapter": "Chương 5: Năng lượng hóa học",
            "summary": "Phản ứng tỏa nhiệt, thu nhiệt, enthalpy tạo thành chuẩn và năng lượng liên kết.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b18",
            "number": 18,
            "title": "Bài 18: Ôn tập chương 5",
            "chapter": "Chương 5: Năng lượng hóa học",
            "summary": "Tính biến thiên enthalpy chuẩn của phản ứng.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b19",
            "number": 19,
            "title": "Bài 19: Tốc độ phản ứng hóa học",
            "chapter": "Chương 6: Tốc độ phản ứng hóa học",
            "summary": "Tốc độ trung bình, các yếu tố ảnh hưởng (nồng độ, nhiệt độ, áp suất, diện tích bề mặt, xúc tác).",
            "questions": []
          },
          {
            "id": "hoahoc-10-b20",
            "number": 20,
            "title": "Bài 20: Ôn tập chương 6",
            "chapter": "Chương 6: Tốc độ phản ứng hóa học",
            "summary": "Vận dụng hệ số nhiệt độ Van't Hoff và các yếu tố tăng tốc độ phản ứng.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b21",
            "number": 21,
            "title": "Bài 21: Nhóm halogen",
            "chapter": "Chương 7: Nguyên tố nhóm VIIA (Halogen)",
            "summary": "Cấu tạo, tính chất vật lí, tính oxi hóa giảm dần từ F2 đến I2.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b22",
            "number": 22,
            "title": "Bài 22: Hydrogen halide. Muối halide",
            "chapter": "Chương 7: Nguyên tố nhóm VIIA (Halogen)",
            "summary": "Tính acid của HX (HF yếu, HCl, HBr, HI mạnh) và nhận biết ion halide bằng AgNO3.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b23",
            "number": 23,
            "title": "Bài 23: Ôn tập chương 7",
            "chapter": "Chương 7: Nguyên tố nhóm VIIA (Halogen)",
            "summary": "Tổng hợp hóa học nhóm VIIA.",
            "questions": []
          }
        ]
      },
      {
        "id": "sinhhoc-10",
        "name": "Sinh học",
        "icon": "🧬",
        "lessons": [
          {
            "id": "sinhhoc-10-b1",
            "number": 1,
            "title": "Bài 1: Giới thiệu khái quát môn Sinh học",
            "chapter": "Phần mở đầu",
            "summary": "Đối tượng, lĩnh vực nghiên cứu và vai trò của Sinh học.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b2",
            "number": 2,
            "title": "Bài 2: Phương pháp nghiên cứu và học tập môn Sinh học",
            "chapter": "Phần mở đầu",
            "summary": "Quan sát, làm việc trong phòng thí nghiệm và thực nghiệm khoa học.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b3",
            "number": 3,
            "title": "Bài 3: Các cấp độ tổ chức của thế giới sống",
            "chapter": "Phần mở đầu",
            "summary": "Từ tế bào, cơ thể, quần thể, quần xã, hệ sinh thái đến sinh quyển.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b4",
            "number": 4,
            "title": "Bài 4: Các nguyên tố hóa học và nước",
            "chapter": "Chương 1: Thành phần hóa học của tế bào",
            "summary": "Nguyên tố đa lượng, vi lượng và vai trò của nước.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b5",
            "number": 5,
            "title": "Bài 5: Các phân tử sinh học",
            "chapter": "Chương 1: Thành phần hóa học của tế bào",
            "summary": "Carbohydrate, lipid, protein và nucleic acid (DNA, RNA).",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b6",
            "number": 6,
            "title": "Bài 6: Thực hành: Nhận biết một số phân tử sinh học",
            "chapter": "Chương 1: Thành phần hóa học của tế bào",
            "summary": "Thử nghiệm nhận biết tinh bột, đường khử, protein và lipid.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b7",
            "number": 7,
            "title": "Bài 7: Tế bào nhân sơ",
            "chapter": "Chương 2: Cấu trúc tế bào",
            "summary": "Cấu tạo vi khuẩn: thành tế bào, màng sinh chất, tế bào chất, vùng nhân.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b8",
            "number": 8,
            "title": "Bài 8: Tế bào nhân thực",
            "chapter": "Chương 2: Cấu tạo tế bào",
            "summary": "Nhân, lưới nội chất, bộ máy Golgi, ti thể, lục lạp, màng sinh chất.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b9",
            "number": 9,
            "title": "Bài 9: Thực hành: Quan sát tế bào",
            "chapter": "Chương 2: Cấu tạo tế bào",
            "summary": "Sử dụng kính hiển vi quang học quan sát tế bào thực vật, động vật.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b10",
            "number": 10,
            "title": "Bài 10: Trao đổi chất qua màng tế bào",
            "chapter": "Chương 3: Trao đổi chất qua màng và truyền tin tế bào",
            "summary": "Vận chuyển thụ động (khuếch tán, thẩm thấu), chủ động, xuất nhập bào.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b11",
            "number": 11,
            "title": "Bài 11: Thực hành: Thí nghiệm co và phản co nguyên sinh",
            "chapter": "Chương 3: Trao đổi chất qua màng và truyền tin tế bào",
            "summary": "Quan sát hiện tượng thẩm thấu ở tế bào thực vật.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b12",
            "number": 12,
            "title": "Bài 12: Truyền tin tế bào",
            "chapter": "Chương 3: Trao đổi chất qua màng và truyền tin tế bào",
            "summary": "Tiếp nhận, truyền tin và đáp ứng tín hiệu ở tế bào.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b13",
            "number": 13,
            "title": "Bài 13: Khái quát về chuyển hóa vật chất và năng lượng",
            "chapter": "Chương 4: Chuyển hóa năng lượng trong tế bào",
            "summary": "ATP và vai trò của enzyme trong xúc tác sinh học.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b14",
            "number": 14,
            "title": "Bài 14: Phân giải và tổng hợp các chất trong tế bào",
            "chapter": "Chương 4: Chuyển hóa năng lượng trong tế bào",
            "summary": "Hô hấp tế bào, lên men và quang hợp, hóa tổng hợp.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b15",
            "number": 15,
            "title": "Bài 15: Thực hành: Thí nghiệm ảnh hưởng của một số yếu tố đến hoạt tính enzyme",
            "chapter": "Chương 4: Chuyển hóa năng lượng trong tế bào",
            "summary": "Khảo sát nhiệt độ, pH ảnh hưởng đến enzyme amylase.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b16",
            "number": 16,
            "title": "Bài 16: Chu kì tế bào và nguyên phân",
            "chapter": "Chương 5: Chu kì tế bào và phân bào",
            "summary": "Kì trung gian (G1, S, G2) và 4 kì nguyên phân; kiểm soát chu kì tế bào.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b17",
            "number": 17,
            "title": "Bài 17: Giảm phân",
            "chapter": "Chương 5: Chu kì tế bào và phân bào",
            "summary": "Giảm phân I, giảm phân II và ý nghĩa tạo biến dị tổ hợp.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b18",
            "number": 18,
            "title": "Bài 18: Thực hành: Làm và quan sát tiêu bản nguyên phân và giảm phân",
            "chapter": "Chương 5: Chu kì tế bào và phân bào",
            "summary": "Quan sát tiêu bản rễ hành tây và tế bào châu chấu.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b19",
            "number": 19,
            "title": "Bài 19: Công nghệ tế bào",
            "chapter": "Chương 5: Chu kì tế bào và phân bào",
            "summary": "Nuôi cấy mô tế bào thực vật, nhân bản vô tính và tế bào gốc.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b20",
            "number": 20,
            "title": "Bài 20: Sự đa dạng và phương pháp nghiên cứu vi sinh vật",
            "chapter": "Chương 6: Sinh học vi sinh vật",
            "summary": "Các kiểu dinh dưỡng của vi sinh vật (quang tự dưỡng, hóa dị dưỡng,...).",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b21",
            "number": 21,
            "title": "Bài 21: Trao đổi chất, sinh trưởng và sinh sản ở vi sinh vật",
            "chapter": "Chương 6: Sinh học vi sinh vật",
            "summary": "4 pha sinh trưởng của quần thể vi khuẩn và các yếu tố ảnh hưởng.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b22",
            "number": 22,
            "title": "Bài 22: Vai trò và ứng dụng của vi sinh vật",
            "chapter": "Chương 6: Sinh học vi sinh vật",
            "summary": "Sản xuất thực phẩm lên men, thuốc kháng sinh, xử lí môi trường.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b23",
            "number": 23,
            "title": "Bài 23: Thực hành: Nghiên cứu vi sinh vật và làm sản phẩm lên men",
            "chapter": "Chương 6: Sinh học vi sinh vật",
            "summary": "Làm sữa chua, muối chua rau củ.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b24",
            "number": 24,
            "title": "Bài 24: Khái quát về virus",
            "chapter": "Chương 7: Virus",
            "summary": "Cấu tạo virus (lõi nucleic acid và vỏ capsid) và chu trình nhân lên.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b25",
            "number": 25,
            "title": "Bài 25: Một số bệnh do virus và thành tựu nghiên cứu ứng dụng virus",
            "chapter": "Chương 7: Virus",
            "summary": "Phòng chống HIV/AIDS, cúm, COVID-19 và sản xuất vaccine.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b26",
            "number": 26,
            "title": "Bài 26: Thực hành: Điều tra một số bệnh do virus và tuyên truyền phòng chống",
            "chapter": "Chương 7: Virus",
            "summary": "Lập kế hoạch tuyên truyền phòng chống bệnh truyền nhiễm.",
            "questions": []
          }
        ]
      },
      {
        "id": "nguvan-10",
        "name": "Ngữ văn",
        "icon": "📖",
        "lessons": [
          {
            "id": "nguvan-10-b1",
            "number": 1,
            "title": "Bài 1: Sức hấp dẫn của truyện kể (Thần thoại, Chữ người tử tù)",
            "chapter": "Tập 1 - Bài 1: Sức hấp dẫn của truyện kể",
            "summary": "Truyện kể về các vị thần sáng tạo thế giới, Chữ người tử tù (Nguyễn Tuân), Tản Viên từ Phán sự lục.",
            "questions": []
          },
          {
            "id": "nguvan-10-b2",
            "number": 2,
            "title": "Bài 2: Vẻ đẹp của thơ ca (Chùm thơ haiku, Thu hứng, Mùa xuân chín)",
            "chapter": "Tập 1 - Bài 2: Vẻ đẹp của thơ ca",
            "summary": "Thơ Đỗ Phủ, Hàn Mặc Tử, thơ haiku Nhật Bản và thực hành biện pháp tu từ.",
            "questions": []
          },
          {
            "id": "nguvan-10-b3",
            "number": 3,
            "title": "Bài 3: Nghệ thuật thuyết phục trong văn nghị luận (Hiền tài là nguyên khí quốc gia)",
            "chapter": "Tập 1 - Bài 3: Nghệ thuật thuyết phục trong văn nghị luận",
            "summary": "Thân Nhân Trung, Yêu và đồng cảm, Chữ bầu lên nhà thơ và viết bài luận thuyết phục.",
            "questions": []
          },
          {
            "id": "nguvan-10-b4",
            "number": 4,
            "title": "Bài 4: Sức sống của sử thi (Héc-to từ biệt Ăng-đrô-mác, Đăm Săn)",
            "chapter": "Tập 1 - Bài 4: Sức sống của sử thi",
            "summary": "Sử thi Hy Lạp I-li-át và sử thi Tây Nguyên Đăm Săn đi bắt Nữ Thần Mặt Trời.",
            "questions": []
          },
          {
            "id": "nguvan-10-b5",
            "number": 5,
            "title": "Bài 5: Tích trò sân khấu dân gian (Xúy Vân giả dại, Huyện Trìa xử án)",
            "chapter": "Tập 1 - Bài 5: Tích trò sân khấu dân gian",
            "summary": "Nghệ thuật chèo cổ và tuồng đồ dân gian Việt Nam.",
            "questions": []
          },
          {
            "id": "nguvan-10-b6",
            "number": 6,
            "title": "Bài 6: Nguyễn Trãi – 'Dành còn để trợ dân này' (Bình Ngô đại cáo)",
            "chapter": "Tập 2 - Bài 6: Nguyễn Trãi – “Dành còn để trợ dân này”",
            "summary": "Tác gia Nguyễn Trãi, Bình Ngô đại cáo và Bảo kính cảnh giới.",
            "questions": []
          },
          {
            "id": "nguvan-10-b7",
            "number": 7,
            "title": "Bài 7: Quyền năng của người kể chuyện (Người cầm quyền khôi phục uy quyền, Dưới bóng hoàng lan)",
            "chapter": "Tập 2 - Bài 7: Quyền năng của người kể chuyện",
            "summary": "Ngôi kể, điểm nhìn trong truyện của Victor Hugo, Thạch Lam, Nguyễn Huy Thiệp.",
            "questions": []
          },
          {
            "id": "nguvan-10-b8",
            "number": 8,
            "title": "Bài 8: Thế giới đa dạng của thông tin (Sự sống và cái chết, Nghệ thuật truyền thống của người Việt)",
            "chapter": "Tập 2 - Bài 8: Thế giới đa dạng của thông tin",
            "summary": "Văn bản thông tin tổng hợp và phương tiện giao tiếp phi ngôn ngữ.",
            "questions": []
          },
          {
            "id": "nguvan-10-b9",
            "number": 9,
            "title": "Bài 9: Hành trang cuộc sống (Về chính chúng ta, Con đường không chọn)",
            "chapter": "Tập 2 - Bài 9: Hành trang cuộc sống",
            "summary": "Nghị luận xã hội về lựa chọn, lí tưởng và bản lĩnh sống.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-10",
        "name": "Lịch sử",
        "icon": "📜",
        "lessons": [
          {
            "id": "lichsu-10-b1",
            "number": 1,
            "title": "Bài 1: Hiện thực lịch sử và lịch sử được con người nhận thức",
            "chapter": "Chủ đề 1: Lịch sử và Sử học",
            "summary": "Sử học, chức năng và nhiệm vụ.",
            "questions": []
          },
          {
            "id": "lichsu-10-b2",
            "number": 2,
            "title": "Bài 2: Tri thức lịch sử và cuộc sống",
            "chapter": "Chủ đề 1: Lịch sử và Sử học",
            "summary": "Học tập lịch sử suốt đời.",
            "questions": []
          },
          {
            "id": "lichsu-10-b3",
            "number": 3,
            "title": "Bài 3: Sử học với công tác bảo tồn và phát huy giá trị di sản văn hóa, di sản thiên nhiên",
            "chapter": "Chủ đề 2: Vai trò của Sử học",
            "summary": "Bảo tồn di sản và phát triển du lịch.",
            "questions": []
          },
          {
            "id": "lichsu-10-b4",
            "number": 4,
            "title": "Bài 5: Khái niệm văn minh. Một số nền văn minh phương Đông thời kì cổ - trung đại",
            "chapter": "Chủ đề 3: Một số nền văn minh thế giới thời kì cổ - trung đại",
            "summary": "Văn minh Ai Cập, Ấn Độ, Trung Hoa.",
            "questions": []
          },
          {
            "id": "lichsu-10-b5",
            "number": 5,
            "title": "Bài 6: Một số nền văn minh phương Tây thời kì cổ - trung đại",
            "chapter": "Chủ đề 3: Một số nền văn minh thế giới thời kì cổ - trung đại",
            "summary": "Văn minh Hy Lạp - La Mã cổ đại và Phục hưng.",
            "questions": []
          },
          {
            "id": "lichsu-10-b6",
            "number": 6,
            "title": "Bài 7: Các cuộc cách mạng công nghiệp thời kì cận đại",
            "chapter": "Chủ đề 4: Các cuộc cách mạng công nghiệp trong lịch sử thế giới",
            "summary": "CMCN lần thứ nhất (máy hơi nước) và lần thứ hai (điện khí hóa).",
            "questions": []
          },
          {
            "id": "lichsu-10-b7",
            "number": 7,
            "title": "Bài 8: Các cuộc cách mạng công nghiệp thời kì hiện đại",
            "chapter": "Chủ đề 4: Các cuộc cách mạng công nghiệp trong lịch sử thế giới",
            "summary": "CMCN lần thứ ba (máy tính) và lần thứ tư (AI, IoT).",
            "questions": []
          },
          {
            "id": "lichsu-10-b8",
            "number": 8,
            "title": "Bài 9: Cơ sở hình thành và quá trình phát triển của văn minh Đông Nam Á thời kì cổ - trung đại",
            "chapter": "Chủ đề 5: Văn minh Đông Nam Á",
            "summary": "Văn minh lúa nước và tiếp biến văn hóa.",
            "questions": []
          },
          {
            "id": "lichsu-10-b9",
            "number": 9,
            "title": "Bài 10: Một số thành tựu tiêu biểu của văn minh Đông Nam Á thời kì cổ - trung đại",
            "chapter": "Chủ đề 5: Văn minh Đông Nam Á",
            "summary": "Chữ viết, tôn giáo, kiến trúc Ăng-co, Bô-rô-bu-đua.",
            "questions": []
          },
          {
            "id": "lichsu-10-b10",
            "number": 10,
            "title": "Bài 11: Văn minh Văn Lang - Âu Lạc",
            "chapter": "Chủ đề 6: Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)",
            "summary": "Văn hóa Đông Sơn và trống đồng.",
            "questions": []
          },
          {
            "id": "lichsu-10-b11",
            "number": 11,
            "title": "Bài 12: Văn minh Chăm-pa",
            "chapter": "Chủ đề 6: Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)",
            "summary": "Thánh địa Mỹ Sơn và chữ Chăm cổ.",
            "questions": []
          },
          {
            "id": "lichsu-10-b12",
            "number": 12,
            "title": "Bài 13: Văn minh Phù Nam",
            "chapter": "Chủ đề 6: Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)",
            "summary": "Văn hóa Óc Eo.",
            "questions": []
          },
          {
            "id": "lichsu-10-b13",
            "number": 13,
            "title": "Bài 14: Cơ sở hình thành và quá trình phát triển của văn minh Đại Việt",
            "chapter": "Chủ đề 6: Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)",
            "summary": "Từ thế kỉ X đến giữa thế kỉ XIX.",
            "questions": []
          },
          {
            "id": "lichsu-10-b14",
            "number": 14,
            "title": "Bài 15: Một số thành tựu tiêu biểu của văn minh Đại Việt",
            "chapter": "Chủ đề 6: Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)",
            "summary": "Chính trị, kinh tế, văn hóa, giáo dục, khoa học kĩ thuật.",
            "questions": []
          }
        ]
      },
      {
        "id": "diali-10",
        "name": "Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "diali-10-b1",
            "number": 1,
            "title": "Bài 1: Môn Địa lí với định hướng nghề nghiệp",
            "chapter": "Phần một: Một số vấn đề chung",
            "summary": "Vai trò của Địa lí và các ngành nghề liên quan đến Địa lí.",
            "questions": []
          },
          {
            "id": "diali-10-b2",
            "number": 2,
            "title": "Bài 2: Một số phương pháp biểu hiện các đối tượng địa lí trên bản đồ",
            "chapter": "Chương 1: Sử dụng bản đồ",
            "summary": "Phương pháp kí hiệu, kí hiệu đường chuyển động, chấm điểm, khoanh vùng, bản đồ-biểu đồ.",
            "questions": []
          },
          {
            "id": "diali-10-b3",
            "number": 3,
            "title": "Bài 3: Sử dụng bản đồ trong học tập và đời sống; GPS và bản đồ số",
            "chapter": "Chương 1: Sử dụng bản đồ",
            "summary": "Ứng dụng GPS và bản đồ số (GIS, Google Maps) trong đời sống.",
            "questions": []
          },
          {
            "id": "diali-10-b4",
            "number": 4,
            "title": "Bài 4: Sự hình thành Trái Đất, vỏ Trái Đất và vật liệu cấu tạo vỏ Trái Đất",
            "chapter": "Chương 2: Trái Đất",
            "summary": "Các loại đá magma, trầm tích, biến chất.",
            "questions": []
          },
          {
            "id": "diali-10-b5",
            "number": 5,
            "title": "Bài 5: Hệ quả địa lí các chuyển động của Trái Đất",
            "chapter": "Chương 2: Trái Đất",
            "summary": "Hệ quả tự quay quanh trục và quay quanh Mặt Trời.",
            "questions": []
          },
          {
            "id": "diali-10-b6",
            "number": 6,
            "title": "Bài 6: Thạch quyển, thuyết kiến tạo mảng",
            "chapter": "Chương 3: Thạch quyển",
            "summary": "Các mảng kiến tạo lớn và sự dịch chuyển tạo núi, động đất, núi lửa.",
            "questions": []
          },
          {
            "id": "diali-10-b7",
            "number": 7,
            "title": "Bài 7: Nội lực và ngoại lực",
            "chapter": "Chương 3: Thạch quyển",
            "summary": "Tác động tạo địa hình của nội lực và phong hóa, bóc mòn, vận chuyển, bồi tụ.",
            "questions": []
          },
          {
            "id": "diali-10-b8",
            "number": 8,
            "title": "Bài 8: Thực hành: Sự phân bố các vành đai động đất, núi lửa",
            "chapter": "Chương 3: Thạch quyển",
            "summary": "Phân tích vành đai lửa Thái Bình Dương và Địa Trung Hải.",
            "questions": []
          },
          {
            "id": "diali-10-b9",
            "number": 9,
            "title": "Bài 9: Khí quyển, các yếu tố khí hậu",
            "chapter": "Chương 4: Khí quyển",
            "summary": "Nhiệt độ không khí, khí áp, gió và mưa trên Trái Đất.",
            "questions": []
          },
          {
            "id": "diali-10-b10",
            "number": 10,
            "title": "Bài 10: Thực hành: Đọc bản đồ các đới khí hậu và phân tích biểu đồ khí hậu",
            "chapter": "Chương 4: Khí quyển",
            "summary": "Phân tích biểu đồ nhiệt độ, lượng mưa các kiểu khí hậu.",
            "questions": []
          },
          {
            "id": "diali-10-b11",
            "number": 11,
            "title": "Bài 11: Thủy quyển, nước trên lục địa",
            "chapter": "Chương 5: Thủy quyển",
            "summary": "Các nhân tố ảnh hưởng chế độ nước sông, hồ và nước băng tuyết, nước ngầm.",
            "questions": []
          },
          {
            "id": "diali-10-b12",
            "number": 12,
            "title": "Bài 12: Nước biển và đại dương",
            "chapter": "Chương 5: Thủy quyển",
            "summary": "Tính chất nước biển (nhiệt độ, độ muối) và sóng, thủy triều, dòng biển.",
            "questions": []
          },
          {
            "id": "diali-10-b13",
            "number": 13,
            "title": "Bài 13: Thực hành: Phân tích chế độ nước của sông Hồng",
            "chapter": "Chương 5: Thủy quyển",
            "summary": "Nhận xét lưu lượng nước mùa lũ và mùa cạn sông Hồng.",
            "questions": []
          },
          {
            "id": "diali-10-b14",
            "number": 14,
            "title": "Bài 14: Đất trên Trái Đất",
            "chapter": "Chương 6: Sinh quyển",
            "summary": "Quá trình hình thành đất và các nhân tố hình thành đất.",
            "questions": []
          },
          {
            "id": "diali-10-b15",
            "number": 15,
            "title": "Bài 15: Sinh quyển",
            "chapter": "Chương 6: Sinh quyển",
            "summary": "Các nhân tố ảnh hưởng tới sự phát triển và phân bố sinh vật.",
            "questions": []
          },
          {
            "id": "diali-10-b16",
            "number": 16,
            "title": "Bài 16: Thực hành: Tìm hiểu sự phân bố đất và sinh vật trên Trái Đất",
            "chapter": "Chương 6: Sinh quyển",
            "summary": "Mối quan hệ giữa khí hậu, đất và thảm thực vật.",
            "questions": []
          },
          {
            "id": "diali-10-b17",
            "number": 17,
            "title": "Bài 17: Vỏ địa lí, quy luật thống nhất và hoàn chỉnh của vỏ địa lí",
            "chapter": "Chương 7: Một số quy luật của vỏ địa lí",
            "summary": "Biểu hiện và ý nghĩa thực tiễn của quy luật thống nhất và hoàn chỉnh.",
            "questions": []
          },
          {
            "id": "diali-10-b18",
            "number": 18,
            "title": "Bài 18: Quy luật địa đới và quy luật phi địa đới",
            "chapter": "Chương 7: Một số quy luật của vỏ địa lí",
            "summary": "Nguyên nhân và biểu hiện quy luật địa đới, địa ô và đai cao.",
            "questions": []
          },
          {
            "id": "diali-10-b19",
            "number": 19,
            "title": "Bài 19: Quy mô dân số, gia tăng dân số và cơ cấu dân số thế giới",
            "chapter": "Chương 8: Địa lí dân cư",
            "summary": "Gia tăng tự nhiên, gia tăng cơ học và tháp dân số.",
            "questions": []
          },
          {
            "id": "diali-10-b20",
            "number": 20,
            "title": "Bài 20: Phân bố dân cư và đô thị hóa trên thế giới",
            "chapter": "Chương 8: Địa lí dân cư",
            "summary": "Các nhân tố ảnh hưởng phân bố dân cư và đô thị hóa.",
            "questions": []
          },
          {
            "id": "diali-10-b21",
            "number": 21,
            "title": "Bài 21: Các nguồn lực phát triển kinh tế",
            "chapter": "Chương 9: Các nguồn lực và tiêu chí đánh giá kinh tế",
            "summary": "Nguồn lực vị trí địa lí, tự nhiên và kinh tế-xã hội.",
            "questions": []
          },
          {
            "id": "diali-10-b22",
            "number": 22,
            "title": "Bài 22: Cơ cấu kinh tế, GDP và GNI",
            "chapter": "Chương 9: Các nguồn lực và tiêu chí đánh giá kinh tế",
            "summary": "Cơ cấu ngành, thành phần, lãnh thổ và chỉ tiêu GDP, GNI.",
            "questions": []
          },
          {
            "id": "diali-10-b23",
            "number": 23,
            "title": "Bài 23: Vai trò, đặc điểm, nhân tố ảnh hưởng nông, lâm, thủy sản",
            "chapter": "Chương 10: Địa lí ngành nông, lâm, thủy sản",
            "summary": "Tính mùa vụ, phụ thuộc tự nhiên và tiến bộ khoa học kĩ thuật.",
            "questions": []
          },
          {
            "id": "diali-10-b24",
            "number": 24,
            "title": "Bài 24: Địa lí ngành nông nghiệp",
            "chapter": "Chương 10: Địa lí ngành nông, lâm, thủy sản",
            "summary": "Phân bố cây lương thực, cây công nghiệp và chăn nuôi thế giới.",
            "questions": []
          },
          {
            "id": "diali-10-b25",
            "number": 25,
            "title": "Bài 25: Địa lí ngành lâm nghiệp và ngành thủy sản",
            "chapter": "Chương 10: Địa lí ngành nông, lâm, thủy sản",
            "summary": "Khai thác, trồng rừng và nuôi trồng, đánh bắt thủy sản.",
            "questions": []
          },
          {
            "id": "diali-10-b26",
            "number": 26,
            "title": "Bài 26: Tổ chức lãnh thổ nông nghiệp và nông nghiệp hiện đại",
            "chapter": "Chương 10: Địa lí ngành nông, lâm, thủy sản",
            "summary": "Trang trại, vùng nông nghiệp và nông nghiệp xanh, hữu cơ.",
            "questions": []
          },
          {
            "id": "diali-10-b27",
            "number": 27,
            "title": "Bài 27: Thực hành: Vẽ và nhận xét biểu đồ sản lượng lương thực thế giới",
            "chapter": "Chương 10: Địa lí ngành nông, lâm, thủy sản",
            "summary": "Vẽ biểu đồ cột/đường và nhận xét.",
            "questions": []
          },
          {
            "id": "diali-10-b28",
            "number": 28,
            "title": "Bài 28: Vai trò, đặc điểm, cơ cấu và nhân tố ảnh hưởng công nghiệp",
            "chapter": "Chương 11: Địa lí ngành công nghiệp",
            "summary": "Công nghiệp khai khoáng, chế biến chế tạo và sản xuất điện.",
            "questions": []
          },
          {
            "id": "diali-10-b29",
            "number": 29,
            "title": "Bài 29: Địa lí một số ngành công nghiệp",
            "chapter": "Chương 11: Địa lí ngành công nghiệp",
            "summary": "Công nghiệp năng lượng, điện tử-tin học và sản xuất hàng tiêu dùng.",
            "questions": []
          },
          {
            "id": "diali-10-b30",
            "number": 30,
            "title": "Bài 30: Tổ chức lãnh thổ công nghiệp",
            "chapter": "Chương 11: Địa lí ngành công nghiệp",
            "summary": "Điểm công nghiệp, khu công nghiệp, trung tâm và vùng công nghiệp.",
            "questions": []
          },
          {
            "id": "diali-10-b31",
            "number": 31,
            "title": "Bài 31: Tác động công nghiệp tới môi trường và năng lượng tái tạo",
            "chapter": "Chương 11: Địa lí ngành công nghiệp",
            "summary": "Năng lượng mặt trời, gió và phát triển công nghiệp xanh.",
            "questions": []
          },
          {
            "id": "diali-10-b32",
            "number": 32,
            "title": "Bài 32: Thực hành: Viết báo cáo tìm hiểu một vấn đề công nghiệp",
            "chapter": "Chương 11: Địa lí ngành công nghiệp",
            "summary": "Tìm hiểu công nghiệp tại địa phương hoặc thế giới.",
            "questions": []
          },
          {
            "id": "diali-10-b33",
            "number": 33,
            "title": "Bài 33: Cơ cấu, vai trò, đặc điểm và nhân tố ảnh hưởng dịch vụ",
            "chapter": "Chương 12: Địa lí ngành dịch vụ",
            "summary": "Dịch vụ kinh doanh, tiêu dùng và công.",
            "questions": []
          },
          {
            "id": "diali-10-b34",
            "number": 34,
            "title": "Bài 34: Địa lí ngành giao thông vận tải",
            "chapter": "Chương 12: Địa lí ngành dịch vụ",
            "summary": "Đường bộ, sắt, sông, biển, hàng không.",
            "questions": []
          },
          {
            "id": "diali-10-b35",
            "number": 35,
            "title": "Bài 35: Địa lí ngành bưu chính viễn thông",
            "chapter": "Chương 12: Địa lí ngành dịch vụ",
            "summary": "Mạng viễn thông toàn cầu và kinh tế số.",
            "questions": []
          },
          {
            "id": "diali-10-b36",
            "number": 36,
            "title": "Bài 36: Địa lí ngành du lịch",
            "chapter": "Chương 12: Địa lí ngành dịch vụ",
            "summary": "Tài nguyên du lịch và xu hướng du lịch bền vững.",
            "questions": []
          },
          {
            "id": "diali-10-b37",
            "number": 37,
            "title": "Bài 37: Địa lí ngành thương mại và tài chính ngân hàng",
            "chapter": "Chương 12: Địa lí ngành dịch vụ",
            "summary": "Nội thương, ngoại thương và trung tâm tài chính quốc tế.",
            "questions": []
          },
          {
            "id": "diali-10-b38",
            "number": 38,
            "title": "Bài 38: Thực hành: Viết báo cáo tìm hiểu một ngành dịch vụ",
            "chapter": "Chương 12: Địa lí ngành dịch vụ",
            "summary": "Phân tích số liệu ngành giao thông hoặc du lịch.",
            "questions": []
          },
          {
            "id": "diali-10-b39",
            "number": 39,
            "title": "Bài 39: Môi trường và tài nguyên thiên nhiên",
            "chapter": "Chương 13: Phát triển bền vững và tăng trưởng xanh",
            "summary": "Phân loại tài nguyên tái tạo, không tái tạo và chức năng môi trường.",
            "questions": []
          },
          {
            "id": "diali-10-b40",
            "number": 40,
            "title": "Bài 40: Phát triển bền vững và tăng trưởng xanh",
            "chapter": "Chương 13: Phát triển bền vững và tăng trưởng xanh",
            "summary": "3 trụ cột phát triển bền vững (kinh tế, xã hội, môi trường) và kinh tế xanh.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdktpl-10",
        "name": "Giáo dục kinh tế và pháp luật",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "gdktpl-10-b1",
            "number": 1,
            "title": "Bài 1: Các hoạt động kinh tế cơ bản trong đời sống xã hội",
            "chapter": "Chủ đề 1: Nền kinh tế và các chủ thể của nền kinh tế",
            "summary": "Sản xuất, phân phối - trao đổi, tiêu dùng.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b2",
            "number": 2,
            "title": "Bài 2: Các chủ thể của nền kinh tế",
            "chapter": "Chủ đề 1: Nền kinh tế và các chủ thể của nền kinh tế",
            "summary": "Chủ thể sản xuất, tiêu dùng, trung gian, nhà nước.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b3",
            "number": 3,
            "title": "Bài 3: Thị trường",
            "chapter": "Chủ đề 2: Thị trường và cơ chế thị trường",
            "summary": "Chức năng của thị trường và phân loại thị trường.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b4",
            "number": 4,
            "title": "Bài 4: Cơ chế thị trường",
            "chapter": "Chủ đề 2: Thị trường và cơ chế thị trường",
            "summary": "Giá cả thị trường, ưu và nhược điểm cơ chế thị trường.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b5",
            "number": 5,
            "title": "Bài 5: Ngân sách nhà nước",
            "chapter": "Chủ đề 3: Ngân sách nhà nước và thuế",
            "summary": "Đặc điểm, vai trò ngân sách nhà nước.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b6",
            "number": 6,
            "title": "Bài 6: Thuế",
            "chapter": "Chủ đề 3: Ngân sách nhà nước và thuế",
            "summary": "Thuế trực thu, thuế gián thu và vai trò của thuế.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b7",
            "number": 7,
            "title": "Bài 7: Sản xuất kinh doanh và các mô hình sản xuất kinh doanh",
            "chapter": "Chủ đề 4: Sản xuất kinh doanh",
            "summary": "Hộ kinh doanh, hợp tác xã, doanh nghiệp.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b8",
            "number": 8,
            "title": "Bài 8: Tín dụng và vai trò của tín dụng trong đời sống",
            "chapter": "Chủ đề 5: Tín dụng",
            "summary": "Đặc điểm (lòng tin, hoàn trả có lãi) và vai trò tín dụng.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b9",
            "number": 9,
            "title": "Bài 9: Dịch vụ tín dụng",
            "chapter": "Chủ đề 5: Tín dụng",
            "summary": "Tín dụng ngân hàng, tín dụng thương mại, tín dụng tiêu dùng.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b10",
            "number": 10,
            "title": "Bài 10: Lập kế hoạch tài chính cá nhân",
            "chapter": "Chủ đề 6: Lập kế hoạch tài chính cá nhân",
            "summary": "Các bước lập kế hoạch thu chi cá nhân.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b11",
            "number": 11,
            "title": "Bài 11: Khái niệm, đặc điểm và vai trò của pháp luật",
            "chapter": "Chủ đề 7: Pháp luật nước CHXHCN Việt Nam",
            "summary": "Tính quy phạm phổ biến, tính quyền lực bắt buộc chung.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b12",
            "number": 12,
            "title": "Bài 12: Hệ thống pháp luật và văn bản pháp luật Việt Nam",
            "chapter": "Chủ đề 7: Pháp luật nước CHXHCN Việt Nam",
            "summary": "Văn bản quy phạm pháp luật và áp dụng pháp luật.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b13",
            "number": 13,
            "title": "Bài 13: Thực hiện pháp luật",
            "chapter": "Chủ đề 7: Pháp luật nước CHXHCN Việt Nam",
            "summary": "Sử dụng, thi hành, tuân thủ và áp dụng pháp luật.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b14",
            "number": 14,
            "title": "Bài 14: Khái niệm, đặc điểm, vị trí của Hiến pháp",
            "chapter": "Chủ đề 8: Hiến pháp nước CHXHCN Việt Nam",
            "summary": "Luật cơ bản có hiệu lực pháp lí cao nhất.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b15",
            "number": 15,
            "title": "Bài 15: Nội dung cơ bản của Hiến pháp về chế độ chính trị",
            "chapter": "Chủ đề 8: Hiến pháp nước CHXHCN Việt Nam",
            "summary": "Bản chất nhà nước pháp quyền XHCN.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b16",
            "number": 16,
            "title": "Bài 16: Nội dung cơ bản của Hiến pháp về quyền con người, quyền và nghĩa vụ cơ bản của công dân",
            "chapter": "Chủ đề 8: Hiến pháp nước CHXHCN Việt Nam",
            "summary": "Quyền dân sự, chính trị, kinh tế, văn hóa.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b17",
            "number": 17,
            "title": "Bài 17: Nội dung cơ bản của Hiến pháp về kinh tế, văn hóa, xã hội, giáo dục, khoa học, công nghệ, môi trường",
            "chapter": "Chủ đề 8: Hiến pháp nước CHXHCN Việt Nam",
            "summary": "Định hướng phát triển đất nước.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b18",
            "number": 18,
            "title": "Bài 18: Đặc điểm, cấu trúc và nguyên tắc hoạt động của hệ thống chính trị",
            "chapter": "Chủ đề 9: Hệ thống chính trị nước CHXHCN Việt Nam",
            "summary": "Đảng lãnh đạo, Nhà nước quản lí, MTTQ và các đoàn thể.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b19",
            "number": 19,
            "title": "Bài 19: Quốc hội, Chủ tịch nước, Chính phủ",
            "chapter": "Chủ đề 9: Hệ thống chính trị nước CHXHCN Việt Nam",
            "summary": "Chức năng lập pháp, nguyên thủ quốc gia, hành pháp.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b20",
            "number": 20,
            "title": "Bài 20: Tòa án nhân dân và Viện kiểm sát nhân dân",
            "chapter": "Chủ đề 9: Hệ thống chính trị nước CHXHCN Việt Nam",
            "summary": "Quyền tư pháp, xét xử và kiểm sát.",
            "questions": []
          },
          {
            "id": "gdktpl-10-b21",
            "number": 21,
            "title": "Bài 21: Hội đồng nhân dân và Ủy ban nhân dân",
            "chapter": "Chủ đề 9: Hệ thống chính trị nước CHXHCN Việt Nam",
            "summary": "Chính quyền địa phương.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-10",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-10-b1",
            "number": 1,
            "title": "Bài 1: Thông tin và xử lí thông tin",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Phân biệt thông tin và dữ liệu, đơn vị đo dữ liệu (bit, byte, KB, MB, GB).",
            "questions": []
          },
          {
            "id": "tinhoc-10-b2",
            "number": 2,
            "title": "Bài 2: Vai trò của thiết bị thông minh và tin học đối với xã hội",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "IoT, trí tuệ nhân tạo và tác động của tin học.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b3",
            "number": 3,
            "title": "Bài 3: Một số kiểu dữ liệu và dữ liệu văn bản",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Biểu diễn số nguyên, số thực và bảng mã ASCII, Unicode.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b4",
            "number": 4,
            "title": "Bài 4: Hệ nhị phân và dữ liệu số nguyên",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Chuyển đổi hệ thập phân sang nhị phân và ngược lại.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b5",
            "number": 5,
            "title": "Bài 5: Dữ liệu lôgic",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Phép toán AND, OR, NOT và bảng chân trị.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b6",
            "number": 6,
            "title": "Bài 6: Dữ liệu âm thanh và hình ảnh",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Số hóa âm thanh, điểm ảnh (pixel) và độ sâu màu.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b7",
            "number": 7,
            "title": "Bài 7: Thực hành sử dụng thiết bị số thông dụng",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Kết nối và khai thác thiết bị số an toàn.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b8",
            "number": 8,
            "title": "Bài 8: Mạng máy tính trong cuộc sống hiện đại",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Mạng LAN, WAN, Internet và điện toán đám mây.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b9",
            "number": 9,
            "title": "Bài 9: An toàn trên không gian mạng",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Phòng chống phần mềm độc hại, lừa đảo và bảo mật tài khoản.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b10",
            "number": 10,
            "title": "Bài 10: Thực hành khai thác tài nguyên trên Internet",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Tìm kiếm thông tin, lưu trữ đám mây và dịch thuật.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b11",
            "number": 11,
            "title": "Bài 11: Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Bản quyền phần mềm, nội dung số và văn hóa ứng xử mạng.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b12",
            "number": 12,
            "title": "Bài 12: Phần mềm thiết kế đồ họa",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Đồ họa vectơ và đồ họa điểm ảnh; giao diện Inkscape.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b13",
            "number": 13,
            "title": "Bài 13: Bổ sung các đối tượng đồ họa",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Vẽ hình cơ bản, biến đổi đối tượng, tô màu và viền.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b14",
            "number": 14,
            "title": "Bài 14: Làm việc với đối tượng đường và văn bản",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Vẽ đường cong Bezier, chèn chữ và uốn chữ theo đường dẫn.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b15",
            "number": 15,
            "title": "Bài 15: Hoàn thiện hình ảnh đồ họa",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Xuất file ảnh PNG, SVG thiết kế logo, banner.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b16",
            "number": 16,
            "title": "Bài 16: Ngôn ngữ lập trình bậc cao và Python",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Chế độ gõ lệnh trực tiếp và soạn thảo chương trình Python.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b17",
            "number": 17,
            "title": "Bài 17: Biến và lệnh gán",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Quy tắc đặt tên biến, từ khóa và lệnh gán trong Python.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b18",
            "number": 18,
            "title": "Bài 18: Các lệnh vào ra đơn giản",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Hàm input(), print() và chuyển đổi kiểu int(), float(), str().",
            "questions": []
          },
          {
            "id": "tinhoc-10-b19",
            "number": 19,
            "title": "Bài 19: Câu lệnh rẽ nhánh if",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Cấu trúc if, if-else và biểu thức điều kiện.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b20",
            "number": 20,
            "title": "Bài 20: Câu lệnh lặp for",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Hàm range() và lặp với số lần biết trước.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b21",
            "number": 21,
            "title": "Bài 21: Câu lệnh lặp while",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Lặp với điều kiện và tránh lặp vô hạn.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b22",
            "number": 22,
            "title": "Bài 22: Kiểu dữ liệu danh sách",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Khởi tạo list, truy cập chỉ số và duyệt phần tử.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b23",
            "number": 23,
            "title": "Bài 23: Một số lệnh làm việc với dữ liệu danh sách",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "append(), insert(), remove(), len(), toán tử in.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b24",
            "number": 24,
            "title": "Bài 24: Xâu kí tự",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Truy cập kí tự, cắt xâu và toán tử với xâu.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b25",
            "number": 25,
            "title": "Bài 25: Một số lệnh làm việc với xâu kí tự",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "find(), split(), join(), upper(), lower().",
            "questions": []
          },
          {
            "id": "tinhoc-10-b26",
            "number": 26,
            "title": "Bài 26: Hàm trong Python",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Định nghĩa hàm bằng def, giá trị trả về return.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b27",
            "number": 27,
            "title": "Bài 27: Tham số của hàm",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Tham số, đối số và phạm vi biến (cục bộ, toàn cục).",
            "questions": []
          },
          {
            "id": "tinhoc-10-b28",
            "number": 28,
            "title": "Bài 28: Phạm vi của biến",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Từ khóa global và quản lí biến trong hàm.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b29",
            "number": 29,
            "title": "Bài 29: Nhận biết lỗi chương trình",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Lỗi cú pháp (SyntaxError), lỗi ngoại lệ (Runtime) và lỗi ngữ nghĩa.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b30",
            "number": 30,
            "title": "Bài 30: Kiểm thử và gỡ lỗi chương trình",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Thiết kế bộ test (test case) và truy vết gỡ lỗi.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b31",
            "number": 31,
            "title": "Bài 31: Thực hành viết chương trình đơn giản",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Giải bài toán thực tế bằng Python.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b32",
            "number": 32,
            "title": "Bài 32: Ôn tập lập trình Python",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Tổng hợp kiến thức lập trình Python lớp 10.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b33",
            "number": 33,
            "title": "Bài 33: Nghề thiết kế đồ họa máy tính",
            "chapter": "Chủ đề 6: Hướng nghiệp với Tin học",
            "summary": "Công việc, phẩm chất và cơ hội nghề thiết kế đồ họa.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b34",
            "number": 34,
            "title": "Bài 34: Nghề phát triển phần mềm",
            "chapter": "Chủ đề 6: Hướng nghiệp với Tin học",
            "summary": "Quy trình phát triển phần mềm và kĩ năng lập trình viên.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-10",
        "name": "Công nghệ (Thiết kế và công nghệ)",
        "icon": "⚙️",
        "lessons": [
          {
            "id": "congnghe-10-b1",
            "number": 1,
            "title": "Bài 1: Công nghệ và đời sống",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Khái niệm khoa học, kĩ thuật, công nghệ và tác động hai mặt.",
            "questions": []
          },
          {
            "id": "congnghe-10-b2",
            "number": 2,
            "title": "Bài 2: Hệ thống kĩ thuật",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Cấu trúc đầu vào - bộ phận xử lí - đầu ra của hệ thống kĩ thuật.",
            "questions": []
          },
          {
            "id": "congnghe-10-b3",
            "number": 3,
            "title": "Bài 3: Công nghệ phổ biến",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Công nghệ luyện kim, cơ khí, điện-điện tử, hóa chất, sinh học.",
            "questions": []
          },
          {
            "id": "congnghe-10-b4",
            "number": 4,
            "title": "Bài 4: Một số công nghệ mới",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Công nghệ nano, vật liệu mới, AI, IoT, robot, in 3D, năng lượng tái tạo.",
            "questions": []
          },
          {
            "id": "congnghe-10-b5",
            "number": 5,
            "title": "Bài 5: Đánh giá công nghệ",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Tiêu chí đánh giá sản phẩm công nghệ (hiệu quả, tin cậy, kinh tế, môi trường).",
            "questions": []
          },
          {
            "id": "congnghe-10-b6",
            "number": 6,
            "title": "Bài 6: Cách mạng công nghiệp",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Đặc trưng các cuộc CMCN 1.0, 2.0, 3.0 và 4.0.",
            "questions": []
          },
          {
            "id": "congnghe-10-b7",
            "number": 7,
            "title": "Bài 7: Ngành nghề kĩ thuật, công nghệ",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Yêu cầu năng lực và cơ hội nghề nghiệp lĩnh vực kĩ thuật công nghệ.",
            "questions": []
          },
          {
            "id": "congnghe-10-b8",
            "number": 8,
            "title": "Bài 8: Bản vẽ kĩ thuật và tiêu chuẩn trình bày bản vẽ",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Khổ giấy, tỉ lệ, nét vẽ và ghi kích thước theo TCVN.",
            "questions": []
          },
          {
            "id": "congnghe-10-b9",
            "number": 9,
            "title": "Bài 9: Hình chiếu vuông góc",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Phương pháp chiếu góc thứ nhất (hình chiếu đứng, bằng, cạnh).",
            "questions": []
          },
          {
            "id": "congnghe-10-b10",
            "number": 10,
            "title": "Bài 10: Hình cắt và mặt cắt",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Biểu diễn cấu tạo bên trong của vật thể bằng hình cắt, mặt cắt.",
            "questions": []
          },
          {
            "id": "congnghe-10-b11",
            "number": 11,
            "title": "Bài 11: Hình chiếu trục đo",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Hình chiếu trục đo vuông góc đều và xiên góc cân.",
            "questions": []
          },
          {
            "id": "congnghe-10-b12",
            "number": 12,
            "title": "Bài 12: Hình chiếu phối cảnh",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Hình chiếu phối cảnh 1 điểm tụ và 2 điểm tụ.",
            "questions": []
          },
          {
            "id": "congnghe-10-b13",
            "number": 13,
            "title": "Bài 13: Biểu diễn quy ước ren",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Quy ước vẽ ren ngoài (ren trục) và ren trong (ren lỗ).",
            "questions": []
          },
          {
            "id": "congnghe-10-b14",
            "number": 14,
            "title": "Bài 14: Bản vẽ cơ khí",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Bản vẽ chi tiết và bản vẽ lắp.",
            "questions": []
          },
          {
            "id": "congnghe-10-b15",
            "number": 15,
            "title": "Bài 15: Bản vẽ xây dựng",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Mặt bằng tổng thể, mặt bằng, mặt đứng và mặt cắt ngôi nhà.",
            "questions": []
          },
          {
            "id": "congnghe-10-b16",
            "number": 16,
            "title": "Bài 16: Vẽ kĩ thuật với sự trợ giúp của máy tính",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Giới thiệu phần mềm CAD (AutoCAD/FreeCAD) vẽ 2D, 3D.",
            "questions": []
          },
          {
            "id": "congnghe-10-b17",
            "number": 17,
            "title": "Bài 17: Khái quát về thiết kế kĩ thuật",
            "chapter": "Chương III: Thiết kế kĩ thuật",
            "summary": "Vai trò, ý nghĩa và nghề thiết kế kĩ thuật.",
            "questions": []
          },
          {
            "id": "congnghe-10-b18",
            "number": 18,
            "title": "Bài 18: Quy trình thiết kế kĩ thuật",
            "chapter": "Chương III: Thiết kế kĩ thuật",
            "summary": "5 bước quy trình thiết kế: xác định vấn đề, đề xuất giải pháp, thiết kế, chế tạo mẫu, thử nghiệm.",
            "questions": []
          },
          {
            "id": "congnghe-10-b19",
            "number": 19,
            "title": "Bài 19: Những yếu tố ảnh hưởng đến thiết kế kĩ thuật",
            "chapter": "Chương III: Thiết kế kĩ thuật",
            "summary": "Yếu tố sản phẩm (thẩm mĩ, nhân trắc, an toàn) và nguồn lực (tài chính, công nghệ).",
            "questions": []
          },
          {
            "id": "congnghe-10-b20",
            "number": 20,
            "title": "Bài 20: Nguyên tắc thiết kế kĩ thuật",
            "chapter": "Chương III: Thiết kế kĩ thuật",
            "summary": "Nguyên tắc tối ưu hóa (đơn giản, an toàn, tiết kiệm) và phát triển bền vững.",
            "questions": []
          },
          {
            "id": "congnghe-10-b21",
            "number": 21,
            "title": "Bài 21: Phương pháp, phương tiện hỗ trợ thiết kế kĩ thuật",
            "chapter": "Chương III: Thiết kế kĩ thuật",
            "summary": "Phương pháp tư duy thiết kế (Design Thinking), động não và phần mềm mô phỏng.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-10",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-10-b1",
            "number": 1,
            "title": "Unit 1: Family Life",
            "chapter": "Unit 1: Family Life",
            "summary": "Present Simple vs. Present Continuous.",
            "questions": []
          },
          {
            "id": "tienganh-10-b2",
            "number": 2,
            "title": "Unit 2: Humans and the Environment",
            "chapter": "Unit 2: Humans and the Environment",
            "summary": "Will vs. be going to & Passive voice.",
            "questions": []
          },
          {
            "id": "tienganh-10-b3",
            "number": 3,
            "title": "Unit 3: Music",
            "chapter": "Unit 3: Music",
            "summary": "Compound sentences & to-infinitives / bare infinitives.",
            "questions": []
          },
          {
            "id": "tienganh-10-b4",
            "number": 4,
            "title": "Unit 4: For a Better Community",
            "chapter": "Unit 4: For a Better Community",
            "summary": "Past Simple vs. Past Continuous.",
            "questions": []
          },
          {
            "id": "tienganh-10-b5",
            "number": 5,
            "title": "Unit 5: Inventions",
            "chapter": "Unit 5: Inventions",
            "summary": "Present Perfect & Gerunds/to-infinitives.",
            "questions": []
          },
          {
            "id": "tienganh-10-b6",
            "number": 6,
            "title": "Unit 6: Gender Equality",
            "chapter": "Unit 6: Gender Equality",
            "summary": "Passive voice with modals.",
            "questions": []
          },
          {
            "id": "tienganh-10-b7",
            "number": 7,
            "title": "Unit 7: Viet Nam and International Organisations",
            "chapter": "Unit 7: Viet Nam and International Organisations",
            "summary": "Comparative and superlative adjectives.",
            "questions": []
          },
          {
            "id": "tienganh-10-b8",
            "number": 8,
            "title": "Unit 8: New Ways to Learn",
            "chapter": "Unit 8: New Ways to Learn",
            "summary": "Relative clauses.",
            "questions": []
          },
          {
            "id": "tienganh-10-b9",
            "number": 9,
            "title": "Unit 9: Protecting the Environment",
            "chapter": "Unit 9: Protecting the Environment",
            "summary": "Reported speech.",
            "questions": []
          },
          {
            "id": "tienganh-10-b10",
            "number": 10,
            "title": "Unit 10: Ecotourism",
            "chapter": "Unit 10: Ecotourism",
            "summary": "Conditional sentences type 1 and type 2.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-trongtrot-10",
        "name": "Công nghệ (Công nghệ trồng trọt)",
        "icon": "🌱",
        "lessons": [
          {
            "id": "congnghe-trongtrot-10-b1",
            "number": 1,
            "title": "Bài 1: Giới thiệu về trồng trọt",
            "chapter": "Chương I: Giới thiệu chung về trồng trọt",
            "summary": "Vai trò, triển vọng và thành tựu của trồng trọt.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b2",
            "number": 2,
            "title": "Bài 2: Cây trồng và các yếu tố chính trong trồng trọt",
            "chapter": "Chương I: Giới thiệu chung về trồng trọt",
            "summary": "Phân loại cây trồng và các yếu tố ánh sáng, nhiệt độ, nước, đất, dinh dưỡng.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b3",
            "number": 3,
            "title": "Bài 3: Giới thiệu về đất trồng",
            "chapter": "Chương II: Đất trồng",
            "summary": "Thành phần, tính chất (keo đất, phản ứng chua/kiềm, độ phì) của đất.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b4",
            "number": 4,
            "title": "Bài 4: Sử dụng, cải tạo và bảo vệ đất trồng",
            "chapter": "Chương II: Đất trồng",
            "summary": "Cải tạo đất xám bạc màu, đất mặn, đất phèn, đất xói mòn.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b5",
            "number": 5,
            "title": "Bài 5: Giá thể trồng cây",
            "chapter": "Chương II: Đất trồng",
            "summary": "Giá thể hữu cơ, vô cơ (xơ dừa, trấu hun, perlite) và ứng dụng.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b6",
            "number": 6,
            "title": "Bài 6: Thực hành: Xác định độ chua và độ mặn của đất",
            "chapter": "Chương II: Đất trồng",
            "summary": "Đo pH và độ mặn của mẫu đất bằng máy đo/giấy chỉ thị.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b7",
            "number": 7,
            "title": "Bài 7: Giới thiệu về phân bón",
            "chapter": "Chương III: Phân bón",
            "summary": "Phân hóa học, phân hữu cơ và phân vi sinh.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b8",
            "number": 8,
            "title": "Bài 8: Sử dụng và bảo quản phân bón",
            "chapter": "Chương III: Phân bón",
            "summary": "Nguyên tắc bón phân đúng loại, đúng lúc, đúng liều lượng, đúng cách.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b9",
            "number": 9,
            "title": "Bài 9: Sử dụng công nghệ vi sinh trong sản xuất phân bón",
            "chapter": "Chương III: Phân bón",
            "summary": "Quy trình sản xuất phân hữu cơ vi sinh từ phế phụ phẩm nông nghiệp.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b10",
            "number": 10,
            "title": "Bài 10: Thực hành: Nhận biết một số loại phân bón hóa học",
            "chapter": "Chương III: Phân bón",
            "summary": "Quan sát màu sắc, trạng thái và thử độ tan của đạm, lân, kali.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b11",
            "number": 11,
            "title": "Bài 11: Khái niệm và vai trò của giống cây trồng",
            "chapter": "Chương IV: Công nghệ giống cây trồng",
            "summary": "Khái niệm giống và vai trò nâng cao năng suất, chất lượng.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b12",
            "number": 12,
            "title": "Bài 12: Một số phương pháp chọn, tạo giống cây trồng",
            "chapter": "Chương IV: Công nghệ giống cây trồng",
            "summary": "Chọn lọc, lai hữu tính, gây đột biến và chuyển gen.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b13",
            "number": 13,
            "title": "Bài 13: Nhân giống cây trồng",
            "chapter": "Chương IV: Công nghệ giống cây trồng",
            "summary": "Nhân giống hữu tính, vô tính và nuôi cấy mô tế bào thực vật.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b14",
            "number": 14,
            "title": "Bài 14: Thực hành: Nhân giống cây ăn quả bằng phương pháp ghép",
            "chapter": "Chương IV: Công nghệ giống cây trồng",
            "summary": "Thực hành ghép mắt/ghép cành cây ăn quả.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b15",
            "number": 15,
            "title": "Bài 15: Sâu, bệnh hại cây trồng và ý nghĩa phòng trừ",
            "chapter": "Chương V: Phòng trừ sâu, bệnh hại cây trồng",
            "summary": "Khái niệm sâu hại, bệnh hại và nguyên tắc phòng trừ tổng hợp (IPM).",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b16",
            "number": 16,
            "title": "Bài 16: Một số sâu hại cây trồng thường gặp và biện pháp phòng trừ",
            "chapter": "Chương V: Phòng trừ sâu, bệnh hại cây trồng",
            "summary": "Sâu cuốn lá, rầy nâu, sâu đục thân và biện pháp phòng trừ.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b17",
            "number": 17,
            "title": "Bài 17: Một số bệnh hại cây trồng thường gặp và biện pháp phòng trừ",
            "chapter": "Chương V: Phòng trừ sâu, bệnh hại cây trồng",
            "summary": "Bệnh đạo ôn, bạc lá, thán thư, vàng lá.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b18",
            "number": 18,
            "title": "Bài 18: Ứng dụng công nghệ vi sinh trong phòng trừ sâu, bệnh hại",
            "chapter": "Chương V: Phòng trừ sâu, bệnh hại cây trồng",
            "summary": "Chế phẩm sinh học Bt, nấm xanh, nấm trắng.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b19",
            "number": 19,
            "title": "Bài 19: Quy trình trồng trọt và cơ giới hóa trong trồng trọt",
            "chapter": "Chương VI: Kĩ thuật trồng trọt",
            "summary": "Làm đất, gieo trồng, chăm sóc, thu hoạch và cơ giới hóa.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b20",
            "number": 20,
            "title": "Bài 20: Công nghệ cao trong thu hoạch và bảo quản sản phẩm trồng trọt",
            "chapter": "Chương VI: Kĩ thuật trồng trọt",
            "summary": "Bảo quản lạnh, chiếu xạ, khí quyển điều chỉnh (CA).",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b21",
            "number": 21,
            "title": "Bài 21: Chế biến sản phẩm trồng trọt",
            "chapter": "Chương VI: Kĩ thuật trồng trọt",
            "summary": "Sấy khô, muối chua, đóng hộp và lên men.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b22",
            "number": 22,
            "title": "Bài 22: Dự án: Trồng hoa trong chậu",
            "chapter": "Chương VI: Kĩ thuật trồng trọt",
            "summary": "Lập kế hoạch và chăm sóc chậu hoa cảnh.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b23",
            "number": 23,
            "title": "Bài 23: Giới thiệu về trồng trọt công nghệ cao",
            "chapter": "Chương VII: Trồng trọt công nghệ cao",
            "summary": "Đặc điểm, vai trò của nông nghiệp thông minh 4.0.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b24",
            "number": 24,
            "title": "Bài 24: Một số công nghệ cao trong trồng trọt",
            "chapter": "Chương VII: Trồng trọt công nghệ cao",
            "summary": "Nhà kính thông minh, tưới nhỏ giọt tự động, cảm biến IoT, drone.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b25",
            "number": 25,
            "title": "Bài 25: Công nghệ trồng cây không dùng đất",
            "chapter": "Chương VII: Trồng trọt công nghệ cao",
            "summary": "Thủy canh (hydroponics), khí canh (aeroponics).",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b26",
            "number": 26,
            "title": "Bài 26: Sự cần thiết phải bảo vệ môi trường trong trồng trọt",
            "chapter": "Chương VIII: Bảo vệ môi trường trong trồng trọt",
            "summary": "Ô nhiễm đất, nước do phân bón và thuốc bảo vệ thực vật.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b27",
            "number": 27,
            "title": "Bài 27: Ứng dụng công nghệ vi sinh trong bảo vệ môi trường trồng trọt",
            "chapter": "Chương VIII: Bảo vệ môi trường trong trồng trọt",
            "summary": "Xử lí rơm rạ, phụ phẩm thành phân bón và năng lượng.",
            "questions": []
          },
          {
            "id": "congnghe-trongtrot-10-b28",
            "number": 28,
            "title": "Bài 28: Thực hành: Sử dụng rơm, rạ để trồng nấm rơm",
            "chapter": "Chương VIII: Bảo vệ môi trường trong trồng trọt",
            "summary": "Quy trình ủ rơm, cấy meo và thu hoạch nấm rơm.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdqp-10",
        "name": "Giáo dục quốc phòng và an ninh",
        "icon": "🛡️",
        "lessons": [
          {
            "id": "gdqp-10-b1",
            "number": 1,
            "title": "Bài 1: Lịch sử, truyền thống của lực lượng vũ trang nhân dân Việt Nam",
            "chapter": "Phần kiến thức chung",
            "summary": "Lịch sử hình thành, truyền thống vẻ vang của QĐND và CAND Việt Nam.",
            "questions": []
          },
          {
            "id": "gdqp-10-b2",
            "number": 2,
            "title": "Bài 2: Nội dung cơ bản một số luật về quốc phòng và an ninh Việt Nam",
            "chapter": "Phần kiến thức chung",
            "summary": "Luật Quốc phòng, Luật An ninh quốc gia và trách nhiệm công dân.",
            "questions": []
          },
          {
            "id": "gdqp-10-b3",
            "number": 3,
            "title": "Bài 3: Ma tuý, tác hại của ma tuý",
            "chapter": "Phần kiến thức chung",
            "summary": "Nhận diện các loại ma túy, tác hại và biện pháp phòng chống trong học đường.",
            "questions": []
          },
          {
            "id": "gdqp-10-b4",
            "number": 4,
            "title": "Bài 4: Phòng, chống vi phạm pháp luật về trật tự an toàn giao thông",
            "chapter": "Phần kiến thức chung",
            "summary": "Quy tắc an toàn giao thông và xử phạt vi phạm hành chính.",
            "questions": []
          },
          {
            "id": "gdqp-10-b5",
            "number": 5,
            "title": "Bài 5: Bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội",
            "chapter": "Phần kiến thức chung",
            "summary": "Khái niệm an ninh quốc gia, trật tự an toàn xã hội và trách nhiệm học sinh.",
            "questions": []
          },
          {
            "id": "gdqp-10-b6",
            "number": 6,
            "title": "Bài 6: Một số hiểu biết về an ninh mạng",
            "chapter": "Phần kiến thức chung",
            "summary": "Luật An ninh mạng, phòng tránh lừa đảo và bảo vệ thông tin cá nhân.",
            "questions": []
          },
          {
            "id": "gdqp-10-b7",
            "number": 7,
            "title": "Bài 7: Thường thức phòng tránh bom, mìn, vũ khí công nghệ cao, thiên tai, dịch bệnh",
            "chapter": "Phần kiến thức chung",
            "summary": "Kĩ năng phòng tránh rủi ro thiên tai, cháy nổ và vũ khí công nghệ cao.",
            "questions": []
          },
          {
            "id": "gdqp-10-b8",
            "number": 8,
            "title": "Bài 8: Một số nội dung điều lệnh quản lí bộ đội và điều lệnh CAND",
            "chapter": "Phần điều lệnh - quân sự",
            "summary": "Chế độ sinh hoạt, học tập, xưng hô chào hỏi theo điều lệnh.",
            "questions": []
          },
          {
            "id": "gdqp-10-b9",
            "number": 9,
            "title": "Bài 9: Đội ngũ từng người không có súng",
            "chapter": "Phần điều lệnh - quân sự",
            "summary": "Động tác nghiêm, nghỉ, quay tại chỗ, đi đều, đứng lại.",
            "questions": []
          },
          {
            "id": "gdqp-10-b10",
            "number": 10,
            "title": "Bài 10: Đội ngũ tiểu đội",
            "chapter": "Phần điều lệnh - quân sự",
            "summary": "Đội hình tiểu đội hàng ngang, hàng dọc, tiến, lùi, sang phải/trái.",
            "questions": []
          },
          {
            "id": "gdqp-10-b11",
            "number": 11,
            "title": "Bài 11: Các tư thế, động tác cơ bản vận động trong chiến đấu",
            "chapter": "Phần điều lệnh - quân sự",
            "summary": "Đi khom, chạy khom, bò cao, bò thấp, lê, trườn.",
            "questions": []
          },
          {
            "id": "gdqp-10-b12",
            "number": 12,
            "title": "Bài 12: Kĩ thuật cấp cứu và chuyển thương",
            "chapter": "Phần điều lệnh - quân sự",
            "summary": "Băng bó vết thương, cầm máu tạm thời, cố định xương gãy và chuyển thương.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-10",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-10-b1",
            "number": 1,
            "title": "Sử dụng các yếu tố tự nhiên và dinh dưỡng rèn luyện sức khỏe",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Nguyên tắc tập luyện thể lực, phòng tránh chấn thương và dinh dưỡng tuổi THPT.",
            "questions": []
          },
          {
            "id": "gdtc-10-b2",
            "number": 2,
            "title": "Bóng đá 10: Kĩ thuật đá bóng, khống chế và dẫn bóng",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Kĩ thuật đá bóng bằng mu trong, lòng bàn chân và phối hợp nhóm.",
            "questions": []
          },
          {
            "id": "gdtc-10-b3",
            "number": 3,
            "title": "Bóng chuyền 10: Kĩ thuật chuyền bóng, đệm bóng, phát bóng",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Tư thế chuẩn bị, chuyền bóng cao tay, đệm bóng thấp tay.",
            "questions": []
          },
          {
            "id": "gdtc-10-b4",
            "number": 4,
            "title": "Bóng rổ 10: Kĩ thuật dẫn bóng, chuyền bóng, ném rổ",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Kĩ thuật lên rổ hai bước, chuyền bóng bật đất và phòng thủ cá nhân.",
            "questions": []
          },
          {
            "id": "gdtc-10-b5",
            "number": 5,
            "title": "Cầu lông 10: Kĩ thuật di chuyển và đánh cầu cơ bản",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Cầm vợt, phát cầu thuận tay/trái tay, đánh cầu cao sâu.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-10",
        "name": "Hoạt động trải nghiệm, hướng nghiệp",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-10-b1",
            "number": 1,
            "title": "Chủ đề 1: Xây dựng và phát triển nhà trường",
            "chapter": "Chủ đề 1: Phát huy truyền thống nhà trường",
            "summary": "Thích ứng môi trường THPT, xây dựng văn hóa học đường.",
            "questions": []
          },
          {
            "id": "hdtn-10-b2",
            "number": 2,
            "title": "Chủ đề 2: Khám phá tính cách, quan điểm sống",
            "chapter": "Chủ đề 2: Khám phá bản thân",
            "summary": "Nhận diện cá tính, giá trị sống và điều chỉnh bản thân.",
            "questions": []
          },
          {
            "id": "hdtn-10-b3",
            "number": 3,
            "title": "Chủ đề 3: Tư duy phản biện và quản lí tài chính",
            "chapter": "Chủ đề 3: Rèn luyện bản thân",
            "summary": "Tự chủ trong học tập, giao tiếp và lập kế hoạch tài chính cá nhân.",
            "questions": []
          },
          {
            "id": "hdtn-10-b4",
            "number": 4,
            "title": "Chủ đề 4: Thực hiện trách nhiệm và kinh tế gia đình",
            "chapter": "Chủ đề 4: Trách nhiệm với gia đình",
            "summary": "Tham gia giải quyết vấn đề và đóng góp kinh tế gia đình.",
            "questions": []
          },
          {
            "id": "hdtn-10-b5",
            "number": 5,
            "title": "Chủ đề 5: Tham gia các hoạt động cộng đồng",
            "chapter": "Chủ đề 5: Phát triển cộng đồng",
            "summary": "Xây dựng mạng lưới quan hệ xã hội tích cực và thiện nguyện.",
            "questions": []
          },
          {
            "id": "hdtn-10-b6",
            "number": 6,
            "title": "Chủ đề 6: Bảo vệ môi trường và tài nguyên thiên nhiên",
            "chapter": "Chủ đề 6: Bảo tồn cảnh quan thiên nhiên",
            "summary": "Đánh giá thực trạng môi trường địa phương và hành động xanh.",
            "questions": []
          },
          {
            "id": "hdtn-10-b7",
            "number": 7,
            "title": "Chủ đề 7: Thông tin nghề nghiệp và yêu cầu nhà tuyển dụng",
            "chapter": "Chủ đề 7: Tìm hiểu nghề nghiệp",
            "summary": "Khám phá hệ thống ngành nghề và năng lực cần thiết.",
            "questions": []
          },
          {
            "id": "hdtn-10-b8",
            "number": 8,
            "title": "Chủ đề 8: Lựa chọn nghề nghiệp và lập kế hoạch học tập",
            "chapter": "Chủ đề 8: Chọn nghề phù hợp",
            "summary": "Kết nối sở thích, năng lực với tổ hợp môn học ở THPT.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 11,
    "label": "Lớp 11",
    "level": "THPT",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=11",
    "subjects": [
      {
        "id": "toan-11",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-11-b1",
            "number": 1,
            "title": "Bài 1: Giá trị lượng giác của góc lượng giác",
            "chapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
            "summary": "Đơn vị radian, đường tròn lượng giác, sin²α + cos²α = 1.",
            "questions": []
          },
          {
            "id": "toan-11-b2",
            "number": 2,
            "title": "Bài 2: Công thức lượng giác",
            "chapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
            "summary": "Công thức cộng, nhân đôi, biến đổi tích thành tổng và tổng thành tích.",
            "questions": []
          },
          {
            "id": "toan-11-b3",
            "number": 3,
            "title": "Bài 3: Hàm số lượng giác",
            "chapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
            "summary": "Tính tuần hoàn, chẵn lẻ và đồ thị.",
            "questions": []
          },
          {
            "id": "toan-11-b4",
            "number": 4,
            "title": "Bài 4: Phương trình lượng giác cơ bản",
            "chapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
            "summary": "Nghiệm sinx = m, cosx = m, tanx = m, cotx = m.",
            "questions": []
          },
          {
            "id": "toan-11-b5",
            "number": 5,
            "title": "Bài 5: Dãy số",
            "chapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
            "summary": "Tăng, giảm, bị chặn.",
            "questions": []
          },
          {
            "id": "toan-11-b6",
            "number": 6,
            "title": "Bài 6: Cấp số cộng",
            "chapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
            "summary": "u_n = u₁ + (n-1)d, S_n = n(u₁+u_n)/2.",
            "questions": []
          },
          {
            "id": "toan-11-b7",
            "number": 7,
            "title": "Bài 7: Cấp số nhân",
            "chapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
            "summary": "u_n = u₁q^(n-1), S_n = u₁(1-q^n)/(1-q).",
            "questions": []
          },
          {
            "id": "toan-11-b8",
            "number": 8,
            "title": "Bài 8: Mẫu số liệu ghép nhóm",
            "chapter": "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
            "summary": "Ghép nhóm dữ liệu và tần số.",
            "questions": []
          },
          {
            "id": "toan-11-b9",
            "number": 9,
            "title": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
            "chapter": "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
            "summary": "Trung bình, trung vị, tứ phân vị, mốt mẫu ghép nhóm.",
            "questions": []
          },
          {
            "id": "toan-11-b10",
            "number": 10,
            "title": "Bài 10: Đường thẳng và mặt phẳng trong không gian",
            "chapter": "Chương IV: Quan hệ song song trong không gian",
            "summary": "Xác định mặt phẳng và giao tuyến.",
            "questions": []
          },
          {
            "id": "toan-11-b11",
            "number": 11,
            "title": "Bài 11: Hai đường thẳng song song",
            "chapter": "Chương IV: Quan hệ song song trong không gian",
            "summary": "Chéo nhau, cắt nhau, song song.",
            "questions": []
          },
          {
            "id": "toan-11-b12",
            "number": 12,
            "title": "Bài 12: Đường thẳng và mặt phẳng song song",
            "chapter": "Chương IV: Quan hệ song song trong không gian",
            "summary": "Dấu hiệu và tính chất.",
            "questions": []
          },
          {
            "id": "toan-11-b13",
            "number": 13,
            "title": "Bài 13: Hai mặt phẳng song song",
            "chapter": "Chương IV: Quan hệ song song trong không gian",
            "summary": "Định lí Thalès trong không gian.",
            "questions": []
          },
          {
            "id": "toan-11-b14",
            "number": 14,
            "title": "Bài 14: Phép chiếu song song",
            "chapter": "Chương IV: Quan hệ song song trong không gian",
            "summary": "Hình biểu diễn hình không gian.",
            "questions": []
          },
          {
            "id": "toan-11-b15",
            "number": 15,
            "title": "Bài 15: Giới hạn của dãy số",
            "chapter": "Chương V: Giới hạn. Hàm số liên tục",
            "summary": "Giới hạn hữu hạn, vô cực, cấp số nhân lùi vô hạn.",
            "questions": []
          },
          {
            "id": "toan-11-b16",
            "number": 16,
            "title": "Bài 16: Giới hạn của hàm số",
            "chapter": "Chương V: Giới hạn. Hàm số liên tục",
            "summary": "Giới hạn một bên và vô cực.",
            "questions": []
          },
          {
            "id": "toan-11-b17",
            "number": 17,
            "title": "Bài 17: Hàm số liên tục",
            "chapter": "Chương V: Giới hạn. Hàm số liên tục",
            "summary": "Liên tục tại một điểm và trên khoảng.",
            "questions": []
          },
          {
            "id": "toan-11-b18",
            "number": 18,
            "title": "Bài 18: Lũy thừa với số mũ thực",
            "chapter": "Chương VI: Hàm số mũ và hàm số lôgarit",
            "summary": "Tính chất lũy thừa.",
            "questions": []
          },
          {
            "id": "toan-11-b19",
            "number": 19,
            "title": "Bài 19: Lôgarit",
            "chapter": "Chương VI: Hàm số mũ và hàm số lôgarit",
            "summary": "Quy tắc tính lôgarit và đổi cơ số.",
            "questions": []
          },
          {
            "id": "toan-11-b20",
            "number": 20,
            "title": "Bài 20: Hàm số mũ và hàm số lôgarit",
            "chapter": "Chương VI: Hàm số mũ và hàm số lôgarit",
            "summary": "Đồ thị và tính đơn điệu.",
            "questions": []
          },
          {
            "id": "toan-11-b21",
            "number": 21,
            "title": "Bài 21: Phương trình, bất phương trình mũ và lôgarit",
            "chapter": "Chương VI: Hàm số mũ và hàm số lôgarit",
            "summary": "Giải phương trình và bất phương trình mũ, lôgarit.",
            "questions": []
          },
          {
            "id": "toan-11-b22",
            "number": 22,
            "title": "Bài 22: Hai đường thẳng vuông góc",
            "chapter": "Chương VII: Quan hệ vuông góc trong không gian",
            "summary": "Góc giữa hai đường thẳng.",
            "questions": []
          },
          {
            "id": "toan-11-b23",
            "number": 23,
            "title": "Bài 23: Đường thẳng vuông góc với mặt phẳng",
            "chapter": "Chương VII: Quan hệ vuông góc trong không gian",
            "summary": "Định lí ba đường vuông góc.",
            "questions": []
          },
          {
            "id": "toan-11-b24",
            "number": 24,
            "title": "Bài 24: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng",
            "chapter": "Chương VII: Quan hệ vuông góc trong không gian",
            "summary": "Góc giữa đường và mặt.",
            "questions": []
          },
          {
            "id": "toan-11-b25",
            "number": 25,
            "title": "Bài 25: Hai mặt phẳng vuông góc",
            "chapter": "Chương VII: Quan hệ vuông góc trong không gian",
            "summary": "Góc nhị diện và hình chóp đều.",
            "questions": []
          },
          {
            "id": "toan-11-b26",
            "number": 26,
            "title": "Bài 26: Khoảng cách",
            "chapter": "Chương VII: Quan hệ vuông góc trong không gian",
            "summary": "Khoảng cách từ điểm đến mặt phẳng và giữa hai đường chéo nhau.",
            "questions": []
          },
          {
            "id": "toan-11-b27",
            "number": 27,
            "title": "Bài 27: Thể tích",
            "chapter": "Chương VII: Quan hệ vuông góc trong không gian",
            "summary": "Thể tích khối chóp, lăng trụ, chóp cụt đều.",
            "questions": []
          },
          {
            "id": "toan-11-b28",
            "number": 28,
            "title": "Bài 28: Biến cố hợp, biến cố giao, biến cố độc lập",
            "chapter": "Chương VIII: Các quy tắc tính xác suất",
            "summary": "Các phép toán trên biến cố.",
            "questions": []
          },
          {
            "id": "toan-11-b29",
            "number": 29,
            "title": "Bài 29: Công thức cộng xác suất",
            "chapter": "Chương VIII: Các quy tắc tính xác suất",
            "summary": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
            "questions": []
          },
          {
            "id": "toan-11-b30",
            "number": 30,
            "title": "Bài 30: Công thức nhân xác suất cho hai biến cố độc lập",
            "chapter": "Chương VIII: Các quy tắc tính xác suất",
            "summary": "P(A ∩ B) = P(A)·P(B).",
            "questions": []
          },
          {
            "id": "toan-11-b31",
            "number": 31,
            "title": "Bài 31: Định nghĩa và ý nghĩa của đạo hàm",
            "chapter": "Chương IX: Đạo hàm",
            "summary": "Hệ số góc tiếp tuyến.",
            "questions": []
          },
          {
            "id": "toan-11-b32",
            "number": 32,
            "title": "Bài 32: Các quy tắc tính đạo hàm",
            "chapter": "Chương IX: Đạo hàm",
            "summary": "Đạo hàm hàm hợp và các hàm sơ cấp.",
            "questions": []
          },
          {
            "id": "toan-11-b33",
            "number": 33,
            "title": "Bài 33: Đạo hàm cấp hai",
            "chapter": "Chương IX: Đạo hàm",
            "summary": "Ý nghĩa cơ học gia tốc a(t) = s''(t).",
            "questions": []
          }
        ]
      },
      {
        "id": "vatli-11",
        "name": "Vật lí",
        "icon": "⚡",
        "lessons": [
          {
            "id": "vatli-11-b1",
            "number": 1,
            "title": "Bài 1: Dao động điều hòa",
            "chapter": "Chương 1: Dao động",
            "summary": "Dao động cơ, dao động tuần hoàn và phương trình dao động điều hòa.",
            "questions": []
          },
          {
            "id": "vatli-11-b2",
            "number": 2,
            "title": "Bài 2: Mô tả dao động điều hòa",
            "chapter": "Chương 1: Dao động",
            "summary": "Biên độ, chu kì, tần số, tần số góc, pha và độ lệch pha.",
            "questions": []
          },
          {
            "id": "vatli-11-b3",
            "number": 3,
            "title": "Bài 3: Vận tốc, gia tốc trong dao động điều hòa",
            "chapter": "Chương 1: Dao động",
            "summary": "Phương trình vận tốc, gia tốc và đồ thị biến thiên theo thời gian.",
            "questions": []
          },
          {
            "id": "vatli-11-b4",
            "number": 4,
            "title": "Bài 4: Bài tập về dao động điều hòa",
            "chapter": "Chương 1: Dao động",
            "summary": "Giải bài toán viết phương trình và tìm li độ, vận tốc, gia tốc.",
            "questions": []
          },
          {
            "id": "vatli-11-b5",
            "number": 5,
            "title": "Bài 5: Động năng. Thế năng. Sự chuyển hóa năng lượng trong dao động điều hòa",
            "chapter": "Chương 1: Dao động",
            "summary": "Bảo toàn cơ năng W = Wđ + Wt = 1/2 mω²A².",
            "questions": []
          },
          {
            "id": "vatli-11-b6",
            "number": 6,
            "title": "Bài 6: Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
            "chapter": "Chương 1: Dao động",
            "summary": "Điều kiện cộng hưởng (f = f0) và ứng dụng.",
            "questions": []
          },
          {
            "id": "vatli-11-b7",
            "number": 7,
            "title": "Bài 7: Bài tập về sự chuyển hóa năng lượng trong dao động điều hòa",
            "chapter": "Chương 1: Dao động",
            "summary": "Tính cơ năng, động năng, thế năng con lắc lò xo, con lắc đơn.",
            "questions": []
          },
          {
            "id": "vatli-11-b8",
            "number": 8,
            "title": "Bài 8: Mô tả sóng",
            "chapter": "Chương 2: Sóng",
            "summary": "Bước sóng λ = vT = v/f, biên độ sóng, tần số và tốc độ truyền sóng.",
            "questions": []
          },
          {
            "id": "vatli-11-b9",
            "number": 9,
            "title": "Bài 9: Sóng ngang. Sóng dọc. Sự truyền năng lượng của sóng cơ",
            "chapter": "Chương 2: Sóng",
            "summary": "Phân biệt sóng ngang và sóng dọc; môi trường truyền sóng.",
            "questions": []
          },
          {
            "id": "vatli-11-b10",
            "number": 10,
            "title": "Bài 10: Thực hành: Đo tần số của sóng âm",
            "chapter": "Chương 2: Sóng",
            "summary": "Sử dụng dao động kí đo tần số âm thoa.",
            "questions": []
          },
          {
            "id": "vatli-11-b11",
            "number": 11,
            "title": "Bài 11: Sóng điện từ",
            "chapter": "Chương 2: Sóng",
            "summary": "Thang sóng điện từ: vô tuyến, hồng ngoại, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma.",
            "questions": []
          },
          {
            "id": "vatli-11-b12",
            "number": 12,
            "title": "Bài 12: Giao thoa sóng",
            "chapter": "Chương 2: Sóng",
            "summary": "Điều kiện giao thoa hai nguồn kết hợp, cực đại và cực tiểu giao thoa; thí nghiệm Young.",
            "questions": []
          },
          {
            "id": "vatli-11-b13",
            "number": 13,
            "title": "Bài 13: Sóng dừng",
            "chapter": "Chương 2: Sóng",
            "summary": "Nút sóng, bụng sóng; điều kiện sóng dừng trên dây hai đầu cố định và một đầu tự do.",
            "questions": []
          },
          {
            "id": "vatli-11-b14",
            "number": 14,
            "title": "Bài 14: Bài tập về sóng dừng",
            "chapter": "Chương 2: Sóng",
            "summary": "Tính số bụng, số nút và bước sóng trên dây.",
            "questions": []
          },
          {
            "id": "vatli-11-b15",
            "number": 15,
            "title": "Bài 15: Thực hành: Đo tốc độ truyền âm",
            "chapter": "Chương 2: Sóng",
            "summary": "Đo tốc độ truyền âm bằng cộng hưởng sóng dừng trong ống khí.",
            "questions": []
          },
          {
            "id": "vatli-11-b16",
            "number": 16,
            "title": "Bài 16: Lực tương tác giữa hai điện tích",
            "chapter": "Chương 3: Điện trường",
            "summary": "Định luật Coulomb F = k|q1q2|/(εr²).",
            "questions": []
          },
          {
            "id": "vatli-11-b17",
            "number": 17,
            "title": "Bài 17: Khái niệm điện trường",
            "chapter": "Chương 3: Điện trường",
            "summary": "Cường độ điện trường E = F/q và đường sức điện.",
            "questions": []
          },
          {
            "id": "vatli-11-b18",
            "number": 18,
            "title": "Bài 18: Điện trường đều",
            "chapter": "Chương 3: Điện trường",
            "summary": "Cường độ điện trường giữa hai bản phẳng song song E = U/d và chuyển động điện tích.",
            "questions": []
          },
          {
            "id": "vatli-11-b19",
            "number": 19,
            "title": "Bài 19: Thế năng điện",
            "chapter": "Chương 3: Điện trường",
            "summary": "Công của lực điện A = qEd và thế năng của điện tích trong điện trường.",
            "questions": []
          },
          {
            "id": "vatli-11-b20",
            "number": 20,
            "title": "Bài 20: Điện thế",
            "chapter": "Chương 3: Điện trường",
            "summary": "Điện thế V, hiệu điện thế U = A/q và liên hệ E = U/d.",
            "questions": []
          },
          {
            "id": "vatli-11-b21",
            "number": 21,
            "title": "Bài 21: Tụ điện",
            "chapter": "Chương 3: Điện trường",
            "summary": "Điện dung C = Q/U, ghép tụ nối tiếp/song song và năng lượng tụ điện.",
            "questions": []
          },
          {
            "id": "vatli-11-b22",
            "number": 22,
            "title": "Bài 22: Cường độ dòng điện",
            "chapter": "Chương 4: Dòng điện. Mạch điện",
            "summary": "I = Δq/Δt = Snve và chiều dòng điện.",
            "questions": []
          },
          {
            "id": "vatli-11-b23",
            "number": 23,
            "title": "Bài 23: Điện trở. Định luật Ohm",
            "chapter": "Chương 4: Dòng điện. Mạch điện",
            "summary": "Định luật Ohm I = U/R và đường đặc trưng Vôn-Ampe.",
            "questions": []
          },
          {
            "id": "vatli-11-b24",
            "number": 24,
            "title": "Bài 24: Nguồn điện",
            "chapter": "Chương 4: Dòng điện. Mạch điện",
            "summary": "Suất điện động E, điện trở trong r và định luật Ohm cho toàn mạch.",
            "questions": []
          },
          {
            "id": "vatli-11-b25",
            "number": 25,
            "title": "Bài 25: Năng lượng và công suất điện",
            "chapter": "Chương 4: Dòng điện. Mạch điện",
            "summary": "Công A = UIt, công suất P = UI và định luật Joule-Lenz.",
            "questions": []
          },
          {
            "id": "vatli-11-b26",
            "number": 26,
            "title": "Bài 26: Thực hành: Đo suất điện động và điện trở trong của pin điện hóa",
            "chapter": "Chương 4: Dòng điện. Mạch điện",
            "summary": "Mắc mạch đo U và I để xác định E và r.",
            "questions": []
          }
        ]
      },
      {
        "id": "hoahoc-11",
        "name": "Hóa học",
        "icon": "🧪",
        "lessons": [
          {
            "id": "hoahoc-11-b1",
            "number": 1,
            "title": "Bài 1: Khái niệm về cân bằng hóa học",
            "chapter": "Chương 1: Cân bằng hóa học",
            "summary": "Phản ứng thuận nghịch, hằng số cân bằng Kc và nguyên lí Le Chatelier.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b2",
            "number": 2,
            "title": "Bài 2: Cân bằng trong dung dịch nước",
            "chapter": "Chương 1: Cân bằng hóa học",
            "summary": "Thuyết Bronsted-Lowry về acid-base, pH và chuẩn độ acid-base.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b3",
            "number": 3,
            "title": "Bài 3: Ôn tập chương 1",
            "chapter": "Chương 1: Cân bằng hóa học",
            "summary": "Bài tập chuyển dịch cân bằng và tính pH.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b4",
            "number": 4,
            "title": "Bài 4: Nitrogen",
            "chapter": "Chương 2: Nitrogen – Sulfur",
            "summary": "Cấu tạo phân tử N2, tính trơ ở nhiệt độ thường và ứng dụng.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b5",
            "number": 5,
            "title": "Bài 5: Ammonia – Muối ammonium",
            "chapter": "Chương 2: Nitrogen – Sulfur",
            "summary": "Tính base yếu, tính khử của NH3 và nhận biết ion NH4+.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b6",
            "number": 6,
            "title": "Bài 6: Một số hợp chất của nitrogen với oxygen",
            "chapter": "Chương 2: Nitrogen – Sulfur",
            "summary": "NO, NO2, mưa acid và tính acid, tính oxi hóa mạnh của HNO3.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b7",
            "number": 7,
            "title": "Bài 7: Sulfur và sulfur dioxide",
            "chapter": "Chương 2: Nitrogen – Sulfur",
            "summary": "Tính chất của đơn chất S và tính oxi hóa, tính khử của SO2.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b8",
            "number": 8,
            "title": "Bài 8: Sulfuric acid và muối sulfate",
            "chapter": "Chương 2: Nitrogen – Sulfur",
            "summary": "Tính háo nước, tính oxi hóa mạnh của H2SO4 đặc và nhận biết ion SO4^2-.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b9",
            "number": 9,
            "title": "Bài 9: Ôn tập chương 2",
            "chapter": "Chương 2: Nitrogen – Sulfur",
            "summary": "Tổng hợp hóa học nguyên tố N và S.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b10",
            "number": 10,
            "title": "Bài 10: Hợp chất hữu cơ và hóa học hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Đặc điểm hợp chất hữu cơ, nhóm chức và phổ hồng ngoại (IR).",
            "questions": []
          },
          {
            "id": "hoahoc-11-b11",
            "number": 11,
            "title": "Bài 11: Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Chưng cất, chiết, kết tinh và sắc kí cột.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b12",
            "number": 12,
            "title": "Bài 12: Công thức phân tử hợp chất hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Lập CTĐGN và CTPT từ phân tích nguyên tố và phổ khối lượng (MS).",
            "questions": []
          },
          {
            "id": "hoahoc-11-b13",
            "number": 13,
            "title": "Bài 13: Cấu tạo hóa học hợp chất hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Thuyết cấu tạo hóa học, đồng đẳng và đồng phân.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b14",
            "number": 14,
            "title": "Bài 14: Ôn tập chương 3",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Giải phổ IR, MS và viết đồng phân cấu tạo.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b15",
            "number": 15,
            "title": "Bài 15: Alkane",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Danh pháp, đồng phân, phản ứng thế halogen, cracking và reforming.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b16",
            "number": 16,
            "title": "Bài 16: Hydrocarbon không no",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Alkene, alkyne; đồng phân hình học cis-trans, quy tắc Markovnikov.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b17",
            "number": 17,
            "title": "Bài 17: Arene (Hydrocarbon thơm)",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Benzene, toluene; phản ứng thế vòng thơm và oxi hóa mạch nhánh.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b18",
            "number": 18,
            "title": "Bài 18: Ôn tập chương 4",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Phân biệt alkane, alkene, alkyne, arene.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b19",
            "number": 19,
            "title": "Bài 19: Dẫn xuất halogen",
            "chapter": "Chương 5: Dẫn xuất halogen – Alcohol – Phenol",
            "summary": "Danh pháp, phản ứng thủy phân và tách HX theo quy tắc Zaitsev.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b20",
            "number": 20,
            "title": "Bài 20: Alcohol",
            "chapter": "Chương 5: Dẫn xuất halogen – Alcohol – Phenol",
            "summary": "Bậc alcohol, liên kết hydrogen, phản ứng với Na, Cu(OH)2 (glycerol), tách nước.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b21",
            "number": 21,
            "title": "Bài 21: Phenol",
            "chapter": "Chương 5: Dẫn xuất halogen – Alcohol – Phenol",
            "summary": "Tính acid yếu, phản ứng với Na, NaOH và nước bromine.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b22",
            "number": 22,
            "title": "Bài 22: Ôn tập chương 5",
            "chapter": "Chương 5: Dẫn xuất halogen – Alcohol – Phenol",
            "summary": "Chuyển hóa dẫn xuất halogen - alcohol - phenol.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b23",
            "number": 23,
            "title": "Bài 23: Hợp chất carbonyl",
            "chapter": "Chương 6: Hợp chất carbonyl – Carboxylic acid",
            "summary": "Aldehyde và ketone; phản ứng tráng bạc Tollens, Cu(OH)2 và phản ứng iodoform.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b24",
            "number": 24,
            "title": "Bài 24: Carboxylic acid",
            "chapter": "Chương 6: Hợp chất carbonyl – Carboxylic acid",
            "summary": "Tính acid, phản ứng ester hóa và ứng dụng trong đời sống.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b25",
            "number": 25,
            "title": "Bài 25: Ôn tập chương 6",
            "chapter": "Chương 6: Hợp chất carbonyl – Carboxylic acid",
            "summary": "Tổng hợp hóa hữu cơ lớp 11.",
            "questions": []
          }
        ]
      },
      {
        "id": "sinhhoc-11",
        "name": "Sinh học",
        "icon": "🧬",
        "lessons": [
          {
            "id": "sinhhoc-11-b1",
            "number": 1,
            "title": "Bài 1: Khái quát về trao đổi chất và chuyển hóa năng lượng",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Các phương thức trao đổi chất (tự dưỡng, dị dưỡng) và chuyển hóa năng lượng.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b2",
            "number": 2,
            "title": "Bài 2: Trao đổi nước và khoáng ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Hấp thụ nước và muối khoáng ở rễ, vận chuyển qua mạch gỗ/mạch rây, thoát hơi nước.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b3",
            "number": 3,
            "title": "Bài 3: Thực hành: Thí nghiệm trao đổi nước và trồng cây thủy canh, khí canh",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Thực hành chứng minh sự hút nước và thoát hơi nước.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b4",
            "number": 4,
            "title": "Bài 4: Quang hợp ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Pha sáng, pha tối (C3, C4, CAM) và các yếu tố ảnh hưởng quang hợp.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b5",
            "number": 5,
            "title": "Bài 5: Thực hành: Quang hợp ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Chiết rút sắc tố và phát hiện tinh bột ở lá xanh.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b6",
            "number": 6,
            "title": "Bài 6: Hô hấp ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Đường phân, chu trình Krebs, chuỗi truyền electron và vai trò hô hấp.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b7",
            "number": 7,
            "title": "Bài 7: Thực hành: Hô hấp ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Thí nghiệm hạt nảy mầm thải CO2 và tỏa nhiệt.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b8",
            "number": 8,
            "title": "Bài 8: Dinh dưỡng và tiêu hóa ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Tiêu hóa nội bào, túi tiêu hóa, ống tiêu hóa và động vật ăn thực vật/thịt.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b9",
            "number": 9,
            "title": "Bài 9: Hô hấp ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Qua bề mặt cơ thể, hệ thống ống khí, mang và phổi.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b10",
            "number": 10,
            "title": "Bài 10: Tuần hoàn ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Hệ tuần hoàn hở, kín (đơn, kép); hoạt động của tim và hệ mạch.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b11",
            "number": 11,
            "title": "Bài 11: Thực hành: Một số thí nghiệm về hệ tuần hoàn",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Đo huyết áp, đếm nhịp tim trước và sau vận động.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b12",
            "number": 12,
            "title": "Bài 12: Miễn dịch ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Miễn dịch không đặc hiệu, miễn dịch đặc hiệu (dịch thể và tế bào) và vaccine.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b13",
            "number": 13,
            "title": "Bài 13: Bài tiết và cân bằng nội môi",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Vai trò của thận, gan, phổi trong điều hòa áp suất thẩm thấu và pH máu.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b14",
            "number": 14,
            "title": "Bài 14: Khái quát về cảm ứng ở sinh vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Cơ chế tiếp nhận, dẫn truyền, xử lí và trả lời kích thích.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b15",
            "number": 15,
            "title": "Bài 15: Cảm ứng ở thực vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Hướng động (hướng sáng, trọng lực, nước, hóa) và ứng động.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b16",
            "number": 16,
            "title": "Bài 16: Thực hành: Cảm ứng ở thực vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Quan sát hướng sáng, hướng trọng lực ở cây non.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b17",
            "number": 17,
            "title": "Bài 17: Cảm ứng ở động vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Hệ thần kinh dạng lưới, chuỗi hạch, ống; điện thế nghỉ, điện thế hoạt động, synapse.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b18",
            "number": 18,
            "title": "Bài 18: Tập tính ở động vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Tập tính bẩm sinh, học được và ứng dụng trong chăn nuôi.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b19",
            "number": 19,
            "title": "Bài 19: Khái quát về sinh trưởng và phát triển ở sinh vật",
            "chapter": "Chương 3: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Mối quan hệ giữa sinh trưởng, phát triển và vòng đời.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b20",
            "number": 20,
            "title": "Bài 20: Sinh trưởng và phát triển ở thực vật",
            "chapter": "Chương 3: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Mô phân sinh đỉnh, bên, lóng và các hormone thực vật (auxin, GA, cytokinin, ABA, ethylene).",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b21",
            "number": 21,
            "title": "Bài 21: Thực hành: Bấm ngọn, tỉa cành, tính tuổi cây",
            "chapter": "Chương 3: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Thực hành kĩ thuật tác động đến sinh trưởng thực vật.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b22",
            "number": 22,
            "title": "Bài 22: Sinh trưởng và phát triển ở động vật",
            "chapter": "Chương 3: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Phát triển không qua biến thái và qua biến thái; vai trò hormone GH, thyroxine, ecdysone.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b23",
            "number": 23,
            "title": "Bài 23: Thực hành: Quan sát quá trình biến thái ở động vật",
            "chapter": "Chương 3: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Quan sát vòng đời sâu bướm/tằm hoặc ếch.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b24",
            "number": 24,
            "title": "Bài 24: Khái quát về sinh sản ở sinh vật",
            "chapter": "Chương 4: Sinh sản ở sinh vật",
            "summary": "So sánh sinh sản vô tính và sinh sản hữu tính.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b25",
            "number": 25,
            "title": "Bài 25: Sinh sản ở thực vật",
            "chapter": "Chương 4: Sinh sản ở sinh vật",
            "summary": "Thụ phấn, thụ tinh kép, hình thành hạt và quả ở thực vật có hoa.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b26",
            "number": 26,
            "title": "Bài 26: Thực hành: Nhân giống vô tính và thụ phấn cho cây",
            "chapter": "Chương 4: Sinh sản ở sinh vật",
            "summary": "Giâm cành, chiết cành và thụ phấn nhân tạo.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b27",
            "number": 27,
            "title": "Bài 27: Sinh sản ở động vật",
            "chapter": "Chương 4: Sinh sản ở sinh vật",
            "summary": "Các hình thức sinh sản vô tính, hữu tính và điều hòa sinh sản.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b28",
            "number": 28,
            "title": "Bài 28: Cơ thể sinh vật là một hệ thống mở và tự điều chỉnh",
            "chapter": "Chương 5: Sinh học cơ thể và ngành nghề",
            "summary": "Mối liên hệ thống nhất giữa các quá trình sinh lí.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b29",
            "number": 29,
            "title": "Bài 29: Một số ngành nghề liên quan đến sinh học cơ thể",
            "chapter": "Chương 5: Sinh học cơ thể và ngành nghề",
            "summary": "Y học, dược học, nông lâm nghiệp và công nghệ sinh học.",
            "questions": []
          }
        ]
      },
      {
        "id": "nguvan-11",
        "name": "Ngữ văn",
        "icon": "📖",
        "lessons": [
          {
            "id": "nguvan-11-b1",
            "number": 1,
            "title": "Bài 1: Câu chuyện và điểm nhìn trong truyện kể (Vợ nhặt, Chí Phèo)",
            "chapter": "Tập 1 - Bài 1: Câu chuyện và điểm nhìn trong truyện kể",
            "summary": "Phân tích nghệ thuật kể chuyện, điểm nhìn trong Vợ nhặt (Kim Lân), Chí Phèo (Nam Cao).",
            "questions": []
          },
          {
            "id": "nguvan-11-b2",
            "number": 2,
            "title": "Bài 2: Cấu tứ và hình ảnh trong thơ trữ tình (Nhớ đồng, Tràng giang, Đây thôn Vĩ Dạ)",
            "chapter": "Tập 1 - Bài 2: Cấu tứ và hình ảnh trong thơ trữ tình",
            "summary": "Tìm hiểu cấu tứ và biểu tượng trong thơ mới và thơ hiện đại.",
            "questions": []
          },
          {
            "id": "nguvan-11-b3",
            "number": 3,
            "title": "Bài 3: Cấu trúc của văn bản nghị luận (Cầu hiền chiếu, Xin lập khoa luật)",
            "chapter": "Tập 1 - Bài 3: Cấu trúc của văn bản nghị luận",
            "summary": "Cách lập luận, lí lẽ và bằng chứng trong văn nghị luận trung đại và hiện đại.",
            "questions": []
          },
          {
            "id": "nguvan-11-b4",
            "number": 4,
            "title": "Bài 4: Tự sự trong truyện thơ dân gian và truyện thơ Nôm (Lời tiễn dặn, Truyện Kiều)",
            "chapter": "Tập 1 - Bài 4: Tự sự trong truyện thơ dân gian và truyện thơ Nôm",
            "summary": "Giá trị nhân đạo và nghệ thuật tự sự trong Tiễn dặn người yêu, Truyện Kiều.",
            "questions": []
          },
          {
            "id": "nguvan-11-b5",
            "number": 5,
            "title": "Bài 5: Nhân vật và xung đột trong bi kịch (Sống hay không sống, Vĩnh biệt Cửu Trùng Đài)",
            "chapter": "Tập 1 - Bài 5: Nhân vật và xung đột trong bi kịch",
            "summary": "Xung đột bi kịch trong Hamlet (Shakespeare) và Vũ Như Tô (Nguyễn Huy Tưởng).",
            "questions": []
          },
          {
            "id": "nguvan-11-b6",
            "number": 6,
            "title": "Bài 6: Nguyễn Du – 'Những điều trông thấy mà đau đớn lòng'",
            "chapter": "Tập 2 - Bài 6: Nguyễn Du – “Những điều trông thấy mà đau đớn lòng”",
            "summary": "Tác gia Nguyễn Du, Trao duyên, Độc Tiểu Thanh kí.",
            "questions": []
          },
          {
            "id": "nguvan-11-b7",
            "number": 7,
            "title": "Bài 7: Ghi chép và tưởng tượng trong kí (Ai đã đặt tên cho dòng sông, Và tôi vẫn muốn mẹ)",
            "chapter": "Tập 2 - Bài 7: Ghi chép và tưởng tượng trong kí",
            "summary": "Đặc trưng thể loại bút kí, tùy bút và tản văn.",
            "questions": []
          },
          {
            "id": "nguvan-11-b8",
            "number": 8,
            "title": "Bài 8: Cấu trúc của văn bản thông tin (Nữ phóng viên đầu tiên, Trí thông minh nhân tạo)",
            "chapter": "Tập 2 - Bài 8: Cấu trúc của văn bản thông tin",
            "summary": "Bố cục, dữ liệu và tính khách quan trong văn bản thông tin.",
            "questions": []
          },
          {
            "id": "nguvan-11-b9",
            "number": 9,
            "title": "Bài 9: Lựa chọn và hành động (Bài ca ngất ngưởng, Văn tế nghĩa sĩ Cần Giuộc)",
            "chapter": "Tập 2 - Bài 9: Lựa chọn và hành động",
            "summary": "Phẩm chất, khí phách con người trước lựa chọn lịch sử và cuộc đời.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-11",
        "name": "Lịch sử",
        "icon": "📜",
        "lessons": [
          {
            "id": "lichsu-11-b1",
            "number": 1,
            "title": "Bài 1: Một số vấn đề chung về cách mạng tư sản",
            "chapter": "Chủ đề 1: Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản",
            "summary": "Tiền đề, mục tiêu, động lực cách mạng tư sản.",
            "questions": []
          },
          {
            "id": "lichsu-11-b2",
            "number": 2,
            "title": "Bài 2: Sự xác lập và phát triển của chủ nghĩa tư bản",
            "chapter": "Chủ đề 1: Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản",
            "summary": "Từ tự do cạnh tranh sang độc quyền.",
            "questions": []
          },
          {
            "id": "lichsu-11-b3",
            "number": 3,
            "title": "Bài 3: Sự hình thành Liên bang Cộng hòa xã hội chủ nghĩa Xô viết",
            "chapter": "Chủ đề 2: Chủ nghĩa xã hội từ năm 1917 đến nay",
            "summary": "Cách mạng tháng Mười 1917 và thành lập Liên Xô 1922.",
            "questions": []
          },
          {
            "id": "lichsu-11-b4",
            "number": 4,
            "title": "Bài 4: Sự phát triển của chủ nghĩa xã hội từ sau Chiến tranh thế giới thứ hai đến nay",
            "chapter": "Chủ đề 2: Chủ nghĩa xã hội từ năm 1917 đến nay",
            "summary": "Đông Âu, Trung Quốc, Việt Nam, Cuba.",
            "questions": []
          },
          {
            "id": "lichsu-11-b5",
            "number": 5,
            "title": "Bài 5: Quá trình xâm lược và cai trị của chủ nghĩa thực dân ở Đông Nam Á",
            "chapter": "Chủ đề 3: Quá trình giành độc lập dân tộc của các quốc gia Đông Nam Á",
            "summary": "Chính sách cai trị thực dân phương Tây.",
            "questions": []
          },
          {
            "id": "lichsu-11-b6",
            "number": 6,
            "title": "Bài 6: Hành trình đi đến độc lập dân tộc ở Đông Nam Á",
            "chapter": "Chủ đề 3: Quá trình giành độc lập dân tộc của các quốc gia Đông Nam Á",
            "summary": "Đấu tranh giành độc lập và tái thiết sau độc lập.",
            "questions": []
          },
          {
            "id": "lichsu-11-b7",
            "number": 7,
            "title": "Bài 7: Chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam (trước Cách mạng tháng Tám 1945)",
            "chapter": "Chủ đề 4: Chiến tranh bảo vệ Tổ quốc và giải phóng dân tộc trong lịch sử Việt Nam",
            "summary": "Bạch Đằng 938, kháng chiến chống Tống, Mông-Nguyên, Tây Sơn.",
            "questions": []
          },
          {
            "id": "lichsu-11-b8",
            "number": 8,
            "title": "Bài 8: Một số cuộc khởi nghĩa và chiến tranh giải phóng trong lịch sử Việt Nam",
            "chapter": "Chủ đề 4: Chiến tranh bảo vệ Tổ quốc và giải phóng dân tộc trong lịch sử Việt Nam",
            "summary": "Hai Bà Trưng, Lý Bí, Phùng Hưng, Lam Sơn.",
            "questions": []
          },
          {
            "id": "lichsu-11-b9",
            "number": 9,
            "title": "Bài 9: Cuộc cải cách của Hồ Quý Ly và triều Hồ",
            "chapter": "Chủ đề 5: Một số cuộc cải cách lớn trong lịch sử Việt Nam (trước năm 1858)",
            "summary": "Cải cách hành chính, tiền giấy, giáo dục.",
            "questions": []
          },
          {
            "id": "lichsu-11-b10",
            "number": 10,
            "title": "Bài 10: Cuộc cải cách của Lê Thánh Tông (thế kỉ XV)",
            "chapter": "Chủ đề 5: Một số cuộc cải cách lớn trong lịch sử Việt Nam (trước năm 1858)",
            "summary": "Bộ luật Hồng Đức, chia 13 đạo thừa tuyên.",
            "questions": []
          },
          {
            "id": "lichsu-11-b11",
            "number": 11,
            "title": "Bài 11: Cuộc cải cách của Minh Mạng (nửa đầu thế kỉ XIX)",
            "chapter": "Chủ đề 5: Một số cuộc cải cách lớn trong lịch sử Việt Nam (trước năm 1858)",
            "summary": "Chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên.",
            "questions": []
          },
          {
            "id": "lichsu-11-b12",
            "number": 12,
            "title": "Bài 12: Vị trí và tầm quan trọng của Biển Đông",
            "chapter": "Chủ đề 6: Lịch sử bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
            "summary": "Tuyến hàng hải huyết mạch và tài nguyên Biển Đông.",
            "questions": []
          },
          {
            "id": "lichsu-11-b13",
            "number": 13,
            "title": "Bài 13: Việt Nam và Biển Đông",
            "chapter": "Chủ đề 6: Lịch sử bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
            "summary": "Chủ quyền Hoàng Sa, Trường Sa qua các thời kì.",
            "questions": []
          }
        ]
      },
      {
        "id": "diali-11",
        "name": "Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "diali-11-b1",
            "number": 1,
            "title": "Bài 1: Sự khác biệt về trình độ phát triển kinh tế - xã hội của các nhóm nước",
            "chapter": "Phần một: Một số vấn đề về kinh tế - xã hội thế giới",
            "summary": "Nhóm nước phát triển và đang phát triển theo GNI/người, cơ cấu kinh tế, HDI.",
            "questions": []
          },
          {
            "id": "diali-11-b2",
            "number": 2,
            "title": "Bài 2: Toàn cầu hóa và khu vực hóa kinh tế",
            "chapter": "Phần một: Một số vấn đề về kinh tế - xã hội thế giới",
            "summary": "Biểu hiện, hệ quả của toàn cầu hóa và khu vực hóa.",
            "questions": []
          },
          {
            "id": "diali-11-b3",
            "number": 3,
            "title": "Bài 3: Thực hành: Tìm hiểu cơ hội và thách thức của toàn cầu hóa, khu vực hóa",
            "chapter": "Phần một: Một số vấn đề về kinh tế - xã hội thế giới",
            "summary": "Cơ hội và thách thức đối với các nước đang phát triển.",
            "questions": []
          },
          {
            "id": "diali-11-b4",
            "number": 4,
            "title": "Bài 4: Một số tổ chức quốc tế và khu vực, an ninh toàn cầu",
            "chapter": "Phần một: Một số vấn đề về kinh tế - xã hội thế giới",
            "summary": "LHQ, WTO, IMF, APEC và an ninh lương thực, năng lượng, nguồn nước, mạng.",
            "questions": []
          },
          {
            "id": "diali-11-b5",
            "number": 5,
            "title": "Bài 5: Thực hành: Viết báo cáo về đặc điểm và biểu hiện của nền kinh tế tri thức",
            "chapter": "Phần một: Một số vấn đề về kinh tế - xã hội thế giới",
            "summary": "Vai trò công nghệ cao, R&D và nhân lực chất lượng cao.",
            "questions": []
          },
          {
            "id": "diali-11-b6",
            "number": 6,
            "title": "Bài 6: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội khu vực Mỹ La-tinh",
            "chapter": "Phần hai: Mỹ La-tinh",
            "summary": "Địa hình An-đét, đồng bằng A-ma-dôn và cơ cấu dân cư đa dạng.",
            "questions": []
          },
          {
            "id": "diali-11-b7",
            "number": 7,
            "title": "Bài 7: Kinh tế khu vực Mỹ La-tinh",
            "chapter": "Phần hai: Mỹ La-tinh",
            "summary": "Đặc điểm công nghiệp, nông nghiệp, dịch vụ và vấn đề nợ nước ngoài.",
            "questions": []
          },
          {
            "id": "diali-11-b8",
            "number": 8,
            "title": "Bài 8: Thực hành: Viết báo cáo về kinh tế - xã hội Cộng hòa liên bang Bra-xin",
            "chapter": "Phần hai: Mỹ La-tinh",
            "summary": "Phân tích số liệu kinh tế Bra-xin.",
            "questions": []
          },
          {
            "id": "diali-11-b9",
            "number": 9,
            "title": "Bài 9: Liên minh châu Âu – Một liên kết kinh tế khu vực lớn",
            "chapter": "Phần hai: Liên minh châu Âu (EU)",
            "summary": "4 mặt tự do lưu thông và vai trò của EU trong kinh tế thế giới.",
            "questions": []
          },
          {
            "id": "diali-11-b10",
            "number": 10,
            "title": "Bài 10: Thực hành: Viết báo cáo về công nghiệp Cộng hòa liên bang Đức",
            "chapter": "Phần hai: Liên minh châu Âu (EU)",
            "summary": "Thế mạnh công nghiệp chế tạo, hóa chất, năng lượng xanh của Đức.",
            "questions": []
          },
          {
            "id": "diali-11-b11",
            "number": 11,
            "title": "Bài 11: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Đông Nam Á",
            "chapter": "Phần hai: Đông Nam Á",
            "summary": "Đông Nam Á lục địa và biển đảo; dân số trẻ, đa văn hóa.",
            "questions": []
          },
          {
            "id": "diali-11-b12",
            "number": 12,
            "title": "Bài 12: Kinh tế khu vực Đông Nam Á",
            "chapter": "Phần hai: Đông Nam Á",
            "summary": "Chuyển dịch cơ cấu kinh tế từ nông nghiệp sang công nghiệp, dịch vụ.",
            "questions": []
          },
          {
            "id": "diali-11-b13",
            "number": 13,
            "title": "Bài 13: Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
            "chapter": "Phần hai: Đông Nam Á",
            "summary": "Mục tiêu, cơ chế hợp tác và thành tựu của ASEAN.",
            "questions": []
          },
          {
            "id": "diali-11-b14",
            "number": 14,
            "title": "Bài 14: Thực hành: Tìm hiểu hoạt động kinh tế đối ngoại Đông Nam Á",
            "chapter": "Phần hai: Đông Nam Á",
            "summary": "Xuất nhập khẩu và thu hút FDI ở Đông Nam Á.",
            "questions": []
          },
          {
            "id": "diali-11-b15",
            "number": 15,
            "title": "Bài 15: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Tây Nam Á",
            "chapter": "Phần hai: Tây Nam Á",
            "summary": "Vị trí ngã ba 3 châu lục, khí hậu khô hạn và tài nguyên dầu mỏ.",
            "questions": []
          },
          {
            "id": "diali-11-b16",
            "number": 16,
            "title": "Bài 16: Kinh tế khu vực Tây Nam Á",
            "chapter": "Phần hai: Tây Nam Á",
            "summary": "Công nghiệp khai thác dầu khí và phát triển du lịch, dịch vụ.",
            "questions": []
          },
          {
            "id": "diali-11-b17",
            "number": 17,
            "title": "Bài 17: Thực hành: Viết báo cáo về vấn đề dầu mỏ của Tây Nam Á",
            "chapter": "Phần hai: Tây Nam Á",
            "summary": "Trữ lượng, sản lượng và tác động của dầu mỏ Tây Nam Á.",
            "questions": []
          },
          {
            "id": "diali-11-b18",
            "number": 18,
            "title": "Bài 18: Vị trí địa lí, điều kiện tự nhiên và dân cư Hoa Kỳ",
            "chapter": "Phần hai: Hoa Kỳ",
            "summary": "3 vùng tự nhiên (phía Tây, Trung tâm, phía Đông) và dân cư nhập cư.",
            "questions": []
          },
          {
            "id": "diali-11-b19",
            "number": 19,
            "title": "Bài 19: Kinh tế Hoa Kỳ",
            "chapter": "Phần hai: Hoa Kỳ",
            "summary": "Nền kinh tế hàng đầu thế giới về dịch vụ, công nghiệp công nghệ cao và nông nghiệp.",
            "questions": []
          },
          {
            "id": "diali-11-b20",
            "number": 20,
            "title": "Bài 20: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Liên bang Nga",
            "chapter": "Phần hai: Liên bang Nga",
            "summary": "Diện tích lớn nhất thế giới, sông I-ê-nit-xây chia 2 miền địa hình.",
            "questions": []
          },
          {
            "id": "diali-11-b21",
            "number": 21,
            "title": "Bài 21: Kinh tế Liên bang Nga",
            "chapter": "Phần hai: Liên bang Nga",
            "summary": "Công nghiệp khai khoáng, năng lượng, hàng không vũ trụ và nông nghiệp.",
            "questions": []
          },
          {
            "id": "diali-11-b22",
            "number": 22,
            "title": "Bài 22: Thực hành: Tìm hiểu về công nghiệp khai thác của Liên bang Nga",
            "chapter": "Phần hai: Liên bang Nga",
            "summary": "Khai thác dầu khí, than, kim loại của Nga.",
            "questions": []
          },
          {
            "id": "diali-11-b23",
            "number": 23,
            "title": "Bài 23: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Nhật Bản",
            "chapter": "Phần hai: Nhật Bản",
            "summary": "Quần đảo núi lửa, động đất, nghèo khoáng sản và dân số già.",
            "questions": []
          },
          {
            "id": "diali-11-b24",
            "number": 24,
            "title": "Bài 24: Kinh tế Nhật Bản",
            "chapter": "Phần hai: Nhật Bản",
            "summary": "Công nghiệp chế tạo, điện tử, robot và nông nghiệp thâm canh.",
            "questions": []
          },
          {
            "id": "diali-11-b25",
            "number": 25,
            "title": "Bài 25: Thực hành: Viết báo cáo về hoạt động kinh tế đối ngoại của Nhật Bản",
            "chapter": "Phần hai: Nhật Bản",
            "summary": "Xuất khẩu hàng công nghệ cao và đầu tư FDI.",
            "questions": []
          },
          {
            "id": "diali-11-b26",
            "number": 26,
            "title": "Bài 26: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Trung Quốc",
            "chapter": "Phần hai: Trung Quốc",
            "summary": "Sự khác biệt tự nhiên miền Đông và miền Tây; dân số đông.",
            "questions": []
          },
          {
            "id": "diali-11-b27",
            "number": 27,
            "title": "Bài 27: Kinh tế Trung Quốc",
            "chapter": "Phần hai: Trung Quốc",
            "summary": "Tăng trưởng GDP nhanh, công xưởng thế giới và chuyển đổi công nghệ cao.",
            "questions": []
          },
          {
            "id": "diali-11-b28",
            "number": 28,
            "title": "Bài 28: Thực hành: Viết báo cáo về kinh tế vùng duyên hải Trung Quốc",
            "chapter": "Phần hai: Trung Quốc",
            "summary": "Các đặc khu kinh tế và trung tâm công nghiệp ven biển.",
            "questions": []
          },
          {
            "id": "diali-11-b29",
            "number": 29,
            "title": "Bài 29: Thực hành: Tìm hiểu về kinh tế của Ô-xtrây-li-a",
            "chapter": "Phần hai: Ô-xtrây-li-a",
            "summary": "Xuất khẩu khoáng sản, nông sản (len, thịt bò, lúa mì) và dịch vụ.",
            "questions": []
          },
          {
            "id": "diali-11-b30",
            "number": 30,
            "title": "Bài 30: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Cộng hòa Nam Phi",
            "chapter": "Phần hai: Cộng hòa Nam Phi",
            "summary": "Nền kinh tế phát triển nhất châu Phi, giàu vàng, kim cương, than.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdktpl-11",
        "name": "Giáo dục kinh tế và pháp luật",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "gdktpl-11-b1",
            "number": 1,
            "title": "Bài 1: Cạnh tranh trong nền kinh tế thị trường",
            "chapter": "Chủ đề 1: Cạnh tranh, cung - cầu",
            "summary": "Nguyên nhân, mục đích và tính hai mặt của cạnh tranh.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b2",
            "number": 2,
            "title": "Bài 2: Cung - cầu trong nền kinh tế thị trường",
            "chapter": "Chủ đề 1: Cạnh tranh, cung - cầu",
            "summary": "Mối quan hệ cung - cầu và giá cả.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b3",
            "number": 3,
            "title": "Bài 3: Lạm phát",
            "chapter": "Chủ đề 2: Lạm phát, thất nghiệp",
            "summary": "Nguyên nhân và hậu quả của lạm phát.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b4",
            "number": 4,
            "title": "Bài 4: Thất nghiệp",
            "chapter": "Chủ đề 2: Lạm phát, thất nghiệp",
            "summary": "Các loại hình thất nghiệp và giải pháp.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b5",
            "number": 5,
            "title": "Bài 5: Thị trường lao động và việc làm",
            "chapter": "Chủ đề 3: Thị trường lao động và việc làm",
            "summary": "Xu hướng tuyển dụng và chuẩn bị nghề nghiệp.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b6",
            "number": 6,
            "title": "Bài 6: Ý tưởng, cơ hội kinh doanh và các năng lực cần thiết của người kinh doanh",
            "chapter": "Chủ đề 4: Ý tưởng, cơ hội kinh doanh",
            "summary": "Phân tích SWOT và năng lực kinh doanh.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b7",
            "number": 7,
            "title": "Bài 7: Đạo đức kinh doanh",
            "chapter": "Chủ đề 5: Đạo đức kinh doanh",
            "summary": "Trung thực, giữ chữ tín, trách nhiệm xã hội.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b8",
            "number": 8,
            "title": "Bài 8: Văn hóa tiêu dùng",
            "chapter": "Chủ đề 6: Văn hóa tiêu dùng",
            "summary": "Tiêu dùng thông minh, bền vững, thân thiện môi trường.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b9",
            "number": 9,
            "title": "Bài 9: Quyền bình đẳng của công dân trước pháp luật",
            "chapter": "Chủ đề 7: Quyền bình đẳng của công dân",
            "summary": "Bình đẳng về quyền, nghĩa vụ và trách nhiệm pháp lí.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b10",
            "number": 10,
            "title": "Bài 10: Bình đẳng giới trong các lĩnh vực",
            "chapter": "Chủ đề 7: Quyền bình đẳng của công dân",
            "summary": "Bình đẳng nam nữ trong chính trị, kinh tế, gia đình.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b11",
            "number": 11,
            "title": "Bài 11: Quyền bình đẳng giữa các dân tộc",
            "chapter": "Chủ đề 7: Quyền bình đẳng của công dân",
            "summary": "Đoàn kết, bình đẳng các dân tộc.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b12",
            "number": 12,
            "title": "Bài 12: Quyền bình đẳng giữa các tôn giáo",
            "chapter": "Chủ đề 7: Quyền bình đẳng của công dân",
            "summary": "Tôn trọng tự do tín ngưỡng, tôn giáo.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b13",
            "number": 13,
            "title": "Bài 13: Quyền và nghĩa vụ cơ bản của công dân trong tham gia quản lí nhà nước và xã hội",
            "chapter": "Chủ đề 8: Quyền dân chủ cơ bản của công dân",
            "summary": "Dân chủ trực tiếp và gián tiếp.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b14",
            "number": 14,
            "title": "Bài 14: Quyền và nghĩa vụ cơ bản của công dân về bầu cử và ứng cử",
            "chapter": "Chủ đề 8: Quyền dân chủ cơ bản của công dân",
            "summary": "Nguyên tắc bầu cử phổ thông, bình đẳng, trực tiếp, bỏ phiếu kín.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b15",
            "number": 15,
            "title": "Bài 15: Quyền và nghĩa vụ cơ bản của công dân về khiếu nại, tố cáo",
            "chapter": "Chủ đề 8: Quyền dân chủ cơ bản của công dân",
            "summary": "Phân biệt khiếu nại và tố cáo.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b16",
            "number": 16,
            "title": "Bài 16: Quyền và nghĩa vụ cơ bản của công dân về bảo vệ Tổ quốc",
            "chapter": "Chủ đề 8: Quyền dân chủ cơ bản của công dân",
            "summary": "Nghĩa vụ quân sự và bảo vệ an ninh quốc gia.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b17",
            "number": 17,
            "title": "Bài 17: Quyền bất khả xâm phạm về thân thể và quyền được pháp luật bảo hộ về tính mạng, sức khỏe, danh dự, nhân phẩm",
            "chapter": "Chủ đề 9: Quyền tự do cơ bản của công dân",
            "summary": "Quy định bắt giữ người theo pháp luật.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b18",
            "number": 18,
            "title": "Bài 18: Quyền bất khả xâm phạm về chỗ ở của công dân",
            "chapter": "Chủ đề 9: Quyền tự do cơ bản của công dân",
            "summary": "Điều kiện khám xét chỗ ở hợp pháp.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b19",
            "number": 19,
            "title": "Bài 19: Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín",
            "chapter": "Chủ đề 9: Quyền tự do cơ bản của công dân",
            "summary": "Bảo vệ bí mật thông tin cá nhân.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b20",
            "number": 20,
            "title": "Bài 20: Quyền và nghĩa vụ của công dân về tự do ngôn luận, báo chí và tiếp cận thông tin",
            "chapter": "Chủ đề 9: Quyền tự do cơ bản của công dân",
            "summary": "Phát ngôn đúng pháp luật.",
            "questions": []
          },
          {
            "id": "gdktpl-11-b21",
            "number": 21,
            "title": "Bài 21: Quyền và nghĩa vụ của công dân về tự do tín ngưỡng và tôn giáo",
            "chapter": "Chủ đề 9: Quyền tự do cơ bản của công dân",
            "summary": "Bài trừ mê tín dị đoan.",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-11",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-11-b1",
            "number": 1,
            "title": "Bài 1: Hệ điều hành",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Vai trò, phân loại hệ điều hành PC và thiết bị di động.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b2",
            "number": 2,
            "title": "Bài 2: Thực hành sử dụng hệ điều hành",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Quản lí tệp, thư mục và tiện ích hệ thống.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b3",
            "number": 3,
            "title": "Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Phân biệt phần mềm thương mại, nguồn mở (GPL) và ứng dụng web.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b4",
            "number": 4,
            "title": "Bài 4: Bên trong máy tính",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "CPU, RAM, ROM, bộ nhớ ngoài và cổng logic (AND, OR, NOT).",
            "questions": []
          },
          {
            "id": "tinhoc-11-b5",
            "number": 5,
            "title": "Bài 5: Kết nối máy tính với các thiết bị số",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Cổng kết nối, thông số màn hình, máy in và Bluetooth.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b6",
            "number": 6,
            "title": "Bài 6: Lưu trữ và chia sẻ tệp tin trên Internet",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ và trao đổi thông tin",
            "summary": "Google Drive, OneDrive và phân quyền chia sẻ tài liệu.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b7",
            "number": 7,
            "title": "Bài 7: Thực hành tìm kiếm thông tin trên Internet",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ và trao đổi thông tin",
            "summary": "Toán tử tìm kiếm nâng cao và đánh giá độ tin cậy thông tin.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b8",
            "number": 8,
            "title": "Bài 8: Thực hành nâng cao sử dụng thư điện tử và mạng xã hội",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ và trao đổi thông tin",
            "summary": "Quản lí email, nhãn, lọc thư và bảo mật mạng xã hội.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b9",
            "number": 9,
            "title": "Bài 9: Giao tiếp an toàn trên Internet",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa số",
            "summary": "Phòng tránh bắt nạt mạng, bảo vệ danh tính số.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b10",
            "number": 10,
            "title": "Bài 10: Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí",
            "chapter": "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            "summary": "Bài toán quản lí và nhu cầu lưu trữ dữ liệu.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b11",
            "number": 11,
            "title": "Bài 11: Cơ sở dữ liệu",
            "chapter": "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            "summary": "Khái niệm CSDL, tính toàn vẹn, độc lập và bảo mật dữ liệu.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b12",
            "number": 12,
            "title": "Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu",
            "chapter": "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            "summary": "Chức năng định nghĩa, cập nhật và kiểm soát truy cập của HQTCSDL.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b13",
            "number": 13,
            "title": "Bài 13: Cơ sở dữ liệu quan hệ",
            "chapter": "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            "summary": "Bảng, bản ghi, trường, khóa chính, khóa ngoài và liên kết bảng.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b14",
            "number": 14,
            "title": "Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc",
            "chapter": "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            "summary": "DDL, DML, DCL; câu lệnh CREATE, SELECT, INSERT, UPDATE, DELETE.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b15",
            "number": 15,
            "title": "Bài 15: Bảo mật và an toàn hệ cơ sở dữ liệu",
            "chapter": "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            "summary": "Sao lưu định kì, phân quyền người dùng và mã hóa.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b16",
            "number": 16,
            "title": "Bài 16: Công nghệ thông tin trong đời sống và định hướng nghề nghiệp",
            "chapter": "Chủ đề 5: Hướng nghiệp với Tin học",
            "summary": "Nghề quản trị CSDL và phân tích dữ liệu.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b17",
            "number": 17,
            "title": "Bài 17: Phần mềm chỉnh sửa ảnh",
            "chapter": "Chủ đề 6: Thực hành ứng dụng tin học (ICT)",
            "summary": "Làm việc với ảnh số và lớp (layer) trong GIMP.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b18",
            "number": 18,
            "title": "Bài 18: Thực hành chỉnh sửa ảnh",
            "chapter": "Chủ đề 6: Thực hành ứng dụng tin học (ICT)",
            "summary": "Cắt ghép, chỉnh sáng, xóa khuyết điểm ảnh.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b19",
            "number": 19,
            "title": "Bài 19: Phần mềm làm phim",
            "chapter": "Chủ đề 6: Thực hành ứng dụng tin học (ICT)",
            "summary": "Biên tập video, chèn âm thanh, phụ đề và hiệu ứng chuyển cảnh.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b20",
            "number": 20,
            "title": "Bài 20: Thực hành làm phim",
            "chapter": "Chủ đề 6: Thực hành ứng dụng tin học (ICT)",
            "summary": "Xuất bản video hoàn chỉnh.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b21",
            "number": 21,
            "title": "Bài 21: Thực hành thiết kế chương trình quản lí",
            "chapter": "Chủ đề 6: Thực hành ứng dụng tin học (ICT)",
            "summary": "Tạo CSDL quản lí thư viện/âm nhạc trên MySQL/HeidiSQL.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b22",
            "number": 22,
            "title": "Bài 22: Thực hành sử dụng ngôn ngữ truy vấn dữ liệu",
            "chapter": "Chủ đề 6: Thực hành ứng dụng tin học (ICT)",
            "summary": "Truy vấn JOIN, WHERE, ORDER BY trên CSDL quan hệ.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-11",
        "name": "Công nghệ (Công nghệ cơ khí)",
        "icon": "⚙️",
        "lessons": [
          {
            "id": "congnghe-11-b1",
            "number": 1,
            "title": "Bài 1: Khái quát về cơ khí chế tạo",
            "chapter": "Chương I: Giới thiệu chung về cơ khí chế tạo",
            "summary": "Vai trò, đặc điểm và quy trình cơ khí chế tạo.",
            "questions": []
          },
          {
            "id": "congnghe-11-b2",
            "number": 2,
            "title": "Bài 2: Ngành nghề trong lĩnh vực cơ khí chế tạo",
            "chapter": "Chương I: Giới thiệu chung về cơ khí chế tạo",
            "summary": "Kĩ sư thiết kế, gia công, lắp ráp, bảo dưỡng cơ khí.",
            "questions": []
          },
          {
            "id": "congnghe-11-b3",
            "number": 3,
            "title": "Bài 3: Tổng quan về vật liệu cơ khí",
            "chapter": "Chương II: Vật liệu cơ khí",
            "summary": "Tính chất cơ học, vật lí, hóa học và công nghệ của vật liệu.",
            "questions": []
          },
          {
            "id": "congnghe-11-b4",
            "number": 4,
            "title": "Bài 4: Vật liệu kim loại và hợp kim",
            "chapter": "Chương II: Vật liệu cơ khí",
            "summary": "Gang, thép, hợp kim nhôm, hợp kim đồng.",
            "questions": []
          },
          {
            "id": "congnghe-11-b5",
            "number": 5,
            "title": "Bài 5: Vật liệu phi kim loại",
            "chapter": "Chương II: Vật liệu cơ khí",
            "summary": "Chất dẻo nhiệt, chất dẻo nhiệt rắn và cao su.",
            "questions": []
          },
          {
            "id": "congnghe-11-b6",
            "number": 6,
            "title": "Bài 6: Vật liệu mới",
            "chapter": "Chương II: Vật liệu cơ khí",
            "summary": "Vật liệu nano, composite, hợp kim nhớ hình.",
            "questions": []
          },
          {
            "id": "congnghe-11-b7",
            "number": 7,
            "title": "Bài 7: Khái quát về gia công cơ khí",
            "chapter": "Chương III: Các phương pháp gia công cơ khí",
            "summary": "Gia công không phoi và gia công có phoi.",
            "questions": []
          },
          {
            "id": "congnghe-11-b8",
            "number": 8,
            "title": "Bài 8: Một số phương pháp gia công cơ khí",
            "chapter": "Chương III: Các phương pháp gia công cơ khí",
            "summary": "Đúc, hàn, rèn, tiện, phay, khoan.",
            "questions": []
          },
          {
            "id": "congnghe-11-b9",
            "number": 9,
            "title": "Bài 9: Quy trình công nghệ gia công chi tiết",
            "chapter": "Chương III: Các phương pháp gia công cơ khí",
            "summary": "Lập quy trình gia công chi tiết trụ, trục.",
            "questions": []
          },
          {
            "id": "congnghe-11-b10",
            "number": 10,
            "title": "Bài 10: Dự án: Chế tạo sản phẩm bằng phương pháp gia công cắt gọt",
            "chapter": "Chương III: Các phương pháp gia công cơ khí",
            "summary": "Thực hành gia công chi tiết cơ khí đơn giản.",
            "questions": []
          },
          {
            "id": "congnghe-11-b11",
            "number": 11,
            "title": "Bài 11: Quá trình sản xuất cơ khí",
            "chapter": "Chương IV: Sản xuất cơ khí",
            "summary": "Các giai đoạn từ chế tạo phôi đến lắp ráp, kiểm tra.",
            "questions": []
          },
          {
            "id": "congnghe-11-b12",
            "number": 12,
            "title": "Bài 12: Dây chuyền sản xuất tự động với sự tham gia của robot",
            "chapter": "Chương IV: Sản xuất cơ khí",
            "summary": "Máy CNC và robot công nghiệp trong sản xuất.",
            "questions": []
          },
          {
            "id": "congnghe-11-b13",
            "number": 13,
            "title": "Bài 13: Tự động hóa quá trình sản xuất dưới tác động của CMCN 4.0",
            "chapter": "Chương IV: Sản xuất cơ khí",
            "summary": "Nhà máy thông minh, IoT và AI trong cơ khí.",
            "questions": []
          },
          {
            "id": "congnghe-11-b14",
            "number": 14,
            "title": "Bài 14: An toàn lao động và bảo vệ môi trường trong sản xuất cơ khí",
            "chapter": "Chương IV: Sản xuất cơ khí",
            "summary": "Trang bị bảo hộ và xử lí chất thải cơ khí.",
            "questions": []
          },
          {
            "id": "congnghe-11-b15",
            "number": 15,
            "title": "Bài 15: Khái quát về cơ khí động lực",
            "chapter": "Chương V: Giới thiệu chung về cơ khí động lực",
            "summary": "Hệ thống máy động lực và máy công tác.",
            "questions": []
          },
          {
            "id": "congnghe-11-b16",
            "number": 16,
            "title": "Bài 16: Ngành nghề trong lĩnh vực cơ khí động lực",
            "chapter": "Chương V: Giới thiệu chung về cơ khí động lực",
            "summary": "Kĩ sư ô tô, tàu thủy, máy bay.",
            "questions": []
          },
          {
            "id": "congnghe-11-b17",
            "number": 17,
            "title": "Bài 17: Đại cương về động cơ đốt trong",
            "chapter": "Chương VI: Động cơ đốt trong",
            "summary": "Phân loại và các bộ phận chính của động cơ đốt trong.",
            "questions": []
          },
          {
            "id": "congnghe-11-b18",
            "number": 18,
            "title": "Bài 18: Nguyên lí làm việc của động cơ đốt trong",
            "chapter": "Chương VI: Động cơ đốt trong",
            "summary": "Chu trình 4 kì (nạp, nén, cháy-dãn nở, thải) và 2 kì.",
            "questions": []
          },
          {
            "id": "congnghe-11-b19",
            "number": 19,
            "title": "Bài 19: Các cơ cấu trong động cơ đốt trong",
            "chapter": "Chương VI: Động cơ đốt trong",
            "summary": "Cơ cấu trục khuỷu thanh truyền và cơ cấu phân phối khí.",
            "questions": []
          },
          {
            "id": "congnghe-11-b20",
            "number": 20,
            "title": "Bài 20: Các hệ thống trong động cơ đốt trong",
            "chapter": "Chương VI: Động cơ đốt trong",
            "summary": "Hệ thống bôi trơn, làm mát, nhiên liệu, đánh lửa và khởi động.",
            "questions": []
          },
          {
            "id": "congnghe-11-b21",
            "number": 21,
            "title": "Bài 21: Khái quát chung về ô tô",
            "chapter": "Chương VII: Ô tô",
            "summary": "Cấu tạo chung các cụm hệ thống trên ô tô.",
            "questions": []
          },
          {
            "id": "congnghe-11-b22",
            "number": 22,
            "title": "Bài 22: Hệ thống truyền lực",
            "chapter": "Chương VII: Ô tô",
            "summary": "Li hợp, hộp số, truyền lực các-đăng và vi sai.",
            "questions": []
          },
          {
            "id": "congnghe-11-b23",
            "number": 23,
            "title": "Bài 23: Bánh xe và hệ thống treo ô tô",
            "chapter": "Chương VII: Ô tô",
            "summary": "Giảm chấn, lò xo, thanh ổn định và lốp xe.",
            "questions": []
          },
          {
            "id": "congnghe-11-b24",
            "number": 24,
            "title": "Bài 24: Hệ thống lái",
            "chapter": "Chương VII: Ô tô",
            "summary": "Vô lăng, trục lái, cơ cấu lái và dẫn động lái.",
            "questions": []
          },
          {
            "id": "congnghe-11-b25",
            "number": 25,
            "title": "Bài 25: Hệ thống phanh. An toàn khi tham gia giao thông",
            "chapter": "Chương VII: Ô tô",
            "summary": "Phanh đĩa, phanh tang trống và hệ thống ABS.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-11",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-11-b1",
            "number": 1,
            "title": "Unit 1: A Long and Healthy Life",
            "chapter": "Unit 1: A Long and Healthy Life",
            "summary": "Past Simple vs. Present Perfect.",
            "questions": []
          },
          {
            "id": "tienganh-11-b2",
            "number": 2,
            "title": "Unit 2: The Generation Gap",
            "chapter": "Unit 2: The Generation Gap",
            "summary": "Modal verbs: must, have to, should.",
            "questions": []
          },
          {
            "id": "tienganh-11-b3",
            "number": 3,
            "title": "Unit 3: Cities of the Future",
            "chapter": "Unit 3: Cities of the Future",
            "summary": "Stative verbs and linking verbs.",
            "questions": []
          },
          {
            "id": "tienganh-11-b4",
            "number": 4,
            "title": "Unit 4: ASEAN and Viet Nam",
            "chapter": "Unit 4: ASEAN and Viet Nam",
            "summary": "Gerunds as subjects and objects.",
            "questions": []
          },
          {
            "id": "tienganh-11-b5",
            "number": 5,
            "title": "Unit 5: Global Warming",
            "chapter": "Unit 5: Global Warming",
            "summary": "Present and past participle clauses.",
            "questions": []
          },
          {
            "id": "tienganh-11-b6",
            "number": 6,
            "title": "Unit 6: Preserving Our Heritage",
            "chapter": "Unit 6: Preserving Our Heritage",
            "summary": "To-infinitive clauses.",
            "questions": []
          },
          {
            "id": "tienganh-11-b7",
            "number": 7,
            "title": "Unit 7: Education Options for School-leavers",
            "chapter": "Unit 7: Education Options for School-leavers",
            "summary": "Perfect gerunds and perfect participle clauses.",
            "questions": []
          },
          {
            "id": "tienganh-11-b8",
            "number": 8,
            "title": "Unit 8: Becoming Independent",
            "chapter": "Unit 8: Becoming Independent",
            "summary": "Cleft sentences.",
            "questions": []
          },
          {
            "id": "tienganh-11-b9",
            "number": 9,
            "title": "Unit 9: Social Issues",
            "chapter": "Unit 9: Social Issues",
            "summary": "Linking words and phrases.",
            "questions": []
          },
          {
            "id": "tienganh-11-b10",
            "number": 10,
            "title": "Unit 10: The Ecosystem",
            "chapter": "Unit 10: The Ecosystem",
            "summary": "Compound nouns.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-channuoi-11",
        "name": "Công nghệ (Công nghệ chăn nuôi)",
        "icon": "🐄",
        "lessons": [
          {
            "id": "congnghe-channuoi-11-b1",
            "number": 1,
            "title": "Bài 1: Vai trò và triển vọng của chăn nuôi",
            "chapter": "Chương I: Giới thiệu chung về chăn nuôi",
            "summary": "Cung cấp thực phẩm, sức kéo và xu hướng chăn nuôi công nghệ cao.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b2",
            "number": 2,
            "title": "Bài 2: Vật nuôi và phương thức chăn nuôi",
            "chapter": "Chương I: Giới thiệu chung về chăn nuôi",
            "summary": "Chăn nuôi nông hộ, trang trại, công nghiệp và hữu cơ.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b3",
            "number": 3,
            "title": "Bài 3: Khái niệm, vai trò của giống trong chăn nuôi",
            "chapter": "Chương II: Công nghệ giống vật nuôi",
            "summary": "Đặc điểm của giống vật nuôi.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b4",
            "number": 4,
            "title": "Bài 4: Chọn giống vật nuôi",
            "chapter": "Chương II: Công nghệ giống vật nuôi",
            "summary": "Chọn lọc hàng loạt, chọn lọc cá thể và đánh giá năng suất.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b5",
            "number": 5,
            "title": "Bài 5: Nhân giống vật nuôi",
            "chapter": "Chương II: Công nghệ giống vật nuôi",
            "summary": "Nhân giống thuần chủng và lai tạo giống.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b6",
            "number": 6,
            "title": "Bài 6: Ứng dụng công nghệ sinh học trong chọn và nhân giống",
            "chapter": "Chương II: Công nghệ giống vật nuôi",
            "summary": "Thụ tinh nhân tạo, cấy truyền phôi và xác định giới tính.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b7",
            "number": 7,
            "title": "Bài 7: Thức ăn và nhu cầu dinh dưỡng của vật nuôi",
            "chapter": "Chương III: Công nghệ thức ăn chăn nuôi",
            "summary": "Nhu cầu duy trì, sinh trưởng, sinh sản và cho sữa/trứng.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b8",
            "number": 8,
            "title": "Bài 8: Sản xuất và chế biến thức ăn chăn nuôi",
            "chapter": "Chương III: Công nghệ thức ăn chăn nuôi",
            "summary": "Thức ăn hỗn hợp, ủ chua và lên men vi sinh.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b9",
            "number": 9,
            "title": "Bài 9: Bảo quản thức ăn chăn nuôi",
            "chapter": "Chương III: Công nghệ thức ăn chăn nuôi",
            "summary": "Bảo quản khô, bảo quản lạnh và chống nấm mốc.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b10",
            "number": 10,
            "title": "Bài 10: Thực hành: Chế biến, bảo quản thức ăn cho vật nuôi",
            "chapter": "Chương III: Công nghệ thức ăn chăn nuôi",
            "summary": "Thực hành ủ chua thức ăn xanh hoặc phối trộn khẩu phần.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b11",
            "number": 11,
            "title": "Bài 11: Vai trò của phòng, trị bệnh trong chăn nuôi",
            "chapter": "Chương IV: Phòng, trị bệnh cho vật nuôi",
            "summary": "Nguyên tắc phòng bệnh hơn chữa bệnh và an toàn sinh học.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b12",
            "number": 12,
            "title": "Bài 12: Một số bệnh phổ biến ở lợn và biện pháp phòng, trị",
            "chapter": "Chương IV: Phòng, trị bệnh cho vật nuôi",
            "summary": "Dịch tả lợn, tai xanh, lở mồm long móng.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b13",
            "number": 13,
            "title": "Bài 13: Một số bệnh phổ biến ở gia cầm và biện pháp phòng, trị",
            "chapter": "Chương IV: Phòng, trị bệnh cho vật nuôi",
            "summary": "Cúm gia cầm, Newcastle, tụ huyết trùng.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b14",
            "number": 14,
            "title": "Bài 14: Một số bệnh phổ biến ở trâu, bò và biện pháp phòng, trị",
            "chapter": "Chương IV: Phòng, trị bệnh cho vật nuôi",
            "summary": "Tụ huyết trùng, lở mồm long móng, ký sinh trùng.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b15",
            "number": 15,
            "title": "Bài 15: Ứng dụng công nghệ sinh học trong phòng, trị bệnh",
            "chapter": "Chương IV: Phòng, trị bệnh cho vật nuôi",
            "summary": "Vaccine thế hệ mới, chẩn đoán PCR và kháng sinh sinh học.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b16",
            "number": 16,
            "title": "Bài 16: Chuồng nuôi và biện pháp vệ sinh trong chăn nuôi",
            "chapter": "Chương V: Công nghệ chăn nuôi",
            "summary": "Thiết kế chuồng kín, chuồng hở và kiểm soát tiểu khí hậu.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b17",
            "number": 17,
            "title": "Bài 17: Nuôi dưỡng và chăm sóc vật nuôi",
            "chapter": "Chương V: Công nghệ chăn nuôi",
            "summary": "Chăm sóc vật nuôi non, đực giống, cái sinh sản và vỗ béo.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b18",
            "number": 18,
            "title": "Bài 18: Chăn nuôi theo tiêu chuẩn VietGAP",
            "chapter": "Chương V: Công nghệ chăn nuôi",
            "summary": "Quy trình an toàn thực phẩm, truy xuất nguồn gốc.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b19",
            "number": 19,
            "title": "Bài 19: Chăn nuôi công nghệ cao",
            "chapter": "Chương V: Công nghệ chăn nuôi",
            "summary": "Cảm biến theo dõi sức khỏe, cho ăn tự động, robot vắt sữa.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b20",
            "number": 20,
            "title": "Bài 20: Bảo quản và chế biến sản phẩm chăn nuôi",
            "chapter": "Chương V: Công nghệ chăn nuôi",
            "summary": "Bảo quản thịt, trứng, sữa và chế biến thực phẩm.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b21",
            "number": 21,
            "title": "Bài 21: Sự cần thiết phải bảo vệ môi trường trong chăn nuôi",
            "chapter": "Chương VI: Bảo vệ môi trường trong chăn nuôi",
            "summary": "Kiểm soát chất thải rắn, lỏng và khí gây ô nhiễm.",
            "questions": []
          },
          {
            "id": "congnghe-channuoi-11-b22",
            "number": 22,
            "title": "Bài 22: Xử lí chất thải chăn nuôi",
            "chapter": "Chương VI: Bảo vệ môi trường trong chăn nuôi",
            "summary": "Hầm khí sinh học (biogas), đệm lót sinh học và ủ phân compost.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdqp-11",
        "name": "Giáo dục quốc phòng và an ninh",
        "icon": "🛡️",
        "lessons": [
          {
            "id": "gdqp-11-b1",
            "number": 1,
            "title": "Bài 1: Bảo vệ chủ quyền lãnh thổ, biên giới quốc gia Việt Nam",
            "chapter": "Phần kiến thức chung",
            "summary": "Chủ quyền lãnh thổ, biên giới đất liền, biển đảo và trách nhiệm bảo vệ Tổ quốc.",
            "questions": []
          },
          {
            "id": "gdqp-11-b2",
            "number": 2,
            "title": "Bài 2: Luật Nghĩa vụ quân sự và trách nhiệm của học sinh",
            "chapter": "Phần kiến thức chung",
            "summary": "Quy định về độ tuổi, đăng kí nghĩa vụ quân sự và tạm hoãn gọi nhập ngũ.",
            "questions": []
          },
          {
            "id": "gdqp-11-b3",
            "number": 3,
            "title": "Bài 3: Phòng, chống tệ nạn xã hội ở Việt Nam trong thời kì hội nhập",
            "chapter": "Phần kiến thức chung",
            "summary": "Nhận diện và phòng chống cờ bạc, mại dâm, tệ nạn xã hội.",
            "questions": []
          },
          {
            "id": "gdqp-11-b4",
            "number": 4,
            "title": "Bài 4: Phòng, chống vi phạm pháp luật về tội phạm sử dụng công nghệ cao",
            "chapter": "Phần kiến thức chung",
            "summary": "Nhận diện tội phạm mạng, lừa đảo trực tuyến và cách phòng tránh.",
            "questions": []
          },
          {
            "id": "gdqp-11-b5",
            "number": 5,
            "title": "Bài 5: Kiến thức phổ thông về phòng thủ dân sự",
            "chapter": "Phần kiến thức chung",
            "summary": "Biện pháp phòng tránh, khắc phục hậu quả thiên tai, thảm họa, dịch bệnh.",
            "questions": []
          },
          {
            "id": "gdqp-11-b6",
            "number": 6,
            "title": "Bài 6: Giới thiệu một số loại vũ khí phổ biến",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Tính năng, cấu tạo cơ bản của súng tiểu liên AK và lựu đạn.",
            "questions": []
          },
          {
            "id": "gdqp-11-b7",
            "number": 7,
            "title": "Bài 7: Pháp luật về quản lí vũ khí, vật liệu nổ, công cụ hỗ trợ",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Quy định nghiêm cấm tàng trữ, sử dụng trái phép vũ khí và vật liệu nổ.",
            "questions": []
          },
          {
            "id": "gdqp-11-b8",
            "number": 8,
            "title": "Bài 8: Đội ngũ từng người có súng",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Động tác mang súng, treo súng, khám súng, đứng nghiêm nghỉ có súng.",
            "questions": []
          },
          {
            "id": "gdqp-11-b9",
            "number": 9,
            "title": "Bài 9: Các tư thế, động tác cơ bản vận động trong chiến đấu có súng",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Giữ súng khi đi khom, chạy khom, bò, lê, trườn.",
            "questions": []
          },
          {
            "id": "gdqp-11-b10",
            "number": 10,
            "title": "Bài 10: Kĩ thuật bắn súng tiểu liên AK",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Ngắm bắn, đường ngắm cơ bản, đường ngắm đúng và yếu lĩnh bắn súng AK.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-11",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-11-b1",
            "number": 1,
            "title": "Lập kế hoạch và đánh giá sự phát triển thể chất",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Theo dõi nhịp tim, chỉ số BMI và xây dựng lịch tập cá nhân.",
            "questions": []
          },
          {
            "id": "gdtc-11-b2",
            "number": 2,
            "title": "Bóng đá 11: Kĩ thuật nâng cao và chiến thuật đội hình",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Đánh đầu, tranh cướp bóng và phối hợp tấn công nhóm.",
            "questions": []
          },
          {
            "id": "gdtc-11-b3",
            "number": 3,
            "title": "Bóng chuyền 11: Đập bóng, chắn bóng và chiến thuật thi đấu",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Kĩ thuật đập bóng chính diện, chắn bóng đơn và phối hợp 3 chạm.",
            "questions": []
          },
          {
            "id": "gdtc-11-b4",
            "number": 4,
            "title": "Bóng rổ 11: Chiến thuật tấn công và phòng thủ khu vực",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Ném rổ nhảy, chắn người (screen) và phòng thủ liên phòng.",
            "questions": []
          },
          {
            "id": "gdtc-11-b5",
            "number": 5,
            "title": "Cầu lông 11: Kĩ thuật bỏ nhỏ, đập cầu và đánh đôi",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Di chuyển đa hướng, đập cầu uy lực và phối hợp đánh đôi.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-11",
        "name": "Hoạt động trải nghiệm, hướng nghiệp",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-11-b1",
            "number": 1,
            "title": "Chủ đề 1: Phát triển quan hệ hợp tác trong nhà trường",
            "chapter": "Chủ đề 1: Xây dựng và phát triển nhà trường",
            "summary": "Tổ chức hoạt động câu lạc bộ và phát triển cộng đồng học đường.",
            "questions": []
          },
          {
            "id": "hdtn-11-b2",
            "number": 2,
            "title": "Chủ đề 2–3: Tự tin, thích ứng và quản lí tài chính cá nhân",
            "chapter": "Chủ đề 2–3: Khám phá và rèn luyện bản thân",
            "summary": "Phát triển tư duy độc lập, quản lí cảm xúc và kế hoạch chi tiêu.",
            "questions": []
          },
          {
            "id": "hdtn-11-b3",
            "number": 3,
            "title": "Chủ đề 4–5: Trách nhiệm với gia đình và phát triển cộng đồng",
            "chapter": "Chủ đề 4–5: Gia đình và cộng đồng",
            "summary": "Giải quyết mâu thuẫn gia đình và tham gia dự án cộng đồng.",
            "questions": []
          },
          {
            "id": "hdtn-11-b4",
            "number": 4,
            "title": "Chủ đề 6–7: Bảo tồn cảnh quan và bảo vệ môi trường",
            "chapter": "Chủ đề 6–7: Thiên nhiên và môi trường",
            "summary": "Nghiên cứu tác động phát triển kinh tế đến môi trường địa phương.",
            "questions": []
          },
          {
            "id": "hdtn-11-b5",
            "number": 5,
            "title": "Chủ đề 8: Các nhóm nghề cơ bản và yêu cầu thị trường lao động",
            "chapter": "Chủ đề 8: Thị trường lao động",
            "summary": "Phân tích xu hướng tuyển dụng, kỹ năng mềm và chuyển đổi số.",
            "questions": []
          },
          {
            "id": "hdtn-11-b6",
            "number": 6,
            "title": "Chủ đề 9: Rèn luyện phẩm chất, năng lực phù hợp nhóm nghề",
            "chapter": "Chủ đề 9: Rèn luyện phẩm chất nghề nghiệp",
            "summary": "Trải nghiệm thực tế nghề nghiệp và đánh giá sự phù hợp.",
            "questions": []
          },
          {
            "id": "hdtn-11-b7",
            "number": 7,
            "title": "Chủ đề 10: Xây dựng kế hoạch học tập theo định hướng nghề lựa chọn",
            "chapter": "Chủ đề 10: Kế hoạch học tập hướng nghiệp",
            "summary": "Xác định khối thi, ngành học và lộ trình chuẩn bị lớp 12.",
            "questions": []
          }
        ]
      }
    ]
  },
  {
    "grade": 12,
    "label": "Lớp 12",
    "level": "THPT",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=12",
    "subjects": [
      {
        "id": "toan-12",
        "name": "Toán",
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-12-b1",
            "number": 1,
            "title": "Bài 1: Tính đơn điệu và cực trị của hàm số",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Xét dấu f'(x) tìm khoảng đồng biến, nghịch biến và điểm cực đại, cực tiểu.",
            "questions": []
          },
          {
            "id": "toan-12-b2",
            "number": 2,
            "title": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Tìm GTLN, GTNN trên đoạn [a; b] và khoảng.",
            "questions": []
          },
          {
            "id": "toan-12-b3",
            "number": 3,
            "title": "Bài 3: Đường tiệm cận của đồ thị hàm số",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Tiệm cận đứng, tiệm cận ngang và tiệm cận xiên.",
            "questions": []
          },
          {
            "id": "toan-12-b4",
            "number": 4,
            "title": "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Hàm bậc ba, phân thức bậc nhất/bậc nhất, bậc hai/bậc nhất.",
            "questions": []
          },
          {
            "id": "toan-12-b5",
            "number": 5,
            "title": "Bài 5: Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Bài toán tối ưu trong kinh tế, hình học, vật lí.",
            "questions": []
          },
          {
            "id": "toan-12-b6",
            "number": 6,
            "title": "Bài 6: Vectơ trong không gian",
            "chapter": "Chương II: Vectơ và hệ trục tọa độ trong không gian",
            "summary": "Quy tắc hình hộp, tổng hiệu tích vectơ với một số.",
            "questions": []
          },
          {
            "id": "toan-12-b7",
            "number": 7,
            "title": "Bài 7: Hệ trục tọa độ trong không gian",
            "chapter": "Chương II: Vectơ và hệ trục tọa độ trong không gian",
            "summary": "Tọa độ điểm và tọa độ vectơ trong Oxyz.",
            "questions": []
          },
          {
            "id": "toan-12-b8",
            "number": 8,
            "title": "Bài 8: Biểu thức tọa độ của các phép toán vectơ",
            "chapter": "Chương II: Vectơ và hệ trục tọa độ trong không gian",
            "summary": "Tích vô hướng, góc và độ dài trong Oxyz.",
            "questions": []
          },
          {
            "id": "toan-12-b9",
            "number": 9,
            "title": "Bài 9: Khoảng biến thiên và khoảng tứ phân vị",
            "chapter": "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
            "summary": "R và ΔQ của mẫu số liệu ghép nhóm.",
            "questions": []
          },
          {
            "id": "toan-12-b10",
            "number": 10,
            "title": "Bài 10: Phương sai và độ lệch chuẩn",
            "chapter": "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
            "summary": "s² và s của mẫu số liệu ghép nhóm.",
            "questions": []
          },
          {
            "id": "toan-12-b11",
            "number": 11,
            "title": "Bài 11: Nguyên hàm",
            "chapter": "Chương IV: Nguyên hàm và tích phân",
            "summary": "Bảng nguyên hàm cơ bản và tính chất tuyến tính.",
            "questions": []
          },
          {
            "id": "toan-12-b12",
            "number": 12,
            "title": "Bài 12: Tích phân",
            "chapter": "Chương IV: Nguyên hàm và tích phân",
            "summary": "Công thức Newton - Leibniz ∫[a->b] f(x)dx = F(b) - F(a).",
            "questions": []
          },
          {
            "id": "toan-12-b13",
            "number": 13,
            "title": "Bài 13: Ứng dụng hình học của tích phân",
            "chapter": "Chương IV: Nguyên hàm và tích phân",
            "summary": "Diện tích hình phẳng và thể tích khối tròn xoay.",
            "questions": []
          },
          {
            "id": "toan-12-b14",
            "number": 14,
            "title": "Bài 14: Phương trình mặt phẳng",
            "chapter": "Chương V: Phương pháp tọa độ trong không gian",
            "summary": "Vectơ pháp tuyến, Ax + By + Cz + D = 0, khoảng cách.",
            "questions": []
          },
          {
            "id": "toan-12-b15",
            "number": 15,
            "title": "Bài 15: Phương trình đường thẳng trong không gian",
            "chapter": "Chương V: Phương pháp tọa độ trong không gian",
            "summary": "Phương trình tham số, chính tắc và vị trí tương đối.",
            "questions": []
          },
          {
            "id": "toan-12-b16",
            "number": 16,
            "title": "Bài 16: Công thức tính góc trong không gian",
            "chapter": "Chương V: Phương pháp tọa độ trong không gian",
            "summary": "Góc giữa hai đường thẳng, đường với mặt, hai mặt phẳng.",
            "questions": []
          },
          {
            "id": "toan-12-b17",
            "number": 17,
            "title": "Bài 17: Phương trình mặt cầu",
            "chapter": "Chương V: Phương pháp tọa độ trong không gian",
            "summary": "(x-a)² + (y-b)² + (z-c)² = R².",
            "questions": []
          },
          {
            "id": "toan-12-b18",
            "number": 18,
            "title": "Bài 18: Xác suất có điều kiện",
            "chapter": "Chương VI: Xác suất có điều kiện",
            "summary": "P(A|B) = P(A ∩ B)/P(B).",
            "questions": []
          },
          {
            "id": "toan-12-b19",
            "number": 19,
            "title": "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
            "chapter": "Chương VI: Xác suất có điều kiện",
            "summary": "Ứng dụng công thức xác suất toàn phần và Bayes.",
            "questions": []
          }
        ]
      },
      {
        "id": "vatli-12",
        "name": "Vật lí",
        "icon": "⚡",
        "lessons": [
          {
            "id": "vatli-12-b1",
            "number": 1,
            "title": "Bài 1: Cấu trúc của chất. Sự chuyển thể",
            "chapter": "Chương 1: Vật lí nhiệt",
            "summary": "Mô hình động học phân tử và sự nóng chảy, đông đặc, bay hơi, ngưng tụ.",
            "questions": []
          },
          {
            "id": "vatli-12-b2",
            "number": 2,
            "title": "Bài 2: Nội năng. Định luật I của nhiệt động lực học",
            "chapter": "Chương 1: Vật lí nhiệt",
            "summary": "ΔU = A + Q; quy ước dấu công và nhiệt lượng.",
            "questions": []
          },
          {
            "id": "vatli-12-b3",
            "number": 3,
            "title": "Bài 3: Nhiệt độ, thang nhiệt độ, nhiệt kế",
            "chapter": "Chương 1: Vật lí nhiệt",
            "summary": "Thang Celsius (t°C) và thang Kelvin (T(K) = t + 273).",
            "questions": []
          },
          {
            "id": "vatli-12-b4",
            "number": 4,
            "title": "Bài 4: Nhiệt dung riêng",
            "chapter": "Chương 1: Vật lí nhiệt",
            "summary": "Q = m.c.ΔT và thực hành đo nhiệt dung riêng của nước.",
            "questions": []
          },
          {
            "id": "vatli-12-b5",
            "number": 5,
            "title": "Bài 5: Nhiệt nóng chảy riêng",
            "chapter": "Chương 1: Vật lí nhiệt",
            "summary": "Q = λ.m và thực hành đo nhiệt nóng chảy riêng của nước đá.",
            "questions": []
          },
          {
            "id": "vatli-12-b6",
            "number": 6,
            "title": "Bài 6: Nhiệt hóa hơi riêng",
            "chapter": "Chương 1: Vật lí nhiệt",
            "summary": "Q = L.m và thực hành đo nhiệt hóa hơi riêng của nước.",
            "questions": []
          },
          {
            "id": "vatli-12-b7",
            "number": 7,
            "title": "Bài 7: Bài tập vật lí nhiệt",
            "chapter": "Chương 1: Vật lí nhiệt",
            "summary": "Giải bài tập cân bằng nhiệt và định luật I nhiệt động lực học.",
            "questions": []
          },
          {
            "id": "vatli-12-b8",
            "number": 8,
            "title": "Bài 8: Mô hình động học phân tử chất khí",
            "chapter": "Chương 2: Khí lí tưởng",
            "summary": "Chuyển động nhiệt hỗn loạn của phân tử khí và khí lí tưởng.",
            "questions": []
          },
          {
            "id": "vatli-12-b9",
            "number": 9,
            "title": "Bài 9: Định luật Boyle",
            "chapter": "Chương 2: Khí lí tưởng",
            "summary": "Quá trình đẳng nhiệt: p1.V1 = p2.V2.",
            "questions": []
          },
          {
            "id": "vatli-12-b10",
            "number": 10,
            "title": "Bài 10: Định luật Charles",
            "chapter": "Chương 2: Khí lí tưởng",
            "summary": "Quá trình đẳng áp: V1/T1 = V2/T2.",
            "questions": []
          },
          {
            "id": "vatli-12-b11",
            "number": 11,
            "title": "Bài 11: Phương trình trạng thái của khí lí tưởng",
            "chapter": "Chương 2: Khí lí tưởng",
            "summary": "pV/T = const; pV = nRT.",
            "questions": []
          },
          {
            "id": "vatli-12-b12",
            "number": 12,
            "title": "Bài 12: Áp suất khí theo mô hình động học phân tử",
            "chapter": "Chương 2: Khí lí tưởng",
            "summary": "p = 1/3 μmv² và động năng tịnh tiến trung bình tỉ lệ với T.",
            "questions": []
          },
          {
            "id": "vatli-12-b13",
            "number": 13,
            "title": "Bài 13: Bài tập về khí lí tưởng",
            "chapter": "Chương 2: Khí lí tưởng",
            "summary": "Đồ thị các đẳng quá trình và bài toán khí lí tưởng.",
            "questions": []
          },
          {
            "id": "vatli-12-b14",
            "number": 14,
            "title": "Bài 14: Từ trường",
            "chapter": "Chương 3: Từ trường",
            "summary": "Từ trường, đường sức từ và quy tắc nắm tay phải.",
            "questions": []
          },
          {
            "id": "vatli-12-b15",
            "number": 15,
            "title": "Bài 15: Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ",
            "chapter": "Chương 3: Từ trường",
            "summary": "F = B.I.L.sinα và quy tắc bàn tay trái.",
            "questions": []
          },
          {
            "id": "vatli-12-b16",
            "number": 16,
            "title": "Bài 16: Từ thông. Hiện tượng cảm ứng điện từ",
            "chapter": "Chương 3: Từ trường",
            "summary": "Φ = B.S.cosα; định luật Faraday và định luật Lenz.",
            "questions": []
          },
          {
            "id": "vatli-12-b17",
            "number": 17,
            "title": "Bài 17: Máy phát điện xoay chiều",
            "chapter": "Chương 3: Từ trường",
            "summary": "Cấu tạo, nguyên lí tạo suất điện động xoay chiều và giá trị hiệu dụng.",
            "questions": []
          },
          {
            "id": "vatli-12-b18",
            "number": 18,
            "title": "Bài 18: Ứng dụng hiện tượng cảm ứng điện từ",
            "chapter": "Chương 3: Từ trường",
            "summary": "Máy biến áp, đàn guitar điện, bếp từ và sạc không dây.",
            "questions": []
          },
          {
            "id": "vatli-12-b19",
            "number": 19,
            "title": "Bài 19: Điện từ trường. Mô hình sóng điện từ",
            "chapter": "Chương 3: Từ trường",
            "summary": "Liên hệ điện trường biến thiên và từ trường biến thiên.",
            "questions": []
          },
          {
            "id": "vatli-12-b20",
            "number": 20,
            "title": "Bài 20: Bài tập về từ trường",
            "chapter": "Chương 3: Từ trường",
            "summary": "Bài toán lực từ, cảm ứng điện từ và dòng điện xoay chiều.",
            "questions": []
          },
          {
            "id": "vatli-12-b21",
            "number": 21,
            "title": "Bài 21: Cấu trúc hạt nhân",
            "chapter": "Chương 4: Vật lí hạt nhân",
            "summary": "Proton, neutron, số khối A, số Z và đồng vị.",
            "questions": []
          },
          {
            "id": "vatli-12-b22",
            "number": 22,
            "title": "Bài 22: Phản ứng hạt nhân và năng lượng liên kết",
            "chapter": "Chương 4: Vật lí hạt nhân",
            "summary": "Độ hụt khối Δm, năng lượng liên kết riêng, phản ứng phân hạch và nhiệt hạch.",
            "questions": []
          },
          {
            "id": "vatli-12-b23",
            "number": 23,
            "title": "Bài 23: Hiện tượng phóng xạ",
            "chapter": "Chương 4: Vật lí hạt nhân",
            "summary": "Tia α, β, γ; định luật phóng xạ N = N0.2^(-t/T).",
            "questions": []
          },
          {
            "id": "vatli-12-b24",
            "number": 24,
            "title": "Bài 24: Công nghiệp hạt nhân",
            "chapter": "Chương 4: Vật lí hạt nhân",
            "summary": "Nhà máy điện hạt nhân, y học hạt nhân và an toàn phóng xạ.",
            "questions": []
          },
          {
            "id": "vatli-12-b25",
            "number": 25,
            "title": "Bài 25: Bài tập về vật lí hạt nhân",
            "chapter": "Chương 4: Vật lí hạt nhân",
            "summary": "Tính năng lượng phản ứng hạt nhân và tuổi cổ vật phóng xạ.",
            "questions": []
          }
        ]
      },
      {
        "id": "hoahoc-12",
        "name": "Hóa học",
        "icon": "🧪",
        "lessons": [
          {
            "id": "hoahoc-12-b1",
            "number": 1,
            "title": "Bài 1: Ester – Lipid",
            "chapter": "Chương 1: Ester – Lipid",
            "summary": "Danh pháp, tính chất vật lí, thủy phân ester trong acid/kiềm và chất béo.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b2",
            "number": 2,
            "title": "Bài 2: Xà phòng và chất giặt rửa",
            "chapter": "Chương 1: Ester – Lipid",
            "summary": "Cơ chế giặt rửa và phân biệt xà phòng với chất giặt rửa tổng hợp.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b3",
            "number": 3,
            "title": "Bài 3: Ôn tập chương 1",
            "chapter": "Chương 1: Ester – Lipid",
            "summary": "Bài tập phản ứng xà phòng hóa ester và chất béo.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b4",
            "number": 4,
            "title": "Bài 4: Giới thiệu về carbohydrate. Glucose và fructose",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Cấu tạo dạng mạch hở/vòng, tính chất polyalcohol và phản ứng tráng bạc.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b5",
            "number": 5,
            "title": "Bài 5: Saccharose và maltose",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Cấu tạo disaccharide và phản ứng thủy phân.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b6",
            "number": 6,
            "title": "Bài 6: Tinh bột và cellulose",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Phân biệt tinh bột (amylose, amylopectin) với cellulose và phản ứng màu iodine.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b7",
            "number": 7,
            "title": "Bài 7: Ôn tập chương 2",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Bài tập thủy phân và lên men carbohydrate.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b8",
            "number": 8,
            "title": "Bài 8: Amine",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Bậc amine, tính base và phản ứng của aniline với nước bromine.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b9",
            "number": 9,
            "title": "Bài 9: Amino acid và peptide",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Tính lưỡng tính, điện di amino acid và phản ứng màu biuret của peptide.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b10",
            "number": 10,
            "title": "Bài 10: Protein và enzyme",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Cấu trúc bậc 1-4 của protein, sự đông tụ và vai trò enzyme.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b11",
            "number": 11,
            "title": "Bài 11: Ôn tập chương 3",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Tổng hợp amine - amino acid - peptide - protein.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b12",
            "number": 12,
            "title": "Bài 12: Đại cương về polymer",
            "chapter": "Chương 4: Polymer",
            "summary": "Monomer, mắt xích, trùng hợp và trùng ngưng.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b13",
            "number": 13,
            "title": "Bài 13: Vật liệu polymer",
            "chapter": "Chương 4: Polymer",
            "summary": "Chất dẻo, tơ, cao su và keo dán tổng hợp.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b14",
            "number": 14,
            "title": "Bài 14: Ôn tập chương 4",
            "chapter": "Chương 4: Polymer",
            "summary": "Phân loại và ứng dụng vật liệu polymer.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b15",
            "number": 15,
            "title": "Bài 15: Thế điện cực và nguồn điện hóa học",
            "chapter": "Chương 5: Pin điện và điện phân",
            "summary": "Cặp oxi hóa-khử, thế điện cực chuẩn, sức điện động pin Galvani và pin nhiên liệu.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b16",
            "number": 16,
            "title": "Bài 16: Điện phân",
            "chapter": "Chương 5: Pin điện và điện phân",
            "summary": "Thứ tự điện phân nóng chảy và dung dịch, ứng dụng tinh chế kim loại và mạ điện.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b17",
            "number": 17,
            "title": "Bài 17: Ôn tập chương 5",
            "chapter": "Chương 5: Pin điện và điện phân",
            "summary": "Tính sức điện động pin và định luật Faraday điện phân.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b18",
            "number": 18,
            "title": "Bài 18: Cấu tạo và liên kết trong tinh thể kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Liên kết kim loại và tính chất vật lí chung (dẫn điện, dẫn nhiệt, dẻo, ánh kim).",
            "questions": []
          },
          {
            "id": "hoahoc-12-b19",
            "number": 19,
            "title": "Bài 19: Tính chất vật lí và tính chất hóa học của kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Dãy điện hóa và phản ứng với phi kim, nước, acid, muối.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b20",
            "number": 20,
            "title": "Bài 20: Kim loại trong tự nhiên và phương pháp tách kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Nhiệt luyện, thủy luyện và điện phân.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b21",
            "number": 21,
            "title": "Bài 21: Hợp kim",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Thành phần, tính chất của gang, thép, đuy-ra.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b22",
            "number": 22,
            "title": "Bài 22: Sự ăn mòn kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Ăn mòn hóa học, ăn mòn điện hóa và bảo vệ chống ăn mòn.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b23",
            "number": 23,
            "title": "Bài 23: Ôn tập chương 6",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Tổng hợp đại cương kim loại.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b24",
            "number": 24,
            "title": "Bài 24: Nguyên tố nhóm IA",
            "chapter": "Chương 7: Nguyên tố nhóm IA và nhóm IIA",
            "summary": "Kim loại kiềm (Li, Na, K) và hợp chất NaOH, NaHCO3, Na2CO3.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b25",
            "number": 25,
            "title": "Bài 25: Nguyên tố nhóm IIA",
            "chapter": "Chương 7: Nguyên tố nhóm IA và nhóm IIA",
            "summary": "Kim loại kiềm thổ (Mg, Ca, Ba) và nước cứng, làm mềm nước cứng.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b26",
            "number": 26,
            "title": "Bài 26: Ôn tập chương 7",
            "chapter": "Chương 7: Nguyên tố nhóm IA và nhóm IIA",
            "summary": "Nhận biết ion nhóm IA, IIA và xử lí nước cứng.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b27",
            "number": 27,
            "title": "Bài 27: Đại cương về kim loại chuyển tiếp dãy thứ nhất",
            "chapter": "Chương 8: Sơ lược về kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Cấu hình electron (Sc đến Cu), số oxi hóa và màu sắc hợp chất.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b28",
            "number": 28,
            "title": "Bài 28: Sơ lược về phức chất",
            "chapter": "Chương 8: Sơ lược về kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Nguyên tử trung tâm, phối tử, số phối trí và dạng hình học phức chất.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b29",
            "number": 29,
            "title": "Bài 29: Một số tính chất và ứng dụng của phức chất",
            "chapter": "Chương 8: Sơ lược về kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Phản ứng thế phối tử trong dung dịch và ứng dụng trong y học, xúc tác.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b30",
            "number": 30,
            "title": "Bài 30: Sơ lược về đồng, sắt và hợp chất",
            "chapter": "Chương 8: Sơ lược về kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Tính chất đặc trưng của Cu, Fe và hợp chất.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b31",
            "number": 31,
            "title": "Bài 31: Ôn tập chương 8",
            "chapter": "Chương 8: Sơ lược về kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Tổng hợp hóa học kim loại chuyển tiếp và phức chất.",
            "questions": []
          }
        ]
      },
      {
        "id": "sinhhoc-12",
        "name": "Sinh học",
        "icon": "🧬",
        "lessons": [
          {
            "id": "sinhhoc-12-b1",
            "number": 1,
            "title": "Bài 1: DNA và cơ chế tái bản DNA",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Cấu trúc xoắn kép Watson-Crick và nguyên tắc bán bảo toàn, bổ sung.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b2",
            "number": 2,
            "title": "Bài 2: Gene, quá trình truyền đạt thông tin di truyền và hệ gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Phiên mã, phiên mã ngược, mã di truyền và dịch mã.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b3",
            "number": 3,
            "title": "Bài 3: Điều hòa biểu hiện của gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Mô hình Operon Lac ở vi khuẩn E. coli và ý nghĩa điều hòa.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b4",
            "number": 4,
            "title": "Bài 4: Đột biến gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Đột biến điểm (thay thế, thêm, mất cặp nucleotide) và hậu quả.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b5",
            "number": 5,
            "title": "Bài 5: Công nghệ di truyền",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Công nghệ DNA tái tổ hợp, tạo sinh vật biến đổi gene và CRISPR.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b6",
            "number": 6,
            "title": "Bài 6: Thực hành: Tách chiết DNA",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Tách chiết DNA từ tế bào thực vật/động vật.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b7",
            "number": 7,
            "title": "Bài 7: Cấu trúc và chức năng của nhiễm sắc thể",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Nucleosome, sợi cơ bản, sợi nhiễm sắc và vị trí gene trên NST.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b8",
            "number": 8,
            "title": "Bài 8: Học thuyết di truyền của Mendel",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Quy luật phân li và quy luật phân li độc lập.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b9",
            "number": 9,
            "title": "Bài 9: Mở rộng học thuyết Mendel",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Tính trội không hoàn toàn, đồng trội, tương tác gene và tác động đa hiệu.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b10",
            "number": 10,
            "title": "Bài 10: Di truyền giới tính và di truyền liên kết với giới tính",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "NST giới tính XX/XY và di truyền gene trên X, Y.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b11",
            "number": 11,
            "title": "Bài 11: Liên kết gene và hoán vị gene",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Thí nghiệm Morgan ở ruồi giấm, tần số hoán vị và bản đồ di truyền.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b12",
            "number": 12,
            "title": "Bài 12: Đột biến nhiễm sắc thể",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Đột biến cấu trúc (mất, lặp, đảo, chuyển đoạn) và số lượng NST (lệch bội, đa bội).",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b13",
            "number": 13,
            "title": "Bài 13: Di truyền học người và di truyền y học",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Phả hệ, bệnh di truyền (Down, bạch tạng, máu khó đông) và tư vấn y học.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b14",
            "number": 14,
            "title": "Bài 14: Thực hành: Quan sát một số dạng đột biến NST",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Quan sát tiêu bản và tranh ảnh đột biến NST.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b15",
            "number": 15,
            "title": "Bài 15: Di truyền gene ngoài nhân",
            "chapter": "Chương 3: Mở rộng học thuyết di truyền NST",
            "summary": "Di truyền ti thể, lục lạp theo dòng mẹ.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b16",
            "number": 16,
            "title": "Bài 16: Tương tác giữa kiểu gene với môi trường và thành tựu chọn giống",
            "chapter": "Chương 3: Mở rộng học thuyết di truyền NST",
            "summary": "Thường biến, mức phản ứng và thành tựu tạo giống.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b17",
            "number": 17,
            "title": "Bài 17: Thực hành: Thí nghiệm về thường biến ở cây trồng",
            "chapter": "Chương 3: Mở rộng học thuyết di truyền NST",
            "summary": "Khảo sát mức phản ứng của giống cây trồng.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b18",
            "number": 18,
            "title": "Bài 18: Di truyền học quần thể",
            "chapter": "Chương 4: Di truyền quần thể",
            "summary": "Tần số allele, kiểu gene và định luật Hardy-Weinberg (p² + 2pq + q² = 1).",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b19",
            "number": 19,
            "title": "Bài 19: Các bằng chứng tiến hóa",
            "chapter": "Chương 5: Bằng chứng và các học thuyết tiến hóa",
            "summary": "Bằng chứng hóa thạch, giải phẫu so sánh, tế bào học và sinh học phân tử.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b20",
            "number": 20,
            "title": "Bài 20: Học thuyết Darwin về chọn lọc tự nhiên và hình thành loài",
            "chapter": "Chương 5: Bằng chứng và các học thuyết tiến hóa",
            "summary": "Biến dị cá thể, đấu tranh sinh tồn và chọn lọc tự nhiên.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b21",
            "number": 21,
            "title": "Bài 21: Học thuyết tiến hóa tổng hợp hiện đại",
            "chapter": "Chương 5: Bằng chứng và các học thuyết tiến hóa",
            "summary": "Tiến hóa nhỏ và các nhân tố tiến hóa (đột biến, di-nhập gene, CLTN, phiêu bạt di truyền, giao phối không ngẫu nhiên).",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b22",
            "number": 22,
            "title": "Bài 22: Tiến hóa lớn và quá trình phát sinh chủng loại",
            "chapter": "Chương 5: Bằng chứng và các học thuyết tiến hóa",
            "summary": "Cây phát sinh chủng loại và tiến hóa loài người.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b23",
            "number": 23,
            "title": "Bài 23: Môi trường và các nhân tố sinh thái",
            "chapter": "Chương 6: Môi trường và sinh thái học quần thể",
            "summary": "Giới hạn sinh thái, ổ sinh thái và quy luật tác động.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b24",
            "number": 24,
            "title": "Bài 24: Sinh thái học quần thể",
            "chapter": "Chương 6: Môi trường và sinh thái học quần thể",
            "summary": "Các đặc trưng cơ bản của quần thể (mật độ, tỉ lệ giới tính, tháp tuổi, phân bố).",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b25",
            "number": 25,
            "title": "Bài 25: Thực hành: Xác định phân bố và kích thước quần thể",
            "chapter": "Chương 6: Môi trường và sinh thái học quần thể",
            "summary": "Phương pháp đếm ô vuông và bắt-đánh dấu-thả.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b26",
            "number": 26,
            "title": "Bài 26: Quần xã sinh vật",
            "chapter": "Chương 7: Sinh thái học quần xã",
            "summary": "Độ đa dạng, loài ưu thế, loài đặc trưng, mối quan hệ hỗ trợ/đối kháng và diễn thế sinh thái.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b27",
            "number": 27,
            "title": "Bài 27: Thực hành: Tìm hiểu đặc trưng cơ bản của quần xã",
            "chapter": "Chương 7: Sinh thái học quần xã",
            "summary": "Khảo sát thành phần loài trong quần xã tự nhiên.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b28",
            "number": 28,
            "title": "Bài 28: Hệ sinh thái",
            "chapter": "Chương 8: Hệ sinh thái và sinh quyển",
            "summary": "Thành phần hữu sinh, vô sinh và lưới thức ăn, bậc dinh dưỡng.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b29",
            "number": 29,
            "title": "Bài 29: Dòng năng lượng và hiệu suất sinh thái",
            "chapter": "Chương 8: Hệ sinh thái và sinh quyển",
            "summary": "Sự truyền năng lượng qua các bậc dinh dưỡng (~10%) và tháp sinh thái.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b30",
            "number": 30,
            "title": "Bài 30: Chu trình sinh địa hóa và sinh quyển",
            "chapter": "Chương 8: Hệ sinh thái và sinh quyển",
            "summary": "Chu trình carbon, nitrogen và nước.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b31",
            "number": 31,
            "title": "Bài 31: Sinh quyển và các khu sinh học",
            "chapter": "Chương 8: Hệ sinh thái và sinh quyển",
            "summary": "Khu sinh học trên cạn, nước ngọt và biển.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b32",
            "number": 32,
            "title": "Bài 32: Thực hành: Khảo sát hệ sinh thái",
            "chapter": "Chương 8: Hệ sinh thái và sinh quyển",
            "summary": "Phân tích chuỗi thức ăn và môi trường hệ sinh thái địa phương.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b33",
            "number": 33,
            "title": "Bài 33: Sinh học với phát triển bền vững",
            "chapter": "Chương 9: Sinh học với phát triển bền vững",
            "summary": "Bảo tồn đa dạng sinh học, kiểm soát dân số và kinh tế tuần hoàn.",
            "questions": []
          }
        ]
      },
      {
        "id": "nguvan-12",
        "name": "Ngữ văn",
        "icon": "📖",
        "lessons": [
          {
            "id": "nguvan-12-b1",
            "number": 1,
            "title": "Bài 1: Khả năng lớn lao của tiểu thuyết (Xuân Tóc Đỏ cứu quốc, Nỗi buồn chiến tranh)",
            "chapter": "Tập 1 - Bài 1: Khả năng lớn lao của tiểu thuyết",
            "summary": "Nghệ thuật trào phúng trong Số đỏ (Vũ Trọng Phụng) và tiểu thuyết hiện đại.",
            "questions": []
          },
          {
            "id": "nguvan-12-b2",
            "number": 2,
            "title": "Bài 2: Những thế giới thơ (Cảm hoài, Tây Tiến, Đàn ghi ta của Lor-ca)",
            "chapter": "Tập 1 - Bài 2: Những thế giới thơ",
            "summary": "Phong cách lãng mạn, bi tráng và tượng trưng siêu thực trong thơ.",
            "questions": []
          },
          {
            "id": "nguvan-12-b3",
            "number": 3,
            "title": "Bài 3: Lập luận trong văn bản nghị luận (Nhìn về vốn văn hóa dân tộc, Năng lực sáng tạo)",
            "chapter": "Tập 1 - Bài 3: Lập luận trong văn bản nghị luận",
            "summary": "Nghệ thuật lập luận chặt chẽ, sắc sảo trong văn nghị luận hiện đại.",
            "questions": []
          },
          {
            "id": "nguvan-12-b4",
            "number": 4,
            "title": "Bài 4: Yếu tố kì ảo trong truyện kể (Hải khẩu linh từ, Muối của rừng)",
            "chapter": "Tập 1 - Bài 4: Yếu tố kì ảo trong truyện kể",
            "summary": "Vai trò yếu tố kì ảo trong truyện truyền kì trung đại và truyện ngắn đương đại.",
            "questions": []
          },
          {
            "id": "nguvan-12-b5",
            "number": 5,
            "title": "Bài 5: Tiếng cười của hài kịch (Nhân vật quan trọng, Giấu của)",
            "chapter": "Tập 1 - Bài 5: Tiếng cười của hài kịch",
            "summary": "Xung đột, nhân vật và tiếng cười phê phán trong hài kịch.",
            "questions": []
          },
          {
            "id": "nguvan-12-b6",
            "number": 6,
            "title": "Bài 6: Hồ Chí Minh – 'Văn hóa phải soi đường cho quốc dân đi' (Tuyên ngôn Độc lập)",
            "chapter": "Tập 2 - Bài 6: Hồ Chí Minh – “Văn hóa phải soi đường cho quốc dân đi”",
            "summary": "Tác gia Hồ Chí Minh, Tuyên ngôn Độc lập, Mộ (Chiều tối), Nhật kí trong tù.",
            "questions": []
          },
          {
            "id": "nguvan-12-b7",
            "number": 7,
            "title": "Bài 7: Sự thật trong tác phẩm kí (Nghệ thuật băm thịt gà, Bước vào đời)",
            "chapter": "Tập 2 - Bài 7: Sự thật trong tác phẩm kí",
            "summary": "Tính xác thực và cái tôi trữ tình trong phóng sự, hồi kí.",
            "questions": []
          },
          {
            "id": "nguvan-12-b8",
            "number": 8,
            "title": "Bài 8: Dữ liệu trong văn bản thông tin (Pa-ra-na, Giáo dục khai phóng)",
            "chapter": "Tập 2 - Bài 8: Dữ liệu trong văn bản thông tin",
            "summary": "Cách sử dụng số liệu, bằng chứng khoa học trong văn bản thông tin.",
            "questions": []
          },
          {
            "id": "nguvan-12-b9",
            "number": 9,
            "title": "Bài 9: Văn học và cuộc đời (Vội vàng, Trở về, Hồn Trương Ba da hàng thịt)",
            "chapter": "Tập 2 - Bài 9: Văn học và cuộc đời",
            "summary": "Giá trị nhân văn và sức sống của văn học đối với đời sống con người.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-12",
        "name": "Lịch sử",
        "icon": "🏛️",
        "lessons": [
          {
            "id": "lichsu-12-b1",
            "number": 1,
            "title": "Bài 1: Liên hợp quốc",
            "chapter": "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
            "summary": "Bối cảnh thành lập (1945), mục tiêu, nguyên tắc hoạt động và vai trò của LHQ.",
            "questions": []
          },
          {
            "id": "lichsu-12-b2",
            "number": 2,
            "title": "Bài 2: Trật tự thế giới trong Chiến tranh lạnh",
            "chapter": "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
            "summary": "Trật tự hai cực I-an-ta (Mỹ - Liên Xô) và sự sụp đổ năm 1991.",
            "questions": []
          },
          {
            "id": "lichsu-12-b3",
            "number": 3,
            "title": "Bài 3: Trật tự thế giới sau Chiến tranh lạnh",
            "chapter": "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
            "summary": "Xu thế đa cực, hòa bình hợp tác và sự vươn lên của các trung tâm quyền lực.",
            "questions": []
          },
          {
            "id": "lichsu-12-b4",
            "number": 4,
            "title": "Bài 4: Sự ra đời và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
            "chapter": "Chủ đề 2: ASEAN: Những chặng đường lịch sử",
            "summary": "Từ Tuyên bố Băng Cốc 1967 đến ASEAN 10 thành viên.",
            "questions": []
          },
          {
            "id": "lichsu-12-b5",
            "number": 5,
            "title": "Bài 5: Cộng đồng ASEAN: Từ ý tưởng đến hiện thực",
            "chapter": "Chủ đề 2: ASEAN: Những chặng đường lịch sử",
            "summary": "3 trụ cột Cộng đồng ASEAN (Chính trị-An ninh, Kinh tế, Văn hóa-Xã hội).",
            "questions": []
          },
          {
            "id": "lichsu-12-b6",
            "number": 6,
            "title": "Bài 6: Cách mạng tháng Tám năm 1945",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám và chiến tranh giải phóng dân tộc (1945–nay)",
            "summary": "Thời cơ lịch sử, diễn biến Tổng khởi nghĩa và nước VNDCCH ra đời.",
            "questions": []
          },
          {
            "id": "lichsu-12-b7",
            "number": 7,
            "title": "Bài 7: Cuộc kháng chiến chống thực dân Pháp (1945 – 1954)",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám và chiến tranh giải phóng dân tộc (1945–nay)",
            "summary": "Chiến dịch Việt Bắc 1947, Biên giới 1950 và Điện Biên Phủ 1954.",
            "questions": []
          },
          {
            "id": "lichsu-12-b8",
            "number": 8,
            "title": "Bài 8: Cuộc kháng chiến chống Mỹ, cứu nước (1954 – 1975)",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám và chiến tranh giải phóng dân tộc (1945–nay)",
            "summary": "Đồng khởi, Tết Mậu Thân 1968, Điện Biên Phủ trên không 1972, Chiến dịch Hồ Chí Minh 1975.",
            "questions": []
          },
          {
            "id": "lichsu-12-b9",
            "number": 9,
            "title": "Bài 9: Cuộc đấu tranh bảo vệ Tổ quốc từ sau tháng 4/1975 đến nay",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám và chiến tranh giải phóng dân tộc (1945–nay)",
            "summary": "Bảo vệ biên giới Tây Nam, biên giới phía Bắc và chủ quyền biển đảo.",
            "questions": []
          },
          {
            "id": "lichsu-12-b10",
            "number": 10,
            "title": "Bài 10: Khái quát về công cuộc Đổi mới từ năm 1986 đến nay",
            "chapter": "Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
            "summary": "Đại hội VI (1986) và các giai đoạn đường lối Đổi mới toàn diện.",
            "questions": []
          },
          {
            "id": "lichsu-12-b11",
            "number": 11,
            "title": "Bài 11: Thành tựu cơ bản và bài học của công cuộc Đổi mới",
            "chapter": "Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
            "summary": "Thành tựu kinh tế, xã hội, chính trị, đối ngoại và bài học kinh nghiệm.",
            "questions": []
          },
          {
            "id": "lichsu-12-b12",
            "number": 12,
            "title": "Bài 12: Hoạt động đối ngoại của Việt Nam từ đầu thế kỉ XX đến 1945",
            "chapter": "Chủ đề 5: Lịch sử đối ngoại của Việt Nam thời cận - hiện đại",
            "summary": "Hoạt động đối ngoại của Phan Bội Châu, Phan Châu Trinh, Nguyễn Ái Quốc.",
            "questions": []
          },
          {
            "id": "lichsu-12-b13",
            "number": 13,
            "title": "Bài 13: Hoạt động đối ngoại trong kháng chiến chống Pháp và chống Mỹ",
            "chapter": "Chủ đề 5: Lịch sử đối ngoại của Việt Nam thời cận - hiện đại",
            "summary": "Hiệp định Sơ bộ 1946, Giơ-ne-vơ 1954 và Hiệp định Pa-ri 1973.",
            "questions": []
          },
          {
            "id": "lichsu-12-b14",
            "number": 14,
            "title": "Bài 14: Hoạt động đối ngoại của Việt Nam từ năm 1975 đến nay",
            "chapter": "Chủ đề 5: Lịch sử đối ngoại của Việt Nam thời cận - hiện đại",
            "summary": "Gia nhập LHQ (1977), ASEAN (1995), WTO (2007) và đối ngoại đa phương.",
            "questions": []
          },
          {
            "id": "lichsu-12-b15",
            "number": 15,
            "title": "Bài 15: Khái quát cuộc đời và sự nghiệp của Hồ Chí Minh",
            "chapter": "Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam",
            "summary": "Quê hương, gia đình và hành trình tìm đường cứu nước (1911–1941).",
            "questions": []
          },
          {
            "id": "lichsu-12-b16",
            "number": 16,
            "title": "Bài 16: Hồ Chí Minh – Anh hùng giải phóng dân tộc",
            "chapter": "Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam",
            "summary": "Vai trò sáng lập Đảng, lãnh đạo Cách mạng tháng Tám và hai cuộc kháng chiến.",
            "questions": []
          },
          {
            "id": "lichsu-12-b17",
            "number": 17,
            "title": "Bài 17: Dấu ấn Hồ Chí Minh trong lòng nhân dân thế giới và Việt Nam",
            "chapter": "Chủ đề 6: Hồ Chí Minh trong lịch sử Việt Nam",
            "summary": "Danh nhân văn hóa thế giới và tư tưởng, đạo đức, phong cách Hồ Chí Minh.",
            "questions": []
          }
        ]
      },
      {
        "id": "diali-12",
        "name": "Địa lí",
        "icon": "🌍",
        "lessons": [
          {
            "id": "diali-12-b1",
            "number": 1,
            "title": "Bài 1: Vị trí địa lí và phạm vi lãnh thổ",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Hệ tọa độ địa lí, vùng đất, vùng biển, vùng trời và ý nghĩa chiến lược.",
            "questions": []
          },
          {
            "id": "diali-12-b2",
            "number": 2,
            "title": "Bài 2: Thiên nhiên nhiệt đới ẩm gió mùa",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Tính chất nhiệt đới, ẩm, gió mùa Đông Bắc/Tây Nam và ảnh hưởng.",
            "questions": []
          },
          {
            "id": "diali-12-b3",
            "number": 3,
            "title": "Bài 3: Sự phân hóa đa dạng của thiên nhiên",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Phân hóa Bắc-Nam, Đông-Tây, theo độ cao và các miền tự nhiên.",
            "questions": []
          },
          {
            "id": "diali-12-b4",
            "number": 4,
            "title": "Bài 4: Thực hành: Viết báo cáo về sự phân hóa tự nhiên Việt Nam",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "So sánh thiên nhiên miền Bắc và miền Nam.",
            "questions": []
          },
          {
            "id": "diali-12-b5",
            "number": 5,
            "title": "Bài 5: Vấn đề sử dụng hợp lí tài nguyên thiên nhiên và bảo vệ môi trường",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Suy giảm tài nguyên rừng, đa dạng sinh học, đất và ô nhiễm môi trường.",
            "questions": []
          },
          {
            "id": "diali-12-b6",
            "number": 6,
            "title": "Bài 6: Dân số",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Quy mô dân số đông, cơ cấu dân số đang già hóa và phân bố dân cư.",
            "questions": []
          },
          {
            "id": "diali-12-b7",
            "number": 7,
            "title": "Bài 7: Lao động và việc làm",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Nguồn lao động dồi dào, chuyển dịch cơ cấu lao động và giải quyết việc làm.",
            "questions": []
          },
          {
            "id": "diali-12-b8",
            "number": 8,
            "title": "Bài 8: Đô thị hóa",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Tỉ lệ dân thành thị tăng, mạng lưới đô thị và tác động đô thị hóa.",
            "questions": []
          },
          {
            "id": "diali-12-b9",
            "number": 9,
            "title": "Bài 9: Thực hành: Vẽ biểu đồ, phân tích số liệu dân cư và lao động",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Xử lí bảng số liệu dân số, lao động.",
            "questions": []
          },
          {
            "id": "diali-12-b10",
            "number": 10,
            "title": "Bài 10: Chuyển dịch cơ cấu kinh tế",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Chuyển dịch theo ngành, theo thành phần kinh tế và theo lãnh thổ.",
            "questions": []
          },
          {
            "id": "diali-12-b11",
            "number": 11,
            "title": "Bài 11: Vấn đề phát triển nông nghiệp",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Thế mạnh nông nghiệp nhiệt đới, trồng trọt, chăn nuôi hiện đại.",
            "questions": []
          },
          {
            "id": "diali-12-b12",
            "number": 12,
            "title": "Bài 12: Vấn đề phát triển thủy sản và lâm nghiệp",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Nuôi trồng, đánh bắt thủy sản và bảo vệ, phát triển vốn rừng.",
            "questions": []
          },
          {
            "id": "diali-12-b13",
            "number": 13,
            "title": "Bài 13: Tổ chức lãnh thổ nông nghiệp",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Trang trại, vùng chuyên canh nông nghiệp và nông nghiệp công nghệ cao.",
            "questions": []
          },
          {
            "id": "diali-12-b14",
            "number": 14,
            "title": "Bài 14: Vấn đề phát triển ngành công nghiệp",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Công nghiệp khai khoáng, năng lượng, điện tử-tin học và chế biến thực phẩm.",
            "questions": []
          },
          {
            "id": "diali-12-b15",
            "number": 15,
            "title": "Bài 15: Vấn đề tổ chức lãnh thổ công nghiệp",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Khu công nghiệp, khu chế xuất, khu công nghệ cao và trung tâm công nghiệp.",
            "questions": []
          },
          {
            "id": "diali-12-b16",
            "number": 16,
            "title": "Bài 16: Thực hành: Vẽ biểu đồ, nhận xét và giải thích về công nghiệp",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Phân tích cơ cấu và tốc độ tăng trưởng công nghiệp.",
            "questions": []
          },
          {
            "id": "diali-12-b17",
            "number": 17,
            "title": "Bài 17: Vấn đề phát triển ngành giao thông vận tải và bưu chính viễn thông",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Các tuyến giao thông huyết mạch và hạ tầng số viễn thông.",
            "questions": []
          },
          {
            "id": "diali-12-b18",
            "number": 18,
            "title": "Bài 18: Vấn đề phát triển ngành thương mại",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Nội thương và ngoại thương (xuất khẩu, nhập khẩu).",
            "questions": []
          },
          {
            "id": "diali-12-b19",
            "number": 19,
            "title": "Bài 19: Vấn đề phát triển du lịch",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Tài nguyên du lịch và các trung tâm du lịch lớn.",
            "questions": []
          },
          {
            "id": "diali-12-b20",
            "number": 20,
            "title": "Bài 20: Thực hành: Viết báo cáo về một vấn đề kinh tế - xã hội",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Tìm hiểu ngành dịch vụ hoặc kinh tế biển.",
            "questions": []
          },
          {
            "id": "diali-12-b21",
            "number": 21,
            "title": "Bài 21: Vấn đề khai thác thế mạnh ở Trung du và miền núi Bắc Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Thủy điện, khoáng sản, cây công nghiệp cận nhiệt và chăn nuôi đại gia súc.",
            "questions": []
          },
          {
            "id": "diali-12-b22",
            "number": 22,
            "title": "Bài 22: Vấn đề phát triển kinh tế - xã hội ở Đồng bằng sông Hồng",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Chuyển dịch cơ cấu kinh tế, công nghiệp, dịch vụ và nông nghiệp hàng hóa.",
            "questions": []
          },
          {
            "id": "diali-12-b23",
            "number": 23,
            "title": "Bài 23: Vấn đề phát triển kinh tế - xã hội ở Bắc Trung Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Kinh tế biển, lâm-nông-ngư nghiệp và hành lang kinh tế Đông-Tây.",
            "questions": []
          },
          {
            "id": "diali-12-b24",
            "number": 24,
            "title": "Bài 24: Vấn đề phát triển kinh tế - xã hội ở Duyên hải Nam Trung Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Nghề cá, cảng biển nước sâu, du lịch biển và năng lượng tái tạo.",
            "questions": []
          },
          {
            "id": "diali-12-b25",
            "number": 25,
            "title": "Bài 25: Vấn đề phát triển kinh tế - xã hội ở Tây Nguyên",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Cây công nghiệp lâu năm (cà phê, cao su, hồ tiêu), thủy điện và lâm nghiệp.",
            "questions": []
          },
          {
            "id": "diali-12-b26",
            "number": 26,
            "title": "Bài 26: Vấn đề phát triển kinh tế - xã hội ở Đông Nam Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Công nghiệp, dịch vụ phát triển nhất cả nước và vùng kinh tế trọng điểm phía Nam.",
            "questions": []
          },
          {
            "id": "diali-12-b27",
            "number": 27,
            "title": "Bài 27: Vấn đề sử dụng hợp lí tự nhiên để phát triển kinh tế ở Đồng bằng sông Cửu Long",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Thích ứng biến đổi khí hậu, xâm nhập mặn và phát triển lúa gạo, thủy sản, cây ăn quả.",
            "questions": []
          },
          {
            "id": "diali-12-b28",
            "number": 28,
            "title": "Bài 28: Phát triển kinh tế biển và bảo vệ chủ quyền biển đảo",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Kinh tế biển tổng hợp và bảo vệ chủ quyền Hoàng Sa, Trường Sa.",
            "questions": []
          },
          {
            "id": "diali-12-b29",
            "number": 29,
            "title": "Bài 29: Thực hành: Tìm hiểu về vùng kinh tế hoặc kinh tế biển",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Phân tích thế mạnh vùng kinh tế trọng điểm.",
            "questions": []
          },
          {
            "id": "diali-12-b30",
            "number": 30,
            "title": "Bài 30: Thực hành: Tìm hiểu về địa lí địa phương",
            "chapter": "Phần 5: Địa lí địa phương",
            "summary": "Khảo sát tự nhiên, dân cư và kinh tế tỉnh/thành phố.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdktpl-12",
        "name": "Giáo dục kinh tế và pháp luật",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "gdktpl-12-b1",
            "number": 1,
            "title": "Bài 1: Tăng trưởng và phát triển kinh tế",
            "chapter": "Chủ đề 1: Tăng trưởng và phát triển kinh tế",
            "summary": "GDP, GNI, chỉ số phát triển con người HDI.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b2",
            "number": 2,
            "title": "Bài 2: Hội nhập kinh tế quốc tế",
            "chapter": "Chủ đề 2: Hội nhập kinh tế quốc tế",
            "summary": "Các cấp độ hội nhập song phương, khu vực, toàn cầu.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b3",
            "number": 3,
            "title": "Bài 3: Bảo hiểm",
            "chapter": "Chủ đề 3: Bảo hiểm và an sinh xã hội",
            "summary": "Bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp, thương mại.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b4",
            "number": 4,
            "title": "Bài 4: An sinh xã hội",
            "chapter": "Chủ đề 3: Bảo hiểm và an sinh xã hội",
            "summary": "Hệ thống chính sách an sinh xã hội.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b5",
            "number": 5,
            "title": "Bài 5: Lập kế hoạch kinh doanh",
            "chapter": "Chủ đề 4: Lập kế hoạch kinh doanh",
            "summary": "Các bước xây dựng bản kế hoạch kinh doanh.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b6",
            "number": 6,
            "title": "Bài 6: Trách nhiệm xã hội của doanh nghiệp",
            "chapter": "Chủ đề 5: Trách nhiệm xã hội của doanh nghiệp",
            "summary": "Trách nhiệm kinh tế, pháp lí, đạo đức, nhân văn.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b7",
            "number": 7,
            "title": "Bài 7: Quản lí thu, chi trong gia đình",
            "chapter": "Chủ đề 6: Quản lí thu, chi trong gia đình",
            "summary": "Lập kế hoạch thu chi gia đình hợp lí.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b8",
            "number": 8,
            "title": "Bài 8: Quyền và nghĩa vụ của công dân về kinh doanh và nộp thuế",
            "chapter": "Chủ đề 7: Quyền và nghĩa vụ của công dân về kinh tế",
            "summary": "Tự do kinh doanh ngành nghề pháp luật không cấm và nghĩa vụ thuế.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b9",
            "number": 9,
            "title": "Bài 9: Quyền và nghĩa vụ của công dân về sở hữu tài sản và tôn trọng tài sản của người khác",
            "chapter": "Chủ đề 7: Quyền và nghĩa vụ của công dân về kinh tế",
            "summary": "Quyền chiếm hữu, sử dụng, định đoạt.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b10",
            "number": 10,
            "title": "Bài 10: Quyền và nghĩa vụ của công dân trong hôn nhân và gia đình",
            "chapter": "Chủ đề 8: Quyền và nghĩa vụ của công dân về văn hóa, xã hội",
            "summary": "Điều kiện kết hôn và bình đẳng vợ chồng.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b11",
            "number": 11,
            "title": "Bài 11: Quyền và nghĩa vụ của công dân trong học tập",
            "chapter": "Chủ đề 8: Quyền và nghĩa vụ của công dân về văn hóa, xã hội",
            "summary": "Quyền học tập suốt đời.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b12",
            "number": 12,
            "title": "Bài 12: Quyền và nghĩa vụ của công dân trong bảo vệ, chăm sóc sức khỏe và bảo đảm an sinh xã hội",
            "chapter": "Chủ đề 8: Quyền và nghĩa vụ của công dân về văn hóa, xã hội",
            "summary": "Khám chữa bệnh và tham gia BHYT.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b13",
            "number": 13,
            "title": "Bài 13: Quyền và nghĩa vụ của công dân trong bảo vệ di sản văn hóa, môi trường và tài nguyên thiên nhiên",
            "chapter": "Chủ đề 8: Quyền và nghĩa vụ của công dân về văn hóa, xã hội",
            "summary": "Bảo vệ di sản và môi trường.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b14",
            "number": 14,
            "title": "Bài 14: Một số vấn đề chung về pháp luật quốc tế",
            "chapter": "Chủ đề 9: Một số vấn đề cơ bản của luật quốc tế",
            "summary": "Nguyên tắc cơ bản của pháp luật quốc tế.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b15",
            "number": 15,
            "title": "Bài 15: Công pháp quốc tế về dân cư, lãnh thổ và chủ quyền quốc gia",
            "chapter": "Chủ đề 9: Một số vấn đề cơ bản của luật quốc tế",
            "summary": "Công ước Luật Biển UNCLOS 1982.",
            "questions": []
          },
          {
            "id": "gdktpl-12-b16",
            "number": 16,
            "title": "Bài 16: Nguyên tắc cơ bản của Tổ chức Thương mại Thế giới (WTO) và hợp đồng thương mại quốc tế",
            "chapter": "Chủ đề 9: Một số vấn đề cơ bản của luật quốc tế",
            "summary": "Nguyên tắc không phân biệt đối xử (MFN, NT).",
            "questions": []
          }
        ]
      },
      {
        "id": "tinhoc-12",
        "name": "Tin học",
        "icon": "💻",
        "lessons": [
          {
            "id": "tinhoc-12-b1",
            "number": 1,
            "title": "Bài 1: Làm quen với Trí tuệ nhân tạo",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Khái niệm AI, học máy (Machine Learning) và ứng dụng AI.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b2",
            "number": 2,
            "title": "Bài 2: Trí tuệ nhân tạo trong khoa học và đời sống",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Lợi ích và cảnh báo rủi ro đạo đức, bảo mật của AI.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b3",
            "number": 3,
            "title": "Bài 3: Một số thiết bị mạng thông dụng",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Hub, Switch, Router, Access Point, Modem.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b4",
            "number": 4,
            "title": "Bài 4: Giao thức mạng",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "TCP/IP, địa chỉ IP, DNS, HTTP/HTTPS.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b5",
            "number": 5,
            "title": "Bài 5: Thực hành chia sẻ tài nguyên trên mạng",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Chia sẻ thư mục và máy in trong mạng LAN.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b6",
            "number": 6,
            "title": "Bài 6: Giao tiếp và ứng xử trong không gian mạng",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa số",
            "summary": "Ưu nhược điểm giao tiếp mạng và ứng xử nhân văn.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b7",
            "number": 7,
            "title": "Bài 7: HTML và cấu trúc trang web",
            "chapter": "Chủ đề 4: Giải quyết vấn đề - HTML",
            "summary": "Thẻ html, head, title, body và cấu trúc cây DOM.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b8",
            "number": 8,
            "title": "Bài 8: Định dạng văn bản",
            "chapter": "Chủ đề 4: Giải quyết vấn đề - HTML",
            "summary": "Thẻ h1-h6, p, strong, em, br, hr.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b9",
            "number": 9,
            "title": "Bài 9: Tạo danh sách, bảng",
            "chapter": "Chủ đề 4: Giải quyết vấn đề - HTML",
            "summary": "Thẻ ul, ol, li, table, tr, th, td.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b10",
            "number": 10,
            "title": "Bài 10: Tạo liên kết",
            "chapter": "Chủ đề 4: Giải quyết vấn đề - HTML",
            "summary": "Thẻ a, thuộc tính href, liên kết ngoài và liên kết nội bộ.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b11",
            "number": 11,
            "title": "Bài 11: Chèn tệp tin đa phương tiện và khung nội tuyến vào trang web",
            "chapter": "Chủ đề 4: Giải quyết vấn đề - HTML",
            "summary": "Thẻ img, audio, video, iframe.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b12",
            "number": 12,
            "title": "Bài 12: Tạo biểu mẫu",
            "chapter": "Chủ đề 4: Giải quyết vấn đề - HTML",
            "summary": "Thẻ form, input, label, select, textarea, button.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b13",
            "number": 13,
            "title": "Bài 13: Khái niệm, vai trò của CSS",
            "chapter": "Chủ đề 5: Giải quyết vấn đề - CSS",
            "summary": "Cú pháp CSS, internal, external, inline CSS.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b14",
            "number": 14,
            "title": "Bài 14: Định dạng văn bản bằng CSS",
            "chapter": "Chủ đề 5: Giải quyết vấn đề - CSS",
            "summary": "font-family, font-size, font-weight, text-align.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b15",
            "number": 15,
            "title": "Bài 15: Tạo màu cho chữ và nền",
            "chapter": "Chủ đề 5: Giải quyết vấn đề - CSS",
            "summary": "color, background-color, hệ màu RGB, HEX.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b16",
            "number": 16,
            "title": "Bài 16: Định dạng khung",
            "chapter": "Chủ đề 5: Giải quyết vấn đề - CSS",
            "summary": "Box model: margin, border, padding, content.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b17",
            "number": 17,
            "title": "Bài 17: Các mức ưu tiên của bộ chọn",
            "chapter": "Chủ đề 5: Giải quyết vấn đề - CSS",
            "summary": "Thứ tự ưu tiên inline > id > class > element.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b18",
            "number": 18,
            "title": "Bài 18: Thực hành tổng hợp thiết kế trang web",
            "chapter": "Chủ đề 5: Giải quyết vấn đề - CSS",
            "summary": "Xây dựng trang web hoàn chỉnh bằng HTML & CSS.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b19",
            "number": 19,
            "title": "Bài 19: Dịch vụ sửa chữa và bảo trì máy tính",
            "chapter": "Chủ đề 6: Hướng nghiệp với Tin học",
            "summary": "Công việc, kĩ năng của kĩ thuật viên phần cứng/phần mềm.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b20",
            "number": 20,
            "title": "Bài 20: Nhóm nghề quản trị thuộc ngành Công nghệ thông tin",
            "chapter": "Chủ đề 6: Hướng nghiệp với Tin học",
            "summary": "Quản trị mạng, bảo mật hệ thống thông tin.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b21",
            "number": 21,
            "title": "Bài 21: Hội thảo hướng nghiệp",
            "chapter": "Chủ đề 6: Hướng nghiệp với Tin học",
            "summary": "Tìm hiểu các ngành đào tạo CNTT và nhu cầu tuyển dụng.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b22",
            "number": 22,
            "title": "Bài 22: Tìm hiểu phần mềm tạo trang web",
            "chapter": "Chủ đề 7: Ứng dụng tin học - Tạo trang web",
            "summary": "Làm quen nền tảng tạo web không cần code (Google Sites/Mobirise).",
            "questions": []
          },
          {
            "id": "tinhoc-12-b23",
            "number": 23,
            "title": "Bài 23: Chuẩn bị xây dựng trang web",
            "chapter": "Chủ đề 7: Ứng dụng tin học - Tạo trang web",
            "summary": "Lập dàn ý cấu trúc website và chuẩn bị tài nguyên.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b24",
            "number": 24,
            "title": "Bài 24: Xây dựng phần đầu trang web",
            "chapter": "Chủ đề 7: Ứng dụng tin học - Tạo trang web",
            "summary": "Thiết kế header, banner và thanh điều hướng.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b25",
            "number": 25,
            "title": "Bài 25: Xây dựng phần thân và chân trang web",
            "chapter": "Chủ đề 7: Ứng dụng tin học - Tạo trang web",
            "summary": "Bố cục nội dung chính và footer.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b26",
            "number": 26,
            "title": "Bài 26: Liên kết và thanh điều hướng",
            "chapter": "Chủ đề 7: Ứng dụng tin học - Tạo trang web",
            "summary": "Tạo menu đa cấp và liên kết các trang con.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b27",
            "number": 27,
            "title": "Bài 27: Biểu mẫu trên trang web",
            "chapter": "Chủ đề 7: Ứng dụng tin học - Tạo trang web",
            "summary": "Nhúng biểu mẫu thu thập phản hồi và xuất bản website.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-12",
        "name": "Công nghệ (Điện – Điện tử)",
        "icon": "🔌",
        "lessons": [
          {
            "id": "congnghe-12-b1",
            "number": 1,
            "title": "Bài 1: Vai trò và triển vọng phát triển của ngành kĩ thuật điện tử",
            "chapter": "Phần một: Kĩ thuật điện tử",
            "summary": "Ứng dụng điện tử trong công nghiệp, y tế, giao thông và đời sống.",
            "questions": []
          },
          {
            "id": "congnghe-12-b2",
            "number": 2,
            "title": "Bài 2: Điện trở – Tụ điện – Cuộn cảm",
            "chapter": "Chương 1: Linh kiện điện tử",
            "summary": "Công dụng, thông số kĩ thuật và đọc trị số vòng màu điện trở.",
            "questions": []
          },
          {
            "id": "congnghe-12-b3",
            "number": 3,
            "title": "Bài 3: Thực hành: Điện trở – Tụ điện – Cuộn cảm",
            "chapter": "Chương 1: Linh kiện điện tử",
            "summary": "Đo kiểm tra chất lượng R, C, L bằng đồng hồ vạn năng.",
            "questions": []
          },
          {
            "id": "congnghe-12-b4",
            "number": 4,
            "title": "Bài 4: Linh kiện bán dẫn và IC",
            "chapter": "Chương 1: Linh kiện điện tử",
            "summary": "Diode, Transistor lưỡng cực (BJT), Thyristor, Triac và mạch tích hợp IC.",
            "questions": []
          },
          {
            "id": "congnghe-12-b5",
            "number": 5,
            "title": "Bài 5: Thực hành: Diode – Thyristor – Triac",
            "chapter": "Chương 1: Linh kiện điện tử",
            "summary": "Đo phân cực thuận/nghịch kiểm tra linh kiện bán dẫn.",
            "questions": []
          },
          {
            "id": "congnghe-12-b6",
            "number": 6,
            "title": "Bài 6: Thực hành: Transistor",
            "chapter": "Chương 1: Linh kiện điện tử",
            "summary": "Xác định cực B, C, E và loại NPN/PNP của transistor.",
            "questions": []
          },
          {
            "id": "congnghe-12-b7",
            "number": 7,
            "title": "Bài 7: Khái niệm mạch điện tử – Chỉnh lưu – Nguồn một chiều",
            "chapter": "Chương 2: Một số mạch điện tử cơ bản",
            "summary": "Biến đổi AC thành DC qua mạch chỉnh lưu nửa chu kì, hai nửa chu kì.",
            "questions": []
          },
          {
            "id": "congnghe-12-b8",
            "number": 8,
            "title": "Bài 8: Mạch khuếch đại – Mạch tạo xung",
            "chapter": "Chương 2: Một số mạch điện tử cơ bản",
            "summary": "Khuếch đại thuật toán (Op-Amp) và mạch tạo xung đa hài.",
            "questions": []
          },
          {
            "id": "congnghe-12-b9",
            "number": 9,
            "title": "Bài 9: Thiết kế mạch điện tử đơn giản",
            "chapter": "Chương 2: Một số mạch điện tử cơ bản",
            "summary": "Nguyên tắc và các bước thiết kế mạch điện tử.",
            "questions": []
          },
          {
            "id": "congnghe-12-b10",
            "number": 10,
            "title": "Bài 10: Thực hành: Mạch nguồn điện một chiều",
            "chapter": "Chương 2: Một số mạch điện tử cơ bản",
            "summary": "Khảo sát khối biến áp, chỉnh lưu, lọc và ổn áp.",
            "questions": []
          },
          {
            "id": "congnghe-12-b11",
            "number": 11,
            "title": "Bài 11: Thực hành: Lắp mạch nguồn chỉnh lưu cầu",
            "chapter": "Chương 2: Một số mạch điện tử cơ bản",
            "summary": "Lắp và đo điện áp đầu ra mạch chỉnh lưu cầu có tụ lọc.",
            "questions": []
          },
          {
            "id": "congnghe-12-b12",
            "number": 12,
            "title": "Bài 12: Thực hành: Điều chỉnh thông số mạch tạo xung đa hài",
            "chapter": "Chương 2: Một số mạch điện tử cơ bản",
            "summary": "Thay đổi R, C để điều chỉnh chu kì nhấp nháy LED.",
            "questions": []
          },
          {
            "id": "congnghe-12-b13",
            "number": 13,
            "title": "Bài 13: Khái niệm về mạch điện tử điều khiển",
            "chapter": "Chương 3: Mạch điện tử điều khiển đơn giản",
            "summary": "Sơ đồ khối và phân loại mạch điều khiển.",
            "questions": []
          },
          {
            "id": "congnghe-12-b14",
            "number": 14,
            "title": "Bài 14: Mạch điều khiển tín hiệu",
            "chapter": "Chương 3: Mạch điện tử điều khiển đơn giản",
            "summary": "Điều khiển đèn giao thông, bảng quảng cáo, báo cháy.",
            "questions": []
          },
          {
            "id": "congnghe-12-b15",
            "number": 15,
            "title": "Bài 15: Mạch điều khiển tốc độ động cơ xoay chiều một pha",
            "chapter": "Chương 3: Mạch điện tử điều khiển đơn giản",
            "summary": "Điều khiển điện áp dùng Triac hoặc thay đổi tần số.",
            "questions": []
          },
          {
            "id": "congnghe-12-b16",
            "number": 16,
            "title": "Bài 16: Thực hành: Mạch điều khiển tốc độ động cơ một pha",
            "chapter": "Chương 3: Mạch điện tử điều khiển đơn giản",
            "summary": "Lắp ráp và thử nghiệm mạch điều chỉnh tốc độ quạt.",
            "questions": []
          },
          {
            "id": "congnghe-12-b17",
            "number": 17,
            "title": "Bài 17: Khái niệm về hệ thống thông tin và viễn thông",
            "chapter": "Chương 4: Một số thiết bị điện tử dân dụng",
            "summary": "Khối phát, kênh truyền và khối thu thông tin.",
            "questions": []
          },
          {
            "id": "congnghe-12-b18",
            "number": 18,
            "title": "Bài 18: Máy tăng âm",
            "chapter": "Chương 4: Một số thiết bị điện tử dân dụng",
            "summary": "Sơ đồ khối khuếch đại âm tần và nguyên lí hoạt động.",
            "questions": []
          },
          {
            "id": "congnghe-12-b19",
            "number": 19,
            "title": "Bài 19: Máy thu thanh",
            "chapter": "Chương 4: Một số thiết bị điện tử dân dụng",
            "summary": "Điều chế AM/FM và nguyên lí thu sóng vô tuyến.",
            "questions": []
          },
          {
            "id": "congnghe-12-b20",
            "number": 20,
            "title": "Bài 20: Máy thu hình",
            "chapter": "Chương 4: Một số thiết bị điện tử dân dụng",
            "summary": "Tín hiệu hình, tiếng và công nghệ màn hình LCD/OLED.",
            "questions": []
          },
          {
            "id": "congnghe-12-b21",
            "number": 21,
            "title": "Bài 21: Thực hành: Mạch khuếch đại âm tần",
            "chapter": "Chương 4: Một số thiết bị điện tử dân dụng",
            "summary": "Kiểm tra và vận hành mạch khuếch đại âm thanh.",
            "questions": []
          },
          {
            "id": "congnghe-12-b22",
            "number": 22,
            "title": "Bài 22: Hệ thống điện quốc gia",
            "chapter": "Chương 5: Mạch điện xoay chiều ba pha",
            "summary": "Nguồn điện, lưới điện truyền tải cao áp và hộ tiêu thụ.",
            "questions": []
          },
          {
            "id": "congnghe-12-b23",
            "number": 23,
            "title": "Bài 23: Mạch điện xoay chiều ba pha",
            "chapter": "Chương 5: Mạch điện xoay chiều ba pha",
            "summary": "Cách nối hình sao (Y) và hình tam giác (Δ); Ud = √3 Up (nối sao).",
            "questions": []
          },
          {
            "id": "congnghe-12-b24",
            "number": 24,
            "title": "Bài 24: Thực hành: Nối tải ba pha hình sao và hình tam giác",
            "chapter": "Chương 5: Mạch điện xoay chiều ba pha",
            "summary": "Đo điện áp dây và điện áp pha.",
            "questions": []
          },
          {
            "id": "congnghe-12-b25",
            "number": 25,
            "title": "Bài 25: Máy điện xoay chiều ba pha – Máy biến áp ba pha",
            "chapter": "Chương 6: Máy điện ba pha",
            "summary": "Cấu tạo, nguyên lí và hệ số biến áp ba pha.",
            "questions": []
          },
          {
            "id": "congnghe-12-b26",
            "number": 26,
            "title": "Bài 26: Động cơ không đồng bộ ba pha",
            "chapter": "Chương 6: Máy điện ba pha",
            "summary": "Từ trường quay, hệ số trượt s và mở máy động cơ.",
            "questions": []
          },
          {
            "id": "congnghe-12-b27",
            "number": 27,
            "title": "Bài 27: Thực hành: Tìm hiểu động cơ không đồng bộ ba pha",
            "chapter": "Chương 6: Máy điện ba pha",
            "summary": "Đọc nhãn thông số và đấu dây sao/tam giác.",
            "questions": []
          },
          {
            "id": "congnghe-12-b28",
            "number": 28,
            "title": "Bài 28: Mạng điện hạ thế dùng trong sinh hoạt",
            "chapter": "Chương 7: Mạng điện hạ thế",
            "summary": "Cấu trúc tủ phân phối tổng, dây pha, dây trung tính và dây nối đất.",
            "questions": []
          },
          {
            "id": "congnghe-12-b29",
            "number": 29,
            "title": "Bài 29: An toàn điện",
            "chapter": "Chương 7: Mạng điện hạ thế",
            "summary": "Biện pháp phòng tránh điện giật, aptomat chống giật (ELCB/RCBO) và sơ cứu.",
            "questions": []
          },
          {
            "id": "congnghe-12-b30",
            "number": 30,
            "title": "Bài 30: Thực hành: Khám phá thông số thiết bị đóng cắt trong gia đình",
            "chapter": "Chương 7: Mạng điện hạ thế",
            "summary": "Kiểm tra thông số MCB, ổ cắm, dây dẫn.",
            "questions": []
          },
          {
            "id": "congnghe-12-b31",
            "number": 31,
            "title": "Bài 31: Thiết kế mạng điện trong nhà",
            "chapter": "Chương 7: Mạng điện hạ thế",
            "summary": "Tính chọn tiết diện dây dẫn và thiết bị bảo vệ cho gia đình.",
            "questions": []
          }
        ]
      },
      {
        "id": "tienganh-12",
        "name": "Tiếng Anh (Global Success)",
        "icon": "🇬🇧",
        "lessons": [
          {
            "id": "tienganh-12-b1",
            "number": 1,
            "title": "Unit 1: Life Stories We Admire",
            "chapter": "Unit 1: Life Stories We Admire",
            "summary": "Past Simple vs. Past Continuous.",
            "questions": []
          },
          {
            "id": "tienganh-12-b2",
            "number": 2,
            "title": "Unit 2: A Multicultural World",
            "chapter": "Unit 2: A Multicultural World",
            "summary": "Articles (a, an, the, zero article).",
            "questions": []
          },
          {
            "id": "tienganh-12-b3",
            "number": 3,
            "title": "Unit 3: Green Living",
            "chapter": "Unit 3: Green Living",
            "summary": "Verbs with prepositions & Relative clauses referring to a whole sentence.",
            "questions": []
          },
          {
            "id": "tienganh-12-b4",
            "number": 4,
            "title": "Unit 4: Urbanisation",
            "chapter": "Unit 4: Urbanisation",
            "summary": "Present Perfect & Double comparatives.",
            "questions": []
          },
          {
            "id": "tienganh-12-b5",
            "number": 5,
            "title": "Unit 5: The World of Work",
            "chapter": "Unit 5: The World of Work",
            "summary": "Simple, compound, and complex sentences.",
            "questions": []
          },
          {
            "id": "tienganh-12-b6",
            "number": 6,
            "title": "Unit 6: Artificial Intelligence",
            "chapter": "Unit 6: Artificial Intelligence",
            "summary": "Active and passive causatives.",
            "questions": []
          },
          {
            "id": "tienganh-12-b7",
            "number": 7,
            "title": "Unit 7: The World of Mass Media",
            "chapter": "Unit 7: The World of Mass Media",
            "summary": "Adverbial clauses of manner and result.",
            "questions": []
          },
          {
            "id": "tienganh-12-b8",
            "number": 8,
            "title": "Unit 8: Wildlife Conservation",
            "chapter": "Unit 8: Wildlife Conservation",
            "summary": "Adverbial clauses of condition and comparison.",
            "questions": []
          },
          {
            "id": "tienganh-12-b9",
            "number": 9,
            "title": "Unit 9: Career Paths",
            "chapter": "Unit 9: Career Paths",
            "summary": "Three-word phrasal verbs.",
            "questions": []
          },
          {
            "id": "tienganh-12-b10",
            "number": 10,
            "title": "Unit 10: Lifelong Learning",
            "chapter": "Unit 10: Lifelong Learning",
            "summary": "Reported speech: orders, requests, offers, and advice.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-lamthuy-12",
        "name": "Công nghệ (Lâm nghiệp – Thủy sản)",
        "icon": "🌲",
        "lessons": [
          {
            "id": "congnghe-lamthuy-12-b1",
            "number": 1,
            "title": "Bài 1: Vai trò và triển vọng của lâm nghiệp",
            "chapter": "Chương 1: Giới thiệu chung về lâm nghiệp",
            "summary": "Vai trò kinh tế, sinh thái, phòng hộ và triển vọng ngành lâm nghiệp.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b2",
            "number": 2,
            "title": "Bài 2: Các hoạt động lâm nghiệp cơ bản và nguyên nhân suy thoái rừng",
            "chapter": "Chương 1: Giới thiệu chung về lâm nghiệp",
            "summary": "Lâm sinh, khai thác, chế biến và nguyên nhân mất rừng.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b3",
            "number": 3,
            "title": "Bài 3: Vai trò, nhiệm vụ của trồng và chăm sóc rừng",
            "chapter": "Chương 2: Trồng và chăm sóc rừng",
            "summary": "Phủ xanh đất trống đồi trọc và nâng cao năng suất rừng.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b4",
            "number": 4,
            "title": "Bài 4: Quy luật sinh trưởng và phát triển của cây rừng",
            "chapter": "Chương 2: Trồng và chăm sóc rừng",
            "summary": "Các giai đoạn phát triển từ cây mầm đến thành thục.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b5",
            "number": 5,
            "title": "Bài 5: Kĩ thuật trồng và chăm sóc rừng",
            "chapter": "Chương 2: Trồng và chăm sóc rừng",
            "summary": "Làm đất, trồng cây, làm cỏ, bón phân và tỉa thưa.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b6",
            "number": 6,
            "title": "Bài 6: Ý nghĩa, nhiệm vụ, thực trạng bảo vệ và khai thác rừng",
            "chapter": "Chương 3: Bảo vệ và khai thác tài nguyên rừng bền vững",
            "summary": "Thực trạng rừng tự nhiên, rừng trồng và bảo tồn đa dạng sinh học.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b7",
            "number": 7,
            "title": "Bài 7: Biện pháp bảo vệ và khai thác tài nguyên rừng",
            "chapter": "Chương 3: Bảo vệ và khai thác tài nguyên rừng bền vững",
            "summary": "Phòng cháy chữa cháy rừng, khai thác chọn và chứng chỉ FSC.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b8",
            "number": 8,
            "title": "Bài 8: Vai trò và triển vọng của thủy sản",
            "chapter": "Chương 4: Giới thiệu chung về thủy sản",
            "summary": "Xuất khẩu thủy sản, an ninh lương thực và nuôi biển công nghệ cao.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b9",
            "number": 9,
            "title": "Bài 9: Các nhóm thủy sản và phương thức nuôi phổ biến",
            "chapter": "Chương 4: Giới thiệu chung về thủy sản",
            "summary": "Nuôi quảng canh, bán thâm canh, thâm canh và siêu thâm canh.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b10",
            "number": 10,
            "title": "Bài 10: Giới thiệu về môi trường nuôi thủy sản",
            "chapter": "Chương 5: Môi trường nuôi thủy sản",
            "summary": "Các chỉ số pH, nhiệt độ, độ mặn, oxy hòa tan (DO), NH3.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b11",
            "number": 11,
            "title": "Bài 11: Quản lí môi trường nuôi thủy sản",
            "chapter": "Chương 5: Môi trường nuôi thủy sản",
            "summary": "Đo đạc, theo dõi chất lượng nước ao nuôi.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b12",
            "number": 12,
            "title": "Bài 12: Biện pháp xử lí môi trường nuôi thủy sản",
            "chapter": "Chương 5: Môi trường nuôi thủy sản",
            "summary": "Sục khí, dùng chế phẩm sinh học (EM), xử lí bùn đáy.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b13",
            "number": 13,
            "title": "Bài 13: Vai trò của giống thủy sản",
            "chapter": "Chương 6: Công nghệ giống thủy sản",
            "summary": "Chất lượng con giống quyết định năng suất và tỉ lệ sống.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b14",
            "number": 14,
            "title": "Bài 14: Sinh sản của cá và tôm",
            "chapter": "Chương 6: Công nghệ giống thủy sản",
            "summary": "Sinh sản nhân tạo cá và quy trình ươm nuôi ấu trùng tôm.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b15",
            "number": 15,
            "title": "Bài 15: Ứng dụng công nghệ sinh học trong chọn và nhân giống thủy sản",
            "chapter": "Chương 6: Công nghệ giống thủy sản",
            "summary": "Chọn giống bằng chỉ thị phân tử và sản xuất giống đơn tính.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b16",
            "number": 16,
            "title": "Bài 16: Thức ăn thủy sản",
            "chapter": "Chương 7: Công nghệ thức ăn thủy sản",
            "summary": "Thức ăn tự nhiên và thức ăn công nghiệp dạng viên nổi/chìm.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b17",
            "number": 17,
            "title": "Bài 17: Phương pháp bảo quản và chế biến thức ăn thủy sản",
            "chapter": "Chương 7: Công nghệ thức ăn thủy sản",
            "summary": "Bảo quản thức ăn chống ẩm mốc và phối trộn hợp lí.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b18",
            "number": 18,
            "title": "Bài 18: Ứng dụng công nghệ sinh học trong chế biến thức ăn thủy sản",
            "chapter": "Chương 7: Công nghệ thức ăn thủy sản",
            "summary": "Bổ sung enzyme, probiotic nâng cao khả năng tiêu hóa.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b19",
            "number": 19,
            "title": "Bài 19: Công nghệ nuôi một số loài thủy sản phổ biến ở Việt Nam",
            "chapter": "Chương 8: Công nghệ nuôi thủy sản",
            "summary": "Quy trình nuôi tôm thẻ chân trắng, cá tra, ngao.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b20",
            "number": 20,
            "title": "Bài 20: Nuôi thủy sản theo tiêu chuẩn VietGAP",
            "chapter": "Chương 8: Công nghệ nuôi thủy sản",
            "summary": "Đảm bảo an toàn vệ sinh, không tồn dư kháng sinh.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b21",
            "number": 21,
            "title": "Bài 21: Một số ứng dụng công nghệ cao trong nuôi thủy sản",
            "chapter": "Chương 8: Công nghệ nuôi thủy sản",
            "summary": "Công nghệ Biofloc, tuần hoàn RAS và IoT giám sát ao nuôi.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b22",
            "number": 22,
            "title": "Bài 22: Bảo quản và chế biến sản phẩm thủy sản",
            "chapter": "Chương 8: Công nghệ nuôi thủy sản",
            "summary": "Cấp đông nhanh (IQF), chế biến phi lê và đồ hộp.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b23",
            "number": 23,
            "title": "Bài 23: Vai trò của phòng, trị bệnh thủy sản",
            "chapter": "Chương 9: Phòng, trị bệnh thủy sản",
            "summary": "Quản lí sức khỏe thủy sản và giảm thiệt hại dịch bệnh.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b24",
            "number": 24,
            "title": "Bài 24: Một số bệnh thủy sản phổ biến và biện pháp phòng, trị",
            "chapter": "Chương 9: Phòng, trị bệnh thủy sản",
            "summary": "Bệnh đốm trắng, hoại tử gan tụy ở tôm; xuất huyết ở cá.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b25",
            "number": 25,
            "title": "Bài 25: Ứng dụng công nghệ sinh học trong phòng, trị bệnh thủy sản",
            "chapter": "Chương 9: Phòng, trị bệnh thủy sản",
            "summary": "Kit chẩn đoán nhanh, vaccine cho cá và chế phẩm sinh học.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b26",
            "number": 26,
            "title": "Bài 26: Bảo vệ nguồn lợi thủy sản",
            "chapter": "Chương 10: Bảo vệ và khai thác nguồn lợi thủy sản",
            "summary": "Chống đánh bắt hủy diệt, bảo vệ khu bảo tồn biển và mùa sinh sản.",
            "questions": []
          },
          {
            "id": "congnghe-lamthuy-12-b27",
            "number": 27,
            "title": "Bài 27: Khai thác nguồn lợi thủy sản bền vững",
            "chapter": "Chương 10: Bảo vệ và khai thác nguồn lợi thủy sản",
            "summary": "Chống khai thác IUU, truy xuất nguồn gốc và khai thác xa bờ.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdqp-12",
        "name": "Giáo dục quốc phòng và an ninh",
        "icon": "🛡️",
        "lessons": [
          {
            "id": "gdqp-12-b1",
            "number": 1,
            "title": "Bài 1: Bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa sau năm 1975",
            "chapter": "Phần kiến thức chung",
            "summary": "Lịch sử cuộc chiến đấu bảo vệ biên giới Tây Nam, biên giới phía Bắc và biển đảo.",
            "questions": []
          },
          {
            "id": "gdqp-12-b2",
            "number": 2,
            "title": "Bài 2: Tổ chức Quân đội nhân dân và Công an nhân dân Việt Nam",
            "chapter": "Phần kiến thức chung",
            "summary": "Hệ thống tổ chức, quân binh chủng và lực lượng Công an nhân dân.",
            "questions": []
          },
          {
            "id": "gdqp-12-b3",
            "number": 3,
            "title": "Bài 3: Công tác tuyển sinh, đào tạo trong các trường Quân đội và Công an",
            "chapter": "Phần kiến thức chung",
            "summary": "Điều kiện, tiêu chuẩn dự tuyển vào các học viện, nhà trường quân đội, công an.",
            "questions": []
          },
          {
            "id": "gdqp-12-b4",
            "number": 4,
            "title": "Bài 4: Phòng chống chiến lược 'diễn biến hòa bình', bạo loạn lật đổ",
            "chapter": "Phần kiến thức chung",
            "summary": "Nhận diện âm mưu thủ đoạn và trách nhiệm bảo vệ nền tảng tư tưởng.",
            "questions": []
          },
          {
            "id": "gdqp-12-b5",
            "number": 5,
            "title": "Bài 5: Truyền thống và nghệ thuật đánh giặc giữ nước của địa phương",
            "chapter": "Phần kiến thức chung",
            "summary": "Đặc trưng nghệ thuật quân sự nhân dân và truyền thống địa phương.",
            "questions": []
          },
          {
            "id": "gdqp-12-b6",
            "number": 6,
            "title": "Bài 6: Kĩ thuật bắn súng tiểu liên AK (Nâng cao)",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Luyện tập ngắm bắn mục tiêu cố định và xử lí tình huống bắn.",
            "questions": []
          },
          {
            "id": "gdqp-12-b7",
            "number": 7,
            "title": "Bài 7: Tìm và giữ phương hướng",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Sử dụng địa bàn, bản đồ, mặt trời, sao Bắc Đẩu xác định phương hướng.",
            "questions": []
          },
          {
            "id": "gdqp-12-b8",
            "number": 8,
            "title": "Bài 8: Vận dụng các tư thế, động tác cơ bản vận động trong chiến đấu",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Lựa chọn tư thế vận động phù hợp địa hình, địa vật.",
            "questions": []
          },
          {
            "id": "gdqp-12-b9",
            "number": 9,
            "title": "Bài 9: Chạy vũ trang",
            "chapter": "Phần kĩ thuật quân sự",
            "summary": "Kĩ thuật mang vác vũ khí và chạy bền rèn luyện thể lực quân sự.",
            "questions": []
          }
        ]
      },
      {
        "id": "gdtc-12",
        "name": "Giáo dục thể chất",
        "icon": "🏃",
        "lessons": [
          {
            "id": "gdtc-12-b1",
            "number": 1,
            "title": "Định hướng nghề thể thao và duy trì lối sống năng động",
            "chapter": "Phần 1: Kiến thức chung",
            "summary": "Các ngành nghề thể dục thể thao và duy trì tập luyện suốt đời.",
            "questions": []
          },
          {
            "id": "gdtc-12-b2",
            "number": 2,
            "title": "Bóng đá 12: Hoàn thiện kĩ chiến thuật thi đấu",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Tổ chức đội hình 7 người, 11 người và luật thi đấu bóng đá.",
            "questions": []
          },
          {
            "id": "gdtc-12-b3",
            "number": 3,
            "title": "Bóng chuyền 12: Hoàn thiện kĩ chiến thuật thi đấu",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Phối hợp tấn công nhanh, phòng thủ hàng sau và trọng tài.",
            "questions": []
          },
          {
            "id": "gdtc-12-b4",
            "number": 4,
            "title": "Bóng rổ 12: Hoàn thiện kĩ chiến thuật thi đấu",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Phản công nhanh, kèm người toàn sân và luật thi đấu.",
            "questions": []
          },
          {
            "id": "gdtc-12-b5",
            "number": 5,
            "title": "Cầu lông 12: Hoàn thiện kĩ chiến thuật đánh đơn, đánh đôi",
            "chapter": "Phần 2: Thể thao tự chọn",
            "summary": "Chiến thuật điều cầu, tấn công và luật thi đấu cầu lông.",
            "questions": []
          }
        ]
      },
      {
        "id": "hdtn-12",
        "name": "Hoạt động trải nghiệm, hướng nghiệp",
        "icon": "🌟",
        "lessons": [
          {
            "id": "hdtn-12-b1",
            "number": 1,
            "title": "Chủ đề 1: Phát triển các mối quan hệ tốt đẹp với thầy cô và bạn bè",
            "chapter": "Chủ đề 1: Phát triển quan hệ tốt đẹp",
            "summary": "Gìn giữ kỉ niệm tuổi học trò và kĩ năng hợp tác trưởng thành.",
            "questions": []
          },
          {
            "id": "hdtn-12-b2",
            "number": 2,
            "title": "Chủ đề 2–3: Tôi trưởng thành và hoàn thiện bản thân",
            "chapter": "Chủ đề 2–3: Tôi trưởng thành",
            "summary": "Tư duy phản biện, trách nhiệm công dân và bản lĩnh vượt áp lực.",
            "questions": []
          },
          {
            "id": "hdtn-12-b3",
            "number": 3,
            "title": "Chủ đề 4: Trách nhiệm với gia đình và tự lập tài chính",
            "chapter": "Chủ đề 4: Trách nhiệm với gia đình",
            "summary": "Chuẩn bị tâm thế tự lập khi bước vào đại học hoặc đi làm.",
            "questions": []
          },
          {
            "id": "hdtn-12-b4",
            "number": 4,
            "title": "Chủ đề 5: Tổ chức hoạt động tình nguyện và công dân số",
            "chapter": "Chủ đề 5: Tham gia phát triển cộng đồng",
            "summary": "Ứng xử có trách nhiệm trong cộng đồng và xã hội số.",
            "questions": []
          },
          {
            "id": "hdtn-12-b5",
            "number": 5,
            "title": "Chủ đề 6: Hành động vì phát triển bền vững",
            "chapter": "Chủ đề 6: Bảo vệ môi trường",
            "summary": "Thực hiện sáng kiến bảo vệ tài nguyên và môi trường.",
            "questions": []
          },
          {
            "id": "hdtn-12-b6",
            "number": 6,
            "title": "Chủ đề 7: Tìm hiểu hệ thống đào tạo đại học, cao đẳng, nghề nghiệp",
            "chapter": "Chủ đề 7: Tư vấn tuyển sinh và chọn nghề",
            "summary": "Phân tích chỉ tiêu tuyển sinh, cơ hội việc làm và xu hướng ngành nghề.",
            "questions": []
          },
          {
            "id": "hdtn-12-b7",
            "number": 7,
            "title": "Chủ đề 8: Hoàn thiện hồ sơ định hướng nghề nghiệp tương lai",
            "chapter": "Chủ đề 8: Hồ sơ và quyết định nghề nghiệp",
            "summary": "Xây dựng CV, kế hoạch học tập đại học hoặc gia nhập thị trường lao động.",
            "questions": []
          }
        ]
      }
    ]
  }
];

function shuffleOptions(q: QuestionInput): QuestionInput {
  const letters = ["A", "B", "C", "D"] as const;
  const entries = [
    { text: q.option_a, isCorrect: q.correct === "A" },
    { text: q.option_b, isCorrect: q.correct === "B" },
    { text: q.option_c, isCorrect: q.correct === "C" },
    { text: q.option_d, isCorrect: q.correct === "D" },
  ];
  for (let i = entries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [entries[i], entries[j]] = [entries[j], entries[i]];
  }
  const correctIdx = entries.findIndex((e) => e.isCorrect);
  return {
    content: q.content,
    option_a: entries[0].text,
    option_b: entries[1].text,
    option_c: entries[2].text,
    option_d: entries[3].text,
    correct: letters[correctIdx >= 0 ? correctIdx : 0],
  };
}

/**
 * Tạo bộ câu hỏi dự phòng offline từ ngân hàng câu hỏi mẫu và tóm tắt kiến thức chuẩn SGK.
 * Để có bộ đề phong phú, phân hóa theo ma trận và bám sát 100% nội dung bài học, hãy dùng nút "Tạo Đề Bằng AI Gemini".
 */
export function generateQuestionsForLessons(
  grade: number,
  subjectId: string,
  lessonIds: string[],
  desiredCount = 10
): { title: string; questions: QuestionInput[] } {
  const gradeObj = GRADES_DATA.find((g) => g.grade === grade);
  const subjectObj = gradeObj?.subjects.find((s) => s.id === subjectId);
  if (!gradeObj || !subjectObj) {
    return { title: "Bộ đề mới", questions: [] };
  }

  const chosenLessons = subjectObj.lessons.filter((l) => lessonIds.includes(l.id));
  const lessonsToUse = chosenLessons.length > 0 ? chosenLessons : subjectObj.lessons.slice(0, 3);

  const pool: QuestionInput[] = [];
  for (const lesson of lessonsToUse) {
    for (const q of lesson.questions) {
      pool.push(shuffleOptions(q));
    }
  }

  // Nếu số câu mẫu ít hơn desiredCount, bổ sung câu hỏi ôn tập bám sát summary thực tế của bài học
  const otherLessons = subjectObj.lessons.filter((l) => !lessonsToUse.some((cl) => cl.id === l.id));
  let idx = 0;
  while (pool.length < desiredCount && lessonsToUse.length > 0) {
    const target = lessonsToUse[idx % lessonsToUse.length];
    const candidatePool = [...otherLessons, ...lessonsToUse.filter((l) => l.id !== target.id)]
      .filter((l) => l.summary && l.summary.trim().length > 0 && l.summary !== target.summary);
    const distractors: LessonItem[] = [];
    for (let k = 0; k < candidatePool.length && distractors.length < 3; k++) {
      const picked = candidatePool[(idx * 3 + k) % candidatePool.length];
      if (!distractors.some((d) => d.id === picked.id)) {
        distractors.push(picked);
      }
    }

    if (target.summary && distractors.length >= 3) {
      const q = shuffleOptions({
        content: `Nội dung trọng tâm nào sau đây thuộc "${target.title}" (${subjectObj.name} ${gradeObj.label})?`,
        option_a: target.summary,
        option_b: distractors[0].summary!,
        option_c: distractors[1].summary!,
        option_d: distractors[2].summary!,
        correct: "A",
      });
      pool.push(q);
    } else {
      break;
    }
    idx++;
    if (idx > desiredCount * 2) break;
  }

  const shortTitle =
    lessonsToUse.length === 1
      ? `${subjectObj.name} ${grade} - ${lessonsToUse[0].title}`
      : `${subjectObj.name} ${grade} (${lessonsToUse.length} bài: ${lessonsToUse
          .slice(0, 2)
          .map((l) => `Bài ${l.number}`)
          .join(", ")}${lessonsToUse.length > 2 ? "..." : ""})`;

  return {
    title: shortTitle,
    questions: pool.slice(0, desiredCount),
  };
}

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
              },
              {
                "content": "Có 5 quả táo trên đĩa, không còn quả nào là số mấy?",
                "option_a": "Số 1",
                "option_b": "Số 5",
                "option_c": "Số 0",
                "option_d": "Số 2",
                "correct": "C"
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
            "summary": "Sử dụng các dấu >, <, = để so sánh hai số trong phạm vi 10.",
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
            "summary": "Tách, gộp các số trong phạm vi 10 (ví dụ: 5 gồm 2 và 3).",
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
            "questions": [
              {
                "content": "Kết quả của phép tính 9 - 4 là:",
                "option_a": "4",
                "option_b": "6",
                "option_c": "5",
                "option_d": "3",
                "correct": "C"
              }
            ]
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
            "summary": "Tính nhẩm và giải bài toán có lời văn trong phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b14",
            "number": 14,
            "title": "Bài 14: Khối lập phương, khối hộp chữ nhật",
            "chapter": "Chủ đề 4: Làm quen với một số hình khối",
            "summary": "Nhận dạng khối lập phương (6 mặt vuông) và khối hộp chữ nhật.",
            "questions": []
          },
          {
            "id": "toan-1-b15",
            "number": 15,
            "title": "Bài 15: Vị trí, định hướng trong không gian",
            "chapter": "Chủ đề 4: Làm quen với một số hình khối",
            "summary": "Xác định vị trí trên - dưới, trước - sau, trái - phải, ở giữa.",
            "questions": []
          },
          {
            "id": "toan-1-b16",
            "number": 16,
            "title": "Bài 16: Luyện tập chung",
            "chapter": "Chủ đề 4: Làm quen với một số hình khối",
            "summary": "Ôn tập hình khối và định hướng không gian.",
            "questions": []
          },
          {
            "id": "toan-1-b17",
            "number": 17,
            "title": "Bài 17: Ôn tập các số trong phạm vi 10",
            "chapter": "Chủ đề 5: Ôn tập học kì 1",
            "summary": "Ôn tập đọc, viết, so sánh số từ 0 đến 10.",
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
            "summary": "Tổng hợp kiến thức học kì 1 Toán 1.",
            "questions": []
          },
          {
            "id": "toan-1-b21",
            "number": 21,
            "title": "Bài 21: Số có hai chữ số",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "Cấu tạo thập phân của số có hai chữ số: hàng chục và hàng đơn vị.",
            "questions": [
              {
                "content": "Số 47 gồm mấy chục và mấy đơn vị?",
                "option_a": "7 chục và 4 đơn vị",
                "option_b": "4 chục và 7 đơn vị",
                "option_c": "40 chục và 7 đơn vị",
                "option_d": "4 chục và 70 đơn vị",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-1-b22",
            "number": 22,
            "title": "Bài 22: So sánh số có hai chữ số",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "So sánh hàng chục trước, rồi đến hàng đơn vị.",
            "questions": []
          },
          {
            "id": "toan-1-b23",
            "number": 23,
            "title": "Bài 23: Bảng các số từ 1 đến 100",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "Nhận biết quy luật sắp xếp các số từ 1 đến 100.",
            "questions": []
          },
          {
            "id": "toan-1-b24",
            "number": 24,
            "title": "Bài 24: Luyện tập chung",
            "chapter": "Chủ đề 6: Các số đến 100",
            "summary": "Củng cố kiến thức số có hai chữ số.",
            "questions": []
          },
          {
            "id": "toan-1-b25",
            "number": 25,
            "title": "Bài 25: Dài hơn, ngắn hơn",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "So sánh trực tiếp độ dài của hai vật.",
            "questions": []
          },
          {
            "id": "toan-1-b26",
            "number": 26,
            "title": "Bài 26: Đơn vị đo độ dài",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "Làm quen đơn vị đo độ dài xăng-ti-mét (cm).",
            "questions": []
          },
          {
            "id": "toan-1-b27",
            "number": 27,
            "title": "Bài 27: Thực hành ước lượng và đo độ dài",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "Dùng thước có vạch chia cm để đo độ dài đồ vật.",
            "questions": []
          },
          {
            "id": "toan-1-b28",
            "number": 28,
            "title": "Bài 28: Luyện tập chung",
            "chapter": "Chủ đề 7: Độ dài và đo độ dài",
            "summary": "Ôn tập đo độ dài và tính toán với đơn vị cm.",
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
            "summary": "Đặt tính theo cột dọc cộng hàng đơn vị rồi hàng chục.",
            "questions": [
              {
                "content": "Kết quả của phép tính 24 + 35 là:",
                "option_a": "58",
                "option_b": "69",
                "option_c": "59",
                "option_d": "49",
                "correct": "C"
              }
            ]
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
            "summary": "Thực hiện phép trừ không nhớ trong phạm vi 100.",
            "questions": [
              {
                "content": "Kết quả của phép tính 68 - 25 là:",
                "option_a": "43",
                "option_b": "42",
                "option_c": "33",
                "option_d": "53",
                "correct": "A"
              }
            ]
          },
          {
            "id": "toan-1-b33",
            "number": 33,
            "title": "Bài 33: Luyện tập chung",
            "chapter": "Chủ đề 8: Phép cộng, phép trừ (không nhớ) trong phạm vi 100",
            "summary": "Giải bài toán thực tế bằng phép cộng, trừ trong phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-1-b34",
            "number": 34,
            "title": "Bài 34: Xem giờ đúng trên đồng hồ",
            "chapter": "Chủ đề 9: Thời gian, giờ và lịch",
            "summary": "Kim ngắn chỉ giờ, kim dài chỉ số 12 là giờ đúng.",
            "questions": []
          },
          {
            "id": "toan-1-b35",
            "number": 35,
            "title": "Bài 35: Các ngày trong tuần",
            "chapter": "Chủ đề 9: Thời gian, giờ và lịch",
            "summary": "Nhận biết 7 ngày trong một tuần lễ từ Thứ Hai đến Chủ Nhật.",
            "questions": []
          },
          {
            "id": "toan-1-b36",
            "number": 36,
            "title": "Bài 36: Thực hành xem lịch và giờ",
            "chapter": "Chủ đề 9: Thời gian, giờ và lịch",
            "summary": "Đọc tờ lịch ngày và đồng hồ kim.",
            "questions": []
          },
          {
            "id": "toan-1-b37",
            "number": 37,
            "title": "Bài 37: Luyện tập chung",
            "chapter": "Chủ đề 9: Thời gian, giờ và lịch",
            "summary": "Ôn tập xem giờ và lịch.",
            "questions": []
          },
          {
            "id": "toan-1-b38",
            "number": 38,
            "title": "Bài 38: Ôn tập các số và phép tính trong phạm vi 10",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Ôn tập cuối năm phạm vi 10.",
            "questions": []
          },
          {
            "id": "toan-1-b39",
            "number": 39,
            "title": "Bài 39: Ôn tập các số và phép tính trong phạm vi 100",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Ôn tập cộng trừ không nhớ đến 100.",
            "questions": []
          },
          {
            "id": "toan-1-b40",
            "number": 40,
            "title": "Bài 40: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Ôn tập hình phẳng, hình khối, cm, xem giờ.",
            "questions": []
          },
          {
            "id": "toan-1-b41",
            "number": 41,
            "title": "Bài 41: Ôn tập chung",
            "chapter": "Chủ đề 10: Ôn tập cuối năm",
            "summary": "Tổng hợp kiến thức cả năm Toán 1.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-1",
        "name": "Tiếng Việt",
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-1-b1",
            "number": 1,
            "title": "Bài 1: Làm quen với chữ a, b, c, e, ê",
            "chapter": "Tập 1 - Phần Học vần",
            "summary": "Nhận diện âm và chữ cái đầu tiên, ghép tiếng đơn giản (ba, bé, bê, cá).",
            "questions": [
              {
                "content": "Trong các tiếng sau, tiếng nào có âm 'b' và âm 'a'?",
                "option_a": "cá",
                "option_b": "ba",
                "option_c": "be",
                "option_d": "cê",
                "correct": "B"
              }
            ]
          },
          {
            "id": "tiengviet-1-b2",
            "number": 2,
            "title": "Bài 2: Thanh huyền, thanh sắc, thanh hỏi, thanh ngã, thanh nặng",
            "chapter": "Tập 1 - Phần Học vần",
            "summary": "Phân biệt và đọc đúng 6 thanh điệu trong tiếng Việt.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b3",
            "number": 3,
            "title": "Bài 3: Âm ghép ch, gh, kh, ng, ngh, nh, ph, qu, th, tr",
            "chapter": "Tập 1 - Phần Học vần",
            "summary": "Quy tắc chính tả g/gh, ng/ngh, c/k/q.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b4",
            "number": 4,
            "title": "Bài 4: Vần có âm cuối n, m, t, p, c, ch, ng, nh",
            "chapter": "Tập 1 - Phần Học vần",
            "summary": "Ghép vần an, ăn, ân, on, ôn, ơn, am, ăm, âm, ang, ăng...",
            "questions": []
          },
          {
            "id": "tiengviet-1-b5",
            "number": 5,
            "title": "Bài 5: Vần có âm đệm u, o (oa, oe, uy, uê, uơ)",
            "chapter": "Tập 1 - Phần Học vần",
            "summary": "Đọc đúng các vần có âm đệm và luyện viết câu.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b6",
            "number": 6,
            "title": "Bài 1: Tôi là học sinh lớp 1",
            "chapter": "Tập 2 - Chủ đề 1: Tôi và các bạn",
            "summary": "Cảm xúc tự hào và bỡ ngỡ ngày đầu vào lớp 1.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b7",
            "number": 7,
            "title": "Bài 2: Đôi bạn",
            "chapter": "Tập 2 - Chủ đề 1: Tôi và các bạn",
            "summary": "Tình bạn đẹp giữa Búp Bê và Dế Mèn, giúp đỡ nhau trong học tập.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b8",
            "number": 8,
            "title": "Bài 3: Tớ nhớ cậu",
            "chapter": "Tập 2 - Chủ đề 1: Tôi và các bạn",
            "summary": "Nỗi nhớ bạn thân khi chuyển nhà và tình cảm gắn bó.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b9",
            "number": 9,
            "title": "Bài 4: Cả nhà đi chơi núi",
            "chapter": "Tập 2 - Chủ đề 2: Mái ấm gia đình",
            "summary": "Niềm vui của gia đình khi cùng nhau leo núi, ngắm cảnh thiên nhiên.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b10",
            "number": 10,
            "title": "Bài 5: Quạt cho bà ngủ",
            "chapter": "Tập 2 - Chủ đề 2: Mái ấm gia đình",
            "summary": "Tình yêu thương, hiếu thảo của bạn nhỏ dành cho bà đang ốm.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b11",
            "number": 11,
            "title": "Bài 6: Rửa tay trước khi ăn",
            "chapter": "Tập 2 - Chủ đề 3: Thiên nhiên kì thú",
            "summary": "Thói quen giữ vệ sinh cá nhân, phòng chống bệnh tật.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b12",
            "number": 12,
            "title": "Bài 7: Hoa cúc áo",
            "chapter": "Tập 2 - Chủ đề 3: Thiên nhiên kì thú",
            "summary": "Vẻ đẹp giản dị của loài hoa dại và thiên nhiên quanh ta.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b13",
            "number": 13,
            "title": "Bài 8: Loài chim của biển cả",
            "chapter": "Tập 2 - Chủ đề 4: Thế giới quanh ta",
            "summary": "Tìm hiểu về loài chim hải âu và đời sống vùng biển.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b14",
            "number": 14,
            "title": "Bài 9: Ôn tập cuối học kì 2",
            "chapter": "Tập 2 - Chủ đề 5: Đọc mở rộng & Ôn tập cuối năm",
            "summary": "Củng cố kĩ năng đọc hiểu đoạn văn, chính tả và đặt câu.",
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
            "title": "Bài 1: Kể về gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Giới thiệu các thành viên trong gia đình và tình cảm yêu thương.",
            "questions": [
              {
                "content": "Trong gia đình, em cần làm gì để thể hiện tình yêu thương với ông bà, bố mẹ?",
                "option_a": "Lễ phép, vâng lời và giúp đỡ việc vừa sức",
                "option_b": "Chỉ chơi đùa, không quan tâm đến mọi người",
                "option_c": "Đòi hỏi mua nhiều đồ chơi đắt tiền",
                "option_d": "Cãi lời người lớn",
                "correct": "A"
              }
            ]
          },
          {
            "id": "tnxh-1-b2",
            "number": 2,
            "title": "Bài 2: Ngôi nhà của em",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Nhận biết các phòng, khu vực chính trong nhà và giữ nhà sạch sẽ.",
            "questions": []
          },
          {
            "id": "tnxh-1-b3",
            "number": 3,
            "title": "Bài 3: Đồ dùng trong nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Kể tên và công dụng của đồ dùng trong gia đình.",
            "questions": []
          },
          {
            "id": "tnxh-1-b4",
            "number": 4,
            "title": "Bài 4: An toàn khi sử dụng đồ dùng trong nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Phòng tránh nguy hiểm từ dao, kéo, ổ điện, bếp nóng.",
            "questions": [
              {
                "content": "Hành động nào sau đây giúp đảm bảo an toàn khi ở nhà?",
                "option_a": "Chạm tay ướt vào ổ cắm điện",
                "option_b": "Nghịch dao kéo sắc nhọn",
                "option_c": "Tránh xa phích nước nóng và ổ điện",
                "option_d": "Leo trèo lên lan can ban công",
                "correct": "C"
              }
            ]
          },
          {
            "id": "tnxh-1-b5",
            "number": 5,
            "title": "Bài 5: Ôn tập chủ đề Gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Hệ thống kiến thức về gia đình và an toàn tại nhà.",
            "questions": []
          },
          {
            "id": "tnxh-1-b6",
            "number": 6,
            "title": "Bài 6: Lớp học của em",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Các khu vực, đồ dùng trong lớp học và giữ gìn vệ sinh lớp.",
            "questions": []
          },
          {
            "id": "tnxh-1-b7",
            "number": 7,
            "title": "Bài 7: Cùng khám phá trường học",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Các phòng chức năng, thầy cô và nhân viên trong trường.",
            "questions": []
          },
          {
            "id": "tnxh-1-b8",
            "number": 8,
            "title": "Bài 8: Cùng vui ở trường",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Các hoạt động học tập, vui chơi an toàn và đoàn kết.",
            "questions": []
          },
          {
            "id": "tnxh-1-b9",
            "number": 9,
            "title": "Bài 9: Ôn tập chủ đề Trường học",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Tổng kết chủ đề Trường học.",
            "questions": []
          },
          {
            "id": "tnxh-1-b10",
            "number": 10,
            "title": "Bài 10: Cùng khám phá quang cảnh xung quanh",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Quan sát cảnh vật thiên nhiên và công trình nơi em sống.",
            "questions": []
          },
          {
            "id": "tnxh-1-b11",
            "number": 11,
            "title": "Bài 11: Con người nơi em sống",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Một số nghề nghiệp phổ biến và đóng góp cho cộng đồng.",
            "questions": []
          },
          {
            "id": "tnxh-1-b12",
            "number": 12,
            "title": "Bài 12: Vui đón Tết",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Phong tục, nét đẹp ngày Tết cổ truyền.",
            "questions": []
          },
          {
            "id": "tnxh-1-b13",
            "number": 13,
            "title": "Bài 13: An toàn trên đường",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Nhận biết đèn tín hiệu giao thông, vạch kẻ đường đi bộ.",
            "questions": []
          },
          {
            "id": "tnxh-1-b14",
            "number": 14,
            "title": "Bài 14: Ôn tập chủ đề Cộng đồng địa phương",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Tổng kết về cộng đồng địa phương.",
            "questions": []
          },
          {
            "id": "tnxh-1-b15",
            "number": 15,
            "title": "Bài 15: Cây xung quanh em",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Các bộ phận bên ngoài của cây (rễ, thân, lá, hoa, quả).",
            "questions": []
          },
          {
            "id": "tnxh-1-b16",
            "number": 16,
            "title": "Bài 16: Chăm sóc và bảo vệ cây trồng",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Tưới nước, nhổ cỏ, không bẻ cành hái hoa.",
            "questions": []
          },
          {
            "id": "tnxh-1-b17",
            "number": 17,
            "title": "Bài 17: Con vật quanh em",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Đặc điểm bên ngoài của một số con vật quen thuộc.",
            "questions": []
          },
          {
            "id": "tnxh-1-b18",
            "number": 18,
            "title": "Bài 18: Chăm sóc và bảo vệ vật nuôi",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Cho vật nuôi ăn uống sạch sẽ, giữ an toàn khi tiếp xúc.",
            "questions": []
          },
          {
            "id": "tnxh-1-b19",
            "number": 19,
            "title": "Bài 19: Ôn tập chủ đề Thực vật và động vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Tổng kết kiến thức thực vật và động vật.",
            "questions": []
          },
          {
            "id": "tnxh-1-b20",
            "number": 20,
            "title": "Bài 20: Cơ thể em",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Các bộ phận bên ngoài của cơ thể (đầu, mình, tay, chân).",
            "questions": []
          },
          {
            "id": "tnxh-1-b21",
            "number": 21,
            "title": "Bài 21: Các giác quan của cơ thể",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "5 giác quan: mắt, tai, mũi, lưỡi, da và cách bảo vệ.",
            "questions": [
              {
                "content": "Bộ phận nào giúp chúng ta ngửi thấy mùi hương của hoa?",
                "option_a": "Mắt",
                "option_b": "Tai",
                "option_c": "Mũi",
                "option_d": "Lưỡi",
                "correct": "C"
              }
            ]
          },
          {
            "id": "tnxh-1-b22",
            "number": 22,
            "title": "Bài 22: Ăn, uống hằng ngày",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ăn đủ bữa, uống đủ nước, giữ vệ sinh ăn uống.",
            "questions": []
          },
          {
            "id": "tnxh-1-b23",
            "number": 23,
            "title": "Bài 23: Vận động và nghỉ ngơi",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tập thể dục, ngủ đủ giấc giúp cơ thể khỏe mạnh.",
            "questions": []
          },
          {
            "id": "tnxh-1-b24",
            "number": 24,
            "title": "Bài 24: Tự bảo vệ mình",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Nhận biết vùng riêng tư trên cơ thể và biết nói 'Không'.",
            "questions": []
          },
          {
            "id": "tnxh-1-b25",
            "number": 25,
            "title": "Bài 25: Ôn tập chủ đề Con người và sức khỏe",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tổng kết chăm sóc sức khỏe.",
            "questions": []
          },
          {
            "id": "tnxh-1-b26",
            "number": 26,
            "title": "Bài 26: Cùng khám phá bầu trời",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Nhận biết bầu trời ban ngày (Mặt Trời, mây) và ban đêm (Mặt Trăng, sao).",
            "questions": []
          },
          {
            "id": "tnxh-1-b27",
            "number": 27,
            "title": "Bài 27: Thời tiết luôn thay đổi",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Phân biệt trời nắng, mưa, nhiều mây, gió và chọn trang phục phù hợp.",
            "questions": []
          },
          {
            "id": "tnxh-1-b28",
            "number": 28,
            "title": "Bài 28: Ôn tập chủ đề Trái Đất và bầu trời",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Tổng kết về bầu trời và thời tiết.",
            "questions": []
          }
        ]
      },
      {
        "id": "daoduc-1",
        "name": "Đạo đức",
        "icon": "❤️",
        "lessons": [
          {
            "id": "daoduc-1-b1",
            "number": 1,
            "title": "Bài 1: Mái ấm gia đình",
            "chapter": "Chủ đề 1: Yêu thương gia đình",
            "summary": "Nhận biết tình cảm yêu thương giữa các thành viên trong gia đình.",
            "questions": []
          },
          {
            "id": "daoduc-1-b2",
            "number": 2,
            "title": "Bài 2: Quan tâm, chăm sóc người thân",
            "chapter": "Chủ đề 1: Yêu thương gia đình",
            "summary": "Thể hiện sự quan tâm bằng lời nói, việc làm hằng ngày.",
            "questions": []
          },
          {
            "id": "daoduc-1-b3",
            "number": 3,
            "title": "Bài 3: Tự giác làm việc của mình",
            "chapter": "Chủ đề 2: Tự giác",
            "summary": "Tự dọn đồ chơi, tự chuẩn bị sách vở đi học.",
            "questions": []
          },
          {
            "id": "daoduc-1-b4",
            "number": 4,
            "title": "Bài 4: Sinh hoạt nền nếp",
            "chapter": "Chủ đề 2: Tự giác",
            "summary": "Ngủ, dậy, học tập đúng giờ theo thời gian biểu.",
            "questions": []
          },
          {
            "id": "daoduc-1-b5",
            "number": 5,
            "title": "Bài 5: Thật thà",
            "chapter": "Chủ đề 3: Thật thà",
            "summary": "Nói đúng sự thật, không nói dối, biết nhận lỗi.",
            "questions": []
          },
          {
            "id": "daoduc-1-b6",
            "number": 6,
            "title": "Bài 6: Không tự ý lấy đồ của người khác",
            "chapter": "Chủ đề 3: Thật thà",
            "summary": "Hỏi mượn trước khi dùng đồ của người khác, trả lại đồ nhặt được.",
            "questions": []
          },
          {
            "id": "daoduc-1-b7",
            "number": 7,
            "title": "Bài 7: Thực hiện nội quy trường, lớp",
            "chapter": "Chủ đề 4: Chăm sóc bản thân",
            "summary": "Đi học đúng giờ, giữ trật tự và lễ phép với thầy cô.",
            "questions": []
          },
          {
            "id": "daoduc-1-b8",
            "number": 8,
            "title": "Bài 8: Phòng, tránh tai nạn thương tích",
            "chapter": "Chủ đề 5: Phòng tránh tai nạn",
            "summary": "Không chạy nhảy nơi trơn trượt, không chơi vật sắc nhọn.",
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
            "title": "Unit 1: In the school playground (Letter B/b)",
            "chapter": "Unit 1 - 4",
            "summary": "Từ vựng: ball, bike, book.",
            "questions": [
              {
                "content": "Which word starts with letter 'B' and means 'quả bóng'?",
                "option_a": "bike",
                "option_b": "book",
                "option_c": "ball",
                "option_d": "cat",
                "correct": "C"
              }
            ]
          },
          {
            "id": "tienganh-1-b2",
            "number": 2,
            "title": "Unit 2: In the dining room (Letter C/c)",
            "chapter": "Unit 1 - 4",
            "summary": "Từ vựng: cake, car, cat, cup.",
            "questions": []
          },
          {
            "id": "tienganh-1-b3",
            "number": 3,
            "title": "Unit 3: At the street market (Letter A/a)",
            "chapter": "Unit 1 - 4",
            "summary": "Từ vựng: apple, bag, can, hat.",
            "questions": []
          },
          {
            "id": "tienganh-1-b4",
            "number": 4,
            "title": "Unit 4: In the bedroom (Letter D/d)",
            "chapter": "Unit 1 - 4",
            "summary": "Từ vựng: desk, dog, door, duck.",
            "questions": []
          },
          {
            "id": "tienganh-1-b5",
            "number": 5,
            "title": "Unit 5: At the fish and chip shop (Letter I/i)",
            "chapter": "Unit 5 - 8",
            "summary": "Từ vựng: chicken, chips, fish, milk.",
            "questions": []
          },
          {
            "id": "tienganh-1-b6",
            "number": 6,
            "title": "Unit 6: In the classroom (Letter E/e)",
            "chapter": "Unit 5 - 8",
            "summary": "Từ vựng: bell, pen, pencil, red.",
            "questions": []
          },
          {
            "id": "tienganh-1-b7",
            "number": 7,
            "title": "Unit 7: In the garden (Letter G/g)",
            "chapter": "Unit 5 - 8",
            "summary": "Từ vựng: garden, gate, girl, goat.",
            "questions": []
          },
          {
            "id": "tienganh-1-b8",
            "number": 8,
            "title": "Unit 8: In the park (Letter H/h)",
            "chapter": "Unit 5 - 8",
            "summary": "Từ vựng: hair, hand, head, horse.",
            "questions": []
          },
          {
            "id": "tienganh-1-b9",
            "number": 9,
            "title": "Unit 9: In the grocery store (Letter O/o)",
            "chapter": "Unit 9 - 12",
            "summary": "Từ vựng: locks, clocks, mops, pots.",
            "questions": []
          },
          {
            "id": "tienganh-1-b10",
            "number": 10,
            "title": "Unit 10: At the zoo (Letter M/m)",
            "chapter": "Unit 9 - 12",
            "summary": "Từ vựng: mango, monkey, mother, mouse.",
            "questions": []
          },
          {
            "id": "tienganh-1-b11",
            "number": 11,
            "title": "Unit 11: At the bus stop (Letter U/u)",
            "chapter": "Unit 9 - 12",
            "summary": "Từ vựng: bus, run, sun, truck.",
            "questions": []
          },
          {
            "id": "tienganh-1-b12",
            "number": 12,
            "title": "Unit 12: At the lake (Letter L/l)",
            "chapter": "Unit 9 - 12",
            "summary": "Từ vựng: lake, leaf, lemons, Lucy.",
            "questions": []
          },
          {
            "id": "tienganh-1-b13",
            "number": 13,
            "title": "Unit 13: In the school canteen (Letter N/n)",
            "chapter": "Unit 13 - 16",
            "summary": "Từ vựng: bananas, noodles, nuts.",
            "questions": []
          },
          {
            "id": "tienganh-1-b14",
            "number": 14,
            "title": "Unit 14: In the toy shop (Letter T/t)",
            "chapter": "Unit 13 - 16",
            "summary": "Từ vựng: teddy bear, tiger, top, turtle.",
            "questions": []
          },
          {
            "id": "tienganh-1-b15",
            "number": 15,
            "title": "Unit 15: At the football match (Letter F/f)",
            "chapter": "Unit 13 - 16",
            "summary": "Từ vựng: face, father, foot, football.",
            "questions": []
          },
          {
            "id": "tienganh-1-b16",
            "number": 16,
            "title": "Unit 16: At home (Letter W/w)",
            "chapter": "Unit 13 - 16",
            "summary": "Từ vựng: wash, water, window, Wendy.",
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
            "summary": "Đọc, viết, phân tích số có hai chữ số, số tròn chục.",
            "questions": []
          },
          {
            "id": "toan-2-b2",
            "number": 2,
            "title": "Bài 2: Tia số. Số liền trước, số liền sau",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Tìm số liền trước (bớt 1) và số liền sau (thêm 1) trên tia số.",
            "questions": [
              {
                "content": "Số liền sau của số 59 là:",
                "option_a": "58",
                "option_b": "60",
                "option_c": "61",
                "option_d": "50",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-2-b3",
            "number": 3,
            "title": "Bài 3: Các thành phần của phép cộng, phép trừ",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Nhận biết số hạng, tổng, số bị trừ, số trừ, hiệu.",
            "questions": []
          },
          {
            "id": "toan-2-b4",
            "number": 4,
            "title": "Bài 4: Hơn, kém nhau bao nhiêu",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Giải bài toán về nhiều hơn, ít hơn một số đơn vị.",
            "questions": []
          },
          {
            "id": "toan-2-b5",
            "number": 5,
            "title": "Bài 5: Bảng cộng (qua 10)",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Cộng nhẩm qua 10 trong phạm vi 20 (9 + 5, 8 + 6...).",
            "questions": []
          },
          {
            "id": "toan-2-b6",
            "number": 6,
            "title": "Bài 6: Bảng trừ (qua 10)",
            "chapter": "Chủ đề 2: Phép cộng, phép trừ trong phạm vi 20",
            "summary": "Trừ nhẩm qua 10 trong phạm vi 20 (12 - 5, 15 - 8...).",
            "questions": []
          },
          {
            "id": "toan-2-b7",
            "number": 7,
            "title": "Bài 7: Ki-lô-gam (kg) và Lít (l)",
            "chapter": "Chủ đề 3: Làm quen với khối lượng, dung tích",
            "summary": "Đơn vị đo khối lượng kg và đơn vị đo dung tích lít.",
            "questions": []
          },
          {
            "id": "toan-2-b8",
            "number": 8,
            "title": "Bài 8: Phép cộng có nhớ số có hai chữ số với số có hai chữ số",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Đặt tính cộng có nhớ sang hàng chục.",
            "questions": [
              {
                "content": "Kết quả của phép tính 38 + 27 là:",
                "option_a": "55",
                "option_b": "65",
                "option_c": "64",
                "option_d": "56",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-2-b9",
            "number": 9,
            "title": "Bài 9: Phép trừ có nhớ số có hai chữ số cho số có hai chữ số",
            "chapter": "Chủ đề 4: Phép cộng, phép trừ (có nhớ) trong phạm vi 100",
            "summary": "Đặt tính trừ có nhớ trong phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-2-b10",
            "number": 10,
            "title": "Bài 10: Điểm, đoạn thẳng, đường thẳng, đường cong, đường gấp khúc",
            "chapter": "Chủ đề 5: Làm quen với hình phẳng",
            "summary": "Nhận biết điểm, đoạn thẳng, tính độ dài đường gấp khúc.",
            "questions": []
          },
          {
            "id": "toan-2-b11",
            "number": 11,
            "title": "Bài 11: Phép nhân. Bảng nhân 2 và Bảng nhân 5",
            "chapter": "Chủ đề 6: Phép nhân và phép chia",
            "summary": "Ý nghĩa phép nhân, thừa số, tích; thuộc bảng nhân 2 và 5.",
            "questions": [
              {
                "content": "Kết quả của phép tính 5 × 7 là:",
                "option_a": "30",
                "option_b": "25",
                "option_c": "35",
                "option_d": "40",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-2-b12",
            "number": 12,
            "title": "Bài 12: Phép chia. Bảng chia 2 và Bảng chia 5",
            "chapter": "Chủ đề 6: Phép nhân và phép chia",
            "summary": "Số bị chia, số chia, thương; thuộc bảng chia 2 và 5.",
            "questions": []
          },
          {
            "id": "toan-2-b13",
            "number": 13,
            "title": "Bài 13: Các số tròn trăm, tròn chục. Số có ba chữ số",
            "chapter": "Chủ đề 7: Các số trong phạm vi 1000",
            "summary": "Hàng trăm, hàng chục, hàng đơn vị; so sánh số đến 1000.",
            "questions": []
          },
          {
            "id": "toan-2-b14",
            "number": 14,
            "title": "Bài 14: Đề-xi-mét (dm), Mét (m), Ki-lô-mét (km)",
            "chapter": "Chủ đề 8: Độ dài và đơn vị đo độ dài",
            "summary": "Quy đổi 1 m = 10 dm = 100 cm, 1 km = 1000 m.",
            "questions": []
          },
          {
            "id": "toan-2-b15",
            "number": 15,
            "title": "Bài 15: Phép cộng, phép trừ (không nhớ và có nhớ) trong phạm vi 1000",
            "chapter": "Chủ đề 9: Phép cộng, phép trừ trong phạm vi 1000",
            "summary": "Thực hiện cộng trừ các số có ba chữ số.",
            "questions": []
          },
          {
            "id": "toan-2-b16",
            "number": 16,
            "title": "Bài 16: Xem đồng hồ và xem lịch tháng",
            "chapter": "Chủ đề 10: Ngày - Giờ, Giờ - Phút",
            "summary": "Xem giờ hơn (15 phút, 30 phút), số ngày trong tháng.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-2",
        "name": "Tiếng Việt",
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-2-b1",
            "number": 1,
            "title": "Bài 1: Tôi là học sinh lớp 2",
            "chapter": "Chủ đề 1: Em lớn lên từng ngày",
            "summary": "Niềm vui khi lên lớp 2 và ý thức tự giác, trưởng thành.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b2",
            "number": 2,
            "title": "Bài 2: Ngày hôm qua đâu rồi?",
            "chapter": "Chủ đề 1: Em lớn lên từng ngày",
            "summary": "Bài thơ nhắc nhở biết quý trọng thời gian, chăm chỉ học tập.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b3",
            "number": 3,
            "title": "Bài 3: Niềm vui của Bi và Bống",
            "chapter": "Chủ đề 2: Đi học vui sao",
            "summary": "Tình anh em yêu thương, nhường nhịn và chia sẻ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b4",
            "number": 4,
            "title": "Bài 4: Cô giáo lớp em",
            "chapter": "Chủ đề 2: Đi học vui sao",
            "summary": "Tình cảm yêu quý, kính trọng cô giáo tận tâm dạy dỗ.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b5",
            "number": 5,
            "title": "Bài 5: Nhím nâu kết bạn",
            "chapter": "Chủ đề 3: Niềm vui tuổi thơ",
            "summary": "Bài học về lòng dũng cảm và kết bạn thân thiện.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b6",
            "number": 6,
            "title": "Bài 6: Cánh cửa nhớ bà",
            "chapter": "Chủ đề 4: Mái ấm gia đình",
            "summary": "Nỗi nhớ bà và tình cảm gia đình ấm áp.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b7",
            "number": 7,
            "title": "Bài 7: Sự tích cây vú sữa",
            "chapter": "Chủ đề 4: Mái ấm gia đình",
            "summary": "Tình mẫu tử thiêng liêng, bao dung của mẹ dành cho con.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b8",
            "number": 8,
            "title": "Bài 8: Chuyện bốn mùa",
            "chapter": "Chủ đề 5: Vẻ đẹp quanh em",
            "summary": "Vẻ đẹp và lợi ích riêng của bốn mùa Xuân, Hạ, Thu, Đông.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b9",
            "number": 9,
            "title": "Bài 9: Giọt nước và biển lớn",
            "chapter": "Chủ đề 6: Hành tinh xanh của em",
            "summary": "Sức mạnh của sự đoàn kết và ý thức bảo vệ thiên nhiên.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b10",
            "number": 10,
            "title": "Bài 10: Bóp nát quả cam",
            "chapter": "Chủ đề 7: Con người Việt Nam",
            "summary": "Lòng yêu nước, chí khí kiên cường của thiếu niên Trần Quốc Toản.",
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
            "summary": "Gia đình hai thế hệ, ba thế hệ và sự quan tâm lẫn nhau.",
            "questions": []
          },
          {
            "id": "tnxh-2-b2",
            "number": 2,
            "title": "Bài 2: Nghề nghiệp của người lớn trong gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Tên và ý nghĩa các nghề nghiệp trong xã hội.",
            "questions": []
          },
          {
            "id": "tnxh-2-b3",
            "number": 3,
            "title": "Bài 3: Phòng tránh ngộ độc khi ở nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Không ăn thức ăn ôi thiu, không uống nhầm hóa chất/thuốc.",
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
            "summary": "Tổng kết chủ đề Gia đình.",
            "questions": []
          },
          {
            "id": "tnxh-2-b6",
            "number": 6,
            "title": "Bài 6: Chào đón ngày khai giảng",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Ý nghĩa lễ khai giảng và các hoạt động ở trường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b7",
            "number": 7,
            "title": "Bài 7: Ngày hội đọc sách của chúng em",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Xây dựng thói quen đọc sách tại thư viện trường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b8",
            "number": 8,
            "title": "Bài 8: An toàn khi ở trường",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Phòng tránh ngã, xô đẩy khi vui chơi ở sân trường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b9",
            "number": 9,
            "title": "Bài 9: Giữ vệ sinh trường học",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Bỏ rác đúng nơi quy định, giữ sạch lớp và sân trường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b10",
            "number": 10,
            "title": "Bài 11: Hoạt động mua bán hàng hóa",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Phân biệt hàng hóa thiết yếu, nơi mua bán.",
            "questions": []
          },
          {
            "id": "tnxh-2-b11",
            "number": 11,
            "title": "Bài 13: Hoạt động giao thông",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Các loại đường giao thông và phương tiện giao thông.",
            "questions": []
          },
          {
            "id": "tnxh-2-b12",
            "number": 12,
            "title": "Bài 14: Cùng tham gia giao thông",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Nhận biết biển báo giao thông phổ biến và đi đúng phần đường.",
            "questions": []
          },
          {
            "id": "tnxh-2-b13",
            "number": 13,
            "title": "Bài 16: Thực vật sống ở đâu",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Nơi sống của thực vật (trên cạn, dưới nước).",
            "questions": []
          },
          {
            "id": "tnxh-2-b14",
            "number": 14,
            "title": "Bài 17: Động vật sống ở đâu",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Môi trường sống trên cạn, dưới nước, vừa cạn vừa nước.",
            "questions": []
          },
          {
            "id": "tnxh-2-b15",
            "number": 15,
            "title": "Bài 18: Cần làm gì để bảo vệ môi trường sống của thực vật và động vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Không chặt phá rừng, không xả rác xuống sông hồ.",
            "questions": []
          },
          {
            "id": "tnxh-2-b16",
            "number": 16,
            "title": "Bài 21: Tìm hiểu cơ quan vận động",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Cấu tạo gồm bộ xương và hệ cơ, giúp cơ thể cử động.",
            "questions": []
          },
          {
            "id": "tnxh-2-b17",
            "number": 17,
            "title": "Bài 22: Chăm sóc, bảo vệ cơ quan vận động",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Ngồi học đúng tư thế để phòng cong vẹo cột sống.",
            "questions": []
          },
          {
            "id": "tnxh-2-b18",
            "number": 18,
            "title": "Bài 23: Tìm hiểu cơ quan hô hấp",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Mũi, khí quản, phế quản và hai lá phổi.",
            "questions": []
          },
          {
            "id": "tnxh-2-b19",
            "number": 19,
            "title": "Bài 24: Chăm sóc, bảo vệ cơ quan hô hấp",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Giữ ấm cổ ngực, đeo khẩu trang nơi nhiều khói bụi.",
            "questions": []
          },
          {
            "id": "tnxh-2-b20",
            "number": 20,
            "title": "Bài 25: Tìm hiểu cơ quan bài tiết nước tiểu",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Thận, ống dẫn nước tiểu, bóng đái, ống đái.",
            "questions": []
          },
          {
            "id": "tnxh-2-b21",
            "number": 21,
            "title": "Bài 28: Các mùa trong năm",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Đặc điểm 4 mùa Xuân, Hạ, Thu, Đông và mùa mưa, mùa khô.",
            "questions": []
          },
          {
            "id": "tnxh-2-b22",
            "number": 22,
            "title": "Bài 29: Một số thiên tai thường gặp",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Nhận biết bão, lũ lụt, hạn hán, sạt lở đất.",
            "questions": []
          },
          {
            "id": "tnxh-2-b23",
            "number": 23,
            "title": "Bài 30: Luyện tập ứng phó với thiên tai",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Kĩ năng an toàn khi xảy ra thiên tai.",
            "questions": []
          }
        ]
      },
      {
        "id": "daoduc-2",
        "name": "Đạo đức",
        "icon": "❤️",
        "lessons": [
          {
            "id": "daoduc-2-b1",
            "number": 1,
            "title": "Bài 1: Quý trọng thời gian",
            "chapter": "Chủ đề 1: Quý trọng thời gian",
            "summary": "Biết sắp xếp thời gian học tập và vui chơi hợp lí.",
            "questions": []
          },
          {
            "id": "daoduc-2-b2",
            "number": 2,
            "title": "Bài 2: Nhận lỗi và sửa lỗi",
            "chapter": "Chủ đề 2: Nhận lỗi và sửa lỗi",
            "summary": "Dũng cảm nhận lỗi khi làm sai và quyết tâm sửa chữa.",
            "questions": []
          },
          {
            "id": "daoduc-2-b3",
            "number": 3,
            "title": "Bài 3: Bảo quản đồ dùng cá nhân và gia đình",
            "chapter": "Chủ đề 3: Bảo quản đồ dùng",
            "summary": "Giữ gìn, vệ sinh đồ dùng học tập và đồ dùng trong nhà.",
            "questions": []
          },
          {
            "id": "daoduc-2-b4",
            "number": 4,
            "title": "Bài 4: Kính trọng thầy giáo, cô giáo",
            "chapter": "Chủ đề 4: Kính trọng thầy cô, yêu quý bạn bè",
            "summary": "Lễ phép, biết ơn thầy cô.",
            "questions": []
          },
          {
            "id": "daoduc-2-b5",
            "number": 5,
            "title": "Bài 5: Yêu quý bạn bè",
            "chapter": "Chủ đề 4: Kính trọng thầy cô, yêu quý bạn bè",
            "summary": "Đoàn kết, giúp đỡ bạn cùng tiến bộ.",
            "questions": []
          },
          {
            "id": "daoduc-2-b6",
            "number": 6,
            "title": "Bài 6: Tìm kiếm sự hỗ trợ khi ở nhà, ở trường, nơi công cộng",
            "chapter": "Chủ đề 5: Tìm kiếm sự hỗ trợ",
            "summary": "Nhớ số điện thoại người thân, công an 113, cứu hỏa 114, cấp cứu 115.",
            "questions": []
          },
          {
            "id": "daoduc-2-b7",
            "number": 7,
            "title": "Bài 7: Tuân thủ quy định nơi công cộng",
            "chapter": "Chủ đề 6: Tuân thủ quy định nơi công cộng",
            "summary": "Xếp hàng, giữ trật tự, giữ vệ sinh nơi công cộng.",
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
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: pasta, pizza, popcorn (Letter P/p).",
            "questions": []
          },
          {
            "id": "tienganh-2-b2",
            "number": 2,
            "title": "Unit 2: In the backyard",
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: kite, bike, kitten (Letter K/k).",
            "questions": []
          },
          {
            "id": "tienganh-2-b3",
            "number": 3,
            "title": "Unit 3: At the seaside",
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: sail, sand, sea (Letter S/s).",
            "questions": []
          },
          {
            "id": "tienganh-2-b4",
            "number": 4,
            "title": "Unit 4: In the countryside",
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: rainbow, river, road (Letter R/r).",
            "questions": []
          },
          {
            "id": "tienganh-2-b5",
            "number": 5,
            "title": "Unit 5: In the classroom",
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: square, quiz, question (Letter Q/q).",
            "questions": []
          },
          {
            "id": "tienganh-2-b6",
            "number": 6,
            "title": "Unit 6: On the farm",
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: box, fox, ox (Letter X/x).",
            "questions": []
          },
          {
            "id": "tienganh-2-b7",
            "number": 7,
            "title": "Unit 7: In the kitchen",
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: jam, juice, jelly (Letter J/j).",
            "questions": []
          },
          {
            "id": "tienganh-2-b8",
            "number": 8,
            "title": "Unit 8: In the village",
            "chapter": "Unit 1 - 8",
            "summary": "Từ vựng: van, village, volleyball (Letter V/v).",
            "questions": []
          },
          {
            "id": "tienganh-2-b9",
            "number": 9,
            "title": "Unit 9: In the grocery store",
            "chapter": "Unit 9 - 16",
            "summary": "Từ vựng: yo-yo, yogurt, yam (Letter Y/y).",
            "questions": []
          },
          {
            "id": "tienganh-2-b10",
            "number": 10,
            "title": "Unit 10: At the zoo",
            "chapter": "Unit 9 - 16",
            "summary": "Từ vựng: zebu, zebra, zoo (Letter Z/z).",
            "questions": []
          },
          {
            "id": "tienganh-2-b11",
            "number": 11,
            "title": "Unit 11: In the playground",
            "chapter": "Unit 9 - 16",
            "summary": "Từ vựng: driving, riding, sliding.",
            "questions": []
          },
          {
            "id": "tienganh-2-b12",
            "number": 12,
            "title": "Unit 12: At the café",
            "chapter": "Unit 9 - 16",
            "summary": "Từ vựng: grapes, cake, table.",
            "questions": []
          },
          {
            "id": "tienganh-2-b13",
            "number": 13,
            "title": "Unit 13: In the maths class",
            "chapter": "Unit 9 - 16",
            "summary": "Số đếm 11 đến 20: eleven, twelve, thirteen, fourteen, fifteen.",
            "questions": []
          },
          {
            "id": "tienganh-2-b14",
            "number": 14,
            "title": "Unit 14: At home",
            "chapter": "Unit 9 - 16",
            "summary": "Từ vựng thành viên gia đình & đồ vật trong nhà.",
            "questions": []
          },
          {
            "id": "tienganh-2-b15",
            "number": 15,
            "title": "Unit 15: In the clothes shop",
            "chapter": "Unit 9 - 16",
            "summary": "Từ vựng trang phục: shirt, shoes, shorts.",
            "questions": []
          },
          {
            "id": "tienganh-2-b16",
            "number": 16,
            "title": "Unit 16: At the campsite",
            "chapter": "Unit 9 - 16",
            "summary": "Từ vựng dã ngoại: tent, teapot, blanket.",
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
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-3-b1",
            "number": 1,
            "title": "Bài 1: Ôn tập các số đến 1000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đọc, viết, so sánh số có 3 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b2",
            "number": 2,
            "title": "Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Cộng, trừ có nhớ và không nhớ đến 1000.",
            "questions": []
          },
          {
            "id": "toan-3-b3",
            "number": 3,
            "title": "Bài 3: Tìm thành phần trong phép cộng, phép trừ",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Tìm số hạng, số bị trừ, số trừ chưa biết.",
            "questions": []
          },
          {
            "id": "toan-3-b4",
            "number": 4,
            "title": "Bài 4: Bảng nhân, bảng chia 3, 4, 6, 7, 8, 9",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Thuộc và vận dụng bảng nhân, bảng chia từ 2 đến 9.",
            "questions": [
              {
                "content": "Kết quả của phép tính 7 × 8 là:",
                "option_a": "54",
                "option_b": "56",
                "option_c": "64",
                "option_d": "48",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-3-b5",
            "number": 5,
            "title": "Bài 5: Tìm thành phần trong phép nhân, phép chia",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Tìm thừa số, số bị chia, số chia chưa biết.",
            "questions": []
          },
          {
            "id": "toan-3-b6",
            "number": 6,
            "title": "Bài 6: Điểm ở giữa, trung điểm của đoạn thẳng. Hình tròn, tâm, bán kính, đường kính",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Đường kính gấp 2 lần bán kính; nhận biết góc vuông, góc không vuông.",
            "questions": []
          },
          {
            "id": "toan-3-b7",
            "number": 7,
            "title": "Bài 7: Nhân số có hai chữ số với số có một chữ số",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Đặt tính nhân, gấp một số lên một số lần.",
            "questions": []
          },
          {
            "id": "toan-3-b8",
            "number": 8,
            "title": "Bài 8: Chia số có hai chữ số cho số có một chữ số. Phép chia hết và phép chia có dư",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Số dư luôn nhỏ hơn số chia.",
            "questions": []
          },
          {
            "id": "toan-3-b9",
            "number": 9,
            "title": "Bài 9: Mi-li-mét (mm), Gam (g), Mi-li-lít (ml), Nhiệt độ (°C)",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "Quy đổi 1 cm = 10 mm, 1 kg = 1000 g, 1 l = 1000 ml.",
            "questions": []
          },
          {
            "id": "toan-3-b10",
            "number": 10,
            "title": "Bài 10: Nhân, chia số có ba chữ số cho số có một chữ số",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1000",
            "summary": "Đặt tính nhân và chia số có 3 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b11",
            "number": 11,
            "title": "Bài 11: Các số có bốn, năm chữ số. Chữ số La Mã",
            "chapter": "Chủ đề 7: Các số đến 10 000 và 100 000",
            "summary": "Đọc, viết, làm tròn số; chữ số La Mã I, V, X.",
            "questions": []
          },
          {
            "id": "toan-3-b12",
            "number": 12,
            "title": "Bài 12: Chu vi hình tam giác, tứ giác, hình chữ nhật, hình vuông",
            "chapter": "Chủ đề 8: Chu vi, diện tích một số hình phẳng",
            "summary": "Chu vi HCN = (Dài + Rộng) × 2; Chu vi HV = Cạnh × 4.",
            "questions": []
          },
          {
            "id": "toan-3-b13",
            "number": 13,
            "title": "Bài 13: Diện tích hình chữ nhật, diện tích hình vuông",
            "chapter": "Chủ đề 8: Chu vi, diện tích một số hình phẳng",
            "summary": "S HCN = Dài × Rộng; S HV = Cạnh × Cạnh (đơn vị cm²).",
            "questions": [
              {
                "content": "Diện tích của một hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm là:",
                "option_a": "13 cm²",
                "option_b": "26 cm²",
                "option_c": "40 cm²",
                "option_d": "35 cm²",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-3-b14",
            "number": 14,
            "title": "Bài 14: Thu thập, phân loại, ghi chép số liệu. Khả năng xảy ra của một sự kiện",
            "chapter": "Chủ đề 9: Làm quen với yếu tố thống kê, xác suất",
            "summary": "Đọc bảng số liệu, sử dụng từ chắc chắn, có thể, không thể.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-3",
        "name": "Tiếng Việt",
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-3-b1",
            "number": 1,
            "title": "Bài 1: Ngày gặp lại",
            "chapter": "Chủ đề 1: Những trải nghiệm thú vị",
            "summary": "Niềm vui gặp lại bạn bè sau kì nghỉ hè.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b2",
            "number": 2,
            "title": "Bài 2: Đi học vui sao & Nhật kí tập bơi",
            "chapter": "Chủ đề 2: Cổng trường rộng mở",
            "summary": "Niềm vui đến trường và bài học kiên trì tập luyện.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b3",
            "number": 3,
            "title": "Bài 3: Quạt cho bà ngủ & Bàn tay cô giáo",
            "chapter": "Chủ đề 3: Mái nhà yêu thương",
            "summary": "Tình cảm gia đình và sự khéo léo, tận tụy của cô giáo.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b4",
            "number": 4,
            "title": "Bài 4: Đêm hội trăng rằm & Bầy voi rừng Trường Sơn",
            "chapter": "Chủ đề 4: Cộng đồng gắn bó",
            "summary": "Nét đẹp văn hóa cộng đồng và thiên nhiên Tây Nguyên.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b5",
            "number": 5,
            "title": "Bài 5: Bầu trời trong quả trứng & Tiếng nước chảy",
            "chapter": "Chủ đề 5: Những sắc màu thiên nhiên",
            "summary": "Cảm nhận vẻ đẹp sinh động của thế giới tự nhiên.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b6",
            "number": 6,
            "title": "Bài 6: Hai Bà Trưng & Tích Chu",
            "chapter": "Chủ đề 6: Bài học từ cuộc sống",
            "summary": "Truyền thống yêu nước và bài học hiếu thảo.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b7",
            "number": 7,
            "title": "Bài 7: Cậu bé thông minh & Đất nước là gì?",
            "chapter": "Chủ đề 7: Đất nước ngàn năm",
            "summary": "Trí thông minh dân gian và tình yêu quê hương đất nước.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b8",
            "number": 8,
            "title": "Bài 8: Sự tích mặt trời mọc & Trái Đất xanh",
            "chapter": "Chủ đề 8: Trái Đất của chúng mình",
            "summary": "Ý thức bảo vệ môi trường và hành tinh xanh.",
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
            "title": "Bài 1: Họ hàng và những ngày kỉ niệm của gia đình",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Phân biệt họ nội, họ ngoại; lễ giỗ, ngày cưới, sinh nhật.",
            "questions": []
          },
          {
            "id": "tnxh-3-b2",
            "number": 2,
            "title": "Bài 2: Phòng tránh hỏa hoạn khi ở nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Nguyên nhân gây cháy và cách thoát hiểm, gọi 114.",
            "questions": []
          },
          {
            "id": "tnxh-3-b3",
            "number": 3,
            "title": "Bài 3: Vệ sinh xung quanh nhà",
            "chapter": "Chủ đề 1: Gia đình",
            "summary": "Khơi thông cống rãnh, diệt muỗi, thu gom rác.",
            "questions": []
          },
          {
            "id": "tnxh-3-b4",
            "number": 4,
            "title": "Bài 5: Hoạt động kết nối với cộng đồng",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Hoạt động thiện nguyện, bảo vệ môi trường cùng địa phương.",
            "questions": []
          },
          {
            "id": "tnxh-3-b5",
            "number": 5,
            "title": "Bài 6: Truyền thống trường em",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Tự hào và giữ gìn truyền thống tốt đẹp của nhà trường.",
            "questions": []
          },
          {
            "id": "tnxh-3-b6",
            "number": 6,
            "title": "Bài 7: Giữ an toàn và vệ sinh ở trường",
            "chapter": "Chủ đề 2: Trường học",
            "summary": "Phòng tránh tai nạn và giữ trường lớp xanh sạch đẹp.",
            "questions": []
          },
          {
            "id": "tnxh-3-b7",
            "number": 7,
            "title": "Bài 9: Hoạt động sản xuất nông nghiệp",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Trồng trọt, chăn nuôi, nuôi trồng thủy sản.",
            "questions": []
          },
          {
            "id": "tnxh-3-b8",
            "number": 8,
            "title": "Bài 10: Hoạt động sản xuất thủ công và công nghiệp",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Làng nghề thủ công truyền thống và nhà máy công nghiệp.",
            "questions": []
          },
          {
            "id": "tnxh-3-b9",
            "number": 9,
            "title": "Bài 11: Di tích lịch sử - văn hóa và cảnh quan thiên nhiên",
            "chapter": "Chủ đề 3: Cộng đồng địa phương",
            "summary": "Bảo vệ, giữ gìn di tích và danh lam thắng cảnh.",
            "questions": []
          },
          {
            "id": "tnxh-3-b10",
            "number": 10,
            "title": "Bài 13: Một số bộ phận của thực vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Rễ cọc, rễ chùm; thân đứng, thân leo, thân bò; lá, hoa, quả.",
            "questions": []
          },
          {
            "id": "tnxh-3-b11",
            "number": 11,
            "title": "Bài 14: Chức năng một số bộ phận của thực vật",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Rễ hút nước muối khoáng, thân vận chuyển, lá quang hợp.",
            "questions": []
          },
          {
            "id": "tnxh-3-b12",
            "number": 12,
            "title": "Bài 15: Một số bộ phận của động vật và chức năng của chúng",
            "chapter": "Chủ đề 4: Thực vật và động vật",
            "summary": "Cơ quan di chuyển và lớp bao phủ (lông vũ, lông mao, vảy).",
            "questions": []
          },
          {
            "id": "tnxh-3-b13",
            "number": 13,
            "title": "Bài 18: Cơ quan tiêu hóa",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Miệng, thực quản, dạ dày, ruột non, ruột già, gan, tuyến tụy.",
            "questions": []
          },
          {
            "id": "tnxh-3-b14",
            "number": 14,
            "title": "Bài 20: Cơ quan tuần hoàn",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tim và hệ thống mạch máu vận chuyển máu đi khắp cơ thể.",
            "questions": []
          },
          {
            "id": "tnxh-3-b15",
            "number": 15,
            "title": "Bài 22: Cơ quan thần kinh",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Não, tủy sống và các dây thần kinh điều khiển mọi hoạt động.",
            "questions": []
          },
          {
            "id": "tnxh-3-b16",
            "number": 16,
            "title": "Bài 26: Xác định các phương trong không gian",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "4 phương chính: Đông, Tây, Nam, Bắc dựa vào Mặt Trời và la bàn.",
            "questions": []
          },
          {
            "id": "tnxh-3-b17",
            "number": 17,
            "title": "Bài 27: Trái Đất và các đới khí hậu",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Đới nóng, đới ôn hòa, đới lạnh trên quả địa cầu.",
            "questions": []
          },
          {
            "id": "tnxh-3-b18",
            "number": 18,
            "title": "Bài 28: Bề mặt Trái Đất",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Lục địa, đại dương, núi, đồi, đồng bằng, cao nguyên, sông, hồ.",
            "questions": []
          },
          {
            "id": "tnxh-3-b19",
            "number": 19,
            "title": "Bài 29: Mặt Trời, Trái Đất, Mặt Trăng",
            "chapter": "Chủ đề 6: Trái Đất và bầu trời",
            "summary": "Trái Đất quay quanh mình và quay quanh Mặt Trời; Mặt Trăng quay quanh Trái Đất.",
            "questions": [
              {
                "content": "Trong Hệ Mặt Trời, Trái Đất chuyển động quay quanh thiên thể nào?",
                "option_a": "Mặt Trăng",
                "option_b": "Mặt Trời",
                "option_c": "Sao Hỏa",
                "option_d": "Sao Kim",
                "correct": "B"
              }
            ]
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
            "summary": "Con người thu nhận thông tin qua giác quan để ra quyết định.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b2",
            "number": 2,
            "title": "Bài 2: Xử lí thông tin",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Ba dạng thông tin thường gặp: văn bản, âm thanh, hình ảnh.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b3",
            "number": 3,
            "title": "Bài 3: Máy tính – những người bạn mới",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "4 bộ phận cơ bản: màn hình, thân máy, bàn phím, chuột.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b4",
            "number": 4,
            "title": "Bài 4: Làm việc với máy tính",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Tư thế ngồi đúng, sử dụng chuột và an toàn điện.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b5",
            "number": 5,
            "title": "Bài 7: Làm quen với Internet",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Xem tin tức, giải trí, học tập qua trình duyệt web.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b6",
            "number": 6,
            "title": "Bài 8: Sắp xếp để dễ tìm & Cây thư mục",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ thông tin",
            "summary": "Tạo thư mục và sắp xếp tệp tin khoa học.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b7",
            "number": 7,
            "title": "Bài 11: Bài trình chiếu đầu tiên của em",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tạo trang trình chiếu đơn giản bằng PowerPoint.",
            "questions": []
          },
          {
            "id": "tinhoc-3-b8",
            "number": 8,
            "title": "Bài 14: Thực hiện công việc theo từng bước",
            "chapter": "Chủ đề 6: Giải quyết vấn đề",
            "summary": "Chia nhỏ công việc thành các bước tuần tự.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-3",
        "name": "Công nghệ",
        "icon": "🔧",
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
            "summary": "Chọn vị trí đặt đèn học bảo vệ mắt và an toàn điện.",
            "questions": []
          },
          {
            "id": "congnghe-3-b3",
            "number": 3,
            "title": "Bài 3: Sử dụng quạt điện",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Các bộ phận quạt điện và cách sử dụng an toàn, tiết kiệm.",
            "questions": []
          },
          {
            "id": "congnghe-3-b4",
            "number": 4,
            "title": "Bài 4: Sử dụng máy thu thanh",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Công dụng và cách điều chỉnh âm lượng, kênh phát thanh.",
            "questions": []
          },
          {
            "id": "congnghe-3-b5",
            "number": 5,
            "title": "Bài 5: Sử dụng máy thu hình",
            "chapter": "Phần 1: Công nghệ và đời sống",
            "summary": "Khoảng cách xem tivi an toàn và chọn kênh phù hợp lứa tuổi.",
            "questions": []
          },
          {
            "id": "congnghe-3-b6",
            "number": 6,
            "title": "Bài 7: Làm đồ dùng học tập & Làm biển báo giao thông",
            "chapter": "Phần 2: Thủ công kĩ thuật",
            "summary": "Quy trình làm thước kẻ, hộp bút, biển báo an toàn.",
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
            "chapter": "Unit 1 - 5",
            "summary": "Hello / Hi, I'm..., How are you? - Fine, thank you.",
            "questions": []
          },
          {
            "id": "tienganh-3-b2",
            "number": 2,
            "title": "Unit 2: Our names",
            "chapter": "Unit 1 - 5",
            "summary": "What's your name? How old are you?",
            "questions": []
          },
          {
            "id": "tienganh-3-b3",
            "number": 3,
            "title": "Unit 3: Our friends",
            "chapter": "Unit 1 - 5",
            "summary": "This is / That is..., Is this/that...?",
            "questions": []
          },
          {
            "id": "tienganh-3-b4",
            "number": 4,
            "title": "Unit 4: Our bodies",
            "chapter": "Unit 1 - 5",
            "summary": "Parts of the body: face, hand, eye, ear, nose, mouth.",
            "questions": []
          },
          {
            "id": "tienganh-3-b5",
            "number": 5,
            "title": "Unit 5: My hobbies",
            "chapter": "Unit 1 - 5",
            "summary": "What's your hobby? - I like singing / swimming / cooking.",
            "questions": []
          },
          {
            "id": "tienganh-3-b6",
            "number": 6,
            "title": "Unit 6: Our school",
            "chapter": "Unit 6 - 10",
            "summary": "School rooms: library, playground, computer room, art room.",
            "questions": []
          },
          {
            "id": "tienganh-3-b7",
            "number": 7,
            "title": "Unit 7: Classroom instructions",
            "chapter": "Unit 6 - 10",
            "summary": "Open your book, sit down, stand up, May I come in?",
            "questions": []
          },
          {
            "id": "tienganh-3-b8",
            "number": 8,
            "title": "Unit 8: My school things",
            "chapter": "Unit 6 - 10",
            "summary": "pen, ruler, book, pencil case, notebook, school bag.",
            "questions": []
          },
          {
            "id": "tienganh-3-b9",
            "number": 9,
            "title": "Unit 9: Colours",
            "chapter": "Unit 6 - 10",
            "summary": "What colour is it? blue, red, yellow, green, orange.",
            "questions": []
          },
          {
            "id": "tienganh-3-b10",
            "number": 10,
            "title": "Unit 10: Break time activities",
            "chapter": "Unit 6 - 10",
            "summary": "chess, volleyball, badminton, football, table tennis.",
            "questions": []
          },
          {
            "id": "tienganh-3-b11",
            "number": 11,
            "title": "Unit 11: My family",
            "chapter": "Unit 11 - 15",
            "summary": "mother, father, brother, sister; Who's this/that?",
            "questions": []
          },
          {
            "id": "tienganh-3-b12",
            "number": 12,
            "title": "Unit 12: Jobs",
            "chapter": "Unit 11 - 15",
            "summary": "doctor, teacher, driver, worker, farmer, nurse.",
            "questions": []
          },
          {
            "id": "tienganh-3-b13",
            "number": 13,
            "title": "Unit 13: My house",
            "chapter": "Unit 11 - 15",
            "summary": "living room, bedroom, kitchen, bathroom.",
            "questions": []
          },
          {
            "id": "tienganh-3-b14",
            "number": 14,
            "title": "Unit 14: My bedroom",
            "chapter": "Unit 11 - 15",
            "summary": "bed, desk, chair, door, window, big/small.",
            "questions": []
          },
          {
            "id": "tienganh-3-b15",
            "number": 15,
            "title": "Unit 15: At the dining table",
            "chapter": "Unit 11 - 15",
            "summary": "bread, meat, beans, fish, juice, milk, water.",
            "questions": []
          },
          {
            "id": "tienganh-3-b16",
            "number": 16,
            "title": "Unit 16: My pets",
            "chapter": "Unit 16 - 20",
            "summary": "cats, dogs, birds, rabbits, parrots.",
            "questions": []
          },
          {
            "id": "tienganh-3-b17",
            "number": 17,
            "title": "Unit 17: Our toys",
            "chapter": "Unit 16 - 20",
            "summary": "car, kite, train, plane, truck, bus.",
            "questions": []
          },
          {
            "id": "tienganh-3-b18",
            "number": 18,
            "title": "Unit 18: Playing and doing",
            "chapter": "Unit 16 - 20",
            "summary": "Present continuous: I'm reading / listening to music / watching TV.",
            "questions": []
          },
          {
            "id": "tienganh-3-b19",
            "number": 19,
            "title": "Unit 19: Outdoor activities",
            "chapter": "Unit 16 - 20",
            "summary": "cycling, flying a kite, painting, skating.",
            "questions": []
          },
          {
            "id": "tienganh-3-b20",
            "number": 20,
            "title": "Unit 20: At the zoo",
            "chapter": "Unit 16 - 20",
            "summary": "elephant, monkey, peacock, tiger, swinging, climbing.",
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
            "summary": "Đọc, viết, phân tích cấu tạo số và làm tròn số.",
            "questions": []
          },
          {
            "id": "toan-4-b2",
            "number": 2,
            "title": "Bài 2: Biểu thức chứa chữ. Tính chất giao hoán, kết hợp",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Tính giá trị biểu thức chứa một, hai, ba chữ.",
            "questions": []
          },
          {
            "id": "toan-4-b3",
            "number": 3,
            "title": "Bài 3: Đo góc, đơn vị đo góc. Góc nhọn, góc tù, góc bẹt",
            "chapter": "Chủ đề 2: Góc và đơn vị đo góc",
            "summary": "Góc vuông 90°, góc nhọn < 90°, góc tù > 90°, góc bẹt = 180°.",
            "questions": [
              {
                "content": "Góc bẹt có số đo bằng bao nhiêu độ?",
                "option_a": "90°",
                "option_b": "180°",
                "option_c": "45°",
                "option_d": "360°",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-4-b4",
            "number": 4,
            "title": "Bài 4: Số có sáu chữ số. Hàng và lớp. Triệu và lớp triệu",
            "chapter": "Chủ đề 3: Số có nhiều chữ số",
            "summary": "Lớp đơn vị, lớp nghìn, lớp triệu; đọc viết số đến lớp triệu.",
            "questions": []
          },
          {
            "id": "toan-4-b5",
            "number": 5,
            "title": "Bài 5: Yến, tạ, tấn. Giây, thế kỉ. Đề-xi-mét vuông, Mét vuông, Mi-li-mét vuông",
            "chapter": "Chủ đề 4: Một số đơn vị đo đại lượng",
            "summary": "1 tấn = 10 tạ = 1000 kg; 1 thế kỉ = 100 năm; 1 m² = 100 dm².",
            "questions": [
              {
                "content": "3 tấn 50 kg bằng bao nhiêu ki-lô-gam?",
                "option_a": "350 kg",
                "option_b": "3050 kg",
                "option_c": "3500 kg",
                "option_d": "3005 kg",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-4-b6",
            "number": 6,
            "title": "Bài 6: Hai đường thẳng vuông góc, hai đường thẳng song song. Hình bình hành, hình thoi",
            "chapter": "Chủ đề 5: Đường thẳng vuông góc, đường thẳng song song",
            "summary": "Nhận biết tính chất cặp cạnh song song của hình bình hành và hình thoi.",
            "questions": []
          },
          {
            "id": "toan-4-b7",
            "number": 7,
            "title": "Bài 7: Nhân với số có một, hai chữ số. Chia cho số có một, hai chữ số",
            "chapter": "Chủ đề 6: Phép nhân và phép chia",
            "summary": "Đặt tính nhân chia; tính chất phân phối của phép nhân đối với phép cộng.",
            "questions": []
          },
          {
            "id": "toan-4-b8",
            "number": 8,
            "title": "Bài 8: Tìm số trung bình cộng. Biểu đồ cột",
            "chapter": "Chủ đề 7: Số trung bình cộng & Biểu đồ cột",
            "summary": "Muốn tìm trung bình cộng ta tính tổng rồi chia cho số các số hạng.",
            "questions": []
          },
          {
            "id": "toan-4-b9",
            "number": 9,
            "title": "Bài 9: Khái niệm phân số. Tính chất cơ bản, rút gọn, quy đồng, so sánh phân số",
            "chapter": "Chủ đề 8: Phân số",
            "summary": "Phân số gồm tử số và mẫu số khác 0; rút gọn và quy đồng mẫu số.",
            "questions": []
          },
          {
            "id": "toan-4-b10",
            "number": 10,
            "title": "Bài 10: Phép cộng, phép trừ, phép nhân, phép chia phân số",
            "chapter": "Chủ đề 9: Các phép tính với phân số",
            "summary": "Cộng trừ cùng/khác mẫu, nhân tử với tử mẫu với mẫu, chia nhân đảo ngược.",
            "questions": [
              {
                "content": "Kết quả của phép tính 2/5 + 1/5 là:",
                "option_a": "3/10",
                "option_b": "3/5",
                "option_c": "1/5",
                "option_d": "2/25",
                "correct": "B"
              }
            ]
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
            "summary": "Bay hơi, ngưng tụ, đông đặc, nóng chảy và vòng tuần hoàn của nước.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b3",
            "number": 3,
            "title": "Bài 3: Sự ô nhiễm và bảo vệ nguồn nước. Một số cách làm sạch nước",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Lọc, khử trùng, đun sôi nước và tiết kiệm nước sạch.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b4",
            "number": 4,
            "title": "Bài 4: Không khí có ở đâu? Tính chất và thành phần của không khí",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Không khí gồm Nitơ (~78%), Ô-xi (~21%) và các khí khác (~1%).",
            "questions": [
              {
                "content": "Khí nào trong không khí duy trì sự sống và sự cháy?",
                "option_a": "Khí ni-tơ",
                "option_b": "Khí ô-xi",
                "option_c": "Khí các-bô-níc",
                "option_d": "Hơi nước",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khoahoc-4-b5",
            "number": 5,
            "title": "Bài 5: Vai trò của không khí và bảo vệ bầu không khí trong lành",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Nguyên nhân gây ô nhiễm không khí và biện pháp bảo vệ.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b6",
            "number": 6,
            "title": "Bài 6: Gió, bão và phòng chống bão",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Nguyên nhân sinh ra gió do chênh lệch nhiệt độ không khí; cấp độ bão.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b7",
            "number": 7,
            "title": "Bài 8: Ánh sáng và sự truyền ánh sáng",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Ánh sáng truyền theo đường thẳng; vật cho ánh sáng truyền qua và vật cản sáng.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b8",
            "number": 8,
            "title": "Bài 9: Vai trò của ánh sáng",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Ánh sáng giúp nhìn thấy vật, thực vật quang hợp và sưởi ấm Trái Đất.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b9",
            "number": 9,
            "title": "Bài 10: Âm thanh và sự truyền âm thanh",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Âm thanh phát ra khi vật rung động; truyền qua chất rắn, lỏng, khí.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b10",
            "number": 10,
            "title": "Bài 12: Nhiệt độ và sự truyền nhiệt",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Nhiệt truyền từ vật nóng hơn sang vật lạnh hơn; nhiệt kế.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b11",
            "number": 11,
            "title": "Bài 13: Vật dẫn nhiệt tốt, vật dẫn nhiệt kém",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Kim loại dẫn nhiệt tốt; gỗ, nhựa, len, không khí dẫn nhiệt kém.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b12",
            "number": 12,
            "title": "Bài 15: Thực vật cần gì để sống?",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Nước, chất khoáng, không khí và ánh sáng.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b13",
            "number": 13,
            "title": "Bài 16: Động vật cần gì để sống?",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Thức ăn, nước uống, không khí và ánh sáng.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b14",
            "number": 14,
            "title": "Bài 19: Đặc điểm chung của nấm & Nấm ăn, nấm độc",
            "chapter": "Chủ đề 4: Nấm",
            "summary": "Hình dạng, nơi sống ẩm ướt của nấm; phân biệt nấm ăn và nấm độc.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b15",
            "number": 15,
            "title": "Bài 23: Vai trò của chất dinh dưỡng với cơ thể",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "4 nhóm chất: Bột đường, Đạm, Béo, Vi-ta-min và chất khoáng.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b16",
            "number": 16,
            "title": "Bài 24: Chế độ ăn uống cân bằng & Một số bệnh liên quan đến dinh dưỡng",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Tháp dinh dưỡng; phòng bệnh suy dinh dưỡng, béo phì, bướu cổ.",
            "questions": []
          },
          {
            "id": "khoahoc-4-b17",
            "number": 17,
            "title": "Bài 29: Chuỗi thức ăn trong tự nhiên",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Mối quan hệ thức ăn bắt đầu từ thực vật trong tự nhiên.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsudiali-4",
        "name": "Lịch sử và Địa lí",
        "icon": "🗺️",
        "lessons": [
          {
            "id": "lichsudiali-4-b1",
            "number": 1,
            "title": "Bài 1: Làm quen với phương tiện học tập môn Lịch sử và Địa lí",
            "chapter": "Mở đầu & Địa phương em",
            "summary": "Bản đồ, lược đồ, trục thời gian, hiện vật lịch sử.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b2",
            "number": 2,
            "title": "Bài 4: Thiên nhiên vùng Trung du và miền núi Bắc Bộ",
            "chapter": "Chủ đề 2: Trung du và miền núi Bắc Bộ",
            "summary": "Địa hình cao nhất cả nước (dãy Hoàng Liên Sơn, đỉnh Phan-xi-păng).",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b3",
            "number": 3,
            "title": "Bài 7: Đền Hùng và lễ giỗ Tổ Hùng Vương",
            "chapter": "Chủ đề 2: Trung du và miền núi Bắc Bộ",
            "summary": "Di tích Đền Hùng ở Phú Thọ, ngày giỗ Tổ mùng 10 tháng 3 âm lịch.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b4",
            "number": 4,
            "title": "Bài 8: Thiên nhiên vùng Đồng bằng Bắc Bộ",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Đồng bằng châu thổ lớn thứ hai do sông Hồng và sông Thái Bình bồi đắp.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b5",
            "number": 5,
            "title": "Bài 12: Thăng Long – Hà Nội",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Vua Lý Thái Tổ dời đô về Thăng Long năm 1010.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b6",
            "number": 6,
            "title": "Bài 13: Văn Miếu – Quốc Tử Giám",
            "chapter": "Chủ đề 3: Đồng bằng Bắc Bộ",
            "summary": "Trường đại học đầu tiên của nước ta xây dựng thời nhà Lý.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b7",
            "number": 7,
            "title": "Bài 15: Thiên nhiên vùng Duyên hải miền Trung",
            "chapter": "Chủ đề 4: Duyên hải miền Trung",
            "summary": "Dải đồng bằng nhỏ hẹp ven biển, dãy Trường Sơn và Bạch Mã.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b8",
            "number": 8,
            "title": "Bài 18: Cố đô Huế & Phố cổ Hội An",
            "chapter": "Chủ đề 4: Duyên hải miền Trung",
            "summary": "Quần thể di tích Cố đô Huế và Phố cổ Hội An được UNESCO công nhận.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b9",
            "number": 9,
            "title": "Bài 20: Thiên nhiên vùng Tây Nguyên & Lễ hội Cồng chiêng",
            "chapter": "Chủ đề 5: Tây Nguyên",
            "summary": "Các cao nguyên xếp tầng, đất đỏ bazan, Không gian văn hóa Cồng chiêng.",
            "questions": []
          },
          {
            "id": "lichsudiali-4-b10",
            "number": 10,
            "title": "Bài 24: Thiên nhiên vùng Nam Bộ & Thành phố Hồ Chí Minh & Địa đạo Củ Chi",
            "chapter": "Chủ đề 6: Nam Bộ",
            "summary": "Đồng bằng sông Cửu Long màu mỡ, vựa lúa và trái cây lớn nhất cả nước.",
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
            "title": "Bài 1: Phần cứng và phần mềm",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Phân biệt thiết bị phần cứng và chương trình phần mềm.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b2",
            "number": 2,
            "title": "Bài 2: Gõ bàn phím đúng cách",
            "chapter": "Chủ đề 1: Máy tính và em",
            "summary": "Luyện gõ 10 ngón hàng phím cơ sở, hàng trên, hàng dưới.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b3",
            "number": 3,
            "title": "Bài 3: Thông tin trên trang web",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Nhận biết siêu liên kết và thông tin đa phương tiện trên web.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b4",
            "number": 4,
            "title": "Bài 4: Tìm kiếm thông tin trên Internet",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ",
            "summary": "Sử dụng từ khóa tìm kiếm thông tin chính xác trên máy tìm kiếm.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b5",
            "number": 5,
            "title": "Bài 5: Bản quyền nội dung thông tin",
            "chapter": "Chủ đề 4: Đạo đức, pháp luật",
            "summary": "Tôn trọng bản quyền phần mềm, hình ảnh, bài viết.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b6",
            "number": 6,
            "title": "Bài 6: Tạo bài trình chiếu & Định dạng văn bản",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Chèn hình ảnh, hiệu ứng chuyển trang vào bài trình chiếu.",
            "questions": []
          },
          {
            "id": "tinhoc-4-b7",
            "number": 7,
            "title": "Bài 7: Làm quen với lập trình trực quan Scratch",
            "chapter": "Chủ đề 6: Giải quyết vấn đề",
            "summary": "Tạo chương trình đơn giản điều khiển nhân vật chuyển động.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-4",
        "name": "Tiếng Việt",
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-4-b1",
            "number": 1,
            "title": "Bài 1: Điều kì diệu & Thi nhạc",
            "chapter": "Tập 1: Mỗi người một vẻ",
            "summary": "Phát hiện giá trị riêng của mỗi người; danh từ, động từ.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b2",
            "number": 2,
            "title": "Bài 2: Bầu trời trong quả trứng & Con vẹt xanh",
            "chapter": "Tập 1: Trải nghiệm và khám phá",
            "summary": "Cảm nhận thế giới tự nhiên; tính từ và biện pháp nhân hóa.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b3",
            "number": 3,
            "title": "Bài 3: Vẽ màu & Nhà phát minh 6 tuổi",
            "chapter": "Tập 1: Niềm vui sáng tạo",
            "summary": "Sáng tạo trong học tập và cuộc sống; viết đoạn văn nêu tình cảm.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b4",
            "number": 4,
            "title": "Bài 4: Ở vương quốc Tương Lai & Ông Bụt đã đến",
            "chapter": "Tập 1: Chắp cánh ước mơ",
            "summary": "Ước mơ đẹp về khoa học, hòa bình.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b5",
            "number": 5,
            "title": "Bài 5: Hải thượng Lãn Ông & Tờ báo tường của tôi",
            "chapter": "Tập 2: Sống để yêu thương",
            "summary": "Lòng nhân ái, thương người; chủ ngữ, vị ngữ trong câu.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b6",
            "number": 6,
            "title": "Bài 6: Sự tích cây vú sữa & Anh em sinh đôi",
            "chapter": "Tập 2: Uống nước nhớ nguồn",
            "summary": "Lòng biết ơn, truyền thống gia đình và dân tộc.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b7",
            "number": 7,
            "title": "Bài 7: Chợ Tết & Tre Việt Nam",
            "chapter": "Tập 2: Quê hương trong tôi",
            "summary": "Vẻ đẹp văn hóa quê hương và phẩm chất con người Việt Nam.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b8",
            "number": 8,
            "title": "Bài 8: Ngọn lửa Ô-lim-pích & Những cánh buồm",
            "chapter": "Tập 2: Vì một thế giới bình yên",
            "summary": "Khát vọng hòa bình, hữu nghị toàn cầu.",
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
            "title": "Unit 1 - 5: Countries, Time, Days of the week, Birthdays, Things we can do",
            "chapter": "Unit 1 - 10 (Học kì 1)",
            "summary": "Where are you from? What time is it? When's your birthday? Can you...?",
            "questions": []
          },
          {
            "id": "tienganh-4-b2",
            "number": 2,
            "title": "Unit 6 - 10: Our school, Timetable, Favourite subjects, Sports day, Summer holidays",
            "chapter": "Unit 1 - 10 (Học kì 1)",
            "summary": "What subjects do you have today? Where were you yesterday?",
            "questions": []
          },
          {
            "id": "tienganh-4-b3",
            "number": 3,
            "title": "Unit 11 - 15: My home, Jobs, Appearance, Daily activities, My weekend",
            "chapter": "Unit 11 - 20 (Học kì 2)",
            "summary": "Where do you live? What does your father do? What does he/she look like?",
            "questions": []
          },
          {
            "id": "tienganh-4-b4",
            "number": 4,
            "title": "Unit 16 - 20: Weather, In the city, At the shopping centre, The animal world, At summer camp",
            "chapter": "Unit 11 - 20 (Học kì 2)",
            "summary": "What's the weather like? How much is...? What are the animals doing?",
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
        "icon": "🔢",
        "lessons": [
          {
            "id": "toan-5-b1",
            "number": 1,
            "title": "Bài 1: Ôn tập số tự nhiên, phân số và hỗn số",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Chuyển hỗn số thành phân số; giải toán tỉ số.",
            "questions": []
          },
          {
            "id": "toan-5-b2",
            "number": 2,
            "title": "Bài 2: Khái niệm số thập phân. Hàng và đọc, viết, so sánh số thập phân",
            "chapter": "Chủ đề 2: Số thập phân",
            "summary": "Phần nguyên và phần thập phân; hàng phần mười, phần trăm, phần nghìn.",
            "questions": [
              {
                "content": "Trong số thập phân 12,345 chữ số 4 thuộc hàng nào?",
                "option_a": "Hàng phần mười",
                "option_b": "Hàng phần trăm",
                "option_c": "Hàng phần nghìn",
                "option_d": "Hàng chục",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-5-b3",
            "number": 3,
            "title": "Bài 3: Ki-lô-mét vuông (km²), Héc-ta (ha)",
            "chapter": "Chủ đề 3: Một số đơn vị đo diện tích",
            "summary": "1 ha = 10 000 m²; 1 km² = 100 ha.",
            "questions": []
          },
          {
            "id": "toan-5-b4",
            "number": 4,
            "title": "Bài 4: Cộng, trừ, nhân, chia số thập phân",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Quy tắc đặt tính thẳng dấu phẩy khi cộng trừ; đếm chữ số thập phân khi nhân.",
            "questions": []
          },
          {
            "id": "toan-5-b5",
            "number": 5,
            "title": "Bài 5: Diện tích hình tam giác, hình thang. Chu vi và diện tích hình tròn",
            "chapter": "Chủ đề 5: Một số hình phẳng. Chu vi và diện tích",
            "summary": "S tam giác = (a × h)/2; S hình thang = (a + b) × h / 2; C tròn = d × 3,14; S tròn = r × r × 3,14.",
            "questions": [
              {
                "content": "Diện tích hình tam giác có độ dài đáy 10 cm và chiều cao 6 cm là:",
                "option_a": "60 cm²",
                "option_b": "30 cm²",
                "option_c": "16 cm²",
                "option_d": "20 cm²",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-5-b6",
            "number": 6,
            "title": "Bài 6: Tỉ số phần trăm và các dạng toán về tỉ số phần trăm",
            "chapter": "Chủ đề 6: Tỉ số phần trăm",
            "summary": "Tìm tỉ số phần trăm của hai số; tìm giá trị phần trăm của một số.",
            "questions": []
          },
          {
            "id": "toan-5-b7",
            "number": 7,
            "title": "Bài 7: Xăng-ti-mét khối, Đề-xi-mét khối, Mét khối",
            "chapter": "Chủ đề 7: Thể tích. Đơn vị đo thể tích",
            "summary": "1 m³ = 1000 dm³ = 1000 lít; 1 dm³ = 1000 cm³.",
            "questions": []
          },
          {
            "id": "toan-5-b8",
            "number": 8,
            "title": "Bài 8: Diện tích xung quanh, toàn phần và thể tích hình hộp chữ nhật, hình lập phương",
            "chapter": "Chủ đề 8: Hình hộp chữ nhật, Hình lập phương",
            "summary": "V HHCN = a × b × c; V HLP = a × a × a.",
            "questions": []
          },
          {
            "id": "toan-5-b9",
            "number": 9,
            "title": "Bài 9: Cộng trừ nhân chia số đo thời gian. Vận tốc, quãng đường, thời gian",
            "chapter": "Chủ đề 9: Số đo thời gian. Vận tốc",
            "summary": "Công thức v = s : t; s = v × t; t = s : v.",
            "questions": [
              {
                "content": "Một ô tô đi quãng đường dài 120 km hết 2 giờ. Vận tốc của ô tô là:",
                "option_a": "240 km/giờ",
                "option_b": "60 km/giờ",
                "option_c": "50 km/giờ",
                "option_d": "120 km/giờ",
                "correct": "B"
              }
            ]
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
            "summary": "Thành phần đất gồm chất khoáng, mùn, không khí và nước.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b2",
            "number": 2,
            "title": "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Nguyên nhân xói mòn, ô nhiễm và biện pháp trồng cây phủ xanh.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b3",
            "number": 3,
            "title": "Bài 3: Hỗn hợp và dung dịch",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Phân biệt hỗn hợp và dung dịch (chất tan hòa tan hoàn toàn vào dung môi).",
            "questions": []
          },
          {
            "id": "khoahoc-5-b4",
            "number": 4,
            "title": "Bài 4: Đặc điểm các chất ở trạng thái rắn, lỏng, khí. Sự biến đổi trạng thái",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Biến đổi vật lí chỉ thay đổi hình dạng, trạng thái, giữ nguyên chất.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b5",
            "number": 5,
            "title": "Bài 5: Sự biến đổi hóa học của chất",
            "chapter": "Chủ đề 1: Chất",
            "summary": "Biến đổi hóa học tạo ra chất mới (như sắt gỉ, đốt cháy giấy).",
            "questions": []
          },
          {
            "id": "khoahoc-5-b6",
            "number": 6,
            "title": "Bài 7: Vai trò của năng lượng & Năng lượng chất đốt",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Than đá, dầu mỏ, khí tự nhiên là nguồn năng lượng không tái tạo.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b7",
            "number": 7,
            "title": "Bài 8 & 9: Sử dụng năng lượng điện. Mạch điện đơn giản. Vật dẫn điện và cách điện",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Kim loại dẫn điện; nhựa, cao su, gỗ khô cách điện.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b8",
            "number": 8,
            "title": "Bài 11: Sử dụng năng lượng mặt trời, năng lượng gió, năng lượng nước chảy",
            "chapter": "Chủ đề 2: Năng lượng",
            "summary": "Các nguồn năng lượng sạch, tái tạo và bảo vệ môi trường.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b9",
            "number": 9,
            "title": "Bài 13 & 14: Sinh sản của thực vật có hoa và sự phát triển của cây con",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Nhị, nhụy, thụ phấn, thụ tinh, kết hạt; mọc từ hạt hoặc thân rễ lá.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b10",
            "number": 10,
            "title": "Bài 15 & 16: Sinh sản và vòng đời phát triển của động vật",
            "chapter": "Chủ đề 3: Thực vật và động vật",
            "summary": "Động vật đẻ trứng và đẻ con; biến thái ở bướm, ếch.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b11",
            "number": 11,
            "title": "Bài 18 - 20: Vi khuẩn xung quanh ta, vi khuẩn có ích và vi khuẩn gây bệnh",
            "chapter": "Chủ đề 4: Vi khuẩn",
            "summary": "Vi khuẩn kích thước siêu nhỏ; làm sữa chua, muối chua (có ích) và gây bệnh tả, lao.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b12",
            "number": 12,
            "title": "Bài 22 - 26: Cơ thể người, tuổi dậy thì và phòng tránh bị xâm hại",
            "chapter": "Chủ đề 5: Con người và sức khỏe",
            "summary": "Sự thụ tinh, các giai đoạn phát triển, chăm sóc sức khỏe tuổi dậy thì.",
            "questions": []
          },
          {
            "id": "khoahoc-5-b13",
            "number": 13,
            "title": "Bài 28 & 29: Chức năng của môi trường và biện pháp bảo vệ môi trường",
            "chapter": "Chủ đề 6: Sinh vật và môi trường",
            "summary": "Môi trường cung cấp nơi ở, thức ăn và chứa chất thải.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsudiali-5",
        "name": "Lịch sử và Địa lí",
        "icon": "🗺️",
        "lessons": [
          {
            "id": "lichsudiali-5-b1",
            "number": 1,
            "title": "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca",
            "chapter": "Chủ đề 1: Đất nước và con người Việt Nam",
            "summary": "Việt Nam ở khu vực Đông Nam Á; hình chữ S; biển Đông.",
            "questions": []
          },
          {
            "id": "lichsudiali-5-b2",
            "number": 2,
            "title": "Bài 2 & 3: Thiên nhiên, biển đảo và dân cư Việt Nam",
            "chapter": "Chủ đề 1: Đất nước và con người Việt Nam",
            "summary": "Khí hậu nhiệt đới ẩm gió mùa, hai quần đảo Hoàng Sa, Trường Sa, 54 dân tộc.",
            "questions": []
          },
          {
            "id": "lichsudiali-5-b3",
            "number": 3,
            "title": "Bài 5 - 7: Nhà nước Văn Lang, Âu Lạc, Vương quốc Phù Nam, Chăm-pa",
            "chapter": "Chủ đề 2: Những quốc gia đầu tiên trên lãnh thổ Việt Nam",
            "summary": "Thời đại Hùng Vương, An Dương Vương, văn hóa Óc Eo, tháp Chăm.",
            "questions": []
          },
          {
            "id": "lichsudiali-5-b4",
            "number": 4,
            "title": "Bài 8 - 10: Đấu tranh giành độc lập Bắc thuộc, Triều Lý, Triều Trần",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước",
            "summary": "Chiến thắng Bạch Đằng 938, Lý Thái Tổ, 3 lần kháng chiến chống Mông - Nguyên.",
            "questions": []
          },
          {
            "id": "lichsudiali-5-b5",
            "number": 5,
            "title": "Bài 12 - 13: Khởi nghĩa Lam Sơn, Triều Hậu Lê và Triều Nguyễn",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước",
            "summary": "Lê Lợi, Nguyễn Trãi, Quốc triều hình luật, vua Gia Long, Minh Mạng.",
            "questions": []
          },
          {
            "id": "lichsudiali-5-b6",
            "number": 6,
            "title": "Bài 14 - 17: Cách mạng tháng Tám 1945, Điện Biên Phủ 1954, Chiến dịch Hồ Chí Minh 1975, Đổi mới",
            "chapter": "Chủ đề 3: Xây dựng và bảo vệ đất nước",
            "summary": "Các mốc son lịch sử hiện đại Việt Nam.",
            "questions": [
              {
                "content": "Chiến dịch Điện Biên Phủ thắng lợi vẻ vang vào ngày tháng năm nào?",
                "option_a": "19/08/1945",
                "option_b": "07/05/1954",
                "option_c": "30/04/1975",
                "option_d": "02/09/1945",
                "correct": "B"
              }
            ]
          },
          {
            "id": "lichsudiali-5-b7",
            "number": 7,
            "title": "Bài 18 - 25: Trung Quốc, Lào, Campuchia, ASEAN, Các châu lục, Ai Cập, Hy Lạp",
            "chapter": "Chủ đề 4 & 5: Các nước láng giềng và Thế giới",
            "summary": "Địa lí các nước láng giềng, 5 châu lục và văn minh cổ đại Ai Cập, Hy Lạp.",
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
            "summary": "Ứng dụng máy tính trong học tập, giải trí, liên lạc.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b2",
            "number": 2,
            "title": "Bài 2: Tìm kiếm thông tin, cây thư mục và tôn trọng bản quyền",
            "chapter": "Chủ đề 2 & 3: Thông tin & Bản quyền",
            "summary": "Tìm kiếm và tổ chức cây thư mục hợp lí.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b3",
            "number": 3,
            "title": "Bài 3: Tạo văn bản có chèn ảnh và bảng biểu",
            "chapter": "Chủ đề 4: Phần mềm đồ họa & Văn bản",
            "summary": "Kĩ năng soạn thảo văn bản hoàn chỉnh.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b4",
            "number": 4,
            "title": "Bài 4: Cấu trúc tuần tự, rẽ nhánh (Nếu... thì...) và lặp trong Scratch",
            "chapter": "Chủ đề 5: Lập trình Scratch",
            "summary": "Tư duy thuật toán với các khối lệnh điều kiện và vòng lặp.",
            "questions": []
          }
        ]
      },
      {
        "id": "tiengviet-5",
        "name": "Tiếng Việt",
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-5-b1",
            "number": 1,
            "title": "Bài 1 - 4: Thế giới tuổi thơ & Thiên nhiên kì thú",
            "chapter": "Tập 1",
            "summary": "Đọc hiểu văn bản miêu tả, kể chuyện; từ đồng nghĩa, từ trái nghĩa, từ đa nghĩa.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b2",
            "number": 2,
            "title": "Bài 5 - 8: Trên con đường học tập & Nghệ thuật muôn màu",
            "chapter": "Tập 1",
            "summary": "Đại từ, kết từ và cấu tạo câu đơn, câu ghép.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b3",
            "number": 3,
            "title": "Bài 9 - 12: Vẻ đẹp cuộc sống & Hương sắc trăm miền",
            "chapter": "Tập 2",
            "summary": "Liên kết câu bằng cách lặp từ ngữ, thay thế từ ngữ, dùng từ nối.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b4",
            "number": 4,
            "title": "Bài 13 - 16: Tiếp bước cha ông & Thế giới của chúng ta",
            "chapter": "Tập 2",
            "summary": "Văn bản nghị luận, báo cáo và ôn tập tổng hợp cuối cấp Tiểu học.",
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
            "title": "Unit 1 - 5: All about me, Our homes, Foreign friends, Free time, Future jobs",
            "chapter": "Học kì 1 (Unit 1 - 10)",
            "summary": "Where do you live? What nationality is he/she? What would you like to be in the future?",
            "questions": []
          },
          {
            "id": "tienganh-5-b2",
            "number": 2,
            "title": "Unit 6 - 10: School rooms, School activities, Classroom things, Outdoor activities, School trip",
            "chapter": "Học kì 1 (Unit 1 - 10)",
            "summary": "Past simple with 'did / were'; directions in school.",
            "questions": []
          },
          {
            "id": "tienganh-5-b3",
            "number": 3,
            "title": "Unit 11 - 15: Family time, Tet holiday, Special days, Staying healthy, Our health",
            "chapter": "Học kì 2 (Unit 11 - 20)",
            "summary": "How often...? What's the matter with you? You should...",
            "questions": []
          },
          {
            "id": "tienganh-5-b4",
            "number": 4,
            "title": "Unit 16 - 20: Seasons and weather, Stories for children, Means of transport, Places of interest, Summer holidays",
            "chapter": "Học kì 2 (Unit 11 - 20)",
            "summary": "How can I get to...? Where are you going to visit this summer?",
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
            "summary": "Khái niệm tập hợp, phần tử thuộc (∈) hoặc không thuộc (∉) tập hợp, hai cách mô tả tập hợp.",
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
            "summary": "Tập hợp N và N*, hệ thập phân, giá trị chữ số theo hàng, số La Mã từ 1 đến 30.",
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
            "summary": "So sánh hai số tự nhiên, biểu diễn trên tia số, tính chất bắc cầu.",
            "questions": []
          },
          {
            "id": "toan-6-b4",
            "number": 4,
            "title": "Bài 4: Phép cộng và phép trừ số tự nhiên",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Tính chất giao hoán, kết hợp của phép cộng và phép trừ hai số tự nhiên.",
            "questions": []
          },
          {
            "id": "toan-6-b5",
            "number": 5,
            "title": "Bài 5: Phép nhân và phép chia số tự nhiên",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Tính chất phân phối của phép nhân đối với phép cộng, phép chia hết và phép chia có dư.",
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
            "questions": [
              {
                "content": "Kết quả của phép tính 2³ · 2² viết dưới dạng một lũy thừa là:",
                "option_a": "2⁶",
                "option_b": "2⁵",
                "option_c": "4⁵",
                "option_d": "4⁶",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-6-b7",
            "number": 7,
            "title": "Bài 7: Thứ tự thực hiện các phép tính",
            "chapter": "Chương I: Tập hợp các số tự nhiên",
            "summary": "Quy ước thứ tự thực hiện biểu thức không dấu ngoặc và có dấu ngoặc (), [], {}.",
            "questions": []
          },
          {
            "id": "toan-6-b8",
            "number": 8,
            "title": "Bài 8: Quan hệ chia hết và tính chất",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Ước và bội của một số tự nhiên, tính chất chia hết của một tổng.",
            "questions": [
              {
                "content": "Tổng nào sau đây chia hết cho 5?",
                "option_a": "15 + 23",
                "option_b": "20 + 35",
                "option_c": "10 + 12",
                "option_d": "25 + 14",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-6-b9",
            "number": 9,
            "title": "Bài 9: Dấu hiệu chia hết",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Dấu hiệu chia hết cho 2, 5, 9 và 3.",
            "questions": [
              {
                "content": "Số nào sau đây chia hết cho cả 3 và 9?",
                "option_a": "123",
                "option_b": "450",
                "option_c": "235",
                "option_d": "712",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-6-b10",
            "number": 10,
            "title": "Bài 10: Số nguyên tố",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Định nghĩa số nguyên tố, hợp số và phân tích một số ra thừa số nguyên tố.",
            "questions": [
              {
                "content": "Số nguyên tố chẵn duy nhất là số nào?",
                "option_a": "0",
                "option_b": "1",
                "option_c": "2",
                "option_d": "4",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-6-b11",
            "number": 11,
            "title": "Bài 11: Ước chung. Ước chung lớn nhất",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Tìm ƯCLN bằng phân tích thừa số nguyên tố, hai số nguyên tố cùng nhau, rút gọn phân số.",
            "questions": []
          },
          {
            "id": "toan-6-b12",
            "number": 12,
            "title": "Bài 12: Bội chung. Bội chung nhỏ nhất",
            "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
            "summary": "Tìm BCNN, ứng dụng quy đồng mẫu số các phân số.",
            "questions": [
              {
                "content": "BCNN(6, 8) bằng bao nhiêu?",
                "option_a": "48",
                "option_b": "24",
                "option_c": "12",
                "option_d": "16",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-6-b13",
            "number": 13,
            "title": "Bài 13: Tập hợp các số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Số nguyên âm, tập hợp Z, trục số nguyên và số đối.",
            "questions": []
          },
          {
            "id": "toan-6-b14",
            "number": 14,
            "title": "Bài 14: Phép cộng và phép trừ số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Quy tắc cộng hai số nguyên cùng dấu, khác dấu và trừ hai số nguyên.",
            "questions": [
              {
                "content": "Kết quả của phép tính (-12) + 7 là:",
                "option_a": "-19",
                "option_b": "5",
                "option_c": "-5",
                "option_d": "19",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-6-b15",
            "number": 15,
            "title": "Bài 15: Quy tắc dấu ngoặc",
            "chapter": "Chương III: Số nguyên",
            "summary": "Bỏ dấu ngoặc khi đằng trước có dấu + hoặc dấu -.",
            "questions": []
          },
          {
            "id": "toan-6-b16",
            "number": 16,
            "title": "Bài 16: Phép nhân số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Quy tắc nhân hai số nguyên cùng dấu, khác dấu; tính chất giao hoán, kết hợp, phân phối.",
            "questions": []
          },
          {
            "id": "toan-6-b17",
            "number": 17,
            "title": "Bài 17: Phép chia hết. Ước và bội của một số nguyên",
            "chapter": "Chương III: Số nguyên",
            "summary": "Phép chia hết trong Z, tìm ước và bội của số nguyên.",
            "questions": []
          },
          {
            "id": "toan-6-b18",
            "number": 18,
            "title": "Bài 18: Hình tam giác đều. Hình vuông. Hình lục giác đều",
            "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
            "summary": "Đặc điểm cạnh, góc và đường chéo của tam giác đều, hình vuông, lục giác đều.",
            "questions": []
          },
          {
            "id": "toan-6-b19",
            "number": 19,
            "title": "Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân",
            "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
            "summary": "Nhận dạng tính chất các tứ giác đặc biệt trong thực tế.",
            "questions": []
          },
          {
            "id": "toan-6-b20",
            "number": 20,
            "title": "Bài 20: Chu vi và diện tích của một số tứ giác đã học",
            "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
            "summary": "Công thức tính chu vi, diện tích hình bình hành, hình thoi, hình thang.",
            "questions": [
              {
                "content": "Diện tích hình thoi có độ dài hai đường chéo là 6 cm và 8 cm bằng:",
                "option_a": "48 cm²",
                "option_b": "24 cm²",
                "option_c": "14 cm²",
                "option_d": "28 cm²",
                "correct": "B"
              }
            ]
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
            "summary": "Nhận biết tâm đối xứng của hình phẳng và ứng dụng thực tiễn.",
            "questions": []
          },
          {
            "id": "toan-6-b23",
            "number": 23,
            "title": "Bài 23: Mở rộng phân số. Phân số bằng nhau",
            "chapter": "Chương VI: Phân số",
            "summary": "Phân số có tử và mẫu là số nguyên; tính chất cơ bản của phân số.",
            "questions": []
          },
          {
            "id": "toan-6-b24",
            "number": 24,
            "title": "Bài 24: So sánh phân số. Hỗn số dương",
            "chapter": "Chương VI: Phân số",
            "summary": "Quy đồng mẫu, so sánh hai phân số, đổi hỗn số dương sang phân số.",
            "questions": []
          },
          {
            "id": "toan-6-b25",
            "number": 25,
            "title": "Bài 25: Phép cộng và phép trừ phân số",
            "chapter": "Chương VI: Phân số",
            "summary": "Cộng, trừ hai phân số cùng mẫu và khác mẫu.",
            "questions": []
          },
          {
            "id": "toan-6-b26",
            "number": 26,
            "title": "Bài 26: Phép nhân và phép chia phân số",
            "chapter": "Chương VI: Phân số",
            "summary": "Nhân hai phân số, phân số nghịch đảo và chia hai phân số.",
            "questions": []
          },
          {
            "id": "toan-6-b27",
            "number": 27,
            "title": "Bài 27: Hai bài toán về phân số",
            "chapter": "Chương VI: Phân số",
            "summary": "Tìm giá trị phân số của một số cho trước và tìm một số biết giá trị phân số của nó.",
            "questions": []
          },
          {
            "id": "toan-6-b28",
            "number": 28,
            "title": "Bài 28: Số thập phân",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Số thập phân âm, số đối, so sánh hai số thập phân.",
            "questions": []
          },
          {
            "id": "toan-6-b29",
            "number": 29,
            "title": "Bài 29: Tính toán với số thập phân",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Cộng, trừ, nhân, chia số thập phân dương và âm.",
            "questions": []
          },
          {
            "id": "toan-6-b30",
            "number": 30,
            "title": "Bài 30: Làm tròn và ước lượng",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Quy tắc làm tròn số thập phân theo độ chính xác cho trước.",
            "questions": []
          },
          {
            "id": "toan-6-b31",
            "number": 31,
            "title": "Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm",
            "chapter": "Chương VII: Số thập phân",
            "summary": "Tính tỉ số phần trăm, bài toán giảm giá, lãi suất đơn giản.",
            "questions": []
          },
          {
            "id": "toan-6-b32",
            "number": 32,
            "title": "Bài 32: Điểm và đường thẳng",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Điểm thuộc/không thuộc đường thẳng, ba điểm thẳng hàng.",
            "questions": []
          },
          {
            "id": "toan-6-b33",
            "number": 33,
            "title": "Bài 33: Điểm nằm giữa hai điểm. Tia",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Khái niệm điểm nằm giữa hai điểm, tia và hai tia đối nhau.",
            "questions": []
          },
          {
            "id": "toan-6-b34",
            "number": 34,
            "title": "Bài 34: Đoạn thẳng. Độ dài đoạn thẳng",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "So sánh độ dài đoạn thẳng và tính chất cộng độ dài.",
            "questions": []
          },
          {
            "id": "toan-6-b35",
            "number": 35,
            "title": "Bài 35: Trung điểm của đoạn thẳng",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Định nghĩa và tính chất trung điểm của đoạn thẳng.",
            "questions": []
          },
          {
            "id": "toan-6-b36",
            "number": 36,
            "title": "Bài 36: Góc",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Khái niệm góc, đỉnh, cạnh, điểm nằm trong góc.",
            "questions": []
          },
          {
            "id": "toan-6-b37",
            "number": 37,
            "title": "Bài 37: Số đo góc",
            "chapter": "Chương VIII: Những hình hình học cơ bản",
            "summary": "Đo góc bằng thước đo góc, góc vuông, góc nhọn, góc tù, góc bẹt.",
            "questions": [
              {
                "content": "Góc có số đo bằng 90° gọi là góc gì?",
                "option_a": "Góc nhọn",
                "option_b": "Góc tù",
                "option_c": "Góc vuông",
                "option_d": "Góc bẹt",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-6-b38",
            "number": 38,
            "title": "Bài 38: Dữ liệu và thu thập dữ liệu",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Phân biệt dữ liệu số và dữ liệu không phải là số, tính hợp lí của dữ liệu.",
            "questions": []
          },
          {
            "id": "toan-6-b39",
            "number": 39,
            "title": "Bài 39: Bảng thống kê và biểu đồ tranh",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Lập và đọc thông tin từ bảng thống kê, biểu đồ tranh.",
            "questions": []
          },
          {
            "id": "toan-6-b40",
            "number": 40,
            "title": "Bài 40: Biểu đồ cột",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Đọc và phân tích dữ liệu từ biểu đồ cột.",
            "questions": []
          },
          {
            "id": "toan-6-b41",
            "number": 41,
            "title": "Bài 41: Biểu đồ cột kép",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "So sánh hai bộ dữ liệu cùng loại qua biểu đồ cột kép.",
            "questions": []
          },
          {
            "id": "toan-6-b42",
            "number": 42,
            "title": "Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Liệt kê các kết quả có thể xảy ra và sự kiện chắc chắn/không thể/có thể.",
            "questions": []
          },
          {
            "id": "toan-6-b43",
            "number": 43,
            "title": "Bài 43: Xác suất thực nghiệm",
            "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
            "summary": "Công thức tính xác suất thực nghiệm qua n lần thử.",
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
            "summary": "Khái niệm KHTN, đối tượng nghiên cứu và vai trò trong đời sống.",
            "questions": [
              {
                "content": "Lĩnh vực nào sau đây nghiên cứu về các chất và sự biến đổi của chúng?",
                "option_a": "Vật lí học",
                "option_b": "Hóa học",
                "option_c": "Sinh học",
                "option_d": "Thiên văn học",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-6-b2",
            "number": 2,
            "title": "Bài 2: An toàn trong phòng thực hành",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Nội quy phòng thực hành và ý nghĩa các kí hiệu cảnh báo.",
            "questions": []
          },
          {
            "id": "khtn-6-b3",
            "number": 3,
            "title": "Bài 3: Sử dụng kính lúp",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Cấu tạo và cách sử dụng kính lúp quan sát vật nhỏ.",
            "questions": []
          },
          {
            "id": "khtn-6-b4",
            "number": 4,
            "title": "Bài 4: Sử dụng kính hiển vi quang học",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Các bộ phận chính của kính hiển vi và thao tác quan sát tế bào.",
            "questions": []
          },
          {
            "id": "khtn-6-b5",
            "number": 5,
            "title": "Bài 5: Đo chiều dài",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Đơn vị đo chiều dài (mét), giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) của thước.",
            "questions": []
          },
          {
            "id": "khtn-6-b6",
            "number": 6,
            "title": "Bài 6: Đo khối lượng",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Đơn vị đo khối lượng (kg), cách dùng cân đồng hồ và cân điện tử.",
            "questions": []
          },
          {
            "id": "khtn-6-b7",
            "number": 7,
            "title": "Bài 7: Đo thời gian",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Đơn vị đo thời gian (giây), sử dụng đồng hồ bấm giây.",
            "questions": []
          },
          {
            "id": "khtn-6-b8",
            "number": 8,
            "title": "Bài 8: Đo nhiệt độ",
            "chapter": "Chương I: Mở đầu về Khoa học tự nhiên",
            "summary": "Thang nhiệt độ Celsius, cấu tạo và cách dùng nhiệt kế.",
            "questions": []
          },
          {
            "id": "khtn-6-b9",
            "number": 9,
            "title": "Bài 9: Sự đa dạng của chất",
            "chapter": "Chương II: Chất quanh ta",
            "summary": "Phân biệt vật thể tự nhiên, vật thể nhân tạo, vật sống và vật không sống.",
            "questions": []
          },
          {
            "id": "khtn-6-b10",
            "number": 10,
            "title": "Bài 10: Các thể của chất và sự chuyển thể",
            "chapter": "Chương II: Chất quanh ta",
            "summary": "Đặc điểm thể rắn, lỏng, khí; các quá trình nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi.",
            "questions": [
              {
                "content": "Quá trình chuyển từ thể lỏng sang thể khí trên bề mặt chất lỏng gọi là gì?",
                "option_a": "Nóng chảy",
                "option_b": "Đông đặc",
                "option_c": "Bay hơi",
                "option_d": "Ngưng tụ",
                "correct": "C"
              }
            ]
          },
          {
            "id": "khtn-6-b11",
            "number": 11,
            "title": "Bài 11: Oxygen. Không khí",
            "chapter": "Chương II: Chất quanh ta",
            "summary": "Tính chất của oxygen, thành phần không khí (78% N2, 21% O2, 1% khí khác) và bảo vệ môi trường.",
            "questions": [
              {
                "content": "Trong không khí sạch, khí Oxygen (O₂) chiếm tỉ lệ thể tích khoảng bao nhiêu?",
                "option_a": "78%",
                "option_b": "21%",
                "option_c": "1%",
                "option_d": "50%",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-6-b12",
            "number": 12,
            "title": "Bài 12: Một số vật liệu",
            "chapter": "Chương III: Một số vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm thông dụng",
            "summary": "Tính chất và ứng dụng của kim loại, nhựa, gỗ, thủy tinh, gốm, cao su.",
            "questions": []
          },
          {
            "id": "khtn-6-b13",
            "number": 13,
            "title": "Bài 13: Một số nguyên liệu",
            "chapter": "Chương III: Một số vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm thông dụng",
            "summary": "Quặng, đá vôi, cát... và sử dụng nguyên liệu an toàn, hiệu quả.",
            "questions": []
          },
          {
            "id": "khtn-6-b14",
            "number": 14,
            "title": "Bài 14: Một số nhiên liệu",
            "chapter": "Chương III: Một số vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm thông dụng",
            "summary": "Nhiên liệu rắn, lỏng, khí (than, xăng, gas) và sử dụng tiết kiệm, an toàn.",
            "questions": []
          },
          {
            "id": "khtn-6-b15",
            "number": 15,
            "title": "Bài 15: Một số lương thực - thực phẩm",
            "chapter": "Chương III: Một số vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm thông dụng",
            "summary": "Vai trò của tinh bột, protein, chất béo, vitamin và bảo quản thực phẩm.",
            "questions": []
          },
          {
            "id": "khtn-6-b16",
            "number": 16,
            "title": "Bài 16: Hỗn hợp các chất",
            "chapter": "Chương IV: Hỗn hợp. Tách chất ra khỏi hỗn hợp",
            "summary": "Phân biệt chất tinh khiết, hỗn hợp đồng nhất (dung dịch) và hỗn hợp không đồng nhất (huyền phù, nhũ tương).",
            "questions": []
          },
          {
            "id": "khtn-6-b17",
            "number": 17,
            "title": "Bài 17: Tách chất khỏi hỗn hợp",
            "chapter": "Chương IV: Hỗn hợp. Tách chất ra khỏi hỗn hợp",
            "summary": "Phương pháp lọc, cô cạn và chiết để tách chất ra khỏi hỗn hợp.",
            "questions": [
              {
                "content": "Để tách muối ăn ra khỏi nước biển, người ta thường dùng phương pháp nào?",
                "option_a": "Lọc qua giấy lọc",
                "option_b": "Chiết bằng phễu chiết",
                "option_c": "Cô cạn (bay hơi nước)",
                "option_d": "Dùng nam châm",
                "correct": "C"
              }
            ]
          },
          {
            "id": "khtn-6-b18",
            "number": 18,
            "title": "Bài 18: Tế bào - Đơn vị cơ bản của sự sống",
            "chapter": "Chương V: Tế bào",
            "summary": "Hình dạng, kích thước tế bào và 3 thành phần chính: màng tế bào, chất tế bào, nhân/vùng nhân.",
            "questions": []
          },
          {
            "id": "khtn-6-b19",
            "number": 19,
            "title": "Bài 19: Cấu tạo và chức năng các thành phần của tế bào",
            "chapter": "Chương V: Tế bào",
            "summary": "Phân biệt tế bào nhân sơ và nhân thực; tế bào thực vật có thành tế bào và lục lạp.",
            "questions": []
          },
          {
            "id": "khtn-6-b20",
            "number": 20,
            "title": "Bài 20: Sự lớn lên và sinh sản của tế bào",
            "chapter": "Chương V: Tế bào",
            "summary": "Quá trình tế bào lớn lên và phân chia tạo ra tế bào mới giúp cơ thể lớn lên.",
            "questions": []
          },
          {
            "id": "khtn-6-b21",
            "number": 22,
            "title": "Bài 22: Cơ thể sinh vật",
            "chapter": "Chương VI: Từ tế bào đến cơ thể",
            "summary": "Phân biệt cơ thể đơn bào (trùng roi, vi khuẩn) và cơ thể đa bào.",
            "questions": []
          },
          {
            "id": "khtn-6-b22",
            "number": 23,
            "title": "Bài 23: Tổ chức cơ thể đa bào",
            "chapter": "Chương VI: Từ tế bào đến cơ thể",
            "summary": "Các cấp độ tổ chức: Tế bào -> Mô -> Cơ quan -> Hệ cơ quan -> Cơ thể.",
            "questions": []
          },
          {
            "id": "khtn-6-b23",
            "number": 25,
            "title": "Bài 25: Hệ thống phân loại sinh vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "5 giới sinh vật (Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật) và khóa lưỡng phân.",
            "questions": []
          },
          {
            "id": "khtn-6-b24",
            "number": 27,
            "title": "Bài 27: Vi khuẩn",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Cấu tạo đơn giản của vi khuẩn, vai trò có ích và bệnh do vi khuẩn gây ra.",
            "questions": []
          },
          {
            "id": "khtn-6-b25",
            "number": 29,
            "title": "Bài 29: Virus",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Cấu tạo virus (chưa có cấu tạo tế bào), cách phòng chống bệnh do virus.",
            "questions": []
          },
          {
            "id": "khtn-6-b26",
            "number": 30,
            "title": "Bài 30: Nguyên sinh vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Đặc điểm trùng biến hình, trùng roi, tảo và bệnh sốt rét.",
            "questions": []
          },
          {
            "id": "khtn-6-b27",
            "number": 32,
            "title": "Bài 32: Nấm",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Đặc điểm nấm men, nấm mốc, nấm đảm; vai trò và phòng tránh ngộ độc nấm.",
            "questions": []
          },
          {
            "id": "khtn-6-b28",
            "number": 34,
            "title": "Bài 34: Thực vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Các nhóm thực vật: Rêu, Dương xỉ, Hạt trần, Hạt kín.",
            "questions": []
          },
          {
            "id": "khtn-6-b29",
            "number": 36,
            "title": "Bài 36: Động vật",
            "chapter": "Chương VII: Đa dạng thế giới sống",
            "summary": "Phân biệt động vật không xương sống và động vật có xương sống (Cá, Lưỡng cư, Bò sát, Chim, Thú).",
            "questions": []
          },
          {
            "id": "khtn-6-b30",
            "number": 40,
            "title": "Bài 40: Lực là gì?",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Lực là sự đẩy hoặc kéo; lực có thể làm biến đổi chuyển động hoặc biến dạng vật.",
            "questions": []
          },
          {
            "id": "khtn-6-b31",
            "number": 41,
            "title": "Bài 41: Biểu diễn lực",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Đặc trưng của lực (điểm đặt, phương, chiều, độ lớn) và biểu diễn bằng mũi tên.",
            "questions": []
          },
          {
            "id": "khtn-6-b32",
            "number": 42,
            "title": "Bài 42: Biến dạng của lò xo",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo (lực đàn hồi).",
            "questions": []
          },
          {
            "id": "khtn-6-b33",
            "number": 43,
            "title": "Bài 43: Trọng lượng, lực hấp dẫn",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Khối lượng (kg) và trọng lượng P = 10·m (N); lực hút của Trái Đất.",
            "questions": [
              {
                "content": "Một vật có khối lượng 5 kg thì trọng lượng của nó trên Trái Đất xấp xỉ là bao nhiêu?",
                "option_a": "5 N",
                "option_b": "50 N",
                "option_c": "500 N",
                "option_d": "0,5 N",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-6-b34",
            "number": 44,
            "title": "Bài 44: Lực ma sát",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Lực ma sát trượt, ma sát nghỉ; lợi ích và tác hại của ma sát.",
            "questions": []
          },
          {
            "id": "khtn-6-b35",
            "number": 45,
            "title": "Bài 45: Lực cản của nước",
            "chapter": "Chương VIII: Lực trong đời sống",
            "summary": "Nguyên nhân xuất hiện lực cản của nước và ảnh hưởng đến hình dạng vật chuyển động.",
            "questions": []
          },
          {
            "id": "khtn-6-b36",
            "number": 46,
            "title": "Bài 46: Năng lượng và sự truyền năng lượng",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Các dạng năng lượng (động năng, thế năng, nhiệt, điện, quang...) và sự truyền năng lượng.",
            "questions": []
          },
          {
            "id": "khtn-6-b37",
            "number": 48,
            "title": "Bài 48: Sự chuyển hóa năng lượng",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Định luật bảo toàn năng lượng: năng lượng chuyển hóa từ dạng này sang dạng khác.",
            "questions": []
          },
          {
            "id": "khtn-6-b38",
            "number": 49,
            "title": "Bài 49: Năng lượng hao phí",
            "chapter": "Chương IX: Năng lượng",
            "summary": "Năng lượng có ích, năng lượng hao phí (thường là nhiệt) và tiết kiệm năng lượng.",
            "questions": []
          },
          {
            "id": "khtn-6-b39",
            "number": 52,
            "title": "Bài 52: Chuyển động nhìn thấy của Mặt Trời. Thiên thể",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "Sự mọc lặn của Mặt Trời do Trái Đất tự quay; sao, hành tinh, vệ tinh.",
            "questions": []
          },
          {
            "id": "khtn-6-b40",
            "number": 53,
            "title": "Bài 53: Mặt Trăng",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "Các pha của Mặt Trăng (Trăng tròn, khuyết, không trăng) do chuyển động quanh Trái Đất.",
            "questions": []
          },
          {
            "id": "khtn-6-b41",
            "number": 54,
            "title": "Bài 54: Hệ Mặt Trời",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "8 hành tinh quay quanh Mặt Trời: Thủy tinh, Kim tinh, Trái Đất, Hỏa tinh, Mộc tinh, Thổ tinh, Thiên Vương tinh, Hải Vương tinh.",
            "questions": []
          },
          {
            "id": "khtn-6-b42",
            "number": 55,
            "title": "Bài 55: Ngân Hà",
            "chapter": "Chương X: Trái Đất và bầu trời",
            "summary": "Ngân Hà (Milky Way) là thiên hà chứa Hệ Mặt Trời của chúng ta.",
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
            "summary": "Truyện đồng thoại Dế Mèn phiêu lưu kí; bài học về thói kiêu căng, biết suy nghĩ trước khi hành động.",
            "questions": []
          },
          {
            "id": "nguvan-6-b2",
            "number": 2,
            "title": "Nếu cậu muốn có một người bạn... (trích Hoàng tử bé)",
            "chapter": "Bài 1: Tôi và các bạn",
            "summary": "Ý nghĩa của tình bạn chân thành và sự gắn bó ('cảm hóa').",
            "questions": []
          },
          {
            "id": "nguvan-6-b3",
            "number": 3,
            "title": "Chuyện cổ tích về loài người (Xuân Quỳnh)",
            "chapter": "Bài 2: Gõ cửa trái tim",
            "summary": "Thơ năm chữ ca ngợi tình yêu thương dành cho trẻ em.",
            "questions": []
          },
          {
            "id": "nguvan-6-b4",
            "number": 4,
            "title": "Mây và sóng (Ta-go)",
            "chapter": "Bài 2: Gõ cửa trái tim",
            "summary": "Tình mẫu tử thiêng liêng vượt lên mọi cám dỗ vui chơi.",
            "questions": []
          },
          {
            "id": "nguvan-6-b5",
            "number": 5,
            "title": "Cô bé bán diêm (An-đéc-xen)",
            "chapter": "Bài 3: Yêu thương và chia sẻ",
            "summary": "Số phận bất hạnh của cô bé bán diêm và thông điệp về lòng nhân ái.",
            "questions": []
          },
          {
            "id": "nguvan-6-b6",
            "number": 6,
            "title": "Gió lạnh đầu mùa (Thạch Lam)",
            "chapter": "Bài 3: Yêu thương và chia sẻ",
            "summary": "Tình cảm ấm áp, sẻ chia giữa chị em Sơn, Lan với bé Hiên.",
            "questions": []
          },
          {
            "id": "nguvan-6-b7",
            "number": 7,
            "title": "Chùm ca dao về quê hương đất nước",
            "chapter": "Bài 4: Quê hương yêu dấu",
            "summary": "Thể thơ lục bát và tình yêu quê hương, đất nước qua ca dao.",
            "questions": []
          },
          {
            "id": "nguvan-6-b8",
            "number": 8,
            "title": "Cô Tô (Nguyễn Tuân)",
            "chapter": "Bài 5: Những nẻo đường xứ sở",
            "summary": "Kí miêu tả vẻ đẹp thiên nhiên và cuộc sống lao động trên đảo Cô Tô.",
            "questions": []
          },
          {
            "id": "nguvan-6-b9",
            "number": 9,
            "title": "Thánh Gióng & Sơn Tinh, Thủy Tinh",
            "chapter": "Bài 6: Chuyện kể về những người anh hùng",
            "summary": "Truyền thuyết về tinh thần chống giặc ngoại xâm và chế ngự thiên tai của dân tộc.",
            "questions": []
          },
          {
            "id": "nguvan-6-b10",
            "number": 10,
            "title": "Thạch Sanh & Cây khế",
            "chapter": "Bài 7: Thế giới cổ tích",
            "summary": "Đặc trưng truyện cổ tích thần kì: ở hiền gặp lành, cái thiện chiến thắng cái ác.",
            "questions": []
          },
          {
            "id": "nguvan-6-b11",
            "number": 11,
            "title": "Xem người ta kìa! & Hai loại khác biệt",
            "chapter": "Bài 8: Khác biệt và gần gũi",
            "summary": "Văn bản nghị luận về tôn trọng sự khác biệt của mỗi cá nhân.",
            "questions": []
          },
          {
            "id": "nguvan-6-b12",
            "number": 12,
            "title": "Trái Đất - cái nôi của sự sống",
            "chapter": "Bài 9: Trái Đất - ngôi nhà chung",
            "summary": "Văn bản thông tin về vai trò của nước, sinh vật và bảo vệ hành tinh xanh.",
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
            "summary": "Khái niệm lịch sử, hiện thực lịch sử và nhận thức lịch sử.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b2",
            "number": 2,
            "title": "Bài 2: Dựa vào đâu để biết và dựng lại lịch sử?",
            "chapter": "Lịch sử - Chương 1: Vì sao phải học lịch sử?",
            "summary": "Các nguồn sử liệu: truyền miệng, hiện vật, chữ viết.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b3",
            "number": 3,
            "title": "Bài 3: Thời gian trong lịch sử",
            "chapter": "Lịch sử - Chương 1: Vì sao phải học lịch sử?",
            "summary": "Âm lịch, dương lịch, công nguyên, thập kỉ, thế kỉ, thiên niên kỉ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b4",
            "number": 4,
            "title": "Bài 4: Nguồn gốc loài người",
            "chapter": "Lịch sử - Chương 2: Thời kì nguyên thủy",
            "summary": "Quá trình tiến hóa từ vượn người thành người tối cổ và người tinh khôn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b5",
            "number": 5,
            "title": "Bài 6: Ai Cập và Lưỡng Hà cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Điều kiện tự nhiên lưu vực sông Nin, Ơ-phơ-rát, Ti-gơ-rơ và thành tựu văn hóa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b6",
            "number": 6,
            "title": "Bài 7: Ấn Độ cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Văn minh sông Ấn - sông Hằng, chế độ đẳng cấp, Phật giáo và chữ số Ả Rập.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b7",
            "number": 7,
            "title": "Bài 8: Trung Quốc từ thời cổ đại đến thế kỉ VII",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Nhà Tần, Hán, Đường; Con đường tơ lụa và phát minh giấy, la bàn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b8",
            "number": 8,
            "title": "Bài 9: Hy Lạp và La Mã cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Nhà nước thành bang, dân chủ cổ đại và các thành tựu kiến trúc, toán học.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b9",
            "number": 9,
            "title": "Bài 14: Nhà nước Văn Lang - Âu Lạc",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ khoảng thế kỉ VII TCN đến đầu thế kỉ X",
            "summary": "Sự ra đời nhà nước đầu tiên của người Việt cổ thời Hùng Vương và An Dương Vương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b10",
            "number": 10,
            "title": "Bài 17: Đấu tranh bảo tồn và phát triển văn hóa dân tộc thời Bắc thuộc",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ khoảng thế kỉ VII TCN đến đầu thế kỉ X",
            "summary": "Các cuộc khởi nghĩa tiêu biểu (Hai Bà Trưng, Bà Triệu, Lý Bí, Ngô Quyền).",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b11",
            "number": 11,
            "title": "Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí",
            "chapter": "Địa lí - Chương 1: Bản đồ - Phương tiện thể hiện bề mặt Trái Đất",
            "summary": "Kinh tuyến gốc 0°, vĩ tuyến gốc (Xích đạo 0°), cách ghi tọa độ địa lí.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b12",
            "number": 12,
            "title": "Bài 5: Vị trí Trái Đất trong Hệ Mặt Trời. Hình dạng, kích thước",
            "chapter": "Địa lí - Chương 2: Trái Đất - Hành tinh của Hệ Mặt Trời",
            "summary": "Trái Đất đứng thứ 3 tính từ Mặt Trời, dạng hình cầu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b13",
            "number": 13,
            "title": "Bài 6: Chuyển động tự quay quanh trục của Trái Đất và hệ quả",
            "chapter": "Địa lí - Chương 2: Trái Đất - Hành tinh của Hệ Mặt Trời",
            "summary": "Ngày đêm luân phiên, giờ khu vực và sự lệch hướng chuyển động (Coriolis).",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b14",
            "number": 14,
            "title": "Bài 7: Chuyển động quanh Mặt Trời của Trái Đất và hệ quả",
            "chapter": "Địa lí - Chương 2: Trái Đất - Hành tinh của Hệ Mặt Trời",
            "summary": "Sinh ra các mùa trong năm và hiện tượng ngày đêm dài ngắn theo mùa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b15",
            "number": 15,
            "title": "Bài 9: Cấu tạo của Trái Đất. Động đất và núi lửa",
            "chapter": "Địa lí - Chương 3: Cấu tạo của Trái Đất. Vỏ Trái Đất",
            "summary": "3 lớp của Trái Đất: vỏ, man-ti, nhân; các mảng kiến tạo.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b16",
            "number": 16,
            "title": "Bài 12: Lớp vỏ khí. Khối khí. Khí áp và gió trên Trái Đất",
            "chapter": "Địa lí - Chương 4: Khí hậu và biến đổi khí hậu",
            "summary": "Các tầng khí quyển, đai khí áp và gió Tín phong, Tây ôn đới, Đông cực.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b17",
            "number": 17,
            "title": "Bài 16: Thủy quyển. Vòng tuần hoàn nước. Nước ngầm, băng hà",
            "chapter": "Địa lí - Chương 5: Nước trên Trái Đất",
            "summary": "Vòng tuần hoàn lớn và nhỏ của nước trên Trái Đất.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b18",
            "number": 18,
            "title": "Bài 21: Biến đổi khí hậu và ứng phó với biến đổi khí hậu",
            "chapter": "Địa lí - Chương 6: Đất và sinh vật trên Trái Đất",
            "summary": "Nguyên nhân nóng lên toàn cầu và hành động giảm nhẹ, thích ứng.",
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
            "summary": "Từ vựng đồ dùng học tập, môn học; thì Hiện tại đơn (Present Simple) và trạng từ tần suất.",
            "questions": [
              {
                "content": "She usually ______ to school by bicycle every morning.",
                "option_a": "go",
                "option_b": "goes",
                "option_c": "going",
                "option_d": "is going",
                "correct": "B"
              }
            ]
          },
          {
            "id": "tienganh-6-b2",
            "number": 2,
            "title": "Unit 2: My House",
            "chapter": "Unit 2: My House",
            "summary": "Các phòng và đồ đạc trong nhà; sở hữu cách ('s) và giới từ chỉ vị trí (in, on, under, next to).",
            "questions": []
          },
          {
            "id": "tienganh-6-b3",
            "number": 3,
            "title": "Unit 3: My Friends",
            "chapter": "Unit 3: My Friends",
            "summary": "Miêu tả ngoại hình và tính cách; thì Hiện tại tiếp diễn (Present Continuous).",
            "questions": []
          },
          {
            "id": "tienganh-6-b4",
            "number": 4,
            "title": "Unit 4: My Neighbourhood",
            "chapter": "Unit 4: My Neighbourhood",
            "summary": "Chỉ đường, địa điểm khu dân cư; tính từ so sánh hơn (Comparative adjectives).",
            "questions": []
          },
          {
            "id": "tienganh-6-b5",
            "number": 5,
            "title": "Unit 5: Natural Wonders of Viet Nam",
            "chapter": "Unit 5: Natural Wonders of Viet Nam",
            "summary": "Danh từ đếm được và không đếm được; must / mustn't.",
            "questions": []
          },
          {
            "id": "tienganh-6-b6",
            "number": 6,
            "title": "Unit 6: Our Tet Holiday",
            "chapter": "Unit 6: Our Tet Holiday",
            "summary": "Hoạt động ngày Tết; should / shouldn't và some / any.",
            "questions": []
          },
          {
            "id": "tienganh-6-b7",
            "number": 7,
            "title": "Unit 7: Television",
            "chapter": "Unit 7: Television",
            "summary": "Từ hỏi Wh-questions và liên từ (and, but, so).",
            "questions": []
          },
          {
            "id": "tienganh-6-b8",
            "number": 8,
            "title": "Unit 8: Sports and Games",
            "chapter": "Unit 8: Sports and Games",
            "summary": "Thì Quá khứ đơn (Past Simple) và câu mệnh lệnh (Imperatives).",
            "questions": []
          },
          {
            "id": "tienganh-6-b9",
            "number": 9,
            "title": "Unit 9: Cities of the World",
            "chapter": "Unit 9: Cities of the World",
            "summary": "Tính từ sở hữu (Possessive adjectives) và đại từ sở hữu (Possessive pronouns).",
            "questions": []
          },
          {
            "id": "tienganh-6-b10",
            "number": 10,
            "title": "Unit 10: Our Houses in the Future",
            "chapter": "Unit 10: Our Houses in the Future",
            "summary": "Thì Tương lai đơn (will + V) và might chỉ khả năng.",
            "questions": []
          },
          {
            "id": "tienganh-6-b11",
            "number": 11,
            "title": "Unit 11: Our Greener World",
            "chapter": "Unit 11: Our Greener World",
            "summary": "3Rs (Reduce, Reuse, Recycle); câu điều kiện loại 1 (First Conditional).",
            "questions": []
          },
          {
            "id": "tienganh-6-b12",
            "number": 12,
            "title": "Unit 12: Robots",
            "chapter": "Unit 12: Robots",
            "summary": "So sánh nhất của tính từ ngắn (Superlative adjectives).",
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
            "summary": "Phân biệt thông tin và dữ liệu; các bước xử lí thông tin của con người.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b2",
            "number": 2,
            "title": "Bài 3: Thông tin trong máy tính",
            "chapter": "Chủ đề 1: Máy tính và cộng đồng",
            "summary": "Biểu diễn thông tin bằng dãy bit (0 và 1); đơn vị đo dung lượng (Byte, KB, MB, GB, TB).",
            "questions": [
              {
                "content": "1 Kilobyte (KB) bằng bao nhiêu Byte theo quy ước tin học?",
                "option_a": "100 Byte",
                "option_b": "1000 Byte",
                "option_c": "1024 Byte",
                "option_d": "512 Byte",
                "correct": "C"
              }
            ]
          },
          {
            "id": "tinhoc-6-b3",
            "number": 3,
            "title": "Bài 4: Mạng máy tính",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Thành phần mạng máy tính, mạng có dây và mạng không dây (Wi-Fi).",
            "questions": []
          },
          {
            "id": "tinhoc-6-b4",
            "number": 4,
            "title": "Bài 6: Mạng thông tin toàn cầu",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "WWW, trình duyệt web, siêu văn bản và máy tìm kiếm.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b5",
            "number": 5,
            "title": "Bài 9: An toàn thông tin trên Internet",
            "chapter": "Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Phòng tránh lừa đảo, bảo vệ mật khẩu và ứng xử văn minh trên mạng.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b6",
            "number": 6,
            "title": "Bài 10: Sơ đồ tư duy",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Cấu trúc sơ đồ tư duy và tạo sơ đồ tư duy bằng phần mềm.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b7",
            "number": 7,
            "title": "Bài 12: Trình bày thông tin ở dạng bảng",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Tạo bảng, chèn/xóa hàng cột trong soạn thảo văn bản.",
            "questions": []
          },
          {
            "id": "tinhoc-6-b8",
            "number": 8,
            "title": "Bài 15: Thuật toán",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Khái niệm thuật toán, mô tả thuật toán bằng liệt kê bước và sơ đồ khối (cấu trúc tuần tự, rẽ nhánh, lặp).",
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
            "summary": "Khái niệm số hữu tỉ a/b (b ≠ 0), tập hợp Q, biểu diễn trên trục số, số đối.",
            "questions": [
              {
                "content": "Số nào sau đây KHÔNG phải là số hữu tỉ?",
                "option_a": "-3/5",
                "option_b": "0,75",
                "option_c": "5/0",
                "option_d": "-4",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-7-b2",
            "number": 2,
            "title": "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ",
            "chapter": "Chương I: Số hữu tỉ",
            "summary": "Quy tắc thực hiện các phép tính trên số hữu tỉ và tính chất.",
            "questions": []
          },
          {
            "id": "toan-7-b3",
            "number": 3,
            "title": "Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ",
            "chapter": "Chương I: Số hữu tỉ",
            "summary": "Lũy thừa của tích, thương và lũy thừa của lũy thừa.",
            "questions": []
          },
          {
            "id": "toan-7-b4",
            "number": 4,
            "title": "Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế",
            "chapter": "Chương I: Số hữu tỉ",
            "summary": "Quy tắc chuyển vế đổi dấu khi giải phương trình đơn giản.",
            "questions": []
          },
          {
            "id": "toan-7-b5",
            "number": 5,
            "title": "Bài 5: Làm quen với số thập phân vô hạn tuần hoàn",
            "chapter": "Chương II: Số thực",
            "summary": "Phân biệt số thập phân hữu hạn và vô hạn tuần hoàn.",
            "questions": []
          },
          {
            "id": "toan-7-b6",
            "number": 6,
            "title": "Bài 6: Số vô tỉ. Căn bậc hai số học",
            "chapter": "Chương II: Số thực",
            "summary": "Khái niệm số vô tỉ, căn bậc hai số học √a (a ≥ 0).",
            "questions": [
              {
                "content": "Căn bậc hai số học của 49 là:",
                "option_a": "-7",
                "option_b": "7",
                "option_c": "±7",
                "option_d": "24,5",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-7-b7",
            "number": 7,
            "title": "Bài 7: Tập hợp các số thực",
            "chapter": "Chương II: Số thực",
            "summary": "Tập hợp R gồm số hữu tỉ và số vô tỉ; giá trị tuyệt đối của số thực.",
            "questions": []
          },
          {
            "id": "toan-7-b8",
            "number": 8,
            "title": "Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "Hai góc kề bù, hai góc đối đỉnh và tính chất tia phân giác.",
            "questions": []
          },
          {
            "id": "toan-7-b9",
            "number": 9,
            "title": "Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "Cặp góc so le trong bằng nhau, đồng vị bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-7-b10",
            "number": 10,
            "title": "Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "Qua một điểm ngoài đường thẳng chỉ có duy nhất một đường thẳng song song với nó.",
            "questions": []
          },
          {
            "id": "toan-7-b11",
            "number": 11,
            "title": "Bài 11: Định lí và chứng minh định lí",
            "chapter": "Chương III: Góc và đường thẳng song song",
            "summary": "Cấu trúc giả thiết - kết luận và chứng minh định lí.",
            "questions": []
          },
          {
            "id": "toan-7-b12",
            "number": 12,
            "title": "Bài 12: Tổng các góc trong một tam giác",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Tổng 3 góc trong một tam giác bằng 180°; góc ngoài tam giác.",
            "questions": []
          },
          {
            "id": "toan-7-b13",
            "number": 13,
            "title": "Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất (c.c.c)",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Định nghĩa hai tam giác bằng nhau và trường hợp cạnh - cạnh - cạnh.",
            "questions": []
          },
          {
            "id": "toan-7-b14",
            "number": 14,
            "title": "Bài 14: Trường hợp bằng nhau thứ hai và thứ ba của tam giác (c.g.c, g.c.g)",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Chứng minh hai tam giác bằng nhau theo c.g.c và g.c.g.",
            "questions": []
          },
          {
            "id": "toan-7-b15",
            "number": 15,
            "title": "Bài 15: Các trường hợp bằng nhau của tam giác vuông",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Cạnh huyền - góc nhọn và cạnh huyền - cạnh góc vuông.",
            "questions": []
          },
          {
            "id": "toan-7-b16",
            "number": 16,
            "title": "Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng",
            "chapter": "Chương IV: Tam giác bằng nhau",
            "summary": "Tính chất tam giác cân, tam giác đều và đường trung trực.",
            "questions": []
          },
          {
            "id": "toan-7-b17",
            "number": 17,
            "title": "Bài 18: Biểu đồ hình quạt tròn",
            "chapter": "Chương V: Thu thập và biểu diễn dữ liệu",
            "summary": "Đọc, phân tích và biểu diễn tỉ lệ phần trăm trên biểu đồ hình quạt tròn.",
            "questions": []
          },
          {
            "id": "toan-7-b18",
            "number": 18,
            "title": "Bài 19: Biểu đồ đoạn thẳng",
            "chapter": "Chương V: Thu thập và biểu diễn dữ liệu",
            "summary": "Phân tích xu hướng thay đổi dữ liệu theo thời gian bằng biểu đồ đoạn thẳng.",
            "questions": []
          },
          {
            "id": "toan-7-b19",
            "number": 19,
            "title": "Bài 20: Tỉ lệ thức",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "Định nghĩa tỉ lệ thức a/b = c/d và tính chất a·d = b·c.",
            "questions": []
          },
          {
            "id": "toan-7-b20",
            "number": 20,
            "title": "Bài 21: Tính chất của dãy tỉ số bằng nhau",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "Ứng dụng dãy tỉ số bằng nhau giải toán chia tỉ lệ.",
            "questions": []
          },
          {
            "id": "toan-7-b21",
            "number": 21,
            "title": "Bài 22: Đại lượng tỉ lệ thuận",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "y = k·x (k ≠ 0) và tính chất hai đại lượng tỉ lệ thuận.",
            "questions": []
          },
          {
            "id": "toan-7-b22",
            "number": 22,
            "title": "Bài 23: Đại lượng tỉ lệ nghịch",
            "chapter": "Chương VI: Tỉ lệ thức và đại lượng tỉ lệ",
            "summary": "y = a/x (a ≠ 0) và tính chất hai đại lượng tỉ lệ nghịch.",
            "questions": []
          },
          {
            "id": "toan-7-b23",
            "number": 23,
            "title": "Bài 24: Biểu thức đại số",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Khái niệm biểu thức đại số và tính giá trị biểu thức.",
            "questions": []
          },
          {
            "id": "toan-7-b24",
            "number": 24,
            "title": "Bài 25: Đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Đơn thức, đa thức một biến, bậc, hệ số cao nhất, nghiệm của đa thức.",
            "questions": []
          },
          {
            "id": "toan-7-b25",
            "number": 25,
            "title": "Bài 26: Phép cộng và phép trừ đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Thu gọn và cộng trừ đa thức theo hàng ngang hoặc cột dọc.",
            "questions": []
          },
          {
            "id": "toan-7-b26",
            "number": 26,
            "title": "Bài 27: Phép nhân đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Nhân đơn thức với đa thức và đa thức với đa thức.",
            "questions": []
          },
          {
            "id": "toan-7-b27",
            "number": 27,
            "title": "Bài 28: Phép chia đa thức một biến",
            "chapter": "Chương VII: Biểu thức đại số và đa thức một biến",
            "summary": "Chia hết và chia có dư cho đa thức một biến.",
            "questions": []
          },
          {
            "id": "toan-7-b28",
            "number": 28,
            "title": "Bài 29: Làm quen với biến cố",
            "chapter": "Chương VIII: Làm quen với biến cố và xác suất của biến cố",
            "summary": "Biến cố chắc chắn, biến cố không thể, biến cố ngẫu nhiên.",
            "questions": []
          },
          {
            "id": "toan-7-b29",
            "number": 29,
            "title": "Bài 30: Làm quen với xác suất của biến cố",
            "chapter": "Chương VIII: Làm quen với biến cố và xác suất của biến cố",
            "summary": "Xác suất của biến cố ngẫu nhiên đồng khả năng.",
            "questions": []
          },
          {
            "id": "toan-7-b30",
            "number": 30,
            "title": "Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Góc đối diện với cạnh lớn hơn là góc lớn hơn và ngược lại.",
            "questions": []
          },
          {
            "id": "toan-7-b31",
            "number": 31,
            "title": "Bài 32: Quan hệ giữa đường vuông góc và đường xiên",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Đường vuông góc là đường ngắn nhất; bất đẳng thức tam giác.",
            "questions": []
          },
          {
            "id": "toan-7-b32",
            "number": 32,
            "title": "Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Trọng tâm tam giác (tỉ số 2/3) và tâm đường tròn nội tiếp.",
            "questions": []
          },
          {
            "id": "toan-7-b33",
            "number": 33,
            "title": "Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác",
            "chapter": "Chương IX: Quan hệ giữa các yếu tố trong một tam giác",
            "summary": "Tâm đường tròn ngoại tiếp và trực tâm của tam giác.",
            "questions": []
          },
          {
            "id": "toan-7-b34",
            "number": 34,
            "title": "Bài 36: Hình hộp chữ nhật và hình lập phương",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh, thể tích hình hộp chữ nhật (V = a·b·c) và hình lập phương (V = a³).",
            "questions": []
          },
          {
            "id": "toan-7-b35",
            "number": 35,
            "title": "Bài 37: Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh S_xq = C_đáy · h và thể tích V = S_đáy · h.",
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
            "title": "Bài 2: Nguyên tử",
            "chapter": "Chương I: Nguyên tử. Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Cấu tạo nguyên tử: hạt nhân (proton +, neutron 0) và lớp vỏ electron (-); khối lượng nguyên tử (amu).",
            "questions": [
              {
                "content": "Hạt mang điện tích dương trong hạt nhân nguyên tử là hạt nào?",
                "option_a": "Electron",
                "option_b": "Proton",
                "option_c": "Neutron",
                "option_d": "Ion âm",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-7-b2",
            "number": 2,
            "title": "Bài 3: Nguyên tố hóa học",
            "chapter": "Chương I: Nguyên tử. Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Định nghĩa nguyên tố hóa học (cùng số proton), tên và kí hiệu hóa học theo IUPAC.",
            "questions": []
          },
          {
            "id": "khtn-7-b3",
            "number": 3,
            "title": "Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
            "chapter": "Chương I: Nguyên tử. Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Nguyên tắc sắp xếp theo điện tích hạt nhân, ô, chu kì, nhóm; vị trí kim loại, phi kim, khí hiếm.",
            "questions": []
          },
          {
            "id": "khtn-7-b4",
            "number": 4,
            "title": "Bài 5: Phân tử - Đơn chất - Hợp chất",
            "chapter": "Chương II: Phân tử. Liên kết hóa học",
            "summary": "Phân biệt đơn chất và hợp chất; tính khối lượng phân tử (amu).",
            "questions": []
          },
          {
            "id": "khtn-7-b5",
            "number": 5,
            "title": "Bài 6: Giới thiệu về liên kết hóa học",
            "chapter": "Chương II: Phân tử. Liên kết hóa học",
            "summary": "Liên kết ion (nhường - nhận e) và liên kết cộng hóa trị (dùng chung e).",
            "questions": [
              {
                "content": "Liên kết giữa Na+ và Cl- trong phân tử muối ăn NaCl thuộc loại liên kết nào?",
                "option_a": "Liên kết cộng hóa trị",
                "option_b": "Liên kết ion",
                "option_c": "Liên kết kim loại",
                "option_d": "Liên kết hydrogen",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-7-b6",
            "number": 6,
            "title": "Bài 7: Hóa trị và công thức hóa học",
            "chapter": "Chương II: Phân tử. Liên kết hóa học",
            "summary": "Quy tắc hóa trị, lập CTHH và tính phần trăm khối lượng nguyên tố.",
            "questions": []
          },
          {
            "id": "khtn-7-b7",
            "number": 7,
            "title": "Bài 8: Tốc độ chuyển động",
            "chapter": "Chương III: Tốc độ",
            "summary": "Công thức v = s/t, đơn vị m/s và km/h (1 m/s = 3,6 km/h).",
            "questions": [
              {
                "content": "Một xe đạp đi quãng đường 18 km trong 1,5 giờ. Tốc độ trung bình của xe là:",
                "option_a": "10 km/h",
                "option_b": "12 km/h",
                "option_c": "15 km/h",
                "option_d": "27 km/h",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-7-b8",
            "number": 8,
            "title": "Bài 10: Đồ thị quãng đường - thời gian",
            "chapter": "Chương III: Tốc độ",
            "summary": "Vẽ và đọc đồ thị s - t của chuyển động đều.",
            "questions": []
          },
          {
            "id": "khtn-7-b9",
            "number": 9,
            "title": "Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
            "chapter": "Chương III: Tốc độ",
            "summary": "Khoảng cách an toàn tối thiểu và quy tắc 3 giây.",
            "questions": []
          },
          {
            "id": "khtn-7-b10",
            "number": 10,
            "title": "Bài 12: Sóng âm",
            "chapter": "Chương IV: Âm thanh",
            "summary": "Nguồn âm dao động, môi trường truyền âm (rắn > lỏng > khí, không truyền trong chân không).",
            "questions": []
          },
          {
            "id": "khtn-7-b11",
            "number": 11,
            "title": "Bài 13: Độ to và độ cao của âm",
            "chapter": "Chương IV: Âm thanh",
            "summary": "Tần số (Hz) quyết định độ cao; biên độ dao động quyết định độ to (dB).",
            "questions": []
          },
          {
            "id": "khtn-7-b12",
            "number": 12,
            "title": "Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn",
            "chapter": "Chương IV: Âm thanh",
            "summary": "Vật phản xạ âm tốt/kém, tiếng vang và biện pháp chống ô nhiễm tiếng ồn.",
            "questions": []
          },
          {
            "id": "khtn-7-b13",
            "number": 13,
            "title": "Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối",
            "chapter": "Chương V: Ánh sáng",
            "summary": "Chùm sáng, tia sáng, vùng bóng tối và bóng nửa tối.",
            "questions": []
          },
          {
            "id": "khtn-7-b14",
            "number": 14,
            "title": "Bài 16: Sự phản xạ ánh sáng",
            "chapter": "Chương V: Ánh sáng",
            "summary": "Định luật phản xạ ánh sáng (góc phản xạ bằng góc tới), phản xạ gương và phản xạ khuếch tán.",
            "questions": []
          },
          {
            "id": "khtn-7-b15",
            "number": 15,
            "title": "Bài 17: Ảnh của vật qua gương phẳng",
            "chapter": "Chương V: Ánh sáng",
            "summary": "Ảnh ảo, cùng kích thước với vật, đối xứng với vật qua gương.",
            "questions": []
          },
          {
            "id": "khtn-7-b16",
            "number": 16,
            "title": "Bài 18: Nam châm",
            "chapter": "Chương VI: Từ",
            "summary": "Cực Bắc (N) - cực Nam (S), tương tác giữa hai nam châm.",
            "questions": []
          },
          {
            "id": "khtn-7-b17",
            "number": 17,
            "title": "Bài 19: Từ trường",
            "chapter": "Chương VI: Từ",
            "summary": "Từ phổ, đường sức từ và từ trường Trái Đất.",
            "questions": []
          },
          {
            "id": "khtn-7-b18",
            "number": 18,
            "title": "Bài 20: Chế tạo nam châm điện đơn giản",
            "chapter": "Chương VI: Từ",
            "summary": "Cấu tạo nam châm điện và cách thay đổi lực từ.",
            "questions": []
          },
          {
            "id": "khtn-7-b19",
            "number": 19,
            "title": "Bài 22: Quang hợp ở thực vật",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Phương trình quang hợp: Nước + CO2 --(ánh sáng, diệp lục)--> Chất hữu cơ + O2.",
            "questions": []
          },
          {
            "id": "khtn-7-b20",
            "number": 20,
            "title": "Bài 25: Hô hấp tế bào",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Phân giải chất hữu cơ với O2 tạo năng lượng ATP, CO2 và hơi nước.",
            "questions": []
          },
          {
            "id": "khtn-7-b21",
            "number": 21,
            "title": "Bài 28: Trao đổi khí ở sinh vật",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Khí khổng ở lá, hệ hô hấp ở động vật (da, mang, phổi).",
            "questions": []
          },
          {
            "id": "khtn-7-b22",
            "number": 22,
            "title": "Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật",
            "chapter": "Chương VII: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Mạch gỗ vận chuyển nước/muối khoáng, mạch rây vận chuyển chất hữu cơ; thoát hơi nước.",
            "questions": []
          },
          {
            "id": "khtn-7-b23",
            "number": 23,
            "title": "Bài 32: Cảm ứng ở sinh vật",
            "chapter": "Chương VIII: Cảm ứng ở sinh vật",
            "summary": "Tính hướng sáng, hướng nước, hướng trọng lực ở thực vật.",
            "questions": []
          },
          {
            "id": "khtn-7-b24",
            "number": 24,
            "title": "Bài 34: Tập tính ở động vật",
            "chapter": "Chương VIII: Cảm ứng ở sinh vật",
            "summary": "Phân biệt tập tính bẩm sinh và tập tính học được.",
            "questions": []
          },
          {
            "id": "khtn-7-b25",
            "number": 25,
            "title": "Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật",
            "chapter": "Chương IX: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Mô phân sinh ở thực vật và vòng đời sinh vật.",
            "questions": []
          },
          {
            "id": "khtn-7-b26",
            "number": 26,
            "title": "Bài 39: Sinh sản vô tính ở sinh vật",
            "chapter": "Chương X: Sinh sản ở sinh vật",
            "summary": "Giâm, chiết, ghép ở thực vật; phân đôi, nảy chồi.",
            "questions": []
          },
          {
            "id": "khtn-7-b27",
            "number": 27,
            "title": "Bài 40: Sinh sản hữu tính ở sinh vật",
            "chapter": "Chương X: Sinh sản ở sinh vật",
            "summary": "Thụ phấn, thụ tinh tạo hạt và quả ở thực vật có hoa.",
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
            "summary": "Tình yêu thiên nhiên và sự lo lắng hồn nhiên của hai anh em Mên, Mon.",
            "questions": []
          },
          {
            "id": "nguvan-7-b2",
            "number": 2,
            "title": "Đi lấy mật (Đoàn Giỏi)",
            "chapter": "Bài 1: Bầu trời tuổi thơ",
            "summary": "Vẻ đẹp thiên nhiên rừng U Minh và tình cảm gắn bó với quê hương Nam Bộ.",
            "questions": []
          },
          {
            "id": "nguvan-7-b3",
            "number": 3,
            "title": "Đồng dao mùa xuân (Nguyễn Khoa Điềm)",
            "chapter": "Bài 2: Khúc nhạc tâm hồn",
            "summary": "Hình ảnh người lính trẻ mãi tuổi hai mươi qua thể thơ bốn chữ.",
            "questions": []
          },
          {
            "id": "nguvan-7-b4",
            "number": 4,
            "title": "Gặp lá cơm nếp (Thanh Thảo)",
            "chapter": "Bài 2: Khúc nhạc tâm hồn",
            "summary": "Nỗi nhớ mẹ và tình yêu quê hương của người chiến sĩ trên đường hành quân.",
            "questions": []
          },
          {
            "id": "nguvan-7-b5",
            "number": 5,
            "title": "Vừa nhắm mắt vừa mở cửa sổ (Nguyễn Ngọc Thuần)",
            "chapter": "Bài 3: Cội nguồn yêu thương",
            "summary": "Cảm nhận thế giới bằng tất cả giác quan và tấm lòng yêu thương.",
            "questions": []
          },
          {
            "id": "nguvan-7-b6",
            "number": 6,
            "title": "Mùa xuân nho nhỏ (Thanh Hải)",
            "chapter": "Bài 4: Giai điệu đất nước",
            "summary": "Khát vọng cống hiến phần tinh túy nhỏ bé của đời mình cho đất nước.",
            "questions": []
          },
          {
            "id": "nguvan-7-b7",
            "number": 7,
            "title": "Tháng Giêng, mơ về trăng non rét ngọt (Vũ Bằng)",
            "chapter": "Bài 5: Màu sắc trăm miền",
            "summary": "Tùy bút tinh tế về vẻ đẹp mùa xuân Hà Nội.",
            "questions": []
          },
          {
            "id": "nguvan-7-b8",
            "number": 8,
            "title": "Đẽo cày giữa đường & Ếch ngồi đáy giếng",
            "chapter": "Bài 6: Bài học cuộc sống",
            "summary": "Đặc trưng truyện ngụ ngôn: bài học về chủ kiến cá nhân và tầm hiểu biết.",
            "questions": []
          },
          {
            "id": "nguvan-7-b9",
            "number": 9,
            "title": "Cuộc chạm trán trên đại dương (Giuyn Véc-nơ)",
            "chapter": "Bài 7: Thế giới viễn tưởng",
            "summary": "Truyện khoa học viễn tưởng Hai vạn dặm dưới đáy biển.",
            "questions": []
          },
          {
            "id": "nguvan-7-b10",
            "number": 10,
            "title": "Thủy tiên tháng Một & Lễ rửa làng của người Lô Lô",
            "chapter": "Bài 9: Hòa điệu với tự nhiên",
            "summary": "Văn bản thông tin về môi trường và văn hóa bảo vệ tự nhiên.",
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
            "title": "Bài 1: Quá trình hình thành và phát triển của chế độ phong kiến ở Tây Âu",
            "chapter": "Lịch sử - Chương 1: Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI",
            "summary": "Lãnh địa phong kiến, thành thị trung đại và sự ra đời giai cấp tư sản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b2",
            "number": 2,
            "title": "Bài 2: Các cuộc phát kiến địa lí",
            "chapter": "Lịch sử - Chương 1: Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI",
            "summary": "Cô-lôm-bô, Ma-gien-lăng và hệ quả của phát kiến địa lí.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b3",
            "number": 3,
            "title": "Bài 3: Phong trào Văn hóa Phục hưng",
            "chapter": "Lịch sử - Chương 1: Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI",
            "summary": "Đề cao giá trị con người, khoa học tự nhiên (Lê-ô-na đơ Vanh-xi, Ga-li-lê).",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b4",
            "number": 4,
            "title": "Bài 11: Nhà Lý xây dựng và phát triển đất nước (1009 - 1225)",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI",
            "summary": "Dời đô Thăng Long (1010), Quốc tử giám, kháng chiến chống Tống.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b5",
            "number": 5,
            "title": "Bài 14: Ba lần kháng chiến chống quân xâm lược Mông - Nguyên",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI",
            "summary": "Hào khí Đông A thời Trần, trận Bạch Đằng 1288.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b6",
            "number": 6,
            "title": "Bài 17: Khởi nghĩa Lam Sơn (1418 - 1427)",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI",
            "summary": "Lê Lợi, Nguyễn Trãi đánh đuổi quân Minh, thành lập nhà Lê sơ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b7",
            "number": 7,
            "title": "Bài 1: Vị trí địa lí, đặc điểm tự nhiên châu Âu",
            "chapter": "Địa lí - Chương 1: Châu Âu",
            "summary": "Địa hình đồng bằng, núi trẻ An-pơ, khí hậu ôn đới hải dương và lục địa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b8",
            "number": 8,
            "title": "Bài 5: Vị trí địa lí, đặc điểm tự nhiên châu Á",
            "chapter": "Địa lí - Chương 2: Châu Á",
            "summary": "Châu lục lớn nhất thế giới, địa hình núi cao đồ sộ (Hi-ma-lay-a), khí hậu gió mùa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b9",
            "number": 9,
            "title": "Bài 9: Vị trí địa lí, đặc điểm tự nhiên châu Phi",
            "chapter": "Địa lí - Chương 3: Châu Phi",
            "summary": "Hoang mạc Xa-ha-ra, khí hậu nóng khô bậc nhất, vấn đề bảo vệ động vật hoang dã.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b10",
            "number": 10,
            "title": "Bài 13: Phát kiến ra châu Mỹ, vị trí địa lí và phạm vi châu Mỹ",
            "chapter": "Địa lí - Chương 4: Châu Mỹ",
            "summary": "Rừng rậm A-ma-dôn và sự phân hóa tự nhiên Bắc - Nam Mỹ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b11",
            "number": 11,
            "title": "Bài 18: Châu Nam Cực",
            "chapter": "Địa lí - Chương 5: Châu Đại Dương và châu Nam Cực",
            "summary": "Châu lục lạnh nhất thế giới, băng phủ dày, hiệp ước Nam Cực.",
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
            "summary": "Thì Hiện tại đơn; động từ chỉ sự yêu thích + V-ing (like, love, enjoy, hate).",
            "questions": []
          },
          {
            "id": "tienganh-7-b2",
            "number": 2,
            "title": "Unit 2: Healthy Living",
            "chapter": "Unit 2: Healthy Living",
            "summary": "Câu đơn (Simple sentences) và từ vựng sức khỏe.",
            "questions": []
          },
          {
            "id": "tienganh-7-b3",
            "number": 3,
            "title": "Unit 3: Community Service",
            "chapter": "Unit 3: Community Service",
            "summary": "Thì Quá khứ đơn (Past Simple) với động từ có quy tắc và bất quy tắc.",
            "questions": []
          },
          {
            "id": "tienganh-7-b4",
            "number": 4,
            "title": "Unit 4: Music and Arts",
            "chapter": "Unit 4: Music and Arts",
            "summary": "So sánh bằng: like, different from, (not) as ... as.",
            "questions": []
          },
          {
            "id": "tienganh-7-b5",
            "number": 5,
            "title": "Unit 5: Food and Drink",
            "chapter": "Unit 5: Food and Drink",
            "summary": "some, a lot of / lots of, How many / How much.",
            "questions": []
          },
          {
            "id": "tienganh-7-b6",
            "number": 6,
            "title": "Unit 6: A Visit to a School",
            "chapter": "Unit 6: A Visit to a School",
            "summary": "Giới từ chỉ thời gian và địa điểm: in, on, at.",
            "questions": []
          },
          {
            "id": "tienganh-7-b7",
            "number": 7,
            "title": "Unit 7: Traffic",
            "chapter": "Unit 7: Traffic",
            "summary": "It chỉ khoảng cách; should / shouldn't trong giao thông.",
            "questions": []
          },
          {
            "id": "tienganh-7-b8",
            "number": 8,
            "title": "Unit 8: Films",
            "chapter": "Unit 8: Films",
            "summary": "Liên từ chỉ sự nhượng bộ và tương phản: although / though, however.",
            "questions": []
          },
          {
            "id": "tienganh-7-b9",
            "number": 9,
            "title": "Unit 9: Festivals around the World",
            "chapter": "Unit 9: Festivals around the World",
            "summary": "Câu hỏi Yes/No với trợ động từ và động từ khuyết thiếu.",
            "questions": []
          },
          {
            "id": "tienganh-7-b10",
            "number": 10,
            "title": "Unit 10: Energy Sources",
            "chapter": "Unit 10: Energy Sources",
            "summary": "Thì Hiện tại tiếp diễn diễn tả hành động đang diễn ra.",
            "questions": []
          },
          {
            "id": "tienganh-7-b11",
            "number": 11,
            "title": "Unit 11: Travelling in the Future",
            "chapter": "Unit 11: Travelling in the Future",
            "summary": "Thì Tương lai đơn (will) và đại từ sở hữu (mine, yours, theirs...).",
            "questions": []
          },
          {
            "id": "tienganh-7-b12",
            "number": 12,
            "title": "Unit 12: English-speaking Countries",
            "chapter": "Unit 12: English-speaking Countries",
            "summary": "Mạo từ a, an, the với tên quốc gia và danh thắng.",
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
            "summary": "Đa thức nhiều biến, thu gọn và tìm bậc của đa thức.",
            "questions": []
          },
          {
            "id": "toan-8-b3",
            "number": 3,
            "title": "Bài 3: Phép cộng và phép trừ đa thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Quy tắc cộng, trừ hai đa thức nhiều biến.",
            "questions": []
          },
          {
            "id": "toan-8-b4",
            "number": 4,
            "title": "Bài 4: Phép nhân đa thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Nhân đơn thức với đa thức và nhân đa thức với đa thức.",
            "questions": []
          },
          {
            "id": "toan-8-b5",
            "number": 5,
            "title": "Bài 5: Phép chia đa thức cho đơn thức",
            "chapter": "Chương I: Đa thức",
            "summary": "Chia đơn thức cho đơn thức và chia đa thức cho đơn thức.",
            "questions": []
          },
          {
            "id": "toan-8-b6",
            "number": 6,
            "title": "Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "a² - b² = (a-b)(a+b), (a±b)² = a² ± 2ab + b².",
            "questions": [
              {
                "content": "Khai triển hằng đẳng thức (x - 3)² ta được kết quả nào?",
                "option_a": "x² - 9",
                "option_b": "x² - 3x + 9",
                "option_c": "x² - 6x + 9",
                "option_d": "x² + 6x + 9",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-8-b7",
            "number": 7,
            "title": "Bài 7: Lập phương của một tổng hay một hiệu",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "(a ± b)³ = a³ ± 3a²b + 3ab² ± b³.",
            "questions": []
          },
          {
            "id": "toan-8-b8",
            "number": 8,
            "title": "Bài 8: Tổng và hiệu hai lập phương",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "a³ ± b³ = (a ± b)(a² ∓ ab + b²).",
            "questions": []
          },
          {
            "id": "toan-8-b9",
            "number": 9,
            "title": "Bài 9: Phân tích đa thức thành nhân tử",
            "chapter": "Chương II: Hằng đẳng thức đáng nhớ và ứng dụng",
            "summary": "Đặt nhân tử chung, dùng hằng đẳng thức và nhóm hạng tử.",
            "questions": []
          },
          {
            "id": "toan-8-b10",
            "number": 10,
            "title": "Bài 10: Tứ giác",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tổng các góc trong một tứ giác bằng 360°.",
            "questions": []
          },
          {
            "id": "toan-8-b11",
            "number": 11,
            "title": "Bài 11: Hình thang cân",
            "chapter": "Chương III: Tứ giác",
            "summary": "Định nghĩa, tính chất hai góc kề đáy, hai đường chéo và dấu hiệu nhận biết.",
            "questions": []
          },
          {
            "id": "toan-8-b12",
            "number": 12,
            "title": "Bài 12: Hình bình hành",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tính chất cạnh đối, góc đối, đường chéo cắt nhau tại trung điểm mỗi đường.",
            "questions": []
          },
          {
            "id": "toan-8-b13",
            "number": 13,
            "title": "Bài 13: Hình chữ nhật",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tính chất hai đường chéo bằng nhau, dấu hiệu nhận biết hình chữ nhật.",
            "questions": []
          },
          {
            "id": "toan-8-b14",
            "number": 14,
            "title": "Bài 14: Hình thoi và hình vuông",
            "chapter": "Chương III: Tứ giác",
            "summary": "Tính chất hai đường chéo vuông góc và phân giác của các góc.",
            "questions": []
          },
          {
            "id": "toan-8-b15",
            "number": 15,
            "title": "Bài 15: Định lí Thalès trong tam giác",
            "chapter": "Chương IV: Định lí Thalès",
            "summary": "Tỉ số đoạn thẳng và định lí Thalès thuận, đảo.",
            "questions": [
              {
                "content": "Cho tam giác ABC có MN // BC (M ∈ AB, N ∈ AC). Hệ thức nào đúng theo định lí Thalès?",
                "option_a": "AM/MB = AN/NC",
                "option_b": "AM/AB = NC/AN",
                "option_c": "MN/BC = MB/AB",
                "option_d": "AM/AN = MB/AB",
                "correct": "A"
              }
            ]
          },
          {
            "id": "toan-8-b16",
            "number": 16,
            "title": "Bài 16: Đường trung bình của tam giác",
            "chapter": "Chương IV: Định lí Thalès",
            "summary": "Đường trung bình song song với cạnh thứ ba và bằng nửa cạnh ấy.",
            "questions": []
          },
          {
            "id": "toan-8-b17",
            "number": 17,
            "title": "Bài 17: Tính chất đường phân giác của tam giác",
            "chapter": "Chương IV: Định lí Thalès",
            "summary": "Tỉ số hai đoạn thẳng mà đường phân giác chia cạnh đối diện.",
            "questions": []
          },
          {
            "id": "toan-8-b18",
            "number": 18,
            "title": "Bài 21: Phân thức đại số",
            "chapter": "Chương VI: Phân thức đại số",
            "summary": "Điều kiện xác định và tính chất cơ bản của phân thức.",
            "questions": []
          },
          {
            "id": "toan-8-b19",
            "number": 19,
            "title": "Bài 23: Phép cộng và phép trừ phân thức đại số",
            "chapter": "Chương VI: Phân thức đại số",
            "summary": "Quy đồng mẫu thức và cộng trừ phân thức.",
            "questions": []
          },
          {
            "id": "toan-8-b20",
            "number": 20,
            "title": "Bài 24: Phép nhân và phép chia phân thức đại số",
            "chapter": "Chương VI: Phân thức đại số",
            "summary": "Nhân, chia phân thức và biến đổi biểu thức hữu tỉ.",
            "questions": []
          },
          {
            "id": "toan-8-b21",
            "number": 21,
            "title": "Bài 25: Phương trình bậc nhất một ẩn",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "Giải phương trình ax + b = 0 (a ≠ 0) và lập phương trình giải toán thực tế.",
            "questions": []
          },
          {
            "id": "toan-8-b22",
            "number": 22,
            "title": "Bài 27: Khái niệm hàm số và đồ thị của hàm số",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "Mặt phẳng tọa độ Oxy và đồ thị hàm số.",
            "questions": []
          },
          {
            "id": "toan-8-b23",
            "number": 23,
            "title": "Bài 28: Hàm số bậc nhất và đồ thị của hàm số bậc nhất",
            "chapter": "Chương VII: Phương trình bậc nhất và hàm số bậc nhất",
            "summary": "y = ax + b (a ≠ 0), hệ số góc của đường thẳng.",
            "questions": []
          },
          {
            "id": "toan-8-b24",
            "number": 24,
            "title": "Bài 30: Kết quả có thể và kết quả thuận lợi",
            "chapter": "Chương VIII: Mở đầu về tính xác suất của biến cố",
            "summary": "Tính xác suất lí thuyết P(A) = n(A)/n(Ω) và liên hệ xác suất thực nghiệm.",
            "questions": []
          },
          {
            "id": "toan-8-b25",
            "number": 25,
            "title": "Bài 33: Hai tam giác đồng dạng",
            "chapter": "Chương IX: Tam giác đồng dạng",
            "summary": "Ba trường hợp đồng dạng của tam giác (c.c.c, c.g.c, g.g).",
            "questions": []
          },
          {
            "id": "toan-8-b26",
            "number": 26,
            "title": "Bài 35: Định lí Pythagore và ứng dụng",
            "chapter": "Chương IX: Tam giác đồng dạng",
            "summary": "Trong tam giác vuông: a² + b² = c² và định lí Pythagore đảo.",
            "questions": [
              {
                "content": "Tam giác vuông có hai cạnh góc vuông là 6 cm và 8 cm thì cạnh huyền dài bao nhiêu?",
                "option_a": "14 cm",
                "option_b": "10 cm",
                "option_c": "12 cm",
                "option_d": "100 cm",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-8-b27",
            "number": 27,
            "title": "Bài 38: Hình chóp tam giác đều",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh và thể tích V = (1/3)·S_đáy·h.",
            "questions": []
          },
          {
            "id": "toan-8-b28",
            "number": 28,
            "title": "Bài 39: Hình chóp tứ giác đều",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Cấu tạo đáy vuông, 4 mặt bên tam giác cân và công thức thể tích.",
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
            "title": "Bài 2: Phản ứng hóa học",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Biến đổi vật lí và biến đổi hóa học; bản chất phản ứng hóa học và bảo toàn năng lượng.",
            "questions": []
          },
          {
            "id": "khtn-8-b2",
            "number": 2,
            "title": "Bài 3: Mol và tỉ khối chất khí",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Số Avogadro (6,022·10²³), khối lượng mol (M), thể tích mol khí ở ĐKC (24,79 lít) và tỉ khối.",
            "questions": [
              {
                "content": "Ở điều kiện chuẩn (25 °C, 1 bar), 1 mol bất kì chất khí nào đều chiếm thể tích là:",
                "option_a": "22,4 lít",
                "option_b": "24,79 lít",
                "option_c": "24,0 lít",
                "option_d": "18,0 lít",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-8-b3",
            "number": 3,
            "title": "Bài 4: Dung dịch và nồng độ",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Độ tan, nồng độ phần trăm C% = (m_ct/m_dd)·100% và nồng độ mol C_M = n/V.",
            "questions": []
          },
          {
            "id": "khtn-8-b4",
            "number": 4,
            "title": "Bài 5: Định luật bảo toàn khối lượng và phương trình hóa học",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Tổng khối lượng chất sản phẩm bằng tổng khối lượng chất tham gia; cân bằng PTHH.",
            "questions": []
          },
          {
            "id": "khtn-8-b5",
            "number": 5,
            "title": "Bài 6: Tính theo phương trình hóa học",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Tính khối lượng, thể tích chất tham gia/sản phẩm và hiệu suất phản ứng.",
            "questions": []
          },
          {
            "id": "khtn-8-b6",
            "number": 6,
            "title": "Bài 7: Tốc độ phản ứng và chất xúc tác",
            "chapter": "Chương I: Phản ứng hóa học",
            "summary": "Các yếu tố ảnh hưởng đến tốc độ phản ứng: nồng độ, nhiệt độ, diện tích bề mặt, chất xúc tác.",
            "questions": []
          },
          {
            "id": "khtn-8-b7",
            "number": 7,
            "title": "Bài 8: Acid",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Khái niệm acid (H+), tính chất hóa học của acid (làm quỳ tím hóa đỏ, tác dụng kim loại).",
            "questions": []
          },
          {
            "id": "khtn-8-b8",
            "number": 8,
            "title": "Bài 9: Base. Thang pH",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Base (OH-), kiềm làm quỳ tím hóa xanh; thang pH (pH < 7 acid, pH = 7 trung tính, pH > 7 base).",
            "questions": [
              {
                "content": "Dung dịch nào sau đây có giá trị pH nhỏ hơn 7?",
                "option_a": "Nước cất",
                "option_b": "Dung dịch NaOH",
                "option_c": "Nước chanh (chứa citric acid)",
                "option_d": "Nước vôi trong",
                "correct": "C"
              }
            ]
          },
          {
            "id": "khtn-8-b9",
            "number": 9,
            "title": "Bài 10: Oxide",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Phân loại oxide base, oxide acid, oxide lưỡng tính, oxide trung tính.",
            "questions": []
          },
          {
            "id": "khtn-8-b10",
            "number": 10,
            "title": "Bài 11: Muối",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Tính chất hóa học của muối, phản ứng trao đổi và điều kiện xảy ra.",
            "questions": []
          },
          {
            "id": "khtn-8-b11",
            "number": 11,
            "title": "Bài 12: Phân bón hóa học",
            "chapter": "Chương II: Một số hợp chất thông dụng",
            "summary": "Phân đạm (N), phân lân (P), phân kali (K) và NPK.",
            "questions": []
          },
          {
            "id": "khtn-8-b12",
            "number": 12,
            "title": "Bài 13: Khối lượng riêng",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "Công thức D = m/V (kg/m³ hoặc g/cm³).",
            "questions": []
          },
          {
            "id": "khtn-8-b13",
            "number": 13,
            "title": "Bài 15: Áp suất trên một bề mặt",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "Công thức p = F/S (N/m² hay Pa).",
            "questions": []
          },
          {
            "id": "khtn-8-b14",
            "number": 14,
            "title": "Bài 16: Áp suất chất lỏng. Áp suất khí quyển",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "Áp suất chất lỏng tăng theo độ sâu; bình thông nhau và áp suất khí quyển.",
            "questions": []
          },
          {
            "id": "khtn-8-b15",
            "number": 15,
            "title": "Bài 17: Lực đẩy Archimedes",
            "chapter": "Chương III: Khối lượng riêng và áp suất",
            "summary": "F_A = d·V (lực đẩy lên bằng trọng lượng phần chất lỏng bị chiếm chỗ).",
            "questions": []
          },
          {
            "id": "khtn-8-b16",
            "number": 16,
            "title": "Bài 18: Tác dụng làm quay của lực. Moment lực",
            "chapter": "Chương IV: Tác dụng làm quay của lực",
            "summary": "Moment lực phụ thuộc độ lớn lực và cánh tay đòn.",
            "questions": []
          },
          {
            "id": "khtn-8-b17",
            "number": 17,
            "title": "Bài 19: Đòn bẩy và ứng dụng",
            "chapter": "Chương IV: Tác dụng làm quay của lực",
            "summary": "Ba loại đòn bẩy và ứng dụng trong đời sống.",
            "questions": []
          },
          {
            "id": "khtn-8-b18",
            "number": 18,
            "title": "Bài 20: Hiện tượng nhiễm điện do cọ xát",
            "chapter": "Chương V: Điện",
            "summary": "Hai loại điện tích (+, -), cùng dấu đẩy nhau, khác dấu hút nhau.",
            "questions": []
          },
          {
            "id": "khtn-8-b19",
            "number": 19,
            "title": "Bài 21: Dòng điện, nguồn điện",
            "chapter": "Chương V: Điện",
            "summary": "Dòng điện là dòng dịch chuyển có hướng của các hạt mang điện; vật dẫn và vật cách điện.",
            "questions": []
          },
          {
            "id": "khtn-8-b20",
            "number": 20,
            "title": "Bài 22: Mạch điện đơn giản",
            "chapter": "Chương V: Điện",
            "summary": "Kí hiệu thiết bị mạch điện và quy tắc an toàn điện (cầu chì, cầu dao).",
            "questions": []
          },
          {
            "id": "khtn-8-b21",
            "number": 21,
            "title": "Bài 23: Tác dụng của dòng điện",
            "chapter": "Chương V: Điện",
            "summary": "Tác dụng nhiệt, phát sáng, hóa học, sinh lí.",
            "questions": []
          },
          {
            "id": "khtn-8-b22",
            "number": 22,
            "title": "Bài 24: Cường độ dòng điện và hiệu điện thế",
            "chapter": "Chương V: Điện",
            "summary": "Đo I (Ampe - A) bằng ampe kế mắc nối tiếp; đo U (Vôn - V) bằng vôn kế mắc song song.",
            "questions": []
          },
          {
            "id": "khtn-8-b23",
            "number": 23,
            "title": "Bài 26: Năng lượng nhiệt và nội năng",
            "chapter": "Chương VI: Nhiệt",
            "summary": "Chuyển động nhiệt của phân tử, nội năng và sự truyền nhiệt.",
            "questions": []
          },
          {
            "id": "khtn-8-b24",
            "number": 24,
            "title": "Bài 28: Sự truyền nhiệt",
            "chapter": "Chương VI: Nhiệt",
            "summary": "Dẫn nhiệt (rắn), đối lưu (lỏng, khí), bức xạ nhiệt (chân không).",
            "questions": []
          },
          {
            "id": "khtn-8-b25",
            "number": 25,
            "title": "Bài 29: Sự nở vì nhiệt",
            "chapter": "Chương VI: Nhiệt",
            "summary": "Chất rắn, lỏng, khí nở ra khi nóng lên, co lại khi lạnh đi.",
            "questions": []
          },
          {
            "id": "khtn-8-b26",
            "number": 26,
            "title": "Bài 31: Hệ vận động ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Bộ xương, hệ cơ và phòng tránh cong vẹo cột sống.",
            "questions": []
          },
          {
            "id": "khtn-8-b27",
            "number": 27,
            "title": "Bài 32: Dinh dưỡng và tiêu hóa ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Các cơ quan tiêu hóa, biến đổi cơ học và hóa học thức ăn.",
            "questions": []
          },
          {
            "id": "khtn-8-b28",
            "number": 28,
            "title": "Bài 33: Máu và hệ tuần hoàn của cơ thể người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Hồng cầu, bạch cầu, tiểu cầu; vòng tuần hoàn nhỏ và lớn; nhóm máu ABO.",
            "questions": []
          },
          {
            "id": "khtn-8-b29",
            "number": 29,
            "title": "Bài 34: Hệ hô hấp ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Đường dẫn khí, phổi và trao đổi khí ở phế nang.",
            "questions": []
          },
          {
            "id": "khtn-8-b30",
            "number": 30,
            "title": "Bài 35: Hệ bài tiết ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Cấu tạo thận, quá trình lọc máu tạo nước tiểu.",
            "questions": []
          },
          {
            "id": "khtn-8-b31",
            "number": 31,
            "title": "Bài 37: Hệ thần kinh và các giác quan ở người",
            "chapter": "Chương VII: Sinh học cơ thể người",
            "summary": "Não bộ, tủy sống, phản xạ có điều kiện và không điều kiện; mắt và tai.",
            "questions": []
          },
          {
            "id": "khtn-8-b32",
            "number": 32,
            "title": "Bài 42: Quần thể sinh vật",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Đặc trưng mật độ, tỉ lệ giới tính, thành phần nhóm tuổi của quần thể.",
            "questions": []
          },
          {
            "id": "khtn-8-b33",
            "number": 33,
            "title": "Bài 44: Hệ sinh thái",
            "chapter": "Chương VIII: Sinh vật và môi trường",
            "summary": "Chuỗi thức ăn, lưới thức ăn, sinh vật sản xuất - tiêu thụ - phân giải.",
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
            "title": "Lá cờ thêu sáu chữ vàng (Nguyễn Huy Tưởng)",
            "chapter": "Bài 1: Câu chuyện của lịch sử",
            "summary": "Truyện lịch sử về lòng yêu nước và chí khí tuổi trẻ Trần Quốc Toản.",
            "questions": []
          },
          {
            "id": "nguvan-8-b2",
            "number": 2,
            "title": "Thu điếu (Nguyễn Khuyến) & Thiên Trường vãn vọng",
            "chapter": "Bài 2: Vẻ đẹp cổ điển",
            "summary": "Thơ thất ngôn bát cú và tứ tuyệt Đường luật; vẻ đẹp mùa thu làng cảnh Việt Nam.",
            "questions": []
          },
          {
            "id": "nguvan-8-b3",
            "number": 3,
            "title": "Hịch tướng sĩ (Trần Quốc Tuấn)",
            "chapter": "Bài 3: Lời sông núi",
            "summary": "Văn nghị luận trung đại khích lệ tinh thần yêu nước, quyết chiến bảo vệ Tổ quốc.",
            "questions": []
          },
          {
            "id": "nguvan-8-b4",
            "number": 4,
            "title": "Lễ xướng danh khoa Đinh Dậu (Tú Xương)",
            "chapter": "Bài 4: Tiếng cười trào phúng trong thơ",
            "summary": "Nghệ thuật trào phúng phê phán chế độ thực dân nửa phong kiến.",
            "questions": []
          },
          {
            "id": "nguvan-8-b5",
            "number": 5,
            "title": "Mắt sói (Đa-ni-en Pen-nắc) & Lặng lẽ Sa Pa (Nguyễn Thành Long)",
            "chapter": "Bài 6: Chân dung cuộc sống",
            "summary": "Vẻ đẹp thầm lặng của những con người lao động cống hiến.",
            "questions": []
          },
          {
            "id": "nguvan-8-b6",
            "number": 6,
            "title": "Đồng chí (Chính Hữu) & Lá đỏ (Nguyễn Đình Thi)",
            "chapter": "Bài 7: Tin yêu và ước vọng",
            "summary": "Tình đồng chí gắn bó keo sơn của người lính trong kháng chiến.",
            "questions": []
          },
          {
            "id": "nguvan-8-b7",
            "number": 7,
            "title": "Nhà thơ của quê hương làng cảnh Việt Nam",
            "chapter": "Bài 8: Nhà văn và trang viết",
            "summary": "Nghị luận văn học phân tích giá trị tác phẩm.",
            "questions": []
          },
          {
            "id": "nguvan-8-b8",
            "number": 8,
            "title": "Miền châu thổ sông Cửu Long cần chuyển đổi từ sống chung sang chào đón lũ",
            "chapter": "Bài 9: Hôm nay và ngày mai",
            "summary": "Văn bản thông tin giải thích hiện tượng biến đổi khí hậu.",
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
            "chapter": "Lịch sử - Chương 1: Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII",
            "summary": "Nguyên nhân, kết quả và ý nghĩa lịch sử các cuộc cách mạng tư sản đầu tiên.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b2",
            "number": 2,
            "title": "Bài 2: Cách mạng tư sản Pháp cuối thế kỉ XVIII",
            "chapter": "Lịch sử - Chương 1: Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII",
            "summary": "Tuyên ngôn Nhân quyền và Dân quyền 1789, lật đổ chế độ phong kiến.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b3",
            "number": 3,
            "title": "Bài 3: Cách mạng công nghiệp (nửa sau thế kỉ XVIII - giữa thế kỉ XIX)",
            "chapter": "Lịch sử - Chương 1: Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII",
            "summary": "Máy hơi nước Giêm Oát, chuyển từ lao động thủ công sang cơ khí.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b4",
            "number": 4,
            "title": "Bài 7: Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII & Phong trào Tây Sơn",
            "chapter": "Lịch sử - Chương 3: Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII",
            "summary": "Nguyễn Huệ đại phá quân Xiêm (Rạch Gầm - Xoài Mút) và quân Thanh (Ngọc Hồi - Đống Đa 1789).",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b5",
            "number": 5,
            "title": "Bài 17: Cuộc kháng chiến chống thực dân Pháp xâm lược từ năm 1858 đến năm 1884",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ đầu thế kỉ XIX đến đầu thế kỉ XX",
            "summary": "Pháp nổ súng tại Đà Nẵng 1858, phong trào Cần vương và khởi nghĩa Yên Thế.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b6",
            "number": 6,
            "title": "Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
            "chapter": "Địa lí - Chương 1: Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
            "summary": "Tọa độ các điểm cực, ý nghĩa tự nhiên và kinh tế - quốc phòng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b7",
            "number": 7,
            "title": "Bài 2: Địa hình Việt Nam",
            "chapter": "Địa lí - Chương 1: Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam",
            "summary": "Đồi núi chiếm 3/4 diện tích, hướng Tây Bắc - Đông Nam và vòng cung.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b8",
            "number": 8,
            "title": "Bài 4: Khí hậu Việt Nam",
            "chapter": "Địa lí - Chương 2: Khí hậu và thủy văn Việt Nam",
            "summary": "Tính chất nhiệt đới ẩm gió mùa và sự phân hóa đa dạng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b9",
            "number": 9,
            "title": "Bài 6: Thủy văn Việt Nam",
            "chapter": "Địa lí - Chương 2: Khí hậu và thủy văn Việt Nam",
            "summary": "Mạng lưới sông ngòi dày đặc (sông Hồng, sông Mê Kông) và hồ, nước ngầm.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b10",
            "number": 10,
            "title": "Bài 11: Phạm vi Biển Đông. Vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam",
            "chapter": "Địa lí - Chương 4: Biển đảo Việt Nam",
            "summary": "Vùng nội thủy, lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế và thềm lục địa; Hoàng Sa, Trường Sa.",
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
            "summary": "Động từ chỉ sự yêu thích theo sau bởi V-ing hoặc to-V.",
            "questions": []
          },
          {
            "id": "tienganh-8-b2",
            "number": 2,
            "title": "Unit 2: Life in the Countryside",
            "chapter": "Unit 2: Life in the Countryside",
            "summary": "So sánh hơn của trạng từ (Comparative forms of adverbs).",
            "questions": []
          },
          {
            "id": "tienganh-8-b3",
            "number": 3,
            "title": "Unit 3: Teenagers",
            "chapter": "Unit 3: Teenagers",
            "summary": "Câu đơn và câu ghép (Compound sentences với and, but, so, therefore, however).",
            "questions": []
          },
          {
            "id": "tienganh-8-b4",
            "number": 4,
            "title": "Unit 4: Ethnic Groups of Viet Nam",
            "chapter": "Unit 4: Ethnic Groups of Viet Nam",
            "summary": "Câu hỏi Yes/No, Wh-questions; danh từ đếm được và không đếm được.",
            "questions": []
          },
          {
            "id": "tienganh-8-b5",
            "number": 5,
            "title": "Unit 5: Our Customs and Traditions",
            "chapter": "Unit 5: Our Customs and Traditions",
            "summary": "Mạo từ zero article (không dùng mạo từ) trong ngữ cảnh văn hóa.",
            "questions": []
          },
          {
            "id": "tienganh-8-b6",
            "number": 6,
            "title": "Unit 6: Lifestyles",
            "chapter": "Unit 6: Lifestyles",
            "summary": "Thì Tương lai đơn và Câu điều kiện loại 1 với unless.",
            "questions": []
          },
          {
            "id": "tienganh-8-b7",
            "number": 7,
            "title": "Unit 7: Environmental Protection",
            "chapter": "Unit 7: Environmental Protection",
            "summary": "Câu phức với mệnh đề trạng ngữ chỉ thời gian (when, while, before, after).",
            "questions": []
          },
          {
            "id": "tienganh-8-b8",
            "number": 8,
            "title": "Unit 8: Shopping",
            "chapter": "Unit 8: Shopping",
            "summary": "Trạng từ chỉ tần suất và Thì Hiện tại đơn nói về lịch trình.",
            "questions": []
          },
          {
            "id": "tienganh-8-b9",
            "number": 9,
            "title": "Unit 9: Natural Disasters",
            "chapter": "Unit 9: Natural Disasters",
            "summary": "Thì Quá khứ tiếp diễn (Past Continuous) với when / while.",
            "questions": []
          },
          {
            "id": "tienganh-8-b10",
            "number": 10,
            "title": "Unit 10: Communication in the Future",
            "chapter": "Unit 10: Communication in the Future",
            "summary": "Giới từ chỉ thời gian, nơi chốn và đại từ sở hữu.",
            "questions": []
          },
          {
            "id": "tienganh-8-b11",
            "number": 11,
            "title": "Unit 11: Science and Technology",
            "chapter": "Unit 11: Science and Technology",
            "summary": "Câu tường thuật (Reported speech - statements).",
            "questions": []
          },
          {
            "id": "tienganh-8-b12",
            "number": 12,
            "title": "Unit 12: Life on Other Planets",
            "chapter": "Unit 12: Life on Other Planets",
            "summary": "Câu tường thuật dạng câu hỏi (Reported speech - questions).",
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
            "summary": "Dạng ax + by = c và nghiệm của hệ phương trình bậc nhất hai ẩn.",
            "questions": []
          },
          {
            "id": "toan-9-b2",
            "number": 2,
            "title": "Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn",
            "chapter": "Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn",
            "summary": "Phương pháp thế và phương pháp cộng đại số.",
            "questions": [
              {
                "content": "Hệ phương trình { x + y = 5; x - y = 1 } có nghiệm (x; y) là:",
                "option_a": "(2; 3)",
                "option_b": "(3; 2)",
                "option_c": "(4; 1)",
                "option_d": "(1; 4)",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-9-b3",
            "number": 3,
            "title": "Bài 4: Phương trình quy về phương trình bậc nhất một ẩn",
            "chapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
            "summary": "Phương trình tích A(x)·B(x) = 0 và phương trình chứa ẩn ở mẫu.",
            "questions": []
          },
          {
            "id": "toan-9-b4",
            "number": 4,
            "title": "Bài 6: Bất phương trình bậc nhất một ẩn",
            "chapter": "Chương II: Phương trình và bất phương trình bậc nhất một ẩn",
            "summary": "Tính chất bất đẳng thức và giải bất phương trình ax + b > 0.",
            "questions": []
          },
          {
            "id": "toan-9-b5",
            "number": 5,
            "title": "Bài 7: Căn bậc hai và căn thức bậc hai",
            "chapter": "Chương III: Căn bậc hai và căn bậc ba",
            "summary": "Điều kiện xác định √A (A ≥ 0) và hằng đẳng thức √(A²) = |A|.",
            "questions": []
          },
          {
            "id": "toan-9-b6",
            "number": 6,
            "title": "Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai",
            "chapter": "Chương III: Căn bậc hai và căn bậc ba",
            "summary": "Đưa thừa số ra ngoài/vào trong dấu căn, trục căn thức ở mẫu.",
            "questions": []
          },
          {
            "id": "toan-9-b7",
            "number": 7,
            "title": "Bài 10: Căn bậc ba và căn thức bậc ba",
            "chapter": "Chương III: Căn bậc hai và căn bậc ba",
            "summary": "Định nghĩa ³√a và tính chất của căn bậc ba.",
            "questions": []
          },
          {
            "id": "toan-9-b8",
            "number": 8,
            "title": "Bài 11: Tỉ số lượng giác của góc nhọn",
            "chapter": "Chương IV: Hệ thức lượng trong tam giác vuông",
            "summary": "Định nghĩa sin, cos, tan, cot của góc nhọn và bảng giá trị đặc biệt (30°, 45°, 60°).",
            "questions": [
              {
                "content": "Trong tam giác vuông, tỉ số giữa cạnh đối và cạnh huyền của góc nhọn α là:",
                "option_a": "cos α",
                "option_b": "sin α",
                "option_c": "tan α",
                "option_d": "cot α",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-9-b9",
            "number": 9,
            "title": "Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng",
            "chapter": "Chương IV: Hệ thức lượng trong tam giác vuông",
            "summary": "Giải tam giác vuông và bài toán đo chiều cao, khoảng cách thực tế.",
            "questions": []
          },
          {
            "id": "toan-9-b10",
            "number": 10,
            "title": "Bài 13: Mở đầu về đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Tính đối xứng của đường tròn (tâm đối xứng, trục đối xứng).",
            "questions": []
          },
          {
            "id": "toan-9-b11",
            "number": 11,
            "title": "Bài 14: Cung và dây của một đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Quan hệ giữa đường kính và dây; góc ở tâm và số đo cung.",
            "questions": []
          },
          {
            "id": "toan-9-b12",
            "number": 12,
            "title": "Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên",
            "chapter": "Chương V: Đường tròn",
            "summary": "l = (πRn)/180 và S_q = (πR²n)/360.",
            "questions": []
          },
          {
            "id": "toan-9-b13",
            "number": 13,
            "title": "Bài 16: Vị trí tương đối của đường thẳng và đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Cắt nhau, tiếp xúc (tiếp tuyến vuông góc bán kính), không giao nhau.",
            "questions": []
          },
          {
            "id": "toan-9-b14",
            "number": 14,
            "title": "Bài 17: Vị trí tương đối của hai đường tròn",
            "chapter": "Chương V: Đường tròn",
            "summary": "Hai đường tròn cắt nhau, tiếp xúc nhau, ngoài nhau/đựng nhau.",
            "questions": []
          },
          {
            "id": "toan-9-b15",
            "number": 15,
            "title": "Bài 18: Hàm số y = ax² (a ≠ 0)",
            "chapter": "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "summary": "Tính đồng biến, nghịch biến và đồ thị Parabol.",
            "questions": []
          },
          {
            "id": "toan-9-b16",
            "number": 16,
            "title": "Bài 19: Phương trình bậc hai một ẩn",
            "chapter": "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "summary": "Công thức nghiệm, biệt thức Δ = b² - 4ac.",
            "questions": []
          },
          {
            "id": "toan-9-b17",
            "number": 17,
            "title": "Bài 20: Định lí Viète và ứng dụng",
            "chapter": "Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
            "summary": "x₁ + x₂ = -b/a và x₁·x₂ = c/a; nhẩm nghiệm và tìm hai số biết tổng, tích.",
            "questions": [
              {
                "content": "Theo định lí Viète, tổng hai nghiệm x₁ + x₂ của phương trình 2x² - 6x + 3 = 0 bằng:",
                "option_a": "-3",
                "option_b": "3",
                "option_c": "3/2",
                "option_d": "-6",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-9-b18",
            "number": 18,
            "title": "Bài 22: Bảng tần số và biểu đồ tần số",
            "chapter": "Chương VII: Tần số và tần số tương đối",
            "summary": "Lập bảng tần số, tần số tương đối và biểu diễn biểu đồ.",
            "questions": []
          },
          {
            "id": "toan-9-b19",
            "number": 19,
            "title": "Bài 25: Phép thử ngẫu nhiên và không gian mẫu",
            "chapter": "Chương VIII: Xác suất của biến cố trong một số mô hình xác suất đơn giản",
            "summary": "Xác định không gian mẫu Ω và tính xác suất biến cố.",
            "questions": []
          },
          {
            "id": "toan-9-b20",
            "number": 20,
            "title": "Bài 27: Góc nội tiếp",
            "chapter": "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "summary": "Số đo góc nội tiếp bằng nửa số đo cung bị chắn.",
            "questions": []
          },
          {
            "id": "toan-9-b21",
            "number": 21,
            "title": "Bài 29: Tứ giác nội tiếp",
            "chapter": "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "summary": "Tổng hai góc đối của tứ giác nội tiếp bằng 180°.",
            "questions": []
          },
          {
            "id": "toan-9-b22",
            "number": 22,
            "title": "Bài 30: Đa giác đều",
            "chapter": "Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp",
            "summary": "Phép quay giữ nguyên đa giác đều.",
            "questions": []
          },
          {
            "id": "toan-9-b23",
            "number": 23,
            "title": "Bài 31: Hình trụ và hình nón",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích xung quanh và thể tích hình trụ (V = πR²h), hình nón (V = 1/3·πR²h).",
            "questions": []
          },
          {
            "id": "toan-9-b24",
            "number": 24,
            "title": "Bài 32: Hình cầu",
            "chapter": "Chương X: Một số hình khối trong thực tiễn",
            "summary": "Diện tích mặt cầu S = 4πR² và thể tích hình cầu V = (4/3)πR³.",
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
            "title": "Bài 2: Động năng. Thế năng",
            "chapter": "Chương I: Năng lượng cơ học",
            "summary": "W_đ = (1/2)mv² và W_t = P·h; sự chuyển hóa giữa động năng và thế năng.",
            "questions": []
          },
          {
            "id": "khtn-9-b2",
            "number": 2,
            "title": "Bài 3: Cơ năng",
            "chapter": "Chương I: Năng lượng cơ học",
            "summary": "Cơ năng W = W_đ + W_t và định luật bảo toàn cơ năng.",
            "questions": []
          },
          {
            "id": "khtn-9-b3",
            "number": 3,
            "title": "Bài 4: Công và công suất",
            "chapter": "Chương I: Năng lượng cơ học",
            "summary": "Công cơ học A = F·s (J), công suất P = A/t (W).",
            "questions": [
              {
                "content": "Một cần cẩu nâng vật nặng thực hiện công 30000 J trong thời gian 15 giây. Công suất của cần cẩu là:",
                "option_a": "200 W",
                "option_b": "2000 W",
                "option_c": "450000 W",
                "option_d": "1500 W",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-9-b4",
            "number": 4,
            "title": "Bài 5: Khúc xạ ánh sáng",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Hiện tượng gãy tia sáng tại mặt phân cách, định luật khúc xạ n₁sin(i) = n₂sin(r).",
            "questions": []
          },
          {
            "id": "khtn-9-b5",
            "number": 5,
            "title": "Bài 6: Phản xạ toàn phần",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Điều kiện phản xạ toàn phần (n₁ > n₂, i ≥ i_gh) và ứng dụng cáp quang.",
            "questions": []
          },
          {
            "id": "khtn-9-b6",
            "number": 6,
            "title": "Bài 8: Thấu kính",
            "chapter": "Chương II: Ánh sáng",
            "summary": "Thấu kính hội tụ (rìa mỏng) và phân kì (rìa dày); cách dựng ảnh qua thấu kính.",
            "questions": []
          },
          {
            "id": "khtn-9-b7",
            "number": 7,
            "title": "Bài 11: Điện trở. Định luật Ohm",
            "chapter": "Chương III: Điện",
            "summary": "Công thức định luật Ohm I = U/R và điện trở dây dẫn R = ρ·l/S.",
            "questions": [
              {
                "content": "Đặt hiệu điện thế 12 V vào hai đầu điện trở 4 Ω. Cường độ dòng điện qua điện trở là:",
                "option_a": "48 A",
                "option_b": "3 A",
                "option_c": "8 A",
                "option_d": "0,33 A",
                "correct": "B"
              }
            ]
          },
          {
            "id": "khtn-9-b8",
            "number": 8,
            "title": "Bài 12: Đoạn mạch nối tiếp, song song",
            "chapter": "Chương III: Điện",
            "summary": "R_nt = R₁ + R₂ và 1/R_ss = 1/R₁ + 1/R₂.",
            "questions": []
          },
          {
            "id": "khtn-9-b9",
            "number": 9,
            "title": "Bài 13: Năng lượng của dòng điện và công suất điện",
            "chapter": "Chương III: Điện",
            "summary": "Công suất điện P = U·I và điện năng tiêu thụ A = U·I·t.",
            "questions": []
          },
          {
            "id": "khtn-9-b10",
            "number": 10,
            "title": "Bài 14: Cảm ứng điện từ",
            "chapter": "Chương IV: Điện từ",
            "summary": "Hiện tượng cảm ứng điện từ khi số đường sức từ qua cuộn dây biến thiên.",
            "questions": []
          },
          {
            "id": "khtn-9-b11",
            "number": 11,
            "title": "Bài 15: Tác dụng của dòng điện xoay chiều",
            "chapter": "Chương IV: Điện từ",
            "summary": "Dòng điện xoay chiều và nguyên tắc hoạt động của máy phát điện xoay chiều.",
            "questions": []
          },
          {
            "id": "khtn-9-b12",
            "number": 12,
            "title": "Bài 16: Vòng năng lượng trên Trái Đất. Năng lượng hóa thạch",
            "chapter": "Chương V: Năng lượng với cuộc sống",
            "summary": "Năng lượng tái tạo và tác động của năng lượng hóa thạch.",
            "questions": []
          },
          {
            "id": "khtn-9-b13",
            "number": 13,
            "title": "Bài 18: Tính chất chung của kim loại",
            "chapter": "Chương VI: Kim loại. Sự khác nhau cơ bản giữa phi kim và kim loại",
            "summary": "Tính dẻo, dẫn điện, dẫn nhiệt, ánh kim; tác dụng với phi kim, nước, acid, dung dịch muối.",
            "questions": []
          },
          {
            "id": "khtn-9-b14",
            "number": 14,
            "title": "Bài 19: Dãy hoạt động hóa học",
            "chapter": "Chương VI: Kim loại. Sự khác nhau cơ bản giữa phi kim và kim loại",
            "summary": "Ý nghĩa dãy hoạt động hóa học: K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au.",
            "questions": []
          },
          {
            "id": "khtn-9-b15",
            "number": 15,
            "title": "Bài 20: Tách kim loại và việc sử dụng hợp kim",
            "chapter": "Chương VI: Kim loại. Sự khác nhau cơ bản giữa phi kim và kim loại",
            "summary": "Phương pháp điện phân, nhiệt luyện; gang, thép và nhôm.",
            "questions": []
          },
          {
            "id": "khtn-9-b16",
            "number": 16,
            "title": "Bài 22: Giới thiệu về hợp chất hữu cơ",
            "chapter": "Chương VII: Giới thiệu về chất hữu cơ. Hydrocarbon và nguồn nhiên liệu",
            "summary": "Hợp chất của carbon, phân biệt hydrocarbon và dẫn xuất hydrocarbon.",
            "questions": []
          },
          {
            "id": "khtn-9-b17",
            "number": 17,
            "title": "Bài 23: Alkane",
            "chapter": "Chương VII: Giới thiệu về chất hữu cơ. Hydrocarbon và nguồn nhiên liệu",
            "summary": "Methane (CH₄), phản ứng cháy và phản ứng thế với chlorine.",
            "questions": []
          },
          {
            "id": "khtn-9-b18",
            "number": 18,
            "title": "Bài 24: Alkene",
            "chapter": "Chương VII: Giới thiệu về chất hữu cơ. Hydrocarbon và nguồn nhiên liệu",
            "summary": "Ethylene (C₂H₄), liên kết đôi C=C, làm mất màu nước bromine và phản ứng trùng hợp.",
            "questions": []
          },
          {
            "id": "khtn-9-b19",
            "number": 19,
            "title": "Bài 26: Ethylic alcohol",
            "chapter": "Chương VIII: Ethylic alcohol và Acetic acid",
            "summary": "Công thức C₂H₅OH, độ cồn, phản ứng cháy, tác dụng với Na và lên men giấm.",
            "questions": []
          },
          {
            "id": "khtn-9-b20",
            "number": 20,
            "title": "Bài 27: Acetic acid",
            "chapter": "Chương VIII: Ethylic alcohol và Acetic acid",
            "summary": "CH₃COOH, tính acid yếu, tác dụng kim loại/base/muối carbonate và phản ứng ester hóa.",
            "questions": []
          },
          {
            "id": "khtn-9-b21",
            "number": 21,
            "title": "Bài 28: Lipid",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Chất béo là triester của glycerol và acid béo; phản ứng xà phòng hóa.",
            "questions": []
          },
          {
            "id": "khtn-9-b22",
            "number": 22,
            "title": "Bài 29: Carbohydrate. Glucose và Saccharose",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Glucose (C₆H₁₂O₆) tráng bạc và saccharose (C₁₂H₂₂O₁₁) thủy phân.",
            "questions": []
          },
          {
            "id": "khtn-9-b23",
            "number": 23,
            "title": "Bài 30: Tinh bột và Cellulose",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Tinh bột cho phản ứng màu xanh tím với iodine; cellulose cấu tạo thành tế bào thực vật.",
            "questions": []
          },
          {
            "id": "khtn-9-b24",
            "number": 24,
            "title": "Bài 31: Protein",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Cấu tạo từ các amino acid và phản ứng đông tụ, thủy phân.",
            "questions": []
          },
          {
            "id": "khtn-9-b25",
            "number": 25,
            "title": "Bài 32: Polymer",
            "chapter": "Chương IX: Lipid. Carbohydrate. Protein. Polymer",
            "summary": "Khái niệm polymer, chất dẻo (PE, PP, PVC), tơ, cao su.",
            "questions": []
          },
          {
            "id": "khtn-9-b26",
            "number": 26,
            "title": "Bài 36: Khái quát về di truyền học",
            "chapter": "Chương XI: Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền",
            "summary": "Khái niệm di truyền, biến dị, tính trạng, cặp tính trạng tương phản.",
            "questions": []
          },
          {
            "id": "khtn-9-b27",
            "number": 27,
            "title": "Bài 37: Các quy luật di truyền của Mendel",
            "chapter": "Chương XI: Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền",
            "summary": "Quy luật phân li (3:1 ở F₂) và quy luật phân li độc lập (9:3:3:1).",
            "questions": []
          },
          {
            "id": "khtn-9-b28",
            "number": 28,
            "title": "Bài 38: Nucleic acid và gene",
            "chapter": "Chương XI: Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền",
            "summary": "Cấu trúc xoắn kép DNA (A-T, G-C) và các loại RNA (mRNA, tRNA, rRNA).",
            "questions": []
          },
          {
            "id": "khtn-9-b29",
            "number": 29,
            "title": "Bài 39: Tái bản DNA và phiên mã tạo RNA",
            "chapter": "Chương XI: Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền",
            "summary": "Nguyên tắc bổ sung và bán bảo toàn trong tái bản DNA.",
            "questions": []
          },
          {
            "id": "khtn-9-b30",
            "number": 30,
            "title": "Bài 40: Dịch mã và mối quan hệ từ gene đến tính trạng",
            "chapter": "Chương XI: Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền",
            "summary": "Sơ đồ Gene (DNA) -> mRNA -> Chuỗi polypeptide (Protein) -> Tính trạng.",
            "questions": []
          },
          {
            "id": "khtn-9-b31",
            "number": 31,
            "title": "Bài 42: Nhiễm sắc thể và bộ nhiễm sắc thể",
            "chapter": "Chương XII: Di truyền nhiễm sắc thể",
            "summary": "Bộ NST lưỡng bội (2n) và đơn bội (n); NST thường và NST giới tính XX/XY.",
            "questions": []
          },
          {
            "id": "khtn-9-b32",
            "number": 32,
            "title": "Bài 43: Nguyên phân và giảm phân",
            "chapter": "Chương XII: Di truyền nhiễm sắc thể",
            "summary": "Nguyên phân duy trì 2n; giảm phân tạo giao tử n.",
            "questions": []
          },
          {
            "id": "khtn-9-b33",
            "number": 33,
            "title": "Bài 46: Khái niệm về tiến hóa và các hình thức chọn lọc",
            "chapter": "Chương XIII: Tiến hóa",
            "summary": "Chọn lọc tự nhiên của Darwin và chọn lọc nhân tạo.",
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
            "title": "Chuyện người con gái Nam Xương (Nguyễn Dữ)",
            "chapter": "Bài 1: Thế giới kì ảo",
            "summary": "Truyền kì mạn lục: số phận bi kịch của người phụ nữ trong xã hội phong kiến.",
            "questions": []
          },
          {
            "id": "nguvan-9-b2",
            "number": 2,
            "title": "Nỗi niềm chinh phụ & Tiếng đàn mưa",
            "chapter": "Bài 2: Những cung bậc tâm trạng",
            "summary": "Thể thơ song thất lục bát biểu đạt tâm trạng nhớ thương sâu lắng.",
            "questions": []
          },
          {
            "id": "nguvan-9-b3",
            "number": 3,
            "title": "Truyện Kiều (Nguyễn Du) - Chị em Thúy Kiều, Kiều ở lầu Ngưng Bích",
            "chapter": "Bài 3: Hồn nước nằm trong tiếng mẹ cha",
            "summary": "Nghệ thuật ước lệ tượng trưng và tả cảnh ngụ tình bậc thầy của Nguyễn Du.",
            "questions": []
          },
          {
            "id": "nguvan-9-b4",
            "number": 4,
            "title": "Người con gái Nam Xương - một bi kịch của con người",
            "chapter": "Bài 4: Khám phá vẻ đẹp văn chương",
            "summary": "Nghị luận văn học phân tích chiều sâu nhân đạo.",
            "questions": []
          },
          {
            "id": "nguvan-9-b5",
            "number": 5,
            "title": "Dế chọi (Bồ Tùng Linh) & Vụ án chiếc nhẫn",
            "chapter": "Bài 6: Giải mã những bí mật",
            "summary": "Đặc trưng truyện trinh thám và yếu tố bất ngờ.",
            "questions": []
          },
          {
            "id": "nguvan-9-b6",
            "number": 6,
            "title": "Viếng lăng Bác (Viễn Phương) & Sang thu (Hữu Thỉnh)",
            "chapter": "Bài 7: Hồn thơ muôn điệu",
            "summary": "Thơ hiện đại Việt Nam sau 1975 giàu cảm xúc và suy tư.",
            "questions": []
          },
          {
            "id": "nguvan-9-b7",
            "number": 7,
            "title": "Đấu tranh cho một thế giới hòa bình (G. Mác-két)",
            "chapter": "Bài 8: Tiếng nói của lương tri",
            "summary": "Văn bản nghị luận cảnh báo nguy cơ chiến tranh hạt nhân.",
            "questions": []
          },
          {
            "id": "nguvan-9-b8",
            "number": 8,
            "title": "Bến quê (Nguyễn Minh Châu) & Rô-bin-xơn ngoài đảo hoang",
            "chapter": "Bài 9: Đi và suy ngẫm",
            "summary": "Chiêm nghiệm về những giá trị bình dị, bền vững quanh ta.",
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
            "chapter": "Lịch sử - Chương 1: Thế giới từ năm 1918 đến năm 1945",
            "summary": "Chính sách kinh tế mới (NEP) và công cuộc xây dựng CNXH ở Liên Xô.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b2",
            "number": 2,
            "title": "Bài 3: Chiến tranh thế giới thứ hai (1939 - 1945)",
            "chapter": "Lịch sử - Chương 1: Thế giới từ năm 1918 đến năm 1945",
            "summary": "Nguyên nhân, diễn biến chính, vai trò Đồng minh và hậu quả.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b3",
            "number": 3,
            "title": "Bài 6: Hoạt động của Nguyễn Ái Quốc và sự thành lập Đảng Cộng sản Việt Nam (1930)",
            "chapter": "Lịch sử - Chương 2: Việt Nam từ năm 1918 đến năm 1945",
            "summary": "Nguyễn Ái Quốc tìm đường cứu nước, Hội nghị hợp nhất các tổ chức cộng sản 3/2/1930.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b4",
            "number": 4,
            "title": "Bài 8: Cách mạng tháng Tám năm 1945",
            "chapter": "Lịch sử - Chương 2: Việt Nam từ năm 1918 đến năm 1945",
            "summary": "Tổng khởi nghĩa giành chính quyền và Tuyên ngôn Độc lập 2/9/1945.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b5",
            "number": 5,
            "title": "Bài 14: Cuộc kháng chiến chống thực dân Pháp (1945 - 1954)",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ năm 1945 đến năm 1991",
            "summary": "Chiến dịch Việt Bắc 1947, Biên giới 1950 và Chiến thắng Điện Biên Phủ 1954.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b6",
            "number": 6,
            "title": "Bài 17: Cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975)",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ năm 1945 đến năm 1991",
            "summary": "Phong trào Đồng khởi, Chiến thắng Điện Biên Phủ trên không 1972, Chiến dịch Hồ Chí Minh 30/4/1975.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b7",
            "number": 7,
            "title": "Bài 19: Công cuộc Đổi mới từ năm 1986 đến nay",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ năm 1945 đến năm 1991",
            "summary": "Đường lối Đổi mới Đại hội VI (1986) và thành tựu phát triển đất nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b8",
            "number": 8,
            "title": "Bài 1: Dân tộc và dân số",
            "chapter": "Địa lí - Chương 1: Địa lí dân cư Việt Nam",
            "summary": "54 dân tộc anh em, quy mô và cơ cấu dân số Việt Nam.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b9",
            "number": 9,
            "title": "Bài 4: Nông nghiệp, lâm nghiệp, thủy sản",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Vai trò, phân bố các cây công nghiệp, lương thực và thủy sản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b10",
            "number": 10,
            "title": "Bài 7: Công nghiệp",
            "chapter": "Địa lí - Chương 2: Địa lí các ngành kinh tế",
            "summary": "Các ngành công nghiệp trọng điểm: khai khoáng, điện, chế biến, điện tử.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b11",
            "number": 11,
            "title": "Bài 11-17: 6 vùng kinh tế - xã hội Việt Nam",
            "chapter": "Địa lí - Chương 3: Sự phân hóa lãnh thổ",
            "summary": "Thế mạnh và phát triển của Trung du miền núi Bắc Bộ, Đồng bằng sông Hồng, Bắc Trung Bộ & Duyên hải miền Trung, Tây Nguyên, Đông Nam Bộ, Đồng bằng sông Cửu Long.",
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
            "summary": "Từ hỏi + to-V (Question words before to-infinitives) và cụm động từ (Phrasal verbs).",
            "questions": []
          },
          {
            "id": "tienganh-9-b2",
            "number": 2,
            "title": "Unit 2: City Life",
            "chapter": "Unit 2: City Life",
            "summary": "So sánh kép (Double comparatives: The + comparative..., the + comparative...).",
            "questions": []
          },
          {
            "id": "tienganh-9-b3",
            "number": 3,
            "title": "Unit 3: Healthy Living for Teens",
            "chapter": "Unit 3: Healthy Living for Teens",
            "summary": "Động từ khuyết thiếu trong câu điều kiện loại 1.",
            "questions": []
          },
          {
            "id": "tienganh-9-b4",
            "number": 4,
            "title": "Unit 4: Remembering the Past",
            "chapter": "Unit 4: Remembering the Past",
            "summary": "Thì Quá khứ tiếp diễn và câu ước (wish + Past Simple).",
            "questions": []
          },
          {
            "id": "tienganh-9-b5",
            "number": 5,
            "title": "Unit 5: Our Experiences",
            "chapter": "Unit 5: Our Experiences",
            "summary": "Thì Hiện tại hoàn thành (Present Perfect) với ever, never, for, since.",
            "questions": []
          },
          {
            "id": "tienganh-9-b6",
            "number": 6,
            "title": "Unit 6: Vietnamese Lifestyle: Then and Now",
            "chapter": "Unit 6: Vietnamese Lifestyle: Then and Now",
            "summary": "Động từ theo sau bởi V-ing hoặc to-infinitive.",
            "questions": []
          },
          {
            "id": "tienganh-9-b7",
            "number": 7,
            "title": "Unit 7: Natural Wonders of the World",
            "chapter": "Unit 7: Natural Wonders of the World",
            "summary": "Câu tường thuật dạng câu hỏi Yes/No.",
            "questions": []
          },
          {
            "id": "tienganh-9-b8",
            "number": 8,
            "title": "Unit 8: Tourism",
            "chapter": "Unit 8: Tourism",
            "summary": "Đại từ quan hệ (Relative pronouns: who, which, whose).",
            "questions": []
          },
          {
            "id": "tienganh-9-b9",
            "number": 9,
            "title": "Unit 9: World Englishes",
            "chapter": "Unit 9: World Englishes",
            "summary": "Mệnh đề quan hệ xác định (Defining relative clauses).",
            "questions": []
          },
          {
            "id": "tienganh-9-b10",
            "number": 10,
            "title": "Unit 10: Planet Earth",
            "chapter": "Unit 10: Planet Earth",
            "summary": "Mệnh đề quan hệ không xác định (Non-defining relative clauses).",
            "questions": []
          },
          {
            "id": "tienganh-9-b11",
            "number": 11,
            "title": "Unit 11: Electronic Devices",
            "chapter": "Unit 11: Electronic Devices",
            "summary": "Động từ suggest / advise / recommend + V-ing hoặc mệnh đề (that) S + (should) + V.",
            "questions": []
          },
          {
            "id": "tienganh-9-b12",
            "number": 12,
            "title": "Unit 12: Career Choices",
            "chapter": "Unit 12: Career Choices",
            "summary": "Mệnh đề trạng ngữ chỉ nguyên nhân, kết quả và nhượng bộ.",
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
            "summary": "Mệnh đề, mệnh đề phủ định, mệnh đề kéo theo P => Q, mệnh đề đảo, tương đương, kí hiệu ∀ và ∃.",
            "questions": [
              {
                "content": "Phủ định của mệnh đề '∀x ∈ R, x² + 1 > 0' là mệnh đề nào?",
                "option_a": "∀x ∈ R, x² + 1 ≤ 0",
                "option_b": "∃x ∈ R, x² + 1 ≤ 0",
                "option_c": "∃x ∈ R, x² + 1 < 0",
                "option_d": "∀x ∈ R, x² + 1 < 0",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-10-b2",
            "number": 2,
            "title": "Bài 2: Tập hợp và các phép toán trên tập hợp",
            "chapter": "Chương I: Mệnh đề và tập hợp",
            "summary": "Tập con, giao (A ∩ B), hợp (A ∪ B), hiệu (A \\ B) và phần bù của tập hợp.",
            "questions": []
          },
          {
            "id": "toan-10-b3",
            "number": 3,
            "title": "Bài 3: Bất phương trình bậc nhất hai ẩn",
            "chapter": "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
            "summary": "Biểu diễn miền nghiệm của bất phương trình ax + by ≤ c trên mặt phẳng tọa độ.",
            "questions": []
          },
          {
            "id": "toan-10-b4",
            "number": 4,
            "title": "Bài 4: Hệ bất phương trình bậc nhất hai ẩn",
            "chapter": "Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
            "summary": "Miền nghiệm của hệ bất phương trình và bài toán tối ưu (tìm GTLN, GTNN).",
            "questions": []
          },
          {
            "id": "toan-10-b5",
            "number": 5,
            "title": "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°",
            "chapter": "Chương III: Hệ thức lượng trong tam giác",
            "summary": "Định nghĩa sin, cos, tan, cot góc tù và tính chất hai góc bù nhau.",
            "questions": []
          },
          {
            "id": "toan-10-b6",
            "number": 6,
            "title": "Bài 6: Hệ thức lượng trong tam giác",
            "chapter": "Chương III: Hệ thức lượng trong tam giác",
            "summary": "Định lí côsin, định lí sin và các công thức tính diện tích tam giác.",
            "questions": [
              {
                "content": "Trong tam giác ABC bất kì với BC = a, AC = b, AB = c. Công thức định lí côsin đúng là:",
                "option_a": "a² = b² + c² + 2bc·cosA",
                "option_b": "a² = b² + c² - 2bc·cosA",
                "option_c": "a² = b² + c² - bc·cosA",
                "option_d": "a² = b² - c² + 2bc·cosA",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-10-b7",
            "number": 7,
            "title": "Bài 7: Các khái niệm mở đầu",
            "chapter": "Chương IV: Vectơ",
            "summary": "Vectơ, hai vectơ cùng phương, cùng hướng, bằng nhau và vectơ-không.",
            "questions": []
          },
          {
            "id": "toan-10-b8",
            "number": 8,
            "title": "Bài 8: Tổng và hiệu của hai vectơ",
            "chapter": "Chương IV: Vectơ",
            "summary": "Quy tắc ba điểm, quy tắc hình bình hành và hiệu hai vectơ.",
            "questions": []
          },
          {
            "id": "toan-10-b9",
            "number": 9,
            "title": "Bài 9: Tích của một vectơ với một số",
            "chapter": "Chương IV: Vectơ",
            "summary": "Định nghĩa k·a, tính chất trung điểm đoạn thẳng và trọng tâm tam giác.",
            "questions": []
          },
          {
            "id": "toan-10-b10",
            "number": 10,
            "title": "Bài 10: Vectơ trong mặt phẳng tọa độ",
            "chapter": "Chương IV: Vectơ",
            "summary": "Tọa độ điểm, tọa độ vectơ và biểu thức tọa độ các phép toán vectơ.",
            "questions": []
          },
          {
            "id": "toan-10-b11",
            "number": 11,
            "title": "Bài 11: Tích vô hướng của hai vectơ",
            "chapter": "Chương IV: Vectơ",
            "summary": "a·b = |a|·|b|·cos(a, b) = x₁x₂ + y₁y₂; điều kiện vuông góc.",
            "questions": []
          },
          {
            "id": "toan-10-b12",
            "number": 12,
            "title": "Bài 12: Số gần đúng và sai số",
            "chapter": "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
            "summary": "Số gần đúng, sai số tuyệt đối, sai số tương đối và quy tròn.",
            "questions": []
          },
          {
            "id": "toan-10-b13",
            "number": 13,
            "title": "Bài 13: Các số đặc trưng đo xu thế trung tâm",
            "chapter": "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
            "summary": "Số trung bình, trung vị (Me), tứ phân vị (Q₁, Q₂, Q₃) và mốt (Mo).",
            "questions": []
          },
          {
            "id": "toan-10-b14",
            "number": 14,
            "title": "Bài 14: Các số đặc trưng đo độ phân tán",
            "chapter": "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
            "summary": "Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn.",
            "questions": []
          },
          {
            "id": "toan-10-b15",
            "number": 15,
            "title": "Bài 15: Hàm số",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Tập xác định, sự đồng biến, nghịch biến của hàm số.",
            "questions": []
          },
          {
            "id": "toan-10-b16",
            "number": 16,
            "title": "Bài 16: Hàm số bậc hai",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Đồ thị Parabol y = ax² + bx + c (a ≠ 0), đỉnh, trục đối xứng.",
            "questions": []
          },
          {
            "id": "toan-10-b17",
            "number": 17,
            "title": "Bài 17: Dấu của tam thức bậc hai",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Định lí về dấu của tam thức bậc hai f(x) = ax² + bx + c theo Δ.",
            "questions": []
          },
          {
            "id": "toan-10-b18",
            "number": 18,
            "title": "Bài 18: Phương trình quy về phương trình bậc hai",
            "chapter": "Chương VI: Hàm số, đồ thị và ứng dụng",
            "summary": "Giải phương trình chứa căn dạng √(ax²+bx+c) = √(dx²+ex+f) và √(ax²+bx+c) = dx+e.",
            "questions": []
          },
          {
            "id": "toan-10-b19",
            "number": 19,
            "title": "Bài 19: Phương trình đường thẳng",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Vectơ pháp tuyến, vectơ chỉ phương, phương trình tổng quát và tham số.",
            "questions": []
          },
          {
            "id": "toan-10-b20",
            "number": 20,
            "title": "Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Công thức góc giữa hai đường thẳng và khoảng cách từ điểm đến đường thẳng.",
            "questions": []
          },
          {
            "id": "toan-10-b21",
            "number": 21,
            "title": "Bài 21: Đường tròn trong mặt phẳng tọa độ",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Phương trình đường tròn tâm I(a;b) bán kính R và phương trình tiếp tuyến.",
            "questions": []
          },
          {
            "id": "toan-10-b22",
            "number": 22,
            "title": "Bài 22: Ba đường conic",
            "chapter": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
            "summary": "Phương trình chính tắc Elip, Hypebol và Parabol.",
            "questions": []
          },
          {
            "id": "toan-10-b23",
            "number": 23,
            "title": "Bài 23: Quy tắc đếm",
            "chapter": "Chương VIII: Đại số tổ hợp",
            "summary": "Quy tắc cộng và quy tắc nhân trong đếm số phần tử.",
            "questions": []
          },
          {
            "id": "toan-10-b24",
            "number": 24,
            "title": "Bài 24: Hoán vị, chỉnh hợp và tổ hợp",
            "chapter": "Chương VIII: Đại số tổ hợp",
            "summary": "Công thức P_n = n!, A_n^k và C_n^k.",
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
            "summary": "Không gian mẫu, biến cố đối và P(A) = n(A)/n(Ω).",
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
            "summary": "Đối tượng nghiên cứu, phương pháp thực nghiệm và mô hình.",
            "questions": []
          },
          {
            "id": "vatli-10-b2",
            "number": 2,
            "title": "Bài 3: Thực hành tính sai số trong phép đo",
            "chapter": "Chương I: Mở đầu",
            "summary": "Sai số hệ thống, sai số ngẫu nhiên và cách ghi kết quả đo.",
            "questions": []
          },
          {
            "id": "vatli-10-b3",
            "number": 3,
            "title": "Bài 4: Độ dịch chuyển và quãng đường đi được",
            "chapter": "Chương II: Động học",
            "summary": "Phân biệt đại lượng vectơ độ dịch chuyển (d) và đại lượng vô hướng quãng đường (s).",
            "questions": []
          },
          {
            "id": "vatli-10-b4",
            "number": 4,
            "title": "Bài 5: Tốc độ và vận tốc",
            "chapter": "Chương II: Động học",
            "summary": "Tốc độ trung bình và vận tốc trung bình v = d/t.",
            "questions": []
          },
          {
            "id": "vatli-10-b5",
            "number": 5,
            "title": "Bài 8: Chuyển động biến đổi. Gia tốc",
            "chapter": "Chương II: Động học",
            "summary": "Công thức gia tốc a = Δv/Δt (m/s²).",
            "questions": []
          },
          {
            "id": "vatli-10-b6",
            "number": 6,
            "title": "Bài 9: Chuyển động thẳng biến đổi đều",
            "chapter": "Chương II: Động học",
            "summary": "v = v₀ + at, d = v₀t + ½at², v² - v₀² = 2ad.",
            "questions": [
              {
                "content": "Một ô tô bắt đầu khởi hành (v₀ = 0) chuyển động thẳng nhanh dần đều với gia tốc 2 m/s². Sau 5 s vận tốc của ô tô là:",
                "option_a": "2,5 m/s",
                "option_b": "10 m/s",
                "option_c": "25 m/s",
                "option_d": "7 m/s",
                "correct": "B"
              }
            ]
          },
          {
            "id": "vatli-10-b7",
            "number": 7,
            "title": "Bài 10: Sự rơi tự do",
            "chapter": "Chương II: Động học",
            "summary": "Chuyển động chỉ dưới tác dụng trọng lực, gia tốc g ≈ 9,8 m/s².",
            "questions": []
          },
          {
            "id": "vatli-10-b8",
            "number": 8,
            "title": "Bài 12: Chuyển động ném",
            "chapter": "Chương II: Động học",
            "summary": "Phân tích chuyển động ném ngang và ném xiên theo hai phương Ox, Oy.",
            "questions": []
          },
          {
            "id": "vatli-10-b9",
            "number": 9,
            "title": "Bài 13: Tổng hợp và phân tích lực. Cân bằng lực",
            "chapter": "Chương III: Động lực học",
            "summary": "Quy tắc hình bình hành hợp lực và điều kiện cân bằng của chất điểm.",
            "questions": []
          },
          {
            "id": "vatli-10-b10",
            "number": 10,
            "title": "Bài 14: Định luật 1 Newton",
            "chapter": "Chương III: Động lực học",
            "summary": "Quán tính và trạng thái đứng yên hoặc chuyển động thẳng đều.",
            "questions": []
          },
          {
            "id": "vatli-10-b11",
            "number": 11,
            "title": "Bài 15: Định luật 2 Newton",
            "chapter": "Chương III: Động lực học",
            "summary": "a = F/m hay F = m·a.",
            "questions": [
              {
                "content": "Theo định luật 2 Newton, hợp lực F tác dụng lên vật khối lượng 4 kg gây ra gia tốc 3 m/s² có độ lớn là:",
                "option_a": "0,75 N",
                "option_b": "12 N",
                "option_c": "7 N",
                "option_d": "1,33 N",
                "correct": "B"
              }
            ]
          },
          {
            "id": "vatli-10-b12",
            "number": 12,
            "title": "Bài 16: Định luật 3 Newton",
            "chapter": "Chương III: Động lực học",
            "summary": "Lực và phản lực luôn cùng giá, cùng độ lớn, ngược chiều, đặt vào hai vật khác nhau.",
            "questions": []
          },
          {
            "id": "vatli-10-b13",
            "number": 13,
            "title": "Bài 18: Lực ma sát",
            "chapter": "Chương III: Động lực học",
            "summary": "Lực ma sát nghỉ, ma sát trượt F_ms = μ·N.",
            "questions": []
          },
          {
            "id": "vatli-10-b14",
            "number": 14,
            "title": "Bài 21: Moment lực. Cân bằng của vật rắn",
            "chapter": "Chương III: Động lực học",
            "summary": "Moment lực M = F·d và quy tắc moment lực.",
            "questions": []
          },
          {
            "id": "vatli-10-b15",
            "number": 15,
            "title": "Bài 23: Năng lượng. Công cơ học",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "A = F·s·cosα (Joule).",
            "questions": []
          },
          {
            "id": "vatli-10-b16",
            "number": 16,
            "title": "Bài 24: Công suất",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "P = A/t = F·v (Watt).",
            "questions": []
          },
          {
            "id": "vatli-10-b17",
            "number": 17,
            "title": "Bài 25: Động năng, thế năng",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "W_đ = ½mv² và W_t = mgh.",
            "questions": []
          },
          {
            "id": "vatli-10-b18",
            "number": 18,
            "title": "Bài 26: Cơ năng và định luật bảo toàn cơ năng",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "W = W_đ + W_t = hằng số khi chỉ có lực thế tác dụng.",
            "questions": []
          },
          {
            "id": "vatli-10-b19",
            "number": 19,
            "title": "Bài 27: Hiệu suất",
            "chapter": "Chương IV: Năng lượng, công, công suất",
            "summary": "H = (A_có_ích / A_toàn_phần)·100%.",
            "questions": []
          },
          {
            "id": "vatli-10-b20",
            "number": 20,
            "title": "Bài 28: Động lượng",
            "chapter": "Chương V: Động lượng",
            "summary": "p = m·v (kg·m/s) và xung lượng của lực F·Δt = Δp.",
            "questions": []
          },
          {
            "id": "vatli-10-b21",
            "number": 21,
            "title": "Bài 29: Định luật bảo toàn động lượng",
            "chapter": "Chương V: Động lượng",
            "summary": "Tổng động lượng của hệ cô lập được bảo toàn trong va chạm mềm và va chạm đàn hồi.",
            "questions": []
          },
          {
            "id": "vatli-10-b22",
            "number": 22,
            "title": "Bài 31: Động học của chuyển động tròn đều",
            "chapter": "Chương VI: Chuyển động tròn đều",
            "summary": "Tốc độ góc ω = Δθ/Δt (rad/s), chu kì T, tần số f và tốc độ dài v = ω·r.",
            "questions": []
          },
          {
            "id": "vatli-10-b23",
            "number": 23,
            "title": "Bài 32: Lực hướng tâm và gia tốc hướng tâm",
            "chapter": "Chương VI: Chuyển động tròn đều",
            "summary": "a_ht = v²/r = ω²·r và F_ht = m·v²/r.",
            "questions": []
          },
          {
            "id": "vatli-10-b24",
            "number": 24,
            "title": "Bài 33: Biến dạng của vật rắn",
            "chapter": "Chương VII: Biến dạng của vật rắn. Áp suất chất lỏng",
            "summary": "Định luật Hooke F_đh = k·|Δl|.",
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
            "summary": "Hạt proton (+1), neutron (0), electron (-1); khối lượng và kích thước nguyên tử.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b2",
            "number": 2,
            "title": "Bài 2: Nguyên tố hóa học",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Số hiệu nguyên tử Z, số khối A = Z + N, đồng vị và nguyên tử khối trung bình.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b3",
            "number": 3,
            "title": "Bài 3: Cấu trúc lớp vỏ electron của nguyên tử",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Orbital nguyên tử (s, p, d, f), nguyên lí Pauli, quy tắc Hund và cấu hình electron.",
            "questions": [
              {
                "content": "Cấu hình electron ở trạng thái cơ bản của nguyên tử Sodium (Na, Z = 11) là:",
                "option_a": "1s² 2s² 2p⁶ 3s²",
                "option_b": "1s² 2s² 2p⁶ 3s¹",
                "option_c": "1s² 2s² 2p⁵ 3s²",
                "option_d": "1s² 2s² 2p⁶ 3p¹",
                "correct": "B"
              }
            ]
          },
          {
            "id": "hoahoc-10-b4",
            "number": 4,
            "title": "Bài 5: Cấu tạo bảng tuần hoàn các nguyên tố hóa học",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Nguyên tắc sắp xếp; số thứ tự ô = Z, chu kì = số lớp e, nhóm A = số e lớp ngoài cùng.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b5",
            "number": 5,
            "title": "Bài 6: Xu hướng biến đổi một số tính chất của nguyên tử",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Bán kính nguyên tử, độ âm điện, tính kim loại và tính phi kim biến đổi tuần hoàn.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b6",
            "number": 6,
            "title": "Bài 8: Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Tính chất các nguyên tố biến đổi tuần hoàn theo chiều tăng điện tích hạt nhân.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b7",
            "number": 7,
            "title": "Bài 10: Quy tắc Octet",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Xu hướng đạt cấu hình bền vững 8 electron lớp ngoài cùng của khí hiếm.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b8",
            "number": 8,
            "title": "Bài 11: Liên kết ion",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Lực hút tĩnh điện giữa cation và anion; tinh thể ion.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b9",
            "number": 9,
            "title": "Bài 12: Liên kết cộng hóa trị",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Liên kết phân cực, không phân cực, liên kết cho - nhận; liên kết σ và π.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b10",
            "number": 10,
            "title": "Bài 13: Liên kết hydrogen và tương tác van der Waals",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Ảnh hưởng của liên kết hydrogen đến nhiệt độ sôi và độ tan của H₂O, NH₃, HF.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b11",
            "number": 11,
            "title": "Bài 15: Phản ứng oxi hóa - khử",
            "chapter": "Chương 4: Phản ứng oxi hóa - khử",
            "summary": "Số oxi hóa, chất khử (nhường e), chất oxi hóa (nhận e) và cân bằng theo thăng bằng electron.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b12",
            "number": 12,
            "title": "Bài 17: Biến thiên enthalpy trong các phản ứng hóa học",
            "chapter": "Chương 5: Năng lượng hóa học",
            "summary": "Phản ứng tỏa nhiệt (Δ_r H° < 0) và phản ứng thu nhiệt (Δ_r H° > 0).",
            "questions": []
          },
          {
            "id": "hoahoc-10-b13",
            "number": 13,
            "title": "Bài 19: Tốc độ phản ứng hóa học",
            "chapter": "Chương 6: Tốc độ phản ứng hóa học",
            "summary": "Tốc độ trung bình, định luật tác dụng khối lượng và các yếu tố ảnh hưởng.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b14",
            "number": 14,
            "title": "Bài 21: Nhóm Halogen",
            "chapter": "Chương 7: Nguyên tố nhóm VIIA - Halogen",
            "summary": "F₂, Cl₂, Br₂, I₂; tính oxi hóa mạnh giảm dần từ F₂ đến I₂.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b15",
            "number": 15,
            "title": "Bài 22: Hydrogen halide và một số phản ứng của ion halide",
            "chapter": "Chương 7: Nguyên tố nhóm VIIA - Halogen",
            "summary": "Tính acid tăng dần từ HF -> HCl -> HBr -> HI; nhận biết ion halide bằng AgNO₃.",
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
            "title": "Bài 4: Các nguyên tố hóa học và nước",
            "chapter": "Chương 1: Thành phần hóa học của tế bào",
            "summary": "Nguyên tố đa lượng, vi lượng; vai trò của nước trong tế bào.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b2",
            "number": 2,
            "title": "Bài 5: Các phân tử sinh học",
            "chapter": "Chương 1: Thành phần hóa học của tế bào",
            "summary": "Cấu trúc và chức năng của Carbohydrate, Lipid, Protein và Nucleic acid (DNA, RNA).",
            "questions": [
              {
                "content": "Đơn phân cấu tạo nên phân tử Protein là gì?",
                "option_a": "Nucleotide",
                "option_b": "Amino acid",
                "option_c": "Glucose",
                "option_d": "Acid béo",
                "correct": "B"
              }
            ]
          },
          {
            "id": "sinhhoc-10-b3",
            "number": 3,
            "title": "Bài 7: Tế bào nhân sơ",
            "chapter": "Chương 2: Cấu trúc tế bào",
            "summary": "Đặc điểm tế bào nhân sơ (chưa có nhân hoàn chỉnh, không có bào quan có màng).",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b4",
            "number": 4,
            "title": "Bài 8: Tế bào nhân thực",
            "chapter": "Chương 2: Cấu trúc tế bào",
            "summary": "Nhân, lưới nội chất, bộ máy Golgi, ti thể, lục lạp, ribosome, màng sinh chất.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b5",
            "number": 5,
            "title": "Bài 11: Vận chuyển các chất qua màng sinh chất",
            "chapter": "Chương 3: Trao đổi chất và chuyển hóa năng lượng ở tế bào",
            "summary": "Vận chuyển thụ động (khuếch tán, thẩm thấu), chủ động, xuất bào và nhập bào.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b6",
            "number": 6,
            "title": "Bài 13-14: Chuyển hóa vật chất, năng lượng và Enzyme",
            "chapter": "Chương 3: Trao đổi chất và chuyển hóa năng lượng ở tế bào",
            "summary": "Vai trò ATP và cơ chế xúc tác của enzyme.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b7",
            "number": 7,
            "title": "Bài 16: Chu kì tế bào và nguyên phân",
            "chapter": "Chương 4: Chu kì tế bào, phân bào và công nghệ tế bào",
            "summary": "Kì trung gian (G1, S, G2) và 4 kì nguyên phân (kì đầu, giữa, sau, cuối).",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b8",
            "number": 8,
            "title": "Bài 17: Giảm phân",
            "chapter": "Chương 4: Chu kì tế bào, phân bào và công nghệ tế bào",
            "summary": "Giảm phân I và II tạo 4 tế bào con đơn bội (n); trao đổi chéo tạo biến dị tổ hợp.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b9",
            "number": 9,
            "title": "Bài 20: Sự sinh trưởng và sinh sản ở vi sinh vật",
            "chapter": "Chương 5: Vi sinh vật và ứng dụng",
            "summary": "4 pha sinh trưởng quần thể vi khuẩn: tiềm phát, lũy thừa, cân bằng, suy vong.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b10",
            "number": 10,
            "title": "Bài 24: Khái quát về virus",
            "chapter": "Chương 6: Virus và ứng dụng",
            "summary": "Cấu tạo lõi nucleic acid và vỏ capsid; chu trình nhân lên của virus.",
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
            "title": "Thần trụ trời & Chuyện chức phán sự đền Tản Viên (Nguyễn Dữ)",
            "chapter": "Bài 1: Sức hấp dẫn của truyện kể",
            "summary": "Thần thoại suy nguyên và truyện truyền kì đề cao chính nghĩa.",
            "questions": []
          },
          {
            "id": "nguvan-10-b2",
            "number": 2,
            "title": "Chùm thơ hai-cư Nhật Bản & Thu hứng (Đỗ Phủ)",
            "chapter": "Bài 2: Vẻ đẹp của thơ ca",
            "summary": "Hình ảnh cô đọng, tứ thơ Đường luật hàm súc.",
            "questions": []
          },
          {
            "id": "nguvan-10-b3",
            "number": 3,
            "title": "Bình Ngô đại cáo (Nguyễn Trãi)",
            "chapter": "Bài 3: Nghệ thuật thuyết phục trong văn nghị luận",
            "summary": "Bản tuyên ngôn độc lập hào hùng thời Lê sơ với lập luận sắc bén.",
            "questions": []
          },
          {
            "id": "nguvan-10-b4",
            "number": 4,
            "title": "Héc-to từ biệt Ăng-đrô-mác & Đăm Săn đi bắt Nữ Thần Mặt Trời",
            "chapter": "Bài 4: Sức sống của sử thi",
            "summary": "Hình tượng người anh hùng sử thi mang vẻ đẹp cộng đồng.",
            "questions": []
          },
          {
            "id": "nguvan-10-b5",
            "number": 5,
            "title": "Xúy Vân giả dại (trích chèo Kim Nham)",
            "chapter": "Bài 5: Tích trò sân khấu dân gian",
            "summary": "Nghệ thuật sân khấu chèo truyền thống và bi kịch người phụ nữ.",
            "questions": []
          },
          {
            "id": "nguvan-10-b6",
            "number": 6,
            "title": "Dục Thúy sơn & Bảo kính cảnh giới (bài 43)",
            "chapter": "Bài 6: Nguyễn Trãi - 'Dành còn để trợ dân này'",
            "summary": "Tâm hồn yêu nước, thương dân và tình yêu thiên nhiên của Nguyễn Trãi.",
            "questions": []
          },
          {
            "id": "nguvan-10-b7",
            "number": 7,
            "title": "Người cầm quyền khôi phục uy quyền (V. Huy-gô) & Dưới bóng hoàng lan",
            "chapter": "Bài 7: Quyền năng của người kể chuyện",
            "summary": "Ngôi kể, điểm nhìn trần thuật và giá trị nhân văn.",
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
            "summary": "Khái niệm sử học, chức năng và nhiệm vụ của sử học.",
            "questions": []
          },
          {
            "id": "lichsu-10-b2",
            "number": 2,
            "title": "Bài 5-8: Văn minh Ai Cập, Trung Hoa, Ấn Độ, Hy Lạp - La Mã cổ đại",
            "chapter": "Chủ đề 3: Một số nền văn minh thế giới thời kì cổ - trung đại",
            "summary": "Thành tựu chữ viết, toán học, kiến trúc, tôn giáo của các nền văn minh lớn.",
            "questions": []
          },
          {
            "id": "lichsu-10-b3",
            "number": 3,
            "title": "Bài 9-10: Cách mạng công nghiệp lần thứ nhất, hai, ba và tư",
            "chapter": "Chủ đề 4: Các cuộc cách mạng công nghiệp trong lịch sử thế giới",
            "summary": "Từ cơ khí hóa (1.0), điện khí hóa (2.0), tự động hóa (3.0) đến trí tuệ nhân tạo IoT (4.0).",
            "questions": []
          },
          {
            "id": "lichsu-10-b4",
            "number": 4,
            "title": "Bài 11: Hành trình phát triển của văn minh Đông Nam Á",
            "chapter": "Chủ đề 5: Văn minh Đông Nam Á",
            "summary": "Cơ sở hình thành và thành tựu văn hóa ĐNA cổ - trung đại.",
            "questions": []
          },
          {
            "id": "lichsu-10-b5",
            "number": 5,
            "title": "Bài 13-15: Văn minh Văn Lang - Âu Lạc, Chăm-pa, Phù Nam và Đại Việt",
            "chapter": "Chủ đề 6: Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)",
            "summary": "Trống đồng Đông Sơn, tháp Chăm, văn hóa Óc Eo và nền văn minh Đại Việt rực rỡ.",
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
            "title": "Bài 4-5: Trái Đất, thuyết kiến tạo mảng và hệ quả các chuyển động",
            "chapter": "Chương 2: Trái Đất",
            "summary": "7 mảng kiến tạo lớn; chuyển động tự quay và quanh Mặt Trời.",
            "questions": []
          },
          {
            "id": "diali-10-b2",
            "number": 2,
            "title": "Bài 6-7: Thạch quyển, nội lực và ngoại lực",
            "chapter": "Chương 3: Thạch quyển",
            "summary": "Vận động kiến tạo (nâng lên, hạ xuống, uốn nếp, đứt gãy) và phong hóa, bóc mòn.",
            "questions": []
          },
          {
            "id": "diali-10-b3",
            "number": 3,
            "title": "Bài 8-10: Khí quyển, nhiệt độ, khí áp, gió và mưa",
            "chapter": "Chương 4: Khí quyển",
            "summary": "Phân bố nhiệt độ, gió Mậu dịch, gió Tây ôn đới, gió mùa.",
            "questions": []
          },
          {
            "id": "diali-10-b4",
            "number": 4,
            "title": "Bài 11-12: Thủy quyển, nước trên lục địa, biển và đại dương",
            "chapter": "Chương 5: Thủy quyển",
            "summary": "Thủy triều, sóng biển và các dòng biển nóng, lạnh.",
            "questions": []
          },
          {
            "id": "diali-10-b5",
            "number": 5,
            "title": "Bài 16-20: Dân số, đô thị hóa và cơ cấu nền kinh tế",
            "chapter": "Chương 7: Địa lí dân cư & Nguồn lực phát triển kinh tế",
            "summary": "Gia tăng dân số tự nhiên/cơ học, tháp dân số và chuyển dịch cơ cấu kinh tế.",
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
            "summary": "Phân biệt Present Simple và Present Continuous.",
            "questions": []
          },
          {
            "id": "tienganh-10-b2",
            "number": 2,
            "title": "Unit 2: Humans and the Environment",
            "chapter": "Unit 2: Humans and the Environment",
            "summary": "Will vs. be going to và câu bị động (Passive voice).",
            "questions": []
          },
          {
            "id": "tienganh-10-b3",
            "number": 3,
            "title": "Unit 3: Music",
            "chapter": "Unit 3: Music",
            "summary": "Câu ghép (Compound sentences) và to-infinitives / bare infinitives.",
            "questions": []
          },
          {
            "id": "tienganh-10-b4",
            "number": 4,
            "title": "Unit 4: For a Better Community",
            "chapter": "Unit 4: For a Better Community",
            "summary": "Thì Quá khứ đơn và Quá khứ tiếp diễn với when / while.",
            "questions": []
          },
          {
            "id": "tienganh-10-b5",
            "number": 5,
            "title": "Unit 5: Inventions",
            "chapter": "Unit 5: Inventions",
            "summary": "Thì Hiện tại hoàn thành (Present Perfect) và Gerunds / to-infinitives.",
            "questions": []
          },
          {
            "id": "tienganh-10-b6",
            "number": 6,
            "title": "Unit 6: Gender Equality",
            "chapter": "Unit 6: Gender Equality",
            "summary": "Câu bị động với động từ khuyết thiếu (Modal verbs passive).",
            "questions": []
          },
          {
            "id": "tienganh-10-b7",
            "number": 7,
            "title": "Unit 7: Viet Nam and International Organisations",
            "chapter": "Unit 7: Viet Nam and International Organisations",
            "summary": "So sánh hơn và so sánh nhất của tính từ.",
            "questions": []
          },
          {
            "id": "tienganh-10-b8",
            "number": 8,
            "title": "Unit 8: New Ways to Learn",
            "chapter": "Unit 8: New Ways to Learn",
            "summary": "Mệnh đề quan hệ xác định và không xác định.",
            "questions": []
          },
          {
            "id": "tienganh-10-b9",
            "number": 9,
            "title": "Unit 9: Protecting the Environment",
            "chapter": "Unit 9: Protecting the Environment",
            "summary": "Câu tường thuật (Reported speech).",
            "questions": []
          },
          {
            "id": "tienganh-10-b10",
            "number": 10,
            "title": "Unit 10: Ecotourism",
            "chapter": "Unit 10: Ecotourism",
            "summary": "Câu điều kiện loại 1 và loại 2 (Conditional sentences type 1 & 2).",
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
            "summary": "Đơn vị radian, đường tròn lượng giác và hệ thức cơ bản sin²α + cos²α = 1.",
            "questions": []
          },
          {
            "id": "toan-11-b2",
            "number": 2,
            "title": "Bài 2: Công thức lượng giác",
            "chapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
            "summary": "Công thức cộng, công thức nhân đôi và biến đổi tích thành tổng, tổng thành tích.",
            "questions": []
          },
          {
            "id": "toan-11-b3",
            "number": 3,
            "title": "Bài 3: Hàm số lượng giác",
            "chapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
            "summary": "Tính tuần hoàn, tính chẵn lẻ và đồ thị y = sinx, cosx, tanx, cotx.",
            "questions": []
          },
          {
            "id": "toan-11-b4",
            "number": 4,
            "title": "Bài 4: Phương trình lượng giác cơ bản",
            "chapter": "Chương I: Hàm số lượng giác và phương trình lượng giác",
            "summary": "Nghiệm của sinx = m, cosx = m, tanx = m, cotx = m.",
            "questions": []
          },
          {
            "id": "toan-11-b5",
            "number": 5,
            "title": "Bài 5: Dãy số",
            "chapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
            "summary": "Dãy số tăng, giảm, bị chặn và cách cho dãy số.",
            "questions": []
          },
          {
            "id": "toan-11-b6",
            "number": 6,
            "title": "Bài 6: Cấp số cộng",
            "chapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
            "summary": "u_n = u₁ + (n-1)d và S_n = n(u₁ + u_n)/2.",
            "questions": [
              {
                "content": "Cho cấp số cộng (u_n) có u₁ = 3 và công sai d = 4. Số hạng u₅ bằng bao nhiêu?",
                "option_a": "15",
                "option_b": "19",
                "option_c": "23",
                "option_d": "12",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-11-b7",
            "number": 7,
            "title": "Bài 7: Cấp số nhân",
            "chapter": "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
            "summary": "u_n = u₁·q^(n-1) và S_n = u₁(1 - q^n)/(1 - q) với q ≠ 1.",
            "questions": []
          },
          {
            "id": "toan-11-b8",
            "number": 8,
            "title": "Bài 8-9: Mẫu số liệu ghép nhóm và các số đặc trưng",
            "chapter": "Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
            "summary": "Tính số trung bình, trung vị, tứ phân vị và mốt của mẫu ghép nhóm.",
            "questions": []
          },
          {
            "id": "toan-11-b9",
            "number": 9,
            "title": "Bài 10-13: Đường thẳng và mặt phẳng song song trong không gian",
            "chapter": "Chương IV: Quan hệ song song trong không gian",
            "summary": "Giao tuyến ba mặt phẳng, đường thẳng song song mặt phẳng, hai mặt phẳng song song và định lí Thalès.",
            "questions": []
          },
          {
            "id": "toan-11-b10",
            "number": 10,
            "title": "Bài 15: Giới hạn của dãy số",
            "chapter": "Chương V: Giới hạn. Hàm số liên tục",
            "summary": "Giới hạn hữu hạn, vô cực và tổng cấp số nhân lùi vô hạn S = u₁/(1-q).",
            "questions": []
          },
          {
            "id": "toan-11-b11",
            "number": 11,
            "title": "Bài 16: Giới hạn của hàm số",
            "chapter": "Chương V: Giới hạn. Hàm số liên tục",
            "summary": "Giới hạn hữu hạn, giới hạn một bên và giới hạn vô cực.",
            "questions": []
          },
          {
            "id": "toan-11-b12",
            "number": 12,
            "title": "Bài 17: Hàm số liên tục",
            "chapter": "Chương V: Giới hạn. Hàm số liên tục",
            "summary": "Điều kiện lim(x→x₀) f(x) = f(x₀) và định lí giá trị trung gian.",
            "questions": []
          },
          {
            "id": "toan-11-b13",
            "number": 13,
            "title": "Bài 18: Lũy thừa với số mũ thực",
            "chapter": "Chương VI: Hàm số mũ và hàm số lôgarit",
            "summary": "Tính chất lũy thừa số mũ hữu tỉ và số mũ thực.",
            "questions": []
          },
          {
            "id": "toan-11-b14",
            "number": 14,
            "title": "Bài 19: Lôgarit",
            "chapter": "Chương VI: Hàm số mũ và hàm số lôgarit",
            "summary": "Định nghĩa log_a(b), các quy tắc tính lôgarit và đổi cơ số.",
            "questions": []
          },
          {
            "id": "toan-11-b15",
            "number": 15,
            "title": "Bài 20-21: Hàm số mũ, hàm số lôgarit, phương trình và bất phương trình",
            "chapter": "Chương VI: Hàm số mũ và hàm số lôgarit",
            "summary": "Tính đơn điệu theo cơ số a > 1 và 0 < a < 1; giải phương trình mũ, lôgarit.",
            "questions": []
          },
          {
            "id": "toan-11-b16",
            "number": 16,
            "title": "Bài 22-27: Hai đường thẳng vuông góc, đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc",
            "chapter": "Chương VII: Quan hệ vuông góc trong không gian",
            "summary": "Định lí ba đường vuông góc, góc giữa đường thẳng và mặt phẳng, góc nhị diện, khoảng cách và thể tích khối chóp/lăng trụ.",
            "questions": []
          },
          {
            "id": "toan-11-b17",
            "number": 17,
            "title": "Bài 28-30: Biến cố hợp, biến cố giao, biến cố độc lập",
            "chapter": "Chương VIII: Các quy tắc tính xác suất",
            "summary": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) và quy tắc nhân P(A ∩ B) = P(A)·P(B).",
            "questions": []
          },
          {
            "id": "toan-11-b18",
            "number": 18,
            "title": "Bài 31-33: Định nghĩa, quy tắc tính đạo hàm và đạo hàm cấp hai",
            "chapter": "Chương IX: Đạo hàm",
            "summary": "(x^n)' = n·x^(n-1), (sinx)' = cosx, (cosx)' = -sinx, (e^x)' = e^x, (lnx)' = 1/x và phương trình tiếp tuyến.",
            "questions": [
              {
                "content": "Đạo hàm của hàm số y = x³ - 2x² + 5 tại điểm x₀ = 1 là:",
                "option_a": "-1",
                "option_b": "1",
                "option_c": "3",
                "option_d": "-2",
                "correct": "A"
              }
            ]
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
            "title": "Bài 1-2: Dao động điều hòa và mô tả dao động điều hòa",
            "chapter": "Chương I: Dao động",
            "summary": "Phương trình x = A·cos(ωt + φ); chu kì T = 2π/ω, tần số f = 1/T.",
            "questions": []
          },
          {
            "id": "vatli-11-b2",
            "number": 2,
            "title": "Bài 3: Vận tốc, gia tốc trong dao động điều hòa",
            "chapter": "Chương I: Dao động",
            "summary": "v = -ωA·sin(ωt+φ) và a = -ω²x.",
            "questions": []
          },
          {
            "id": "vatli-11-b3",
            "number": 3,
            "title": "Bài 5: Động năng. Thế năng. Sự chuyển hóa năng lượng trong dao động điều hòa",
            "chapter": "Chương I: Dao động",
            "summary": "Cơ năng W = ½mω²A² = hằng số.",
            "questions": []
          },
          {
            "id": "vatli-11-b4",
            "number": 4,
            "title": "Bài 6: Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
            "chapter": "Chương I: Dao động",
            "summary": "Điều kiện cộng hưởng: tần số ngoại lực bằng tần số riêng f = f₀.",
            "questions": []
          },
          {
            "id": "vatli-11-b5",
            "number": 5,
            "title": "Bài 8-9: Mô tả sóng và sóng ngang, sóng dọc",
            "chapter": "Chương II: Sóng",
            "summary": "Bước sóng λ = v·T = v/f.",
            "questions": []
          },
          {
            "id": "vatli-11-b6",
            "number": 6,
            "title": "Bài 11: Sóng điện từ",
            "chapter": "Chương II: Sóng",
            "summary": "Sóng điện từ là sóng ngang, truyền được trong chân không với tốc độ c = 3·10⁸ m/s.",
            "questions": []
          },
          {
            "id": "vatli-11-b7",
            "number": 7,
            "title": "Bài 12: Giao thoa sóng",
            "chapter": "Chương II: Sóng",
            "summary": "Điều kiện cực đại d₂ - d₁ = kλ và cực tiểu d₂ - d₁ = (k + ½)λ; giao thoa ánh sáng Y-âng i = λD/a.",
            "questions": []
          },
          {
            "id": "vatli-11-b8",
            "number": 8,
            "title": "Bài 13: Sóng dừng",
            "chapter": "Chương II: Sóng",
            "summary": "Nút sóng, bụng sóng; khoảng cách hai nút liên tiếp là λ/2.",
            "questions": []
          },
          {
            "id": "vatli-11-b9",
            "number": 9,
            "title": "Bài 16: Lực tương tác giữa hai điện tích (Định luật Coulomb)",
            "chapter": "Chương III: Điện trường",
            "summary": "F = k·|q₁q₂|/(εr²) với k = 9·10⁹ N·m²/C².",
            "questions": [
              {
                "content": "Theo định luật Coulomb, nếu khoảng cách giữa hai điện tích điểm tăng gấp 2 lần (giữ nguyên độ lớn điện tích) thì lực tương tác tĩnh điện sẽ:",
                "option_a": "Tăng 2 lần",
                "option_b": "Giảm 2 lần",
                "option_c": "Giảm 4 lần",
                "option_d": "Tăng 4 lần",
                "correct": "C"
              }
            ]
          },
          {
            "id": "vatli-11-b10",
            "number": 10,
            "title": "Bài 17-18: Khái niệm điện trường và điện trường đều",
            "chapter": "Chương III: Điện trường",
            "summary": "Cường độ điện trường E = F/q = k|Q|/r² (V/m).",
            "questions": []
          },
          {
            "id": "vatli-11-b11",
            "number": 11,
            "title": "Bài 19-20: Thế năng điện, điện thế và tụ điện",
            "chapter": "Chương III: Điện trường",
            "summary": "Công A_MN = q(V_M - V_N) = qEd; điện dung tụ điện C = Q/U và năng lượng tụ W = ½CU².",
            "questions": []
          },
          {
            "id": "vatli-11-b12",
            "number": 12,
            "title": "Bài 22-25: Cường độ dòng điện, điện trở, nguồn điện và năng lượng điện",
            "chapter": "Chương IV: Dòng điện. Mạch điện",
            "summary": "Định luật Ohm cho toàn mạch I = E/(R + r), công suất P = U·I.",
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
            "summary": "Phản ứng thuận nghịch, hằng số cân bằng K_C và nguyên lí chuyển dịch cân bằng Le Chatelier.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b2",
            "number": 2,
            "title": "Bài 2: Cân bằng trong dung dịch nước",
            "chapter": "Chương 1: Cân bằng hóa học",
            "summary": "Thuyết acid - base Brønsted - Lowry, thang pH = -lg[H⁺] và chuẩn độ acid - base.",
            "questions": [
              {
                "content": "Dung dịch HCl có nồng độ 0,01 M (coi điện li hoàn toàn) có giá trị pH bằng bao nhiêu?",
                "option_a": "1",
                "option_b": "2",
                "option_c": "12",
                "option_d": "0,01",
                "correct": "B"
              }
            ]
          },
          {
            "id": "hoahoc-11-b3",
            "number": 3,
            "title": "Bài 4-6: Nitrogen, Ammonia và một số hợp chất của nitrogen với oxygen",
            "chapter": "Chương 2: Nitrogen - Sulfur",
            "summary": "Tính trơ N₂ ở nhiệt độ thường, NH₃ có tính base yếu và tính khử; HNO₃ tính oxi hóa mạnh và hiện tượng mưa acid.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b4",
            "number": 4,
            "title": "Bài 7-8: Sulfur, sulfur dioxide và sulfuric acid",
            "chapter": "Chương 2: Nitrogen - Sulfur",
            "summary": "H₂SO₄ loãng có tính acid mạnh; H₂SO₄ đặc có tính oxi hóa mạnh và tính háo nước.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b5",
            "number": 5,
            "title": "Bài 10-12: Hợp chất hữu cơ, phương pháp tách biệt, công thức phân tử và cấu tạo",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Phổ hồng ngoại (IR), phổ khối lượng (MS) xác định M và đồng phân cấu tạo.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b6",
            "number": 6,
            "title": "Bài 15: Alkane",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Công thức chung C_nH_{2n+2}, phản ứng thế halogen, cracking, reforming và phản ứng cháy.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b7",
            "number": 7,
            "title": "Bài 16: Hydrocarbon không no",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Alkene (C_nH_{2n}), alkyne (C_nH_{2n-2}), quy tắc Markovnikov và phản ứng trùng hợp.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b8",
            "number": 8,
            "title": "Bài 17: Arene (Hydrocarbon thơm)",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Benzene (C₆H₆), toluene; phản ứng thế vào vòng thơm và phản ứng cộng.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b9",
            "number": 9,
            "title": "Bài 19-21: Dẫn xuất halogen, Alcohol và Phenol",
            "chapter": "Chương 5: Dẫn xuất halogen - Alcohol - Phenol",
            "summary": "Bậc alcohol, phản ứng tách nước tạo alkene, oxi hóa và tính acid yếu của phenol.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b10",
            "number": 10,
            "title": "Bài 23-24: Hợp chất carbonyl (Aldehyde - Ketone) và Carboxylic acid",
            "chapter": "Chương 6: Hợp chất carbonyl - Carboxylic acid",
            "summary": "Phản ứng tráng bạc (thuốc thử Tollens), Cu(OH)₂/OH⁻ và phản ứng ester hóa.",
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
            "title": "Bài 2-4: Trao đổi nước, khoáng và quang hợp ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Cơ chế hấp thụ nước và ion khoáng ở rễ; pha sáng và pha tối (chu trình Calvin) ở thực vật C₃, C₄, CAM.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b2",
            "number": 2,
            "title": "Bài 6-10: Hô hấp ở thực vật, tiêu hóa, hô hấp và tuần hoàn ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "summary": "Tim và hệ mạch, huyết áp, miễn dịch đặc hiệu và không đặc hiệu.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b3",
            "number": 3,
            "title": "Bài 15-17: Cảm ứng ở thực vật và động vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Điện thế nghỉ, điện thế hoạt động, truyền tin qua synapse và cung phản xạ.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b4",
            "number": 4,
            "title": "Bài 19-21: Hormone thực vật và sinh trưởng phát triển ở động vật",
            "chapter": "Chương 3: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Auxin, gibberellin, cytokinin, ethylene, abscisic acid; biến thái hoàn toàn và không hoàn toàn.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b5",
            "number": 5,
            "title": "Bài 24-26: Sinh sản ở thực vật và động vật",
            "chapter": "Chương 4: Sinh sản ở sinh vật",
            "summary": "Thụ tinh kép ở thực vật có hoa và điều hòa sinh sản ở động vật.",
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
            "title": "Vợ nhặt (Kim Lân) & Chí Phèo (Nam Cao)",
            "chapter": "Bài 1: Câu chuyện và điểm nhìn trong truyện kể",
            "summary": "Giá trị hiện thực và nhân đạo sâu sắc trong truyện ngắn Việt Nam trước 1945.",
            "questions": []
          },
          {
            "id": "nguvan-11-b2",
            "number": 2,
            "title": "Tràng giang (Huy Cận) & Đây thôn Vĩ Dạ (Hàn Mặc Tử)",
            "chapter": "Bài 2: Cấu tứ và hình ảnh trong thơ trữ tình",
            "summary": "Bức tranh thiên nhiên và nỗi sầu nhân thế trong phong trào Thơ mới.",
            "questions": []
          },
          {
            "id": "nguvan-11-b3",
            "number": 3,
            "title": "Cầu hiền chiếu (Ngô Thì Nhậm)",
            "chapter": "Bài 3: Cấu trúc của văn bản nghị luận",
            "summary": "Nghệ thuật lập luận thấu tình đạt lí của văn nghị luận trung đại.",
            "questions": []
          },
          {
            "id": "nguvan-11-b4",
            "number": 4,
            "title": "Lời tiễn dặn & Trao duyên (Nguyễn Du)",
            "chapter": "Bài 4: Tự sự trong truyện thơ dân gian và truyện thơ Nôm",
            "summary": "Bi kịch tình yêu và thân phận con người trong truyện thơ.",
            "questions": []
          },
          {
            "id": "nguvan-11-b5",
            "number": 5,
            "title": "Sống, hay không sống - đó là vấn đề (Sếch-xpia) & Vĩnh biệt Cửu Trùng Đài",
            "chapter": "Bài 5: Nhân vật và xung đột trong bi kịch",
            "summary": "Xung đột bi kịch và khát vọng cao đẹp.",
            "questions": []
          },
          {
            "id": "nguvan-11-b6",
            "number": 6,
            "title": "Tác gia Nguyễn Du & Độc Tiểu Thanh kí",
            "chapter": "Bài 6: Nguyễn Du - 'Những điều trông thấy mà đau đớn lòng'",
            "summary": "Chủ nghĩa nhân đạo vượt thời đại của đại thi hào Nguyễn Du.",
            "questions": []
          },
          {
            "id": "nguvan-11-b7",
            "number": 7,
            "title": "Ai đã đặt tên cho dòng sông? (Hoàng Phủ Ngọc Tường)",
            "chapter": "Bài 7: Ghi chép và tưởng tượng trong kí",
            "summary": "Vẻ đẹp sông Hương qua góc nhìn địa lí, lịch sử, văn hóa và thi ca.",
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
            "summary": "Động từ khuyết thiếu chỉ sự bắt buộc/khuyên bảo: must, have to, should.",
            "questions": []
          },
          {
            "id": "tienganh-11-b3",
            "number": 3,
            "title": "Unit 3: Cities of the Future",
            "chapter": "Unit 3: Cities of the Future",
            "summary": "Stative verbs ở dạng tiếp diễn và Linking verbs.",
            "questions": []
          },
          {
            "id": "tienganh-11-b4",
            "number": 4,
            "title": "Unit 4: ASEAN and Viet Nam",
            "chapter": "Unit 4: ASEAN and Viet Nam",
            "summary": "Gerunds (V-ing) làm chủ ngữ và tân ngữ.",
            "questions": []
          },
          {
            "id": "tienganh-11-b5",
            "number": 5,
            "title": "Unit 5: Global Warming",
            "chapter": "Unit 5: Global Warming",
            "summary": "Mệnh đề phân từ hiện tại và quá khứ (Present & Past participle clauses).",
            "questions": []
          },
          {
            "id": "tienganh-11-b6",
            "number": 6,
            "title": "Unit 6: Preserving Our Heritage",
            "chapter": "Unit 6: Preserving Our Heritage",
            "summary": "To-infinitive clauses chỉ mục đích và sau số thứ tự.",
            "questions": []
          },
          {
            "id": "tienganh-11-b7",
            "number": 7,
            "title": "Unit 7: Education Options for School-leavers",
            "chapter": "Unit 7: Education Options for School-leavers",
            "summary": "Perfect gerunds and perfect participle clauses (having + V-ed/V3).",
            "questions": []
          },
          {
            "id": "tienganh-11-b8",
            "number": 8,
            "title": "Unit 8: Becoming Independent",
            "chapter": "Unit 8: Becoming Independent",
            "summary": "Câu chẻ (Cleft sentences: It is/was ... that/who ...).",
            "questions": []
          },
          {
            "id": "tienganh-11-b9",
            "number": 9,
            "title": "Unit 9: Social Issues",
            "chapter": "Unit 9: Social Issues",
            "summary": "Linking words and phrases (because/because of, although/despite).",
            "questions": []
          },
          {
            "id": "tienganh-11-b10",
            "number": 10,
            "title": "Unit 10: The Ecosystem",
            "chapter": "Unit 10: The Ecosystem",
            "summary": "Danh từ ghép (Compound nouns).",
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
            "summary": "Dấu của f'(x) quyết định đồng biến/nghịch biến; điểm cực đại, cực tiểu của hàm số.",
            "questions": [
              {
                "content": "Cho hàm số y = x³ - 3x + 2. Hàm số nghịch biến trên khoảng nào sau đây?",
                "option_a": "(-∞; -1)",
                "option_b": "(-1; 1)",
                "option_c": "(1; +∞)",
                "option_d": "(0; +∞)",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-12-b2",
            "number": 2,
            "title": "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Tìm GTLN, GTNN trên đoạn [a; b] bằng cách xét điểm tới hạn và hai đầu mút.",
            "questions": []
          },
          {
            "id": "toan-12-b3",
            "number": 3,
            "title": "Bài 3: Đường tiệm cận của đồ thị hàm số",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị hàm số.",
            "questions": []
          },
          {
            "id": "toan-12-b4",
            "number": 4,
            "title": "Bài 4-5: Khảo sát sự biến thiên, vẽ đồ thị và ứng dụng đạo hàm giải quyết vấn đề thực tiễn",
            "chapter": "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
            "summary": "Khảo sát hàm bậc ba, phân thức bậc nhất/bậc nhất, bậc hai/bậc nhất và bài toán tối ưu.",
            "questions": []
          },
          {
            "id": "toan-12-b5",
            "number": 5,
            "title": "Bài 6-8: Vectơ trong không gian, hệ trục tọa độ Oxyz và biểu thức tọa độ",
            "chapter": "Chương II: Vectơ và hệ trục tọa độ trong không gian",
            "summary": "Tọa độ điểm, vectơ trong Oxyz; tích vô hướng, góc và độ dài đoạn thẳng.",
            "questions": []
          },
          {
            "id": "toan-12-b6",
            "number": 6,
            "title": "Bài 9-10: Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn",
            "chapter": "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
            "summary": "Đo mức độ phân tán của mẫu số liệu ghép nhóm.",
            "questions": []
          },
          {
            "id": "toan-12-b7",
            "number": 7,
            "title": "Bài 11: Nguyên hàm",
            "chapter": "Chương IV: Nguyên hàm và tích phân",
            "summary": "Bảng nguyên hàm cơ bản và tính chất tuyến tính của nguyên hàm.",
            "questions": []
          },
          {
            "id": "toan-12-b8",
            "number": 8,
            "title": "Bài 12: Tích phân",
            "chapter": "Chương IV: Nguyên hàm và tích phân",
            "summary": "Định nghĩa ∫[a->b] f(x)dx = F(b) - F(a) và tính chất.",
            "questions": [
              {
                "content": "Giá trị của tích phân ∫₀² (3x² + 1) dx bằng:",
                "option_a": "8",
                "option_b": "10",
                "option_c": "12",
                "option_d": "6",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-12-b9",
            "number": 9,
            "title": "Bài 13: Ứng dụng hình học của tích phân",
            "chapter": "Chương IV: Nguyên hàm và tích phân",
            "summary": "Diện tích hình phẳng S = ∫|f(x)-g(x)|dx và thể tích khối tròn xoay V = π∫f²(x)dx.",
            "questions": []
          },
          {
            "id": "toan-12-b10",
            "number": 10,
            "title": "Bài 14: Phương trình mặt phẳng",
            "chapter": "Chương V: Phương pháp tọa độ trong không gian",
            "summary": "Vectơ pháp tuyến, phương trình Ax + By + Cz + D = 0 và khoảng cách từ điểm đến mặt phẳng.",
            "questions": []
          },
          {
            "id": "toan-12-b11",
            "number": 11,
            "title": "Bài 15: Phương trình đường thẳng trong không gian",
            "chapter": "Chương V: Phương pháp tọa độ trong không gian",
            "summary": "Phương trình tham số, chính tắc và góc giữa hai đường thẳng, đường thẳng và mặt phẳng.",
            "questions": []
          },
          {
            "id": "toan-12-b12",
            "number": 12,
            "title": "Bài 17: Phương trình mặt cầu",
            "chapter": "Chương V: Phương pháp tọa độ trong không gian",
            "summary": "(x - a)² + (y - b)² + (z - c)² = R².",
            "questions": []
          },
          {
            "id": "toan-12-b13",
            "number": 13,
            "title": "Bài 18-19: Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes",
            "chapter": "Chương VI: Xác suất có điều kiện",
            "summary": "P(A|B) = P(A ∩ B)/P(B) và ứng dụng công thức Bayes.",
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
            "title": "Bài 1-2: Cấu trúc của chất, sự chuyển thể và nội năng, định luật 1 nhiệt động lực học",
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "Mô hình động học phân tử; ΔU = A + Q (quy ước dấu nhiệt lượng và công).",
            "questions": [
              {
                "content": "Trong định luật 1 của nhiệt động lực học ΔU = A + Q, khi hệ nhận công và nhận nhiệt lượng thì dấu của A và Q là:",
                "option_a": "A > 0, Q < 0",
                "option_b": "A > 0, Q > 0",
                "option_c": "A < 0, Q > 0",
                "option_d": "A < 0, Q < 0",
                "correct": "B"
              }
            ]
          },
          {
            "id": "vatli-12-b2",
            "number": 2,
            "title": "Bài 4-6: Nhiệt dung riêng, nhiệt nóng chảy riêng và nhiệt hóa hơi riêng",
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "Q = m·c·ΔT, Q = λ·m và Q = L·m.",
            "questions": []
          },
          {
            "id": "vatli-12-b3",
            "number": 3,
            "title": "Bài 8-11: Mô hình động học phân tử chất khí, định luật Boyle, Charles và phương trình trạng thái",
            "chapter": "Chương II: Khí lí tưởng",
            "summary": "p₁V₁/T₁ = p₂V₂/T₂; phương trình Clapeyron pV = nRT và áp suất chất khí p = (1/3)μmv².",
            "questions": []
          },
          {
            "id": "vatli-12-b4",
            "number": 4,
            "title": "Bài 14-16: Từ trường, lực từ tác dụng lên dây dẫn mang dòng điện và từ thông",
            "chapter": "Chương III: Từ trường",
            "summary": "F = B·I·L·sinα (quy tắc bàn tay trái); từ thông Φ = B·S·cosα (Wb).",
            "questions": []
          },
          {
            "id": "vatli-12-b5",
            "number": 5,
            "title": "Bài 17-18: Máy phát điện xoay chiều và ứng dụng hiện tượng cảm ứng điện từ",
            "chapter": "Chương III: Từ trường",
            "summary": "Suất điện động cảm ứng Faraday e = -ΔΦ/Δt; máy biến áp U₁/U₂ = N₁/N₂.",
            "questions": []
          },
          {
            "id": "vatli-12-b6",
            "number": 6,
            "title": "Bài 21-22: Cấu trúc hạt nhân, phản ứng hạt nhân và năng lượng liên kết",
            "chapter": "Chương IV: Vật lí hạt nhân",
            "summary": "Độ hụt khối Δm, năng lượng liên kết W_lk = Δm·c²; phản ứng phân hạch và nhiệt hạch.",
            "questions": []
          },
          {
            "id": "vatli-12-b7",
            "number": 7,
            "title": "Bài 23: Hiện tượng phóng xạ",
            "chapter": "Chương IV: Vật lí hạt nhân",
            "summary": "Tia α, β⁻, β⁺, γ; định luật phóng xạ N = N₀·2^(-t/T) = N₀·e^(-λt).",
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
            "title": "Bài 1: Ester - Lipid",
            "chapter": "Chương 1: Ester - Lipid",
            "summary": "Danh pháp, tính chất vật lí, phản ứng thủy phân ester trong môi trường acid/kiềm (xà phòng hóa) và chất béo.",
            "questions": [
              {
                "content": "Thủy phân hoàn toàn ethyl acetate (CH₃COOC₂H₅) trong dung dịch NaOH đun nóng thu được muối nào?",
                "option_a": "HCOONa",
                "option_b": "CH₃COONa",
                "option_c": "C₂H₅COONa",
                "option_d": "C₂H₅ONa",
                "correct": "B"
              }
            ]
          },
          {
            "id": "hoahoc-12-b2",
            "number": 2,
            "title": "Bài 2: Xà phòng và chất giặt rửa",
            "chapter": "Chương 1: Ester - Lipid",
            "summary": "Cấu tạo chất hoạt động bề mặt (đầu ưa nước, đuôi kị nước) và cơ chế giặt rửa.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b3",
            "number": 3,
            "title": "Bài 4-6: Glucose, Fructose, Saccharose, Maltose, Tinh bột và Cellulose",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Cấu trúc mạch hở/vòng, phản ứng với Cu(OH)₂, thuốc thử Tollens, nước Br₂ và thủy phân.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b4",
            "number": 4,
            "title": "Bài 8-10: Amine, Amino acid, Peptide, Protein và Enzyme",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Tính base của amine, tính lưỡng tính và điểm đẳng điện của amino acid, phản ứng màu biuret của peptide/protein.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b5",
            "number": 5,
            "title": "Bài 12-13: Đại cương về polymer và vật liệu polymer",
            "chapter": "Chương 4: Polymer",
            "summary": "Phản ứng trùng hợp, trùng ngưng; chất dẻo, tơ, cao su và keo dán.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b6",
            "number": 6,
            "title": "Bài 15-16: Thế điện cực, nguồn điện hóa học và điện phân",
            "chapter": "Chương 5: Pin điện và điện phân",
            "summary": "Suất điện động chuẩn E°_pin = E°_cathode - E°_anode; quy tắc điện phân dung dịch và nóng chảy.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b7",
            "number": 7,
            "title": "Bài 18-22: Cấu tạo, tính chất kim loại, tách kim loại, hợp kim và ăn mòn kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Ăn mòn hóa học, ăn mòn điện hóa và phương pháp bảo vệ kim loại.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b8",
            "number": 8,
            "title": "Bài 24-25: Nguyên tố nhóm IA (kim loại kiềm) và nhóm IIA (kim loại kiềm thổ)",
            "chapter": "Chương 7: Nguyên tố nhóm IA và nhóm IIA",
            "summary": "Tính khử mạnh, nước cứng (tạm thời, vĩnh cửu, toàn phần) và cách làm mềm nước cứng.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b9",
            "number": 9,
            "title": "Bài 27-29: Kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "chapter": "Chương 8: Sơ lược về dãy kim loại chuyển tiếp thứ nhất và phức chất",
            "summary": "Nhiều số oxi hóa, màu sắc ion, cấu tạo nguyên tử trung tâm và phối tử trong phức chất.",
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
            "title": "Bài 1-3: DNA, tái bản DNA, biểu hiện gene và điều hòa biểu hiện gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Cơ chế nhân đôi DNA, phiên mã, dịch mã và mô hình Operon lac ở E. coli.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b2",
            "number": 2,
            "title": "Bài 4-6: Đột biến gene và Công nghệ gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Đột biến điểm (thay thế, thêm, mất cặp nucleotide); DNA tái tổ hợp.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b3",
            "number": 3,
            "title": "Bài 7-11: NST, quy luật di truyền Mendel, tương tác gene, liên kết gene, hoán vị gene và di truyền liên kết giới tính",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Tần số hoán vị gene f ≤ 50%, di truyền chéo (NST X), di truyền ngoài nhân (ti thể, lục lạp).",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b4",
            "number": 4,
            "title": "Bài 16-18: Cấu trúc di truyền quần thể và định luật Hardy - Weinberg",
            "chapter": "Chương 3: Di truyền quần thể và Di truyền học người",
            "summary": "p²AA + 2pqAa + q²aa = 1 và y học tư vấn di truyền.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b5",
            "number": 5,
            "title": "Bài 19-23: Bằng chứng tiến hóa, học thuyết Darwin, thuyết tiến hóa tổng hợp hiện đại",
            "chapter": "Chương 4: Tiến hóa",
            "summary": "5 nhân tố tiến hóa: đột biến, dòng gene, chọn lọc tự nhiên, phiêu bạt di truyền, giao phối không ngẫu nhiên.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b6",
            "number": 6,
            "title": "Bài 25-31: Môi trường, quần thể, quần xã và hệ sinh thái",
            "chapter": "Chương 5-7: Sinh thái học",
            "summary": "Ổ sinh thái, chuỗi/lưới thức ăn, diễn thế sinh thái và bảo vệ đa dạng sinh học.",
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
            "title": "Xuân Tóc Đỏ cứu quốc (Vũ Trọng Phụng) & Nỗi buồn chiến tranh",
            "chapter": "Bài 1: Khả năng lớn lao của tiểu thuyết",
            "summary": "Nghệ thuật trào phúng sắc sảo của tiểu thuyết Số đỏ và góc nhìn hiện đại về chiến tranh.",
            "questions": []
          },
          {
            "id": "nguvan-12-b2",
            "number": 2,
            "title": "Cảm hoài (Đặng Dung) & Tây Tiến (Quang Dũng)",
            "chapter": "Bài 2: Những thế giới thơ",
            "summary": "Hào khí anh hùng ca và chất lãng mạn bi tráng trong thơ.",
            "questions": []
          },
          {
            "id": "nguvan-12-b3",
            "number": 3,
            "title": "Nhìn về vốn văn hóa dân tộc (Trần Đình Hượu)",
            "chapter": "Bài 3: Lập luận trong văn bản nghị luận",
            "summary": "Nghệ thuật lập luận chặt chẽ, dẫn chứng thuyết phục.",
            "questions": []
          },
          {
            "id": "nguvan-12-b4",
            "number": 4,
            "title": "Hải khẩu linh từ (Đoàn Thị Điểm) & Muối của rừng (Nguyễn Huy Thiệp)",
            "chapter": "Bài 4: Yếu tố kì ảo trong truyện kể",
            "summary": "Vai trò yếu tố kì ảo phản ánh hiện thực và đạo lí.",
            "questions": []
          },
          {
            "id": "nguvan-12-b5",
            "number": 5,
            "title": "Nhân vật quan trọng (Gô-gôn) & Giấu của",
            "chapter": "Bài 5: Tiếng cười của hài kịch",
            "summary": "Ngôn ngữ, hành động và tình huống gây cười phê phán thói hư tật xấu.",
            "questions": []
          },
          {
            "id": "nguvan-12-b6",
            "number": 6,
            "title": "Tuyên ngôn Độc lập & Nhật kí trong tù",
            "chapter": "Bài 6: Hồ Chí Minh - 'Văn hóa phải soi đường cho quốc dân đi'",
            "summary": "Phong cách văn chính luận mẫu mực và tâm hồn thi sĩ chiến sĩ Hồ Chí Minh.",
            "questions": []
          },
          {
            "id": "nguvan-12-b7",
            "number": 7,
            "title": "Nghệ thuật băm thịt gà (Ngô Tất Tố) & Bước vào đời",
            "chapter": "Bài 7: Sự thật trong tác phẩm kí",
            "summary": "Tính xác thực và nghệ thuật quan sát tinh tế trong phóng sự, hồi kí.",
            "questions": []
          }
        ]
      },
      {
        "id": "lichsu-12",
        "name": "Lịch sử",
        "icon": "📜",
        "lessons": [
          {
            "id": "lichsu-12-b1",
            "number": 1,
            "title": "Bài 1-3: Liên hợp quốc, Trật tự thế giới hai cực I-an-ta và xu thế đa cực",
            "chapter": "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
            "summary": "Sự hình thành trật tự hai cực, sụp đổ năm 1991 và xu thế đa cực hiện nay.",
            "questions": []
          },
          {
            "id": "lichsu-12-b2",
            "number": 2,
            "title": "Bài 4-5: Sự ra đời, phát triển của ASEAN và Cộng đồng ASEAN",
            "chapter": "Chủ đề 2: ASEAN: Những chặng đường lịch sử",
            "summary": "Thành lập 1967, Việt Nam gia nhập 1995, Cộng đồng ASEAN 2015.",
            "questions": []
          },
          {
            "id": "lichsu-12-b3",
            "number": 3,
            "title": "Bài 6-9: Cách mạng tháng Tám 1945, kháng chiến chống Pháp (1945-1954), kháng chiến chống Mỹ (1954-1975)",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám 1945, chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc (1945 - nay)",
            "summary": "Nguyên nhân thắng lợi, ý nghĩa lịch sử và bài học kinh nghiệm.",
            "questions": []
          },
          {
            "id": "lichsu-12-b4",
            "number": 4,
            "title": "Bài 10-11: Khái quát công cuộc Đổi mới và thành tựu cơ bản",
            "chapter": "Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
            "summary": "Chuyển sang kinh tế thị trường định hướng XHCN, hội nhập quốc tế sâu rộng.",
            "questions": []
          },
          {
            "id": "lichsu-12-b5",
            "number": 5,
            "title": "Bài 12-14: Hoạt động đối ngoại của Việt Nam từ đầu thế kỉ XX đến nay",
            "chapter": "Chủ đề 5: Lịch sử đối ngoại của Việt Nam thời cận - hiện đại",
            "summary": "Ngoại giao Hồ Chí Minh, Hiệp định Sơ bộ 1946, Giơ-ne-vơ 1954, Pa-ri 1973.",
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
            "title": "Bài 1-5: Vị trí địa lí, thiên nhiên nhiệt đới ẩm gió mùa và sự phân hóa đa dạng của thiên nhiên",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Phân hóa Bắc - Nam, Đông - Tây, theo độ cao và vấn đề bảo vệ tài nguyên, môi trường.",
            "questions": []
          },
          {
            "id": "diali-12-b2",
            "number": 2,
            "title": "Bài 6-8: Dân số, lao động và việc làm, đô thị hóa",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Cơ cấu dân số vàng, phân bố dân cư chưa đều và quá trình đô thị hóa.",
            "questions": []
          },
          {
            "id": "diali-12-b3",
            "number": 3,
            "title": "Bài 9-19: Chuyển dịch cơ cấu kinh tế, Nông - Lâm - Thủy sản, Công nghiệp và Dịch vụ",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Các ngành công nghiệp trọng điểm, giao thông vận tải, thương mại và du lịch.",
            "questions": []
          },
          {
            "id": "diali-12-b4",
            "number": 4,
            "title": "Bài 21-29: Khai thác thế mạnh phát triển kinh tế 6 vùng và phát triển kinh tế biển đảo",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Vùng kinh tế trọng điểm và chiến lược phát triển bền vững kinh tế biển đảo.",
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
            "summary": "Mạo từ (Articles: a, an, the, zero article).",
            "questions": []
          },
          {
            "id": "tienganh-12-b3",
            "number": 3,
            "title": "Unit 3: Green Living",
            "chapter": "Unit 3: Green Living",
            "summary": "Verbs with prepositions và mệnh đề quan hệ thay thế cả mệnh đề trước đó (which).",
            "questions": []
          },
          {
            "id": "tienganh-12-b4",
            "number": 4,
            "title": "Unit 4: Urbanisation",
            "chapter": "Unit 4: Urbanisation",
            "summary": "Present Perfect và so sánh kép (Double comparatives).",
            "questions": []
          },
          {
            "id": "tienganh-12-b5",
            "number": 5,
            "title": "Unit 5: The World of Work",
            "chapter": "Unit 5: The World of Work",
            "summary": "Câu đơn, câu ghép và câu phức.",
            "questions": []
          },
          {
            "id": "tienganh-12-b6",
            "number": 6,
            "title": "Unit 6: Artificial Intelligence",
            "chapter": "Unit 6: Artificial Intelligence",
            "summary": "Thể sai khiến (Active and passive causatives: have/get something done).",
            "questions": []
          },
          {
            "id": "tienganh-12-b7",
            "number": 7,
            "title": "Unit 7: The World of Mass Media",
            "chapter": "Unit 7: The World of Mass Media",
            "summary": "Mệnh đề trạng ngữ chỉ cách thức (as if, like) và kết quả (so...that, such...that).",
            "questions": []
          },
          {
            "id": "tienganh-12-b8",
            "number": 8,
            "title": "Unit 8: Wildlife Conservation",
            "chapter": "Unit 8: Wildlife Conservation",
            "summary": "Mệnh đề trạng ngữ chỉ điều kiện và so sánh.",
            "questions": []
          },
          {
            "id": "tienganh-12-b9",
            "number": 9,
            "title": "Unit 9: Career Paths",
            "chapter": "Unit 9: Career Paths",
            "summary": "Cụm động từ 3 thành phần (Three-word phrasal verbs).",
            "questions": []
          },
          {
            "id": "tienganh-12-b10",
            "number": 10,
            "title": "Unit 10: Lifelong Learning",
            "chapter": "Unit 10: Lifelong Learning",
            "summary": "Câu tường thuật dạng lời khuyên, đề nghị, yêu cầu (Reporting orders, requests, offers, advice).",
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
    const distractors = [...otherLessons, ...lessonsToUse.filter((l) => l.id !== target.id)]
      .filter((l) => l.summary && l.summary.trim().length > 0)
      .slice(0, 3);

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

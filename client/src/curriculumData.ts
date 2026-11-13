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
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-1-b1",
            "number": 1,
            "title": "Chủ đề: Làm quen với âm, chữ và dấu thanh (a, b, c, e, ê, o, ô, ơ, i, u, ư...)",
            "chapter": "Tập 1: Làm quen với chữ cái và thanh điệu",
            "summary": "Nhận biết, đọc, viết các âm chữ cái đầu tiên và 6 thanh điệu tiếng Việt.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b2",
            "number": 2,
            "title": "Chủ đề: Các phụ âm đầu và âm ghép (ch, gh, kh, ng, ngh, nh, ph, qu, th, tr)",
            "chapter": "Tập 1: Học vần cơ bản",
            "summary": "Đọc, viết, ghép tiếng với phụ âm đơn và phụ âm ghép.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b3",
            "number": 3,
            "title": "Chủ đề: Các vần có âm cuối là n, m, ng, nh, t, c, p, ch",
            "chapter": "Tập 1: Học vần cơ bản",
            "summary": "Đánh vần, đọc trơn từ ngữ và câu ứng dụng chứa vần thông dụng.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b4",
            "number": 4,
            "title": "Chủ đề: Các vần có âm đệm (oa, oe, uê, uy, oai, uya...)",
            "chapter": "Tập 1: Học vần mở rộng",
            "summary": "Đọc đúng các tiếng có âm đệm và luyện viết chính tả.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b5",
            "number": 5,
            "title": "Bài 1: Tôi là học sinh lớp 1 & Những người bạn",
            "chapter": "Tập 2 - Chủ đề 1: Tôi và các bạn",
            "summary": "Đọc hiểu đoạn văn ngắn về ngày đầu đi học và tình bạn.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b6",
            "number": 6,
            "title": "Bài 2: Quà của bố & Khi mẹ vắng nhà",
            "chapter": "Tập 2 - Chủ đề 2: Mái ấm gia đình",
            "summary": "Tình cảm gia đình, lòng biết ơn cha mẹ.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b7",
            "number": 7,
            "title": "Bài 3: Đi học & Ngôi trường mới",
            "chapter": "Tập 2 - Chủ đề 3: Mái trường mến yêu",
            "summary": "Tình yêu thầy cô, bạn bè và mái trường.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b8",
            "number": 8,
            "title": "Bài 4: Rửa tay trước khi ăn & Đèn giao thông",
            "chapter": "Tập 2 - Chủ đề 4: Điều em cần biết",
            "summary": "Kĩ năng giữ vệ sinh cá nhân và an toàn giao thông.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b9",
            "number": 9,
            "title": "Bài 5: Chia quà & Câu chuyện của thước kẻ",
            "chapter": "Tập 2 - Chủ đề 5: Yêu thương và chia sẻ",
            "summary": "Lòng nhân ái, biết sẻ chia và đoàn kết.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b10",
            "number": 10,
            "title": "Bài 6: Hoa sen & Mùa xuân đến",
            "chapter": "Tập 2 - Chủ đề 6: Thiên nhiên tươi đẹp",
            "summary": "Miêu tả vẻ đẹp cây cỏ, hoa lá và các mùa.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b11",
            "number": 11,
            "title": "Bài 7: Chú gà trống & Chim sơn ca",
            "chapter": "Tập 2 - Chủ đề 7: Thế giới loài vật",
            "summary": "Nhận biết đặc điểm các loài vật quen thuộc.",
            "questions": []
          },
          {
            "id": "tiengviet-1-b12",
            "number": 12,
            "title": "Bài 8: Quê hương & Bác Hồ của em",
            "chapter": "Tập 2 - Chủ đề 8: Đất nước và con người",
            "summary": "Tình yêu quê hương đất nước Việt Nam và kính yêu Bác Hồ.",
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
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-2-b1",
            "number": 1,
            "title": "Bài 1: Tôi là học sinh lớp 2",
            "chapter": "Chủ điểm 1: Em lớn lên từng ngày",
            "summary": "Niềm vui ngày tựu trường lên lớp 2.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b2",
            "number": 2,
            "title": "Bài 2: Ngày hôm qua đâu rồi?",
            "chapter": "Chủ điểm 1: Em lớn lên từng ngày",
            "summary": "Quý trọng thời gian, chăm chỉ học tập.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b3",
            "number": 3,
            "title": "Bài 3: Niềm vui của Bi và Bống",
            "chapter": "Chủ điểm 1: Em lớn lên từng ngày",
            "summary": "Tình anh em yêu thương, nhường nhịn.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b4",
            "number": 4,
            "title": "Bài 4: Làm việc thật là vui",
            "chapter": "Chủ điểm 1: Em lớn lên từng ngày",
            "summary": "Ý nghĩa của lao động mang lại niềm vui.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b5",
            "number": 5,
            "title": "Bài 5: Em có xinh không?",
            "chapter": "Chủ điểm 2: Đi học vui sao",
            "summary": "Vẻ đẹp tâm hồn và sự tự tin.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b6",
            "number": 6,
            "title": "Bài 6: Một giờ học",
            "chapter": "Chủ điểm 2: Đi học vui sao",
            "summary": "Tự tin phát biểu và giúp đỡ bạn trong lớp.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b7",
            "number": 7,
            "title": "Bài 7: Cây xấu hổ & Cầu thủ dự bị",
            "chapter": "Chủ điểm 2: Đi học vui sao",
            "summary": "Luyện đọc hiểu và mở rộng vốn từ trường học.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b8",
            "number": 8,
            "title": "Bài 8: Rồng rắn lên mây & Nhím nâu kết bạn",
            "chapter": "Chủ điểm 3: Niềm vui tuổi thơ",
            "summary": "Trò chơi dân gian và tình bạn chân thành.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b9",
            "number": 9,
            "title": "Bài 9: Cô chủ nhà tí hon & Bàn tay dịu dàng",
            "chapter": "Chủ điểm 4: Mái ấm gia đình",
            "summary": "Tình cảm ấm áp với ông bà, thầy cô.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b10",
            "number": 10,
            "title": "Bài 10: Chuyện bốn mùa & Mùa lúa chín",
            "chapter": "Chủ điểm 5: Vẻ đẹp quanh em",
            "summary": "Vẻ đẹp thiên nhiên bốn mùa.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b11",
            "number": 11,
            "title": "Bài 11: Giọt nước và biển lớn & Rừng ngập mặn",
            "chapter": "Chủ điểm 6: Hành tinh xanh của em",
            "summary": "Bảo vệ tài nguyên nước và môi trường.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b12",
            "number": 12,
            "title": "Bài 12: Thư trung thu & Bưu điện",
            "chapter": "Chủ điểm 7: Giao tiếp và kết nối",
            "summary": "Các phương tiện liên lạc, viết bưu thiếp.",
            "questions": []
          },
          {
            "id": "tiengviet-2-b13",
            "number": 13,
            "title": "Bài 13: Quê hương & Đất nước",
            "chapter": "Chủ điểm 8: Con người Việt Nam",
            "summary": "Tự hào quê hương, đất nước và con người Việt Nam.",
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
            "title": "Bài 1: Ôn tập các số đến 1 000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Đọc, viết, so sánh số có 3 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b2",
            "number": 2,
            "title": "Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1 000",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Cộng trừ có nhớ trong phạm vi 1000.",
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
            "title": "Bài 4: Ôn tập bảng nhân 2; 5, bảng chia 2; 5",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Tính nhẩm bảng nhân chia 2 và 5.",
            "questions": []
          },
          {
            "id": "toan-3-b5",
            "number": 5,
            "title": "Bài 5: Bảng nhân 3, bảng chia 3",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Thuộc và vận dụng bảng nhân, chia 3.",
            "questions": []
          },
          {
            "id": "toan-3-b6",
            "number": 6,
            "title": "Bài 6: Bảng nhân 4, bảng chia 4",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Thuộc và vận dụng bảng nhân, chia 4.",
            "questions": []
          },
          {
            "id": "toan-3-b7",
            "number": 7,
            "title": "Bài 7: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Ôn tập độ dài, khối lượng, dung tích, hình phẳng.",
            "questions": []
          },
          {
            "id": "toan-3-b8",
            "number": 8,
            "title": "Bài 8: Luyện tập chung",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Củng cố Chủ đề 1.",
            "questions": []
          },
          {
            "id": "toan-3-b9",
            "number": 9,
            "title": "Bài 9: Bảng nhân 6, bảng chia 6",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Thuộc và vận dụng bảng nhân, chia 6.",
            "questions": []
          },
          {
            "id": "toan-3-b10",
            "number": 10,
            "title": "Bài 10: Bảng nhân 7, bảng chia 7",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Thuộc và vận dụng bảng nhân, chia 7.",
            "questions": []
          },
          {
            "id": "toan-3-b11",
            "number": 11,
            "title": "Bài 11: Bảng nhân 8, bảng chia 8",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Thuộc và vận dụng bảng nhân, chia 8.",
            "questions": []
          },
          {
            "id": "toan-3-b12",
            "number": 12,
            "title": "Bài 12: Bảng nhân 9, bảng chia 9",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Thuộc và vận dụng bảng nhân, chia 9.",
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
            "summary": "Nhận biết 1/2, 1/3, ..., 1/9.",
            "questions": []
          },
          {
            "id": "toan-3-b15",
            "number": 15,
            "title": "Bài 15: Luyện tập chung",
            "chapter": "Chủ đề 2: Bảng nhân, bảng chia",
            "summary": "Củng cố bảng nhân, chia đến 9.",
            "questions": []
          },
          {
            "id": "toan-3-b16",
            "number": 16,
            "title": "Bài 16: Điểm ở giữa, trung điểm của đoạn thẳng",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Xác định điểm ở giữa và trung điểm.",
            "questions": []
          },
          {
            "id": "toan-3-b17",
            "number": 17,
            "title": "Bài 17: Hình tròn. Tâm, bán kính, đường kính của hình tròn",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Đường kính gấp 2 lần bán kính.",
            "questions": []
          },
          {
            "id": "toan-3-b18",
            "number": 18,
            "title": "Bài 18: Góc vuông, góc không vuông",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Dùng ê ke kiểm tra góc vuông.",
            "questions": []
          },
          {
            "id": "toan-3-b19",
            "number": 19,
            "title": "Bài 19: Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Đặc điểm góc và cạnh của hình chữ nhật, hình vuông.",
            "questions": []
          },
          {
            "id": "toan-3-b20",
            "number": 20,
            "title": "Bài 20: Khối lập phương, khối hộp chữ nhật",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Số đỉnh (8), số cạnh (12), số mặt (6).",
            "questions": []
          },
          {
            "id": "toan-3-b21",
            "number": 21,
            "title": "Bài 21: Luyện tập chung",
            "chapter": "Chủ đề 3: Làm quen với hình phẳng, hình khối",
            "summary": "Củng cố hình phẳng, hình khối.",
            "questions": []
          },
          {
            "id": "toan-3-b22",
            "number": 22,
            "title": "Bài 22: Phép nhân số có hai chữ số với số có một chữ số",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Đặt tính nhân trong phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-3-b23",
            "number": 23,
            "title": "Bài 23: Phép chia số có hai chữ số cho số có một chữ số",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Chia hết và chia có dư.",
            "questions": []
          },
          {
            "id": "toan-3-b24",
            "number": 24,
            "title": "Bài 24: Luyện tập chung",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Củng cố nhân chia phạm vi 100.",
            "questions": []
          },
          {
            "id": "toan-3-b25",
            "number": 25,
            "title": "Bài 25: Giải bài toán bằng hai bước tính",
            "chapter": "Chủ đề 4: Phép nhân, phép chia trong phạm vi 100",
            "summary": "Phân tích và giải bài toán có hai phép tính.",
            "questions": []
          },
          {
            "id": "toan-3-b26",
            "number": 26,
            "title": "Bài 27: Mi-li-mét",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "1 cm = 10 mm.",
            "questions": []
          },
          {
            "id": "toan-3-b27",
            "number": 27,
            "title": "Bài 28: Gam",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "1 kg = 1 000 g.",
            "questions": []
          },
          {
            "id": "toan-3-b28",
            "number": 28,
            "title": "Bài 29: Mi-li-lít",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "1 lít = 1 000 ml.",
            "questions": []
          },
          {
            "id": "toan-3-b29",
            "number": 29,
            "title": "Bài 30: Nhiệt độ. Đơn vị đo nhiệt độ",
            "chapter": "Chủ đề 5: Một số đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ",
            "summary": "Đơn vị độ C (°C) và đọc nhiệt kế.",
            "questions": []
          },
          {
            "id": "toan-3-b30",
            "number": 30,
            "title": "Bài 32: Nhân số có ba chữ số với số có một chữ số",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Đặt tính nhân trong phạm vi 1000.",
            "questions": []
          },
          {
            "id": "toan-3-b31",
            "number": 31,
            "title": "Bài 33: Chia số có ba chữ số cho số có một chữ số",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Chia hết và chia có dư trong phạm vi 1000.",
            "questions": []
          },
          {
            "id": "toan-3-b32",
            "number": 32,
            "title": "Bài 35: Biểu thức số. Tính giá trị của biểu thức số",
            "chapter": "Chủ đề 6: Phép nhân, phép chia trong phạm vi 1 000",
            "summary": "Thứ tự thực hiện nhân/chia trước, cộng/trừ sau; trong ngoặc trước.",
            "questions": []
          },
          {
            "id": "toan-3-b33",
            "number": 33,
            "title": "Bài 45: Các số có bốn chữ số. Số 10 000",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "Đọc, viết số đến 10 000.",
            "questions": []
          },
          {
            "id": "toan-3-b34",
            "number": 34,
            "title": "Bài 46: So sánh các số trong phạm vi 10 000",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "So sánh từ hàng nghìn đến đơn vị.",
            "questions": []
          },
          {
            "id": "toan-3-b35",
            "number": 35,
            "title": "Bài 47: Làm quen với chữ số La Mã",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "Các chữ số I, V, X (từ 1 đến 20).",
            "questions": []
          },
          {
            "id": "toan-3-b36",
            "number": 36,
            "title": "Bài 48: Làm tròn số đến hàng chục, hàng trăm",
            "chapter": "Chủ đề 8: Các số đến 10 000",
            "summary": "Quy tắc làm tròn số tự nhiên.",
            "questions": []
          },
          {
            "id": "toan-3-b37",
            "number": 37,
            "title": "Bài 50: Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông",
            "chapter": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
            "summary": "Chu vi HCN = (a+b)x2; Chu vi HV = a x 4.",
            "questions": []
          },
          {
            "id": "toan-3-b38",
            "number": 38,
            "title": "Bài 51: Diện tích của một hình. Xăng-ti-mét vuông",
            "chapter": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
            "summary": "Đơn vị cm².",
            "questions": []
          },
          {
            "id": "toan-3-b39",
            "number": 39,
            "title": "Bài 52: Diện tích hình chữ nhật, diện tích hình vuông",
            "chapter": "Chủ đề 9: Chu vi, diện tích một số hình phẳng",
            "summary": "S_HCN = a x b; S_HV = a x a.",
            "questions": [
              {
                "content": "Một hình chữ nhật có chiều dài 9 cm, chiều rộng 5 cm. Diện tích hình chữ nhật đó là:",
                "option_a": "14 cm²",
                "option_b": "28 cm²",
                "option_c": "45 cm²",
                "option_d": "40 cm²",
                "correct": "C"
              }
            ]
          },
          {
            "id": "toan-3-b40",
            "number": 40,
            "title": "Bài 54: Phép cộng trong phạm vi 10 000",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Đặt tính cộng số có 4 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b41",
            "number": 41,
            "title": "Bài 55: Phép trừ trong phạm vi 10 000",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Đặt tính trừ số có 4 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b42",
            "number": 42,
            "title": "Bài 56: Nhân số có bốn chữ số với số có một chữ số",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Nhân số có 4 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b43",
            "number": 43,
            "title": "Bài 57: Chia số có bốn chữ số cho số có một chữ số",
            "chapter": "Chủ đề 10: Cộng, trừ, nhân, chia trong phạm vi 10 000",
            "summary": "Chia số có 4 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b44",
            "number": 44,
            "title": "Bài 59: Các số có năm chữ số. Số 100 000",
            "chapter": "Chủ đề 11: Các số đến 100 000",
            "summary": "Đọc, viết, so sánh và làm tròn số đến 100 000.",
            "questions": []
          },
          {
            "id": "toan-3-b45",
            "number": 45,
            "title": "Bài 63: Phép cộng trong phạm vi 100 000",
            "chapter": "Chủ đề 12: Cộng, trừ trong phạm vi 100 000",
            "summary": "Cộng số có 5 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b46",
            "number": 46,
            "title": "Bài 64: Phép trừ trong phạm vi 100 000",
            "chapter": "Chủ đề 12: Cộng, trừ trong phạm vi 100 000",
            "summary": "Trừ số có 5 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b47",
            "number": 47,
            "title": "Bài 66: Xem đồng hồ. Tháng – năm",
            "chapter": "Chủ đề 13: Xem đồng hồ. Tháng – Năm. Tiền Việt Nam",
            "summary": "Xem giờ chính xác đến phút; 1 năm = 12 tháng.",
            "questions": []
          },
          {
            "id": "toan-3-b48",
            "number": 48,
            "title": "Bài 68: Tiền Việt Nam",
            "chapter": "Chủ đề 13: Xem đồng hồ. Tháng – Năm. Tiền Việt Nam",
            "summary": "Tính toán mua bán với tiền Việt Nam.",
            "questions": []
          },
          {
            "id": "toan-3-b49",
            "number": 49,
            "title": "Bài 70: Nhân số có năm chữ số với số có một chữ số",
            "chapter": "Chủ đề 14: Nhân, chia trong phạm vi 100 000",
            "summary": "Nhân số có 5 chữ số.",
            "questions": []
          },
          {
            "id": "toan-3-b50",
            "number": 50,
            "title": "Bài 71: Chia số có năm chữ số cho số có một chữ số",
            "chapter": "Chủ đề 14: Nhân, chia trong phạm vi 100 000",
            "summary": "Chia số có 5 chữ số.",
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
            "title": "Bài 1: Ngày gặp lại & Về quê",
            "chapter": "Chủ điểm 1: Những trải nghiệm thú vị",
            "summary": "Kể lại trải nghiệm đáng nhớ sau kì nghỉ hè.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b2",
            "number": 2,
            "title": "Bài 2: Cánh đồng hoa & Nhật kí tập bơi",
            "chapter": "Chủ điểm 1: Những trải nghiệm thú vị",
            "summary": "Câu kể và sử dụng dấu chấm, dấu phẩy.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b3",
            "number": 3,
            "title": "Bài 3: Mùa thu của em & Lời giải toán đặc biệt",
            "chapter": "Chủ điểm 2: Cổng trường rộng mở",
            "summary": "Kỉ niệm ngày khai trường và thầy cô.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b4",
            "number": 4,
            "title": "Bài 4: Chiếc nhãn vở đặc biệt & Người làm đồ chơi",
            "chapter": "Chủ điểm 3: Mái nhà yêu thương",
            "summary": "Tình cảm gia đình và nghề thủ công truyền thống.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b5",
            "number": 5,
            "title": "Bài 5: Đôi bàn tay & Thư viện biết đi",
            "chapter": "Chủ điểm 4: Cộng đồng gắn bó",
            "summary": "Tinh thần cộng đồng, sẻ chia tri thức.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b6",
            "number": 6,
            "title": "Bài 6: Bầu trời trong quả trứng & Tiếng nước chảy",
            "chapter": "Chủ điểm 5: Những sắc màu thiên nhiên",
            "summary": "Khám phá thiên nhiên kì thú qua thơ và văn xuôi.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b7",
            "number": 7,
            "title": "Bài 7: Chú sẻ và bông hoa bằng lăng & Cuộc chạy đua trong rừng",
            "chapter": "Chủ điểm 6: Bài học từ cuộc sống",
            "summary": "Đức tính khiêm tốn, kiên trì và lòng nhân hậu.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b8",
            "number": 8,
            "title": "Bài 8: Hai Bà Trưng & Sự tích Hồ Gươm",
            "chapter": "Chủ điểm 7: Đất nước ngàn năm",
            "summary": "Truyền thống lịch sử dựng nước và giữ nước.",
            "questions": []
          },
          {
            "id": "tiengviet-3-b9",
            "number": 9,
            "title": "Bài 9: Trái Đất này là của chúng mình & Cây gạo",
            "chapter": "Chủ điểm 8: Trái Đất của chúng mình",
            "summary": "Tình hữu nghị quốc tế và bảo vệ hành tinh.",
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
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-4-b1",
            "number": 1,
            "title": "Bài 1-4: Điều kì diệu, Thi nhạc, Bầu trời trong quả trứng, Tập làm văn",
            "chapter": "Chủ điểm 1: Mỗi người một vẻ",
            "summary": "Danh từ, động từ; viết đoạn văn nêu ý kiến.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b2",
            "number": 2,
            "title": "Bài 5-8: Về thăm bà, Tiếng nói của cỏ cây, Những bậc đá chạm mây",
            "chapter": "Chủ điểm 2: Trải nghiệm và khám phá",
            "summary": "Tính từ; viết bài văn thuật lại sự việc.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b3",
            "number": 3,
            "title": "Bài 9-12: Vẽ màu, Nhà phát minh 6 tuổi, Con đường của bé",
            "chapter": "Chủ điểm 3: Niềm vui sáng tạo",
            "summary": "Biện pháp nhân hóa; viết bài văn miêu tả con vật.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b4",
            "number": 4,
            "title": "Bài 13-16: Ở vương quốc tương lai, Đôi cánh của ngựa trắng, Ước mơ của An",
            "chapter": "Chủ điểm 4: Chắp cánh ước mơ",
            "summary": "Chủ ngữ, vị ngữ trong câu kể; viết thư.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b5",
            "number": 5,
            "title": "Bài 17-20: Hải thượng Lãn Ông, Tờ báo tường của tôi, Sự tích hoa cúc trắng",
            "chapter": "Chủ điểm 5: Sống để yêu thương",
            "summary": "Trạng ngữ chỉ thời gian, nơi chốn; viết bài văn miêu tả cây cối.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b6",
            "number": 6,
            "title": "Bài 21-24: Đền Hùng, Bốn anh tài, Khuất phục tên cướp biển",
            "chapter": "Chủ điểm 6: Uống nước nhớ nguồn",
            "summary": "Dấu gạch ngang, dấu ngoặc kép; kể lại câu chuyện.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b7",
            "number": 7,
            "title": "Bài 25-28: Đường đi Sa Pa, Chợ Tết, Về ngôi nhà đang xây",
            "chapter": "Chủ điểm 7: Quê hương trong tôi",
            "summary": "Mở rộng vốn từ quê hương, đất nước.",
            "questions": []
          },
          {
            "id": "tiengviet-4-b8",
            "number": 8,
            "title": "Bài 29-32: Đoàn thuyền đánh cá, Ngọn lửa Ô-lim-pích, Trái Đất",
            "chapter": "Chủ điểm 8: Vì một thế giới bình yên",
            "summary": "Tổng ôn đọc hiểu và viết văn lớp 4.",
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
            "summary": "Cộng, trừ, nhân, chia số tự nhiên.",
            "questions": []
          },
          {
            "id": "toan-5-b3",
            "number": 3,
            "title": "Bài 3: Ôn tập phân số",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Rút gọn, quy đồng và so sánh phân số.",
            "questions": []
          },
          {
            "id": "toan-5-b4",
            "number": 4,
            "title": "Bài 4: Phân số thập phân",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Phân số có mẫu số là 10, 100, 1000...",
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
            "summary": "Quy đồng và cộng trừ phân số.",
            "questions": []
          },
          {
            "id": "toan-5-b7",
            "number": 7,
            "title": "Bài 7: Hỗn số",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Cấu tạo phần nguyên và phần phân số của hỗn số.",
            "questions": []
          },
          {
            "id": "toan-5-b8",
            "number": 8,
            "title": "Bài 8: Ôn tập hình học và đo lường",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Ôn tập các hình phẳng và đơn vị đo.",
            "questions": []
          },
          {
            "id": "toan-5-b9",
            "number": 9,
            "title": "Bài 9: Luyện tập chung",
            "chapter": "Chủ đề 1: Ôn tập và bổ sung",
            "summary": "Củng cố Chủ đề 1.",
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
            "summary": "So sánh phần nguyên rồi từng hàng phần thập phân.",
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
            "summary": "Làm tròn đến số tự nhiên gần nhất, hàng phần mười, hàng phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b14",
            "number": 14,
            "title": "Bài 14: Luyện tập chung",
            "chapter": "Chủ đề 2: Số thập phân",
            "summary": "Củng cố khái niệm số thập phân.",
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
            "summary": "Bảng đơn vị đo diện tích từ mm² đến km².",
            "questions": []
          },
          {
            "id": "toan-5-b17",
            "number": 17,
            "title": "Bài 17: Thực hành và trải nghiệm với một số đơn vị đo đại lượng",
            "chapter": "Chủ đề 3: Một số đơn vị đo diện tích",
            "summary": "Ước lượng và tính diện tích thực tế.",
            "questions": []
          },
          {
            "id": "toan-5-b18",
            "number": 18,
            "title": "Bài 18: Luyện tập chung",
            "chapter": "Chủ đề 3: Một số đơn vị đo diện tích",
            "summary": "Củng cố đơn vị đo diện tích.",
            "questions": []
          },
          {
            "id": "toan-5-b19",
            "number": 19,
            "title": "Bài 19: Phép cộng số thập phân",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Đặt tính thẳng dấu phẩy và cộng.",
            "questions": []
          },
          {
            "id": "toan-5-b20",
            "number": 20,
            "title": "Bài 20: Phép trừ số thập phân",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Đặt tính thẳng dấu phẩy và trừ.",
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
            "title": "Bài 23: Nhân, chia số thập phân với 10; 100; 1000; ... hoặc với 0,1; 0,01; 0,001; ...",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Dịch chuyển dấu phẩy sang phải/trái.",
            "questions": []
          },
          {
            "id": "toan-5-b24",
            "number": 24,
            "title": "Bài 24: Luyện tập chung",
            "chapter": "Chủ đề 4: Các phép tính với số thập phân",
            "summary": "Củng cố 4 phép tính số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b25",
            "number": 25,
            "title": "Bài 25: Hình tam giác. Diện tích hình tam giác",
            "chapter": "Chủ đề 5: Một số hình phẳng. Chu vi và diện tích",
            "summary": "S = (a x h) / 2.",
            "questions": []
          },
          {
            "id": "toan-5-b26",
            "number": 26,
            "title": "Bài 26: Hình thang. Diện tích hình thang",
            "chapter": "Chủ đề 5: Một số hình phẳng. Chu vi và diện tích",
            "summary": "S = ((a + b) x h) / 2.",
            "questions": []
          },
          {
            "id": "toan-5-b27",
            "number": 27,
            "title": "Bài 27: Đường tròn. Chu vi và diện tích hình tròn",
            "chapter": "Chủ đề 5: Một số hình phẳng. Chu vi và diện tích",
            "summary": "C = d x 3,14 = r x 2 x 3,14; S = r x r x 3,14.",
            "questions": [
              {
                "content": "Một hình tròn có bán kính r = 3 cm. Diện tích của hình tròn đó là:",
                "option_a": "18,84 cm²",
                "option_b": "28,26 cm²",
                "option_c": "9,42 cm²",
                "option_d": "12,56 cm²",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-5-b28",
            "number": 28,
            "title": "Bài 28: Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình",
            "chapter": "Chủ đề 5: Một số hình phẳng. Chu vi và diện tích",
            "summary": "Thực hành đo và tính diện tích.",
            "questions": []
          },
          {
            "id": "toan-5-b29",
            "number": 29,
            "title": "Bài 29: Luyện tập chung",
            "chapter": "Chủ đề 5: Một số hình phẳng. Chu vi và diện tích",
            "summary": "Củng cố chu vi, diện tích hình phẳng.",
            "questions": []
          },
          {
            "id": "toan-5-b30",
            "number": 30,
            "title": "Bài 30: Ôn tập số thập phân",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập số thập phân HK1.",
            "questions": []
          },
          {
            "id": "toan-5-b31",
            "number": 31,
            "title": "Bài 31: Ôn tập các phép tính với số thập phân",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập phép tính số thập phân.",
            "questions": []
          },
          {
            "id": "toan-5-b32",
            "number": 32,
            "title": "Bài 32: Ôn tập một số hình phẳng",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập tam giác, hình thang, hình tròn.",
            "questions": []
          },
          {
            "id": "toan-5-b33",
            "number": 33,
            "title": "Bài 33: Ôn tập diện tích và thể tích một số hình",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập hình học HK1.",
            "questions": []
          },
          {
            "id": "toan-5-b34",
            "number": 34,
            "title": "Bài 34: Ôn tập đo lường",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Ôn tập đơn vị đo.",
            "questions": []
          },
          {
            "id": "toan-5-b35",
            "number": 35,
            "title": "Bài 35: Ôn tập chung",
            "chapter": "Chủ đề 6: Ôn tập học kì 1",
            "summary": "Tổng ôn HK1.",
            "questions": []
          },
          {
            "id": "toan-5-b36",
            "number": 36,
            "title": "Bài 36: Tỉ số. Tỉ số phần trăm",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Tính tỉ số phần trăm của hai số.",
            "questions": []
          },
          {
            "id": "toan-5-b37",
            "number": 37,
            "title": "Bài 37: Tỉ lệ bản đồ và ứng dụng",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Tính độ dài thật và độ dài thu nhỏ trên bản đồ.",
            "questions": []
          },
          {
            "id": "toan-5-b38",
            "number": 38,
            "title": "Bài 38: Tìm hai số khi biết tổng và tỉ số của hai số đó",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Vẽ sơ đồ tổng số phần bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-5-b39",
            "number": 39,
            "title": "Bài 39: Tìm hai số khi biết hiệu và tỉ số của hai số đó",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Tìm hiệu số phần bằng nhau.",
            "questions": []
          },
          {
            "id": "toan-5-b40",
            "number": 40,
            "title": "Bài 40: Tìm tỉ số phần trăm của hai số",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Chia hai số rồi nhân 100 và viết kí hiệu %.",
            "questions": []
          },
          {
            "id": "toan-5-b41",
            "number": 41,
            "title": "Bài 41: Tìm giá trị phần trăm của một số",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Giải toán lãi suất, giảm giá.",
            "questions": []
          },
          {
            "id": "toan-5-b42",
            "number": 42,
            "title": "Bài 42: Máy tính cầm tay",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Sử dụng máy tính cầm tay tính tỉ số phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b43",
            "number": 43,
            "title": "Bài 43: Luyện tập chung",
            "chapter": "Chủ đề 7: Tỉ số và các bài toán liên quan",
            "summary": "Củng cố tỉ số và phần trăm.",
            "questions": []
          },
          {
            "id": "toan-5-b44",
            "number": 44,
            "title": "Bài 44: Sử dụng bảng đơn vị đo thể tích: cm³, dm³, m³",
            "chapter": "Chủ đề 8: Thể tích. Đơn vị đo thể tích",
            "summary": "1 m³ = 1 000 dm³; 1 dm³ = 1 000 cm³; 1 dm³ = 1 lít.",
            "questions": []
          },
          {
            "id": "toan-5-b45",
            "number": 45,
            "title": "Bài 45: Thể tích của một hình",
            "chapter": "Chủ đề 8: Thể tích. Đơn vị đo thể tích",
            "summary": "So sánh thể tích hai hình.",
            "questions": []
          },
          {
            "id": "toan-5-b46",
            "number": 46,
            "title": "Bài 46: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật",
            "chapter": "Chủ đề 8: Thể tích. Đơn vị đo thể tích",
            "summary": "S_xq = (a + b) x 2 x c; S_tp = S_xq + 2 x a x b.",
            "questions": []
          },
          {
            "id": "toan-5-b47",
            "number": 47,
            "title": "Bài 47: Diện tích xung quanh và diện tích toàn phần của hình lập phương",
            "chapter": "Chủ đề 8: Thể tích. Đơn vị đo thể tích",
            "summary": "S_xq = a x a x 4; S_tp = a x a x 6.",
            "questions": []
          },
          {
            "id": "toan-5-b48",
            "number": 48,
            "title": "Bài 48: Thể tích của hình hộp chữ nhật",
            "chapter": "Chủ đề 8: Thể tích. Đơn vị đo thể tích",
            "summary": "V = a x b x c.",
            "questions": []
          },
          {
            "id": "toan-5-b49",
            "number": 49,
            "title": "Bài 49: Thể tích của hình lập phương",
            "chapter": "Chủ đề 8: Thể tích. Đơn vị đo thể tích",
            "summary": "V = a x a x a.",
            "questions": []
          },
          {
            "id": "toan-5-b50",
            "number": 50,
            "title": "Bài 50: Luyện tập chung",
            "chapter": "Chủ đề 8: Thể tích. Đơn vị đo thể tích",
            "summary": "Củng cố diện tích và thể tích hình khối.",
            "questions": []
          },
          {
            "id": "toan-5-b51",
            "number": 51,
            "title": "Bài 51: Thực hành và trải nghiệm tạo hình khối",
            "chapter": "Chủ đề 9: Diện tích và thể tích của một số hình khối",
            "summary": "Gấp, ghép hình hộp chữ nhật, hình lập phương.",
            "questions": []
          },
          {
            "id": "toan-5-b52",
            "number": 52,
            "title": "Bài 52: Bảng đơn vị đo thời gian",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Các bài toán liên quan đến chuyển động đều",
            "summary": "Năm nhuận, năm thường, đổi đơn vị thời gian.",
            "questions": []
          },
          {
            "id": "toan-5-b53",
            "number": 53,
            "title": "Bài 53: Cộng, trừ số đo thời gian",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Các bài toán liên quan đến chuyển động đều",
            "summary": "Cộng, trừ số đo giờ, phút, giây.",
            "questions": []
          },
          {
            "id": "toan-5-b54",
            "number": 54,
            "title": "Bài 54: Nhân, chia số đo thời gian với một số",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Các bài toán liên quan đến chuyển động đều",
            "summary": "Nhân, chia số đo thời gian.",
            "questions": []
          },
          {
            "id": "toan-5-b55",
            "number": 55,
            "title": "Bài 55: Vận tốc của một chuyển động đều",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Các bài toán liên quan đến chuyển động đều",
            "summary": "v = s / t (km/giờ, m/giây).",
            "questions": [
              {
                "content": "Một ô tô đi quãng đường 135 km hết 3 giờ. Vận tốc của ô tô là:",
                "option_a": "40 km/giờ",
                "option_b": "45 km/giờ",
                "option_c": "50 km/giờ",
                "option_d": "405 km/giờ",
                "correct": "B"
              }
            ]
          },
          {
            "id": "toan-5-b56",
            "number": 56,
            "title": "Bài 56: Quãng đường, thời gian của một chuyển động đều",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Các bài toán liên quan đến chuyển động đều",
            "summary": "s = v x t và t = s / v.",
            "questions": []
          },
          {
            "id": "toan-5-b57",
            "number": 57,
            "title": "Bài 57: Luyện tập chung",
            "chapter": "Chủ đề 10: Số đo thời gian, vận tốc. Các bài toán liên quan đến chuyển động đều",
            "summary": "Củng cố toán chuyển động đều.",
            "questions": []
          },
          {
            "id": "toan-5-b58",
            "number": 58,
            "title": "Bài 58: Biểu đồ hình quạt tròn",
            "chapter": "Chủ đề 11: Một số yếu tố thống kê và xác suất",
            "summary": "Đọc và phân tích tỉ số phần trăm trên biểu đồ hình quạt tròn.",
            "questions": []
          },
          {
            "id": "toan-5-b59",
            "number": 59,
            "title": "Bài 59: Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện",
            "chapter": "Chủ đề 11: Một số yếu tố thống kê và xác suất",
            "summary": "Thử nghiệm tung đồng xu, rút thăm.",
            "questions": []
          },
          {
            "id": "toan-5-b60",
            "number": 60,
            "title": "Bài 60: Ôn tập số tự nhiên, phân số, số thập phân",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập các loại số.",
            "questions": []
          },
          {
            "id": "toan-5-b61",
            "number": 61,
            "title": "Bài 61: Ôn tập các phép tính với số tự nhiên, phân số, số thập phân",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Ôn tập phép tính.",
            "questions": []
          },
          {
            "id": "toan-5-b62",
            "number": 62,
            "title": "Bài 62: Ôn tập chung",
            "chapter": "Chủ đề 12: Ôn tập cuối năm",
            "summary": "Tổng ôn Toán lớp 5.",
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
        "icon": "📖",
        "lessons": [
          {
            "id": "tiengviet-5-b1",
            "number": 1,
            "title": "Bài 1-4: Thanh âm của gió, Cánh đồng hoa, Tuổi ngựa, Bến sông tuổi thơ",
            "chapter": "Chủ điểm 1: Thế giới tuổi thơ",
            "summary": "Từ đồng nghĩa, từ đa nghĩa; viết bài văn kể chuyện sáng tạo.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b2",
            "number": 2,
            "title": "Bài 5-8: Kì diệu rừng xanh, Trước cổng trời, Hang Sơn Đoòng",
            "chapter": "Chủ điểm 2: Thiên nhiên kì thú",
            "summary": "Đại từ, kết từ; viết bài văn tả phong cảnh.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b3",
            "number": 3,
            "title": "Bài 9-12: Trạng nguyên nhỏ tuổi, Thư gửi các học sinh, Thầy thuốc như mẹ hiền",
            "chapter": "Chủ điểm 3: Trên con đường học tập",
            "summary": "Câu đơn và câu ghép; viết báo cáo công việc.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b4",
            "number": 4,
            "title": "Bài 13-16: Tiếng đàn ba-la-lai-ca trên sông Đà, Hạt gạo làng ta",
            "chapter": "Chủ điểm 4: Nghệ thuật muôn màu",
            "summary": "Liên kết câu bằng lặp từ ngữ, thay thế từ ngữ.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b5",
            "number": 5,
            "title": "Bài 17-20: Người công dân số Một, Thái sư Trần Thủ Độ",
            "chapter": "Chủ điểm 5: Vẻ đẹp cuộc sống",
            "summary": "Dấu gạch ngang, dấu ngoặc đơn; viết đoạn văn thể hiện tình cảm, cảm xúc.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b6",
            "number": 6,
            "title": "Bài 21-24: Đất Cà Mau, Phong cảnh đền Hùng, Hội thổi cơm thi ở Đồng Vân",
            "chapter": "Chủ điểm 6: Hương sắc trăm miền",
            "summary": "Mở rộng vốn từ văn hóa dân tộc.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b7",
            "number": 7,
            "title": "Bài 25-28: Hộp thư mật, Luật Bảo vệ môi trường, Nghìn năm văn hiến",
            "chapter": "Chủ điểm 7: Tiếp bước cha ông",
            "summary": "Tổng ôn ngữ pháp và tập làm văn.",
            "questions": []
          },
          {
            "id": "tiengviet-5-b8",
            "number": 8,
            "title": "Bài 29-32: Tranh làng Hồ, Bài ca về Trái Đất, Bức thư của thủ lĩnh da đỏ",
            "chapter": "Chủ điểm 8: Thế giới của chúng ta",
            "summary": "Ôn tập cuối năm Tiếng Việt 5.",
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
            "summary": "Ứng dụng máy tính trong học tập, giải trí, liên lạc.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b2",
            "number": 2,
            "title": "Bài 2: Tìm kiếm thông tin trong giải quyết vấn đề",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Đánh giá thông tin tin cậy trên Internet.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b3",
            "number": 3,
            "title": "Bài 3: Tổ chức cây thư mục lưu trữ thông tin",
            "chapter": "Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Sắp xếp tệp khoa học theo chủ đề.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b4",
            "number": 4,
            "title": "Bài 4: Bản quyền nội dung thông tin",
            "chapter": "Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số",
            "summary": "Tôn trọng quyền tác giả khi sử dụng ảnh, văn bản.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b5",
            "number": 5,
            "title": "Bài 5-8: Soạn thảo văn bản và thiết kế thiệp, áp phích",
            "chapter": "Chủ đề 5: Ứng dụng tin học",
            "summary": "Chèn bảng, hình ảnh, tạo bố cục trang đẹp.",
            "questions": []
          },
          {
            "id": "tinhoc-5-b6",
            "number": 6,
            "title": "Bài 9-14: Lập trình trực quan Scratch nâng cao",
            "chapter": "Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính",
            "summary": "Cấu trúc lặp, rẽ nhánh (nếu... thì...), biến nhớ trong Scratch.",
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
            "summary": "Hiện thực lịch sử và nhận thức lịch sử.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b2",
            "number": 2,
            "title": "Bài 2: Dựa vào đâu để biết và dựng lại lịch sử?",
            "chapter": "Lịch sử - Chương 1: Vì sao phải học lịch sử?",
            "summary": "Sử liệu truyền miệng, hiện vật, chữ viết.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b3",
            "number": 3,
            "title": "Bài 3: Thời gian trong lịch sử",
            "chapter": "Lịch sử - Chương 1: Vì sao phải học lịch sử?",
            "summary": "Âm lịch, dương lịch, công nguyên, thế kỉ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b4",
            "number": 4,
            "title": "Bài 4: Nguồn gốc loài người",
            "chapter": "Lịch sử - Chương 2: Thời kì nguyên thủy",
            "summary": "Người tối cổ và người tinh khôn.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b5",
            "number": 5,
            "title": "Bài 5: Xã hội nguyên thủy",
            "chapter": "Lịch sử - Chương 2: Thời kì nguyên thủy",
            "summary": "Bầy người nguyên thủy, công xã thị tộc, phát minh kim loại.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b6",
            "number": 6,
            "title": "Bài 6: Ai Cập và Lưỡng Hà cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Lưu vực sông Nin, Ơ-phơ-rát, Ti-gơ-rơ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b7",
            "number": 7,
            "title": "Bài 7: Ấn Độ cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Sông Ấn - sông Hằng, Phật giáo, chữ số.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b8",
            "number": 8,
            "title": "Bài 8: Trung Quốc từ thời cổ đại đến thế kỉ VII",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Nhà Tần, Hán, Đường; Con đường tơ lụa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b9",
            "number": 9,
            "title": "Bài 9: Hy Lạp và La Mã cổ đại",
            "chapter": "Lịch sử - Chương 3: Xã hội cổ đại",
            "summary": "Dân chủ cổ đại và thành tựu văn hóa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b10",
            "number": 10,
            "title": "Bài 14: Nhà nước Văn Lang - Âu Lạc",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ thế kỉ VII TCN đến đầu thế kỉ X",
            "summary": "Thời Hùng Vương và An Dương Vương.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b11",
            "number": 11,
            "title": "Bài 17: Đấu tranh bảo tồn và phát triển văn hóa dân tộc thời Bắc thuộc",
            "chapter": "Lịch sử - Chương 5: Việt Nam từ thế kỉ VII TCN đến đầu thế kỉ X",
            "summary": "Khởi nghĩa Hai Bà Trưng, Lý Bí, Ngô Quyền.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b12",
            "number": 12,
            "title": "Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí",
            "chapter": "Địa lí - Chương 1: Bản đồ",
            "summary": "Kinh tuyến gốc 0°, Xích đạo 0°, tọa độ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b13",
            "number": 13,
            "title": "Bài 5: Vị trí Trái Đất trong Hệ Mặt Trời. Hình dạng, kích thước",
            "chapter": "Địa lí - Chương 2: Trái Đất",
            "summary": "Vị trí thứ 3, hình cầu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b14",
            "number": 14,
            "title": "Bài 6: Chuyển động tự quay quanh trục của Trái Đất và hệ quả",
            "chapter": "Địa lí - Chương 2: Trái Đất",
            "summary": "Ngày đêm luân phiên, giờ khu vực, lực Coriolis.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b15",
            "number": 15,
            "title": "Bài 7: Chuyển động quanh Mặt Trời của Trái Đất và hệ quả",
            "chapter": "Địa lí - Chương 2: Trái Đất",
            "summary": "Các mùa và ngày đêm dài ngắn theo mùa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b16",
            "number": 16,
            "title": "Bài 9: Cấu tạo của Trái Đất. Động đất và núi lửa",
            "chapter": "Địa lí - Chương 3: Cấu tạo Trái Đất",
            "summary": "Vỏ, man-ti, nhân Trái Đất.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b17",
            "number": 17,
            "title": "Bài 12: Lớp vỏ khí. Khối khí. Khí áp và gió trên Trái Đất",
            "chapter": "Địa lí - Chương 4: Khí hậu",
            "summary": "Khí quyển, gió Tín phong, Tây ôn đới.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b18",
            "number": 18,
            "title": "Bài 16: Thủy quyển. Vòng tuần hoàn nước. Nước ngầm, băng hà",
            "chapter": "Địa lí - Chương 5: Nước trên Trái Đất",
            "summary": "Vòng tuần hoàn nước.",
            "questions": []
          },
          {
            "id": "lichsu-diali-6-b19",
            "number": 19,
            "title": "Bài 21: Biến đổi khí hậu và ứng phó với biến đổi khí hậu",
            "chapter": "Địa lí - Chương 6: Đất và sinh vật",
            "summary": "Ứng phó biến đổi khí hậu.",
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
            "title": "Bài 1: Quá trình hình thành và phát triển của chế độ phong kiến ở Tây Âu",
            "chapter": "Lịch sử - Chương 1: Tây Âu trung đại",
            "summary": "Lãnh địa phong kiến và thành thị trung đại.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b2",
            "number": 2,
            "title": "Bài 2: Các cuộc phát kiến địa lí",
            "chapter": "Lịch sử - Chương 1: Tây Âu trung đại",
            "summary": "Cô-lôm-bô, Ma-gien-lăng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b3",
            "number": 3,
            "title": "Bài 3: Phong trào Văn hóa Phục hưng",
            "chapter": "Lịch sử - Chương 1: Tây Âu trung đại",
            "summary": "Đề cao con người và khoa học.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b4",
            "number": 4,
            "title": "Bài 11: Nhà Lý xây dựng và phát triển đất nước (1009 - 1225)",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ thế kỉ X đến thế kỉ XVI",
            "summary": "Dời đô Thăng Long, chống Tống.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b5",
            "number": 5,
            "title": "Bài 14: Ba lần kháng chiến chống quân xâm lược Mông - Nguyên",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ thế kỉ X đến thế kỉ XVI",
            "summary": "Hào khí Đông A thời Trần.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b6",
            "number": 6,
            "title": "Bài 17: Khởi nghĩa Lam Sơn (1418 - 1427)",
            "chapter": "Lịch sử - Chương 4: Việt Nam từ thế kỉ X đến thế kỉ XVI",
            "summary": "Lê Lợi, Nguyễn Trãi đánh đuổi quân Minh.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b7",
            "number": 7,
            "title": "Bài 1: Vị trí địa lí, đặc điểm tự nhiên châu Âu",
            "chapter": "Địa lí - Chương 1: Châu Âu",
            "summary": "Đồng bằng, núi An-pơ, khí hậu ôn đới.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b8",
            "number": 8,
            "title": "Bài 5: Vị trí địa lí, đặc điểm tự nhiên châu Á",
            "chapter": "Địa lí - Chương 2: Châu Á",
            "summary": "Châu lục lớn nhất, Hi-ma-lay-a, gió mùa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b9",
            "number": 9,
            "title": "Bài 9: Vị trí địa lí, đặc điểm tự nhiên châu Phi",
            "chapter": "Địa lí - Chương 3: Châu Phi",
            "summary": "Hoang mạc Xa-ha-ra, khí hậu nóng khô.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b10",
            "number": 10,
            "title": "Bài 13: Phát kiến ra châu Mỹ, vị trí địa lí và phạm vi châu Mỹ",
            "chapter": "Địa lí - Chương 4: Châu Mỹ",
            "summary": "Rừng A-ma-dôn, phân hóa Bắc - Nam Mỹ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-7-b11",
            "number": 11,
            "title": "Bài 18: Châu Nam Cực",
            "chapter": "Địa lí - Chương 5: Châu Đại Dương và châu Nam Cực",
            "summary": "Châu lục lạnh nhất, hiệp ước Nam Cực.",
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
            "title": "Lá cờ thêu sáu chữ vàng (Nguyễn Huy Tưởng)",
            "chapter": "Bài 1: Câu chuyện của lịch sử",
            "summary": "Lòng yêu nước và chí khí Trần Quốc Toản.",
            "questions": []
          },
          {
            "id": "nguvan-8-b2",
            "number": 2,
            "title": "Thu điếu (Nguyễn Khuyến) & Thiên Trường vãn vọng",
            "chapter": "Bài 2: Vẻ đẹp cổ điển",
            "summary": "Thơ Đường luật tả cảnh thiên nhiên.",
            "questions": []
          },
          {
            "id": "nguvan-8-b3",
            "number": 3,
            "title": "Hịch tướng sĩ (Trần Quốc Tuấn)",
            "chapter": "Bài 3: Lời sông núi",
            "summary": "Nghị luận trung đại khích lệ tinh thần yêu nước.",
            "questions": []
          },
          {
            "id": "nguvan-8-b4",
            "number": 4,
            "title": "Lễ xướng danh khoa Đinh Dậu (Tú Xương)",
            "chapter": "Bài 4: Tiếng cười trào phúng trong thơ",
            "summary": "Nghệ thuật trào phúng phê phán xã hội.",
            "questions": []
          },
          {
            "id": "nguvan-8-b5",
            "number": 5,
            "title": "Mắt sói & Lặng lẽ Sa Pa (Nguyễn Thành Long)",
            "chapter": "Bài 6: Chân dung cuộc sống",
            "summary": "Vẻ đẹp thầm lặng của con người lao động.",
            "questions": []
          },
          {
            "id": "nguvan-8-b6",
            "number": 6,
            "title": "Đồng chí (Chính Hữu) & Lá đỏ",
            "chapter": "Bài 7: Tin yêu và ước vọng",
            "summary": "Tình đồng chí của người lính.",
            "questions": []
          },
          {
            "id": "nguvan-8-b7",
            "number": 7,
            "title": "Nhà thơ của quê hương làng cảnh Việt Nam",
            "chapter": "Bài 8: Nhà văn và trang viết",
            "summary": "Nghị luận văn học.",
            "questions": []
          },
          {
            "id": "nguvan-8-b8",
            "number": 8,
            "title": "Miền châu thổ sông Cửu Long cần chuyển đổi từ sống chung sang chào đón lũ",
            "chapter": "Bài 9: Hôm nay và ngày mai",
            "summary": "Văn bản thông tin về môi trường.",
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
            "chapter": "Lịch sử - Chương 1",
            "summary": "Các cuộc cách mạng tư sản đầu tiên.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b2",
            "number": 2,
            "title": "Bài 2: Cách mạng tư sản Pháp cuối thế kỉ XVIII",
            "chapter": "Lịch sử - Chương 1",
            "summary": "Tuyên ngôn Nhân quyền và Dân quyền 1789.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b3",
            "number": 3,
            "title": "Bài 3: Cách mạng công nghiệp (nửa sau thế kỉ XVIII - giữa thế kỉ XIX)",
            "chapter": "Lịch sử - Chương 1",
            "summary": "Máy hơi nước và cơ khí hóa.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b4",
            "number": 4,
            "title": "Bài 7: Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII & Phong trào Tây Sơn",
            "chapter": "Lịch sử - Chương 3",
            "summary": "Nguyễn Huệ đại phá quân Xiêm và quân Thanh.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b5",
            "number": 5,
            "title": "Bài 17: Cuộc kháng chiến chống thực dân Pháp xâm lược từ năm 1858 đến năm 1884",
            "chapter": "Lịch sử - Chương 5",
            "summary": "Phong trào Cần vương và khởi nghĩa Yên Thế.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b6",
            "number": 6,
            "title": "Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
            "chapter": "Địa lí - Chương 1",
            "summary": "Các điểm cực và ý nghĩa lãnh thổ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b7",
            "number": 7,
            "title": "Bài 2: Địa hình Việt Nam",
            "chapter": "Địa lí - Chương 1",
            "summary": "Đồi núi 3/4 diện tích, đồng bằng châu thổ.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b8",
            "number": 8,
            "title": "Bài 4: Khí hậu Việt Nam",
            "chapter": "Địa lí - Chương 2",
            "summary": "Nhiệt đới ẩm gió mùa và phân hóa đa dạng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b9",
            "number": 9,
            "title": "Bài 6: Thủy văn Việt Nam",
            "chapter": "Địa lí - Chương 2",
            "summary": "Hệ thống sông Hồng, sông Mê Kông.",
            "questions": []
          },
          {
            "id": "lichsu-diali-8-b10",
            "number": 10,
            "title": "Bài 11: Phạm vi Biển Đông. Vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam",
            "chapter": "Địa lí - Chương 4",
            "summary": "Chủ quyền Hoàng Sa, Trường Sa.",
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
            "title": "Chuyện người con gái Nam Xương (Nguyễn Dữ)",
            "chapter": "Bài 1: Thế giới kì ảo",
            "summary": "Bi kịch người phụ nữ phong kiến.",
            "questions": []
          },
          {
            "id": "nguvan-9-b2",
            "number": 2,
            "title": "Nỗi niềm chinh phụ & Tiếng đàn mưa",
            "chapter": "Bài 2: Những cung bậc tâm trạng",
            "summary": "Song thất lục bát.",
            "questions": []
          },
          {
            "id": "nguvan-9-b3",
            "number": 3,
            "title": "Truyện Kiều (Nguyễn Du)",
            "chapter": "Bài 3: Hồn nước nằm trong tiếng mẹ cha",
            "summary": "Chị em Thúy Kiều, Kiều ở lầu Ngưng Bích.",
            "questions": []
          },
          {
            "id": "nguvan-9-b4",
            "number": 4,
            "title": "Người con gái Nam Xương - một bi kịch của con người",
            "chapter": "Bài 4: Khám phá vẻ đẹp văn chương",
            "summary": "Nghị luận văn học.",
            "questions": []
          },
          {
            "id": "nguvan-9-b5",
            "number": 5,
            "title": "Dế chọi & Vụ án chiếc nhẫn",
            "chapter": "Bài 6: Giải mã những bí mật",
            "summary": "Truyện trinh thám.",
            "questions": []
          },
          {
            "id": "nguvan-9-b6",
            "number": 6,
            "title": "Viếng lăng Bác (Viễn Phương) & Sang thu (Hữu Thỉnh)",
            "chapter": "Bài 7: Hồn thơ muôn điệu",
            "summary": "Thơ hiện đại sau 1975.",
            "questions": []
          },
          {
            "id": "nguvan-9-b7",
            "number": 7,
            "title": "Đấu tranh cho một thế giới hòa bình (G. Mác-két)",
            "chapter": "Bài 8: Tiếng nói của lương tri",
            "summary": "Nghị luận xã hội.",
            "questions": []
          },
          {
            "id": "nguvan-9-b8",
            "number": 8,
            "title": "Bến quê (Nguyễn Minh Châu) & Rô-bin-xơn ngoài đảo hoang",
            "chapter": "Bài 9: Đi và suy ngẫm",
            "summary": "Chiêm nghiệm giá trị cuộc sống.",
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
            "chapter": "Lịch sử - Chương 1",
            "summary": "NEP và xây dựng CNXH.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b2",
            "number": 2,
            "title": "Bài 3: Chiến tranh thế giới thứ hai (1939 - 1945)",
            "chapter": "Lịch sử - Chương 1",
            "summary": "Diễn biến, vai trò Đồng minh, hậu quả.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b3",
            "number": 3,
            "title": "Bài 6: Hoạt động của Nguyễn Ái Quốc và sự thành lập Đảng Cộng sản Việt Nam",
            "chapter": "Lịch sử - Chương 2",
            "summary": "Ngày 3/2/1930 thành lập ĐCSVN.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b4",
            "number": 4,
            "title": "Bài 8: Cách mạng tháng Tám năm 1945",
            "chapter": "Lịch sử - Chương 2",
            "summary": "Tuyên ngôn Độc lập 2/9/1945.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b5",
            "number": 5,
            "title": "Bài 14: Cuộc kháng chiến chống thực dân Pháp (1945 - 1954)",
            "chapter": "Lịch sử - Chương 4",
            "summary": "Chiến thắng Điện Biên Phủ 1954.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b6",
            "number": 6,
            "title": "Bài 17: Cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975)",
            "chapter": "Lịch sử - Chương 4",
            "summary": "Chiến dịch Hồ Chí Minh 30/4/1975.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b7",
            "number": 7,
            "title": "Bài 19: Công cuộc Đổi mới từ năm 1986 đến nay",
            "chapter": "Lịch sử - Chương 4",
            "summary": "Đại hội VI (1986) và thành tựu.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b8",
            "number": 8,
            "title": "Bài 1: Dân tộc và dân số",
            "chapter": "Địa lí - Chương 1",
            "summary": "54 dân tộc, cơ cấu dân số.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b9",
            "number": 9,
            "title": "Bài 4: Nông nghiệp, lâm nghiệp, thủy sản",
            "chapter": "Địa lí - Chương 2",
            "summary": "Phân bố cây trồng, vật nuôi, thủy sản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b10",
            "number": 10,
            "title": "Bài 7: Công nghiệp",
            "chapter": "Địa lí - Chương 2",
            "summary": "Các ngành công nghiệp trọng điểm.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b11",
            "number": 11,
            "title": "Bài 11: Vùng Trung du và miền núi Bắc Bộ",
            "chapter": "Địa lí - Chương 3",
            "summary": "Thủy điện, khoáng sản, cây công nghiệp cận nhiệt.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b12",
            "number": 12,
            "title": "Bài 12: Vùng Đồng bằng sông Hồng",
            "chapter": "Địa lí - Chương 3",
            "summary": "Thủ đô Hà Nội, tam giác tăng trưởng.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b13",
            "number": 13,
            "title": "Bài 13: Vùng Bắc Trung Bộ",
            "chapter": "Địa lí - Chương 3",
            "summary": "Kinh tế biển, rừng, di sản.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b14",
            "number": 14,
            "title": "Bài 14: Vùng Duyên hải Nam Trung Bộ",
            "chapter": "Địa lí - Chương 3",
            "summary": "Cảng biển nước sâu, du lịch.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b15",
            "number": 15,
            "title": "Bài 15: Vùng Tây Nguyên",
            "chapter": "Địa lí - Chương 3",
            "summary": "Cây công nghiệp lâu năm, thủy điện.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b16",
            "number": 16,
            "title": "Bài 16: Vùng Đông Nam Bộ",
            "chapter": "Địa lí - Chương 3",
            "summary": "Vùng kinh tế phát triển năng động nhất.",
            "questions": []
          },
          {
            "id": "lichsu-diali-9-b17",
            "number": 17,
            "title": "Bài 17: Vùng Đồng bằng sông Cửu Long",
            "chapter": "Địa lí - Chương 3",
            "summary": "Vựa lúa, trái cây, thủy sản lớn nhất.",
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
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-9-b1",
            "number": 1,
            "title": "Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật và công nghệ",
            "chapter": "Định hướng nghề nghiệp",
            "summary": "Đặc điểm, yêu cầu của các ngành nghề kĩ thuật.",
            "questions": []
          },
          {
            "id": "congnghe-9-b2",
            "number": 2,
            "title": "Bài 2: Cơ cấu hệ thống giáo dục quốc dân",
            "chapter": "Định hướng nghề nghiệp",
            "summary": "Phân luồng sau THCS.",
            "questions": []
          },
          {
            "id": "congnghe-9-b3",
            "number": 3,
            "title": "Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam",
            "chapter": "Định hướng nghề nghiệp",
            "summary": "Nhu cầu nhân lực và chọn nghề phù hợp.",
            "questions": []
          },
          {
            "id": "congnghe-9-b4",
            "number": 4,
            "title": "Bài 4: Thiết bị đóng cắt và lấy điện trong gia đình",
            "chapter": "Mô-đun: Lắp đặt mạng điện trong nhà",
            "summary": "Công tắc, cầu dao, ổ cắm, phích cắm.",
            "questions": []
          },
          {
            "id": "congnghe-9-b5",
            "number": 5,
            "title": "Bài 5: Dụng cụ đo điện cơ bản",
            "chapter": "Mô-đun: Lắp đặt mạng điện trong nhà",
            "summary": "Đồng hồ vạn năng, ampe kìm, công tơ điện.",
            "questions": []
          },
          {
            "id": "congnghe-9-b6",
            "number": 6,
            "title": "Bài 6: Thiết kế và lắp đặt mạng điện trong nhà",
            "chapter": "Mô-đun: Lắp đặt mạng điện trong nhà",
            "summary": "Sơ đồ nguyên lí, sơ đồ lắp đặt và kiểm tra an toàn.",
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
            "title": "Bài 1: Nhập môn Hóa học",
            "chapter": "Mở đầu",
            "summary": "Đối tượng nghiên cứu và phương pháp học Hóa học.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b2",
            "number": 2,
            "title": "Bài 2: Thành phần của nguyên tử",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Proton, neutron, electron.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b3",
            "number": 3,
            "title": "Bài 3: Nguyên tố hóa học",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Số hiệu Z, số khối A, đồng vị, nguyên tử khối trung bình.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b4",
            "number": 4,
            "title": "Bài 4: Cấu trúc lớp vỏ electron của nguyên tử",
            "chapter": "Chương 1: Cấu tạo nguyên tử",
            "summary": "Orbital, nguyên lí Pauli, quy tắc Hund, cấu hình e.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b5",
            "number": 5,
            "title": "Bài 5: Cấu tạo bảng tuần hoàn các nguyên tố hóa học",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Ô, chu kì, nhóm A và B.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b6",
            "number": 6,
            "title": "Bài 6: Xu hướng biến đổi một số tính chất của nguyên tử các nguyên tố",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Bán kính, độ âm điện, tính kim loại/phi kim.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b7",
            "number": 7,
            "title": "Bài 7: Xu hướng biến đổi thành phần và một số tính chất của hợp chất trong một chu kì",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Tính acid/base của oxide và hydroxide.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b8",
            "number": 8,
            "title": "Bài 8: Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn",
            "chapter": "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
            "summary": "Liên hệ vị trí - cấu tạo - tính chất.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b9",
            "number": 9,
            "title": "Bài 10: Quy tắc Octet",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Đạt cấu hình bền vững 8e lớp ngoài cùng.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b10",
            "number": 10,
            "title": "Bài 11: Liên kết ion",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Lực hút tĩnh điện giữa cation và anion.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b11",
            "number": 11,
            "title": "Bài 12: Liên kết cộng hóa trị",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Liên kết phân cực, không phân cực, σ và π.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b12",
            "number": 12,
            "title": "Bài 13: Liên kết hydrogen và tương tác van der Waals",
            "chapter": "Chương 3: Liên kết hóa học",
            "summary": "Ảnh hưởng đến nhiệt độ sôi và độ tan.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b13",
            "number": 13,
            "title": "Bài 15: Phản ứng oxi hóa - khử",
            "chapter": "Chương 4: Phản ứng oxi hóa - khử",
            "summary": "Số oxi hóa và cân bằng thăng bằng electron.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b14",
            "number": 14,
            "title": "Bài 17: Biến thiên enthalpy trong các phản ứng hóa học",
            "chapter": "Chương 5: Năng lượng hóa học",
            "summary": "Tỏa nhiệt (ΔH < 0) và thu nhiệt (ΔH > 0).",
            "questions": []
          },
          {
            "id": "hoahoc-10-b15",
            "number": 15,
            "title": "Bài 19: Tốc độ phản ứng hóa học",
            "chapter": "Chương 6: Tốc độ phản ứng hóa học",
            "summary": "Định luật tác dụng khối lượng và các yếu tố ảnh hưởng.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b16",
            "number": 16,
            "title": "Bài 21: Nhóm Halogen",
            "chapter": "Chương 7: Nguyên tố nhóm VIIA - Halogen",
            "summary": "F₂, Cl₂, Br₂, I₂ và tính oxi hóa giảm dần.",
            "questions": []
          },
          {
            "id": "hoahoc-10-b17",
            "number": 17,
            "title": "Bài 22: Hydrogen halide và một số phản ứng của ion halide",
            "chapter": "Chương 7: Nguyên tố nhóm VIIA - Halogen",
            "summary": "Tính acid HF < HCl < HBr < HI và nhận biết bằng AgNO₃.",
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
            "title": "Bài 1: Giới thiệu khái quát chương trình môn Sinh học",
            "chapter": "Mở đầu",
            "summary": "Đối tượng, lĩnh vực và phát triển bền vững.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b2",
            "number": 2,
            "title": "Bài 2: Phương pháp nghiên cứu và học tập môn Sinh học",
            "chapter": "Mở đầu",
            "summary": "Quan sát, làm việc trong phòng thí nghiệm, thực nghiệm.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b3",
            "number": 3,
            "title": "Bài 3: Các cấp độ tổ chức của thế giới sống",
            "chapter": "Mở đầu",
            "summary": "Tế bào -> Cơ thể -> Quần thể -> Quần xã -> Hệ sinh thái -> Sinh quyển.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b4",
            "number": 4,
            "title": "Bài 4: Các nguyên tố hóa học và nước",
            "chapter": "Chương 1: Thành phần hóa học của tế bào",
            "summary": "Đa lượng, vi lượng và vai trò của nước.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b5",
            "number": 5,
            "title": "Bài 5: Các phân tử sinh học",
            "chapter": "Chương 1: Thành phần hóa học của tế bào",
            "summary": "Carbohydrate, Lipid, Protein, Nucleic acid.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b6",
            "number": 6,
            "title": "Bài 7: Tế bào nhân sơ",
            "chapter": "Chương 2: Cấu trúc tế bào",
            "summary": "Đặc điểm tế bào nhân sơ.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b7",
            "number": 7,
            "title": "Bài 8: Tế bào nhân thực",
            "chapter": "Chương 2: Cấu trúc tế bào",
            "summary": "Nhân và các bào quan có màng.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b8",
            "number": 8,
            "title": "Bài 11: Vận chuyển các chất qua màng sinh chất",
            "chapter": "Chương 3: Trao đổi chất và chuyển hóa năng lượng ở tế bào",
            "summary": "Thụ động, chủ động, xuất nhập bào.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b9",
            "number": 9,
            "title": "Bài 13: Chuyển hóa vật chất và năng lượng trong tế bào",
            "chapter": "Chương 3: Trao đổi chất và chuyển hóa năng lượng ở tế bào",
            "summary": "Đồng hóa, dị hóa và ATP.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b10",
            "number": 10,
            "title": "Bài 14: Phân giải và tổng hợp các chất trong tế bào",
            "chapter": "Chương 3: Trao đổi chất và chuyển hóa năng lượng ở tế bào",
            "summary": "Hô hấp tế bào, lên men, quang hợp.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b11",
            "number": 11,
            "title": "Bài 16: Chu kì tế bào và nguyên phân",
            "chapter": "Chương 4: Chu kì tế bào, phân bào và công nghệ tế bào",
            "summary": "G1, S, G2 và 4 kì nguyên phân.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b12",
            "number": 12,
            "title": "Bài 17: Giảm phân",
            "chapter": "Chương 4: Chu kì tế bào, phân bào và công nghệ tế bào",
            "summary": "Giảm phân I, II và trao đổi chéo.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b13",
            "number": 13,
            "title": "Bài 18: Công nghệ tế bào",
            "chapter": "Chương 4: Chu kì tế bào, phân bào và công nghệ tế bào",
            "summary": "Nuôi cấy mô thực vật, nhân bản vô tính, tế bào gốc.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b14",
            "number": 14,
            "title": "Bài 20: Sự sinh trưởng và sinh sản ở vi sinh vật",
            "chapter": "Chương 5: Vi sinh vật và ứng dụng",
            "summary": "4 pha sinh trưởng quần thể vi khuẩn.",
            "questions": []
          },
          {
            "id": "sinhhoc-10-b15",
            "number": 15,
            "title": "Bài 24: Khái quát về virus",
            "chapter": "Chương 6: Virus và ứng dụng",
            "summary": "Cấu tạo và chu trình nhân lên của virus.",
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
            "summary": "Thần thoại và truyện truyền kì.",
            "questions": []
          },
          {
            "id": "nguvan-10-b2",
            "number": 2,
            "title": "Chùm thơ hai-cư Nhật Bản & Thu hứng (Đỗ Phủ)",
            "chapter": "Bài 2: Vẻ đẹp của thơ ca",
            "summary": "Thơ cô đọng và Đường luật.",
            "questions": []
          },
          {
            "id": "nguvan-10-b3",
            "number": 3,
            "title": "Bình Ngô đại cáo (Nguyễn Trãi)",
            "chapter": "Bài 3: Nghệ thuật thuyết phục trong văn nghị luận",
            "summary": "Bản tuyên ngôn độc lập hào hùng.",
            "questions": []
          },
          {
            "id": "nguvan-10-b4",
            "number": 4,
            "title": "Héc-to từ biệt Ăng-đrô-mác & Đăm Săn đi bắt Nữ Thần Mặt Trời",
            "chapter": "Bài 4: Sức sống của sử thi",
            "summary": "Người anh hùng sử thi.",
            "questions": []
          },
          {
            "id": "nguvan-10-b5",
            "number": 5,
            "title": "Xúy Vân giả dại (trích chèo Kim Nham)",
            "chapter": "Bài 5: Tích trò sân khấu dân gian",
            "summary": "Sân khấu chèo truyền thống.",
            "questions": []
          },
          {
            "id": "nguvan-10-b6",
            "number": 6,
            "title": "Dục Thúy sơn & Bảo kính cảnh giới (bài 43)",
            "chapter": "Bài 6: Nguyễn Trãi - 'Dành còn để trợ dân này'",
            "summary": "Tư tưởng nhân nghĩa và yêu thiên nhiên.",
            "questions": []
          },
          {
            "id": "nguvan-10-b7",
            "number": 7,
            "title": "Người cầm quyền khôi phục uy quyền & Dưới bóng hoàng lan",
            "chapter": "Bài 7: Quyền năng của người kể chuyện",
            "summary": "Điểm nhìn trần thuật.",
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
            "chapter": "Chương 1: Sử dụng bản đồ",
            "summary": "Vai trò Địa lí.",
            "questions": []
          },
          {
            "id": "diali-10-b2",
            "number": 2,
            "title": "Bài 2: Phương pháp biểu hiện các đối tượng địa lí trên bản đồ",
            "chapter": "Chương 1: Sử dụng bản đồ",
            "summary": "Kí hiệu, đường chuyển động, chấm điểm, khoanh vùng, bản đồ - biểu đồ.",
            "questions": []
          },
          {
            "id": "diali-10-b3",
            "number": 3,
            "title": "Bài 4: Trái Đất, thuyết kiến tạo mảng",
            "chapter": "Chương 2: Trái Đất",
            "summary": "7 mảng kiến tạo lớn.",
            "questions": []
          },
          {
            "id": "diali-10-b4",
            "number": 4,
            "title": "Bài 5: Hệ quả địa lí các chuyển động của Trái Đất",
            "chapter": "Chương 2: Trái Đất",
            "summary": "Ngày đêm, giờ khu vực, các mùa.",
            "questions": []
          },
          {
            "id": "diali-10-b5",
            "number": 5,
            "title": "Bài 6: Thạch quyển, nội lực",
            "chapter": "Chương 3: Thạch quyển",
            "summary": "Vận động kiến tạo.",
            "questions": []
          },
          {
            "id": "diali-10-b6",
            "number": 6,
            "title": "Bài 7: Ngoại lực",
            "chapter": "Chương 3: Thạch quyển",
            "summary": "Phong hóa, bóc mòn, vận chuyển, bồi tụ.",
            "questions": []
          },
          {
            "id": "diali-10-b7",
            "number": 7,
            "title": "Bài 8: Khí quyển, sự phân bố nhiệt độ không khí trên Trái Đất",
            "chapter": "Chương 4: Khí quyển",
            "summary": "Nhiệt độ theo vĩ độ, lục địa - đại dương, địa hình.",
            "questions": []
          },
          {
            "id": "diali-10-b8",
            "number": 8,
            "title": "Bài 9: Khí áp và gió",
            "chapter": "Chương 4: Khí quyển",
            "summary": "Gió Mậu dịch, Tây ôn đới, gió mùa.",
            "questions": []
          },
          {
            "id": "diali-10-b9",
            "number": 9,
            "title": "Bài 10: Mưa",
            "chapter": "Chương 4: Khí quyển",
            "summary": "Các nhân tố ảnh hưởng lượng mưa.",
            "questions": []
          },
          {
            "id": "diali-10-b10",
            "number": 10,
            "title": "Bài 11: Thủy quyển, nước trên lục địa",
            "chapter": "Chương 5: Thủy quyển",
            "summary": "Sông, hồ, nước ngầm, băng hà.",
            "questions": []
          },
          {
            "id": "diali-10-b11",
            "number": 11,
            "title": "Bài 12: Nước biển và đại dương",
            "chapter": "Chương 5: Thủy quyển",
            "summary": "Sóng biển, thủy triều, dòng biển.",
            "questions": []
          },
          {
            "id": "diali-10-b12",
            "number": 12,
            "title": "Bài 16: Dân số và gia tăng dân số",
            "chapter": "Chương 7: Địa lí dân cư",
            "summary": "Gia tăng tự nhiên và cơ học.",
            "questions": []
          },
          {
            "id": "diali-10-b13",
            "number": 13,
            "title": "Bài 17: Cơ cấu dân số",
            "chapter": "Chương 7: Địa lí dân cư",
            "summary": "Cơ cấu sinh học và xã hội.",
            "questions": []
          },
          {
            "id": "diali-10-b14",
            "number": 14,
            "title": "Bài 18: Phân bố dân cư và đô thị hóa",
            "chapter": "Chương 7: Địa lí dân cư",
            "summary": "Mật độ dân số và đô thị hóa.",
            "questions": []
          },
          {
            "id": "diali-10-b15",
            "number": 15,
            "title": "Bài 19-34: Cơ cấu kinh tế, Nông - Lâm - Thủy sản, Công nghiệp, Dịch vụ và Phát triển bền vững",
            "chapter": "Chương 8-11: Địa lí kinh tế",
            "summary": "Các ngành kinh tế và tăng trưởng xanh.",
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
            "summary": "Dữ liệu, thông tin, tri thức và thiết bị số.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b2",
            "number": 2,
            "title": "Bài 2: Vai trò của thiết bị thông minh và tin học đối với xã hội",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Cách mạng công nghiệp 4.0 và IoT.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b3",
            "number": 3,
            "title": "Bài 3: Một số kiểu dữ liệu và dữ liệu văn bản",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Bảng mã ASCII và Unicode.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b4",
            "number": 4,
            "title": "Bài 4: Hệ nhị phân và dữ liệu số nguyên",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Đổi số thập phân sang nhị phân và ngược lại.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b5",
            "number": 5,
            "title": "Bài 5: Dữ liệu lôgic",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Phép toán AND, OR, NOT.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b6",
            "number": 6,
            "title": "Bài 6: Dữ liệu âm thanh và hình ảnh",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Số hóa âm thanh và ảnh bitmap.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b7",
            "number": 7,
            "title": "Bài 8: Mạng máy tính trong cuộc sống hiện đại",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "LAN, WAN, Internet và điện toán đám mây.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b8",
            "number": 8,
            "title": "Bài 9: An toàn trên không gian mạng",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Phần mềm độc hại và phòng chống.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b9",
            "number": 9,
            "title": "Bài 11: Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa",
            "summary": "Quyền tác giả và bản quyền.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b10",
            "number": 10,
            "title": "Bài 12-15: Phần mềm thiết kế đồ họa vector (Inkscape)",
            "chapter": "Chủ đề 4: Ứng dụng tin học",
            "summary": "Vẽ hình khối, đường cong Bézier và văn bản.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b11",
            "number": 11,
            "title": "Bài 16: Ngôn ngữ lập trình bậc cao và Python",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "Cài đặt, môi trường lập trình Python.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b12",
            "number": 12,
            "title": "Bài 17: Biến và lệnh gán",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "Biến, quy tắc đặt tên và phép toán trong Python.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b13",
            "number": 13,
            "title": "Bài 18: Các lệnh vào ra đơn giản",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "input() và print().",
            "questions": []
          },
          {
            "id": "tinhoc-10-b14",
            "number": 14,
            "title": "Bài 19: Câu lệnh rẽ nhánh if",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "if - else - elif.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b15",
            "number": 15,
            "title": "Bài 20: Câu lệnh lặp for",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "range() và vòng lặp for.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b16",
            "number": 16,
            "title": "Bài 21: Câu lệnh lặp while",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "Vòng lặp với số lần chưa biết trước.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b17",
            "number": 17,
            "title": "Bài 22-25: Kiểu dữ liệu danh sách (List) và Xâu kí tự (String)",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "Thao tác trên list và string.",
            "questions": []
          },
          {
            "id": "tinhoc-10-b18",
            "number": 18,
            "title": "Bài 26-29: Hàm trong Python và Kiểm thử gỡ lỗi",
            "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)",
            "summary": "def, tham số, giá trị trả về.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-10",
        "name": "Công nghệ (Thiết kế và công nghệ)",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-10-b1",
            "number": 1,
            "title": "Bài 1: Công nghệ và đời sống",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Khoa học, kĩ thuật, công nghệ.",
            "questions": []
          },
          {
            "id": "congnghe-10-b2",
            "number": 2,
            "title": "Bài 2: Hệ thống kĩ thuật",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Đầu vào, bộ phận xử lí, đầu ra.",
            "questions": []
          },
          {
            "id": "congnghe-10-b3",
            "number": 3,
            "title": "Bài 3: Công nghệ phổ biến",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Cơ khí, điện, điện tử, hóa học, sinh học.",
            "questions": []
          },
          {
            "id": "congnghe-10-b4",
            "number": 4,
            "title": "Bài 4: Một số công nghệ mới",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Công nghệ nano, in 3D, AI, năng lượng tái tạo.",
            "questions": []
          },
          {
            "id": "congnghe-10-b5",
            "number": 5,
            "title": "Bài 5: Đánh giá công nghệ",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Tiêu chí đánh giá hiệu quả công nghệ.",
            "questions": []
          },
          {
            "id": "congnghe-10-b6",
            "number": 6,
            "title": "Bài 6: Cách mạng công nghiệp",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Các cuộc CMCN.",
            "questions": []
          },
          {
            "id": "congnghe-10-b7",
            "number": 7,
            "title": "Bài 7: Ngành nghề kĩ thuật, công nghệ",
            "chapter": "Chương I: Đại cương về công nghệ",
            "summary": "Định hướng nghề nghiệp.",
            "questions": []
          },
          {
            "id": "congnghe-10-b8",
            "number": 8,
            "title": "Bài 8: Bản vẽ kĩ thuật và tiêu chuẩn trình bày bản vẽ kĩ thuật",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "TCVN trình bày bản vẽ.",
            "questions": []
          },
          {
            "id": "congnghe-10-b9",
            "number": 9,
            "title": "Bài 9: Hình chiếu vuông góc",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "3 hình chiếu vuông góc.",
            "questions": []
          },
          {
            "id": "congnghe-10-b10",
            "number": 10,
            "title": "Bài 10: Hình cắt và mặt cắt",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Biểu diễn cấu tạo bên trong vật thể.",
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
            "summary": "Hình chiếu phối cảnh 1 điểm tụ, 2 điểm tụ.",
            "questions": []
          },
          {
            "id": "congnghe-10-b13",
            "number": 13,
            "title": "Bài 13: Biểu diễn quy ước ren",
            "chapter": "Chương II: Vẽ kĩ thuật",
            "summary": "Ren trục và ren lỗ.",
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
            "summary": "Bản vẽ mặt bằng tổng thể, mặt bằng, mặt đứng, mặt cắt.",
            "questions": []
          },
          {
            "id": "congnghe-10-b16",
            "number": 16,
            "title": "Bài 17-21: Khái quát, quy trình, nguyên tắc và phương pháp thiết kế kĩ thuật",
            "chapter": "Chương III: Thiết kế kĩ thuật",
            "summary": "Quy trình thiết kế sản phẩm kĩ thuật.",
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
            "chapter": "Chương I: Dao động",
            "summary": "Biên độ, chu kì, tần số, pha.",
            "questions": []
          },
          {
            "id": "vatli-11-b2",
            "number": 2,
            "title": "Bài 2: Mô tả dao động điều hòa",
            "chapter": "Chương I: Dao động",
            "summary": "Phương trình x = Acos(ωt + φ).",
            "questions": []
          },
          {
            "id": "vatli-11-b3",
            "number": 3,
            "title": "Bài 3: Vận tốc, gia tốc trong dao động điều hòa",
            "chapter": "Chương I: Dao động",
            "summary": "v = -ωAsin(ωt+φ), a = -ω²x.",
            "questions": []
          },
          {
            "id": "vatli-11-b4",
            "number": 4,
            "title": "Bài 5: Động năng. Thế năng. Sự chuyển hóa năng lượng trong dao động điều hòa",
            "chapter": "Chương I: Dao động",
            "summary": "Cơ năng W = ½mω²A².",
            "questions": []
          },
          {
            "id": "vatli-11-b5",
            "number": 5,
            "title": "Bài 6: Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
            "chapter": "Chương I: Dao động",
            "summary": "Điều kiện cộng hưởng f = f₀.",
            "questions": []
          },
          {
            "id": "vatli-11-b6",
            "number": 6,
            "title": "Bài 8: Mô tả sóng",
            "chapter": "Chương II: Sóng",
            "summary": "Bước sóng λ = vT = v/f.",
            "questions": []
          },
          {
            "id": "vatli-11-b7",
            "number": 7,
            "title": "Bài 9: Sóng ngang. Sóng dọc. Sự truyền năng lượng của sóng cơ",
            "chapter": "Chương II: Sóng",
            "summary": "Phương dao động và phương truyền sóng.",
            "questions": []
          },
          {
            "id": "vatli-11-b8",
            "number": 8,
            "title": "Bài 11: Sóng điện từ",
            "chapter": "Chương II: Sóng",
            "summary": "Thang sóng điện từ, tốc độ c = 3·10⁸ m/s.",
            "questions": []
          },
          {
            "id": "vatli-11-b9",
            "number": 9,
            "title": "Bài 12: Giao thoa sóng",
            "chapter": "Chương II: Sóng",
            "summary": "Giao thoa sóng cơ và thí nghiệm Y-âng.",
            "questions": []
          },
          {
            "id": "vatli-11-b10",
            "number": 10,
            "title": "Bài 13: Sóng dừng",
            "chapter": "Chương II: Sóng",
            "summary": "Nút sóng, bụng sóng.",
            "questions": []
          },
          {
            "id": "vatli-11-b11",
            "number": 11,
            "title": "Bài 16: Lực tương tác giữa hai điện tích",
            "chapter": "Chương III: Điện trường",
            "summary": "Định luật Coulomb F = k|q₁q₂|/(εr²).",
            "questions": []
          },
          {
            "id": "vatli-11-b12",
            "number": 12,
            "title": "Bài 17: Khái niệm điện trường",
            "chapter": "Chương III: Điện trường",
            "summary": "E = F/q = k|Q|/r².",
            "questions": []
          },
          {
            "id": "vatli-11-b13",
            "number": 13,
            "title": "Bài 18: Điện trường đều",
            "chapter": "Chương III: Điện trường",
            "summary": "Điện trường giữa hai bản phẳng song song.",
            "questions": []
          },
          {
            "id": "vatli-11-b14",
            "number": 14,
            "title": "Bài 19: Thế năng điện",
            "chapter": "Chương III: Điện trường",
            "summary": "Công lực điện A = qEd.",
            "questions": []
          },
          {
            "id": "vatli-11-b15",
            "number": 15,
            "title": "Bài 20: Điện thế",
            "chapter": "Chương III: Điện trường",
            "summary": "Hiệu điện thế U = A/q.",
            "questions": []
          },
          {
            "id": "vatli-11-b16",
            "number": 16,
            "title": "Bài 21: Tụ điện",
            "chapter": "Chương III: Điện trường",
            "summary": "C = Q/U và năng lượng tụ W = ½CU².",
            "questions": []
          },
          {
            "id": "vatli-11-b17",
            "number": 17,
            "title": "Bài 22: Cường độ dòng điện",
            "chapter": "Chương IV: Dòng điện. Mạch điện",
            "summary": "I = Δq/Δt = Snve.",
            "questions": []
          },
          {
            "id": "vatli-11-b18",
            "number": 18,
            "title": "Bài 23: Điện trở. Định luật Ohm",
            "chapter": "Chương IV: Dòng điện. Mạch điện",
            "summary": "Định luật Ohm và điện trở nhiệt, quang điện trở.",
            "questions": []
          },
          {
            "id": "vatli-11-b19",
            "number": 19,
            "title": "Bài 24: Nguồn điện",
            "chapter": "Chương IV: Dòng điện. Mạch điện",
            "summary": "Suất điện động E, điện trở trong r, I = E/(R+r).",
            "questions": []
          },
          {
            "id": "vatli-11-b20",
            "number": 20,
            "title": "Bài 25: Năng lượng và công suất điện",
            "chapter": "Chương IV: Dòng điện. Mạch điện",
            "summary": "P = UI, A = UIt.",
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
            "summary": "Hằng số cân bằng K_C và nguyên lí Le Chatelier.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b2",
            "number": 2,
            "title": "Bài 2: Cân bằng trong dung dịch nước",
            "chapter": "Chương 1: Cân bằng hóa học",
            "summary": "Thuyết Brønsted - Lowry, pH, chuẩn độ acid - base.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b3",
            "number": 3,
            "title": "Bài 4: Nitrogen",
            "chapter": "Chương 2: Nitrogen - Sulfur",
            "summary": "Cấu tạo phân tử N₂, tính trơ và ứng dụng.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b4",
            "number": 4,
            "title": "Bài 5: Ammonia. Muối ammonium",
            "chapter": "Chương 2: Nitrogen - Sulfur",
            "summary": "Cấu tạo NH₃, tính base yếu, tính khử; nhận biết NH₄⁺.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b5",
            "number": 5,
            "title": "Bài 6: Một số hợp chất của nitrogen với oxygen",
            "chapter": "Chương 2: Nitrogen - Sulfur",
            "summary": "Mưa acid và nitric acid (HNO₃).",
            "questions": []
          },
          {
            "id": "hoahoc-11-b6",
            "number": 6,
            "title": "Bài 7: Sulfur và sulfur dioxide",
            "chapter": "Chương 2: Nitrogen - Sulfur",
            "summary": "Tính chất S và SO₂ (vừa khử vừa oxi hóa).",
            "questions": []
          },
          {
            "id": "hoahoc-11-b7",
            "number": 7,
            "title": "Bài 8: Sulfuric acid và muối sulfate",
            "chapter": "Chương 2: Nitrogen - Sulfur",
            "summary": "H₂SO₄ loãng và đặc nóng; nhận biết ion SO₄²⁻.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b8",
            "number": 8,
            "title": "Bài 10: Hợp chất hữu cơ và hóa học hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Nhóm chức và phổ hồng ngoại (IR).",
            "questions": []
          },
          {
            "id": "hoahoc-11-b9",
            "number": 9,
            "title": "Bài 11: Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Chưng cất, chiết, kết tinh, sắc kí cột.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b10",
            "number": 10,
            "title": "Bài 12: Công thức phân tử hợp chất hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Phổ khối lượng (MS) xác định phân tử khối.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b11",
            "number": 11,
            "title": "Bài 13: Cấu tạo hóa học hợp chất hữu cơ",
            "chapter": "Chương 3: Đại cương về hóa học hữu cơ",
            "summary": "Thuyết cấu tạo hóa học và đồng phân.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b12",
            "number": 12,
            "title": "Bài 15: Alkane",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "C_nH_{2n+2}, thế halogen, cracking, reforming.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b13",
            "number": 13,
            "title": "Bài 16: Hydrocarbon không no",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Alkene, alkyne, đồng phân hình học cis-trans, quy tắc Markovnikov.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b14",
            "number": 14,
            "title": "Bài 17: Arene (Hydrocarbon thơm)",
            "chapter": "Chương 4: Hydrocarbon",
            "summary": "Benzene, toluene, phản ứng thế vòng thơm.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b15",
            "number": 15,
            "title": "Bài 19: Dẫn xuất halogen",
            "chapter": "Chương 5: Dẫn xuất halogen - Alcohol - Phenol",
            "summary": "Thủy phân và tách HX (quy tắc Zaitsev).",
            "questions": []
          },
          {
            "id": "hoahoc-11-b16",
            "number": 16,
            "title": "Bài 20: Alcohol",
            "chapter": "Chương 5: Dẫn xuất halogen - Alcohol - Phenol",
            "summary": "Bậc alcohol, tác dụng Na, Cu(OH)₂ (polyalcohol), tách nước.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b17",
            "number": 17,
            "title": "Bài 21: Phenol",
            "chapter": "Chương 5: Dẫn xuất halogen - Alcohol - Phenol",
            "summary": "Tính acid yếu, phản ứng với Br₂ và HNO₃.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b18",
            "number": 18,
            "title": "Bài 23: Hợp chất carbonyl",
            "chapter": "Chương 6: Hợp chất carbonyl - Carboxylic acid",
            "summary": "Aldehyde và ketone; phản ứng tráng bạc, iodoform.",
            "questions": []
          },
          {
            "id": "hoahoc-11-b19",
            "number": 19,
            "title": "Bài 24: Carboxylic acid",
            "chapter": "Chương 6: Hợp chất carbonyl - Carboxylic acid",
            "summary": "Tính acid và phản ứng ester hóa.",
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
            "title": "Bài 2: Trao đổi nước và khoáng ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Hấp thụ ở rễ, vận chuyển mạch gỗ/rây, thoát hơi nước.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b2",
            "number": 2,
            "title": "Bài 4: Quang hợp ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Pha sáng, pha tối (C₃, C₄, CAM).",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b3",
            "number": 3,
            "title": "Bài 6: Hô hấp ở thực vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Đường phân, chu trình Krebs, chuỗi truyền electron.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b4",
            "number": 4,
            "title": "Bài 8: Dinh dưỡng và tiêu hóa ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Các hình thức tiêu hóa ở động vật.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b5",
            "number": 5,
            "title": "Bài 9: Hô hấp ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Bề mặt trao đổi khí, mang, hệ thống ống khí, phổi.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b6",
            "number": 6,
            "title": "Bài 10: Tuần hoàn ở động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Hệ tuần hoàn hở, kín; chu kì tim, huyết áp.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b7",
            "number": 7,
            "title": "Bài 12: Miễn dịch ở người và động vật",
            "chapter": "Chương 1: Trao đổi chất và chuyển hóa năng lượng",
            "summary": "Miễn dịch không đặc hiệu và đặc hiệu.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b8",
            "number": 8,
            "title": "Bài 15: Cảm ứng ở thực vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Hướng động và ứng động.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b9",
            "number": 9,
            "title": "Bài 17: Cảm ứng ở động vật",
            "chapter": "Chương 2: Cảm ứng ở sinh vật",
            "summary": "Điện thế nghỉ, điện thế hoạt động, synapse, phản xạ.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b10",
            "number": 10,
            "title": "Bài 19-21: Hormone thực vật và sinh trưởng phát triển ở động vật",
            "chapter": "Chương 3: Sinh trưởng và phát triển ở sinh vật",
            "summary": "Auxin, GA, Cytokinin, Ethylene, ABA; biến thái.",
            "questions": []
          },
          {
            "id": "sinhhoc-11-b11",
            "number": 11,
            "title": "Bài 24-26: Sinh sản ở thực vật và động vật",
            "chapter": "Chương 4: Sinh sản ở sinh vật",
            "summary": "Thụ tinh kép và điều hòa sinh sản.",
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
            "chapter": "Bài 1: Câu chuyện và điểm nhìn",
            "summary": "Truyện ngắn hiện thực và nhân đạo.",
            "questions": []
          },
          {
            "id": "nguvan-11-b2",
            "number": 2,
            "title": "Tràng giang (Huy Cận) & Đây thôn Vĩ Dạ (Hàn Mặc Tử)",
            "chapter": "Bài 2: Cấu tứ và hình ảnh trong thơ",
            "summary": "Thơ mới lãng mạn.",
            "questions": []
          },
          {
            "id": "nguvan-11-b3",
            "number": 3,
            "title": "Cầu hiền chiếu (Ngô Thì Nhậm)",
            "chapter": "Bài 3: Văn bản nghị luận",
            "summary": "Nghị luận trung đại.",
            "questions": []
          },
          {
            "id": "nguvan-11-b4",
            "number": 4,
            "title": "Lời tiễn dặn & Trao duyên (Nguyễn Du)",
            "chapter": "Bài 4: Truyện thơ",
            "summary": "Truyện thơ dân gian và truyện thơ Nôm.",
            "questions": []
          },
          {
            "id": "nguvan-11-b5",
            "number": 5,
            "title": "Sống, hay không sống & Vĩnh biệt Cửu Trùng Đài",
            "chapter": "Bài 5: Bi kịch",
            "summary": "Xung đột bi kịch.",
            "questions": []
          },
          {
            "id": "nguvan-11-b6",
            "number": 6,
            "title": "Tác gia Nguyễn Du & Độc Tiểu Thanh kí",
            "chapter": "Bài 6: Tác gia Nguyễn Du",
            "summary": "Chủ nghĩa nhân đạo Nguyễn Du.",
            "questions": []
          },
          {
            "id": "nguvan-11-b7",
            "number": 7,
            "title": "Ai đã đặt tên cho dòng sông? (Hoàng Phủ Ngọc Tường)",
            "chapter": "Bài 7: Ghi chép và tưởng tượng trong kí",
            "summary": "Bút kí sông Hương.",
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
            "chapter": "Phần Một: Một số vấn đề kinh tế - xã hội thế giới",
            "summary": "Nước phát triển và đang phát triển (GDP/người, HDI).",
            "questions": []
          },
          {
            "id": "diali-11-b2",
            "number": 2,
            "title": "Bài 2: Toàn cầu hóa và khu vực hóa kinh tế",
            "chapter": "Phần Một: Một số vấn đề kinh tế - xã hội thế giới",
            "summary": "Biểu hiện, hệ quả của toàn cầu hóa và khu vực hóa.",
            "questions": []
          },
          {
            "id": "diali-11-b3",
            "number": 3,
            "title": "Bài 4: Một số tổ chức quốc tế và khu vực, an ninh toàn cầu",
            "chapter": "Phần Một: Một số vấn đề kinh tế - xã hội thế giới",
            "summary": "LHQ, WTO, IMF, APEC và an ninh lương thực, năng lượng, mạng.",
            "questions": []
          },
          {
            "id": "diali-11-b4",
            "number": 4,
            "title": "Bài 6: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội khu vực Mỹ La-tinh",
            "chapter": "Phần Hai: Khu vực Mỹ La-tinh",
            "summary": "Kênh đào Pa-na-ma, rừng A-ma-dôn, đô thị hóa.",
            "questions": []
          },
          {
            "id": "diali-11-b5",
            "number": 5,
            "title": "Bài 7: Kinh tế khu vực Mỹ La-tinh",
            "chapter": "Phần Hai: Khu vực Mỹ La-tinh",
            "summary": "Cơ cấu kinh tế và xuất khẩu nông sản, khoáng sản.",
            "questions": []
          },
          {
            "id": "diali-11-b6",
            "number": 6,
            "title": "Bài 9: Liên minh Châu Âu (EU) - Một liên kết kinh tế khu vực lớn",
            "chapter": "Phần Hai: Liên minh Châu Âu (EU)",
            "summary": "4 mặt tự do lưu thông và đồng tiền chung Euro.",
            "questions": []
          },
          {
            "id": "diali-11-b7",
            "number": 7,
            "title": "Bài 11: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Đông Nam Á",
            "chapter": "Phần Hai: Khu vực Đông Nam Á",
            "summary": "Cầu nối giữa hai đại dương, khí hậu nhiệt đới ẩm gió mùa.",
            "questions": []
          },
          {
            "id": "diali-11-b8",
            "number": 8,
            "title": "Bài 12: Kinh tế khu vực Đông Nam Á",
            "chapter": "Phần Hai: Khu vực Đông Nam Á",
            "summary": "Chuyển dịch cơ cấu kinh tế công nghiệp hóa.",
            "questions": []
          },
          {
            "id": "diali-11-b9",
            "number": 9,
            "title": "Bài 13: Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
            "chapter": "Phần Hai: Khu vực Đông Nam Á",
            "summary": "Mục tiêu, thành tựu và vai trò Việt Nam.",
            "questions": []
          },
          {
            "id": "diali-11-b10",
            "number": 10,
            "title": "Bài 15: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Tây Nam Á",
            "chapter": "Phần Hai: Khu vực Tây Nam Á",
            "summary": "Trữ lượng dầu mỏ lớn nhất thế giới.",
            "questions": []
          },
          {
            "id": "diali-11-b11",
            "number": 11,
            "title": "Bài 16: Kinh tế khu vực Tây Nam Á",
            "chapter": "Phần Hai: Khu vực Tây Nam Á",
            "summary": "Khai thác dầu khí và đa dạng hóa kinh tế.",
            "questions": []
          },
          {
            "id": "diali-11-b12",
            "number": 12,
            "title": "Bài 18: Vị trí địa lí, điều kiện tự nhiên và dân cư Hoa Kỳ",
            "chapter": "Phần Hai: Hợp chúng quốc Hoa Kỳ",
            "summary": "Tài nguyên phong phú, dân nhập cư.",
            "questions": []
          },
          {
            "id": "diali-11-b13",
            "number": 13,
            "title": "Bài 19: Kinh tế Hoa Kỳ",
            "chapter": "Phần Hai: Hợp chúng quốc Hoa Kỳ",
            "summary": "Nền kinh tế hàng đầu thế giới, công nghệ cao.",
            "questions": []
          },
          {
            "id": "diali-11-b14",
            "number": 14,
            "title": "Bài 21: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Liên bang Nga",
            "chapter": "Phần Hai: Liên bang Nga",
            "summary": "Quốc gia có diện tích lớn nhất thế giới.",
            "questions": []
          },
          {
            "id": "diali-11-b15",
            "number": 15,
            "title": "Bài 22: Kinh tế Liên bang Nga",
            "chapter": "Phần Hai: Liên bang Nga",
            "summary": "Công nghiệp năng lượng, vũ trụ, quốc phòng.",
            "questions": []
          },
          {
            "id": "diali-11-b16",
            "number": 16,
            "title": "Bài 24: Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Nhật Bản",
            "chapter": "Phần Hai: Nhật Bản",
            "summary": "Động đất, núi lửa, dân số già.",
            "questions": []
          },
          {
            "id": "diali-11-b17",
            "number": 17,
            "title": "Bài 25: Kinh tế Nhật Bản",
            "chapter": "Phần Hai: Nhật Bản",
            "summary": "Kinh tế phát triển cao, công nghiệp chế tạo, robot.",
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
            "summary": "Quản lí tài nguyên, giao diện hệ điều hành.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b2",
            "number": 2,
            "title": "Bài 2: Thực hành sử dụng hệ điều hành",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Quản lí tệp và tiện ích hệ thống.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b3",
            "number": 3,
            "title": "Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Mã nguồn mở (GPL) và SaaS.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b4",
            "number": 4,
            "title": "Bài 4: Bên trong máy tính",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "CPU, RAM, ROM, cổng logic AND, OR, NOT.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b5",
            "number": 5,
            "title": "Bài 5: Kết nối máy tính với các thiết bị số",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "USB, Bluetooth, HDMI.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b6",
            "number": 6,
            "title": "Bài 6-8: Lưu trữ trực tuyến, tìm kiếm nâng cao và giao dịch số",
            "chapter": "Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
            "summary": "Cloud Drive, toán tử tìm kiếm.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b7",
            "number": 7,
            "title": "Bài 9: Giao tiếp an toàn trên Internet",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa",
            "summary": "Phòng tránh lừa đảo trực tuyến.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b8",
            "number": 8,
            "title": "Bài 10-16: Cơ sở dữ liệu, Hệ quản trị CSDL và CSDL quan hệ (MySQL/Access)",
            "chapter": "Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu",
            "summary": "Bảng, khóa chính, khóa ngoài, truy vấn SQL cơ bản.",
            "questions": []
          },
          {
            "id": "tinhoc-11-b9",
            "number": 9,
            "title": "Bài 17-25: Thiết kế thuật toán, đệ quy, chia để trị và chỉnh sửa ảnh/video",
            "chapter": "Chủ đề 5: Giải quyết vấn đề (Khoa học máy tính / Tin học ứng dụng)",
            "summary": "Thuật toán tìm kiếm, sắp xếp hiệu quả.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-11",
        "name": "Công nghệ (Cơ khí)",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-11-b1",
            "number": 1,
            "title": "Bài 1-5: Giới thiệu cơ khí chế tạo và Vật liệu cơ khí",
            "chapter": "Phần I: Cơ khí chế tạo",
            "summary": "Thép, gang, hợp kim nhôm, đồng, composite.",
            "questions": []
          },
          {
            "id": "congnghe-11-b2",
            "number": 2,
            "title": "Bài 6-10: Các phương pháp gia công cơ khí và sản xuất cơ khí",
            "chapter": "Phần I: Cơ khí chế tạo",
            "summary": "Đúc, hàn, tiện, phay, khoan, tự động hóa.",
            "questions": []
          },
          {
            "id": "congnghe-11-b3",
            "number": 3,
            "title": "Bài 11-15: Động cơ đốt trong (4 kì, 2 kì)",
            "chapter": "Phần II: Cơ khí động lực",
            "summary": "Nguyên lí nạp - nén - nổ - xả và các hệ thống động cơ.",
            "questions": []
          },
          {
            "id": "congnghe-11-b4",
            "number": 4,
            "title": "Bài 16-20: Ô tô và hệ thống truyền lực",
            "chapter": "Phần II: Cơ khí động lực",
            "summary": "Li hợp, hộp số, hệ thống phanh, lái, treo.",
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
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "Mô hình động học phân tử và sự nóng chảy, hóa hơi.",
            "questions": []
          },
          {
            "id": "vatli-12-b2",
            "number": 2,
            "title": "Bài 2: Nội năng. Định luật 1 của nhiệt động lực học",
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "ΔU = A + Q và quy ước dấu.",
            "questions": []
          },
          {
            "id": "vatli-12-b3",
            "number": 3,
            "title": "Bài 3: Nhiệt độ. Thang nhiệt độ - Nhiệt kế",
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "Thang Celsius (°C) và thang Kelvin (K): T(K) = t(°C) + 273.",
            "questions": []
          },
          {
            "id": "vatli-12-b4",
            "number": 4,
            "title": "Bài 4: Nhiệt dung riêng",
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "Q = mcΔT.",
            "questions": []
          },
          {
            "id": "vatli-12-b5",
            "number": 5,
            "title": "Bài 5: Nhiệt nóng chảy riêng",
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "Q = λm.",
            "questions": []
          },
          {
            "id": "vatli-12-b6",
            "number": 6,
            "title": "Bài 6: Nhiệt hóa hơi riêng",
            "chapter": "Chương I: Vật lí nhiệt",
            "summary": "Q = Lm.",
            "questions": []
          },
          {
            "id": "vatli-12-b7",
            "number": 7,
            "title": "Bài 8: Mô hình động học phân tử chất khí",
            "chapter": "Chương II: Khí lí tưởng",
            "summary": "Đặc điểm khí lí tưởng.",
            "questions": []
          },
          {
            "id": "vatli-12-b8",
            "number": 8,
            "title": "Bài 9: Định luật Boyle",
            "chapter": "Chương II: Khí lí tưởng",
            "summary": "Quá trình đẳng nhiệt p₁V₁ = p₂V₂.",
            "questions": []
          },
          {
            "id": "vatli-12-b9",
            "number": 9,
            "title": "Bài 10: Định luật Charles",
            "chapter": "Chương II: Khí lí tưởng",
            "summary": "Quá trình đẳng áp V₁/T₁ = V₂/T₂.",
            "questions": []
          },
          {
            "id": "vatli-12-b10",
            "number": 10,
            "title": "Bài 11: Phương trình trạng thái của khí lí tưởng",
            "chapter": "Chương II: Khí lí tưởng",
            "summary": "pV/T = const và pV = nRT.",
            "questions": []
          },
          {
            "id": "vatli-12-b11",
            "number": 11,
            "title": "Bài 12: Áp suất khí theo mô hình động học phân tử. Quan hệ giữa động năng phân tử và nhiệt độ",
            "chapter": "Chương II: Khí lí tưởng",
            "summary": "p = (1/3)μmv² và W_đ = (3/2)kT.",
            "questions": []
          },
          {
            "id": "vatli-12-b12",
            "number": 12,
            "title": "Bài 14: Từ trường",
            "chapter": "Chương III: Từ trường",
            "summary": "Đường sức từ và từ trường đều.",
            "questions": []
          },
          {
            "id": "vatli-12-b13",
            "number": 13,
            "title": "Bài 15: Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ",
            "chapter": "Chương III: Từ trường",
            "summary": "F = BILsinα và quy tắc bàn tay trái.",
            "questions": []
          },
          {
            "id": "vatli-12-b14",
            "number": 14,
            "title": "Bài 16: Từ thông. Hiện tượng cảm ứng điện từ",
            "chapter": "Chương III: Từ trường",
            "summary": "Φ = BScosα và định luật Faraday e = -ΔΦ/Δt.",
            "questions": []
          },
          {
            "id": "vatli-12-b15",
            "number": 15,
            "title": "Bài 17: Máy phát điện xoay chiều",
            "chapter": "Chương III: Từ trường",
            "summary": "Dòng điện xoay chiều và giá trị hiệu dụng I = I₀/√2.",
            "questions": []
          },
          {
            "id": "vatli-12-b16",
            "number": 16,
            "title": "Bài 18: Ứng dụng hiện tượng cảm ứng điện từ",
            "chapter": "Chương III: Từ trường",
            "summary": "Máy biến áp U₁/U₂ = N₁/N₂ và đàn ghi-ta điện.",
            "questions": []
          },
          {
            "id": "vatli-12-b17",
            "number": 17,
            "title": "Bài 19: Điện từ trường. Mô hình sóng điện từ",
            "chapter": "Chương III: Từ trường",
            "summary": "Điện trường biến thiên và từ trường biến thiên.",
            "questions": []
          },
          {
            "id": "vatli-12-b18",
            "number": 18,
            "title": "Bài 21: Cấu trúc hạt nhân",
            "chapter": "Chương IV: Vật lí hạt nhân",
            "summary": "Số proton Z, số nucleon A, bán kính hạt nhân.",
            "questions": []
          },
          {
            "id": "vatli-12-b19",
            "number": 19,
            "title": "Bài 22: Phản ứng hạt nhân và năng lượng liên kết",
            "chapter": "Chương IV: Vật lí hạt nhân",
            "summary": "Độ hụt khối Δm, W_lk = Δmc², phân hạch, nhiệt hạch.",
            "questions": []
          },
          {
            "id": "vatli-12-b20",
            "number": 20,
            "title": "Bài 23: Hiện tượng phóng xạ",
            "chapter": "Chương IV: Vật lí hạt nhân",
            "summary": "Tia α, β⁻, β⁺, γ và N = N₀·2^(-t/T).",
            "questions": []
          },
          {
            "id": "vatli-12-b21",
            "number": 21,
            "title": "Bài 24: Công nghiệp hạt nhân",
            "chapter": "Chương IV: Vật lí hạt nhân",
            "summary": "Nhà máy điện hạt nhân và y học hạt nhân.",
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
            "summary": "Danh pháp, thủy phân ester và chất béo (xà phòng hóa).",
            "questions": []
          },
          {
            "id": "hoahoc-12-b2",
            "number": 2,
            "title": "Bài 2: Xà phòng và chất giặt rửa",
            "chapter": "Chương 1: Ester - Lipid",
            "summary": "Cấu tạo và cơ chế giặt rửa.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b3",
            "number": 3,
            "title": "Bài 4: Giới thiệu về carbohydrate. Glucose và fructose",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Phản ứng với Cu(OH)₂, thuốc thử Tollens, nước Br₂.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b4",
            "number": 4,
            "title": "Bài 5: Saccharose và maltose",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Phản ứng thủy phân và Cu(OH)₂.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b5",
            "number": 5,
            "title": "Bài 6: Tinh bột và cellulose",
            "chapter": "Chương 2: Carbohydrate",
            "summary": "Amylose, amylopectin, cellulose và phản ứng iodine.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b6",
            "number": 6,
            "title": "Bài 8: Amine",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Bậc amine, tính base và phản ứng với HNO₂, Br₂ (aniline).",
            "questions": []
          },
          {
            "id": "hoahoc-12-b7",
            "number": 7,
            "title": "Bài 9: Amino acid và peptide",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Tính lưỡng tính, điểm đẳng điện, phản ứng màu biuret.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b8",
            "number": 8,
            "title": "Bài 10: Protein và enzyme",
            "chapter": "Chương 3: Hợp chất chứa nitrogen",
            "summary": "Sự đông tụ, thủy phân và xúc tác enzyme.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b9",
            "number": 9,
            "title": "Bài 12: Đại cương về polymer",
            "chapter": "Chương 4: Polymer",
            "summary": "Trùng hợp, trùng ngưng và tính chất.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b10",
            "number": 10,
            "title": "Bài 13: Vật liệu polymer",
            "chapter": "Chương 4: Polymer",
            "summary": "Chất dẻo, tơ, cao su, vật liệu composite.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b11",
            "number": 11,
            "title": "Bài 15: Thế điện cực và nguồn điện hóa học",
            "chapter": "Chương 5: Pin điện và điện phân",
            "summary": "Cặp oxi hóa - khử và E°_pin = E°_cathode - E°_anode.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b12",
            "number": 12,
            "title": "Bài 16: Điện phân",
            "chapter": "Chương 5: Pin điện và điện phân",
            "summary": "Điện phân nóng chảy và dung dịch.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b13",
            "number": 13,
            "title": "Bài 18: Cấu tạo và liên kết trong tinh thể kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Liên kết kim loại và tính chất vật lí chung.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b14",
            "number": 14,
            "title": "Bài 19: Tính chất vật lí và tính chất hóa học của kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Tính khử của kim loại.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b15",
            "number": 15,
            "title": "Bài 20: Kim loại trong tự nhiên và phương pháp tách kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Thủy luyện, nhiệt luyện, điện phân.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b16",
            "number": 16,
            "title": "Bài 21: Hợp kim",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Gang, thép, hợp kim nhôm.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b17",
            "number": 17,
            "title": "Bài 22: Sự ăn mòn kim loại",
            "chapter": "Chương 6: Đại cương về kim loại",
            "summary": "Ăn mòn hóa học, ăn mòn điện hóa và bảo vệ kim loại.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b18",
            "number": 18,
            "title": "Bài 24: Nguyên tố nhóm IA",
            "chapter": "Chương 7: Nguyên tố nhóm IA và nhóm IIA",
            "summary": "Kim loại kiềm và hợp chất NaOH, Na₂CO₃, NaHCO₃.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b19",
            "number": 19,
            "title": "Bài 25: Nguyên tố nhóm IIA",
            "chapter": "Chương 7: Nguyên tố nhóm IA và nhóm IIA",
            "summary": "Kim loại kiềm thổ và nước cứng.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b20",
            "number": 20,
            "title": "Bài 27: Đại cương về kim loại chuyển tiếp dãy thứ nhất",
            "chapter": "Chương 8: Kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Số oxi hóa, màu sắc ion và chuẩn độ Fe²⁺ bằng KMnO₄.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b21",
            "number": 21,
            "title": "Bài 28: Sơ lược về phức chất",
            "chapter": "Chương 8: Kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Nguyên tử trung tâm và phối tử.",
            "questions": []
          },
          {
            "id": "hoahoc-12-b22",
            "number": 22,
            "title": "Bài 29: Một số tính chất và ứng dụng của phức chất",
            "chapter": "Chương 8: Kim loại chuyển tiếp dãy thứ nhất và phức chất",
            "summary": "Phản ứng thế phối tử và ứng dụng.",
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
            "summary": "Cấu trúc DNA và nhân đôi bán bảo toàn.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b2",
            "number": 2,
            "title": "Bài 2: Gene, quá trình truyền đạt thông tin di truyền và hệ gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Phiên mã, mã di truyền, dịch mã.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b3",
            "number": 3,
            "title": "Bài 3: Điều hòa biểu hiện gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Mô hình Operon lac ở E. coli.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b4",
            "number": 4,
            "title": "Bài 4: Đột biến gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "Đột biến điểm và nguyên nhân.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b5",
            "number": 5,
            "title": "Bài 5: Công nghệ gene",
            "chapter": "Chương 1: Di truyền phân tử",
            "summary": "DNA tái tổ hợp và sinh vật biến đổi gene.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b6",
            "number": 6,
            "title": "Bài 7: Cấu trúc và chức năng của nhiễm sắc thể",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Nucleosome và các bậc xoắn NST.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b7",
            "number": 7,
            "title": "Bài 8: Học thuyết di truyền của Mendel",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Phân li và phân li độc lập.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b8",
            "number": 8,
            "title": "Bài 9: Mở rộng học thuyết Mendel",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Tương tác gene và tính đa hiệu của gene.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b9",
            "number": 9,
            "title": "Bài 10: Di truyền giới tính và di truyền liên kết với giới tính",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Gene trên NST X, Y.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b10",
            "number": 10,
            "title": "Bài 11: Liên kết gene và hoán vị gene",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Tần số hoán vị gene f ≤ 50%.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b11",
            "number": 11,
            "title": "Bài 12: Đột biến nhiễm sắc thể",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Đột biến cấu trúc và số lượng NST.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b12",
            "number": 12,
            "title": "Bài 13: Di truyền học người và di truyền y học",
            "chapter": "Chương 2: Di truyền nhiễm sắc thể",
            "summary": "Phả hệ và tư vấn di truyền.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b13",
            "number": 13,
            "title": "Bài 16: Di truyền quần thể",
            "chapter": "Chương 3: Di truyền quần thể",
            "summary": "Tần số allele, kiểu gene và định luật Hardy - Weinberg.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b14",
            "number": 14,
            "title": "Bài 19: Các bằng chứng tiến hóa",
            "chapter": "Chương 4: Tiến hóa",
            "summary": "Giải phẫu so sánh, hóa thạch, sinh học phân tử.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b15",
            "number": 15,
            "title": "Bài 20: Quan niệm của Darwin về chọn lọc tự nhiên và hình thành loài",
            "chapter": "Chương 4: Tiến hóa",
            "summary": "Chọn lọc tự nhiên.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b16",
            "number": 16,
            "title": "Bài 21: Học thuyết tiến hóa tổng hợp hiện đại",
            "chapter": "Chương 4: Tiến hóa",
            "summary": "5 nhân tố tiến hóa.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b17",
            "number": 17,
            "title": "Bài 22: Tiến hóa lớn và quá trình phát sinh chủng loại",
            "chapter": "Chương 4: Tiến hóa",
            "summary": "Hình thành loài mới.",
            "questions": []
          },
          {
            "id": "sinhhoc-12-b18",
            "number": 18,
            "title": "Bài 25-31: Môi trường, Quần thể, Quần xã và Hệ sinh thái",
            "chapter": "Chương 5-7: Sinh thái học",
            "summary": "Ổ sinh thái, chuỗi thức ăn, diễn thế sinh thái, bảo tồn đa dạng sinh học.",
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
            "summary": "Nghệ thuật trào phúng và góc nhìn hiện đại.",
            "questions": []
          },
          {
            "id": "nguvan-12-b2",
            "number": 2,
            "title": "Cảm hoài (Đặng Dung) & Tây Tiến (Quang Dũng)",
            "chapter": "Bài 2: Những thế giới thơ",
            "summary": "Hào khí anh hùng và chất lãng mạn bi tráng.",
            "questions": []
          },
          {
            "id": "nguvan-12-b3",
            "number": 3,
            "title": "Nhìn về vốn văn hóa dân tộc (Trần Đình Hượu)",
            "chapter": "Bài 3: Lập luận trong văn bản nghị luận",
            "summary": "Nghệ thuật lập luận chặt chẽ.",
            "questions": []
          },
          {
            "id": "nguvan-12-b4",
            "number": 4,
            "title": "Hải khẩu linh từ & Muối của rừng (Nguyễn Huy Thiệp)",
            "chapter": "Bài 4: Yếu tố kì ảo trong truyện kể",
            "summary": "Yếu tố kì ảo phản ánh hiện thực.",
            "questions": []
          },
          {
            "id": "nguvan-12-b5",
            "number": 5,
            "title": "Nhân vật quan trọng (Gô-gôn) & Giấu của",
            "chapter": "Bài 5: Tiếng cười của hài kịch",
            "summary": "Tình huống và ngôn ngữ hài kịch.",
            "questions": []
          },
          {
            "id": "nguvan-12-b6",
            "number": 6,
            "title": "Tuyên ngôn Độc lập & Nhật kí trong tù",
            "chapter": "Bài 6: Hồ Chí Minh - 'Văn hóa phải soi đường cho quốc dân đi'",
            "summary": "Văn chính luận và thơ Hồ Chí Minh.",
            "questions": []
          },
          {
            "id": "nguvan-12-b7",
            "number": 7,
            "title": "Nghệ thuật băm thịt gà (Ngô Tất Tố) & Bước vào đời",
            "chapter": "Bài 7: Sự thật trong tác phẩm kí",
            "summary": "Tính xác thực trong phóng sự, hồi kí.",
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
            "title": "Bài 1: Liên hợp quốc",
            "chapter": "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
            "summary": "Sự thành lập, mục tiêu, nguyên tắc và vai trò của LHQ.",
            "questions": []
          },
          {
            "id": "lichsu-12-b2",
            "number": 2,
            "title": "Bài 2: Trật tự thế giới trong Chiến tranh lạnh",
            "chapter": "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
            "summary": "Trật tự hai cực I-an-ta (1945 - 1991).",
            "questions": []
          },
          {
            "id": "lichsu-12-b3",
            "number": 3,
            "title": "Bài 3: Trật tự thế giới sau Chiến tranh lạnh",
            "chapter": "Chủ đề 1: Thế giới trong và sau Chiến tranh lạnh",
            "summary": "Xu thế đa cực.",
            "questions": []
          },
          {
            "id": "lichsu-12-b4",
            "number": 4,
            "title": "Bài 4: Sự ra đời và phát triển của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
            "chapter": "Chủ đề 2: ASEAN: Những chặng đường lịch sử",
            "summary": "Thành lập 1967, Việt Nam gia nhập 1995.",
            "questions": []
          },
          {
            "id": "lichsu-12-b5",
            "number": 5,
            "title": "Bài 5: Cộng đồng ASEAN: Từ ý tưởng đến hiện thực",
            "chapter": "Chủ đề 2: ASEAN: Những chặng đường lịch sử",
            "summary": "3 trụ cột Cộng đồng ASEAN 2015.",
            "questions": []
          },
          {
            "id": "lichsu-12-b6",
            "number": 6,
            "title": "Bài 6: Cách mạng tháng Tám năm 1945",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám 1945, chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc",
            "summary": "Bối cảnh, diễn biến, ý nghĩa lịch sử.",
            "questions": []
          },
          {
            "id": "lichsu-12-b7",
            "number": 7,
            "title": "Bài 7: Cuộc kháng chiến chống thực dân Pháp (1945 - 1954)",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám 1945, chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc",
            "summary": "Chiến dịch Việt Bắc, Biên giới, Điện Biên Phủ 1954.",
            "questions": []
          },
          {
            "id": "lichsu-12-b8",
            "number": 8,
            "title": "Bài 8: Cuộc kháng chiến chống Mỹ, cứu nước (1954 - 1975)",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám 1945, chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc",
            "summary": "Đồng khởi, Mậu Thân 1968, Điện Biên Phủ trên không 1972, Chiến dịch Hồ Chí Minh 1975.",
            "questions": []
          },
          {
            "id": "lichsu-12-b9",
            "number": 9,
            "title": "Bài 9: Cuộc đấu tranh bảo vệ Tổ quốc từ sau tháng 4 năm 1975 đến nay",
            "chapter": "Chủ đề 3: Cách mạng tháng Tám 1945, chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc",
            "summary": "Bảo vệ biên giới Tây Nam, phía Bắc và chủ quyền biển đảo.",
            "questions": []
          },
          {
            "id": "lichsu-12-b10",
            "number": 10,
            "title": "Bài 10: Khái quát về công cuộc Đổi mới từ năm 1986 đến nay",
            "chapter": "Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
            "summary": "Đường lối Đổi mới từ Đại hội VI (1986).",
            "questions": []
          },
          {
            "id": "lichsu-12-b11",
            "number": 11,
            "title": "Bài 11: Thành tựu cơ bản và bài học của công cuộc Đổi mới ở Việt Nam",
            "chapter": "Chủ đề 4: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
            "summary": "Thành tựu kinh tế, chính trị, xã hội, hội nhập.",
            "questions": []
          },
          {
            "id": "lichsu-12-b12",
            "number": 12,
            "title": "Bài 12: Hoạt động đối ngoại của Việt Nam trong đấu tranh giành độc lập dân tộc (đầu thế kỉ XX đến CMT8 1945)",
            "chapter": "Chủ đề 5: Lịch sử đối ngoại của Việt Nam thời cận - hiện đại",
            "summary": "Hoạt động đối ngoại của Phan Bội Châu, Nguyễn Ái Quốc.",
            "questions": []
          },
          {
            "id": "lichsu-12-b13",
            "number": 13,
            "title": "Bài 13: Hoạt động đối ngoại của Việt Nam trong kháng chiến chống Pháp (1945 - 1954) và chống Mỹ (1954 - 1975)",
            "chapter": "Chủ đề 5: Lịch sử đối ngoại của Việt Nam thời cận - hiện đại",
            "summary": "Hiệp định Sơ bộ 1946, Giơ-ne-vơ 1954, Pa-ri 1973.",
            "questions": []
          },
          {
            "id": "lichsu-12-b14",
            "number": 14,
            "title": "Bài 14: Hoạt động đối ngoại của Việt Nam từ năm 1975 đến nay",
            "chapter": "Chủ đề 5: Lịch sử đối ngoại của Việt Nam thời cận - hiện đại",
            "summary": "Đa phương hóa, đa dạng hóa quan hệ quốc tế.",
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
            "summary": "Ý nghĩa tự nhiên, kinh tế, quốc phòng.",
            "questions": []
          },
          {
            "id": "diali-12-b2",
            "number": 2,
            "title": "Bài 2: Thiên nhiên nhiệt đới ẩm gió mùa",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Khí hậu, địa hình, sông ngòi, đất, sinh vật.",
            "questions": []
          },
          {
            "id": "diali-12-b3",
            "number": 3,
            "title": "Bài 3: Sự phân hóa đa dạng của thiên nhiên",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Phân hóa Bắc - Nam, Đông - Tây, theo đai cao.",
            "questions": []
          },
          {
            "id": "diali-12-b4",
            "number": 4,
            "title": "Bài 5: Vấn đề sử dụng hợp lí tài nguyên thiên nhiên và bảo vệ môi trường",
            "chapter": "Phần 1: Địa lí tự nhiên",
            "summary": "Bảo vệ đa dạng sinh học và môi trường.",
            "questions": []
          },
          {
            "id": "diali-12-b5",
            "number": 5,
            "title": "Bài 6: Dân số Việt Nam",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Quy mô, cơ cấu dân số vàng và phân bố.",
            "questions": []
          },
          {
            "id": "diali-12-b6",
            "number": 6,
            "title": "Bài 7: Lao động và việc làm",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Nguồn lao động dồi dào, cơ cấu lao động.",
            "questions": []
          },
          {
            "id": "diali-12-b7",
            "number": 7,
            "title": "Bài 8: Đô thị hóa",
            "chapter": "Phần 2: Địa lí dân cư",
            "summary": "Quá trình đô thị hóa và mạng lưới đô thị.",
            "questions": []
          },
          {
            "id": "diali-12-b8",
            "number": 8,
            "title": "Bài 9: Chuyển dịch cơ cấu kinh tế",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Chuyển dịch theo ngành, thành phần, lãnh thổ.",
            "questions": []
          },
          {
            "id": "diali-12-b9",
            "number": 9,
            "title": "Bài 10: Vấn đề phát triển nông nghiệp, lâm nghiệp và thủy sản",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Nông nghiệp xanh, bền vững.",
            "questions": []
          },
          {
            "id": "diali-12-b10",
            "number": 10,
            "title": "Bài 13: Vấn đề phát triển công nghiệp",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Cơ cấu công nghiệp và công nghiệp trọng điểm.",
            "questions": []
          },
          {
            "id": "diali-12-b11",
            "number": 11,
            "title": "Bài 16: Giao thông vận tải và bưu chính viễn thông",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Mạng lưới giao thông và viễn thông.",
            "questions": []
          },
          {
            "id": "diali-12-b12",
            "number": 12,
            "title": "Bài 17: Thương mại và du lịch",
            "chapter": "Phần 3: Địa lí các ngành kinh tế",
            "summary": "Nội thương, ngoại thương và du lịch.",
            "questions": []
          },
          {
            "id": "diali-12-b13",
            "number": 13,
            "title": "Bài 21: Khai thác thế mạnh ở Trung du và miền núi Bắc Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Thủy điện, khoáng sản, cây công nghiệp.",
            "questions": []
          },
          {
            "id": "diali-12-b14",
            "number": 14,
            "title": "Bài 22: Phát triển kinh tế - xã hội ở Đồng bằng sông Hồng",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Vùng kinh tế trọng điểm Bắc Bộ.",
            "questions": []
          },
          {
            "id": "diali-12-b15",
            "number": 15,
            "title": "Bài 23: Phát triển nông nghiệp, lâm nghiệp và thủy sản ở Bắc Trung Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Cơ cấu nông-lâm-ngư nghiệp.",
            "questions": []
          },
          {
            "id": "diali-12-b16",
            "number": 16,
            "title": "Bài 24: Phát triển kinh tế biển ở Duyên hải Nam Trung Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Đánh bắt hải sản, cảng biển, du lịch.",
            "questions": []
          },
          {
            "id": "diali-12-b17",
            "number": 17,
            "title": "Bài 25: Khai thác thế mạnh để phát triển kinh tế ở Tây Nguyên",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Cây công nghiệp lâu năm, thủy điện.",
            "questions": []
          },
          {
            "id": "diali-12-b18",
            "number": 18,
            "title": "Bài 26: Phát triển kinh tế - xã hội ở Đông Nam Bộ",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Đầu tàu kinh tế cả nước.",
            "questions": []
          },
          {
            "id": "diali-12-b19",
            "number": 19,
            "title": "Bài 27: Sử dụng hợp lí tự nhiên để phát triển kinh tế ở Đồng bằng sông Cửu Long",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Thích ứng biến đổi khí hậu và xâm nhập mặn.",
            "questions": []
          },
          {
            "id": "diali-12-b20",
            "number": 20,
            "title": "Bài 29: Phát triển các vùng kinh tế trọng điểm & Phát triển kinh tế gắn với bảo vệ chủ quyền biển đảo",
            "chapter": "Phần 4: Địa lí các vùng kinh tế - xã hội",
            "summary": "Chiến lược biển Việt Nam.",
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
            "summary": "Khái niệm AI, AI hẹp và AI tổng quát.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b2",
            "number": 2,
            "title": "Bài 2: Trí tuệ nhân tạo trong khoa học và đời sống",
            "chapter": "Chủ đề 1: Máy tính và xã hội tri thức",
            "summary": "Ứng dụng và cảnh báo rủi ro AI.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b3",
            "number": 3,
            "title": "Bài 3: Một số thiết bị mạng thông dụng",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Hub, Switch, Router, Modem, Access Point.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b4",
            "number": 4,
            "title": "Bài 4: Giao thức mạng",
            "chapter": "Chủ đề 2: Mạng máy tính và Internet",
            "summary": "Giao thức TCP/IP và địa chỉ IP.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b5",
            "number": 5,
            "title": "Bài 6: Giao tiếp và ứng xử trong không gian mạng",
            "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa",
            "summary": "Tính nhân văn trong không gian mạng.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b6",
            "number": 6,
            "title": "Bài 7-12: HTML, liên kết, danh sách, bảng, biểu mẫu (Form) và đa phương tiện",
            "chapter": "Chủ đề 4: Tạo trang web (HTML & CSS)",
            "summary": "Cấu trúc trang web HTML5.",
            "questions": []
          },
          {
            "id": "tinhoc-12-b7",
            "number": 7,
            "title": "Bài 13-18: Định dạng trang web với CSS (Bộ chọn, Box Model, Bố cục)",
            "chapter": "Chủ đề 4: Tạo trang web (HTML & CSS)",
            "summary": "Thiết kế giao diện web bằng CSS.",
            "questions": []
          }
        ]
      },
      {
        "id": "congnghe-12",
        "name": "Công nghệ (Điện - Điện tử)",
        "icon": "🛠️",
        "lessons": [
          {
            "id": "congnghe-12-b1",
            "number": 1,
            "title": "Bài 1: Vai trò và triển vọng phát triển của ngành kĩ thuật điện tử",
            "chapter": "Phần một: Kĩ thuật điện tử",
            "summary": "Ứng dụng điện tử trong công nghiệp và đời sống.",
            "questions": []
          },
          {
            "id": "congnghe-12-b2",
            "number": 2,
            "title": "Bài 2-5: Linh kiện điện tử (Điện trở, Tụ điện, Cuộn cảm, Diode, Transistor, IC)",
            "chapter": "Phần một: Kĩ thuật điện tử",
            "summary": "Kí hiệu, thông số và công dụng linh kiện.",
            "questions": []
          },
          {
            "id": "congnghe-12-b3",
            "number": 3,
            "title": "Bài 6-10: Mạch khuếch đại, mạch tạo xung, mạch chỉnh lưu và mạch điện tử số (cổng logic)",
            "chapter": "Phần một: Kĩ thuật điện tử",
            "summary": "Cổng AND, OR, NOT, NAND, NOR.",
            "questions": []
          },
          {
            "id": "congnghe-12-b4",
            "number": 4,
            "title": "Bài 11-16: Mạch điện xoay chiều ba pha, Máy biến áp ba pha, Động cơ không đồng bộ ba pha",
            "chapter": "Phần hai: Kĩ thuật điện",
            "summary": "Nối hình sao (Y) và hình tam giác (Δ).",
            "questions": []
          },
          {
            "id": "congnghe-12-b5",
            "number": 5,
            "title": "Bài 17-20: Mạng điện hạ áp trong gia đình và An toàn điện",
            "chapter": "Phần hai: Kĩ thuật điện",
            "summary": "Sơ đồ mạng điện sinh hoạt và phòng chống tai nạn điện.",
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

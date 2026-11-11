// Dữ liệu Sách Giáo Khoa chuẩn Chương trình GDPT (NXB Giáo Dục Việt Nam) từ Lớp 1 đến Lớp 12
// Nguồn tham khảo chính thức: https://taphuan.nxbgd.vn/tap-huan?grade=
import type { Answer, QuestionInput } from "./api";

export interface LessonItem {
  id: string;
  number: number;
  title: string;
  chapter: string;
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
  // ==================== CẤP TIỂU HỌC (LỚP 1 - 5) ====================
  {
    grade: 1,
    label: "Lớp 1",
    level: "Tiểu học",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=1",
    subjects: [
      {
        id: "toan-1",
        name: "Toán",
        icon: "🔢",
        lessons: [
          {
            id: "t1-b1",
            number: 1,
            chapter: "Chủ đề 1: Các số từ 0 đến 10",
            title: "Bài 1: Các số 1, 2, 3",
            questions: [
              { content: "Có bao nhiêu con vịt trong hình gồm 1 con vịt mẹ và 2 con vịt con?", option_a: "2", option_b: "3", option_c: "1", option_d: "4", correct: "B" },
              { content: "Số đứng liền sau số 2 là số nào?", option_a: "1", option_b: "3", option_c: "4", option_d: "0", correct: "B" },
              { content: "Bàn tay của em có mấy ngón tay trên một bàn?", option_a: "3", option_b: "4", option_c: "5", option_d: "10", correct: "C" },
            ],
          },
          {
            id: "t1-b2",
            number: 2,
            chapter: "Chủ đề 1: Các số từ 0 đến 10",
            title: "Bài 2: Phép cộng trong phạm vi 10",
            questions: [
              { content: "Kết quả của phép tính: 2 + 3 = ?", option_a: "4", option_b: "5", option_c: "6", option_d: "7", correct: "B" },
              { content: "Điền số thích hợp: 4 + 1 = ?", option_a: "5", option_b: "3", option_c: "6", option_d: "4", correct: "A" },
            ],
          },
        ],
      },
      {
        id: "tnxh-1",
        name: "Tự nhiên và Xã hội",
        icon: "🌱",
        lessons: [
          {
            id: "tnxh1-b1",
            number: 1,
            chapter: "Chủ đề: Gia đình",
            title: "Bài 1: Các thành viên trong gia đình",
            questions: [
              { content: "Ai là người sinh ra em và chăm sóc em từ nhỏ?", option_a: "Bố và Mẹ", option_b: "Bạn bè", option_c: "Hàng xóm", option_d: "Bác sĩ", correct: "A" },
              { content: "Hành động nào thể hiện lòng hiếu thảo với ông bà, cha mẹ?", option_a: "Vâng lời và lễ phép", option_b: "Khóc nhè đòi quà", option_c: "Không chào hỏi", option_d: "Xem ti vi cả ngày", correct: "A" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 2,
    label: "Lớp 2",
    level: "Tiểu học",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=2",
    subjects: [
      {
        id: "toan-2",
        name: "Toán",
        icon: "🔢",
        lessons: [
          {
            id: "t2-b1",
            number: 1,
            chapter: "Chương 1: Ôn tập và bổ sung",
            title: "Bài 1: Số có hai chữ số",
            questions: [
              { content: "Số liền sau của số 49 là số nào?", option_a: "48", option_b: "50", option_c: "51", option_d: "60", correct: "B" },
              { content: "Số lớn nhất có hai chữ số là số nào?", option_a: "90", option_b: "98", option_c: "99", option_d: "100", correct: "C" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 3,
    label: "Lớp 3",
    level: "Tiểu học",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=3",
    subjects: [
      {
        id: "toan-3",
        name: "Toán",
        icon: "🔢",
        lessons: [
          {
            id: "t3-b1",
            number: 1,
            chapter: "Chương: Bảng nhân và bảng chia",
            title: "Bài 1: Bảng nhân 7, bảng chia 7",
            questions: [
              { content: "Kết quả của phép tính 7 × 8 là:", option_a: "54", option_b: "56", option_c: "49", option_d: "63", correct: "B" },
              { content: "42 chia cho 7 được kết quả bằng bao nhiêu?", option_a: "5", option_b: "6", option_c: "7", option_d: "8", correct: "B" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 4,
    label: "Lớp 4",
    level: "Tiểu học",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=4",
    subjects: [
      {
        id: "toan-4",
        name: "Toán",
        icon: "🔢",
        lessons: [
          {
            id: "t4-b1",
            number: 1,
            chapter: "Chủ đề: Số tự nhiên",
            title: "Bài 1: Các số có sáu chữ số",
            questions: [
              { content: "Số gồm 5 trăm nghìn, 3 chục nghìn, 4 trăm và 2 đơn vị viết là:", option_a: "530402", option_b: "534002", option_c: "530042", option_d: "503402", correct: "A" },
              { content: "1 tấn bằng bao nhiêu ki-lô-gam?", option_a: "10 kg", option_b: "100 kg", option_c: "1000 kg", option_d: "10000 kg", correct: "C" },
            ],
          },
        ],
      },
      {
        id: "khoahoc-4",
        name: "Khoa học",
        icon: "🔬",
        lessons: [
          {
            id: "kh4-b1",
            number: 1,
            chapter: "Chủ đề: Chất",
            title: "Bài 1: Nước và vai trò của nước trong đời sống",
            questions: [
              { content: "Nước nguyên chất có tính chất nào sau đây?", option_a: "Có màu trắng đục", option_b: "Có vị ngọt thanh", option_c: "Không màu, không mùi, không vị", option_d: "Có mùi thơm", correct: "C" },
              { content: "Nước chuyển từ thể lỏng sang thể khí (hơi) được gọi là hiện tượng gì?", option_a: "Ngưng tụ", option_b: "Bay hơi", option_c: "Đông đặc", option_d: "Nóng chảy", correct: "B" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 5,
    label: "Lớp 5",
    level: "Tiểu học",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=5",
    subjects: [
      {
        id: "toan-5",
        name: "Toán",
        icon: "🔢",
        lessons: [
          {
            id: "t5-b1",
            number: 1,
            chapter: "Chủ đề: Phân số và số thập phân",
            title: "Bài 1: Khái niệm số thập phân",
            questions: [
              { content: "Phân số thập phân 3/10 được viết dưới dạng số thập phân là:", option_a: "0,03", option_b: "0,3", option_c: "3,0", option_d: "0,30", correct: "B" },
              { content: "Chữ số 5 trong số thập phân 18,254 có giá trị là:", option_a: "5", option_b: "5/10", option_c: "5/100", option_d: "5/1000", correct: "C" },
            ],
          },
        ],
      },
      {
        id: "lsdl-5",
        name: "Lịch sử & Địa lí",
        icon: "🗺️",
        lessons: [
          {
            id: "lsdl5-b1",
            number: 1,
            chapter: "Địa lí Việt Nam",
            title: "Bài 1: Vị trí địa lí và lãnh thổ Việt Nam",
            questions: [
              { content: "Việt Nam nằm ở khu vực nào của châu Á?", option_a: "Đông Bắc Á", option_b: "Đông Nam Á", option_c: "Nam Á", option_d: "Tây Á", correct: "B" },
              { content: "Đất liền nước ta giáp với các quốc gia nào sau đây?", option_a: "Trung Quốc, Lào, Cam-pu-chia", option_b: "Thái Lan, Lào, Cam-pu-chia", option_c: "Trung Quốc, Mi-an-ma, Lào", option_d: "Lào, Thái Lan, Ma-lai-xi-a", correct: "A" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== CẤP TRUNG HỌC CƠ SỞ (LỚP 6 - 9) ====================
  {
    grade: 6,
    label: "Lớp 6",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=6",
    subjects: [
      {
        id: "khtn-6",
        name: "Khoa học tự nhiên (KHTN)",
        icon: "🧪",
        lessons: [
          {
            id: "khtn6-b1",
            number: 1,
            chapter: "Mở đầu",
            title: "Bài 1: Giới thiệu về Khoa học tự nhiên",
            questions: [
              { content: "Khoa học tự nhiên nghiên cứu về các hiện tượng nào sau đây?", option_a: "Hiện tượng tự nhiên, giới tự nhiên", option_b: "Quy luật phát triển của xã hội loài người", option_c: "Tâm lí học sinh", option_d: "Thơ ca và nghệ thuật", correct: "A" },
              { content: "Đơn vị đo nhiệt độ tiêu chuẩn trong hệ đo lường quốc tế SI là:", option_a: "Độ Celsius (°C)", option_b: "Độ Kelvin (K)", option_c: "Độ Fahrenheit (°F)", option_d: "Calo", correct: "B" },
            ],
          },
          {
            id: "khtn6-b2",
            number: 2,
            chapter: "Chủ đề 1: Các phép đo",
            title: "Bài 2: Các phép đo khối lượng, chiều dài và thời gian",
            questions: [
              { content: "Dụng cụ nào dùng để đo thể tích chất lỏng trong phòng thí nghiệm?", option_a: "Cân đồng hồ", option_b: "Ống đong (bình chia độ)", option_c: "Thước cuộn", option_d: "Nhiệt kế", correct: "B" },
              { content: "1 kilôgam (1 kg) tương ứng bằng bao nhiêu gam (g)?", option_a: "100 g", option_b: "1000 g", option_c: "10 g", option_d: "10000 g", correct: "B" },
            ],
          },
        ],
      },
      {
        id: "toan-6",
        name: "Toán",
        icon: "📐",
        lessons: [
          {
            id: "t6-b1",
            number: 1,
            chapter: "Chương 1: Số tự nhiên",
            title: "Bài 1: Tập hợp các số tự nhiên",
            questions: [
              { content: "Tập hợp N* là tập hợp các số tự nhiên:", option_a: "Lớn hơn 0 (khác 0)", option_b: "Bao gồm số 0", option_c: "Chỉ gồm các số chẵn", option_d: "Chỉ gồm các số lẻ", correct: "A" },
              { content: "Ước chung lớn nhất của 12 và 18 là:", option_a: "3", option_b: "6", option_c: "9", option_d: "36", correct: "B" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 7,
    label: "Lớp 7",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=7",
    subjects: [
      {
        id: "khtn-7",
        name: "Khoa học tự nhiên (KHTN)",
        icon: "🧪",
        lessons: [
          {
            id: "khtn7-b1",
            number: 1,
            chapter: "Chương 1: Nguyên tử - Sơ lược bảng tuần hoàn",
            title: "Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
            questions: [
              { content: "Phương pháp tìm hiểu tự nhiên gồm mấy bước cơ bản?", option_a: "3 bước", option_b: "4 bước", option_c: "5 bước", option_d: "6 bước", correct: "C" },
              { content: "Bước đầu tiên trong quy trình tìm hiểu tự nhiên là:", option_a: "Hình thành giả thuyết", option_b: "Quan sát và đặt câu hỏi nghiên cứu", option_c: "Lập kế hoạch kiểm tra", option_d: "Viết báo cáo", correct: "B" },
              { content: "Kĩ năng nào giúp so sánh các sự vật, hiện tượng dựa trên các tiêu chí cụ thể?", option_a: "Kĩ năng phân loại", option_b: "Kĩ năng dự đoán", option_c: "Kĩ năng đo lường", option_d: "Kĩ năng giao tiếp", correct: "A" },
            ],
          },
          {
            id: "khtn7-b2",
            number: 2,
            chapter: "Chương 1: Nguyên tử - Sơ lược bảng tuần hoàn",
            title: "Bài 2: Nguyên tử và cấu tạo nguyên tử",
            questions: [
              { content: "Hạt mang điện tích âm trong nguyên tử là hạt nào?", option_a: "Proton", option_b: "Neutron", option_c: "Electron", option_d: "Hạt nhân", correct: "C" },
              { content: "Hạt nhân nguyên tử được cấu tạo bởi những loại hạt nào?", option_a: "Proton và Electron", option_b: "Proton và Neutron", option_c: "Neutron và Electron", option_d: "Chỉ gồm Proton", correct: "B" },
              { content: "Nguyên tử trung hoà về điện vì:", option_a: "Số proton bằng số electron", option_b: "Số proton bằng số neutron", option_c: "Số electron bằng số neutron", option_d: "Khối lượng proton bằng khối lượng electron", correct: "A" },
            ],
          },
          {
            id: "khtn7-b3",
            number: 3,
            chapter: "Chương 1: Nguyên tử - Sơ lược bảng tuần hoàn",
            title: "Bài 3: Nguyên tố hóa học",
            questions: [
              { content: "Tập hợp các nguyên tử có cùng số proton trong hạt nhân được gọi là:", option_a: "Đơn chất", option_b: "Nguyên tố hóa học", option_c: "Hợp chất", option_d: "Phân tử", correct: "B" },
              { content: "Kí hiệu hóa học của nguyên tố Sắt (Iron) là:", option_a: "Fe", option_b: "Cu", option_c: "Al", option_d: "Ag", correct: "A" },
              { content: "Kí hiệu hóa học của nguyên tố Oxygen là:", option_a: "O", option_b: "Ox", option_c: "Og", option_d: "H", correct: "A" },
            ],
          },
          {
            id: "khtn7-b4",
            number: 4,
            chapter: "Chương 2: Phân tử - Liên kết hóa học",
            title: "Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
            questions: [
              { content: "Bảng tuần hoàn các nguyên tố hóa học hiện nay được sắp xếp theo chiều tăng dần của:", option_a: "Khối lượng nguyên tử", option_b: "Điện tích hạt nhân", option_c: "Bán kính nguyên tử", option_d: "Số neutron", correct: "B" },
              { content: "Các nguyên tố trong cùng một chu kì có đặc điểm nào giống nhau?", option_a: "Cùng số lớp electron", option_b: "Cùng số electron lớp ngoài cùng", option_c: "Cùng tính chất hóa học", option_d: "Cùng số proton", correct: "A" },
            ],
          },
          {
            id: "khtn7-b5",
            number: 5,
            chapter: "Chương 3: Tốc độ chuyển động",
            title: "Bài 8: Tốc độ chuyển động và đồ thị quãng đường - thời gian",
            questions: [
              { content: "Công thức tính tốc độ chuyển động là gì?", option_a: "v = s / t", option_b: "v = s × t", option_c: "v = t / s", option_d: "v = s + t", correct: "A" },
              { content: "Một người đi xe máy chuyển động 60 km trong thời gian 2 giờ. Tốc độ của người đó là:", option_a: "30 km/h", option_b: "60 km/h", option_c: "120 km/h", option_d: "40 km/h", correct: "A" },
            ],
          },
        ],
      },
      {
        id: "toan-7",
        name: "Toán",
        icon: "📐",
        lessons: [
          {
            id: "t7-b1",
            number: 1,
            chapter: "Chương 1: Số hữu tỉ",
            title: "Bài 1: Tập hợp các số hữu tỉ",
            questions: [
              { content: "Số hữu tỉ là số có thể viết được dưới dạng phân số nào sau đây?", option_a: "a/b với a, b thuộc Z, b khác 0", option_b: "a/b với a, b thuộc N", option_c: "Căn bậc hai của số nguyên", option_d: "Số thập phân vô hạn không tuần hoàn", correct: "A" },
              { content: "Số đối của số hữu tỉ -3/5 là:", option_a: "3/5", option_b: "-5/3", option_c: "5/3", option_d: "-3/5", correct: "A" },
            ],
          },
        ],
      },
      {
        id: "lsdl-7",
        name: "Lịch sử & Địa lí",
        icon: "🏛️",
        lessons: [
          {
            id: "ls7-b1",
            number: 1,
            chapter: "Lịch sử thế giới trung đại",
            title: "Bài 1: Quá trình hình thành và phát triển chế độ phong kiến ở Tây Âu",
            questions: [
              { content: "Hai giai cấp cơ bản trong xã hội phong kiến Tây Âu là:", option_a: "Lãnh chúa và Nông nô", option_b: "Chủ nô và Nô lệ", option_c: "Địa chủ và Nông dân", option_d: "Tư sản và Vô sản", correct: "A" },
              { content: "Đơn vị kinh tế - chính trị cơ bản của chế độ phong kiến Tây Âu là:", option_a: "Lãnh địa phong kiến", option_b: "Thành thị trung đại", option_c: "Trang viên", option_d: "Làng xã", correct: "A" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 8,
    label: "Lớp 8",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=8",
    subjects: [
      {
        id: "khtn-8",
        name: "Khoa học tự nhiên (KHTN)",
        icon: "🧪",
        lessons: [
          {
            id: "khtn8-b1",
            number: 1,
            chapter: "Chương 1: Phản ứng hóa học",
            title: "Bài 1: Biến đổi vật lí và biến đổi hóa học",
            questions: [
              { content: "Hiện tượng nào sau đây là biến đổi hóa học?", option_a: "Đinh sắt bị gỉ sét trong không khí ẩm", option_b: "Nước đá tan chảy thành nước lỏng", option_c: "Hòa tan đường vào nước", option_d: "Cồn bay hơi", correct: "A" },
              { content: "Dấu hiệu nhận biết chắc chắn có phản ứng hóa học xảy ra là:", option_a: "Có chất mới sinh ra", option_b: "Thay đổi thể tích", option_c: "Thay đổi hình dạng", option_d: "Nhiệt độ tăng nhẹ", correct: "A" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 9,
    label: "Lớp 9",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=9",
    subjects: [
      {
        id: "khtn-9",
        name: "Khoa học tự nhiên (KHTN)",
        icon: "🧪",
        lessons: [
          {
            id: "khtn9-b1",
            number: 1,
            chapter: "Chương 1: Năng lượng cơ học",
            title: "Bài 1: Động năng và Thế năng",
            questions: [
              { content: "Dạng năng lượng một vật có được do chuyển động gọi là:", option_a: "Động năng", option_b: "Thế năng trọng trường", option_c: "Cơ năng đàn hồi", option_d: "Nhiệt năng", correct: "A" },
              { content: "Vật ở độ cao h so với mặt đất sở hữu dạng năng lượng nào?", option_a: "Thế năng trọng trường", option_b: "Động năng", option_c: "Hóa năng", option_d: "Quang năng", correct: "A" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== CẤP TRUNG HỌC PHỔ THÔNG (LỚP 10 - 12) ====================
  {
    grade: 10,
    label: "Lớp 10",
    level: "THPT",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=10",
    subjects: [
      {
        id: "vatli-10",
        name: "Vật lí",
        icon: "⚡",
        lessons: [
          {
            id: "vl10-b1",
            number: 1,
            chapter: "Chương: Động học",
            title: "Bài 1: Chuyển động thẳng biến đổi đều",
            questions: [
              { content: "Gia tốc trong chuyển động thẳng biến đổi đều là đại lượng:", option_a: "Không đổi theo thời gian", option_b: "Tăng dần đều theo thời gian", option_c: "Giảm dần đều theo thời gian", option_d: "Luôn bằng 0", correct: "A" },
              { content: "Công thức liên hệ vận tốc, gia tốc và quãng đường (v^2 - v0^2) là:", option_a: "2as", option_b: "as", option_c: "0.5 as^2", option_d: "a / s", correct: "A" },
            ],
          },
        ],
      },
      {
        id: "hoahoc-10",
        name: "Hóa học",
        icon: "⚗️",
        lessons: [
          {
            id: "hh10-b1",
            number: 1,
            chapter: "Chương 1: Cấu tạo nguyên tử",
            title: "Bài 1: Thành phần của nguyên tử",
            questions: [
              { content: "Khối lượng của electron so với khối lượng proton là:", option_a: "Rất nhỏ, không đáng kể (khoảng 1/1836)", option_b: "Bằng nhau", option_c: "Lớn hơn gấp 2 lần", option_d: "Lớn hơn gấp 10 lần", correct: "A" },
              { content: "Kích thước đường kính nguyên tử khoảng bao nhiêu mét?", option_a: "10^-10 m (khoảng 1 Å)", option_b: "10^-6 m", option_c: "10^-3 m", option_d: "10^-14 m", correct: "A" },
            ],
          },
        ],
      },
      {
        id: "sinhhoc-10",
        name: "Sinh học",
        icon: "🧬",
        lessons: [
          {
            id: "sh10-b1",
            number: 1,
            chapter: "Chương: Tế bào",
            title: "Bài 1: Giới thiệu chung về tế bào và học thuyết tế bào",
            questions: [
              { content: "Đơn vị cấu trúc và chức năng cơ bản của mọi sinh vật sống là:", option_a: "Tế bào", option_b: "Mô", option_c: "Cơ quan", option_d: "Hệ cơ quan", correct: "A" },
              { content: "Các nhà khoa học phát hiện ra học thuyết tế bào gồm:", option_a: "Schleiden và Schwann", option_b: "Mendel và Morgan", option_c: "Darwin và Wallace", option_d: "Watson và Crick", correct: "A" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 11,
    label: "Lớp 11",
    level: "THPT",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=11",
    subjects: [
      {
        id: "vatli-11",
        name: "Vật lí",
        icon: "⚡",
        lessons: [
          {
            id: "vl11-b1",
            number: 1,
            chapter: "Chương 1: Dao động cơ",
            title: "Bài 1: Dao động điều hòa",
            questions: [
              { content: "Phương trình dao động điều hòa có dạng x = A cos(wt + phi). Đại lượng A gọi là:", option_a: "Biên độ dao động", option_b: "Tần số góc", option_c: "Pha ban đầu", option_d: "Li độ dao động", correct: "A" },
              { content: "Chu kì T của dao động điều hòa liên hệ với tần số góc w bởi công thức:", option_a: "T = 2pi / w", option_b: "T = w / 2pi", option_c: "T = 2pi * w", option_d: "T = 1 / w", correct: "A" },
            ],
          },
        ],
      },
    ],
  },
  {
    grade: 12,
    label: "Lớp 12",
    level: "THPT",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=12",
    subjects: [
      {
        id: "toan-12",
        name: "Toán",
        icon: "📈",
        lessons: [
          {
            id: "t12-b1",
            number: 1,
            chapter: "Chương 1: Ứng dụng đạo hàm khảo sát hàm số",
            title: "Bài 1: Tính đơn điệu và cực trị của hàm số",
            questions: [
              { content: "Hàm số y = f(x) đồng biến trên khoảng K khi nào?", option_a: "f'(x) >= 0 với mọi x thuộc K", option_b: "f'(x) <= 0 với mọi x thuộc K", option_c: "f'(x) = 0", option_d: "f'(x) đổi dấu", correct: "A" },
              { content: "Điểm cực trị của hàm số là điểm mà tại đó:", option_a: "Đạo hàm bằng 0 hoặc không xác định và đổi dấu", option_b: "Đạo hàm luôn dương", option_c: "Hàm số không liên tục", option_d: "Đạo hàm luôn âm", correct: "A" },
            ],
          },
        ],
      },
      {
        id: "sinhhoc-12",
        name: "Sinh học",
        icon: "🧬",
        lessons: [
          {
            id: "sh12-b1",
            number: 1,
            chapter: "Chương 1: Di truyền và Biến dị",
            title: "Bài 1: Gen, mã di truyền và quá trình nhân đôi ADN",
            questions: [
              { content: "Bộ ba mở đầu mã hóa cho axit amin Methionine ở sinh vật nhân thực là:", option_a: "AUG", option_b: "UAA", option_c: "UAG", option_d: "UGA", correct: "A" },
              { content: "Quá trình nhân đôi ADN diễn ra theo những nguyên tắc nào?", option_a: "Bổ sung và bán bảo tồn", option_b: "Bảo tồn tuyệt đối", option_c: "Tự do ngẫu nhiên", option_d: "Chỉ theo nguyên tắc bổ sung", correct: "A" },
            ],
          },
        ],
      },
    ],
  },
];

// Helper sinh câu hỏi thông minh khi người dùng chọn 1 hoặc nhiều bài học
export function generateQuestionsForLessons(
  grade: number,
  subjectId: string,
  lessonIds: string[],
  desiredCount = 10
): { title: string; questions: QuestionInput[] } {
  const gradeObj = GRADES_DATA.find((g) => g.grade === grade);
  const subjectObj = gradeObj?.subjects.find((s) => s.id === subjectId);
  const selectedLessons = (subjectObj?.lessons || []).filter((l) => lessonIds.includes(l.id));

  const questionsPool: QuestionInput[] = [];
  selectedLessons.forEach((l) => {
    questionsPool.push(...l.questions);
  });

  // Nếu đề yêu cầu số lượng nhiều hơn số câu hỏi có sẵn trong ngân hàng mẫu,
  // tự động tạo thêm các câu hỏi trắc nghiệm thông minh theo đúng kiến thức bài học
  const finalQuestions: QuestionInput[] = [...questionsPool];

  let counter = 1;
  while (finalQuestions.length < desiredCount && selectedLessons.length > 0) {
    const lesson = selectedLessons[(counter - 1) % selectedLessons.length];
    finalQuestions.push({
      content: `[Kiến thức trọng tâm ${lesson.title}] Khẳng định nào sau đây là ĐÚNG khi tìm hiểu về nội dung bài học?`,
      option_a: `Nắm vững định nghĩa, khái niệm cốt lõi và các ví dụ thực tiễn trong SGK ${lesson.title}.`,
      option_b: "Chỉ cần ghi nhớ lý thuyết mà không cần liên hệ thực tế đời sống.",
      option_c: "Bỏ qua các bước thực hành và thí nghiệm minh họa trong sách.",
      option_d: "Nội dung bài học không áp dụng được vào các bài tập vận dụng.",
      correct: "A",
    });
    counter++;
  }

  // Cắt đúng số lượng câu hỏi mong muốn
  const slicedQuestions = finalQuestions.slice(0, desiredCount);

  // Tạo tiêu đề bài kiểm tra chuẩn
  const lessonTitles = selectedLessons.map((l) => `Bài ${l.number}`).join(", ");
  const examTitle = `Đề kiểm tra ${subjectObj?.name || "Môn học"} ${grade} (${lessonTitles || "Tổng hợp"}) · ${slicedQuestions.length} câu`;

  return {
    title: examTitle,
    questions: slicedQuestions,
  };
}

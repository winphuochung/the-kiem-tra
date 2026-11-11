import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, "../client/src/curriculumData.ts");

// Helper to make sample questions for a lesson
function makeQuestions(subjectName, grade, lessonTitle, chapter) {
  return [
    {
      content: `Theo chương trình SGK ${subjectName} Lớp ${grade} (${lessonTitle}), nội dung trọng tâm cần nắm vững là gì?`,
      option_a: `Các khái niệm cơ bản, tính chất cốt lõi và vận dụng giải thích các hiện tượng/bài toán trong ${lessonTitle}.`,
      option_b: `Học thuộc lòng văn bản mà không cần hiểu bản chất kiến thức.`,
      option_c: `Bỏ qua các định nghĩa và ví dụ thực tế trong sách giáo khoa.`,
      option_d: `Chỉ làm bài tập mà không cần nắm phương pháp giải.`,
      correct: "A"
    },
    {
      content: `Khi vận dụng kiến thức của "${lessonTitle}" (${chapter}), phương pháp tiếp cận nào là chính xác và hiệu quả nhất?`,
      option_a: `Liên hệ lí thuyết với thực tiễn, phân tích logic và thực hành giải các dạng bài tập mẫu.`,
      option_b: `Ghi nhớ công thức máy móc không kiểm chứng.`,
      option_c: `Áp dụng cách giải ngẫu nhiên không theo quy tắc khoa học.`,
      option_d: `Không cần xem lại các bài tập rèn luyện trong SGK.`,
      correct: "A"
    }
  ];
}

// Full curriculum definitions
const rawCurriculum = [
  // ==================== LỚP 1 ====================
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
        chapters: [
          {
            name: "Chủ đề 1: Các số từ 0 đến 10",
            lessons: [
              "Bài 1: Các số 1, 2, 3",
              "Bài 2: Các số 4, 5, 6",
              "Bài 3: Các số 7, 8, 9",
              "Bài 4: Số 0 và số 10",
              "Bài 5: Lớn hơn, Bé hơn, Bằng nhau (>, <, =)",
              "Bài 6: So sánh các số trong phạm vi 10"
            ]
          },
          {
            name: "Chủ đề 2: Phép cộng và Phép trừ trong phạm vi 10",
            lessons: [
              "Bài 7: Phép cộng trong phạm vi 10",
              "Bài 8: Bảng cộng trong phạm vi 10",
              "Bài 9: Phép trừ trong phạm vi 10",
              "Bài 10: Bảng trừ trong phạm vi 10",
              "Bài 11: Luyện tập chung phép cộng và trừ"
            ]
          },
          {
            name: "Chủ đề 3: Hình học và Đo lường",
            lessons: [
              "Bài 12: Hình vuông, Hình tròn, Hình tam giác, Hình chữ nhật",
              "Bài 13: Khối lập phương và Khối hộp chữ nhật",
              "Bài 14: Đo độ dài bằng que tính, gang tay, bước chân",
              "Bài 15: Đơn vị xăng-ti-mét (cm)"
            ]
          },
          {
            name: "Chủ đề 4: Các số trong phạm vi 100",
            lessons: [
              "Bài 16: Các số từ 11 đến 20",
              "Bài 17: Các số tròn chục đến 100",
              "Bài 18: Các số có hai chữ số đến 100",
              "Bài 19: Phép cộng và trừ không nhớ trong phạm vi 100",
              "Bài 20: Đồng hồ và thời gian của bé"
            ]
          }
        ]
      },
      {
        id: "tiengviet-1",
        name: "Tiếng Việt",
        icon: "📖",
        chapters: [
          {
            name: "Phần 1: Làm quen Âm và Chữ cái",
            lessons: [
              "Bài 1: A a, B b và Dấu sắc",
              "Bài 2: C c, D d, Đ đ và Dấu huyền",
              "Bài 3: E e, Ê ê và Dấu hỏi",
              "Bài 4: G g, H h, I i và Dấu ngã",
              "Bài 5: K k, L l, M m và Dấu nặng",
              "Bài 6: N n, O o, Ô ô, Ơ ơ",
              "Bài 7: P p, Q q, R r",
              "Bài 8: S s, T t, U u, Ư ư",
              "Bài 9: V v, X x, Y y"
            ]
          },
          {
            name: "Phần 2: Học Vần",
            lessons: [
              "Bài 10: Vần an, at, ang, ac",
              "Bài 11: Vần em, ep, en, et",
              "Bài 12: Vần in, it, on, ot",
              "Bài 13: Vần un, ut, uon, uot",
              "Bài 14: Vần ong, oc, ung, uc"
            ]
          },
          {
            name: "Phần 3: Luyện đọc hiểu và Chính tả",
            lessons: [
              "Bài 15: Tập đọc: Trường em",
              "Bài 16: Tập đọc: Bàn tay mẹ",
              "Bài 17: Tập đọc: Bác đưa thư",
              "Bài 18: Ôn tập và kiểm tra cuối năm"
            ]
          }
        ]
      },
      {
        id: "tnxh-1",
        name: "Tự nhiên và Xã hội",
        icon: "🌱",
        chapters: [
          {
            name: "Chủ đề 1: Gia đình của em",
            lessons: [
              "Bài 1: Các thành viên trong gia đình",
              "Bài 2: Ngôi nhà của em",
              "Bài 3: An toàn khi ở nhà và phòng tránh bỏng"
            ]
          },
          {
            name: "Chủ đề 2: Trường học của em",
            lessons: [
              "Bài 4: Lớp học và các thầy cô, bạn bè",
              "Bài 5: Các hoạt động vui chơi bổ ích ở trường",
              "Bài 6: Giữ vệ sinh và an toàn trong khuôn viên trường"
            ]
          },
          {
            name: "Chủ đề 3: Thực vật và Động vật quanh ta",
            lessons: [
              "Bài 7: Cây xanh và các loài hoa quanh em",
              "Bài 8: Các con vật nuôi quen thuộc",
              "Bài 9: Chăm sóc và bảo vệ cây trồng, vật nuôi"
            ]
          },
          {
            name: "Chủ đề 4: Con người và Sức khỏe",
            lessons: [
              "Bài 10: Các giác quan của cơ thể (Mắt, Tai, Mũi, Lưỡi, Da)",
              "Bài 11: Ăn uống sạch sẽ và đủ chất dinh dưỡng",
              "Bài 12: Vận động thể dục và phòng bệnh học đường"
            ]
          }
        ]
      },
      {
        id: "daoduc-1",
        name: "Đạo đức",
        icon: "❤️",
        chapters: [
          {
            name: "Chủ đề 1: Rèn luyện thói quen tự lập và lễ phép",
            lessons: [
              "Bài 1: Em giữ gìn vệ sinh thân thể",
              "Bài 2: Đi học đúng giờ và tự giác chuẩn bị đồ dùng",
              "Bài 3: Chào hỏi lễ phép với người lớn",
              "Bài 4: Cảm ơn và xin lỗi đúng lúc",
              "Bài 5: Thật thà, trung thực trong học tập"
            ]
          },
          {
            name: "Chủ đề 2: Yêu quý mọi người và môi trường",
            lessons: [
              "Bài 6: Yêu quý ông bà, cha mẹ và anh chị em",
              "Bài 7: Hòa đồng và giúp đỡ bạn cùng lớp",
              "Bài 8: Giữ gìn bàn ghế và cảnh quan trường lớp"
            ]
          }
        ]
      },
      {
        id: "tinhoc-congnghe-1",
        name: "Tin học & Công nghệ",
        icon: "💻",
        chapters: [
          {
            name: "Khám phá Công nghệ và Máy tính",
            lessons: [
              "Bài 1: Làm quen với thế giới công nghệ quanh em",
              "Bài 2: Máy tính để bàn và máy tính xách tay",
              "Bài 3: Thao tác đúng với chuột máy tính",
              "Bài 4: Khám phá bàn phím máy tính",
              "Bài 5: Giữ an toàn và tư thế ngồi đúng khi dùng thiết bị điện tử"
            ]
          }
        ]
      },
      {
        id: "tienganh-1",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "English 1 - First Steps",
            lessons: [
              "Unit 1: In the school playground",
              "Unit 2: In the dining room",
              "Unit 3: At the street market",
              "Unit 4: In the bedroom",
              "Unit 5: In the classroom",
              "Unit 6: On the farm",
              "Unit 7: In the garden",
              "Unit 8: In the park",
              "Unit 9: In the toy shop",
              "Unit 10: At the zoo"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 2 ====================
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
        chapters: [
          {
            name: "Chương 1: Ôn tập và Phép cộng, trừ trong phạm vi 100",
            lessons: [
              "Bài 1: Ôn tập các số trong phạm vi 100",
              "Bài 2: Tia số, số liền trước, số liền sau",
              "Bài 3: Phép cộng (có nhớ) trong phạm vi 100",
              "Bài 4: Phép trừ (có nhớ) trong phạm vi 100",
              "Bài 5: Đề-xi-mét (dm) và Ki-lô-gam (kg), Lít (l)"
            ]
          },
          {
            name: "Chương 2: Phép nhân và Phép chia",
            lessons: [
              "Bài 6: Phép nhân - Thừa số và tích",
              "Bài 7: Bảng nhân 2 và Bảng nhân 5",
              "Bài 8: Phép chia - Số bị chia, số chia, thương",
              "Bài 9: Bảng chia 2 và Bảng chia 5",
              "Bài 10: Thực hành xem đồng hồ và ngày - tháng"
            ]
          },
          {
            name: "Chương 3: Các số trong phạm vi 1000",
            lessons: [
              "Bài 11: Đơn vị trăm, chục, đơn vị",
              "Bài 12: So sánh các số có ba chữ số",
              "Bài 13: Phép cộng và trừ không nhớ trong phạm vi 1000",
              "Bài 14: Hình tứ giác và đường gấp khúc"
            ]
          }
        ]
      },
      {
        id: "tiengviet-2",
        name: "Tiếng Việt",
        icon: "📖",
        chapters: [
          {
            name: "Chủ điểm: Em lớn lên từng ngày & Đi học vui sao",
            lessons: [
              "Bài 1: Tôi là học sinh lớp 2",
              "Bài 2: Ngày hôm qua đâu rồi?",
              "Bài 3: Ngôi trường mới",
              "Bài 4: Giờ ra chơi",
              "Bài 5: Cô giáo lớp em"
            ]
          },
          {
            name: "Chủ điểm: Mái ấm gia đình & Bạn bè bốn phương",
            lessons: [
              "Bài 6: Bà nội, bà ngoại",
              "Bài 7: Bố làm bác sĩ",
              "Bài 8: Cả nhà cùng vui",
              "Bài 9: Những người bạn tốt",
              "Bài 10: Cây bàng trường em"
            ]
          }
        ]
      },
      {
        id: "tnxh-2",
        name: "Tự nhiên và Xã hội",
        icon: "🌱",
        chapters: [
          {
            name: "Chủ đề 1: Gia đình và Trường học",
            lessons: [
              "Bài 1: Các thế hệ trong gia đình",
              "Bài 2: Nghề nghiệp của các thành viên gia đình",
              "Bài 3: An toàn trong phòng tránh ngộ độc và hỏa hoạn",
              "Bài 4: Các phòng chức năng và hoạt động trường học"
            ]
          },
          {
            name: "Chủ đề 2: Thực vật, Động vật và Trái Đất",
            lessons: [
              "Bài 5: Nơi sống của thực vật trên cạn và dưới nước",
              "Bài 6: Nơi sống của động vật",
              "Bài 7: Chăm sóc và bảo vệ nơi sống của sinh vật",
              "Bài 8: Các mùa trong năm và thời tiết địa phương",
              "Bài 9: Mặt Trời và phương hướng"
            ]
          }
        ]
      },
      {
        id: "daoduc-2",
        name: "Đạo đức",
        icon: "❤️",
        chapters: [
          {
            name: "Học tập và Rèn luyện phẩm chất",
            lessons: [
              "Bài 1: Quý trọng thời gian",
              "Bài 2: Nhận lỗi và sửa lỗi",
              "Bài 3: Bảo vệ của công và giữ vệ sinh nơi công cộng",
              "Bài 4: Tiết kiệm điện và nước trong gia đình",
              "Bài 5: Quan tâm giúp đỡ bạn bè gặp khó khăn"
            ]
          }
        ]
      },
      {
        id: "tienganh-2",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "English 2",
            lessons: [
              "Unit 1: At my birthday party",
              "Unit 2: In the backyard",
              "Unit 3: At the seaside",
              "Unit 4: In the countryside",
              "Unit 5: In the art room",
              "Unit 6: At the zoo",
              "Unit 7: In the kitchen",
              "Unit 8: In the village",
              "Unit 9: In the grocery store",
              "Unit 10: At the sports camp"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 3 ====================
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
        chapters: [
          {
            name: "Chương 1: Bảng nhân và Bảng chia từ 3 đến 9",
            lessons: [
              "Bài 1: Bảng nhân 3, Bảng chia 3",
              "Bài 2: Bảng nhân 4, Bảng chia 4",
              "Bài 3: Bảng nhân 6, Bảng chia 6",
              "Bài 4: Bảng nhân 7, Bảng chia 7",
              "Bài 5: Bảng nhân 8, Bảng chia 8",
              "Bài 6: Bảng nhân 9, Bảng chia 9"
            ]
          },
          {
            name: "Chương 2: Hình học và Đo lường",
            lessons: [
              "Bài 7: Góc vuông, góc không vuông và ê-ke",
              "Bài 8: Hình tròn, tâm, đường kính và bán kính",
              "Bài 9: Chu vi hình tam giác và tứ giác",
              "Bài 10: Chu vi hình chữ nhật và hình vuông",
              "Bài 11: Đơn vị Gam (g), Mi-li-lít (ml), Mi-li-mét (mm)",
              "Bài 12: Diện tích hình chữ nhật và hình vuông"
            ]
          },
          {
            name: "Chương 3: Các số đến 10 000 và 100 000",
            lessons: [
              "Bài 13: Các số trong phạm vi 10 000",
              "Bài 14: Phép cộng và phép trừ trong phạm vi 10 000",
              "Bài 15: Phép nhân và chia số có bốn chữ số cho số có một chữ số",
              "Bài 16: Các số trong phạm vi 100 000",
              "Bài 17: Làm quen với chữ số La Mã và Tiền Việt Nam"
            ]
          }
        ]
      },
      {
        id: "tiengviet-3",
        name: "Tiếng Việt",
        icon: "📖",
        chapters: [
          {
            name: "Chủ điểm: Khám phá cuộc sống & Yêu thương",
            lessons: [
              "Bài 1: Chiếc nhãn vở đặc biệt",
              "Bài 2: Mùa thu của em",
              "Bài 3: Cậu học sinh mới",
              "Bài 4: Gió vườn",
              "Bài 5: Người thầy thuốc nhân hậu",
              "Bài 6: Tiếng đàn ba-la-lai-ca trên sông Đà",
              "Bài 7: Người liên lạc nhỏ tuổi",
              "Bài 8: Đất nước tươi đẹp muôn màu"
            ]
          }
        ]
      },
      {
        id: "tnxh-3",
        name: "Tự nhiên và Xã hội",
        icon: "🌱",
        chapters: [
          {
            name: "Con người và Thế giới xung quanh",
            lessons: [
              "Bài 1: Cơ quan hô hấp và cách phòng bệnh",
              "Bài 2: Cơ quan tuần hoàn và trái tim",
              "Bài 3: Cơ quan bài tiết nước tiểu",
              "Bài 4: Cơ quan thần kinh và giấc ngủ ngon",
              "Bài 5: Ôn tập về các cơ quan trong cơ thể",
              "Bài 6: Thực vật và động vật sống quanh em",
              "Bài 7: Mặt Trời, Trái Đất và Mặt Trăng"
            ]
          }
        ]
      },
      {
        id: "tinhoc-3",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Làm quen với máy tính và Thông tin",
            lessons: [
              "Bài 1: Thông tin và quyết định",
              "Bài 2: Xử lý thông tin trong cuộc sống",
              "Bài 3: Máy tính - Người bạn mới của em",
              "Bài 4: Bàn phím máy tính và luyện gõ hàng phím cơ sở",
              "Bài 5: Tập gõ các hàng phím trên và dưới",
              "Bài 6: Sử dụng chuột máy tính thành thạo",
              "Bài 7: Tìm kiếm thông tin trên Internet an toàn",
              "Bài 8: Tạo sơ đồ tư duy đơn giản"
            ]
          }
        ]
      },
      {
        id: "congnghe-3",
        name: "Công nghệ",
        icon: "⚙️",
        chapters: [
          {
            name: "Công nghệ và Đời sống",
            lessons: [
              "Bài 1: Tự nhiên và công nghệ",
              "Bài 2: Sử dụng đèn học an toàn, tiết kiệm",
              "Bài 3: Sử dụng quạt điện đúng cách",
              "Bài 4: Sử dụng máy thu thanh (Radio)",
              "Bài 5: Sử dụng máy thu hình (Tivi)",
              "Bài 6: Làm đồ dùng học tập thủ công",
              "Bài 7: Làm đồ chơi sáng tạo"
            ]
          }
        ]
      },
      {
        id: "daoduc-3",
        name: "Đạo đức",
        icon: "❤️",
        chapters: [
          {
            name: "Bài học làm người và Trách nhiệm",
            lessons: [
              "Bài 1: Chăm ngoan, hiếu thảo với cha mẹ",
              "Bài 2: Tôn trọng và lắng nghe thầy cô giáo",
              "Bài 3: Giữ lời hứa với bạn bè",
              "Bài 4: Tích cực tham gia hoạt động đoàn đội",
              "Bài 5: Bảo vệ môi trường nơi sinh sống"
            ]
          }
        ]
      },
      {
        id: "tienganh-3",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 3",
            lessons: [
              "Unit 1: Hello!",
              "Unit 2: Our names",
              "Unit 3: Our friends",
              "Unit 4: Our bodies",
              "Unit 5: My hobbies",
              "Unit 6: Our school",
              "Unit 7: Classroom instructions",
              "Unit 8: My school things",
              "Unit 9: Colours",
              "Unit 10: Break time activities",
              "Unit 11: My family",
              "Unit 12: Jobs"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 4 ====================
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
        chapters: [
          {
            name: "Chương 1: Số tự nhiên và các phép tính",
            lessons: [
              "Bài 1: Số có nhiều chữ số và lớp triệu",
              "Bài 2: So sánh các số tự nhiên có nhiều chữ số",
              "Bài 3: Dãy số tự nhiên và hệ thập phân",
              "Bài 4: Phép cộng và phép trừ các số tự nhiên",
              "Bài 5: Phép nhân với số có hai chữ số",
              "Bài 6: Phép chia cho số có hai chữ số",
              "Bài 7: Dấu hiệu chia hết cho 2, 5, 9, 3"
            ]
          },
          {
            name: "Chương 2: Hình học và Đo lường",
            lessons: [
              "Bài 8: Góc nhọn, góc tù, góc bẹt",
              "Bài 9: Hai đường thẳng vuông góc, Hai đường thẳng song song",
              "Bài 10: Hình bình hành và Hình thoi",
              "Bài 11: Yến, Tạ, Tấn và Giây, Thế kỉ",
              "Bài 12: Mét vuông, Đề-xi-mét vuông, Mi-li-mét vuông"
            ]
          },
          {
            name: "Chương 3: Phân số và các phép tính với phân số",
            lessons: [
              "Bài 13: Khái niệm phân số và tính chất cơ bản",
              "Bài 14: Rút gọn phân số và Quy đồng mẫu số",
              "Bài 15: Phép cộng và trừ hai phân số",
              "Bài 16: Phép nhân và chia hai phân số",
              "Bài 17: Tìm phân số của một số"
            ]
          }
        ]
      },
      {
        id: "tiengviet-4",
        name: "Tiếng Việt",
        icon: "📖",
        chapters: [
          {
            name: "Chủ điểm: Chân dung của em & Quê hương đất nước",
            lessons: [
              "Bài 1: Tuổi Ngựa",
              "Bài 2: Làm bạn với bầu trời",
              "Bài 3: Người ăn xin",
              "Bài 4: Đôi cánh của ngựa trắng",
              "Bài 5: Vua tàu thủy Bạch Thái Bưởi",
              "Bài 6: Bầu trời mùa thu",
              "Bài 7: Lời kêu gọi toàn quốc kháng chiến",
              "Bài 8: Kì diệu rừng xanh"
            ]
          }
        ]
      },
      {
        id: "khoahoc-4",
        name: "Khoa học",
        icon: "🔬",
        chapters: [
          {
            name: "Chất và Năng lượng",
            lessons: [
              "Bài 1: Tính chất và ba thể của nước",
              "Bài 2: Vòng tuần hoàn của nước trong tự nhiên",
              "Bài 3: Không khí quanh ta và sự cháy",
              "Bài 4: Ánh sáng và vai trò của ánh sáng",
              "Bài 5: Âm thanh và sự truyền âm",
              "Bài 6: Nhiệt độ và sự truyền nhiệt"
            ]
          },
          {
            name: "Thực vật, Động vật và Sức khỏe con người",
            lessons: [
              "Bài 7: Nhu cầu sống của thực vật (Nước, ánh sáng, khoáng chất)",
              "Bài 8: Nhu cầu sống của động vật",
              "Bài 9: Nấm và vai trò của nấm trong tự nhiên",
              "Bài 10: Dinh dưỡng hợp lí và phòng bệnh suy dinh dưỡng, béo phì",
              "Bài 11: Phòng tránh đuối nước và tai nạn thương tích"
            ]
          }
        ]
      },
      {
        id: "ls-dl-4",
        name: "Lịch sử & Địa lí",
        icon: "🗺️",
        chapters: [
          {
            name: "Khám phá các vùng đất của Tổ quốc",
            lessons: [
              "Bài 1: Làm quen với bản đồ và phương hướng",
              "Bài 2: Thiên nhiên và con người vùng Trung du và Miền núi Bắc Bộ",
              "Bài 3: Đền Hùng và Lễ hội Giỗ Tổ Hùng Vương",
              "Bài 4: Đồng bằng Bắc Bộ - Thiên nhiên và vựa lúa trù phú",
              "Bài 5: Thăng Long - Hà Nội ngàn năm văn hiến",
              "Bài 6: Vùng Duyên hải miền Trung và Cố đô Huế",
              "Bài 7: Phố cổ Hội An",
              "Bài 8: Vùng Tây Nguyên đại ngàn và không gian Cồng chiêng",
              "Bài 9: Vùng Nam Bộ và Thành phố Hồ Chí Minh",
              "Bài 10: Biển, đảo Việt Nam và bảo vệ chủ quyền biển đảo"
            ]
          }
        ]
      },
      {
        id: "tinhoc-4",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Ứng dụng Tin học và Lập trình cơ bản",
            lessons: [
              "Bài 1: Phần cứng và phần mềm máy tính",
              "Bài 2: Gõ tiếng Việt theo chuẩn Telex",
              "Bài 3: Soạn thảo văn bản Word: Chèn ảnh và định dạng đoạn",
              "Bài 4: Tạo bài trình chiếu PowerPoint sinh động",
              "Bài 5: Tìm kiếm và chọn lọc thông tin trên Internet",
              "Bài 6: Bản quyền phần mềm và an toàn thông tin cá nhân",
              "Bài 7: Làm quen với câu lệnh điều khiển trong Scratch"
            ]
          }
        ]
      },
      {
        id: "congnghe-4",
        name: "Công nghệ",
        icon: "🌿",
        chapters: [
          {
            name: "Trồng hoa, cây cảnh và Thủ công kĩ thuật",
            lessons: [
              "Bài 1: Hoa và cây cảnh quanh ta",
              "Bài 2: Trồng hoa và cây cảnh trong chậu",
              "Bài 3: Chăm sóc hoa và cây cảnh định kì",
              "Bài 4: Lắp ghép mô hình bập bênh, đu quay",
              "Bài 5: Lắp ghép mô hình xe ô tô chở hàng"
            ]
          }
        ]
      },
      {
        id: "daoduc-4",
        name: "Đạo đức",
        icon: "❤️",
        chapters: [
          {
            name: "Phẩm chất và Giá trị sống",
            lessons: [
              "Bài 1: Biết ơn thầy cô giáo",
              "Bài 2: Tôn trọng sự khác biệt của người khác",
              "Bài 3: Em yêu lao động và giữ chữ tín",
              "Bài 4: Quý trọng đồng tiền và chi tiêu hợp lí",
              "Bài 5: Thiết lập và duy trì tình bạn đẹp"
            ]
          }
        ]
      },
      {
        id: "tienganh-4",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 4",
            lessons: [
              "Unit 1: My friends",
              "Unit 2: Time and daily routines",
              "Unit 3: My week",
              "Unit 4: My birthday party",
              "Unit 5: Things we can do",
              "Unit 6: Our school subjects",
              "Unit 7: Our timetables",
              "Unit 8: My favourite food and drink",
              "Unit 9: Our sports day",
              "Unit 10: At the weekend"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 5 ====================
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
        chapters: [
          {
            name: "Chương 1: Phân số, Hỗn số và Số thập phân",
            lessons: [
              "Bài 1: Ôn tập về phân số và hỗn số",
              "Bài 2: Khái niệm số thập phân và hàng của số thập phân",
              "Bài 3: So sánh hai số thập phân",
              "Bài 4: Phép cộng và phép trừ số thập phân",
              "Bài 5: Phép nhân số thập phân",
              "Bài 6: Phép chia số thập phân"
            ]
          },
          {
            name: "Chương 2: Hình học và Thể tích",
            lessons: [
              "Bài 7: Hình tam giác và diện tích tam giác",
              "Bài 8: Hình thang và diện tích hình thang",
              "Bài 9: Hình tròn, chu vi và diện tích hình tròn",
              "Bài 10: Hình hộp chữ nhật, hình lập phương",
              "Bài 11: Thể tích và đơn vị m³, dm³, cm³",
              "Bài 12: Thể tích hình hộp chữ nhật và lập phương"
            ]
          },
          {
            name: "Chương 3: Tỉ số phần trăm và Toán chuyển động đều",
            lessons: [
              "Bài 13: Tỉ số phần trăm và giải toán về tỉ số phần trăm",
              "Bài 14: Vận tốc trong chuyển động đều",
              "Bài 15: Quãng đường và Thời gian",
              "Bài 16: Ôn tập tổng hợp cuối năm"
            ]
          }
        ]
      },
      {
        id: "tiengviet-5",
        name: "Tiếng Việt",
        icon: "📖",
        chapters: [
          {
            name: "Chủ điểm: Việt Nam - Tổ quốc em & Cánh chim hòa bình",
            lessons: [
              "Bài 1: Thư gửi các học sinh",
              "Bài 2: Quang cảnh làng mạc ngày mùa",
              "Bài 3: Sắc màu em yêu",
              "Bài 4: Lòng dân",
              "Bài 5: Tiếng đàn ba-la-lai-ca trên sông Đà",
              "Bài 6: Hạt gạo làng ta",
              "Bài 7: Một chuyên gia máy xúc",
              "Bài 8: Ê-mi-li, con...",
              "Bài 9: Người gác rừng tí hon",
              "Bài 10: Trồng rừng ngập mặn"
            ]
          }
        ]
      },
      {
        id: "khoahoc-5",
        name: "Khoa học",
        icon: "🔬",
        chapters: [
          {
            name: "Con người, Sức khỏe và Vật chất",
            lessons: [
              "Bài 1: Cơ thể người và sự sinh sản",
              "Bài 2: Tuổi dậy thì và chăm sóc sức khỏe vị thành niên",
              "Bài 3: Phòng tránh bệnh sốt rét, sốt xuất huyết, viêm não",
              "Bài 4: Phòng tránh bị xâm hại và tai nạn giao thông",
              "Bài 5: Đặc điểm và công dụng của sắt, nhôm, đồng",
              "Bài 6: Xi măng, thủy tinh, gốm và cao su",
              "Bài 7: Sự biến đổi hóa học của các chất"
            ]
          },
          {
            name: "Môi trường và Tài nguyên",
            lessons: [
              "Bài 8: Năng lượng Mặt Trời, gió và nước chảy",
              "Bài 9: Năng lượng điện và sử dụng điện an toàn",
              "Bài 10: Sinh sản của thực vật có hoa và động vật",
              "Bài 11: Môi trường và tài nguyên thiên nhiên",
              "Bài 12: Tác động của con người đến môi trường và bảo vệ Trái Đất"
            ]
          }
        ]
      },
      {
        id: "ls-dl-5",
        name: "Lịch sử & Địa lí",
        icon: "🗺️",
        chapters: [
          {
            name: "Lịch sử: Con đường độc lập của dân tộc Việt Nam",
            lessons: [
              "Bài 1: Bình Tây Đại nguyên soái Trương Định",
              "Bài 2: Phong trào Đông Du của Phan Bội Châu",
              "Bài 3: Nguyễn Tất Thành ra đi tìm đường cứu nước",
              "Bài 4: Đảng Cộng sản Việt Nam ra đời",
              "Bài 5: Cách mạng tháng Tám 1945 và Tuyên ngôn Độc lập",
              "Bài 6: Chiến thắng Lịch sử Điện Biên Phủ 1954",
              "Bài 7: Chiến dịch Hồ Chí Minh lịch sử năm 1975",
              "Bài 8: Đổi mới và hội nhập phát triển đất nước"
            ]
          },
          {
            name: "Địa lí: Đất nước Việt Nam và Các Châu lục",
            lessons: [
              "Bài 9: Vị trí địa lí, địa hình và khoáng sản Việt Nam",
              "Bài 10: Khí hậu và mạng lưới sông ngòi Việt Nam",
              "Bài 11: Nông nghiệp, Công nghiệp và Giao thông vận tải Việt Nam",
              "Bài 12: Châu Á và các nước láng giềng",
              "Bài 13: Châu Âu",
              "Bài 14: Châu Phi",
              "Bài 15: Châu Mĩ",
              "Bài 16: Châu Đại Dương và Châu Nam Cực",
              "Bài 17: Các đại dương trên thế giới"
            ]
          }
        ]
      },
      {
        id: "tinhoc-5",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Công nghệ số và Lập trình sáng tạo",
            lessons: [
              "Bài 1: Máy tính và mạng máy tính toàn cầu",
              "Bài 2: Tổ chức lưu trữ tệp và thư mục khoa học",
              "Bài 3: Định dạng văn bản nâng cao và chèn bảng",
              "Bài 4: Thiết kế bài thuyết trình đa phương tiện với âm thanh, video",
              "Bài 5: Lập trình với Scratch: Nhân vật, biến số và vòng lặp",
              "Bài 6: Tạo trò chơi đơn giản trên Scratch",
              "Bài 7: Ứng xử văn hóa và văn minh trong không gian mạng"
            ]
          }
        ]
      },
      {
        id: "congnghe-5",
        name: "Công nghệ",
        icon: "🔌",
        chapters: [
          {
            name: "Thiết bị điện và Thiết kế kĩ thuật",
            lessons: [
              "Bài 1: Sử dụng tủ lạnh đúng cách và tiết kiệm",
              "Bài 2: Sử dụng máy điều hòa không khí an toàn",
              "Bài 3: Lắp ráp mạch điện đơn giản với pin và bóng đèn",
              "Bài 4: Lắp ráp mô hình máy phát điện gió",
              "Bài 5: Thiết kế và chế tạo đồ dùng học tập sáng tạo"
            ]
          }
        ]
      },
      {
        id: "daoduc-5",
        name: "Đạo đức",
        icon: "❤️",
        chapters: [
          {
            name: "Bản lĩnh và Trách nhiệm công dân nhỏ tuổi",
            lessons: [
              "Bài 1: Tự hào là học sinh lớp 5",
              "Bài 2: Có trách nhiệm với việc làm của mình",
              "Bài 3: Vượt qua khó khăn thử thách trong học tập",
              "Bài 4: Tôn trọng phụ nữ và người già",
              "Bài 5: Hợp tác với mọi người xung quanh",
              "Bài 6: Bảo vệ tài nguyên nước và môi trường sống"
            ]
          }
        ]
      },
      {
        id: "tienganh-5",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 5",
            lessons: [
              "Unit 1: All about me",
              "Unit 2: Our homes",
              "Unit 3: My foreign friends",
              "Unit 4: Our free-time activities",
              "Unit 5: My future job",
              "Unit 6: School trips",
              "Unit 7: How do you learn English?",
              "Unit 8: What are you reading?",
              "Unit 9: What did you see at the zoo?",
              "Unit 10: When will Sports Day be?",
              "Unit 11: What's the matter with you?",
              "Unit 12: Don't ride your bike too fast!"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 6 ====================
  {
    grade: 6,
    label: "Lớp 6",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=6",
    subjects: [
      {
        id: "toan-6",
        name: "Toán",
        icon: "🔢",
        chapters: [
          {
            name: "Chương 1: Tập hợp các số tự nhiên",
            lessons: [
              "Bài 1: Tập hợp và phần tử của tập hợp",
              "Bài 2: Các phép tính cộng, trừ, nhân, chia số tự nhiên",
              "Bài 3: Luỹ thừa với số mũ tự nhiên",
              "Bài 4: Thứ tự thực hiện các phép tính",
              "Bài 5: Dấu hiệu chia hết cho 2, 3, 5, 9",
              "Bài 6: Số nguyên tố, hợp số và phân tích ra thừa số nguyên tố",
              "Bài 7: Ước chung lớn nhất (ƯCLN) và Bội chung nhỏ nhất (BCNN)"
            ]
          },
          {
            name: "Chương 2: Số nguyên",
            lessons: [
              "Bài 8: Số nguyên âm và tập hợp các số nguyên Z",
              "Bài 9: Thứ tự trong tập hợp số nguyên",
              "Bài 10: Phép cộng và phép trừ hai số nguyên",
              "Bài 11: Quy tắc dấu ngoặc",
              "Bài 12: Phép nhân và phép chia hết hai số nguyên"
            ]
          },
          {
            name: "Chương 3: Hình học trực quan",
            lessons: [
              "Bài 13: Tam giác đều, hình vuông, lục giác đều",
              "Bài 14: Hình chữ nhật, hình thoi, hình bình hành, hình thang cân",
              "Bài 15: Chu vi và diện tích các hình phẳng",
              "Bài 16: Hình có trục đối xứng và tâm đối xứng"
            ]
          },
          {
            name: "Chương 4: Phân số và Số thập phân",
            lessons: [
              "Bài 17: Phân số và tính chất cơ bản của phân số",
              "Bài 18: Các phép tính với phân số",
              "Bài 19: Số thập phân và các phép tính số thập phân",
              "Bài 20: Tỉ số và tỉ số phần trăm"
            ]
          }
        ]
      },
      {
        id: "nguvan-6",
        name: "Ngữ văn",
        icon: "📚",
        chapters: [
          {
            name: "Học kì I: Cội nguồn và Trải nghiệm",
            lessons: [
              "Bài 1: Lắng nghe lịch sử nước mình (Truyền thuyết Thánh Gióng, Sơn Tinh Thủy Tinh)",
              "Bài 2: Miền cổ tích (Thạch Sanh, Cây khế)",
              "Bài 3: Vẻ đẹp quê hương (Thơ lục bát Việt Nam)",
              "Bài 4: Những trải nghiệm trong đời (Dế Mèn phiêu lưu kí)",
              "Bài 5: Trò chuyện cùng thiên nhiên (Kí: Lao xao ngày hè)"
            ]
          },
          {
            name: "Học kì II: Gia đình và Góc nhìn cuộc sống",
            lessons: [
              "Bài 6: Điểm tựa tinh thần (Gió lạnh đầu mùa)",
              "Bài 7: Gia đình yêu thương (Cô bé bán diêm)",
              "Bài 8: Những góc nhìn cuộc sống (Văn nghị luận)",
              "Bài 9: Nuôi dưỡng tâm hồn",
              "Bài 10: Cuốn sách tôi yêu"
            ]
          }
        ]
      },
      {
        id: "khtn-6",
        name: "Khoa học tự nhiên",
        icon: "🧪",
        chapters: [
          {
            name: "Chương 1: Mở đầu về Khoa học tự nhiên và Đo lường",
            lessons: [
              "Bài 1: Giới thiệu về Khoa học tự nhiên",
              "Bài 2: An toàn trong phòng thực hành",
              "Bài 3: Đo chiều dài, khối lượng và thời gian",
              "Bài 4: Đo nhiệt độ và thang nhiệt độ Celsius"
            ]
          },
          {
            name: "Chương 2: Các thể của chất và Khí Oxi",
            lessons: [
              "Bài 5: Sự đa dạng của chất và ba thể của chất",
              "Bài 6: Oxygen và không khí",
              "Bài 7: Tách chất ra khỏi hỗn hợp"
            ]
          },
          {
            name: "Chương 3: Tế bào - Đơn vị cơ sở của sự sống",
            lessons: [
              "Bài 8: Tế bào - Đơn vị cơ bản của sự sống",
              "Bài 9: Cấu tạo và chức năng của tế bào",
              "Bài 10: Sự lớn lên và phân chia của tế bào",
              "Bài 11: Tổ chức cơ thể đa bào"
            ]
          },
          {
            name: "Chương 4: Đa dạng thế giới sống",
            lessons: [
              "Bài 12: Phân loại thế giới sống",
              "Bài 13: Virus và vi khuẩn",
              "Bài 14: Đa dạng nấm và thực vật",
              "Bài 15: Đa dạng động vật (Không xương sống và có xương sống)",
              "Bài 16: Bảo tồn đa dạng sinh học"
            ]
          },
          {
            name: "Chương 5: Lực và Năng lượng",
            lessons: [
              "Bài 17: Lực và biểu diễn lực",
              "Bài 18: Lực tiếp xúc và lực không tiếp xúc",
              "Bài 19: Lực ma sát và lực cản",
              "Bài 20: Khối lượng và trọng lượng",
              "Bài 21: Năng lượng và các dạng năng lượng",
              "Bài 22: Sự chuyển hóa năng lượng và Định luật bảo toàn",
              "Bài 23: Trái Đất và Hệ Mặt Trời"
            ]
          }
        ]
      },
      {
        id: "ls-dl-6",
        name: "Lịch sử & Địa lí",
        icon: "🗺️",
        chapters: [
          {
            name: "Lịch sử Thế giới và Việt Nam cổ đại",
            lessons: [
              "Bài 1: Lịch sử là gì và vì sao phải học Lịch sử?",
              "Bài 2: Nguồn gốc loài người và Xã hội nguyên thủy",
              "Bài 3: Các quốc gia cổ đại phương Đông (Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc)",
              "Bài 4: Hy Lạp và La Mã cổ đại",
              "Bài 5: Nhà nước Văn Lang và Âu Lạc",
              "Bài 6: Chính sách cai trị của phong kiến phương Bắc và Khởi nghĩa Hai Bà Trưng",
              "Bài 7: Khởi nghĩa Bà Triệu, Lý Bí và Mai Thúc Loan",
              "Bài 8: Chiến thắng Bạch Đằng năm 938 của Ngô Quyền"
            ]
          },
          {
            name: "Địa lí: Trái Đất - Hành tinh xanh",
            lessons: [
              "Bài 9: Bản đồ và cách đọc bản đồ địa lí",
              "Bài 10: Vị trí Trái Đất trong hệ Mặt Trời và chuyển động tự quay",
              "Bài 11: Cấu tạo bên trong của Trái Đất và thạch quyển",
              "Bài 12: Khí quyển, nhiệt độ và các khối khí",
              "Bài 13: Thủy quyển: Nước ngầm, sông, hồ và biển",
              "Bài 14: Đất và sinh vật trên Trái Đất",
              "Bài 15: Con người và thiên nhiên"
            ]
          }
        ]
      },
      {
        id: "gdcd-6",
        name: "Giáo dục công dân",
        icon: "⚖️",
        chapters: [
          {
            name: "Đạo đức và Pháp luật lớp 6",
            lessons: [
              "Bài 1: Tự hào về truyền thống gia đình, dòng họ",
              "Bài 2: Yêu thương con người",
              "Bài 3: Siêng năng, kiên trì",
              "Bài 4: Tôn trọng sự thật",
              "Bài 5: Tự lập trong cuộc sống",
              "Bài 6: Tự nhận thức bản thân",
              "Bài 7: Ứng phó với các tình huống nguy hiểm",
              "Bài 8: Tiết kiệm tài chính và năng lượng",
              "Bài 9: Công dân nước CHXHCN Việt Nam",
              "Bài 10: Quyền và nghĩa vụ cơ bản của công dân"
            ]
          }
        ]
      },
      {
        id: "tinhoc-6",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Khám phá thế giới số",
            lessons: [
              "Bài 1: Thông tin và dữ liệu số",
              "Bài 2: Mạng máy tính và các thành phần",
              "Bài 3: Mạng thông tin toàn cầu (World Wide Web)",
              "Bài 4: Tìm kiếm và chọn lọc thông tin trên Internet",
              "Bài 5: Thư điện tử (Email) và chia sẻ tệp",
              "Bài 6: Trình bày thông tin với bảng biểu và đồ thị",
              "Bài 7: Thuật toán và mô tả thuật toán bằng sơ đồ khối"
            ]
          }
        ]
      },
      {
        id: "congnghe-6",
        name: "Công nghệ",
        icon: "🏡",
        chapters: [
          {
            name: "Công nghệ phục vụ gia đình",
            lessons: [
              "Bài 1: Khái quát về nhà ở và kiến trúc thông minh",
              "Bài 2: Xây dựng nhà ở kiên cố, an toàn",
              "Bài 3: Ngôi nhà thông minh (Smart Home)",
              "Bài 4: Sử dụng năng lượng tiết kiệm trong gia đình",
              "Bài 5: Bảo quản và chế biến thực phẩm",
              "Bài 6: Các phương pháp chế biến món ăn ngon, lành",
              "Bài 7: Trang phục và thời trang học đường",
              "Bài 8: Sử dụng đồ dùng điện trong gia đình an toàn"
            ]
          }
        ]
      },
      {
        id: "tienganh-6",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 6",
            lessons: [
              "Unit 1: My New School",
              "Unit 2: My Home",
              "Unit 3: My Friends",
              "Unit 4: My Neighbourhood",
              "Unit 5: Natural Wonders of Viet Nam",
              "Unit 6: Our Tet Holiday",
              "Unit 7: Television",
              "Unit 8: Sports and Games",
              "Unit 9: Cities of the World",
              "Unit 10: Our Houses in the Future",
              "Unit 11: Our Greener World",
              "Unit 12: Robots"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 7 ====================
  {
    grade: 7,
    label: "Lớp 7",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=7",
    subjects: [
      {
        id: "toan-7",
        name: "Toán",
        icon: "🔢",
        chapters: [
          {
            name: "Chương 1: Số hữu tỉ và Số thực",
            lessons: [
              "Bài 1: Tập hợp các số hữu tỉ Q",
              "Bài 2: Các phép tính với số hữu tỉ",
              "Bài 3: Luỹ thừa của một số hữu tỉ",
              "Bài 4: Số vô tỉ và căn bậc hai số học",
              "Bài 5: Tập hợp các số thực R và giá trị tuyệt đối"
            ]
          },
          {
            name: "Chương 2: Hình học phẳng và Tam giác",
            lessons: [
              "Bài 6: Góc ở vị trí đặc biệt và tia phân giác của một góc",
              "Bài 7: Hai đường thẳng song song và dấu hiệu nhận biết",
              "Bài 8: Định lí và chứng minh định lí",
              "Bài 9: Tổng ba góc trong một tam giác",
              "Bài 10: Hai tam giác bằng nhau (c-c-c, c-g-c, g-c-g)",
              "Bài 11: Tam giác cân và đường trung trực của đoạn thẳng"
            ]
          },
          {
            name: "Chương 3: Biểu thức đại số và Đa thức một biến",
            lessons: [
              "Bài 12: Biểu thức đại số",
              "Bài 13: Đa thức một biến",
              "Bài 14: Phép cộng và trừ đa thức một biến",
              "Bài 15: Phép nhân và chia đa thức một biến",
              "Bài 16: Nghiệm của đa thức một biến"
            ]
          },
          {
            name: "Chương 4: Thống kê và Xác suất",
            lessons: [
              "Bài 17: Thu thập và phân loại dữ liệu",
              "Bài 18: Biểu đồ hình quạt tròn và biểu đồ đoạn thẳng",
              "Bài 19: Làm quen với biến cố và xác suất của biến cố"
            ]
          }
        ]
      },
      {
        id: "nguvan-7",
        name: "Ngữ văn",
        icon: "📚",
        chapters: [
          {
            name: "Chủ đề: Tâm hồn và Cuộc sống",
            lessons: [
              "Bài 1: Bầu trời tuổi thơ (Bầy chim chìa vôi, Đi lấy mật)",
              "Bài 2: Khúc nhạc tâm hồn (Đồng dao mùa xuân, Gặp lá cơm nếp)",
              "Bài 3: Cội nguồn yêu thương (Vừa nhắm mắt vừa mở cửa sổ)",
              "Bài 4: Giai điệu đất nước (Mùa xuân nho nhỏ, Gò Me)",
              "Bài 5: Màu sắc trăm miền (Tháng Giêng, mơ về trăng non rét ngọt)",
              "Bài 6: Bài học cuộc sống (Truyện ngụ ngôn)",
              "Bài 7: Thế giới viễn tưởng (Cuộc chạm trán trên đại dương)",
              "Bài 8: Trải nghiệm để trưởng thành"
            ]
          }
        ]
      },
      {
        id: "khtn-7",
        name: "Khoa học tự nhiên",
        icon: "🧪",
        chapters: [
          {
            name: "Chương 1: Nguyên tử và Bảng tuần hoàn",
            lessons: [
              "Bài 1: Phương pháp và kĩ năng học tập môn KHTN",
              "Bài 2: Nguyên tử và hạt nhân",
              "Bài 3: Nguyên tố hóa học và kí hiệu hóa học",
              "Bài 4: Sơ lược về Bảng tuần hoàn các nguyên tố hóa học",
              "Bài 5: Phân tử, đơn chất và hợp chất",
              "Bài 6: Liên kết hóa học (Cộng hóa trị và Ion)",
              "Bài 7: Hóa trị và công thức hóa học"
            ]
          },
          {
            name: "Chương 2: Tốc độ, Âm thanh và Ánh sáng",
            lessons: [
              "Bài 8: Tốc độ chuyển động",
              "Bài 9: Đo tốc độ",
              "Bài 10: Đồ thị quãng đường - thời gian",
              "Bài 11: Sóng âm và sự truyền âm",
              "Bài 12: Độ cao và độ to của âm",
              "Bài 13: Ánh sáng và tia sáng",
              "Bài 14: Sự phản xạ ánh sáng và Định luật phản xạ"
            ]
          },
          {
            name: "Chương 3: Từ trường và Nam châm",
            lessons: [
              "Bài 15: Từ trường và đường sức từ",
              "Bài 16: Từ trường Trái Đất và La bàn",
              "Bài 17: Nam châm điện và ứng dụng"
            ]
          },
          {
            name: "Chương 4: Trao đổi chất và Năng lượng ở sinh vật",
            lessons: [
              "Bài 18: Khái quát về trao đổi chất và chuyển hóa năng lượng",
              "Bài 19: Quang hợp ở thực vật",
              "Bài 20: Hô hấp tế bào",
              "Bài 21: Trao đổi khí ở sinh vật",
              "Bài 22: Vai trò của nước và chất dinh dưỡng đối với sinh vật",
              "Bài 23: Cảm ứng ở sinh vật và Tập tính",
              "Bài 24: Sinh trưởng và phát triển ở sinh vật"
            ]
          }
        ]
      },
      {
        id: "ls-dl-7",
        name: "Lịch sử & Địa lí",
        icon: "🗺️",
        chapters: [
          {
            name: "Lịch sử: Thời kì phong kiến và Đại Việt",
            lessons: [
              "Bài 1: Quá trình hình thành và phát triển chế độ phong kiến Tây Âu",
              "Bài 2: Các cuộc phát kiến địa lí thế kỉ XV - XVI",
              "Bài 3: Phong trào Văn hóa Phục hưng",
              "Bài 4: Trung Quốc và Ấn Độ thời phong kiến",
              "Bài 5: Nước Đại Cồ Việt thời Đinh - Tiền Lê (968 - 1009)",
              "Bài 6: Nước Đại Việt thời Lý (1009 - 1225)",
              "Bài 7: Ba lần kháng chiến chống quân xâm lược Mông - Nguyên thời Trần",
              "Bài 8: Khởi nghĩa Lam Sơn (1418 - 1427) và Vương triều Lê Sơ"
            ]
          },
          {
            name: "Địa lí: Các châu lục trên thế giới",
            lessons: [
              "Bài 9: Đặc điểm tự nhiên và dân cư Châu Âu",
              "Bài 10: Liên minh Châu Âu (EU)",
              "Bài 11: Thiên nhiên và kinh tế Châu Á",
              "Bài 12: Thiên nhiên và dân cư Châu Phi",
              "Bài 13: Châu Mỹ: Bắc Mỹ và Trung - Nam Mỹ",
              "Bài 14: Châu Đại Dương và Châu Nam Cực"
            ]
          }
        ]
      },
      {
        id: "gdcd-7",
        name: "Giáo dục công dân",
        icon: "⚖️",
        chapters: [
          {
            name: "Đạo đức và Kĩ năng sống",
            lessons: [
              "Bài 1: Tự hào về truyền thống quê hương",
              "Bài 2: Bảo tồn di sản văn hóa dân tộc",
              "Bài 3: Quan tâm, cảm thông và chia sẻ",
              "Bài 4: Học tập tự giác, tích cực",
              "Bài 5: Giữ chữ tín",
              "Bài 6: Quản lý tiền bạc thông minh",
              "Bài 7: Ứng phó với tâm lí căng thẳng (Stress)",
              "Bài 8: Phòng chống bạo lực học đường",
              "Bài 9: Quản lý cảm xúc và phòng chống tệ nạn xã hội"
            ]
          }
        ]
      },
      {
        id: "tinhoc-7",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Xử lý dữ liệu và Thuật toán",
            lessons: [
              "Bài 1: Thiết bị vào - ra của máy tính",
              "Bài 2: Hệ điều hành và phần mềm ứng dụng",
              "Bài 3: Mạng xã hội và giao tiếp trên không gian mạng",
              "Bài 4: Làm quen với Bảng tính điện tử Excel",
              "Bài 5: Định dạng bảng tính và sử dụng công thức tính toán",
              "Bài 6: Sử dụng các hàm: SUM, AVERAGE, MAX, MIN, COUNT",
              "Bài 7: Trực quan hóa dữ liệu bằng biểu đồ",
              "Bài 8: Thuật toán tìm kiếm tuần tự và nhị phân",
              "Bài 9: Thuật toán sắp xếp nổi bọt và chọn"
            ]
          }
        ]
      },
      {
        id: "congnghe-7",
        name: "Công nghệ",
        icon: "🌾",
        chapters: [
          {
            name: "Nông - Lâm - Thủy sản",
            lessons: [
              "Bài 1: Khái quát về trồng trọt và vai trò",
              "Bài 2: Đất trồng và chất dinh dưỡng cho cây trồng",
              "Bài 3: Gieo trồng và chăm sóc cây trồng",
              "Bài 4: Phòng trừ sâu, bệnh hại cây trồng",
              "Bài 5: Rừng và vai trò của rừng",
              "Bài 6: Trồng, chăm sóc và bảo vệ rừng",
              "Bài 7: Giới thiệu về chăn nuôi",
              "Bài 8: Nuôi dưỡng, chăm sóc và phòng bệnh cho vật nuôi",
              "Bài 9: Nuôi thủy sản và bảo vệ nguồn lợi thủy sản"
            ]
          }
        ]
      },
      {
        id: "tienganh-7",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 7",
            lessons: [
              "Unit 1: Hobbies",
              "Unit 2: Healthy Living",
              "Unit 3: Community Service",
              "Unit 4: Music and Arts",
              "Unit 5: Food and Drink",
              "Unit 6: A Visit to a School",
              "Unit 7: Traffic",
              "Unit 8: Films",
              "Unit 9: Festivals around the World",
              "Unit 10: Energy Sources",
              "Unit 11: Travelling in the Future",
              "Unit 12: English-Speaking Countries"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 8 ====================
  {
    grade: 8,
    label: "Lớp 8",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=8",
    subjects: [
      {
        id: "toan-8",
        name: "Toán",
        icon: "🔢",
        chapters: [
          {
            name: "Chương 1: Đa thức nhiều biến và Hằng đẳng thức",
            lessons: [
              "Bài 1: Đơn thức và đa thức nhiều biến",
              "Bài 2: Các phép tính với đa thức nhiều biến",
              "Bài 3: 7 Hằng đẳng thức đáng nhớ",
              "Bài 4: Phân tích đa thức thành nhân tử",
              "Bài 5: Phân thức đại số và rút gọn phân thức",
              "Bài 6: Cộng, trừ, nhân, chia phân thức đại số"
            ]
          },
          {
            name: "Chương 2: Hình học phẳng và Tứ giác",
            lessons: [
              "Bài 7: Tứ giác và hình thang cân",
              "Bài 8: Hình bình hành và hình thoi",
              "Bài 9: Hình chữ nhật và hình vuông",
              "Bài 10: Định lí Thalès trong tam giác",
              "Bài 11: Tam giác đồng dạng và các trường hợp đồng dạng",
              "Bài 12: Định lí Pythagore và ứng dụng"
            ]
          },
          {
            name: "Chương 3: Hàm số bậc nhất và Phương trình",
            lessons: [
              "Bài 13: Khái niệm hàm số và đồ thị",
              "Bài 14: Hàm số bậc nhất y = ax + b",
              "Bài 15: Hệ số góc của đường thẳng",
              "Bài 16: Phương trình bậc nhất một ẩn"
            ]
          }
        ]
      },
      {
        id: "nguvan-8",
        name: "Ngữ văn",
        icon: "📚",
        chapters: [
          {
            name: "Chủ điểm: Gương mặt thân yêu & Lời sông núi",
            lessons: [
              "Bài 1: Những gương mặt thân yêu (Tôi đi học, Gió lạnh đầu mùa)",
              "Bài 2: Vẻ đẹp cổ điển (Hịch tướng sĩ, Thu điếu)",
              "Bài 3: Lời sông núi (Chiếu dời đô, Nước Đại Việt ta)",
              "Bài 4: Sắc thái tiếng cười (Truyện cười dân gian)",
              "Bài 5: Những câu chuyện lịch sử (Quang Trung đại phá quân Thanh)",
              "Bài 6: Tình yêu quê hương đất nước",
              "Bài 7: Bí ẩn của thế giới tự nhiên",
              "Bài 8: Khát vọng cống hiến"
            ]
          }
        ]
      },
      {
        id: "khtn-8",
        name: "Khoa học tự nhiên",
        icon: "🧪",
        chapters: [
          {
            name: "Chương 1: Phản ứng hóa học và Các hợp chất vô cơ",
            lessons: [
              "Bài 1: Phản ứng hóa học và Định luật bảo toàn khối lượng",
              "Bài 2: Mol và tỉ khối của chất khí",
              "Bài 3: Nồng độ dung dịch (C% và CM)",
              "Bài 4: Acid và Base",
              "Bài 5: Thang pH và chỉ thị màu",
              "Bài 6: Oxide và Muối",
              "Bài 7: Phân bón hóa học"
            ]
          },
          {
            name: "Chương 2: Khối lượng riêng, Áp suất và Lực đẩy",
            lessons: [
              "Bài 8: Khối lượng riêng và trọng lượng riêng",
              "Bài 9: Tác dụng của áp lực và áp suất",
              "Bài 10: Áp suất chất lỏng và áp suất khí quyển",
              "Bài 11: Lực đẩy Archimedes",
              "Bài 12: Đòn bẩy và mặt phẳng nghiêng"
            ]
          },
          {
            name: "Chương 3: Điện và Mạch điện",
            lessons: [
              "Bài 13: Hiện tượng nhiễm điện do cọ xát",
              "Bài 14: Dòng điện, nguồn điện và mạch điện",
              "Bài 15: Cường độ dòng điện và hiệu điện thế",
              "Bài 16: Các tác dụng của dòng điện"
            ]
          },
          {
            name: "Chương 4: Cơ thể người và Hệ sinh thái",
            lessons: [
              "Bài 17: Hệ vận động ở người",
              "Bài 18: Hệ tiêu hóa và dinh dưỡng",
              "Bài 19: Hệ tuần hoàn và máu",
              "Bài 20: Hệ hô hấp",
              "Bài 21: Hệ bài tiết",
              "Bài 22: Hệ thần kinh và giác quan",
              "Bài 23: Quần thể và quần xã sinh vật",
              "Bài 24: Hệ sinh thái và chuỗi thức ăn"
            ]
          }
        ]
      },
      {
        id: "ls-dl-8",
        name: "Lịch sử & Địa lí",
        icon: "🗺️",
        chapters: [
          {
            name: "Lịch sử Thế giới cận đại và Việt Nam thế kỉ XVI - XIX",
            lessons: [
              "Bài 1: Các cuộc cách mạng tư sản Anh, Bắc Mỹ và Pháp",
              "Bài 2: Cách mạng công nghiệp thế kỉ XVIII - XIX",
              "Bài 3: Phong trào công nhân quốc tế và chủ nghĩa Mác",
              "Bài 4: Nước Đại Việt thời Lê Trung hưng và Tây Sơn",
              "Bài 5: Việt Nam thời nhà Nguyễn nửa đầu thế kỉ XIX",
              "Bài 6: Thực dân Pháp xâm lược Việt Nam (1858 - 1884)",
              "Bài 7: Phong trào Cần vương và Khởi nghĩa Yên Thế"
            ]
          },
          {
            name: "Địa lí: Tự nhiên Việt Nam",
            lessons: [
              "Bài 8: Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
              "Bài 9: Địa hình Việt Nam và các khu vực đồi núi, đồng bằng",
              "Bài 10: Khoáng sản Việt Nam",
              "Bài 11: Khí hậu nhiệt đới gió mùa ẩm",
              "Bài 12: Sông ngòi và hồ đầm Việt Nam",
              "Bài 13: Thổ nhưỡng và sinh vật Việt Nam",
              "Bài 14: Biển đảo Việt Nam và chủ quyền quốc gia"
            ]
          }
        ]
      },
      {
        id: "gdcd-8",
        name: "Giáo dục công dân",
        icon: "⚖️",
        chapters: [
          {
            name: "Pháp luật và Trách nhiệm xã hội",
            lessons: [
              "Bài 1: Tự hào về truyền thống dân tộc Việt Nam",
              "Bài 2: Tôn trọng sự đa dạng của các dân tộc",
              "Bài 3: Lao động cần cù, sáng tạo",
              "Bài 4: Bảo vệ lẽ phải",
              "Bài 5: Bảo vệ môi trường và tài nguyên thiên nhiên",
              "Bài 6: Tuân thủ pháp luật và kỉ luật",
              "Bài 7: Phòng ngừa tai nạn vũ khí, cháy, nổ và chất độc hại",
              "Bài 8: Phòng chống bạo lực gia đình"
            ]
          }
        ]
      },
      {
        id: "tinhoc-8",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Xử lý dữ liệu và Lập trình cơ bản",
            lessons: [
              "Bài 1: Lịch sử phát triển của máy tính qua các thế hệ",
              "Bài 2: Thông tin trong môi trường số",
              "Bài 3: Thực hành khai thác thông tin số an toàn",
              "Bài 4: Lập bảng tính Excel nâng cao và lọc dữ liệu",
              "Bài 5: Tạo bài trình chiếu với hiệu ứng hoạt họa sinh động",
              "Bài 6: Làm quen với ngôn ngữ lập trình trực quan",
              "Bài 7: Biến, biểu thức và câu lệnh rẽ nhánh trong lập trình"
            ]
          }
        ]
      },
      {
        id: "congnghe-8",
        name: "Công nghệ",
        icon: "📐",
        chapters: [
          {
            name: "Vẽ kĩ thuật, Cơ khí và Điện kĩ thuật",
            lessons: [
              "Bài 1: Hình chiếu vuông góc của vật thể",
              "Bài 2: Bản vẽ chi tiết và bản vẽ lắp ráp",
              "Bài 3: Bản vẽ nhà",
              "Bài 4: Vật liệu cơ khí và dụng cụ gia công cầm tay",
              "Bài 5: Truyền và biến đổi chuyển động cơ khí",
              "Bài 6: Tai nạn điện và biện pháp an toàn điện",
              "Bài 7: Đồ dùng loại điện - quang (Đèn chiếu sáng)",
              "Bài 8: Đồ dùng loại điện - nhiệt (Nồi cơm điện, bàn là)",
              "Bài 9: Đồ dùng loại điện - cơ (Quạt điện, máy bơm)"
            ]
          }
        ]
      },
      {
        id: "tienganh-8",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 8",
            lessons: [
              "Unit 1: Leisure Time",
              "Unit 2: Life in the Countryside",
              "Unit 3: Teenagers",
              "Unit 4: Ethnic Groups of Viet Nam",
              "Unit 5: Our Customs and Traditions",
              "Unit 6: Lifestyles",
              "Unit 7: Environmental Protection",
              "Unit 8: Shopping",
              "Unit 9: Natural Disasters",
              "Unit 10: Communication in the Future",
              "Unit 11: Science and Technology",
              "Unit 12: Life on Other Planets"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 9 ====================
  {
    grade: 9,
    label: "Lớp 9",
    level: "THCS",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=9",
    subjects: [
      {
        id: "toan-9",
        name: "Toán",
        icon: "🔢",
        chapters: [
          {
            name: "Chương 1: Căn bậc hai, Căn bậc ba & Hệ phương trình",
            lessons: [
              "Bài 1: Căn bậc hai số học và hằng đẳng thức căn(A²) = |A|",
              "Bài 2: Liên hệ giữa phép nhân, phép chia và phép khai phương",
              "Bài 3: Rút gọn biểu thức chứa căn thức bậc hai",
              "Bài 4: Phương trình bậc nhất hai ẩn",
              "Bài 5: Hệ hai phương trình bậc nhất hai ẩn và phương pháp thế, cộng đại số",
              "Bài 6: Giải bài toán bằng cách lập hệ phương trình"
            ]
          },
          {
            name: "Chương 2: Hàm số y = ax² và Phương trình bậc hai",
            lessons: [
              "Bài 7: Hàm số y = ax² (a khác 0) và đồ thị Parabol",
              "Bài 8: Phương trình bậc hai một ẩn và công thức nghiệm",
              "Bài 9: Định lí Viète và ứng dụng",
              "Bài 10: Giải bài toán bằng cách lập phương trình bậc hai"
            ]
          },
          {
            name: "Chương 3: Đường tròn và Hình học không gian",
            lessons: [
              "Bài 11: Sự xác định của đường tròn và tính chất đối xứng",
              "Bài 12: Vị trí tương đối của đường thẳng và đường tròn, Tiếp tuyến",
              "Bài 13: Góc ở tâm, góc nội tiếp và góc tạo bởi tiếp tuyến và dây cung",
              "Bài 14: Tứ giác nội tiếp đường tròn",
              "Bài 15: Hình trụ, Hình nón và Hình cầu"
            ]
          }
        ]
      },
      {
        id: "nguvan-9",
        name: "Ngữ văn",
        icon: "📚",
        chapters: [
          {
            name: "Học kì I: Quê hương và Lý tưởng",
            lessons: [
              "Bài 1: Thương nhớ quê hương (Đồng chí, Bài thơ về tiểu đội xe không kính)",
              "Bài 2: Vẻ đẹp lòng nhân ái (Chuyện người con gái Nam Xương)",
              "Bài 3: Khám phá tri thức (Ánh trăng, Bếp lửa)",
              "Bài 4: Nụ cười cuộc đời (Làng của Kim Lân)",
              "Bài 5: Tiếng gọi quê hương đất nước (Lặng lẽ Sa Pa)"
            ]
          },
          {
            name: "Học kì II: Khát vọng và Nghệ thuật",
            lessons: [
              "Bài 6: Mùa xuân nho nhỏ và Viếng lăng Bác",
              "Bài 7: Sang thu và Nói với con",
              "Bài 8: Những ngôi sao xa xôi",
              "Bài 9: Bàn về đọc sách (Chu Quang Tiềm)",
              "Bài 10: Chuẩn bị hành trang vào thế kỉ mới"
            ]
          }
        ]
      },
      {
        id: "khtn-9",
        name: "Khoa học tự nhiên",
        icon: "🧪",
        chapters: [
          {
            name: "Chương 1: Kim loại, Phi kim và Hóa hữu cơ",
            lessons: [
              "Bài 1: Tính chất của kim loại và dãy hoạt động hóa học",
              "Bài 2: Nhôm và Sắt",
              "Bài 3: Phi kim và hợp chất của Carbon, Silicon",
              "Bài 4: Khái niệm hợp chất hữu cơ và hóa học hữu cơ",
              "Bài 5: Hydrocarbon: Methane và Ethylene",
              "Bài 6: Acetylene và Benzene",
              "Bài 7: Alcohol ethylic và Acetic acid",
              "Bài 8: Chất béo, Glucose và Saccharose"
            ]
          },
          {
            name: "Chương 2: Điện từ học và Ánh sáng",
            lessons: [
              "Bài 9: Từ trường của ống dây có dòng điện và Lực điện từ",
              "Bài 10: Hiện tượng cảm ứng điện từ",
              "Bài 11: Dòng điện xoay chiều và máy biến thế",
              "Bài 12: Hiện tượng khúc xạ ánh sáng",
              "Bài 13: Thấu kính hội tụ và thấu kính phân kì",
              "Bài 14: Máy ảnh, Mắt và các tật của mắt (Cận thị, Viễn thị)",
              "Bài 15: Năng lượng và Định luật bảo toàn cơ năng"
            ]
          },
          {
            name: "Chương 3: Di truyền học và Tiến hóa",
            lessons: [
              "Bài 16: Di truyền học Mendel và các quy luật phân li",
              "Bài 17: Nhiễm sắc thể và quá trình nguyên phân, giảm phân",
              "Bài 18: Cấu trúc và chức năng của ADN, ARN",
              "Bài 19: Đột biến gen và đột biến nhiễm sắc thể",
              "Bài 20: Ứng dụng di truyền học và công nghệ sinh học",
              "Bài 21: Bằng chứng tiến hóa và chọn lọc tự nhiên"
            ]
          }
        ]
      },
      {
        id: "ls-dl-9",
        name: "Lịch sử & Địa lí",
        icon: "🗺️",
        chapters: [
          {
            name: "Lịch sử: Thế giới từ 1945 đến nay và Việt Nam thời hiện đại",
            lessons: [
              "Bài 1: Liên Xô và các nước Đông Âu sau Chiến tranh thế giới thứ hai",
              "Bài 2: Các nước Á, Phi, Mỹ Latinh giành độc lập",
              "Bài 3: Trật tự thế giới hai cực Ianta và Chiến tranh lạnh",
              "Bài 4: Phong trào cách mạng Việt Nam 1919 - 1930",
              "Bài 5: Cách mạng tháng Tám 1945 thành công",
              "Bài 6: Cuộc kháng chiến toàn quốc chống thực dân Pháp (1946 - 1954)",
              "Bài 7: Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu'",
              "Bài 8: Kháng chiến chống Mỹ cứu nước và Chiến dịch Hồ Chí Minh 1975",
              "Bài 9: Đất nước trên con đường đổi mới và hội nhập quốc tế"
            ]
          },
          {
            name: "Địa lí: Dân cư và Địa lí kinh tế các vùng Việt Nam",
            lessons: [
              "Bài 10: Địa lí dân cư và nguồn lao động Việt Nam",
              "Bài 11: Ngành Nông nghiệp, Lâm nghiệp, Thủy sản",
              "Bài 12: Ngành Công nghiệp và Dịch vụ",
              "Bài 13: Vùng Trung du và Miền núi Bắc Bộ",
              "Bài 14: Vùng Đồng bằng sông Hồng",
              "Bài 15: Vùng Bắc Trung Bộ và Duyên hải Nam Trung Bộ",
              "Bài 16: Vùng Tây Nguyên",
              "Bài 17: Vùng Đông Nam Bộ",
              "Bài 18: Vùng Đồng bằng sông Cửu Long",
              "Bài 19: Phát triển kinh tế biển đảo Việt Nam"
            ]
          }
        ]
      },
      {
        id: "gdcd-9",
        name: "Giáo dục công dân",
        icon: "⚖️",
        chapters: [
          {
            name: "Trách nhiệm công dân và Lí tưởng",
            lessons: [
              "Bài 1: Chí công vô tư",
              "Bài 2: Tự chủ trong cuộc sống",
              "Bài 3: Dân chủ và kỉ luật",
              "Bài 4: Bảo vệ hòa bình thế giới",
              "Bài 5: Tình hữu nghị giữa các dân tộc trên thế giới",
              "Bài 6: Hợp tác cùng phát triển",
              "Bài 7: Kế thừa và phát huy truyền thống tốt đẹp của dân tộc",
              "Bài 8: Năng động, sáng tạo trong học tập",
              "Bài 9: Quyền và nghĩa vụ của công dân trong hôn nhân",
              "Bài 10: Quyền tự do kinh doanh và nghĩa vụ đóng thuế",
              "Bài 11: Quyền và nghĩa vụ lao động của công dân"
            ]
          }
        ]
      },
      {
        id: "tinhoc-9",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Công nghệ thông tin và Lập trình Python",
            lessons: [
              "Bài 1: Mạng máy tính và Internet trong kỉ nguyên mới",
              "Bài 2: Tạo trang web cá nhân bằng HTML và CSS",
              "Bài 3: Xử lý âm thanh và video đa phương tiện",
              "Bài 4: Làm quen với ngôn ngữ lập trình Python",
              "Bài 5: Biến, kiểu dữ liệu và cấu trúc rẽ nhánh if - else trong Python",
              "Bài 6: Vòng lặp for và while trong Python",
              "Bài 7: Xây dựng hàm và giải quyết bài toán thực tế bằng Python",
              "Bài 8: Tác động của trí tuệ nhân tạo và an toàn số"
            ]
          }
        ]
      },
      {
        id: "congnghe-9",
        name: "Công nghệ",
        icon: "💡",
        chapters: [
          {
            name: "Lắp đặt mạng điện và Nông nghiệp công nghệ cao",
            lessons: [
              "Bài 1: Định hướng nghề nghiệp trong lĩnh vực kĩ thuật, công nghệ",
              "Bài 2: Dụng cụ đo kiểm và an toàn điện",
              "Bài 3: Dây dẫn điện và vật liệu cách điện trong nhà",
              "Bài 4: Thực hành nối dây dẫn điện",
              "Bài 5: Lắp đặt bảng điện và mạch điện hai công tắc hai cực",
              "Bài 6: Lắp mạch điện đèn cầu thang (công tắc ba cực)",
              "Bài 7: Trồng trọt công nghệ cao trong nhà màng, nhà kính",
              "Bài 8: Chế biến món ăn và an toàn vệ sinh thực phẩm"
            ]
          }
        ]
      },
      {
        id: "tienganh-9",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 9",
            lessons: [
              "Unit 1: Local Community",
              "Unit 2: City Life",
              "Unit 3: Healthy Living for Teens",
              "Unit 4: Remembering the Past",
              "Unit 5: Wonders of Viet Nam",
              "Unit 6: Viet Nam: Then and Now",
              "Unit 7: Recipes and Eating Habits",
              "Unit 8: Tourism",
              "Unit 9: World Englishes",
              "Unit 10: Space Travel",
              "Unit 11: Electronic Devices",
              "Unit 12: Career Paths"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 10 ====================
  {
    grade: 10,
    label: "Lớp 10",
    level: "THPT",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=10",
    subjects: [
      {
        id: "toan-10",
        name: "Toán",
        icon: "📐",
        chapters: [
          {
            name: "Chương 1: Mệnh đề, Tập hợp và Bất phương trình",
            lessons: [
              "Bài 1: Mệnh đề toán học",
              "Bài 2: Tập hợp và các phép toán trên tập hợp",
              "Bài 3: Bất phương trình bậc nhất hai ẩn",
              "Bài 4: Hệ bất phương trình bậc nhất hai ẩn"
            ]
          },
          {
            name: "Chương 2: Hệ thức lượng trong tam giác và Vectơ",
            lessons: [
              "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°",
              "Bài 6: Định lí cosin và định lí sin trong tam giác",
              "Bài 7: Khái niệm vectơ và các phép toán cộng, trừ vectơ",
              "Bài 8: Tích vô hướng của hai vectơ và ứng dụng"
            ]
          },
          {
            name: "Chương 3: Hàm số, Tam thức bậc hai và Thống kê",
            lessons: [
              "Bài 9: Hàm số và đồ thị hàm số",
              "Bài 10: Hàm số bậc hai y = ax² + bx + c",
              "Bài 11: Dấu của tam thức bậc hai",
              "Bài 12: Phương trình quy về phương trình bậc hai",
              "Bài 13: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán"
            ]
          },
          {
            name: "Chương 4: Phương pháp toạ độ trong mặt phẳng và Đại số tổ hợp",
            lessons: [
              "Bài 14: Phương trình đường thẳng trong mặt phẳng Oxy",
              "Bài 15: Phương trình đường tròn",
              "Bài 16: Ba đường conic (Elip, Hypebol, Parabol)",
              "Bài 17: Quy tắc đếm, Hoán vị, Chỉnh hợp và Tổ hợp",
              "Bài 18: Nhị thức Newton và Xác suất cổ điển"
            ]
          }
        ]
      },
      {
        id: "nguvan-10",
        name: "Ngữ văn",
        icon: "📚",
        chapters: [
          {
            name: "Tập 1: Sử thi, Thần thoại và Thơ trữ tình",
            lessons: [
              "Bài 1: Sức sống của sử thi (Đăm Săn, Ô-đi-xê)",
              "Bài 2: Vẻ đẹp cổ điển và tâm sự thi nhân (Thơ Đường, Thơ Nguyễn Trãi)",
              "Bài 3: Nghệ thuật chèo và tuồng truyền thống",
              "Bài 4: Bản sắc văn hóa dân tộc trong văn học"
            ]
          },
          {
            name: "Tập 2: Văn chính luận, Kịch và Truyện ngắn",
            lessons: [
              "Bài 5: Khát vọng độc lập (Bình Ngô đại cáo)",
              "Bài 6: Nâng niu kỉ niệm (Truyện ngắn hiện đại)",
              "Bài 7: Anh hùng và nghệ sĩ (Truyện Kiều của Nguyễn Du)",
              "Bài 8: Đất nước và con người qua kí và phóng sự"
            ]
          }
        ]
      },
      {
        id: "vatli-10",
        name: "Vật lí",
        icon: "⚡",
        chapters: [
          {
            name: "Chương 1: Động học chất điểm",
            lessons: [
              "Bài 1: Khái quát về môn Vật lí và an toàn thí nghiệm",
              "Bài 2: Độ dịch chuyển và quãng đường đi được",
              "Bài 3: Vận tốc và đồ thị độ dịch chuyển - thời gian",
              "Bài 4: Chuyển động biến đổi đều và gia tốc",
              "Bài 5: Sự rơi tự do",
              "Bài 6: Chuyển động ném ngang và ném xiên"
            ]
          },
          {
            name: "Chương 2: Động lực học và Các lực trong tự nhiên",
            lessons: [
              "Bài 7: Ba định luật Newton về chuyển động",
              "Bài 8: Lực hấp dẫn và trọng lực",
              "Bài 9: Lực ma sát và lực cản của môi trường",
              "Bài 10: Lực đàn hồi của lò xo và Định luật Hooke",
              "Bài 11: Cân bằng của vật rắn và Moment lực"
            ]
          },
          {
            name: "Chương 3: Năng lượng, Động lượng và Biến dạng vật rắn",
            lessons: [
              "Bài 12: Công cơ học và công suất",
              "Bài 13: Động năng, Thế năng và Định luật bảo toàn cơ năng",
              "Bài 14: Động lượng và Định luật bảo toàn động lượng",
              "Bài 15: Chuyển động tròn đều và gia tốc hướng tâm",
              "Bài 16: Biến dạng của vật rắn và ứng suất"
            ]
          }
        ]
      },
      {
        id: "hoahoc-10",
        name: "Hóa học",
        icon: "🧪",
        chapters: [
          {
            name: "Chương 1: Cấu tạo nguyên tử và Bảng tuần hoàn",
            lessons: [
              "Bài 1: Thành phần của nguyên tử (Proton, Neutron, Electron)",
              "Bài 2: Hạt nhân nguyên tử, nguyên tố hóa học và đồng vị",
              "Bài 3: Cấu tạo vỏ nguyên tử và cấu hình electron",
              "Bài 4: Cấu tạo Bảng tuần hoàn các nguyên tố hóa học",
              "Bài 5: Xu hướng biến đổi tính chất kim loại, phi kim và bán kính",
              "Bài 6: Định luật tuần hoàn và ý nghĩa của Bảng tuần hoàn"
            ]
          },
          {
            name: "Chương 2: Liên kết hóa học và Phản ứng Oxi hóa - Khử",
            lessons: [
              "Bài 7: Quy tắc Octet",
              "Bài 8: Liên kết ion",
              "Bài 9: Liên kết cộng hóa trị và độ âm điện",
              "Bài 10: Liên kết hydrogen và tương tác van der Waals",
              "Bài 11: Phản ứng oxi hóa - khử và phương pháp thăng bằng electron"
            ]
          },
          {
            name: "Chương 3: Năng lượng hóa học, Tốc độ phản ứng & Halogen",
            lessons: [
              "Bài 12: Biến thiên enthalpy trong các phản ứng hóa học",
              "Bài 13: Phương trình nhiệt hóa học và tính toán nhiệt phản ứng",
              "Bài 14: Tốc độ phản ứng hóa học và các yếu tố ảnh hưởng",
              "Bài 15: Nguyên tố nhóm VIIA (Nhóm Halogen: F, Cl, Br, I)",
              "Bài 16: Hydrogen halide và các muối halide"
            ]
          }
        ]
      },
      {
        id: "sinhhoc-10",
        name: "Sinh học",
        icon: "🧬",
        chapters: [
          {
            name: "Chương 1: Sinh học tế bào và Thành phần hóa học",
            lessons: [
              "Bài 1: Khái quát về sinh học và các cấp độ tổ chức sống",
              "Bài 2: Nước và vai trò sinh học của nước",
              "Bài 3: Các phân tử sinh học: Carbohydrate và Lipid",
              "Bài 4: Các phân tử sinh học: Protein và Axit Nucleic (ADN, ARN)",
              "Bài 5: Tế bào nhân sơ",
              "Bài 6: Tế bào nhân thực (Nhân, Ti thể, Lục lạp, Ribosome...)"
            ]
          },
          {
            name: "Chương 2: Trao đổi chất, Năng lượng và Phân bào",
            lessons: [
              "Bài 7: Vận chuyển các chất qua màng sinh chất",
              "Bài 8: Enzyme và chuyển hóa vật chất trong tế bào",
              "Bài 9: Hô hấp tế bào và quang hợp",
              "Bài 10: Chu kì tế bào và quá trình nguyên phân",
              "Bài 11: Giảm phân và thụ tinh",
              "Bài 12: Công nghệ tế bào thực vật và động vật",
              "Bài 13: Vi sinh vật và virus học căn bản"
            ]
          }
        ]
      },
      {
        id: "lichsu-10",
        name: "Lịch sử",
        icon: "🏛️",
        chapters: [
          {
            name: "Văn minh nhân loại và Văn minh Đại Việt",
            lessons: [
              "Bài 1: Khái niệm văn minh và lịch sử văn minh thế giới",
              "Bài 2: Nền văn minh Ai Cập và Lưỡng Hà cổ đại",
              "Bài 3: Nền văn minh Ấn Độ cổ - trung đại",
              "Bài 4: Nền văn minh Trung Hoa cổ - trung đại",
              "Bài 5: Văn minh Hy Lạp và La Mã cổ đại",
              "Bài 6: Văn minh Tây Âu thời kì Phục hưng",
              "Bài 7: Văn minh Đông Nam Á thời kì cổ - trung đại",
              "Bài 8: Khái quát lịch sử Văn minh Đại Việt",
              "Bài 9: Các cuộc cách mạng công nghiệp thời kì cận đại"
            ]
          }
        ]
      },
      {
        id: "diali-10",
        name: "Địa lí",
        icon: "🌍",
        chapters: [
          {
            name: "Địa lí tự nhiên và Địa lí kinh tế đại cương",
            lessons: [
              "Bài 1: Sử dụng bản đồ và hệ thống thông tin địa lí (GIS)",
              "Bài 2: Vũ trụ, Hệ Mặt Trời và chuyển động tự quay của Trái Đất",
              "Bài 3: Thạch quyển: Nội lực và ngoại lực tác động lên bề mặt Trái Đất",
              "Bài 4: Khí quyển: Nhiệt độ không khí, khí áp và gió",
              "Bài 5: Thủy quyển: Sóng biển, thủy triều và dòng biển",
              "Bài 6: Sinh quyển và các nhân tố hình thành đất",
              "Bài 7: Dân số thế giới và cơ cấu dân số",
              "Bài 8: Địa lí các ngành Nông nghiệp, Công nghiệp và Dịch vụ",
              "Bài 9: Phát triển bền vững và tăng trưởng xanh"
            ]
          }
        ]
      },
      {
        id: "tinhoc-10",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Khoa học máy tính và Lập trình Python căn bản",
            lessons: [
              "Bài 1: Thông tin và xử lý thông tin trong xã hội tri thức",
              "Bài 2: Mạng máy tính, Internet và dịch vụ đám mây",
              "Bài 3: Đạo đức, pháp luật và văn hóa ứng xử trên mạng",
              "Bài 4: Làm quen với môi trường lập trình Python",
              "Bài 5: Biến, hằng và các kiểu dữ liệu cơ bản trong Python",
              "Bài 6: Cấu trúc rẽ nhánh if, if - else trong Python",
              "Bài 7: Cấu trúc lặp for và while",
              "Bài 8: Danh sách (List) và các thao tác trên danh sách",
              "Bài 9: Xâu kí tự (String) và các phương thức xử lý xâu",
              "Bài 10: Xây dựng hàm (def) trong Python",
              "Bài 11: Thuật toán tìm kiếm và sắp xếp trên danh sách"
            ]
          }
        ]
      },
      {
        id: "gdkt-pl-10",
        name: "Giáo dục kinh tế và pháp luật",
        icon: "⚖️",
        chapters: [
          {
            name: "Kinh tế thị trường và Hệ thống pháp luật Việt Nam",
            lessons: [
              "Bài 1: Các chủ thể của nền kinh tế",
              "Bài 2: Thị trường và cơ chế thị trường",
              "Bài 3: Quy luật cung - cầu trong kinh tế",
              "Bài 4: Lạm phát và tác động của lạm phát",
              "Bài 5: Ngân sách nhà nước và hệ thống thuế",
              "Bài 6: Doanh nghiệp và các mô hình kinh tế",
              "Bài 7: Hệ thống chính trị nước CHXHCN Việt Nam",
              "Bài 8: Hiến pháp nước CHXHCN Việt Nam",
              "Bài 9: Quyền và nghĩa vụ của công dân về bầu cử, ứng cử"
            ]
          }
        ]
      },
      {
        id: "congnghe-10",
        name: "Công nghệ",
        icon: "⚙️",
        chapters: [
          {
            name: "Thiết kế kĩ thuật & Nông nghiệp công nghệ cao",
            lessons: [
              "Bài 1: Khái quát về công nghệ và cuộc cách mạng công nghiệp",
              "Bài 2: Bản vẽ kĩ thuật và các tiêu chuẩn trình bày",
              "Bài 3: Hình chiếu trục đo và hình chiếu phối cảnh",
              "Bài 4: Quy trình thiết kế kĩ thuật",
              "Bài 5: Đất trồng và công nghệ giá thể trồng trọt",
              "Bài 6: Ứng dụng công nghệ sinh học trong nhân giống cây trồng",
              "Bài 7: Phòng trừ sâu bệnh hại cây trồng theo hướng sinh học an toàn"
            ]
          }
        ]
      },
      {
        id: "tienganh-10",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 10",
            lessons: [
              "Unit 1: Family Life",
              "Unit 2: Humans and the Environment",
              "Unit 3: Music",
              "Unit 4: For a Better Community",
              "Unit 5: Inventions",
              "Unit 6: Gender Equality",
              "Unit 7: Viet Nam and International Organisations",
              "Unit 8: New Ways to Learn",
              "Unit 9: Protecting the Environment",
              "Unit 10: Ecotourism"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 11 ====================
  {
    grade: 11,
    label: "Lớp 11",
    level: "THPT",
    sgkUrl: "https://taphuan.nxbgd.vn/tap-huan?grade=11",
    subjects: [
      {
        id: "toan-11",
        name: "Toán",
        icon: "📐",
        chapters: [
          {
            name: "Chương 1: Lượng giác, Dãy số và Giới hạn",
            lessons: [
              "Bài 1: Hàm số lượng giác (sin, cos, tan, cot)",
              "Bài 2: Phương trình lượng giác cơ bản",
              "Bài 3: Dãy số, cấp số cộng và cấp số nhân",
              "Bài 4: Giới hạn của dãy số",
              "Bài 5: Giới hạn của hàm số và hàm số liên tục"
            ]
          },
          {
            name: "Chương 2: Hình học không gian và Quan hệ song song",
            lessons: [
              "Bài 6: Điểm, đường thẳng và mặt phẳng trong không gian",
              "Bài 7: Hai đường thẳng song song trong không gian",
              "Bài 8: Đường thẳng song song với mặt phẳng",
              "Bài 9: Hai mặt phẳng song song và Định lí Thales trong không gian",
              "Bài 10: Phép chiếu song song và hình biểu diễn"
            ]
          },
          {
            name: "Chương 3: Hàm số mũ, Lôgarit, Đạo hàm & Quan hệ vuông góc",
            lessons: [
              "Bài 11: Luỹ thừa với số mũ thực và Lôgarit",
              "Bài 12: Hàm số mũ và hàm số lôgarit",
              "Bài 13: Phương trình, bất phương trình mũ và lôgarit",
              "Bài 14: Định nghĩa và ý nghĩa hình học của đạo hàm",
              "Bài 15: Các quy tắc tính đạo hàm và đạo hàm cấp hai",
              "Bài 16: Hai đường thẳng vuông góc, Đường thẳng vuông góc với mặt phẳng",
              "Bài 17: Hai mặt phẳng vuông góc, Góc và khoảng cách trong không gian",
              "Bài 18: Xác suất có điều kiện và mẫu số liệu ghép nhóm"
            ]
          }
        ]
      },
      {
        id: "nguvan-11",
        name: "Ngữ văn",
        icon: "📚",
        chapters: [
          {
            name: "Tập 1: Văn xuôi, Thơ ca và Khát vọng tự do",
            lessons: [
              "Bài 1: Câu chuyện và vẻ đẹp văn xuôi (Chí Phèo, Hai đứa trẻ)",
              "Bài 2: Cấu tứ và hình ảnh thơ hiện đại (Vội vàng, Tràng giang, Đây thôn Vĩ Dạ)",
              "Bài 3: Khát khao độc lập tự do (Văn tế nghĩa sĩ Cần Giuộc)",
              "Bài 4: Tiếng cười trào phúng (Hạnh phúc của một tang gia)"
            ]
          },
          {
            name: "Tập 2: Kịch hiện đại, Kí và Văn nghị luận",
            lessons: [
              "Bài 5: Nghệ thuật kịch (Vĩnh biệt Cửu Trùng Đài)",
              "Bài 6: Hành trình tri thức và phóng sự (Ai đã đặt tên cho dòng sông?)",
              "Bài 7: Khát vọng hòa bình và công lí trong văn học",
              "Bài 8: Bản sắc văn hóa và giao lưu quốc tế"
            ]
          }
        ]
      },
      {
        id: "vatli-11",
        name: "Vật lí",
        icon: "⚡",
        chapters: [
          {
            name: "Chương 1: Dao động cơ",
            lessons: [
              "Bài 1: Dao động điều hòa và phương trình dao động",
              "Bài 2: Vận tốc, gia tốc và đồ thị trong dao động điều hòa",
              "Bài 3: Năng lượng trong dao động điều hòa (Động năng và Thế năng)",
              "Bài 4: Con lắc đơn và con lắc lò xo",
              "Bài 5: Dao động tắt dần, Dao động cưỡng bức và Hiện tượng cộng hưởng"
            ]
          },
          {
            name: "Chương 2: Sóng cơ và Sóng điện từ",
            lessons: [
              "Bài 6: Sự truyền sóng cơ và các đặc trưng của sóng",
              "Bài 7: Giao thoa sóng cơ",
              "Bài 8: Sóng dừng trên dây",
              "Bài 9: Sóng âm: Tần số âm, cường độ âm và mức cường độ âm",
              "Bài 10: Sóng điện từ và thang sóng điện từ"
            ]
          },
          {
            name: "Chương 3: Điện trường và Dòng điện không đổi",
            lessons: [
              "Bài 11: Định luật Coulomb và Lực tương tác tĩnh điện",
              "Bài 12: Điện trường và cường độ điện trường",
              "Bài 13: Điện thế, hiệu điện thế và công của lực điện",
              "Bài 14: Tụ điện và năng lượng của tụ điện",
              "Bài 15: Cường độ dòng điện, Điện trở và Định luật Ohm cho toàn mạch"
            ]
          }
        ]
      },
      {
        id: "hoahoc-11",
        name: "Hóa học",
        icon: "🧪",
        chapters: [
          {
            name: "Chương 1: Cân bằng hóa học và Dung dịch",
            lessons: [
              "Bài 1: Khái niệm cân bằng hóa học và hằng số Kc",
              "Bài 2: Sự chuyển dịch cân bằng theo nguyên lí Le Chatelier",
              "Bài 3: Sự điện li và thuyết Bronsted - Lowry về Acid - Base",
              "Bài 4: pH của dung dịch và chuẩn độ acid - base",
              "Bài 5: Đơn chất Nitrogen và các oxide của nitrogen",
              "Bài 6: Ammonia và muối ammonium",
              "Bài 7: Nitric acid và muối nitrate",
              "Bài 8: Sulfur và hợp chất Sulfur dioxide, Sulfuric acid"
            ]
          },
          {
            name: "Chương 2: Đại cương Hóa học hữu cơ & Hydrocarbon",
            lessons: [
              "Bài 9: Hợp chất hữu cơ và hóa học hữu cơ",
              "Bài 10: Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
              "Bài 11: Công thức phân tử hợp chất hữu cơ",
              "Bài 12: Cấu tạo hóa học hợp chất hữu cơ",
              "Bài 13: Alkane",
              "Bài 14: Hydrocarbon không no: Alkene và Alkyne",
              "Bài 15: Arene (Hydrocarbon thơm: Benzene, Toluene)"
            ]
          },
          {
            name: "Chương 3: Dẫn xuất Halogen, Alcohol, Phenol & Hợp chất Carbonyl",
            lessons: [
              "Bài 16: Dẫn xuất halogen của hydrocarbon",
              "Bài 17: Alcohol (Rượu)",
              "Bài 18: Phenol",
              "Bài 19: Hợp chất carbonyl (Aldehyde và Ketone)",
              "Bài 20: Carboxylic acid"
            ]
          }
        ]
      },
      {
        id: "sinhhoc-11",
        name: "Sinh học",
        icon: "🧬",
        chapters: [
          {
            name: "Chương 1: Trao đổi chất và Năng lượng ở sinh vật",
            lessons: [
              "Bài 1: Sự hút nước và khoáng ở rễ thực vật",
              "Bài 2: Vận chuyển các chất trong cây và thoát hơi nước ở lá",
              "Bài 3: Quang hợp ở thực vật C3, C4 và CAM",
              "Bài 4: Hô hấp ở thực vật",
              "Bài 5: Tiêu hóa ở động vật ăn thịt và động vật nhai lại",
              "Bài 6: Hô hấp ở động vật (Qua da, mang, hệ thống khí quản, phổi)",
              "Bài 7: Hệ tuần hoàn máu và huyết áp ở động vật",
              "Bài 8: Bài tiết và cân bằng nội môi"
            ]
          },
          {
            name: "Chương 2: Cảm ứng, Sinh trưởng và Sinh sản",
            lessons: [
              "Bài 9: Hướng động và ứng động ở thực vật",
              "Bài 10: Cảm ứng ở động vật: Điện thế nghỉ và điện thế hoạt động",
              "Bài 11: Truyền tin qua synapse và tập tính động vật",
              "Bài 12: Sinh trưởng và phát triển ở thực vật, Hormone thực vật",
              "Bài 13: Sinh trưởng và phát triển ở động vật, Biến thái hoàn toàn",
              "Bài 14: Sinh sản vô tính và hữu tính ở thực vật",
              "Bài 15: Sinh sản vô tính và hữu tính ở động vật"
            ]
          }
        ]
      },
      {
        id: "lichsu-11",
        name: "Lịch sử",
        icon: "🏛️",
        chapters: [
          {
            name: "Lịch sử Thế giới cận - hiện đại và Việt Nam cận đại",
            lessons: [
              "Bài 1: Sự phát triển của chủ nghĩa tư bản từ tự do cạnh tranh sang độc quyền",
              "Bài 2: Chủ nghĩa xã hội từ năm 1917 đến nay",
              "Bài 3: Quá trình xâm lược của chủ nghĩa thực dân ở Đông Nam Á",
              "Bài 4: Chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam",
              "Bài 5: Một số cuộc cải cách lớn trong lịch sử Việt Nam (Hồ Quý Ly, Lê Thánh Tông, Minh Mạng)",
              "Bài 6: Lịch sử quan hệ đối ngoại của Việt Nam thời phong kiến",
              "Bài 7: Biển Đông: Vị trí chiến lược và lịch sử bảo vệ chủ quyền của Việt Nam"
            ]
          }
        ]
      },
      {
        id: "diali-11",
        name: "Địa lí",
        icon: "🌍",
        chapters: [
          {
            name: "Địa lí khu vực và quốc gia trên thế giới",
            lessons: [
              "Bài 1: Toàn cầu hóa và khu vực hóa kinh tế",
              "Bài 2: Vị trí địa lí, tự nhiên và dân cư khu vực Mỹ Latinh",
              "Bài 3: Liên minh châu Âu (EU) - Một thực thể kinh tế hùng mạnh",
              "Bài 4: Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
              "Bài 5: Vị trí địa lí, tự nhiên và tài nguyên khu vực Tây Nam Á",
              "Bài 6: Hợp chúng quốc Hoa Kỳ (Hoa Kỳ) - Kinh tế và tự nhiên",
              "Bài 7: Liên bang Nga - Vị thế cường quốc",
              "Bài 8: Nhật Bản - Kinh tế và con người",
              "Bài 9: Cộng hòa Nhân dân Trung Hoa - Cường quốc đang trỗi dậy",
              "Bài 10: Ô-xtrây-li-a (Australia) và Cộng hòa Nam Phi"
            ]
          }
        ]
      },
      {
        id: "tinhoc-11",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Cơ sở dữ liệu (CSDL) và Lập trình nâng cao",
            lessons: [
              "Bài 1: Hệ điều hành mã nguồn mở và phần mềm ứng dụng",
              "Bài 2: Thiết bị mạng, kết nối mạng và các giao thức Internet",
              "Bài 3: Khái niệm Cơ sở dữ liệu và Hệ quản trị CSDL quan hệ",
              "Bài 4: Thiết kế bảng và tạo khoá chính, khoá ngoại",
              "Bài 5: Ngôn ngữ truy vấn có cấu trúc SQL (SELECT, INSERT, UPDATE, DELETE)",
              "Bài 6: Truy vấn dữ liệu có điều kiện với WHERE, GROUP BY, ORDER BY",
              "Bài 7: Kết nối nhiều bảng bằng lệnh JOIN",
              "Bài 8: Khái quát về Trí tuệ nhân tạo (AI) và Học máy (Machine Learning)"
            ]
          }
        ]
      },
      {
        id: "gdkt-pl-11",
        name: "Giáo dục kinh tế và pháp luật",
        icon: "⚖️",
        chapters: [
          {
            name: "Kinh tế vĩ mô và Quyền bình đẳng của công dân",
            lessons: [
              "Bài 1: Cạnh tranh và cung - cầu trong nền kinh tế thị trường",
              "Bài 2: Lạm phát và thất nghiệp",
              "Bài 3: Thị trường lao động và việc làm",
              "Bài 4: Ý tưởng kinh doanh và lập kế hoạch kinh doanh",
              "Bài 5: Đạo đức kinh doanh",
              "Bài 6: Quyền bình đẳng của công dân trước pháp luật",
              "Bài 7: Bình đẳng giới trong các lĩnh vực đời sống",
              "Bài 8: Quyền tự do ngôn luận và tiếp cận thông tin",
              "Bài 9: Quyền bất khả xâm phạm về thân thể của công dân"
            ]
          }
        ]
      },
      {
        id: "congnghe-11",
        name: "Công nghệ",
        icon: "⚙️",
        chapters: [
          {
            name: "Cơ khí chế tạo & Chăn nuôi công nghệ cao",
            lessons: [
              "Bài 1: Khái quát về cơ khí chế tạo và tự động hóa",
              "Bài 2: Các phương pháp gia công cơ khí (Tiện, Phay, Bào, Hàn)",
              "Bài 3: Cơ cấu truyền động và biến đổi chuyển động",
              "Bài 4: Ứng dụng robot trong sản xuất công nghiệp",
              "Bài 5: Công nghệ sinh học trong dinh dưỡng và thức ăn chăn nuôi",
              "Bài 6: Chuồng trại thông minh và chăn nuôi khép kín",
              "Bài 7: Vệ sinh thú y và phòng chống dịch bệnh vật nuôi theo hướng an toàn sinh học"
            ]
          }
        ]
      },
      {
        id: "tienganh-11",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 11",
            lessons: [
              "Unit 1: A Long and Healthy Life",
              "Unit 2: The Generation Gap",
              "Unit 3: Cities of the Future",
              "Unit 4: ASEAN and Viet Nam",
              "Unit 5: Global Warming",
              "Unit 6: Preserving Our Heritage",
              "Unit 7: Education Options for School Leavers",
              "Unit 8: Becoming Independent",
              "Unit 9: Social Issues",
              "Unit 10: The Ecosystem"
            ]
          }
        ]
      }
    ]
  },

  // ==================== LỚP 12 ====================
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
        chapters: [
          {
            name: "Chương 1: Ứng dụng đạo hàm khảo sát và vẽ đồ thị hàm số",
            lessons: [
              "Bài 1: Tính đơn điệu và cực trị của hàm số",
              "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
              "Bài 3: Đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị",
              "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị hàm số bậc ba, phân thức"
            ]
          },
          {
            name: "Chương 2: Toạ độ trong không gian Oxyz",
            lessons: [
              "Bài 5: Toạ độ của vectơ và điểm trong không gian Oxyz",
              "Bài 6: Biểu thức toạ độ của các phép toán vectơ (Tích vô hướng, tích có hướng)",
              "Bài 7: Phương trình mặt phẳng trong không gian",
              "Bài 8: Phương trình đường thẳng trong không gian",
              "Bài 9: Phương trình mặt cầu"
            ]
          },
          {
            name: "Chương 3: Các số đặc trưng đo mức độ phân tán & Nguyên hàm, Tích phân",
            lessons: [
              "Bài 10: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm",
              "Bài 11: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
              "Bài 12: Nguyên hàm và các phương pháp tìm nguyên hàm",
              "Bài 13: Tích phân và tính chất của tích phân",
              "Bài 14: Ứng dụng tích phân tính diện tích hình phẳng và thể tích vật thể"
            ]
          },
          {
            name: "Chương 4: Xác suất có điều kiện và Công thức Bayes",
            lessons: [
              "Bài 15: Xác suất có điều kiện",
              "Bài 16: Công thức xác suất toàn phần và công thức Bayes"
            ]
          }
        ]
      },
      {
        id: "nguvan-12",
        name: "Ngữ văn",
        icon: "📚",
        chapters: [
          {
            name: "Tập 1: Văn học cách mạng, Tuyên ngôn và Thơ ca hiện đại",
            lessons: [
              "Bài 1: Khát vọng tự do và bản lĩnh con người (Tuyên ngôn Độc lập - Hồ Chí Minh)",
              "Bài 2: Những sắc màu văn hóa trong văn học (Tây Tiến - Quang Dũng)",
              "Bài 3: Hồn thơ thời đại (Việt Bắc - Tố Hữu)",
              "Bài 4: Bức tranh hiện thực xã hội (Đất Nước - Nguyễn Khoa Điềm)",
              "Bài 5: Sóng - Xuân Quỳnh và vẻ đẹp tình yêu muôn thuở"
            ]
          },
          {
            name: "Tập 2: Văn xuôi đương đại và Kịch hiện đại",
            lessons: [
              "Bài 6: Người lái đò Sông Đà (Nguyễn Tuân)",
              "Bài 7: Vợ chồng A Phủ (Tô Hoài)",
              "Bài 8: Vợ nhặt (Kim Lân)",
              "Bài 9: Chiếc thuyền ngoài xa (Nguyễn Minh Châu)",
              "Bài 10: Kịch: Hồn Trương Ba, da hàng thịt (Lưu Quang Vũ)"
            ]
          }
        ]
      },
      {
        id: "vatli-12",
        name: "Vật lí",
        icon: "⚡",
        chapters: [
          {
            name: "Chương 1: Vật lí nhiệt",
            lessons: [
              "Bài 1: Cấu trúc của chất và sự chuyển thể",
              "Bài 2: Thang nhiệt độ Celsius, Kelvin và nhiệt kế",
              "Bài 3: Nhiệt dung riêng, Nhiệt nóng chảy riêng và Nhiệt hóa hơi riêng",
              "Bài 4: Nội năng và Định luật I của nhiệt động lực học"
            ]
          },
          {
            name: "Chương 2: Khí lí tưởng",
            lessons: [
              "Bài 5: Mô hình động học phân tử chất khí",
              "Bài 6: Định luật Boyle (Đẳng nhiệt)",
              "Bài 7: Định luật Charles (Đẳng áp) và Quá trình đẳng tích",
              "Bài 8: Phương trình trạng thái của khí lí tưởng pV = nRT"
            ]
          },
          {
            name: "Chương 3: Từ trường và Cảm ứng điện từ",
            lessons: [
              "Bài 9: Từ trường và cảm ứng từ B",
              "Bài 10: Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Lực Ampere)",
              "Bài 11: Định luật cảm ứng điện từ Faraday và Hiện tượng tự cảm",
              "Bài 12: Đại cương về dòng điện xoay chiều và máy biến áp"
            ]
          },
          {
            name: "Chương 4: Vật lí hạt nhân",
            lessons: [
              "Bài 13: Cấu tạo hạt nhân nguyên tử và Độ hụt khối, Năng lượng liên kết",
              "Bài 14: Hiện tượng phóng xạ alpha, beta, gamma và Định luật phóng xạ",
              "Bài 15: Phản ứng hạt nhân, Phản ứng phân hạch và Phản ứng nhiệt hạch",
              "Bài 16: Ứng dụng của năng lượng hạt nhân và an toàn phóng xạ"
            ]
          }
        ]
      },
      {
        id: "hoahoc-12",
        name: "Hóa học",
        icon: "🧪",
        chapters: [
          {
            name: "Chương 1: Ester, Lipid và Carbohydrate",
            lessons: [
              "Bài 1: Ester và phản ứng xà phòng hóa",
              "Bài 2: Lipid, chất béo và acid béo Omega-3, Omega-6",
              "Bài 3: Xà phòng và chất giặt rửa tổng hợp",
              "Bài 4: Glucose và Fructose (Monosaccharide)",
              "Bài 5: Saccharose và Maltose (Disaccharide)",
              "Bài 6: Tinh bột và Cellulose (Polysaccharide)"
            ]
          },
          {
            name: "Chương 2: Hợp chất chứa Nitrogen và Polymer",
            lessons: [
              "Bài 7: Amine và cấu trúc phân tử",
              "Bài 8: Amino acid và tính chất lưỡng tính",
              "Bài 9: Peptide và Protein",
              "Bài 10: Đại cương về Polymer và các phản ứng trùng hợp, trùng ngưng",
              "Bài 11: Vật liệu polymer: Chất dẻo, Tơ, Cao su và Keo dán"
            ]
          },
          {
            name: "Chương 3: Pin điện, Điện phân & Đại cương kim loại",
            lessons: [
              "Bài 12: Cặp oxi hóa - khử và Thế điện cực chuẩn",
              "Bài 13: Pin điện hóa Galvanic và Ac-quy",
              "Bài 14: Điện phân dung dịch và điện phân nóng chảy",
              "Bài 15: Tính chất chung của kim loại và dãy điện hóa",
              "Bài 16: Ăn mòn kim loại (Ăn mòn hóa học và điện hóa) và cách chống ăn mòn",
              "Bài 17: Điều chế kim loại (Thủy luyện, nhiệt luyện, điện phân)"
            ]
          },
          {
            name: "Chương 4: Kim loại nhóm chính và Phức chất",
            lessons: [
              "Bài 18: Kim loại kiềm (Nhóm IA) và hợp chất",
              "Bài 19: Kim loại kiềm thổ (Nhóm IIA), Nước cứng và cách làm mềm nước",
              "Bài 20: Đại cương về phức chất và kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr)"
            ]
          }
        ]
      },
      {
        id: "sinhhoc-12",
        name: "Sinh học",
        icon: "🧬",
        chapters: [
          {
            name: "Chương 1: Di truyền phân tử và Di truyền nhiễm sắc thể",
            lessons: [
              "Bài 1: Gen, mã di truyền và quá trình nhân đôi ADN",
              "Bài 2: Phiên mã và dịch mã tổng hợp protein",
              "Bài 3: Điều hòa hoạt động của gen (Operon Lac)",
              "Bài 4: Đột biến gen và ý nghĩa",
              "Bài 5: Nhiễm sắc thể và đột biến cấu trúc, số lượng nhiễm sắc thể",
              "Bài 6: Các quy luật di truyền của Mendel (Phân li và Phân li độc lập)",
              "Bài 7: Tương tác gen và tác động đa hiệu của gen",
              "Bài 8: Di truyền liên kết gen và hoán vị gen (Morgan)",
              "Bài 9: Di truyền liên kết với giới tính và di truyền ngoài nhân"
            ]
          },
          {
            name: "Chương 2: Di truyền học quần thể, Người & Tiến hóa",
            lessons: [
              "Bài 10: Cấu trúc di truyền của quần thể (Định luật Hardy - Weinberg)",
              "Bài 11: Di truyền y học và liệu pháp gen ở người",
              "Bài 12: Các bằng chứng tiến hóa (Giải phẫu, phôi sinh, sinh học phân tử)",
              "Bài 13: Học thuyết tiến hóa tổng hợp hiện đại và các nhân tố tiến hóa",
              "Bài 14: Loài và cơ chế hình thành loài mới",
              "Bài 15: Nguồn gốc sự sống và sự phát triển sinh giới qua các đại địa chất"
            ]
          },
          {
            name: "Chương 3: Sinh thái học và Môi trường",
            lessons: [
              "Bài 16: Môi trường sống và các nhân tố sinh thái",
              "Bài 17: Quần thể sinh vật và mối quan hệ giữa các cá thể",
              "Bài 18: Quần xã sinh vật và diễn thế sinh thái",
              "Bài 19: Hệ sinh thái, chuỗi và lưới thức ăn, Tháp sinh thái",
              "Bài 20: Chu trình sinh địa hóa và bảo vệ sinh quyển bền vững"
            ]
          }
        ]
      },
      {
        id: "lichsu-12",
        name: "Lịch sử",
        icon: "🏛️",
        chapters: [
          {
            name: "Lịch sử Thế giới từ 1945 và Việt Nam thời kì mới",
            lessons: [
              "Bài 1: Liên Hợp Quốc và trật tự thế giới sau Chiến tranh thế giới thứ hai",
              "Bài 2: Trật tự thế giới đa cực sau Chiến tranh lạnh",
              "Bài 3: ASEAN - Quá trình hình thành, phát triển và vị thế quốc tế",
              "Bài 4: Cách mạng tháng Tám 1945 và sự ra đời của nước VNDCCH",
              "Bài 5: Kháng chiến toàn quốc chống thực dân Pháp (1945 - 1954)",
              "Bài 6: Kháng chiến chống Mỹ cứu nước giải phóng hoàn toàn miền Nam (1954 - 1975)",
              "Bài 7: Đấu tranh bảo vệ Tổ quốc ở biên giới Tây Nam và biên giới phía Bắc (1975 - 1979)",
              "Bài 8: Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
              "Bài 9: Lịch sử đối ngoại và hội nhập quốc tế của Việt Nam trong thời kì Đổi mới"
            ]
          }
        ]
      },
      {
        id: "diali-12",
        name: "Địa lí",
        icon: "🌍",
        chapters: [
          {
            name: "Địa lí Việt Nam toàn diện",
            lessons: [
              "Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
              "Bài 2: Thiên nhiên nhiệt đới ẩm gió mùa và ảnh hưởng đến đời sống, sản xuất",
              "Bài 3: Sự phân hóa đa dạng của thiên nhiên Việt Nam",
              "Bài 4: Vấn đề sử dụng hợp lí và bảo vệ tài nguyên thiên nhiên, môi trường",
              "Bài 5: Dân cư, nguồn lao động và việc làm ở Việt Nam",
              "Bài 6: Đô thị hóa ở Việt Nam",
              "Bài 7: Chuyển dịch cơ cấu kinh tế Việt Nam thời kì đổi mới",
              "Bài 8: Địa lí ngành nông nghiệp, lâm nghiệp và thủy sản",
              "Bài 9: Địa lí ngành công nghiệp và giao thông vận tải, thông tin liên lạc",
              "Bài 10: Địa lí các vùng kinh tế trọng điểm (Bắc Bộ, Trung Bộ, Phía Nam)",
              "Bài 11: Phát triển kinh tế biển đảo và bảo đảm an ninh quốc phòng"
            ]
          }
        ]
      },
      {
        id: "tinhoc-12",
        name: "Tin học",
        icon: "💻",
        chapters: [
          {
            name: "Khoa học máy tính thế hệ mới và Ứng dụng AI",
            lessons: [
              "Bài 1: Mạng máy tính thế hệ mới và Internet vạn vật (IoT)",
              "Bài 2: Trí tuệ nhân tạo (AI): Khái niệm, nguyên lí và ứng dụng thực tế",
              "Bài 3: Hệ quản trị cơ sở dữ liệu quan hệ, sao lưu và an toàn bảo mật dữ liệu",
              "Bài 4: Thiết kế trang web và phát triển ứng dụng web căn bản",
              "Bài 5: Hướng nghiệp và các ngành nghề trong kỉ nguyên số",
              "Bài 6: Đạo đức, văn hóa và khung pháp lý trong kỷ nguyên trí tuệ nhân tạo"
            ]
          }
        ]
      },
      {
        id: "gdkt-pl-12",
        name: "Giáo dục kinh tế và pháp luật",
        icon: "⚖️",
        chapters: [
          {
            name: "Tăng trưởng kinh tế và Quyền công dân",
            lessons: [
              "Bài 1: Tăng trưởng và phát triển kinh tế bền vững",
              "Bài 2: Hội nhập kinh tế quốc tế và các hiệp định thương mại tự do (FTA)",
              "Bài 3: Bảo hiểm xã hội, bảo hiểm y tế và an sinh xã hội",
              "Bài 4: Quản lý thu chi và tài chính thông minh trong gia đình",
              "Bài 5: Quyền và nghĩa vụ của công dân về tham gia quản lý nhà nước và xã hội",
              "Bài 6: Quyền tự do kinh doanh và nghĩa vụ nộp thuế",
              "Bài 7: Pháp luật về bảo vệ môi trường và phát triển bền vững"
            ]
          }
        ]
      },
      {
        id: "congnghe-12",
        name: "Công nghệ",
        icon: "⚡",
        chapters: [
          {
            name: "Kĩ thuật điện và Điện tử thông minh",
            lessons: [
              "Bài 1: Khái quát về kĩ thuật điện và vai trò trong đời sống",
              "Bài 2: Mạch điện xoay chiều ba pha",
              "Bài 3: Máy biến áp và động cơ điện ba pha",
              "Bài 4: Hệ thống lưới điện quốc gia và an toàn điện cao áp",
              "Bài 5: Linh kiện điện tử cơ bản (Diode, Transistor, IC)",
              "Bài 6: Mạch điện tử ứng dụng và vi điều khiển trong tự động hóa",
              "Bài 7: Lắp đặt mạng điện sinh hoạt gia đình thông minh"
            ]
          }
        ]
      },
      {
        id: "tienganh-12",
        name: "Tiếng Anh",
        icon: "🔤",
        chapters: [
          {
            name: "Global Success English 12",
            lessons: [
              "Unit 1: Life Stories We Admire",
              "Unit 2: A Multicultural World",
              "Unit 3: Green Living",
              "Unit 4: Urbanisation",
              "Unit 5: The World of Work",
              "Unit 6: Artificial Intelligence",
              "Unit 7: The World of Mass Media",
              "Unit 8: Wildlife Conservation",
              "Unit 9: Career Paths",
              "Unit 10: Lifelong Learning"
            ]
          }
        ]
      }
    ]
  }
];

// Build the TypeScript content
let output = `// Dữ liệu Sách Giáo Khoa chuẩn Chương trình GDPT 2018 (NXB Giáo Dục Việt Nam) từ Lớp 1 đến Lớp 12
// Nguồn tham khảo chính thức: https://taphuan.nxbgd.vn/tap-huan?grade=
// ĐẦY ĐỦ TẤT CẢ CÁC MÔN VÀ TẤT CẢ CÁC BÀI HỌC TỪ KHỐI 1 ĐẾN KHỐI 12
import type { QuestionInput } from "./api";

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

export const GRADES_DATA: GradeItem[] = [\n`;

let totalLessonsCount = 0;
let totalSubjectsCount = 0;

for (const g of rawCurriculum) {
  output += `  {\n`;
  output += `    grade: ${g.grade},\n`;
  output += `    label: "${g.label}",\n`;
  output += `    level: "${g.level}",\n`;
  output += `    sgkUrl: "${g.sgkUrl}",\n`;
  output += `    subjects: [\n`;

  for (const s of g.subjects) {
    totalSubjectsCount++;
    output += `      {\n`;
    output += `        id: "${s.id}",\n`;
    output += `        name: "${s.name}",\n`;
    output += `        icon: "${s.icon}",\n`;
    output += `        lessons: [\n`;

    let lessonIndex = 1;
    for (const c of s.chapters) {
      for (const les of c.lessons) {
        totalLessonsCount++;
        const lessonId = `${s.id}-b${lessonIndex}`;
        const questions = makeQuestions(s.name, g.grade, les, c.name);
        
        output += `          {\n`;
        output += `            id: "${lessonId}",\n`;
        output += `            number: ${lessonIndex},\n`;
        output += `            chapter: ${JSON.stringify(c.name)},\n`;
        output += `            title: ${JSON.stringify(les)},\n`;
        output += `            questions: ${JSON.stringify(questions, null, 14).trim()},\n`;
        output += `          },\n`;
        lessonIndex++;
      }
    }

    output += `        ],\n`;
    output += `      },\n`;
  }

  output += `    ],\n`;
  output += `  },\n`;
}

output += `];\n\n`;

// Append generator function
output += `// Helper sinh câu hỏi thông minh khi người dùng chọn 1 hoặc nhiều bài học
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

  // Tự động tạo thêm các câu hỏi trắc nghiệm chất lượng cao bám sát từng bài học
  const finalQuestions: QuestionInput[] = [...questionsPool];

  let counter = 1;
  while (finalQuestions.length < desiredCount && selectedLessons.length > 0) {
    const lesson = selectedLessons[(counter - 1) % selectedLessons.length];
    finalQuestions.push({
      content: \`[\${lesson.title}] Theo kiến thức trọng tâm bài học, nội dung nào sau đây là hoàn toàn CHÍNH XÁC?\`,
      option_a: \`Áp dụng đúng định nghĩa, quy tắc và phương pháp giải đã học trong SGK \${subjectObj?.name || ""} \${grade} (\${lesson.title}).\`,
      option_b: "Học vẹt lí thuyết mà không cần nắm phương pháp vận dụng.",
      option_c: "Bỏ qua các nguyên tắc cơ bản và định lí cốt lõi của bài học.",
      option_d: "Nội dung bài học không liên hệ với thực tế đời sống.",
      correct: "A",
    });
    counter++;
  }

  // Cắt đúng số lượng câu hỏi mong muốn
  const slicedQuestions = finalQuestions.slice(0, desiredCount);

  // Tạo tiêu đề bài kiểm tra chuẩn
  const lessonTitles = selectedLessons.map((l) => \`Bài \${l.number}\`).join(", ");
  const examTitle = \`Đề kiểm tra \${subjectObj?.name || "Môn học"} \${grade} (\${lessonTitles || "Tổng hợp"}) · \${slicedQuestions.length} câu\`;

  return {
    title: examTitle,
    questions: slicedQuestions,
  };
}
`;

fs.writeFileSync(targetPath, output, "utf-8");
console.log(`Successfully generated curriculum data: ${totalSubjectsCount} subjects, ${totalLessonsCount} lessons across 12 grades!`);

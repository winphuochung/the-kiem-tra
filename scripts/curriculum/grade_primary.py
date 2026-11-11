# -*- coding: utf-8 -*-
from .helper import create_subject

def get_grade_1():
    subjects = [
        create_subject("toan-1", "Toán", "🔢", 1, [
            ("Chủ đề 1: Các số từ 0 đến 10", [
                "Các số 1, 2, 3",
                "Các số 4, 5",
                "Các số 6, 7, 8",
                "Các số 9, 10",
                "Số 0",
                "Bé hơn, dấu <. Lớn hơn, dấu >",
                "Bằng nhau, dấu =",
                "Luyện tập so sánh các số trong phạm vi 10",
            ]),
            ("Chủ đề 2: Phép cộng, phép trừ trong phạm vi 10", [
                "Phép cộng trong phạm vi 10",
                "Bảng cộng trong phạm vi 10",
                "Phép trừ trong phạm vi 10",
                "Bảng trừ trong phạm vi 10",
                "Luyện tập chung phép cộng và trừ trong phạm vi 10",
            ]),
            ("Chủ đề 3: Hình phẳng và hình khối", [
                "Hình vuông, hình tròn, hình tam giác, hình chữ nhật",
                "Khối lập phương, khối hộp chữ nhật",
                "Thực hành lắp ghép hình phẳng",
            ]),
            ("Chủ đề 4: Các số trong phạm vi 100", [
                "Các số từ 11 đến 20",
                "Phép cộng, phép trừ không nhớ trong phạm vi 20",
                "Các số tròn chục đến 100",
                "Các số có hai chữ số đến 100",
                "So sánh các số có hai chữ số",
                "Bảng các số từ 1 đến 100",
            ]),
            ("Chủ đề 5: Đo độ dài và thời gian", [
                "Đo độ dài bằng đơn vị gang tay, bước chân",
                "Xăng-ti-mét. Đơn vị đo độ dài cm",
                "Xem đồng hồ: Giờ đúng",
                "Các ngày trong tuần",
            ]),
            ("Chủ đề 6: Phép cộng, phép trừ (không nhớ) trong phạm vi 100", [
                "Phép cộng số có hai chữ số với số có một chữ số",
                "Phép cộng số có hai chữ số với số tròn chục",
                "Phép cộng số có hai chữ số với số có hai chữ số",
                "Phép trừ số có hai chữ số cho số có một chữ số",
                "Phép trừ số có hai chữ số cho số tròn chục",
                "Phép trừ số có hai chữ số cho số có hai chữ số",
                "Ôn tập và kiểm tra cuối năm",
            ])
        ]),
        create_subject("tiengviet-1", "Tiếng Việt", "📖", 1, [
            ("Làm quen âm, chữ cái và dấu thanh", [
                "A a, B b và dấu sắc",
                "C c, D d và dấu huyền",
                "Đ đ, E e và dấu hỏi",
                "Ê ê, G g và dấu ngã",
                "H h, I i và dấu nặng",
                "K k, L l",
                "M m, N n",
                "O o, Ô ô, Ơ ơ",
                "P p, Q q, R r",
                "S s, T t",
                "U u, Ư ư, V v",
                "X x, Y y",
            ]),
            ("Học Vần và Tập đọc", [
                "Vần an, at, am, ap",
                "Vần ang, ac, anh, ach",
                "Vần em, ep, en, et",
                "Vần in, it, im, ip",
                "Vần on, ot, om, op",
                "Vần ung, uc, uon, uot",
                "Vần iên, iêt, yên, yêt",
                "Tập đọc: Đi học",
                "Tập đọc: Trường em",
                "Tập đọc: Bàn tay mẹ",
                "Tập đọc: Hồ Gươm",
            ])
        ]),
        create_subject("tnxh-1", "Tự nhiên và Xã hội", "🌱", 1, [
            ("Chủ đề: Gia đình, Nhà trường và Tự nhiên quanh ta", [
                "Các thành viên trong gia đình",
                "Ngôi nhà của em",
                "Giữ an toàn khi ở nhà và phòng tránh bỏng",
                "Lớp học của em",
                "Các hoạt động vui chơi ở trường",
                "Giữ an toàn và vệ sinh tại trường học",
                "Cây xanh quanh em",
                "Các con vật nuôi quen thuộc",
                "Chăm sóc và bảo vệ cây trồng, vật nuôi",
                "Các bộ phận và giác quan của cơ thể người",
                "Ăn uống sạch sẽ và đủ chất dinh dưỡng",
                "Bầu trời ban ngày và ban đêm",
                "Thời tiết và sức khỏe",
            ])
        ]),
        create_subject("daoduc-1", "Đạo đức", "❤️", 1, [
            ("Lễ phép và Tự lập", [
                "Em giữ gìn vệ sinh cá nhân sạch sẽ",
                "Tự giác mặc quần áo, mang giày dép",
                "Đi học đúng giờ và tự giác học tập",
                "Chào hỏi lễ phép với thầy cô và người lớn",
                "Nói lời cảm ơn và xin lỗi đúng lúc",
                "Thật thà trong học tập và vui chơi",
                "Yêu thương ông bà, cha mẹ và anh chị em",
                "Biết chia sẻ đồ chơi cùng bạn bè",
                "Giữ gìn bàn ghế và tài sản trường lớp",
                "Không vứt rác bừa bãi nơi công cộng",
            ])
        ]),
        create_subject("tinhoc-congnghe-1", "Tin học & Công nghệ", "💻", 1, [
            ("Làm quen máy tính và công nghệ", [
                "Thế giới công nghệ quanh em",
                "Máy tính để bàn và máy tính xách tay",
                "Màn hình và thân máy tính",
                "Bàn phím máy tính và các phím cơ bản",
                "Chuột máy tính và cách cầm chuột",
                "Tư thế ngồi đúng khi dùng máy tính",
                "Giữ an toàn khi sử dụng đồ dùng điện trong gia đình",
                "Đồ chơi công nghệ và sáng tạo thủ công",
            ])
        ]),
        create_subject("tienganh-1", "Tiếng Anh", "🔤", 1, [
            ("Global Success English 1", [
                "Unit 1: In the school playground",
                "Unit 2: In the dining room",
                "Unit 3: At the street market",
                "Unit 4: In the bedroom",
                "Review 1",
                "Unit 5: At the fish and chip shop",
                "Unit 6: In the classroom",
                "Unit 7: In the garden",
                "Unit 8: At the park",
                "Review 2",
                "Unit 9: In the toy shop",
                "Unit 10: At the zoo",
                "Unit 11: At the bus stop",
                "Unit 12: At the beach",
                "Review 3",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 1,
        "label": "Lớp 1",
        "level": "Tiểu học",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=1",
        "subjects": subjects
    }

def get_grade_2():
    subjects = [
        create_subject("toan-2", "Toán", "🔢", 2, [
            ("Chủ đề: Ôn tập và Phép cộng, trừ trong phạm vi 100", [
                "Ôn tập các số trong phạm vi 100",
                "Tia số. Số liền trước, số liền sau",
                "Các thành phần của phép cộng, phép trừ",
                "Đề-xi-mét (dm)",
                "Số hạng và tổng",
                "Số bị trừ, số trừ và hiệu",
                "Phép cộng (có nhớ) trong phạm vi 100",
                "Phép trừ (có nhớ) trong phạm vi 100",
                "Ki-lô-gam (kg) và Lít (l)",
                "Điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng",
            ]),
            ("Chủ đề: Phép nhân và Phép chia", [
                "Phép nhân - Thừa số và tích",
                "Bảng nhân 2",
                "Bảng nhân 5",
                "Phép chia - Số bị chia, số chia, thương",
                "Bảng chia 2",
                "Bảng chia 5",
                "Xem đồng hồ: Giờ, phút",
                "Ngày - tháng, ngày trong tuần",
            ]),
            ("Chủ đề: Các số trong phạm vi 1000", [
                "Đơn vị trăm, chục, đơn vị",
                "Các số có ba chữ số",
                "So sánh các số có ba chữ số",
                "Mét (m) và Ki-lô-mét (km)",
                "Phép cộng, phép trừ không nhớ trong phạm vi 1000",
                "Phép cộng, phép trừ có nhớ trong phạm vi 1000",
                "Hình tứ giác và tính độ dài đường gấp khúc",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("tiengviet-2", "Tiếng Việt", "📖", 2, [
            ("Chủ điểm: Em lớn lên từng ngày & Đi học vui sao", [
                "Tôi là học sinh lớp 2",
                "Ngày hôm qua đâu rồi?",
                "Niềm vui của Bi và Bống",
                "Làm việc thật là vui",
                "Mỗi người một vẻ",
                "Phần thưởng",
                "Cô giáo lớp em",
                "Thời khóa biểu",
                "Cái trống trường em",
                "Ngôi trường mới",
            ]),
            ("Chủ điểm: Mái ấm gia đình & Bạn bè bốn phương", [
                "Bà nội, bà ngoại",
                "Bố làm bác sĩ",
                "Cả nhà cùng vui",
                "Bữa cơm gia đình",
                "Cây bàng trường em",
                "Mùa vàng",
                "Hoa phượng rực rỡ",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("tnxh-2", "Tự nhiên và Xã hội", "🌱", 2, [
            ("Gia đình, Trường học và Môi trường sống", [
                "Các thế hệ trong gia đình",
                "Nghề nghiệp của các thành viên gia đình",
                "An toàn trong phòng tránh ngộ độc thực phẩm",
                "Giữ vệ sinh nhà ở",
                "Các phòng chức năng trường học",
                "Hoạt động ngoại khóa và an toàn ở trường",
                "Nơi sống của thực vật",
                "Nơi sống của động vật",
                "Bảo vệ nơi sống của thực vật và động vật",
                "Mặt Trời và các phương hướng",
                "Các mùa trong năm",
                "Thời tiết và các hiện tượng tự nhiên",
            ])
        ]),
        create_subject("daoduc-2", "Đạo đức", "❤️", 2, [
            ("Rèn luyện thói quen tốt", [
                "Quý trọng thời gian",
                "Nhận lỗi và sửa lỗi",
                "Bảo vệ của công",
                "Giữ gìn vệ sinh nơi công cộng",
                "Tiết kiệm điện và nước",
                "Quan tâm và chia sẻ cùng bạn bè",
                "Chăm sóc người thân khi bị ốm",
                "Tìm kiếm sự hỗ trợ khi gặp nguy hiểm",
                "Tuân thủ luật an toàn giao thông đường bộ",
                "Yêu quê hương đất nước",
            ])
        ]),
        create_subject("tienganh-2", "Tiếng Anh", "🔤", 2, [
            ("Global Success English 2", [
                "Unit 1: At my birthday party",
                "Unit 2: In the backyard",
                "Unit 3: At the seaside",
                "Unit 4: In the countryside",
                "Review 1",
                "Unit 5: In the classroom",
                "Unit 6: On the farm",
                "Unit 7: In the kitchen",
                "Unit 8: In the village",
                "Review 2",
                "Unit 9: In the grocery store",
                "Unit 10: At the sports camp",
                "Unit 11: In the playground",
                "Unit 12: At the cafe",
                "Review 3",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 2,
        "label": "Lớp 2",
        "level": "Tiểu học",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=2",
        "subjects": subjects
    }

def get_grade_3():
    subjects = [
        create_subject("toan-3", "Toán", "🔢", 3, [
            ("Chủ đề: Bảng nhân và Bảng chia", [
                "Bảng nhân 3, Bảng chia 3",
                "Bảng nhân 4, Bảng chia 4",
                "Bảng nhân 6, Bảng chia 6",
                "Bảng nhân 7, Bảng chia 7",
                "Bảng nhân 8, Bảng chia 8",
                "Bảng nhân 9, Bảng chia 9",
                "Gấp một số lên nhiều lần, Giảm đi một số lần",
                "Tìm thành phần chưa biết của phép tính",
            ]),
            ("Chủ đề: Hình học và Đo lường", [
                "Góc vuông, góc không vuông và ê-ke",
                "Hình tam giác, hình tứ giác",
                "Chu vi hình tam giác, hình tứ giác",
                "Hình chữ nhật, hình vuông",
                "Chu vi hình chữ nhật, hình vuông",
                "Đơn vị Gam (g), Mi-li-lít (ml), Mi-li-mét (mm)",
                "Hình tròn, tâm, đường kính, bán kính",
                "Diện tích của một hình. Xăng-ti-mét vuông (cm²)",
                "Diện tích hình chữ nhật, hình vuông",
            ]),
            ("Chủ đề: Các số đến 10 000 và 100 000", [
                "Các số trong phạm vi 10 000",
                "Cộng, trừ các số trong phạm vi 10 000",
                "Nhân, chia số có bốn chữ số cho số có một chữ số",
                "Các số trong phạm vi 100 000",
                "Cộng, trừ các số trong phạm vi 100 000",
                "Nhân, chia số có năm chữ số cho số có một chữ số",
                "Chữ số La Mã và Tiền Việt Nam",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("tiengviet-3", "Tiếng Việt", "📖", 3, [
            ("Chủ điểm: Khám phá cuộc sống & Yêu thương", [
                "Chiếc nhãn vở đặc biệt",
                "Mùa thu của em",
                "Cậu học sinh mới",
                "Gió vườn",
                "Người thầy thuốc nhân hậu",
                "Tiếng đàn ba-la-lai-ca trên sông Đà",
                "Người liên lạc nhỏ tuổi",
                "Đất nước tươi đẹp muôn màu",
                "Vàm Cỏ Đông",
                "Hai Bà Trưng",
                "Chiếc áo hoa của chim công",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("tnxh-3", "Tự nhiên và Xã hội", "🌱", 3, [
            ("Cơ quan trong cơ thể và Môi trường", [
                "Cơ quan hô hấp",
                "Chăm sóc và bảo vệ cơ quan hô hấp",
                "Cơ quan tuần hoàn và trái tim",
                "Chăm sóc và bảo vệ cơ quan tuần hoàn",
                "Cơ quan bài tiết nước tiểu",
                "Cơ quan thần kinh và não bộ",
                "Thực vật và động vật sống quanh em",
                "Môi trường sống của sinh vật và bảo vệ nguồn nước",
                "Mặt Trời, Trái Đất và Mặt Trăng",
                "Các hiện tượng thiên nhiên và bảo vệ môi trường",
            ])
        ]),
        create_subject("tinhoc-3", "Tin học", "💻", 3, [
            ("Làm quen với máy tính và thông tin", [
                "Thông tin và quyết định",
                "Xử lí thông tin trong cuộc sống",
                "Máy tính - Người bạn mới của em",
                "Bàn phím máy tính và hàng phím cơ sở",
                "Tập gõ hàng phím trên và hàng phím dưới",
                "Chuột máy tính và thao tác nhấp đúp",
                "Sử dụng Internet an toàn",
                "Tạo sơ đồ tư duy đơn giản",
            ])
        ]),
        create_subject("congnghe-3", "Công nghệ", "⚙️", 3, [
            ("Công nghệ trong đời sống", [
                "Tự nhiên và công nghệ",
                "Sử dụng đèn học an toàn",
                "Sử dụng quạt điện đúng cách",
                "Sử dụng máy thu thanh (Radio)",
                "Sử dụng máy thu hình (Tivi)",
                "Làm đồ dùng học tập thủ công",
                "Làm đồ chơi sáng tạo từ bìa carton",
            ])
        ]),
        create_subject("daoduc-3", "Đạo đức", "❤️", 3, [
            ("Bồi dưỡng phẩm chất", [
                "Kính trọng thầy cô giáo",
                "Yêu quý bạn bè",
                "Quan tâm hàng xóm láng giềng",
                "Bảo vệ tài sản trường lớp",
                "Giữ lời hứa",
                "Tích cực hoàn thành nhiệm vụ ở nhà và ở trường",
                "Khám phá điểm mạnh, điểm yếu của bản thân",
                "Bảo vệ môi trường tự nhiên",
            ])
        ]),
        create_subject("tienganh-3", "Tiếng Anh", "🔤", 3, [
            ("Global Success English 3", [
                "Unit 1: Hello!",
                "Unit 2: Our names",
                "Unit 3: Our friends",
                "Unit 4: Our bodies",
                "Review 1",
                "Unit 5: My hobbies",
                "Unit 6: Our school",
                "Unit 7: Classroom instructions",
                "Unit 8: My school things",
                "Review 2",
                "Unit 9: Colours",
                "Unit 10: Break time activities",
                "Unit 11: My family",
                "Unit 12: Jobs",
                "Review 3",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 3,
        "label": "Lớp 3",
        "level": "Tiểu học",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=3",
        "subjects": subjects
    }

def get_grade_4():
    subjects = [
        create_subject("toan-4", "Toán", "🔢", 4, [
            ("Chủ đề: Số tự nhiên và các phép tính", [
                "Số có nhiều chữ số. Lớp triệu",
                "So sánh các số có nhiều chữ số",
                "Dãy số tự nhiên và hệ thập phân",
                "Yến, tạ, tấn. Đơn vị đo khối lượng",
                "Giây, thế kỉ. Đơn vị đo thời gian",
                "Góc nhọn, góc tù, góc bẹt",
                "Hai đường thẳng vuông góc, hai đường thẳng song song",
                "Phép cộng và phép trừ các số tự nhiên",
                "Tính chất giao hoán và kết hợp của phép cộng",
                "Phép nhân với số có một, hai, ba chữ số",
                "Tính chất giao hoán và phân phối của phép nhân",
                "Phép chia cho số có một, hai chữ số",
                "Dấu hiệu chia hết cho 2, 5, 9, 3",
            ]),
            ("Chủ đề: Phân số và Các phép tính với phân số", [
                "Khái niệm phân số",
                "Phân số và phép chia số tự nhiên",
                "Tính chất cơ bản của phân số",
                "Rút gọn phân số và quy đồng mẫu số",
                "So sánh hai phân số cùng mẫu và khác mẫu",
                "Phép cộng và phép trừ hai phân số",
                "Phép nhân và phép chia hai phân số",
                "Tìm phân số của một số",
            ]),
            ("Chủ đề: Hình học và Đo lường", [
                "Hình bình hành và diện tích hình bình hành",
                "Hình thoi và diện tích hình thoi",
                "Mét vuông (m²), Đề-xi-mét vuông (dm²), Mi-li-mét vuông (mm²)",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("tiengviet-4", "Tiếng Việt", "📖", 4, [
            ("Chủ điểm: Chân dung của em & Quê hương", [
                "Tuổi Ngựa",
                "Làm bạn với bầu trời",
                "Người ăn xin",
                "Đôi cánh của ngựa trắng",
                "Vua tàu thủy Bạch Thái Bưởi",
                "Bầu trời mùa thu",
                "Lời kêu gọi toàn quốc kháng chiến",
                "Kì diệu rừng xanh",
                "Nếu chúng mình có phép lạ",
                "Anh đom đóm",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("khoahoc-4", "Khoa học", "🔬", 4, [
            ("Chất, Năng lượng, Thực vật và Động vật", [
                "Tính chất và ba thể của nước",
                "Sự chuyển thể của nước và vòng tuần hoàn của nước",
                "Ô nhiễm và bảo vệ nguồn nước",
                "Không khí quanh ta và thành phần không khí",
                "Vai trò của không khí đối với sự sống và sự cháy",
                "Ánh sáng và vai trò của ánh sáng",
                "Âm thanh và sự truyền âm",
                "Nhiệt độ và sự truyền nhiệt",
                "Nhu cầu sống của thực vật",
                "Nhu cầu sống của động vật",
                "Nấm và vai trò của nấm",
                "Dinh dưỡng ở người và phòng bệnh béo phì, suy dinh dưỡng",
                "Phòng tránh đuối nước và an toàn thân thể",
            ])
        ]),
        create_subject("ls-dl-4", "Lịch sử & Địa lí", "🗺️", 4, [
            ("Khám phá các vùng miền Việt Nam", [
                "Làm quen với phương tiện học tập môn Lịch sử và Địa lí",
                "Thiên nhiên và con người vùng Trung du và miền núi Bắc Bộ",
                "Đền Hùng và Lễ giỗ Tổ Hùng Vương",
                "Thiên nhiên và dân cư vùng Đồng bằng Bắc Bộ",
                "Thăng Long - Hà Nội ngàn năm văn hiến",
                "Thiên nhiên và dân cư vùng Duyên hải miền Trung",
                "Cố đô Huế và Phố cổ Hội An",
                "Thiên nhiên và văn hóa vùng Tây Nguyên",
                "Không gian văn hóa Cồng chiêng Tây Nguyên",
                "Thiên nhiên và dân cư vùng Nam Bộ",
                "Thành phố Hồ Chí Minh và Địa đạo Củ Chi",
                "Biển đảo Việt Nam và bảo vệ chủ quyền biển đảo",
            ])
        ]),
        create_subject("tinhoc-4", "Tin học", "💻", 4, [
            ("Ứng dụng tin học trong học tập", [
                "Phần cứng và phần mềm máy tính",
                "Gõ tiếng Việt theo chuẩn Telex",
                "Soạn thảo văn bản Word: Chèn bảng và hình ảnh",
                "Định dạng đoạn văn bản đẹp mắt",
                "Tạo bài trình chiếu PowerPoint đơn giản",
                "Chèn hiệu ứng chuyển tiếp trang chiếu",
                "Tìm kiếm thông tin an toàn trên Internet",
                "Làm quen với ngôn ngữ lập trình trực quan Scratch",
                "Tạo chuyển động nhân vật trong Scratch",
            ])
        ]),
        create_subject("congnghe-4", "Công nghệ", "🌿", 4, [
            ("Trồng hoa, cây cảnh và Kĩ thuật thủ công", [
                "Hoa và cây cảnh quanh ta",
                "Trồng hoa và cây cảnh trong chậu",
                "Chăm sóc hoa và cây cảnh",
                "Lắp ghép mô hình bập bênh, đu quay",
                "Lắp ghép mô hình xe ô tô chở hàng",
                "Lắp ghép mô hình cối xay gió",
                "Dự án: Thiết kế chậu hoa mini tái chế",
            ])
        ]),
        create_subject("daoduc-4", "Đạo đức", "❤️", 4, [
            ("Phẩm chất và Giá trị sống", [
                "Biết ơn thầy cô giáo",
                "Tôn trọng sự khác biệt của người khác",
                "Em yêu lao động",
                "Giữ chữ tín",
                "Quý trọng đồng tiền và chi tiêu hợp lí",
                "Thiết lập và duy trì tình bạn đẹp",
                "Bảo vệ của công",
                "Em yêu quê hương đất nước",
            ])
        ]),
        create_subject("tienganh-4", "Tiếng Anh", "🔤", 4, [
            ("Global Success English 4", [
                "Unit 1: My friends",
                "Unit 2: Time and daily routines",
                "Unit 3: My week",
                "Unit 4: Where's your school?",
                "Review 1",
                "Unit 5: Things we can do",
                "Unit 6: Our school subjects",
                "Unit 7: Our timetables",
                "Unit 8: My favourite food and drink",
                "Review 2",
                "Unit 9: Our sports day",
                "Unit 10: At the weekend",
                "Review 3",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 4,
        "label": "Lớp 4",
        "level": "Tiểu học",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=4",
        "subjects": subjects
    }

def get_grade_5():
    subjects = [
        create_subject("toan-5", "Toán", "🔢", 5, [
            ("Chủ đề: Số thập phân và Các phép tính với số thập phân", [
                "Ôn tập về phân số và hỗn số",
                "Khái niệm số thập phân",
                "Hàng của số thập phân. Đọc, viết số thập phân",
                "Số thập phân bằng nhau",
                "So sánh hai số thập phân",
                "Phép cộng số thập phân",
                "Phép trừ số thập phân",
                "Phép nhân số thập phân với số tự nhiên",
                "Phép nhân số thập phân với số thập phân",
                "Phép chia số thập phân cho số tự nhiên",
                "Phép chia một số tự nhiên cho một số tự nhiên mà thương là số thập phân",
                "Phép chia một số thập phân cho một số thập phân",
            ]),
            ("Chủ đề: Hình học và Thể tích", [
                "Hình tam giác và diện tích hình tam giác",
                "Hình thang và diện tích hình thang",
                "Hình tròn, chu vi và diện tích hình tròn",
                "Hình hộp chữ nhật, hình lập phương",
                "Diện tích xung quanh và toàn phần hình hộp chữ nhật, hình lập phương",
                "Thể tích và đơn vị m³, dm³, cm³",
                "Thể tích hình hộp chữ nhật và hình lập phương",
            ]),
            ("Chủ đề: Tỉ số phần trăm và Toán chuyển động đều", [
                "Tỉ số phần trăm và giải toán về tỉ số phần trăm",
                "Vận tốc trong chuyển động đều",
                "Quãng đường trong chuyển động đều",
                "Thời gian trong chuyển động đều",
                "Giải bài toán hai chuyển động cùng chiều và ngược chiều",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("tiengviet-5", "Tiếng Việt", "📖", 5, [
            ("Chủ điểm: Việt Nam - Tổ quốc em & Cánh chim hòa bình", [
                "Thư gửi các học sinh",
                "Quang cảnh làng mạc ngày mùa",
                "Sắc màu em yêu",
                "Lòng dân",
                "Tiếng đàn ba-la-lai-ca trên sông Đà",
                "Hạt gạo làng ta",
                "Một chuyên gia máy xúc",
                "Ê-mi-li, con...",
                "Người gác rừng tí hon",
                "Trồng rừng ngập mặn",
                "Buôn Chư Lênh đón cô giáo",
                "Ôn tập cuối năm",
            ])
        ]),
        create_subject("khoahoc-5", "Khoa học", "🔬", 5, [
            ("Con người, Sức khỏe, Vật chất và Năng lượng", [
                "Sự sinh sản ở người",
                "Tuổi dậy thì và chăm sóc sức khỏe sinh sản",
                "Phòng bệnh sốt rét, sốt xuất huyết, viêm não",
                "Phòng tránh bị xâm hại và an toàn giao thông",
                "Đặc điểm và công dụng của sắt, nhôm, đồng",
                "Đặc điểm của đá vôi, xi măng, thủy tinh, gốm",
                "Sự biến đổi hóa học của chất",
                "Năng lượng Mặt Trời, gió và nước chảy",
                "Năng lượng điện và sử dụng điện an toàn",
                "Sự sinh sản của thực vật có hoa",
                "Sự sinh sản của động vật",
                "Môi trường và tài nguyên thiên nhiên",
                "Tác động của con người đến môi trường và bảo vệ Trái Đất",
            ])
        ]),
        create_subject("ls-dl-5", "Lịch sử & Địa lí", "🗺️", 5, [
            ("Lịch sử Việt Nam và Địa lí thế giới", [
                "Bình Tây Đại nguyên soái Trương Định",
                "Phong trào Đông Du của Phan Bội Châu",
                "Nguyễn Tất Thành ra đi tìm đường cứu nước năm 1911",
                "Đảng Cộng sản Việt Nam ra đời năm 1930",
                "Cách mạng tháng Tám năm 1945 và Tuyên ngôn Độc lập",
                "Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu' năm 1954",
                "Chiến dịch Hồ Chí Minh lịch sử năm 1975",
                "Đất nước trên con đường Đổi mới",
                "Vị trí địa lí, địa hình và khoáng sản Việt Nam",
                "Khí hậu và mạng lưới sông ngòi Việt Nam",
                "Nông nghiệp, công nghiệp và giao thông Việt Nam",
                "Châu Á và các nước láng giềng",
                "Châu Âu",
                "Châu Phi",
                "Châu Mĩ",
                "Châu Đại Dương và Châu Nam Cực",
                "Các đại dương trên thế giới",
            ])
        ]),
        create_subject("tinhoc-5", "Tin học", "💻", 5, [
            ("Công nghệ số và Lập trình Scratch", [
                "Máy tính và mạng máy tính toàn cầu",
                "Tổ chức lưu trữ tệp và thư mục khoa học",
                "Định dạng văn bản Word nâng cao và tạo bảng biểu",
                "Thiết kế bài thuyết trình đa phương tiện với âm thanh và video",
                "Lập trình với Scratch: Nhân vật, biến số và phép toán",
                "Cấu trúc rẽ nhánh if - else trong Scratch",
                "Vòng lặp và tạo trò chơi giải đố trên Scratch",
                "Ứng xử văn hóa và văn minh trong không gian mạng",
            ])
        ]),
        create_subject("congnghe-5", "Công nghệ", "🔌", 5, [
            ("Thiết bị điện gia đình và Kĩ thuật", [
                "Sử dụng tủ lạnh đúng cách và tiết kiệm điện",
                "Sử dụng máy điều hòa không khí an toàn",
                "Lắp ráp mạch điện đơn giản với pin và bóng đèn",
                "Lắp ráp mô hình quạt điện mini",
                "Lắp ráp mô hình xe ô tô chạy bằng pin",
                "Thiết kế sản phẩm thủ công kĩ thuật sáng tạo",
            ])
        ]),
        create_subject("daoduc-5", "Đạo đức", "❤️", 5, [
            ("Bản lĩnh và Trách nhiệm", [
                "Tự hào là học sinh lớp 5",
                "Có trách nhiệm với việc làm của mình",
                "Vượt qua khó khăn thử thách trong học tập",
                "Tôn trọng phụ nữ",
                "Hợp tác với mọi người xung quanh",
                "Bảo vệ tài nguyên nước và môi trường sống",
                "Em yêu hòa bình thế giới",
            ])
        ]),
        create_subject("tienganh-5", "Tiếng Anh", "🔤", 5, [
            ("Global Success English 5", [
                "Unit 1: All about me",
                "Unit 2: Our homes",
                "Unit 3: My foreign friends",
                "Unit 4: Our free-time activities",
                "Review 1",
                "Unit 5: My future job",
                "Unit 6: School trips",
                "Unit 7: How do you learn English?",
                "Unit 8: What are you reading?",
                "Review 2",
                "Unit 9: What did you see at the zoo?",
                "Unit 10: When will Sports Day be?",
                "Unit 11: What's the matter with you?",
                "Unit 12: Don't ride your bike too fast!",
                "Review 3",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 5,
        "label": "Lớp 5",
        "level": "Tiểu học",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=5",
        "subjects": subjects
    }

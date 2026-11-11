# -*- coding: utf-8 -*-
import os
import json

TARGET_FILE = os.path.join(os.path.dirname(__file__), "..", "client", "src", "curriculumData.ts")

def make_q(subject_name, grade, lesson_title, chapter):
    return [
        {
            "content": f"Theo chương trình chuẩn SGK {subject_name} Lớp {grade} ({lesson_title}), nội dung trọng tâm cần nắm vững là gì?",
            "option_a": f"Nắm vững định nghĩa, quy tắc và bản chất cốt lõi của bài học trong SGK {subject_name} {grade}.",
            "option_b": "Chỉ học thuộc lòng máy móc mà không cần hiểu bản chất kiến thức.",
            "option_c": "Bỏ qua các nguyên tắc cơ bản và ví dụ minh họa trong sách giáo khoa.",
            "option_d": "Nội dung bài học không có mối liên hệ với thực tế đời sống.",
            "correct": "A"
        },
        {
            "content": f"Khi vận dụng kiến thức của \"{lesson_title}\" ({chapter}), phương pháp tiếp cận khoa học nhất là:",
            "option_a": "Phân tích bản chất, liên hệ với hiện tượng thực tế và luyện tập các dạng bài tập mẫu.",
            "option_b": "Ghi nhớ công thức máy móc không qua kiểm chứng logic.",
            "option_c": "Làm bài tập ngẫu nhiên không tuân theo các bước quy định.",
            "option_d": "Bỏ qua các lưu ý quan trọng và điều kiện áp dụng trong SGK.",
            "correct": "A"
        }
    ]

def create_subject(subj_id, name, icon, grade, chapter_tuples):
    lessons = []
    idx = 1
    for chap_name, les_titles in chapter_tuples:
        for title in les_titles:
            les_id = f"{subj_id}-b{idx}"
            full_title = f"Bài {idx}: {title}" if not title.startswith("Bài") and not title.startswith("Unit") and not title.startswith("Review") else title
            lessons.append({
                "id": les_id,
                "number": idx,
                "chapter": chap_name,
                "title": full_title,
                "questions": make_q(name, grade, full_title, chap_name)
            })
            idx += 1
    return {
        "id": subj_id,
        "name": name,
        "icon": icon,
        "lessons": lessons
    }

grades = []

# ============================== LỚP 7 ==============================
g7_subjects = [
    create_subject("toan-7", "Toán", "🔢", 7, [
        ("Chương I: Số hữu tỉ", [
            "Tập hợp các số hữu tỉ",
            "Cộng, trừ, nhân, chia số hữu tỉ",
            "Lũy thừa với số mũ tự nhiên của một số hữu tỉ",
            "Thứ tự thực hiện các phép tính. Quy tắc chuyển vế",
        ]),
        ("Chương II: Số thực", [
            "Làm quen với số thập phân vô hạn tuần hoàn",
            "Số vô tỉ. Căn bậc hai số học",
            "Tập hợp các số thực",
        ]),
        ("Chương III: Góc và hai đường thẳng song song", [
            "Góc ở vị trí đặc biệt. Tia phân giác của một góc",
            "Hai đường thẳng song song và dấu hiệu nhận biết",
            "Tiên đề Euclid. Tính chất của hai đường thẳng song song",
            "Định lí và chứng minh định lí",
        ]),
        ("Chương IV: Tam giác bằng nhau", [
            "Tổng các góc trong một tam giác",
            "Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác (c.c.c)",
            "Trường hợp bằng nhau thứ hai và thứ ba của tam giác (c.g.c, g.c.g)",
            "Các trường hợp bằng nhau của tam giác vuông",
            "Tam giác cân. Đường trung trực của đoạn thẳng",
        ]),
        ("Chương V: Thu thập và biểu diễn dữ liệu", [
            "Thu thập và phân loại dữ liệu",
            "Biểu đồ hình quạt tròn",
            "Biểu đồ đoạn thẳng",
        ]),
        ("Chương VI: Tỉ lệ thức và đại lượng tỉ lệ", [
            "Tỉ lệ thức",
            "Tính chất của dãy tỉ số bằng nhau",
            "Đại lượng tỉ lệ thuận",
            "Đại lượng tỉ lệ nghịch",
        ]),
        ("Chương VII: Biểu thức đại số và đa thức một biến", [
            "Biểu thức đại số",
            "Đa thức một biến",
            "Phép cộng và phép trừ đa thức một biến",
            "Phép nhân đa thức một biến",
            "Phép chia đa thức một biến",
        ]),
        ("Chương VIII: Làm quen với biến cố và xác suất", [
            "Làm quen với biến cố",
            "Làm quen với xác suất của biến cố",
        ]),
        ("Chương IX: Quan hệ giữa các yếu tố trong một tam giác", [
            "Quan hệ giữa góc và cạnh đối diện trong một tam giác",
            "Quan hệ giữa đường vuông góc và đường xiên",
            "Quan hệ giữa ba cạnh của một tam giác",
            "Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong tam giác",
            "Sự đồng quy của ba đường trung trực, ba đường cao trong tam giác",
        ]),
        ("Chương X: Một số hình khối trong thực tiễn", [
            "Hình hộp chữ nhật và hình lập phương",
            "Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác",
        ])
    ]),
    create_subject("khtn-7", "Khoa học tự nhiên", "🧪", 7, [
        ("Mở đầu", [
            "Phương pháp và kĩ năng học tập môn Khoa học tự nhiên"
        ]),
        ("Chủ đề 1: Nguyên tử - Bảng tuần hoàn", [
            "Nguyên tử",
            "Nguyên tố hóa học",
            "Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
        ]),
        ("Chủ đề 2: Phân tử và Liên kết hóa học", [
            "Phân tử - Đơn chất - Hợp chất",
            "Giới thiệu về liên kết hóa học",
            "Hóa trị và công thức hóa học",
        ]),
        ("Chủ đề 3: Tốc độ", [
            "Tốc độ chuyển động",
            "Đo tốc độ",
            "Đồ thị quãng đường - thời gian",
            "Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
        ]),
        ("Chủ đề 4: Âm thanh", [
            "Sóng âm",
            "Độ to và độ cao của âm",
            "Phản xạ âm, chống ô nhiễm tiếng ồn",
        ]),
        ("Chủ đề 5: Ánh sáng", [
            "Năng lượng ánh sáng. Tia sáng, vùng nhìn thấy",
            "Sự phản xạ ánh sáng",
            "Ảnh của vật tạo bởi gương phẳng",
        ]),
        ("Chủ đề 6: Từ", [
            "Nam châm",
            "Từ trường",
            "Từ trường Trái Đất - Sử dụng la bàn",
            "Nam châm điện",
        ]),
        ("Chủ đề 7: Trao đổi chất và chuyển hóa năng lượng ở sinh vật", [
            "Vai trò của trao đổi chất và chuyển hóa năng lượng ở sinh vật",
            "Quang hợp ở thực vật",
            "Thực hành: Chứng minh quang hợp ở cây xanh",
            "Hô hấp tế bào",
            "Thực hành: Một số thí nghiệm về hô hấp tế bào",
            "Trao đổi khí ở sinh vật",
            "Vai trò của nước và các chất dinh dưỡng đối với cơ thể sinh vật",
            "Trao đổi nước và các chất dinh dưỡng ở thực vật",
            "Trao đổi nước và các chất dinh dưỡng ở động vật",
            "Thực hành: Vận chuyển nước ở thân và thoát hơi nước ở lá",
        ]),
        ("Chủ đề 8: Cảm ứng ở sinh vật", [
            "Cảm ứng ở sinh vật và ứng dụng",
        ]),
        ("Chủ đề 9: Sinh trưởng và phát triển ở sinh vật", [
            "Sinh trưởng và phát triển ở sinh vật",
            "Các yếu tố ảnh hưởng đến sinh trưởng và phát triển ở sinh vật",
            "Thực hành: Chứng minh sinh trưởng và phát triển ở sinh vật",
        ]),
        ("Chủ đề 10: Sinh sản ở sinh vật", [
            "Sinh sản vô tính ở sinh vật",
            "Sinh sản hữu tính ở sinh vật",
            "Các yếu tố ảnh hưởng và ứng dụng sinh sản ở sinh vật",
            "Vệ sinh sinh sản tuổi vị thành niên",
        ]),
        ("Chủ đề 11: Cơ thể sinh vật là một thể thống nhất", [
            "Cơ thể sinh vật là một thể thống nhất",
            "Bảo vệ môi trường sống của sinh vật",
            "Ôn tập và kiểm tra cuối năm",
        ])
    ]),
    create_subject("ls-dl-7", "Lịch sử & Địa lí", "🗺️", 7, [
        ("Phần Lịch sử: Lịch sử thế giới và Việt Nam trung đại", [
            "Quá trình hình thành và phát triển của chế độ phong kiến ở Tây Âu",
            "Các cuộc phát kiến địa lí",
            "Phong trào Văn hóa Phục hưng và Cải cách tôn giáo",
            "Sự ra đời của chủ nghĩa tư bản ở Tây Âu",
            "Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX",
            "Các vương quốc phong kiến Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI",
            "Vương triều Hồi giáo Đê-li và Vương triều Mô-gôn ở Ấn Độ",
            "Khái quát lịch sử Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX",
            "Đất nước dưới thời Đường",
            "Nước Đại Cồ Việt thời Đinh - Tiền Lê (968 - 1009)",
            "Nước Đại Việt thời Lý (1009 - 1225)",
            "Cuộc kháng chiến chống quân xâm lược Tống (1075 - 1077)",
            "Nước Đại Việt thời Trần (1226 - 1400)",
            "Ba lần kháng chiến chống quân xâm lược Mông - Nguyên",
            "Nước Đại Ngu thời Hồ (1400 - 1407)",
            "Khởi nghĩa Lam Sơn (1418 - 1427)",
            "Nước Đại Việt thời Lê Sơ (1428 - 1527)",
            "Lịch sử vùng đất Nam Bộ từ đầu thế kỉ X đến đầu thế kỉ XVI",
        ]),
        ("Phần Địa lí: Các châu lục và bảo vệ môi trường", [
            "Vị trí địa lí, đặc điểm tự nhiên Châu Âu",
            "Đặc điểm dân cư, xã hội Châu Âu",
            "Liên minh Châu Âu (EU)",
            "Vị trí địa lí, đặc điểm tự nhiên Châu Á",
            "Đặc điểm dân cư, xã hội Châu Á",
            "Bản đồ chính trị Châu Á và các khu vực của Châu Á",
            "Vị trí địa lí, đặc điểm tự nhiên Châu Phi",
            "Đặc điểm dân cư, xã hội và phương thức khai thác tự nhiên ở Châu Phi",
            "Vị trí địa lí, phạm vi và tự nhiên Châu Mỹ",
            "Đặc điểm dân cư, xã hội Bắc Mỹ",
            "Đặc điểm tự nhiên, dân cư và xã hội Trung và Nam Mỹ",
            "Vị trí địa lí, đặc điểm tự nhiên Châu Đại Dương",
            "Đặc điểm dân cư, kinh tế Châu Đại Dương",
            "Vị trí địa lí, lịch sử khám phá và tự nhiên Châu Nam Cực",
            "Vấn đề bảo vệ môi trường và biến đổi khí hậu toàn cầu",
        ])
    ]),
    create_subject("nguvan-7", "Ngữ văn", "📚", 7, [
        ("Tập 1", [
            "Bầu trời tuổi thơ (Bầy chim chìa vôi, Đi lấy mật, Ngàn sao làm việc)",
            "Khúc nhạc tâm hồn (Đồng dao mùa xuân, Gặp lá cơm nếp, Trở gió)",
            "Cội nguồn yêu thương (Vừa nhắm mắt vừa mở cửa sổ, Người thầy đầu tiên, Quê hương)",
            "Giai điệu đất nước (Mùa xuân nho nhỏ, Gò Me, Bài thơ Đường núi)",
            "Màu sắc trăm miền (Sông Huế, Chiều biên giới, Tháng Giêng của mơ)",
        ]),
        ("Tập 2", [
            "Bài học cuộc sống (Đẽo cày giữa đường, Ếch ngồi đáy giếng, Thầy bói xem voi)",
            "Thế giới viễn tưởng (Bạch tuộc, Chất làm gỉ, Nhật trình Sol 6)",
            "Trải nghiệm để trưởng thành (Bản đồ dẫn đường, Hãy cầm lấy và đọc, Trò chơi cướp cờ)",
            "Hòa điệu với tự nhiên (Thủy tiên tháng Một, Lễ rửa làng của người Lô Lô, Bản tin hoa anh đào)",
            "Trang sách và cuộc sống (Sách mở rộng thế giới, Văn học và đời sống)",
        ])
    ]),
    create_subject("tinhoc-7", "Tin học", "💻", 7, [
        ("Chủ đề A: Máy tính và cộng đồng", [
            "Thiết bị vào - ra",
            "Phần mềm ứng dụng",
            "Quản lí dữ liệu trong máy tính",
        ]),
        ("Chủ đề B: Mạng máy tính và Internet", [
            "Mạng xã hội và một số kênh trao đổi thông tin trên Internet",
            "Ứng xử trên mạng",
        ]),
        ("Chủ đề C: Ứng dụng tin học", [
            "Làm quen với phần mềm bảng tính",
            "Tính toán tự động trên bảng tính",
            "Công cụ hỗ trợ tính toán",
            "Trình bày bảng tính",
            "Định dạng nâng cao trên bảng tính",
            "Tạo bài trình chiếu",
            "Định dạng đối tượng trên trang chiếu",
        ]),
        ("Chủ đề D: Giải quyết vấn đề với sự trợ giúp của máy tính", [
            "Thuật toán tìm kiếm tuần tự",
            "Thuật toán tìm kiếm nhị phân",
            "Thuật toán sắp xếp nổi bọt",
            "Thuật toán sắp xếp chọn",
        ])
    ]),
    create_subject("congnghe-7", "Công nghệ", "🌾", 7, [
        ("Phần 1: Trồng trọt", [
            "Giới thiệu về trồng trọt",
            "Làm đất trồng cây",
            "Gieo trồng cây nông nghiệp",
            "Chăm sóc cây trồng",
            "Thu hoạch sản phẩm trồng trọt",
            "Dự án: Trồng rau an toàn",
        ]),
        ("Phần 2: Lâm nghiệp", [
            "Giới thiệu về rừng",
            "Trồng, chăm sóc và bảo vệ rừng",
        ]),
        ("Phần 3: Chăn nuôi", [
            "Giới thiệu về chăn nuôi",
            "Nuôi dưỡng và chăm sóc vật nuôi",
            "Phòng và trị bệnh cho vật nuôi",
            "Chăn nuôi gà thịt trong nông hộ",
        ]),
        ("Phần 4: Thủy sản", [
            "Giới thiệu về thủy sản",
            "Bảo vệ môi trường và nguồn lợi thủy sản",
        ])
    ]),
    create_subject("gdcd-7", "Giáo dục công dân", "⚖️", 7, [
        ("Đạo đức và Kĩ năng sống Lớp 7", [
            "Tự hào về truyền thống quê hương",
            "Quan tâm, cảm thông và chia sẻ",
            "Học tập tự giác, tích cực",
            "Giữ chữ tín",
            "Bảo tồn di sản văn hóa",
            "Quản lý tiền",
            "Ứng phó với tâm lí căng thẳng",
            "Phòng, chống bạo lực học đường",
            "Quản lí cảm xúc",
            "Tệ nạn xã hội và phòng, chống tệ nạn xã hội",
        ])
    ]),
    create_subject("tienganh-7", "Tiếng Anh", "🔤", 7, [
        ("Global Success English 7", [
            "Unit 1: Hobbies",
            "Unit 2: Healthy Living",
            "Unit 3: Community Service",
            "Review 1 (Units 1 - 2 - 3)",
            "Unit 4: Music and Arts",
            "Unit 5: Food and Drink",
            "Unit 6: A Visit to a School",
            "Review 2 (Units 4 - 5 - 6)",
            "Unit 7: Traffic",
            "Unit 8: Films",
            "Unit 9: Festivals around the World",
            "Review 3 (Units 7 - 8 - 9)",
            "Unit 10: Energy Sources",
            "Unit 11: Travelling in the Future",
            "Unit 12: English-Speaking Countries",
            "Review 4 (Units 10 - 11 - 12)",
        ])
    ])
]

grades.append({
    "grade": 7,
    "label": "Lớp 7",
    "level": "THCS",
    "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=7",
    "subjects": g7_subjects
})

print(f"Grade 7 generated: {len(g7_subjects)} subjects.")

# -*- coding: utf-8 -*-
from .helper import create_subject

def get_grade_10():
    subjects = [
        create_subject("toan-10", "Toán", "📐", 10, [
            ("Chương I: Mệnh đề và tập hợp", [
                "Mệnh đề",
                "Tập hợp và các phép toán trên tập hợp",
            ]),
            ("Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn", [
                "Bất phương trình bậc nhất hai ẩn",
                "Hệ bất phương trình bậc nhất hai ẩn",
            ]),
            ("Chương III: Hệ thức lượng trong tam giác", [
                "Giá trị lượng giác của một góc từ 0° đến 180°",
                "Định lí cosin và định lí sin",
                "Giải tam giác và ứng dụng thực tế",
            ]),
            ("Chương IV: Vectơ", [
                "Khái niệm vectơ",
                "Tổng và hiệu của hai vectơ",
                "Tích của một số với một vectơ",
                "Tích vô hướng của hai vectơ",
            ]),
            ("Chương V: Các số đặc trưng đo xu thế trung tâm và mức độ phân tán", [
                "Số gần đúng và sai số",
                "Các số đặc trưng đo xu thế trung tâm",
                "Các số đặc trưng đo mức độ phân tán",
            ]),
            ("Chương VI: Hàm số, đồ thị và ứng dụng", [
                "Hàm số và đồ thị",
                "Hàm số bậc hai",
                "Dấu của tam thức bậc hai",
                "Phương trình quy về phương trình bậc hai",
            ]),
            ("Chương VII: Phương pháp toạ độ trong mặt phẳng", [
                "Toạ độ của vectơ",
                "Đường thẳng trong mặt phẳng toạ độ",
                "Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách",
                "Đường tròn trong mặt phẳng toạ độ",
                "Ba đường conic trong mặt phẳng toạ độ (Elip, Hypebol, Parabol)",
            ]),
            ("Chương VIII: Đại số tổ hợp", [
                "Quy tắc đếm",
                "Hoán vị, chỉnh hợp và tổ hợp",
                "Nhị thức Newton",
            ]),
            ("Chương IX: Tính xác suất theo định nghĩa cổ điển", [
                "Biến cố và định nghĩa cổ điển của xác suất",
                "Thực hành tính xác suất trong một số bài toán thực tế",
            ])
        ]),
        create_subject("vatli-10", "Vật lí", "⚡", 10, [
            ("Mở đầu: Giới thiệu môn Vật lí", [
                "Khái quát về môn Vật lí",
                "Vấn đề an toàn trong phòng thực hành Vật lí",
                "Sai số trong phép đo các đại lượng vật lí",
            ]),
            ("Chương II: Động học", [
                "Độ dịch chuyển và quãng đường đi được",
                "Tốc độ và vận tốc",
                "Thực hành: Đo tốc độ của vật chuyển động",
                "Đồ thị độ dịch chuyển – thời gian",
                "Chuyển động biến đổi. Gia tốc",
                "Chuyển động thẳng biến đổi đều",
                "Sự rơi tự do",
                "Chuyển động ném ngang và ném xiên",
            ]),
            ("Chương III: Động lực học", [
                "Tổng hợp và phân tích lực. Cân bằng lực",
                "Định luật I Newton",
                "Định luật II Newton",
                "Định luật III Newton",
                "Trọng lực và lực căng",
                "Lực ma sát",
                "Lực cản và lực nâng của chất lưu",
                "Moment lực. Điều kiện cân bằng của vật",
            ]),
            ("Chương IV: Năng lượng, công, công suất", [
                "Năng lượng. Công cơ học",
                "Công suất",
                "Động năng và thế năng",
                "Cơ năng và định luật bảo toàn cơ năng",
                "Hiệu suất của máy",
            ]),
            ("Chương V: Động lượng", [
                "Động lượng và định luật bảo toàn động lượng",
                "Va chạm đàn hồi và va chạm mềm",
            ]),
            ("Chương VI: Chuyển động tròn", [
                "Chuyển động tròn đều. Tốc độ góc",
                "Lực hướng tâm và gia tốc hướng tâm",
            ]),
            ("Chương VII: Biến dạng của vật rắn. Áp suất chất lỏng", [
                "Biến dạng cơ của vật rắn. Định luật Hooke",
                "Áp suất chất lỏng và khối lượng riêng",
            ])
        ]),
        create_subject("hoahoc-10", "Hóa học", "🧪", 10, [
            ("Chương 1: Cấu tạo nguyên tử", [
                "Thành phần của nguyên tử",
                "Hạt nhân nguyên tử. Nguyên tố hóa học. Đồng vị",
                "Cấu trúc vỏ electron của nguyên tử",
                "Cấu hình electron nguyên tử",
            ]),
            ("Chương 2: Bảng tuần hoàn các nguyên tố hóa học", [
                "Cấu tạo bảng tuần hoàn các nguyên tố hóa học",
                "Xu hướng biến đổi bán kính, độ âm điện, tính kim loại, tính phi kim",
                "Xu hướng biến đổi thành phần và tính chất của hợp chất",
                "Định luật tuần hoàn và ý nghĩa của bảng tuần hoàn",
            ]),
            ("Chương 3: Liên kết hóa học", [
                "Quy tắc Octet",
                "Liên kết ion",
                "Liên kết cộng hóa trị",
                "Liên kết hydrogen và tương tác van der Waals",
            ]),
            ("Chương 4: Phản ứng oxi hóa - khử", [
                "Phản ứng oxi hóa - khử",
                "Phương pháp thăng bằng electron",
                "Ứng dụng của phản ứng oxi hóa - khử trong đời sống và sản xuất",
            ]),
            ("Chương 5: Năng lượng hóa học", [
                "Biến thiên enthalpy trong các phản ứng hóa học",
                "Phương trình nhiệt hóa học",
                "Tính biến thiên enthalpy của phản ứng hóa học",
            ]),
            ("Chương 6: Tốc độ phản ứng hóa học", [
                "Tốc độ phản ứng hóa học",
                "Các yếu tố ảnh hưởng đến tốc độ phản ứng hóa học",
            ]),
            ("Chương 7: Nguyên tố nhóm VIIA (Nhóm Halogen)", [
                "Nguyên tố nhóm VIIA",
                "Hydrogen halide và một số phản ứng của ion halide",
            ])
        ]),
        create_subject("sinhhoc-10", "Sinh học", "🧬", 10, [
            ("Mở đầu: Giới thiệu chung về sinh học", [
                "Giới thiệu chương trình môn Sinh học",
                "Các phương pháp nghiên cứu và học tập môn Sinh học",
                "Các cấp độ tổ chức của thế giới sống",
            ]),
            ("Chương 1: Sinh học tế bào", [
                "Khái quát về tế bào",
                "Nước và các phân tử sinh học trong tế bào",
                "Carbohydrate và Lipid",
                "Protein và Axit Nucleic (ADN, ARN)",
                "Cấu trúc tế bào nhân sơ",
                "Cấu trúc tế bào nhân thực: Màng sinh chất và chất tế bào",
                "Các bào quan trong tế bào nhân thực: Ti thể, Lục lạp, Lưới nội chất",
                "Nhân tế bào và khung xương tế bào",
            ]),
            ("Chương 2: Trao đổi chất và chuyển hóa năng lượng ở tế bào", [
                "Vận chuyển các chất qua màng sinh chất",
                "Enzyme và chuyển hóa vật chất",
                "Thực hành: Khảo sát hoạt tính của enzyme",
                "Tổng hợp các chất và tích lũy năng lượng",
                "Phân giải các chất và giải phóng năng lượng (Hô hấp tế bào)",
                "Quang hợp ở tế bào thực vật",
            ]),
            ("Chương 3: Chu kì tế bào và phân bào", [
                "Chu kì tế bào và quá trình nguyên phân",
                "Quá trình giảm phân",
                "Thực hành: Quan sát các kì của nguyên phân và giảm phân",
                "Công nghệ tế bào và ứng dụng",
            ]),
            ("Chương 4: Vi sinh vật và virus", [
                "Khái quát về vi sinh vật",
                "Sinh trưởng và sinh sản ở vi sinh vật",
                "Ứng dụng vi sinh vật trong đời sống",
                "Cấu tạo và chu trình nhân lên của virus",
                "Một số bệnh do virus và biện pháp phòng chống",
            ])
        ]),
        create_subject("lichsu-10", "Lịch sử", "🏛️", 10, [
            ("Nhập môn Lịch sử và Văn minh thế giới cổ - trung đại", [
                "Hiện thực lịch sử và nhận thức lịch sử",
                "Tri thức lịch sử và cuộc sống",
                "Sử học với các lĩnh vực khoa học khác",
                "Sử học với công tác bảo tồn và phát huy giá trị di sản",
                "Khái niệm văn minh",
                "Văn minh Ai Cập cổ đại",
                "Văn minh Lưỡng Hà và Ấn Độ cổ đại",
                "Văn minh Trung Hoa thời kì cổ - trung đại",
                "Văn minh Hy Lạp - La Mã cổ đại",
                "Văn minh Tây Âu thời kì Phục hưng",
                "Văn minh Đông Nam Á thời kì cổ - trung đại",
                "Văn minh Đại Việt",
                "Các cuộc cách mạng công nghiệp thời kì cận đại",
                "Các cuộc cách mạng công nghiệp thời kì hiện đại",
            ])
        ]),
        create_subject("diali-10", "Địa lí", "🌍", 10, [
            ("Phần 1: Sử dụng bản đồ", [
                "Một số phương pháp biểu hiện các đối tượng địa lí trên bản đồ",
                "Phương pháp sử dụng bản đồ trong học tập và đời sống",
                "Sử dụng bản đồ số và hệ thống thông tin địa lí (GIS)",
            ]),
            ("Phần 2: Địa lí tự nhiên đại cương", [
                "Trái Đất trong hệ Mặt Trời",
                "Hệ quả chuyển động tự quay quanh trục của Trái Đất",
                "Hệ quả chuyển động quanh Mặt Trời của Trái Đất",
                "Thạch quyển. Thuyết kiến tạo mảng",
                "Tác động của nội lực đến địa hình bề mặt Trái Đất",
                "Tác động của ngoại lực đến địa hình bề mặt Trái Đất",
                "Khí quyển. Sự phân bố nhiệt độ không khí trên Trái Đất",
                "Khí áp và gió",
                "Thủy quyển. Một số nhân tố ảnh hưởng tới chế độ nước sông",
                "Sóng biển, thủy triều, dòng biển",
                "Thổ nhưỡng quyển và các nhân tố hình thành đất",
                "Sinh quyển và các nhân tố ảnh hưởng đến sự phát triển sinh vật",
                "Quy luật thống nhất và hoàn chỉnh của vỏ cảnh quan",
                "Quy luật địa đới và quy luật phi địa đới",
            ]),
            ("Phần 3: Địa lí dân cư và kinh tế", [
                "Dân số và sự gia tăng dân số trên thế giới",
                "Cơ cấu dân số",
                "Phân bố dân cư và đô thị hóa",
                "Nguồn lực phát triển kinh tế",
                "Cơ cấu kinh tế",
                "Địa lí ngành nông nghiệp, lâm nghiệp và thủy sản",
                "Địa lí ngành công nghiệp",
                "Địa lí ngành năng lượng và luyện kim",
                "Địa lí ngành dịch vụ",
                "Địa lí giao thông vận tải và bưu chính viễn thông",
                "Địa lí thương mại và tài chính ngân hàng",
                "Địa lí du lịch",
                "Môi trường và phát triển bền vững",
            ])
        ]),
        create_subject("tinhoc-10", "Tin học", "💻", 10, [
            ("Chủ đề 1: Máy tính và xã hội tri thức", [
                "Thông tin và xử lí thông tin",
                "Vai trò của thiết bị thông minh và tin học đối với xã hội",
                "Mạng máy tính và Internet",
                "Điện toán đám mây và kết nối vạn vật",
                "An toàn thông tin và bảo vệ dữ liệu cá nhân",
                "Đạo đức, pháp luật và văn hóa trong môi trường số",
            ]),
            ("Chủ đề 2: Lập trình cơ bản với Python", [
                "Làm quen với môi trường lập trình Python",
                "Biến, phép toán và câu lệnh gán",
                "Các lệnh vào - ra đơn giản",
                "Cấu trúc rẽ nhánh if",
                "Cấu trúc rẽ nhánh if - else",
                "Cấu trúc lặp for",
                "Cấu trúc lặp while",
                "Lập trình giải bài toán bằng các vòng lặp",
                "Xâu kí tự (String) trong Python",
                "Các thao tác cơ bản trên xâu kí tự",
                "Danh sách (List) trong Python",
                "Các thao tác cơ bản trên danh sách",
                "Hàm trong Python",
                "Phạm vi biến và tham số của hàm",
                "Thuật toán tìm kiếm tuần tự và nhị phân trên Python",
                "Thuật toán sắp xếp nổi bọt và sắp xếp chọn",
                "Thực hành gỡ lỗi chương trình Python",
                "Dự án: Xây dựng ứng dụng quản lí học sinh bằng Python",
            ])
        ]),
        create_subject("gdkt-pl-10", "Giáo dục kinh tế và pháp luật", "⚖️", 10, [
            ("Phần 1: Giáo dục kinh tế", [
                "Nền kinh tế và các chủ thể của nền kinh tế",
                "Thị trường và cơ chế thị trường",
                "Quy luật giá trị và quy luật cung - cầu",
                "Lạm phát và thất nghiệp trong nền kinh tế",
                "Ngân sách nhà nước và hệ thống thuế",
                "Sản xuất kinh doanh và các mô hình sản xuất kinh doanh",
                "Tín dụng và các hình thức tín dụng",
                "Lập kế hoạch tài chính cá nhân",
            ]),
            ("Phần 2: Giáo dục pháp luật", [
                "Hệ thống chính trị nước Cộng hòa xã hội chủ nghĩa Việt Nam",
                "Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam",
                "Quyền con người, quyền và nghĩa vụ cơ bản của công dân",
                "Quyền bình đẳng của công dân trước pháp luật",
                "Quyền tự do cơ bản của công dân",
                "Quyền và nghĩa vụ của công dân về bầu cử, ứng cử",
                "Quyền và nghĩa vụ của công dân trong bảo vệ Tổ quốc",
            ])
        ]),
        create_subject("congnghe-10", "Công nghệ", "⚙️", 10, [
            ("Thiết kế kĩ thuật & Nông nghiệp công nghệ cao", [
                "Khái quát về công nghệ",
                "Hệ thống kĩ thuật",
                "Công nghệ và đời sống",
                "Bản vẽ kĩ thuật và tiêu chuẩn trình bày bản vẽ",
                "Hình chiếu vuông góc",
                "Hình chiếu trục đo",
                "Hình chiếu phối cảnh",
                "Quy trình thiết kế kĩ thuật",
                "Đất trồng và giá thể trồng trọt",
                "Phân bón và dinh dưỡng cây trồng",
                "Công nghệ sinh học trong nhân giống cây trồng",
                "Phòng trừ sâu bệnh hại cây trồng bằng phương pháp sinh học",
                "Ứng dụng công nghệ cao trong thu hoạch và bảo quản nông sản",
            ])
        ]),
        create_subject("nguvan-10", "Ngữ văn", "📚", 10, [
            ("Tập 1", [
                "Sức sống của sử thi (Đăm Săn chiến thắng Mtao Mxây, Ô-đi-xê)",
                "Vẻ đẹp của thơ ca truyền thống (Cảm hoài, Tự tình, Thu hứng)",
                "Nghệ thuật chèo và tuồng (Xúy Vân giả dại, Huyện đường)",
                "Bản sắc văn hóa dân tộc (Về chính phụ ngâm khúc, Thơ Nguyễn Trãi)",
            ]),
            ("Tập 2", [
                "Khát vọng độc lập (Bình Ngô đại cáo - Nguyễn Trãi)",
                "Nâng niu kỉ niệm (Tôi đã học tập như thế nào - M.Gorki)",
                "Anh hùng và nghệ sĩ (Truyện Kiều - Nguyễn Du: Trao duyên, Kiều ở lầu Ngưng Bích)",
                "Đất nước và con người qua kí và tùy bút",
                "Khát vọng hòa bình và công lí trong văn học hiện đại",
            ])
        ]),
        create_subject("tienganh-10", "Tiếng Anh", "🔤", 10, [
            ("Global Success English 10", [
                "Unit 1: Family Life",
                "Unit 2: Humans and the Environment",
                "Unit 3: Music",
                "Review 1",
                "Unit 4: For a Better Community",
                "Unit 5: Inventions",
                "Review 2",
                "Unit 6: Gender Equality",
                "Unit 7: Viet Nam and International Organisations",
                "Unit 8: New Ways to Learn",
                "Review 3",
                "Unit 9: Protecting the Environment",
                "Unit 10: Ecotourism",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 10,
        "label": "Lớp 10",
        "level": "THPT",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=10",
        "subjects": subjects
    }

def get_grade_11():
    subjects = [
        create_subject("toan-11", "Toán", "📐", 11, [
            ("Chương I: Hàm số lượng giác và phương trình lượng giác", [
                "Giá trị lượng giác của góc lượng giác",
                "Công thức lượng giác",
                "Hàm số lượng giác",
                "Phương trình lượng giác cơ bản",
            ]),
            ("Chương II: Dãy số. Cấp số cộng và cấp số nhân", [
                "Dãy số",
                "Cấp số cộng",
                "Cấp số nhân",
            ]),
            ("Chương III: Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu ghép nhóm", [
                "Mẫu số liệu ghép nhóm",
                "Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
            ]),
            ("Chương IV: Quan hệ song song trong không gian", [
                "Điểm, đường thẳng và mặt phẳng trong không gian",
                "Hai đường thẳng song song trong không gian",
                "Đường thẳng và mặt phẳng song song",
                "Hai mặt phẳng song song",
                "Phép chiếu song song",
            ]),
            ("Chương V: Giới hạn. Hàm số liên tục", [
                "Giới hạn của dãy số",
                "Giới hạn của hàm số",
                "Hàm số liên tục",
            ]),
            ("Chương VI: Hàm số mũ và hàm số lôgarit", [
                "Phép tính luỹ thừa",
                "Phép tính lôgarit",
                "Hàm số mũ và hàm số lôgarit",
                "Phương trình, bất phương trình mũ và lôgarit",
            ]),
            ("Chương VII: Đạo hàm", [
                "Định nghĩa và ý nghĩa của đạo hàm",
                "Các quy tắc tính đạo hàm",
                "Đạo hàm cấp hai và ý nghĩa vật lí",
            ]),
            ("Chương VIII: Quan hệ vuông góc trong không gian", [
                "Hai đường thẳng vuông góc",
                "Đường thẳng vuông góc với mặt phẳng",
                "Hai mặt phẳng vuông góc",
                "Khoảng cách trong không gian",
                "Góc giữa đường thẳng và mặt phẳng. Góc nhị diện",
                "Hình lăng trụ đứng, hình chóp đều, hình hộp chữ nhật",
            ]),
            ("Chương IX: Xác suất", [
                "Biến cố giao và quy tắc nhân xác suất",
                "Biến cố hợp và quy tắc cộng xác suất",
            ])
        ]),
        create_subject("vatli-11", "Vật lí", "⚡", 11, [
            ("Chương I: Dao động", [
                "Mô tả dao động",
                "Phương trình dao động điều hòa",
                "Vận tốc, gia tốc trong dao động điều hòa",
                "Năng lượng trong dao động điều hòa",
                "Dao động điều hòa của con lắc lò xo và con lắc đơn",
                "Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
            ]),
            ("Chương II: Sóng", [
                "Mô tả sóng",
                "Sóng ngang, sóng dọc và sự truyền sóng",
                "Giao thoa sóng cơ",
                "Sóng dừng trên sợi dây",
                "Sóng âm và đặc trưng vật lí của âm",
                "Đặc trưng sinh lí của âm (Độ cao, độ to, âm sắc)",
                "Sóng điện từ và thang sóng điện từ",
            ]),
            ("Chương III: Điện trường", [
                "Lực tương tác giữa các điện tích (Định luật Coulomb)",
                "Điện trường và cường độ điện trường",
                "Điện thế và thế năng điện",
                "Tụ điện và điện dung của tụ điện",
                "Năng lượng của tụ điện",
            ]),
            ("Chương IV: Dòng điện không đổi và Mạch điện", [
                "Cường độ dòng điện",
                "Điện trở và định luật Ohm",
                "Nguồn điện và suất điện động",
                "Định luật Ohm cho toàn mạch",
                "Năng lượng điện và công suất điện",
                "Mắc các nguồn điện thành bộ",
            ])
        ]),
        create_subject("hoahoc-11", "Hóa học", "🧪", 11, [
            ("Chương 1: Cân bằng hóa học", [
                "Khái niệm về cân bằng hóa học và hằng số Kc",
                "Sự chuyển dịch cân bằng hóa học theo nguyên lí Le Chatelier",
                "Sự điện li trong dung dịch nước. Thuyết Bronsted - Lowry về acid - base",
                "pH của dung dịch và chuẩn độ acid - base",
            ]),
            ("Chương 2: Nitrogen và Sulfur", [
                "Đơn chất Nitrogen",
                "Ammonia và một số hợp chất ammonium",
                "Một số hợp chất của nitrogen với oxygen. Nitric acid",
                "Sulfur và sulfur dioxide",
                "Sulfuric acid và muối sulfate",
            ]),
            ("Chương 3: Đại cương về hóa học hữu cơ", [
                "Hợp chất hữu cơ và hóa học hữu cơ",
                "Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
                "Công thức phân tử hợp chất hữu cơ",
                "Cấu tạo hóa học hợp chất hữu cơ",
            ]),
            ("Chương 4: Hydrocarbon", [
                "Alkane (Methane, Ethane, Propane...)",
                "Hydrocarbon không no: Alkene và Alkyne",
                "Arene (Benzene và đồng đẳng)",
            ]),
            ("Chương 5: Dẫn xuất halogen - Alcohol - Phenol", [
                "Dẫn xuất halogen",
                "Alcohol (Ethanol, Methanol, Glycerol)",
                "Phenol",
            ]),
            ("Chương 6: Hợp chất carbonyl và Carboxylic acid", [
                "Hợp chất carbonyl (Aldehyde và Ketone)",
                "Carboxylic acid (Acetic acid, Formic acid...)",
            ])
        ]),
        create_subject("sinhhoc-11", "Sinh học", "🧬", 11, [
            ("Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật", [
                "Khái quát về trao đổi chất và chuyển hóa năng lượng",
                "Trao đổi nước và khoáng ở thực vật: Hấp thụ và vận chuyển",
                "Thoát hơi nước ở lá cây",
                "Quang hợp ở thực vật C3, C4 và CAM",
                "Hô hấp ở thực vật",
                "Dinh dưỡng và tiêu hóa ở động vật",
                "Hô hấp ở động vật (Qua da, mang, hệ thống khí quản, phổi)",
                "Hệ tuần hoàn ở động vật và hoạt động của tim mạch",
                "Huyết áp và vận tốc máu",
                "Bài tiết và cân bằng nội môi",
            ]),
            ("Chương 2: Cảm ứng ở sinh vật", [
                "Khái quát về cảm ứng",
                "Cảm ứng ở thực vật: Hướng động và ứng động",
                "Cảm ứng ở động vật: Điện thế nghỉ và điện thế hoạt động",
                "Sự lan truyền xung thần kinh qua synapse",
                "Tập tính ở động vật",
            ]),
            ("Chương 3: Sinh trưởng và phát triển ở sinh vật", [
                "Khái quát về sinh trưởng và phát triển",
                "Sinh trưởng và phát triển ở thực vật: Hormone thực vật",
                "Sinh trưởng và phát triển ở động vật: Biến thái và không biến thái",
            ]),
            ("Chương 4: Sinh sản ở sinh vật", [
                "Sinh sản vô tính ở thực vật",
                "Sinh sản hữu tính ở thực vật có hoa",
                "Sinh sản vô tính ở động vật",
                "Sinh sản hữu tính ở động vật",
                "Cơ chế điều hòa sinh sản",
                "Cơ thể sinh vật là một thể thống nhất",
            ])
        ]),
        create_subject("lichsu-11", "Lịch sử", "🏛️", 11, [
            ("Lịch sử thế giới và Việt Nam cận - hiện đại", [
                "Sự phát triển của chủ nghĩa tư bản từ tự do cạnh tranh sang độc quyền",
                "Chủ nghĩa xã hội từ năm 1917 đến nay",
                "Quá trình xâm lược và cai trị của chủ nghĩa thực dân ở Đông Nam Á",
                "Phong trào đấu tranh giành độc lập dân tộc ở Đông Nam Á",
                "Chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam",
                "Một số cuộc cải cách lớn trong lịch sử Việt Nam (Hồ Quý Ly, Lê Thánh Tông, Minh Mạng)",
                "Lịch sử quan hệ đối ngoại của Việt Nam thời kì phong kiến",
                "Biển Đông: Vị trí chiến lược và lịch sử bảo vệ chủ quyền của Việt Nam",
                "Công cuộc bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
            ])
        ]),
        create_subject("diali-11", "Địa lí", "🌍", 11, [
            ("Địa lí khu vực và quốc gia trên thế giới", [
                "Sự khác biệt về trình độ phát triển kinh tế - xã hội của các nhóm nước",
                "Toàn cầu hóa và khu vực hóa kinh tế",
                "Một số vấn đề an ninh toàn cầu",
                "Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội khu vực Mỹ Latinh",
                "Kinh tế khu vực Mỹ Latinh",
                "Vị trí địa lí, điều kiện tự nhiên, dân cư Liên minh châu Âu (EU)",
                "Kinh tế Liên minh châu Âu",
                "Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
                "Vị trí địa lí, tự nhiên và tài nguyên khu vực Tây Nam Á",
                "Kinh tế khu vực Tây Nam Á",
                "Hợp chúng quốc Hoa Kỳ (Hoa Kỳ) - Vị trí, tự nhiên và dân cư",
                "Kinh tế Hoa Kỳ",
                "Liên bang Nga - Vị thế cường quốc",
                "Nhật Bản - Tự nhiên, dân cư và kinh tế",
                "Cộng hòa Nhân dân Trung Hoa - Tự nhiên, dân cư và kinh tế",
                "Ô-xtrây-li-a (Australia) và Cộng hòa Nam Phi",
            ])
        ]),
        create_subject("tinhoc-11", "Tin học", "💻", 11, [
            ("Hệ quản trị Cơ sở dữ liệu và Lập trình nâng cao", [
                "Hệ điều hành và phần mềm ứng dụng nguồn mở",
                "Thiết bị mạng và các giao thức mạng Internet",
                "Khái niệm Cơ sở dữ liệu (CSDL) và Hệ quản trị CSDL quan hệ",
                "Cấu trúc bảng, khoá chính và khoá ngoại trong CSDL",
                "Ngôn ngữ SQL: Lệnh tạo bảng và chèn dữ liệu (CREATE, INSERT)",
                "Ngôn ngữ SQL: Lệnh truy vấn dữ liệu (SELECT FROM WHERE)",
                "Ngôn ngữ SQL: Các phép toán gộp và gom nhóm (GROUP BY, HAVING)",
                "Ngôn ngữ SQL: Lệnh cập nhật và xóa dữ liệu (UPDATE, DELETE)",
                "Kết nối dữ liệu từ nhiều bảng bằng lệnh JOIN",
                "Bảo mật và an toàn dữ liệu trong hệ CSDL",
                "Trí tuệ nhân tạo (AI) căn bản và Học máy (Machine Learning)",
                "Thuật toán đệ quy và quy hoạch động căn bản trên Python",
            ])
        ]),
        create_subject("gdkt-pl-11", "Giáo dục kinh tế và pháp luật", "⚖️", 11, [
            ("Kinh tế vĩ mô và Quyền bình đẳng công dân", [
                "Cạnh tranh trong nền kinh tế thị trường",
                "Cung - cầu trong nền kinh tế thị trường",
                "Lạm phát trong nền kinh tế thị trường",
                "Thất nghiệp trong nền kinh tế thị trường",
                "Thị trường lao động và việc làm",
                "Ý tưởng kinh doanh và lập kế hoạch kinh doanh",
                "Đạo đức kinh doanh",
                "Văn hóa tiêu dùng",
                "Quyền bình đẳng của công dân trước pháp luật",
                "Bình đẳng giới trong các lĩnh vực",
                "Quyền bình đẳng giữa các dân tộc, tôn giáo",
                "Một số quyền tự do cơ bản của công dân",
                "Quyền bất khả xâm phạm về thân thể của công dân",
            ])
        ]),
        create_subject("congnghe-11", "Công nghệ", "⚙️", 11, [
            ("Cơ khí chế tạo & Chăn nuôi công nghệ cao", [
                "Khái quát về cơ khí chế tạo",
                "Các phương pháp gia công cơ khí (Tiện, phay, bào, mài)",
                "Công nghệ đúc, hàn và rèn",
                "Cơ cấu truyền và biến đổi chuyển động",
                "Tự động hóa trong chế tạo cơ khí",
                "Ứng dụng robot công nghiệp trong sản xuất",
                "Công nghệ sinh học trong chế biến thức ăn chăn nuôi",
                "Công nghệ cao trong xây dựng chuồng trại chăn nuôi",
                "Vệ sinh thú y và phòng chống dịch bệnh theo hướng an toàn sinh học",
            ])
        ]),
        create_subject("nguvan-11", "Ngữ văn", "📚", 11, [
            ("Tập 1", [
                "Câu chuyện và vẻ đẹp văn xuôi (Chí Phèo - Nam Cao, Hai đứa trẻ - Thạch Lam)",
                "Cấu tứ và hình ảnh thơ hiện đại (Vội vàng - Xuân Diệu, Tràng giang - Huy Cận)",
                "Khát khao độc lập tự do (Văn tế nghĩa sĩ Cần Giuộc - Nguyễn Đình Chiểu)",
                "Tiếng cười trào phúng (Hạnh phúc của một tang gia - Vũ Trọng Phụng)",
            ]),
            ("Tập 2", [
                "Nghệ thuật kịch (Vĩnh biệt Cửu Trùng Đài - Nguyễn Huy Tưởng)",
                "Hành trình tri thức và phóng sự (Ai đã đặt tên cho dòng sông? - Hoàng Phủ Ngọc Tường)",
                "Khát vọng hòa bình và công lí trong văn học",
                "Bản sắc văn hóa và giao lưu quốc tế qua văn nghị luận",
                "Tổng kết văn học và ôn tập cuối năm",
            ])
        ]),
        create_subject("tienganh-11", "Tiếng Anh", "🔤", 11, [
            ("Global Success English 11", [
                "Unit 1: A Long and Healthy Life",
                "Unit 2: The Generation Gap",
                "Unit 3: Cities of the Future",
                "Review 1",
                "Unit 4: ASEAN and Viet Nam",
                "Unit 5: Global Warming",
                "Review 2",
                "Unit 6: Preserving Our Heritage",
                "Unit 7: Education Options for School Leavers",
                "Unit 8: Becoming Independent",
                "Review 3",
                "Unit 9: Social Issues",
                "Unit 10: The Ecosystem",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 11,
        "label": "Lớp 11",
        "level": "THPT",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=11",
        "subjects": subjects
    }

def get_grade_12():
    subjects = [
        create_subject("toan-12", "Toán", "📈", 12, [
            ("Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị của hàm số", [
                "Tính đơn điệu và cực trị của hàm số",
                "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
                "Đường tiệm cận của đồ thị hàm số (Đứng, Ngang, Xiên)",
                "Khảo sát sự biến thiên và vẽ đồ thị của hàm số bậc ba, phân thức",
                "Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn",
            ]),
            ("Chương II: Toạ độ của vectơ trong không gian", [
                "Vectơ và các phép toán vectơ trong không gian",
                "Toạ độ của vectơ và điểm trong không gian Oxyz",
                "Biểu thức toạ độ của các phép toán vectơ: Tích vô hướng, tích có hướng",
                "Ứng dụng toạ độ trong bài toán hình học không gian",
            ]),
            ("Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm", [
                "Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm",
                "Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
            ]),
            ("Chương IV: Nguyên hàm và Tích phân", [
                "Nguyên hàm và bảng nguyên hàm cơ bản",
                "Phương pháp đổi biến số và nguyên hàm từng phần",
                "Tích phân và các tính chất của tích phân",
                "Ứng dụng tích phân để tính diện tích hình phẳng",
                "Ứng dụng tích phân để tính thể tích vật thể và khối tròn xoay",
            ]),
            ("Chương V: Phương pháp toạ độ trong không gian", [
                "Phương trình mặt phẳng",
                "Phương trình đường thẳng trong không gian",
                "Phương trình mặt cầu",
                "Vị trí tương đối và khoảng cách trong không gian",
            ]),
            ("Chương VI: Xác suất có điều kiện", [
                "Xác suất có điều kiện",
                "Công thức xác suất toàn phần và công thức Bayes",
            ])
        ]),
        create_subject("vatli-12", "Vật lí", "⚡", 12, [
            ("Chương I: Vật lí nhiệt", [
                "Cấu trúc của chất và sự chuyển thể",
                "Thang nhiệt độ Celsius, Kelvin và nhiệt kế",
                "Nhiệt dung riêng, Nhiệt nóng chảy riêng, Nhiệt hóa hơi riêng",
                "Nội năng và Định luật I của nhiệt động lực học",
                "Thực hành: Đo nhiệt dung riêng và nhiệt hóa hơi của nước",
            ]),
            ("Chương II: Khí lí tưởng", [
                "Mô hình động học phân tử chất khí",
                "Định luật Boyle (Quá trình đẳng nhiệt)",
                "Định luật Charles (Quá trình đẳng áp)",
                "Phương trình trạng thái của khí lí tưởng pV = nRT",
                "Áp suất chất khí theo mô hình động học phân tử",
            ]),
            ("Chương III: Từ trường và Cảm ứng điện từ", [
                "Từ trường và cảm ứng từ B",
                "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Lực Ampere)",
                "Hiện tượng cảm ứng điện từ và Suất điện động cảm ứng (Định luật Faraday)",
                "Hiện tượng tự cảm và năng lượng từ trường",
                "Đại cương về dòng điện xoay chiều",
                "Máy biến áp và truyền tải điện xoay chiều",
            ]),
            ("Chương IV: Vật lí hạt nhân", [
                "Cấu tạo hạt nhân nguyên tử. Độ hụt khối và năng lượng liên kết",
                "Hiện tượng phóng xạ (Alpha, Beta, Gamma) và Định luật phóng xạ",
                "Phản ứng hạt nhân, Năng lượng tỏa ra và thu vào",
                "Phản ứng phân hạch hạt nhân",
                "Phản ứng nhiệt hạch (Tổng hợp hạt nhân)",
                "Ứng dụng của năng lượng hạt nhân và an toàn bức xạ",
            ])
        ]),
        create_subject("hoahoc-12", "Hóa học", "🧪", 12, [
            ("Chương 1: Ester - Lipid", [
                "Ester và phản ứng xà phòng hóa",
                "Lipid và chất béo",
                "Xà phòng và chất giặt rửa tổng hợp",
            ]),
            ("Chương 2: Carbohydrate", [
                "Glucose và Fructose (Monosaccharide)",
                "Saccharose và Maltose (Disaccharide)",
                "Tinh bột và Cellulose (Polysaccharide)",
                "Ứng dụng của carbohydrate trong đời sống và sản xuất",
            ]),
            ("Chương 3: Hợp chất chứa Nitrogen", [
                "Amine và tính chất bazơ",
                "Amino acid và tính chất lưỡng tính",
                "Peptide, Protein và Enzyme",
            ]),
            ("Chương 4: Polymer", [
                "Đại cương về polymer và các phương pháp tổng hợp",
                "Vật liệu polymer: Chất dẻo, Tơ, Cao su và Keo dán",
            ]),
            ("Chương 5: Pin điện và Điện phân", [
                "Cặp oxi hóa - khử và Thế điện cực chuẩn",
                "Pin điện hóa Galvanic",
                "Điện phân dung dịch và điện phân nóng chảy",
                "Ứng dụng của điện phân trong mạ điện và tinh luyện kim loại",
            ]),
            ("Chương 6: Đại cương về kim loại", [
                "Cấu tạo và tính chất vật lí chung của kim loại",
                "Tính chất hóa học của kim loại và dãy điện hóa",
                "Ăn mòn kim loại và các phương pháp chống ăn mòn",
                "Điều chế kim loại (Thủy luyện, nhiệt luyện, điện phân)",
            ]),
            ("Chương 7: Kim loại nhóm IA, IIA và Phức chất", [
                "Kim loại kiềm (Nhóm IA) và hợp chất",
                "Kim loại kiềm thổ (Nhóm IIA), Nước cứng và cách làm mềm nước cứng",
                "Đại cương về phức chất",
                "Kim loại chuyển tiếp dãy thứ nhất (Fe, Cu, Cr)",
            ])
        ]),
        create_subject("sinhhoc-12", "Sinh học", "🧬", 12, [
            ("Chương 1: Di truyền phân tử và Di truyền nhiễm sắc thể", [
                "Gen, mã di truyền và quá trình nhân đôi ADN",
                "Phiên mã và dịch mã tổng hợp protein",
                "Điều hòa hoạt động của gen (Mô hình Operon Lac)",
                "Đột biến gen và ứng dụng",
                "Nhiễm sắc thể và đột biến cấu trúc nhiễm sắc thể",
                "Đột biến số lượng nhiễm sắc thể (Thể lệch bội và đa bội)",
                "Các quy luật di truyền của Mendel (Phân li và Phân li độc lập)",
                "Tương tác gen và tác động đa hiệu của gen",
                "Di truyền liên kết gen và hoán vị gen (Morgan)",
                "Di truyền liên kết với giới tính và di truyền ngoài nhân",
                "Ảnh hưởng của môi trường lên sự biểu hiện của gen (Mức phản ứng)",
            ]),
            ("Chương 2: Di truyền học quần thể và Di truyền học người", [
                "Cấu trúc di truyền của quần thể tự phối và ngẫu phối",
                "Định luật Hardy - Weinberg và trạng thái cân bằng di truyền",
                "Di truyền y học và một số bệnh, tật di truyền ở người",
                "Liệu pháp gen và ứng dụng của công nghệ gen",
            ]),
            ("Chương 3: Bằng chứng và Học thuyết tiến hóa", [
                "Các bằng chứng tiến hóa (Giải phẫu so sánh, phôi sinh học, sinh học phân tử)",
                "Học thuyết tiến hóa tổng hợp hiện đại và các nhân tố tiến hóa",
                "Đột biến, di - nhập gen và chọn lọc tự nhiên",
                "Các yếu tố ngẫu nhiên và giao phối không ngẫu nhiên",
                "Loài sinh học và các cơ chế cách li sinh sản",
                "Sự hình thành loài mới (Cùng khu vực và khác khu vực địa lí)",
                "Nguồn gốc sự sống và lịch sử phát triển sinh giới qua các đại địa chất",
            ]),
            ("Chương 4: Sinh thái học và Môi trường", [
                "Môi trường sống và các nhân tố sinh thái",
                "Quần thể sinh vật và các đặc trưng cơ bản của quần thể",
                "Biến động số lượng cá thể của quần thể sinh vật",
                "Quần xã sinh vật và diễn thế sinh thái",
                "Hệ sinh thái, chuỗi và lưới thức ăn, Tháp sinh thái",
                "Chu trình sinh địa hóa (Carbon, Nitrogen, Nước) và Sinh quyển",
                "Bảo vệ môi trường, đa dạng sinh học và phát triển bền vững",
            ])
        ]),
        create_subject("lichsu-12", "Lịch sử", "🏛️", 12, [
            ("Lịch sử thế giới và Việt Nam hiện đại", [
                "Liên Hợp Quốc và trật tự thế giới sau Chiến tranh thế giới thứ hai",
                "Trật tự thế giới đa cực sau Chiến tranh lạnh",
                "ASEAN: Quá trình hình thành, phát triển và vị thế quốc tế",
                "Cách mạng tháng Tám năm 1945 và sự ra đời của nước VNDCCH",
                "Kháng chiến chống thực dân Pháp (1945 - 1954)",
                "Chiến dịch Điện Biên Phủ và Hiệp định Genève năm 1954",
                "Kháng chiến chống Mỹ, cứu nước (1954 - 1975)",
                "Chiến dịch Tây Nguyên, Huế - Đà Nẵng và Chiến dịch Hồ Chí Minh 1975",
                "Đấu tranh bảo vệ Tổ quốc ở biên giới Tây Nam và biên giới phía Bắc (1975 - 1979)",
                "Công cuộc Đổi mới ở Việt Nam từ năm 1986 đến nay",
                "Lịch sử đối ngoại và hội nhập quốc tế của Việt Nam trong thời kì Đổi mới",
                "Khẳng định chủ quyền biển, đảo Việt Nam trong thời kì hiện đại",
            ])
        ]),
        create_subject("diali-12", "Địa lí", "🌍", 12, [
            ("Địa lí Việt Nam toàn diện", [
                "Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
                "Thiên nhiên nhiệt đới ẩm gió mùa",
                "Ảnh hưởng của thiên nhiên nhiệt đới ẩm gió mùa đến đời sống và sản xuất",
                "Sự phân hóa đa dạng của thiên nhiên Việt Nam",
                "Vấn đề sử dụng hợp lí và bảo vệ tài nguyên thiên nhiên",
                "Bảo vệ môi trường và phòng chống thiên tai ở Việt Nam",
                "Dân số, cơ cấu dân số và nguồn lao động",
                "Vấn đề việc làm và chất lượng cuộc sống",
                "Đô thị hóa ở Việt Nam",
                "Chuyển dịch cơ cấu kinh tế theo ngành, theo thành phần và theo lãnh thổ",
                "Địa lí ngành Nông nghiệp, Lâm nghiệp và Thủy sản",
                "Địa lí ngành Công nghiệp và các trung tâm công nghiệp",
                "Giao thông vận tải, bưu chính viễn thông",
                "Thương mại và du lịch Việt Nam",
                "Vùng Trung du và miền núi Bắc Bộ",
                "Vùng Đồng bằng sông Hồng",
                "Vùng Bắc Trung Bộ và Duyên hải Nam Trung Bộ",
                "Vùng Tây Nguyên",
                "Vùng Đông Nam Bộ",
                "Vùng Đồng bằng sông Cửu Long",
                "Phát triển kinh tế biển đảo và đảm bảo an ninh quốc phòng",
            ])
        ]),
        create_subject("tinhoc-12", "Tin học", "💻", 12, [
            ("Khoa học máy tính thế hệ mới và Ứng dụng AI", [
                "Mạng máy tính thế hệ mới và giao thức truyền thông",
                "Internet vạn vật (IoT) và cuộc sống thông minh",
                "Trí tuệ nhân tạo (AI): Lịch sử và các giai đoạn phát triển",
                "Nguyên lí hoạt động cơ bản của AI và Học máy (Machine Learning)",
                "Ứng dụng của AI trong y tế, giáo dục, tài chính và tự động hóa",
                "Hệ quản trị CSDL quan hệ nâng cao: Tối ưu hóa truy vấn SQL",
                "Sao lưu dữ liệu, phục hồi và an toàn bảo mật hệ CSDL",
                "Quy trình thiết kế và phát triển ứng dụng web",
                "Xây dựng giao diện trang web với HTML5, CSS3 và JavaScript căn bản",
                "Hướng nghiệp và các nhóm nghề trong kỉ nguyên chuyển đổi số",
                "Đạo đức, văn hóa và khung pháp lý trong kỷ nguyên trí tuệ nhân tạo",
            ])
        ]),
        create_subject("gdkt-pl-12", "Giáo dục kinh tế và pháp luật", "⚖️", 12, [
            ("Tăng trưởng kinh tế và Quyền công dân", [
                "Tăng trưởng và phát triển kinh tế bền vững",
                "Hội nhập kinh tế quốc tế và các hiệp định thương mại tự do (FTA)",
                "Bảo hiểm xã hội, bảo hiểm y tế và bảo hiểm thất nghiệp",
                "An sinh xã hội trong phát triển kinh tế",
                "Quản lý thu chi và tài chính thông minh trong gia đình",
                "Quyền và nghĩa vụ của công dân về tham gia quản lý nhà nước và xã hội",
                "Quyền tự do ngôn luận và quyền tiếp cận thông tin",
                "Quyền tự do kinh doanh và nghĩa vụ nộp thuế",
                "Pháp luật về bảo vệ môi trường và phát triển bền vững",
            ])
        ]),
        create_subject("congnghe-12", "Công nghệ", "⚡", 12, [
            ("Kĩ thuật điện và Điện tử thông minh", [
                "Khái quát về kĩ thuật điện và vai trò trong sản xuất, đời sống",
                "Hệ thống điện quốc gia và lưới điện truyền tải",
                "Mạch điện xoay chiều ba pha",
                "Máy biến áp ba pha",
                "Động cơ điện không đồng bộ ba pha",
                "Mạng điện hạ áp trong sinh hoạt và an toàn điện",
                "Linh kiện điện tử cơ bản (Diode, Transistor, IC)",
                "Mạch khuếch đại và mạch tạo xung",
                "Mạch điều khiển tự động và vi điều khiển trong đời sống",
                "Dự án: Thiết kế và lắp đặt hệ thống chiếu sáng thông minh",
            ])
        ]),
        create_subject("nguvan-12", "Ngữ văn", "📚", 12, [
            ("Tập 1", [
                "Khát vọng tự do và bản lĩnh con người (Tuyên ngôn Độc lập - Hồ Chí Minh)",
                "Những sắc màu văn hóa trong văn học (Tây Tiến - Quang Dũng)",
                "Hồn thơ thời đại (Việt Bắc - Tố Hữu)",
                "Bức tranh hiện thực xã hội (Đất Nước - trích Trường ca Mặt đường khát vọng)",
                "Sóng (Xuân Quỳnh) và vẻ đẹp tình yêu muôn thuở",
            ]),
            ("Tập 2", [
                "Người lái đò Sông Đà (Nguyễn Tuân)",
                "Vợ chồng A Phủ (Tô Hoài)",
                "Vợ nhặt (Kim Lân)",
                "Rừng xà nu (Nguyễn Trung Thành)",
                "Chiếc thuyền ngoài xa (Nguyễn Minh Châu)",
                "Hồn Trương Ba, da hàng thịt (Lưu Quang Vũ)",
            ])
        ]),
        create_subject("tienganh-12", "Tiếng Anh", "🔤", 12, [
            ("Global Success English 12", [
                "Unit 1: Life Stories We Admire",
                "Unit 2: A Multicultural World",
                "Unit 3: Green Living",
                "Review 1",
                "Unit 4: Urbanisation",
                "Unit 5: The World of Work",
                "Review 2",
                "Unit 6: Artificial Intelligence",
                "Unit 7: The World of Mass Media",
                "Unit 8: Wildlife Conservation",
                "Review 3",
                "Unit 9: Career Paths",
                "Unit 10: Lifelong Learning",
                "Review 4",
            ])
        ])
    ]
    return {
        "grade": 12,
        "label": "Lớp 12",
        "level": "THPT",
        "sgkUrl": "https://taphuan.nxbgd.vn/tap-huan?grade=12",
        "subjects": subjects
    }

# -*- coding: utf-8 -*-

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

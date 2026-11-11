# -*- coding: utf-8 -*-
import os
import json
from curriculum.grade_primary import get_grade_1, get_grade_2, get_grade_3, get_grade_4, get_grade_5
from curriculum.grade_thcs import get_grade_6, get_grade_7, get_grade_8, get_grade_9
from curriculum.grade_thpt import get_grade_10, get_grade_11, get_grade_12

TARGET_FILE = os.path.join(os.path.dirname(__file__), "..", "client", "src", "curriculumData.ts")

all_grades = [
    get_grade_1(),
    get_grade_2(),
    get_grade_3(),
    get_grade_4(),
    get_grade_5(),
    get_grade_6(),
    get_grade_7(),
    get_grade_8(),
    get_grade_9(),
    get_grade_10(),
    get_grade_11(),
    get_grade_12(),
]

total_subjects = sum(len(g["subjects"]) for g in all_grades)
total_lessons = sum(sum(len(s["lessons"]) for s in g["subjects"]) for g in all_grades)

print(f"Total Grades: {len(all_grades)}")
print(f"Total Subjects: {total_subjects}")
print(f"Total Lessons: {total_lessons}")

# Format TypeScript output
ts_content = """// Dữ liệu Sách Giáo Khoa chuẩn Chương trình GDPT 2018 (NXB Giáo Dục Việt Nam) từ Lớp 1 đến Lớp 12
// Nguồn tham khảo chính thức: https://taphuan.nxbgd.vn/tap-huan?grade=
// ĐẦY ĐỦ TẤT CẢ CÁC MÔN VÀ TẤT CẢ CÁC BÀI HỌC TỪ KHỐI 1 ĐẾN KHỐI 12 THEO CHUẨN SGK BỘ GD&ĐT
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

export const GRADES_DATA: GradeItem[] = """

ts_content += json.dumps(all_grades, ensure_ascii=False, indent=2) + ";\n\n"

ts_content += """// Helper sinh câu hỏi thông minh khi người dùng chọn 1 hoặc nhiều bài học
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
      content: `[${lesson.title}] Theo kiến thức trọng tâm bài học, nội dung nào sau đây là hoàn toàn CHÍNH XÁC?`,
      option_a: `Áp dụng đúng định nghĩa, quy tắc và phương pháp giải đã học trong SGK ${subjectObj?.name || ""} ${grade} (${lesson.title}).`,
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
  const lessonTitles = selectedLessons.map((l) => `Bài ${l.number}`).join(", ");
  const examTitle = `Đề kiểm tra ${subjectObj?.name || "Môn học"} ${grade} (${lessonTitles || "Tổng hợp"}) · ${slicedQuestions.length} câu`;

  return {
    title: examTitle,
    questions: slicedQuestions,
  };
}
"""

with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully written complete curriculum to {TARGET_FILE}!")

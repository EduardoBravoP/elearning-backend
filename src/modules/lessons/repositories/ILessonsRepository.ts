import ICreateLessonDTO from "../dtos/ICreateLessonDTO";
import Lesson from "../infra/typeorm/entities/Lesson";

export default interface ILessonsRepository {
  create(data: ICreateLessonDTO): Promise<Lesson>;
  save(lesson: Lesson): Promise<Lesson>;
  findAllByCourseId(course_id: string): Promise<Lesson[] | undefined>;
  findById(id: string): Promise<Lesson | undefined>;
}

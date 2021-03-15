import ICreateCourseDTO from "@modules/courses/dtos/ICreateCourseDTO";
import Course from "@modules/courses/infra/typeorm/entities/Course";

export default interface ILessonsRepository {
  create(data: ICreateCourseDTO): Promise<Course>;
  save(course: Course): Promise<Course>;
  findAll(): Promise<Course[] | undefined>;
  findById(id: string): Promise<Course | undefined>;
  findByName(name: string): Promise<Course[] | undefined>;
}

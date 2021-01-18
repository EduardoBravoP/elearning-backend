import { inject, injectable } from "tsyringe";

import ILessonsRepository from "@modules/lessons/repositories/ILessonsRepository";
import Lesson from "@modules/lessons/infra/typeorm/entities/Lesson";

@injectable()
class ListAllLessonsInCourseService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute(course_id : string): Promise<Lesson[] | undefined> {
    const lessons = await this.lessonsRepository.findAllByCourseId(course_id);

    return lessons
  }
}

export default ListAllLessonsInCourseService

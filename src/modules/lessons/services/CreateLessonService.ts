import { inject, injectable } from "tsyringe";
import ICreateLessonDTO from "../dtos/ICreateLessonDTO";
import Lesson from "../infra/typeorm/entities/Lesson";

import ILessonsRepository from "../repositories/ILessonsRepository";

@injectable()
class CreateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute({ name, video_id, description, duration, course_id }: ICreateLessonDTO): Promise<Lesson> {
    const lesson = this.lessonsRepository.create({
      name,
      video_id,
      description,
      duration,
      course_id
    })

    return lesson
  }
}

export default CreateLessonService

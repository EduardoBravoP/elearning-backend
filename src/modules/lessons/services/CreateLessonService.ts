import { inject, injectable } from "tsyringe";
import ICreateLessonDTO from "../dtos/ICreateLessonDTO";
import Lesson from "../infra/typeorm/entities/Lesson";

import ILessonsRepository from "../repositories/ILessonsRepository";
import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository'
import AppError from "@shared/errors/AppError";

@injectable()
class CreateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,

    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository
  ) {}

  public async execute({ name, video_id, description, duration, course_id }: ICreateLessonDTO): Promise<Lesson> {
    const course = await this.coursesRepository.findById(course_id)

    if(!course) {
      throw new AppError('Course not found')
    }

    const lesson = await this.lessonsRepository.create({
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

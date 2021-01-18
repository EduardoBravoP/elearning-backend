import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import ICreateLessonDTO from "../dtos/ICreateLessonDTO";
import Lesson from "../infra/typeorm/entities/Lesson";

import ILessonsRepository from "../repositories/ILessonsRepository";

interface IRequest {
  id: string;
  name: string;
  duration: number;
  course_id: string;
  description: string;
  video_id: string;
}

@injectable()
class UpdateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute({
    id,
    name,
    video_id,
    description,
    duration,
    course_id
  }: IRequest): Promise<Lesson> {
    const lesson = await this.lessonsRepository.findById(id)

    if (!lesson) {
      throw new AppError('Lesson not found')
    }

    lesson.name = name
    lesson.video_id = video_id
    lesson.description = description
    lesson.duration = duration
    lesson.course_id = course_id

    await this.lessonsRepository.save(lesson)

    return lesson
  }
}

export default UpdateLessonService

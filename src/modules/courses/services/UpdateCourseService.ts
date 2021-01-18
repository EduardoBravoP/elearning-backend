import { inject, injectable } from "tsyringe";

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository'
import Course from "../infra/typeorm/entities/Course";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
  name: string;
  image: string;
}

@injectable()
class UpdateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository
  ) {}

  public async execute({ id, name, image}: IRequest): Promise<Course> {
    const course = await this.coursesRepository.findById(id)

    if (!course) {
      throw new AppError('Course not found')
    }

    course.image = image
    course.name = name

    await this.coursesRepository.save(course)

    return course;
  }
}

export default UpdateCourseService

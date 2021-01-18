import { inject, injectable } from "tsyringe";

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository'
import ICreateCourseDTO from "../dtos/ICreateCourseDTO";
import Course from "../infra/typeorm/entities/Course";

@injectable()
class CreateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository
  ) {}

  public async execute({ name, image }: ICreateCourseDTO): Promise<Course> {
    const course = this.coursesRepository.create({ name, image })

    return course
  }
}

export default CreateCourseService

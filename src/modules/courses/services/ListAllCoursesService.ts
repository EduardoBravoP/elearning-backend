import { inject, injectable } from "tsyringe";

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository'
import Course from "../infra/typeorm/entities/Course";

@injectable()
class ListAllCoursesService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository
  ) {}

  public async execute(): Promise<Course[] | undefined> {
    const courses = this.coursesRepository.findAll()

    return courses
  }
}

export default ListAllCoursesService

import { inject, injectable } from "tsyringe";

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository'
import Course from "../infra/typeorm/entities/Course";

@injectable()
class ListCoursesWithParams {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository
  ) {}

  public async execute(name: string): Promise<Course[] | undefined> {
    const courses = this.coursesRepository.findByName(name)

    return courses
  }
}

export default ListCoursesWithParams

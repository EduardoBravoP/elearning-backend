import ListAllLessonsInCourseService from "@modules/courses/services/ListAllLessonsInCourseService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class LessonsInCourse {
  public async index(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params

    const listAllLessonsInCourse = container.resolve(ListAllLessonsInCourseService)

    const allLessons = await listAllLessonsInCourse.execute(course_id)

    return response.json(allLessons)
  }
}

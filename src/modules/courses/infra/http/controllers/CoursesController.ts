import CreateCourseService from "@modules/courses/services/CreateCourseService";
import ListAllCoursesService from "@modules/courses/services/ListAllCoursesService";
import UpdateCourseService from "@modules/courses/services/UpdateCourseService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body

    const createCourse = container.resolve(CreateCourseService)

    const course = await createCourse.execute({
      name,
      image,
    })

    return response.json(course)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body
    const { id } = request.params

    const updateCourse = container.resolve(UpdateCourseService)

    const course = await updateCourse.execute({
      id,
      name,
      image
    })

    return response.json(course)
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllCourses = container.resolve(ListAllCoursesService)

    const courses = await listAllCourses.execute()

    return response.json(courses)
  }
}

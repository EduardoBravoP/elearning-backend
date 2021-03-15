import CreateCourseService from "@modules/courses/services/CreateCourseService";
import ListAllCoursesService from "@modules/courses/services/ListAllCoursesService";
import ListCoursesWithParams from "@modules/courses/services/ListCoursesWithParams";
import UpdateCourseService from "@modules/courses/services/UpdateCourseService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body

    let formatedSearch = String(name);
    formatedSearch = formatedSearch.charAt(0).toUpperCase() + formatedSearch.slice(1);

    const createCourse = container.resolve(CreateCourseService)

    const course = await createCourse.execute({
      name: formatedSearch,
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
    const { search } = request.query

    if (!search) {
      const listAllCourses = container.resolve(ListAllCoursesService)
      const courses = await listAllCourses.execute()
      return response.json(courses)
    }

    let formatedSearch = String(search)
    formatedSearch = formatedSearch.charAt(0).toUpperCase() + formatedSearch.slice(1);

    const listCoursesWithParams = container.resolve(ListCoursesWithParams)
    const courses = await listCoursesWithParams.execute(formatedSearch)
    return response.json(courses)
  }
}

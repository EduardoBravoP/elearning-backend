import CreateLessonService from "@modules/lessons/services/CreateLessonService";
import UpdateLessonService from "@modules/lessons/services/UpdateLessonService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class LessonsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, video_id, description, duration, course_id } = request.body

    const createLesson = container.resolve(CreateLessonService)

    const lesson = await createLesson.execute({
      name,
      video_id,
      description,
      duration,
      course_id
    })

    return response.json(lesson)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, video_id, description, duration, course_id } = request.body
    const { id } = request.params

    const updateLesson = container.resolve(UpdateLessonService)

    const lesson = await updateLesson.execute({
      id,
      name,
      video_id,
      description,
      duration,
      course_id
    })

    return response.json(lesson)
  }
}

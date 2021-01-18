import { Router } from 'express';
import CoursesController from '../controllers/CoursesController';
import LessonsInCourseController from '../controllers/LessonsInCourseController';

const coursesRouter = Router()
const coursesController = new CoursesController();
const lessonsInCourse = new LessonsInCourseController();

coursesRouter.post('/', coursesController.create)

coursesRouter.put('/:id', coursesController.update)

coursesRouter.get('/', coursesController.index)

coursesRouter.get('/:course_id/lessons', lessonsInCourse.index)

export default coursesRouter;

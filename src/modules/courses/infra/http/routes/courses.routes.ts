import { Router } from 'express';
import CoursesController from '../controllers/CoursesController';
import LessonsInCourse from '../controllers/LessonsInCourse';

const coursesRouter = Router()
const coursesController = new CoursesController();
const lessonsInCourse = new LessonsInCourse();

coursesRouter.post('/', coursesController.create)

coursesRouter.put('/:id', coursesController.update)

coursesRouter.get('/', coursesController.index)

coursesRouter.get('/:id/lessons', lessonsInCourse.index)

export default coursesRouter;

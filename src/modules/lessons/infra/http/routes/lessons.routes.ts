import { Router } from 'express';
import LessonsController from '../controllers/LessonsController';

const lessonsRouter = Router()
const lessonsController = new LessonsController()

lessonsRouter.post('/', lessonsController.create)
lessonsRouter.put('/:id', lessonsController.update)

export default lessonsRouter;

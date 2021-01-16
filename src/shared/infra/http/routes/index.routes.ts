import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/courses', coursesRouter)
routes.use('/lessons', lessonsRouter)

export default routes;

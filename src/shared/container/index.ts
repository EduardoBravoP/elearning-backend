import { container } from 'tsyringe';

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository'
import CoursesRepository from '@modules/courses/infra/typeorm/repositories/CoursesRepository';

import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';
import LessonsRepository from '@modules/lessons/infra/typeorm/repositories/LessonsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<ICoursesRepository>(
  'CoursesRepository',
  CoursesRepository
)

container.registerSingleton<ILessonsRepository>(
  'LessonsRepository',
  LessonsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

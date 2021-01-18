import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';
import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository'
import { getRepository, Repository } from 'typeorm'
import Course from '../entities/Course'

class CoursesRepository implements ICoursesRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course)
  }

  public async create({ name, image }: ICreateCourseDTO): Promise<Course> {
    const course = this.ormRepository.create({ name, image })

    await this.ormRepository.save(course)

    return course;
  }

  public async  save(course: Course): Promise<Course> {
    return this.ormRepository.save(course)
  }

  public async findAll(): Promise<Course[] | undefined> {
    const allCourses = await this.ormRepository.find()

    return allCourses;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const course = await this.ormRepository.findOne(id);

    return course;
  }
}

export default CoursesRepository;

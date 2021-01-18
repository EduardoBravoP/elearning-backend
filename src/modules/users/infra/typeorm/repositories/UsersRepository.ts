import { getRepository, Repository } from 'typeorm'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password
    })

    await this.ormRepository.save(user)

    return user;
  }
}

export default UsersRepository;

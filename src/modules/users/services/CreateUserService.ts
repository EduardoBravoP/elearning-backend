import { inject, injectable } from "tsyringe";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.usersRepository.create({
      name,
      email,
      password,
    })

    return user
  }
}

export default CreateUserService

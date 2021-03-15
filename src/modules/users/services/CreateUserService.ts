import AppError from "@shared/errors/AppError";
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
    const userExists = await this.usersRepository.findByEmail(email)

    if(userExists) {
      throw new AppError('Email address already in use')
    }

    const user = this.usersRepository.create({
      name,
      email,
      password,
    })

    return user
  }
}

export default CreateUserService

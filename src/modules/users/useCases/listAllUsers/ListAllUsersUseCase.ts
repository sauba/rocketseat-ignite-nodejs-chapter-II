import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error(`User Id not found ${user_id}`)
    }

    if (user.admin !== true) {
      throw new Error("User does not have admin privileges !!!")
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };

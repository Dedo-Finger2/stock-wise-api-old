import { IRepository } from "../interfaces/IRepository";
import { IMessageReturn, IUseCase } from "../interfaces/IUseCase";
import { IUserReturnSchema } from "../interfaces/IUser";
import { Either } from "../utils/types";

export class DeleteUserUseCase implements IUseCase<string, IMessageReturn> {
  constructor (
    private deleteUserRepository: IRepository<string, IMessageReturn>,
    private getUserByEmailRepository: IRepository<string, IUserReturnSchema>
  ) 
  {
    this.deleteUserRepository = deleteUserRepository;
  }
  
  async execute(email: string): Promise<Either<IMessageReturn, null>> {
    const user = await this.getUserByEmailRepository.execute(email);

    // TODO: Trocar o erro
    if (!user) {
      throw new Error("User not found.");
    }

    await this.deleteUserRepository.execute(email);

    return { message: "Deleted." };
  }
}
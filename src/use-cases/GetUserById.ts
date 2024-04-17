import { IRepository } from "../interfaces/IRepository";
import { IUseCase } from "../interfaces/IUseCase";
import { IUserReturnSchema } from "../interfaces/IUser";
import { Either } from "../utils/types";

export class GetUserByIdUseCase implements IUseCase<string, IUserReturnSchema> {
  constructor(
    private getUserByIdRepository: IRepository<string, IUserReturnSchema>
  ) {
    this.getUserByIdRepository = getUserByIdRepository;
  }

  async execute(id: string): Promise<Either<IUserReturnSchema, null>> {
    const user = await this.getUserByIdRepository.execute(id);

    if (!user) {
      throw new Error("User not found.");
    };

    return user;
  }
}
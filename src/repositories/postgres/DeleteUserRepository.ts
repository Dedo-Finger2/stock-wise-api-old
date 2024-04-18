import { IRepository } from "../../interfaces/IRepository";
import { IMessageReturn } from "../../interfaces/IUseCase";
import { Either } from "../../utils/types";
import { database } from "../../config/database";

export class PostgresDeleteUserRepository implements IRepository<string, IMessageReturn> {
  async execute(email: string): Promise<Either<IMessageReturn, null>> {
    await database.user.delete({
      where: {
        email,
      },
    });

    return { message: "Deleted." }
  }
}
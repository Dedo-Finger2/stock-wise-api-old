import { IRepository } from "../../interfaces/IRepository";
import { IUserReturnSchema } from "../../interfaces/IUser";
import { Either } from "../../utils/types";

import { database } from "./../../config/database";

export class PostgresGetUserByEmailRepository implements IRepository<string, IUserReturnSchema> {

  async execute(email: string): Promise<Either<IUserReturnSchema, null>> {
    const userFound = await database.user.findUnique({
      where: {
        email,
      },
    });

    return userFound;
  }
}

import { IRepository } from "../../interfaces/IRepository";
import { IUserCreationSchema } from "../../interfaces/IUser";
import { Either } from "../../utils/types";

import { database } from "../../config/database";

export class PostgresCreateUserRepository implements IRepository<IUserCreationSchema, object> {
  
  async execute(props: IUserCreationSchema): Promise<Either<object, null>> {
    const newUser = await database.user.create({
      data: {
        name: props.name,
        email: props.email,
      },
    });

    return { id: newUser.id }
  }
}

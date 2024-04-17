import { IRepository, IRepositoryReturnId } from "../../interfaces/IRepository";
import { IUserCreationSchema } from "../../interfaces/IUser";

import { database } from "../../config/database";

export class PostgresCreateUserRepository implements IRepository<IUserCreationSchema, IRepositoryReturnId> {
  
  async execute(props: IUserCreationSchema): Promise<IRepositoryReturnId> {
    const newUser = await database.user.create({
      data: {
        name: props.name,
        email: props.email,
      },
    });

    return { id: newUser.id }
  }
}

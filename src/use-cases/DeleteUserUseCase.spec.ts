import { DeleteUserUseCase } from "./index";
import { PostgresGetUserByEmailRepository, PostgresDeleteUserRepository } from "../repositories";

import { IMessageReturn, IUseCase } from "../interfaces/IUseCase";
import { IRepository } from "../interfaces/IRepository";
import { IUserReturnSchema } from "../interfaces/IUser";

let getUserByEmailRepository: IRepository<string, IUserReturnSchema>;
let deleteUserRepository: IRepository<string, IMessageReturn>;
let deleteUserUseCase: IUseCase<string, IMessageReturn>;

beforeEach(() => {
  getUserByEmailRepository = new PostgresGetUserByEmailRepository();
  deleteUserRepository = new PostgresDeleteUserRepository();
  deleteUserUseCase = new DeleteUserUseCase(deleteUserRepository, getUserByEmailRepository);
});

it("should delete the user.", async () => {
  const email = "teste@teste.com";

  const response = await deleteUserUseCase.execute(email);

  expect(response).toEqual({ message: "Deleted." });
});

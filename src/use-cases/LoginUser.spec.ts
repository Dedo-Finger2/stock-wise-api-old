import { LoginUser } from "./LoginUser";
import { MailTrapMailService } from "./../services/index";
import { PostgresCreateUserRepository, PostgresGetUserByEmailRepository } from "./../repositories/index";

it("should send an email to the user.", async () => {
  const createUserRepository = new PostgresCreateUserRepository();
  const getUserByEmailRepository = new PostgresGetUserByEmailRepository();
  const emailService = new MailTrapMailService();

  const loginUserUseCase = new LoginUser(createUserRepository, getUserByEmailRepository, emailService);

  const userParams = {
    name: "Greg",
    email: "teste2@teste.com",
    token: "123",
  };

  const response = await loginUserUseCase.execute(userParams);

  expect(response?.message).toEqual("Check your email inbox.");
});

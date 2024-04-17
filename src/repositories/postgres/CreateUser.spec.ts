import { PostgresCreateUserRepository } from "./CreateUserRepository";

it("should create a new user", async () => {
  const repository = new PostgresCreateUserRepository();

  const userProps = {
    name: "Greg",
    email: "teste@teste.com",
  };

  const userId = await repository.execute(userProps);

  expect(userId).toBeTruthy();
});
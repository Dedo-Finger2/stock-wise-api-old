import { PostgresDeleteUserRepository } from "./DeleteUserRepository";

it("should delete the user.", async () => {
  const deleteUserRepository = new PostgresDeleteUserRepository();

  const email = "teste2@teste.com";

  const response = await deleteUserRepository.execute(email);

  expect(response).toEqual({ message: "Deleted." });
});

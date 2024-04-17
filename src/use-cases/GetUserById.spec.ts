import { GetUserByIdUseCase } from "./index";
import { PostgresGetUserByIdRepository } from "./../repositories/index";

it("should return the user data from the id.", async () => {
  const getUserByIdRepository = new PostgresGetUserByIdRepository();
  
  const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);
  
  const userId = "3340ac2b-e40f-48aa-8c2c-ef4989ba51f3";

  const user = await getUserByIdUseCase.execute(userId);

  expect(user?.id).toEqual(userId);
})

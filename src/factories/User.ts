import { LoginUserController, VerifyUserTokenController } from "../http/controllers/index";

import { PostgresCreateUserRepository, PostgresGetUserByEmailRepository, PostgresGetUserByIdRepository } from "../repositories/index";

import { LoginUser, GetUserByIdUseCase } from "../use-cases";

import { MailTrapMailService } from "./../services/index";

export class UserFactory {

  static buildLoginUserController() {
    const createUserRepository = new PostgresCreateUserRepository();
    const getUserByEmailRepository = new PostgresGetUserByEmailRepository()
    
    const emailService = new MailTrapMailService()
    
    const loginUserUseCase = new LoginUser(createUserRepository, getUserByEmailRepository, emailService);

    const loginUserController = new LoginUserController(loginUserUseCase);
    
    return loginUserController;
  }

  static buildVerifyUserTokenController() {
    const getUserByIdRepository = new PostgresGetUserByIdRepository();
    const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);

    const verifyUserTokenController = new VerifyUserTokenController(getUserByIdUseCase);

    return verifyUserTokenController;
  }

}

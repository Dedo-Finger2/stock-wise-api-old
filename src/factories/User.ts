import { LoginUserController } from "../http/controllers/index";

import { PostgresCreateUserRepository, PostgresGetUserByEmailRepository } from "../repositories/index";

import { LoginUser } from "../use-cases";

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
}

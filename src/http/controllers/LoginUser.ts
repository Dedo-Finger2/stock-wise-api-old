import { IController, IControllerReturn } from "../../interfaces/IController";
import { IMessageReturn, IUseCase } from "../../interfaces/IUseCase";
import { IUserCreationSchema } from "../../interfaces/IUser";
import { Either } from "../../utils/types";

import { handleError } from "../../utils/ErrorHandle";
import { HttpResponse } from "../../utils/HttpResponses";

import { z } from "zod";

export class LoginUserController implements IController<IUserCreationSchema, IControllerReturn> {
  constructor( private loginUserUseCase: IUseCase<IUserCreationSchema, IMessageReturn> ) {
    this.loginUserUseCase = loginUserUseCase;
  }
  
  async handle(props: Either<IUserCreationSchema, null>): Promise<IControllerReturn> {
    const propsSchema = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const validProps = propsSchema.parse(props);

    try {
      const response = await this.loginUserUseCase.execute(validProps);

      if (response?.message) {
        return HttpResponse._200({ message: response?.message })
      }

      return HttpResponse._400();
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
import { IController, IControllerParams, IControllerReturn } from "../../interfaces/IController";
import { IMessageReturn, IUseCase } from "../../interfaces/IUseCase";
import { IUserCreationSchema } from "../../interfaces/IUser";
import { Either } from "../../utils/types";

import { handleError } from "../../utils/ErrorHandle";
import { HttpResponse } from "../../utils/HttpResponses";

import { z } from "zod";

export class LoginUserController implements IController<IControllerParams, IControllerReturn> {
  constructor( private loginUserUseCase: IUseCase<IUserCreationSchema, IMessageReturn> ) {
    this.loginUserUseCase = loginUserUseCase;
  }
  
  async handle(props: IControllerParams): Promise<IControllerReturn> {
    const propsSchema = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const data = propsSchema.parse(props.request.body);

    try {
      const response = await this.loginUserUseCase.execute(data);

      if (response?.message) {
        return HttpResponse._200({ message: response?.message })
      }

      return HttpResponse._400();
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
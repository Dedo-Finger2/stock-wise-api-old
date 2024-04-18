import { IController, IControllerParams, IControllerReturn } from "../../interfaces/IController";
import { IMessageReturn, IUseCase } from "../../interfaces/IUseCase";
import { z } from "zod";
import { handleError } from "../../utils/ErrorHandle";
import { HttpResponse } from "../../utils/HttpResponses";

export class DeleteAccountController implements IController<IControllerParams, IControllerReturn> {
  constructor ( private deleteUserUseCase: IUseCase<string, IMessageReturn> ) {
    this.deleteUserUseCase = deleteUserUseCase;
  }

  async handle(props: IControllerParams): Promise<IControllerReturn> {
    const propsSchema = z.object({
      email: z.string().email(),
    });

    const data = propsSchema.parse(props.request.body);

    try {
      const response = await this.deleteUserUseCase.execute(data.email);

      if (!response?.message) {
        return HttpResponse._400({ message: "Failed to delete the user." });
      };

      return HttpResponse._200({ message: "User deleted." });
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
import { IController, IControllerParams, IControllerReturn } from "../../interfaces/IController";
import { z } from "zod";
import { handleError } from "../../utils/ErrorHandle";
import { app } from "../../config/app";
import { IUseCase } from "../../interfaces/IUseCase";
import { IUserReturnSchema } from "../../interfaces/IUser";
import { HttpResponse } from "../../utils/HttpResponses";

type DecodedTokenSchema = {
  userId: string;
};

export class VerifyUserTokenController implements IController<IControllerParams, IControllerReturn> {
  constructor(
    private getUserByIdUseCase: IUseCase<string, IUserReturnSchema>,
  ) {
    this.getUserByIdUseCase = getUserByIdUseCase;
  }

  async handle(props: IControllerParams): Promise<IControllerReturn> {
    const requestQuerySchema = z.object({
      token: z.string()
    });

    const { token } = requestQuerySchema.parse(props.request.query);

    try {
      const decodedToken: DecodedTokenSchema = app.jwt.verify(token);

      const user = await this.getUserByIdUseCase.execute(decodedToken.userId);

      if (user) {
        props.reply.setCookie("userId", user.id, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // 7 Days
        });
      };

      return HttpResponse._200(
        { 
          message: `Auth as ${user?.name}`,
          authLink: "http://localhost:3333/api/home",
        }
      );
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}

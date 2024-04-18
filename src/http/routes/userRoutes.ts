import { FastifyInstance } from "fastify";
import { UserFactory } from "./../../factories/index";

export async function userRoutes(app: FastifyInstance) {
  app.post("/api/users/login", async(request, reply) => {
    const controller = UserFactory.buildLoginUserController();

    const { statusCode, body } = await controller.handle({request, reply});

    return reply.status(statusCode).send(body);
  });

  app.get("/api/users/verify", async (request, reply) => {
    const controller = UserFactory.buildVerifyUserTokenController();

    const { statusCode, body } = await controller.handle({ request, reply });

    return reply.status(statusCode).send(body);
  });

  app.delete("/api/users", async(request, reply) => {
    const controller = UserFactory.buildDeleteAccountController();

    const { statusCode, body } = await controller.handle({ request, reply });

    return reply.status(statusCode).send(body);
  });

}
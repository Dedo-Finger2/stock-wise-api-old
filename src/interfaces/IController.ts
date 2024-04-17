import { FastifyReply, FastifyRequest } from "fastify";
import { Either } from "../utils/types";

export interface IControllerReturn {
  statusCode: number,
  body: object,
};

export interface IControllerParams {
  request: FastifyRequest,
  reply: FastifyReply,
};

export interface IController<IControllerParams, IControllerReturn> {
  handle(props: IControllerParams): Promise<IControllerReturn>;
}
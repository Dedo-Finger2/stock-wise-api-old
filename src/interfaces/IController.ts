import { Either } from "../utils/types";

export interface IControllerReturn {
  statusCode: number,
  body: object,
};

export interface IController<params, IControllerReturn> {
  handle(props: Either<params, null>): Promise<IControllerReturn>;
}
import { Either } from "../utils/types";

export interface IUseCase<props, returns> {
  execute(props: props): Promise<Either<returns, null>>
};

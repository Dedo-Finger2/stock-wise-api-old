import { Either } from "../utils/types";

export interface IRepository<params, returns> {
  execute(props: params): Promise<Either<returns, null>>
}

export interface IRepositoryReturnId {
  id: string,
};

import { Either } from "../utils/types";

export interface IUserReturnSchema {
  id: string,
  name: string,
  email: string,
  createdAt: Date,
  updatedAt: Either<Date, null>,
};
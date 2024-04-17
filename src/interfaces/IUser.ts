import { Either } from "../utils/types";

export interface IUserCreationSchema {
  name: string,
  email: string,
};

export interface IUserReturnSchema {
  id: string,
  name: string,
  email: string,
  createdAt: Date,
  updatedAt: Either<Date, null>,
};
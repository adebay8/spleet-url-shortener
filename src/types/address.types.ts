import { Address } from "../database/entity/Address";

export interface IData {
  url: string;
}

export interface IError {
  success: Boolean;
  message: string;
  data?: Address;
}

export interface ISuccess {
  success: Boolean;
  data: Address;
  message?: string;
}

export type responseType = ISuccess | IError;

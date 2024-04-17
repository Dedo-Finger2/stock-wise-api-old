import { IResponseSchema } from "../interfaces/IHttp";

export class HttpResponse {
  static _200(body: object = { message: "Success." }): IResponseSchema {
    return {
      statusCode: 200,
      body,
    }
  }

  static _201(body: object = { message: "Created." }): IResponseSchema {
    return {
      statusCode: 201,
      body,
    }
  }

  static _400(body: object = { message: "Bad Request." }): IResponseSchema {
    return {
      statusCode: 400,
      body,
    }
  }

  static _500(body: object = { message: "Internal Server Error." }): IResponseSchema {
    return {
      statusCode: 500,
      body,
    }
  }
}
import { ResponseSchema } from "./../interfaces/http";

export class HttpResponse {
  static _200(body = { message: "Success." }): ResponseSchema {
    return {
      statusCode: 200,
      body,
    }
  }

  static _201(body = { message: "Created." }): ResponseSchema {
    return {
      statusCode: 201,
      body,
    }
  }

  static _400(body = { message: "Bad Request." }): ResponseSchema {
    return {
      statusCode: 400,
      body,
    }
  }

  static _500(body = { message: "Internal Server Error." }): ResponseSchema {
    return {
      statusCode: 500,
      body,
    }
  }
}
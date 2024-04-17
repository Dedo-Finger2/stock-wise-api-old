import { HttpResponse } from "./HttpResponses"

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return HttpResponse._400({ message: error.message });
  }
  
  return HttpResponse._500();
}
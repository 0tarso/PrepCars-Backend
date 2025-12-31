import { HttpStatusCode } from "./http-status-code";

export interface HttpResponse {
  statusCode: number;
  body?: {
    statusText: string;
    message: string,
    content: any
  }
}


export const HttpResponseOK = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.OK,
    body: {
      statusText: 'OK',
      message: `${String(HttpStatusCode.OK)} - OK`,
      content: data,
    }
  }
}

export const HttpResponseNoContent = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.NO_CONTENT,
    body: {
      statusText: 'NO_CONTENT',
      message,
      content: []
    }
  }
}

export const HttpResponseCreated = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.CREATED,
    body: {
      statusText: 'CREATED',
      message: `${String(HttpStatusCode.CREATED)} - Created`,
      content: data,
    }
  }
}

export const HttpResponseBadRequest = async (message: string, content?: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: {
      statusText: 'BAD_REQUEST',
      message,
      content
    }
  }
}

export const HttpResponseNotFound = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.NOT_FOUND,
    body: {
      statusText: 'NOT_FOUND',
      message,
      content: {},
    }
  }
}

export const HttpResponseUnauthorized = async (message: string = "Unauthorized", content?: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.UNAUTHORIZED,
    body: {
      statusText: 'UNAUTHORIZED',
      message,
      content
    }
  }
}

export const HttpResponseUpdated = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.OK,
    body: {
      statusText: 'OK',
      message: `Updated`,
      content: data,
    }
  }
}

export const HttpResponseInternalError = async (message: string, content: any): Promise<HttpResponse> => {
  return {
    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    body: {
      statusText: 'INTERNAL_SERVER_ERROR',
      message: `${message}`,
      content,
    }
  }
}
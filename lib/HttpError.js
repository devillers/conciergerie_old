const statuses = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  500: "Internal Server Error",
  501: "Not Implemented",
};

class HttpError extends Error {
  constructor(code, message = statuses[code]) {
    super(message);
    this.code = code;
    this.status = statuses[code];
  }
}

export default HttpError;

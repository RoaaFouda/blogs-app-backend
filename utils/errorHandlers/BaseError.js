export default class BaseError extends Error {
  constructor(message="internal server error", statusCode=500) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

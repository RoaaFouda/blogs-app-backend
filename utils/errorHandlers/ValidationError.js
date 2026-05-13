import BaseError from "./BaseError.js"

export default class ValidationError extends BaseError {
  constructor(errors) {
    super(`Validation Error`, 422);
    this.statusCode = 422;
    this.errors = errors;
  }
}



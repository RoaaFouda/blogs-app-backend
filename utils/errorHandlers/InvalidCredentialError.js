import BaseError from "./BaseError.js";

export default class InvalidCredentialError extends BaseError {
  constructor(error = { message: "Invalid Credential" }) {
    super(error.msg, 400);
    this.statusCode = 400;
    this.errors = error;
  }
}


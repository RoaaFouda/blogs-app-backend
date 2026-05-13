import BaseError from "./BaseError.js";

export default class NotFoundError extends BaseError {
    constructor(trace) {
      console.log(trace);
      const error = { message: "There is no data with the provided credentials" }
      super(error.msg, 404)
      this.statusCode = 404
      this.errors = error
    }
  }

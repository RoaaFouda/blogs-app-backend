const BaseError = require("./BaseError");

class RouteNotFoundError extends BaseError {
  constructor(error) {
    super(error, 404);
    this.statusCode = 404;
    this.errors = 
      {
        message: error,
      }

  }
}

module.exports = RouteNotFoundError;

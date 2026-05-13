import BaseError from "./BaseError.js";

export default class ResourceAlreadyExistError extends BaseError {
  constructor(resource, query) {
    super(`Already Exists`, 422);
    this.statusCode = 422;
    this.errors = 
      {
        message: `Already Exists`,
        param: resource,
        value: query,
      }
    
  }
}


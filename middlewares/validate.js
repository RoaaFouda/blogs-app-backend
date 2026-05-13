import ValidationError from "../utils/errorHandlers/ValidationError.js";

export const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const formatted = {};
      result.error.issues.forEach((issue) => {
       if(issue.path[0])formatted[issue.path[0]] = issue.message;
       else formatted.message = issue.message;
      });

      throw new ValidationError(formatted);
    }
    req.body = result.data;
    next();
  }
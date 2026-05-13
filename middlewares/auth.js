import InvalidCredentialError from "../utils/errorHandlers/InvalidCredentialError.js";
import jwt from "jsonwebtoken";
const authenticate = (req, res, next) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (
    !authHeader ||
    !authHeader.startsWith("Bearer ") ||
    !authHeader.split(" ")[1]
  ) {
    return next(new InvalidCredentialError());
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next();
  } catch (err) {
    return next(new InvalidCredentialError());
  }
};

export default authenticate;

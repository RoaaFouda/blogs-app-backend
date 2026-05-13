import jwt from "jsonwebtoken";
import { createUser, loginService } from "../services/auth.service.js";
import BaseError from "../utils/errorHandlers/BaseError.js";

export const register = async (req, res) => {
  try {
    const user = await createUser(req.body);
    const token = jwt.sign(user.id, process.env.JWT_SECRET);

    res.status(201).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    throw err;
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginService(req.body);
    const token = jwt.sign(user.id, process.env.JWT_SECRET);
    res.json({
      status: "success",
      data: { user, token },
    });
  } catch (err) {
    throw err;
  }
};

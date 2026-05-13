import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { loginSchema, registerUserSchema } from "../validation/auth.validation.js";
import { validate } from "../middlewares/validate.js";

const authRouter = Router();

authRouter.post("/register", validate(registerUserSchema), register);
authRouter.post("/login", validate(loginSchema), login);

export default authRouter;

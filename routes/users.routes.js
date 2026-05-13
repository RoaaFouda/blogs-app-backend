import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { loginSchema, registerUserSchema } from "../validation/auth.validation.js";
import { validate } from "../middlewares/validate.js";
import authenticate from "../middlewares/auth.js";
import { getUser } from "../controllers/users.controller.js";


const usersRouter = Router();

usersRouter.get("/me", authenticate, getUser);


export default usersRouter;

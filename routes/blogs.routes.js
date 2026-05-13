import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { loginSchema, registerUserSchema } from "../validation/auth.validation.js";
import { validate } from "../middlewares/validate.js";
import authenticate from "../middlewares/auth.js";
import { createNewBlog, deleteBlog, getAllBlogs, updateBlog } from "../controllers/blogs.controller.js";
import { createBlogSchema, updateBlogSchema } from "../validation/blogs.validation.js";
import { isOwner } from "../middlewares/isOwner.js";

const blogsRouter = Router();

blogsRouter.get("/", getAllBlogs);
// blogsRouter.get("/:id");
blogsRouter.delete("/:id", authenticate, isOwner, deleteBlog);
blogsRouter.patch("/:id", authenticate, isOwner, validate(updateBlogSchema), updateBlog);
blogsRouter.post("/", authenticate, validate(createBlogSchema), createNewBlog)

export default blogsRouter;

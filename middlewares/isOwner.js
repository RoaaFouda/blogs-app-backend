import Blog from "../models/Blog.js";
import BaseError from "../utils/errorHandlers/BaseError.js";
import NotFoundError from "../utils/errorHandlers/NotFoundError.js";
import { UnauthorizedError } from "../utils/errorHandlers/UnauthorizedError.js";

export const isOwner = async (req, res, next) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findOne({ _id: id });

    if (!blog) throw new NotFoundError();

    if (String(blog.user) !== String(req.user)) throw new UnauthorizedError();

    next();
  } catch (err) {
    throw err;
  }
};

import morgan from "morgan";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import connect from "./config/db.js";
import BaseError from "./utils/errorHandlers/BaseError.js";
import { intersection } from "zod";
import usersRouter from "./routes/users.routes.js";
import blogsRouter from "./routes/blogs.routes.js";

const app = express();

await connect();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter)
app.use("/api/blogs", blogsRouter)

app.use((err, req, res, next) => {
  console.log(err)
  if (err instanceof BaseError) {
    res.status(err.statusCode).json({
      status: "fail",
      data: err.errors ? err.errors : { message: err.message },
    });
  } else {
    err.statusCode = err.statusCode ? err.statusCode : 500;
    res.status(err.statusCode).json({
      status: "fail",
      data: {
        message: err.message && err.statusCode < 500 ? err.message : "internal server error"
      },
    });
  }
});

app.listen(3000, () => {
  console.log("listeneing on port 3000");
});

import express from "express";

const app = express(); // create an express app

app.use(express.json());

// Routes import
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// Route declarion
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;

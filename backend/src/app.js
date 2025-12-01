import express from "express";

const app = express(); // create an express app

app.use(express.json());

// Routes import
import userRouter from './routes/user.route.js';

// Route declarion 
app.use("/api/v1/users", userRouter);

export default app;
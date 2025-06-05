import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./config/env.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

// This middleware parses incoming JSON payloads (e.g., Content-Type: application/json) and makes the data available on req.body.
app.use(express.json());

// Parses form URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Parses cookies from headers
app.use(cookieParser());

// like a middleware
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to subscriptio tracker");
});

app.listen(PORT, async () => {
  console.log(`server running on port: ${PORT}`);

  await connectToDatabase();
});

export default app;

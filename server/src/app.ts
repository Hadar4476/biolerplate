// WHAT TO DO IF YOU GET: Error: listen EADDRINUSE: address already in use :::3000

// IN TERMINAL
// run "netstat -aon | findstr :3000"
// run "taskkill /PID <PID_HERE>> /F"

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import requestLogger from "./logs/request-logger";

import connectToDatabase from "./database";

import postsRoutes from "./routes/posts";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";

import errorHandler from "./middleware/error";

import config from "./config";

const app = express();

app.use(bodyParser.json());

app.use(requestLogger);

app.use(cors());

connectToDatabase();

app.use("/posts", postsRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

app.listen(config.PORT);

process.on("SIGINT", () => {
  console.log("Shutting down server...");
  process.exit();
});

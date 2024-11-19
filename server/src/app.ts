import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import requestLogger from "./logs/request-logger";

import connectToDatabase from "./database";

import postsRoutes from "./routes/posts";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";

import errorHandler from "./middleware/error";

const app = express();

app.use(bodyParser.json());

app.use(requestLogger);

app.use(cors());

connectToDatabase();

app.use("/posts", postsRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

app.listen(3000);

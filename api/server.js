const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const UsersRouter = require("../users/users-router.js");
const QuestionsRouter = require("../questions/questions-router");
const AnswersRouter = require("../answers/answers-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use("/", (req, res) => res.send("Welcome to the Mentor Me backend!"));
server.use("/api", authRouter);
server.use("/api/users", UsersRouter);

// Questions are public for everyone but only registered users can see the answers from professional owners
server.use("/api/questions", QuestionsRouter);
server.use("/api/answers", AnswersRouter);

module.exports = server;

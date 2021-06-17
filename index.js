const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
require("dotenv").config();
const { initializeDbConnection } = require("./db/db.connection");
app.use(express.json());
const quiz = require("./routes/quiz.router");
const signup = require("./routes/userSignUp.router");
const login = require("./routes/userLogIn.router");
const authverify = require("./middlewares/auth.verify");

const { Question } = require("./model/question.model");
app.use(express.json());

app.use(cors());

initializeDbConnection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signup);
app.use("/login", login);
app.use("/quiz", authverify, quiz);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

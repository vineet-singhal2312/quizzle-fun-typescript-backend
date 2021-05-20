const express = require("express");
const { Question } = require("../model/question.model");

const router = express.Router();

router
  .route("/")

  .post(async (req, res) => {
    try {
      const Question = new Question({
        quizName: "Node quiz",

        question: "Q.10) Command to show installed version of Node??",
        plusPoint: 4,
        negativePoint: 1,

        rightOption: "$ node --version",
        wrongOption: [
          "$ npm --version",
          "$ npm getVersion",
          "$ node getVersion",
        ],
      });

      const result = await Question.save();

      res.send(result);
    } catch (error) {
      res.send(error);
    }
  });
router.route("/git-quiz").get(async (req, res) => {
  const response = await Question.find({ quizName: "Git quiz" });
  res.send(response);
});
router.route("/react-quiz").get(async (req, res) => {
  const response = await Question.find({ quizName: "React quiz" });
  res.send(response);
});
router.route("/node-quiz").get(async (req, res) => {
  const response = await Question.find({ quizName: "Node quiz" });
  res.send(response);
});
module.exports = router;

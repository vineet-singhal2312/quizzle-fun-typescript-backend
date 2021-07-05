const express = require("express");
const { userSignUp } = require("../model/userSignUp.model");
const { passwordAuthentication } = require("../controllers/loginController");

const app = express();
const router = express.Router();

router
  .route("/")

  .post(async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await userSignUp.find({ email }).exec();
      console.log({ user });
      console.log(user[0].userName);

      if (user.length) {
        passwordAuthentication(
          password,
          user[0].password,
          user[0]._id,
          user[0].email,
          user[0].userName,
          res
        );
      } else {
        res.status(400).json({ message: "check your email or password" });
      }
    } catch (error) {
      res.status(404).send({ message: "error" });
    }
  });

module.exports = router;

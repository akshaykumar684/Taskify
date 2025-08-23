import { Router } from "express";
import { hash as encryptPassWord } from "bcryptjs";

import { User } from "../Model/index.js";
import { validateUserField } from "../utils/Task/index.js";

export const userRouter = Router();

userRouter.post("/create", async (req, res) => {
  if (!validateUserField(req.body)) {
    return res.status(400).send({
      msg: "Invalid Input. Name should be alphabet only, password should contain alphabet and numbers and email should be in proper format",
    });
  }

  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email: email.toLowerCase() });

  if (existingUser) {
    return res.status(402).send({
      msg: `User already exists with email: ${email}`,
    });
  }

  const hashedPassword = await encryptPassWord(password, 10);

  const user = new User({
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  const data = await user.save();

  res.json({
    msg: "Account created successfully",
    data,
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    return res.status(401).send({ message: "Invalid credential" });
  }

  const isCorrectPassword = await user.validatePassword(password);

  if (!isCorrectPassword) {
    return res.status(401).send({ message: "Invalid credential" });
  }

  const userIdToken = user.getUserIdToken();

  res.cookie("UserIdToken", userIdToken, {
    maxAge: 20 * 1000 * 60 * 60,
  });
  return res.status(200).json({ message: "LogIn Successfull" });
});

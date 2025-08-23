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

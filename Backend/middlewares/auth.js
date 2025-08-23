import jwt from "jsonwebtoken";

import { User } from "../Model/index.js";

export const authMiddleWare = async (req, res, next) => {
  const { UserIdToken } = req.cookies;

  try {
    if (!UserIdToken) {
      throw new Error("You are Unauthorized, please login first");
    }

    const { id } = jwt.verify(UserIdToken, "Akshay#2028");

    const loggedInUser = await User.findById(id);

    if (!loggedInUser) {
      throw new Error("You are Unauthorized, please login first");
    }

    req.loggedInUser = loggedInUser;
    next();
  } catch (error) {
    return res.status(400).send({
      msg: "You are Unauthorized, please login first",
    });
  }
};

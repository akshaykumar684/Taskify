import { Schema, model } from "mongoose";
import validator from "validator";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error(`${value} is not a valid Email`);
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

userSchema.methods.validatePassword = async function (password) {
  const user = this;

  const isCorrectPassword = await compare(password, user.password);

  return isCorrectPassword;
};

userSchema.methods.getUserIdToken = function () {
  const user = this;

  const userIdToken = jwt.sign({ id: user.id }, "Akshay#2028", {
    expiresIn: "1h",
  });

  return userIdToken;
};
export const User = model("User", userSchema);

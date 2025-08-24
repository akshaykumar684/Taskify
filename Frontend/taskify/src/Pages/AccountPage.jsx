import React from "react";
import { SignUpForm, SignInForm } from "../Components";
import { useParams } from "react-router-dom";
export const AccountPage = () => {
  const { mode } = useParams();

  return mode === "signUp" ? <SignUpForm /> : <SignInForm />;
};

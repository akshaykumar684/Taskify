import validator from "validator";

export const validateUserField = ({ name, password, email }) => {
  const { isAlpha, isAlphanumeric, isEmail } = validator;
  if (!isAlpha(name) || !isAlphanumeric(password) || !isEmail(email)) {
    return false;
  }

  return true;
};

import validate from "./validate.js";

const emailValidate = (value) => {
  const reg = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    "ig"
  );
  return validate(reg, value, 5, 255).map((err) => `email is ${err}`);
};

export default emailValidate;

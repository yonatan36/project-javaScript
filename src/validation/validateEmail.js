import validate from "./validate.js";
import validate from "./validate.js";

const validateEmail = (value) => {
  const reg = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    "ig"
  );
  return validate(reg, value, 5, 255).map((err) => `email is ${err}`);
};

export default validateEmail;

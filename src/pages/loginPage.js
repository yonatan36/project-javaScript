import validateEmail from "../../validation/validateEmail.js";
const loginInputEmail = document.querySelector("#login-input-email");

loginInputEmail.addEventListener("input", () => {
  let arorArr = validateEmail(loginInputEmail.value);
  if (arorArr.length === 0) {
  
  } else {


loginInputEmail.classList.add("is-invalid");
document.getElementById("login-alert-email").classList.remove("d-none");
  }
 
});

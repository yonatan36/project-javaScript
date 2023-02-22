import emailValidate from "../validation/emailValidate.js";
import validatePassword from "../validation/validatePassword.js";
import PAGES  from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";
const loginEmailInput = document.querySelector("#login-input-email");
const loginPasswordInput = document.querySelector("#login-input-password");
const loginBtn = document.querySelector("#login-btn");

loginEmailInput.addEventListener("input", () => {
  if (loginEmailInput.value.length === 0) {
    // input is empty
    loginEmailInput.classList.remove("is-invalid");
    document.getElementById("login-alert-email").classList.add("d-none");
  } else {
    let errorArr = emailValidate(loginEmailInput.value);
    if (errorArr.length === 0) {
      //no error
      loginEmailInput.classList.remove("is-invalid");
      document.getElementById("login-alert-email").classList.add("d-none");
    } else {
      // error/s
      loginEmailInput.classList.add("is-invalid");
      document.getElementById("login-alert-email").classList.remove("d-none");
      document.getElementById("login-alert-email").innerHTML =
        errorArr.join("<br>");
    }
  }
});

loginPasswordInput.addEventListener("input", () => {
  if (loginPasswordInput.value.length === 0) {
    loginPasswordInput.classList.remove("is-invalid");
    document.getElementById("login-alert-password").classList.add("d-none");
  } else {
    let errorArr = validatePassword(loginPasswordInput.value);
    if (errorArr.length === 0) {
      //no error
      loginPasswordInput.classList.remove("is-invalid");
      document.getElementById("login-alert-password").classList.add("d-none");
    } else {
      // error/s
      loginPasswordInput.classList.add("is-invalid");
      document
        .getElementById("login-alert-password")
        .classList.remove("d-none");
      document.getElementById("login-alert-password").innerHTML =
        errorArr.join("<br>");
      /*
        let str = errorArr.join("<br>")
        document.getElementById("login-alert-password").innerHTML = str
      */
    }
  }
});

loginBtn.addEventListener("click", () => {
  if (emailValidate(loginEmailInput.value).length) {
    return;
  }
  if (validatePassword(loginPasswordInput.value).length) {
    return;
  }
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    //users === null
    return;
  }
  let user = users.find(
    (item) =>
      item.email === loginEmailInput.value &&
      item.password === loginPasswordInput.value
  );
  if (!user) {
    alert("invalid email and/or password");
    return;
  }
  //object who is token ,remember who conected
  localStorage.setItem(
    "token",
    JSON.stringify({
      id: user.id,
      email: user.email,
      password:user.password,
      isAdmin: user.isAdmin,
    })
  );
  
  location.reload(); // refresh the page
});

import PAGES from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";
import User from "../models/user.js";

const inputName = document.getElementById("register-input-name");
const inputLastName = document.getElementById("register-input-last-name");
const inputState = document.getElementById("register-input-state");
const inputCountry = document.getElementById("register-input-country");
const inputCity = document.getElementById("register-input-city");
const inputStreet = document.getElementById("register-input-street");
const inputHouseNumber = document.getElementById("register-input-house-number");
const inputZipCode = document.getElementById("register-input-zip-code");
const inputEmail = document.getElementById("register-input-email");
const inputPhone = document.getElementById("register-input-phone");
const inputPassword = document.getElementById("register-input-password");
const inputRepeatPassword = document.getElementById(
  "register-input-repeat-password"
);
const btnRegister = document.querySelector("#register-btn");

let nameOk = false;
let lastnameOk = false;
let stateOk = false;
let countryOk = false;
let cityOk = false;
let streetOk = false;
let housenumberOk = false;
let zipcodeOk = false;
let emailOk = false;
let phoneOk = false;
let passwordOk = false;
let repeatpasswordOk = false;

//have name alerdy in
window.addEventListener("load", () => {

  if (inputName.value !== "") {
    checkNameInput();
  }
  if (inputState.value !== "") {
    checkinputState();
  }
    if (inputLastName.value !== "") {
      checkLastNameInput();
    }
  if (inputCountry.value !== "") {
    checkInputcountry();
  }
  if (inputCity.value !== "") {
    checkInputCity();
  }
  if (inputStreet.value !== "") {
    checkInputStreet();
  }
  if (inputHouseNumber.value !== "") {
    checkInputHouseNumber();
  }
  if (inputZipCode.value !== "") {
    checkInputZipCode();
  }
  if (inputEmail.value !== "") {
    checkInputEmail();
  }
  if (inputPhone.value !== "") {
    checkInputPhone();
  }
  if (inputPassword.value !== "") {
    checkInputPassword();
  }
  if (inputRepeatPassword.value !== "") {
    checkInputReaptPassword();
  }
});

const checkNameInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputName.value.length === 0) {
    inputName.classList.remove("is-invalid");
    document.getElementById("register-alert-name").classList.add("d-none");
  } else {
    if (reg.test(inputName.value)) {
      inputName.classList.remove("is-invalid");
      document.getElementById("register-alert-name").classList.add("d-none");
      nameOk = true;
    } else {
      document.getElementById("register-alert-name").classList.remove("d-none");
      inputName.classList.add("is-invalid");
      nameOk = false;
    }
    checkBtn();
  }
};
inputName.addEventListener("input", () => {
  checkNameInput();
});

const checkLastNameInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputLastName.value.length === 0) {
    inputLastName.classList.remove("is-invalid");
    document.getElementById("register-alert-last-name").classList.add("d-none");
  } else {
    if (reg.test(inputLastName.value)) {
      inputLastName.classList.remove("is-invalid");
      document
        .getElementById("register-alert-last-name")
        .classList.add("d-none");
      lastnameOk = true;
    } else {
      document
        .getElementById("register-alert-last-name")
        .classList.remove("d-none");
      inputLastName.classList.add("is-invalid");
      lastnameOk = false;
    }
    checkBtn();
  }
};
inputLastName.addEventListener("input", () => {
  checkLastNameInput();
});

const checkinputState = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputState.value.length === 0) {
    inputState.classList.remove("is-invalid");
    document.getElementById("register-alert-state").classList.add("d-none");
  } else {
    if (reg.test(inputState.value)) {
      inputState.classList.remove("is-invalid");
      document.getElementById("register-alert-state").classList.add("d-none");
      stateOk = true;
    } else {
      document
        .getElementById("register-alert-state")
        .classList.remove("d-none");
      inputState.classList.add("is-invalid");
      stateOk = false;
    }
    checkBtn();
  }
};
inputState.addEventListener("input", () => {
  checkinputState();
});

const checkInputcountry = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputCountry.value.length === 0) {
    inputCountry.classList.remove("is-invalid");
    document.getElementById("register-alert-country").classList.add("d-none");
  } else {
    if (reg.test(inputCountry.value)) {
      inputCountry.classList.remove("is-invalid");
      document.getElementById("register-alert-country").classList.add("d-none");
      countryOk = true;
    } else {
      document
        .getElementById("register-alert-country")
        .classList.remove("d-none");
      inputCountry.classList.add("is-invalid");
      countryOk = false;
    }
    checkBtn();
  }
};
inputCountry.addEventListener("input", () => {
  checkInputcountry();
});

const checkInputCity = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputCity.value.length === 0) {
    inputCity.classList.remove("is-invalid");
    document.getElementById("register-alert-city").classList.add("d-none");
  } else {
    if (reg.test(inputCity.value)) {
      inputCity.classList.remove("is-invalid");
      document.getElementById("register-alert-city").classList.add("d-none");
      cityOk = true;
    } else {
      document.getElementById("register-alert-city").classList.remove("d-none");
      inputCity.classList.add("is-invalid");

      countryOk = false;
    }
    checkBtn();
  }
};
inputCity.addEventListener("input", () => {
  checkInputCity();
});

const checkInputStreet = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputStreet.value.length === 0) {
    inputStreet.classList.remove("is-invalid");
    document.getElementById("register-alert-street").classList.add("d-none");
  } else {
    if (reg.test(inputStreet.value)) {
      inputStreet.classList.remove("is-invalid");
      document.getElementById("register-alert-street").classList.add("d-none");
      streetOk = true;
    } else {
      document
        .getElementById("register-alert-street")
        .classList.remove("d-none");
      inputStreet.classList.add("is-invalid");
      streetOk = false;
    }
    checkBtn();
  }
};
inputStreet.addEventListener("input", () => {
  checkInputStreet();
});

const checkInputHouseNumber = () => {
  const reg = new RegExp("[0-9]");
  if (inputHouseNumber.value.length === 0) {
    inputHouseNumber.classList.remove("is-invalid");
    document
      .getElementById("register-alert-house-number")
      .classList.add("d-none");
  } else {
    if (reg.test(inputHouseNumber.value)) {
      inputHouseNumber.classList.remove("is-invalid");
      document
        .getElementById("register-alert-house-number")
        .classList.add("d-none");
      housenumberOk = true;
    } else {
      document
        .getElementById("register-alert-house-number")
        .classList.remove("d-none");
      inputHouseNumber.classList.add("is-invalid");
      housenumberOk = false;
    }
    checkBtn();
  }
};
inputHouseNumber.addEventListener("input", () => {
  checkInputHouseNumber();
});

const checkInputZipCode = () => {
  const reg = new RegExp("[0-9]");
  if (inputZipCode.value.length === 0) {
    inputZipCode.classList.remove("is-invalid");
    document.getElementById("register-alert-zip-code").classList.add("d-none");
  } else {
    if (reg.test(inputZipCode.value)) {
      inputZipCode.classList.remove("is-invalid");
      document
        .getElementById("register-alert-zip-code")
        .classList.add("d-none");
      zipcodeOk = true;
    } else {
      document
        .getElementById("register-alert-zip-code")
        .classList.remove("d-none");
      inputZipCode.classList.add("is-invalid");
      zipcodeOk = false;
    }
    checkBtn();
  }

};
inputZipCode.addEventListener("input", () => {
  checkInputZipCode();
});

const checkInputEmail = () => {
  const reg = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    "ig"
  );
  if (inputEmail.value.length === 0) {
    inputEmail.classList.remove("is-invalid");
    document.getElementById("register-alert-email").classList.add("d-none");
  } else {
    if (reg.test(inputEmail.value)) {
      inputEmail.classList.remove("is-invalid");
      document.getElementById("register-alert-email").classList.add("d-none");
      emailOk = true;
    } else {
      document
        .getElementById("register-alert-email")
        .classList.remove("d-none");
      inputEmail.classList.add("is-invalid");
      emailOk = false;
    }
  }
};
inputEmail.addEventListener("input", () => {
  checkInputEmail();
});

const checkInputPhone = () => {
  const reg = new RegExp("[0-9]");
  if (inputPhone.value.length === "") {
    inputPhone.classList.remove("is-invalid");
    document.getElementById("register-alert-phone").classList.add("d-none");
  } else {
    if (reg.test(inputPhone.value)) {
      inputPhone.classList.remove("is-invalid");
      document.getElementById("register-alert-phone").classList.add("d-none");
      phoneOk = true;
    } else {
      document
        .getElementById("register-alert-phone")
        .classList.remove("d-none");
      inputPhone.classList.add("is-invalid");
      phoneOk = false;
    }
    checkBtn();
  }
};
inputPhone.addEventListener("input", () => {
  checkInputPhone();
});

const checkInputPassword = () => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%?&])[A-Za-z\\d@$!*%?&]{8,250}$",
    "g"
  );
  if (inputPassword.value.length === 0) {
    inputPassword.classList.remove("is-invalid");
    document.getElementById("register-alert-password").classList.add("d-none");
  } else {
    if (reg.test(inputPassword.value)) {
      inputPassword.classList.remove("is-invalid");
      document
        .getElementById("register-alert-password")
        .classList.add("d-none");
      passwordOk = true;
    } else {
      document
        .getElementById("register-alert-password")
        .classList.remove("d-none");
      inputPassword.classList.add("is-invalid");
      passwordOk = false;
    }
    checkBtn();
  }
};
inputPassword.addEventListener("input", () => {
  checkInputPassword();
  console.log(checkInputPassword, "login");
});

const checkInputReaptPassword = () => {
  const reg = new RegExp(inputPassword.value);
  if (inputRepeatPassword.value.length === 0) {
    inputRepeatPassword.classList.remove("is-invalid");
    document
      .getElementById("register-alert-repeat-password")
      .classList.add("d-none");
  } else {
    if (reg.test(inputRepeatPassword.value)) {
      inputRepeatPassword.classList.remove("is-invalid");
      document
        .getElementById("register-alert-repeat-password")
        .classList.add("d-none");
      repeatpasswordOk = true;
    } else {
      document
        .getElementById("register-alert-repeat-password")
        .classList.remove("d-none");
      inputRepeatPassword.classList.add("is-invalid");
      repeatpasswordOk = false;
    }
    checkBtn();
  }
};
inputRepeatPassword.addEventListener("input", () => {
  checkInputReaptPassword();
});

const checkBtn = () =>
  (btnRegister.disabled = !(
    nameOk &&
    lastnameOk &&
    stateOk &&
    countryOk &&
    cityOk &&
    streetOk &&
    emailOk &&
    passwordOk &&
    repeatpasswordOk &&
    phoneOk &&
    housenumberOk &&
    zipcodeOk
  ));
// check if the users proper
btnRegister.addEventListener("click", () => {
  if (
    !(
      nameOk &&
      lastnameOk &&
      stateOk &&
      countryOk &&
      cityOk &&
      streetOk &&
      emailOk &&
      passwordOk &&
      repeatpasswordOk &&
      phoneOk &&
      housenumberOk &&
      zipcodeOk
    )
  ) {
    return;
  }
  //the first user
  let users = localStorage.getItem("users");
  //the user class
  let newuser = new User(
    inputName.value,
    inputLastName.value,
    inputState.value,
    inputCity.value,
    inputCountry.value,
    inputEmail.value,
    inputPhone.value,
    inputHouseNumber.value,
    inputPassword.value,
    inputZipCode.value,
    inputStreet.value
    
);
  if (!users) {
    users = [newuser];

    localStorage.setItem("users", JSON.stringify(users));
  } else {
    users = JSON.parse(users);
    for (let user of users) {
      if (user.email === inputEmail.value) {
        alert("email alredt axist");
        return;
      }
    }

    //have a users
    users = [...users, newuser];

    localStorage.setItem("users", JSON.stringify(users));
  }
  handlePageChange(PAGES.LOGIN);
});

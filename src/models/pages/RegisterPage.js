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

inputName.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");

  if (reg.test(inputName.value)) {
    inputName.classList.remove("is-invalid");
    document.getElementById("register-alert-name").classList.add("d-none");
  } else {
    document.getElementById("register-alert-name").classList.remove("d-none");
    inputName.classList.add("is-invalid");
  }
});
inputLastName.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");

  if (reg.test(inputLastName.value)) {
    inputLastName.classList.remove("is-invalid");
    document.getElementById("register-alert-last-name").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-last-name")
      .classList.remove("d-none");
    inputLastName.classList.add("is-invalid");
  }
});
inputState.addEventListener("change", () => {
  const reg = new RegExp("^[a-z0-9-\\s]{0,}$", "g");

  if (reg.test(inputState.value)) {
    inputState.classList.remove("is-invalid");
    document.getElementById("register-alert-state").classList.add("d-none");
  } else {
    document.getElementById("register-alert-state").classList.remove("d-none");
    inputState.classList.add("is-invalid");
  }
});

inputCountry.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");

  if (reg.test(inputCountry.value)) {
    inputCountry.classList.remove("is-invalid");
    document.getElementById("register-alert-country").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-country")
      .classList.remove("d-none");
    inputCountry.classList.add("is-invalid");
  }
});

inputCity.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");

  if (reg.test(inputCity.value)) {
    inputCity.classList.remove("is-invalid");
    document.getElementById("register-alert-city").classList.add("d-none");
  } else {
    document.getElementById("register-alert-city").classList.remove("d-none");
    inputCity.classList.add("is-invalid");
  }
});

inputStreet.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (reg.test(inputStreet.value)) {
    inputStreet.classList.remove("is-invalid");
    document.getElementById("register-alert-street").classList.add("d-none");
  } else {
    document.getElementById("register-alert-street").classList.remove("d-none");
    inputStreet.classList.add("is-invalid");
  }
});

inputHouseNumber.addEventListener("change", () => {
  const reg = new RegExp("[0-9]");
  if (reg.test(inputHouseNumber.value)) {
    inputHouseNumber.classList.remove("is-invalid");
    document
      .getElementById("register-alert-house-number")
      .classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-house-number")
      .classList.remove("d-none");
    inputHouseNumber.classList.add("is-invalid");
  }
});

inputZipCode.addEventListener("change", () => {
  const reg = new RegExp("[0-9]");
  if (reg.test(inputZipCode.value)) {
    inputZipCode.classList.remove("is-invalid");
    document.getElementById("register-alert-zip-code").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-zip-code")
      .classList.remove("d-none");
    inputZipCode.classList.add("is-invalid");
  }
});

inputEmail.addEventListener("change", () => {
  const reg = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    "ig"
  );
  if (reg.test(inputEmail.value)) {
    inputEmail.classList.remove("is-invalid");
    document.getElementById("register-alert-email").classList.add("d-none");
  } else {
    document.getElementById("register-alert-email").classList.remove("d-none");
    inputEmail.classList.add("is-invalid");
  }
});

inputPhone.addEventListener("change", () => {
  const reg = new RegExp("[0-9]");
  if (reg.test(inputPhone.value)) {
    inputPhone.classList.remove("is-invalid");
    document.getElementById("register-alert-phone").classList.add("d-none");
  } else {
    document.getElementById("register-alert-phone").classList.remove("d-none");
    inputPhone.classList.add("is-invalid");
  }
});

inputPassword.addEventListener("change", () => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,250}$",
    "g"
  );
  if (reg.test(inputPassword.value)) {
    inputPassword.classList.remove("is-invalid");
    document.getElementById("register-alert-password").classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-password")
      .classList.remove("d-none");
    inputPassword.classList.add("is-invalid");
  }
});

inputRepeatPassword.addEventListener("change", () => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,250}$",
    "g"
  );
  if (reg.test(inputRepeatPassword.value)) {
    inputRepeatPassword.classList.remove("is-invalid");
    document
      .getElementById("register-alert-repeat-password")
      .classList.add("d-none");
  } else {
    document
      .getElementById("register-alert-repeat-password")
      .classList.remove("d-none");
    inputRepeatPassword.classList.add("is-invalid");
  }
});

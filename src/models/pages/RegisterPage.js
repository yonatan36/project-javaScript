const nameInput = document.getElementById("register-input-name");
nameInput.addEventListener("blur", checkName);

function validateName() {
  var nameInput = document.getElementById("register-input-name").value;
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (!regex.test(nameInput)) {
    document.getElementById("register-alert-name").classList.remove("d-none");
  } else {
    document.getElementById("register-alert-name").classList.add("d-none");
  }
}

document
  .getElementById("register-input-name")
  .addEventListener("blur", validateName);

import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";
import "./pages/RegisterPage.js";
import "./pages/loginPage.js";

const navHomeLink = document.getElementById("nav-home-link");
const navAboutusLink = document.getElementById("nav-aboutus-link");
const navContactusLink = document.getElementById("nav-contactus-link");
const navRegisterPageLink = document.getElementById("nav-register-link");
const navLoginPageLink = document.getElementById("nav-login-link");
const navEditProfilePage = document.getElementById("nav-edit-profile-link");
const navLogout = document.getElementById("nav-logout");

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAboutusLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});
navContactusLink.addEventListener("click", function () {
  handlePageChange(PAGES.CONTACT);
});
navRegisterPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.REGISTER);
});
navLoginPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.LOGIN);
});

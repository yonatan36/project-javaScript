import PAGES from "../models/pageModel.js";

const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTUSLINK = document.getElementById(PAGES.ABOUT);
const CONTACTUSLINK = document.getElementById(PAGES.CONTACT);
const LOGINPAGELINK = document.getElementById(PAGES.LOGIN);
const REGISTERPAGELINK = document.getElementById(PAGES.REGISTER);

function handlePageChange(pageToDisplay) {
  /* hide all pages */
  HOMEPAGELINK.classList.remove("d-block");
  ABOUTUSLINK.classList.remove("d-block");
  CONTACTUSLINK.classList.remove("d-block");
  LOGINPAGELINK.classList.remove("d-block");
  REGISTERPAGELINK.classList.remove("d-block");
  // PROFILEPAGELINK.classList.remove("d-block");
  // PAGE404PAGELINK.classList.remove("d-block");
  HOMEPAGELINK.classList.add("d-none");
  ABOUTUSLINK.classList.add("d-none");
  CONTACTUSLINK.classList.add("d-none");
  LOGINPAGELINK.classList.add("d-none");
  REGISTERPAGELINK.classList.add("d-none");
  // PROFILEPAGELINK.classList.add("d-none");
  // PAGE404PAGELINK.classList.add("d-none");

  switch (pageToDisplay) {
    case PAGES.HOME:
      HOMEPAGELINK.classList.remove("d-none");
      HOMEPAGELINK.classList.add("d-block");
      break;
    case PAGES.ABOUT:
      ABOUTUSLINK.classList.remove("d-none");
      ABOUTUSLINK.classList.add("d-block");
      break;
    case PAGES.CONTACT:
      CONTACTUSLINK.classList.remove("d-none");
      CONTACTUSLINK.classList.add("d-block");
      break;
    case PAGES.LOGIN:
      LOGINPAGELINK.classList.remove("d-none");
      LOGINPAGELINK.classList.add("d-block");
      break;
    case PAGES.REGISTER:
      REGISTERPAGELINK.classList.remove("d-none");
      REGISTERPAGELINK.classList.add("d-block");
      break;
    case PAGES.PROFILE:
      PROFILEPAGELINK.classList.remove("d-none");
      PROFILEPAGELINK.classList.add("d-block");
      break;
    default:
      PAGE404PAGELINK.classList.remove("d-none");
      PAGE404PAGELINK.classList.add("d-block");
      break;
  }
}

export { handlePageChange };

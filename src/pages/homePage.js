import property from "../models/Property.js";
import initialPropertiesGallery from "../components/propertiesGallery.js";
let propertiesArr;

window.addEventListener("load",  () =>{
  propertiesArr = localStorage.getItem("props");
  //dont have proprties
  if (!propertiesArr) {
    return;
  }
  //have properties
  propertiesArr = JSON.parse(propertiesArr);
  //Communicates from home page to propertiesGallery
  initialPropertiesGallery(propertiesArr);
});
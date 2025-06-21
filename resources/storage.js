
const body = document.getElementById("body");
const popButton = document.getElementById("popupButton");

function checkStorage() {
  if (typeof(Storage) !== "undefined") {
    return true;
  } else {
    return false;
  }
}

function addPopup(){
  const popup = document.getElementById("storage");
  popButton.addEventListener("click", removePopup);
  popup.style.display = "flex";
}

function removePopup(){
  const popup = document.getElementById("storage");
  popButton.removeEventListener("click", removePopup);
  popup.style.display = "none";
}

function startupConfiguration(){
  if(checkStorage()){
    if(localStorage.colorMode){
      let mode = localStorage.getItem("colorMode");
      if(mode === "dark"){

      } else{

      }
    } else{
      localStorage.setItem("colorMode", "dark")
    }
  } else{
    addPopup();
  }
}

body.addEventListener("load", startupConfiguration);
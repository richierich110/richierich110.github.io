
const body = document.getElementById("body");
const popButton = document.getElementById("popupButton");
const store = document.getElementById("storage_status");

function checkStorage() {
  if (typeof(Storage) !== "undefined") {
    return true;
  } else {
    return false;
  }
}

function addPopup(){
  const popup = document.getElementById("storage");
  popup.style.display = "flex";
}

function removePopup(){
  const popup = document.getElementById("storage");
  popButton.removeEventListener("click", removePopup);
  popup.style.display = "none";
}

function changeStylesheet(newStylesheet){
  var oldlink = document.getElementsByTagName("link").item(0);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("href", newStylesheet);
  
  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function startupConfiguration(){
  if(checkStorage()){
    if(!localStorage.colorMode){
      localStorage.setItem("colorMode", "light")
      store.innerText = "set to Light";
    }
    let mode = localStorage.getItem("colorMode");
    if(mode === "dark"){
      changeStylesheet("./dark.css");
      store.innerText = "set to Dark";
    } else{
      changeStylesheet("./light.css");
    }
  } else{
    store.innerText = "no storage";
    addPopup();
  }
}

body.addEventListener("DOMContentLoaded", startupConfiguration);
popButton.addEventListener("click", removePopup);

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
    }
    let mode = localStorage.getItem("colorMode");
    if(mode === "dark"){
      changeStylesheet("./dark.css");
    } else{
      changeStylesheet("./light.css");
    }
  } else{
    addPopup();
  }
}

body.addEventListener("load", startupConfiguration);
function setStorage(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getStorage(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkStorage() {
  if (typeof(Storage) !== "undefined") {
    return true;
  } else {
    return false;
  }
}

function startupConfiguration(){
  const popup = document.getElementById("popup");
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

  }
}
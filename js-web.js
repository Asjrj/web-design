// Browser ajaa automaattisesti
// window.onload can be overwritten
window.onload = function(){console.log('Window loaded')}

// localStorage:en tallettaminen ei onnistu, 
// jos Third party cookies on 'disabled'
function saveToLocalStorage() {
  try {
    localStorage.setItem('Test', 'Hello JS');
    let element = document.getElementById("alue");
    console.log(element);
    element.value = localStorage.getItem('Test');
  }
  catch (err) {
    console.log(err);
    document.getElementById("alue").innerHTML = err;
  }
}

// Cookies toiminnallisuus
function setCookie(cookieName, cookieValue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
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

function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}


function handleEventOne() {
  event.preventDefault()
  console.log('Handle Event One')
  document.getElementById('myArea').innerHTML = `<h1>Submit clicked or Enter hit</h1>`
}

function handleOnClickOne() {
  console.log('Handle onClick One')
  document.getElementById('myArea').innerHTML = `<h1>OK clicked</h1>`
}

function handleOnClickTwo() {
  let element1 = document.getElementById('firstname')
  let element2 = document.getElementById('lastname')
  document.getElementById('myArea').innerHTML = `<h1>${element1.value} ${element2.value}</h1>`
}

function handleLocalStorage() {
  document.getElementById('myArea').innerHTML = `<h1>Local Storage</h1>`
}

function handleCookie() {
  //setCookie('myCookieName', 123, 7)
  //getCookie('myCookieName')
  document.getElementById('myArea').innerHTML = `<h1>Cookies!</h1>`
}

console.log('js-web.js loaded')

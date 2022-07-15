window.addEventListener("keydown", register);

let frontDiv = document.getElementById("frontDiv");
let body = document.getElementsByTagName("body");

let key1 = document.getElementById("key");
let keyCode1 = document.getElementById("keyCode");
let code1 = document.getElementById("code");

let key1Title = document.getElementById("keyTitle");
let key2Title = document.getElementById("keyCodeTitle");
let key3Title = document.getElementById("codeTitle");

console.log(body[0]);

function register(e) {
  body[0].style.gridTemplateColumns = "auto auto auto";

  frontDiv.style.display = "none";

  key1.style.display = "flex";
  keyCode1.style.display = "flex";
  code1.style.display = "flex";

  key1Title.style.display = "flex";
  key2Title.style.display = "flex";
  key3Title.style.display = "flex";

  let name = e.key;
  let keyCode = e.keyCode;
  let code = e.code;
  console.log(name + " " + keyCode + " " + code);

  key1.innerHTML = name;
  if (keyCode === 32) {
    key1.innerHTML = "Space";
    keyCode1.innerHTML = 32;
  } else {
    //key1.innerHTML = keyCode;
    keyCode1.innerHTML = keyCode;
  }

  code1.innerHTML = code;

  //frontDiv.style.display = "none";
}

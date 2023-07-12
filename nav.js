const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const writeCode = document.querySelector("#write-code");
const whiteContainer = document.querySelector(".white-container");
const navBar = document.querySelector(".nav");
const icons = document.querySelector(".icons");
let interval;

let msg = "Get the work done";
const menuButton = () => {
  whiteContainer.style.transform = "rotate(-30deg)";
  navBar.style.transform = "rotate(-90deg)";
  writeCode.innerText = msg;
  icons.style.transform = "translate(0%)";
  setTimeout(() => writeCode.remove(), 3000);
};
menu.addEventListener("click", menuButton);

const closeButton = () => {
  whiteContainer.style.transform = "rotate(0deg)";
  navBar.style.transform = "rotate(0deg)";
  icons.style.transform = "translate(-100%)";
};

close.addEventListener("click", closeButton);

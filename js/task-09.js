function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector("button.change-color");
const colorValueRef = document.querySelector("span.color");
const bodyBGColorRef = document.querySelector("body");

changeColorBtnRef.addEventListener("click", changeBGColor);

function changeBGColor() {
  bodyBGColorRef.style.backgroundColor = getRandomHexColor();
  colorValueRef.textContent = bodyBGColorRef.style.backgroundColor;
}

const counterValue = document.querySelector("#value");

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

decrementBtnRef.addEventListener("click", onClickDecrement);
incrementBtnRef.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  console.log((counterValue.textContent -= 1));
}
function onClickIncrement() {
  console.log(counterValue.textContent++);
}

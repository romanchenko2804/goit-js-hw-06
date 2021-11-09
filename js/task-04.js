const counterValue = document.querySelector("span#value");
let spanValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

decrementBtnRef.addEventListener("click", onClickDecrement);
incrementBtnRef.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  spanValue -= 1;
  counterValue.textContent = spanValue;
}

function onClickIncrement() {
  spanValue += 1;
  counterValue.textContent = spanValue;
}

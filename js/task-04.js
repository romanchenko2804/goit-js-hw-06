const counterValue = document.querySelector("#value");

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

const handleClickDecrement = () => {
  console.log((counterValue.textContent -= 1));
  //   return (counterValue.textContent -= 1);
};
const handleClickIncrement = () => {
  console.log(counterValue.textContent++);
  //   return counterValue.textContent++;
};

decrementBtnRef.addEventListener("click", handleClickDecrement);
incrementBtnRef.addEventListener("click", handleClickIncrement);

const inputTextRef = document.querySelector("#name-input");
const outputTextRef = document.querySelector("#name-output");

inputTextRef.addEventListener("input", (event) => {
  outputTextRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputTextRef.textContent = "Anonymous";
  }
});
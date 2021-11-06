const inputTextRef = document.querySelector("#validation-input");

inputTextRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length ===
  Number(inputTextRef.getAttribute("data-length"))
    ? inputTextRef.classList.add("valid")
    : inputTextRef.classList.add("invalid");
}

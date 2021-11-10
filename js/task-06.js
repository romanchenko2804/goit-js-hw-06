const inputTextRef = document.querySelector("#validation-input");

inputTextRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputTextRef.getAttribute("data-length"))
  ) {
    inputTextRef.classList.add("valid");
    inputTextRef.classList.remove("invalid");
  } else {
    inputTextRef.classList.add("invalid");
    inputTextRef.classList.remove("valid");
  }
}

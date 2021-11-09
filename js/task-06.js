const inputTextRef = document.querySelector("#validation-input");

inputTextRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputTextRef.classList.add("invalid");

  if (
    event.currentTarget.value.length ===
    Number(inputTextRef.getAttribute("data-length"))
  ) {
    inputTextRef.classList.replace("invalid", "valid");
  }
}

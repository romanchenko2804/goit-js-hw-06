const inputRef = document.querySelector("input#font-size-control");
const spanTextRef = document.querySelector("span#text");

inputRef.addEventListener("input", (event) => {
  spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
});

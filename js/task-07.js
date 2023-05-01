const inputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputRef.addEventListener("input", inputChange);

function inputChange(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
}

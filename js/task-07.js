// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
// const inputChange (event) => {

// }

const inputRef = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputRef.addEventListener("change", inputChange);

function inputChange(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
  //   console.log(`${event.type} --- ${event.currentTarget.value + "px"}`);
}

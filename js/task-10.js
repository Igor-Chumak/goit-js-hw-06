function createBoxes(amount) {
  for (let index = 0; index < amount; index += 1) {
    let currentSizeBox = SIZE_BOX + index * STEP_SIZE_BOX;
    divBoxesRef.insertAdjacentHTML(
      "beforeend",
      `<div style='background-color: ${getRandomHexColor()}; height: ${currentSizeBox}px; width: ${currentSizeBox}px'></div>`
    );
  }
  inputREf.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  inputREf.value = "";
  divBoxesRef.innerHTML = "";
}

const SIZE_BOX = 30;
const STEP_SIZE_BOX = 10;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputREf = document.querySelector("input");
const divBoxesRef = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  createBoxes(inputREf.value);
});

btnDestroy.addEventListener("click", destroyBoxes);

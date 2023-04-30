// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

function createBoxes(amount) {
  console.log("Create:", amount, " boxes");
  for (let index = 0; index < amount; index += 1) {
    let currentSizeBox = SIZE_BOX + index * STEP_SIZE_BOX;
    divBoxesRef.insertAdjacentHTML(
      "beforeend",
      `<div style='background-color: ${getRandomHexColor()}; height: ${currentSizeBox}px; width: ${currentSizeBox}px'></div>`
    );
  }
  inputREf.value = "";
}

// 3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function destroyBoxes() {
  console.log("Destroy");
  inputREf.value = "";
  while (divBoxesRef.firstChild) {
    divBoxesRef.removeChild(divBoxesRef.firstChild);
  }
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

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick(event) {
  let backgroundColor = getRandomHexColor();
  spanRef.textContent = backgroundColor;
  bodyRef.style.backgroundColor = backgroundColor;
}

//
const bodyRef = document.body;
const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

btnRef.addEventListener("click", handleClick);

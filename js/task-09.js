function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick() {
  let backgroundColor = getRandomHexColor();
  spanRef.textContent = backgroundColor;
  document.body.style.backgroundColor = backgroundColor;
}

const btnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

btnRef.addEventListener("click", handleClick);

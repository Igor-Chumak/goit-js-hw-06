// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = (event) => {
  console.log("event: ", event);
  //   console.log("currentTarget.value: ", event.currentTarget.value);
  nameRef.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
};

const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", inputName);

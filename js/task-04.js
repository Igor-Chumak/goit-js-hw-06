let counterValue = 0;
let stepValue = 1;
const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const counterValueSpan = document.querySelector("#value");
const btnClick = (stepValue) => {
  counterValue += stepValue;
  // console.log(
  //   `Button ${stepValue > 0 ? "+ increment" : "- decrement"} was clicked, counter = ${counterValue}`
  // );
  counterValueSpan.textContent = counterValue;
};

decrementBtn.addEventListener("click", function () {
  btnClick(-stepValue);
});
incrementBtn.addEventListener("click", function () {
  btnClick(stepValue);
});

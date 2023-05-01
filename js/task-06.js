const inputBlur = (event) => {
  textInput.classList.remove("valid");
  textInput.classList.remove("invalid");
  textInput.classList.add(
    event.currentTarget.value.length === Number(textInput.dataset.length) ? "valid" : "invalid"
  );
};

const textInput = document.querySelector("input");
textInput.addEventListener("blur", inputBlur);

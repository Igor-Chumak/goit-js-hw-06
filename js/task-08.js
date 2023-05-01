const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const dataOutForm = { email: email.value, password: password.value };

  console.log(dataOutForm);

  event.currentTarget.reset();
}

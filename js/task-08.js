const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const Email = email.value;
  const Password = password.value;

  const formData = {
    Email,
    Password,
  };

  console.log(formData);

  event.currentTarget.reset();
}

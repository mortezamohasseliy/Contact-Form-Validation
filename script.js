const userName = document.getElementById("firstName");
const userFamily = document.querySelector("#lastName");
const userEmail = document.querySelector("#email");
const field = document.querySelector(".form-field");
const subBtn = document.querySelector("#submit");
const query = document.getElementById("query");
const request = document.getElementById("request");
const message = document.getElementById("message");
const team = document.getElementById("team");
const successMsg = document.getElementById("success");
const nameErr = document.getElementById("nameError");
const lastErr = document.getElementById("familyError");
const emailErr = document.getElementById("emailErr");
const result = document.getElementById("result");
const text = document.getElementById("text");
const user = document.getElementById("consent");

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let isValid = true;
  if (userName.value === "") {
    nameErr.textContent = "This field is required!";
    nameErr.style.color = "red";
    isValid = false;
  } else {
    nameErr.textContent = "";
  }

  if (userFamily.value === "") {
    lastErr.textContent = "This field is required!";
    lastErr.style.color = "red";
    isValid = false;
  } else {
    lastErr.textContent = "";
  }

  function isValidEmail() {
    let inputEm = userEmail.value;
    if (!inputEm.includes("@", ".com")) {
      emailErr.textContent = "please enter a valid email!";
      emailErr.style.color = "red";
      isValid = false;
    } else {
      emailErr.textContent = "";
    }
  }
  isValidEmail();

  if (!(query.checked || request.checked)) {
    result.textContent = "please select a query type!";
    result.style.color = "red";
    isValid = false;
  } else {
    result.textContent = "";
  }

  if (message.value === "") {
    text.textContent = "This field is required!";
    text.style.color = "red";
    isValid = false;
  } else {
    text.textContent = "";
  }

  if (!team.checked) {
    user.textContent =
      "To submit this form, please consent to being contracted!";
    user.style.color = "red";
    isValid = false;
  } else {
    user.textContent = "";
  }

  if(isValid){
    successMsg.style.display = "flex";
  }
  else{
    successMsg.style.display = "none";
  }
});

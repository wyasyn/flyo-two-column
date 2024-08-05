const inputOne = document.getElementById("email-1");
const formOne = document.getElementById("form-1");
const errorParagraph = document.getElementById("error-1");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailOne = inputOne.value;

// Function to validate email
const validateEmail = () => {
  if (!emailRegex.test(emailOne)) {
    formOne.classList.add("invalid");
    errorParagraph.style.display = "block";

    return false;
  }
  formOne.classList.remove("invalid");
  errorParagraph.style.display = "none";

  return true;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateEmail()) {
    console.log("success");
  }
};

formOne.onsubmit = handleSubmit;

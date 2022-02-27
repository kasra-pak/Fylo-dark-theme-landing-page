const emailError = document.querySelector('.signup__form__email-error')
const signUpForm = document.querySelector('.signup__form__submit-btn')
const emailInput = document.querySelector('.signup__form__email-input')

signUpForm.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();
  console.log(validateEmail(emailInput.value))
  if (!validateEmail(emailInput.value)) {
    emailError.style.opacity = 1;
  } else {
    emailError.style.opacity = 0;
  }
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
};
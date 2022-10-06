// forms

function checkIfInputValidated(event) {
  event.preventDefault();

  if (checkLength(theName.value, 1)) {
    theNameError.style.display = "none";
  } else {
    theNameError.style.display = "block";
  }

  if (checkLength(message.value, 10)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  //   if (checkMaxLength(message.value, 100)) {
  //     messageError.style.display = "none";
  //   } else {
  //     messageError.style.display = "block";
  //   }

  if (validateEmail(email.value, 1)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (
    checkLength(theName.value, 1) &&
    checkLength(message.value, 10) &&
    // checkMaxLength(message.value, 100) &&
    checkLength(email.value, 1) &&
    validateEmail(email.value)
  ) {
    contactMessage.innerHTML =
      '<div class="contact-message-success">Your message has been sent</div>';
    form.reset();
  } else {
  }
}

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function clearMessage() {
  contactMessage.innerHTML = "";
}
// new form fill - remove success message
theName.addEventListener("keyup", clearMessage);
message.addEventListener("keyup", clearMessage);
email.addEventListener("keyup", clearMessage);

form.addEventListener("submit", checkIfInputValidated);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

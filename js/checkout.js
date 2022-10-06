// forms

function checkIfInputValidated(event) {
  event.preventDefault();

  if (checkLength(theName.value, 1)) {
    theNameError.style.display = "none";
  } else {
    theNameError.style.display = "block";
  }

  if (checkLength(email.value, 1)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(phone.value, 1)) {
    phoneError.style.display = "none";
  } else {
    phoneError.style.display = "block";
  }
  if (checkLength(cardName.value, 1)) {
    cardNameError.style.display = "none";
  } else {
    cardNameError.style.display = "block";
  }
  if (checkLength(cardnum.value, 15)) {
    cardnumError.style.display = "none";
  } else {
    cardnumError.style.display = "block";
  }
  if (checkLength(exp.value, 1)) {
    expError.style.display = "none";
  } else {
    expError.style.display = "block";
  }
  if (checkLength(sec.value, 3)) {
    secError.style.display = "none";
  } else {
    secError.style.display = "block";
  }

  if (
    checkLength(theName.value, 1) &&
    // checkMaxLength(message.value, 100) &&
    checkLength(email.value, 1) &&
    checkLength(phone.value, 8) &&
    checkLength(cardName.value, 1) &&
    checkLength(cardnum.value, 16) &&
    checkLength(sec.value, 3) &&
    checkLength(exp.value, 4) &&
    validateEmail(email.value)
    // validatePhonenumber(phone.value) &&
    // creditCardValidation(cardnum)
  ) {
    checkoutMessage.innerHTML =
      '<div class="contact-message-success">Your order has been recieved</div> <div class="main_ch_back"> <a href="checkout_success.html" class="cart_form_submit_button button">SEE ORDER SUMMARY</a></div>';
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
  checkoutMessage.innerHTML = "";
}

theName.addEventListener("keyup", clearMessage);
email.addEventListener("keyup", clearMessage);
phone.addEventListener("keyup", clearMessage);
cardName.addEventListener("keyup", clearMessage);
cardnum.addEventListener("keyup", clearMessage);
sec.addEventListener("keyup", clearMessage);
exp.addEventListener("keyup", clearMessage);

form.addEventListener("submit", checkIfInputValidated);
// new form fill - remove success message

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
// function validatePhonenumber(phone) {
//   const regEx = /^\d{8}$/;
//   const patternMatches = regEx.test(phone);
//   return patternMatches;
// }
// function creditCardValidation(card) {
//   const regEx =
//     /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
//   const patternMatches = regEx.test(card);
//   return patternMatches;
// }

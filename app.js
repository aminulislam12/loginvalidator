function emailvalidators() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let pattren = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let text = document.getElementById("text");
  let emailcheckicon = document.getElementById("emailcheckicon");

  if (email.match(pattren)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is Valid";
    text.style.color = "green";
    emailcheckicon.classList.add("bi", "bi-check-circle-fill");
    emailcheckicon.classList.remove("bi", "bi-x-circle-fill");
    emailcheckicon.style.color = "green";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Your Email Address is inValid";
    text.style.color = "red";
    emailcheckicon.classList.add("bi", "bi-x-circle-fill");
    emailcheckicon.classList.remove("bi", "bi-check-circle-fill");
    emailcheckicon.style.color = "red";
  }
}

function passwordValidator() {
  let password = document.getElementById("password").value;
  let regex = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
  let text = document.getElementById("passText");
  let passwordcheckicon = document.getElementById("passwordcheckicon");

  if (regex.test(password)) {
    text.innerHTML = "Your Password Is Valid";
    text.style.color = "green";
    passwordcheckicon.classList.add("bi", "bi-check-circle-fill");
    passwordcheckicon.classList.remove("bi", "bi-x-circle-fill");
    passwordcheckicon.style.color = "green";
  } else {
    text.innerHTML = "Password atleast one number and one special Character";
    text.style.color = "red";
    passwordcheckicon.classList.add("bi", "bi-x-circle-fill");
    passwordcheckicon.classList.remove("bi", "bi-check-circle-fill");
    passwordcheckicon.style.color = "red";
  }
}

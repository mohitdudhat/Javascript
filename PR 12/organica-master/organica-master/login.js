let data = [];
console.log("hello");
let save = (name, email, password) => {
  obj = {
    userid: Math.floor(Math.random() * 10000),
    name: name,
    email: email,
    password: password,
  };
  console.log(obj);
  let getData = JSON.parse(localStorage.getItem("User"));
  console.log(getData);
  if (getData == null || getData == undefined) {
    console.log(obj);
    data.push(obj);
    localStorage.setItem("User", JSON.stringify(data));
  } else {
    const isEmailExists = getData.some((item) => item.email === email);
    if (isEmailExists) {
      alert("Email already exists");
      window.location.href = "Sign up.html";
      return;
    } else {
      data = getData;
      data.push(obj);
      localStorage.setItem("User", JSON.stringify(data));
    }
  }
  document.getElementById("registerName").value = "";
  document.getElementById("registerEmail").value = "";
  document.getElementById("registerPassword").value = "";

  window.location.href = "index.html";
};
function validateForm() {
  var nameInput = document.getElementById("registerName").value;
  var emailInput = document.getElementById("registerEmail").value;
  var passwordInput = document.getElementById("registerPassword").value;

  if (nameInput === "") {
    alert("Please enter your name.");
    showMessage("registerName", "Please enter your name.");
    return;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address.");
    showMessage("registerEmail", "Please enter a valid email address.");
    return;
  }

  if (passwordInput.length < 8) {
    alert("Password must be at least 8 characters long.");
    var passwordIcon = document.querySelector(".password-icon");
    passwordIcon.classList.add("password-icon-msg");
    showMessage(
      "registerPassword",
      "Password must be at least 8 characters long."
    );
    return;
  }
  if (document.querySelector(".msg") !== null) {
    document.querySelector(".msg").remove();
  }
  save(nameInput, emailInput, passwordInput);
}

function showMessage(id, msg) {
  const element = document.getElementById(id);
  const msgElements = document.querySelectorAll(".msg");

  if (msgElements.length > 0) {
    msgElements.forEach((element) => {
      element.remove();
    });
  }
  if (element) {
    const newParagraph = document.createElement("span");
    newParagraph.classList.add("msg");
    newParagraph.textContent = msg;

    element.insertAdjacentElement("afterend", newParagraph);
  }
}

// Login
let check = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let allUsers = JSON.parse(localStorage.getItem("User"));
  let getEmail =
    allUsers != null
      ? allUsers.filter((v) => {
          return v.email === email;
        })
      : null;
  console.log(getEmail);
  if (getEmail != 0 && getEmail != null) {
    if (getEmail[0].password == password) {
      localStorage.setItem("Login", JSON.stringify(getEmail[0]));
      console.log("done");
      window.location.href = "index.html";
    } else {
      alert("Password is not Valid");
    }
  } else {
    alert("Your Email is not Found");
  }

  let checkUser = JSON.parse(localStorage.getItem("Login"));
  if (checkUser) {
    alert("Already logIn");
    window.location.href = "index.html";
  }
};
let forgotPassword = () => {
  let title = document.querySelector(".title");
  let content = document.querySelector(".content");
  let passwordField = document.querySelector(".password");
  let loginButton = document.querySelector("input[value='Login']");

  title.innerText = "Forgot password";
  content.style.display = "none";
  passwordField.style.display = "none";
  loginButton.value = "Send OTP";
  loginButton.onclick = OTP;
};
let OTP = () => {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  alert(`Your OTP is ${otp}`);
  let otpObj = {
    email: document.getElementById("email").value,
    otp: otp,
  };
  localStorage.setItem("OTP", JSON.stringify(otpObj));
  let loginButton = document.querySelector("input[value='Send OTP']");
  let enteredOTP = prompt("Enter your OTP");
  let storedOTP = JSON.parse(localStorage.getItem("OTP")).otp;

  if (enteredOTP === storedOTP) {
    window.location.href = "newPassword.html";
  } else {
    alert("Incorrect OTP. Please try again.");
  }
};
let checkUser = JSON.parse(localStorage.getItem("Login"));
if (checkUser) {
  alert("Already logIn");
  window.location.href = "index.html";
}

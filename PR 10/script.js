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
  if (getEmail != 0 && getEmail != null) {
    if (getEmail[0].password == password) {
      localStorage.setItem("Login", JSON.stringify(getEmail[0]));
      window.location.href = "dist/index.html";
    } else {
      alert("Password is not Valid");
    }
  } else {
    alert("Your Email is not Found");
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

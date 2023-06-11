let data = [];
console.log("hello");
let save = (name, email, password, confirmPassword) => {
  if (password === confirmPassword) {
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
      data = getData;
      data.push(obj);
      localStorage.setItem("User", JSON.stringify(data));
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  } else {
    alert("Password and Confirm Password Does not Match");
  }
};
function validateForm() {
  // Get form input values
  var nameInput = document.getElementById("name").value;
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;
  var confirmPasswordInput = document.getElementById("confirmPassword").value;

  // Validate name field (not empty)
  if (nameInput === "") {
    alert("Please enter your name.");
    return;
  }

  // Validate email field (valid email address)
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password field (at least 8 characters)
  if (passwordInput.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // Validate confirm password field (matches password)
  if (passwordInput !== confirmPasswordInput) {
    alert("Passwords do not match.");
    return;
  }

  // If all validations pass, submit the form
  alert("Registration successful!");
  document.getElementById("remember-me").checked = false;
  save(nameInput, emailInput, passwordInput, confirmPasswordInput);
  window.location.href = "index.html";
}

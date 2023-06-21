let data = [];
console.log("hello");
let save = (name, email, password, confirmPassword, role) => {
  if (password === confirmPassword) {
    obj = {
      userid: Math.floor(Math.random() * 10000),
      name: name,
      email: email,
      password: password,
      role: role,
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
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  } else {
    alert("Password and Confirm Password Does not Match");
  }
  window.location.href = "index.html";
};
function validateForm() {
  var nameInput = document.getElementById("name").value;
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;
  var confirmPasswordInput = document.getElementById("confirmPassword").value;
  var role = document.getElementById("role").value;

  if (nameInput === "") {
    alert("Please enter your name.");
    return;
  }
  if (role === "default") {
    alert("Please choose a valid role");
    return;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (passwordInput.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  if (passwordInput !== confirmPasswordInput) {
    alert("Passwords do not match.");
    return;
  }
  document.getElementById("remember-me").checked = false;
  save(nameInput, emailInput, passwordInput, confirmPasswordInput, role);
}

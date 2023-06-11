let checkUser = JSON.parse(localStorage.getItem("Login"));
if (checkUser) {
  alert("Already logIn");
  window.location.href = "dist/index.html";
}
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

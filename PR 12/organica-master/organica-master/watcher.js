let checkUser = JSON.parse(localStorage.getItem("Login"));
if (checkUser) {
  alert("Already logIn");
  window.location.href = "index.html";
} else {
  window.location.href = "login.html";
}

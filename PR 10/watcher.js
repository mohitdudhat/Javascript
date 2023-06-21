let checkUser = JSON.parse(localStorage.getItem("Login"));
if (checkUser) {
  alert("Already logIn");
  window.location.href = "dist/index.html";
}

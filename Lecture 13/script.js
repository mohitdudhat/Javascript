let data = [];
let save = () => {
  let btn = document.getElementById("btn");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let userid = document.getElementById("id").value;
  obj = {
    userid: Math.floor(Math.random() * 10000),
    name: name,
    email: email,
    password: password,
  };
  if (userid) {
    let allData = JSON.parse(localStorage.getItem("User"));
    for (let i in allData) {
      if (userid == allData[i].userid) {
        allData[i].name = name;
        allData[i].email = email;
        allData[i].password = password;
      }
      localStorage.setItem("User", JSON.stringify(allData));
    }
  } else {
    if (
      localStorage.getItem("user") == null ||
      localStorage.getItem("user") == undefined
    ) {
      data.push(obj);
      localStorage.setItem("User", JSON.stringify(data));
    } else {
      let val = JSON.parse(localStorage.getItem("User"));
      val.push(obj);
      localStorage.setItem("User", JSON.stringify(val));
    }
  }
  viewData();
  if ((btn.innerText = "Update")) {
    btn.innerText = "Submit";
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};

let viewData = () => {
  let userData = JSON.parse(localStorage.getItem("User"));
  if (userData != null) {
    data = userData;
  }
  let tbl = "";
  data.map((v) => {
    const { userid, name, email, password } = v;
    tbl += `
    <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>
            <button type="button" onclick = "edit(${userid})">Edit</button>
            <button type="button" onclick = "deleteData(${userid})">Delete</button>
        </td>
    </tr>
    `;
  });
  document.getElementById("tbl").innerHTML = tbl;
};
viewData();

let edit = (id) => {
  console.log(id);
  let btn = document.getElementById("btn");
  btn.innerText = "Update";
  let userData = JSON.parse(localStorage.getItem("User"));
  let updateData = userData.filter((v) => {
    return v.userid == id;
  });
  console.log(updateData);
  document.getElementById("name").value = updateData[0].name;
  document.getElementById("email").value = updateData[0].email;
  document.getElementById("password").value = updateData[0].password;
  document.getElementById("id").value = updateData[0].userid;
};

let deleteData = (id) => {
  let userData = JSON.parse(localStorage.getItem("User"));
  let updateData = userData.filter((v) => {
    return v.userid != id;
  });
  localStorage.setItem("User", JSON.stringify(updateData));
  alert("Deleted");
  viewData();
};

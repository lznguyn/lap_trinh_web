document.querySelectorAll(".info-item .btn").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("log-in");
  });
});

//dang ky
function reg(event) {
  event.preventDefault();
  let username = document.getElementById("regUsername").value.trim();
  let password = document.getElementById("regPassword").value.trim();
  let email = document.getElementById("regEmail").value.trim();
  let fullname = document.getElementById("regFullname").value.trim();
  let regMess = document.getElementById("regMessage");

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let number = /[0-9]/g;

  if (!username || !password || !email || !fullname) {
    regMess.innerText = "Please fill your information!";
    return;
  }

  if (password.length < 8) {
    regMess.innerText = "Password must be at least 8 character!";
    return;
  }
  if (!lowerCaseLetter.test(password)) {
    regMess.innerText = "Password must contain a lowercase letter!";
    return;
  }
  if (!upperCaseLetter.test(password)) {
    regMess.innerText = "Password must contain a uppercase letter!";
    return;
  }
  if (!number.test(password)) {
    regMess.innerText = "Password must contain a number!";
    return;
  }

  let user = {
    username: username,
    password: password,
    email: email,
    fullname: fullname,
  };
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : {};

  if (users[username]) {
    regMess.innerText = "Username already exist!";
  } else {
    users[username] = user;
    localStorage.setItem("users", JSON.stringify(users));
    regMess.innerText = "Register sucessed!";
  }
}

//dang nhap
function login(event) {
  event.preventDefault();
  let username = document.getElementById("loginUsername").value.trim();
  let password = document.getElementById("loginPassword").value.trim();
  let lgMess = document.getElementById("loginMessaage");
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : {};

  let store = users[username];

  if (store && store.password === password) {
    localStorage.setItem("loggedInUser", JSON.stringify(store));
    window.location.href = "index.html";
  } else {
    lgMess.innerText = "None username/password!";
    return;
  }
}

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const orther = document.getElementById("orther");
const headerAcc = document.querySelector("icon");

if (bar) {
  bar.addEventListener("click", () => {
    orther.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    orther.classList.remove("active");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  //kiem ten co trong local storage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // neu co ten
  if (loggedInUser) {
    // document.getElementById("accountname").innerText = loggedInUser.username;
    document.querySelector(".icon i").className =
      "fa-solid fa-right-from-bracket";
    //neu khong co ten
  } else {
    document.querySelector("icon").innerHTML =
      '<i class="fa-regular fa-user"></i>';
  }
});

function logout() {
  //xoa ten nguoi dung
  localStorage.removeItem("loggedInUser");
  document.querySelector("icon").innerHTML =
    '<i class="fa-regular fa-user"></i>';
  //chuyen sang trang login
  window.location.href = "login.html";
}
headerAcc.addEventListener("click", logout);

function Addtocart() {
  var selectedItem = document.createElement("div");
  selectedItem.classList.add();
}

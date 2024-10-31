const searchIn = document.getElementById("search-inp");
const searchBt = document.getElementById("button-addon2");

searchBt.addEventListener("click", function () {
  localStorage.setItem("searching", searchIn.value);
  window.location.href = "shop.html";
});
const productApi = "../json/data.json";
function checkSearch() {
  fetch(productApi)
    .then((response) => response.json())
    .then((products) => {
      let searchData = localStorage.getItem("searching");
      if (searchData) {
        var container = document.getElementById("body");
        var htmls = "";
        var filterProduct = products.filter(
          (element) =>
            element.title.toLowerCase().indexOf(searchData.toLowerCase()) >= 0
        );
        filterProduct.forEach((element) => {
          if (element.status == "Enabled") {
            htmls += `
           <div class="pro" onclick="window.location.href='Sproduct.html'">
          <img src="../${element.img}" />
          <div class="des">
            <span>asus</span>
            <h5>${element.title}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>${element.price}<sup>đ</sup></h4>
          </div>
          <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
                `;
          }
        });

        container.innerHTML = htmls;
        localStorage.removeItem("searching");
      }
    })
    .join("");
}
checkSearch();

const details = document.querySelector(".pro-container");
const getDatas = async () => {
  const responses = await fetch("../json/data.json");
  const datas = await responses.json();
  if (datas) {
    details.innerHTML = datas
      .map((item) => {
        return `
      <div class="pro" onclick="window.location.href='Sproduct.html'">
          <img src="../image/${item.img}" />
          <div class="des">
            <span>}</span>
            <h5>${item.title}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>${item.price}<sup>đ</sup></h4>
          </div>
          <a href="../sproduct.html?id=${item.id}"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      
      `;
      })
      .join("");
  }
};
getDatas();

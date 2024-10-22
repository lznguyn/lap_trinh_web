const Productss = document.querySelector(".prodetails");

const getProduct = async () => {
  const path = new URLSearchParams(window.location.search);

  const productId = path.get("id");
  const response = await fetch("../json/data.json");
  const data = await response.json();

  const findProductId = data.find(
    (item) => item.id.toString() === productId.toString()
  );
  Productss.innerHTML = `
    <div class="s-p-image">
        <img src="../${findProductId.img}" width="100%" id="MainImg" alt="" />
        
      </div>

      <div class="single-pro-details">
        <h6>Shop/Assus</h6>
        <h4>${findProductId.title}</h4>
        <h2>${findProductId.price}<sup>đ</sup></h2>
        <select>
          <option>Select color</option>
          <option>White</option>
          <option>Black</option>
        </select>

        <input type="number" value="1" />
        <button class="normal" id="btn-cart">Add to cart</button>
        <h4>Product detail</h4>
        <span>
          -Nguyên hộp, đầy đủ phụ kiện từ nhà sản suất <br />
          -Bảo hành pin 12 tháng <br />
          -Bảo hành 24 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30
          ngày nếu có lỗi phần cứng từ nhà sản xuất. <br />
          -Giá sản phẩm đãbao gồm VAT. <br />
        </span>
      </div>
  
  `;

  const btAddCart = document.getElementById("btn-cart");
  btAddCart.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      const item = cart.findIndex((item) => item.id === findProductId.id);
      if (item !== -1) {
        cart[item].count += 1;
      } else {
        cart.push({ id: findProductId.id, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const cart = [
        {
          id: findProductId.id,
          count: 1,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
};

getProduct();

// localStorage.clear();
// localStorage.setItem("count", 1);
// localStorage.setItem("product", "samsung");

// let count = localStorage.getItem("count");
// console.log(count);

// localStorage.removeItem("count");

// sessionStorage.setItem("count", 1);
// sessionStorage.setItem("sama", 17);

// console.log(typeof sessionStorage.getItem("count"));

// // sessionStorage.removeItem("count");

// sessionStorage.clear();
// ---------------------------------------------------------
//Dark Mode codes
// let btn = document.querySelector(".btn");

// if (localStorage.getItem("mode") === null) {
//   localStorage.setItem("mode", "light");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   if (localStorage.getItem("mode") === "dark") {
//     document.body.style.backgroundColor = "black";
//     btn.innerText = "Turn on the light mode";
//     btn.className = "btn btn-outline-light";
//   } else {
//     document.body.style.backgroundColor = "transparent";
//     btn.innerText = "Turn on the dark mode";
//     btn.className = "btn btn-outline-dark";
//   }
// });

// btn.addEventListener("click", function () {
//   if (localStorage.getItem("mode") === null) {
//     localStorage.setItem("mode", "light");
//   }
//   if (localStorage.getItem("mode") === "dark") {
//     document.body.style.backgroundColor = "transparent";
//     localStorage.setItem("mode", "light");
//     this.innerText = "Turn on the dark mode";
//     this.className = "btn btn-outline-dark";
//   } else {
//     document.body.style.backgroundColor = "black";
//     localStorage.setItem("mode", "dark");
//     this.innerText = "Turn on the light mode";
//     this.className = "btn btn-outline-light";
//   }
// });

// -----------------------------

// Basket

let addBasketButtons = document.querySelectorAll(".addToCart");

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

addBasketButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (localStorage.getItem("basket") === null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let price = this.previousElementSibling.children[0].innerText;
    let model = this.parentElement.children[0].innerText;
    let image = this.parentElement.previousElementSibling.src;
    let Id = this.getAttribute("data-id");

    let existedProduct = basket.find((p) => p.Id == Id);

    if (existedProduct == undefined) {
      let product = {
        Id,
        price,
        model,
        image,
        count: 1,
      };
      basket.push(product);
    } else {
      existedProduct.count++;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    productCount();
    totalPrice();
  });
});

productCount();

function productCount() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let countElement = document.querySelector(".countProduct");
  let count = 0;

  basket.forEach((p) => {
    count += p.count;
  });
  countElement.innerText = count;
}
totalPrice();

function totalPrice() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let priceElement = document.querySelector(".totalPrice");
  //   let total = 0;
  //   basket.forEach((p) => {
  //     total += +p.price * p.count;
  //   });

  let total = basket.reduce((total, p) => {
    return (total += p.price * p.count);
  }, 0);
  priceElement.innerText = total;
}

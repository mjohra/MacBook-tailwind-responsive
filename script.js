const free = document.getElementById("free-memory");
const express = document.getElementById("express-memory");
const normalStorage = document.getElementById("normal-storage");
const mediumStorage = document.getElementById("medium-storage");
const expressStorage = document.getElementById("express-storage");

const freeDelivery = document.getElementById("free-delivery");
const paidDelivery = document.getElementById("paid-delivery");

const memoryField = document.getElementById("memory");
const storageField = document.getElementById("storage");
const deliveryField = document.getElementById("delivery");
const total = document.getElementById("total");
const shippingTotal = document.getElementById("shipping");
const price = document.getElementById("price");
const promoCode = document.getElementById("code");
// function for updating cost
function update(cost, element) {
  const productField = document.getElementById(element);
  productField.innerText = cost;
  updateTotal();
}
//button click event handler
free.addEventListener("click", function () {
  update(0, "memory");
});
express.addEventListener("click", function () {
  update(180, "memory");
});
normalStorage.addEventListener("click", function () {
  update(0, "storage");
});
mediumStorage.addEventListener("click", function () {
  update(100, "storage");
});
expressStorage.addEventListener("click", function () {
  update(180, "storage");
});
freeDelivery.addEventListener("click", function () {
  update(0, "delivery");
});
paidDelivery.addEventListener("click", function () {
  update(20, "delivery");
});

//update total
function updateTotal() {
  const memoryCharge = Number(memoryField.innerText);
  const storageCharge = Number(storageField.innerText);
  const deliveryCharge = Number(deliveryField.innerText);
  const bestPrice = Number(price.innerText);
  const total = document.getElementById("total");
  const shippingTotal = document.getElementById("shipping");
  const grandTotal = memoryCharge + storageCharge + deliveryCharge + bestPrice;
  total.innerText = grandTotal;
  shippingTotal.innerText = grandTotal;
}

//promo code

function applyPromoCode() {
  const total = document.getElementById("total");
  const discount = Number(total.innerText);
  const shippingTotal = document.getElementById("shipping");
  const promoCode = document.getElementById("code").value;
  if (promoCode == "stevekaku") {
    const currentTotal = discount - discount * 0.2;
    document.getElementById("code").value = "";
    shippingTotal.innerText = currentTotal;
  } else {
    alert('enter valid coupon "stevekaku"');
    document.getElementById("code").value = "";
  }
}

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

free.addEventListener("click", function () {
  memoryField.innerText = "0";
  price.innerText = "1299";
  updateTotal();
});
express.addEventListener("click", function () {
  memoryField.innerText = "180";
  price.innerText = "1299";
  updateTotal();
});
normalStorage.addEventListener("click", function () {
  storageField.innerText = "0";
  price.innerText = "1299";
  updateTotal();
});
mediumStorage.addEventListener("click", function () {
  storageField.innerText = "100";
  price.innerText = "1299";
  updateTotal();
});
expressStorage.addEventListener("click", function () {
  storageField.innerText = "180";
  price.innerText = "1299";
  updateTotal();
});
freeDelivery.addEventListener("click", function () {
  deliveryField.innerText = "0";
  price.innerText = "1299";
  updateTotal();
});
paidDelivery.addEventListener("click", function () {
  deliveryField.innerText = "20";
  price.innerText = "1299";
  updateTotal();
});

//update total
function updateTotal() {
  const memoryCharge = Number(memoryField.innerText);
  const storageCharge = Number(storageField.innerText);
  const deliveryCharge = Number(deliveryField.innerText);
  const bestPrice = Number(price.innerText);
  const grandTotal = memoryCharge + storageCharge + deliveryCharge + bestPrice;
  total.innerText = grandTotal;
  shippingTotal.innerText = grandTotal;
}

//promo code
const discountPrice = Number(shippingTotal.innerText);
function applyPromoCode() {
  const promoCode = document.getElementById("code").value;
  if (promoCode == "stevekaku") {
    const discount=discountPrice;
    const prevTotal = discount * 0.2;
    //console.log(prevTotal);
    const currentTotal = discountPrice - prevTotal;
    //const total=currentTotal;
    document.getElementById("code").value = "";
    shippingTotal.innerText = currentTotal;
    //currentTotal=Number(shippingTotal.innerText);
  } else {
    alert('enter valid coupon "stevekaku"');
    document.getElementById("code").value = "";
  }
}


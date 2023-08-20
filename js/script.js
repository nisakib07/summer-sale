document.getElementById("card1").addEventListener("click", function () {
  itemNameToCart("card1Name", "card1Price");
});

document.getElementById("card2").addEventListener("click", function () {
  itemNameToCart("card2Name", "card2Price");
});

document.getElementById("card3").addEventListener("click", function () {
  itemNameToCart("card3Name", "card3Price");
});

document.getElementById("card4").addEventListener("click", function () {
  itemNameToCart("card4Name", "card4Price");
});

document.getElementById("card5").addEventListener("click", function () {
  itemNameToCart("card5Name", "card5Price");
});

document.getElementById("card6").addEventListener("click", function () {
  itemNameToCart("card6Name", "card6Price");
});

document.getElementById("card7").addEventListener("click", function () {
  itemNameToCart("card7Name", "card7Price");
});

document.getElementById("card8").addEventListener("click", function () {
  itemNameToCart("card8Name", "card8Price");
});

document.getElementById("card9").addEventListener("click", function () {
  itemNameToCart("card9Name", "card9Price");
});

document.getElementById("apply-btn").addEventListener("click", function () {
  const totalPrice = document.getElementById("totalPrice").innerText;
  const totalPriceNum = parseFloat(totalPrice);
  const finalTotal = document.getElementById("final-total");
  const discountAmount = document.getElementById("discount-amount");
  const couponCode = document.getElementById("coupon-code-field").value;
  if (couponCode === "SELL200") {
    const discount = totalPriceNum * 0.2;
    const newTotal = totalPriceNum - discount;
    discountAmount.innerText = discount.toFixed(2);
    finalTotal.innerText = newTotal.toFixed(2);
  } else {
    alert("Write down the promo code");
  }
});

document.getElementById("home-btn").addEventListener("click", function () {
  location.pathname = "/index.html";
});

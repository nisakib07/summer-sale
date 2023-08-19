function itemNameToCart(cardName, itemPrice) {
  const itemName = document.getElementById(cardName).innerText;
  const li = document.createElement("li");

  const itemList = document.getElementById("item-list");
  const count = itemList.childElementCount;

  li.innerHTML = `${count + 1}. ${itemName}`;
  itemList.appendChild(li);

  const itemPriceString = document.getElementById(itemPrice).innerText;
  const itemPriceFloat = parseFloat(itemPriceString);

  let totalPriceElement = document.getElementById("totalPrice");
  let totalPriceString = totalPriceElement.innerText;
  let totalPriceFloat = parseFloat(totalPriceString);
  totalPriceFloat += itemPriceFloat;

  const applyBtn = document.getElementById("apply-btn");
  if (totalPriceFloat >= 200) {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", true);
  }

  const purchaseBtn = document.getElementById("purchase-btn");
  if (totalPriceFloat > 0) {
    purchaseBtn.removeAttribute("disabled");
  } else {
    purchaseBtn.setAttribute("disabled", true);
  }

  totalPriceElement.innerText = totalPriceFloat.toFixed(2);
}

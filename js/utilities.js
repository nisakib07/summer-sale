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

  let totalElement = document.getElementById("final-total");
  let finalTotalString = totalElement.innerText;
  let finalTotalFloat = parseFloat(finalTotalString);
  finalTotalFloat += itemPriceFloat;

  const applyBtn = document.getElementById("apply-btn");
  if (totalPriceFloat >= 200) {
    applyBtn.classList.remove("bg-gray-500");
    applyBtn.classList.add("bg-[#E527B2]");
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", true);
  }

  const purchaseBtn = document.getElementById("purchase-btn");
  if (totalPriceFloat > 0) {
    purchaseBtn.classList.remove("bg-gray-500");
    purchaseBtn.classList.add("bg-[#E527B2]");
    purchaseBtn.removeAttribute("disabled");
  } else {
    purchaseBtn.setAttribute("disabled", true);
  }

  totalPriceElement.innerText = totalPriceFloat.toFixed(2);
  totalElement.innerText = finalTotalFloat.toFixed(2);
}

// ================= PRODUCT DATA =================
const products = document.querySelectorAll(".product-card");
const searchBox = document.getElementById("searchBox");
const modal = document.getElementById("productModal");

// Modal elements
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");

// ================= SEARCH =================
searchBox.addEventListener("keyup", () => {
  const text = searchBox.value.toLowerCase();

  products.forEach(card => {
    const name = card.querySelector("h4").innerText.toLowerCase();
    card.style.display = name.includes(text) ? "block" : "none";
  });

  console.log("Search keyword:", text);
});

// ================= OPEN PRODUCT =================
function openProduct(name, price, desc) {
  modalTitle.innerText = name;
  modalPrice.innerText = "Price: " + price;
  modalDesc.innerText = desc;

  modal.style.display = "block";

  console.log("Product opened:", {
    name: name,
    price: price,
    description: desc
  });

  // Save selected product
  localStorage.setItem(
    "selectedProduct",
    JSON.stringify({ name, price, desc })
  );
}

// ================= CLOSE PRODUCT =================
function closeProduct() {
  modal.style.display = "none";
  console.log("Product modal closed");
}

// ================= BUY NOW =================
document.querySelector(".buy").addEventListener("click", () => {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  console.log("Buying product:", product);

  alert(
    "Redirecting to seller page...\n\nProduct: " +
    product.name +
    "\nPrice: " +
    product.price
  );

  // SIMULATED REDIRECT
  window.open("https://www.amazon.in", "_blank");
});

// ================= FILTER: PRICE =================
const priceRadios = document.querySelectorAll("input[name='price']");

priceRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    filterProducts();
  });
});

// ================= FILTER: SELLER =================
const sellerChecks = document.querySelectorAll(".filters input[type='checkbox']");

sellerChecks.forEach(box => {
  box.addEventListener("change", () => {
    filterProducts();
  });
});

// ================= FILTER FUNCTION =================
function filterProducts() {
  const priceSelected = document.querySelector("input[name='price']:checked");
  const sellers = Array.from(sellerChecks)
    .filter(cb => cb.checked)
    .map(cb => cb.parentElement.innerText.trim());

  products.forEach(card => {
    let show = true;

    // PRICE
    const priceText = card.querySelector(".price").innerText.replace("₹", "");
    const price = parseInt(priceText);

    if (priceSelected) {
      if (priceSelected.parentElement.innerText.includes("Up to") && price > 500)
        show = false;
      if (priceSelected.parentElement.innerText.includes("500") && (price < 500 || price > 1000))
        show = false;
      if (priceSelected.parentElement.innerText.includes("Above") && price < 1000)
        show = false;
    }

    // SELLER
    if (sellers.length > 0) {
      const seller = card.querySelector(".seller").innerText;
      if (!sellers.some(s => seller.includes(s))) show = false;
    }

    card.style.display = show ? "block" : "none";
  });

  console.log("Filters applied:", {
    price: priceSelected ? priceSelected.parentElement.innerText : "None",
    sellers: sellers
  });
}

// ================= CLOSE MODAL ON OUTSIDE CLICK =================
window.onclick = (e) => {
  if (e.target === modal) {
    closeProduct();
  }
};

console.log("PCOS Product Page JS Loaded Successfully ✅");
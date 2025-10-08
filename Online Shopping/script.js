// Product Data
const products = [
  { id: 1, name: "Wireless Headphones", price: 50, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Smart Watch", price: 80, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Bluetooth Speaker", price: 40, image: "https://via.placeholder.com/200" },
  { id: 4, name: "USB Keyboard", price: 25, image: "https://via.placeholder.com/200" },
  { id: 5, name: "Gaming Mouse", price: 30, image: "https://via.placeholder.com/200" }
];

// Show Products on Home Page
const productList = document.getElementById("product-list");
if (productList) {
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Show Cart
const cartTable = document.querySelector("#cart-table tbody");
if (cartTable) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let grandTotal = 0;

  cart.forEach((item, index) => {
    const total = item.price * item.qty;
    grandTotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><input type="number" value="${item.qty}" min="1" data-index="${index}" class="qty-input"></td>
      <td>${total}</td>
      <td><button onclick="removeFromCart(${index})">Remove</button></td>
    `;
    cartTable.appendChild(row);
  });

  document.getElementById("grand-total").textContent = grandTotal;

  // Update quantity dynamically
  document.querySelectorAll(".qty-input").forEach(input => {
    input.addEventListener("change", e => {
      const index = e.target.getAttribute("data-index");
      cart[index].qty = parseInt(e.target.value);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });

  // Checkout
  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout successful! Thank you for your purchase.");
    localStorage.removeItem("cart");
    location.reload();
  });
}

// Remove from Cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

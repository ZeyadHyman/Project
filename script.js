// ===============================================
// TECH-TOK STORE - BEGINNER FRIENDLY VERSION
// All JavaScript in one file - works on both pages!
// ===============================================

// List of all products
const products = [
  {
    id: 1,
    name: "Dell Laptop 15 inch",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    description:
      "Perfect for work and everyday use. Fast processor, plenty of storage, and a great screen.",
    specs: [
      "Intel Core i5",
      "8GB RAM",
      "256GB SSD",
      "15.6 inch Display",
      "Windows 11",
    ],
  },

  {
    id: 2,
    name: "Samsung Galaxy Phone",
    price: 649.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    description: "Latest model with amazing camera and long battery life.",
    specs: [
      "6.5 inch Screen",
      "128GB Storage",
      "Triple Camera",
      "5G Ready",
      "Android 13",
    ],
  },

  {
    id: 3,
    name: "Sony Wireless Headphones",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    description: "Comfortable headphones with noise cancellation.",
    specs: ["Bluetooth 5.0", "30hr Battery", "Noise Cancelling", "Great Sound"],
  },

  {
    id: 4,
    name: "Apple Watch Series",
    price: 329.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    description: "Track fitness, get notifications, stay connected.",
    specs: [
      "Fitness Tracking",
      "Heart Rate Monitor",
      "Water Resistant",
      "Long Battery",
    ],
  },

  {
    id: 5,
    name: "iPad Tablet 10 inch",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    description: "Great for reading, drawing, and watching videos.",
    specs: [
      "10.2 inch Display",
      "64GB Storage",
      "Touch ID",
      "App Store Access",
    ],
  },

  {
    id: 6,
    name: "Logitech Gaming Mouse",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    description: "Smooth and comfortable for gaming and work.",
    specs: ["High DPI Sensor", "Programmable Buttons", "RGB Lighting"],
  },

  {
    id: 7,
    name: "USB-C Charging Cable",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    description: "Fast charging, durable cable for phones and tablets.",
    specs: ["6ft Length", "Fast Charging", "USB-C to USB-C", "Durable"],
  },

  {
    id: 8,
    name: "Portable Speaker",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description: "Waterproof speaker with great sound.",
    specs: ["Bluetooth 5.0", "12hr Battery", "Waterproof", "Loud & Clear"],
  },
];

// Our shopping cart - empty at the start
let cart = [];

// ================ CART FUNCTIONS ================

// Add a product to the cart
function addToCart(product) {
  let found = false;

  // Check if product is already in cart
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      cart[i].quantity += 1; // Increase quantity
      found = true;
      break;
    }
  }

  // If not found, add new item
  if (!found) {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  updateCartDisplay();
  alert("Added to cart!");
}

// Remove item from cart
function removeFromCart(productId) {
  let newCart = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id !== productId) {
      newCart.push(cart[i]);
    }
  }
  cart = newCart;
  updateCartDisplay();
}

// Calculate total price
function getCartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}

// Update cart display (count, items, total)
function updateCartDisplay() {
  // Update cart count badge
  let countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.textContent = cart.length;
  }

  // Update cart items list
  let itemsArea = document.getElementById("cart-items");
  if (itemsArea) {
    if (cart.length === 0) {
      itemsArea.innerHTML =
        "<p style='text-align:center; color:#666;'>Your cart is empty</p>";
    } else {
      let html = "";
      for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        html += `<div class="cart-item">
                  <div><strong>${item.name}</strong></div>
                  <div>$${item.price.toFixed(2)} × ${item.quantity}</div>
                  <button class="remove-btn" onclick="removeFromCart(${
                    item.id
                  })">Remove</button>
                </div>`;
      }
      itemsArea.innerHTML = html;
    }
  }

  // Update total price
  let totalElement = document.getElementById("cart-total");
  if (totalElement) {
    totalElement.textContent = getCartTotal().toFixed(2);
  }
}

// Open and close cart modal
function openCart() {
  let modal = document.getElementById("cart-modal");
  if (modal) {
    modal.style.display = "block";
    updateCartDisplay();
  }
}

function closeCart() {
  let modal = document.getElementById("cart-modal");
  if (modal) modal.style.display = "none";
}

// ================ MAIN PAGE FUNCTIONS ================

// Show all products on the home page
function showProducts() {
  let grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = ""; // Clear old cards

  for (let i = 0; i < products.length; i++) {
    let p = products[i];

    let card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" class="product-image">
      <div class="product-name">${p.name}</div>
      <div class="product-price">$${p.price.toFixed(2)}</div>
      <a href="product-details.html?id=${p.id}">
        <button class="view-details-btn">View Details</button>
      </a>
      <button class="add-to-cart-btn" onclick="addToCart(products[${i}])">
        Add to Cart
      </button>
    `;

    grid.appendChild(card);
  }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ================ PRODUCT DETAILS PAGE ================

// Show detailed view of one product
function showProductDetails() {
  let url = window.location.href;
  let idStart = url.indexOf("id=");
  if (idStart === -1) {
    document.getElementById("product-details-container").innerHTML =
      "<p>Product not found.</p>";
    return;
  }

  let idString = url.substring(idStart + 3);
  let amp = idString.indexOf("&");
  if (amp !== -1) idString = idString.substring(0, amp);

  let productId = parseInt(idString);
  let product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    document.getElementById("product-details-container").innerHTML =
      "<p>Sorry, product not found.</p>";
    return;
  }

  let container = document.getElementById("product-details-container");
  container.innerHTML = `
    <div class="product-details-layout">
      <div>
        <img src="${product.image}" class="details-image-large">
      </div>
      <div>
        <h1 class="details-product-name">${product.name}</h1>
        <div class="details-price">$${product.price.toFixed(2)}</div>
        <div class="stock-status">In Stock</div>
        <p>${product.description}</p>
        
        <div class="details-specs">
          <h3>Specifications:</h3>
          <ul>
            ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
          </ul>
        </div>
        
        <button class="add-to-cart-btn" onclick="addToCart(products.find(p => p.id === ${
          product.id
        }))">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// ================ CONTACT FORM ================

function submitContactForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
    return;
  }

  alert("Thank you, " + name + "! Your message was sent.");
  document.getElementById("contact-form").reset();
}

// ================ PAGE LOAD SETUP ================

document.addEventListener("DOMContentLoaded", function () {
  // Always update cart when page loads
  updateCartDisplay();

  // Set up cart buttons on both pages
  let cartIcon = document.getElementById("cart-icon");
  if (cartIcon) cartIcon.onclick = openCart;

  let closeBtn = document.getElementById("close-modal");
  if (closeBtn) closeBtn.onclick = closeCart;

  let checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.onclick = function () {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert(
          "Thank you for your purchase! Total: $" + getCartTotal().toFixed(2)
        );
        cart = [];
        updateCartDisplay();
        closeCart();
      }
    };
  }

  // Only run these on the correct pages
  if (document.getElementById("products-grid")) {
    showProducts(); // Home page
  }

  if (document.getElementById("product-details-container")) {
    showProductDetails(); // Details page
  }

  // Contact form
  let form = document.getElementById("contact-form");
  if (form) form.onsubmit = submitContactForm;
});

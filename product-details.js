// Product Details Page JavaScript
// This file shows the product details when you click on a product

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the product ID from the URL (like product-details.html?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  // Load the cart from storage
  loadCartFromStorage();

  // Show the product details
  if (productId) {
    showProductDetails(productId);
  } else {
    showError("Product ID not found in URL");
  }

  // Set up the cart buttons and functionality
  setupCartFunctionality();
});

// Function to display the product information
function showProductDetails(productId) {
  try {
    // Find the product with matching ID
    const product = products.find((p) => p.id === productId);

    if (!product) {
      throw new Error("Product not found");
    }

    // Get the container and fill it with product info
    const detailsContainer = document.getElementById("product-details-container");
    if (detailsContainer) {
      detailsContainer.innerHTML = `
        <div class="product-details-layout">
          <div class="product-details-image">
            <img src="${product.image}" alt="${product.name}" class="details-image-large" onerror="this.src='https://via.placeholder.com/600x400?text=No+Image'">
          </div>
          <div class="product-details-info">
            <h1 class="details-product-name">${product.name}</h1>
            <div class="details-price">$${product.price.toFixed(2)}</div>
            <div class="stock-status ${
              product.inStock ? "in-stock" : "out-of-stock"
            }">
              ${product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
            </div>
            <p class="details-description">${product.description}</p>
            <div class="details-specs">
              <h3>Specifications:</h3>
              <ul>
                ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
              </ul>
            </div>
            <div class="details-actions">
              <button class="btn-primary btn-large" onclick="addToCartFromDetails(${
                product.id
              })">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error showing product details:", error);
    showError("Couldn't load product details. Please try again.");
  }
}

// Function to add product to cart from the details page
function addToCartFromDetails(productId) {
  try {
    // Find the product and add it to cart
    const product = products.find((p) => p.id === productId);
    if (product) {
      cartManager.addItem(product);
      // Save the cart so it doesn't disappear
      saveCartToStorage();
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    alert("Couldn't add item to cart. Please try again.");
  }
}

// Function to show an error message if something goes wrong
function showError(message) {
  const detailsContainer = document.getElementById("product-details-container");
  if (detailsContainer) {
    detailsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem;">
        <p style="font-size: 1.3rem; color: #e74c3c;">${message}</p>
        <button class="btn-primary" onclick="window.location.href='index.html#products'" style="margin-top: 2rem;">
          Go to Products
        </button>
      </div>
    `;
  }
}

// Function to set up all the cart buttons and click handlers
function setupCartFunctionality() {
  // Cart icon click event
  const cartIcon = document.getElementById("cart-icon");
  if (cartIcon) {
    cartIcon.addEventListener("click", openCartModal);
  }

  // Close modal events
  const closeModal = document.getElementById("close-modal");
  if (closeModal) {
    closeModal.addEventListener("click", closeCartModal);
  }

  // Close modal when clicking outside
  const modal = document.getElementById("cart-modal");
  if (modal) {
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeCartModal();
      }
    });
  }

  // Checkout button
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert(
          "Thanks for your order! Total: $" +
            cartManager.calculateTotal().toFixed(2)
        );
        cart = [];
        cartManager.updateCartDisplay();
        saveCartToStorage();
        closeCartModal();
      }
    });
  }

  // Initialize cart display
  cartManager.updateCartDisplay();
}

// Function to save the cart to browser storage
function saveCartToStorage() {
  try {
    localStorage.setItem("techStoreCart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to storage:", error);
  }
}

// Function to load the cart from browser storage
function loadCartFromStorage() {
  try {
    const savedCart = localStorage.getItem("techStoreCart");
    if (savedCart) {
      cart = JSON.parse(savedCart);
      cartManager.updateCartDisplay();
    }
  } catch (error) {
    console.error("Error loading cart from storage:", error);
  }
}

// Functions to open and close the cart popup
function openCartModal() {
  const modal = document.getElementById("cart-modal");
  if (modal) {
    modal.style.display = "block";
    cartManager.updateCartDisplay();
  }
}

function closeCartModal() {
  const modal = document.getElementById("cart-modal");
  if (modal) {
    modal.style.display = "none";
  }
}


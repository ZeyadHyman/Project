// JavaScript file for TechStore website
// This file makes the website interactive

// ============================================
// PRODUCT DATA
// ============================================
// Here we store all our products in an array
// Each product is an object with properties like name, price, image, etc.
const products = [
  {
    id: 1,
    name: "Dell Laptop 15 inch",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    description:
      "Perfect for work and everyday use. Fast processor, plenty of storage, and a great screen.",
    specs: [
      "Intel Core i5 Processor",
      "8GB RAM",
      "256GB SSD",
      "15.6 inch Display",
      "Windows 11",
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy Phone",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    description:
      "Latest model with amazing camera and long battery life. Great for photos and daily use.",
    specs: [
      "6.5 inch Screen",
      "128GB Storage",
      "Triple Camera",
      "5G Ready",
      "Android 13",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Sony Wireless Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    description:
      "Comfortable over-ear headphones with noise cancellation. Perfect for music and calls.",
    specs: [
      "Bluetooth 5.0",
      "30hr Battery",
      "Noise Cancelling",
      "Comfortable Fit",
      "Great Sound",
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Apple Watch Series",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    description:
      "Track your fitness, get notifications, and stay connected. Works with iPhone.",
    specs: [
      "Fitness Tracking",
      "Heart Rate Monitor",
      "Water Resistant",
      "iOS Compatible",
      "Long Battery",
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "iPad Tablet 10 inch",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    description:
      "Great for reading, drawing, and watching videos. Lightweight and easy to carry.",
    specs: [
      "10.2 inch Display",
      "64GB Storage",
      "Touch ID",
      "Long Battery",
      "App Store Access",
    ],
    inStock: true,
  },
  {
    id: 6,
    name: "Logitech Gaming Mouse",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    description:
      "Smooth tracking and comfortable design. Perfect for gaming and work.",
    specs: [
      "High DPI Sensor",
      "Programmable Buttons",
      "Ergonomic Design",
      "RGB Lighting",
      "Wired/Wireless",
    ],
    inStock: true,
  },
  {
    id: 7,
    name: "USB-C Charging Cable",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    description:
      "Fast charging cable that works with most phones and tablets. Durable and reliable.",
    specs: [
      "6ft Length",
      "Fast Charging",
      "USB-C to USB-C",
      "Durable Build",
      "Universal Compatible",
    ],
    inStock: true,
  },
  {
    id: 8,
    name: "Portable Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description:
      "Take your music anywhere. Waterproof design with great sound quality.",
    specs: [
      "Bluetooth 5.0",
      "12hr Battery",
      "Waterproof",
      "Compact Size",
      "Loud & Clear",
    ],
    inStock: true,
  },
];

// ============================================
// SHOPPING CART
// ============================================
// This array stores all items in the shopping cart
let cart = [];

// This object contains all the functions for managing the cart
const cartManager = {
  // Function to add a product to the cart
  addItem: function (product) {
    try {
      // First check if the product is valid
      if (!product || !product.id) {
        throw new Error("Invalid product data");
      }

      // Check if this product is already in the cart
      const existingItem = cart.find((item) => item.id === product.id);

      // If it's already in cart, increase quantity by 1
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // If it's not in cart, add it as a new item
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      // Update the cart display and show a message
      this.updateCartDisplay();
      this.showNotification("Added to cart!");
      // Save cart so it doesn't disappear when you refresh
      saveCartToStorage();
    } catch (error) {
      // If something goes wrong, show an error message
      console.error("Error adding item to cart:", error.message);
      alert("Error: " + error.message);
    }
  },

  // Function to remove an item from the cart
  removeItem: function (productId) {
    try {
      // Remove the item from cart by filtering it out
      cart = cart.filter((item) => item.id !== productId);
      this.updateCartDisplay();
      // Save the updated cart
      saveCartToStorage();
    } catch (error) {
      console.error("Error removing item:", error.message);
    }
  },

  // Function to calculate the total price of all items in cart
  calculateTotal: function () {
    // Go through each item, multiply price by quantity, and add them all up
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },

  // Function to update what the user sees in the cart
  updateCartDisplay: function () {
    // Get the HTML elements we need to update
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Update the number shown on the cart icon
    if (cartCount) {
      cartCount.textContent = cart.length;
    }

    // Update the list of items in the cart modal
    if (cartItems) {
      if (cart.length === 0) {
        // If cart is empty, show a message
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        // If cart has items, show each item with a remove button
        cartItems.innerHTML = cart
          .map(
            (item) => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                             <div class="cart-item-name">${item.name}</div>
                             <div class="cart-item-price">$${item.price.toFixed(
                               2
                             )} x ${item.quantity}</div>
                        </div>
                        <button class="remove-item-btn" onclick="cartManager.removeItem(${
                          item.id
                        })">Remove</button>
                    </div>
                `
          )
          .join("");
      }
    }

    // Update the total price
    if (cartTotal) {
      cartTotal.textContent = this.calculateTotal().toFixed(2);
    }
  },

  // Function to show a temporary message when something happens
  showNotification: function (message) {
    // Create a new div element for the notification
    const notification = document.createElement("div");
    // Style the notification and add it to the page
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #27ae60;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  },
};

// ============================================
// FORM VALIDATION
// ============================================
// This function checks if the form is filled out correctly
function validateForm() {
  // Get the input fields from the form
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  let isValid = true; // Start by assuming the form is valid

  // Clear any old error messages
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });

  // Validate name (String data type)
  const name = nameInput.value.trim();
  if (name === "") {
    showError("name-error", "Please enter your name");
    isValid = false;
  } else if (name.length < 2) {
    showError("name-error", "Name should be at least 2 characters");
    isValid = false;
  }

  // Validate email (String data type with built-in function)
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Built-in function: String.match() with RegExp
  if (email === "") {
    showError("email-error", "Please enter your email");
    isValid = false;
  } else if (!email.match(emailPattern)) {
    showError("email-error", "Email format looks wrong");
    isValid = false;
  }

  // Validate message (String data type)
  const message = messageInput.value.trim();
  if (message === "") {
    showError("message-error", "Please write a message");
    isValid = false;
  } else if (message.length < 10) {
    showError(
      "message-error",
      "Message needs to be longer (at least 10 characters)"
    );
    isValid = false;
  }

  return isValid;
}

// Helper function to show error messages
function showError(errorId, message) {
  const errorElement = document.getElementById(errorId);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  try {
    if (validateForm()) {
      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // Simulate form submission
      const successMessage = document.getElementById("form-success");
      successMessage.textContent =
        "Thanks! We got your message and will get back to you soon.";
      successMessage.style.display = "block";

      // Reset form
      document.getElementById("contact-form").reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }
  } catch (error) {
    // Error handling
    console.error("Form submission error:", error);
    alert("Oops, something went wrong. Can you try again?");
  }
}

// ============================================
// DYNAMIC PRODUCT DISPLAY
// ============================================
// JavaScript Function: Display products dynamically
function displayProducts() {
  const productsGrid = document.getElementById("products-grid");

  if (!productsGrid) {
    console.error("Products grid element not found");
    return;
  }

  // Clear existing content
  productsGrid.innerHTML = "";

  // Loop through products array
  // Built-in function: Array.forEach()
  products.forEach((product) => {
    // Create product card element
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.style.cursor = "pointer";

    // Set inner HTML with product data
    productCard.innerHTML = `
             <div class="product-image">${product.image}</div>
             <div class="product-name">${product.name}</div>
             <div class="product-price">$${product.price.toFixed(2)}</div>
             <a href="product-details.html?id=${
               product.id
             }" class="view-details-btn-link">
               <button class="view-details-btn">
                 View Details
               </button>
             </a>
             <button class="add-to-cart-btn" onclick="event.stopPropagation(); cartManager.addItem(${JSON.stringify(
               product
             ).replace(/"/g, "&quot;")})">
                 Add to Cart
             </button>
         `;

    // Append to grid
    productsGrid.appendChild(productCard);
  });
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================
// JavaScript Functions: Handle modal open/close
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

// ============================================
// SMOOTH SCROLLING
// ============================================
// JavaScript Function: Smooth scroll to section
function smoothScroll(targetId) {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// ============================================
// EVENT LISTENERS (DOM Manipulation)
// ============================================
// Wait for DOM to load before executing JavaScript
// Built-in function: addEventListener()
document.addEventListener("DOMContentLoaded", function () {
  // Display products when page loads
  displayProducts();

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

  // Form submission event
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }

  // Shop now button
  const shopNowBtn = document.getElementById("shop-now-btn");
  if (shopNowBtn) {
    shopNowBtn.addEventListener("click", function () {
      smoothScroll("#products");
    });
  }

  // Navigation link clicks
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      smoothScroll(targetId);

      // Update active link
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

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

  // Load cart from localStorage
  loadCartFromStorage();
});

// Function to save cart to localStorage
function saveCartToStorage() {
  try {
    localStorage.setItem("techStoreCart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to storage:", error);
  }
}

// Function to load cart from localStorage
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

// ============================================
// JAVASCRIPT DATA TYPES DEMONSTRATION
// ============================================
// This section demonstrates various JavaScript data types:

// Number data type
const totalProducts = products.length; // Number: 8

// String data type
const storeName = "TechStore"; // String

// Boolean data type
const isStoreOpen = true; // Boolean

// Array data type (already shown with products and cart)

// Object data type (already shown with product objects and cartManager)

// Undefined and Null
let undefinedVariable; // undefined
let nullVariable = null; // null

// ============================================
// BUILT-IN FUNCTIONS USED IN THIS PROJECT
// ============================================
// 1. Array methods: forEach(), map(), filter(), reduce(), find()
// 2. String methods: trim(), match(), toFixed()
// 3. DOM methods: getElementById(), querySelector(), addEventListener()
// 4. Timing functions: setTimeout()
// 5. JSON methods: JSON.stringify()

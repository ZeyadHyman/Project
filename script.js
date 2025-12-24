// javascript file

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
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
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

let cart = [];

const cartManager = {
  addItem: function (product) {
    let found = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        cart[i].quantity = cart[i].quantity + 1;
        found = true;
        break;
      }
    }
    if (!found) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
    this.updateCartDisplay();
    alert("Added to cart!");
  },

  removeItem: function (productId) {
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== productId) {
        newCart.push(cart[i]);
      }
    }
    cart = newCart;
    this.updateCartDisplay();
  },

  calculateTotal: function () {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price * cart[i].quantity;
    }
    return total;
  },

  updateCartDisplay: function () {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (cartCount) {
      cartCount.textContent = cart.length;
    }

    if (cartItems) {
      if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        let cartHTML = "";
        for (let i = 0; i < cart.length; i++) {
          let item = cart[i];
          cartHTML += "<div class='cart-item'>";
          cartHTML += "<div>" + item.name + "</div>";
          cartHTML +=
            "<div>$" + item.price.toFixed(2) + " x " + item.quantity + "</div>";
          cartHTML +=
            "<button onclick='cartManager.removeItem(" +
            item.id +
            ")'>Remove</button>";
          cartHTML += "</div>";
        }
        cartItems.innerHTML = cartHTML;
      }
    }

    if (cartTotal) {
      cartTotal.textContent = this.calculateTotal().toFixed(2);
    }
  },
};

function displayProducts() {
  const productsGrid = document.getElementById("products-grid");
  if (!productsGrid) return;

  productsGrid.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    let productHTML = "<img src='" + product.image + "' class='product-image'>";
    productHTML += "<div class='product-name'>" + product.name + "</div>";
    productHTML +=
      "<div class='product-price'>$" + product.price.toFixed(2) + "</div>";
    productHTML += "<a href='product-details.html?id=" + product.id + "'>";
    productHTML += "<button class='view-details-btn'>View Details</button>";
    productHTML += "</a>";
    productHTML +=
      "<button class='add-to-cart-btn' onclick='addProductToCart(" +
      i +
      ")'>Add to Cart</button>";

    productCard.innerHTML = productHTML;
    productsGrid.appendChild(productCard);
  }
}

function addProductToCart(productIndex) {
  if (productIndex >= 0 && productIndex < products.length) {
    cartManager.addItem(products[productIndex]);
  }
}

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

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "") {
    alert("Please enter your name");
    return false;
  }
  if (email === "") {
    alert("Please enter your email");
    return false;
  }
  if (message === "") {
    alert("Please write a message");
    return false;
  }
  return true;
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Thank you! Your message has been sent.");
    document.getElementById("contact-form").reset();
  }
}

function scrollToProducts() {
  const productsSection = document.getElementById("products");
  if (productsSection) {
    productsSection.scrollIntoView();
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayProducts();

  const cartIcon = document.getElementById("cart-icon");
  if (cartIcon) {
    cartIcon.onclick = openCartModal;
  }

  const closeModal = document.getElementById("close-modal");
  if (closeModal) {
    closeModal.onclick = closeCartModal;
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.onsubmit = handleFormSubmit;
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.onclick = function () {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert(
          "Thanks for your order! Total: $" +
            cartManager.calculateTotal().toFixed(2)
        );
        cart = [];
        cartManager.updateCartDisplay();
        closeCartModal();
      }
    };
  }

  cartManager.updateCartDisplay();
});

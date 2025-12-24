// product details page

document.addEventListener("DOMContentLoaded", function () {
  let productId = null;
  let url = window.location.href;
  let idIndex = url.indexOf("id=");
  if (idIndex !== -1) {
    let idString = url.substring(idIndex + 3);
    let endIndex = idString.indexOf("&");
    if (endIndex === -1) {
      endIndex = idString.length;
    }
    productId = parseInt(idString.substring(0, endIndex));
  }

  if (productId) {
    showProductDetails(productId);
  } else {
    alert("Product not found");
  }

  setupCart();
});

function showProductDetails(productId) {
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  if (!product) {
    alert("Product not found");
    return;
  }

  const detailsContainer = document.getElementById("product-details-container");
  if (detailsContainer) {
    let detailsHTML = "<div class='product-details-layout'>";
    detailsHTML += "<div><img src='" + product.image + "' class='details-image-large'></div>";
    detailsHTML += "<div>";
    detailsHTML += "<h1 class='details-product-name'>" + product.name + "</h1>";
    detailsHTML += "<div class='details-price'>$" + product.price.toFixed(2) + "</div>";
    detailsHTML += "<div class='stock-status'>In Stock</div>";
    detailsHTML += "<p>" + product.description + "</p>";
    detailsHTML += "<div class='details-specs'><h3>Specifications:</h3><ul>";
    for (let j = 0; j < product.specs.length; j++) {
      detailsHTML += "<li>" + product.specs[j] + "</li>";
    }
    detailsHTML += "</ul></div>";
    detailsHTML +=
      "<button class='add-to-cart-btn' onclick='addToCartFromDetails(" +
      product.id +
      ")'>Add to Cart</button>";
    detailsHTML += "</div></div>";
    detailsContainer.innerHTML = detailsHTML;
  }
}

function addToCartFromDetails(productId) {
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }
  if (product) {
    cartManager.addItem(product);
  }
}

function setupCart() {
  const cartIcon = document.getElementById("cart-icon");
  if (cartIcon) {
    cartIcon.onclick = openCartModal;
  }

  const closeModal = document.getElementById("close-modal");
  if (closeModal) {
    closeModal.onclick = closeCartModal;
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.onclick = function () {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert("Thanks for your order! Total: $" + cartManager.calculateTotal().toFixed(2));
        cart = [];
        cartManager.updateCartDisplay();
        closeCartModal();
      }
    };
  }

  cartManager.updateCartDisplay();
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

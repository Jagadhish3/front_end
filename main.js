let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartCount();
    alert(`${productName} added to cart!`);
}

function updateCartCount() {
    const cartLink = document.querySelector('.nav-links li a');
    cartLink.textContent = `Cart (${cart.length})`;
}

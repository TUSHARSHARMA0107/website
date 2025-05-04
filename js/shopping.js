let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

// Function to update the cart
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.textContent =` ${item.name} - ₹${item.price} x ${item.quantity}`;
        cartItems.appendChild(cartItem);
    });

    totalPriceElement.textContent = `Total:` `₹${totalPrice}`;
}

// Function for checkout (you can customize it)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    }
}
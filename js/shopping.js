let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart
document.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = parseInt(btn.dataset.price);
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    let item = cart.find(i => i.name === name);
    
    if (item) item.qty++;
    else cart.push({ name, price, qty: 1 });

    saveCart();
    renderCart();
}

// Remove From Cart
function removeFromCart(name) {
    cart = cart.filter(i => i.name !== name);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Render Cart
function renderCart() {
    const box = document.getElementById("cart-items");
    box.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        box.innerHTML += `
            <div class="cart-item">
                <span>${item.name} × ${item.qty}</span>
                <span>₹${item.price * item.qty}</span>
                <button onclick="removeFromCart('${item.name}')" class="remove-btn">×</button>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = `Total: ₹${total}`;
}
renderCart();

// Checkout
document.getElementById("checkoutBtn").onclick = function () {
    if (cart.length == 0) return alert("Cart is empty!");
    alert("Order placed successfully!");
    cart = [];
    saveCart();
    renderCart();
};
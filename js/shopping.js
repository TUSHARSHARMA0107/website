let cart = [];
let panel = document.getElementById("cartPanel");
let cartItems = document.getElementById("cartItems");

function addToCart(name, price) {
    cart.push({ name, price });

    updateCart();
    panel.classList.add("active");
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <span>₹${item.price}</span>
            </div>
        `;

        total += item.price;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

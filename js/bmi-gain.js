let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const list = document.getElementById('cartItems');
    const count = document.getElementById('cartCount');
    const totalEl = document.getElementById('cartTotal');

     list.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price}
            <span class="remove-btn" onclick="removeItem(${index})">❌</span>
        `;
        list.appendChild(li);
    });

    count.innerText = cart.length;
    totalEl.innerText = total.toFixed(2);
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}


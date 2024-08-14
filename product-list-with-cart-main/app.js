// Variables para almacenar los productos en el carrito
let cart = {};

// Función para actualizar el carrito
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    // Iterar sobre los elementos del carrito
    for (let productId in cart) {
        const quantity = cart[productId];
        const productElement = document.createElement('p');
        productElement.textContent = `Producto ${productId}: ${quantity}`;
        cartItemsContainer.appendChild(productElement);
    }

    // Actualizar la cantidad de productos en el título del carrito
    document.querySelector('.cart-quantity').textContent = Object.keys(cart).length;
}

// Evento para agregar al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.getAttribute('data-product-id');
        if (!cart[productId]) {
            cart[productId] = 0;
        }
        cart[productId]++;
        updateCart();
    });
});

// Evento para quitar del carrito
document.querySelectorAll('.remove-from-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.getAttribute('data-product-id');
        if (cart[productId]) {
            cart[productId]--;
            if (cart[productId] === 0) {
                delete cart[productId]; // Eliminar el producto si la cantidad es 0
            }
        }
        updateCart();
    });
});

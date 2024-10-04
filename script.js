// Simple JavaScript to handle cart functionality
let cartCount = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.user-options p:nth-child(2)').innerText = `Cart (${cartCount})`;
        alert("Product added to cart!");
    });
});

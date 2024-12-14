document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');
    let searchForm = document.querySelector('.search-form');
    let cartItemContainer = document.querySelector('.cart-item-container');
    let searchBtn = document.querySelector('#search-btn');
    let cartBtn = document.querySelector('#cart-btn');

    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
    };

    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
    };

    cartBtn.onclick = () => {
        cartItemContainer.classList.toggle('active');
    };

    let cartItemsCloseBtns = document.querySelectorAll('.cart-item .fa-times');
    cartItemsCloseBtns.forEach(btn => {
        btn.onclick = (event) => {
            event.target.closest('.cart-item').style.display = 'none';
        };
    });
});

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
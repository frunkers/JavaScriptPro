"use strict";

const products = [{
		id: 0,
		title: "Notebook",
		price: 20000
	},
	{
		id: 1,
		title: "Mouse",
		price: 1500
	},
	{
		id: 2,
		title: "Keyboard",
		price: 5000
	},
	{
		id: 3,
		title: "Gamepad",
		price: 4500
	}
];

const renderProduct = (title, price) => {
	return `<div class="product-item">
				  <h3 class='title'>${title}</h3>
				  <p>${price} руб.</p>
				  <button class="btn">Добавить в корзину</button>
			  </div>`;
}

const renderProducts = (list) => {
	list.forEach(item => {
		document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(item.title, item.price));
	});
}

renderProducts(products);

let cart = document.querySelector('.cart');
let cartBlock = document.querySelector('.cart-block');
cart.addEventListener('click', () => {
	cartBlock.style.display = 'block';
});

let cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', () => {
	cartBlock.style.display = 'none';
});

let btn = document.querySelectorAll('.btn');
btn.forEach(button => {
	button.addEventListener('click', event => {
		event.target.classList.toggle('in-cart');

		if (event.target.classList.contains('in-cart')) {
			cartBlock.insertAdjacentHTML('beforeend', `<span class="${event.target.parentNode.querySelector('h3').innerHTML} item">${event.target.parentNode.querySelector('h3').innerHTML}</span>`);
		} else if (!event.target.classList.contains('in-cart')) {
			cartBlock.querySelector(`span.${event.target.parentNode.querySelector('h3').innerHTML}`).remove();
		}
	})
});
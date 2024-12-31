"use strict";

// querySelector
// querySelectorAll // -> [] - foreach
// getElementById
// getElementsByClassName ->  недомасив який не має foreach
// getElementsByTagName
// маніпулювати з атрибутами
// classList: add/remove/toggle
// getAttribute/setAttribute/removeAttribute
// отримання інформації про елемент
// textContent
// змінити сам елемент чи його дочірні елементи
// створити елемент
// додавання подій
var modal = document.querySelector('.modal_window');

function toggleModal() {
  if (modal) {
    modal.classList.toggle('open');
  }
}

var cart = [{
  productName: 'potato',
  price: 20,
  type: 'red',
  isDiscount: true,
  amount: 0
}, {
  productName: 'meat',
  price: 240,
  type: 'beef',
  isDiscount: false
}, {
  productName: 'water',
  price: 40,
  type: 'sparkle',
  isDiscount: false
}, {
  productName: 'Vine',
  price: 400,
  type: 'red/dry',
  isDiscount: true
}, {
  productName: 'Tea',
  price: 80,
  type: 'black',
  isDiscount: true
}];

function renderCart() {
  var content = modal.querySelector('.content');
  var acc = '';
  cart.forEach(function (product) {
    acc = acc + "<div>Product: ".concat(product.productName, ", price: ").concat(product.price, "</div>");
  });
  content.innerHTML = acc;
} //const button = document.getElementById('modalShow');
//const button = window.modalShow;


var button = document.querySelector('#modalShow');
button.addEventListener('click', function () {
  toggleModal();
  renderCart();
});
var closeBtn = modal.querySelector('.close_modal');
closeBtn.addEventListener('click', function () {
  if (modal) {
    modal.classList.remove('open');
  }
});
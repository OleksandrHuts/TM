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
// innerHTML
// змінити сам елемент чи його дочірні елементи
// створити елемент
// додавання подій
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

function CE(tag, text, className, id) {
  var el = document.createElement(tag);
  if (className) el.className = className;
  if (id) el.setAttribute('id', id);
  if (text) el.textContent = text;
  return el;
}

function generateCart() {
  var cartContainer = document.querySelector('.cart');
  cart.forEach(function (product) {
    var productName = product.productName,
        price = product.price,
        type = product.type;
    var priceEl = CE('span', price, 'price');
    var nameEl = CE('span', productName, 'name');
    var typeEl = CE('span', type, 'type');
    var row = CE('div', '', 'product_row');
    row.append(nameEl);
    row.append(priceEl);
    row.append(typeEl);
    cartContainer.append(row);
  });
}

function generateHeaders() {
  var headers = [{
    title: 'Name',
    id: 'productName'
  }, {
    title: 'Price',
    id: 'price'
  }, {
    title: 'Type',
    id: 'type'
  }];
  var cartHeading = document.querySelector('.cart_heading');
  headers.forEach(function (heading) {
    var el = CE('button', heading.title, 'cart_header_button');
    el.addEventListener('click', function () {
      console.log('dont be afraid of JS!!');
    });
    cartHeading.append(el);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  generateHeaders();
  generateCart();
});
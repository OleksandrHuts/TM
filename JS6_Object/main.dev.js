"use strict";

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

function showProductData() {
  var list = document.querySelector('.cart_list');
  var str = '';
  cart.forEach(function (element) {
    for (var key in element) {
      str = str + "<li>".concat(key, ": ").concat(element[key], "</li>");
    }
  });
  list.innerHTML = str;
}

showProductData();
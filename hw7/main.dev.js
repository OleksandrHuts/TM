"use strict";

var groceriesList = [{
  name: 'poteto',
  amount: 2,
  bought: true
}, {
  name: 'apple',
  amount: 3,
  bought: false
}, {
  name: 'water',
  amount: 5,
  bought: false
}, {
  name: 'banana',
  amount: 1,
  bought: true
}];

function dispayGroceries() {
  groceriesList.sort(function (a, b) {
    return a.bought - b.bought;
  }); //groceriesList.forEach((element) => console.log(element));

  console.log(groceriesList);
} //dispayGroceries();


function addItem(productName, amount) {
  var productIndex = groceriesList.findIndex(function (element) {
    return element.name === productName;
  });

  if (productIndex >= 0) {
    groceriesList[productIndex].amount = groceriesList[productIndex].amount + amount;
  } else {
    var newProduct = {
      name: productName,
      amount: amount,
      bought: false
    };
    groceriesList.push(newProduct);
  }
}

addItem('plum', 2);
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
}]; // 1. Створюємо ф, яка виводить всі елементи масиву
// 2. Робимо сортування масиву
// 3. Створити ф, яка шукає індекс кожного продукту
// 4. Перевірити чи є продукт: додати кількість, якщо не має: додати новий об"єкт

function newArray() {
  groceriesList.sort(function (a, b) {
    return a.bought - b.bought;
  });
  groceriesList.forEach(function (el) {
    return console.log(el);
  });
}

function addItem(produktName, amount) {
  var newIndex = groceriesList.findIndex(function (el) {
    return el.name === produktName;
  });

  if (newIndex >= 0) {
    groceriesList[newIndex].amount = groceriesList[newIndex].amount + amount;
  } else {
    var newObject = {
      name: produktName,
      amount: amount,
      bought: false
    };
    groceriesList.push(newObject);
  }
}
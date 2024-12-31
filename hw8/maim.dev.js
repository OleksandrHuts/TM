"use strict";

var time = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  secondsInDay: 86400,
  showTime: function showTime() {
    var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hours;
    var minutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.minutes;
    var seconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.seconds;
    console.log("".concat(hours, " : ").concat(minutes, " : ").concat(seconds));
  },
  getAllTimeInSeconds: function getAllTimeInSeconds() {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  },
  changeSeconds: function changeSeconds(seconds) {
    //весь наявний час переведений у секунди
    var allTimeInSeconds = this.getAllTimeInSeconds() + seconds; //this.seconds = allTimeInSeconds;

    this.convertFromSecondsToTime(allTimeInSeconds);
  },
  convertFromSecondsToTime: function convertFromSecondsToTime(allTimeInSeconds) {
    var localTime = allTimeInSeconds; // 180000
    //якщо секунд більше ніж 86400 - новий день

    if (localTime >= this.secondsInDay) {
      this.days = Math.trunc(localTime / this.secondsInDay); //2

      localTime = localTime - this.days * this.secondsInDay; // 4600
    } //якщо секунд більше ніж 3600 і менше ніж 86400 - нова година


    if (localTime >= 3600) {
      this.hours = Math.trunc(localTime / 3600);
      localTime = localTime - this.hours * 3600;
    } //якщо секунд більше 60 і менше 3600 - нова хвилина


    if (localTime >= 60) {
      this.minutes = Math.trunc(localTime / 60);
      localTime = localTime - this.minutes * 60;
    } //інакше просто додати секунди


    this.seconds = localTime;
  }
}; //window.location.href = 'https://google.com'
// setTimeout(() => {
//     console.log('5 секунд минуло');
// }, 5000)
// let seconds = 0;
// setInterval(() => {
//     console.log(`Минуло ${seconds} секунд`);
//     seconds++;
// }, 1000);
// const container = document.createElement('div');
// container.classList.add('container');
// container.textContent = "I'm container";
// const target = document.querySelector('.target');
// target.prepend(container);

var groceriesList = [{
  name: 'potato',
  amount: 2,
  pricePerItem: 40
}, {
  name: 'apple',
  amount: 3,
  pricePerItem: 60
}, {
  name: 'water',
  amount: 5,
  pricePerItem: 10
}, {
  name: 'banana',
  amount: 1,
  pricePerItem: 90
}];

function printReceipt() {
  groceriesList.forEach(function (product) {
    console.log("Name: ".concat(product.name, ", Price per item: ").concat(product.pricePerItem, ", Total: ").concat(product.pricePerItem * product.amount));
  });
}

function calculateTotal() {
  var total = 0;
  groceriesList.forEach(function (product) {
    total = total + product.pricePerItem * product.amount;
  });
  return total;
}

function findMostExpensive() {
  groceriesList.sort(function (a, b) {
    return b.pricePerItem - a.pricePerItem;
  });
  return groceriesList[0];
}
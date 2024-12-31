"use strict";

var time = {
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
    var allTimeInSeconds = this.getAllTimeInSeconds() + seconds;
    this.seconds = allTimeInSeconds;
  },
  convertFromSecondsToTime: function convertFromSecondsToTime(allTimeInSeconds) {//якщо секунд більше ніж 86400 - новий день
    //якщо секунд більше ніж 3600 і менше ніж 86400 - нова година
    //якщо секунд більше 60 і менше 3600 - нова хвилина
    //інакше просто додати секунди
  }
};
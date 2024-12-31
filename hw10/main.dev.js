"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

function winModal() {
  var modal = document.querySelector('.modal_window');

  if (modal) {
    modal.classList.toggle('open');
  }
}

function addContent() {
  var content = document.querySelector('.content');
  var arr = '';
  playList.forEach(function (product) {
    arr = arr + "<div>Author: ".concat(product.author, ", Song:").concat(product.song, "</div>");
  });
  content.innerHTML = arr;
}

var button = document.querySelector('#button_show');
button.addEventListener('click', function () {
  winModal();
  addContent();
});
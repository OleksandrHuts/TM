
// var playList = [
//     {
//      author: "LED ZEPPELIN",
//      song:"STAIRWAY TO HEAVEN"
//     },
//     {
//      author: "QUEEN",
//      song:"BOHEMIAN RHAPSODY"
//     },
//     {
//      author: "LYNYRD SKYNYRD",
//      song:"FREE BIRD"
//     },
//     {
//      author: "DEEP PURPLE",
//      song:"SMOKE ON THE WATER"
//     },
//     {
//      author: "JIMI HENDRIX",
//      song:"ALL ALONG THE WATCHTOWER"
//     },
//     {
//      author: "AC/DC",
//      song:"BACK IN BLACK"
//     },
//     {
//      author: "QUEEN",
//      song:"WE WILL ROCK YOU"
//     },
//     {
//      author: "METALLICA",
//      song:"ENTER SANDMAN"
//     }
//     ];



// function winModal() {
//     const modal = document.querySelector('.modal_window');
//     if(modal) {
//         modal.classList.toggle('open');
//     }
// }

// const button = document.querySelector('#button_show');
// button.addEventListener('click', ()=> {
//     winModal(); 
//     addContent();
// });

// function addContent() {
//     const content = document.querySelector('.content');
//     let arr = '';
//     playList.forEach(product => {
//         arr = arr + `<div>Author: ${product.author}, Song:${product.song}</div>`
//     });
//     content.innerHTML = arr;
// }


// const prices = [10, 20, 30, 40, 50];

// function countSum(value) {
//     let count = 0;
//     for(let i = 0; i < value.langth; i++) {
//         count = count + value[i];
//     }
//     return count;
// }
// let All = countSum(prices);
// console.log(All);


// function getSum(prices) {
//     let sum = 0;
  
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
  
//     }
  
//     return sum;
//   }
//   let All = getSum(numbers);
// console.log(All);

// const numbers = [10, 20, 30, 40, 50];

// function maxNumber(arr) {
//     let max = arr[0];
//     if(max === 0) {
//         return 0;
//     }
//     for (const sum of arr) {
//         if(sum > max) {
//             max = sum;
//         }
//     }
// return max;
// }

// console.log(maxNumber(numbers));

const text = 'one two three four five';
const arr = text.split(' ');

console.log(arr);
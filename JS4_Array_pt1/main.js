const arr = [1, 4, 34, 23, 5, 654, 3, 23, 445, 87, 6, 5, 3, 7, 16];

//!4 = 1*2*3*4

const arrSimple = [];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let zeroAmount = 0;

    for (let j = 1; j <= element; j++) {
        if (!(element % j)) {
            zeroAmount++;
        }
    }

    if(zeroAmount <= 2) {
        arrSimple.push(element)
    }
}

//console.log(arrSimple);


//Add/remove element from array:
// push, pop, shift, unshift

// push - add el to the end
// unshift - add el to the beginnning
// shift - remove first el
// pop - remove last el

// let arrCopy = [...arr];

// arrCopy[0] = 'frog';

// console.log('arrCopy: ', arrCopy);
// console.log('arr: ', arr);

//console.log(arr[arr.length - 1]);

//console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//         for(let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     } else {
//         console.log(arr[i]);
//     }
// }
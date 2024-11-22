const arr = [2, 3, 5];
const arr2 = [21, 23, 35];

const arrFactorial = [];

const getFactorial = function(element) {
    let factirial = 1;
    for (let j = 1; j <= element; j++) {
        factirial = factirial * j;
    }
    return factirial;
}

//arr.forEach(element => arrFactorial.push(getFactorial(element)));
arr2.forEach(element => arrFactorial.push(getFactorial(element)));

console.log(arrFactorial);


// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     arrFactorial.push(getFactorial(element));
// }



//Function expression
// const getSum = function(num1, num2) {
//     return num1 + num2;
// }

// Function declaration
// function getSum1(num1, num2) {
//     return num1 + num2;
// }

//Arrow
// (num1, num2) => {
//     return num1 + num2;
// }



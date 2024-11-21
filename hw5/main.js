const arr = [2, 3, 5];

const arrFactorial = [];



for(let i = 0; i < arr.length; i++) {
    let element = arr[i];


let n = element;
let factirial = 1;
    for(let j = 1; j <= n; j++) {
        factirial = factirial * j;
    
    }
    arrFactorial.push(factirial)
}
console.log(arrFactorial);
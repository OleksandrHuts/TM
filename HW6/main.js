
let arr1 = ['tomato', 'banana', 'cucumber'];

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);

for (let i = arr1.length; i >= 0; i--) {
   console.log(arr1[i]);
}

arr1.forEach(element => {
    console.log(element)
});

// let arr = prompt('Ведіть назву');
// const index = arr1.findIndex(el => el === arr);

//index >= 0 ? alert('Element has been found at position: ' + index) : alert('There is no such element')

// if(index >= 0) {
//     alert('Element has been found at position: ' + index)
// } else {
//     alert('There is no such element')
// }
// if(arr.includes('tomato')) {
//     alert(arr1.findIndex((el) => el === 'tomato'));
// } else if(arr.includes('banana')) {
//     alert(arr1.findIndex((el) => el === 'banana'));
// } else if(arr.includes('cucumber')) {
//     alert(arr1.findIndex((el) => el === 'cucumber'));
// } else {
//     alert('Not element');
// }
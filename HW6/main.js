
let arr1 = ['tomato', 'banana', 'cucumber'];

let arr = prompt('Ведіть назву');
if(arr.includes('tomato')) {
    alert(arr1.findIndex((el) => el === 'tomato'));
} else if(arr.includes('banana')) {
    alert(arr1.findIndex((el) => el === 'banana'));
} else if(arr.includes('cucumber')) {
    alert(arr1.findIndex((el) => el === 'cucumber'));
} else {
    alert('Not element');
}
// const arr = ['potato', 'tomato', 'korn'];
// const arrNum = [10, 5.5, 34, 120];

// arrNum.sort((a, b) => {
//     return b - a;
// })

// to check if element is present in array: arr.includes('Tomato');
// get element index arr.findIndex((el) => el === 'tomato');
// get element arr.find((el) => el === 'tomato');

// console.log(arrNum.find((el) => el > 10 && el < 100));

// arr.forEach((el, i) => {
//     console.log(`Element number ${i+1}: `, el);
// });

//splice
// cart.splice(2,1, 'new val') -> replace 1 element with a new one at index 2
// cart.splice(2, 0, 'new val') -> add new val at index 2
// cart.splice(2,1) -> remove element at index 2


const cart = [
    {
        productName: 'potato',
        price: 20,
        type: 'red',
        isDiscount: true,
        amount: 0,
    },
    {
        productName: 'meat',
        price: 240,
        type: 'beef',
        isDiscount: false
    },
    {
        productName: 'water',
        price: 40,
        type: 'sparkle',
        isDiscount: false
    },
    {
        productName: 'Vine',
        price: 400,
        type: 'red/dry',
        isDiscount: true
    },
    {
        productName: 'Tea',
        price: 80,
        type: 'black',
        isDiscount: true
    }
]


const removeItem = function(name) {
    const index = cart.findIndex(el => el.productName.toLowerCase() === name.toLowerCase());
    if(index < 0) {
        return false;
    }

    cart.splice(index, 1);
    generateList();
}

//removeItem('vine');

const filteredProductsArray = cart.filter(el => el.isDiscount);

function generateList() {
    const list = document.querySelector('.cart_list');

    cart.sort((a, b) => {
        return a.price - b.price
    })

    let str = '';

    cart.forEach(product => {
        str = str + `<li>${product.productName} / ${product.price}</li>`
    });

    //const meatIndex = cart.findIndex(el => el.productName === 'meat');

    list.innerHTML = str;
}

generateList();


//map

// const newArr = cart.map(el => {
//     return el;
// })
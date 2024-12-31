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

function showProductData() {
    const list = document.querySelector('.cart_list');

    let str = '';

    cart.forEach(element => {
        for (const key in element) {
            str = str + `<li>${key}: ${element[key]}</li>`
        }
    });

    list.innerHTML = str;
}

showProductData();
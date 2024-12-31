// querySelector
// querySelectorAll // -> [] - foreach

// getElementById
// getElementsByClassName ->  недомасив який не має foreach
// getElementsByTagName

// маніпулювати з атрибутами
// classList: add/remove/toggle
// getAttribute/setAttribute/removeAttribute

// отримання інформації про елемент
// textContent
// innerHTML


// змінити сам елемент чи його дочірні елементи
// створити елемент
// додавання подій

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
];

function CE(tag, text, className, id) {
    const el = document.createElement(tag);
    if(className) el.className = className;
    if(id) el.setAttribute('id', id);
    if(text) el.textContent = text;

    return el;
}

function generateCart() {
    const cartContainer = document.querySelector('.cart');

    cart.forEach(product => {
        const {productName, price, type} = product;
        
        const priceEl = CE('span', price, 'price');
        const nameEl = CE('span', productName, 'name');
        const typeEl = CE('span', type, 'type');
        const row = CE('div', '', 'product_row');

        row.append(nameEl);
        row.append(priceEl);
        row.append(typeEl);

        cartContainer.append(row);
    })
}

function generateHeaders() {
    const headers = [
        {
            title: 'Name',
            id: 'productName'
        },
        {
            title: 'Price',
            id: 'price'
        },
        {
            title: 'Type',
            id: 'type'
        },
    ];

    const cartHeading = document.querySelector('.cart_heading');
    headers.forEach(heading => {
        const el = CE('button', heading.title, 'cart_header_button');
        el.addEventListener('click', () => {
            console.log('dont be afraid of JS!!');
        })
        cartHeading.append(el);
    })
}


document.addEventListener('DOMContentLoaded', () => {
    generateHeaders();
    generateCart();
})
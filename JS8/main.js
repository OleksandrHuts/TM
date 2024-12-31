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


// змінити сам елемент чи його дочірні елементи
// створити елемент
// додавання подій

const modal = document.querySelector('.modal_window');

function toggleModal() {
    if (modal) {
        modal.classList.toggle('open');
    }
}

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

function renderCart() {
    const content = modal.querySelector('.content');
    let acc = '';

    cart.forEach(product => {
        acc = acc + `<div>Product: ${product.productName}, price: ${product.price}</div>`
    });

    content.innerHTML = acc;
}

//const button = document.getElementById('modalShow');
//const button = window.modalShow;
const button = document.querySelector('#modalShow');
button.addEventListener('click', ()=> {
    toggleModal();
    renderCart();
});

const closeBtn = modal.querySelector('.close_modal');
closeBtn.addEventListener('click', ()=> {
    if (modal) {
        modal.classList.remove('open')
    }
});
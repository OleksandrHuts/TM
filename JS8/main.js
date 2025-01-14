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
    if (className) el.className = className;
    if (id) el.setAttribute('id', id);
    if (text) el.textContent = text;

    return el;
}

function generateCart() {
    const cartContainer = document.querySelector('.cart_content');
    cartContainer.innerHTML = ''

    cart.forEach(product => {
        const { productName, price, type } = product;

        // Product info
        const priceEl = CE('span', price, 'price');
        const nameEl = CE('span', productName, 'name');
        const typeEl = CE('span', type, 'type');
        const row = CE('div', '', 'product_row');

        const actionsWrapper = CE('span', '', 'actions');
        // DELETE button
        const deleteButton = CE('button', '', 'delete_button');
        deleteButton.setAttribute('data-name', productName);
        deleteButton.addEventListener('click', event => {
            deleteItem(event.target.dataset.name);
            generateCart();
        });

        //EDIT button
        const editButton = CE('button', '', 'edit_button');
        editButton.setAttribute('data-name', productName);
        editButton.addEventListener('click', event => {
            showEditModal(event.target.dataset.name);
        });

        actionsWrapper.append(deleteButton);
        actionsWrapper.append(editButton);

        row.append(nameEl);
        row.append(priceEl);
        row.append(typeEl);
        row.append(actionsWrapper);

        cartContainer.append(row);
    })
}

const modal = document.querySelector('.modal_window');

function showEditModal(productName) {
    const targetEl = cart.find(el => el.productName === productName);
    modal.classList.add('open');
    modal.querySelector('#product-name').value = targetEl.productName;
    modal.querySelector('#product-price').value = targetEl.price;
    modal.querySelector('#product-is-discount').checked = targetEl.is;

    document.querySelector('.save').addEventListener('click', () => {
        editItem(targetEl);
    })
}

function editItem(targetEl) {
    targetEl.productName = modal.querySelector('#product-name').value;
    targetEl.price = modal.querySelector('#product-price').value;
    targetEl.isDiscount = modal.querySelector('#product-is-discount').checked;

    generateCart();
    modal.classList.remove('open');
}

function deleteItem(productName) {
    const targetIndex = cart.findIndex(el => el.productName === productName);

    if(targetIndex >= 0) {
        cart.splice(targetIndex, 1);
    }
}

function generateHeaders() {
    const headers = [
        {
            title: 'Name',
            id: 'productName',
            dataType: 'string'
        },
        {
            title: 'Price',
            id: 'price',
            dataType: 'number'
        },
        {
            title: 'Type',
            id: 'type',
            dataType: 'string'
        },
    ];

    const cartHeading = document.querySelector('.cart_heading');
    headers.forEach(heading => {
        const el = CE('button', heading.title, 'cart_header_button');
        el.setAttribute('data-id', heading.id);
        el.setAttribute('data-type', heading.dataType);

        el.addEventListener('click', (event) => {
            const button = event.target;
            const dataId = button.getAttribute('data-id')//.dataset.id;
            const dataType = button.getAttribute('data-type')//.dataset.type;//string || number
            
            sortCart(dataId, dataType);
        })
        cartHeading.prepend(el);
    })
}

function sortCart(fieldName, dataType) {
    if(dataType === 'number') {
        cart.sort((a, b) => {
            return b[fieldName] - a[fieldName]
        });
    } else {
        cart.sort((a, b) => {
            const nameA = a[fieldName].toUpperCase();
            const nameB = b[fieldName].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }

    generateCart();
}


document.addEventListener('DOMContentLoaded', () => {
    generateHeaders();
    generateCart();
})
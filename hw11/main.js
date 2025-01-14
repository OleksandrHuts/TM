const users = [
    {
        name: 'Tomas Hardy',
        email: 'thomashardy@ukr.net',
        adress: '89 Chiaroscuro Rd, Portland, USA',
        phone: 171555222
    },
    {
        name: 'Domoniqye Parrier',
        email: 'dominiqueperrier@ukr.net',
        adress: 'Obere Str. 57, Berlin, Germany',
        phone: 3135555735
    },
    {
        name: 'Maria Anders',
        email: 'mariaanders@ukr.net',
        adress: '25, rue Lauriston, Paris, France',
        phone: 5035559931
    },
    {
        name: 'Fran Wilson',
        email: 'franwilson@ukr.net',
        adress: 'C/ Araquil, 67, Madrid, Spain',
        phone: 2046195731
    },
    {
        name: 'Martin Blank',
        email: 'martinblank@ukr.net',
        adress: 'Via Monte Bianco 34, Turin, Italy',
        phone: 4806312097
    }
];

function CE(tag, taxt, className, id) {
    const el = document.createElement(tag);
    if (taxt) el.textContent = taxt;
    if (className) el.className = className;
    if (id) el.setAttribute('id', id);
    return el;
}

function generateCart() {
    const userCart = document.querySelector('.user_content');
    userCart.innerHTML = '';

    users.forEach(element => {
        const { name, email, adress, phone } = element;
        // const text = `${name}, ${email}, ${adress}, ${phone}`
        const nameEl = CE('span', name, '.name');
        const emailEl = CE('span', email, 'email');
        const adressEl = CE('span', adress, 'adress');
        const phoneEl = CE('span', phone, 'phone');
        const row = CE('div', '', 'user_row');
        row.append(nameEl);
        row.append(emailEl);
        row.append(adressEl);
        row.append(phoneEl);
        userCart.append(row);
    })
}
function generateHeaders() {
    const headers = [
        {
            title: 'Name',
            id: 'nameId',
            dataType: 'string'
        },
        {
            title: 'Email',
            id: 'emailId',
            dataType: 'string'
        },
        {
            title: 'Adress',
            id: 'adressId',
            dataType: 'string'
        },
        {
            title: 'Phone',
            id: 'phoneId',
            dataType: 'number'
        },
    ];
    const userHeading = document.querySelector('.user_heading');
    headers.forEach(heading => {
        const el = CE('button', heading.title, 'user_header_button');
        el.setAttribute('data-id', heading.id);
        el.setAttribute('data-type', heading.dataType);
        el.addEventListener('click', (event) => {
            const dataId = event.target.getAttribute('data-id');
            const dataType = event.target.getAttribute('data-type');
            sortCart(dataId, dataType);
        })
        userHeading.append(el);
    })
}

function sortCart(fildName, fildType) {
    if (fildType === 'number') {
        users.sort((a, b) => {
            return b[fildName] - a[fildName]
        });
    } else {
        users.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nsmeB) {
                return 1;
            }
            return 0;
        });
    }


    generateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    generateHeaders()
    generateCart();
})
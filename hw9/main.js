const shoppingReceipt = [
    {name: 'Banana',
    amoumt: 2,
    pricePerltem: 40
    },
    {name: 'Apple',
    amoumt: 5,
    pricePerltem: 46
    },
    {name: 'Tomato',
    amoumt: 7,
    pricePerltem: 90
    },
]


function printReceipt() {
    shoppingReceipt.forEach((element) => {
        console.log(`Найменування: ${element.name}`, `Кількість: ${element.amoumt}`, `Ціна за одиницю: ${element.pricePerltem}`)
    });
}


function calculateTotal() {
    const total = this.amoumt * this.pricePerltem;
    return total;
}

function findMostExpensiveItem() {
    
}
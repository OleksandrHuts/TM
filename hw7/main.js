const groceriesList = [
    {
        name: 'poteto',
        amount: 2,
        bought: true,
    },
    {
        name: 'apple',
        amount: 3,
        bought: false,
    },
    {
        name: 'water',
        amount: 5,
        bought: false,
    },
    {
        name: 'banana',
        amount: 1,
        bought: true
    }
]

function dispayGroceries() {
    groceriesList.sort((a, b) => {
        return a.bought - b.bought
    })
    //groceriesList.forEach((element) => console.log(element));
    console.log(groceriesList);
    
}
//dispayGroceries();

function addItem(productName, amount) {
    let productIndex = groceriesList.findIndex(element => element.name === productName);
    
    if (productIndex >= 0) {
        groceriesList[productIndex].amount = groceriesList[productIndex].amount + amount
    } else {
        const newProduct = {
            name: productName,
            amount,
            bought: false
        }
        groceriesList.push(newProduct)
    }
}
addItem('plum', 2);
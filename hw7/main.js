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
    groceriesList.forEach((element) => console.log(element));
}
dispayGroceries();

function addItem(productName, amount) {
let product = groceriesList.find(element => element.name === productName);
if(product) {
    groceriesList.amount = groceriesList.amount + amount
} else {
    groceriesList.push(productName, amount)
}
}
addItem('apple', 2);
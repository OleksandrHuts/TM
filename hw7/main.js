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

<<<<<<< HEAD
// 1. Створюємо ф, яка виводить всі елементи масиву
// 2. Робимо сортування масиву
// 3. Створити ф, яка шукає індекс кожного продукту
// 4. Перевірити чи є продукт: додати кількість, якщо не має: додати новий об"єкт

function newArray() {

    groceriesList.sort((a, b) => a.bought - b.bought);
    
    groceriesList.forEach(el => console.log(el));
}

function addItem(produktName, amount) {
    const newIndex = groceriesList.findIndex(el => el.name === produktName) 
        if(newIndex >= 0) {
            groceriesList[newIndex].amount = groceriesList[newIndex].amount + amount;
        }else {
            const newObject = {
                name: produktName,
                amount,
                bought: false
            }
            groceriesList.push(newObject);
        }
    
}
=======
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
>>>>>>> c68d138daecaa8e82e022fb0f40d63f5e9f1339f

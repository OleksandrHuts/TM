//API

//fetch('./data.json', {method: 'GET'})

function getUserName() {
    const a = new Promise((resolve) => {
        setTimeout(()=> {
            resolve('Alex');
        }, 4000)
    });

    return a;
}

async function sayHello() {
    const userName = await getUserName();
    console.log(`Hello, ${userName}`);
}

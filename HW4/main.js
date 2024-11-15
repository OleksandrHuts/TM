let numb1 = parseInt(prompt('Enter number 1'));
let numb2 = parseInt(prompt('Enter number 2'));

while (!numb1) {
    numb1 = parseInt(prompt('Enter number 1'));
}

while (!numb2) {
    numb1 = parseInt(prompt('Enter number 2'));
}

let action = prompt('Enter action');
let result = null;

switch (action) {
    case '+':
        result = numb1 + numb2;
        break;
    case '-':
        result = numb1 - numb2;
        break;
    case '*':
        result = numb1 * numb2;
        break;
    case '/':
        result = numb1 / numb2;
        break;
}
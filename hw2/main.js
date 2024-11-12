//1//

/*let sum = prompt('Enter namber');
if(sum < 1000 && sum >100 && !isNaN(sum)) {
    alert(sum);
} else {
    alert('Enter valid namber');
}
let a = parseInt(sum / 100);
let b = parseInt(sum % 100 / 10);
let c = parseInt(sum % 10);

if(a == b || a == c || b == c) {
    alert('Your nambers are the same ');
 } else {
     alert('Your nambers are not the same ');
 }*/

//2//
let sum = prompt('Enter yuor sum');

let currency = prompt('Enter yuor currency');
const valUSD = 41;
const valEUR = 44;
const valPLN = 10;


if(!isNaN(sum) && isNaN(currency)) {
        if(currency == 'USD') {
            alert(sum * valUSD);
        }
        if(currency == 'EUR') {
            alert(sum * valEUR);
        }
        if(currency == 'PLN') {
            alert(sum * valPLN);
        }
    } else {
    alert('Enter valid sum or currency')
}





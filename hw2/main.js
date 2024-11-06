//1//

let sum = prompt('Enter namber');
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
 }

 
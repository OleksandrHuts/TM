function pokaziLalka() {
    console.log(this.name);
}

let lalka1 = {
    name: 'Anna',
    color: 'blue',
    pokazi: pokaziLalka
};
let lalka2 = {
    name: 'Olga',
    color: 'red',
    pokazi: pokaziLalka
}

lalka1.pokazi();
lalka2.pokazi();

function showCar() {
    console.log(this.name);
    console.log(this.color);
    console.log(this.namber);
}

let car1 = {
    name: 'Volt',
    color: 'white',
    namber: 234567,
    show: showCar
}
let car2 = {
    name: 'BMV',
    color: 'rad',
    namber: 984243,
    show: showCar
}

car1.show();
car2.show();



let person = {
    name: 'Ira',
    age: 23,
    namber: 543599,
    showR: function() {
        console.log(this.name);
    }
};
person.showR();

var f = function() {
    console.log(2);
  }
  
  var execute = function(f) {
    setTimeout(f, 1000);
  }
  execute(f);  


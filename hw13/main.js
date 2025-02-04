class Marker {
    constructor(color, countChornilo = 100) {
        this.color = color;
        this.countChornilo = countChornilo;
    }
    drow(text) {
        let row = '';
        for (let i of text) {
            if (this.countChornilo <= 0) {
                break;
            }
row += i;
if(i !== '') {
    this.countChornilo -= 0.5;
}
        }
       

    }
}
const blueMarker = new Marker('blue');
blueMarker.drow('This is blue marker');
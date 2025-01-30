class Circle extends Square {
    constructor(width, color, left, top) {
        super(width, color, left, top)
    }

    draw() {
        document.body.insertAdjacentHTML('afterbegin', `
            <div style="
                width: ${this.width}px;
                height: ${this.height}px;
                background-color: ${this.color};
                position: absolute;
                border-radius: 50%;
                left: ${this.left}px;
                top: ${this.top}px;
            "></div>
            `);
    }
}


const myArray = new Array(1,23,43,5);

const myObj = new Object({asd: 123});

const a = new Number(5);

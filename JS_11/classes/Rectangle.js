class Rectangle {
    constructor(width, height, color, left, top) {
        this._width = width;
        this.height = height;
        this.color = color;
        this.left = left;
        this.top = top;
    }

    draw() {
        document.body.insertAdjacentHTML('afterbegin', `
            <div style="
                width: ${this.width}px;
                height: ${this.height}px;
                background-color: ${this.color};
                position: absolute;
                left: ${this.left}px;
                top: ${this.top}px;
            "></div>
            `);
    }

    get width() {
        return this._width;
    }
}

//const rect1 = new Rectangle(250, 120, 'tomato', 50, 150);
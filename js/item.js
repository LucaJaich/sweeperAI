class Item {
    constructor(image, x, y, size) {
        this.image = loadImage("media/"+image+".png");
        this.x = x;
        this.y = y;
        this.size = size;
    }

    show() {
        image(this.image, this.x, this.y, this.size, this.size);
    }

    onClick() {
        this.image = loadImage("media/emp.png");
        this.show();
    }

    onRelease() {
        this.image = loadImage("media/1.png")
    }
}
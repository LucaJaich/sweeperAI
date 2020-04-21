class Item {
    constructor(image, x, y, size) {
        this.image = loadImage("media/"+image+".png");
        this.val = "def";
        this.hidVal = 0;
        this.x = x;
        this.y = y;
        this.xPos = Math.floor(this.x / this.size);
        this.yPos = Math.floor(this.y / this.size);
        this.size = size;
        this.clicked = false;
        this.flag = false;
    }

    show() {
        image(this.image, this.x, this.y, this.size, this.size);
    }

    onClick() {
        if (!this.flag){
            this.image = loadImage("media/0.png");
            this.show();
        }
    }

    onRightClick() {
        if (this.val == "def") {
            if (!this.flag) {this.image = loadImage("media/flag.png"); this.show();}
            else {this.image = loadImage("media/def.png"); this.show();}
            this.flag = !this.flag; 
        }
        
    }

    onRelease() {
        this.val = this.hidVal
        this.image = loadImage("media/"+this.val+".png")
    }
}
class Board {
    constructor(_w, _h, _size) {
        this.size = _size;
        this.w = _w;
        this.h = _h;
        this.grid = [];
    }
    
    buildBoard() {
        let x = 0, y = 0, i, j;
        let row = [];
        for (i = 0; i < this.h; i++) {
            row = [];
            for (j = 0; j < this.w; j++) {
                row.push(new Item("def", x, y, this.size));
                x += this.size;
            }
            this.grid.push(row);
            x = 0;
            y += this.size;
        }
    }

    showBoard() {
        let i, j;
        for (i = 0; i < this.h; i++) {
            for (j = 0; j < this.w; j++) {
                this.grid[i][j].show();
            }
        }
    }

    handleClick() {
        let i = Math.floor(mouseX / this.size), j = Math.floor(mouseY / this.size);
        this.grid[j][i].onClick();
    }

    handleRelease() {
        let i = Math.floor(mouseX / this.size), j = Math.floor(mouseY / this.size);
        this.grid[j][i].onRelease();
    }
}
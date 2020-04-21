class Board {
    constructor(w, h, size, mines) {
        this.size = size;
        this.w = w;
        this.h = h;
        this.grid = [];
        this.mines = [];
        this.first = false;
        this.cantMines = mines
        this.test = 0;
    }
    
    buildBoard() {
        let x = 0, y = 0;
        let row = [];
        for (let i = 0; i < this.h; i++) {
            row = [];
            for (let j = 0; j < this.w; j++) {
                row.push(new Item("def", x, y, this.size));
                x += this.size;
            }
            this.grid.push(row);
            x = 0;
            y += this.size;
        }
    }

    showBoard() {
        for (let i = 0; i < this.h; i++) {
            for (let j = 0; j < this.w; j++) {
                this.grid[i][j].show();
            }
        }
    }

    setMines() {
        let used = [];
        let x, y;
        for (let i = 0; i < this.cantMines; i++) {
            while (true) {
                x = Math.floor(Math.random() * this.w); 
                y = Math.floor(Math.random() * this.h);
                if (!used.includes([x, y])) {
                    used.push([x, y]);
                    this.grid[y][x].hidVal = "bomb";
                    break
                } else {console.log("hey")}
            }
        }
        this.mines = used;
    }

    setHidVal(x, y) {
        let item;
        let sets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]]
        for (let i in sets) {
            try {
                if (this.grid[y + sets[i][1]][x + sets[i][0]].hidVal != "bomb") { 
                    this.grid[y + sets[i][1]][x + sets[i][0]].hidVal += 1; 
                }
            } catch (error) {}
            
        }
    }

    setBoard() {
        this.setMines();
        for (let i in this.mines) {
            console.log(this.mines[i][0], this.mines[i][1]);
            this.setHidVal(this.mines[i][0], this.mines[i][1]);
        }
    }

    handleClick() {
        let i = Math.floor(mouseX / this.size), j = Math.floor(mouseY / this.size);
        if (!this.grid[j][i].clicked) { 
            if (mouseButton === LEFT) { this.grid[j][i].onClick(); }
            else if (mouseButton === RIGHT) { this.grid[j][i].onRightClick(); }
        }
    }

    handleRelease() {
        if (!this.first) { console.log("hey"); this.setBoard(); this.first = true; }
        let i = Math.floor(mouseX / this.size), j = Math.floor(mouseY / this.size);
        if (mouseButton === LEFT) {
            if (!this.grid[j][i].clicked && !this.grid[j][i].flag) { this.grid[j][i].onRelease(); this.grid[j][i].clicked = true; }
        }
    }
}
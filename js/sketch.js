let im1, im2, def;

function setup() {
    createCanvas(640, 480);
    board = new Board(16, 16, 22);
    board.buildBoard();
    
}

function draw() {
    board.showBoard();
}

function mousePressed() {
    this.board.handleClick();
}

function mouseReleased() {
    this.board.handleRelease();
}
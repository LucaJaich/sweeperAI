document.oncontextmenu = function() {
    return false;
}

let im1, im2, def;

function setup() {
    createCanvas(640, 480);
    board = new Board(9, 9, 22, 10);
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
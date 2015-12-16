class Grid {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.init();
    }

    init() {
        this.cells = [];
        this.initRows();
        this.initCols();
    }

    initRows() {
        for (let row = 0; row < this.dimensions.rows; row += 1) {
            this.cells[row] = [];
        }
    }

    initCols() {
        for (let row = 0; row < this.dimensions.rows; row += 1) {
        for (let col = 0; col < this.dimensions.cols; col += 1) {
            this.cells[row][col] = 0;
        }}
    }

    calculateEmptyCells() {
        let empty = [];

        for (let row = 0; row < this.dimensions.rows; row += 1) {
        for (let col = 0; col < this.dimensions.cols; col += 1) {
            if (this.cells[row][col] === Cell.EMPTY)
                empty.push({row, col});
        }}

        return empty;
    }
}

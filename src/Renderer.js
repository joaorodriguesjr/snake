import Cell from './Cell';

export default class Renderer {
    constructor(canvas, dimensions) {
        this.canvas     = canvas;
        this.dimensions = dimensions;
        this.context    = canvas.getContext('2d');

        canvas.width  = dimensions.grid.cols * dimensions.cell.width;
        canvas.height = dimensions.grid.rows * dimensions.cell.height;
    }

    render(state) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let width  = this.dimensions.cell.width;
        let height = this.dimensions.cell.height;

        for (let row = 0; row < this.dimensions.grid.rows; row += 1) {
        for (let col = 0; col < this.dimensions.grid.cols; col += 1) {

            if (state.grid.cells[row][col] === Cell.EMPTY)
                continue;

            let x = col * width;
            let y = row * height;

            this.context.beginPath();
            this.context.rect(x, y, width, height);
            this.context.stroke();
        }}
    }
}

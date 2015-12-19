import Cell from './Cell';

export default class Renderer {
    constructor(canvas, dimensions, images) {
        this.canvas     = canvas;
        this.dimensions = dimensions;
        this.images     = images;
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

            if (state.grid.cells[row][col] === Cell.SNAKE)
                this.context.drawImage(this.images.snake, x, y);
            if (state.grid.cells[row][col] === Cell.FRUIT)
                this.context.drawImage(this.images.fruit, x, y);
        }}
    }
}

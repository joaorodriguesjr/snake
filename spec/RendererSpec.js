import Cell     from '../src/Cell';
import Renderer from '../src/Renderer';

describe('Renderer', function () {
    var renderer, canvas, context, dimensions, images, state;

    beforeEach(function () {
        canvas     = {getContext: function () {}};
        context    = {clearRect: function () {}, drawImage: function () {}};
        dimensions = {grid: {rows: 20, cols: 25}, cell: {width: 25, height: 25}};
        images     = {snake: 'snake-image', fruit: 'fruit-image'};
        state      = {score: 0, level: {ID: 1}, grid: {cells: []}};

        for (let row = 0; row < dimensions.grid.rows; row += 1) {
            state.grid.cells[row] = [];
        }

        for (let row = 0; row < dimensions.grid.rows; row += 1) {
        for (let col = 0; col < dimensions.grid.cols; col += 1) {
            state.grid.cells[row][col] = 0;
        }}

        spyOn(canvas, 'getContext').and.returnValue(context);
        renderer = new Renderer(canvas, dimensions, images);
    });

    it('has a canvas', function () {
        expect(renderer.canvas).toBe(canvas);
    });

    it('has a context', function () {
        expect(canvas.getContext).toHaveBeenCalledWith('2d');
        expect(renderer.context).toBe(context);
    });

    it('has dimensions', function () {
        expect(renderer.dimensions).toBe(dimensions);
    });

    it('has images', function () {
        expect(renderer.images).toBe(images);
    });

    it('sets canvas width', function () {
        expect(canvas.width).toBe(dimensions.grid.cols * dimensions.cell.width);
    });

    it('sets canvas height', function () {
        expect(canvas.height).toBe(dimensions.grid.rows * dimensions.cell.height);
    });

    it('clears the canvas context', function () {
        spyOn(context, 'clearRect');
        renderer.render(state);
        expect(context.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
    });

    it('renders snake', function () {
        state.grid.cells[0][0] = Cell.SNAKE;
        spyOn(context, 'drawImage');
        renderer.render(state);
        expect(context.drawImage).toHaveBeenCalledWith(images.snake, 0, 0);
    });

    it('renders fruit', function () {
        state.grid.cells[0][0] = Cell.FRUIT;
        spyOn(context, 'drawImage');
        renderer.render(state);
        expect(context.drawImage).toHaveBeenCalledWith(images.fruit, 0, 0);
    });
});

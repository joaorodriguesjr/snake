describe('Renderer', function () {
    var renderer, canvas, dimensions;

    beforeEach(function () {
        context    = {};
        canvas     = {getContext: function () {}};
        dimensions = {grid: {rows: 20, cols: 25}, cell: {width: 25, height: 25}};

        spyOn(canvas, 'getContext').and.returnValue(context);
        renderer = new Renderer(canvas, dimensions);
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

    it('sets canvas width', function () {
        expect(canvas.width).toBe(dimensions.grid.cols * dimensions.cell.width);
    });

    it('sets canvas height', function () {
        expect(canvas.height).toBe(dimensions.grid.rows * dimensions.cell.height);
    });
});

describe('Renderer', function () {
    var renderer, canvas, dimensions, state;

    beforeEach(function () {
        canvas  = {getContext: function () {}};
        context = {
            rect:      function () {},
            stroke:    function () {},
            fillText:  function () {},
            beginPath: function () {},
            clearRect: function () {}
        };
        dimensions = {grid: {rows: 20, cols: 25}, cell: {width: 25, height: 25}};

        state = {
            score: 0,
            level: {ID: 1},
            grid: {cells: []}
        };

        var row, col;
        for (row = 0; row < dimensions.grid.rows; row += 1) {
            state.grid.cells[row] = [];
        }

        for (row = 0; row < dimensions.grid.rows; row += 1) {
        for (col = 0; col < dimensions.grid.cols; col += 1) {
            state.grid.cells[row][col] = 0;
        }}

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

    it('clears the canvas context', function () {
        spyOn(context, 'clearRect');
        renderer.render(state);
        expect(context.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
    });

    it('sets the context font family', function () {
        renderer.render(state);
        expect(context.font).toBe('15px Monospace');
    });

    it('renders the score', function () {
        spyOn(context, 'fillText');
        renderer.render(state);
        expect(context.fillText).toHaveBeenCalledWith('SCORE:0', 50, 50);
    });

    it('renders the level', function () {
        spyOn(context, 'fillText');
        renderer.render(state);
        expect(context.fillText).toHaveBeenCalledWith('LEVEL:1', 50, 100);
    });

    it('renders an object', function () {
        state.grid.cells[0][0] = 1;
        spyOn(context, 'beginPath');
        spyOn(context, 'stroke');
        spyOn(context, 'rect');
        renderer.render(state);
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.stroke).toHaveBeenCalled();
        expect(context.rect).toHaveBeenCalledWith(0, 0, 25, 25);
    });
});

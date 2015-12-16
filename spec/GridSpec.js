describe('Grid', function () {
    var grid;
    var dimensions = {rows: 15, cols: 20};

    beforeEach(function () {
        grid = new Grid(dimensions);
    });

    it('has 15 rows', function () {
        expect(grid.cells.length).toBe(15);
    });

    it('has 20 columns', function () {
        expect(grid.cells[0].length).toBe(20);
    });

    it('has all cells initialized with 0', function () {
        for (var row = 0; row < dimensions.rows; row += 1) {
        for (var col = 0; col < dimensions.cols; col += 1) {
            expect(grid .cells[row][col]).toBe(0);
        }}
    });

    it('calculates empty cells', function () {
        var empty = grid.calculateEmptyCells();
        expect(empty.length).toBe(dimensions.rows * dimensions.cols);
    });
});

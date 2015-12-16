describe('Snake', function () {
    var snake;

    beforeEach(function () {
        snake = new Snake();
    });

    it('is in row 1', function () {
        expect(snake.head.row).toBe(1);
    });

    it('is in col 1', function () {
        expect(snake.head.col).toBe(1);
    });

    it('is in row 2', function () {
        snake.init({row: 2, col: 1});
        expect(snake.head.row).toBe(2);
    });

    it('is in col 2', function () {
        snake.init({row: 1, col: 2});
        expect(snake.head.col).toBe(2);
    });

    it('has parts', function () {
        expect(snake.parts.length).toBe(1);
    });

    it('is going right', function () {
        expect(snake.direction).toBe(Direction.RIGHT);
    });

    it('is going left', function () {
        snake.init(undefined, Direction.LEFT);
        expect(snake.direction).toBe(Direction.LEFT);
    });

    it('calculates next position', function () {
        var next = snake.calculateNextPosition();
        expect(next.col).toBe(2);
    });
});

import Direction from '../src/Direction';
import Snake     from '../src/Snake';

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

    it('advances to a position', function () {
        snake.advanceTo({row: 1, col: 2});

        expect(snake.head.col).toBe(2);
        expect(snake.parts.length).toBe(2);
    });

    it('pulls the tail', function () {
        var tail = snake.pullTail();

        expect(tail.row).toBe(1);
        expect(tail.col).toBe(1);
        expect(snake.parts.length).toBe(0);
    });

    it('turns left', function () {
        snake.direction = Direction.DOWN;
        snake.turnLeft();
        expect(snake.direction).toBe(Direction.LEFT);
    });

    it('turns up', function () {
        snake.direction = Direction.RIGHT;
        snake.turnUp();
        expect(snake.direction).toBe(Direction.UP);
    });

    it('turns right', function () {
        snake.direction = Direction.UP;
        snake.turnRight();
        expect(snake.direction).toBe(Direction.RIGHT);
    });

    it('turns down', function () {
        snake.direction = Direction.LEFT;
        snake.turnDown();
        expect(snake.direction).toBe(Direction.DOWN);
    });
});

describe('Game', function () {
    var game, grid, snake;

    grid  = {
        init: function () {},
        spawnFruit: function () {},
        markSnakeAt: function () {},
        hasFruitAt: function () {},
        detectCollision: function () {},
        clearCell: function () {}
    };

    snake = {
        head: {},
        init: function () {},
        calculateNextPosition: function () {},
        advanceTo: function () {},
        pullTail: function () {}
    };

    beforeEach(function () {
        spyOn(snake, 'init');
        spyOn(grid , 'init');
        spyOn(grid , 'spawnFruit');
        spyOn(grid , 'markSnakeAt');

        game  = new Game(grid, snake);
    });

    it('has a Grid object', function () {
        expect(game.grid).toBe(grid);
    });

    it('has a Snake object', function () {
        expect(game.snake).toBe(snake);
    });

    it('initializes grid', function () {
        expect(grid.init).toHaveBeenCalled();
    });

    it('initializes snake', function () {
        expect(snake.init).toHaveBeenCalled();
    });

    it('has 10 levels', function () {
        expect(game.levels.length).toBe(9); // 9 + 1 at "game.level"
    });

    it('is at level 1', function () {
        expect(game.level.ID).toBe(1);
    });

    it('has score 0', function () {
        expect(game.score).toBe(0);
    });

    it('spawns a fruit on grid', function () {
        expect(grid.spawnFruit).toHaveBeenCalled();
    });

    it('marks the snake on grid', function () {
        expect(grid.markSnakeAt).toHaveBeenCalledWith(snake.head);
    });

    it('updates the state', function () {
        var next = {};

        spyOn(snake, 'calculateNextPosition').and.returnValue(next);
        spyOn(grid , 'detectCollision').and.returnValue(false);
        spyOn(grid , 'hasFruitAt').and.returnValue(false);
        spyOn(grid , 'clearCell');
        spyOn(snake, 'pullTail');
        spyOn(snake, 'advanceTo');
        var state = game.update();

        expect(snake.calculateNextPosition).toHaveBeenCalled();
        expect(grid.detectCollision).toHaveBeenCalledWith(next);
        expect(grid.hasFruitAt).toHaveBeenCalledWith(next);
        expect(grid.clearCell).toHaveBeenCalled();
        expect(snake.pullTail).toHaveBeenCalled();
        expect(snake.advanceTo).toHaveBeenCalled();
        expect(grid.markSnakeAt).toHaveBeenCalled();
    });
});

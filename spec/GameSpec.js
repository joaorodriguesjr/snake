describe('Game', function () {
    var game;
    var grid  = {init: function () {}};
    var snake = {init: function () {}};

    beforeEach(function () {
        spyOn(grid , 'init');
        spyOn(snake, 'init');

        game  = new Game(grid, snake);
    });

    it('holds a Grid object', function () {
        expect(game.grid).toBe(grid);
    });

    it('holds a Snake object', function () {
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
});

describe('Game', function () {
    var game;
    var grid  = {};
    var snake = {};

    beforeEach(function () {
        game = new Game(grid, snake);
    });

    it('holds a Grid object', function () {
        expect(game.grid).toBe(grid);
    });

    it('holds a Snake object', function () {
        expect(game.snake).toBe(snake);
    });
});

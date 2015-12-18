import Input from '../src/Input';

describe('Input', function () {
    var input, keyDownListener;
    var snake = {
        turnLeft : function () {},
        turnUp   : function () {},
        turnRight: function () {},
        turnDown : function () {}
    };

    beforeEach(function () {
        input = new Input(snake);
        keyDownListener = input.createKeyDownListener();
    });

    it('has a Snake object', function () {
        expect(input.snake).toBe(snake);
    });

    it('turns the snake left', function () {
        spyOn(snake, 'turnLeft');
        keyDownListener({keyCode: 37});

        expect(snake.turnLeft).toHaveBeenCalled();
    });

    it('turns the snake up', function () {
        spyOn(snake, 'turnUp');
        keyDownListener({keyCode: 38});

        expect(snake.turnUp).toHaveBeenCalled();
    });

    it('turns the snake right', function () {
        spyOn(snake, 'turnRight');
        keyDownListener({keyCode: 39});

        expect(snake.turnRight).toHaveBeenCalled();
    });

    it('turns the snake down', function () {
        spyOn(snake, 'turnDown');
        keyDownListener({keyCode: 40});

        expect(snake.turnDown).toHaveBeenCalled();
    });
});

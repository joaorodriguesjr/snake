export default class Input {
    constructor(snake) {
        this.snake = snake;
    }

    createKeyDownListener() {
        const LEFT  = 37;
        const UP    = 38;
        const RIGHT = 39;
        const DOWN  = 40;

        let listener = function (event) {
            switch (event.keyCode) {
                case LEFT:
                    this.snake.turnLeft();
                    break;
                case UP:
                    this.snake.turnUp();
                    break;
                case RIGHT:
                    this.snake.turnRight();
                    break;
                case DOWN:
                    this.snake.turnDown();
                    break;
            }
        };

        return listener.bind(this);
    }
}

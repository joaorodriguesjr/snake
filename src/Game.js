import Grid  from './Grid';
import Snake from './Snake';

export default class Game {
    constructor(grid, snake) {
        this.grid  = grid;
        this.snake = snake;

        this.init();
    }

    init() {
        this.initLevels();

        this.score = 0;
        this.level = this.levels.shift();
        this.grid.init();
        this.snake.init();

        this.grid.spawnFruit();
        this.grid.markSnakeAt(this.snake.head);
    }

    update() {
        let next = this.snake.calculateNextPosition();

        if (this.grid.detectCollision(next)) {
            this.handleCollision();
        } else {
            this.moveSnakeTo(next);
        }

        return this;
    }

    moveSnakeTo(position) {
        if (this.grid.hasFruitAt(position)) {
            this.handleScore();
        } else {
            this.grid.clearCell(this.snake.pullTail());
        }

        this.snake.advanceTo(position);
        this.grid.markSnakeAt(this.snake.head);
    }

    handleCollision() {
        this.init();
    }

    handleScore() {
        this.grid.spawnFruit();
        this.score += this.level.score;

        if (this.score >= this.level.up) {
            this.level  = this.levels.shift(); // FIXME: It may break
        }
    }

    initLevels() {
        this.levels = [
            {ID: 1 , speed: 10, score: 50 , up: 200  },
            {ID: 2 , speed: 9 , score: 75 , up: 500  },
            {ID: 3 , speed: 8 , score: 100, up: 1500 },
            {ID: 4 , speed: 7 , score: 125, up: 3000 },
            {ID: 5 , speed: 6 , score: 150, up: 5000 },
            {ID: 6 , speed: 5 , score: 175, up: 7000 },
            {ID: 7 , speed: 4 , score: 200, up: 9000 },
            {ID: 8 , speed: 3 , score: 250, up: 10000},
            {ID: 9 , speed: 2 , score: 300, up: 11000},
            {ID: 10, speed: 1 , score: 500, up: 12000}
        ];
    }
}

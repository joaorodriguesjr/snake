import Direction from './Direction';

export default class Snake {
    constructor() {
        this.init();
    }

    init(position, direction) {
        this.commands = [];
        this.parts = [this.head = position || {row: 1, col: 1}];
        this.direction = direction || Direction.RIGHT;
    }

    calculateNextPosition() {
        this.updateDirection();
        let {row, col} = this.head;

        switch (this.direction) {
            case Direction.LEFT:
                col -= 1;
                break;
            case Direction.UP:
                row -= 1;
                break;
            case Direction.RIGHT:
                col += 1;
                break;
            case Direction.DOWN:
                row += 1;
                break;
        }

        return {row, col};
    }

    updateDirection() {
        if (this.commands.length > 0) this.direction = this.commands.shift();
    }

    advanceTo(position) {
        this.parts.unshift(this.head = position);
    }

    pullTail() {
        return this.parts.pop();
    }

    turnLeft() {
        if (this.direction === Direction.RIGHT)
            return;

        this.commands.push(Direction.LEFT);
    }

    turnUp() {
        if (this.direction === Direction.DOWN)
            return;

        this.commands.push(Direction.UP);
    }

    turnRight() {
        if (this.direction === Direction.LEFT)
            return;

        this.commands.push(Direction.RIGHT);
    }

    turnDown() {
        if (this.direction === Direction.UP)
            return;

        this.commands.push(Direction.DOWN);
    }
}

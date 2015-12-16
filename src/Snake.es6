class Snake {
    constructor() {
        this.init();
    }

    init(position, direction) {
        this.parts = [this.head = position || {row: 1, col: 1}];
        this.direction = direction || Direction.RIGHT;
    }
}

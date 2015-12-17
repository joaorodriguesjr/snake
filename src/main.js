(function() {
    let dimensions = {grid: {rows: 20, cols: 25}, cell: {width: 25, height: 25}};
    let renderer   = new Renderer(document.createElement('canvas'), dimensions);
    let grid       = new Grid(dimensions.grid);
    let snake      = new Snake();
    let game       = new Game(grid, snake);
    let input      = new Input(snake);

    document.addEventListener('keydown', input.createKeyDownListener());
    document.body.appendChild(renderer.canvas);

    let frames = 0;

    (function loop() {
        frames++;

        if (frames % game.level.speed === 0) {
            renderer.render(game.update());
        }

        window.requestAnimationFrame(loop);
    })();

})();

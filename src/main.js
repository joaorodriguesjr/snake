import Renderer from './Renderer';
import Grid     from './Grid';
import Snake    from './Snake';
import Game     from './Game';
import Input    from './Input';

let dimensions = {grid: {rows: 20, cols: 25}, cell: {width: 25, height: 25}};
let images     = {snake: new Image(), fruit: new Image()};

images.snake.src = 'snake-cell.png';
images.fruit.src = 'fruit-cell.png';

let renderer = new Renderer(document.createElement('canvas'), dimensions, images);
let grid     = new Grid(dimensions.grid);
let snake    = new Snake();
let game     = new Game(grid, snake);
let input    = new Input(snake);

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

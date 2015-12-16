class Renderer {
    constructor(canvas, dimensions) {
        this.canvas     = canvas;
        this.dimensions = dimensions;
        this.context    = canvas.getContext('2d');
        
        canvas.width  = dimensions.grid.cols * dimensions.cell.width;
        canvas.height = dimensions.grid.rows * dimensions.cell.height;
    }
}

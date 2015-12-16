describe('Cell', function () {
    it('has a static property EMPTY', function () {
        expect(Cell.EMPTY).toBe(0);
    });

    it('has a static property SNAKE', function () {
        expect(Cell.SNAKE).toBe(1);
    });

    it('has a static property FRUIT', function () {
        expect(Cell.FRUIT).toBe(2);
    });
});

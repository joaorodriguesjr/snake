import Events from '../src/Events';

describe('Events', function () {
    let events;

    beforeEach(function () {
        events = new Events();
    });

    it('has listeners', function () {
        expect(events.listeners).toBeDefined();
    });

    it('can add listeners', function () {
        let listener = data => {};
        events.listen('some-event', listener);
        expect(events.listeners['some-event'][0]).toBe(listener);
    });

    it('can trigger an event', function () {
        let control  = 0;
        let listener = data => control = 1;

        events.listen('some-event', listener);
        events.trigger('some-event');
        expect(control).toBe(1);
    });
});

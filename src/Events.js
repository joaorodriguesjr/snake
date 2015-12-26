export default class Events {
    constructor() {
        this.listeners = {};
    }

    listen(event, listener) {
        if (this.listeners[event] === undefined) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(listener);
    }

    trigger(event, data) {
        if (this.listeners[event] === undefined) {
            return;
        }

        this.listeners[event].forEach(listener => listener(data));
    }
}

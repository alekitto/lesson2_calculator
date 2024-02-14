export class Display {
    /**
     * @type {string}
     */
    #value;
    eventHandler;

    set value(value) {
        this.#value = value;
        if(this.eventHandler) {
            this.eventHandler();
        }
    }

    get value() {
        return this.#value;
    }
}

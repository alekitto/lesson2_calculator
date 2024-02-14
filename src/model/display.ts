export class Display {
    #value = '';
    eventHandler: () => void = () => {};

    set value(value: string) {
        this.#value = value;
        this.eventHandler();
    }

    get value() {
        return this.#value;
    }
}

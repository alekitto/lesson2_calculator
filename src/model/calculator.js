import { KeyPad } from "./key-pad.js";
import { Display } from "./display.js";
import { BinaryOperation } from "./operation.js";

export class Calculator {
    /**
     * @type {KeyPad}
     */
    keyPad;
    /**
     * @type {Display}
     */
    display;

    /**
     * @type {string}
     */
    #buffer = "0";

    /**
     * @type {Operation}
     */
    #pendingOperation = null;

    constructor() {
        this.display = new Display();
        this.keyPad = new KeyPad(this);
        this.display.value = this.#buffer;
    }

    /**
     * Concatena un valore al buffer.
     * Controlla che il buffer non contenga già un punto, altrimenti ignora.
     * Aggiorna il display.
     */
    concatBuffer(value) {
        if (value === "." && this.#buffer.includes(".")) {
            return;
        }

        if (this.#buffer === "0" && value !== ".") {
            this.#buffer = value;
        } else {
            this.#buffer += value;
        }

        this.display.value = this.#buffer;
    }

    op(operation) {
        this.execute();
        if (operation instanceof BinaryOperation) {
            operation.left = Number.parseFloat(this.#buffer);
            this.#pendingOperation = operation;
            this.#buffer = "0";
        } else {
            throw new Error('Not implemented');
        }
    }

    execute() {
        if (this.#pendingOperation=== null) {
            return;
        }
        if (this.#pendingOperation instanceof BinaryOperation) {
            this.#pendingOperation.right = this.#buffer;
            this.#buffer = this.#pendingOperation.execute();
            this.display.value = this.#buffer;
        }
        else {
            throw new Error('Not implemented');
        }

        this.#pendingOperation = null;
    }

    reset() {
        this.#buffer = "0";
        this.#pendingOperation = null;
        this.display.value = this.#buffer;
    }
}

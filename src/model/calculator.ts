import { KeyPad } from "./key-pad.js";
import { Display } from "./display.js";
import { BinaryOperation, Operation } from "./operation.js";

export class Calculator {
    readonly keyPad = new KeyPad(this);
    readonly display = new Display();

    #buffer = '0';
    #pendingOperation: Operation | null = null;

    constructor() {
        this.display.value = this.#buffer;
    }

    /**
     * Concatena un valore al buffer.
     * Controlla che il buffer non contenga già un punto, altrimenti ignora.
     * Aggiorna il display.
     */
    concatBuffer(value: string) {
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

    op(operation: Operation) {
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
        if (this.#pendingOperation === null) {
            return;
        }
        if (this.#pendingOperation instanceof BinaryOperation) {
            this.#pendingOperation.right = Number.parseFloat(this.#buffer);
            this.#buffer = this.#pendingOperation.execute().toString();
            this.display.value = this.#buffer;
        } else {
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

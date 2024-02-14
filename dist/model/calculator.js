var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Calculator_buffer, _Calculator_pendingOperation;
import { KeyPad } from "./key-pad.js";
import { Display } from "./display.js";
import { BinaryOperation } from "./operation.js";
export class Calculator {
    constructor() {
        this.keyPad = new KeyPad(this);
        this.display = new Display();
        _Calculator_buffer.set(this, '0');
        _Calculator_pendingOperation.set(this, null);
        this.display.value = __classPrivateFieldGet(this, _Calculator_buffer, "f");
    }
    /**
     * Concatena un valore al buffer.
     * Controlla che il buffer non contenga già un punto, altrimenti ignora.
     * Aggiorna il display.
     */
    concatBuffer(value) {
        if (value === "." && __classPrivateFieldGet(this, _Calculator_buffer, "f").includes(".")) {
            return;
        }
        if (__classPrivateFieldGet(this, _Calculator_buffer, "f") === "0" && value !== ".") {
            __classPrivateFieldSet(this, _Calculator_buffer, value, "f");
        }
        else {
            __classPrivateFieldSet(this, _Calculator_buffer, __classPrivateFieldGet(this, _Calculator_buffer, "f") + value, "f");
        }
        this.display.value = __classPrivateFieldGet(this, _Calculator_buffer, "f");
    }
    op(operation) {
        this.execute();
        if (operation instanceof BinaryOperation) {
            operation.left = Number.parseFloat(__classPrivateFieldGet(this, _Calculator_buffer, "f"));
            __classPrivateFieldSet(this, _Calculator_pendingOperation, operation, "f");
            __classPrivateFieldSet(this, _Calculator_buffer, "0", "f");
        }
        else {
            throw new Error('Not implemented');
        }
    }
    execute() {
        if (__classPrivateFieldGet(this, _Calculator_pendingOperation, "f") === null) {
            return;
        }
        if (__classPrivateFieldGet(this, _Calculator_pendingOperation, "f") instanceof BinaryOperation) {
            __classPrivateFieldGet(this, _Calculator_pendingOperation, "f").right = Number.parseFloat(__classPrivateFieldGet(this, _Calculator_buffer, "f"));
            __classPrivateFieldSet(this, _Calculator_buffer, __classPrivateFieldGet(this, _Calculator_pendingOperation, "f").execute().toString(), "f");
            this.display.value = __classPrivateFieldGet(this, _Calculator_buffer, "f");
        }
        else {
            throw new Error('Not implemented');
        }
        __classPrivateFieldSet(this, _Calculator_pendingOperation, null, "f");
    }
    reset() {
        __classPrivateFieldSet(this, _Calculator_buffer, "0", "f");
        __classPrivateFieldSet(this, _Calculator_pendingOperation, null, "f");
        this.display.value = __classPrivateFieldGet(this, _Calculator_buffer, "f");
    }
}
_Calculator_buffer = new WeakMap(), _Calculator_pendingOperation = new WeakMap();

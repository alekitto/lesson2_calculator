import { Operation } from "./operation.js";
import { Calculator } from "./calculator.js";

export abstract class Button {
    constructor(protected readonly _calculator: Calculator) {
    }

    abstract buttonClicked(): void;
}

export class OperatorKey extends Button {
    constructor(public readonly operation: Newable<Operation>, calculator: Calculator) {
        super(calculator);
    }

    buttonClicked() {
        this._calculator.op(new (this.operation)());
    }
}

export class NumKey extends Button {
    constructor(public readonly number: number, calculator: Calculator) {
        super(calculator);
    }

    buttonClicked() {
        this._calculator.concatBuffer(this.number.toString());
    }
}

export class SeparatorKey extends Button {
    buttonClicked() {
        this._calculator.concatBuffer('.');
    }
}

export class ResetKey extends Button {
    buttonClicked() {
        this._calculator.reset();
    }
}

export class EnterKey extends Button {
    buttonClicked() {
        this._calculator.execute();
    }
}

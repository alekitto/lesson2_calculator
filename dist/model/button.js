export class Button {
    constructor(_calculator) {
        this._calculator = _calculator;
    }
}
export class OperatorKey extends Button {
    constructor(operation, calculator) {
        super(calculator);
        this.operation = operation;
    }
    buttonClicked() {
        this._calculator.op(new (this.operation)());
    }
}
export class NumKey extends Button {
    constructor(number, calculator) {
        super(calculator);
        this.number = number;
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

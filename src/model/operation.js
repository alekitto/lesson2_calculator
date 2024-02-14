/**
 * @abstract
 */
class Operation {
    execute() {}
}

export class BinaryOperation extends Operation {
    /**
     * @type {number}
     */
    left;

    /**
     * @type {number}
     */
    right;
}

export class SumOperation extends BinaryOperation {
    execute() {
        return this.left + this.right;
    }
}

export class SubOperation extends SumOperation {
    execute() {
        return this.left - this.right;
    }
}

export class MulOperation extends BinaryOperation {
    execute() {
        return this.left * this.right;
    }
}

export class DivOperation extends MulOperation {
    execute() {
        return this.left / this.right;
    }
}

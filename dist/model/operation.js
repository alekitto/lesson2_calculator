export class BinaryOperation {
    execute() {
        if (this.left === undefined || this.right === undefined) {
            throw new Error('Both operands are required to execute the operation');
        }
        return this.doExecute(this.left, this.right);
    }
}
export class SumOperation extends BinaryOperation {
    doExecute(left, right) {
        return left + right;
    }
}
export class SubOperation extends SumOperation {
    doExecute(left, right) {
        return left - right;
    }
}
export class MulOperation extends BinaryOperation {
    doExecute(left, right) {
        return left * right;
    }
}
export class DivOperation extends MulOperation {
    doExecute(left, right) {
        return left / right;
    }
}

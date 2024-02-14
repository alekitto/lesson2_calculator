export interface Operation {
    execute(): number;
}

export abstract class BinaryOperation implements Operation {
    left?: number;
    right?: number;

    execute(): number {
        if (this.left === undefined || this.right === undefined) {
            throw new Error('Both operands are required to execute the operation');
        }

        return this.doExecute(this.left, this.right);
    }

    protected abstract doExecute(left: number, right: number): number;
}

export class SumOperation extends BinaryOperation {
    protected doExecute(left: number, right: number): number {
        return left + right;
    }
}

export class SubOperation extends SumOperation {
    protected doExecute(left: number, right: number): number {
        return left - right;
    }
}

export class MulOperation extends BinaryOperation {
    protected doExecute(left: number, right: number): number {
        return left * right;
    }
}

export class DivOperation extends MulOperation {
    protected doExecute(left: number, right: number): number {
        return left / right;
    }
}

import { EnterKey, NumKey, OperatorKey, ResetKey, SeparatorKey } from "./button.js";
import { DivOperation, MulOperation, SubOperation, SumOperation } from "./operation.js";

export class KeyPad {
    /**
     * @type {Button[]}
     */
    buttons;

    constructor(calculator) {
        this.buttons = [];
        for (let i = 0; i < 10; i++) {
            let button = new NumKey(i, calculator);
            this.buttons.push(button);
        }

        this.buttons.push(new OperatorKey(SumOperation, calculator));
        this.buttons.push(new OperatorKey(SubOperation, calculator));
        this.buttons.push(new OperatorKey(MulOperation, calculator));
        this.buttons.push(new OperatorKey(DivOperation, calculator));
        this.buttons.push(new EnterKey(calculator));
        this.buttons.push(new ResetKey(calculator));
        this.buttons.push(new SeparatorKey(calculator));
    }

    findButton(value) {
        return this.buttons.find(element => {
            if (element instanceof NumKey) {
                return element.number.toString() === value;
            }

            if (element instanceof OperatorKey) {
                switch (value) {
                    case '+':
                        return element.operation === SumOperation;
                    case '-':
                        return element.operation === SubOperation;
                    case '×':
                        return element.operation === MulOperation;
                    case '÷':
                        return element.operation === DivOperation;
                }
            }

            switch (value) {
                case '.':
                    return element instanceof SeparatorKey;
                case 'AC':
                    return element instanceof ResetKey;
                case '=':
                    return element instanceof EnterKey;
            }

            return false;
        });
    }
}

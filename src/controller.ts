import { Calculator } from "./model/calculator.js";

class CalculatorController {
    calculator = new Calculator();

    constructor() {
        let keyPad = document.getElementsByClassName('calculator__keys')[0];
        keyPad.addEventListener('click', event => {
            const keyPressed = (event.target! as HTMLElement).textContent;
            const buttonPressed = this.calculator.keyPad.findButton(String(keyPressed));

            if (buttonPressed !== undefined) {
                buttonPressed.buttonClicked();
            }
        });

        let display = document.getElementsByClassName('calculator__output')[0];
        this.calculator.display.eventHandler = () => {
            display.textContent = this.calculator.display.value;
        };

    }
}

let controller = new CalculatorController();

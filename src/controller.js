import { Calculator } from "./model/calculator.js";

class CalculatorController {
    constructor() {
        this.calculator = new Calculator();

        const keyPad = document.getElementsByClassName('calculator__keys')[0];
        keyPad.addEventListener('click', event => {
            const keyPressed = event.target.textContent;
            const buttonPressed = this.calculator.keyPad.findButton(keyPressed);
            buttonPressed.buttonClicked();
        });

        const display = document.getElementsByClassName('calculator__output')[0];
        this.calculator.display.eventHandler = () => {
            display.textContent = this.calculator.display.value;
        };
    }
}

let controller = new CalculatorController();

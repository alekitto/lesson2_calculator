class Calculator {
    /**
     * @type {string}
     */
    display;
    _element;
    _displayEl;
    _pre = null;
    _op = null;

    constructor(element) {
        this._element = element;
        this._displayEl = element.getElementsByClassName('calculator__output')[0];
        this.display = this._displayEl.textContent;
        this._element.addEventListener('click', this.handleClick.bind(this));
    }

    /**
     * @param {PointerEvent} e
     */
    handleClick(e) {
        if (!e.target.classList.contains('calculator__key')) {
            return;
        }

        if (e.target.classList.contains('calculator__key--operator')) {
            this.handleOperator(e.target);
        }

        if (e.target.classList.contains('calculator__key--enter')) {
            this.handleEnter();
        }

        this.handleKey(e.target);
        this.updateDisplay();
    }

    handleKey(element) {
        const buttonText = element.textContent;
        if (buttonText === 'AC') {
            this.display = '0';
            this._pre = null;
            this._op = null;
        } else {
            if (buttonText === '.') {
                if (!this.display.includes('.')) {
                    this.display += '.';
                }

                return;
            }

            const num = Number.parseFloat(this.display + buttonText);
            this.display = num.toString();
        }
    }

    handleOperator(element) {
        this.handleEnter();
        this._pre = Number.parseFloat(this.display);
        switch (element.textContent) {
            case '+': this._op = '+'; break;
            case '-': this._op = '-'; break;
            case '×': this._op = '*'; break;
            case '÷': this._op = '/'; break;
        }

        this.display = '0';
    }

    handleEnter() {
        if (this._op === null) {
            return;
        }

        const code = `${this._pre} ${this._op} ${this.display}`;
        let result;
        eval('result = ' + code);

        this._pre = null;
        this._op = null;
        this.display = result;
    }

    updateDisplay() {
        this._displayEl.innerHTML = this.display;
    }
}

const calcs = document.getElementsByClassName('calculator');
if (calcs.length === 0) {
    throw new Error('Cannot find calculator');
}

new Calculator(calcs[0]);

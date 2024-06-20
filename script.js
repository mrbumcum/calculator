const inputDisplay = document.getElementById('input');
const outputDisplay = document.getElementById('output');
const buttons = document.querySelectorAll(".button");

function handleButtonDisplay(event) {
    const button = event.target;

    if(button.classList.contains('button')) {
        const buttonText = button.textContent;

        switch (button.id) {
            case 'clear':
                calculator.clear();
                inputDisplay.textContent = '';
                outputDisplay.textContent = '';
                break;
            case 'sign':
                toggleSign();
                break;
            case 'percent':
                inputDisplay.textContent += buttonText;
                break;
            case 'add':
                if (calculator.operator === '') {
                    calculator.operator = '+';
                    inputDisplay.textContent += ' ' + buttonText + ' ';
                }
                break;
            case 'subtract':
                if (calculator.operator === '') {
                    calculator.operator = '-';
                    inputDisplay.textContent += ' ' + buttonText + ' ';
                }
                break;
            case 'multiply':
                if (calculator.operator === '') {
                    calculator.operator = '*';
                    inputDisplay.textContent += ' ' + buttonText + ' ';
                }
                break;
            case 'divide':
                if (calculator.operator === '') {
                    calculator.operator = '/';
                    inputDisplay.textContent += ' ' + buttonText + ' ';
                }
                break;
            case 'equals':
                switch(calculator.operator){
                    case '+':
                        outputDisplay.textContent = calculator.getSum();
                        inputDisplay.textContent = calculator.getSum();
                        calculator.clear();
                        calculator.operand1 = parseFloat(outputDisplay.textContent);
                        break;
                    case '-':
                        outputDisplay.textContent = calculator.getDifference();
                        inputDisplay.textContent = calculator.getDifference();
                        calculator.clear(); 
                        calculator.operand1 = parseFloat(outputDisplay.textContent);
                        break;
                    case '*':
                        outputDisplay.textContent = calculator.getProduct();
                        inputDisplay.textContent = calculator.getProduct();
                        calculator.clear();
                        calculator.operand1 = parseFloat(outputDisplay.textContent);
                        break;
                    case '/':
                        outputDisplay.textContent = calculator.getQuotient();
                        inputDisplay.textContent = calculator.getQuotient();
                        calculator.clear();
                        calculator.operand1 = parseFloat(outputDisplay.textContent);
                        break;
                    }
                break;
            default:
                if(calculator.operator !== '') {
                    inputDisplay.textContent += buttonText;
                    calculator.operand2 = parseFloat(inputDisplay.textContent.split(' ')[2])
                } else {
                    inputDisplay.textContent += buttonText;
                    calculator.operand1 = parseFloat(inputDisplay.textContent);
                }
                break;
    }

        }

}

function toggleSign() {
    if (calculator.operator === '') {
        calculator.operand1 = -calculator.operand1;
        inputDisplay.textContent = calculator.operand1;
    } else {
        calculator.operand2 = -calculator.operand2;
        inputDisplay.textContent = `${calculator.operand1} ${calculator.operator} ${calculator.operand2}`;
    }
}

const calculator = {
    operand1: 0,
    operand2: 0,
    operator: '',
    result: 0,

    setOperand1: function(op1) {
       return this.operand1 = op1; 
    },

    setOperand2: function(op2) {
        return this.operand2 = op2;
    },

    getSum: function() {
        return this.result = this.operand1 + this.operand2;
    },

    getDifference: function() {
        if (this.operand2 !== 0) {
            return this.result = this.operand1 - this.operand2;
        } else {
            return 'error';
        }
    },

    getProduct: function() {
        return this.result = this.operand1 * this.operand2;
    },

    getQuotient: function() {
        return this.result = this.operand1 / this.operand2;
    },

    clear: function() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
    }
}


buttons.forEach(button => {
    button.addEventListener('click', handleButtonDisplay);
});
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
                break;
            case 'sign':
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
                       
                        break;
                    case '-':
                       
                        break;
                    case '*':
                        
                        break;
                    case '/':
                       
                        break;
                    }
                break;
            default:
                if(calculator.operator !== '') {
                    inputDisplay.textContent += buttonText;
                    calculator.operand2 = inputDisplay.textContent;

                } else {
                    inputDisplay.textContent += buttonText;
                    calculator.operand1 = inputDisplay.textContent;

                }
                break;
    }

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
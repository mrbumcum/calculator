const inputDisplay = document.getElementById('input');
const outputDisplay = document.getElementById('output');

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
                break;
            case 'add':
                calculator.operator = '+'
                break;
            case 'subtract':
                calculator.operator = '-'
                break;
            case 'multiply':
                calculator.operator = '*'
                break;
            case 'divide':
                calculator.operator = '/'
                break;
            default:
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
        this.result = this.operand1 - this.operand2;
    },

    getProduct: function() {
        this.result = this.operand1 * this.operand2;
    },

    getQuotient: function() {
        this.result = this.operand1 / this.operand2;
    },

    clear: function() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.result = 0;
    }
}

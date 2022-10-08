//global variables
var currentValue = null;
var numberChosen = null;


//functions
function add(currentValue, numToAdd) {
    document.getElementById('textBox').value = '+';
    currentValue += numToAdd;
}
function subtract(currentValue, numToRemove) {
    document.getElementById('textBox').value = '-';
    currentValue -= numToRemove;
}
function multiply(currentValue, numToMultiply) {
    document.getElementById('textBox').value = 'x';
    currentValue *= numToMultiply;
}
function divide(currentValue, numToDivide) {
    document.getElementById('textBox').value = '÷';
    currentValue /= numToDivide;
}
function percentage(currentValue) {
document.getElementById('textBox').value = '%';
}
function fraction (currentValue) {
document.getElementById('textBox').value = '+/-';
}
function operator(operator, num1, num2) {
    if (operator == '+') {
        add(num1, num2);
        } else if (operator == '-') {
            subtract(num1, num2);
            } else if (operator == '/') {
                divide(num1, num2);
                } else if (operator == '*') {
                    multiply(num1, num2);
    }
}
function eventHandler(num) {
    return function display() {
        var displayVal = document.getElementById('textBox').value;
        if (displayVal == 0 || displayVal == '+' || displayVal == '-' || displayVal == '÷' || displayVal == 'x' || displayVal == '%' || displayVal == '+/-') {
            document.getElementById('textBox').value = num;
            currentValue = num;
        } else {
            document.getElementById('textBox').value += num;
            currentValue = num;
        }
    }
}



document.getElementById('zero').addEventListener('click', eventHandler(0));
document.getElementById(1).addEventListener('click', eventHandler(1));
document.getElementById(2).addEventListener('click', eventHandler(2));
document.getElementById(3).addEventListener('click', eventHandler(3));
document.getElementById(4).addEventListener('click', eventHandler(4));
document.getElementById(5).addEventListener('click', eventHandler(5));
document.getElementById(6).addEventListener('click', eventHandler(6));
document.getElementById(7).addEventListener('click', eventHandler(7));
document.getElementById(8).addEventListener('click', eventHandler(8));
document.getElementById(9).addEventListener('click', eventHandler(9));



//calculator listeners
document.getElementById('add').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', subtract);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('percentage').addEventListener('click', percentage);
document.getElementById('fraction').addEventListener('click', fraction);

//reset listener
document.getElementById('ac').addEventListener('click', () => {
    document.getElementById('textBox').value = 0;
    currentValue = 0;
})

//decimal listener
document.getElementById('decimal').addEventListener('click', () => {
    document.getElementById('textBox').value += '.';
    currentValue += '.';
    console.log(currentValue);
})

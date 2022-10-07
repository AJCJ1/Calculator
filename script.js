//global variables
var currentValue = null;
var numberChosen = null;


//functions
function add(numTally, numToAdd) {
    document.getElementById('textBox').value = '+';
    numTally += numToAdd;
}
function subtract(numTally, numToRemove) {
    document.getElementById('textBox').value = '-';
    numTally -= numToRemove;
}
function multiply(numTally, numToMultiply) {
    document.getElementById('textBox').value = 'x';
    numTally *= numToMultiply;
}
function divide(numTally, numToDivide) {
    document.getElementById('textBox').value = '÷';
    numTally /= numToDivide;
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
        if (document.getElementById('textBox').value == 0) {
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

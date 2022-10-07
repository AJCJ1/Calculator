//Mathematics


var tallyNum = 0;

function add(numTally, numToAdd) {
    numTally += numToAdd;
}
function subtract(numTally, numToRemove) {
    numTally -= numToRemove;
}
function multiply(numTally, numToMultiply) {
    numTally *= numToMultiply;
}
function divide(numTally, numToDivide) {
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
//global variables
var opNum = null; // the value chosen to interact w rolling value
var operatorInUse = null; // the operator to use when running operate
var isSecondCalculation = false; // when true, doesn't replace
var tallyVal = null; // This is the rolling value

//functions

function add(opNum, numToAdd) {






if (isSecondCalculation == true) {
    tallyVal
}
document.getElementById('textBox').value = tallyVal;
}
function subtract(opNum, numToRemove) {
    specialCharChanger('-');   
    opNum -= numToRemove;
}
function multiply(opNum, numToMultiply) {   
    specialCharChanger('x');   
    opNum *= numToMultiply;
}
function divide(opNum, numToDivide) {
    specialCharChanger('÷');
    opNum /= numToDivide;
}
function percentage(opNum) {
    specialCharChanger('%');   
}
function fraction (opNum) {
    specialCharChanger('+/-');   
}
function operator(num1, num2) {
    if (operatorInUse == '+') {
        tallyVal = add(tallyVal, opNum);
    } else if (operator == '-') {
        subtract(num1, num2);
    } else if (operator == '/') {
        divide(num1, num2);
    } else if (operator == '*') {
        multiply(num1, num2);
    }
}
function eventHandler(valClicked) { // changes value shown on display
    return function display() {
    var displayVal = document.getElementById('textBox').value;
        if (document.getElementById('textBox').value == 0 || valClicked == '+' || valClicked == '-' || valClicked == '÷' || valClicked == 'x' || valClicked == '%' || valClicked == '+/-') {
            tallyVal = displayVal;
            console.log(tallyVal);
            document.getElementById('textBox').value = valClicked;
            operatorInUse = valClicked;
        } else if (displayVal == '+' || displayVal == '-' || displayVal == '÷' || displayVal == 'x' || displayVal == '%' || displayVal == '+/-') {
            document.getElementById('textBox').value = valClicked;
        } else {
            document.getElementById('textBox').value += valClicked;
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
document.getElementById('add').addEventListener('click', eventHandler('+'));
document.getElementById('subtract').addEventListener('click', eventHandler('-'));
document.getElementById('multiply').addEventListener('click', eventHandler('x'));
document.getElementById('divide').addEventListener('click', eventHandler('÷'));
document.getElementById('percentage').addEventListener('click', eventHandler('%'));
document.getElementById('fraction').addEventListener('click', eventHandler('+/-'));
document.getElementById('equals').addEventListener('click', operator);
//reset listener
document.getElementById('ac').addEventListener('click', () => {
    document.getElementById('textBox').value = 0;
    tallyNum = 0;
    opNum = 0;
})

//decimal listener
document.getElementById('decimal').addEventListener('click', () => {
    let displayVal = document.getElementById('textBox').value;
    if (displayVal.includes('.') == true || displayVal == '-' || displayVal == '+' || displayVal == '÷' || displayVal == 'x' || displayVal == '+/-' || displayVal == '%') {
        alert('Only one decimal at a time, and not after an operator!')
    } else {
    document.getElementById('textBox').value += '.';
    opNum += '.';
    }
})
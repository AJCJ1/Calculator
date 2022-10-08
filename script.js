//global variables
var opNum = null; // the value chosen to interact w rolling value
var operatorInUse = null; // the operator to use when running operate
var isSecondCalculation = false; // when true, doesn't replace
var tallyVal = null; // This is the rolling value
//functions
function add(num1, num2) {
    document.getElementById('textBox').value = num1 + num2;
}
function subtract(num1, num2) {  
    document.getElementById('textBox').value = num1 - num2;
}
function multiply(num1, num2) {      
    document.getElementById('textBox').value = num1 * num2;
}
function divide(num1, num2) {
    document.getElementById('textBox').value = num1 / num2;
}
function percentage(num1) {
    document.getElementById('textBox').value = num1 / 100;
}
function negate (num1) {
    document.getElementById('textBox').value = '-' + num1;
}
function operator() {
    if (operatorInUse == '+') {
        tallyVal = add(tallyVal, opNum);
    } else if (operatorInUse == '-') {
        subtract(tallyVal, opNum);
    } else if (operatorInUse == '÷') {
        divide(tallyVal, opNum);
    } else if (operatorInUse == 'x') {
        multiply(tallyVal, opNum);
    } else {
        alert("Select an operator before pressing =");
    }
}
function eventHandler(valClicked) { // changes value shown on display
    return function display() {
    var displayVal = document.getElementById('textBox').value;
        if (displayVal.includes('.') == true && valClicked == '.') {
            alert('Only one decimal at a time');
        } else if (valClicked == '%') {
            percentage(document.getElementById('textBox').value);
        } else if (valClicked == '+/-') {
            negate(document.getElementById('textBox').value);
        } else if ((displayVal == 0 && valClicked == '.') || (valClicked == '.') && (displayVal == '+' || displayVal == '-' || displayVal == '÷' || displayVal == 'x' || displayVal == '%' || displayVal == '+/-')) {
            document.getElementById('textBox').value = '0.';
        } else if (((displayVal == 0) && (displayVal.includes('.') == false))|| valClicked == '+' || valClicked == '-' || valClicked == '÷' || valClicked == 'x' || valClicked == '%' || valClicked == '+/-') {
            tallyVal = displayVal;
            document.getElementById('textBox').value = valClicked;
            operatorInUse = valClicked;
        } else if (displayVal == '+' || displayVal == '-' || displayVal == '÷' || displayVal == 'x' || displayVal == '%' || displayVal == '+/-') {
            operatorInUse = displayVal;
            document.getElementById('textBox').value = valClicked;
        } else if (valClicked == '=') {
            opNum = displayVal;
            opNum = parseFloat(opNum);
            tallyVal = parseFloat(tallyVal); 
            operator(operatorInUse);
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
document.getElementById('decimal').addEventListener('click', eventHandler('.'));
document.getElementById('equals').addEventListener('click', eventHandler('='));
//reset listener
document.getElementById('ac').addEventListener('click', () => {
    document.getElementById('textBox').value = 0;
    tallyNum = 0;
    opNum = 0;
});
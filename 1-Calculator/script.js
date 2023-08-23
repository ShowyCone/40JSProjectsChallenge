const display = document.getElementById('display');
let newText = false;

function writeNum(num) {
    if (newText) {
        deleteAll(num);
        newText = false;
    }
    display.value += num;
}

function deleteNum() {
    let total = display.value.substring(0, display.value.length - 1);
    display.value = total;
}

function deleteAll(symb) {
    if (symb == '+') return 0;
    if (symb == '-') return 0;
    if (symb == '/') return 0;
    if (symb == '*') return 0;
    display.value = '';
}

function calculate() {
    newText = true;
    try {
        if (eval(display.value) % 1 === 0)
            display.value = eval(display.value);
        else
            display.value = eval(display.value).toFixed(4);
    } catch (e) {
        display.value = 'Syntax error';
    }
}   
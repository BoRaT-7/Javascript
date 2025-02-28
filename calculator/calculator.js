function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) { 
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        return add(a, b);
    } 
    else if (operation === 'subtract') {
        return subtract(a, b);
    } 
    else if (operation === 'multiply') {
        return multiply(a, b);
    } 
    else if (operation === 'divide') {
        return divide(a, b);
    } 
    else {
        return "Only 'add', 'subtract', 'multiply', and 'divide' operations are allowed.";
    }
}


const result = calculator(5, 7, 'add');
console.log(result);

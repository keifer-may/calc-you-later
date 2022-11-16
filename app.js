function add() {
    let sum = parseInt(arguments[0]);
    for (let i = 1; i < arguments.length; i++){
        sum += parseInt(arguments[i]);
    }
    return sum;
}

function subtract() {
    let total = parseInt(arguments[0]);
    for (let i = 1; i < arguments.length; i++){
        total -= parseInt(arguments[i]);
    }
    return total;
}

function multiply() {
    let total = parseInt(arguments[0]);
    for (let i = 1; i < arguments.length; i++){
        total *= parseInt(arguments[i]);
    }
    return total;
}

function divide() {
    let total = parseInt(arguments[0]);
    for (let i = 1; i < arguments.length; i++){
        total /= parseInt(arguments[i]);
    }
    return total;
}

function operate(equation) {
    if (equation.includes('+')){
        let newEquation = equation.split('+');
        return add(...newEquation);
    }
    else if (equation.includes('-')){
        let newEquation = equation.split('-');
        return subtract(...newEquation);
    }
    else if (equation.includes('*')){
        let newEquation = equation.split('*');
        return multiply(...newEquation);
    }
    else if (equation.includes('/')){
        let newEquation = equation.split('/');
        return divide(...newEquation);
    }
}


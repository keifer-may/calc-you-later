function add() {
    let sum = 0;
    for (let i =0; i < arguments.length; i++){
        sum += parseInt(arguments[i]);
    }
    return sum;
}

function subtract() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        total -= parseInt(arguments[i]);
    }
    return total;
}

function multiply() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        total *= parseInt(arguments[i]);
    }
    return total;
}

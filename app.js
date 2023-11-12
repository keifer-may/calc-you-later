// let display = document.getElementById("input");

// let total = 0;

// display.value = total;

// function add() {
//     let sum = parseInt(arguments[0]);
//     for (let i = 1; i < arguments.length; i++){
//         sum += parseInt(arguments[i]);
//     }
//     return sum;
// }

// function subtract() {
//     let total = parseInt(arguments[0]);
//     for (let i = 1; i < arguments.length; i++){
//         total -= parseInt(arguments[i]);
//     }
//     return total;
// }

// function multiply() {
//     let total = parseInt(arguments[0]);
//     for (let i = 1; i < arguments.length; i++){
//         total *= parseInt(arguments[i]);
//     }
//     return total;
// }

// function divide() {
//     let total = parseInt(arguments[0]);
//     for (let i = 1; i < arguments.length; i++){
//         total /= parseInt(arguments[i]);
//     }
//     return total;
// }

// function operate(equation) {
//     if (equation.includes('+')){
//         let newEquation = equation.split('+');
//         return add(...newEquation);
//     }
//     else if (equation.includes('-')){
//         let newEquation = equation.split('-');
//         return subtract(...newEquation);
//     }
//     else if (equation.includes('*')){
//         let newEquation = equation.split('*');
//         return multiply(...newEquation);
//     }
//     else if (equation.includes('/')){
//         let newEquation = equation.split('/');
//         return divide(...newEquation);
//     }
// }


function calculate(num1, operator, num2) {
    let formNum1 = parseFloat(num1);
    let formNum2 = parseFloat(num2);
    let total = 0
    let operators = ["+", "-", "/","*"]
    
    if(isNaN(formNum1) && isNaN(formNum2)) {
        return total
    } else if (isNaN(formNum1)) {
        return formNum2
    } else if (isNaN(formNum2)) {
        return formNum1
    } else if (operators.includes(operator)) {
        total = eval(num1 + operator + num2);
        let evalTotal = parseFloat(total)
        let intTotal = parseInt(evalTotal);
        if (total == intTotal) {
            return intTotal
        } else {
            return evalTotal
        }
    } else {
        return 0
    }

}

// function subtract(num1, num2) {
//     let formNum1 = parseFloat(num1);
//     let formNum2 = parseFloat(num2);
//     let total = 0
    
//     if(isNaN(formNum1) && isNaN(formNum2)) {
//         return total
//     } else if (isNaN(formNum1)) {
//         return -formNum2
//     } else if (isNaN(formNum2)) {
//         return formNum1
//     } else {
//         total = formNum1 - formNum2;
//         let intTotal = parseInt(total);
//         if (total == intTotal) {
//             return intTotal
//         } else {
//             return total
//         }
//     }
// }

// function multiply(num1, num2) {
//     let formNum1 = parseFloat(num1);
//     let formNum2 = parseFloat(num2);
//     let total = 0
    
//     if(isNaN(formNum1) && isNaN(formNum2)) {
//         return total
//     } else if (isNaN(formNum1)) {
//         return formNum2
//     } else if (isNaN(formNum2)) {
//         return formNum1
//     } else {
//         total = formNum1 * formNum2;
//         let intTotal = parseInt(total);
//         if (total == intTotal) {
//             return intTotal
//         } else {
//             return total
//         }
//     }
// }

// function divide(num1, num2) {
//     let formNum1 = parseFloat(num1);
//     let formNum2 = parseFloat(num2);
//     let total = 0
    
//     if(isNaN(formNum1) && isNaN(formNum2)) {
//         return total
//     } else if (isNaN(formNum1)) {
//         return formNum2
//     } else if (isNaN(formNum2)) {
//         return formNum1
//     } else {
//         total = formNum1 / formNum2;
//         let intTotal = parseInt(total);
//         if (total == intTotal) {
//             return intTotal
//         } else {
//             return total
//         }
//     }
// }
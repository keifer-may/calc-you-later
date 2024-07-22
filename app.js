const input = document.getElementById("INPUT");

document.addEventListener("keydown", logKey);

const buttons = document.querySelectorAll("button");

function logKey(e) {
    // console.log(` ${e.code} ${e.key}`);
    let pressed = e.key;
    // console.log(pressed);
    if (pressed === ".") {
        pressed = "dot";
        document.getElementById(pressed).click();
    } else {
        document.getElementById(pressed).click();
    }
}

let createEquation = "";
let endStatement = false;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let sendChar = this.id;
        if (sendChar == "Delete") {
            input.innerHTML = 0;
            createEquation = "";
        } else if (sendChar == "dot") {
            if (input.innerHTML.includes(".") == false) {
                input.innerHTML += ".";
                endStatement = false;
            } else {
                input.innerHTML = input.innerHTML;
            }
        } else if (sendChar == "Enter") {
            createEquation += input.innerHTML;
            // console.log(createEquation);
            let amount = eval(createEquation);
            let lengthAmount = amount.toString().length;
            if (lengthAmount > 10 && amount % 1 != 0) {
                input.innerHTML = amount.toFixed(3);
                endStatement = true;
                createEquation = "";
            } else if (amount == "Infinity") {
                alert("You can't divide by zero, you silly goose!");
                input.innerHTML = 0;
                endStatement = true;
                createEquation = "";
            } else {
                input.innerHTML = amount;
                endStatement = true;
                createEquation = "";
            }
        } else if (sendChar == "+") {
            createEquation += input.innerHTML + "+";
            endStatement = true;
        } else if (sendChar == "-") {
            createEquation += input.innerHTML + "-";
            endStatement = true;
        } else if (sendChar == "/") {
            createEquation += input.innerHTML + "/";
            endStatement = true;
        } else if (sendChar == "*") {
            createEquation += input.innerHTML + "*";
            endStatement = true;
        } else {
            if (input.innerHTML == "0" || endStatement == true) {
                input.innerHTML = sendChar;
                endStatement = false;
            } else {
                input.innerHTML += sendChar;
            }
        }
    });
}
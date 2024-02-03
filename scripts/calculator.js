

function operate(operator,inputNumberOne, inputNumberTwo) {

    // add
    if (operator === "+") {
        calcResult = inputNumberOne + inputNumberTwo;
    };

    if (operator === "-") {
        calcResult =  inputNumberOne - inputNumberTwo;

    };

    if (operator === "*") {
        calcResult =  inputNumberOne * inputNumberTwo;

    };

    if (operator === "/") {
        calcResult =  inputNumberOne / inputNumberTwo;

    };

    return calcResult;



}

console.log(operate("+",5,7));

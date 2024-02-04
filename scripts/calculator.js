
let number1 = "";
let number2 = "";
let previousOperator = "";
let usedOperator = "";
let isOperatorClicked = false;


btn1 = document.querySelector(".btn-1");
btn2 = document.querySelector(".btn-2");
btn3 = document.querySelector(".btn-3");
btn4 = document.querySelector(".btn-4");
btn5 = document.querySelector(".btn-5");
btn6 = document.querySelector(".btn-6");
btn7 = document.querySelector(".btn-7");
btn8 = document.querySelector(".btn-8");
btn9 = document.querySelector(".btn-9");
btn0 = document.querySelector(".btn-0");

btnPercent = document.querySelector(".btn-percent");
btnDivide = document.querySelector(".btn-divide");
btnPlusMin = document.querySelector(".btn-plusmin");
btnMultiply = document.querySelector(".btn-multiply");
btnMinus = document.querySelector(".btn-minus");
btnPlus = document.querySelector(".btn-plus");
btnResult = document.querySelector(".btn-result");
btnC = document.querySelector(".btn-c");
btnAc = document.querySelector(".btn-ac");
btnDot = document.querySelector(".btn-dot");

btn1.addEventListener("click", () => handleNumberClick("1"));
btn2.addEventListener("click", () => handleNumberClick("2"));
btn3.addEventListener("click", () => handleNumberClick("3"));
btn4.addEventListener("click", () => handleNumberClick("4"));
btn5.addEventListener("click", () => handleNumberClick("5"));
btn6.addEventListener("click", () => handleNumberClick("6"));
btn7.addEventListener("click", () => handleNumberClick("7"));
btn8.addEventListener("click", () => handleNumberClick("8"));
btn9.addEventListener("click", () => handleNumberClick("9"));
btn0.addEventListener("click", () => handleNumberClick("0"));
btnDot.addEventListener("click", () => handleNumberClick("."));


btnC.addEventListener("click", function () {
    resetNumbers();
    displayResult(0);

});

btnAc.addEventListener("click", function () {
    resetNumbers();
    displayResult(0);

});

btnDivide.addEventListener("click", () => handleOperandClick("/"));
btnMinus.addEventListener("click", () => handleOperandClick("-"));
btnPlus.addEventListener("click", () => handleOperandClick("+"));
btnMultiply.addEventListener("click", () => handleOperandClick("*"));
btnResult.addEventListener("click", () => handleOperandClick("="));


btnPlusMin.addEventListener("click", function () {
    isOperatorClicked = true;

});

function resetNumbers() {
    number1 = "";
    number2 = "";
    previousOperator = "";
    usedOperator = "";
    isOperatorClicked = false;
}

function operate(operator, inputNumberOne, inputNumberTwo) {
    let numberOne = 0;
    let numberTwo = 0;
    numberOne = parseFloat(inputNumberOne);
    numberTwo = parseFloat(inputNumberTwo);

    if (operator == "+") {
        calcResult = numberOne + numberTwo;
    };

    if (operator === "-") {
        calcResult = numberOne - numberTwo;

    };

    if (operator === "*") {
        calcResult = numberOne * numberTwo;

    };

    if (operator === "/") {

        if (numberTwo === 0) {
            resetNumbers();
            return "!!ERROR!!";
        } else {
            calcResult = numberOne / numberTwo;
        }


    };


    calcResult = parseFloat(calcResult).toFixed(9).replace(/0+$/, '').replace(/\.+$/, '');
    return calcResult;
}

function displayResult(number) {
    const displayresult = document.querySelector('.calculator-display');

    displayresult.innerHTML = number;

}

function handleNumberClick(number) {

    if (!isOperatorClicked) {
        if (number2 !== "") {
            if (number2.length < 10) {
                number2 += number;
                displayResult(number2);
                return;
            } else {
                return;
            };
        }
        if (number1.length < 10) {
            number1 += number;
            displayResult(number1);
        } else {
            return;
        };
    } else {
        isOperatorClicked = false;

        if (number2 !== "") {

            /*                    calculatedResult = operate(usedoperator, number1, number2);
                                displayResult(calculatedResult);
                                number2 = "";
                                number1 = calculatedResult;
                                usedoperator = ""; */

        } else {
            if (number2.length < 10) {
                number2 += number;
                displayResult(number2);
                return;
            };
        }
    };
}

function handleOperandClick(operator) {
    isOperatorClicked = true;

    if (number2 === "") {
        previousOperator = operator;
        return;
    }

    if (number1 !== "" && number2 !== "") {
        calculatedResult = operate(previousOperator, number1, number2);
        displayResult(calculatedResult);
        number2 = "";
        number1 = calculatedResult;
        previousOperator = operator;

        if (operator === "=") {
            resetNumbers();
        }

    }

}



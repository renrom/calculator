
let number1 = "";
let number2 = "";
let previousOperator = "";
let usedOperator = "";
let isOperatorClicked = false;
let clearResult = false;


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

document.addEventListener("keydown", (keypressed) => {

    if (keypressed.code === 'Digit1' || keypressed.code === "Numpad1") {
        handleNumberClick("1");
    }

    if (keypressed.code === 'Digit2' || keypressed.code === "Numpad2") {
        handleNumberClick("2");
    }
    if (keypressed.code === 'Digit3' || keypressed.code === "Numpad3") {
        handleNumberClick("3");

    }
    if (keypressed.code === 'Digit4' || keypressed.code === "Numpad4") {
        handleNumberClick("4");
    }

    if (keypressed.code === 'Digit5' || keypressed.code === "Numpad5") {
        handleNumberClick("5");
    }

    if (keypressed.code === 'Digit6' || keypressed.code === "Numpad6") {
        handleNumberClick("6");
    }
    if (keypressed.code === 'Digit7' || keypressed.code === "Numpad7") {
        handleNumberClick("7");
    }
    if (keypressed.code === 'Digit8' || keypressed.code === "Numpad8") {
        handleNumberClick("8");
    }
    if (keypressed.code === 'Digit9' || keypressed.code === "Numpad9") {
        handleNumberClick("9");
    }
    if (keypressed.code === 'Digit0' || keypressed.code === "Numpad0") {
        handleNumberClick("0");
    }

    if (keypressed.code === "NumpadAdd") {
        handleOperandClick("+");
    }


    if (keypressed.code === 'Minus' || keypressed.code === "NumpadSubtract") {
        handleOperandClick("-");
    }

    if (keypressed.code === "NumpadMultiply") {
        handleOperandClick("*");
    }

    if (keypressed.code === 'Slash' || keypressed.code === "NumpadDivide") {
        handleOperandClick("/");
    }

    if (keypressed.code === 'Period' || keypressed.code === "NumpadDecimal") {
        handleOperandClick(".");
    }

    if (keypressed.code === 'Equal' || keypressed.code === "NumpadEnter") {
        handleResult();
    }

    if (keypressed.code === 'Delete'){
        resetLastNumber();
    }

});


function handleDotClicked() {
    if (number2 !== "") {
        if (number2.indexOf(".") === -1) {
            handleNumberClick(".");
        }
    } else {
        if (number1.indexOf(".") === -1) {
            handleNumberClick(".");
        }

    }
}


btnDot.addEventListener("click", function () {
    handleDotClicked();
});

btnC.addEventListener("click", function () {
    resetLastNumber();
});

btnAc.addEventListener("click", function () {
    resetNumbers();
    displayResult(0);
});

btnDivide.addEventListener("click", () => handleOperandClick("/"));
btnMinus.addEventListener("click", () => handleOperandClick("-"));
btnPlus.addEventListener("click", () => handleOperandClick("+"));
btnMultiply.addEventListener("click", () => handleOperandClick("*"));
btnResult.addEventListener("click", () => handleResult());

btnPlusMin.addEventListener("click", function () {
    displayResult("Not Yet");
    resetNumbers();
});

btnPercent.addEventListener("click", function () {
    displayResult("Not Yet");
    resetNumbers();
});


function resetNumbers() {
    number1 = "";
    number2 = "";
    previousOperator = "";
    usedOperator = "";
    isOperatorClicked = false;
}

function resetLastNumber() {
    if (number2 !== "") {
        number2 = "";
        isOperatorClicked = true;

    } else {
        number1 = "";
    }
    displayResult(0);
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
            return "error";
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

        if (number2 === ""){
            if (number2.length < 10) {
                number2 += number;
                displayResult(number2);
                return;
            };
        }
    };
}


function handleResult() {
    if (number1 !== "" && number2 !== "") {
        calculatedResult = operate(previousOperator, number1, number2);
        displayResult(calculatedResult);
        resetNumbers();
        number1 = calculatedResult;
        
        
    }
};



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
    }
}




let number1 = "";
let number2 = "";

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
btnplusmin = document.querySelector(".btn-plusmin");
btnMulitply = document.querySelector(".btn-multiply");
btnMinus = document.querySelector(".btn-minus");
btnPlus = document.querySelector(".btn-plus");
btnRresult = document.querySelector(".btn-result");
btnC = document.querySelector(".btn-c");
btnCe = document.querySelector(".btn-ce");

btn1.addEventListener("click", function () {
    if (isOperatorClicked) {
        number2 += "1";   
        displayResult(number2);
    } else {
        number1 += "1";
        displayResult(number1);
    }

});

btn2.addEventListener("click", function () {
    displayResult(2);
    
});

btnC.addEventListener("click", function () {
    resetNumbers();
    displayResult(0);
    
});

btnDivide.addEventListener("click", function () {
    isOperatorClicked = true;
    
});

function resetNumbers() {
    let number1 = "";
    let number2 = "";
}


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

function displayResult(number){
        const displayresult = document.querySelector('.calculator-display');

        displayresult.innerHTML = number;
 
}




displayResult(operate("+",12323,342345));

console.log(operate("+",5,7));



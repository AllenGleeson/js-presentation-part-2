let firstNum = false;
let secondNum = false;
let operator;

function getDisplay(){
	return document.getElementById("display").innerText;
}

function printDisplay(num){
	document.getElementById("display").innerText=num;
}

function operate(operator, firstNum, secondNum ) {
    let result = 0;
    switch(operator) {
        case '+' :
            result  = ((a, b) => {return a+b;})(firstNum, secondNum);
            console.log("first:"+firstNum);
            console.log("second"+secondNum);
            console.log("result"+result);
            break;
        case '-' : 
            result  = ((a, b) => {return a-b;})(firstNum, secondNum);
            break;
        case '*' :
            result  = ((a, b) => {return a*b;})(firstNum, secondNum);
            break;
        case '÷' :
            result  = ((a, b) => {return a/b;})(firstNum, secondNum);
            break;
    }
    console.log("firstNum:"+firstNum);
    console.log("secondNum:"+secondNum);
    console.log("result:"+result);
    return result;
}

function setOperator(op){
    operator = op;
    firstNum = getDisplay();
    printDisplay(0);
}

function enterNumber(number){
    if((number == 0) && (getDisplay() == 0)){
        return;
    }
    else{
        if(getDisplay() == 0){
            printDisplay(number);
        }
        else{
        printDisplay((getDisplay())+number);
        }
    }
    console.log("enterNumber:"+number);
}

function readyCheck(){
    console.log("operator:"+operator+"firstNum:"+firstNum+"secondNum:"+secondNum);
    let check = false;
    if(operator && firstNum && secondNum){
        if((secondNum==0) && (operator == "÷")){
            printDisplay("Sorry, you can't divide by zero.")
        }
        else{
            check = true;
        }
    }
    return check;
}

[...document.getElementsByClassName('numbers')].forEach(number => {
    number.addEventListener('click', function() {
        enterNumber(number.value);
    })
  });

[...document.getElementsByClassName('operators')].forEach(operator => {
    operator.addEventListener('click', function() {
        console.log(operator.value);
        setOperator(operator.value);
    })
});

document.getElementById("equals").addEventListener('click', function(){
    if(firstNum){
        secondNum = getDisplay();
        if(readyCheck()){
            let result = operate(operator, firstNum, secondNum);
            printDisplay(result);
            firstNum = result;
        }
        else{
            alert("operator:"+operator+"firstNum:"+firstNum+"secondNum:"+secondNum);
        }
    }
    else{
        secondNum = getDisplay();
        if(readyCheck()){
            let result = operate(operator, firstNum, secondNum);
            printDisplay(result);
            firstNum = result;
        }
    }
});

document.getElementById("clear").addEventListener('click', function(){
    firstNum = false;
    secondNum = false;
    operator = false;
    printDisplay(0);
});

document.getElementById("decimal").addEventListener('click', function(){
    if(getDisplay().includes(".")){
        return;
    }
    else{
        printDisplay((getDisplay())+this.value);
    }
});

console.log(operate("/", 2, 0));
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
        case '/' :
            result  = ((a, b) => {return a/b;})(firstNum, secondNum);
            break;
    }
    return result;
}

function setOperator(operator){
    operator = operator;
    firstNum = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
}

function enterNumber(number){
    if(firstNum){
        document.getElementById("display").innerHTML += number;
    }
    else{
        document.getElementById("display").innerHTML += number;
    }
    console.log("enterNumber:"+number);
}

function readyCheck(){
    let check = false;
    if(operator && firstNum && secondNum){
        if(secondNum==0){
            document.getElementById("display").innerHTML = "Sorry, you can't divide by zero."
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
        setOperator(operator.value);
    })
});

document.getElementById("equals").addEventListener('click', function(){
    if(secondNum){
        if(readyCheck()){
            let result = operate(operator, firstNum, secondNum);
            document.getElementById("display").innerHTML = result;
            firstNum = result;
        }
        else{
            alert("Sorry, you need")
        }
    }
    else{
        secondNum = document.getElementById("display").value;
        if(readyCheck()){
            let result = operate(operator, firstNum, secondNum);
            document.getElementById("display").innerHTML = result;
            firstNum = result;
        }
    }
})


let firstNum = false;
let secondNum = false;
let operator;
console.log(operate("/", 2, 0));
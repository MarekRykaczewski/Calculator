const add = function(num1, num2) {
	let output = num1 + num2
  return output
};

const subtract = function(num1, num2) {
	let output = num1 - num2
  return output
};

const multiply = function(num1, num2) {
	let output = num1 * num2
  return output
};

const divide = function(num1, num2) {
	let output = num1 / num2
  return output
};

const operate = function(operator, num1, num2) {
   let output =  operator(num1, num2)
   return output
}

const clearBtn = document.getElementById('clearbutton');

clearBtn.onclick = function() {
  result.innerHTML='';
  firstNum = 0;
  secondNum = 0;
}

const result = document.getElementById('result');
let numberBtns = document.getElementsByClassName('calcNumBtn');
let operatorBtns = document.getElementsByClassName('calcOpBtn');

let firstNum = 0
let secondNum = 0
let operator



for (let i = 0; i < numberBtns.length; i++) {
  let numberBtn = numberBtns[i];
  numberBtn.onclick = function() {
    let input = this.textContent
    result.append(input)
    firstNum = Number(result.textContent)    
    result.innerHTML = '';
    result.append(output)
    firstNum = output
 
  
  console.log(firstNum)
  console.log(secondNum)
  
  }
}

for (let i = 0; i < operatorBtns.length; i++) {
  let operatorBtn = operatorBtns[i];
  operatorBtn.onclick = function() {
    secondNum = firstNum
    operator = this.getAttribute('id');
    console.log(operator)
    result.innerHTML = '';

  }
}

let equalsBtn = document.getElementById('equalsbutton')

equalsBtn.onclick = function() {
  let output
  if (operator == 'add') {
    output = operate(add, firstNum, secondNum)
  } else if (operator == 'subtract') {
    output = operate(subtract, secondNum, firstNum)
  } else if (operator == 'multiply') {
    output = operate(multiply, firstNum, secondNum)
  } else if (operator == 'divide') {
    output = operate(divide, secondNum, firstNum)
  }

  result.innerHTML = '';
  result.append(output)
}
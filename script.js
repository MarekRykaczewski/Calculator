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

const result = document.getElementById('result');
let numberBtns = document.getElementsByClassName('calcBtn');

for (let i = 0; i < numberBtns.length; i++) {
  let numberBtn = numberBtns[i];
  numberBtn.onclick = function() {
    let input = this.textContent
    result.append(input)
  }
}


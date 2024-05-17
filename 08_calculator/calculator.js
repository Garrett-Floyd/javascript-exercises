const add = function(Num1, Num2) {
	return Num1 + Num2;
};

const subtract = function(Num1, Num2) {
	return Num1 - Num2;
};

const sum = function(array) {
  let sum = 0;
	for (let idx = 0; idx < array.length; ++idx){
    sum += array[idx];
  }
  return sum;
};

const multiply = function(array) {
  let output = 1;
	for (let idx = 0; idx < array.length; ++idx){
    output *= array[idx];
  }
  return output;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(int) {
  let counter = int;
  if (int <= 0) {
    counter = 1;
  }

  let output = 1;
  while (counter > 1) {
    output *= counter;
    --counter;
  }

  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

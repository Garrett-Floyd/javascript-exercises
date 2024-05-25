const add = function(Num1, Num2) {
	return Num1 + Num2;
};

const subtract = function(Num1, Num2) {
	return Num1 - Num2;
};

const sum = function(array) {
  return array.reduce((accumulator, currVal) => accumulator + currVal, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator,currVal) => accumulator*currVal, 1);
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

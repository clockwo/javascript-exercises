const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numbers) {
  return numbers.reduce((sum, x) => sum + x, 0);
};

const multiply = function (...numbers) {
  return numbers.reduce((previous, current) => previous * current, 1);
};

const power = function (value, power) {
  return value ** power;
};

const factorial = function (factorial) {
  let factorialSum = 1;
  if (factorial === factorialSum) {
    return 1;
  }
  for (let i = 2; i <= factorial; i++) {
    factorialSum *= i;
  }
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

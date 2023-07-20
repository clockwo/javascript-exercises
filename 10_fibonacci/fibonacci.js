const fibonacci = function (targetNumber) {
  let fOne = 1;
  let fTwo = 2;
  let counter = 4;
  while (true) {
    fOne = fOne + fTwo;
    if (counter === targetNumber) {
      return fOne;
    }
    counter++;
    fTwo = fOne + fTwo;
  }
};

// Do not edit below this line
module.exports = fibonacci;

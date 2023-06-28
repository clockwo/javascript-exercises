const reverseString = function (str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

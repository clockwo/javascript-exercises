const sumAll = function (startNum, endNum) {
  // Check if the numbers are positive integers
  if (
    startNum < 0 ||
    endNum < 0 ||
    !Number.isInteger(startNum) ||
    !Number.isInteger(endNum)
  ) {
    return 'ERROR';
  }
  // Swap numbers if startNum is larger
  if (startNum > endNum) {
    const swapNumber = endNum;
    endNum = startNum;
    startNum = swapNumber;
  }

  // Calculate the sum of all numbers in the range
  let rangeLength = endNum - startNum + 1;
  let endPointsSum = startNum + endNum;
  return (rangeLength * endPointsSum) / 2;
};

// Do not edit below this line
module.exports = sumAll;

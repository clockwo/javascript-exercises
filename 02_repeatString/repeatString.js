const repeatString = function (str, repeats) {
  if (repeats < 0) {
    return 'ERROR';
  }
  let repeatString = '';
  for (let i = 0; i < repeats; i++) {
    repeatString += str;
  }
  return repeatString;
};

// Do not edit below this line
module.exports = repeatString;

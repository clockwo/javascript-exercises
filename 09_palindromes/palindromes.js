const palindromes = function (str) {
  // remove whitespace, remove special chars => single world with characters
  const formattedStr = str.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let lastIndex = formattedStr.length - 1;
  for (let i = 0; i < formattedStr.length; i++) {
    if (formattedStr[i] !== formattedStr[lastIndex - i]) {
      return false;
    }
  }
  return true;
  // check first and last char, if they are no the same => return false
};

// Do not edit below this line
module.exports = palindromes;

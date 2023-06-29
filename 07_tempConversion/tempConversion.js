const convertToCelsius = function (temp) {
  return parseFloat(((5 / 9) * (temp - 32)).toFixed(1));
};

const convertToFahrenheit = function (temp) {
  return parseFloat(((9 / 5) * temp + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

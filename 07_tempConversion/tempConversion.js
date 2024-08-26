const convertToCelsius = function(tempInFar) {
  tempInCelsius = (tempInFar - 32) *5 / 9;
  return tempInCelsius;
};

const convertToFahrenheit = function(tempInCel) {
  tempinFahrenheit = (tempinCel *5 / 9) + 32;
  return tempinFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

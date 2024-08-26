const convertToCelsius = function(tempInFar) {
  tempCelsius = ((tempInFar - 32) * 5 / 9);
  tempCelsius = Math.round(tempCelsius * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(tempInCel) {
  tempFahrenheit = ((tempInCel * 9 / 5) + 32);
  tempFahrenheit = Math.round(tempFahrenheit * 10) / 10;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

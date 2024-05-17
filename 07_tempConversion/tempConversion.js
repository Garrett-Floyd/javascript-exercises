const convertToCelsius = function(degreesFahrenheit) {
  degreesCelsius = (degreesFahrenheit - 32)*(5.0/9.0);
  degreesCelsius = Number(degreesCelsius.toFixed(1));
  return degreesCelsius;
};

const convertToFahrenheit = function(degreesCelsius) {
  degreesFahrenheit = (degreesCelsius * (9.0/5.0)) + 32;
  degreesFahrenheit = Number(degreesFahrenheit.toFixed(1));
  return degreesFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const celsiusConverter = {
  "C": x => x,                        //for Celsius
  "F": x => (x - 32) * (5 / 9),       //for Fahrenheit
  "K": x => x - 273.15,               //for Kelvin
  "R": x => (x - 491.67) * (5 / 9),   //for Rankine
  "De": x => 100 - x * (2 / 3),       //for Delisle
  "N": x => x * (100 / 33),           //for Newton
  "Re": x => x * (5 / 4),             //for Réaumur
  "Ro": x => (x - 7.5) * (40 / 21),   //for Rømer
};

/**
 * https://www.codewars.com/kata/54ce9497975ca65e1a0008c6/train/javascript
 * @param {number} temp integer, the temperature to convert
 * @param {string} from_scale the current scale
 * @param {string} to_scale the scale to convert
 * @returns an integer represented the converted temperature
 */
function convertTemp(temp, from_scale, to_scale){
  return 0;
}

module.exports = convertTemp;

const celsiusConverter = {
  "C": {
    from: x => x,
    to: x => x,                        //for Celsius
  },
  "K": {
    from: x => x + 273.15,
    to: x => x - 273.15,               //for Kelvin
  },
  "F": {
    from: x => x * (9 / 5) + 32,
    to: x => (x - 32) * (5 / 9),       //for Fahrenheit
  },
  "R": {
    from: x => (x + 273.15) * (9 / 5),
    to: x => (x - 491.67) * (5 / 9),   //for Rankine
  },
  "De": {
    from: x => (100 - x) * (3 / 2),
    to: x => 100 - x * (2 / 3),       //for Delisle
  },
  "N": {
    from: x => x * (33 / 100),
    to: x => x * (100 / 33),           //for Newton
  },
  "Re": {
    from: x => x * (4 / 5),
    to: x => x * (5 / 4),             //for Réaumur
  },
  "Ro": {
    from: x => x * (21 / 40) + 7.5,
    to: x => (x - 7.5) * (40 / 21),   //for Rømer
  },
};

/**
 * https://www.codewars.com/kata/54ce9497975ca65e1a0008c6/train/javascript
 * @param {number} temp integer, the temperature to convert
 * @param {string} from_scale the current scale
 * @param {string} to_scale the scale to convert
 * @returns an integer represented the converted temperature
 */
function convertTemp(temp, from_scale, to_scale){
  const celcius = celsiusConverter[from_scale].to(temp)
  const result = celsiusConverter[to_scale].from(celcius);
  
  return Math.round(result);
}

module.exports = convertTemp;

/**
 * https://www.codewars.com/kata/5863f1c8b359c4dd4e000001/train/javascript
 * @param {[string]} arr Array of food information.
 */
function bulk(arr) {
  function getProteinsCalories(item, [pr, car, fat]) {
    const prTotal = calculate(item, pr);
    const carTotal = calculate(item, car);
    const fatTotal = calculate(item, fat);
    return [prTotal, (prTotal + carTotal)*4 + (fatTotal*9)]
  }

  const answer = arr.reduce((res, meal, i) => {
    const compound = meal.split(' ');
    


  }, [0, 0]);

  return `Total protein: ${answer[0]} grams, Total calories: ${answer[1]}`
}
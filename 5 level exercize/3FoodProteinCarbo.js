/**
 * https://www.codewars.com/kata/5863f1c8b359c4dd4e000001/train/javascript
 * @param {[string]} arr Array of food information.
 */
function bulk(arr) {
  function calculate(item, elem) {
    return ((item*elem)/100).toFixed(2);
  }

  function getProteinsCalories(item, [pr, carb, fat]) {
    const prTotal = calculate(item, pr);
    const carbTotal = calculate(item, carb);
    const fatTotal = calculate(item, fat);
    return [+prTotal, (+prTotal + +carbTotal)*4 + (+fatTotal*9)]
  }

  // the flatMap function won't work in ancient versions of node. An alternative is to spread all internal arrays manually
  const answer = arr.flatMap(mealChain => mealChain.split(', ')).reduce((res, meal) => {
    const compound = meal.split(' ');
    const prCalPerCompound = getProteinsCalories(+compound[0].substring(0, compound[0].length -1), food[compound[1]]);
    return [res[0]+prCalPerCompound[0], res[1]+prCalPerCompound[1]];
  }, [0, 0]);

  return `Total protein: ${parseFloat(answer[0])} grams, Total calories: ${parseFloat(answer[1])}`
}
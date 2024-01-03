/**
 * https://www.codewars.com/kata/5536a85b6ed4ee5a78000035/train/javascript
 * @param {[string]} friends List of friends
 * @param {[[string]]} fTowns Associative array that connect friends and towns.
 * @param {[string, number]} distTable Associative array taht connect an friend and a distance respect the granny.
 * @returns Total distance of the visiting all friends circuit.
 */
function tour(friends, fTowns, distTable) {
  let knownDistance = 0;
  const totalDistanceCircuit = friends.reduce((distance, friend) => {
    const townFriend = fTowns.find((townFriend) => townFriend.includes(friend));
    if (!townFriend)
      return distance;
    const townDistance = distTable.find((_, i) => townFriend[1] === distTable[i-1]);
    if (!townDistance)
      return distance;
    const unknownDistance = Math.sqrt(townDistance * townDistance - knownDistance * knownDistance);
    knownDistance = townDistance;
    return distance + unknownDistance;
  }, 0) + knownDistance;

  return Math.floor(totalDistanceCircuit);
}

var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];

console.log(tour(friends1, fTowns1, distTable1));

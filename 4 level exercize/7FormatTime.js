const minuteDuration = 60;
const hourDuration = minuteDuration * 60;
const dayDuration = hourDuration * 24;
const yearDuration = dayDuration * 365;

const timeDuration = [
  [ 'year', yearDuration ],
  [ 'day', dayDuration ],
  [ 'hour', hourDuration ],
  [ 'minute', minuteDuration ],
  [ 'second', 1 ],
];

/**
 * https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
 * @param {number} seconds positive integer including zero;
 * @returns formated time in human friendly written way.
 */
function formatDuration (seconds) {
  if (seconds === 0) {
    return 'now'
  }

  const timeComponents = timeDuration.reduce((arrayComponents, timeDur) => {
    if (seconds >= timeDur[1]) {
      // make calculations and return the corrent format for this specifica time-duration.
      // also update seconds accordingly.
      return [];
    }
    return arrayComponents;
  }, []);

  // next step: format the array to string with the final "and" to the last time-component.
}
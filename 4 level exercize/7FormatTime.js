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
  if (seconds === 0)
    return 'now'

  return timeDuration
    .reduce((arrayComponents, timeDur) => {
      if (seconds >= timeDur[1]) {
        const amount = Math.floor(seconds / timeDur[1]);
        seconds = seconds % timeDur[1];
        return [...arrayComponents, `${amount} ${timeDur[0]}${amount > 1 ? 's' : ''}`];
      }
      return arrayComponents;
    }, [])
    .join(', ').replace(/,\s([^,]+)$/, ' and $1'); // shorter solution, but maybe more heavy about calculation
    // .reduce((r, comp, i) => { // maybe the best performant solution, but larger one.
    //   return r + `${comp}${i < timeComponents.length-1 ? (i === timeComponents.length-2 ? ' and ' : ', '): ''}`;
    // }, "");
}

console.log(formatDuration(3662));

/**
 * https://www.codewars.com/kata/5a115ff080171f9651000046/train/javascript
 * @param {string} memorysize current memorysize in one of the scales KB or KiB
 * @returns the conversion unit to the other scale.
 */
function doMemorysizeConversion (memorysize){
  const relations = [
    { KiB: [1024/1000, 'kB'] , kB: [1000/1024, 'KiB'] },
    { MiB: [1024**2/1000**2, 'MB'], MB: [1000**2/1024**2, 'MiB']},
    { GiB: [1024**3/1000**3, 'GB'], GB: [1000**3/1024**3, 'GiB']},
    { TiB: [1024**4/1000**4, 'TB'], TB: [1000**4/1024**4, 'TiB']},
  ];
  const [amount ,measure] = memorysize.split(' ');
  const relation = relations.find (relation => relation[measure]);
  const conversion = Math.round(relation[measure][0] * amount * 1000) / 1000;
  
  return `${conversion} ${relation[measure][1]}`;
}

module.exports = doMemorysizeConversion;

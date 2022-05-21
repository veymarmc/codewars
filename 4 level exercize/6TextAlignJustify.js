/**
 * https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript
 */

/**
 * 
 * @param {string} text text to justify
 * @param {number} width width that form the line of text
 */
const justify = (text, width) =>
  text
    .split(' ')
    .reduce((lines, word) => (
      ([...lines[lines.length - 1], word].join(' ').length <= width)
        ? (typeof lines[lines.length - 1].push(word) === 'object' || lines)
        : (typeof lines.push([word]) === 'object' || lines)
    ), [[]])
    .map((line, i, a) => {
      const span = width - line.join('').length;
      if (i !== a.length - 1 && line.length > 1) {
        Array(span % (line.length -1)).fill(' ').forEach((s, i) => {
          line[i] += s;
        });
        return line.join(Array(~~(span / (line.length - 1))).fill(' ').join(''));
      }
      return line.join(' ');
    })
    .join('\n');

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';

console.log(justify(LIPSUM, 18));
const buildCrib = require('./mTVCribs');

describe("Testing", function() {
  test("Let's check your mansion", () => {
    console.log('Your house:\n' + buildCrib(1), '\nHow it should look:\n /\\ \n/__\\\n|__|');
    expect(buildCrib(1)).toBe( 
    ' /\\ \n/__\\\n|__|');
    console.log('Your house:\n ' + buildCrib(2), '\nHow it should look:\n  /\\  \n /  \\ \n/____\\\n|    |\n|____|');
    expect(buildCrib(2)).toBe('  /\\  \n /  \\ \n/____\\\n|    |\n|____|');
    console.log('Your house:\n' + buildCrib(3), '\nHow it should look:\n   /\\   \n  /  \\  \n /    \\ \n/______\\\n|      |\n|      |\n|______|');
    expect(buildCrib(3)).toBe('   /\\   \n  /  \\  \n /    \\ \n/______\\\n|      |\n|      |\n|______|');
  });
});

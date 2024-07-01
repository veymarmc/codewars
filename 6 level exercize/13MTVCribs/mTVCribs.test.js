const buildCrib = require('./mTVCribs');

describe("Testing", function() {
  test("Let's check your mansion", () => {
    console.log('Your house:\n' + myCrib(1), '\nHow it should look:\n /\\ \n/__\\\n|__|');
    expect(myCrib(1)).toBe( 
    ' /\\ \n/__\\\n|__|');
    console.log('Your house:\n ' + myCrib(2), '\nHow it should look:\n  /\\  \n /  \\ \n/____\\\n|    |\n|____|');
    expect(myCrib(2)).toBe('  /\\  \n /  \\ \n/____\\\n|    |\n|____|');
    console.log('Your house:\n' + myCrib(3), '\nHow it should look:\n   /\\   \n  /  \\  \n /    \\ \n/______\\\n|      |\n|      |\n|______|');
    expect(myCrib(3)).toBe('   /\\   \n  /  \\  \n /    \\ \n/______\\\n|      |\n|      |\n|______|');
  });
});

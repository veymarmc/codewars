const returnBlackHoleElement = require('./blackHole');

describe("Return black-hole element", function(){
  test("Basic tests.", function(){
    expect(returnBlackHoleElement(4,1,1)).toBe(13);
    
    expect(returnBlackHoleElement(5,3,2)).toBe(23);
    
    expect(returnBlackHoleElement(5,4,2)).toBe(11);
    
    expect(returnBlackHoleElement(9,0,0)).toBe(1);
    
    expect(returnBlackHoleElement(5,2,2)).toBe(25);
    
    expect(returnBlackHoleElement(5,0,0)).toBe(1);
    
    expect(returnBlackHoleElement(5,0,4)).toBe(2);
    
    expect(returnBlackHoleElement(5,4,4)).toBe(3);
    
    expect(returnBlackHoleElement(5,4,0)).toBe(4);
  
  });
});

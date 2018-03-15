import {haikuChecker} from './../src/haiku-checker.js';

describe ('haikuChecker', function(){
  let testHaiku;

  beforeEach(function(){
    testHaiku = new haikuChecker ("this is a haiku", "let us make this test pass good", "this is a haiku");
  });

  it('should test whether passed arguments are being stored as parameters', function(){
    expect(testHaiku.lineOne).toEqual("this is a haiku")
    expect(testHaiku.lineTwo).toEqual("let us make this test pass good")
    expect(testHaiku.lineThree).toEqual("this is a haiku")
  })

  it('should test how many syllables are in each line', function(){
    expect(testHaiku.syllableCounter(testHaiku.lineOne)).toEqual(5)
    expect(testHaiku.syllableCounter(testHaiku.lineTwo)).toEqual(7)
    expect(testHaiku.syllableCounter(testHaiku.lineThree)).toEqual(5)
  })
});

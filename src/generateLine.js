let randomWords = require('random-words');
import {syllableCounter} from './syllableCounter';

  export function generateLine(syllableTarget) {
    let syllableCount = 0;
    let line = "";

    while (syllableCounter(line) < syllableTarget){
      let someRandomWord = randomWords();

      if (syllableCount + syllableCounter(someRandomWord) > syllableTarget){
        //do nothing, keep looping
      }

      else {
        syllableCount += syllableCounter(someRandomWord);
        line += someRandomWord + " ";
      }
    }
    return line;
  }

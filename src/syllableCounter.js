export function syllableCounter(line) {
  let syllableCount = 0;
  let wordArray = line.toLowerCase().split(" ");

  wordArray.forEach(function(word) {
    let charArray = word.split("");
    charArray.forEach(function(char){
      if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'y') {
        syllableCount++;
      }
    });

    if (word.includes("ae")) {
      syllableCount --;
    }
    if (word.includes("ai")) {
      syllableCount --;
    }
    if (word.includes("ao")) {
      syllableCount --;
    }
    if (word.includes("au")) {
      syllableCount --;
    }
    if (word.includes("ea")) {
      syllableCount --;
    }
    if (word.includes("ee")) {
      syllableCount --;
    }
    if (word.includes("eu")) {
      syllableCount --;
    }
    if (word.includes("ey")) {
      syllableCount --;
    }
    if (word.includes("ie")) {
      syllableCount --;
    }
    if (word.includes("iu")) {
      syllableCount --;
    }
    if (word.includes("oa")) {
      syllableCount --;
    }
    if (word.includes("oe")) {
      syllableCount --;
    }
    if (word.includes("oi")) {
      syllableCount --;
    }
    if (word.includes("oo")) {
      syllableCount --;
    }
    if (word.includes("ou")) {
      syllableCount --;
    }
    if (word.includes("ua")) {
      syllableCount --;
    }
    if (word.includes("ue")) {
      syllableCount --;
    }
    if (word.includes("ui")) {
      syllableCount --;
    }
    if (word.includes("uo")) {
      syllableCount --;
    }
    if (word.includes("ya")) {
      syllableCount --;
    }
    if (word.includes("ye")) {
      syllableCount --;
    }
    if (word.endsWith("es") && (word != "yes")) {
      syllableCount --;
    }
    if (word.startsWith("y")) {
      syllableCount --;
    }
    if ((word == "the") || word == "three" || word == "tree" || word == "me" || word == "see" || word == "yes") {
      syllableCount ++;
    }
    if (word.endsWith("e")) {
      syllableCount --;
    }
  });
  return syllableCount;
}

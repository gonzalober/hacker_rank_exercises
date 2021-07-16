let magazine = "two times three is not four";
let note = "two times two is four";

const addValueOrIncrementCount = (value, map) => {
  let count = map.get(value);
  if (count) {
    map.set(value, ++count);
  } else {
    map.set(value, 1);
  }
  return count;
};

const decrementCountIfPossible = (value, map) => {
  let count = map.get(value);
  console.log("decrem", count);
  if (!count) {
    return null;
  } else {
    map.set(value, --count);
    return count;
  }
};

const mapWordCounts = (inputString) => {
  const output = new Map();

  for (let word of inputString.split(" ")) {
    addValueOrIncrementCount(word, output);
  }
  return output;
};

const checkMagazine = (magazine, note) => {
  const ransomMap = mapWordCounts(note);
  console.log(ransomMap.entries());
  const magazineMap = mapWordCounts(magazine);
  let ransomWordFromMagazine;
  for (let [word, count] of ransomMap.entries()) {
    console.log("word", word, "count", count);
    while (count > 0) {
      ransomWordFromMagazine = decrementCountIfPossible(word, magazineMap);
      if (ransomWordFromMagazine === null) {
        console.log("No");
        return;
      }
      count--;
    }
  }
  return console.log("Yes");
};

console.log(checkMagazine(magazine, note));

//THIS SOLUTION DOESN"T PASS ALL THE TESTS

// let noteArr = note;
// for (let i = 0; i < noteArr.length; i++) {
//   let finder = magazine.indexOf(noteArr[i]);
//   console.log("HERE", finder);
//   if (finder !== 1) {
//     magazine[finder] = "";
//     console.log("magazine", magazine[finder]);
//     if (i === note.length - 1) {
//       console.log("Yes");
//     }
//   } else {
//     console.log("No");
//     break;
//   }
// }

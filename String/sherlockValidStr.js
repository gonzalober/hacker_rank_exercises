let example = "abcdefghhgfedecba";

const isValid = (s) => {
  let objFreq = {};
  for (let i = 0; i < s.length; i++) {
    let charKeys = s.charAt(i);
    if (objFreq[charKeys]) {
      objFreq[charKeys] += 1;
    } else {
      objFreq[charKeys] = 1;
    }
  }
  console.log(objFreq);
  let arrayOfFreq = Object.values(objFreq);
  arrayOfFreq.sort((a, b) => a - b);
  console.log(arrayOfFreq);
  if (arrayOfFreq.length === 1) return "YES";
  let first = arrayOfFreq[0];
  let last = arrayOfFreq[arrayOfFreq.length - 1];
  let second = arrayOfFreq[1];
  let secondLast = arrayOfFreq[arrayOfFreq.length - 2];
  //if first and last are the same,then all are the same
  if (first === last) return "YES";
  //if first is 1, and all other charracters have 1 frequency
  if (first === 1 && second === last) return "YES";
  // if all are same and last character has just 1 extra count

  if (first === second && second === secondLast && secondLast === last - 1) {
    return "YES";
  }
  return "NO";
};

console.log(isValid(example));

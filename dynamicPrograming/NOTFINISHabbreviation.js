let a = "beFgH";
let b = "EFG";

const abbreviation = (a, b) => {
  let asorted = a.toUpperCase().split("").sort();
  let bsorted = b.split("").sort();
  for (let i = 0; i < bsorted.length; i++) {
    for (let j = 0; j < asorted.length; j++) {
      if (bsorted[i] === asorted[j]) {
        bsorted[i] = "YES";
      }
    }
  }
  console.log(bsorted);
  return bsorted.every((x) => x === "YES") ? "YES" : "NO";
};

console.log(abbreviation(a, b));

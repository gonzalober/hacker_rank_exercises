let a = "abcdefg";
let b = "abczy";

const anagram = (ab, bc) => {
  let a = ab.split("");
  let b = bc.split("");
  const larger = a.length >= b.length ? a : b;
  const smaller = a.length < b.length ? a : b;
  //storage char counts for larger string
  const storage = {};
  let counter = 0;
  for (const letter of larger) {
    storage[letter] = (storage[letter] || 0) + 1;
    console.log(storage[letter]);
  }
  console.log(storage);
  //loop through second/smaller striong to find count of similar characters
  for (const letter of smaller) {
    console.log(storage[letter] && storage[letter]);
    if (storage[letter] && storage[letter] > 0) {
      storage[letter]--;
      counter++;
    }
  }
  console.log("Storage", storage);
  console.log("counter", counter);
  let diffOfSmaller = smaller.length - counter;
  let diffOfLarger = larger.length - smaller.length;
  return diffOfSmaller * 2 + diffOfLarger;
};

console.log(anagram(a, b));

let a = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let b = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

const missingNumbers = (arr, brr) => {
  // Write your code here
  let intFreqMap = new Map();
  for (let i of brr) {
    let freq = intFreqMap.get(i);
    if (freq) {
      intFreqMap.set(i, ++freq);
    } else {
      intFreqMap.set(i, 1);
    }
  }

  for (let i of arr) {
    let freq = intFreqMap.get(i);
    freq--;
    if (freq === 0) {
      intFreqMap.delete(i);
    } else {
      intFreqMap.set(i, freq);
    }
  }
  let keys = [...intFreqMap.keys()];
  return keys.sort((a, b) => a - b);
};

console.log(missingNumbers(a, b));

let array = [1, 2, 2, 1, 1, 2, 3, 3];

function sockMerchant(ar) {
  let countSocks = {};
  let pairs = 0;
  for (let number of ar) {
    countSocks[number] = countSocks[number] + 1 || 1;
  }

  for (let number2 of ar) {
    console.log("HERE", countSocks[number2] % 2);
    countSocks[number2] = countSocks[number2] % 2 === 0;
    console.log("WOWWW", countSocks[number2]);
    pairs += countSocks[number2];
    console.log("WORLD", pairs);
  }
  return countSocks;
}

console.log(sockMerchant(array));

const birthdayCakeCandles = (arr) => {
  let arr2 = arr.sort();
  let maxi = arr2[0];
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (maxi < arr2[i]) maxi = arr2[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === maxi) count++;
  }

  return count;
};

console.log(birthdayCakeCandles([1, 2, 3, 4, 4, 4]));

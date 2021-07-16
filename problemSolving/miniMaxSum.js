const miniMaxSum = (arr) => {
  let arr2 = arr.sort();
  let minSum = 0;
  let maxSum = 0;
  for (let i = 0; i < 4; i++) {
    console.log(arr2[i]);
    minSum += arr2[i];
  }
  for (let j = arr2.length - 1; j > arr2.length - 5; j--) {
    maxSum += arr2[j];
  }

  return console.log(minSum, maxSum);
};

console.log(miniMaxSum([1, 2, 3, 4, 5]));

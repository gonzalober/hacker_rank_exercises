let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const diagonalDifference = (arr) => {
  // Write your code here
  let result = 0;
  let invResult = 0;
  let invCounter = 0;
  let j = arr.length - 1;
  let counter = 0;
  let i = 0;
  while (i < arr.length) {
    result += arr[i][counter];
    i++;
    counter++;
  }
  while (j >= 0) {
    console.log("here", arr[j][invCounter]);
    invResult += arr[j][invCounter];
    j--;
    invCounter++;
  }
  console.log(invResult);
  return Math.abs(result - invResult);
};

console.log(diagonalDifference(arr));

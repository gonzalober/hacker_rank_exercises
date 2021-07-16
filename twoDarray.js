const hourglassSum = (arr) => {
  let i = 0;
  let j = 0;
  let sumArr = [];
  let hourglasses = 0;

  while (hourglasses < 16) {
    if (hourglasses === 4 || hourglasses === 8 || hourglasses === 12) {
      i++;
      j = 0;
    }
    const sum =
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];
    j++;
    hourglasses++;
    sumArr.push(sum);
  }

  return Math.max(...sumArr);
};

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);

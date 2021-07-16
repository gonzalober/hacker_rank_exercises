let arr = [2, 1, 5, 8, 4];

const maxSubsetSum = (arr) => {
  if (arr.every((x) => x < 0) === true) return 0;
  let resultArray = [];
  let i = arr.length;
  let j = 2;
  while (i > 0) {
    resultArray.push(0);
    i--;
  }
  //console.log(resultArray);
  resultArray[0] = arr[0];
  resultArray[1] = Math.max(arr[1], resultArray[0]);
  //console.log(resultArray);
  while (j < arr.length) {
    // console.log(
    //   j,
    //   "J element",
    //   arr[j],
    //   resultArray[j - 1],
    //   arr[j] + resultArray[j - 2]
    // );
    resultArray[j] = Math.max(
      arr[j],
      resultArray[j - 1],
      arr[j] + resultArray[j - 2]
    );
    j++;
  }

  //console.log(resultArray, arr.length - 1);
  return resultArray[arr.length - 1];
};

console.log(maxSubsetSum(arr));

let array = [4, 3, 1, 2];

const minimumSwaps = (arr) => {
  let countSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      let tempNum = arr[i];
      console.log("TEMPNUM--1", tempNum);
      console.log("WOWW", arr[tempNum - 1]);
      arr[i] = arr[tempNum - 1]; //2
      console.log("arr[i]", arr[i]);
      console.log("TEMPNUM--2", tempNum);
      arr[tempNum - 1] = tempNum;
      console.log("ARR[tempNUm-1]", arr[tempNum - 1]);
      console.log("RESULARRAY", arr);
      countSwaps++;
    }
  }
  return countSwaps;
};

console.log(minimumSwaps(array));

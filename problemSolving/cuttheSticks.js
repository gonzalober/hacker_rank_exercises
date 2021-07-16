let arr = [1, 2, 3, 4, 3, 3, 2, 1];
const cutTheSticks = (arr) => {
  // Write your code here
  let minArr = arr.slice();
  //let min = Math.min(...minArr);
  let resultArr = [];
  while (minArr.length > 0) {
    minArr.sort((a, b) => a - b);
    resultArr.push(minArr.length);
    const min = minArr[0];
    minArr = minArr.filter((i) => i > min);
    console.log("here", minArr);
  }

  return resultArr;
};

console.log(cutTheSticks(arr));

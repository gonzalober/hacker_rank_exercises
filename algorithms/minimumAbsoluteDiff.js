let array = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
//brute force
// let currentValue;
//   let nextValue;
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     currentValue = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       nextValue = arr[j];
//       result.push(Math.abs(currentValue - nextValue));
//     }
//   }
//   return Math.min(...result);
const minimumAbsoluteDifference = (inputArray) => {
  let arr = inputArray.sort();
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(Math.abs(arr[i] - arr[i + 1]));
  }
  return Math.min(...result);
};

console.log(minimumAbsoluteDifference(array));

let a1 = [-1, 3, 8, 2, 9, 5];
let a2 = [4, 1, 2, 10, 5, 20];
let target = 24;
//brute force (n.length^2 times)
const closestSumofPair = (arr1, arr2, target) => {
  // let a1 = arr1.sort();
  // let a2 = arr2.sort((a, b) => a - b);
  let min = [];
  let diff = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = arr2.length - 1; j >= 0; j--) {
      if (Math.abs(arr1[i] + arr2[j] - target) === diff) {
        min.push(arr1[i], arr2[j]);
      }
    }
    ++diff;
  }
  return min;
};

console.log(closestSumofPair(a1, a2, target));

//sorting a looking for the smallest diff.

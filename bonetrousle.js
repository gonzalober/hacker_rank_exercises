// /*
//  * Complete the 'bonetrousle' function below.
//  *
//  * The function is expected to return a LONG_INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. LONG_INTEGER n
//  *  2. LONG_INTEGER k
//  *  3. INTEGER b
//  */

const bonetrousle = (n, k, b) => {
  // Write your code here
  // let ksum = k;
  // while (k > 0) {
  //   ksum += k - 1;
  //   k--;
  // }
  let ksum = 0;
  let min = (b * (b + 1)) / 2;
  for (let i = k - b + 1; i <= k; i++) {
    ksum = ksum + i;
  }
  console.log(ksum);
  if (n < min || ksum < n) return [-1];
  let start = [];
  let sum = 0;
  for (let i = 1; i <= b; i++) {
    start.push(i);
    sum += i;
  }

  if (sum === n) {
    return start;
  }
  for (let i = b - 1; i >= 0; i--) {
    for (let j = start[i] + 1; j <= k - b + i + 1; j++) {
      start[i] = j;
      sum = 0;
      for (let m = 0; m < b; m++) {
        sum += start[m];
      }
      if (sum === n) {
        return start;
      }
    }
  }
};
// console.log(bonetrousle(12, 8, 3));
// //output [8,3,1]

function bonetrousle2(n, k, b) {
  //max represents the value of the last k elements
  //min represent the value of the first k elements
  let max = 0;
  let min = (b * (b + 1)) / 2;
  let sum = 0;
  // k-b+1 is the last element
  for (let i = k - b + 1; i <= k; i++) {
    max = max + i;
  }
  if (n < min || n > max) {
    return [-1];
  }
  console.log(max);
  let start = [];
  for (let i = 1; i <= b; i++) {
    start.push(i);
    sum = +i;
  }

  if (sum === n) {
    return start;
  }

  for (let i = b - 1; i >= 0; i--) {
    for (let j = start[i] + 1; j <= k - b + i + 1; j++) {
      start[i] = j;
      sum = 0;
      for (let m = 0; m < b; m++) {
        sum = sum + start[m];
      }
      if (sum === n) {
        return start;
      }
    }
  }
}

console.log("Bone2", bonetrousle2(12, 8, 3));
console.log("Bone1", bonetrousle(12, 8, 3));

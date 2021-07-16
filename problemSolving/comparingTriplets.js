let arr1 = [5, 6, 7];
let arr2 = [3, 6, 10];

const compareTriplets = (a, b) => {
  // Write your code here
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    } else if (a[i] === b[i]) {
      alice += 0;
      bob += 0;
    } else {
      bob += 1;
    }
  }

  return [alice, bob];
};

console.log(compareTriplets(arr1, arr2));

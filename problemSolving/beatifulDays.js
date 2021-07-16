const beautifulDays = (i, j, k) => {
  // Write your code here
  let arr = [];

  while (i <= j) {
    arr.push(i);
    i++;
  }
  let arrRev = [];
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toString();
    arrRev.push(+newArr[i].split("").reverse().join(""));
  }
  let counter = 0;
  let result = arr.map((item, i) => {
    if (Math.abs(item - arrRev[i]) % k === 0) counter++;
  });

  return counter;
};

console.log(beautifulDays(20, 23, 6));

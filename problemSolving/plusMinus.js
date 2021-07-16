let arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
  // Write your code here

  let positive = arr.filter((number) => number > 0).length / arr.length;
  let negative = arr.filter((number) => number < 0).length / arr.length;
  let zeronums = arr.filter((number) => number === 0).length / arr.length;
  return console.log(
    positive.toFixed(6) +
      "\n" +
      negative.toFixed(6) +
      "\n" +
      zeronums.toFixed(6)
  );
};

console.log(plusMinus(arr));
//another solution
//let denominador = arr.length;
//   let countPositive = 0;
//   let countNegative = 0;
//   let countZeros = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       countPositive++;
//     } else if (arr[i] === 0) {
//       countZeros++;
//     } else countNegative++;
//   }
//   let positiveRatio = (countPositive / denominador).toFixed(6);
//   let negativeRatio = (countNegative / denominador).toFixed(6);
//   let zeros = (countZeros / denominador).toFixed(6);
//   return [positiveRatio, negativeRatio, zeros].join("\n");

const maximumToys = (prices, k) => {
  let count = 0;
  let sum = 0;
  prices.sort((a, b) => a - b);
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    while (sum <= k) {
      count++;
      break;
    }
  }
  return count;
};

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));

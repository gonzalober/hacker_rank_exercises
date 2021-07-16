const factorial = (n) => {
  var result = n;
  if (n < 0) {
    return null;
  }
  if (n === 1 || n === 0) {
    return 1;
  } else {
    while (n >= 2) {
      result = result * (n - 1);
      n--;
    }
    return result;
  }
};
console.log(factorial(4));

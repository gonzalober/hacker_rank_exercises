const fibonacci = (n) => {
  if (n < 2) return 2;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(3));

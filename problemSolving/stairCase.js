const staircase = (n) => {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
  return;
};

console.log(staircase(4));

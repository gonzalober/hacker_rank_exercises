let str = "[()]}>";

const isBalanced = (input) => {
  let brackets = "[]{}()<>";
  let stack = [];

  for (let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      console.log(stack.pop(), bracketsIndex);
      if (stack.pop() !== bracketsIndex) {
        return "NO";
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
};

console.log(isBalanced(str));

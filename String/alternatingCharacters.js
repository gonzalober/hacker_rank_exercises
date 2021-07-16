let example = "ABBAcA";

const alternatingCharacters = (s) => {
  // Write your code here
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      result += s[i];
    }
  }
  return result.length;
};

console.log(alternatingCharacters(example));

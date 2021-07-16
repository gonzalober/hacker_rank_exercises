let str = "aba";

const substrCount = (n, s) => {
  let result;
  if (n === 1) {
    result = s;
  }

  return result.length;
};
console.log(substrCount(str.length, str));

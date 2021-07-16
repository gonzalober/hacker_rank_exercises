let ar = [1, 2, 3];

const simpleArraySum = (ar) => {
  let result = ar.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
  return result;
};
console.log(simpleArraySum(ar));

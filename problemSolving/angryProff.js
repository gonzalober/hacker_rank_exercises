const angryProfessor = (k, a) => {
  // Write your code here
  let onTime = a.filter((value) => {
    return value < 1;
  });
  if (onTime.length >= k) {
    return "NO";
  } else {
    return "YES";
  }
};

console.log(angryProfessor(3, [-1, -3, 4, 2]));

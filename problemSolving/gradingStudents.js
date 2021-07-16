let grades = [73, 67, 38, 33];

const gradingStudents = (grades) => {
  let resultArr = [];
  for (let i = 0; i < grades.length; i++) {
    let fiveMul = Math.ceil(grades[i] / 5) * 5;
    if (grades[i] < 38) {
      resultArr.push(grades[i]);
    } else if (fiveMul - grades[i] <= 2) {
      resultArr.push(fiveMul);
    } else {
      resultArr.push(grades[i]);
    }
  }
  return resultArr;
};

console.log(gradingStudents(grades));

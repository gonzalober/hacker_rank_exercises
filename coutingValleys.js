const countingValleys = (steps, path) => {
  let arr = path.split("");
  let valleysCounts = 0;
  let dCounts = 0;
  for (let i = 0; i < steps; i++) {
    if (arr[i] === "D") {
      dCounts--;
    } else {
      if (dCounts === -1) {
        valleysCounts++;
      }
      dCounts++;
    }
  }
  return valleysCounts;
};
console.log(countingValleys(8, "UDDDUDUU"));

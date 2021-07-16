let array = [0, 0, 1, 0, 0, 1, 0];

const jumpingOnClouds = (c) => {
  let jumps = 0;
  let i = 0;
  while (i < c.length - 1) {
    jumps++;
    i = c[i + 2] === 0 ? i + 2 : i + 1;
  }
  return jumps;
};

console.log(jumpingOnClouds(array));

const jumpingOnClouds = (c) => {
  let jumps = 0;

  for (let i = 0; i <= c.length; i++) {
    if (c[i + 2] === 0) {
      jumps++;
      i = i + 2;
    } else {
      jumps++;
      i = i + 1;
    }
  }
  return jumps;
};

console.log(jumpingOnClouds(array));

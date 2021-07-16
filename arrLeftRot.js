function rotLeft(a, d) {
  let i = 0;
  while (i < d) {
    let first = a.shift();
    a.push(first);
    i++;
  }

  return a;
}

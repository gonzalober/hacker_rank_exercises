let array: [string,number][] = [
  ["david", 100],
  ["amy", 100],
  ["heraldo", 100],
  ["aakansha", 100],
  ["aleksa", 150],
];

const sortingComparator = (input: Array<any[]>) => {
  return input.sort((a, b) => {
    let scoreSorted: number = b[1] - a[1];
    if (scoreSorted === 0) {
      scoreSorted = b[0] > a[0] ? -1 : 0;
    }
    return scoreSorted;
  });
};
console.log(sortingComparator(array));

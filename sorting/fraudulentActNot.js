const activityNotifications = (expenditure, d) => {
  let listSorted = expenditure;
  let newList = [...listSorted].sort((a, b) => {
    return a - b;
  });
  //let i = 0;
  let median;
  //let end = d;
  let totalNotifications = 0;
  for (let i = expenditure.length, end = d; end < expenditure.length; i--) {
    console.log("Expen Original", expenditure);
    console.log("END", end);
    console.log("NEWLIST", newList.slice(0, end));
    let currentList = newList.slice(0, end);
    let half = Math.floor(currentList.length / 2);
    console.log("HALF", half);
    if (currentList.length % 2 === 0) {
      median = currentList[half];
    } else {
      median = (currentList[half - 1] + currentList[half]) / 2;
    }
    console.log("MEDIAN", median);
    console.log("EXPENDITURE[end]", expenditure[end]);
    if (expenditure[end] >= median * 2) totalNotifications += 1;
    //modify trailing expenditures first in first out
    currentList = currentList.slice(i);
    console.log("CURRENT", currentList);
    i--;
    end++;
  }
  //trailing exp(period+1day)of original array>=2*median
  return totalNotifications;
};

console.log("FIRST", activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
//1

const activityNotificationsII = (expenditure, d) => {
  // Number of notifications
  let n = 0;

  // Set midpoints for median calculation
  let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1, m2;

  // Initialize count sorted subarray
  let cs = new Array(201).fill(0); // THIS IS IMPORTANT LIMITED NUMBER OF ELEMENTS TO ITERATE
  for (let i = d - 1; i >= 0; i--) cs[expenditure[i]]++;

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {
    // Find median
    for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j;
    for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j;
    let m = (m1 + m2) / 2;

    // Check if notification is given
    if (expenditure[i] >= m * 2) n++;

    // Replace subarray elements
    cs[expenditure[i - d]]--;
    cs[expenditure[i]]++;
  }

  return n;
};
console.log("SECOND", activityNotificationsII([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));

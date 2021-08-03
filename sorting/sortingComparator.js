"use strict";
var array = [
    ["david", 100],
    ["amy", 100],
    ["heraldo", 100],
    ["aakansha", 100],
    ["aleksa", 150],
];
var sortingComparator = function (input) {
    return input.sort(function (a, b) {
        var scoreSorted = b[1] - a[1];
        if (scoreSorted === 0) {
            scoreSorted = b[0] > a[0] ? -1 : 0;
        }
        return scoreSorted;
    });
};
console.log(sortingComparator(array));

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
function convert(first, ...rest) {
    if (!Array.isArray(first)) return [];
    const dates = [first, ...rest];
    return dates.map((date) => new Date(date[0], date[1], date[2]).toDateString());
}
// END


convert();
// // []

convert([1993, 3, 24]);
// // ['Sat Apr 24 1993']

convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// // ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
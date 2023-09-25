function solve(arr) {
    let sorted = arr.sort((a, b) => b - a);
    let len = sorted.length;
    let result = [];
    for (let i = 0; i < Math.floor(len / 2); i++) {
        result.push(sorted[i], sorted[len - i - 1]);
    }
    if (len % 2 !== 0) result.push(sorted[Math.floor(len / 2)]);
    return result;
};

solve([15, 11, 10, 7, 12])
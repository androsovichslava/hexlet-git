// @ts-check
const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }

    return sum;
};

// BEGIN (write your solution here)
function isHappyNumber(num) {
    let iterate = 0;
    while (iterate < 10) {
        const sumSquares = sumOfSquareDigits(num);
        debugger
        console.log(sumSquares)
        if (sumSquares === 1) {
            return true;
        }
        num = sumSquares;
        iterate += 1;
    }
    return false;
}
// END

console.log(isHappyNumber(7));
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = String(x);
    if (x < 0) return false;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
};

console.log(isPalindrome(-1221));
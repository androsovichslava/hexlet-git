// @ts-check
// BEGIN (write your solution here)
function reverse(str) {
    if (!str) return '';
    let arr = str.split('');
    let char = arr.pop();
    console.log(char)
    return char + reverse(arr.join(''));

}
// END


console.log(reverse('slava'));
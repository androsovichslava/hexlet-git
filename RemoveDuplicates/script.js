/**
 * @param {number[]} nums
 * @return {number}
 */
console.log('script')
var removeDuplicates = function (nums) {
    let index = 0;
    let result = [];
    debugger;
    while (index < nums.length) {
        let indexTemp = index;
        let start = nums[index];
        let end = nums[indexTemp];
        while (end === start) {
            indexTemp++;
            end = nums[indexTemp];
        }
        index = indexTemp;
        result.push(start);
    }
    return result;
};
debugger;
console.log(removeDuplicates([7, 8, 9, 1, 2, 3, 4, 5, 5, 5, 6]));
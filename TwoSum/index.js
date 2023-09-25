/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap.hasOwnProperty(complement)) {
            return [hashMap[complement], i];
        }
        hashMap[nums[i]] = i;
    }

    return [];
}


console.log(twoSum([3, -1, -2, -3, -4, -5], -8));
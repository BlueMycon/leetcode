/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {

    const unique = new Set(nums);

    for (let i = 0; i < nums.length; i++) {
        if (unique.has(target - nums[i]) && i !== nums.indexOf(target - nums[i])) {
            return [i, nums.indexOf(target - nums[i])];
        }
    }
};

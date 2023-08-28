/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {

    // time complexity optimized solution
        // checks for solutions along the way of building the hash
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [i, map.get(complement)];
        }
        
        map.set(nums[i], i);
    }

    // space complexity optimized solution
        // nested loop uses no memory other than the list of nums
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++ ) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
};

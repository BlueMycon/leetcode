/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    let uniqueNums = new Set(nums);

    let maxCount = 0;
    for (let num of uniqueNums) {
        if (uniqueNums.has(num - 1)) continue;
        
        let count = 1;
        let elem = num;
        while (uniqueNums.has(elem + 1)) {
            count++;
            elem++;
        }

        if (count > maxCount) maxCount = count;
    }

    return maxCount;
};


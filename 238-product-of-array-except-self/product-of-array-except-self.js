/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let productsExceptSelf = [];
    let leftProduct = 1;
    let rightProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        productsExceptSelf[i] = leftProduct;
        leftProduct *= nums[i];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        productsExceptSelf[i] *= rightProduct;
    }

    return productsExceptSelf;
};

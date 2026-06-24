class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const [left, right] = [[...nums], [...nums]];

        [left[0], right[n - 1]] = [nums[0], nums[n - 1]];

        for (let i = 1; i < n; i++) {
            left[i] = nums[i] * left[i - 1];
        }

        for (let i = n - 2; i >= 0; i--) {
            right[i] = nums[i] * right[i + 1];
        }

        const result = [...nums];

        for (let i = 0; i < n; i++) {
            result[i] = 1;

            if (i > 0) {
                result[i] = left[i - 1];
            }

            if (i + 1 < n) {
                result[i] *= right[i + 1];
            }
        }

        return result;
    }
}

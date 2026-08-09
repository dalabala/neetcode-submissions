class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = Array.from({ length: n }, () => 1);

        let p = nums[0];

        for (let i = 1; i < n; i++) {
            result[i] *= p;
            p *= nums[i];
        }

        p = nums[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            result[i] *= p;
            p *= nums[i];
        }

        return result;
    }
}

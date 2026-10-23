class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const comb = [];

        const dfs = (idx, sum) => {
            if (sum > target || idx >= nums.length) return;

            if (sum == target) {
                result.push([...comb]);
                return;
            }

            comb.push(nums[idx])
            dfs(idx, sum + nums[idx]);
            comb.pop();
            dfs(idx + 1, sum);
        };

        dfs(0, 0);

        return result;
    }
}

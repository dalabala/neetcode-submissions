class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length;
        const result = [];

        const dfs = (comb) => {
            if (comb.length === n) {
                result.push(comb.slice())
                return;
            }

            for (let i = 0; i < n; i++) {
                const num = nums[i];
                if (num == 11) { continue; }
                comb.push(num);
                nums[i] = 11;
                dfs(comb);
                comb.pop();
                nums[i] = num
            }
        };

        dfs([]);

        return result;
    }
}

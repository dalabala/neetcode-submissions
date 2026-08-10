class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const result = [];
        nums.sort((a, b) => a - b);
        for (let k = 0; k < n; k++) {
            if (k > 0 && nums[k - 1] === nums[k]) continue;
            let [l, r] = [k + 1, n - 1];
            const target = -nums[k];
            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum < target) {
                    l++;
                } else if (sum > target) {
                    r--;
                } else {
                    result.push([nums[k], nums[l], nums[r]]);
                    while (l + 1 < r && nums[l] === nums[l + 1]) {
                        l++;
                    }
                    l++; 
                }
            }   
        }
        return result;
    }
}

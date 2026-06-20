class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const remain = target - nums[i];

            if (map.has(remain)) {
                return [map.get(remain), i];
            }

            map.set(nums[i], i);
        }

        return [-1, -1];
    }
}

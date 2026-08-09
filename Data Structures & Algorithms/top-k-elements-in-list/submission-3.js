class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
    
        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1);
        }

        const freq = new Map();

        for (const [num, cnt] of count) {
            if (!freq.has(cnt)) freq.set(cnt, []);
            freq.get(cnt).push(num);
        }

        const result = [];

        for (let cnt = nums.length; cnt > 0 && result.length <= k; cnt--) {
            result.push(...(freq.get(cnt) ?? []));
        }

        return result.splice(0, k);
    }
}

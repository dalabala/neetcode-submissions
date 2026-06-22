class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = nums.reduce((bucket, num) => {
            bucket.set(num, (bucket.get(num) ?? 0) + 1);
            return bucket;
        }, new Map());

        return [...bucket.entries()]
            .sort((a, b) => (a[1] == b[1] ? b[0] - a[0] : b[1] - a[1]))
            .slice(0, k)
            .map(([num]) => num);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();

        for (const num of nums) {
            set.add(num);
        }

        let res = 0;

        for (const num of nums) {
            let seq = 0;
            while (set.has(num + seq)) {
                seq++;
            }
            res = Math.max(res, seq);
        }

        return res;
    }
}

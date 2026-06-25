class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let res = 0;

        for (const num of set) {
            if (set.has(num - 1)) {
                continue;
            }

            let seq = 1;
            while (set.has(num + seq)) {
                seq++;
            }

            res = Math.max(res, seq);
        }

        return res;
    }
}

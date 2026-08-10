class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hash = new Map();

        for (const num of nums) {
            hash.set(num, undefined);
        }

        let result = 0;

        for (const start of nums) {
            if (hash.has(start - 1)) continue;

            let end = start;

            while (hash.has(end)) {
                hash.delete(end);
                end++;
            }

            result = Math.max(result, end - start);
        }

        return result;
    }
}

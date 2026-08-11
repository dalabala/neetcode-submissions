class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length;
        const window = new Set();
        let [l, r, result] = [0, 0, 0];
        while (r < n) {
            if (window.has(s[r])) {
                while (l < r && s[l] !== s[r]) {
                    window.delete(s[l]);
                    l++;
                }
                l++;
            }
            result = Math.max(result, r - l + 1);
            window.add(s[r]);
            r++;
        }
        return result;
    }
}

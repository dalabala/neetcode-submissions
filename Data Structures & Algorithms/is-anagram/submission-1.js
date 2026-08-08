class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const count = Array.from({ length: 26 }, () => 0);

        for (const ch of s) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (const ch of t) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        for (const cnt of count) {
            if (cnt > 0 || cnt < 0) {
                return false;
            }
        }

        return true;
    }
}

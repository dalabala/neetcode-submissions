class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const counts = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            counts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return counts.every((cnt) => cnt == 0);
    }
}

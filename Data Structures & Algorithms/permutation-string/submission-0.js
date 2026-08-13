class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const a = new Uint32Array(26);
        const b = new Uint32Array(26);

        for (const ch of s1) {
            a[ch.charCodeAt(0) - 97]++;
        }

        let [l, r] = [0, 0];

        while (r < s2.length) {
            if (r - l === s1.length) {
                b[s2[l].charCodeAt(0) - 97]--;
                l++;
            } else {
                b[s2[r].charCodeAt(0) - 97]++;
                r++;
            }

            if (r - l === s1.length && a.toString() === b.toString()) {
                return true;
            }
        }

        return false;
    }
}

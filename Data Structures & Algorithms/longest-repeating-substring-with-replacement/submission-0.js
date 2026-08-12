class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;
        let [l, r, result] = [0, 0, 0];
        const count = Array.from({ length: 26 }, () => 0);

        const max = (count) => {
            let result = 0;
            for (let i = 0; i < 26; i++) {
                if (count[i] > count[result]) {
                    result = i;
                }
            }
            return result;
        };

        const sum = (count) => count.reduce((acc, freq) => acc + freq, 0);

        const feasible = (count) => sum(count) - count[max(count)] <= k;

        while (r < n) {
            count[s[r].charCodeAt(0) - 65]++;
            if (feasible(count)) {
                result = Math.max(result, sum(count));
            } else {
                count[s[l].charCodeAt(0) - 65]--;
                l++;
            }
            r++;
        }

        return result;
    }
}

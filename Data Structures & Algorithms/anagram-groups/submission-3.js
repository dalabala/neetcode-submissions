class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const count = Array.from({ length: 26 }, () => 0);
        const hash = new Map();

        for (const str of strs) {
            for (let i = 0; i < count.length; i++) {
                count[i] = 0;
            }

            for (const ch of str) {
                count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = count.toString();
            if (!hash.has(key)) hash.set(key, []);
            hash.get(key).push(str);
        }

        return [...hash.values()];
    }
}

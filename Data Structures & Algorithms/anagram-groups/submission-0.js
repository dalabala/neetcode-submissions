class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        
        for (const str of strs) {
            const key = str.split('').sort().join('');
            map.set(key, [...(map.get(key) ?? []), str]);
        }

        return [...map.values()];
    }
}

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits === "") return [];

        const map = [
            '',
            '',
            'abc',
            'def',
            'ghi',
            'jkl',
            'mno',
            'pqrs',
            'tuv',
            'wxyz'
        ];

        const result = [];

        const dfs = (idx, str) => {
            if (idx >= digits.length) {
                result.push(str);
                return;
            }

            const chars = map[digits[idx]];

            for (const ch of chars) {
                dfs(idx + 1, str + ch);
            }
        }

        dfs(0, "");

        return result;
    }
}

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const dn = n * 2;
        
        const dfs = (lvl, balance, str) => {
            if (lvl > n || balance > n || balance < 0) return;

            if (balance === 0 && str.length === dn) {
                result.push(str);
                return;
            }

            dfs(lvl + 1, balance + 1, str + '(');
            dfs(lvl, balance - 1, str + ')');
        };

        dfs(0, 0, '');
        return result;
    }
}

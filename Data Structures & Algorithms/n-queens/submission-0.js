class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const cols = Array.from({ length: n }, () => false);
        const diags = new Map();
        const result = [];
        const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

        const diagColKey = (r, c) => `${r - c}:0`;

        const diagRowKey = (r, c) => `0:${r + c}`;
        
        const dfs = (r) => {
            if (r >= n) {
                result.push(board.map(row => row.join('')));
                return;
            }

            for (let c = 0; c < n; c++) {
                const dck = diagColKey(r, c), drk = diagRowKey(r, c);

                if (cols[c] || diags.get(dck) || diags.get(drk)) { continue; }

                board[r][c] = 'Q';
                cols[c] = true;
                diags.set(dck, true);
                diags.set(drk, true);
                dfs(r + 1);
                board[r][c] = '.';
                cols[c] = false;
                diags.set(dck, false);
                diags.set(drk, false);
            }
        }

        dfs(0);

        return result;
    }
}

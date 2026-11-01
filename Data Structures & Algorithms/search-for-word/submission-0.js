class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length, n = board[0].length;

        const dfs = (i, j, k) => {
            if (k >= word.length) return true;

            if (
                i >= m ||
                j >= n ||
                i < 0 ||
                j < 0 ||
                board[i][j] === "" ||
                board[i][j] !== word[k]
            ) return false;


            const char = board[i][j]
            board[i][j] = "";
            const result =
                dfs(i, j + 1, k + 1) ||
                dfs(i + 1, j, k + 1) ||
                dfs(i, j - 1, k + 1) ||
                dfs(i - 1, j, k + 1);
            board[i][j] = char;
            return result;
        };

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}

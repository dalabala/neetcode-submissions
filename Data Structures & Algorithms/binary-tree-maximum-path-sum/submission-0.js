/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let result = -Infinity;

        const dfs = (root) => {
            if (!root) return 0;

            const left = dfs(root.left);
            const right = dfs(root.right);

            result = Math.max(
                result,
                root.val,
                left + root.val,
                right + root.val,
                left + right + root.val
            );
            
            return Math.max(
                root.val,
                left + root.val,
                right + root.val
            );
        }

        dfs(root);

        return result;
    }
}

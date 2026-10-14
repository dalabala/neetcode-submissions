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
     * @return {boolean}
     */
    isValidBST(root) {
        let result = true;

        const dfs = (root) => {
            if (!root || !result) return [null, null];

            const [minL, maxL] = dfs(root.left);

            if (!result || maxL !== null && root.val <= maxL) {
                result = false;
                return [null, null];
            }

            const [minR, maxR] = dfs(root.right);

            if (!result || minR !== null && root.val >= minR) {
                result = false;
                return [null, null];
            }

            return [
                Math.min(root.val, minL ?? root.val, minR ?? root.val),
                Math.max(root.val, maxL ?? root.val, maxR ?? root.val)
            ];
        };

        dfs(root);

        return result;
    }
}

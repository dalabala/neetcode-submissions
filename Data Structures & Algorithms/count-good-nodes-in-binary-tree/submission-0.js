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
    goodNodes(root) {
        let result = 0;

        const dfs = (root, maxVal) => {
            if (!root) return;

            if (maxVal <= root.val) {
                result++;
            }

            maxVal = Math.max(maxVal, root.val);

            dfs(root.left, maxVal);
            dfs(root.right, maxVal);
        }

        dfs(root, root.val);

        return result;
    }
}

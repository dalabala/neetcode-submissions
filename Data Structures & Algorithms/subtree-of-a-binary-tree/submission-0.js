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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let result = false;

        const dfs = (root, subRootStr) => {
            if (!root) return "null";

            const left = dfs(root.left, subRootStr);
            const right = dfs(root.right, subRootStr);
            const str = `${root.val}${left}${right}`;

            if (str === subRootStr) {
                result = true;
            }

            return str;
        }

        const subRootStr = dfs(subRoot, "");
        dfs(root, subRootStr);

        return result;
    }
}

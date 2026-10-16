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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let i = 0;
        const inorderMap = new Map();
        for (let idx = 0; idx < inorder.length; idx++) {
            inorderMap.set(inorder[idx], idx);
        }

        const dfs = (left, right) => {
            if (left > right) {
                return null;
            }

            const target = preorder[i++];
            const targetIdx = inorderMap.get(target);

            const root = new TreeNode(target);
            root.left = dfs(left, targetIdx - 1);
            root.right = dfs(targetIdx + 1, right);

            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}

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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return '#';

        return `${root.val},${this.serialize(root.left)},${this.serialize(root.right)}`;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const preorder = data.split(','), n = preorder.length;
        let i = 0;

        const dfs = () => {
            if (i >= n) return null;
            const val = preorder[i++];
            if (val === '#') return null;
            const root = new TreeNode(parseInt(val));
            root.left = dfs(), root.right = dfs();
            return root;
        }

        return dfs();
    }
}

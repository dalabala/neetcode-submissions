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
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        let queue = [root];
        let start = 0;

        while (queue[start]) {
            const n = queue.length;
            const level = [];
            
            for (let i = start; i < n; i++) {
                level.push(queue[i].val);

                if (queue[i].left) {
                    queue.push(queue[i].left);
                }

                if (queue[i].right) {
                    queue.push(queue[i].right);
                }
            }

            result.push(level);
            start += level.length;
        }

        return result;
    }
}

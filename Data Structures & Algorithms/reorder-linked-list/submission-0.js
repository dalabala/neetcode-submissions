/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        const result = new ListNode();
        let [leftHalf, rightHalf, reorder] = [head, this.reverse(this.mid(head)), result];
        while (leftHalf && rightHalf) {
            const [nextLeftHalf, nextRightHalf] = [leftHalf.next, rightHalf.next];
            reorder.next = leftHalf
            leftHalf.next = rightHalf
            reorder = rightHalf;
            leftHalf = nextLeftHalf;
            rightHalf = nextRightHalf;
        }
        reorder.next = leftHalf;
        return result.next;
    }

    mid(head) {
        let [slow, fast] = [head, head?.next?.next];

        while (fast) {
            slow = slow.next;
            fast = fast?.next?.next;
        }

        const next = slow.next;
        slow.next = null;
        return next;
    }

    reverse(head) {
        let [curr, prev] = [head, null];
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}

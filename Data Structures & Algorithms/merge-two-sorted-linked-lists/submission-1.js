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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let [curr1, curr2, result] = [list1, list2, new ListNode()];
        let prev = result;

        while (curr1 && curr2) {
            if (curr1.val < curr2.val) {
                const next = curr1.next;
                curr1.next = null;
                prev.next = curr1;
                prev = curr1;
                curr1 = next;
            } else {
                const next = curr2.next;
                curr2.next = null;
                prev.next = curr2;
                prev = curr2;
                curr2 = next;
            }
        }

        if (curr1) {
            prev.next = curr1;
        } else {
            prev.next = curr2;
        }

        return result.next;
    }
}

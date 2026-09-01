// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const hash = new Map();
        const result = new Node();
        let [curr, prev] = [head, result];

        while (curr) {
            const newCurr = hash.get(curr) ?? new Node(curr.val, null, null);
            prev.next = newCurr;
            prev = newCurr;
            hash.set(curr, newCurr);
            if (curr.random) {
                const newRandom = hash.get(curr.random) ?? new Node(curr.random.val, null, null);
                newCurr.random = newRandom;
                hash.set(curr.random, newRandom);
            }
            curr = curr.next;
        }

        return result.next;
    }
}

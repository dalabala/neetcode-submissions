function MaxHp() {
    this.heap = [];   
}

MaxHp.prototype.top = function() {
    return this.heap?.[0];
};

MaxHp.prototype.size = function() {
    return this.heap.length;
};

MaxHp.prototype.push = function(val) {
    const heap = this.heap;
    heap.push(val);
    let i = heap.length - 1;

    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        
        if (heap[parent] >= heap[i]) break;

        [heap[parent], heap[i]] = [heap[i], heap[parent]];
        i = parent;
    }
};

MaxHp.prototype.pop = function() {
    const heap = this.heap;

    if (heap.length === 0) return;
    if (heap.length === 1) {
        return heap.pop();
    }

    const result = this.top();
    heap[0] = heap.pop();
    let i = 0

    while (true) {
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let biggest = i;

        if (left < heap.length && heap[left] > heap[biggest]) {
            biggest = left;
        }

        if (right < heap.length && heap[right] > heap[biggest]) {
            biggest = right;
        }

        if (i === biggest) {
            break;
        }

        [heap[biggest], heap[i]] = [heap[i], heap[biggest]];
        i = biggest;
    }

    return result;
};


class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHp();

        for (const stone of stones) {
            maxHeap.push(stone);
        }

        while (maxHeap.size() > 1) {
            const [y, x] = [maxHeap.pop(), maxHeap.pop()];

            if (x === y) continue;

            maxHeap.push(y - x);
        }

        return maxHeap.top() ?? 0;
    }
}

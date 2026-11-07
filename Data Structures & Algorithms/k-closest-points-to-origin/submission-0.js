class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinHp((a, b) => a[0] - b[0]);

        for (const point of points) {
            minHeap.push([Math.sqrt(point[0] ** 2 + point[1] ** 2), point])
        }

        const result = [];

        while (k > 0) {
            const [, point] = minHeap.pop();
            result.push(point);
            k--;
        }

        return result;
    }
}

function MinHp(compare) {
    this.heap = [];
    this.compare = compare;
}

MinHp.prototype.push = function(val) {
    const heap = this.heap;
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.compare(heap[parent], heap[i]) <= 0) break;
        [heap[parent], heap[i]] = [heap[i], heap[parent]];
        i = parent;
    }
};

MinHp.prototype.pop = function() {
    const heap = this.heap;

    if (heap.length === 0) return;
    if (heap.length === 1) return heap.pop();

    const result = heap[0];
    heap[0] = heap.pop();
    let i = 0;

    while (true) {
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let smallest = i;
        if (left < heap.length && this.compare(heap[left], heap[smallest]) < 0) {
            smallest = left;
        }
        if (right < heap.length && this.compare(heap[right], heap[smallest]) < 0) {
            smallest = right;
        }
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
    }
    
    return result;
};

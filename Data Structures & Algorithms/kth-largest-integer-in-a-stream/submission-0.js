class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = [];
        this.k = k;

        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        const heap = this.heap;
        const k = this.k;
        const root = this.root();

        if (heap.length === k && root >= val) return root;

        heap.push(val);
        let i = heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (heap[parent] <= heap[i]) break;

            [heap[i], heap[parent]] = [heap[parent], heap[i]];
            i = parent;
        }

        if (heap.length > k) {
            this.pop();
        }

        return this.root();
    }

    root() {
        return this.heap.at(0);
    }

    pop() {
        const heap = this.heap;

        if (heap.length === 0) return;
        if (heap.length === 1) {
            heap.pop();
            return;
        }

        heap[0] = heap.pop();
        let i = 0;

        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            let smallest = i;

            if (left < heap.length && heap[left] < heap[smallest]) {
                smallest = left;
            }

            if (right < heap.length && heap[right] < heap[smallest]) {
                smallest = right;
            }

            if (smallest == i) {
                break;
            }

            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
    }
}

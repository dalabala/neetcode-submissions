class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dq = new Deque();
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            while (!dq.isEmpty() && nums[dq.back()] < nums[i]) {
                dq.popBack();
            }
            dq.pushBack(i);
            if (i >= k - 1) {
                while (!dq.isEmpty() && i - k >= 0 && dq.front() <= i - k) {
                    dq.popFront();
                }
                result.push(nums[dq.front()]);
            }
        }

        return result;
    }
}

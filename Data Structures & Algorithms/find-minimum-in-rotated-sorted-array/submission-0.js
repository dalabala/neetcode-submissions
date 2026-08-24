class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;
        let [low, high] = [0, n - 1];

        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            const guess = nums[mid];

            if (guess > nums[high]) {
                low = mid + 1;
            } else if (guess < nums[low]) {
                high = mid;
            } else {
                high = mid - 1;
            }
        }

        return nums[low];
    }
}

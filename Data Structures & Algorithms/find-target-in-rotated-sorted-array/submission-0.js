class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        let [low, high] = [0, n - 1];

        const isSorted = (low, high) => nums[low] <= nums[high];

        const isRange = (low, high) => nums[low] <= target && target <= nums[high];

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (target == nums[mid]) {
                return mid;
            }
            
            if (isSorted(low, mid)) {
                if (isRange(low, mid)) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            
            if (isSorted(mid, high)) {
                if (isRange(mid, high)) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return -1;
    }
}

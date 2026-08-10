class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        const n = height.length;
        let [l, r] = [0, n - 1];
        let result = 0;

        while (l < r) {
            result = Math.max(result, (r - l) * Math.min(height[l], height[r]));

            if (height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }

        return result;
    }
}

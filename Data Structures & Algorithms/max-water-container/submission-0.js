class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let [l, r] = [0, heights.length - 1];
        let res = 0;

        while (l < r) {
            res = Math.max(res, (r - l) * Math.min(heights[l], heights[r]));
            
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return res;
    }
}

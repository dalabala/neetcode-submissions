class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        let stack = [];
        let result = 0;

        for (let currIdx = 0; currIdx < n; currIdx++) {
            let nextIdx = currIdx;
            const currHeight = heights[currIdx];
            result = Math.max(result, currHeight);

            while (stack.length) {
                const [prevHeight, prevIdx] = stack.at(-1);
                if (prevHeight < currHeight) break;
                result = Math.max(result, (currIdx - prevIdx) * prevHeight, (currIdx - prevIdx + 1) * currHeight);
                nextIdx = prevIdx;
                stack.pop();
            }

            currHeight > 0 && stack.push([currHeight, nextIdx]);
        }

        while (stack.length) {
            const [prevHeight, prevIdx] = stack.at(-1);
            result = Math.max(result, (n - prevIdx) * prevHeight);
            stack.pop();
        }

        return result;
    }
}

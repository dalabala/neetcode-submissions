class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const n = temperatures.length;
        const result = Array.from({ length: n }, () => 0);

        for (let i = n - 1; i >= 0; i--) {
            while (stack.length && temperatures[stack.at(-1)] <= temperatures[i]) {
                stack.pop();
            }

            if (stack.length) {
                result[i] = stack.at(-1) - i;
            }

            stack.push(i);
        }

        return result;
    }
}

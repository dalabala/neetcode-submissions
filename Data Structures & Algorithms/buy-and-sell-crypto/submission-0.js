class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let result = 0;
        for (let i = n - 2; i >= 0; i--) {
            if (prices[i] < prices[i + 1]) {
                result = Math.max(result, prices[i + 1] - prices[i]);
            }
            prices[i] = Math.max(prices[i], prices[i + 1]);
        }
        return result;
    }
}

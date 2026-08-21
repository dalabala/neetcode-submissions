class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const feasible = (k) => piles.reduce((acc, pile) => acc + Math.ceil(pile / k), 0) <= h;

        let [low, high] = [0, Math.max(...piles)];

        while (low <= high) {
            const k = Math.floor((low + high) / 2);

            if (feasible(k)) {
                high = k - 1;
            } else {
                low = k + 1;
            }
        }

        return high + 1;
    }
}

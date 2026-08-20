class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const desc = position.map((pos, idx) => ({ pos, idx }))
                        .sort((a, b) => b.pos - a.pos);
        const stack = [];
        
        for (const { pos, idx } of desc) {
            const pred = (target - pos) / speed[idx];

            if (!stack.length || stack.at(-1) < pred) {
                stack.push(pred);
            }
        }

        return stack.length;
    }
}

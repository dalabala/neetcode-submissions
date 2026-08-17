class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const target = new Map();

        for (const ch of t) {
            target.set(ch, (target.get(ch) ?? 0) + 1);
        }

        const feasible = (window, target) => {
            for (const [ch, freq] of target) {
                if (freq > (window.get(ch) ?? 0)) return false;
            }
            return true;
        };

        const n = s.length;
        const need = target.size;
        let formed = 0;
        let result = [0, n];

        const window = new Map();
        for (let l = 0, r = 0; r < n; r++) {
            const cr = s[r];
            window.set(cr, (window.get(cr) ?? 0) + 1);
            if (window.get(cr) === target.get(cr)) formed++;
            while (need === formed) {
                if (r - l < result[1] - result[0]) [result[0], result[1]] = [l, r];
                const cl = s[l];
                if (window.get(cl) === target.get(cl)) formed--;
                window.set(cl, window.get(cl) - 1);
                l++;
            }
        }

        return result[1] === n ? "" : s.slice(result[0], result[1] + 1);
    }
}

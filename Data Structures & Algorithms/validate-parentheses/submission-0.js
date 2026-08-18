class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const brackets = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (const ch of s) {
            if (stack.length && brackets[ch] === stack.at(-1)) {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }

        return stack.length === 0;
    }
}

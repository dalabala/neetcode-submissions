class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            let [a, b] = [];
            switch (token) {
                case "+":
                    [b, a] = [stack.pop(), stack.pop()];
                    stack.push(a + b);
                    break;
                case "-":
                    [b, a] = [stack.pop(), stack.pop()];
                    stack.push(a - b);
                    break;
                case "*":
                    [b, a] = [stack.pop(), stack.pop()];
                    stack.push(a * b);
                    break;
                case "/":
                    [b, a] = [stack.pop(), stack.pop()];
                    stack.push(Math.trunc(a / b));
                    break;
                default:
                    stack.push(parseInt(token));
            }
        }

        return stack.at(-1);
    }
}

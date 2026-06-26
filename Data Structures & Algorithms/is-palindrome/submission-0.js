class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let [l, r] = [0, s.length - 1];

        while (l < r) {
            if (!this.isAlphanumeric(s[l])) {
                l++;
                continue;
            }

            if (!this.isAlphanumeric(s[r])) {
                r--;
                continue;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
    
    isAlphanumeric(ch) {
        const code = ch.charCodeAt(0);
        return ((code > 47 && code < 58) || 
                (code > 64 && code < 91) ||
                (code > 96 && code < 123));
    }
}

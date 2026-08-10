class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const n = s.length;
        let [l, r] = [0, n - 1];

        const isAlphaNumeric = (charCode) => (
            (charCode >= 48 && charCode <= 57) ||
            (charCode >= 65 && charCode <= 90) || 
            (charCode >= 97 && charCode <= 122)
        );

        while (l < r) {
            if (!isAlphaNumeric(s[l].charCodeAt(0))) {
                l++;
                continue;
            }
            if (!isAlphaNumeric(s[r].charCodeAt(0))) {
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
}

class PrefixTree {
    constructor() {
        this.children = Array.from({ length: 26 }, () => null);
        this.isEndOfWord = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this;
        for (const ch of word) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                curr.children[index] = new PrefixTree();
            }
            curr = curr.children[index];
        }
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this;
        for (const ch of word) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                return false;
            }
            curr = curr.children[index];
        }
        return curr.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this;
        for (const ch of prefix) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                return false;
            }
            curr = curr.children[index];
        }
        return true;
    }
}

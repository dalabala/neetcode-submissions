var ListNode = function(key, val, prev, next) {
  this.key = key;
  this.val = val;
  this.prev = prev ?? null;
  this.next = next ?? null;  
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
    this.hash = new Map();
};

LRUCache.prototype.pop = function(node) {
    const prev = node.prev;
    const next = node.next;
    if (prev) {
        prev.next = next;
        if (next) {
            next.prev = prev;
        } else {
            this.tail = prev;
        }
    } else {
        this.head = next;
        if (next) {
            next.prev = null;
        }
    }
    node.prev = null;
    node.next = null;
    this.hash.delete(node.key);
}

LRUCache.prototype.push = function(node) {
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    this.hash.set(node.key, node);
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.hash.get(key);

    if (node) {
        this.pop(node);
        this.push(node);
        return node.val;
    }

    return -1;
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.hash.has(key)) {
        this.pop(this.hash.get(key));
    }

    const node = new ListNode(key, value, null, null);

    if (this.capacity === this.hash.size) {
        this.pop(this.head);
    }

    this.push(node);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
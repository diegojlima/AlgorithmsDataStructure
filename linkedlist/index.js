// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            counter++;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        let node = this.head;
        if (node.next) {
            this.head = node.next;
        } else {
            this.head = null;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let firstNode = this.head;
        let secondNode = this.head.next;

        while(secondNode.next) {
            firstNode = secondNode;
            secondNode = secondNode.next;
        }
        firstNode.next = null;
    }

    insertLast(data) {
        const node = this.getLast();

        if (node) {
            node.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while(node) {
            if (counter === index) {
                return node;
            } 
            node = node.next;
            counter++; 
        }
        return null;
    }

    removeAt(index) {
        if (index === 0) {
            let next = this.getAt(index + 1);
            if (next) {
                this.head = next;
            }
        } else {
            let previous = this.getAt(index - 1);
            let next = this.getAt(index + 1);
            if (previous && next) {
                previous.next = next;
            } else if (previous && !next) {
                previous.next = null;
            }
        }
    }

    insertAt(data, index) {
        if (this.size() < index) {
            let last = this.getAt(this.size() - 1);
            last.next = new Node(data);
        } else if (index === 0 ) {
            let next = this.getAt(index);
            this.head = new Node(data, next);
        } else {
            let previous = this.getAt(index-1);
            let actual = this.getAt(index);
            if (previous) {
                previous.next = new Node(data, actual);
            }
        }
    }
    
    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
    

}

module.exports = { Node, LinkedList };

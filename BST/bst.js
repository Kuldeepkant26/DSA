class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    mkTree(val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        }
    }
}

let b1 = new BST();
b1.mkTree(1);
console.warn(b1.isEmpty());
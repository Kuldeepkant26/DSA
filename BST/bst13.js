class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Bst {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    addNode(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.pushNode(newNode, this.root);
        }
    }
    pushNode(newNode, root) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.pushNode(newNode, root.left);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.pushNode(newNode, root.right);
            }
        }
    }
}
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
        if (this.root == null) {
            return true
        } else {
            return false
        }
    }
    makeTree(data) {
        let newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
}
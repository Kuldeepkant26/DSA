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

    makeTree(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    printTree() {
        this.inOrderTraversal(this.root);
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage:
let bst = new Bst();
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(15);
bst.makeTree(2);
bst.makeTree(7);
bst.makeTree(12);
bst.makeTree(20);

bst.printTree(); // Output: 2 5 7 10 12 15 20

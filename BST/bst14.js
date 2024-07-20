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
        if (this.isEmpty()) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
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
    preorder() {
        this.preorderTraversal(this.root);
    }
    preorderTraversal(root) {
        if (root != null) {
            console.log(root.data);
            this.preorderTraversal(root.left)
            this.preorderTraversal(root.right);
        }
    }
}

let b1 = new Bst();

b1.addNode(5)
b1.addNode(5)
b1.addNode(8)
b1.addNode(3)
b1.addNode(45)
b1.addNode(19)
b1.preorder();

console.log(b1);
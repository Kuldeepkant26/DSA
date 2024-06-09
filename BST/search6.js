class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class Bst {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode
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
    search(key) {
        if (this.isEmpty()) {
            console.log("Tree is Empty");
            return false
        } else {
            return this.findNode(this.root, key);
        }
    }
    findNode(root, key) {

        if (root === null) {
            return false;
        }

        if (root.data === key) {
            return true
        }

        if (root.data > key) {
            return this.findNode(root.left, key);
        } else {
            return this.findNode(root.right, key);
        }
    }
    preorder() {
        this.preorderTraversal(this.root);
    }
    preorderTraversal(root) {
        console.log(root.data);
        this.preorderTraversal(root.left)
        this.preorderTraversal(root.right)
    }
    postorder() {
        this.postorderTraversal(this.root);
    }
    postorderTraversal(root) {
        this.preorderTraversal(root.left)
        this.preorderTraversal(root.right)
        console.log(root.data);
    }
    inorder() {
        this.inorderTraversal(this.root);
    }
    inorderTraversal(root) {
        this.preorderTraversal(root.left)
        console.log(root.data);
        this.preorderTraversal(root.right)
    }
}

let b1 = new Bst();

b1.insert(9);
b1.insert(8);
b1.insert(9);

console.log(b1);
console.log(b1.search(9));

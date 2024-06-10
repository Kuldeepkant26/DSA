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
    search(key) {
        if (this.isEmpty()) {
            return false;
        } else {
            return this.findNode(this.root, key);
        }
    }
    findNode(root, key) {
        if (root === null) {
            return false;
        }
        if (root.data === key) {
            return true;
        }
        if (root.data > key) {
            return this.findNode(root.left, key);
        } else {
            return this.findNode(root.right, key);
        }
    }

    inorder() {
        this.inorderTraversal(this.root);
    }
    inorderTraversal(root) {
        if (root != null) {
            this.inorderTraversal(root.left)
            console.log(root.data);
            this.inorderTraversal(root.right);
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

    postorder() {
        this.postorderTraversal(this.root);
    }
    postorderTraversal(root) {
        if (root != null) {
            this.postorderTraversal(root.left);
            this.postorderTraversal(root.right);
            console.log(root.data);
        }
    }

}

let b1 = new Bst();
b1.insert(1);
b1.insert(4);
b1.insert(6);
b1.insert(2);


b1.inorder();
console.log(b1.search(2));
b1.preorder();
console.log(b1.isEmpty());
b1.postorder();

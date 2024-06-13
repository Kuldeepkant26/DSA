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
            this.insertNode(this.root, newNode)
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
    inorder() {
        this.inordertraversal(this.root);
    }
    inordertraversal(root) {
        if (root != null) {
            this.inordertraversal(root.left)
            console.log(root.data);
            this.inordertraversal(root.right)
        }
    }
    preorder() {
        this.preordertraversal(this.root);
    }
    preordertraversal(root) {
        if (root != null) {
            console.log(root.data);
            this.preordertraversal(root.left)
            this.preordertraversal(root.right)
        }
    }
    postorder() {
        this.postordertraversal(this.root);
    }
    postordertraversal(root) {
        if (root != null) {
            this.postordertraversal(root.left)
            this.postordertraversal(root.right)
            console.log(root.data);
        }
    }
    search(key) {
        if (this.isEmpty()) {
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
            return true;
        }
        if (root.data > key) {
            return this.findNode(root.left, key);
        } else {
            return this.findNode(root.right, key);
        }
    }
    BFStraversal() {
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
            console.log(current.data);
        }
    }
}

let b1 = new Bst();
b1.insert(9);
b1.insert(7);
b1.insert(12);
b1.insert(6);
b1.insert(10);
console.log(b1.isEmpty());
// b1.inorder();
// b1.preorder();
 

// b1.postorder();

console.log(b1.search(12));
b1.BFStraversal();
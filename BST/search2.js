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
    isempty() {
        return this.root === null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.isempty()) {
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
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(key) {
        if (this.isempty()) {
            console.log("Tree is Empty");
            return false;
        } else {
            if (this.root.data === key) {
                console.log("Key Found");
                return true;
            } else {
                this.searchNode(this.root, key);
            }
        }
    }
    searchNode(root, key) {
        if (root === null) {
            console.log()
        }
        if (root.data > key) {
            if (root.left.data == key) {
                console.log("key found");
                return true;
            } else {
                this.searchNode(root.left, key);
            }
        } else {
            if (root.right.data === key) {
                console.log("Key found");
                return true;
            } else {
                this.searchNode(root.right, key);
            }
        }
    }
}

let b1 = new Bst();
console.warn(b1.isempty());
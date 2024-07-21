class Node {
    constructor(data) {
        this.data = data,
            this.left = null,
            this.right = null
    }
}

class Bst {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null;
    }
    addNode(data) {
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
    searchNode(key) {
        if (this.isEmpty()) {
            return false;
        } else {
            return this.findNode(this.root, key);
        }
    }
    findNode(root, key) {
        if (root === null) {
            return false
        }
        if (root.data === key) {
            return true;
        }

        if (root.data > key) {
            return this.findNode(root.left, key);
        }
        if (root.data < key) {
            return this.findNode(root.right, key);
        }
    }
}

let b1 = new Bst();
b1.addNode(2)
b1.addNode(7)
b1.addNode(78)
b1.addNode(8)
b1.addNode(18)

console.log(b1.isEmpty());
console.log(b1.searchNode(79));
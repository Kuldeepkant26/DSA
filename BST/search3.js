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
        const newNode = new Node(data);
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

    search(key) {
        if (this.isEmpty()) {
            console.log("Tree is empty");
            return false;
        } else {
            return this.searchNode(this.root, key);
        }
    }

    searchNode(root, key) {
        if (root === null) {
            console.log("Key not found");
            return false;
        }
        if (root.data === key) {
            console.log("Key found");
            return true;
        }
        if (root.data > key) {
            return this.searchNode(root.left, key);
        } else {
            return this.searchNode(root.right, key);
        }
    }
}

// Usage example
const bst = new Bst();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

bst.search(7);  // Should log "Key found"
bst.search(12); // Should log "Key not found"

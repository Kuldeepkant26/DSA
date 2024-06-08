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
        let newNode = new Node(data)
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
        if (this.root === null) {
            console.log("Tree is Empty");
            return false
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
        } else {
            return this.findNode(root.right, key);
        }
    }

}

let bst = new Bst();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(17);
bst.insert(79);
bst.insert(19);
console.warn(bst);
console.warn(bst.search("hi"));
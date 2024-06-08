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
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (newNode.data < root.data) {
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
    Search(key) {
        if (this.isEmpty()) {
            console.log("tree is Empty");
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
}

let b1 = new Bst();
b1.insert(1)
b1.insert(2)
b1.insert(3)
b1.insert(4)
b1.insert(9)
b1.insert("hi")
b1.insert("Kuldeep")
b1.insert("Kuldeep kant")
console.log(b1);
console.log(b1.Search("Kuldeepi"));
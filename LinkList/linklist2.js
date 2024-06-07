class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        let NewNode = new Node(data);
        if (this.head == null) {
            this.head = NewNode;
            return;
        }
        NewNode.next = this.head;
        this.head = NewNode;

    }
    addLast(data) {
        let NewNode = new Node(data);
        if (this.head == null) {
            this.head = NewNode;
            return;
        }
        let currNode = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = NewNode;
    }
    print() {
        if (this.head == null) {
            console.log("Node is Empty");
            return;
        }
        let currNode = this.head;

    }
}
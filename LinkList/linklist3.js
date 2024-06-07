class Node {
    constructor(data) {
        this.data = data,
            this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    addFirst(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    addlast(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        let currNode = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;

    }
    addAt(key, data) {
        let newData = new Node(data);
    }
    deleteFirst() {
        if (this.head == null) {
            console.log("List is Empty");
            return;
        }
        this.head = this.head.next
    }
    deletelast() {
        if (this.head == null) {
            console.log("List is Empty");
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        let currNode = this.head;
        while (currNode.next.next != null) {
            currNode = currNode.next;
        }
        currNode.next = null;

    }
    delete(key) {
        if (this.head == null) {
            console.log("Empty");
            return;
        }
        if (this.head.data == key) {
            this.head = this.head.next
            return;
        }
        let currNode = this.head;
        while (currNode.next != null) {
            if (currNode.next.data == key) {
                currNode.next = currNode.next.next;
                return;
            }
            currNode = currNode.next
        }
        console.log("Key don't exist");
    }
    print() {
        if (this.head == null) {
            console.log("Empty");
            return;
        }
        let currNode = this.head;
        while (currNode != null) {
            console.log(currNode.data);
            currNode = currNode.next
        }
    }
}

let l1 = new LinkedList();
l1.addFirst("1")
l1.addFirst("2")
l1.addFirst("hi")
l1.addFirst("9")
l1.addlast("890")
l1.addFirst(980);
l1.delete("hii");
l1.print();
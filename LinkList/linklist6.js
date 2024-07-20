class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }

    addFirst(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    print() {
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode.data)
            currNode = currNode.next;
        }
    }
    addLast(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            currNode.next = newNode;
        }
    }
}


let l1 = new List();

l1.print();
l1.addFirst(7);
l1.addFirst(6);
l1.addFirst(5);
l1.addFirst(4);
l1.addLast(8)
l1.addLast(90)
l1.print();
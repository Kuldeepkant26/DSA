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
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    addLast(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
    }
    print() {
        if (this.head === null) {
            console.log('List is Empty');
        }

        let curNode = this.head;

        while (curNode != null) {
            console.log(curNode.data + " ---> ")
            curNode = curNode.next;
        }
    }

}

let l1 = new List();
l1.addFirst(34);
l1.addFirst(34);
l1.addFirst(90);
l1.addLast(65);
l1.addLast(6);
l1.addFirst(34);

console.log(l1.isEmpty());
l1.print();
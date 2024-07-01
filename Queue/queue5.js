class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class Queue {

    constructor() {
        this.head = null;
    }
    enqueue(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while (currNode.next != null) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
    }
    dequeue() {
        if (this.head === null) {
            console.log("Can't dequeue List is Empty");
        }
        this.head = this.head.next;
    }
    print() {
        if (this.head === null) {
            console.log("Queue is Empty");
        } else {
            let currNode = this.head;
            while (currNode != null) {
                console.log(currNode.data);
                currNode = currNode.next;
            }
        }
    }

}

let q1 = new Queue();
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.dequeue();
q1.dequeue();

q1.print();
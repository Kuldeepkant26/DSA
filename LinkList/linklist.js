class Node {
    constructor(data) {
        this.data = data,
            this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
    }

    addFirst(data) {
        let NewNode = new Node(data);
        if (this.head == null) {
            this.head = NewNode
            return;
        }
        NewNode.next = this.head
        this.head = NewNode
    }
    addLast(data) {
        let NewNode = new Node(data);
        if (this.head == null) {
            this.head = NewNode
            return;
        }
        let currNode = this.head
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = NewNode;
    }
    printNode() {
        if (this.head == null) {
            console.log("List is Empty");
            return; // Add return to exit the method
        }
        let currNode = this.head;
        while (currNode != null) { // Check if currNode is not null
            console.log(currNode.data); // Print the current node's data
            currNode = currNode.next; // Move to the next node
        }
    }
}

let l1 = new LinkList();
l1.addFirst('1')
l1.addFirst('2')
l1.addFirst('3')
l1.addLast('8');
l1.printNode();
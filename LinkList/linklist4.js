class Node {
    constructor(data) {
        this.data = data;;
        this.next = null;
    }
}

class LinkedList {
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
            this.head = newNode
        }
    }
    addLast(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let currNode = this.head;
            while (currNode.next != null) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
    }
    print() {
        if (this.isEmpty()) {
            console.log("List is Empty");
        } else {
            let currNode = this.head;
            while (currNode != null) {
                console.log(currNode.data);
                currNode = currNode.next;
            }
        }

    }
    search(key) {
        if (this.isEmpty()) {
            return false;
        } else {
            let currNode = this.head;
            while (currNode != null) {
                if (currNode.data === key) {
                    return true;
                }
                currNode = currNode.next;
            }
            return false;
        }
    }
    deleteFirst() {
        if (this.isEmpty()) {
            console.log("List is Empty");
        } else {
            this.head = this.head.next;
        }
    }
    deleteLast() {
        if (this.isEmpty()) {
            console.log("List is Empty");
        }
        if (this.head.next === null) {
            this.head = null;
        }
        else {
            let currNode = this.head;
            while (currNode.next.next != null) {
                currNode = currNode.next;
            }
            currNode.next = null;
        }
    }
    length() {
        let currNode = this.head;
        let len = 0;
        while (currNode != null) {
            currNode = currNode.next;
            len++;
        }
        return len;
    }
}

let l1 = new LinkedList();
// l1.addFirst(1)
// l1.addFirst(2)
// l1.addFirst(3)
// l1.addLast('Hi')
// l1.deleteFirst();
// l1.deleteLast();


// console.log(l1.search('i'));
console.log(l1.length());
// l1.print();
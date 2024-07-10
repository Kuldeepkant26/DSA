class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }
    push(data) {
        let newnOde = new Node(data);
        if (this.head === null) {
            this.head = newnOde
        } else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = newnOde;
        }
    }
    print() {
        if (this.head === null) {
            console.log("Stack is Empty");
        }
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode.data);
            currNode = currNode.next
        }
    }
}

let s1 = new Stack();

s1.print();
s1.push(9)
s1.push(9)
s1.push(9)
s1.push(9)
s1.print();
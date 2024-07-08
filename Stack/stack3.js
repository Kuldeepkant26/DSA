class Stack {
    constructor() {
        this.stack = [];
    }
    push(data) {
        this.stack.push(data);
    }
    pop() {
        this.stack.pop();
    }
    print() {
        if (this.stack.length === 0) {
            console.log("Stack is Empty");
        }
        for (let data of this.stack) {
            console.log(data);
        }
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    size() {
        return this.stack.length();
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}

let s1 = new Stack();
console.log(s1.isEmpty())
s1.push(78)
s1.push(88)
s1.push(89)
console.log(s1.isEmpty())
// s1.pop();
// s1.print();
// console.log(s1.peek())
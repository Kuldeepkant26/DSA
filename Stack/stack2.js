class Stack {
    constructor() {
        this.stack = []
    }
    push(data) {
        this.stack.push(data);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    print() {
        for (let el of this.stack) {
            console.log(el);
        }
    }
    size() {
        return this.stack.length;
    }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
console.log(s1.pop());
s1.print();
console.log(s1.isEmpty());
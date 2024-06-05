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

    peek() {
        return this.stack[this.stack.length - 1];
    }
    print() {
        if (this.stack.length == 0) {
            console.log("Stack is Empty");
        }
        for (let el of this.stack) {
            console.log(el)
        }
    }
    isEmpty() {
        return this.stack.length == 0;
    }
    size() {
        return this.stack.length
    }
    clear() {
        this.stack = [];
    }
    contain(data) {
        return this.stack.includes(data);
    }
    reverse() {
        this.stack.reverse();
    }
}

let s1 = new Stack();

s1.push(7)
s1.push(8)
s1.push(9)

console.log(s1.peek())
console.log(s1.contain(9))
console.log(s1.contain(0))



s1.print()
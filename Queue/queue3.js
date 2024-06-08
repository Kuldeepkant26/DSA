class Queue {
    constructor() {
        this.queue = [];
    }
    push(data) {
        this.queue.push(data);
    }
    pop() {
        return this.queue.shift();
    }
    print() {
        for (let el of this.queue) {
            console.log(el);
        }
    }
}
let q1 = new Queue();
q1.push(1);
q1.push(2);
q1.push(3);

console.log(q1.pop());

q1.print()
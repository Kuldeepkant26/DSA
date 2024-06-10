class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(data) {
        this.queue.push(data);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    print() {
        console.log(this.queue.join(" -> "))
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}
let q1 = new Queue();
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)

// console.log(q1.size());
// console.log(q1.isEmpty());


console.log(q1.dequeue());

q1.print();
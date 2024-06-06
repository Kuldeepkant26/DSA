class Queue {

    constructor() {
        this.queue = []
    }
    enqueue(data) {
        this.queue.push(data);
    }
    dequeue() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }
}

let s1 = new Queue();

s1.enqueue("i");
s1.enqueue("j");
s1.enqueue("k");

// console.log(s1.dequeue());
console.log(s1.size())
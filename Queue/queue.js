class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(data) {
        this.queue.push(data);
    }
    dequeue() {
        if (this.isEmpty) {
            return "Queue is empty"
        }
        return this.queue.shift();
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    size() {
        return this.queue.length;
    }
    peek() {
        if (this.isEmpty) {
            return "Queue is empty"
        }
        return this.queue[0]
    }
    clear() {
        this.queue = [];
    }
    print() {
        for (let el of this.queue) {
            console.log(el);
        }
    }
}

let q1 = new Queue();

q1.enqueue(1)
q1.enqueue(1)
q1.enqueue(1)
q1.enqueue(1)
q1.print();
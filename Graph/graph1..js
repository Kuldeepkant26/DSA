class Graph {
    constructor() {
        this.adejecencyList = {}
    }
    hasVertex(vertex) {
        return this.adejecencyList.hasOwnProperty(vertex);
    }
    addVertex(vertex) {
        if (!this.hasVertex(vertex)) {
            this.adejecencyList[vertex] = []
        }
    }
    connectEdge(vertex1, vertex2) {
        if (!this.hasVertex(vertex1)) {
            this.adejecencyList[vertex1] = []
        }
        if (!this.hasVertex(vertex2)) {
            this.adejecencyList[vertex2] = []
        }
        this.adejecencyList[vertex1].push(vertex2);
        this.adejecencyList[vertex2].push(vertex1);
    }
    hasEdge(vertex1, vertex2) {
        if (!this.hasVertex(vertex1) || !this.hasVertex(vertex2)) {
            return false
        }
        return this.adejecencyList[vertex1].includes(vertex2) && this.adejecencyList[vertex2].includes(vertex1)
    }
    display() {
        for (let vertex in this.adejecencyList) {
            console.log(vertex + "-> " + this.adejecencyList[vertex].join(','));
        }
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.connectEdge(0, 1);
graph.connectEdge(0, 2);
graph.connectEdge(1, 3);
graph.connectEdge(2, 4);
graph.display();

console.log(graph.hasEdge(0, 1)); // true
console.log(graph.hasEdge(1, 4)); 
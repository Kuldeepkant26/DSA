class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    hasVertex(vertex) {
        return this.adjacencyList.hasOwnProperty(vertex);
    }
    addVertex(vertex) {
        if (!this.hasVertex(vertex)) {
            this.adjacencyList[vertex] = [];
        }
    }
    connectEdge(vertex1, vertex2) {
        if (!this.hasVertex(vertex1)) {
            this.adjacencyList[vertex1] = [];
        }
        if (!this.hasVertex(vertex2)) {
            this.adjacencyList[vertex2] = [];
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    hasEdge(vertex1, vertex2) {

        if (!this.hasEdge(vertex1) && !this.hasEdge(vertex2)) {
            return false;
        }

        return this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)

    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ' + this.adjacencyList[vertex].join(' '));
        }
    }

}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.connectEdge('A', 'B');
graph.connectEdge('C', 'B');
graph.connectEdge('C', 'A');
graph.connectEdge('C', 'D');

graph.display();
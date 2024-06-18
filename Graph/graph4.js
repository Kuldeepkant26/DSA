class Graph {
    constructor() {
        this.adjecencyList = {}
    }
    hasVertex(vertex) {
        return this.adjecencyList.hasOwnProperty(vertex);
    }
    addVertex(vertex) {
        if (!this.hasVertex(vertex)) {
            this.adjecencyList[vertex] = []
        }
    }
    connectEdge(vertex1, vertex2) {
        if (!this.hasVertex(vertex1)) {
            this.adjecencyList[vertex1] = []
        }
        if (!this.hasVertex(vertex2)) {
            this.adjecencyList[vertex2] = []
        }
        this.adjecencyList[vertex1].push(vertex2)
        this.adjecencyList[vertex2].push(vertex1)
    }
    hasEdge(vertex1, vertex2) {
        if (!this.hasVertex(vertex1) && !this.hasVertex(vertex2)) {
            return false;
        }
        return this.adjecencyList[vertex1].includes(vertex2) && this.adjecencyList[vertex2].includes(vertex1)
    }
    display() {
        for (let vertex in this.adjecencyList) {
            console.log(vertex + " --> " + this.adjecencyList[vertex].join(" "))
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
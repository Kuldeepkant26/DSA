class graph {
    constructor() {
        this.adjecentList = {}
    }
    hasVertex(vertex) {
        return this.adjecentList.hasOwnProperty(vertex);
    }
    addvertex(vertex) {
        if (!this.hasVertex(vertex)) {
            this.adjecentList[vertex] = []
        }
    }
    connectEdge(vertex1, vertex2) {
        if (!this.hasVertex(vertex1)) {
            this.adjecentList[vertex1] = []
        }
        if (!this.hasVertex(vertex2)) {
            this.adjecentList[vertex2] = []
        }
        this.adjecentList[vertex1].push(vertex2)
        this.adjecentList[vertex2].push(vertex1)
    }
    hasedge(vertex1, vertex2) {
        if (!this.adjecentList[vertex1] || !this.adjecentList[vertex2]) {
            
            return false
        }
        return this.adjecentList[vertex1].includes(vertex2) && this.adjecentList[vertex2].includes(vertex1)
    }
    display() {
        for (let vertex in this.adjecentList) {
            console.log(vertex + "-> " + this.adjecentList[vertex].join(','))
        }
    }
}
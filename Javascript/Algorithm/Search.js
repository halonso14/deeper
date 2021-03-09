// REFERENCE: https://www.zerocho.com/category/Algorithm/post/5870153c37e1c80018b64eb0
// REFERENCE: https://ko.m.wikipedia.org/wiki/%EA%B9%8A%EC%9D%B4_%EC%9A%B0%EC%84%A0_%ED%83%90%EC%83%89

export class GraphSearch {
    constructor(graph, checkCondition, func) {
        this.graph = graph;
        this.queue = new Array();
        this.stack = new Array();
        this.visited = new Array(size);
        this.checkCondition = checkCondition;
        this.func = func;
    }

    bfs(current)  { 
        this.visited[current] = true;
        this.queue.push(current); 
        while (queue.length) {
            let current = this.queue.shift();
            let result = this.func(current, this.graph, this.visited);
            if(result) return result;
            this.bfs(current);
        }
    };

    dfs(current)  { 
        this.visited[current] = true;
        this.stack.push(current); 
        let current = this.stack.pop();
        let result = this.func(current, this.graph, this.visited);
        if(result) return result;
        this.dfs(current);
    };

}
class Search {
    constructor(input, size, func) {
        this.input = input;
        this.queue = new Array();
        this.stack = new Array();
        this.visited = new Array(size);
        this.func = func;
    }

    bfs(current)  { 
        this.visited[current] = true;
        this.queue.push(current); 
        while (queue.length) {
            let current = this.queue.shift();
            let result = this.func(current, this.input, this.visited);
            if(result) return result;
            this.bfs(current);
        }
    };

    dfs(current)  { 
        this.visited[current] = true;
        this.stack.push(current); 
        let current = this.stack.pop();
        let result = this.func(current, this.input, this.visited);
        if(result) return result;
        this.dfs(current);
    };

}

export default Search;
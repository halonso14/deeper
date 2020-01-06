from queue import Queue

def bfs_graph(graph, start_node):
    visited = {}
    queue = Queue()

    queue.put(start_node)

    while queue.qsize() > 0:
        node = queue.get()
        if node in visited:
            continue
        visited[node] = True
        queue.extend(graph[node])

    return visited
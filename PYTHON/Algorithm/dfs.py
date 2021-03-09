from queue import Queue

def dfs_graph(graph, start_node):
    visited = {}
    stack = []

    stack.append(start_node)

    while stack:
        node = stack.pop()
        if node in visited:
            continue
        visited[node] = True
        stack.extend(graph[node])

    return visited
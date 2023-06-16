from collections import deque

def find_ancient_trade_route(M):
    # Get the size of the grid
    n = len(M) - 1
    
    # Construct the graph G
    G = construct_graph(M, n)
    
    # Find the vertices adjacent to 'euphris' squares
    start_vertices = find_euphris_vertices(M)
    
    # Find the vertices adjacent to 'tigrates' squares
    target_vertices = find_tigrates_vertices(M)
    
    # Find the shortest path using BFS
    shortest_path = bfs(G, start_vertices, target_vertices)
    
    return shortest_path

def construct_graph(M, n):
    # Initialize an empty graph
    G = {}
    
    # Iterate over the grid squares
    for r in range(n + 1):
        for c in range(1, n + 1):
            # Check if the square is not 'euphris' or 'tigrates' and shares the same owner with the adjacent square
            if M[r][c] != 'euphris' and M[r][c] != 'tigrates' and M[r][c - 1] == M[r][c]:
                # Add an edge between the current square and the adjacent square
                add_edge(G, (r, c - 1), (r, c))
            
            # Check if the square is not 'euphris' or 'tigrates' and shares the same owner with the adjacent square
            if M[c][r] != 'euphris' and M[c][r] != 'tigrates' and M[c - 1][r] == M[c][r]:
                # Add an edge between the current square and the adjacent square
                add_edge(G, (c - 1, r), (c, r))
    
    return G

def add_edge(G, u, v):
    # Add undirected edges between vertices u and v in graph G
    if u not in G:
        G[u] = []
    if v not in G:
        G[v] = []
    G[u].append(v)
    G[v].append(u)

def find_euphris_vertices(M):
    # Find the vertices adjacent to 'euphris' squares in the grid
    euphris_vertices = []
    for r in range(len(M)):
        for c in range(len(M)):
            if M[r][c] == 'euphris':
                euphris_vertices.append((r, c))
    return euphris_vertices

def find_tigrates_vertices(M):
    # Find the vertices adjacent to 'tigrates' squares in the grid
    tigrates_vertices = []
    for r in range(len(M)):
        for c in range(len(M)):
            if M[r][c] == 'tigrates':
                tigrates_vertices.append((r, c))
    return tigrates_vertices

def bfs(G, start_vertices, target_vertices):
    # Perform Breadth-First Search (BFS) to find the shortest path from start_vertices to target_vertices
    queue = deque()
    visited = set()
    parent = {}
    
    # Initialize the BFS by adding the start_vertices to the queue and marking them as visited
    for start in start_vertices:
        queue.append(start)
        visited.add(start)
    
    while queue:
        current = queue.popleft()
        
        # Check if the current vertex is one of the target_vertices
        if current in target_vertices:
            return reconstruct_path(parent, start, current)
        
        # Explore the neighbors of the current vertex
        for neighbor in G[current]:
            if neighbor not in visited:
                queue.append(neighbor)
                visited.add(neighbor)
                parent[neighbor] = current
    
    # If no path is found, return an empty list
    return []

def reconstruct_path(parent, start, end):
    # Reconstruct the shortest path from the parent pointers
    path = [end]
    
    # Traverse the parent pointers from the end vertex to the start vertex
    while path[-1] != start:
        path.append(parent[path[-1]])
    
    # Reverse the path to get the correct order
    path.reverse()
    
    return path

def DFS(G):
    color = {} # Color of each vertex (WHITE, GRAY, BLACK)
    parent = {} # Parent of each vertex
    time = 0 # Time counter

    # Initialization
    for vertex in G:
        color[vertex] = 'WHITE' # Not yet discovered
        parent[vertex] = None # Parent is not defined

    # Iterate over each vertex in G
    for vertex in G:
        if color[vertex] == 'WHITE':
            DFSVisit(vertex) # Start DFS visit from vertex

    def DFSVisit(u):
        nonlocal time
        color[u] = 'GRAY' # Vertex u discovered (being visited)
        time += 1 # Increase the time counter
        discoveryTime = time # Store the discovery time of u

        for v in G[u]:
            if color[v] == 'WHITE':
                parent[v] = u # Set the parent of v as u
                DFSVisit(v) # Recursive call to visit v

        color[u] = 'BLACK' # Vertex u fully explored (visited)
        time += 1 # Increase the time counter
        finishingTime = time # Store the finishing time of u

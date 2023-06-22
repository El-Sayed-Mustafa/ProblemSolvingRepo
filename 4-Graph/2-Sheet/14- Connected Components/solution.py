from collections import deque

def BFS(G, s):
    # Initialize color, distance, component, and predecessor arrays
    color = {}
    d = {}
    comp = {}
    pred = {}

    for u in G:
        color[u] = 'WHITE'    # Initialize vertex color as white
        d[u] = float('inf')   # Initialize vertex distance as infinity
        comp[u] = 0           # Initialize component index as 0
        pred[u] = None        # Initialize predecessor as None

    Index = 0   # Component index counter

    for u in G:
        if color[u] == 'WHITE':
            Index += 1
            color[u] = 'GRAY'   # Mark current vertex as gray
            d[u] = 0            # Set distance of starting vertex to 0
            comp[u] = Index     # Assign the component index to the starting vertex
            BFS_Visit(G, u, comp, color, d, pred)

def BFS_Visit(G, s, comp, color, d, pred):
    Q = deque()
    Q.append(s)

    while Q:
        u = Q.popleft()

        for v in G[u]:
            if color[v] == 'WHITE':
                color[v] = 'GRAY'     # Mark adjacent vertex as gray
                d[v] = d[u] + 1       # Update distance of adjacent vertex
                comp[v] = comp[u]     # Assign the same component index to the adjacent vertex
                pred[v] = u           # Set predecessor of adjacent vertex
                Q.append(v)

        color[u] = 'BLACK'   # Mark current vertex as black

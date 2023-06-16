def DFS(G):
    # Initialize color, discovery time (d), finish time (f), predecessor (π), and a flag for cycle detection
    color = {}
    d = {}
    f = {}
    π = {}
    cycleDetected = False

    # Initialize all vertices with WHITE color and NIL predecessor
    for u in G:
        color[u] = 'WHITE'
        π[u] = None

    # Perform DFS on each vertex
    for u in G:
        if color[u] == 'WHITE':
            DFS_Visit(u, color, d, f, π, cycleDetected)

def DFS_Visit(u, color, d, f, π, cycleDetected):
    # Mark current vertex as GRAY
    color[u] = 'GRAY'

    # Increment time and set discovery time
    global time
    time += 1
    d[u] = time

    # Traverse adjacent vertices
    for v in G[u]:
        # If adjacent vertex is WHITE, perform DFS on it
        if color[v] == 'WHITE':
            π[v] = u
            DFS_Visit(v, color, d, f, π, cycleDetected)
        # If adjacent vertex is GRAY, cycle is detected
        elif color[v] == 'GRAY':
            print("Cycle is detected")
            print("Cycle start vertex is", v)
            print("Cycle end vertex is", u)
            cycleDetected = True

    # Mark current vertex as BLACK
    color[u] = 'BLACK'

    # Set finish time
    time += 1
    f[u] = time

    # If no cycle was detected during this DFS, print appropriate message
    if not cycleDetected:
        print("No cycle detected")

# Example usage
G = {
    'A': ['B'],
    'B': ['C'],
    'C': ['D', 'E'],
    'D': ['E'],
    'E': []
}

time = 0  # Global variable to keep track of time

DFS(G)

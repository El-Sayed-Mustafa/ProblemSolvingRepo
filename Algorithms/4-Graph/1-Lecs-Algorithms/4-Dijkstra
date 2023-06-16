#Dijkstra's algorithm with SSSP is to determine
#the shortest path distances from a single source vertex 
#to all other vertices in a weighted graph.

def dijkstra(graph, source):
    distance = {}  # Distance to each vertex
    queue = set()  # Queue to store vertices
    visited = set()  # Set of visited vertices

    # Initialize distances to infinity except for the source vertex
    for vertex in graph:
        distance[vertex] = float('inf')
        queue.add(vertex)
    distance[source] = 0

    while queue:
        # Extract the vertex with the minimum distance from the queue
        u = min(queue, key=lambda v: distance[v])
        queue.remove(u)
        visited.add(u)

        for v in graph[u]:
            # Calculate the new distance to v through u
            new_distance = distance[u] + graph[u][v]
            if new_distance < distance[v]:
                distance[v] = new_distance

    return distance

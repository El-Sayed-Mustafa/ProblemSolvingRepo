from collections import deque

def BFS(graph, startVertex):
    color = {} # Color of each vertex
    distance = {} # Distance from the startVertex
    parent = {} # Parent of each vertex
    queue = deque() # Queue for BFS traversal

    # Initialize vertices with default values
    for vertex in graph:
        color[vertex] = 'WHITE'
        distance[vertex] = float('inf')
        parent[vertex] = None

    color[startVertex] = 'GREY' # Mark the startVertex as visited (Grey)
    distance[startVertex] = 0 # Distance of startVertex from itself is 0
    queue.append(startVertex) # Enqueue the startVertex

    while queue:
        currentVertex = queue.popleft() # Dequeue a vertex from the queue

        for adjacentVertex in graph[currentVertex]:
            if color[adjacentVertex] == 'WHITE':
                # Mark the vertex as visited (Grey)
                color[adjacentVertex] = 'GREY'

                # Update the distance of adjacentVertex from the startVertex
                distance[adjacentVertex] = distance[currentVertex] + 1

                # Set the parent of adjacentVertex as currentVertex
                parent[adjacentVertex] = currentVertex

                # Enqueue the adjacentVertex for further exploration
                queue.append(adjacentVertex)

        color[currentVertex] = 'BLACK' # Mark the currentVertex as fully explored (Black)

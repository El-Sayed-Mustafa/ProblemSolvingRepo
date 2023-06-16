function BFS(graph, startVertex) {
    const color = {}; // Color of each vertex
    const distance = {}; // Distance from the startVertex
    const parent = {}; // Parent of each vertex
    const queue = []; // Queue for BFS traversal

    // Initialize vertices with default values
    for (const vertex in graph) {
        color[vertex] = 'WHITE';
        distance[vertex] = Infinity;
        parent[vertex] = null;
    }

    color[startVertex] = 'GREY'; // Mark the startVertex as visited (Grey)
    distance[startVertex] = 0; // Distance of startVertex from itself is 0
    queue.push(startVertex); // Enqueue the startVertex

    while (queue.length > 0) {
        const currentVertex = queue.shift(); // Dequeue a vertex from the queue

        for (const adjacentVertex of graph[currentVertex]) {
            if (color[adjacentVertex] === 'WHITE') {
                color[adjacentVertex] = 'GREY'; // Mark the vertex as visited (Grey)
                distance[adjacentVertex] = distance[currentVertex] + 1; // Update the distance of adjacentVertex from the startVertex
                parent[adjacentVertex] = currentVertex; // Set the parent of adjacentVertex as currentVertex
                queue.push(adjacentVertex); // Enqueue the adjacentVertex for further exploration
            }
        }

        color[currentVertex] = 'BLACK'; // Mark the currentVertex as fully explored (Black)
    }
}

from collections import deque

#The goal of calculate_radius(G) is to determine the radius of the graph G,
#  which is the minimum eccentricity among all vertices in the graph.
def calculate_radius(G):
    radius = float('inf')  # Initialize the radius as positive infinity

    for u in G:  # Iterate over each vertex in the graph
        eccentricity = breadth_first_search(G, u)  # Calculate the eccentricity of vertex u
        radius = min(radius, eccentricity)  # Update the radius if a smaller eccentricity is found

    return radius  # Return the minimum eccentricity as the radius of the graph


#The goal of calculate_upper_bound_radius(G) is to determine an upper bound on the radius of the graph G, 
# which is the maximum eccentricity among all vertices in the graph.
def calculate_upper_bound_radius(G):
    radius = float('-inf')  # Initialize the radius as negative infinity

    for u in G:  # Iterate over each vertex in the graph
        eccentricity = breadth_first_search(G, u)  # Calculate the eccentricity of vertex u
        radius = max(radius, eccentricity)  # Update the radius if a larger eccentricity is found

    return radius  # Return the maximum eccentricity as an upper bound on the radius of the graph

def breadth_first_search(G, start):
    queue = deque([(start, 0)])  # Create a queue to perform breadth-first search
    visited = set([start])  # Keep track of visited vertices
    eccentricity = 0  # Initialize the eccentricity as 0

    while queue:
        node, distance = queue.popleft()  # Get the next vertex and its distance from the start

        eccentricity = max(eccentricity, distance)  # Update the eccentricity if a greater distance is found

        for neighbor in G[node]:  # Iterate over the neighbors of the current vertex
            if neighbor not in visited:  # Check if the neighbor has not been visited
                queue.append((neighbor, distance + 1))  # Add the neighbor to the queue with an increased distance
                visited.add(neighbor)  # Mark the neighbor as visited

    return eccentricity  # Return the eccentricity of the start vertex

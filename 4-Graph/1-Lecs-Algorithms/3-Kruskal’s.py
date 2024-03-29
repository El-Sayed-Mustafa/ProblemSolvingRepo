#Kruskal's algorithm is a method for
#finding a minimum spanning tree (MST) in a weighted graph

def kruskal(graph, weights):
    A = []  # Initialize an empty list A to store the resulting minimum spanning tree
    
    # Create a disjoint set for each vertex
    disjoint_sets = {}
    for vertex in graph['V']:
        disjoint_sets[vertex] = make_set(vertex)
        
    # Sort edges in ascending order based on weights
    sorted_edges = sorted(graph['E'], key=lambda edge: weights[edge])
    
    for edge in sorted_edges:
        u, v = edge
        
        # Check if adding the edge forms a cycle
        if find_set(disjoint_sets, u) != find_set(disjoint_sets, v):
            A.append(edge)  # Add the edge to the minimum spanning tree
            union(disjoint_sets, u, v)  # Merge the disjoint sets containing u and v
            
    return A  # Return the minimum spanning tree (set of edges)


#!Out of Scope

# Helper functions for disjoint-set operations

def make_set(vertex):
    return {'parent': vertex, 'rank': 0}

def find_set(disjoint_sets, vertex):
    if disjoint_sets[vertex]['parent'] != vertex:
        disjoint_sets[vertex]['parent'] = find_set(disjoint_sets, disjoint_sets[vertex]['parent'])
    return disjoint_sets[vertex]['parent']

def union(disjoint_sets, u, v):
    u_root = find_set(disjoint_sets, u)
    v_root = find_set(disjoint_sets, v)
    
    if disjoint_sets[u_root]['rank'] < disjoint_sets[v_root]['rank']:
        disjoint_sets[u_root]['parent'] = v_root
    elif disjoint_sets[u_root]['rank'] > disjoint_sets[v_root]['rank']:
        disjoint_sets[v_root]['parent'] = u_root
    else:
        disjoint_sets[v_root]['parent'] = u_root
        disjoint_sets[u_root]['rank'] += 1
def knapsack(W, wt, val, N):
    # Initialize memoization table
    R = [[None] * (N + 1) for _ in range(W + 1)]
    
    # Recursive function to solve knapsack problem
    def knapsackRecursive(W, N):
        # Base case
        if W == 0 or N == 0:
            return 0
        
        # If the subproblem has already been solved, return the stored value
        if R[W][N] is not None:
            return R[W][N]
        
        # Check if the weight of the current item exceeds the remaining capacity
        if wt[N-1] > W:  # Adjusted index here
            result = knapsackRecursive(W, N - 1)
        else:
            # Calculate the maximum value by considering two possibilities: including the current item or excluding it
            include = val[N-1] + knapsackRecursive(W - wt[N-1], N - 1)  # Adjusted index here
            exclude = knapsackRecursive(W, N - 1)
            result = max(include, exclude)
        
        # Store the result in the memoization table
        R[W][N] = result
        return result
    
    # Solve the knapsack problem recursively
    max_value = knapsackRecursive(W, N)
    
    # Extract the solution by backtracking
    def extractSolution(W, N):
        if W == 0 or N == 0:
            return []
        
        if wt[N-1] > W:  # Adjusted index here
            return extractSolution(W, N - 1)
        
        include = val[N-1] + knapsackRecursive(W - wt[N-1], N - 1)  # Adjusted index here
        exclude = knapsackRecursive(W, N - 1)
        
        if include > exclude:
            return extractSolution(W - wt[N-1], N - 1) + [N]  # Adjusted index here
        else:
            return extractSolution(W, N - 1)
    
    # Return the maximum value and the selected items
    return max_value, extractSolution(W, N)


# Example usage:
weights = [3, 4, 2, 5]
values = [6, 7, 3, 9]
capacity = 10
num_items = len(weights)

max_value, selected_items = knapsack(capacity, weights, values, num_items)
print("Maximum Value:", max_value)
print("Selected Items:", selected_items)

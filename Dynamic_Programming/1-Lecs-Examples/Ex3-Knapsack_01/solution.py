def knapsack(capacity, weights, values, num_items):
    # Initialize the dynamic programming table and choices table
    dp_table = [[0] * (num_items + 1) for _ in range(capacity + 1)]
    choices = [[""] * (num_items + 1) for _ in range(capacity + 1)]
    
    for i in range(1, capacity + 1):
        for j in range(1, num_items + 1):
            if weights[j-1] > i:
                # If the current item's weight is more than the current capacity, exclude the item
                dp_table[i][j] = dp_table[i][j-1]
                choices[i][j] = "←"
            else:
                if dp_table[i - weights[j-1]][j-1] + values[j-1] > dp_table[i][j-1]:
                    # If including the current item leads to a higher value, include it
                    dp_table[i][j] = dp_table[i - weights[j-1]][j-1] + values[j-1]
                    choices[i][j] = "↖"
                else:
                    # Otherwise, exclude the current item
                    dp_table[i][j] = dp_table[i][j-1]
                    choices[i][j] = "←"
    
    # Print the selected items based on the choices made
    print_knapsack_solution(choices, weights, capacity, num_items)
    
    # Return the maximum value achieved
    return dp_table[capacity][num_items]


def print_knapsack_solution(choices, weights, i, j):
    # Base case: If no items or capacity is 0, return
    if i == 0 or j == 0:
        return
    
    # Check the choice made for the current subproblem
    if choices[i][j] == "←":
        # If the choice is to exclude the current item, move to the previous item
        print_knapsack_solution(choices, weights, i, j-1)
    elif choices[i][j] == "↖":
        # If the choice is to include the current item, move to the previous item and reduce the capacity
        print_knapsack_solution(choices, weights, i - weights[j-1], j-1)
        # Print the index of the current item
        print("item#", j)    


# Test the function
knapsack_capacity = 10
item_weights = [2, 3, 4, 5]
item_values = [3, 4, 5, 6]
num_of_items = len(item_weights)

maximum_value = knapsack(knapsack_capacity, item_weights, item_values, num_of_items)
print("Maximum value:", maximum_value)


def knapsack_top_down(capacity, weights, values, num_items):
    dp_table = [[-1] * (num_items + 1) for _ in range(capacity + 1)]
    choices = [[""] * (num_items + 1) for _ in range(capacity + 1)]
    
    def knapsack_recursive(cap, n):
        if dp_table[cap][n] != -1:
            return dp_table[cap][n]
        
        if cap == 0 or n == 0:
            return 0
        
        if weights[n-1] > cap:
            dp_table[cap][n] = knapsack_recursive(cap, n-1)
            choices[cap][n] = "←"
        else:
            include = values[n-1] + knapsack_recursive(cap - weights[n-1], n-1)
            exclude = knapsack_recursive(cap, n-1)
            
            if include > exclude:
                dp_table[cap][n] = include
                choices[cap][n] = "↖"
            else:
                dp_table[cap][n] = exclude
                choices[cap][n] = "←"
        
        return dp_table[cap][n]
    
    max_value = knapsack_recursive(capacity, num_items)
    print_knapsack_solution(choices, weights, capacity, num_items)
    return max_value


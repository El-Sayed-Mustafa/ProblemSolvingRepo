def rod_cutting(length, prices):
    # Initialize the revenue table and split table
    revenue = [0] * (length + 1)
    split = [-1] * (length + 1)
    
    for i in range(1, length + 1):
        maximum_revenue = float('-inf')
        
        for j in range(1, i + 1):
            if prices[j] + revenue[i - j] > maximum_revenue:
                maximum_revenue = prices[j] + revenue[i - j]
                split[i] = j
        
        revenue[i] = maximum_revenue
    
    # Extract the solution
    solution = []
    remaining_length = length
    while remaining_length > 0:
        piece = split[remaining_length]
        solution.append(piece)
        remaining_length -= piece
    
    return solution


# Test the function
rod_length = 8
rod_prices = [0, 1, 5, 8, 9, 10, 17, 17, 20]

optimal_split = rod_cutting(rod_length, rod_prices)
print("Optimal split:", optimal_split)

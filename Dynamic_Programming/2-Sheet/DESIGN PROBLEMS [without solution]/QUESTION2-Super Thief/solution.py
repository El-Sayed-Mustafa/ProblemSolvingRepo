def max_stolen_value_with_houses(houses):
    n = len(houses)
    if n == 0:
        return 0, []

    dp = [0] * n
    dp[0] = houses[0]
    dp[1] = max(houses[0], houses[1])

    chosen_houses = [[] for _ in range(n)]
    chosen_houses[0] = [0]  # Initialize the first house as the chosen house
    chosen_houses[1] = [0] if houses[0] > houses[1] else [1]  # Choose the house with maximum value from the first two houses

    for i in range(2, n):
        if houses[i] + dp[i-2] > dp[i-1]:
            dp[i] = houses[i] + dp[i-2]  # Rob the current house and add its value to the maximum stolen value from two houses back
            chosen_houses[i] = chosen_houses[i-2] + [i]  # Update the chosen houses by including the current house
        else:
            dp[i] = dp[i-1]  # Skip the current house and take the maximum stolen value from the previous house
            chosen_houses[i] = chosen_houses[i-1]  # Update the chosen houses by excluding the current house

    return dp[n-1], chosen_houses[n-1]  # Return the maximum stolen value and the corresponding chosen houses

# Example usage
houses = [2, 7, 9, 3, 1]
max_value, chosen_houses = max_stolen_value_with_houses(houses)
print(max_value)            # Output: 12
print(chosen_houses)        # Output: [0, 2, 4]

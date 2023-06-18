def knapsack_top_down(W, weights, values, N):
    # Create a 2D DP table and choice table
    dp = [[-1] * (N + 1) for _ in range(W + 1)]
    choice = [[""] * (N + 1) for _ in range(W + 1)]

    # Base case: If either the capacity or the number of items is 0, return 0
    if W == 0 or N == 0:
        return 0, choice

    # If the subproblem is already solved, return the stored value
    if dp[W][N] != -1:
        return dp[W][N], choice

    # If the weight of the Nth item is greater than the remaining capacity, skip it
    if weights[N - 1] > W:
        dp[W][N], choice[W][N] = knapsack_top_down(W, weights, values, N - 1)
        choice[W][N] = "UP"
    else:
        # Choose the maximum value between including or excluding the Nth item
        included, _ = knapsack_top_down(W - weights[N - 1], weights, values, N - 1)
        included += values[N - 1]
        excluded, _ = knapsack_top_down(W, weights, values, N - 1)

        if included > excluded:
            dp[W][N] = included
            choice[W][N] = "DIAGONAL"
        else:
            dp[W][N] = excluded
            choice[W][N] = "UP"

    return dp[W][N], choice


def construct_solution(choice, weights, W, N):
    # Create an empty list to store the selected items
    selected_items = []

    # Traverse the choice table to construct the solution
    while N > 0 and W > 0:
        if choice[W][N] == "DIAGONAL":
            # Add the item to the selected items list
            selected_items.append(N)

            # Update the remaining capacity and move to the previous item
            W -= weights[N - 1]
            N -= 1
        else:
            # Move to the previous item
            N -= 1

    # Reverse the selected items list to obtain the correct order
    selected_items.reverse()

    return selected_items


# Test the function
weights = [3, 4, 2, 5]
values = [5, 6, 3, 8]
W = 9
N = len(weights)

# Solve the knapsack problem
dp, choice = knapsack_top_down(W, weights, values, N)

# Construct the solution
selected_items = construct_solution(choice, weights, W, N)

# Print the maximum benefit and the selected items
print("Maximum Benefit:", dp)
print("Selected Items:", selected_items)

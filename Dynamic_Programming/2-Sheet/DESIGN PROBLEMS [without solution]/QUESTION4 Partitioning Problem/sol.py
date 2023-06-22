def can_partition(arr):
    # Calculate the total sum of the array
    total_sum = sum(arr)
    
    # If the total sum is not divisible by 2, it cannot be partitioned into two subsets with equal sums
    if total_sum % 2 != 0:
        return False
    
    # Calculate the target sum for each subset
    target_sum = total_sum // 2
    
    # Get the length of the array
    n = len(arr)
    
    # Create a memoization table to store the subproblem results
    # memo[i][j] will be True if there is a subset with sum j using elements up to index i
    memo = [[False] * (target_sum + 1) for _ in range(n + 1)]

    # Base case: If the target sum is 0, there is always an empty subset that gives a sum of 0
    for i in range(n + 1):
        memo[i][0] = True
    
    # Fill the memoization table using bottom-up dynamic programming
    for i in range(1, n + 1):
        for j in range(1, target_sum + 1):
            if arr[i - 1] <= j:
                # If the current element can be included, check if there is a subset with the remaining sum
                memo[i][j] = memo[i - 1][j - arr[i - 1]] or memo[i - 1][j]
            else:
                # If the current element is too large, exclude it and check if there is a subset with the same sum
                memo[i][j] = memo[i - 1][j]
    
    # Return the result of the last cell in the memoization table
    return memo[n][target_sum]


# Example usage
arr = [1, 5, 11, 5]
print(can_partition(arr))  # Output: True

arr = [1, 2, 3, 5]
print(can_partition(arr))  # Output: False

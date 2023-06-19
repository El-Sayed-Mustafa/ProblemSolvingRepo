def is_subset_sum_possible(arr, n, target, memo):
    # Base cases
    if target == 0 and n !=0:
        return True
    if n == 0:
        return False

    # Check if the subproblem has already been solved
    if memo[n][target] is not None:
        return memo[n][target]

    # Recursive calls
    if arr[n - 1] <= target:
        # Either include the current element or exclude it
        memo[n][target] = is_subset_sum_possible(arr, n - 1, target - arr[n - 1], memo) or \
                          is_subset_sum_possible(arr, n - 1, target, memo)
    else:
        # Exclude the current element
        memo[n][target] = is_subset_sum_possible(arr, n - 1, target, memo)

    return memo[n][target]


def subset_sum_topdown(arr, target):
    n = len(arr)
    memo = [[None] * (target + 1) for _ in range(n + 1)]
    return is_subset_sum_possible(arr, n, target, memo)


# Example usage
arr = [-7, -3, 2, 5, 8]
target_sum = 0
print(subset_sum_topdown(arr, target_sum))  # Output: False

def coin_change(coins, target):
    # Create a memoization table
    memo = {}

    def dp(target):
        # If the target is in the memo, return the stored result
        if target in memo:
            return memo[target]

        # Base case: target 0 requires 0 coins
        if target == 0:
            return []

        # Initialize the minimum number of coins with infinity
        min_coins = float('inf')
        selected_coins = []

        # Iterate through all available coin values
        for coin in coins:
            if target >= coin:
                # Recursive call to find the minimum number of coins
                coins_remaining = dp(target - coin)
                if len(coins_remaining) + 1 < min_coins:
                    min_coins = len(coins_remaining) + 1
                    selected_coins = [coin] + coins_remaining

        # Store the result in the memoization table
        memo[target] = selected_coins

        # Return the selected coins for the target
        return selected_coins

    # Call the recursive function to solve the problem
    selected_coins = dp(target)

    # Return the minimum number of coins needed for the target and the selected coins
    return len(selected_coins), selected_coins

# Test the function
coin_values = [1, 2, 5, 10, 20]
target_value = 27

min_num_coins, selected_coins = coin_change(coin_values, target_value)
print("Minimum number of coins needed:", min_num_coins)
print("Selected coins:", selected_coins)

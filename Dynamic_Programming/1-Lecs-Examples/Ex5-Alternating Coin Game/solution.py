def max_coin_winnings(coins):
    N = len(coins)
    memo = [[-1] * N for _ in range(N)]  # Memoization table to store calculated results
    
    def play_game(left, right):
        # Base case: No coins remaining
        if left > right:
            return 0
        
        # Check if result has already been calculated
        if memo[left][right] != -1:
            return memo[left][right]
        
        # Try both options: choose left coin or choose right coin
        score_choose_left = coins[left] + min(play_game(left+2, right), play_game(left+1, right-1))
        score_choose_right = coins[right] + min(play_game(left+1, right-1), play_game(left, right-2))
        
        # Store the maximum score in the memoization table
        memo[left][right] = max(score_choose_left, score_choose_right)
        
        return memo[left][right]
    
    # Start the game with the full range of coins
    return play_game(0, N-1)

# Test the function
coins = [4, 42, 39, 1000, 25, 6]
max_winnings = max_coin_winnings(coins)
print("Maximum winnings:", max_winnings)

def tribonacci(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    for i in range(3, n+1):
        dp[i] = dp[i-1]+dp[i-2]+dp[i-3]
    return dp[n]


print(tribonacci(25))

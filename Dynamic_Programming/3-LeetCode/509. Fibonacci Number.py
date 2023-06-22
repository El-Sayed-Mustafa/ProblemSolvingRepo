#https://leetcode.com/problems/fibonacci-number/submissions/976956228/?envType=study-plan-v2&envId=dynamic-programming
def fib(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1
    for i in range(2, n):
        dp[i] = dp[i-1]+dp[i-2]
    return dp[n-1]


print(fib(4))

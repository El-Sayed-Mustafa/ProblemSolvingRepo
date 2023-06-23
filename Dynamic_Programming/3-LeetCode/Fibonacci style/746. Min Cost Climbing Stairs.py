# https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan-v2&envId=dynamic-programming
from typing import List


def minCost(cost: List[int]) -> int:
    n = len(cost)
    dp = [0] * (n)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for i in range(2, n):
        dp[i] = min(dp[i-1], dp[i-2]) + cost[i]
    return min(dp[n-1], dp[n-2])


cost = [1,100,1,1,1,100,1,1,100,1]
print(minCost(cost))

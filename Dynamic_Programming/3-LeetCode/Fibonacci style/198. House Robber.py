# https://leetcode.com/problems/house-robber/?envType=study-plan-v2&envId=dynamic-programming
from typing import List

def rob(nums: List[int]) -> int:
    n = len(nums)
    if n == 0:
        return 0
    dp = [0] * n
    dp[0] = nums[0]
    if n > 1:
        dp[1] = max(nums[0], nums[1])
    for i in range(2, n):
        dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    return dp[n-1]

nums = [0]
print(rob(nums))

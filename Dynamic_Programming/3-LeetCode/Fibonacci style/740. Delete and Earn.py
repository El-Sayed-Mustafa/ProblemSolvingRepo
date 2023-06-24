# https://leetcode.com/problems/delete-and-earn/?envType=study-plan-v2&envId=dynamic-programming

def deleteAndEarn(nums):
    lookup = [0] * (max(nums) + 1)
    for num in nums:
        lookup[num] += 1

    n = len(lookup)

    dp = [0] * n
    dp[0] = lookup[0]
    dp[1] = max(lookup[0], lookup[1])

    for i in range(2, n):
        dp[i] = max(i*lookup[i]+dp[i-2], dp[i-1])
    return dp[-1]


nums = [2,2,3,3,3,4]
print(deleteAndEarn(nums))

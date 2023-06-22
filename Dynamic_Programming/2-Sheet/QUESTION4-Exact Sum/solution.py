def check(A, N, B):
    dp = [[False] * (B + 1) for _ in range(N + 1)]

    for i in range(N + 1):
        for j in range(B + 1):
            if A[i - 1] == j:
                dp[i][j] = True
            elif i == 0:
                dp[i][j] = False
            elif A[i - 1] < j:
                B1 = dp[i - 1][j - A[i - 1]]
                B2 = dp[i - 1][j]
                dp[i][j] = B1 or B2
            else:
                dp[i][j] = dp[i - 1][j]

    return dp[N][B]

A = [3, 4, 5, 2]
N = len(A)
B = 9

result = check(A, N, B)
print(result)  # Output: True

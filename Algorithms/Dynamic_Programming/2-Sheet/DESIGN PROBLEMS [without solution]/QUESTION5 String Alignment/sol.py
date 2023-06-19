def string_alignment(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Fill in base cases
    for i in range(1, m + 1):
        dp[i][0] = i
    for j in range(1, n + 1):
        dp[0][j] = j

    # Fill in the remaining cells
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(
                    dp[i - 1][j - 1] + 1,  # Replace
                    dp[i][j - 1] + 1,      # Repeat
                    dp[i - 1][j] + 1       # Skip
                )

    return dp[m][n]
def main():
    s1 = "kitten"
    s2 = "sitting"
    changes = string_alignment(s1, s2)
    print(f"Minimum number of changes required: {changes}")

    s1 = "intention"
    s2 = "execution"
    changes = string_alignment(s1, s2)
    print(f"Minimum number of changes required: {changes}")

    # Additional test cases
    s1 = "abc"
    s2 = "xyz"
    changes = string_alignment(s1, s2)
    print(f"Minimum number of changes required: {changes}")

    s1 = "abcd"
    s2 = "abcd"
    changes = string_alignment(s1, s2)
    print(f"Minimum number of changes required: {changes}")

    s1 = "abc"
    s2 = "ab"
    changes = string_alignment(s1, s2)
    print(f"Minimum number of changes required: {changes}")


if __name__ == "__main__":
    main()

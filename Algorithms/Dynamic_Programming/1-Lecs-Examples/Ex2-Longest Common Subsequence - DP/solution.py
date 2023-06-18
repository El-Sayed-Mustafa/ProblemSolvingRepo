def longest_common_subsequence(str1, str2):
    m = len(str1)
    n = len(str2)

    # Base case: If either string is empty, return an empty string
    if m == 0 or n == 0:
        return ""

    # Step 1: Create DP table and choice table
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    choice = [[''] * (n + 1) for _ in range(m + 1)]

    # Step 2: Build the DP table and choice table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                # Characters match, increment length and set choice to diagonal
                dp[i][j] = dp[i - 1][j - 1] + 1
                choice[i][j] = 'diagonal'
            else:
                # Characters don't match, choose the maximum length direction
                if dp[i - 1][j] >= dp[i][j - 1]:
                    dp[i][j] = dp[i - 1][j]
                    choice[i][j] = 'up'
                else:
                    dp[i][j] = dp[i][j - 1]
                    choice[i][j] = 'left'

    # Step 3: Extract the LCS using the choice table
    lcs = ''
    i = m
    j = n

    while i > 0 and j > 0:
        if choice[i][j] == 'diagonal':
            # Selected choice is diagonal, add character to LCS and move diagonally up-left
            lcs = str1[i - 1] + lcs
            i -= 1
            j -= 1
        elif choice[i][j] == 'up':
            # Selected choice is up, move up
            i -= 1
        else:
            # Selected choice is left, move left
            j -= 1

    # Step 4: Return the LCS
    return lcs

# Test the function
str1 = 'ABCD'
str2 = 'BDCAD'
print(longest_common_subsequence(str1, str2))  # Output: HELLO

function countWaysToTop(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
}

// Example usage
console.log(countWaysToTop(4)); // Output: 7

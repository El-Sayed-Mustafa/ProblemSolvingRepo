/*
*Solution Steps:

!1. Define the problem:
    ?The problem is to compute the number of different ways to reach the top (level n) of the stairs, 
    ?starting from level 0, where at each step, you can go up 1 stair, 2 stairs, or 3 stairs.

!2. Dynamic Programming Solution:
    ?1. Define the value of an optimal solution using a recursive approach.
    ?2. Guess the possibilities (trials) for the current problem.
    ?3. Formulate subproblems by breaking down the problem into smaller subproblems.
    ?4. Define the base case(s) for the subproblems.
    ?5. Relate the subproblems in a recursive way to solve the original problem.

!3. Check for overlapping subproblems: 
    ?Analyze whether the subproblems are being solved repeatedly by drawing a recursive tree or using memoization.
!4. Switch from Divide and Conquer to Dynamic Programming:
    ?1. Define extra storage, such as an array or a dictionary, to store the computed values.
        - In this case, we create an array **`dp`** of size (n + 1) to store the number of ways to reach each level of the stairs.
    ?2. Define the equation to fill in the table (**`dp`** array).
        - The equation is **`dp[i] = dp[i-1] + dp[i-2] + dp[i-3]`** which means the number of ways to reach the current level **`i`** is the sum of the number of ways to reach the previous three levels.
    ?3. Solve the problem iteratively using a bottom-up approach:
        - Set the base cases: **`dp[0] = 1`**, **`dp[1] = 1`**, and **`dp[2] = 2`**.
        - Iterate from level 3 to n, filling in the **`dp`** array using the defined equation.
    ?4. Return the solution to the main problem, which is **`dp[n]`** (the number of ways to reach level n).
!5. Extract the Solution (optional):
    ?1. If you want to extract the actual solution, you can save information about the selected choice for each subproblem.
        - In this case, it's not required as we only need the count of different ways, not the actual paths.
    ?2. Use the saved information to construct the solution, if needed.
        - Backtrack the solution using the saved information starting from the solution of the main problem.

*/

function countWays(n) {

    //*Stooping Condition
    if (n <= 1) {
        return 1
    }

    // Step 4: Switch D&C to DP - Build Table
    // Step 4.1: Define extra storage
    dp = new Array(n + 1)

    // Step 4.2: Equation to fill in the table
    //? Base cases
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    // Step 4.3: Solve iteratively (bottom-up)
    for (let i = 0; i < n.length; i++) {
        dp = n[i - 1] + n[i - 2] + n[i - 3];
    }

    return dp[n]
}
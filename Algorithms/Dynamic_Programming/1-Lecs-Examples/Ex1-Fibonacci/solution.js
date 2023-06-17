// Step 1: Define the problem and solution structure
// Params: n - the index of the Fibonacci number to calculate
// Return: The Fibonacci number at index n
function fibonacci(n) {
    // Step 2: Create an array to store the calculated Fibonacci numbers
    let memo = [];

    // Step 3: Solve recursively (top-down)
    return fibHelper(n);

    // Helper function to calculate Fibonacci number recursively
    function fibHelper(n) {
        // Step 4: Check if the Fibonacci number is already calculated
        if (memo[n] !== undefined) {
            return memo[n]; // Retrieve the previously calculated value
        }

        // Base cases
        if (n <= 1) {
            return 1;
        }

        // Step 4: Calculate and memoize the Fibonacci number
        memo[n] = fibHelper(n - 1) + fibHelper(n - 2);
        return memo[n];
    }
}

// Test the function
console.log(fibonacci(0)); // Output: 1
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(6)); // Output: 13
console.log(fibonacci(10)); // Output: 89

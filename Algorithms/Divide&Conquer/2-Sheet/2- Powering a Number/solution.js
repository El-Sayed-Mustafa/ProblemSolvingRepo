function powerWithoutPowerFunction(A, N) {
    // Base case: If N is 0, return 1 (any number raised to the power 0 is 1)
    if (N === 0) {
        return 1;
    }

    // Recursive case:
    // Divide the problem into two subproblems with N/2 each
    let halfPower = powerWithoutPowerFunction(A, Math.floor(N / 2));

    // Multiply the result of the subproblem with itself
    let result = halfPower * halfPower;

    // If N is odd, multiply the result with A
    if (N % 2 === 1) {
        result *= A;
    }

    // Return the computed result
    return result;
}

// Example usage:
let A = 2; // Base number
let N = 5; // Power

let result = powerWithoutPowerFunction(A, N);
console.log(result); // Output: 32

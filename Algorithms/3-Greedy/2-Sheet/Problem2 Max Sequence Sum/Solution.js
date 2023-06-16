function maxSequenceSum(arr) {
    let maxSoFar = 0; // Maximum sum found so far
    let curSum = 0; // Current sum of the sub-array

    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i]; // Add the current element to the current sum
        if (curSum < 0)
            curSum = 0; // Reset the current sum to 0 if it becomes negative
        maxSoFar = Math.max(maxSoFar, curSum); // Update the maximum sum if necessary
    }

    return maxSoFar; // Return the maximum sum found
}

// Example usage:
const inputArray = [31, -41, 59, 26, -53, 58, 97, -93, -23, 84];
const maxSum = maxSequenceSum(inputArray);
console.log('Maximum sum:', maxSum);

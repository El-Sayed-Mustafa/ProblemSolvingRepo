function highestIncreasePair(arr) {
    // Initialize current element to the first element of the array
    let current = arr[0];
    // Initialize max difference to negative infinity
    let max = -Infinity; 

    for (let i = 1; i < arr.length; i++) {
        // Calculate the difference between the current element and the current
        let diff = arr[i] - current; 

        if (arr[i] < current) {
            // Update the current element if a smaller element is found
            current = arr[i]; 
            continue;
        }

        if (diff > max) {
            // Update the max difference if a larger difference is found
            max = diff; 
        }
    }

    return max; // Return the maximum difference
}

// Example usage:
const inputArray = [1, 4, 7, 2, 9, 3];
const highestIncrease = highestIncreasePair(inputArray);
console.log('Highest increase:', highestIncrease);

function highestIncreasePair(arr) {
    let current = arr[0]; // Initialize current element to the first element of the array
    let max = -Infinity; // Initialize max difference to negative infinity

    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - current; // Calculate the difference between the current element and the current

        if (arr[i] < current) {
            current = arr[i]; // Update the current element if a smaller element is found
            continue;
        }

        if (diff > max) {
            max = diff; // Update the max difference if a larger difference is found
        }
    }

    return max; // Return the maximum difference
}

// Example usage:
const inputArray = [1, 4, 7, 2, 9, 3];
const highestIncrease = highestIncreasePair(inputArray);
console.log('Highest increase:', highestIncrease);

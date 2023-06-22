function findLargestPosition(arr, start, end) {
    if (start === end) {
        return start;
    }
    
    const mid = Math.floor((start + end) / 2);
    
    // Divide
    const leftPos = findLargestPosition(arr, start, mid);
    const rightPos = findLargestPosition(arr, mid + 1, end);
    
    // Combine (Conquer implicitly combined)
    if (arr[leftPos] > arr[rightPos]) {
        return leftPos;
    } else {
        return rightPos;
    }
}

// Example usage:
const array = [3, 8, 2, 6, 1, 9, 4, 7];
const largestPosition = findLargestPosition(array, 0, array.length - 1);
const largestElement = array[largestPosition];

console.log("Largest Position:", largestPosition);
console.log("Largest Element:", largestElement);

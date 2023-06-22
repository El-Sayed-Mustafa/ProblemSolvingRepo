function findMaxDifference(arr, start, end) {
    // Base case: Only one element in the subarray
    if (start === end) {
        const maxVal = arr[start];
        const minVal = arr[start];
        const diff = 0;
        return [maxVal, minVal, diff];
    } else {
        // Divide the subarray into two halves
        const mid = Math.floor((start + end) / 2);

        // Recursive calls on the left and right subarrays
        const [maxLeft, minLeft, diffLeft] = findMaxDifference(arr, start, mid);    // Left subarray
        const [maxRight, minRight, diffRight] = findMaxDifference(arr, mid + 1, end);    // Right subarray

        // Calculate the maximum difference between the left and right subarrays
        const diffMid = maxRight - minLeft;

        // Find the maximum difference across all subarrays
        const maxDiff = Math.max(diffLeft, diffRight, diffMid);
        const maxVal = Math.max(maxLeft, maxRight);
        const minVal = Math.min(minLeft, minRight);

        return [maxVal, minVal, maxDiff];
    }
}

// Example usage:
const arr = [3, 8, 2, 6, 1, 9, 4, 7];
const [maxValue, minValue, maxDifference] = findMaxDifference(arr, 0, arr.length - 1);
console.log("Max Difference:", maxDifference);
console.log("Maximum Value:", maxValue);
console.log("Minimum Value:", minValue);

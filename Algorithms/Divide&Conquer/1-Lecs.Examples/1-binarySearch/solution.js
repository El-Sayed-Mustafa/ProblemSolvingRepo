function binarySearchRecursive(array, target, low, high) {
    // Base case: when the search space is empty
    if (low > high) {
        return -1; // Target element not found
    }

    // Step 1: Divide - check the middle element
    var mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
        return mid; // Target element found at index mid
    }

    // Step 2: Conquer - recursively search in one half
    if (array[mid] > target) {
        // If the middle element is greater than the target, search in the left half
        return binarySearchRecursive(array, target, low, mid - 1);
    } else {
        // If the middle element is less than the target, search in the right half
        return binarySearchRecursive(array, target, mid + 1, high);
    }
}

// Example usage
var arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
var target = 23;

var index = binarySearchRecursive(arr, target, 0, arr.length - 1);
console.log('Array:', arr);
console.log('Target:', target);
console.log('Index:', index);

function findMaximumElement(arr) {
    const n = arr.length;

    // Base case: If the array has only one element, it is the maximum
    if (n === 1) {
        return arr[0];
    }

    // Base case: If the array has two elements, return the maximum of the two
    if (n === 2) {
        return Math.max(arr[0], arr[1]);
    }

    // Calculate the middle index
    const mid = Math.floor(n / 2);

    // Check if the middle element is greater than its neighbors
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return arr[mid]; // Found the maximum element
    }

    // If the middle element is smaller than the previous element,
    // the maximum element lies in the left half of the array
    if (arr[mid] < arr[mid - 1]) {
        return findMaximumElement(arr.slice(0, mid));
    }

    // If the middle element is smaller than the next element,
    // the maximum element lies in the right half of the array
    if (arr[mid] < arr[mid + 1]) {
        return findMaximumElement(arr.slice(mid + 1));
    }
}

// Example usage:
const array = [3, 5, 8, 10, 7, 2, 1];
const maximumElement = findMaximumElement(array);
console.log("Maximum element:", maximumElement);

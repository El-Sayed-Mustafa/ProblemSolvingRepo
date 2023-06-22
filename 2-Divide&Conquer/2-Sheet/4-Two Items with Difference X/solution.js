// Function to perform merge sort on the array
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Helper function to merge two sorted arrays
function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

// Function to perform binary search on the array
function binarySearch(arr, low, high, R) {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === R) {
        return mid;
    } else if (arr[mid] > R) {
        return binarySearch(arr, low, mid - 1, R);
    } else {
        return binarySearch(arr, mid + 1, high, R);
    }
}

// Main function to check if there are two items with difference X
function twoItemsWithDifference(arr, X) {
    // Sort the array using merge sort
    const sortedArr = mergeSort(arr);

    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        const diff = sortedArr[right] - sortedArr[left];

        if (diff === X) {
            return true; // Two items found with difference X
        } else if (diff < X) {
            left++;
        } else {
            right--;
        }
    }

    return false; // No two items found with difference X
}

// Example usage:
const arr1 = [-7, -2, 5, -3, 8];
const X1 = 4;
console.log(twoItemsWithDifference(arr1, X1)); // Output: true

const arr2 = [-10, 4, -5, 9, 8];
const X2 = 2;
console.log(twoItemsWithDifference(arr2, X2)); // Output: false

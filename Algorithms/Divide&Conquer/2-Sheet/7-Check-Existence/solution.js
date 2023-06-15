function checkExistence(A, low, high) {
    if (low > high) {
        return false;
    }

    const mid = Math.floor((low + high) / 2);

    if (A[mid] === mid) {
        return true;
    } else if (A[mid] > mid) {
        return checkExistence(A, low, mid - 1);
    } else {
        return checkExistence(A, mid + 1, high);
    }
}

// Example usage:
const arr1 = [-2, 0, 3, 4, 6];
console.log(checkExistence(arr1, 0, arr1.length - 1)); // false

const arr2 = [-1, 0, 2, 4, 5];
console.log(checkExistence(arr2, 0, arr2.length - 1)); // true

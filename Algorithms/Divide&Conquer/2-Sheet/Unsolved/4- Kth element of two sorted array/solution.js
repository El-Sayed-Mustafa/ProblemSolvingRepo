function findKthElement(A, B, k) {
    let i = 0; // Pointer for array A
    let j = 0; // Pointer for array B
    let count = 0; // Counter for the kth element

    while (i < A.length && j < B.length) {
        // Compare elements from both arrays
        if (A[i] < B[j]) {
            count++;
            if (count === k) {
                return A[i];
            }
            i++;
        } else {
            count++;
            if (count === k) {
                return B[j];
            }
            j++;
        }
    }
    return -1; // Invalid case (should not reach here)
}

// Example usage:
const testCases = 1;
const N = 5;
const M = 4;
const K = 5;
const A = [2, 3, 6, 7, 9];
const B = [1, 4, 8, 10];

const kthElement = findKthElement(A, B, K);
console.log("Output:", kthElement);

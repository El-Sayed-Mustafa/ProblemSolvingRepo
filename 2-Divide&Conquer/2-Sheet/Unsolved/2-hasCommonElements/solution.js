function hasCommonElements(A, B) {
    // Sort arrays A and B
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    // Initialize pointers
    let pointerA = 0;
    let pointerB = 0;

    // Compare elements
    while (pointerA < A.length && pointerB < B.length) {
        if (A[pointerA] === B[pointerB]) {
            return true;
        } else if (A[pointerA] < B[pointerB]) {
            pointerA++;
        } else {
            pointerB++;
        }
    }

    // No common element found
    return false;
}

// Example usage:
const A = [3, 8, 2, 6, 1, 9, 4, 7];
const B = [5, 2, 9, 10, 6];
const result = hasCommonElements(A, B);
console.log("Do A and B have common elements?", result);

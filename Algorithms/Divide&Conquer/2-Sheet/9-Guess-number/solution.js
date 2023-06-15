function findNumber(low, high) {
    // Base case: If the lower bound is equal to the upper bound, we have found the number
    if (low === high) {
        return low;
    }

    // Find the middle value of the current range
    const mid = Math.floor((low + high) / 2);

    // Check if the number is less than the middle value
    if (isNumberLessThan(mid)) {
        // If it is, recursively search in the lower half of the range
        return findNumber(low, mid - 1);
    } else {
        // If it's not, recursively search in the upper half of the range
        return findNumber(mid, high);
    }
}

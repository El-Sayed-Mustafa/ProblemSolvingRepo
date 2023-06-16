function findMajorityElement(arr) {
    // Base case: If the array has only one element, it is the majority element
    if (arr.length === 1) {
        return arr[0];
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    // Recursively find the majority element in each half
    const leftMajority = findMajorityElement(leftArr);
    const rightMajority = findMajorityElement(rightArr);

    // If both halves have the same majority element, it is the overall majority element
    if (leftMajority === rightMajority) {
        return leftMajority;
    }

    // Count the occurrences of the left and right majority elements in the original array
    const leftCount = countOccurrences(arr, leftMajority);
    const rightCount = countOccurrences(arr, rightMajority);

    // Return the majority element with the higher count
    if (leftCount > arr.length / 2) {
        return leftMajority;
    } else if (rightCount > arr.length / 2) {
        return rightMajority;
    } else {
        return null; // No majority element exists
    }
}

function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

// Example usage:
const arr = [2, 2, 3, 2, 4, 2, 2];
const majorityElement = findMajorityElement(arr);
console.log("Majority Element:", majorityElement);

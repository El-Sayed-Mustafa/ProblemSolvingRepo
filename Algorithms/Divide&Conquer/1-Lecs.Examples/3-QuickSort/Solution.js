function quickSortHelper(arr, first, last) {
    if (first < last) {
        // Step 1: Choose a pivot and partition the array
        var splitpoint = partition(arr, first, last);

        // Step 2: Recursively sort the subarrays
        quickSortHelper(arr, first, splitpoint - 1);
        quickSortHelper(arr, splitpoint + 1, last);
    }
}

function partition(arr, first, last) {
    // Step 1: Choose the first element as the pivot
    var pivotValue = arr[first];
    var leftMark = first + 1;
    var rightMark = last;

    while (leftMark <= rightMark) {
        // Step 2: Move leftMark towards the right until an element greater than the pivot is found
        while (arr[leftMark] <= pivotValue && leftMark <= rightMark) {
            leftMark++;
        }

        // Step 2: Move rightMark towards the left until an element less than the pivot is found
        while (arr[rightMark] >= pivotValue && rightMark >= leftMark) {
            rightMark--;
        }

        if (rightMark < leftMark) {
            // Step 2: Exit the loop if the leftMark and rightMark have crossed each other
            break;
        }

        // Step 3: Swap the elements at leftMark and rightMark
        [arr[leftMark], arr[rightMark]] = [arr[rightMark], arr[leftMark]];
    }

    // Step 4: Move the pivot to its final sorted position
    [arr[first], arr[rightMark]] = [arr[rightMark], arr[first]];

    // Step 5: Return the split point
    return rightMark;
}

// Example usage
var arr = [6, 5, 3, 8, 1, 9, 4, 2, 7];
console.log('Original Array:', arr);

quickSortHelper(arr, 0, arr.length - 1);
console.log('Sorted Array:', arr);

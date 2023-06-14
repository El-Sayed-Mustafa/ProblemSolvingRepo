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
    var done = false;

    while (!done) {
        // Step 2: Move leftMark and rightMark towards each other until they cross
        while (leftMark <= rightMark && arr[leftMark] <= pivotValue) {
            leftMark++;
        }
        while (arr[rightMark] >= pivotValue && rightMark >= leftMark) {
            rightMark--;
        }

        if (rightMark < leftMark) {
            done = true;
        } else {
            // Step 3: Swap the elements at leftMark and rightMark
            var temp = arr[leftMark];
            arr[leftMark] = arr[rightMark];
            arr[rightMark] = temp;
        }
    }

    // Step 4: Move the pivot to its final sorted position
    var temp = arr[first];
    arr[first] = arr[rightMark];
    arr[rightMark] = temp;

    // Step 5: Return the split point
    return rightMark;
}

// Example usage
var arr = [6, 5, 3, 8, 1, 9, 4, 2, 7];
console.log('Original Array:', arr);

quickSortHelper(arr, 0, arr.length - 1);
console.log('Sorted Array:', arr);

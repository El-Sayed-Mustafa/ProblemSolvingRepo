function mergeSort(arr, start, end) {
    // Base case: when the subarray contains only one element, it is considered sorted
    if (start < end) {
        // Step 1: Divide - Find the midpoint to split the array into two halves
        var mid = Math.floor((start + end) / 2);

        // Step 2: Conquer - Recursively sort the left and right halves
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);

        // Step 3: Combine - Merge the sorted subarrays
        merge(arr, start, mid, end);
    }
}

function merge(arr, start, mid, end) {
    // Step 1: Compute the lengths of the two subarrays
    var n1 = mid - start + 1;
    var n2 = end - mid;

    // Step 2: Create temporary arrays to hold the values of the two subarrays
    var leftArr = new Array(n1);
    var rightArr = new Array(n2);

    // Step 3: Copy elements from the original array to the temporary arrays
    for (var i = 0; i < n1; i++) {
        leftArr[i] = arr[start + i];
    }
    for (var j = 0; j < n2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }

    // Step 4: Add sentinel values to the end of each temporary array
    leftArr.push(Number.POSITIVE_INFINITY);
    rightArr.push(Number.POSITIVE_INFINITY);

    // Step 5: Merge the two sorted subarrays back into the original array
    var i = 0;
    var j = 0;
    for (var k = start; k <= end; k++) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
    }
}

// Example usage
var arr = [6, 5, 3, 8, 1, 9, 4, 2, 7];
console.log('Original Array:', arr);

mergeSort(arr, 0, arr.length - 1);
console.log('Sorted Array:', arr);

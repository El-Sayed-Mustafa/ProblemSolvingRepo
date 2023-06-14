function randomizedSelect(arr, left, right, k) {
    if (left === right) {
        // Step 1: Base case - If the array has only one element, return it
        return arr[left];
    }

    // Step 3: Randomized Partition the array and get the pivot index
    var pivotIndex = randomizedPartition(arr, left, right);
    
    //calculates the number of elements (counted from left) 
    //that are smaller than or equal to the pivot element
    var j = pivotIndex - left + 1;

    if (k === j) {
        // Step 5: If the pivot value is the Kth smallest number, return it
        return arr[pivotIndex];
    } else if (k < j) {
        // Step 7: If K is less than J, recursively select from the left subarray
        return randomizedSelect(arr, left, pivotIndex - 1, k);
    } else {
        // Step 9: If K is greater than J, recursively select from the right subarray
        return randomizedSelect(arr, pivotIndex + 1, right, k - j);
    }
}

function randomizedPartition(arr, left, right) {
    // Step 1: Randomly choose a pivot index
    var pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    // Step 2: Swap the pivot element with the first element
    [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];

    var pivotValue = arr[left];
    var leftMark = left + 1;
    var rightMark = right;
    var done = false;

    while (!done) {
        // Step 2: Move leftMark towards the right until an element greater than the pivot is found
        while (leftMark <= rightMark && arr[leftMark] <= pivotValue) {
            leftMark++;
        }
        // Step 2: Move rightMark towards the left until an element less than the pivot is found
        while (arr[rightMark] >= pivotValue && rightMark >= leftMark) {
            rightMark--;
        }

        if (rightMark < leftMark) {
            // Step 2: Exit the loop if the leftMark and rightMark have crossed each other
            done = true;
        } else {
            // Step 3: Swap the elements at leftMark and rightMark
            [arr[leftMark], arr[rightMark]] = [arr[rightMark], arr[leftMark]];
        }
    }

    // Step 4: Move the pivot to its final sorted position
    [arr[left], arr[rightMark]] = [arr[rightMark], arr[left]];

    // Step 5: Return the pivot index
    return rightMark;
}

// Example usage
var arr = [6, 5, 3, 8, 1, 9, 4, 2, 7];
var k = 5;

var kthSmallest = randomizedSelect(arr, 0, arr.length - 1, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);

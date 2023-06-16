/*
! Steps: 

?Sorting the Array Approach:
Sort the array in ascending order.
Once the array is sorted, the Kth smallest element will be at index K-1, and the Kth largest element will be at index array.length - K.
Return the value at the respective index.
*/

function findKthSmallestSorting(array, k) {
    array.sort((a, b) => a - b);
    return array[k - 1];
}

// Example usage
var array = [7, 2, 1, 5, 3];
var k = 3;

var kthSmallest = findKthSmallestSorting(array, k);
console.log('Kth Smallest:', kthSmallest);

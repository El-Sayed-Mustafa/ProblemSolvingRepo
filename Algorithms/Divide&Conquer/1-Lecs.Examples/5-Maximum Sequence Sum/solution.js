/* 
Pseudo-code
maxsub(int[] S; low, high: int) return (lowIndex, highIndex, sum)
    if low = high then
        return (low, high, S(low))
    else
        mid = (low + high) / 2
        (llow, lhigh, lsum) = maxsub(S, low, mid)
        (rlow, rhigh, rsum) = maxsub(S, mid+1, high)
        (mlow, mhigh, msum) = middlemaxsub(S, low, mid, high)
    end if;

    return triple with highest sum

end maxsub

middlemaxsub(int[] S; low, high, int) return (lowIndex, highIndex, sum)
    start at mid and find bestleft and leftsum
    start at mid and find bestright and rightsum
    
    return (bestleft, bestright, rightsum+leftsum)
end middlemaxsub

*/


function findMaxSubArray(array, start, end) {
    if (start === end) {
        // Base case: if the array contains only one element
        return [start, end, array[start]];
    } else {
        var mid = Math.floor((start + end) / 2);

        // Divide: Recursively find the maximum subarray sum in the left and right halves
        var [leftLow, leftHigh, leftSum] = findMaxSubArray(array, start, mid);
        var [rightLow, rightHigh, rightSum] = findMaxSubArray(array, mid + 1, end);

        // Combine: Find the maximum subarray sum that crosses the midpoint
        var [crossLow, crossHigh, crossSum] = findCrossMaxSubArray(array, start, mid, end);

        // Compare the sums of the left, right, and middle subarrays to find the maximum
        if (leftSum >= rightSum && leftSum >= crossSum) {
            return [leftLow, leftHigh, leftSum];
        } else if (rightSum >= leftSum && rightSum >= crossSum) {
            return [rightLow, rightHigh, rightSum];
        } else {
            return [crossLow, crossHigh, crossSum];
        }
    }
}

function findCrossMaxSubArray(array, start, mid, end) {
    var leftSum = Number.NEGATIVE_INFINITY;
    var sum = 0;
    var crossLow, crossHigh;

    // Calculate the maximum sum of the left part of the subarray
    for (var i = mid; i >= start; i--) {
        sum += array[i];
        if (sum > leftSum) {
            leftSum = sum;
            crossLow = i;
        }
    }

    var rightSum = Number.NEGATIVE_INFINITY;
    sum = 0;

    // Calculate the maximum sum of the right part of the subarray
    for (var j = mid + 1; j <= end; j++) {
        sum += array[j];
        if (sum > rightSum) {
            rightSum = sum;
            crossHigh = j;
        }
    }

    return [crossLow, crossHigh, leftSum + rightSum];
}

// Test case
var arr = [2, -1, 4, -6, 7, -1];
var result = findMaxSubArray(arr, 0, arr.length - 1);

console.log('Maximum Sequence Sum:', result[2]);
console.log('Subarray:', arr.slice(result[0], result[1] + 1));

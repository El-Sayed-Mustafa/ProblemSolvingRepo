function isSumOdd(arr) {
    // Base case: If the array contains only one element
    if (arr.length === 1) {
        return arr[0] % 2 !== 0; // Return true if the number is odd, false if even
    }

    // Divide the array into two subarrays
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    // Conquer: Recursively check the two subarrays
    let isLeftSumOdd = isSumOdd(leftArr);
    let isRightSumOdd = isSumOdd(rightArr);

    // Combine the results
    if (isLeftSumOdd && isRightSumOdd) {
        return false; // Odd + Odd = Even
    } else if (!isLeftSumOdd && !isRightSumOdd) {
        return false; // Even + Even = Even
    } else {
        return true; // Even + Odd = Odd
    }
}

// Example usage:
let arr = [1, 30, 4, 300000000, 5, 8, 7, 4, 5];
let isOddSum = isSumOdd(arr);
console.log(isOddSum); // Output: false


/*
!Steps :

?Step1:
The findMaxSequenceSum function takes an array as input.

?Step2:
It initializes the maxSum variable with the first element of the array, assuming it to be the maximum sum initially.

?Step3:
It also initializes the currentSum variable with the first element since it represents the sum of the current sequence.

?Step4:
The start and end variables keep track of the indices of the current sequence with the maximum sum.

?Step5:
A tempStart variable is used to keep track of the start index when starting a new sequence is more beneficial.

?Step6:
The function then iterates through the array starting from the second element.

?Step7:
For each element, it compares whether extending the current sequence (by adding the element) or starting a new sequence (with the current element) would result in a higher sum.

?Step8:
If extending the current sequence is more beneficial, the currentSum is updated by adding the element to it.

?Step9:
If starting a new sequence is more beneficial, the tempStart is updated with the current index, and the currentSum is updated with the element.

?Step10:
After each iteration, the function checks if the currentSum is greater than the maxSum. If so, it updates the maxSum, start, and end with the new maximum sum and corresponding indices.

?Step11:
Once the iteration is complete, the function extracts the sequence with the maximum sum from the original array using the slice method.

?Step12:
Finally, the function returns an object containing the maxSum and the sequence.

*/

function findMaxSequenceSum(array) {
    var maxSum = array[0]; // Initialize maxSum with the first element
    var currentSum = array[0]; // Initialize currentSum with the first element
    var start = 0; // Start index of the current sequence
    var end = 0; // End index of the current sequence
    var tempStart = 0; // Temporary start index for updating the sequence

    for (var i = 1; i < array.length; i++) {
        // Check if extending the sequence or starting a new sequence is more beneficial
        if (array[i] > currentSum + array[i]) {
            tempStart = i; // Start a new sequence
            currentSum = array[i];
        } else {
            currentSum = currentSum + array[i]; // Extend the current sequence
        }

        // Update the maxSum and sequence indices if a higher sum is found
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    // Extract the sequence from the original array
    var sequence = array.slice(start, end + 1);

    return { maxSum: maxSum, sequence: sequence };
}

// Example usage
var array = [31, -41, 59, 26, -53, 58, 97, -93. - 23, 84];
var result = findMaxSequenceSum(array);
console.log('Maximum Sum:', result.maxSum);
console.log('Sequence:', result.sequence);

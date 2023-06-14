/* 
! Steps:

?Accept two large integers, X and Y, as input.

?Convert the input integers to arrays of digits in reverse order:
    Convert the input strings (X and Y) to arrays of individual digits.
    Reverse the order of the digits to facilitate digit-wise multiplication.

?Initialize the result array:
    Create an array called result with a length of (number of digits in X + number of digits in Y).
    Initialize all elements of the result array to 0.

?Perform digit-wise multiplication:
    Iterate through each digit of X.
    For each digit of X, iterate through each digit of Y.
    Multiply the corresponding digits 
    and add the product to the appropriate position in the result array.
    Handle any carry-over digits by dividing the sum by 10 
    and updating the next position in the result array.

?Remove leading zeros and reverse the result array:
    Check if the last element of the result array is 0.
    If it is, remove it by using the pop() method.
    Continue this process until the last element is not zero.
    Reverse the result array to obtain the correct order of digits.

?Convert the result array back to a string:
    Join the elements of the result array into a single string using the join() method.

?Return the resulting product as a string.

!steps in pseudocode:
function bigIntegerMultiplicationBruteForce(x, y):
    convert x and y to arrays of digits in reverse order
    initialize the result array with zeros

    for each digit in x:
        for each digit in y:
            multiply the corresponding digits and add the product to the result array
            handle any carry-over digits

    remove leading zeros and reverse the result array
    convert the result array to a string and return it

*/
function bigIntegerMultiplicationBruteForce(x, y) {
    var numDigitsX = x.length; // Number of digits in X
    var numDigitsY = y.length; // Number of digits in Y

    // Convert the input strings to arrays of digits (reversed order)
    var digitsX = x.split('').map(Number).reverse();
    var digitsY = y.split('').map(Number).reverse();

    // Initialize the result array with zeros
    var result = Array(numDigitsX + numDigitsY).fill(0);

    // Perform multiplication digit by digit
    for (var i = 0; i < numDigitsX; i++) {
        for (var j = 0; j < numDigitsY; j++) {
            result[i + j] += digitsX[i] * digitsY[j];
            //handles the carry-over digits from the previous step.
            //carry-over is calculated by dividing the sum at result[i + j] by 10 
            //and taking the floor value.
            result[i + j + 1] += Math.floor(result[i + j] / 10);
            result[i + j] %= 10;
        }
    }

    // Remove leading zeros and reverse the result array
    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop();
    }
    result.reverse();

    // Convert the result array back to a string
    var product = result.join('');

    return product;
}

// Example usage
var x = '123456789';
var y = '987654321';

var product = bigIntegerMultiplicationBruteForce(x, y);
console.log('X:', x);
console.log('Y:', y);
console.log('Product:', product);

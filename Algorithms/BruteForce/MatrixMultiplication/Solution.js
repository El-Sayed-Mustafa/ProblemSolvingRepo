/*
!Steps:

?Check the dimensions of the input matrices:
    Ensure that the number of columns in the first matrix (matrixA)
    is equal to the number of rows in the second matrix (matrixB).
    If not, the multiplication is not possible, 
    and an error can be displayed.

?Initialize the resulting matrix:
    Create an empty array, result, to store the resulting matrix.

?Perform matrix multiplication:
    Iterate through each row of matrixA.
    For each row in matrixA, iterate through each column of matrixB.
    Initialize the current element in the resulting matrix (result[i][j]) as 0.
    Iterate through each element in the corresponding row of matrixA 
    and the corresponding column of matrixB.
    Multiply the corresponding elements from matrixA 
    and matrixB and add the product to the current element in the resulting matrix.

?Return the resulting matrix:
    After performing all the multiplications and additions, return the resulting matrix.

*/


function matrixMultiplicationBruteForce(matrixA, matrixB) {
    var numRowsA = matrixA.length; // Number of rows in matrix A
    var numColsA = matrixA[0].length; // Number of columns in matrix A
    var numRowsB = matrixB.length; // Number of rows in matrix B
    var numColsB = matrixB[0].length; // Number of columns in matrix B

    if (numColsA !== numRowsB) {
        // Check if the matrices can be multiplied
        console.log('Error: The number of columns in matrix A must match the number of rows in matrix B.');
        return null;
    }

    var result = [];

    // Perform matrix multiplication
    for (var i = 0; i < numRowsA; i++) {
        result[i] = [];
        for (var j = 0; j < numColsB; j++) {
            result[i][j] = 0;
            for (var k = 0; k < numColsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Example usage
var matrixA = [[1, 2, 3], [4, 5, 6]]; // 2x3 matrix
var matrixB = [[7, 8], [9, 10], [11, 12]]; // 3x2 matrix

var result = matrixMultiplicationBruteForce(matrixA, matrixB);
console.log('Matrix A:', matrixA);
console.log('Matrix B:', matrixB);
console.log('Result:', result);

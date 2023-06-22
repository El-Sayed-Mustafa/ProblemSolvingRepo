
/* 

!𝒎𝟏 = 𝒂 × 𝒄, 𝒎𝟐 = 𝒃 × 𝒅, 𝒛 = (𝒂 + 𝒃) × (𝒄 + 𝒅)
!𝑟𝑒𝑠𝑢𝑙𝑡 = 10^𝑁 × 𝒎𝟐 + 10^𝑁/2 × (𝒛 − 𝒎𝟏 − 𝒎𝟐) + 𝒎1

!function karatsubaMultiply(X, Y):
    ?Base case: If either X or Y is a single-digit number, perform traditional multiplication
    if length(X) == 1 or length(Y) == 1:
        return traditionalMultiply(X, Y)

    ?Determine the length of the numbers and the midpoint
    N = max(length(X), length(Y))
    mid = N / 2

    ?Divide X and Y into high and low parts
    B = X[0:mid]
    A = X[mid:N]
    D = Y[0:mid]
    C = Y[mid:N]

    ?Recursively compute the three partial products
    𝒎𝟏 = karatsubaMultiply(A, C)
    𝒛 = karatsubaMultiply((A + B), (C + D))
    𝒎𝟐 = karatsubaMultiply(B, D)

    ?Compute the final result using the partial products
    term1 = 𝒎𝟐 * (10 ^ (2 * mid))
    term2 = (𝒛 - 𝒎𝟐 - 𝒎𝟏) * (10 ^ mid)
    result = term1 + term2 + 𝒎𝟏

    return result

!function traditionalMultiply(X, Y):
    ?Perform traditional multiplication algorithm
    result = [0] * (length(X) + length(Y))
    carry = 0

    for i = 0 to length(X) - 1:
        for j = 0 to length(Y) - 1:
            prod = X[i] * Y[j] + carry + result[i + j]
            result[i + j] = prod % 10
            carry = prod / 10

        result[i + length(Y)] += carry
        carry = 0

    return result

 */


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Problem
{

    public static class IntegerMultiplication
    {
        // Main function
        public static void Main()
        {
            byte[] X = { 2, 3, 4 }; // Example input X
            byte[] Y = { 5, 6, 7 }; // Example input Y
            int N = Math.Max(X.Length, Y.Length);

            byte[] result = IntegerMultiply(X, Y, N);

            Console.Write("Result: ");
            for (int i = result.Length - 1; i >= 0; i--)
            {
                Console.Write(result[i]);
            }
        }

        // This function multiplies two integers X and Y of length N
        static public byte[] IntegerMultiply(byte[] X, byte[] Y, int N)
        {
            // Ensure inputs have the same length
            EnsureEqualLength(ref X, ref Y);

            // Use Karatsuba multiplication algorithm for large inputs
            if (N > 32)
            {
                return KaratsubaMultiply(X, Y, N);
            }

            // Use traditional multiplication algorithm for small inputs
            return TraditionalMultiply(X, Y, N);
        }

        // This function multiplies two integers X and Y using the Karatsuba algorithm
        static private byte[] KaratsubaMultiply(byte[] X, byte[] Y, int N)
        {
            // Divide X and Y into XLeft, XRight, YLeft, and YRight
            int mid = N / 2;
            byte[] XLeft = X.Take(mid).ToArray();
            byte[] XRight = X.Skip(mid).ToArray();
            byte[] YLeft = Y.Take(mid).ToArray();
            byte[] YRight = Y.Skip(mid).ToArray();

            // Create tasks for computing Z0, Z1, and Z2
            var taskZ0 = Task.Run(() => IntegerMultiply(XLeft, YLeft, mid));
            var taskZ2 = Task.Run(() => IntegerMultiply(XRight, YRight, N - mid));
            var taskZ1 = Task.Run(() => ComputeZ1(XLeft, XRight, YLeft, YRight, taskZ0.Result, taskZ2.Result));

            // Wait for all tasks to complete
            Task.WaitAll(taskZ0, taskZ1, taskZ2);

            // Combine Z0, Z1, and Z2 into the final result
            return CombineResults(taskZ0.Result, taskZ1.Result, taskZ2.Result, mid);
        }

        // This function multiplies two integers X and Y using the traditional algorithm
        static private byte[] TraditionalMultiply(byte[] X, byte[] Y, int N)
        {
            byte[] result = new byte[2 * N];
            int carry = 0;
            for (int i = 0; i < N; i++)
            {
                for (int j = 0; j < N; j++)
                {
                    // Compute the product of X[i] and Y[j] and add it to the result
                    int prod = X[i] * Y[j] + carry + result[i + j];
                    result[i + j] = (byte)(prod % 10);
                    carry = prod / 10;
                }

                // Add any remaining carry to the next digit
                result[i + N] += (byte)carry;
                carry = 0;
            }
            return result;
        }

        // Compute the Z1 term in Karatsuba multiplication algorithm
        static private byte[] ComputeZ1(byte[] A, byte[] B, byte[] C, byte[] D, byte[] Z0, byte[] Z2)
        {
            // Compute the sum of A and B, and the sum of C and D
            byte[] sum1 = Add(A, B);
            byte[] sum2 = Add(C, D);

            // Ensure both sums have the same length
            EnsureEqualLength(ref sum1, ref sum2);

            // Compute the product of the two sums
            byte[] Z1 = IntegerMultiply(sum2, sum1, sum2.Length);

            // Subtract Z0 and Z2 from Z1 to get the final result
            Z1 = Subtract(Z1, Add(Z0, Z2));
            return Z1;
        }

        // Combine Z0, Z1, and Z2 to obtain the final result in Karatsuba multiplication algorithm
        static private byte[] CombineResults(byte[] Z0, byte[] Z1, byte[] Z2, int mid1)
        {
            // Create an array of length (2 * mid1 + length of Z2) to store Z2
            byte[] arr2 = new byte[(mid1 * 2) + Z2.Length];

            // Copy Z2 to the end of the array
            Array.Copy(Z2, 0, arr2, (mid1 * 2), Z2.Length);

            // Create an array of length (mid1 + length of Z1) to store Z1 - M1 - M2
            byte[] arr1 = new byte[mid1 + Z1.Length];
            Array.Copy(Z1, 0, arr1, mid1, Z1.Length);

            // Compute the final result as Z0 + (Z1 - M1 - M2) * 10^(mid1) + M2
            byte[] res = Add(arr2, Add(arr1, Z0));
            return res;
        }

        // Helper function to add two byte arrays
        static public byte[] Add(byte[] array1, byte[] array2)
        {
            // Ensure arrays have the same length
            EnsureEqualLength(ref array1, ref array2);

            int size = array1.Length;
            byte[] sumArray = new byte[size + 1];
            int carry = 0;


            int i;
            // Add corresponding digits of array1 and array2, with any carry-over
            for (i = 0; i < size; i++)
            {
                int sum = array1[i] + array2[i] + carry;
                sumArray[i] = (byte)(sum % 10);
                carry = sum / 10;
            }

            // If there is any remaining carry-over, add it to the last digit of the result
            if (carry != 0)
                sumArray[i] = (byte)carry;

            // Remove any leading zeros from the result
            int idx = sumArray.Length - 1;
            while (true)
            {
                if (sumArray[idx] != 0 || idx == 0)
                    break;
                idx--;
            }
            if (idx < 0) idx = 0;
            sumArray = ResizeArray(sumArray, idx + 1);

            return sumArray;
        }

        // Helper function to resize a byte array
        static byte[] ResizeArray(byte[] array, int size)
        {
            byte[] newArray = new byte[size];
            Buffer.BlockCopy(array, 0, newArray, 0, Math.Min(array.Length, size));
            return newArray;
        }

        // Helper function to subtract two byte arrays
        static private byte[] SubtractArrays(byte[] minuend, byte[] subtrahend)
        {
            int length = minuend.Length;
            byte[] result = new byte[length];
            for (int i = 0; i < length; i++)
            {
                // If the minuend is greater than or equal to the subtrahend, subtract them
                if (minuend[i] >= subtrahend[i])
                {
                    int disparity = minuend[i] - subtrahend[i];
                    result[i] = (byte)disparity;
                }
                // Otherwise, borrow from the next digit and subtract
                else
                {
                    BorrowFromNextDigit(minuend, i, length);
                    result[i] = (byte)((minuend[i] + 10) - subtrahend[i]);
                }
            }
            return result;
        }

        // Helper function to borrow from next digit if current digit is zero
        static private void BorrowFromNextDigit(byte[] array, int index, int length)
        {
            int position = index + 1;
            while (position < length)
            {
                // If the next digit is not zero, borrow from it and exit the loop
                if (array[position] != 0)
                {
                    array[position]--;
                    break;
                }
                // If the next digit is zero, set it to 9 and continue to the next digit
                else
                {
                    array[position] = 9;
                    position++;
                }
            }
        }

        // Subtract two byte arrays of potentially different lengths
        static public byte[] Subtract(byte[] X, byte[] Y)
        {
            // Ensure both arrays have the same length
            EnsureEqualLength(ref X, ref Y);

            // Call SubtractArrays function to perform the subtraction
            return SubtractArrays(X, Y);
        }

        // Ensure arrays have the same length
        static private void EnsureEqualLength(ref byte[] array1, ref byte[] array2)
        {
            if (array1.Length != array2.Length)
            {
                if (array1.Length > array2.Length)
                    array2 = ResizeArray(array2, array1.Length);
                else
                    array1 = ResizeArray(array1, array2.Length);
            }
        }
    }
}
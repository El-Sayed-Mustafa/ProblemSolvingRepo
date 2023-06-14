function stringMatchingBruteForce(pattern, text) {
    var m = pattern.length; // Length of the pattern
    var n = text.length; // Length of the text

    for (var i = 0; i <= n - m; i++) {
        // Loop through each possible starting position for the pattern in the text

        var j;
        for (j = 0; j < m; j++) {
            // Compare each character of the pattern with the corresponding character in the text

            if (text[i + j] !== pattern[j]) {
                // If a mismatch occurs, break the inner loop and shift the pattern by one position
                break;
            }
        }

        if (j === m) {
            // If the inner loop completes without a mismatch, a match is found
            return i; // Return the starting index of the matched substring
        }
    }

    // If no match is found, return -1
    return -1;
}

// Example usage
var pattern1 = '001011';
var text1 = '10010101101001100101111010';
var result1 = stringMatchingBruteForce(pattern1, text1);
console.log('Pattern:', pattern1);
console.log('Text:', text1);
console.log('Match Index:', result1);

var pattern2 = 'happy';
var text2 = 'It is never too late to have a happy childhood.';
var result2 = stringMatchingBruteForce(pattern2, text2);
console.log('Pattern:', pattern2);
console.log('Text:', text2);
console.log('Match Index:', result2);

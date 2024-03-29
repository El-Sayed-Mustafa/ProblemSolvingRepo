function calculateMouthfuls(N, C) {
    // Initialize a variable to track the total number of mouthfuls
    let track = 0;
    // Initialize a variable to determine the number of candy pieces per mouthful
    let i = 1;

    // Continue eating candy until there are no more pieces remaining
    while (N > 0) {
        for (let j = 0; j < C; j++) { // Eat C pieces per mouthful
            // If there are still pieces remaining, eat i pieces and increment the track
            if (N > 0) {
                N = N - i;
                track += 1;
            } else {
                break; // Break the inner loop if there are no more pieces remaining
            }
        }
        i = i * 2; // Double the number of candy pieces eaten per mouthful for the next iteration
    }

    return track; // Return the total number of mouthfuls taken
}

// Example usage:
const N = 10; // Number of candy pieces
const C = 5; // Count of pieces necessary for a sugar rush

const result = calculateMouthfuls(N, C); // Calculate the number of mouthfuls needed
console.log(`Number of mouthfuls: ${result}`); // Output the result

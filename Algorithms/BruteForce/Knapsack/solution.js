//! Function to calculate the maximum value the thief can obtain
//weights (an array of item weights),values (an array of item values), 
//and capacity (the maximum weight the thief can carry in the knapsack
function knapsackBruteForce(weights, values, capacity) {
    var numItems = weights.length;

    // Generate all possible combinations of items
    var combinations = getCombinations(numItems);

    var maxBenefit = 0;
    var maxCombination = [];

    // Iterate through each combination
    for (var i = 0; i < combinations.length; i++) {
        var combination = combinations[i];
        var totalWeight = 0;
        var totalValue = 0;

        // Calculate the total weight and value of the current combination
        for (var j = 0; j < numItems; j++) {
            if (combination[j] === 1) {
                totalWeight += weights[j];
                totalValue += values[j];
            }
        }

        // Check if the combination is feasible and has a higher value
        if (totalWeight <= capacity && totalValue > maxBenefit) {
            maxBenefit = totalValue;
            maxCombination = combination;
        }
    }

    return { maxBenefit: maxBenefit, maxCombination: maxCombination };
}

// Function to generate all possible combinations of items
function getCombinations(numItems) {
    var combinations = [];

    // Generate binary representations of numbers from 0 to 2^numItems - 1
    for (var i = 0; i < Math.pow(2, numItems); i++) {
        var binary = i.toString(2).padStart(numItems, '0');
        combinations.push(binary.split('').map(Number));
    }

    return combinations;
}

// Example usage
var weights = [2, 3, 4, 5];
var values = [3, 4, 5, 6];
var capacity = 5;

var result = knapsackBruteForce(weights, values, capacity);
console.log('Maximum Benefit:', result.maxBenefit);
console.log('Items:', result.maxCombination);

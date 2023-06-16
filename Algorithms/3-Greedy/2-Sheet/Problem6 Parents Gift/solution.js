function fillBasket(maxWeight, weights, prices) {
    const fruitCount = weights.length;
    const fruits = [];

    // Create an array of fruit objects with weights and prices
    for (let i = 0; i < fruitCount; i++) {
        fruits.push({ weight: weights[i], price: prices[i] });
    }

    // Sort the fruits in descending order of price per unit weight
    fruits.sort((a, b) => b.price / b.weight - a.price / a.weight);

    let totalPrice = 0;
    let currentWeight = 0;

    for (let i = 0; i < fruitCount; i++) {
        if (currentWeight + fruits[i].weight <= maxWeight) {
            // If adding the current fruit doesn't exceed the max weight, add it to the basket
            currentWeight += fruits[i].weight;
            totalPrice += fruits[i].price;
        } else {
            // If adding the current fruit exceeds the max weight, break the loop
            break;
        }
    }

    return totalPrice;
}

// Example usage:
const maxWeight = 10;
const weights = [3, 5, 2, 1];
const prices = [10, 20, 15, 5];

const maxTotalPrice = fillBasket(maxWeight, weights, prices);
console.log('Maximum total price:', maxTotalPrice);

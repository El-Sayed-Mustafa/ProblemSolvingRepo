function maximizeBenefit(items, W) {
    // Calculate cost per unit for each item
    for (let i = 0; i < items.length; i++) {
        items[i].costPerUnit = items[i].value / items[i].weight;
    }

    // Sort items by cost per unit in descending order
    items.sort((a, b) => b.costPerUnit - a.costPerUnit);

    let totalValue = 0;
    let currentWeight = 0;
    const knapsack = [];

    for (let i = 0; i < items.length; i++) {
        const { weight, value, costPerUnit } = items[i];

        if (weight <= W - currentWeight) {
            // Take the entire item
            knapsack.push(items[i]);
            currentWeight += weight;
            totalValue += value;
        } else {
            // Take a fraction of the item
            const fraction = (W - currentWeight) / weight;
            knapsack.push({
                weight: fraction * weight,
                value: fraction * value,
                costPerUnit: costPerUnit,
            });
            totalValue += fraction * value;
            break; // Knapsack is full, so break the loop
        }
    }

    return totalValue;
}

// Example usage:
const items = [
    { weight: 5, value: 50 },
    { weight: 10, value: 60 },
    { weight: 20, value: 140 },
    { weight: 30, value: 120 },
];

const knapsackCapacity = 50;

const maxBenefit = maximizeBenefit(items, knapsackCapacity);
console.log("Maximum benefit:", maxBenefit);

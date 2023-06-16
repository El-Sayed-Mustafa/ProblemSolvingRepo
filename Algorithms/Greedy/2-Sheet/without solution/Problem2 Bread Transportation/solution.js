function minimumWorkUnits(houses) {
    let workUnits = 0;
    let balance = 0;

    for (let i = 0; i < houses.length; i++) {
        balance += houses[i]; // Update the balance of bread supply and demand

        // Calculate the work units required for transporting bread
        if (balance < 0) {
            workUnits += Math.abs(balance);
        } else {
            workUnits += balance;
        }
    }

    return workUnits;
}

// Example 1
const houses1 = [5, -4, 1, -3, 1];
const minWorkUnits1 = minimumWorkUnits(houses1);
console.log('Minimum work units (Example 1):', minWorkUnits1); // Output: 9

// Example 2
const houses2 = [-1000, -1000, -1000, 1000, 1000, 1000];
const minWorkUnits2 = minimumWorkUnits(houses2);
console.log('Minimum work units (Example 2):', minWorkUnits2); // Output: 9000

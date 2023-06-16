function officeOrganization(N, M, A, B) {
    let cost = 0;

    while (N > M) {
        if (N / 2 * B <= A) {
            // Increment cost by 1, as reducing by one unit is cheaper
            cost++;
            // Reduce the number of documents by one unit
            N--;
        } else {
            // Increment cost by the cost of reducing documents by half (A)
            cost += A;
            // Reduce the number of documents by half (rounding down)
            N = Math.floor(N / 2);
        }
    }

    return cost;
}

// Example usage:
const N = 100;
const M = 5;
const A = 10;
const B = 1;
const minCost = officeOrganization(N, M, A, B);
console.log('Minimum cost:', minCost);

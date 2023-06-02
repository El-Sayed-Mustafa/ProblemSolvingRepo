/*
If the cost of reducing the documents by half (N / 2 * B) 
is less than or equal to the cost of reducing by half (A), 
then the cost is incremented by the cost of reducing the documents by half (N / 2 * B).

else the cost is incremented by the cost of reducing the documents by half (A).

*/

// Complexity: Log(N)

function officeOrganization(N, M, A, B) {

    cost = 0

    while (N > M) {
        if (N / 2 * B <= A) {
            cost += N / 2 * B
        } else {
            cost += A
        }
        N = N / 2
    }

    return cost

}


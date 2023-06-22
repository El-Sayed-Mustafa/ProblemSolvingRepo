function openBoxes(N, keys) {
    const parent = new Array(N + 1).fill(-1); // Create an array to store the parent box for each box
    parent[1] = 0; // Set the parent of the first box to 0 (no parent)

    const queue = []; // Create a queue to perform breadth-first search
    queue.push(1); // Add the first box to the queue
    let res = false; // Variable to track if the treasure box is found

    // Perform breadth-first search until the queue is empty or the treasure box is found
    while (queue.length > 0) {
        const k = queue.shift(); // Get the next box from the queue

        // Check each box that can be opened by the current key
        for (const box of keys[k - 1]) {
            if (parent[box] === -1) {
                parent[box] = k; // Set the parent of the box to the current key
                if (box === N) {
                    res = true; // Treasure box found
                    break;
                }
                queue.push(box); // Add the box to the queue for further exploration
            }
        }

        if (res) {
            break; // Exit the loop if the treasure box is found
        }
    }

    if (!res) {
        return -1; // Treasure box not found
    } else {
        let path = [];
        for (let i = parent[N]; i !== 0; i = parent[i]) {
            path.push(i); // Build the path from the treasure box to the first box
        }
        path.reverse(); // Reverse the path to get the order of boxes opened
        return path; // Return the path of boxes opened
    }
}

//!Read test cases only 
function findTreasure() {
    const results = [];

    // Test Case 1
    const N1 = 4;
    const keys1 = [
        [2, 2, 3],
        [1, 1],
        [2, 2, 4],
    ];

    results.push(openBoxes(N1, keys1));

    // Test Case 2
    const N2 = 3;
    const keys2 = [
        [1, 2],
        [1, 3],
    ];
    results.push(openBoxes(N2, keys2));

    for (const result of results) {
        if (result === -1) {
            console.log("NOT FOUND");
        } else {
            console.log(result.join(' '));
        }
        console.log();
    }
}

findTreasure();

function segmentTree(l, r, arr) {
    if (l > r) return 0;
    else if (l === r && arr[l] !== 0) return 1;
    else if (l === r && arr[l] === 0) return 0;

    let ans = r - l + 1;
    let mnIndex;
    let mx = Infinity;

    for (let i = l; i <= r; i++) {
        if (mx > arr[i]) {
            mx = arr[i];
            mnIndex = i;
        }
    }

    let mn = arr[mnIndex];

    for (let i = l; i <= r; i++) {
        arr[i] = arr[i] - mn;
    }

    let l1 = mnIndex - 1;
    let r1 = mnIndex + 1;

    ans = Math.min(
        ans,
        segmentTree(l, l1, arr) + segmentTree(r1, r, arr) + mn
    );

    return ans;
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter the number of planks: ', (n) => {
        rl.question('Enter the heights of the planks: ', (heights) => {
            const arr = heights.split(' ').map(Number);
            const result = segmentTree(0, n - 1, arr);
            console.log('Minimum number of strokes:', result);
            rl.close();
        });
    });
}

main();

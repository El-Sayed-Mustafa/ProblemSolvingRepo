function MaxSequenceSum(n, arr) {
    maxSoFar = 0
    curSum = 0
    for (i = 1; i < n; i++) {
        curSum += arr[i]
        if (curSum < 0)
            curSum = 0
        maxSoFar = max(maxSoFar, curSum)
    }

}
function highestIncreasePair(arr) {
    current = arr[0]
    max = NegativeInfinity

    for (var i = 1; i < arr.length; i++) {
        {
            diff = arr[i] - current

            if (arr[i] < current) {
                current = arr[i]
                continue
            }

            if (diff > max) {
                max = diff
            }
        }
    }
    return max
}